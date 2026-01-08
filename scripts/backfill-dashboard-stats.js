import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

// Firebase config – same as your app
const firebaseConfig = {
  apiKey: "AIzaSyCjA4ek_FRNB61JM7xrYAT3s1eoL94qhnE",
  authDomain: "studio-5063047183-aa053.firebaseapp.com",
  projectId: "studio-5063047183-aa053",
  storageBucket: "studio-5063047183-aa053.firebasestorage.app",
  messagingSenderId: "311176415853",
  appId: "1:311176415853:web:52798531c528415cf94d64",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function toDate(value) {
  if (!value) return null;
  // Firestore Timestamp
  if (typeof value.toDate === "function") {
    return value.toDate();
  }
  // ISO/string
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

function diffInDays(start, end) {
  if (!start || !end) return 0;
  const ms = end.getTime() - start.getTime();
  return Math.max(Math.round(ms / (1000 * 60 * 60 * 24)), 0);
}

function statusBucket(status) {
  switch (status) {
    case "New":
      return "New";
    case "In Discussion":
      return "Discussion";
    case "Negotiation":
      return "Negotiation";
    case "Closed - Won":
      return "Won";
    case "Closed - Lost":
      return "Lost";
    default:
      return null;
  }
}

function monthKeyFromDate(date) {
  if (!date) return null;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}-${String(month).padStart(2, "0")}`;
}

async function main() {
  console.log("🔧 Backfilling stats/dashboard from existing data...");

  const leadsSnap = await getDocs(collection(db, "leads"));
  const quotationsSnap = await getDocs(collection(db, "quotations"));
  const productsSnap = await getDocs(collection(db, "products"));

  const leads = leadsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
  const quotations = quotationsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
  const products = productsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));

  console.log(
    `📊 Loaded ${leads.length} leads, ${quotations.length} quotations, ${products.length} products`,
  );

  const totalLeads = leads.length;
  const totalQuotations = quotations.length;
  const totalProducts = products.length;

  const statusCounts = new Map();
  const sourceCounts = new Map();
  const productCounts = new Map();
  const monthCounts = new Map();

  let totalConversionDays = 0;
  let conversionSamples = 0;

  for (const lead of leads) {
    const bucket = statusBucket(lead.status);
    if (bucket) {
      statusCounts.set(bucket, (statusCounts.get(bucket) || 0) + 1);
    }

    const source = lead.source || "Unknown";
    sourceCounts.set(source, (sourceCounts.get(source) || 0) + 1);

    if (Array.isArray(lead.products)) {
      for (const lp of lead.products) {
        if (!lp || !lp.productId) continue;
        productCounts.set(lp.productId, (productCounts.get(lp.productId) || 0) + 1);
      }
    }

    if (lead.status === "Closed - Won") {
      const createdAt = toDate(lead.createdAt);
      if (createdAt) {
        let conversionDate = null;
        if (Array.isArray(lead.activities) && lead.activities.length > 0) {
          for (const act of lead.activities) {
            const actDate = toDate(act.date);
            if (!actDate) continue;
            if (!conversionDate || actDate > conversionDate) {
              conversionDate = actDate;
            }
          }
        }
        if (!conversionDate) conversionDate = createdAt;
        const days = diffInDays(createdAt, conversionDate);
        totalConversionDays += days;
        conversionSamples += 1;
      }
    }
  }

  for (const q of quotations) {
    const createdAt = toDate(q.createdAt || q.date);
    const key = monthKeyFromDate(createdAt);
    if (!key) continue;
    monthCounts.set(key, (monthCounts.get(key) || 0) + 1);
  }

  const statusBreakdown = [
    { name: "New", value: statusCounts.get("New") || 0 },
    { name: "Discussion", value: statusCounts.get("Discussion") || 0 },
    { name: "Negotiation", value: statusCounts.get("Negotiation") || 0 },
    { name: "Won", value: statusCounts.get("Won") || 0 },
    { name: "Lost", value: statusCounts.get("Lost") || 0 },
  ];

  const sourceDistribution = Array.from(sourceCounts.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  const productDemand = Array.from(productCounts.entries())
    .map(([productId, value]) => {
      const product = products.find((p) => p.id === productId);
      return {
        name: product?.name || "Unknown Product",
        value,
      };
    })
    .sort((a, b) => b.value - a.value);

  const quotationsByMonth = Array.from(monthCounts.entries())
    .map(([month, value]) => ({ month, value }))
    .sort((a, b) => (a.month < b.month ? -1 : a.month > b.month ? 1 : 0));

  const averageConversionTime =
    conversionSamples > 0
      ? Math.round(totalConversionDays / conversionSamples)
      : 0;

  const payload = {
    totalLeads,
    totalQuotations,
    totalProducts,
    statusBreakdown,
    sourceDistribution,
    productDemand,
    quotationsByMonth,
    averageConversionTime,
    totalConversionDays,
    conversionSamples,
  };

  console.log("📝 Writing stats/dashboard with:", JSON.stringify(payload, null, 2));

  await setDoc(doc(db, "stats", "dashboard"), payload, { merge: true });

  console.log("✅ stats/dashboard backfilled successfully");
}

main().catch((err) => {
  console.error("🔥 Backfill script crashed", err);
  process.exit(1);
});
