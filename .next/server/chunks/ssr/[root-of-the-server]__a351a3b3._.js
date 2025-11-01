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
            // Remove undefined values as Firestore doesn't accept them
            const cleanData = {};
            for (const [key, value] of Object.entries(data)){
                if (value !== undefined) {
                    cleanData[key] = value;
                }
            }
            const docData = {
                ...cleanData,
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
            // Remove undefined values as Firestore doesn't accept them
            const cleanData = {};
            for (const [key, value] of Object.entries(data)){
                if (value !== undefined) {
                    cleanData[key] = value;
                }
            }
            const docData = {
                ...cleanData,
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
            // Remove undefined values as Firestore doesn't accept them
            const cleanData = {};
            for (const [key, value] of Object.entries(data)){
                if (value !== undefined) {
                    cleanData[key] = value;
                }
            }
            const updateData = {
                ...cleanData,
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
    PRODUCT_CATEGORIES: 'productModels',
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
    "ProductCategoryService": (()=>ProductCategoryService),
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
    "productCategoriesService": (()=>productCategoriesService),
    "productCategoryService": (()=>productCategoryService),
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
const productCategoriesService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].PRODUCT_CATEGORIES);
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
            // Remove undefined values before persisting
            const sanitized = Object.fromEntries(Object.entries(activity).filter(([, v])=>v !== undefined));
            const newActivity = {
                ...sanitized,
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
}
class ProductCategoryService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FirestoreService"] {
    constructor(){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].PRODUCT_CATEGORIES);
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
    async generateQuotationNumber(prefix) {
        const quotations = await this.getAll();
        const regex = new RegExp(`^${prefix}-\\d{4}$`);
        const numberRegex = new RegExp(`^${prefix}-(\\d+)$`);
        const maxNumber = quotations.reduce((max, quotation)=>{
            if (!quotation.quotationNumber) return max;
            if (!regex.test(quotation.quotationNumber)) return max;
            const match = quotation.quotationNumber.match(numberRegex);
            if (match) {
                const num = parseInt(match[1], 10);
                return num > max ? num : max;
            }
            return max;
        }, 0);
        return `${prefix}-${String(maxNumber + 1).padStart(4, '0')}`;
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
const productCategoryService = new ProductCategoryService();
const quotationService = new QuotationService();
const customerService = new CustomerService();
const orderService = new OrderService();
const taskService = new TaskService();
}}),
"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f04f10f0ddeddd104b418724bb1785849c193f66a":"getQuotations","7f0b5bbbb79dabf61c8dbf70af3ffff389460f419b":"getEmployeeRoles","7f1116478ca304fed1b532ca4ce59d5d5b448efd86":"getQuotationById","7f1db3ac95e46d0fb06b447ac0f1095c4e9d7864b8":"updateProduct","7f1ec85b8bd4b8a25e53fce01871f00aef784118c9":"addProductCategory","7f269196162d7162085bfe24c2b6f3c9eeb8de910c":"addActivityToLead","7f298b9fe988cb1ffa83632945d936c189bd792dc0":"updateEmployee","7f2d6f92a2c75e8e3e60e49e1b34f04f7ce34b8ea1":"getQuotationsCount","7f2de586b93cabe05d91ddb2006970640cf7e23220":"getDepartments","7f2e33d68eae7df61b4f4e6c14476e66342d7dda08":"deleteLeadSource","7f306e023d33eb2f4cd6e278d2ba58f9ce4e42988b":"getActiveEmployeesCount","7f3153d570e205bc326fe41373d636c1aeebaf1fa9":"deleteProductCategory","7f36ec06c4ee9cd6eca054f7e4329c7fe597be6c75":"getRecentActivities","7f3777aecc7cb81616bea527a08a89d4fe73e9c5db":"updateQuotation","7f3c1be380f9a0a44bfd49095f6ae6bd965a6b526a":"addQuotationTemplate","7f3e5a6e7ad6fbd5540a28118cca7087133b837324":"getLeadsCount","7f3fd23bab2d334881ddfed4ef17bd4c53e0f69adb":"getQuotationTemplateById","7f41f0cf7169835566a4dfd277c9336ebbe880987d":"addEmployee","7f4b36d049affbaa6bdaa068bf84fb1acd862b79d4":"addDepartment","7f51002bc8cb90bca5ac167052035a3341833f8f08":"getProductsCount","7f570d4070a3316a960cb012b57a19ddb32ac8bbfd":"deleteQuotationTemplate","7f5ce6beaba83630ecc0b70a473c4b2d6911512a02":"deleteEmployee","7f5f40b0c1407ddbbe339c0d4cd166f510508443ae":"getActiveProductsCount","7f695fe749c0d9aab2ac486d89622d5b4e078477f2":"deleteEmployeeRole","7f705ed144dc34aa9cf8fdfa9b395d9d5a37f9cf02":"updateLeadStatus","7f7b957907463cba62338137af33f88b010ffab0dd":"updateQuotationTemplate","7f7c2d013a463dd6ad5bb725e2388417c71247f941":"addEmployeeRole","7f7d645fddf2346cccd897ff95af0ed14f70779d3a":"getQuotationTemplates","7f7ed7f40750e7a4c5c5a94b38bef46bc960e8647c":"getProductCategories","7f81ed99bf4c4b2ad51de24a64b2ecaa4ce3145926":"deleteQuotation","7f82d5948233efc223306c44e2a01deb4873021a20":"getLeads","7f8a39cb89579cab4c851aee68a93e5fd53b7b6fe8":"deleteLead","7f8badf9865ad7abe7dda8ba51ccbdc3405643eb84":"getEmployeesCount","7f92d94703b1b49a7a12dff73eeb3935472d3cbe90":"deleteDepartment","7f9b2288f5e837ee146778e3df872c309647d27f2b":"getEmployees","7fa1ce4be69d6d70d013be75de5496caa20eb1c9a7":"getQuotationsCountByStatus","7fab33ecffebcb8db1f945c866849358614a8f4597":"getLeadsCountByStatus","7fb1cf1d568ae18c62c90b9b2d6669b292ee581f0b":"getEmployeeById","7fc4c88d57430e7d33350dee03cd4a5ca2d8989512":"getEmployeeByEmail","7fcc7709996a7ef75f1fd5c5b7162ef7d8527ca75d":"addLead","7fcda8b9daf7fb361b3246487bdc63a633975fcf33":"getProductCategoryById","7fcfbf0e0745435f434f0a7fd0d898cb83096d6f3b":"updateProductCategory","7fd1caa7166fa9ab076034a9a5e7a9ceb556c0fe68":"getLeadById","7fd4e7574ebf04a18569fcf9ca203b1ba6cc86ee5e":"addQuotation","7fdb8fa0874a1af95778d81d67cbef8ca7b8a976d7":"addLeadSource","7fec28ffd46fa758634b470c272b079775b2466584":"addProduct","7ff2088dba0bc1dec8498350114093211bd576d9dc":"getProducts","7ff228315843844dc8e238479c86860a4f482472b4":"deleteProduct","7ff68e1eba6cc22b6b0761897ef85f028eb4032583":"updateLead","7ffa98412ae44a0f974abe620c42247c1c203f8246":"getLeadSources"},"",""] */ __turbopack_context__.s({
    "addActivityToLead": (()=>addActivityToLead),
    "addDepartment": (()=>addDepartment),
    "addEmployee": (()=>addEmployee),
    "addEmployeeRole": (()=>addEmployeeRole),
    "addLead": (()=>addLead),
    "addLeadSource": (()=>addLeadSource),
    "addProduct": (()=>addProduct),
    "addProductCategory": (()=>addProductCategory),
    "addQuotation": (()=>addQuotation),
    "addQuotationTemplate": (()=>addQuotationTemplate),
    "deleteDepartment": (()=>deleteDepartment),
    "deleteEmployee": (()=>deleteEmployee),
    "deleteEmployeeRole": (()=>deleteEmployeeRole),
    "deleteLead": (()=>deleteLead),
    "deleteLeadSource": (()=>deleteLeadSource),
    "deleteProduct": (()=>deleteProduct),
    "deleteProductCategory": (()=>deleteProductCategory),
    "deleteQuotation": (()=>deleteQuotation),
    "deleteQuotationTemplate": (()=>deleteQuotationTemplate),
    "getActiveEmployeesCount": (()=>getActiveEmployeesCount),
    "getActiveProductsCount": (()=>getActiveProductsCount),
    "getDepartments": (()=>getDepartments),
    "getEmployeeByEmail": (()=>getEmployeeByEmail),
    "getEmployeeById": (()=>getEmployeeById),
    "getEmployeeRoles": (()=>getEmployeeRoles),
    "getEmployees": (()=>getEmployees),
    "getEmployeesCount": (()=>getEmployeesCount),
    "getLeadById": (()=>getLeadById),
    "getLeadSources": (()=>getLeadSources),
    "getLeads": (()=>getLeads),
    "getLeadsCount": (()=>getLeadsCount),
    "getLeadsCountByStatus": (()=>getLeadsCountByStatus),
    "getProductCategories": (()=>getProductCategories),
    "getProductCategoryById": (()=>getProductCategoryById),
    "getProducts": (()=>getProducts),
    "getProductsCount": (()=>getProductsCount),
    "getQuotationById": (()=>getQuotationById),
    "getQuotationTemplateById": (()=>getQuotationTemplateById),
    "getQuotationTemplates": (()=>getQuotationTemplates),
    "getQuotations": (()=>getQuotations),
    "getQuotationsCount": (()=>getQuotationsCount),
    "getQuotationsCountByStatus": (()=>getQuotationsCountByStatus),
    "getRecentActivities": (()=>getRecentActivities),
    "updateEmployee": (()=>updateEmployee),
    "updateLead": (()=>updateLead),
    "updateLeadStatus": (()=>updateLeadStatus),
    "updateProduct": (()=>updateProduct),
    "updateProductCategory": (()=>updateProductCategory),
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
const getEmployeeByEmail = async (email)=>{
    const employee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeService"].getEmployeeByEmail(email);
    return employee ? convertFirestoreDocToPlain(employee) : null;
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
const getLeads = async (query, status, source, product)=>{
    let leads = [];
    if (status) {
        leads = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].getLeadsByStatus(status);
    } else {
        leads = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].getAll();
    }
    // Convert to plain objects
    leads = leads.map((lead)=>convertFirestoreDocToPlain(lead));
    // Apply text search filter
    if (query) {
        const lowercasedQuery = query.toLowerCase();
        leads = leads.filter((lead)=>lead.name.toLowerCase().includes(lowercasedQuery) || lead.company.toLowerCase().includes(lowercasedQuery));
    }
    // Apply source filter
    if (source) {
        leads = leads.filter((lead)=>lead.source === source);
    }
    // Apply product filter
    if (product) {
        leads = leads.filter((lead)=>lead.products && lead.products.some((p)=>p.productId === product));
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
    // Remove any undefined values since Firestore does not allow them
    const sanitizedActivityData = Object.fromEntries(Object.entries(activityData).filter(([, value])=>value !== undefined));
    const newActivity = {
        ...sanitizedActivityData,
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
const getProductCategories = async ()=>{
    const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productCategoriesService"].getAll();
    return categories.map((cat)=>convertFirestoreDocToPlain(cat));
};
const getProductCategoryById = async (id)=>{
    const category = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productCategoriesService"].getById(id);
    return category ? convertFirestoreDocToPlain(category) : undefined;
};
const addProductCategory = async (name, description)=>{
    const id = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productCategoriesService"].create({
        name,
        description,
        isActive: true
    });
    const newCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productCategoriesService"].getById(id);
    if (!newCategory) {
        throw new Error('Failed to create product category');
    }
    return convertFirestoreDocToPlain(newCategory);
};
const updateProductCategory = async (id, name, description)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productCategoriesService"].update(id, {
        name,
        description
    });
    const updatedCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productCategoriesService"].getById(id);
    if (!updatedCategory) {
        throw new Error('Product category not found after update');
    }
    return convertFirestoreDocToPlain(updatedCategory);
};
const deleteProductCategory = async (id)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productCategoriesService"].delete(id);
    return {
        success: true
    };
};
const getQuotations = async ()=>{
    const quotations = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].getWithQuery({
        orderBy: {
            field: 'createdAt',
            direction: 'desc'
        }
    });
    return quotations.map((q)=>convertFirestoreDocToPlain(q));
};
const getQuotationById = async (id)=>{
    const quotation = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].getById(id);
    return quotation ? convertFirestoreDocToPlain(quotation) : undefined;
};
const addQuotation = async (quotationData, quotationPrefix)=>{
    console.log('Data service received prefix:', quotationPrefix);
    const prefix = quotationPrefix?.trim() || 'QUO';
    console.log('Final prefix being used:', prefix);
    const quotationNumber = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].generateQuotationNumber(prefix);
    console.log('Generated quotation number:', quotationNumber);
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
const getLeadsCount = async ()=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].count();
};
const getQuotationsCount = async ()=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].count();
};
const getProductsCount = async ()=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productService"].count();
};
const getEmployeesCount = async ()=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeService"].count();
};
const getLeadsCountByStatus = async (status)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leadService"].count({
        where: [
            {
                field: 'status',
                operator: '==',
                value: status
            }
        ]
    });
};
const getQuotationsCountByStatus = async (status)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quotationService"].count({
        where: [
            {
                field: 'status',
                operator: '==',
                value: status
            }
        ]
    });
};
const getActiveProductsCount = async ()=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productService"].count({
        where: [
            {
                field: 'isActive',
                operator: '==',
                value: true
            }
        ]
    });
};
const getActiveEmployeesCount = async ()=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["employeeService"].count({
        where: [
            {
                field: 'isActive',
                operator: '==',
                value: true
            }
        ]
    });
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getEmployees,
    getEmployeeById,
    getEmployeeByEmail,
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
    getProductCategories,
    getProductCategoryById,
    addProductCategory,
    updateProductCategory,
    deleteProductCategory,
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
    deleteDepartment,
    getLeadsCount,
    getQuotationsCount,
    getProductsCount,
    getEmployeesCount,
    getLeadsCountByStatus,
    getQuotationsCountByStatus,
    getActiveProductsCount,
    getActiveEmployeesCount
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployees, "7f9b2288f5e837ee146778e3df872c309647d27f2b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeById, "7fb1cf1d568ae18c62c90b9b2d6669b292ee581f0b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeByEmail, "7fc4c88d57430e7d33350dee03cd4a5ca2d8989512", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployee, "7f41f0cf7169835566a4dfd277c9336ebbe880987d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmployee, "7f298b9fe988cb1ffa83632945d936c189bd792dc0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployee, "7f5ce6beaba83630ecc0b70a473c4b2d6911512a02", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeads, "7f82d5948233efc223306c44e2a01deb4873021a20", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadById, "7fd1caa7166fa9ab076034a9a5e7a9ceb556c0fe68", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRecentActivities, "7f36ec06c4ee9cd6eca054f7e4329c7fe597be6c75", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLead, "7fcc7709996a7ef75f1fd5c5b7162ef7d8527ca75d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addActivityToLead, "7f269196162d7162085bfe24c2b6f3c9eeb8de910c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeadStatus, "7f705ed144dc34aa9cf8fdfa9b395d9d5a37f9cf02", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLead, "7ff68e1eba6cc22b6b0761897ef85f028eb4032583", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLead, "7f8a39cb89579cab4c851aee68a93e5fd53b7b6fe8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "7ff2088dba0bc1dec8498350114093211bd576d9dc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProduct, "7fec28ffd46fa758634b470c272b079775b2466584", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProduct, "7f1db3ac95e46d0fb06b447ac0f1095c4e9d7864b8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "7ff228315843844dc8e238479c86860a4f482472b4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadSources, "7ffa98412ae44a0f974abe620c42247c1c203f8246", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadSource, "7fdb8fa0874a1af95778d81d67cbef8ca7b8a976d7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLeadSource, "7f2e33d68eae7df61b4f4e6c14476e66342d7dda08", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductCategories, "7f7ed7f40750e7a4c5c5a94b38bef46bc960e8647c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductCategoryById, "7fcda8b9daf7fb361b3246487bdc63a633975fcf33", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProductCategory, "7f1ec85b8bd4b8a25e53fce01871f00aef784118c9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductCategory, "7fcfbf0e0745435f434f0a7fd0d898cb83096d6f3b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProductCategory, "7f3153d570e205bc326fe41373d636c1aeebaf1fa9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotations, "7f04f10f0ddeddd104b418724bb1785849c193f66a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationById, "7f1116478ca304fed1b532ca4ce59d5d5b448efd86", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuotation, "7fd4e7574ebf04a18569fcf9ca203b1ba6cc86ee5e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateQuotation, "7f3777aecc7cb81616bea527a08a89d4fe73e9c5db", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteQuotation, "7f81ed99bf4c4b2ad51de24a64b2ecaa4ce3145926", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationTemplates, "7f7d645fddf2346cccd897ff95af0ed14f70779d3a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationTemplateById, "7f3fd23bab2d334881ddfed4ef17bd4c53e0f69adb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuotationTemplate, "7f3c1be380f9a0a44bfd49095f6ae6bd965a6b526a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateQuotationTemplate, "7f7b957907463cba62338137af33f88b010ffab0dd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteQuotationTemplate, "7f570d4070a3316a960cb012b57a19ddb32ac8bbfd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeRoles, "7f0b5bbbb79dabf61c8dbf70af3ffff389460f419b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployeeRole, "7f7c2d013a463dd6ad5bb725e2388417c71247f941", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployeeRole, "7f695fe749c0d9aab2ac486d89622d5b4e078477f2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDepartments, "7f2de586b93cabe05d91ddb2006970640cf7e23220", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addDepartment, "7f4b36d049affbaa6bdaa068bf84fb1acd862b79d4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDepartment, "7f92d94703b1b49a7a12dff73eeb3935472d3cbe90", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadsCount, "7f3e5a6e7ad6fbd5540a28118cca7087133b837324", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationsCount, "7f2d6f92a2c75e8e3e60e49e1b34f04f7ce34b8ea1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductsCount, "7f51002bc8cb90bca5ac167052035a3341833f8f08", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeesCount, "7f8badf9865ad7abe7dda8ba51ccbdc3405643eb84", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadsCountByStatus, "7fab33ecffebcb8db1f945c866849358614a8f4597", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationsCountByStatus, "7fa1ce4be69d6d70d013be75de5496caa20eb1c9a7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActiveProductsCount, "7f5f40b0c1407ddbbe339c0d4cd166f510508443ae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActiveEmployeesCount, "7f306e023d33eb2f4cd6e278d2ba58f9ce4e42988b", null);
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
;
;
;
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f04f10f0ddeddd104b418724bb1785849c193f66a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotations"]),
    "7f82d5948233efc223306c44e2a01deb4873021a20": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeads"]),
    "7ff2088dba0bc1dec8498350114093211bd576d9dc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f04f10f0ddeddd104b418724bb1785849c193f66a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f04f10f0ddeddd104b418724bb1785849c193f66a"]),
    "7f82d5948233efc223306c44e2a01deb4873021a20": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f82d5948233efc223306c44e2a01deb4873021a20"]),
    "7ff2088dba0bc1dec8498350114093211bd576d9dc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ff2088dba0bc1dec8498350114093211bd576d9dc"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/page.tsx", "default");
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a351a3b3._.js.map