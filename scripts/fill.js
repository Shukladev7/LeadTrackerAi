import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

/* Firebase config – same as your app */
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

async function main() {
  console.log("🔧 Seeding quotation counters (multi-format)...");

  const snap = await getDocs(collection(db, "quotations"));
  console.log(`Found ${snap.size} quotations`);

  /**
   * counters key examples:
   *  NA
   *  NPE_2025-26
   */
  const counters = {};

  for (const quotationDoc of snap.docs) {
    const { quotationNumber } = quotationDoc.data();
    if (!quotationNumber || typeof quotationNumber !== "string") continue;

    let match;

    // FORMAT 1: PREFIX-XXXX   (NA-0072)
    match = quotationNumber.match(/^([A-Z]+)-(\d+)$/);
    if (match) {
      const prefix = match[1];
      const num = parseInt(match[2], 10);
      counters[prefix] = Math.max(counters[prefix] || 0, num);
      continue;
    }

    // FORMAT 2: PREFIXYYYY-YY-XXXX  (NPE2025-26-0001)
    match = quotationNumber.match(/^([A-Z]+)(\d{4}-\d{2})-(\d+)$/);
    if (match) {
      const prefix = match[1];
      const year = match[2];
      const num = parseInt(match[3], 10);
      const key = `${prefix}_${year}`;
      counters[key] = Math.max(counters[key] || 0, num);
    }
  }

  console.log("📊 Computed counters:", counters);

  for (const key of Object.keys(counters)) {
    await setDoc(
      doc(db, "quotationCounters", key),
      { current: counters[key] },
      { merge: true }
    );

    console.log(
      `✅ quotationCounters/${key} → current = ${counters[key]}`
    );
  }

  console.log("🎉 Done");
}

main().catch((err) => {
  console.error("🔥 Script crashed", err);
  process.exit(1);
});
