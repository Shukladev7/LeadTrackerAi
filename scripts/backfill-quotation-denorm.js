import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

/* ================================
   Firebase Client Config
   (same project as the main app)
   ================================ */
const firebaseConfig = {
  apiKey: "AIzaSyCjA4ek_FRNB61JM7xrYAT3s1eoL94qhnE",
  authDomain: "studio-5063047183-aa053.firebaseapp.com",
  projectId: "studio-5063047183-aa053",
  storageBucket: "studio-5063047183-aa053.firebasestorage.app",
  messagingSenderId: "311176415853",
  appId: "1:311176415853:web:52798531c528415cf94d64",
};

/* ================================
   Init Firebase
   ================================ */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ================================
   Helper: build searchIndex
   Mirrors the logic in buildQuotationSearchIndex on the server.
   ================================ */
function buildSearchIndex(quotation, lead) {
  try {
    const parts = [];

    if (quotation.quotationNumber) parts.push(String(quotation.quotationNumber));

    const leadName = lead?.name || quotation.leadName;
    const leadCompany = lead?.company || quotation.leadCompany;

    if (leadName) parts.push(String(leadName));
    if (leadCompany) parts.push(String(leadCompany));

    if (quotation.status) parts.push(String(quotation.status));
    if (quotation.companyName) parts.push(String(quotation.companyName));

    if (Array.isArray(quotation.products)) {
      const productText = quotation.products
        .map((p) => (p && (p.name || p.description || "")) || "")
        .join(" ");
      if (productText) parts.push(productText);
    }

    return parts
      .join(" ")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  } catch (e) {
    console.error("Failed to build searchIndex", e);
    return "";
  }
}

function buildSearchTokens(quotation, lead) {
  try {
    const rawTokens = [];

    // Always include full quotation number as its own token if present
    if (quotation.quotationNumber) {
      rawTokens.push(String(quotation.quotationNumber).toLowerCase());
    }

    const text = buildSearchIndex(quotation, lead);
    if (text) {
      rawTokens.push(
        ...text
          .toLowerCase()
          .split(/[^a-z0-9]+/i)
          .filter(Boolean),
      );
    }

    const unique = Array.from(new Set(rawTokens));
    return unique;
  } catch (e) {
    console.error("Failed to build searchTokens", e);
    return [];
  }
}

/* ================================
   Main Logic
   ================================ */
async function main() {
  const snap = await getDocs(collection(db, "quotations"));
  console.log(`Found ${snap.size} quotations`);

  let processed = 0;
  let skipped = 0;
  let failed = 0;

  for (const quotationDoc of snap.docs) {
    const data = quotationDoc.data();
    const id = quotationDoc.id;

    // If there is no leadId, we can't denormalize
    if (!data.leadId) {
      console.log(`Skipping ${id} (no leadId)`);
      skipped++;
      continue;
    }

    try {
      const leadRef = doc(db, "leads", String(data.leadId));
      const leadSnap = await getDoc(leadRef);
      const lead = leadSnap.exists() ? leadSnap.data() : null;

      const leadName = lead?.name || data.leadName || null;
      const leadCompany = lead?.company || data.leadCompany || null;

      const searchIndex = buildSearchIndex(
        { ...data, leadName, leadCompany },
        lead,
      );

      const searchTokens = buildSearchTokens(
        { ...data, leadName, leadCompany },
        lead,
      );

      const payload = {
        leadName,
        leadCompany,
        searchIndex: searchIndex || null,
        searchTokens: searchTokens.length ? searchTokens : null,
      };

      await updateDoc(quotationDoc.ref, payload);

      processed++;
      console.log(`✅ Updated quotation ${id}`);
    } catch (err) {
      failed++;
      console.error(`❌ Failed for quotation ${id}`, err);
    }
  }

  console.log("🎉 Done");
  console.log({ processed, skipped, failed });
}

/* ================================
   Run
   ================================ */
main().catch((err) => {
  console.error("🔥 Script crashed", err);
  process.exit(1);
});
