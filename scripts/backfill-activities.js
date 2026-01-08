import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

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
  if (!value) return new Date();
  if (typeof value.toDate === "function") {
    return value.toDate();
  }
  const d = new Date(value);
  return isNaN(d.getTime()) ? new Date() : d;
}

async function main() {
  console.log("🔧 Backfilling activities collection from embedded lead.activities...");

  const leadsSnap = await getDocs(collection(db, "leads"));
  console.log(`Found ${leadsSnap.size} leads`);

  const activitiesRef = collection(db, "activities");
  let created = 0;

  for (const leadDoc of leadsSnap.docs) {
    const leadData = leadDoc.data();
    const leadId = leadDoc.id;

    if (!Array.isArray(leadData.activities)) continue;

    const leadName = leadData.name || "";
    const leadCompany = leadData.company || "";

    for (const act of leadData.activities) {
      if (!act) continue;

      const payload = {
        type: act.type || "Other",
        date: toDate(act.date),
        lead: {
          id: leadId,
          name: leadName,
          company: leadCompany,
        },
      };

      // only add notes if valid
      if (typeof act.notes === "string" && act.notes.trim() !== "") {
        payload.notes = act.notes;
      }

      await addDoc(activitiesRef, payload);
      created++;
    }
  }

  console.log(`✅ Backfill complete. Created ${created} activity documents.`);
}

main().catch((err) => {
  console.error("🔥 Backfill activities script crashed", err);
  process.exit(1);
});
