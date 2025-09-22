(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/firebase.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Import the functions you need from the SDKs you need
__turbopack_context__.s({
    "auth": (()=>auth),
    "db": (()=>db),
    "default": (()=>__TURBOPACK__default__export__),
    "storage": (()=>storage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm2017/index-8e6e89cb.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
;
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
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8e6e89cb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
// Connect to emulators in development (optional)
if ("TURBOPACK compile-time truthy", 1) {
    // Only connect to emulators if they haven't been connected already
    try {
    // Uncomment these lines if you want to use Firebase emulators in development
    // connectFirestoreEmulator(db, 'localhost', 8080);
    // connectAuthEmulator(auth, 'http://localhost:9099');
    // connectStorageEmulator(storage, 'localhost', 9199);
    } catch (error) {
        console.log('Emulators already connected or not available');
    }
}
const __TURBOPACK__default__export__ = app;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/firestore-service.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FirestoreService": (()=>FirestoreService),
    "createTimestamp": (()=>createTimestamp),
    "formatTimestamp": (()=>formatTimestamp),
    "serverTime": (()=>serverTime),
    "timestampToDate": (()=>timestampToDate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
;
;
class FirestoreService {
    collectionName;
    constructor(collectionName){
        this.collectionName = collectionName;
    }
    /**
   * Create a new document
   */ async create(data) {
        try {
            const docData = {
                ...data,
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            };
            const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName), docData);
            return docRef.id;
        } catch (error) {
            console.error(`Error creating document in ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Create a document with a specific ID
   */ async createWithId(id, data) {
        try {
            const docData = {
                ...data,
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            };
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, docData);
        } catch (error) {
            console.error(`Error creating document with ID ${id} in ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Get a document by ID
   */ async getById(id) {
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
            if (docSnap.exists()) {
                return {
                    id: docSnap.id,
                    ...docSnap.data()
                };
            }
            return null;
        } catch (error) {
            console.error(`Error getting document ${id} from ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Get all documents
   */ async getAll() {
        try {
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName));
            return querySnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
        } catch (error) {
            console.error(`Error getting all documents from ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Get documents with query options
   */ async getWithQuery(options = {}) {
        try {
            let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName);
            // Apply where conditions
            if (options.where) {
                options.where.forEach((condition)=>{
                    q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])(condition.field, condition.operator, condition.value));
                });
            }
            // Apply ordering
            if (options.orderBy) {
                q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])(options.orderBy.field, options.orderBy.direction));
            }
            // Apply limit
            if (options.limit) {
                q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(options.limit));
            }
            // Apply pagination
            if (options.startAfter) {
                q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAfter"])(options.startAfter));
            }
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            return querySnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
        } catch (error) {
            console.error(`Error querying documents from ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Get paginated results
   */ async getPaginated(options) {
        try {
            const queryOptions = {
                ...options,
                limit: options.pageSize
            };
            const documents = await this.getWithQuery(queryOptions);
            const hasMore = documents.length === options.pageSize;
            const lastDoc = documents.length > 0 ? documents[documents.length - 1] : undefined;
            return {
                data: documents,
                hasMore,
                lastDoc
            };
        } catch (error) {
            console.error(`Error getting paginated documents from ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Update a document
   */ async update(id, data) {
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
            const updateData = {
                ...data,
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, updateData);
        } catch (error) {
            console.error(`Error updating document ${id} in ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Delete a document
   */ async delete(id) {
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(docRef);
        } catch (error) {
            console.error(`Error deleting document ${id} from ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Delete multiple documents
   */ async deleteMultiple(ids) {
        try {
            const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
            ids.forEach((id)=>{
                const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
                batch.delete(docRef);
            });
            await batch.commit();
        } catch (error) {
            console.error(`Error deleting multiple documents from ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Listen to real-time updates for a document
   */ onDocumentSnapshot(id, callback) {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(docRef, (docSnap)=>{
            if (docSnap.exists()) {
                const document = {
                    id: docSnap.id,
                    ...docSnap.data()
                };
                callback(document);
            } else {
                callback(null);
            }
        }, (error)=>{
            console.error(`Error listening to document ${id} in ${this.collectionName}:`, error);
        });
    }
    /**
   * Listen to real-time updates for a collection
   */ onCollectionSnapshot(options = {}, callback) {
        let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName);
        // Apply query options (similar to getWithQuery)
        if (options.where) {
            options.where.forEach((condition)=>{
                q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])(condition.field, condition.operator, condition.value));
            });
        }
        if (options.orderBy) {
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])(options.orderBy.field, options.orderBy.direction));
        }
        if (options.limit) {
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(options.limit));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (querySnapshot)=>{
            const documents = querySnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            callback(documents);
        }, (error)=>{
            console.error(`Error listening to collection ${this.collectionName}:`, error);
        });
    }
    /**
   * Batch write operations
   */ async batchWrite(operations) {
        try {
            const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
            operations.forEach((operation)=>{
                switch(operation.type){
                    case 'create':
                        if (operation.id && operation.data) {
                            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName, operation.id);
                            batch.set(docRef, {
                                ...operation.data,
                                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                            });
                        }
                        break;
                    case 'update':
                        if (operation.id && operation.data) {
                            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName, operation.id);
                            batch.update(docRef, {
                                ...operation.data,
                                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                            });
                        }
                        break;
                    case 'delete':
                        if (operation.id) {
                            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName, operation.id);
                            batch.delete(docRef);
                        }
                        break;
                }
            });
            await batch.commit();
        } catch (error) {
            console.error(`Error performing batch operations on ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Transaction example
   */ async runTransaction(updateFunction) {
        try {
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runTransaction"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], updateFunction);
        } catch (error) {
            console.error(`Error running transaction on ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Count documents (Note: This is an expensive operation for large collections)
   */ async count(options = {}) {
        try {
            const documents = await this.getWithQuery(options);
            return documents.length;
        } catch (error) {
            console.error(`Error counting documents in ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Check if document exists
   */ async exists(id) {
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
            return docSnap.exists();
        } catch (error) {
            console.error(`Error checking if document ${id} exists in ${this.collectionName}:`, error);
            throw error;
        }
    }
}
const createTimestamp = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now();
const serverTime = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])();
const timestampToDate = (timestamp)=>{
    return timestamp.toDate();
};
const formatTimestamp = (timestamp, locale = 'en-US')=>{
    return timestamp.toDate().toLocaleDateString(locale);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/business-types.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "COLLECTIONS": (()=>COLLECTIONS)
});
const COLLECTIONS = {
    EMPLOYEES: 'employees',
    DEPARTMENTS: 'departments',
    EMPLOYEE_ROLES: 'employeeRoles',
    LEAD_SOURCES: 'leadSources',
    PRODUCTS: 'products',
    LEADS: 'leads',
    QUOTATIONS: 'quotations',
    QUOTATION_TEMPLATES: 'quotationTemplates',
    CUSTOMERS: 'customers',
    ORDERS: 'orders',
    INVOICES: 'invoices',
    PAYMENTS: 'payments',
    TASKS: 'tasks',
    COMPANY_SETTINGS: 'companySettings',
    NOTIFICATIONS: 'notifications',
    ACTIVITY_LOGS: 'activityLogs'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/business-services.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CustomerService": (()=>CustomerService),
    "EmployeeService": (()=>EmployeeService),
    "LeadService": (()=>LeadService),
    "OrderService": (()=>OrderService),
    "ProductService": (()=>ProductService),
    "QuotationService": (()=>QuotationService),
    "TaskService": (()=>TaskService),
    "activityLogsService": (()=>activityLogsService),
    "companySettingsService": (()=>companySettingsService),
    "customerService": (()=>customerService),
    "customersService": (()=>customersService),
    "departmentsService": (()=>departmentsService),
    "employeeRolesService": (()=>employeeRolesService),
    "employeeService": (()=>employeeService),
    "employeesService": (()=>employeesService),
    "invoicesService": (()=>invoicesService),
    "leadService": (()=>leadService),
    "leadSourcesService": (()=>leadSourcesService),
    "leadsService": (()=>leadsService),
    "notificationsService": (()=>notificationsService),
    "orderService": (()=>orderService),
    "ordersService": (()=>ordersService),
    "paymentsService": (()=>paymentsService),
    "productService": (()=>productService),
    "productsService": (()=>productsService),
    "quotationService": (()=>quotationService),
    "quotationTemplatesService": (()=>quotationTemplatesService),
    "quotationsService": (()=>quotationsService),
    "taskService": (()=>taskService),
    "tasksService": (()=>tasksService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-types.ts [app-client] (ecmascript)");
;
;
const employeesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].EMPLOYEES);
const departmentsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].DEPARTMENTS);
const employeeRolesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].EMPLOYEE_ROLES);
const leadSourcesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].LEAD_SOURCES);
const productsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].PRODUCTS);
const leadsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].LEADS);
const quotationsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].QUOTATIONS);
const quotationTemplatesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].QUOTATION_TEMPLATES);
const customersService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].CUSTOMERS);
const ordersService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ORDERS);
const invoicesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].INVOICES);
const paymentsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].PAYMENTS);
const tasksService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].TASKS);
const companySettingsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].COMPANY_SETTINGS);
const notificationsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].NOTIFICATIONS);
const activityLogsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ACTIVITY_LOGS);
class EmployeeService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].EMPLOYEES);
    }
    async getEmployeeByEmail(email) {
        const employees = await this.getWithQuery({
            where: [
                {
                    field: 'email',
                    operator: '==',
                    value: email
                }
            ],
            limit: 1
        });
        return employees.length > 0 ? employees[0] : null;
    }
    async getEmployeesByDepartment(department) {
        return this.getWithQuery({
            where: [
                {
                    field: 'department',
                    operator: '==',
                    value: department
                }
            ],
            orderBy: {
                field: 'name',
                direction: 'asc'
            }
        });
    }
    async getEmployeesByRole(role) {
        return this.getWithQuery({
            where: [
                {
                    field: 'role',
                    operator: '==',
                    value: role
                }
            ],
            orderBy: {
                field: 'name',
                direction: 'asc'
            }
        });
    }
    async getActiveEmployees() {
        return this.getWithQuery({
            where: [
                {
                    field: 'isActive',
                    operator: '==',
                    value: true
                }
            ],
            orderBy: {
                field: 'name',
                direction: 'asc'
            }
        });
    }
}
class LeadService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].LEADS);
    }
    async getLeadsByStatus(status) {
        return this.getWithQuery({
            where: [
                {
                    field: 'status',
                    operator: '==',
                    value: status
                }
            ],
            orderBy: {
                field: 'createdAt',
                direction: 'desc'
            }
        });
    }
    async getLeadsBySource(source) {
        return this.getWithQuery({
            where: [
                {
                    field: 'source',
                    operator: '==',
                    value: source
                }
            ],
            orderBy: {
                field: 'createdAt',
                direction: 'desc'
            }
        });
    }
    async getLeadsByAssignee(assignedTo) {
        return this.getWithQuery({
            where: [
                {
                    field: 'assignedTo',
                    operator: '==',
                    value: assignedTo
                }
            ],
            orderBy: {
                field: 'createdAt',
                direction: 'desc'
            }
        });
    }
    async getRecentLeads(limit = 10) {
        return this.getWithQuery({
            orderBy: {
                field: 'createdAt',
                direction: 'desc'
            },
            limit
        });
    }
    async addActivity(leadId, activity) {
        const lead = await this.getById(leadId);
        if (lead) {
            const newActivity = {
                ...activity,
                id: `act-${leadId}-${Date.now()}`
            };
            const updatedActivities = [
                ...lead.activities || [],
                newActivity
            ];
            await this.update(leadId, {
                activities: updatedActivities
            });
        }
    }
    async updateStatus(leadId, status, notes) {
        await this.update(leadId, {
            status
        });
        if (notes) {
            await this.addActivity(leadId, {
                date: new Date().toISOString(),
                type: 'Other',
                notes: `Status changed to ${status}. ${notes}`
            });
        }
    }
}
class ProductService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].PRODUCTS);
    }
    async getActiveProducts() {
        return this.getWithQuery({
            where: [
                {
                    field: 'isActive',
                    operator: '==',
                    value: true
                }
            ],
            orderBy: {
                field: 'name',
                direction: 'asc'
            }
        });
    }
    async getProductsByCategory(category) {
        return this.getWithQuery({
            where: [
                {
                    field: 'category',
                    operator: '==',
                    value: category
                }
            ],
            orderBy: {
                field: 'name',
                direction: 'asc'
            }
        });
    }
    async getLowStockProducts() {
        const products = await this.getAll();
        return products.filter((product)=>product.stockQuantity !== undefined && product.minStockLevel !== undefined && product.stockQuantity <= product.minStockLevel);
    }
    async updateStock(productId, quantity) {
        await this.update(productId, {
            stockQuantity: quantity
        });
    }
    async searchProducts(searchTerm) {
        const products = await this.getActiveProducts();
        return products.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()) || product.tags && product.tags.some((tag)=>tag.toLowerCase().includes(searchTerm.toLowerCase())));
    }
}
class QuotationService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].QUOTATIONS);
    }
    async getQuotationsByLead(leadId) {
        return this.getWithQuery({
            where: [
                {
                    field: 'leadId',
                    operator: '==',
                    value: leadId
                }
            ],
            orderBy: {
                field: 'createdAt',
                direction: 'desc'
            }
        });
    }
    async getQuotationsByStatus(status) {
        return this.getWithQuery({
            where: [
                {
                    field: 'status',
                    operator: '==',
                    value: status
                }
            ],
            orderBy: {
                field: 'createdAt',
                direction: 'desc'
            }
        });
    }
    async getRecentQuotations(limit = 10) {
        return this.getWithQuery({
            orderBy: {
                field: 'createdAt',
                direction: 'desc'
            },
            limit
        });
    }
    async generateQuotationNumber() {
        const quotations = await this.getAll();
        const maxNumber = quotations.reduce((max, quotation)=>{
            const match = quotation.quotationNumber.match(/QUO-(\d+)/);
            if (match) {
                const num = parseInt(match[1]);
                return num > max ? num : max;
            }
            return max;
        }, 0);
        return `QUO-${String(maxNumber + 1).padStart(4, '0')}`;
    }
    async markAsSent(quotationId) {
        await this.update(quotationId, {
            status: 'Sent',
            sentAt: new Date().toISOString()
        });
    }
    async markAsAccepted(quotationId) {
        await this.update(quotationId, {
            status: 'Accepted',
            acceptedAt: new Date().toISOString()
        });
    }
}
class CustomerService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].CUSTOMERS);
    }
    async getCustomerByEmail(email) {
        const customers = await this.getWithQuery({
            where: [
                {
                    field: 'email',
                    operator: '==',
                    value: email
                }
            ],
            limit: 1
        });
        return customers.length > 0 ? customers[0] : null;
    }
    async getActiveCustomers() {
        return this.getWithQuery({
            where: [
                {
                    field: 'status',
                    operator: '==',
                    value: 'Active'
                }
            ],
            orderBy: {
                field: 'name',
                direction: 'asc'
            }
        });
    }
    async getTopCustomers(limit = 10) {
        return this.getWithQuery({
            where: [
                {
                    field: 'status',
                    operator: '==',
                    value: 'Active'
                }
            ],
            orderBy: {
                field: 'totalValue',
                direction: 'desc'
            },
            limit
        });
    }
    async createFromLead(lead) {
        const customer = {
            name: lead.name,
            company: lead.company,
            email: lead.email,
            phone: lead.phone,
            whatsappNumber: lead.whatsappNumber,
            leadId: lead.id,
            status: 'Active',
            totalValue: 0
        };
        return this.create(customer);
    }
}
class OrderService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ORDERS);
    }
    async getOrdersByCustomer(customerId) {
        return this.getWithQuery({
            where: [
                {
                    field: 'customerId',
                    operator: '==',
                    value: customerId
                }
            ],
            orderBy: {
                field: 'orderDate',
                direction: 'desc'
            }
        });
    }
    async getOrdersByStatus(status) {
        return this.getWithQuery({
            where: [
                {
                    field: 'status',
                    operator: '==',
                    value: status
                }
            ],
            orderBy: {
                field: 'orderDate',
                direction: 'desc'
            }
        });
    }
    async getRecentOrders(limit = 10) {
        return this.getWithQuery({
            orderBy: {
                field: 'orderDate',
                direction: 'desc'
            },
            limit
        });
    }
    async generateOrderNumber() {
        const orders = await this.getAll();
        const maxNumber = orders.reduce((max, order)=>{
            const match = order.orderNumber.match(/ORD-(\d+)/);
            if (match) {
                const num = parseInt(match[1]);
                return num > max ? num : max;
            }
            return max;
        }, 0);
        return `ORD-${String(maxNumber + 1).padStart(4, '0')}`;
    }
    async updateStatus(orderId, status) {
        const updateData = {
            status
        };
        if (status === 'Delivered') {
            updateData.actualDeliveryDate = new Date().toISOString();
        }
        await this.update(orderId, updateData);
    }
}
class TaskService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].TASKS);
    }
    async getTasksByAssignee(assignedTo) {
        return this.getWithQuery({
            where: [
                {
                    field: 'assignedTo',
                    operator: '==',
                    value: assignedTo
                }
            ],
            orderBy: {
                field: 'dueDate',
                direction: 'asc'
            }
        });
    }
    async getTasksByStatus(status) {
        return this.getWithQuery({
            where: [
                {
                    field: 'status',
                    operator: '==',
                    value: status
                }
            ],
            orderBy: {
                field: 'dueDate',
                direction: 'asc'
            }
        });
    }
    async getOverdueTasks() {
        const now = new Date().toISOString();
        const tasks = await this.getWithQuery({
            where: [
                {
                    field: 'status',
                    operator: '!=',
                    value: 'Done'
                },
                {
                    field: 'status',
                    operator: '!=',
                    value: 'Cancelled'
                }
            ]
        });
        return tasks.filter((task)=>task.dueDate && task.dueDate < now);
    }
    async markAsCompleted(taskId) {
        await this.update(taskId, {
            status: 'Done',
            completedAt: new Date().toISOString()
        });
    }
}
const employeeService = new EmployeeService();
const leadService = new LeadService();
const productService = new ProductService();
const quotationService = new QuotationService();
const customerService = new CustomerService();
const orderService = new OrderService();
const taskService = new TaskService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data/employees.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"name\":\"Gaurav Shukla44\",\"email\":\"gouravshukla337@gmail.com\",\"phone\":\"07024474517\",\"role\":\"Admin\",\"department\":\"Marketing\",\"address\":\"3 Hostel Road Maulana Azad National Institute of Technology\",\"id\":\"emp-1758387353941\",\"createdAt\":\"2025-09-20T16:55:53.941Z\"},{\"name\":\"Gaurav Shukla\",\"email\":\"gouravshukla337@gmail.com\",\"phone\":\"7024474517\",\"role\":\"Admin\",\"department\":\"Engineering\",\"address\":\"3 Hostel Road Maulana Azad National Institute of Technology\",\"id\":\"emp-1758386000663\",\"createdAt\":\"2025-09-20T16:33:20.664Z\"}]"));}}),
"[project]/src/lib/data/departments.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":\"dept-1\",\"name\":\"Sales\"},{\"id\":\"dept-2\",\"name\":\"Marketing\"},{\"id\":\"dept-3\",\"name\":\"Engineering\"},{\"id\":\"dept-4\",\"name\":\"Human Resources\"}]"));}}),
"[project]/src/lib/data/employee-roles.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":\"role-1\",\"name\":\"Admin\"},{\"id\":\"role-2\",\"name\":\"Sales\"},{\"id\":\"role-3\",\"name\":\"Manager\"},{\"id\":\"role-1757768057725\",\"name\":\"CEO\"}]"));}}),
"[project]/src/lib/data/lead-sources.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":\"source-1757920420209\",\"name\":\"IndiaMart\"},{\"id\":\"source-1\",\"name\":\"Website\"},{\"id\":\"source-2\",\"name\":\"Referral\"},{\"id\":\"source-3\",\"name\":\"Conference\"},{\"id\":\"source-4\",\"name\":\"Social Media\"}]"));}}),
"[project]/src/lib/data/products.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":\"prod-1\",\"name\":\"Basic Website Package\",\"description\":\"A professional 5-page website.\",\"price\":2500,\"gstRate\":18,\"skus\":[\"S\",\"M\",\"L\",\"XL\",\"2XL\"],\"catalogueUrl\":\"\"},{\"id\":\"prod-2\",\"name\":\"E-commerce Store\",\"description\":\"A full-featured online store with payment gateway.\",\"price\":7500,\"gstRate\":18},{\"id\":\"prod-3\",\"name\":\"SEO & Marketing Plan\",\"description\":\"Monthly SEO and content marketing services.\",\"price\":1200,\"gstRate\":12},{\"id\":\"prod-4\",\"name\":\"Custom Web Application\",\"description\":\"A bespoke web application tailored to your needs.\",\"price\":20000,\"gstRate\":18}]"));}}),
"[project]/src/lib/data/leads.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"name\":\"yuiop\",\"company\":\"hjkl\",\"email\":\"gourav20042005@gmail.com\",\"phone\":\"7024474517\",\"whatsappNumber\":\"7777777777\",\"status\":\"New\",\"source\":\"Website\",\"products\":[{\"productId\":\"prod-4\",\"quantity\":1,\"rate\":20000}],\"id\":\"lead-1758385443736\",\"createdAt\":\"2025-09-20T16:24:03.736Z\",\"activities\":[{\"id\":\"act-lead-1758385443736-1\",\"date\":\"2025-09-20T16:24:03.736Z\",\"type\":\"Email\",\"notes\":\"Lead created in the system. Initial notes: hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello \"}]},{\"name\":\"Rithesh\",\"company\":\"Startrek\",\"email\":\"rithesh@startrek.com\",\"phone\":\"9723604009\",\"whatsappNumber\":\"9723604009\",\"status\":\"In Discussion\",\"source\":\"IndiaMart\",\"products\":[{\"productId\":\"prod-4\",\"quantity\":1,\"rate\":20000}],\"id\":\"lead-1758266390525\",\"createdAt\":\"2025-09-19T07:19:50.525Z\",\"activities\":[{\"type\":\"Proposal Sent\",\"notes\":\"Quotation QUO-0004 was created and sent.\",\"id\":\"act-lead-1758266390525-5\",\"date\":\"2025-09-19T07:24:19.004Z\"},{\"type\":\"Revision Request\",\"notes\":\"Lead details were updated:\\n- Interested products updated.\\n- Old: E-commerce Store (Qty: 1, Rate: 7500, SKU: N/A)\\n- New: Custom Web Application (Qty: 1, Rate: 20000, SKU: N/A)\",\"id\":\"act-lead-1758266390525-4\",\"date\":\"2025-09-19T07:23:08.556Z\"},{\"type\":\"Revision Request\",\"notes\":\"the requirement has changed\",\"id\":\"act-lead-1758266390525-3\",\"date\":\"2025-09-19T07:22:53.815Z\"},{\"type\":\"Meeting\",\"notes\":\"To call sir tomorrow at 8 PM\",\"id\":\"act-lead-1758266390525-2\",\"date\":\"2025-09-19T07:21:32.262Z\"},{\"id\":\"act-lead-1758266390525-1\",\"date\":\"2025-09-19T07:19:50.525Z\",\"type\":\"Email\",\"notes\":\"Lead created in the system. Initial notes: This is for test purposes only.\"}]},{\"name\":\"Shravya\",\"company\":\"Emblm\",\"email\":\"shravya.vj2812@gmail.com\",\"phone\":\"9663541194\",\"whatsappNumber\":\"9663541194\",\"status\":\"New\",\"source\":\"Website\",\"products\":[{\"productId\":\"prod-2\",\"quantity\":1,\"rate\":7500}],\"id\":\"lead-1757917089011\",\"createdAt\":\"2025-09-15T06:18:09.011Z\",\"activities\":[{\"type\":\"Proposal Sent\",\"notes\":\"Quotation QUO-0003 was created and sent.\",\"id\":\"act-lead-1757917089011-4\",\"date\":\"2025-09-15T06:20:37.893Z\"},{\"type\":\"Meeting\",\"notes\":\"For testing purposes\",\"id\":\"act-lead-1757917089011-3\",\"date\":\"2025-09-15T06:19:31.083Z\"},{\"type\":\"Revision Request\",\"notes\":\"Lead details were updated:\\n- Interested products updated.\\n- Old: SEO & Marketing Plan (Qty: 1, Rate: 1200, SKU: N/A)\\n- New: E-commerce Store (Qty: 1, Rate: 7500, SKU: N/A)\",\"id\":\"act-lead-1757917089011-2\",\"date\":\"2025-09-15T06:18:53.018Z\"},{\"id\":\"act-lead-1757917089011-1\",\"date\":\"2025-09-15T06:18:09.011Z\",\"type\":\"Email\",\"notes\":\"Lead created in the system. Initial notes: Test\"}]},{\"name\":\"Milap\",\"company\":\"Nifty\",\"email\":\"milap@niftyprojects.in\",\"phone\":\"9723604009\",\"whatsappNumber\":\"9723604009\",\"status\":\"New\",\"source\":\"Conference\",\"products\":[{\"productId\":\"prod-3\",\"quantity\":1,\"rate\":1200}],\"id\":\"lead-1757756450993\",\"createdAt\":\"2025-09-13T09:40:50.993Z\",\"activities\":[{\"type\":\"Proposal Sent\",\"notes\":\"Quotation QUO-0002 was created and sent.\",\"id\":\"act-lead-1757756450993-4\",\"date\":\"2025-09-13T09:42:31.846Z\"},{\"type\":\"Revision Request\",\"notes\":\"Lead details were updated:\\n- Interested products updated.\\n- Old: Basic Website Package (Qty: 1, Rate: 2500)\\n- New: SEO & Marketing Plan (Qty: 1, Rate: 1200)\",\"id\":\"act-lead-1757756450993-3\",\"date\":\"2025-09-13T09:41:53.575Z\"},{\"type\":\"Meeting\",\"notes\":\"We will have a meeting tomorrow.\",\"id\":\"act-lead-1757756450993-2\",\"date\":\"2025-09-13T09:41:27.885Z\"},{\"id\":\"act-lead-1757756450993-1\",\"date\":\"2025-09-13T09:40:50.993Z\",\"type\":\"Email\",\"notes\":\"Lead created in the system. Initial notes: Test\"}]},{\"name\":\"Om\",\"company\":\"NPE\",\"email\":\"npe@npe.com\",\"phone\":\"9723604009\",\"whatsappNumber\":\"9723604009\",\"status\":\"In Discussion\",\"source\":\"Referral\",\"products\":[{\"productId\":\"prod-4\",\"quantity\":1,\"rate\":20000}],\"id\":\"lead-1757753452451\",\"createdAt\":\"2025-09-13T08:50:52.451Z\",\"activities\":[{\"type\":\"Revision Request\",\"notes\":\"Lead details were updated:\\n- Interested products updated.\\n- Old: SEO & Marketing Plan (Qty: 1, Rate: 1200)\\n- New: Custom Web Application (Qty: 1, Rate: 20000)\",\"id\":\"act-lead-1757753452451-2\",\"date\":\"2025-09-13T08:57:48.827Z\"},{\"id\":\"act-lead-1757753452451-1\",\"date\":\"2025-09-13T08:50:52.451Z\",\"type\":\"Email\",\"notes\":\"Lead created in the system. Initial notes: Test\"}]},{\"id\":\"lead-3\",\"name\":\"David Smith\",\"company\":\"Tech Forward\",\"email\":\"david.s@techforward.com\",\"phone\":\"345-678-9012\",\"whatsappNumber\":\"345-678-9012\",\"status\":\"New\",\"source\":\"Website\",\"createdAt\":\"2024-09-11T12:00:00.000Z\",\"activities\":[{\"id\":\"act-3-1\",\"date\":\"2024-09-12T12:00:00.000Z\",\"type\":\"Email\",\"notes\":\"New lead from the website contact form. Sent an automated welcome email.\"}],\"products\":[]},{\"id\":\"lead-1\",\"name\":\"Alex Johnson\",\"company\":\"Innovate Inc.\",\"email\":\"alex.j@innovate.com\",\"phone\":\"123-456-7890\",\"whatsappNumber\":\"123-456-7890\",\"status\":\"In Discussion\",\"source\":\"Referral\",\"createdAt\":\"2024-09-03T12:00:00.000Z\",\"activities\":[{\"id\":\"act-1-1\",\"date\":\"2024-09-04T12:00:00.000Z\",\"type\":\"Call\",\"notes\":\"Initial discovery call. Discussed their needs for our Q3 product line. Seem very interested.\"},{\"id\":\"act-1-2\",\"date\":\"2024-09-08T12:00:00.000Z\",\"type\":\"Meeting\",\"notes\":\"Follow-up meeting with their technical team. Went over the API documentation. They had some good questions about integration.\"},{\"id\":\"act-1-3\",\"date\":\"2024-09-11T12:00:00.000Z\",\"type\":\"Email\",\"notes\":\"Sent a follow-up email with answers to their technical questions and a preliminary quote.\"}],\"products\":[{\"productId\":\"prod-4\",\"quantity\":1,\"rate\":20000}]},{\"id\":\"lead-2\",\"name\":\"Maria Garcia\",\"company\":\"Solutions Co.\",\"email\":\"maria.g@solutions.co\",\"phone\":\"234-567-8901\",\"status\":\"Negotiation\",\"source\":\"Conference\",\"createdAt\":\"2024-08-19T12:00:00.000Z\",\"activities\":[{\"id\":\"act-2-1\",\"date\":\"2024-08-24T12:00:00.000Z\",\"type\":\"Email\",\"notes\":\"Initial contact from a referral. Sent our standard marketing packet.\"},{\"id\":\"act-2-2\",\"date\":\"2024-08-29T12:00:00.000Z\",\"type\":\"Call\",\"notes\":\"Call to discuss their project. They have a tight budget but a clear vision.\"},{\"id\":\"act-2-3\",\"date\":\"2024-09-06T12:00:00.000Z\",\"type\":\"Proposal Sent\",\"notes\":\"Drafted and sent a detailed proposal based on our call.\"},{\"id\":\"act-2-4\",\"date\":\"2024-09-10T12:00:00.000Z\",\"type\":\"Revision Request\",\"notes\":\"They requested a revision to the proposal, asking for a different payment schedule. Currently in negotiation.\"}],\"products\":[{\"productId\":\"prod-1\",\"quantity\":1,\"rate\":2500},{\"productId\":\"prod-3\",\"quantity\":6,\"rate\":1100}]},{\"id\":\"lead-4\",\"name\":\"Sarah Chen\",\"company\":\"Synergy Partners\",\"email\":\"sarah.c@synergy.com\",\"phone\":\"456-789-0123\",\"status\":\"Closed - Won\",\"source\":\"Conference\",\"createdAt\":\"2024-07-30T12:00:00.000Z\",\"activities\":[{\"id\":\"act-4-1\",\"date\":\"2024-08-04T12:00:00.000Z\",\"type\":\"Meeting\",\"notes\":\"Met at a conference. Great initial conversation.\"},{\"id\":\"act-4-2\",\"date\":\"2024-08-14T12:00:00.000Z\",\"type\":\"Proposal Sent\",\"notes\":\"Sent proposal. They were impressed.\"},{\"id\":\"act-4-3\",\"date\":\"2024-08-24T12:00:00.000Z\",\"type\":\"Negotiation\",\"notes\":\"Minor negotiation on terms. Agreed on a 12-month contract.\"},{\"id\":\"act-4-4\",\"date\":\"2024-08-26T12:00:00.000Z\",\"type\":\"Email\",\"notes\":\"Contract signed. Project kickoff scheduled. Closed as won.\"}],\"products\":[{\"productId\":\"prod-2\",\"quantity\":1,\"rate\":7500}]},{\"id\":\"lead-5\",\"name\":\"Michael Brown\",\"company\":\"DataStream LLC\",\"email\":\"michael.b@datastream.com\",\"phone\":\"567-890-1234\",\"status\":\"Closed - Lost\",\"source\":\"Social Media\",\"createdAt\":\"2024-07-15T12:00:00.000Z\",\"activities\":[{\"id\":\"act-5-1\",\"date\":\"2024-07-20T12:00:00.000Z\",\"type\":\"Call\",\"notes\":\"Long discussion about their data needs. Seemed promising.\"},{\"id\":\"act-5-2\",\"date\":\"2024-07-25T12:00:00.000Z\",\"type\":\"Proposal Sent\",\"notes\":\"Sent a comprehensive proposal.\"},{\"id\":\"act-5-3\",\"date\":\"2024-07-30T12:00:00.000Z\",\"type\":\"Email\",\"notes\":\"Followed up, they decided to go with a competitor due to pricing. Closed as lost.\"}],\"products\":[{\"productId\":\"prod-1\",\"quantity\":1,\"rate\":2500}]}]"));}}),
"[project]/src/lib/data/quotations.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"leadId\":\"lead-1758266390525\",\"templateId\":\"template-1757755696512\",\"date\":\"2025-09-19\",\"validUntil\":\"2025-10-04\",\"status\":\"Draft\",\"products\":[{\"productId\":\"prod-4\",\"quantity\":1,\"rate\":20000,\"gstRate\":18}],\"subTotal\":20000,\"totalGst\":3600,\"grandTotal\":23600,\"companyName\":\"Nirmala Pumps and Equipments\",\"companyAddress\":\"Shed No.- 74-75, Gangotri Estate Nr. Vatva, Ramol Cir, Phase IV, Ahmedabad, Gujarat 382445\",\"companyGst\":\"GST131123123133\",\"termsAndConditions\":\"1. Use of Our Services\\r\\n\\r\\nYou must be at least 18 years old (or the age of majority in your jurisdiction) to use our Services. You agree to use our Services only for lawful purposes and in compliance with all applicable laws.\\r\\n\\r\\n2. User Accounts\\r\\n\\r\\nYou may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.\\r\\n\\r\\n3. Intellectual Property\\r\\n\\r\\nAll content, trademarks, logos, and intellectual property displayed on the Site are owned by or licensed to us and are protected by applicable intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.\\r\\n\\r\\n4. Prohibited Conduct\\r\\n\\r\\nYou agree not to:\\r\\n\\r\\nUse the Site for any illegal or unauthorized purpose.\\r\\n\\r\\nInterfere with the security or functionality of the Site.\\r\\n\\r\\nAttempt to gain unauthorized access to any part of the Site or user data.\\r\\n\\r\\n5. Termination\\r\\n\\r\\nWe reserve the right to suspend or terminate your access to the Site at our sole discretion, without notice, for conduct that we believe violates these Terms or is otherwise harmful to us or other users.\\r\\n\\r\\n6. Disclaimer of Warranties\\r\\n\\r\\nOur Services are provided \\\"as is\\\" and \\\"as available\\\" without warranties of any kind, either express or implied. We do not guarantee that the Site will be secure, error-free, or available at all times.\\r\\n\\r\\n7. Limitation of Liability\\r\\n\\r\\nTo the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Site or Services.\\r\\n\\r\\n8. Changes to These Terms\\r\\n\\r\\nWe may update these Terms at any time by posting the revised version on the Site. Continued use of the Site after changes constitutes your acceptance of the new Terms.\\r\\n\\r\\n9. Governing Law\\r\\n\\r\\nThese Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.\",\"logoUrl\":\"data:image/png;base64,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\",\"id\":\"quo-1758266658997\",\"quotationNumber\":\"QUO-0004\",\"createdAt\":\"2025-09-19T07:24:18.997Z\"},{\"leadId\":\"lead-1757917089011\",\"templateId\":\"template-1757755696512\",\"date\":\"2025-09-15\",\"validUntil\":\"2025-09-30\",\"status\":\"Draft\",\"products\":[{\"productId\":\"prod-2\",\"quantity\":1,\"rate\":7500,\"gstRate\":18}],\"subTotal\":7500,\"totalGst\":1350,\"grandTotal\":8850,\"id\":\"quo-1757917237892\",\"quotationNumber\":\"QUO-0003\",\"createdAt\":\"2025-09-15T06:20:37.892Z\"},{\"leadId\":\"lead-1757756450993\",\"templateId\":\"template-1757755696512\",\"date\":\"2025-09-13\",\"validUntil\":\"2025-09-28\",\"status\":\"Draft\",\"products\":[{\"productId\":\"prod-3\",\"quantity\":1,\"rate\":1200,\"gstRate\":12}],\"subTotal\":1200,\"totalGst\":144,\"grandTotal\":1344,\"id\":\"quo-1757756551845\",\"quotationNumber\":\"QUO-0002\",\"createdAt\":\"2025-09-13T09:42:31.845Z\"},{\"leadId\":\"lead-1757753452451\",\"templateId\":\"template-1757755696512\",\"date\":\"2025-09-13\",\"validUntil\":\"2025-09-28\",\"status\":\"Draft\",\"products\":[{\"productId\":\"prod-1\",\"quantity\":1,\"rate\":2500,\"gstRate\":18}],\"subTotal\":2500,\"totalGst\":450,\"grandTotal\":2950,\"id\":\"quo-1757755970206\",\"quotationNumber\":\"QUO-0001\",\"createdAt\":\"2025-09-13T09:32:50.206Z\"}]"));}}),
"[project]/src/lib/data/quotation-templates.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"name\":\"Nirmala Pumps and Equipment\",\"companyName\":\"Nirmala Pumps and Equipments\",\"companyAddress\":\"Shed No.- 74-75, Gangotri Estate Nr. Vatva, Ramol Cir, Phase IV, Ahmedabad, Gujarat 382445\",\"companyGst\":\"GST131123123133\",\"termsAndConditions\":\"1. Use of Our Services\\r\\n\\r\\nYou must be at least 18 years old (or the age of majority in your jurisdiction) to use our Services. You agree to use our Services only for lawful purposes and in compliance with all applicable laws.\\r\\n\\r\\n2. User Accounts\\r\\n\\r\\nYou may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.\\r\\n\\r\\n3. Intellectual Property\\r\\n\\r\\nAll content, trademarks, logos, and intellectual property displayed on the Site are owned by or licensed to us and are protected by applicable intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.\\r\\n\\r\\n4. Prohibited Conduct\\r\\n\\r\\nYou agree not to:\\r\\n\\r\\nUse the Site for any illegal or unauthorized purpose.\\r\\n\\r\\nInterfere with the security or functionality of the Site.\\r\\n\\r\\nAttempt to gain unauthorized access to any part of the Site or user data.\\r\\n\\r\\n5. Termination\\r\\n\\r\\nWe reserve the right to suspend or terminate your access to the Site at our sole discretion, without notice, for conduct that we believe violates these Terms or is otherwise harmful to us or other users.\\r\\n\\r\\n6. Disclaimer of Warranties\\r\\n\\r\\nOur Services are provided \\\"as is\\\" and \\\"as available\\\" without warranties of any kind, either express or implied. We do not guarantee that the Site will be secure, error-free, or available at all times.\\r\\n\\r\\n7. Limitation of Liability\\r\\n\\r\\nTo the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Site or Services.\\r\\n\\r\\n8. Changes to These Terms\\r\\n\\r\\nWe may update these Terms at any time by posting the revised version on the Site. Continued use of the Site after changes constitutes your acceptance of the new Terms.\\r\\n\\r\\n9. Governing Law\\r\\n\\r\\nThese Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.\",\"logoUrl\":\"data:image/png;base64,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\",\"id\":\"template-1757755696512\"}]"));}}),
"[project]/src/lib/migrate-to-firestore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FirestoreMigration": (()=>FirestoreMigration),
    "firestoreMigration": (()=>firestoreMigration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-services.ts [app-client] (ecmascript)");
// Import JSON data
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$employees$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/employees.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$departments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/departments.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$employee$2d$roles$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/employee-roles.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$lead$2d$sources$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/lead-sources.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/products.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$leads$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/leads.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$quotations$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/quotations.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$quotation$2d$templates$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/data/quotation-templates.json (json)");
;
;
;
;
;
;
;
;
;
;
class FirestoreMigration {
    results = [];
    summary;
    constructor(){
        this.summary = {
            totalCollections: 0,
            totalDocuments: 0,
            successfulDocuments: 0,
            failedDocuments: 0,
            results: [],
            startTime: new Date()
        };
    }
    // Helper function to convert date strings to Firestore timestamps
    convertToTimestamp(dateString) {
        if (!dateString) return undefined;
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(new Date(dateString));
        } catch (error) {
            console.warn('Failed to convert date:', dateString);
            return undefined;
        }
    }
    // Helper function to generate new ID if needed
    generateId(prefix) {
        return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    // Migrate employees
    async migrateEmployees() {
        const result = {
            collection: 'employees',
            success: 0,
            failed: 0,
            errors: []
        };
        console.log('🏢 Migrating employees...');
        for (const employee of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$employees$2e$json__$28$json$29$__["default"]){
            try {
                const employeeData = {
                    ...employee,
                    createdAt: this.convertToTimestamp(employee.createdAt) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    isActive: true // Default to active
                };
                // Use existing ID or generate new one
                const id = employee.id || this.generateId('emp');
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employeesService"].createWithId(id, employeeData);
                result.success++;
                console.log(`✅ Migrated employee: ${employee.name}`);
            } catch (error) {
                result.failed++;
                const errorMsg = `Failed to migrate employee ${employee.name}: ${error}`;
                result.errors.push(errorMsg);
                console.error(`❌ ${errorMsg}`);
            }
        }
        return result;
    }
    // Migrate departments
    async migrateDepartments() {
        const result = {
            collection: 'departments',
            success: 0,
            failed: 0,
            errors: []
        };
        console.log('🏬 Migrating departments...');
        for (const department of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$departments$2e$json__$28$json$29$__["default"]){
            try {
                const departmentData = {
                    ...department,
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                };
                const id = department.id || this.generateId('dept');
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["departmentsService"].createWithId(id, departmentData);
                result.success++;
                console.log(`✅ Migrated department: ${department.name}`);
            } catch (error) {
                result.failed++;
                const errorMsg = `Failed to migrate department ${department.name}: ${error}`;
                result.errors.push(errorMsg);
                console.error(`❌ ${errorMsg}`);
            }
        }
        return result;
    }
    // Migrate employee roles
    async migrateEmployeeRoles() {
        const result = {
            collection: 'employeeRoles',
            success: 0,
            failed: 0,
            errors: []
        };
        console.log('👔 Migrating employee roles...');
        for (const role of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$employee$2d$roles$2e$json__$28$json$29$__["default"]){
            try {
                const roleData = {
                    ...role,
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                };
                const id = role.id || this.generateId('role');
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employeeRolesService"].createWithId(id, roleData);
                result.success++;
                console.log(`✅ Migrated role: ${role.name}`);
            } catch (error) {
                result.failed++;
                const errorMsg = `Failed to migrate role ${role.name}: ${error}`;
                result.errors.push(errorMsg);
                console.error(`❌ ${errorMsg}`);
            }
        }
        return result;
    }
    // Migrate lead sources
    async migrateLeadSources() {
        const result = {
            collection: 'leadSources',
            success: 0,
            failed: 0,
            errors: []
        };
        console.log('📊 Migrating lead sources...');
        for (const source of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$lead$2d$sources$2e$json__$28$json$29$__["default"]){
            try {
                const sourceData = {
                    ...source,
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    isActive: true
                };
                const id = source.id || this.generateId('source');
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadSourcesService"].createWithId(id, sourceData);
                result.success++;
                console.log(`✅ Migrated lead source: ${source.name}`);
            } catch (error) {
                result.failed++;
                const errorMsg = `Failed to migrate lead source ${source.name}: ${error}`;
                result.errors.push(errorMsg);
                console.error(`❌ ${errorMsg}`);
            }
        }
        return result;
    }
    // Migrate products
    async migrateProducts() {
        const result = {
            collection: 'products',
            success: 0,
            failed: 0,
            errors: []
        };
        console.log('📦 Migrating products...');
        for (const product of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$products$2e$json__$28$json$29$__["default"]){
            try {
                const productData = {
                    ...product,
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    isActive: true,
                    stockQuantity: 100,
                    minStockLevel: 10 // Default minimum stock
                };
                const id = product.id || this.generateId('prod');
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productsService"].createWithId(id, productData);
                result.success++;
                console.log(`✅ Migrated product: ${product.name}`);
            } catch (error) {
                result.failed++;
                const errorMsg = `Failed to migrate product ${product.name}: ${error}`;
                result.errors.push(errorMsg);
                console.error(`❌ ${errorMsg}`);
            }
        }
        return result;
    }
    // Migrate leads
    async migrateLeads() {
        const result = {
            collection: 'leads',
            success: 0,
            failed: 0,
            errors: []
        };
        console.log('🎯 Migrating leads...');
        for (const lead of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$leads$2e$json__$28$json$29$__["default"]){
            try {
                // Convert activities timestamps
                const activities = lead.activities?.map((activity)=>({
                        ...activity,
                        type: activity.type,
                        date: this.convertToTimestamp(activity.date) || activity.date
                    })) || [];
                const leadData = {
                    ...lead,
                    status: lead.status,
                    createdAt: this.convertToTimestamp(lead.createdAt) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    activities,
                    priority: 'Medium',
                    estimatedValue: lead.products?.reduce((sum, product)=>sum + product.quantity * product.rate, 0) || 0
                };
                const id = lead.id || this.generateId('lead');
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadsService"].createWithId(id, leadData);
                result.success++;
                console.log(`✅ Migrated lead: ${lead.name} (${lead.company})`);
            } catch (error) {
                result.failed++;
                const errorMsg = `Failed to migrate lead ${lead.name}: ${error}`;
                result.errors.push(errorMsg);
                console.error(`❌ ${errorMsg}`);
            }
        }
        return result;
    }
    // Migrate quotations
    async migrateQuotations() {
        const result = {
            collection: 'quotations',
            success: 0,
            failed: 0,
            errors: []
        };
        console.log('📋 Migrating quotations...');
        for (const quotation of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$quotations$2e$json__$28$json$29$__["default"]){
            try {
                const quotationData = {
                    ...quotation,
                    status: quotation.status,
                    createdAt: this.convertToTimestamp(quotation.createdAt) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                };
                const id = quotation.id || this.generateId('quo');
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quotationsService"].createWithId(id, quotationData);
                result.success++;
                console.log(`✅ Migrated quotation: ${quotation.quotationNumber}`);
            } catch (error) {
                result.failed++;
                const errorMsg = `Failed to migrate quotation ${quotation.quotationNumber}: ${error}`;
                result.errors.push(errorMsg);
                console.error(`❌ ${errorMsg}`);
            }
        }
        return result;
    }
    // Migrate quotation templates
    async migrateQuotationTemplates() {
        const result = {
            collection: 'quotationTemplates',
            success: 0,
            failed: 0,
            errors: []
        };
        console.log('📄 Migrating quotation templates...');
        for (const template of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$quotation$2d$templates$2e$json__$28$json$29$__["default"]){
            try {
                const templateData = {
                    ...template,
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    isDefault: true // Mark as default template
                };
                const id = template.id || this.generateId('template');
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quotationTemplatesService"].createWithId(id, templateData);
                result.success++;
                console.log(`✅ Migrated template: ${template.name}`);
            } catch (error) {
                result.failed++;
                const errorMsg = `Failed to migrate template ${template.name}: ${error}`;
                result.errors.push(errorMsg);
                console.error(`❌ ${errorMsg}`);
            }
        }
        return result;
    }
    // Run complete migration
    async runMigration() {
        console.log('🚀 Starting Firestore migration...');
        console.log('⚠️  Make sure you have updated your Firestore security rules!');
        this.summary.startTime = new Date();
        try {
            // Run all migrations
            const migrations = [
                {
                    name: 'Departments',
                    fn: ()=>this.migrateDepartments()
                },
                {
                    name: 'Employee Roles',
                    fn: ()=>this.migrateEmployeeRoles()
                },
                {
                    name: 'Lead Sources',
                    fn: ()=>this.migrateLeadSources()
                },
                {
                    name: 'Products',
                    fn: ()=>this.migrateProducts()
                },
                {
                    name: 'Employees',
                    fn: ()=>this.migrateEmployees()
                },
                {
                    name: 'Quotation Templates',
                    fn: ()=>this.migrateQuotationTemplates()
                },
                {
                    name: 'Leads',
                    fn: ()=>this.migrateLeads()
                },
                {
                    name: 'Quotations',
                    fn: ()=>this.migrateQuotations()
                }
            ];
            for (const migration of migrations){
                console.log(`\n📊 Starting ${migration.name} migration...`);
                const result = await migration.fn();
                this.results.push(result);
                this.summary.totalDocuments += result.success + result.failed;
                this.summary.successfulDocuments += result.success;
                this.summary.failedDocuments += result.failed;
                console.log(`✅ ${migration.name}: ${result.success} success, ${result.failed} failed`);
            }
            this.summary.totalCollections = migrations.length;
            this.summary.results = this.results;
            this.summary.endTime = new Date();
            this.summary.duration = this.summary.endTime.getTime() - this.summary.startTime.getTime();
            // Print summary
            console.log('\n🎉 Migration completed!');
            console.log('📊 Summary:');
            console.log(`   Collections: ${this.summary.totalCollections}`);
            console.log(`   Total Documents: ${this.summary.totalDocuments}`);
            console.log(`   Successful: ${this.summary.successfulDocuments}`);
            console.log(`   Failed: ${this.summary.failedDocuments}`);
            console.log(`   Duration: ${(this.summary.duration / 1000).toFixed(2)}s`);
            if (this.summary.failedDocuments > 0) {
                console.log('\n❌ Errors encountered:');
                this.results.forEach((result)=>{
                    if (result.errors.length > 0) {
                        console.log(`\n${result.collection}:`);
                        result.errors.forEach((error)=>console.log(`  - ${error}`));
                    }
                });
            }
        } catch (error) {
            console.error('💥 Migration failed:', error);
            throw error;
        }
        return this.summary;
    }
    // Verify migration by checking document counts
    async verifyMigration() {
        console.log('\n🔍 Verifying migration...');
        const verifications = [
            {
                name: 'Employees',
                service: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employeesService"],
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$employees$2e$json__$28$json$29$__["default"].length
            },
            {
                name: 'Departments',
                service: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["departmentsService"],
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$departments$2e$json__$28$json$29$__["default"].length
            },
            {
                name: 'Employee Roles',
                service: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employeeRolesService"],
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$employee$2d$roles$2e$json__$28$json$29$__["default"].length
            },
            {
                name: 'Lead Sources',
                service: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadSourcesService"],
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$lead$2d$sources$2e$json__$28$json$29$__["default"].length
            },
            {
                name: 'Products',
                service: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productsService"],
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$products$2e$json__$28$json$29$__["default"].length
            },
            {
                name: 'Leads',
                service: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadsService"],
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$leads$2e$json__$28$json$29$__["default"].length
            },
            {
                name: 'Quotations',
                service: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quotationsService"],
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$quotations$2e$json__$28$json$29$__["default"].length
            },
            {
                name: 'Quotation Templates',
                service: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quotationTemplatesService"],
                expected: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$quotation$2d$templates$2e$json__$28$json$29$__["default"].length
            }
        ];
        for (const verification of verifications){
            try {
                const documents = await verification.service.getAll();
                const actual = documents.length;
                const status = actual === verification.expected ? '✅' : '❌';
                console.log(`${status} ${verification.name}: ${actual}/${verification.expected}`);
                if (actual !== verification.expected) {
                    console.warn(`   Expected ${verification.expected} but found ${actual}`);
                }
            } catch (error) {
                console.error(`❌ Failed to verify ${verification.name}:`, error);
            }
        }
    }
    // Clear all migrated data (use with caution!)
    async clearAllData() {
        console.log('🗑️  Clearing all migrated data...');
        console.warn('⚠️  This will delete ALL data from Firestore!');
        const services = [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employeesService"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["departmentsService"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["employeeRolesService"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadSourcesService"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productsService"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadsService"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quotationsService"],
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quotationTemplatesService"]
        ];
        for (const service of services){
            try {
                const documents = await service.getAll();
                const ids = documents.map((doc)=>doc.id);
                if (ids.length > 0) {
                    await service.deleteMultiple(ids);
                    console.log(`✅ Cleared ${ids.length} documents from ${service['collectionName']}`);
                }
            } catch (error) {
                console.error(`❌ Failed to clear ${service['collectionName']}:`, error);
            }
        }
    }
}
const firestoreMigration = new FirestoreMigration();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/firestore-migration.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FirestoreMigration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$migrate$2d$to$2d$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/migrate-to-firestore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FirestoreMigration() {
    _s();
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVerifying, setIsVerifying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClearing, setIsClearing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showLogs, setShowLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const addLog = (message)=>{
        setLogs((prev)=>[
                ...prev,
                `${new Date().toLocaleTimeString()}: ${message}`
            ]);
    };
    const runMigration = async ()=>{
        setIsRunning(true);
        setLogs([]);
        setSummary(null);
        try {
            addLog('🚀 Starting migration...');
            // Override console.log to capture logs
            const originalLog = console.log;
            const originalError = console.error;
            const originalWarn = console.warn;
            console.log = (...args)=>{
                addLog(args.join(' '));
                originalLog(...args);
            };
            console.error = (...args)=>{
                addLog(`ERROR: ${args.join(' ')}`);
                originalError(...args);
            };
            console.warn = (...args)=>{
                addLog(`WARN: ${args.join(' ')}`);
                originalWarn(...args);
            };
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$migrate$2d$to$2d$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firestoreMigration"].runMigration();
            setSummary(result);
            // Restore console methods
            console.log = originalLog;
            console.error = originalError;
            console.warn = originalWarn;
            addLog('✅ Migration completed successfully!');
        } catch (error) {
            addLog(`❌ Migration failed: ${error}`);
            console.error('Migration error:', error);
        } finally{
            setIsRunning(false);
        }
    };
    const verifyMigration = async ()=>{
        setIsVerifying(true);
        try {
            addLog('🔍 Starting verification...');
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$migrate$2d$to$2d$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firestoreMigration"].verifyMigration();
            addLog('✅ Verification completed!');
        } catch (error) {
            addLog(`❌ Verification failed: ${error}`);
            console.error('Verification error:', error);
        } finally{
            setIsVerifying(false);
        }
    };
    const clearAllData = async ()=>{
        if (!confirm('⚠️ This will delete ALL migrated data from Firestore. Are you sure?')) {
            return;
        }
        if (!confirm('🚨 FINAL WARNING: This action cannot be undone. Continue?')) {
            return;
        }
        setIsClearing(true);
        try {
            addLog('🗑️ Starting data cleanup...');
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$migrate$2d$to$2d$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firestoreMigration"].clearAllData();
            addLog('✅ Data cleanup completed!');
            setSummary(null);
        } catch (error) {
            addLog(`❌ Data cleanup failed: ${error}`);
            console.error('Cleanup error:', error);
        } finally{
            setIsClearing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto p-6 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6 text-center",
                children: "🔥 Firestore Data Migration"
            }, void 0, false, {
                fileName: "[project]/src/components/firestore-migration.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-50 p-4 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-blue-800",
                                children: "📊 Data Sources"
                            }, void 0, false, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-sm text-blue-600 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Employees"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Departments"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Employee Roles"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Lead Sources"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Products"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Leads"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Quotations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Quotation Templates"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-50 p-4 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-green-800",
                                children: "🎯 Target Collections"
                            }, void 0, false, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-sm text-green-600 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• employees"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• departments"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• employeeRoles"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• leadSources"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• products"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• leads"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• quotations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• quotationTemplates"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 p-4 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-yellow-800",
                                children: "⚠️ Prerequisites"
                            }, void 0, false, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-sm text-yellow-600 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Firestore security rules updated"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Authentication enabled"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Network connection stable"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Backup existing data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/firestore-migration.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: runMigration,
                        disabled: isRunning,
                        className: "bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center",
                        children: isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/firestore-migration.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this),
                                "Running Migration..."
                            ]
                        }, void 0, true) : '🚀 Start Migration'
                    }, void 0, false, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: verifyMigration,
                        disabled: isVerifying || !summary,
                        className: "bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center",
                        children: isVerifying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/firestore-migration.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this),
                                "Verifying..."
                            ]
                        }, void 0, true) : '🔍 Verify Migration'
                    }, void 0, false, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearAllData,
                        disabled: isClearing,
                        className: "bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center",
                        children: isClearing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/firestore-migration.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this),
                                "Clearing..."
                            ]
                        }, void 0, true) : '🗑️ Clear All Data'
                    }, void 0, false, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowLogs(!showLogs),
                        className: "bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600",
                        children: showLogs ? '📋 Hide Logs' : '📋 Show Logs'
                    }, void 0, false, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/firestore-migration.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 p-6 rounded-lg mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "📊 Migration Summary"
                    }, void 0, false, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-blue-600",
                                        children: summary.totalCollections
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Collections"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-green-600",
                                        children: summary.successfulDocuments
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Successful"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-red-600",
                                        children: summary.failedDocuments
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Failed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-purple-600",
                                        children: summary.duration ? `${(summary.duration / 1000).toFixed(1)}s` : 'N/A'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600",
                                        children: "Duration"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold",
                                children: "Collection Results:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            summary.results.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center p-2 bg-white rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: result.collection
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/firestore-migration.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-600",
                                                    children: [
                                                        "✅ ",
                                                        result.success
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/firestore-migration.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-600",
                                                    children: [
                                                        "❌ ",
                                                        result.failed
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/firestore-migration.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/firestore-migration.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/firestore-migration.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this),
                    summary.failedDocuments > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-red-600 mb-2",
                                children: "❌ Errors:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 263,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-red-50 p-3 rounded max-h-40 overflow-y-auto",
                                children: summary.results.map((result, index)=>result.errors.map((error, errorIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-red-700 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        result.collection,
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/firestore-migration.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 23
                                                }, this),
                                                " ",
                                                error
                                            ]
                                        }, `${index}-${errorIndex}`, true, {
                                            fileName: "[project]/src/components/firestore-migration.tsx",
                                            lineNumber: 267,
                                            columnNumber: 21
                                        }, this)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 262,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/firestore-migration.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this),
            showLogs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black text-green-400 p-4 rounded-lg font-mono text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold",
                                children: "📋 Migration Logs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLogs([]),
                                className: "text-red-400 hover:text-red-300 text-xs",
                                children: "Clear Logs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-96 overflow-y-auto",
                        children: logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500",
                            children: "No logs yet..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/firestore-migration.tsx",
                            lineNumber: 292,
                            columnNumber: 15
                        }, this) : logs.map((log, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1",
                                children: log
                            }, index, false, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 295,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/firestore-migration.tsx",
                lineNumber: 280,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 bg-blue-50 p-6 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "📋 Migration Instructions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-blue-800",
                                        children: "Before Migration:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "list-decimal list-inside text-sm text-blue-700 ml-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Update Firestore security rules to allow writes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 312,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Ensure you have a stable internet connection"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 313,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Backup your existing Firestore data (if any)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Review the data sources and target collections"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-blue-800",
                                        children: "During Migration:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside text-sm text-blue-700 ml-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Do not close the browser tab"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Monitor the logs for any errors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "The process may take several minutes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-blue-800",
                                        children: "After Migration:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside text-sm text-blue-700 ml-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Run verification to ensure data integrity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Update your application code to use Firestore services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Test all functionality thoroughly"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Update security rules for production use"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/firestore-migration.tsx",
                                                lineNumber: 334,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/firestore-migration.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/firestore-migration.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/firestore-migration.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-yellow-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Security Rules Required:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/firestore-migration.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    " Make sure you have updated your Firestore security rules to allow write operations. You can use the testing rules provided in the documentation, but remember to update them for production use."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/firestore-migration.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/firestore-migration.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/firestore-migration.tsx",
                    lineNumber: 342,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/firestore-migration.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/firestore-migration.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(FirestoreMigration, "XeA/C3hSENzHazKToUJswNAIV9E=");
_c = FirestoreMigration;
var _c;
__turbopack_context__.k.register(_c, "FirestoreMigration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_4ec009c9._.js.map