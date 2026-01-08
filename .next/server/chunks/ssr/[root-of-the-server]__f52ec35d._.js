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
    ACTIVITY_LOGS: 'activityLogs',
    CURRENCIES: 'currencies'
};
}}),
"[project]/src/lib/firestore-service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FirestoreService": (()=>FirestoreService),
    "addCurrency": (()=>addCurrency),
    "createTimestamp": (()=>createTimestamp),
    "deleteCurrency": (()=>deleteCurrency),
    "formatTimestamp": (()=>formatTimestamp),
    "getActiveCurrencies": (()=>getActiveCurrencies),
    "getAllCurrencies": (()=>getAllCurrencies),
    "getCurrencyById": (()=>getCurrencyById),
    "serverTime": (()=>serverTime),
    "timestampToDate": (()=>timestampToDate),
    "updateCurrency": (()=>updateCurrency)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-rsc] (ecmascript)");
// Currency-specific functions
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/business-types.ts [app-rsc] (ecmascript)");
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
;
async function getAllCurrencies() {
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].CURRENCIES));
    return snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
}
async function getActiveCurrencies() {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].CURRENCIES), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orderBy"])('code', 'asc'));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
}
async function getCurrencyById(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].CURRENCIES, id);
    const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
    if (docSnap.exists()) {
        return {
            id: docSnap.id,
            ...docSnap.data()
        };
    }
    return null;
}
async function addCurrency(currencyData) {
    const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].CURRENCIES), {
        ...currencyData,
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    });
    return docRef.id;
}
async function updateCurrency(id, currencyData) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].CURRENCIES, id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, {
        ...currencyData,
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    });
}
async function deleteCurrency(id) {
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$business$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].CURRENCIES, id);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDoc"])(docRef);
}
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
/* __next_internal_action_entry_do_not_use__ [{"7f0b900bdacd23b80cfa42ee2659193dc63d563866":"getEmployeesCount","7f0e44f23d3c7919e802910994293ba5af468982fa":"getProductsCount","7f0eec47d7f3455687f950210982ed5eaade19ec0d":"updateQuotation","7f1455f8b318777754ab9b7b5ac6270bda312fba0d":"getActiveEmployeesCount","7f19c4485b5ffc22d762a2ac6e3d8651714a96dac5":"getEmployeeById","7f1a388a471526880d26227159645d4574e69eec04":"getQuotationsCountByStatus","7f211c04d8a0aa811dbf3ebd5eaef4cdf0d86d0d27":"updateProductCategory","7f28f0312ef2475661560aba6d2211cc1ecf40ddc8":"addQuotation","7f2ffe513d6cb877ab602ae19af7210964c29cb45c":"getProductCategoryById","7f33d4740a71a78b8166f45557e54c58071cf9721d":"addProductCategory","7f3563d0efd830c753f6dd196b47b96211a63fccbc":"addEmployee","7f367c5085291a37a1851fdbcfa11d607b63f3d8a6":"addLeadSource","7f3d9aa150bda258ae10ec3c76df09af6e7b54d9b3":"addActivityToLead","7f3e14bc7ef18238208187f13e333fd7b953d7d1e7":"updateEmployee","7f44ceb99d99462235ea05cf94c0346c12bfb5bf76":"getRecentActivities","7f4654b4a69b701893d7ff7c63f6ce253f47c1ce2d":"updateLeadStatus","7f4a20d8195ae7285732b38e6615880aff9f0838ff":"getLeadSources","7f4b406604fb4f23ab19ae2c65ee0e5eb30193ff9c":"deleteQuotationTemplate","7f4eb9a43ca7d2f7e7a29eaa7cc3cb9be7ade68424":"getQuotationById","7f56f323de8f245703ea18e687e41f198b09df0d18":"getEmployeeByEmail","7f58b3df2815b13c88487fb9bc327aa1136ac33959":"getProducts","7f5efc12e891723922f6a4f8f293527e6b597a2b41":"getLeadsCountByStatus","7f65be10c84fd8c7dd5cee02c8c7a7643a8c413872":"addDepartment","7f65deb60c7d2400de6746ef169a10f954d5230a2a":"deleteProductCategory","7f6ee7210d74eeb266fa57e73cf5b39a3e9fc25c81":"getQuotationTemplateById","7f70f871eb43db37af271b12a5f00b29d4dad8ff08":"addLead","7f7647e2122df1621fe89692d2222a9229fdf1ea9f":"updateLead","7f81e819b2ddf15d26d57b699b79785893bd58ae84":"deleteEmployeeRole","7f858254eb3a59e7dab365e690410cf669a53e222c":"getActiveProductsCount","7f8f68372f5a39e06105f6239c2d232deed79ef6ca":"addProduct","7f91d52f6a4498bfa43d1c3b3bed4c2955bf9caa5e":"getQuotationsCount","7f9d89248b9e9f83905a27cfe5b503290a8c58394d":"getLeadsCount","7fa28870af7d1644b948a6c68ec9ec67971f0283cd":"deleteDepartment","7fa3eaf1e501cd386360a0203d69bed8b510130fcc":"getQuotationTemplates","7fa505faea8d9f0797b974f4c4e1b16b22ef67d143":"deleteQuotation","7fac612984c6b1073c0f9b63ca660d587cdec64fdf":"updateProduct","7facf284ce254e1336cbaef1f847a5cbc46dff847e":"deleteLeadSource","7fb1e5d2000e99c91bf24d4e39d71ce542a88f9e5c":"getEmployees","7fb492c3da6c402b894e80a4f7908c57385a289be4":"getLeads","7fba8e38984b78115fcaa9e1323c540462dd1cc3d4":"deleteEmployee","7fc4c79fcec7920116a5e4fcf6c88519d91bebfcd0":"addQuotationTemplate","7fc6957e105b0cd9764c3443bbb074f3088df3ad3e":"getEmployeeRoles","7fce37adfcca0f5ee64a0a0c034d566187ac486d0e":"getQuotations","7fcfaec42b09d794ca7d8cc8fbd819d44c83195e6c":"updateQuotationTemplate","7fdc88f7c6a4cf8c68c802b932896090c05f809ab5":"deleteProduct","7fdf64358f381828b72e99b45ef549dc07de5b94d5":"getDepartments","7fe1e8295a10e203e5c2b3fc15cecb1f6dca6c433e":"deleteLead","7feeac06b526a1b11c6b2b3ec53bed70ee86d6aa85":"getLeadById","7ffa785f70b0e1d9b4e09686fa05d08088fb496370":"getProductCategories","7ffefbabd65d64b242a9eca6efbdd7d22af77aa608":"addEmployeeRole"},"",""] */ __turbopack_context__.s({
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployees, "7fb1e5d2000e99c91bf24d4e39d71ce542a88f9e5c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeById, "7f19c4485b5ffc22d762a2ac6e3d8651714a96dac5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeByEmail, "7f56f323de8f245703ea18e687e41f198b09df0d18", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployee, "7f3563d0efd830c753f6dd196b47b96211a63fccbc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmployee, "7f3e14bc7ef18238208187f13e333fd7b953d7d1e7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployee, "7fba8e38984b78115fcaa9e1323c540462dd1cc3d4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeads, "7fb492c3da6c402b894e80a4f7908c57385a289be4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadById, "7feeac06b526a1b11c6b2b3ec53bed70ee86d6aa85", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRecentActivities, "7f44ceb99d99462235ea05cf94c0346c12bfb5bf76", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLead, "7f70f871eb43db37af271b12a5f00b29d4dad8ff08", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addActivityToLead, "7f3d9aa150bda258ae10ec3c76df09af6e7b54d9b3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeadStatus, "7f4654b4a69b701893d7ff7c63f6ce253f47c1ce2d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLead, "7f7647e2122df1621fe89692d2222a9229fdf1ea9f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLead, "7fe1e8295a10e203e5c2b3fc15cecb1f6dca6c433e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "7f58b3df2815b13c88487fb9bc327aa1136ac33959", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProduct, "7f8f68372f5a39e06105f6239c2d232deed79ef6ca", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProduct, "7fac612984c6b1073c0f9b63ca660d587cdec64fdf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "7fdc88f7c6a4cf8c68c802b932896090c05f809ab5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadSources, "7f4a20d8195ae7285732b38e6615880aff9f0838ff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadSource, "7f367c5085291a37a1851fdbcfa11d607b63f3d8a6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLeadSource, "7facf284ce254e1336cbaef1f847a5cbc46dff847e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductCategories, "7ffa785f70b0e1d9b4e09686fa05d08088fb496370", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductCategoryById, "7f2ffe513d6cb877ab602ae19af7210964c29cb45c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProductCategory, "7f33d4740a71a78b8166f45557e54c58071cf9721d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductCategory, "7f211c04d8a0aa811dbf3ebd5eaef4cdf0d86d0d27", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProductCategory, "7f65deb60c7d2400de6746ef169a10f954d5230a2a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotations, "7fce37adfcca0f5ee64a0a0c034d566187ac486d0e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationById, "7f4eb9a43ca7d2f7e7a29eaa7cc3cb9be7ade68424", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuotation, "7f28f0312ef2475661560aba6d2211cc1ecf40ddc8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateQuotation, "7f0eec47d7f3455687f950210982ed5eaade19ec0d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteQuotation, "7fa505faea8d9f0797b974f4c4e1b16b22ef67d143", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationTemplates, "7fa3eaf1e501cd386360a0203d69bed8b510130fcc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationTemplateById, "7f6ee7210d74eeb266fa57e73cf5b39a3e9fc25c81", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuotationTemplate, "7fc4c79fcec7920116a5e4fcf6c88519d91bebfcd0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateQuotationTemplate, "7fcfaec42b09d794ca7d8cc8fbd819d44c83195e6c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteQuotationTemplate, "7f4b406604fb4f23ab19ae2c65ee0e5eb30193ff9c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeRoles, "7fc6957e105b0cd9764c3443bbb074f3088df3ad3e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployeeRole, "7ffefbabd65d64b242a9eca6efbdd7d22af77aa608", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployeeRole, "7f81e819b2ddf15d26d57b699b79785893bd58ae84", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDepartments, "7fdf64358f381828b72e99b45ef549dc07de5b94d5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addDepartment, "7f65be10c84fd8c7dd5cee02c8c7a7643a8c413872", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDepartment, "7fa28870af7d1644b948a6c68ec9ec67971f0283cd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadsCount, "7f9d89248b9e9f83905a27cfe5b503290a8c58394d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationsCount, "7f91d52f6a4498bfa43d1c3b3bed4c2955bf9caa5e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductsCount, "7f0e44f23d3c7919e802910994293ba5af468982fa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeesCount, "7f0b900bdacd23b80cfa42ee2659193dc63d563866", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadsCountByStatus, "7f5efc12e891723922f6a4f8f293527e6b597a2b41", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationsCountByStatus, "7f1a388a471526880d26227159645d4574e69eec04", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActiveProductsCount, "7f858254eb3a59e7dab365e690410cf669a53e222c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActiveEmployeesCount, "7f1455f8b318777754ab9b7b5ac6270bda312fba0d", null);
}}),
"[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("firebase-admin/auth");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("firebase-admin/app");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}}),
"[externals]/node:perf_hooks [external] (node:perf_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:perf_hooks", () => require("node:perf_hooks"));

module.exports = mod;
}}),
"[externals]/express [external] (express, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("express", () => require("express"));

module.exports = mod;
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/async_hooks [external] (async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[externals]/require-in-the-middle [external] (require-in-the-middle, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("require-in-the-middle", () => require("require-in-the-middle"));

module.exports = mod;
}}),
"[externals]/import-in-the-middle [external] (import-in-the-middle, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("import-in-the-middle", () => require("import-in-the-middle"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/dgram [external] (dgram, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dgram", () => require("dgram"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[project]/src/ai/genkit.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ai": (()=>ai)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$genkit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/genkit.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$genkit$2d$ai$2f$googleai$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@genkit-ai/googleai/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$genkit$2d$ai$2f$googleai$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@genkit-ai/googleai/lib/index.mjs [app-rsc] (ecmascript) <locals>");
;
;
const ai = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$genkit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["genkit"])({
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$genkit$2d$ai$2f$googleai$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["googleAI"])()
    ],
    model: 'googleai/gemini-2.5-flash'
});
}}),
"[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Summarize Meeting Notes Flow
/* __next_internal_action_entry_do_not_use__ [{"40d93c53acd21f87d84976506f86c23963b1eec55f":"summarizeMeetingNotes"},"",""] */ __turbopack_context__.s({
    "summarizeMeetingNotes": (()=>summarizeMeetingNotes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview Summarizes lengthy meeting notes into concise summaries using GenAI.
 *
 * - summarizeMeetingNotes - A function that handles the summarization of meeting notes.
 * - SummarizeMeetingNotesInput - The input type for the summarizeMeetingNotes function.
 * - SummarizeMeetingNotesOutput - The return type for the summarizeMeetingNotes function.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const SummarizeMeetingNotesInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The lengthy meeting notes to be summarized.')
});
const SummarizeMeetingNotesOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('A concise summary of the meeting notes.')
});
async function summarizeMeetingNotes(input) {
    return summarizeMeetingNotesFlow(input);
}
const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].definePrompt({
    name: 'summarizeMeetingNotesPrompt',
    input: {
        schema: SummarizeMeetingNotesInputSchema
    },
    output: {
        schema: SummarizeMeetingNotesOutputSchema
    },
    prompt: `Summarize the following meeting notes into a concise summary:

  {{{notes}}}`
});
const summarizeMeetingNotesFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'summarizeMeetingNotesFlow',
    inputSchema: SummarizeMeetingNotesInputSchema,
    outputSchema: SummarizeMeetingNotesOutputSchema
}, async (input)=>{
    const { output } = await prompt(input);
    return output;
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    summarizeMeetingNotes
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(summarizeMeetingNotes, "40d93c53acd21f87d84976506f86c23963b1eec55f", null);
}}),
"[project]/src/lib/data/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Firestore-based data service - replaces JSON file operations
// Original JSON-based service backed up as index-json-backup.ts
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
;
}}),
"[project]/src/lib/data/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-rsc] (ecmascript) <locals>");
}}),
"[project]/src/lib/storage-utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Firebase Storage utilities for PDF file management
// Generate UUID without external dependency
__turbopack_context__.s({
    "deleteImageFromStorage": (()=>deleteImageFromStorage),
    "deletePDF": (()=>deletePDF),
    "deletePDFFromStorage": (()=>deletePDFFromStorage),
    "formatFileSize": (()=>formatFileSize),
    "uploadImageToStorage": (()=>uploadImageToStorage),
    "uploadPDF": (()=>uploadPDF),
    "uploadPDFToStorage": (()=>uploadPDFToStorage),
    "validateImageFile": (()=>validateImageFile),
    "validatePDFFile": (()=>validatePDFFile)
});
// Firebase Storage upload (preferred to avoid large Server Actions bodies)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/node-esm/index.node.esm.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-rsc] (ecmascript)");
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
async function uploadPDF(file, folder = 'catalogs') {
    console.warn('uploadPDF is deprecated, use uploadPDFToStorage instead');
    return uploadPDFToStorage(file, folder);
}
;
;
async function uploadPDFToStorage(file, folder = 'catalogs', onProgress) {
    if (!isPdfFile(file)) {
        throw new Error('Only PDF files are allowed');
    }
    // Allow up to 10MB for Storage uploads
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
        throw new Error('File size must be less than 10MB');
    }
    const uniqueId = generateUUID();
    const filePath = `${folder}/${uniqueId}-${encodeURIComponent(file.name)}`;
    const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["storage"], filePath);
    const task = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadBytesResumable"])(storageRef, file, {
        contentType: 'application/pdf'
    });
    const url = await new Promise((resolve, reject)=>{
        task.on('state_changed', (snapshot)=>{
            if (onProgress) {
                const percent = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
                onProgress(percent);
            }
        }, (error)=>reject(error), async ()=>{
            const downloadUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDownloadURL"])(task.snapshot.ref);
            resolve(downloadUrl);
        });
    });
    return {
        url,
        path: filePath,
        fileName: file.name
    };
}
async function deletePDFFromStorage(filePath) {
    try {
        const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["storage"], filePath);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteObject"])(storageRef);
        console.log(`Successfully deleted file: ${filePath}`);
    } catch (error) {
        console.error('Error deleting file from storage:', error);
        throw new Error(`Failed to delete file: ${filePath}`);
    }
}
async function deletePDF(filePath) {
    console.warn('deletePDF is deprecated, use deletePDFFromStorage instead');
    return deletePDFFromStorage(filePath);
}
function validatePDFFile(file) {
    // Check file type (support cases where MIME may be generic but name ends with .pdf)
    if (!isPdfFile(file)) {
        return {
            isValid: false,
            error: 'Only PDF files are allowed'
        };
    }
    // Check file size (10MB limit for Firebase Storage)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
        return {
            isValid: false,
            error: 'File size must be less than 10MB'
        };
    }
    // Check file name length
    if (file.name.length > 100) {
        return {
            isValid: false,
            error: 'File name is too long'
        };
    }
    return {
        isValid: true
    };
}
// Heuristic to identify PDFs when the MIME type can be unreliable
function isPdfFile(file) {
    const type = (file.type || '').toLowerCase();
    const name = (file.name || '').toLowerCase();
    if (type === 'application/pdf' || type === 'application/x-pdf') return true;
    // Some environments provide a generic type for downloads/uploads
    if ((type === '' || type === 'application/octet-stream') && name.endsWith('.pdf')) return true;
    return false;
}
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = [
        'Bytes',
        'KB',
        'MB',
        'GB'
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
async function uploadImageToStorage(file, folder = 'products', onProgress) {
    if (!isImageFile(file)) {
        throw new Error('Only image files are allowed');
    }
    // Allow up to 10MB for image uploads
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
        throw new Error('Image size must be less than 10MB');
    }
    const uniqueId = generateUUID();
    const filePath = `${folder}/${uniqueId}-${encodeURIComponent(file.name)}`;
    const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["storage"], filePath);
    const task = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadBytesResumable"])(storageRef, file, {
        contentType: file.type
    });
    const url = await new Promise((resolve, reject)=>{
        task.on('state_changed', (snapshot)=>{
            if (onProgress) {
                const percent = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
                onProgress(percent);
            }
        }, (error)=>reject(error), async ()=>{
            const downloadUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDownloadURL"])(task.snapshot.ref);
            resolve(downloadUrl);
        });
    });
    return {
        url,
        path: filePath,
        fileName: file.name
    };
}
async function deleteImageFromStorage(filePath) {
    try {
        const storageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["storage"], filePath);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$node$2d$esm$2f$index$2e$node$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteObject"])(storageRef);
        console.log(`Successfully deleted image: ${filePath}`);
    } catch (error) {
        console.error('Error deleting image from storage:', error);
        throw new Error(`Failed to delete image: ${filePath}`);
    }
}
function validateImageFile(file) {
    if (!isImageFile(file)) {
        return {
            isValid: false,
            error: 'Only image files (JPG, PNG, GIF, WebP) are allowed'
        };
    }
    // Check file size (10MB limit)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
        return {
            isValid: false,
            error: 'Image size must be less than 10MB'
        };
    }
    // Check file name length
    if (file.name.length > 100) {
        return {
            isValid: false,
            error: 'File name is too long'
        };
    }
    return {
        isValid: true
    };
}
// Helper to identify image files
function isImageFile(file) {
    const type = (file.type || '').toLowerCase();
    const name = (file.name || '').toLowerCase();
    const validTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp'
    ];
    if (validTypes.includes(type)) return true;
    // Fallback to extension check
    const validExtensions = [
        '.jpg',
        '.jpeg',
        '.png',
        '.gif',
        '.webp'
    ];
    if ((type === '' || type === 'application/octet-stream') && validExtensions.some((ext)=>name.endsWith(ext))) {
        return true;
    }
    return false;
}
}}),
"[project]/src/lib/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"000995be71b8a8838960047993f11778f80310d90e":"getEmployeesCountAction","00559255a4ea619ea22c6b6a046c0c51eb09e6701b":"getActiveProductsCountAction","0078a8fce0fcaaefbe7644816de95870edb024f189":"getLeadsCountAction","0097146843e892c7ab59227503895a0f98c82c4686":"getQuotationsCountAction","00b17ed6eeb90cbbed0f9960b083c8bf39c7c957d4":"getProductsCountAction","00d0ef69458461782a8f6237a38962824b1ea53558":"getActiveEmployeesCountAction","00ec640e524c2b09cd05bcbc91e8aa00d0db01d112":"getProductCategoriesAction","401384dbfe8db00514dd0428cf8ce7cfb73e10f328":"importProductsFromCSV","40170e85279d4543f6383130b926f7e5969ba55a92":"addQuotation","40176d3d6990cb08430dd0b9f623e71b115973d4e1":"deleteProduct","40181a13a40b0fe992551eab7d082a69960b957c02":"deleteLeadAction","401e2f0858ac2ea902204a5a5742eaf7462e09bb15":"getLeadsCountByStatusAction","402b86358f3fc75c35b2441b4c361ea970fb903f14":"deleteQuotationAction","40359399de339d67348ca376f48900386d4d5745ae":"deleteEmployeeRoleAction","4035f8968d972c4a9f760664964cf4bcbf219691f8":"deleteEmployeeAction","40459f91106fd8737e88692909df491a7fb9c3e5ac":"getCurrentUserEmployeeAction","404f8056db98fe5905211494f9d0215a9e2221b5a7":"deleteDepartmentAction","4056af8aa8c98439c52c722bc08f3ec36e2430ed2d":"addDepartmentAction","40670f9184549e11d20b28afbb6668ba8039067652":"deleteProductCategoryAction","406997ba66ecdbc018a39a0b5fd55d2cc738937cd0":"addCurrencyAction","406d37954df7b6956afe41b91c59d0a96e37ec86f6":"logCommunicationActivityAction","4081bb2bb660ecc7da597a57e375fe93aa349fb15c":"deleteQuotationTemplateAction","40861195548c217512dbe1823b0a2fac97faf0a2d4":"createLead","40a5a5b33b502bb792212e4b1d938c736f42698990":"getQuotationsCountByStatusAction","40aacf58a50d542127986debd15c6f93a962591b6d":"addProductCategoryAction","40ac9647394c3fca94265ae16e638242d94a5e8503":"addEmployeeRoleAction","40c5244f064772c6a13c48bf3003ce9d09bf9a4420":"addQuotationTemplateAction","40ca09e7bc0e19e67955d0f6e7229103d8a91031a7":"logActivity","40db1951ba45f732cb685ad1ead679cc9a387113e1":"addLeadSourceAction","40db5ce40e7ac2c285029b1e06e10e7fce667f13e2":"addEmployeeAction","40df2fd914c2479a9faa25a5f8ae22264f2d2d1760":"addProduct","40ea2e420858d93f4499799b03c3f5b08f6f9c9e87":"deleteCurrencyAction","40f2b2cbe6bb6809904e344ab0663ed85597aaa19f":"deleteLeadSourceAction","40f5f7d11f95831f84e29a84974f5e2a540e9c827e":"getSummaryForNotes","6055a96d6c291f06694e3d11b5bc2c9d814730d762":"updateEmployeeAction","60752bc7c2d3a5394ffc424eb347ed8ea299dc55ed":"updateQuotationTemplateAction","609c476f3eeb7594fefe346a0d8e15a03ceb0681a1":"updateLead","60a95b8cd1e162d879a747c213e25f9f3232811747":"updateCurrencyAction","60cdaa732711e2e8962552c705491d3a52fe96d609":"updateQuotation","60ebb75a84c9a24d13f8ae5da3e6c5337463ff14d9":"updateProduct","70e900c17df2a5ef77c00957931f5c786f66da211b":"updateProductCategoryAction","78737e482bc77b2f9c03c343dd86c2540566903ea8":"updateLeadStatusAction"},"",""] */ __turbopack_context__.s({
    "addCurrencyAction": (()=>addCurrencyAction),
    "addDepartmentAction": (()=>addDepartmentAction),
    "addEmployeeAction": (()=>addEmployeeAction),
    "addEmployeeRoleAction": (()=>addEmployeeRoleAction),
    "addLeadSourceAction": (()=>addLeadSourceAction),
    "addProduct": (()=>addProduct),
    "addProductCategoryAction": (()=>addProductCategoryAction),
    "addQuotation": (()=>addQuotation),
    "addQuotationTemplateAction": (()=>addQuotationTemplateAction),
    "createLead": (()=>createLead),
    "deleteCurrencyAction": (()=>deleteCurrencyAction),
    "deleteDepartmentAction": (()=>deleteDepartmentAction),
    "deleteEmployeeAction": (()=>deleteEmployeeAction),
    "deleteEmployeeRoleAction": (()=>deleteEmployeeRoleAction),
    "deleteLeadAction": (()=>deleteLeadAction),
    "deleteLeadSourceAction": (()=>deleteLeadSourceAction),
    "deleteProduct": (()=>deleteProduct),
    "deleteProductCategoryAction": (()=>deleteProductCategoryAction),
    "deleteQuotationAction": (()=>deleteQuotationAction),
    "deleteQuotationTemplateAction": (()=>deleteQuotationTemplateAction),
    "getActiveEmployeesCountAction": (()=>getActiveEmployeesCountAction),
    "getActiveProductsCountAction": (()=>getActiveProductsCountAction),
    "getCurrentUserEmployeeAction": (()=>getCurrentUserEmployeeAction),
    "getEmployeesCountAction": (()=>getEmployeesCountAction),
    "getLeadsCountAction": (()=>getLeadsCountAction),
    "getLeadsCountByStatusAction": (()=>getLeadsCountByStatusAction),
    "getProductCategoriesAction": (()=>getProductCategoriesAction),
    "getProductsCountAction": (()=>getProductsCountAction),
    "getQuotationsCountAction": (()=>getQuotationsCountAction),
    "getQuotationsCountByStatusAction": (()=>getQuotationsCountByStatusAction),
    "getSummaryForNotes": (()=>getSummaryForNotes),
    "importProductsFromCSV": (()=>importProductsFromCSV),
    "logActivity": (()=>logActivity),
    "logCommunicationActivityAction": (()=>logCommunicationActivityAction),
    "updateCurrencyAction": (()=>updateCurrencyAction),
    "updateEmployeeAction": (()=>updateEmployeeAction),
    "updateLead": (()=>updateLead),
    "updateLeadStatusAction": (()=>updateLeadStatusAction),
    "updateProduct": (()=>updateProduct),
    "updateProductCategoryAction": (()=>updateProductCategoryAction),
    "updateQuotation": (()=>updateQuotation),
    "updateQuotationTemplateAction": (()=>updateQuotationTemplateAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/auth [external] (firebase-admin/auth, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/app [external] (firebase-admin/app, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage-utils.ts [app-rsc] (ecmascript)");
// ==================== Currency Actions ====================
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
// Initialize Firebase Admin SDK
function initializeFirebaseAdmin() {
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["getApps"])().length === 0) {
        // Check if all required environment variables are present
        const requiredEnvVars = [
            'FIREBASE_PROJECT_ID',
            'FIREBASE_PRIVATE_KEY',
            'FIREBASE_CLIENT_EMAIL'
        ];
        const missingVars = requiredEnvVars.filter((varName)=>!process.env[varName]);
        if (missingVars.length > 0) {
            throw new Error(`Missing required Firebase environment variables: ${missingVars.join(', ')}`);
        }
        const serviceAccount = {
            type: "service_account",
            project_id: process.env.FIREBASE_PROJECT_ID,
            private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
            private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            client_id: process.env.FIREBASE_CLIENT_ID,
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.FIREBASE_CLIENT_EMAIL}`
        };
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["initializeApp"])({
            credential: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$app__$5b$external$5d$__$28$firebase$2d$admin$2f$app$2c$__esm_import$29$__["cert"])(serviceAccount),
            projectId: process.env.FIREBASE_PROJECT_ID
        });
    }
}
const LeadProductSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    productId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Product must be selected'),
    quantity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number().min(1),
    rate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number().min(0),
    selectedSku: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
});
const CreateLeadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Name must be at least 2 characters'),
    company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Company must be at least 2 characters'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email('Invalid email address'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, 'Phone number seems too short'),
    whatsappNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    client_address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    client_gst_no: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'New',
        'In Discussion',
        'Negotiation',
        'Closed - Won',
        'Closed - Lost'
    ]),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Please select a lead source'),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    products: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(LeadProductSchema).optional(),
    createdBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Created by field is required')
});
async function createLead(formData) {
    const productsJSON = formData.get('products');
    const products = productsJSON ? JSON.parse(productsJSON) : [];
    const validatedFields = CreateLeadSchema.safeParse({
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        whatsappNumber: formData.get('whatsappNumber'),
        client_address: formData.get('client_address'),
        client_gst_no: formData.get('client_gst_no'),
        status: formData.get('status'),
        source: formData.get('source'),
        notes: formData.get('notes'),
        products: products,
        createdBy: formData.get('createdBy')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to create lead.'
        };
    }
    let newLeadId;
    try {
        const leadData = {
            ...validatedFields.data,
            products: validatedFields.data.products || []
        };
        const newLead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLead"])(leadData);
        newLeadId = newLead.id;
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Lead.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/leads');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    if (newLeadId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/leads/${newLeadId}`);
    }
    return {
        message: 'Successfully created lead.'
    };
}
const UpdateLeadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Name must be at least 2 characters'),
    company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Company must be at least 2 characters'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email('Invalid email address'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, 'Phone number seems too short'),
    whatsappNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    client_address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    client_gst_no: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'New',
        'In Discussion',
        'Negotiation',
        'Closed - Won',
        'Closed - Lost'
    ]),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Please select a lead source'),
    products: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(LeadProductSchema).optional()
});
function generateChangeNotes(oldLead, newLeadData, allProducts) {
    const changes = [];
    if (oldLead.name !== newLeadData.name) {
        changes.push(`Name changed from "${oldLead.name}" to "${newLeadData.name}".`);
    }
    if (oldLead.company !== newLeadData.company) {
        changes.push(`Company changed from "${oldLead.company}" to "${newLeadData.company}".`);
    }
    if (oldLead.email !== newLeadData.email) {
        changes.push(`Email changed from "${oldLead.email}" to "${newLeadData.email}".`);
    }
    if (oldLead.phone !== newLeadData.phone) {
        changes.push(`Phone changed from "${oldLead.phone}" to "${newLeadData.phone}".`);
    }
    if (oldLead.whatsappNumber !== newLeadData.whatsappNumber) {
        changes.push(`WhatsApp Number changed from "${oldLead.whatsappNumber || 'N/A'}" to "${newLeadData.whatsappNumber || 'N/A'}".`);
    }
    if (oldLead.client_address !== newLeadData.client_address) {
        changes.push(`Client Address changed from "${oldLead.client_address || 'N/A'}" to "${newLeadData.client_address || 'N/A'}".`);
    }
    if (oldLead.client_gst_no !== newLeadData.client_gst_no) {
        changes.push(`Client GST Number changed from "${oldLead.client_gst_no || 'N/A'}" to "${newLeadData.client_gst_no || 'N/A'}".`);
    }
    if (oldLead.status !== newLeadData.status) {
        changes.push(`Status changed from "${oldLead.status}" to "${newLeadData.status}".`);
    }
    if (oldLead.source !== newLeadData.source) {
        changes.push(`Source changed from "${oldLead.source}" to "${newLeadData.source}".`);
    }
    const oldProducts = oldLead.products || [];
    const newProducts = newLeadData.products || [];
    if (JSON.stringify(oldProducts) !== JSON.stringify(newProducts)) {
        const getProductName = (productId)=>allProducts.find((p)=>p.id === productId)?.name || productId;
        const formatProduct = (p)=>`${getProductName(p.productId)} (Qty: ${p.quantity}, Rate: ${p.rate}, SKU: ${p.selectedSku || 'N/A'})`;
        const oldProductStr = oldProducts.map(formatProduct).join(', ') || 'None';
        const newProductStr = newProducts.map(formatProduct).join(', ') || 'None';
        changes.push(`Interested products updated.\n- Old: ${oldProductStr}\n- New: ${newProductStr}`);
    }
    if (changes.length === 0) {
        return 'No changes were made to the lead details.';
    }
    return 'Lead details were updated:\n' + changes.map((c)=>`- ${c}`).join('\n');
}
async function updateLead(leadId, formData) {
    const [oldLead, allProducts] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadById"])(leadId),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"])()
    ]);
    if (!oldLead) {
        return {
            message: 'Error: Lead not found.'
        };
    }
    const productsJSON = formData.get('products');
    const products = productsJSON ? JSON.parse(productsJSON) : [];
    const validatedFields = UpdateLeadSchema.safeParse({
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        whatsappNumber: formData.get('whatsappNumber'),
        client_address: formData.get('client_address'),
        client_gst_no: formData.get('client_gst_no'),
        status: formData.get('status'),
        source: formData.get('source'),
        products: products
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to update lead.'
        };
    }
    const newLeadData = validatedFields.data;
    const changeNotes = generateChangeNotes(oldLead, newLeadData, allProducts);
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLead"])(leadId, newLeadData);
        if (changeNotes !== 'No changes were made to the lead details.') {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addActivityToLead"])(leadId, {
                type: 'Revision Request',
                notes: changeNotes
            });
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        return {
            message: `Database Error: Failed to Update Lead. ${message}`
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/leads');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/leads/${leadId}`);
    return {
        message: 'Successfully updated lead.'
    };
}
const ProductSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(3, {
        message: 'Product name must be at least 3 characters.'
    }),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number().min(0, {
        message: 'Price must be a positive number.'
    }),
    gstRate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number().min(0).max(100),
    categoryId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    skus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional(),
    catalogueUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url('Please enter a valid URL.').optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    cataloguePdf: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        fileName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        filePath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        uploadedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
    }).optional(),
    productImage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        fileName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        filePath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        uploadedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
    }).optional()
});
async function addProduct(formData) {
    const skusJSON = formData.get('skus');
    const skus = skusJSON ? JSON.parse(skusJSON) : [];
    const catalogPdfJSON = formData.get('catalogPdf');
    const catalogPdf = catalogPdfJSON ? JSON.parse(catalogPdfJSON) : undefined;
    const productImageJSON = formData.get('productImage');
    console.log('Product Image JSON received:', productImageJSON);
    const productImage = productImageJSON ? JSON.parse(productImageJSON) : undefined;
    console.log('Product Image parsed:', productImage);
    const validatedFields = ProductSchema.safeParse({
        name: formData.get('name'),
        price: formData.get('price'),
        gstRate: formData.get('gstRate'),
        categoryId: formData.get('categoryId'),
        description: formData.get('description') || undefined,
        skus: skus,
        catalogueUrl: formData.get('catalogueUrl') || '',
        cataloguePdf: catalogPdf,
        productImage: productImage
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to add product.'
        };
    }
    try {
        const data = validatedFields.data;
        // Remove undefined values before sending to Firestore
        const cleanData = Object.fromEntries(Object.entries(data).filter(([_, v])=>v !== undefined));
        console.log('Clean data being sent to database:', JSON.stringify(cleanData, null, 2));
        // Create the product
        const newProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProduct"])(cleanData);
    } catch (error) {
        return {
            message: 'Database Error: Failed to add product.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/products');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/leads'); // Revalidate leads in case product info is needed
    return {
        message: 'Successfully added product.'
    };
}
async function updateProduct(id, formData) {
    const skusJSON = formData.get('skus');
    const skus = skusJSON ? JSON.parse(skusJSON) : [];
    const catalogPdfJSON = formData.get('catalogPdf');
    const catalogPdf = catalogPdfJSON ? JSON.parse(catalogPdfJSON) : undefined;
    const removeCatalogPdf = String(formData.get('removeCatalogPdf') || '').toLowerCase() === 'true';
    // Handle product image - can be File object (new upload) or JSON string (existing metadata)
    const productImageData = formData.get('productImage');
    const existingProductImageJSON = formData.get('existingProductImage');
    const removeProductImage = String(formData.get('removeProductImage') || '').toLowerCase() === 'true';
    let productImage = undefined;
    // If there's a new file upload, handle it
    if (productImageData instanceof File) {
        try {
            const uploadResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadImageToStorage"])(productImageData, 'products');
            productImage = {
                url: uploadResult.url,
                fileName: uploadResult.fileName,
                filePath: uploadResult.path,
                uploadedAt: new Date().toISOString()
            };
        } catch (error) {
            console.error('Failed to upload product image:', error);
            return {
                message: 'Failed to upload product image.'
            };
        }
    } else if (existingProductImageJSON && !removeProductImage) {
        // Keep existing image metadata
        productImage = JSON.parse(existingProductImageJSON);
    }
    // Debug logs removed
    const validatedFields = ProductSchema.safeParse({
        name: formData.get('name'),
        price: formData.get('price'),
        gstRate: formData.get('gstRate'),
        categoryId: formData.get('categoryId'),
        description: formData.get('description') || undefined,
        skus: skus,
        catalogueUrl: formData.get('catalogueUrl') || '',
        cataloguePdf: catalogPdf,
        productImage: productImage
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to update product.'
        };
    }
    try {
        // Get the current product to check for existing PDF
        const currentProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"])().then((products)=>products.find((p)=>p.id === id));
        const data = validatedFields.data;
        const updateData = {
            ...data
        };
        // If user explicitly removed the existing PDF and didn't upload a new one, clear the field
        if (removeCatalogPdf && !catalogPdf) {
            // Delete the old PDF from Firebase Storage if it exists
            if (currentProduct?.cataloguePdf?.filePath) {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deletePDFFromStorage"])(currentProduct.cataloguePdf.filePath);
                } catch (error) {
                    console.error('Failed to delete PDF from storage:', error);
                // Continue with the update even if PDF deletion fails
                }
            }
            updateData.cataloguePdf = null; // This will clear the field in Firestore
        } else if (catalogPdf && currentProduct?.cataloguePdf?.filePath && currentProduct.cataloguePdf.filePath !== catalogPdf.filePath) {
            // If a new PDF was uploaded, delete the old one from storage
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deletePDFFromStorage"])(currentProduct.cataloguePdf.filePath);
            } catch (error) {
                console.error('Failed to delete old PDF from storage:', error);
            // Continue with the update even if old PDF deletion fails
            }
        }
        // Handle product image storage cleanup if new image was uploaded
        if (productImageData instanceof File && currentProduct?.productImage?.filePath) {
            // Delete the old image from storage since we have a new one
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteImageFromStorage"])(currentProduct.productImage.filePath);
            } catch (error) {
                console.error('Failed to delete old product image from storage:', error);
            // Continue with the update even if old image deletion fails
            }
        }
        // Handle product image removal
        if (removeProductImage && !productImageData) {
            // Delete the existing image from storage
            if (currentProduct?.productImage?.filePath) {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteImageFromStorage"])(currentProduct.productImage.filePath);
                } catch (error) {
                    console.error('Failed to delete product image from storage:', error);
                }
            }
            updateData.productImage = null; // This will clear the field in Firestore
        }
        // Ensure new uploads are persisted
        if (catalogPdf) {
            updateData.cataloguePdf = catalogPdf;
        }
        if (productImage) {
            updateData.productImage = productImage;
        }
        // Remove undefined values from updateData as Firestore doesn't accept them
        const cleanedUpdateData = {};
        for (const [key, value] of Object.entries(updateData)){
            if (value !== undefined) {
                cleanedUpdateData[key] = value;
            }
        }
        console.log('[updateProduct] cleanedUpdateData keys:', Object.keys(cleanedUpdateData));
        console.log('[updateProduct] cleanedUpdateData.productImage:', cleanedUpdateData.productImage);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProduct"])(id, cleanedUpdateData);
    } catch (error) {
        return {
            message: 'Database Error: Failed to update product.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/products');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/leads');
    return {
        message: 'Successfully updated product.'
    };
}
async function deleteProduct(id) {
    try {
        // Get the current product to check for PDF before deletion
        const currentProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"])().then((products)=>products.find((p)=>p.id === id));
        // Delete the PDF from Firebase Storage if it exists
        if (currentProduct?.cataloguePdf?.filePath) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deletePDFFromStorage"])(currentProduct.cataloguePdf.filePath);
            } catch (error) {
                console.error('Failed to delete PDF from storage:', error);
            // Continue with product deletion even if PDF deletion fails
            }
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"])(id);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete product.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/products');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/leads');
    return {
        message: 'Successfully deleted product.'
    };
}
const LogActivitySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    leadId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'Meeting',
        'Call',
        'Email',
        'Revision Request',
        'Proposal Sent'
    ]),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
});
async function logActivity(formData) {
    const validatedFields = LogActivitySchema.safeParse({
        leadId: formData.get('leadId'),
        type: formData.get('type'),
        notes: formData.get('notes'),
        summary: formData.get('summary') || undefined
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to log activity.'
        };
    }
    try {
        const { leadId, ...activityData } = validatedFields.data;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addActivityToLead"])(leadId, activityData);
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('LogActivity Error:', message);
        if (message.includes('Lead not found')) {
            return {
                message: 'Lead not found. Please refresh the page and try again.'
            };
        }
        return {
            message: 'Database Error: Failed to log activity.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/leads/${validatedFields.data.leadId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    return {
        message: 'Successfully logged activity.'
    };
}
async function getSummaryForNotes(notes) {
    if (!notes || notes.trim().length < 50) {
        return {
            error: 'Please provide at least 50 characters of notes to summarize.'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["summarizeMeetingNotes"])({
            notes
        });
        return result;
    } catch (e) {
        console.error('AI Summarization Error:', e);
        return {
            error: 'Failed to generate summary due to an internal error.'
        };
    }
}
async function updateLeadStatusAction(leadId, status, userId, userName) {
    try {
        // Get the current lead to capture the previous status
        const currentLead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadById"])(leadId);
        if (!currentLead) {
            return {
                message: 'Lead not found.'
            };
        }
        const previousStatus = currentLead.status;
        // Only update if status is actually changing
        if (previousStatus === status) {
            return {
                message: 'Status is already set to this value.'
            };
        }
        // Update the status
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLeadStatus"])(leadId, status);
        // Add a status change activity
        const changedBy = userName || userId || 'Unknown User';
        const statusChangeNotes = `Status changed from "${previousStatus}" to "${status}" by ${changedBy}`;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addActivityToLead"])(leadId, {
            type: 'Status Change',
            notes: statusChangeNotes
        });
    } catch (error) {
        return {
            message: 'Database Error: Failed to update status.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/leads/${leadId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/leads');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    return {
        message: 'Status updated successfully.'
    };
}
async function deleteLeadAction(leadId) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLead"])(leadId);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete lead.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/leads');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    return {
        message: 'Successfully deleted lead.'
    };
}
const AddLeadSourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Source name must be at least 2 characters')
});
async function addLeadSourceAction(formData) {
    const validatedFields = AddLeadSourceSchema.safeParse({
        name: formData.get('name')
    });
    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors.name?.[0] ?? 'Invalid name'
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadSource"])(validatedFields.data.name);
    } catch (error) {
        return {
            message: 'Database Error: Failed to add lead source.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/leads');
    return {
        message: `Successfully added '${validatedFields.data.name}'.`
    };
}
async function deleteLeadSourceAction(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLeadSource"])(id);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete lead source.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/leads');
    return {
        message: 'Successfully deleted lead source.'
    };
}
const AddProductCategorySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Category name must be at least 2 characters'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().nullable()
});
async function addProductCategoryAction(formData) {
    const validatedFields = AddProductCategorySchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description')
    });
    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors.name?.[0] ?? 'Invalid name'
        };
    }
    try {
        // Convert null to undefined for optional description
        const description = validatedFields.data.description || '';
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProductCategory"])(validatedFields.data.name, description);
    } catch (error) {
        return {
            message: 'Database Error: Failed to add product category.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/products');
    return {
        message: `Successfully added '${validatedFields.data.name}'.`
    };
}
async function deleteProductCategoryAction(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProductCategory"])(id);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete product category.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/products');
    return {
        message: 'Successfully deleted product category.'
    };
}
async function updateProductCategoryAction(id, name, description) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductCategory"])(id, name, description || '');
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return {
            message: `Database Error: Failed to update product category. ${message}`
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/products');
    return {
        message: 'Successfully updated product category.'
    };
}
async function getProductCategoriesAction() {
    try {
        const categories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductCategories"])();
        return categories;
    } catch (error) {
        console.error('Error fetching product categories:', error);
        return [];
    }
}
const CreateQuotationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    leadId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    templateId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    validUntil: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'Draft',
        'Sent',
        'Accepted',
        'Rejected'
    ]),
    products: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    subTotal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number(),
    totalGst: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number(),
    grandTotal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number(),
    quotationPrefix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    // Overridable template fields
    companyName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    companyAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1),
    companyGst: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')).nullable(),
    // Client billing fields
    client_address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')).nullable(),
    client_gst_no: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')).nullable(),
    termsAndConditions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().nullable(),
    // Additional charges (numeric or empty/null)
    freightCharges: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number().min(0).optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')).nullable(),
    courierCharges: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number().min(0).optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')).nullable(),
    // Flags to show/hide charges in PDF
    showFreight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].preprocess((val)=>{
        if (val === 'true' || val === true) return true;
        if (val === 'false' || val === false) return false;
        return false; // default to false
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean()).optional(),
    showCourier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].preprocess((val)=>{
        if (val === 'true' || val === true) return true;
        if (val === 'false' || val === false) return false;
        return false; // default to false
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean()).optional(),
    // GST visibility control
    showGst: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].preprocess((val)=>{
        if (val === 'true' || val === true) return true;
        if (val === 'false' || val === false) return false;
        return true; // default to true for backward compatibility
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean()).optional(),
    // Currency fields
    currencyCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    currencySymbol: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    conversionRate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number().optional()
});
async function addQuotation(formData) {
    console.log('Server received quotationPrefix:', formData.get('quotationPrefix'));
    const validatedFields = CreateQuotationSchema.safeParse({
        leadId: formData.get('leadId'),
        templateId: formData.get('templateId'),
        date: formData.get('date'),
        validUntil: formData.get('validUntil'),
        status: formData.get('status'),
        products: formData.get('products'),
        subTotal: formData.get('subTotal'),
        totalGst: formData.get('totalGst'),
        grandTotal: formData.get('grandTotal'),
        quotationPrefix: formData.get('quotationPrefix') || '',
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
        companyGst: formData.get('companyGst'),
        client_address: formData.get('client_address'),
        client_gst_no: formData.get('client_gst_no'),
        termsAndConditions: formData.get('termsAndConditions'),
        logoUrl: formData.get('logoUrl'),
        freightCharges: formData.get('freightCharges'),
        courierCharges: formData.get('courierCharges'),
        showFreight: formData.get('showFreight'),
        showCourier: formData.get('showCourier'),
        showGst: formData.get('showGst'),
        currencyCode: formData.get('currencyCode'),
        currencySymbol: formData.get('currencySymbol'),
        conversionRate: formData.get('conversionRate')
    });
    if (!validatedFields.success) {
        console.error(validatedFields.error.flatten().fieldErrors);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation Error: Failed to create quotation.'
        };
    }
    let newQuotation;
    try {
        const data = validatedFields.data;
        const parsedProducts = JSON.parse(data.products);
        const prefix = data.quotationPrefix?.trim() || 'QUO';
        console.log('Using prefix:', prefix);
        const { quotationPrefix: _omitPrefix, logoUrl, ...rest } = data;
        // Clean up null values - convert to undefined for Firestore
        const payload = {
            ...rest,
            products: parsedProducts,
            companyGst: rest.companyGst || undefined,
            client_address: rest.client_address || undefined,
            client_gst_no: rest.client_gst_no || undefined,
            freightCharges: rest.freightCharges || undefined,
            courierCharges: rest.courierCharges || undefined,
            showFreight: rest.showFreight === true || rest.showFreight === 'true',
            showCourier: rest.showCourier === true || rest.showCourier === 'true'
        };
        if (logoUrl) payload.logoUrl = logoUrl;
        newQuotation = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addQuotation"])(payload, prefix);
        // Log activity on the lead
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addActivityToLead"])(data.leadId, {
            type: 'Proposal Sent',
            notes: `Quotation ${newQuotation.quotationNumber} was created and sent.`
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        return {
            message: `Database Error: Failed to Create Quotation. ${message}`
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/quotations');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/leads/${validatedFields.data.leadId}`);
    return {
        message: 'Successfully created quotation.'
    };
}
async function updateQuotation(id, formData) {
    const validatedFields = CreateQuotationSchema.safeParse({
        leadId: formData.get('leadId'),
        templateId: formData.get('templateId'),
        date: formData.get('date'),
        validUntil: formData.get('validUntil'),
        status: formData.get('status'),
        products: formData.get('products'),
        subTotal: formData.get('subTotal'),
        totalGst: formData.get('totalGst'),
        grandTotal: formData.get('grandTotal'),
        quotationPrefix: formData.get('quotationPrefix') || '',
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
        companyGst: formData.get('companyGst'),
        client_address: formData.get('client_address'),
        client_gst_no: formData.get('client_gst_no'),
        termsAndConditions: formData.get('termsAndConditions'),
        logoUrl: formData.get('logoUrl'),
        freightCharges: formData.get('freightCharges'),
        courierCharges: formData.get('courierCharges'),
        showFreight: formData.get('showFreight'),
        showCourier: formData.get('showCourier'),
        showGst: formData.get('showGst'),
        currencyCode: formData.get('currencyCode'),
        currencySymbol: formData.get('currencySymbol'),
        conversionRate: formData.get('conversionRate')
    });
    if (!validatedFields.success) {
        console.error(validatedFields.error.flatten().fieldErrors);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation Error: Failed to update quotation.'
        };
    }
    try {
        const data = validatedFields.data;
        const parsedProducts = JSON.parse(data.products);
        // Clean up null values - convert to undefined for Firestore
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateQuotation"])(id, {
            ...data,
            logoUrl: data.logoUrl || undefined,
            companyGst: data.companyGst || undefined,
            client_address: data.client_address || undefined,
            client_gst_no: data.client_gst_no || undefined,
            freightCharges: data.freightCharges || undefined,
            courierCharges: data.courierCharges || undefined,
            showFreight: data.showFreight === true || data.showFreight === 'true',
            showCourier: data.showCourier === true || data.showCourier === 'true',
            products: parsedProducts
        });
        // Log activity on the lead
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addActivityToLead"])(data.leadId, {
            type: 'Revision Request',
            notes: `Quotation was updated.`
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        return {
            message: `Database Error: Failed to Update Quotation. ${message}`
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/quotations');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/quotations/${id}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/leads/${validatedFields.data.leadId}`);
    return {
        message: 'Successfully updated quotation.'
    };
}
async function deleteQuotationAction(quotationId) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteQuotation"])(quotationId);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete quotation.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/quotations');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    return {
        message: 'Successfully deleted quotation.'
    };
}
const QuotationTemplateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(3, 'Template name must be at least 3 characters.'),
    prefix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Prefix is required.'),
    companyName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(3, 'Company name is required.'),
    companyAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, 'Full company address is required.'),
    companyGst: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(15, 'A valid GSTIN is required.').max(15),
    termsAndConditions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(20, 'Terms and conditions are required.'),
    logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url('Please enter a valid URL for the logo.').optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal(''))
});
async function addQuotationTemplateAction(formData) {
    const validatedFields = QuotationTemplateSchema.safeParse({
        name: formData.get('name'),
        prefix: formData.get('prefix'),
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
        companyGst: formData.get('companyGst'),
        termsAndConditions: formData.get('termsAndConditions'),
        logoUrl: formData.get('logoUrl')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to create template. Please check the fields.'
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addQuotationTemplate"])(validatedFields.data);
    } catch (error) {
        return {
            message: 'Database Error: Failed to create template.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup/quotation-templates');
    return {
        message: 'Successfully created quotation template.'
    };
}
async function updateQuotationTemplateAction(id, formData) {
    const validatedFields = QuotationTemplateSchema.safeParse({
        name: formData.get('name'),
        prefix: formData.get('prefix'),
        companyName: formData.get('companyName'),
        companyAddress: formData.get('companyAddress'),
        companyGst: formData.get('companyGst'),
        termsAndConditions: formData.get('termsAndConditions'),
        logoUrl: formData.get('logoUrl')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to update template. Please check the fields.'
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateQuotationTemplate"])(id, validatedFields.data);
    } catch (error) {
        return {
            message: 'Database Error: Failed to update template.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup/quotation-templates');
    return {
        message: 'Successfully updated quotation template.'
    };
}
async function deleteQuotationTemplateAction(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteQuotationTemplate"])(id);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete template.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup/quotation-templates');
    return {
        message: 'Successfully deleted quotation template.'
    };
}
const AddEmployeeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Name must be at least 2 characters.'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email('Please enter a valid email.'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, 'Please enter a valid phone number.'),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        required_error: "You need to select a role."
    }),
    department: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        required_error: "You need to select a department."
    }),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, 'Address is required.')
});
async function addEmployeeAction(formData) {
    const validatedFields = AddEmployeeSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        role: formData.get('role'),
        department: formData.get('department'),
        address: formData.get('address')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to add employee.'
        };
    }
    const [employeeRoles, departments] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeRoles"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDepartments"])()
    ]);
    const roleExists = employeeRoles.some((r)=>r.name === validatedFields.data.role);
    if (!roleExists) {
        return {
            message: 'Invalid role selected.'
        };
    }
    const departmentExists = departments.some((d)=>d.name === validatedFields.data.department);
    if (!departmentExists) {
        return {
            message: 'Invalid department selected.'
        };
    }
    try {
        // Check if Firebase Admin environment variables are configured
        const requiredEnvVars = [
            'FIREBASE_PROJECT_ID',
            'FIREBASE_PRIVATE_KEY',
            'FIREBASE_CLIENT_EMAIL'
        ];
        const missingVars = requiredEnvVars.filter((varName)=>!process.env[varName]);
        if (missingVars.length > 0) {
            console.warn(`Firebase Admin not configured. Missing: ${missingVars.join(', ')}`);
            // Just add to database without Firebase Auth integration
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployee"])(validatedFields.data);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/employees');
            return {
                message: 'Employee added to database. Note: Firebase Auth integration requires environment variables to be configured for automatic account creation and email sending.'
            };
        }
        // Initialize Firebase Admin
        initializeFirebaseAdmin();
        const auth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$auth__$5b$external$5d$__$28$firebase$2d$admin$2f$auth$2c$__esm_import$29$__["getAuth"])();
        // Create user in Firebase Auth
        const userRecord = await auth.createUser({
            email: validatedFields.data.email,
            displayName: validatedFields.data.name,
            emailVerified: false
        });
        // Add employee to database first
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployee"])(validatedFields.data);
        // Set a temporary password for the user
        const tempPassword = Math.random().toString(36).slice(-12) + 'A1!'; // Ensure it meets Firebase requirements
        // Update the user with the temporary password
        await auth.updateUser(userRecord.uid, {
            password: tempPassword
        });
        // Send password reset email using Firebase Auth's REST API
        try {
            const webApiKey = process.env.FIREBASE_WEB_API_KEY;
            if (!webApiKey) {
                throw new Error('FIREBASE_WEB_API_KEY not configured');
            }
            // Use Firebase Auth REST API to send password reset email
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${webApiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    requestType: 'PASSWORD_RESET',
                    email: validatedFields.data.email,
                    continueUrl: `${("TURBOPACK compile-time value", "http://localhost:9003") || 'http://localhost:3000'}/auth/login`
                })
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log('='.repeat(80));
                console.log(`✅ EMPLOYEE CREATED: ${validatedFields.data.name}`);
                console.log(`📧 Email: ${validatedFields.data.email}`);
                console.log(`📨 Password reset email sent successfully!`);
                console.log(`📬 Email will be delivered by Firebase Auth`);
                console.log('='.repeat(80));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/employees');
                return {
                    message: `Successfully added employee ${validatedFields.data.name}. Password reset email has been sent to ${validatedFields.data.email}.`
                };
            } else {
                const errorData = await response.json();
                console.error('Failed to send password reset email:', errorData);
                throw new Error(`Email sending failed: ${errorData.error?.message || 'Unknown error'}`);
            }
        } catch (emailError) {
            console.error('Error sending password reset email:', emailError);
            // Fallback: generate link for manual sharing
            const resetLink = await auth.generatePasswordResetLink(validatedFields.data.email, {
                url: `${("TURBOPACK compile-time value", "http://localhost:9003") || 'http://localhost:3000'}/auth/login`,
                handleCodeInApp: false
            });
            console.log('='.repeat(80));
            console.log(`✅ EMPLOYEE CREATED: ${validatedFields.data.name}`);
            console.log(`📧 Email: ${validatedFields.data.email}`);
            console.log(`❌ Email sending failed: ${emailError.message}`);
            console.log(`🔗 Manual Reset Link: ${resetLink}`);
            console.log(`📝 Please share this link with the employee`);
            console.log('='.repeat(80));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/employees');
            return {
                message: `Successfully added employee ${validatedFields.data.name}. Email sending failed - please share the reset link manually (check console).`,
                resetLink: resetLink
            };
        }
    } catch (error) {
        console.error('Error adding employee:', error);
        // Handle specific Firebase errors
        if (error.code === 'auth/email-already-exists') {
            return {
                message: 'An account with this email already exists.'
            };
        }
        if (error.message?.includes('Missing required Firebase environment variables')) {
            // Fallback: add to database only
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployee"])(validatedFields.data);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/employees');
                return {
                    message: 'Employee added to database. Firebase Auth integration requires proper environment configuration for automatic account creation.'
                };
            } catch (dbError) {
                return {
                    message: 'Failed to add employee to database.'
                };
            }
        }
        return {
            message: 'Failed to add employee. Please check Firebase configuration and try again.'
        };
    }
}
async function deleteEmployeeAction(employeeId) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployee"])(employeeId);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete employee.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/employees');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    return {
        message: 'Successfully deleted employee.'
    };
}
const UpdateEmployeeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Name must be at least 2 characters.'),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email('Please enter a valid email.'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, 'Please enter a valid phone number.'),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    department: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, 'Address is required.')
});
async function updateEmployeeAction(id, formData) {
    const validatedFields = UpdateEmployeeSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        role: formData.get('role'),
        department: formData.get('department'),
        address: formData.get('address')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to update employee.'
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEmployee"])(id, validatedFields.data);
    } catch (error) {
        return {
            message: 'Database Error: Failed to update employee.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/employees');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    return {
        message: 'Successfully updated employee.'
    };
}
const AddEmployeeRoleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Role name must be at least 2 characters')
});
async function addEmployeeRoleAction(formData) {
    const validatedFields = AddEmployeeRoleSchema.safeParse({
        name: formData.get('name')
    });
    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors.name?.[0] ?? 'Invalid name'
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployeeRole"])(validatedFields.data.name);
    } catch (error) {
        return {
            message: 'Database Error: Failed to add role.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    return {
        message: `Successfully added role '${validatedFields.data.name}'.`
    };
}
async function deleteEmployeeRoleAction(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployeeRole"])(id);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete role.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    return {
        message: 'Successfully deleted role.'
    };
}
const AddDepartmentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Department name must be at least 2 characters')
});
async function addDepartmentAction(formData) {
    const validatedFields = AddDepartmentSchema.safeParse({
        name: formData.get('name')
    });
    if (!validatedFields.success) {
        return {
            message: validatedFields.error.flatten().fieldErrors.name?.[0] ?? 'Invalid name'
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDepartment"])(validatedFields.data.name);
    } catch (error) {
        return {
            message: 'Database Error: Failed to add department.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    return {
        message: `Successfully added department '${validatedFields.data.name}'.`
    };
}
async function deleteDepartmentAction(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDepartment"])(id);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete department.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    return {
        message: 'Successfully deleted department.'
    };
}
// CSV Import Actions
const ImportProductSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(3, {
        message: 'Product name must be at least 3 characters.'
    }),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number().min(0, {
        message: 'Price must be a positive number.'
    }),
    gstRate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number().min(0).max(100),
    skus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional(),
    catalogueUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url('Please enter a valid URL.').optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal(''))
});
async function importProductsFromCSV(csvData) {
    const results = {
        success: 0,
        failed: 0,
        errors: []
    };
    // Get all existing product categories to match against
    const allCategories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductCategories"])();
    for(let i = 0; i < csvData.length; i++){
        const row = csvData[i];
        try {
            // Parse SKUs from comma-separated string
            const skus = row.skus ? row.skus.split(',').map((sku)=>sku.trim()).filter(Boolean) : [];
            // Match category by exact name (single category)
            let categoryId = undefined;
            const categoryName = (row.category || row.categories || '').toString().trim();
            if (categoryName) {
                const existingCategory = allCategories.find((c)=>c.name === categoryName);
                if (existingCategory) {
                    categoryId = existingCategory.id;
                } else {
                    results.errors.push(`Row ${i + 1}: Category not found: ${categoryName}. Please create this category first.`);
                }
            }
            // Prepare data for validation, including optional fields
            const dataForValidation = {
                name: row.name,
                price: row.price,
                gstRate: row.gstRate,
                ...skus.length > 0 && {
                    skus
                },
                ...row.catalogueUrl && row.catalogueUrl.trim() && {
                    catalogueUrl: row.catalogueUrl
                }
            };
            const validatedData = ImportProductSchema.parse(dataForValidation);
            // Prepare data for database - only include defined fields
            const productData = {
                name: validatedData.name,
                price: validatedData.price,
                gstRate: validatedData.gstRate,
                ...validatedData.skus && {
                    skus: validatedData.skus
                },
                ...validatedData.catalogueUrl && {
                    catalogueUrl: validatedData.catalogueUrl
                },
                ...categoryId && {
                    categoryId
                }
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProduct"])(productData);
            results.success++;
        } catch (error) {
            results.failed++;
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].ZodError) {
                const errorMessages = error.errors.map((e)=>`Row ${i + 1}: ${e.path.join('.')} - ${e.message}`);
                results.errors.push(...errorMessages);
            } else {
                results.errors.push(`Row ${i + 1}: Failed to import product - ${error instanceof Error ? error.message : 'Unknown error'}`);
            }
        }
    }
    // Revalidate pages after import
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/products');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/leads');
    return {
        success: results.failed === 0,
        message: `Import completed. ${results.success} products imported successfully${results.failed > 0 ? `, ${results.failed} failed` : ''}.`,
        errors: results.errors.length > 0 ? results.errors : undefined
    };
}
async function getLeadsCountAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadsCount"])();
    } catch (error) {
        console.error('Error getting leads count:', error);
        return 0;
    }
}
async function getQuotationsCountAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotationsCount"])();
    } catch (error) {
        console.error('Error getting quotations count:', error);
        return 0;
    }
}
async function getProductsCountAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsCount"])();
    } catch (error) {
        console.error('Error getting products count:', error);
        return 0;
    }
}
async function getEmployeesCountAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeesCount"])();
    } catch (error) {
        console.error('Error getting employees count:', error);
        return 0;
    }
}
async function getLeadsCountByStatusAction(status) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadsCountByStatus"])(status);
    } catch (error) {
        console.error(`Error getting leads count for status ${status}:`, error);
        return 0;
    }
}
async function getQuotationsCountByStatusAction(status) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotationsCountByStatus"])(status);
    } catch (error) {
        console.error(`Error getting quotations count for status ${status}:`, error);
        return 0;
    }
}
async function getActiveProductsCountAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveProductsCount"])();
    } catch (error) {
        console.error('Error getting active products count:', error);
        return 0;
    }
}
async function getActiveEmployeesCountAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveEmployeesCount"])();
    } catch (error) {
        console.error('Error getting active employees count:', error);
        return 0;
    }
}
// Communication Activity Actions
const CommunicationActivitySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    leadId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Lead ID is required'),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'WhatsApp',
        'Email'
    ]),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Message is required'),
    contact: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Contact is required'),
    sentBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Sent by is required')
});
async function logCommunicationActivityAction(formData) {
    const validatedFields = CommunicationActivitySchema.safeParse({
        leadId: formData.get('leadId'),
        type: formData.get('type'),
        message: formData.get('message'),
        contact: formData.get('contact'),
        sentBy: formData.get('sentBy')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to log communication activity.'
        };
    }
    const { leadId, type, message, contact, sentBy } = validatedFields.data;
    try {
        const activityNotes = `${type} message sent to ${contact} by ${sentBy}:\n\n"${message}"`;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addActivityToLead"])(leadId, {
            type: type,
            notes: activityNotes
        });
    } catch (error) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error('LogCommunicationActivity Error:', errMsg);
        if (errMsg.includes('Lead not found')) {
            return {
                message: 'Lead not found. Please refresh the page and try again.'
            };
        }
        return {
            message: 'Database Error: Failed to log communication activity.'
        };
    }
    return {
        message: `Successfully logged ${type} communication.`
    };
}
async function getCurrentUserEmployeeAction(email) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeByEmail"])(email);
    } catch (error) {
        console.error('Error getting current user employee:', error);
        return null;
    }
}
;
const CurrencySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Currency code must be at least 2 characters').max(5, 'Currency code must be at most 5 characters'),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, 'Currency name is required'),
    symbol: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, 'Currency symbol is required'),
    conversionRate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.number().positive('Conversion rate must be positive')
});
async function addCurrencyAction(formData) {
    const validatedFields = CurrencySchema.safeParse({
        code: formData.get('code'),
        name: formData.get('name'),
        symbol: formData.get('symbol'),
        conversionRate: formData.get('conversionRate')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation Error: Failed to add currency.'
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addCurrency"])(validatedFields.data);
    } catch (error) {
        return {
            message: 'Database Error: Failed to add currency.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    return {
        message: 'Successfully added currency.'
    };
}
async function updateCurrencyAction(id, formData) {
    const validatedFields = CurrencySchema.safeParse({
        code: formData.get('code'),
        name: formData.get('name'),
        symbol: formData.get('symbol'),
        conversionRate: formData.get('conversionRate')
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation Error: Failed to update currency.'
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCurrency"])(id, validatedFields.data);
    } catch (error) {
        return {
            message: 'Database Error: Failed to update currency.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    return {
        message: 'Successfully updated currency.'
    };
}
async function deleteCurrencyAction(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCurrency"])(id);
    } catch (error) {
        return {
            message: 'Database Error: Failed to delete currency.'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/setup');
    return {
        message: 'Successfully deleted currency.'
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createLead,
    updateLead,
    addProduct,
    updateProduct,
    deleteProduct,
    logActivity,
    getSummaryForNotes,
    updateLeadStatusAction,
    deleteLeadAction,
    addLeadSourceAction,
    deleteLeadSourceAction,
    addProductCategoryAction,
    deleteProductCategoryAction,
    updateProductCategoryAction,
    getProductCategoriesAction,
    addQuotation,
    updateQuotation,
    deleteQuotationAction,
    addQuotationTemplateAction,
    updateQuotationTemplateAction,
    deleteQuotationTemplateAction,
    addEmployeeAction,
    deleteEmployeeAction,
    updateEmployeeAction,
    addEmployeeRoleAction,
    deleteEmployeeRoleAction,
    addDepartmentAction,
    deleteDepartmentAction,
    importProductsFromCSV,
    getLeadsCountAction,
    getQuotationsCountAction,
    getProductsCountAction,
    getEmployeesCountAction,
    getLeadsCountByStatusAction,
    getQuotationsCountByStatusAction,
    getActiveProductsCountAction,
    getActiveEmployeesCountAction,
    logCommunicationActivityAction,
    getCurrentUserEmployeeAction,
    addCurrencyAction,
    updateCurrencyAction,
    deleteCurrencyAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createLead, "40861195548c217512dbe1823b0a2fac97faf0a2d4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLead, "609c476f3eeb7594fefe346a0d8e15a03ceb0681a1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProduct, "40df2fd914c2479a9faa25a5f8ae22264f2d2d1760", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProduct, "60ebb75a84c9a24d13f8ae5da3e6c5337463ff14d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "40176d3d6990cb08430dd0b9f623e71b115973d4e1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logActivity, "40ca09e7bc0e19e67955d0f6e7229103d8a91031a7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSummaryForNotes, "40f5f7d11f95831f84e29a84974f5e2a540e9c827e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeadStatusAction, "78737e482bc77b2f9c03c343dd86c2540566903ea8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLeadAction, "40181a13a40b0fe992551eab7d082a69960b957c02", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadSourceAction, "40db1951ba45f732cb685ad1ead679cc9a387113e1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLeadSourceAction, "40f2b2cbe6bb6809904e344ab0663ed85597aaa19f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProductCategoryAction, "40aacf58a50d542127986debd15c6f93a962591b6d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProductCategoryAction, "40670f9184549e11d20b28afbb6668ba8039067652", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductCategoryAction, "70e900c17df2a5ef77c00957931f5c786f66da211b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductCategoriesAction, "00ec640e524c2b09cd05bcbc91e8aa00d0db01d112", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuotation, "40170e85279d4543f6383130b926f7e5969ba55a92", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateQuotation, "60cdaa732711e2e8962552c705491d3a52fe96d609", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteQuotationAction, "402b86358f3fc75c35b2441b4c361ea970fb903f14", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuotationTemplateAction, "40c5244f064772c6a13c48bf3003ce9d09bf9a4420", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateQuotationTemplateAction, "60752bc7c2d3a5394ffc424eb347ed8ea299dc55ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteQuotationTemplateAction, "4081bb2bb660ecc7da597a57e375fe93aa349fb15c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployeeAction, "40db5ce40e7ac2c285029b1e06e10e7fce667f13e2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployeeAction, "4035f8968d972c4a9f760664964cf4bcbf219691f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmployeeAction, "6055a96d6c291f06694e3d11b5bc2c9d814730d762", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployeeRoleAction, "40ac9647394c3fca94265ae16e638242d94a5e8503", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployeeRoleAction, "40359399de339d67348ca376f48900386d4d5745ae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addDepartmentAction, "4056af8aa8c98439c52c722bc08f3ec36e2430ed2d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDepartmentAction, "404f8056db98fe5905211494f9d0215a9e2221b5a7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importProductsFromCSV, "401384dbfe8db00514dd0428cf8ce7cfb73e10f328", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadsCountAction, "0078a8fce0fcaaefbe7644816de95870edb024f189", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationsCountAction, "0097146843e892c7ab59227503895a0f98c82c4686", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductsCountAction, "00b17ed6eeb90cbbed0f9960b083c8bf39c7c957d4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeesCountAction, "000995be71b8a8838960047993f11778f80310d90e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadsCountByStatusAction, "401e2f0858ac2ea902204a5a5742eaf7462e09bb15", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationsCountByStatusAction, "40a5a5b33b502bb792212e4b1d938c736f42698990", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActiveProductsCountAction, "00559255a4ea619ea22c6b6a046c0c51eb09e6701b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActiveEmployeesCountAction, "00d0ef69458461782a8f6237a38962824b1ea53558", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logCommunicationActivityAction, "406d37954df7b6956afe41b91c59d0a96e37ec86f6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrentUserEmployeeAction, "40459f91106fd8737e88692909df491a7fb9c3e5ac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addCurrencyAction, "406997ba66ecdbc018a39a0b5fd55d2cc738937cd0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCurrencyAction, "60a95b8cd1e162d879a747c213e25f9f3232811747", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCurrencyAction, "40ea2e420858d93f4499799b03c3f5b08f6f9c9e87", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "000995be71b8a8838960047993f11778f80310d90e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeesCountAction"]),
    "00559255a4ea619ea22c6b6a046c0c51eb09e6701b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveProductsCountAction"]),
    "0078a8fce0fcaaefbe7644816de95870edb024f189": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadsCountAction"]),
    "0097146843e892c7ab59227503895a0f98c82c4686": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotationsCountAction"]),
    "00b17ed6eeb90cbbed0f9960b083c8bf39c7c957d4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsCountAction"]),
    "00d0ef69458461782a8f6237a38962824b1ea53558": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveEmployeesCountAction"]),
    "00ec640e524c2b09cd05bcbc91e8aa00d0db01d112": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductCategoriesAction"]),
    "401384dbfe8db00514dd0428cf8ce7cfb73e10f328": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importProductsFromCSV"]),
    "40170e85279d4543f6383130b926f7e5969ba55a92": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addQuotation"]),
    "40176d3d6990cb08430dd0b9f623e71b115973d4e1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"]),
    "40181a13a40b0fe992551eab7d082a69960b957c02": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLeadAction"]),
    "401e2f0858ac2ea902204a5a5742eaf7462e09bb15": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadsCountByStatusAction"]),
    "402b86358f3fc75c35b2441b4c361ea970fb903f14": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteQuotationAction"]),
    "40359399de339d67348ca376f48900386d4d5745ae": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployeeRoleAction"]),
    "4035f8968d972c4a9f760664964cf4bcbf219691f8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployeeAction"]),
    "40459f91106fd8737e88692909df491a7fb9c3e5ac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserEmployeeAction"]),
    "404f8056db98fe5905211494f9d0215a9e2221b5a7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDepartmentAction"]),
    "4056af8aa8c98439c52c722bc08f3ec36e2430ed2d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDepartmentAction"]),
    "40670f9184549e11d20b28afbb6668ba8039067652": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProductCategoryAction"]),
    "406997ba66ecdbc018a39a0b5fd55d2cc738937cd0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addCurrencyAction"]),
    "406d37954df7b6956afe41b91c59d0a96e37ec86f6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logCommunicationActivityAction"]),
    "4081bb2bb660ecc7da597a57e375fe93aa349fb15c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteQuotationTemplateAction"]),
    "40861195548c217512dbe1823b0a2fac97faf0a2d4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLead"]),
    "40a5a5b33b502bb792212e4b1d938c736f42698990": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotationsCountByStatusAction"]),
    "40aacf58a50d542127986debd15c6f93a962591b6d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProductCategoryAction"]),
    "40ac9647394c3fca94265ae16e638242d94a5e8503": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployeeRoleAction"]),
    "40c5244f064772c6a13c48bf3003ce9d09bf9a4420": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addQuotationTemplateAction"]),
    "40ca09e7bc0e19e67955d0f6e7229103d8a91031a7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logActivity"]),
    "40d93c53acd21f87d84976506f86c23963b1eec55f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["summarizeMeetingNotes"]),
    "40db1951ba45f732cb685ad1ead679cc9a387113e1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadSourceAction"]),
    "40db5ce40e7ac2c285029b1e06e10e7fce667f13e2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployeeAction"]),
    "40df2fd914c2479a9faa25a5f8ae22264f2d2d1760": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProduct"]),
    "40ea2e420858d93f4499799b03c3f5b08f6f9c9e87": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCurrencyAction"]),
    "40f2b2cbe6bb6809904e344ab0663ed85597aaa19f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLeadSourceAction"]),
    "40f5f7d11f95831f84e29a84974f5e2a540e9c827e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSummaryForNotes"]),
    "6055a96d6c291f06694e3d11b5bc2c9d814730d762": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEmployeeAction"]),
    "60752bc7c2d3a5394ffc424eb347ed8ea299dc55ed": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateQuotationTemplateAction"]),
    "609c476f3eeb7594fefe346a0d8e15a03ceb0681a1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLead"]),
    "60a95b8cd1e162d879a747c213e25f9f3232811747": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCurrencyAction"]),
    "60cdaa732711e2e8962552c705491d3a52fe96d609": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateQuotation"]),
    "60ebb75a84c9a24d13f8ae5da3e6c5337463ff14d9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProduct"]),
    "70e900c17df2a5ef77c00957931f5c786f66da211b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductCategoryAction"]),
    "78737e482bc77b2f9c03c343dd86c2540566903ea8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLeadStatusAction"]),
    "7f0b900bdacd23b80cfa42ee2659193dc63d563866": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeesCount"]),
    "7f0e44f23d3c7919e802910994293ba5af468982fa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsCount"]),
    "7f0eec47d7f3455687f950210982ed5eaade19ec0d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateQuotation"]),
    "7f1455f8b318777754ab9b7b5ac6270bda312fba0d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveEmployeesCount"]),
    "7f19c4485b5ffc22d762a2ac6e3d8651714a96dac5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeById"]),
    "7f1a388a471526880d26227159645d4574e69eec04": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotationsCountByStatus"]),
    "7f211c04d8a0aa811dbf3ebd5eaef4cdf0d86d0d27": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductCategory"]),
    "7f28f0312ef2475661560aba6d2211cc1ecf40ddc8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addQuotation"]),
    "7f2ffe513d6cb877ab602ae19af7210964c29cb45c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductCategoryById"]),
    "7f33d4740a71a78b8166f45557e54c58071cf9721d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProductCategory"]),
    "7f3563d0efd830c753f6dd196b47b96211a63fccbc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployee"]),
    "7f367c5085291a37a1851fdbcfa11d607b63f3d8a6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadSource"]),
    "7f3d9aa150bda258ae10ec3c76df09af6e7b54d9b3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addActivityToLead"]),
    "7f3e14bc7ef18238208187f13e333fd7b953d7d1e7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEmployee"]),
    "7f44ceb99d99462235ea05cf94c0346c12bfb5bf76": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecentActivities"]),
    "7f4654b4a69b701893d7ff7c63f6ce253f47c1ce2d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLeadStatus"]),
    "7f4a20d8195ae7285732b38e6615880aff9f0838ff": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadSources"]),
    "7f4b406604fb4f23ab19ae2c65ee0e5eb30193ff9c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteQuotationTemplate"]),
    "7f4eb9a43ca7d2f7e7a29eaa7cc3cb9be7ade68424": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotationById"]),
    "7f56f323de8f245703ea18e687e41f198b09df0d18": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeByEmail"]),
    "7f58b3df2815b13c88487fb9bc327aa1136ac33959": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"]),
    "7f5efc12e891723922f6a4f8f293527e6b597a2b41": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadsCountByStatus"]),
    "7f65be10c84fd8c7dd5cee02c8c7a7643a8c413872": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDepartment"]),
    "7f65deb60c7d2400de6746ef169a10f954d5230a2a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProductCategory"]),
    "7f6ee7210d74eeb266fa57e73cf5b39a3e9fc25c81": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotationTemplateById"]),
    "7f70f871eb43db37af271b12a5f00b29d4dad8ff08": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLead"]),
    "7f7647e2122df1621fe89692d2222a9229fdf1ea9f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLead"]),
    "7f81e819b2ddf15d26d57b699b79785893bd58ae84": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployeeRole"]),
    "7f858254eb3a59e7dab365e690410cf669a53e222c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActiveProductsCount"]),
    "7f8f68372f5a39e06105f6239c2d232deed79ef6ca": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProduct"]),
    "7f91d52f6a4498bfa43d1c3b3bed4c2955bf9caa5e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotationsCount"]),
    "7f9d89248b9e9f83905a27cfe5b503290a8c58394d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadsCount"]),
    "7fa28870af7d1644b948a6c68ec9ec67971f0283cd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDepartment"]),
    "7fa3eaf1e501cd386360a0203d69bed8b510130fcc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotationTemplates"]),
    "7fa505faea8d9f0797b974f4c4e1b16b22ef67d143": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteQuotation"]),
    "7fac612984c6b1073c0f9b63ca660d587cdec64fdf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProduct"]),
    "7facf284ce254e1336cbaef1f847a5cbc46dff847e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLeadSource"]),
    "7fb1e5d2000e99c91bf24d4e39d71ce542a88f9e5c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployees"]),
    "7fb492c3da6c402b894e80a4f7908c57385a289be4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeads"]),
    "7fba8e38984b78115fcaa9e1323c540462dd1cc3d4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEmployee"]),
    "7fc4c79fcec7920116a5e4fcf6c88519d91bebfcd0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addQuotationTemplate"]),
    "7fc6957e105b0cd9764c3443bbb074f3088df3ad3e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployeeRoles"]),
    "7fce37adfcca0f5ee64a0a0c034d566187ac486d0e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotations"]),
    "7fcfaec42b09d794ca7d8cc8fbd819d44c83195e6c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateQuotationTemplate"]),
    "7fdc88f7c6a4cf8c68c802b932896090c05f809ab5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"]),
    "7fdf64358f381828b72e99b45ef549dc07de5b94d5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDepartments"]),
    "7fe1e8295a10e203e5c2b3fc15cecb1f6dca6c433e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLead"]),
    "7feeac06b526a1b11c6b2b3ec53bed70ee86d6aa85": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadById"]),
    "7ffa785f70b0e1d9b4e09686fa05d08088fb496370": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductCategories"]),
    "7ffefbabd65d64b242a9eca6efbdd7d22af77aa608": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addEmployeeRole"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "000995be71b8a8838960047993f11778f80310d90e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["000995be71b8a8838960047993f11778f80310d90e"]),
    "00559255a4ea619ea22c6b6a046c0c51eb09e6701b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00559255a4ea619ea22c6b6a046c0c51eb09e6701b"]),
    "0078a8fce0fcaaefbe7644816de95870edb024f189": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0078a8fce0fcaaefbe7644816de95870edb024f189"]),
    "0097146843e892c7ab59227503895a0f98c82c4686": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0097146843e892c7ab59227503895a0f98c82c4686"]),
    "00b17ed6eeb90cbbed0f9960b083c8bf39c7c957d4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00b17ed6eeb90cbbed0f9960b083c8bf39c7c957d4"]),
    "00d0ef69458461782a8f6237a38962824b1ea53558": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00d0ef69458461782a8f6237a38962824b1ea53558"]),
    "00ec640e524c2b09cd05bcbc91e8aa00d0db01d112": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00ec640e524c2b09cd05bcbc91e8aa00d0db01d112"]),
    "401384dbfe8db00514dd0428cf8ce7cfb73e10f328": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["401384dbfe8db00514dd0428cf8ce7cfb73e10f328"]),
    "40170e85279d4543f6383130b926f7e5969ba55a92": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40170e85279d4543f6383130b926f7e5969ba55a92"]),
    "40176d3d6990cb08430dd0b9f623e71b115973d4e1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40176d3d6990cb08430dd0b9f623e71b115973d4e1"]),
    "40181a13a40b0fe992551eab7d082a69960b957c02": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40181a13a40b0fe992551eab7d082a69960b957c02"]),
    "401e2f0858ac2ea902204a5a5742eaf7462e09bb15": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["401e2f0858ac2ea902204a5a5742eaf7462e09bb15"]),
    "402b86358f3fc75c35b2441b4c361ea970fb903f14": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["402b86358f3fc75c35b2441b4c361ea970fb903f14"]),
    "40359399de339d67348ca376f48900386d4d5745ae": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40359399de339d67348ca376f48900386d4d5745ae"]),
    "4035f8968d972c4a9f760664964cf4bcbf219691f8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4035f8968d972c4a9f760664964cf4bcbf219691f8"]),
    "40459f91106fd8737e88692909df491a7fb9c3e5ac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40459f91106fd8737e88692909df491a7fb9c3e5ac"]),
    "404f8056db98fe5905211494f9d0215a9e2221b5a7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["404f8056db98fe5905211494f9d0215a9e2221b5a7"]),
    "4056af8aa8c98439c52c722bc08f3ec36e2430ed2d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4056af8aa8c98439c52c722bc08f3ec36e2430ed2d"]),
    "40670f9184549e11d20b28afbb6668ba8039067652": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40670f9184549e11d20b28afbb6668ba8039067652"]),
    "406997ba66ecdbc018a39a0b5fd55d2cc738937cd0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["406997ba66ecdbc018a39a0b5fd55d2cc738937cd0"]),
    "406d37954df7b6956afe41b91c59d0a96e37ec86f6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["406d37954df7b6956afe41b91c59d0a96e37ec86f6"]),
    "4081bb2bb660ecc7da597a57e375fe93aa349fb15c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4081bb2bb660ecc7da597a57e375fe93aa349fb15c"]),
    "40861195548c217512dbe1823b0a2fac97faf0a2d4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40861195548c217512dbe1823b0a2fac97faf0a2d4"]),
    "40a5a5b33b502bb792212e4b1d938c736f42698990": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40a5a5b33b502bb792212e4b1d938c736f42698990"]),
    "40aacf58a50d542127986debd15c6f93a962591b6d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40aacf58a50d542127986debd15c6f93a962591b6d"]),
    "40ac9647394c3fca94265ae16e638242d94a5e8503": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ac9647394c3fca94265ae16e638242d94a5e8503"]),
    "40c5244f064772c6a13c48bf3003ce9d09bf9a4420": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40c5244f064772c6a13c48bf3003ce9d09bf9a4420"]),
    "40ca09e7bc0e19e67955d0f6e7229103d8a91031a7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ca09e7bc0e19e67955d0f6e7229103d8a91031a7"]),
    "40d93c53acd21f87d84976506f86c23963b1eec55f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40d93c53acd21f87d84976506f86c23963b1eec55f"]),
    "40db1951ba45f732cb685ad1ead679cc9a387113e1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40db1951ba45f732cb685ad1ead679cc9a387113e1"]),
    "40db5ce40e7ac2c285029b1e06e10e7fce667f13e2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40db5ce40e7ac2c285029b1e06e10e7fce667f13e2"]),
    "40df2fd914c2479a9faa25a5f8ae22264f2d2d1760": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40df2fd914c2479a9faa25a5f8ae22264f2d2d1760"]),
    "40ea2e420858d93f4499799b03c3f5b08f6f9c9e87": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40ea2e420858d93f4499799b03c3f5b08f6f9c9e87"]),
    "40f2b2cbe6bb6809904e344ab0663ed85597aaa19f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40f2b2cbe6bb6809904e344ab0663ed85597aaa19f"]),
    "40f5f7d11f95831f84e29a84974f5e2a540e9c827e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40f5f7d11f95831f84e29a84974f5e2a540e9c827e"]),
    "6055a96d6c291f06694e3d11b5bc2c9d814730d762": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6055a96d6c291f06694e3d11b5bc2c9d814730d762"]),
    "60752bc7c2d3a5394ffc424eb347ed8ea299dc55ed": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60752bc7c2d3a5394ffc424eb347ed8ea299dc55ed"]),
    "609c476f3eeb7594fefe346a0d8e15a03ceb0681a1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["609c476f3eeb7594fefe346a0d8e15a03ceb0681a1"]),
    "60a95b8cd1e162d879a747c213e25f9f3232811747": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60a95b8cd1e162d879a747c213e25f9f3232811747"]),
    "60cdaa732711e2e8962552c705491d3a52fe96d609": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60cdaa732711e2e8962552c705491d3a52fe96d609"]),
    "60ebb75a84c9a24d13f8ae5da3e6c5337463ff14d9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60ebb75a84c9a24d13f8ae5da3e6c5337463ff14d9"]),
    "70e900c17df2a5ef77c00957931f5c786f66da211b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["70e900c17df2a5ef77c00957931f5c786f66da211b"]),
    "78737e482bc77b2f9c03c343dd86c2540566903ea8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["78737e482bc77b2f9c03c343dd86c2540566903ea8"]),
    "7f0b900bdacd23b80cfa42ee2659193dc63d563866": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f0b900bdacd23b80cfa42ee2659193dc63d563866"]),
    "7f0e44f23d3c7919e802910994293ba5af468982fa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f0e44f23d3c7919e802910994293ba5af468982fa"]),
    "7f0eec47d7f3455687f950210982ed5eaade19ec0d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f0eec47d7f3455687f950210982ed5eaade19ec0d"]),
    "7f1455f8b318777754ab9b7b5ac6270bda312fba0d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f1455f8b318777754ab9b7b5ac6270bda312fba0d"]),
    "7f19c4485b5ffc22d762a2ac6e3d8651714a96dac5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f19c4485b5ffc22d762a2ac6e3d8651714a96dac5"]),
    "7f1a388a471526880d26227159645d4574e69eec04": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f1a388a471526880d26227159645d4574e69eec04"]),
    "7f211c04d8a0aa811dbf3ebd5eaef4cdf0d86d0d27": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f211c04d8a0aa811dbf3ebd5eaef4cdf0d86d0d27"]),
    "7f28f0312ef2475661560aba6d2211cc1ecf40ddc8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f28f0312ef2475661560aba6d2211cc1ecf40ddc8"]),
    "7f2ffe513d6cb877ab602ae19af7210964c29cb45c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f2ffe513d6cb877ab602ae19af7210964c29cb45c"]),
    "7f33d4740a71a78b8166f45557e54c58071cf9721d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f33d4740a71a78b8166f45557e54c58071cf9721d"]),
    "7f3563d0efd830c753f6dd196b47b96211a63fccbc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f3563d0efd830c753f6dd196b47b96211a63fccbc"]),
    "7f367c5085291a37a1851fdbcfa11d607b63f3d8a6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f367c5085291a37a1851fdbcfa11d607b63f3d8a6"]),
    "7f3d9aa150bda258ae10ec3c76df09af6e7b54d9b3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f3d9aa150bda258ae10ec3c76df09af6e7b54d9b3"]),
    "7f3e14bc7ef18238208187f13e333fd7b953d7d1e7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f3e14bc7ef18238208187f13e333fd7b953d7d1e7"]),
    "7f44ceb99d99462235ea05cf94c0346c12bfb5bf76": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f44ceb99d99462235ea05cf94c0346c12bfb5bf76"]),
    "7f4654b4a69b701893d7ff7c63f6ce253f47c1ce2d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f4654b4a69b701893d7ff7c63f6ce253f47c1ce2d"]),
    "7f4a20d8195ae7285732b38e6615880aff9f0838ff": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f4a20d8195ae7285732b38e6615880aff9f0838ff"]),
    "7f4b406604fb4f23ab19ae2c65ee0e5eb30193ff9c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f4b406604fb4f23ab19ae2c65ee0e5eb30193ff9c"]),
    "7f4eb9a43ca7d2f7e7a29eaa7cc3cb9be7ade68424": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f4eb9a43ca7d2f7e7a29eaa7cc3cb9be7ade68424"]),
    "7f56f323de8f245703ea18e687e41f198b09df0d18": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f56f323de8f245703ea18e687e41f198b09df0d18"]),
    "7f58b3df2815b13c88487fb9bc327aa1136ac33959": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f58b3df2815b13c88487fb9bc327aa1136ac33959"]),
    "7f5efc12e891723922f6a4f8f293527e6b597a2b41": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f5efc12e891723922f6a4f8f293527e6b597a2b41"]),
    "7f65be10c84fd8c7dd5cee02c8c7a7643a8c413872": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f65be10c84fd8c7dd5cee02c8c7a7643a8c413872"]),
    "7f65deb60c7d2400de6746ef169a10f954d5230a2a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f65deb60c7d2400de6746ef169a10f954d5230a2a"]),
    "7f6ee7210d74eeb266fa57e73cf5b39a3e9fc25c81": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f6ee7210d74eeb266fa57e73cf5b39a3e9fc25c81"]),
    "7f70f871eb43db37af271b12a5f00b29d4dad8ff08": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f70f871eb43db37af271b12a5f00b29d4dad8ff08"]),
    "7f7647e2122df1621fe89692d2222a9229fdf1ea9f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f7647e2122df1621fe89692d2222a9229fdf1ea9f"]),
    "7f81e819b2ddf15d26d57b699b79785893bd58ae84": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f81e819b2ddf15d26d57b699b79785893bd58ae84"]),
    "7f858254eb3a59e7dab365e690410cf669a53e222c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f858254eb3a59e7dab365e690410cf669a53e222c"]),
    "7f8f68372f5a39e06105f6239c2d232deed79ef6ca": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f8f68372f5a39e06105f6239c2d232deed79ef6ca"]),
    "7f91d52f6a4498bfa43d1c3b3bed4c2955bf9caa5e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f91d52f6a4498bfa43d1c3b3bed4c2955bf9caa5e"]),
    "7f9d89248b9e9f83905a27cfe5b503290a8c58394d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f9d89248b9e9f83905a27cfe5b503290a8c58394d"]),
    "7fa28870af7d1644b948a6c68ec9ec67971f0283cd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fa28870af7d1644b948a6c68ec9ec67971f0283cd"]),
    "7fa3eaf1e501cd386360a0203d69bed8b510130fcc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fa3eaf1e501cd386360a0203d69bed8b510130fcc"]),
    "7fa505faea8d9f0797b974f4c4e1b16b22ef67d143": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fa505faea8d9f0797b974f4c4e1b16b22ef67d143"]),
    "7fac612984c6b1073c0f9b63ca660d587cdec64fdf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fac612984c6b1073c0f9b63ca660d587cdec64fdf"]),
    "7facf284ce254e1336cbaef1f847a5cbc46dff847e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7facf284ce254e1336cbaef1f847a5cbc46dff847e"]),
    "7fb1e5d2000e99c91bf24d4e39d71ce542a88f9e5c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fb1e5d2000e99c91bf24d4e39d71ce542a88f9e5c"]),
    "7fb492c3da6c402b894e80a4f7908c57385a289be4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fb492c3da6c402b894e80a4f7908c57385a289be4"]),
    "7fba8e38984b78115fcaa9e1323c540462dd1cc3d4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fba8e38984b78115fcaa9e1323c540462dd1cc3d4"]),
    "7fc4c79fcec7920116a5e4fcf6c88519d91bebfcd0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fc4c79fcec7920116a5e4fcf6c88519d91bebfcd0"]),
    "7fc6957e105b0cd9764c3443bbb074f3088df3ad3e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fc6957e105b0cd9764c3443bbb074f3088df3ad3e"]),
    "7fce37adfcca0f5ee64a0a0c034d566187ac486d0e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fce37adfcca0f5ee64a0a0c034d566187ac486d0e"]),
    "7fcfaec42b09d794ca7d8cc8fbd819d44c83195e6c": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fcfaec42b09d794ca7d8cc8fbd819d44c83195e6c"]),
    "7fdc88f7c6a4cf8c68c802b932896090c05f809ab5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fdc88f7c6a4cf8c68c802b932896090c05f809ab5"]),
    "7fdf64358f381828b72e99b45ef549dc07de5b94d5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fdf64358f381828b72e99b45ef549dc07de5b94d5"]),
    "7fe1e8295a10e203e5c2b3fc15cecb1f6dca6c433e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fe1e8295a10e203e5c2b3fc15cecb1f6dca6c433e"]),
    "7feeac06b526a1b11c6b2b3ec53bed70ee86d6aa85": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7feeac06b526a1b11c6b2b3ec53bed70ee86d6aa85"]),
    "7ffa785f70b0e1d9b4e09686fa05d08088fb496370": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ffa785f70b0e1d9b4e09686fa05d08088fb496370"]),
    "7ffefbabd65d64b242a9eca6efbdd7d22af77aa608": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ffefbabd65d64b242a9eca6efbdd7d22af77aa608"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/products/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/ai/flows/summarize-meeting-notes.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$summarize$2d$meeting$2d$notes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/table.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, this));
TableCaption.displayName = "TableCaption";
;
}}),
"[project]/src/app/products/add-product-sheet.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AddProductSheet": (()=>AddProductSheet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AddProductSheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AddProductSheet() from the server but AddProductSheet is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/add-product-sheet.tsx <module evaluation>", "AddProductSheet");
}}),
"[project]/src/app/products/add-product-sheet.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AddProductSheet": (()=>AddProductSheet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AddProductSheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AddProductSheet() from the server but AddProductSheet is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/add-product-sheet.tsx", "AddProductSheet");
}}),
"[project]/src/app/products/add-product-sheet.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$add$2d$product$2d$sheet$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/products/add-product-sheet.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$add$2d$product$2d$sheet$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/products/add-product-sheet.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$add$2d$product$2d$sheet$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/products/import-products-dialog.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ImportProductsDialog": (()=>ImportProductsDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ImportProductsDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ImportProductsDialog() from the server but ImportProductsDialog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/import-products-dialog.tsx <module evaluation>", "ImportProductsDialog");
}}),
"[project]/src/app/products/import-products-dialog.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ImportProductsDialog": (()=>ImportProductsDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ImportProductsDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ImportProductsDialog() from the server but ImportProductsDialog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/import-products-dialog.tsx", "ImportProductsDialog");
}}),
"[project]/src/app/products/import-products-dialog.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$import$2d$products$2d$dialog$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/products/import-products-dialog.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$import$2d$products$2d$dialog$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/products/import-products-dialog.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$import$2d$products$2d$dialog$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/app/products/product-actions.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProductActions": (()=>ProductActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ProductActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductActions() from the server but ProductActions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/product-actions.tsx <module evaluation>", "ProductActions");
}}),
"[project]/src/app/products/product-actions.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProductActions": (()=>ProductActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ProductActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductActions() from the server but ProductActions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/product-actions.tsx", "ProductActions");
}}),
"[project]/src/app/products/product-actions.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$product$2d$actions$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/products/product-actions.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$product$2d$actions$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/products/product-actions.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$product$2d$actions$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/pdf-viewer.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PDFViewer": (()=>PDFViewer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const PDFViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PDFViewer() from the server but PDFViewer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/pdf-viewer.tsx <module evaluation>", "PDFViewer");
}}),
"[project]/src/components/pdf-viewer.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PDFViewer": (()=>PDFViewer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const PDFViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PDFViewer() from the server but PDFViewer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/pdf-viewer.tsx", "PDFViewer");
}}),
"[project]/src/components/pdf-viewer.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$viewer$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/pdf-viewer.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$viewer$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/pdf-viewer.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$viewer$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/products/products-filters.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProductsFilters": (()=>ProductsFilters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ProductsFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductsFilters() from the server but ProductsFilters is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/products-filters.tsx <module evaluation>", "ProductsFilters");
}}),
"[project]/src/app/products/products-filters.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProductsFilters": (()=>ProductsFilters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ProductsFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductsFilters() from the server but ProductsFilters is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/products-filters.tsx", "ProductsFilters");
}}),
"[project]/src/app/products/products-filters.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$products$2d$filters$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/products/products-filters.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$products$2d$filters$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/products/products-filters.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$products$2d$filters$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/products/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>ProductsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firestore-data-service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$add$2d$product$2d$sheet$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/add-product-sheet.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$import$2d$products$2d$dialog$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/import-products-dialog.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$product$2d$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/product-actions.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$viewer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pdf-viewer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$products$2d$filters$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/products-filters.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
async function ProductsPage({ searchParams }) {
    const [products, allCategories] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2d$data$2d$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductCategoriesAction"])()
    ]);
    const categoryParam = typeof searchParams?.category === "string" ? searchParams.category : Array.isArray(searchParams?.category) ? searchParams?.category[0] : undefined;
    const filteredProducts = categoryParam ? products.filter((product)=>product.categoryId === categoryParam) : products;
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(amount);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight",
                            children: [
                                "Products ",
                                filteredProducts.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2 justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$products$2d$filters$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductsFilters"], {
                                categories: allCategories
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$import$2d$products$2d$dialog$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImportProductsDialog"], {}, void 0, false, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$add$2d$product$2d$sheet$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AddProductSheet"], {}, void 0, false, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Your Products"
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "A list of all the products and services you offer."
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "Image"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "SKUs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    children: "Catalogue"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "text-right",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "text-right",
                                                    children: "GST"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableHead"], {
                                                    className: "w-[50px]",
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/products/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/products/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableBody"], {
                                        children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableRow"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: product.productImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-16 h-16 rounded-md overflow-hidden bg-gray-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                src: product.productImage.url,
                                                                alt: product.name,
                                                                fill: true,
                                                                className: "object-cover",
                                                                sizes: "64px"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/page.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/page.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: "No image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/page.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "font-medium",
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1",
                                                            children: product.categoryId ? (()=>{
                                                                const category = allCategories.find((c)=>c.id === product.categoryId);
                                                                return category ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    children: category.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/products/page.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/products/page.tsx",
                                                                    lineNumber: 121,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground text-sm",
                                                                children: "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/page.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/page.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/page.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1",
                                                            children: product.skus?.map((sku)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    children: sku
                                                                }, sku, false, {
                                                                    fileName: "[project]/src/app/products/page.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 49
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/page.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: product.cataloguePdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$viewer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PDFViewer"], {
                                                                pdfData: product.cataloguePdf,
                                                                trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    size: "sm",
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/products/page.tsx",
                                                                            lineNumber: 141,
                                                                            columnNumber: 31
                                                                        }, void 0),
                                                                        "View PDF"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/products/page.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 29
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-muted-foreground",
                                                                children: "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/products/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/page.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-right",
                                                        children: formatCurrency(product.price)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        className: "text-right",
                                                        children: [
                                                            product.gstRate,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/products/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableCell"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$product$2d$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductActions"], {
                                                            product: product
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/products/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/products/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, product.id, true, {
                                                fileName: "[project]/src/app/products/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            filteredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-10 text-muted-foreground",
                                children: products.length === 0 ? "You haven't added any products yet." : "No products found for the selected category."
                            }, void 0, false, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/products/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/products/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/products/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f52ec35d._.js.map