import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  getBytes,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import sharp from "sharp";

/* ================================
   Firebase Client Config
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
const storage = getStorage(app);

/* ================================
   Main Logic
   ================================ */
async function main() {
  const snap = await getDocs(collection(db, "products"));
  console.log(`Found ${snap.size} products`);

  let processed = 0;
  let skipped = 0;
  let failed = 0;

  for (const productDoc of snap.docs) {
    const data = productDoc.data();

    const hasOriginal = !!data?.productImage?.filePath;
    const hasThumb = !!data?.thumbnailImage?.filePath;

    if (!hasOriginal || hasThumb) {
      skipped++;
      continue;
    }

    const originalPath = data.productImage.filePath;
    const originalName =
      data.productImage.fileName ||
      originalPath.split("/").pop() ||
      `product-${productDoc.id}.jpg`;

    console.log(`🔄 Processing ${productDoc.id} (${originalName})`);

    try {
      /* 1️⃣ Download original image */
      const originalRef = ref(storage, originalPath);
      const buffer = await getBytes(originalRef);

      /* 2️⃣ Create thumbnail (LOW-RES) */
      const thumbBuffer = await sharp(buffer)
        .resize({
          width: 220,
          withoutEnlargement: true,
        })
        .jpeg({
          quality: 35,
          mozjpeg: true,
        })
        .toBuffer();

      /* 3️⃣ Upload thumbnail */
      const safeBase = originalName.replace(/\.[^/.]+$/, "");
      const thumbPath = `thumbnails/thumb-${safeBase}-${productDoc.id}.jpg`;
      const thumbRef = ref(storage, thumbPath);

      await uploadBytes(thumbRef, thumbBuffer, {
        contentType: "image/jpeg",
      });

      /* 4️⃣ Get public URL */
      const thumbUrl = await getDownloadURL(thumbRef);

      /* 5️⃣ Update Firestore */
      await updateDoc(doc(db, "products", productDoc.id), {
        thumbnailImage: {
          url: thumbUrl,
          fileName: thumbPath.split("/").pop(),
          filePath: thumbPath,
          uploadedAt: new Date().toISOString(),
        },
      });

      processed++;
      console.log(`✅ Thumbnail created for ${productDoc.id}`);
    } catch (err) {
      failed++;
      console.error(`❌ Failed for ${productDoc.id}`, err);
    }
  }

  console.log("🎉 Done");
  console.log({
    processed,
    skipped,
    failed,
  });
}

/* ================================
   Run
   ================================ */
main().catch((err) => {
  console.error("🔥 Script crashed", err);
  process.exit(1);
});
