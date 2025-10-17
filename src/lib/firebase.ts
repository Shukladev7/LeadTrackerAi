// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjA4ek_FRNB61JM7xrYAT3s1eoL94qhnE",
  authDomain: "studio-5063047183-aa053.firebaseapp.com",
  projectId: "studio-5063047183-aa053",
  storageBucket: "studio-5063047183-aa053.firebasestorage.app",
  messagingSenderId: "311176415853",
  appId: "1:311176415853:web:52798531c528415cf94d64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Connect to emulators in development (optional)
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  // Only connect to emulators if they haven't been connected already
  try {
    // Uncomment these lines if you want to use Firebase emulators in development
    // connectFirestoreEmulator(db, 'localhost', 8080);
    // connectAuthEmulator(auth, 'http://localhost:9099');
    
    // Storage emulator disabled - using production Firebase Storage with CORS configured
    // connectStorageEmulator(storage, 'localhost', 9299);
    // console.log('Connected to Firebase Storage emulator');
  } catch (error) {
    console.log('Emulators already connected or not available');
  }
}

export default app;
