module.exports = {

"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/process [external] (process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/src/lib/firebase.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Import the functions you need from the SDKs you need
__turbopack_context__.s({
    "auth": (()=>auth),
    "db": (()=>db),
    "default": (()=>__TURBOPACK__default__export__),
    "storage": (()=>storage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$18137433$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/node-esm/totp-18137433.js [app-rsc] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-rsc] (ecmascript)");
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
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$18137433$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStorage"])(app);
// Connect to emulators in development (optional)
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
const __TURBOPACK__default__export__ = app;
}}),
"[project]/src/lib/firestore-service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FirestoreService": (()=>FirestoreService),
    "createTimestamp": (()=>createTimestamp),
    "formatTimestamp": (()=>formatTimestamp),
    "serverTime": (()=>serverTime),
    "timestampToDate": (()=>timestampToDate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-rsc] (ecmascript)");
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
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            };
            const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName), docData);
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
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            };
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDoc"])(docRef, docData);
        } catch (error) {
            console.error(`Error creating document with ID ${id} in ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Get a document by ID
   */ async getById(id) {
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
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
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName));
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
            let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName);
            // Apply where conditions
            if (options.where) {
                options.where.forEach((condition)=>{
                    q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["where"])(condition.field, condition.operator, condition.value));
                });
            }
            // Apply ordering
            if (options.orderBy) {
                q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orderBy"])(options.orderBy.field, options.orderBy.direction));
            }
            // Apply limit
            if (options.limit) {
                q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["limit"])(options.limit));
            }
            // Apply pagination
            if (options.startAfter) {
                q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startAfter"])(options.startAfter));
            }
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
            const updateData = {
                ...data,
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, updateData);
        } catch (error) {
            console.error(`Error updating document ${id} in ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Delete a document
   */ async delete(id) {
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDoc"])(docRef);
        } catch (error) {
            console.error(`Error deleting document ${id} from ${this.collectionName}:`, error);
            throw error;
        }
    }
    /**
   * Delete multiple documents
   */ async deleteMultiple(ids) {
        try {
            const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]);
            ids.forEach((id)=>{
                const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
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
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onSnapshot"])(docRef, (docSnap)=>{
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
        let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName);
        // Apply query options (similar to getWithQuery)
        if (options.where) {
            options.where.forEach((condition)=>{
                q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["where"])(condition.field, condition.operator, condition.value));
            });
        }
        if (options.orderBy) {
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orderBy"])(options.orderBy.field, options.orderBy.direction));
        }
        if (options.limit) {
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["limit"])(options.limit));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (querySnapshot)=>{
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
            const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]);
            operations.forEach((operation)=>{
                switch(operation.type){
                    case 'create':
                        if (operation.id && operation.data) {
                            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName, operation.id);
                            batch.set(docRef, {
                                ...operation.data,
                                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                            });
                        }
                        break;
                    case 'update':
                        if (operation.id && operation.data) {
                            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName, operation.id);
                            batch.update(docRef, {
                                ...operation.data,
                                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                            });
                        }
                        break;
                    case 'delete':
                        if (operation.id) {
                            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName, operation.id);
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
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runTransaction"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], updateFunction);
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
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], this.collectionName, id);
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
            return docSnap.exists();
        } catch (error) {
            console.error(`Error checking if document ${id} exists in ${this.collectionName}:`, error);
            throw error;
        }
    }
}
const createTimestamp = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Timestamp"].now();
const serverTime = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])();
const timestampToDate = (timestamp)=>{
    return timestamp.toDate();
};
const formatTimestamp = (timestamp, locale = 'en-US')=>{
    return timestamp.toDate().toLocaleDateString(locale);
};
}}),
"[project]/src/lib/business-types.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/lib/business-services.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-types.ts [app-rsc] (ecmascript)");
;
;
const employeesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].EMPLOYEES);
const departmentsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].DEPARTMENTS);
const employeeRolesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].EMPLOYEE_ROLES);
const leadSourcesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].LEAD_SOURCES);
const productsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].PRODUCTS);
const leadsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].LEADS);
const quotationsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].QUOTATIONS);
const quotationTemplatesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].QUOTATION_TEMPLATES);
const customersService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].CUSTOMERS);
const ordersService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].ORDERS);
const invoicesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].INVOICES);
const paymentsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].PAYMENTS);
const tasksService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].TASKS);
const companySettingsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].COMPANY_SETTINGS);
const notificationsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].NOTIFICATIONS);
const activityLogsService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].ACTIVITY_LOGS);
class EmployeeService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].EMPLOYEES);
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
class LeadService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].LEADS);
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
class ProductService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].PRODUCTS);
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
class QuotationService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].QUOTATIONS);
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
class CustomerService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].CUSTOMERS);
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
class OrderService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].ORDERS);
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
class TaskService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].TASKS);
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
}}),
"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f05e84f0f97fc5a7a07e8131baefa2841070e643d":"addActivityToLead","7f0f59e3c0bdc096d699ee898b0c1ba20707191d4b":"updateEmployee","7f1846f698e1887660f585d5ea9149a07c7c850f92":"getQuotationById","7f2e6eb1a1a75f8015dfce86483708dfbe658da89c":"getDepartments","7f31e15fd4f61e5b609e4a6d50eeccb9af77aafef8":"addDepartment","7f39761948864339837957ca91e3e944cd8e441632":"deleteQuotationTemplate","7f3ae5e8f46d47652a5fb84e3089a01a9238cf9bed":"getLeadById","7f3d9e95cd0e81b0d13660c9a9a93768fb851fa506":"addProduct","7f4280ff5e64067f99266109815caf0860a45cc58c":"getLeads","7f480200a3ee83c850bd3891fd7985198e896fe1ed":"getQuotationTemplateById","7f4e672b0e36e084ca5eb122016c6383de1a5a99ba":"updateLeadStatus","7f4eefc53973b8e6fbed50ffa2cc64fe40df104ad3":"addEmployee","7f5591f7a8ee3bb38224df4376cdee9f8d5eb812fe":"deleteQuotation","7f579d5a450a43d8b74c568f68ca2b3c2566dc4a95":"deleteLead","7f5ad710a7cb483463fc09bb2de49c70ee34ee6c63":"updateLead","7f6d87f222357d05d51ddaef3bee835c24413445c4":"getEmployeeRoles","7f7433c41b0634dc7b5f0d1c3708d79d935f8bde34":"getEmployeeById","7f822c7526a05588811630fb16c06bf87327d46e27":"addEmployeeRole","7f90125ab01f83802f2fcb8e1f747656578c988c23":"updateQuotation","7f93d0bb939f748aacd7331842952547c4a4a6ddf0":"deleteDepartment","7fa6bcba2f1f7e8c8eeaf60c2dc415a8e405fa26f7":"updateQuotationTemplate","7fa78ef03610d4e9976fbaa4e450f34f54cf2d02fc":"addLeadSource","7fa8bc842463b1ec33e139235445fa57278ad38b35":"getEmployees","7fabb9890e6ce6942891dc6903686fbb41d7e40da9":"getQuotations","7fae3ad533f1dc6298a52f1957eff67f632545365d":"deleteProduct","7faf0a91ed8cef30a4af08e9037287b354a71db7e9":"addQuotation","7fb4f29abf3ebe0f2a94c04f8d336c3e47599188ee":"getRecentActivities","7fc6f659357e4b54787c2a339bdb6e16e7ae761acb":"addLead","7fc9162346222c9de85ac70b2f85d9c9be072b4bb2":"getLeadSources","7fce767cc96f1429da191f8516a9b4784b223bb47e":"addQuotationTemplate","7fe30da5fb8303e0a863d9120c6dd29a374504a050":"getQuotationTemplates","7fe3bac712c1f2e1723b72df2734d1286a00c8a875":"deleteEmployee","7fe5d28a16cab74d9ee3acbe0aafa76ffc672cfba6":"deleteLeadSource","7feddb7de602afea2493484ef7513323da3fdfb015":"updateProduct","7ff71b0c7623881d0aa5c8c677cd09724481a157b2":"getProducts","7ffd8613a6e078c5fd9d33441e4b0f2ad06720be86":"deleteEmployeeRole"},"",""] */ __turbopack_context__.s({
    "addActivityToLead": (()=>addActivityToLead),
    "addDepartment": (()=>addDepartment),
    "addEmployee": (()=>addEmployee),
    "addEmployeeRole": (()=>addEmployeeRole),
    "addLead": (()=>addLead),
    "addLeadSource": (()=>addLeadSource),
    "addProduct": (()=>addProduct),
    "addQuotation": (()=>addQuotation),
    "addQuotationTemplate": (()=>addQuotationTemplate),
    "deleteDepartment": (()=>deleteDepartment),
    "deleteEmployee": (()=>deleteEmployee),
    "deleteEmployeeRole": (()=>deleteEmployeeRole),
    "deleteLead": (()=>deleteLead),
    "deleteLeadSource": (()=>deleteLeadSource),
    "deleteProduct": (()=>deleteProduct),
    "deleteQuotation": (()=>deleteQuotation),
    "deleteQuotationTemplate": (()=>deleteQuotationTemplate),
    "getDepartments": (()=>getDepartments),
    "getEmployeeById": (()=>getEmployeeById),
    "getEmployeeRoles": (()=>getEmployeeRoles),
    "getEmployees": (()=>getEmployees),
    "getLeadById": (()=>getLeadById),
    "getLeadSources": (()=>getLeadSources),
    "getLeads": (()=>getLeads),
    "getProducts": (()=>getProducts),
    "getQuotationById": (()=>getQuotationById),
    "getQuotationTemplateById": (()=>getQuotationTemplateById),
    "getQuotationTemplates": (()=>getQuotationTemplates),
    "getQuotations": (()=>getQuotations),
    "getRecentActivities": (()=>getRecentActivities),
    "updateEmployee": (()=>updateEmployee),
    "updateLead": (()=>updateLead),
    "updateLeadStatus": (()=>updateLeadStatus),
    "updateProduct": (()=>updateProduct),
    "updateQuotation": (()=>updateQuotation),
    "updateQuotationTemplate": (()=>updateQuotationTemplate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
// Helper function to convert Firestore Timestamps to plain objects
function convertTimestampToPlain(obj) {
    if (!obj) return obj;
    if (obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Timestamp"]) {
        return obj.toDate().toISOString();
    }
    if (Array.isArray(obj)) {
        return obj.map((item)=>convertTimestampToPlain(item));
    }
    if (typeof obj === 'object') {
        const converted = {};
        for(const key in obj){
            if (obj.hasOwnProperty(key)) {
                converted[key] = convertTimestampToPlain(obj[key]);
            }
        }
        return converted;
    }
    return obj;
}
// Helper function to convert Firestore documents to plain objects
function convertFirestoreDocToPlain(doc) {
    return convertTimestampToPlain(doc);
}
const getEmployees = async ()=>{
    const employees = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeService"].getAll();
    return employees.map((emp)=>convertFirestoreDocToPlain(emp));
};
const getEmployeeById = async (id)=>{
    const employee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeService"].getById(id);
    return employee ? convertFirestoreDocToPlain(employee) : undefined;
};
const addEmployee = async (employeeData)=>{
    const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeService"].create({
        ...employeeData,
        isActive: true
    });
    const newEmployee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeService"].getById(id);
    if (!newEmployee) {
        throw new Error('Failed to create employee');
    }
    return convertFirestoreDocToPlain(newEmployee);
};
const updateEmployee = async (id, employeeData)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeService"].update(id, employeeData);
    const updatedEmployee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeService"].getById(id);
    if (!updatedEmployee) {
        throw new Error('Employee not found after update');
    }
    return convertFirestoreDocToPlain(updatedEmployee);
};
const deleteEmployee = async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeService"].delete(id);
    return {
        success: true
    };
};
const getLeads = async (query, status)=>{
    let leads = [];
    if (status) {
        leads = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].getLeadsByStatus(status);
    } else {
        leads = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].getAll();
    }
    // Convert to plain objects
    leads = leads.map((lead)=>convertFirestoreDocToPlain(lead));
    if (query) {
        const lowercasedQuery = query.toLowerCase();
        leads = leads.filter((lead)=>lead.name.toLowerCase().includes(lowercasedQuery) || lead.company.toLowerCase().includes(lowercasedQuery));
    }
    return leads.sort((a, b)=>{
        const aDate = a.createdAt ? new Date(a.createdAt.toString()).getTime() : 0;
        const bDate = b.createdAt ? new Date(b.createdAt.toString()).getTime() : 0;
        return bDate - aDate;
    });
};
const getLeadById = async (id)=>{
    const lead = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].getById(id);
    if (!lead) return undefined;
    const plainLead = convertFirestoreDocToPlain(lead);
    return {
        ...plainLead,
        activities: plainLead.activities.sort((a, b)=>{
            const aDate = new Date(a.date.toString()).getTime();
            const bDate = new Date(b.date.toString()).getTime();
            return bDate - aDate;
        })
    };
};
const getRecentActivities = async (limit)=>{
    const leads = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].getAll();
    const plainLeads = leads.map((lead)=>convertFirestoreDocToPlain(lead));
    const allActivities = plainLeads.flatMap((lead)=>lead.activities.map((activity)=>({
                lead,
                activity
            })));
    return allActivities.sort((a, b)=>{
        const aDate = new Date(a.activity.date.toString()).getTime();
        const bDate = new Date(b.activity.date.toString()).getTime();
        return bDate - aDate;
    }).slice(0, limit);
};
const addLead = async (leadData)=>{
    const { notes, ...restOfLeadData } = leadData;
    const initialActivity = [];
    if (notes) {
        initialActivity.push({
            id: `act-${Date.now()}-1`,
            date: new Date().toISOString(),
            type: 'Email',
            notes: `Lead created in the system. Initial notes: ${notes}`
        });
    }
    const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].create({
        ...restOfLeadData,
        activities: initialActivity,
        priority: 'Medium',
        estimatedValue: leadData.products?.reduce((sum, product)=>sum + product.quantity * product.rate, 0) || 0
    });
    const newLead = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].getById(id);
    if (!newLead) {
        throw new Error('Failed to create lead');
    }
    return convertFirestoreDocToPlain(newLead);
};
const addActivityToLead = async (leadId, activityData)=>{
    const lead = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].getById(leadId);
    if (!lead) {
        throw new Error('Lead not found');
    }
    const newActivity = {
        ...activityData,
        id: `act-${leadId}-${Date.now()}`,
        date: new Date().toISOString()
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].addActivity(leadId, newActivity);
    return convertFirestoreDocToPlain(newActivity);
};
const updateLeadStatus = async (leadId, status)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].updateStatus(leadId, status);
    const updatedLead = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].getById(leadId);
    if (!updatedLead) {
        throw new Error('Lead not found after update');
    }
    return convertFirestoreDocToPlain(updatedLead);
};
const updateLead = async (leadId, leadData)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].update(leadId, leadData);
    const updatedLead = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].getById(leadId);
    if (!updatedLead) {
        throw new Error('Lead not found after update');
    }
    return convertFirestoreDocToPlain(updatedLead);
};
const deleteLead = async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].delete(id);
    return {
        success: true
    };
};
const getProducts = async ()=>{
    const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productService"].getAll();
    return products.map((product)=>convertFirestoreDocToPlain(product));
};
const addProduct = async (productData)=>{
    const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productService"].create({
        ...productData,
        isActive: true,
        stockQuantity: 100,
        minStockLevel: 10
    });
    const newProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productService"].getById(id);
    if (!newProduct) {
        throw new Error('Failed to create product');
    }
    return convertFirestoreDocToPlain(newProduct);
};
const updateProduct = async (id, productData)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productService"].update(id, productData);
    const updatedProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productService"].getById(id);
    if (!updatedProduct) {
        throw new Error('Product not found after update');
    }
    return convertFirestoreDocToPlain(updatedProduct);
};
const deleteProduct = async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productService"].delete(id);
    return {
        success: true
    };
};
const getLeadSources = async ()=>{
    const sources = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadSourcesService"].getAll();
    return sources.map((source)=>convertFirestoreDocToPlain(source));
};
const addLeadSource = async (name)=>{
    const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadSourcesService"].create({
        name,
        isActive: true
    });
    const newSource = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadSourcesService"].getById(id);
    if (!newSource) {
        throw new Error('Failed to create lead source');
    }
    return convertFirestoreDocToPlain(newSource);
};
const deleteLeadSource = async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadSourcesService"].delete(id);
    return {
        success: true
    };
};
const getQuotations = async ()=>{
    const quotations = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].getAll();
    const plainQuotations = quotations.map((q)=>convertFirestoreDocToPlain(q));
    return plainQuotations.sort((a, b)=>{
        const aDate = a.createdAt ? new Date(a.createdAt.toString()).getTime() : 0;
        const bDate = b.createdAt ? new Date(b.createdAt.toString()).getTime() : 0;
        return bDate - aDate;
    });
};
const getQuotationById = async (id)=>{
    const quotation = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].getById(id);
    return quotation ? convertFirestoreDocToPlain(quotation) : undefined;
};
const addQuotation = async (quotationData)=>{
    const quotationNumber = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].generateQuotationNumber();
    const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].create({
        ...quotationData,
        quotationNumber
    });
    const newQuotation = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].getById(id);
    if (!newQuotation) {
        throw new Error('Failed to create quotation');
    }
    return convertFirestoreDocToPlain(newQuotation);
};
const updateQuotation = async (id, quotationData)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].update(id, quotationData);
    const updatedQuotation = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].getById(id);
    if (!updatedQuotation) {
        throw new Error('Quotation not found after update');
    }
    return convertFirestoreDocToPlain(updatedQuotation);
};
const deleteQuotation = async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].delete(id);
    return {
        success: true
    };
};
const getQuotationTemplates = async ()=>{
    const templates = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationTemplatesService"].getAll();
    return templates.map((template)=>convertFirestoreDocToPlain(template));
};
const getQuotationTemplateById = async (id)=>{
    const template = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationTemplatesService"].getById(id);
    return template ? convertFirestoreDocToPlain(template) : undefined;
};
const addQuotationTemplate = async (templateData)=>{
    const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationTemplatesService"].create({
        ...templateData,
        isDefault: false
    });
    const newTemplate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationTemplatesService"].getById(id);
    if (!newTemplate) {
        throw new Error('Failed to create quotation template');
    }
    return convertFirestoreDocToPlain(newTemplate);
};
const updateQuotationTemplate = async (id, templateData)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationTemplatesService"].update(id, templateData);
    const updatedTemplate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationTemplatesService"].getById(id);
    if (!updatedTemplate) {
        throw new Error('Template not found after update');
    }
    return convertFirestoreDocToPlain(updatedTemplate);
};
const deleteQuotationTemplate = async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationTemplatesService"].delete(id);
    return {
        success: true
    };
};
const getEmployeeRoles = async ()=>{
    const roles = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeRolesService"].getAll();
    return roles.map((role)=>convertFirestoreDocToPlain(role));
};
const addEmployeeRole = async (name)=>{
    const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeRolesService"].create({
        name
    });
    const newRole = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeRolesService"].getById(id);
    if (!newRole) {
        throw new Error('Failed to create employee role');
    }
    return convertFirestoreDocToPlain(newRole);
};
const deleteEmployeeRole = async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeRolesService"].delete(id);
    return {
        success: true
    };
};
const getDepartments = async ()=>{
    const departments = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["departmentsService"].getAll();
    return departments.map((dept)=>convertFirestoreDocToPlain(dept));
};
const addDepartment = async (name)=>{
    const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["departmentsService"].create({
        name
    });
    const newDepartment = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["departmentsService"].getById(id);
    if (!newDepartment) {
        throw new Error('Failed to create department');
    }
    return convertFirestoreDocToPlain(newDepartment);
};
const deleteDepartment = async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["departmentsService"].delete(id);
    return {
        success: true
    };
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getLeads,
    getLeadById,
    getRecentActivities,
    addLead,
    addActivityToLead,
    updateLeadStatus,
    updateLead,
    deleteLead,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getLeadSources,
    addLeadSource,
    deleteLeadSource,
    getQuotations,
    getQuotationById,
    addQuotation,
    updateQuotation,
    deleteQuotation,
    getQuotationTemplates,
    getQuotationTemplateById,
    addQuotationTemplate,
    updateQuotationTemplate,
    deleteQuotationTemplate,
    getEmployeeRoles,
    addEmployeeRole,
    deleteEmployeeRole,
    getDepartments,
    addDepartment,
    deleteDepartment
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployees, "7fa8bc842463b1ec33e139235445fa57278ad38b35", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeById, "7f7433c41b0634dc7b5f0d1c3708d79d935f8bde34", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployee, "7f4eefc53973b8e6fbed50ffa2cc64fe40df104ad3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmployee, "7f0f59e3c0bdc096d699ee898b0c1ba20707191d4b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployee, "7fe3bac712c1f2e1723b72df2734d1286a00c8a875", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeads, "7f4280ff5e64067f99266109815caf0860a45cc58c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadById, "7f3ae5e8f46d47652a5fb84e3089a01a9238cf9bed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRecentActivities, "7fb4f29abf3ebe0f2a94c04f8d336c3e47599188ee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLead, "7fc6f659357e4b54787c2a339bdb6e16e7ae761acb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addActivityToLead, "7f05e84f0f97fc5a7a07e8131baefa2841070e643d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeadStatus, "7f4e672b0e36e084ca5eb122016c6383de1a5a99ba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLead, "7f5ad710a7cb483463fc09bb2de49c70ee34ee6c63", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLead, "7f579d5a450a43d8b74c568f68ca2b3c2566dc4a95", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "7ff71b0c7623881d0aa5c8c677cd09724481a157b2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProduct, "7f3d9e95cd0e81b0d13660c9a9a93768fb851fa506", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProduct, "7feddb7de602afea2493484ef7513323da3fdfb015", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "7fae3ad533f1dc6298a52f1957eff67f632545365d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadSources, "7fc9162346222c9de85ac70b2f85d9c9be072b4bb2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadSource, "7fa78ef03610d4e9976fbaa4e450f34f54cf2d02fc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLeadSource, "7fe5d28a16cab74d9ee3acbe0aafa76ffc672cfba6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotations, "7fabb9890e6ce6942891dc6903686fbb41d7e40da9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationById, "7f1846f698e1887660f585d5ea9149a07c7c850f92", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuotation, "7faf0a91ed8cef30a4af08e9037287b354a71db7e9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateQuotation, "7f90125ab01f83802f2fcb8e1f747656578c988c23", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteQuotation, "7f5591f7a8ee3bb38224df4376cdee9f8d5eb812fe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationTemplates, "7fe30da5fb8303e0a863d9120c6dd29a374504a050", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationTemplateById, "7f480200a3ee83c850bd3891fd7985198e896fe1ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuotationTemplate, "7fce767cc96f1429da191f8516a9b4784b223bb47e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateQuotationTemplate, "7fa6bcba2f1f7e8c8eeaf60c2dc415a8e405fa26f7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteQuotationTemplate, "7f39761948864339837957ca91e3e944cd8e441632", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeRoles, "7f6d87f222357d05d51ddaef3bee835c24413445c4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployeeRole, "7f822c7526a05588811630fb16c06bf87327d46e27", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployeeRole, "7ffd8613a6e078c5fd9d33441e4b0f2ad06720be86", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDepartments, "7f2e6eb1a1a75f8015dfce86483708dfbe658da89c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addDepartment, "7f31e15fd4f61e5b609e4a6d50eeccb9af77aafef8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDepartment, "7f93d0bb939f748aacd7331842952547c4a4a6ddf0", null);
}}),
"[project]/.next-internal/server/app/comprehensive-test/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
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
}}),
"[project]/.next-internal/server/app/comprehensive-test/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/comprehensive-test/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/comprehensive-test/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f2e6eb1a1a75f8015dfce86483708dfbe658da89c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDepartments"]),
    "7f31e15fd4f61e5b609e4a6d50eeccb9af77aafef8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDepartment"]),
    "7f3d9e95cd0e81b0d13660c9a9a93768fb851fa506": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProduct"]),
    "7f4280ff5e64067f99266109815caf0860a45cc58c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeads"]),
    "7f4eefc53973b8e6fbed50ffa2cc64fe40df104ad3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployee"]),
    "7f5591f7a8ee3bb38224df4376cdee9f8d5eb812fe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteQuotation"]),
    "7f579d5a450a43d8b74c568f68ca2b3c2566dc4a95": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLead"]),
    "7f6d87f222357d05d51ddaef3bee835c24413445c4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeRoles"]),
    "7f822c7526a05588811630fb16c06bf87327d46e27": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployeeRole"]),
    "7f93d0bb939f748aacd7331842952547c4a4a6ddf0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDepartment"]),
    "7fa78ef03610d4e9976fbaa4e450f34f54cf2d02fc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadSource"]),
    "7fa8bc842463b1ec33e139235445fa57278ad38b35": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployees"]),
    "7fabb9890e6ce6942891dc6903686fbb41d7e40da9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotations"]),
    "7fae3ad533f1dc6298a52f1957eff67f632545365d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"]),
    "7fc6f659357e4b54787c2a339bdb6e16e7ae761acb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLead"]),
    "7fc9162346222c9de85ac70b2f85d9c9be072b4bb2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadSources"]),
    "7fe3bac712c1f2e1723b72df2734d1286a00c8a875": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployee"]),
    "7fe5d28a16cab74d9ee3acbe0aafa76ffc672cfba6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLeadSource"]),
    "7ff71b0c7623881d0aa5c8c677cd09724481a157b2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"]),
    "7ffd8613a6e078c5fd9d33441e4b0f2ad06720be86": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployeeRole"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/comprehensive-test/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/comprehensive-test/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f2e6eb1a1a75f8015dfce86483708dfbe658da89c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f2e6eb1a1a75f8015dfce86483708dfbe658da89c"]),
    "7f31e15fd4f61e5b609e4a6d50eeccb9af77aafef8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f31e15fd4f61e5b609e4a6d50eeccb9af77aafef8"]),
    "7f3d9e95cd0e81b0d13660c9a9a93768fb851fa506": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f3d9e95cd0e81b0d13660c9a9a93768fb851fa506"]),
    "7f4280ff5e64067f99266109815caf0860a45cc58c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f4280ff5e64067f99266109815caf0860a45cc58c"]),
    "7f4eefc53973b8e6fbed50ffa2cc64fe40df104ad3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f4eefc53973b8e6fbed50ffa2cc64fe40df104ad3"]),
    "7f5591f7a8ee3bb38224df4376cdee9f8d5eb812fe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f5591f7a8ee3bb38224df4376cdee9f8d5eb812fe"]),
    "7f579d5a450a43d8b74c568f68ca2b3c2566dc4a95": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f579d5a450a43d8b74c568f68ca2b3c2566dc4a95"]),
    "7f6d87f222357d05d51ddaef3bee835c24413445c4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f6d87f222357d05d51ddaef3bee835c24413445c4"]),
    "7f822c7526a05588811630fb16c06bf87327d46e27": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f822c7526a05588811630fb16c06bf87327d46e27"]),
    "7f93d0bb939f748aacd7331842952547c4a4a6ddf0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f93d0bb939f748aacd7331842952547c4a4a6ddf0"]),
    "7fa78ef03610d4e9976fbaa4e450f34f54cf2d02fc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fa78ef03610d4e9976fbaa4e450f34f54cf2d02fc"]),
    "7fa8bc842463b1ec33e139235445fa57278ad38b35": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fa8bc842463b1ec33e139235445fa57278ad38b35"]),
    "7fabb9890e6ce6942891dc6903686fbb41d7e40da9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fabb9890e6ce6942891dc6903686fbb41d7e40da9"]),
    "7fae3ad533f1dc6298a52f1957eff67f632545365d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fae3ad533f1dc6298a52f1957eff67f632545365d"]),
    "7fc6f659357e4b54787c2a339bdb6e16e7ae761acb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fc6f659357e4b54787c2a339bdb6e16e7ae761acb"]),
    "7fc9162346222c9de85ac70b2f85d9c9be072b4bb2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fc9162346222c9de85ac70b2f85d9c9be072b4bb2"]),
    "7fe3bac712c1f2e1723b72df2734d1286a00c8a875": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fe3bac712c1f2e1723b72df2734d1286a00c8a875"]),
    "7fe5d28a16cab74d9ee3acbe0aafa76ffc672cfba6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fe5d28a16cab74d9ee3acbe0aafa76ffc672cfba6"]),
    "7ff71b0c7623881d0aa5c8c677cd09724481a157b2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ff71b0c7623881d0aa5c8c677cd09724481a157b2"]),
    "7ffd8613a6e078c5fd9d33441e4b0f2ad06720be86": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ffd8613a6e078c5fd9d33441e4b0f2ad06720be86"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/comprehensive-test/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$comprehensive$2d$test$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/comprehensive-test/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/components/comprehensive-firestore-test.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/comprehensive-firestore-test.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/comprehensive-firestore-test.tsx <module evaluation>", "default");
}}),
"[project]/src/components/comprehensive-firestore-test.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/comprehensive-firestore-test.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/comprehensive-firestore-test.tsx", "default");
}}),
"[project]/src/components/comprehensive-firestore-test.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$comprehensive$2d$firestore$2d$test$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/comprehensive-firestore-test.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$comprehensive$2d$firestore$2d$test$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/comprehensive-firestore-test.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$comprehensive$2d$firestore$2d$test$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/comprehensive-test/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ComprehensiveTestPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$comprehensive$2d$firestore$2d$test$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/comprehensive-firestore-test.tsx [app-rsc] (ecmascript)");
;
;
function ComprehensiveTestPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$comprehensive$2d$firestore$2d$test$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/comprehensive-test/page.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/comprehensive-test/page.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/comprehensive-test/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/comprehensive-test/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9ae5cdf8._.js.map