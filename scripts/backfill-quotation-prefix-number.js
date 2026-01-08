import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
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

function parseQuotationNumber(value) {
  if (!value || typeof value !== "string") return null;

  let match;

  // FORMAT 1: PREFIX-XXXX   (NA-0072)
  match = value.match(/^([A-Z]+)-(\d+)$/);
  if (match) {
    const prefix = match[1];
    const num = parseInt(match[2], 10);
    if (!Number.isNaN(num)) {
      return { prefix, number: num };
    }
  }

  // FORMAT 2: PREFIXYYYY-YY-XXXX  (NPE2025-26-0001)
  match = value.match(/^([A-Z]+)(\d{4}-\d{2})-(\d+)$/);
  if (match) {
    const base = match[1];
    const year = match[2];
    const num = parseInt(match[3], 10);
    if (!Number.isNaN(num)) {
      // Treat the full PREFIX+YEAR as the stored prefix, e.g. "NPE2025-26"
      const prefix = `${base}${year}`;
      return { prefix, number: num };
    }
  }

  return null;
}

async function main() {
  console.log("🔧 Backfilling prefix & number on quotations from quotationNumber...");

  const snap = await getDocs(collection(db, "quotations"));
  console.log(`Found ${snap.size} quotations`);

  let updated = 0;
  let alreadySet = 0;
  let missingNumber = 0;
  let unparseable = 0;

  for (const quotationDoc of snap.docs) {
    const data = quotationDoc.data();

    if (typeof data.prefix === "string" && typeof data.number === "number") {
      alreadySet++;
      continue;
    }

    const rawNumber = data.quotationNumber;
    if (!rawNumber || typeof rawNumber !== "string") {
      missingNumber++;
      console.warn(
        `Skipping ${quotationDoc.id}: no string quotationNumber field present`,
      );
      continue;
    }

    const parsed = parseQuotationNumber(rawNumber);
    if (!parsed) {
      unparseable++;
      console.warn(
        `Skipping ${quotationDoc.id}: could not parse quotationNumber "${rawNumber}"`,
      );
      continue;
    }

    const ref = doc(db, "quotations", quotationDoc.id);
    await updateDoc(ref, {
      prefix: parsed.prefix,
      number: parsed.number,
    });

    updated++;
    console.log(
      `✅ Updated ${quotationDoc.id}: prefix=${parsed.prefix}, number=${parsed.number}`,
    );
  }

  console.log("\n📊 Backfill completed:");
  console.log(`  Updated documents:   ${updated}`);
  console.log(`  Already populated:   ${alreadySet}`);
  console.log(`  Missing number:      ${missingNumber}`);
  console.log(`  Unparseable format:  ${unparseable}`);
}

main().catch((err) => {
  console.error("🔥 Backfill quotation prefix/number script crashed", err);
  process.exit(1);
});
