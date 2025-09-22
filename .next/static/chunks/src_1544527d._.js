(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Firestore-based data service - replaces JSON file operations
// Original JSON-based service backed up as index-json-backup.ts
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/lib/data:0b5fb7 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f4280ff5e64067f99266109815caf0860a45cc58c":"getLeads"},"src/lib/firestore-data-service.ts",""] */ __turbopack_context__.s({
    "getLeads": (()=>getLeads)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getLeads = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f4280ff5e64067f99266109815caf0860a45cc58c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getLeads"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlyZXN0b3JlLWRhdGEtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IFxuICBlbXBsb3llZVNlcnZpY2UsIFxuICBsZWFkU2VydmljZSwgXG4gIHByb2R1Y3RTZXJ2aWNlLCBcbiAgcXVvdGF0aW9uU2VydmljZSxcbiAgZGVwYXJ0bWVudHNTZXJ2aWNlLFxuICBlbXBsb3llZVJvbGVzU2VydmljZSxcbiAgbGVhZFNvdXJjZXNTZXJ2aWNlLFxuICBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlXG59IGZyb20gJy4vYnVzaW5lc3Mtc2VydmljZXMnO1xuaW1wb3J0IHsgXG4gIEVtcGxveWVlLCBcbiAgTGVhZCwgXG4gIFByb2R1Y3QsIFxuICBRdW90YXRpb24sIFxuICBRdW90YXRpb25UZW1wbGF0ZSxcbiAgRGVwYXJ0bWVudCxcbiAgRW1wbG95ZWVSb2xlLFxuICBMZWFkU291cmNlLFxuICBMZWFkQWN0aXZpdHlcbn0gZnJvbSAnLi9idXNpbmVzcy10eXBlcyc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBGaXJlc3RvcmUgVGltZXN0YW1wcyB0byBwbGFpbiBvYmplY3RzXG5mdW5jdGlvbiBjb252ZXJ0VGltZXN0YW1wVG9QbGFpbihvYmo6IGFueSk6IGFueSB7XG4gIGlmICghb2JqKSByZXR1cm4gb2JqO1xuICBcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIFRpbWVzdGFtcCkge1xuICAgIHJldHVybiBvYmoudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgfVxuICBcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmoubWFwKGl0ZW0gPT4gY29udmVydFRpbWVzdGFtcFRvUGxhaW4oaXRlbSkpO1xuICB9XG4gIFxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQ6IGFueSA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnZlcnRlZFtrZXldID0gY29udmVydFRpbWVzdGFtcFRvUGxhaW4ob2JqW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udmVydGVkO1xuICB9XG4gIFxuICByZXR1cm4gb2JqO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBGaXJlc3RvcmUgZG9jdW1lbnRzIHRvIHBsYWluIG9iamVjdHNcbmZ1bmN0aW9uIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluPFQ+KGRvYzogVCk6IFQge1xuICByZXR1cm4gY29udmVydFRpbWVzdGFtcFRvUGxhaW4oZG9jKTtcbn1cblxuLy8gVHlwZSBkZWZpbml0aW9ucyB0byBtYXRjaCB5b3VyIGV4aXN0aW5nIHR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5IGV4dGVuZHMgTGVhZEFjdGl2aXR5IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3RW1wbG95ZWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBob25lOiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcbiAgZGVwYXJ0bWVudDogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3UHJvZHVjdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgZ3N0UmF0ZTogbnVtYmVyO1xuICBza3VzPzogc3RyaW5nW107XG4gIGNhdGFsb2d1ZVVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGFibGVMZWFkRGF0YSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvbXBhbnk/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbiAgd2hhdHNhcHBOdW1iZXI/OiBzdHJpbmc7XG4gIHN0YXR1cz86IExlYWRbJ3N0YXR1cyddO1xuICBzb3VyY2U/OiBzdHJpbmc7XG4gIHByb2R1Y3RzPzogTGVhZFsncHJvZHVjdHMnXTtcbn1cblxuLy8gRW1wbG95ZWUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVzID0gYXN5bmMgKCk6IFByb21pc2U8RW1wbG95ZWVbXT4gPT4ge1xuICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBlbXBsb3llZXMubWFwKGVtcCA9PiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihlbXApKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFbXBsb3llZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8RW1wbG95ZWUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIHJldHVybiBlbXBsb3llZSA/IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGVtcGxveWVlKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFbXBsb3llZSA9IGFzeW5jIChlbXBsb3llZURhdGE6IE5ld0VtcGxveWVlKTogUHJvbWlzZTxFbXBsb3llZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGVtcGxveWVlU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLmVtcGxveWVlRGF0YSxcbiAgICBpc0FjdGl2ZTogdHJ1ZVxuICB9KTtcbiAgXG4gIGNvbnN0IG5ld0VtcGxveWVlID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0VtcGxveWVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGVtcGxveWVlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdFbXBsb3llZSk7XG59O1xuXG4vLyBMZWFkIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldExlYWRzID0gYXN5bmMgKHF1ZXJ5Pzogc3RyaW5nLCBzdGF0dXM/OiBzdHJpbmcpOiBQcm9taXNlPExlYWRbXT4gPT4ge1xuICBsZXQgbGVhZHM6IExlYWRbXSA9IFtdO1xuICBcbiAgaWYgKHN0YXR1cykge1xuICAgIGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0TGVhZHNCeVN0YXR1cyhzdGF0dXMgYXMgTGVhZFsnc3RhdHVzJ10pO1xuICB9IGVsc2Uge1xuICAgIGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QWxsKCk7XG4gIH1cbiAgXG4gIC8vIENvbnZlcnQgdG8gcGxhaW4gb2JqZWN0c1xuICBsZWFkcyA9IGxlYWRzLm1hcChsZWFkID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGxlYWQpKTtcbiAgXG4gIGlmIChxdWVyeSkge1xuICAgIGNvbnN0IGxvd2VyY2FzZWRRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgbGVhZHMgPSBsZWFkcy5maWx0ZXIoXG4gICAgICBsZWFkID0+XG4gICAgICAgIGxlYWQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyY2FzZWRRdWVyeSkgfHxcbiAgICAgICAgbGVhZC5jb21wYW55LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJjYXNlZFF1ZXJ5KVxuICAgICk7XG4gIH1cbiAgXG4gIHJldHVybiBsZWFkcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYURhdGUgPSBhLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGEuY3JlYXRlZEF0LnRvU3RyaW5nKCkpLmdldFRpbWUoKSA6IDA7XG4gICAgY29uc3QgYkRhdGUgPSBiLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGIuY3JlYXRlZEF0LnRvU3RyaW5nKCkpLmdldFRpbWUoKSA6IDA7XG4gICAgcmV0dXJuIGJEYXRlIC0gYURhdGU7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExlYWRCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPExlYWQgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIWxlYWQpIHJldHVybiB1bmRlZmluZWQ7XG4gIFxuICBjb25zdCBwbGFpbkxlYWQgPSBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihsZWFkKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5wbGFpbkxlYWQsXG4gICAgYWN0aXZpdGllczogcGxhaW5MZWFkLmFjdGl2aXRpZXMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGFEYXRlID0gbmV3IERhdGUoYS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGJEYXRlID0gbmV3IERhdGUoYi5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICAgIH0pXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmVjZW50QWN0aXZpdGllcyA9IGFzeW5jIChsaW1pdDogbnVtYmVyKTogUHJvbWlzZTx7IGxlYWQ6IExlYWQ7IGFjdGl2aXR5OiBBY3Rpdml0eSB9W10+ID0+IHtcbiAgY29uc3QgbGVhZHMgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRBbGwoKTtcbiAgY29uc3QgcGxhaW5MZWFkcyA9IGxlYWRzLm1hcChsZWFkID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGxlYWQpKTtcbiAgXG4gIGNvbnN0IGFsbEFjdGl2aXRpZXMgPSBwbGFpbkxlYWRzLmZsYXRNYXAobGVhZCA9PiBcbiAgICBsZWFkLmFjdGl2aXRpZXMubWFwKGFjdGl2aXR5ID0+ICh7IGxlYWQsIGFjdGl2aXR5IH0pKVxuICApO1xuICBcbiAgcmV0dXJuIGFsbEFjdGl2aXRpZXNcbiAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgYURhdGUgPSBuZXcgRGF0ZShhLmFjdGl2aXR5LmRhdGUudG9TdHJpbmcoKSkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgYkRhdGUgPSBuZXcgRGF0ZShiLmFjdGl2aXR5LmRhdGUudG9TdHJpbmcoKSkuZ2V0VGltZSgpO1xuICAgICAgcmV0dXJuIGJEYXRlIC0gYURhdGU7XG4gICAgfSlcbiAgICAuc2xpY2UoMCwgbGltaXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZExlYWQgPSBhc3luYyAobGVhZERhdGE6IE9taXQ8TGVhZCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ2FjdGl2aXRpZXMnPiAmIHsgbm90ZXM/OiBzdHJpbmcgfSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBjb25zdCB7IG5vdGVzLCAuLi5yZXN0T2ZMZWFkRGF0YSB9ID0gbGVhZERhdGE7XG4gIFxuICBjb25zdCBpbml0aWFsQWN0aXZpdHk6IExlYWRBY3Rpdml0eVtdID0gW107XG4gIGlmIChub3Rlcykge1xuICAgIGluaXRpYWxBY3Rpdml0eS5wdXNoKHtcbiAgICAgIGlkOiBgYWN0LSR7RGF0ZS5ub3coKX0tMWAsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB0eXBlOiAnRW1haWwnLFxuICAgICAgbm90ZXM6IGBMZWFkIGNyZWF0ZWQgaW4gdGhlIHN5c3RlbS4gSW5pdGlhbCBub3RlczogJHtub3Rlc31gLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaWQgPSBhd2FpdCBsZWFkU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnJlc3RPZkxlYWREYXRhLFxuICAgIGFjdGl2aXRpZXM6IGluaXRpYWxBY3Rpdml0eSxcbiAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgZXN0aW1hdGVkVmFsdWU6IGxlYWREYXRhLnByb2R1Y3RzPy5yZWR1Y2UoKHN1bSwgcHJvZHVjdCkgPT4gXG4gICAgICBzdW0gKyAocHJvZHVjdC5xdWFudGl0eSAqIHByb2R1Y3QucmF0ZSksIDApIHx8IDBcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdMZWFkID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3TGVhZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBsZWFkJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdMZWFkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRBY3Rpdml0eVRvTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgYWN0aXZpdHlEYXRhOiBPbWl0PEFjdGl2aXR5LCAnaWQnIHwgJ2RhdGUnPik6IFByb21pc2U8QWN0aXZpdHk+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCFsZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgY29uc3QgbmV3QWN0aXZpdHk6IExlYWRBY3Rpdml0eSA9IHtcbiAgICAuLi5hY3Rpdml0eURhdGEsXG4gICAgaWQ6IGBhY3QtJHtsZWFkSWR9LSR7RGF0ZS5ub3coKX1gLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbiAgXG4gIGF3YWl0IGxlYWRTZXJ2aWNlLmFkZEFjdGl2aXR5KGxlYWRJZCwgbmV3QWN0aXZpdHkpO1xuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3QWN0aXZpdHkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxlYWRTdGF0dXMgPSBhc3luYyAobGVhZElkOiBzdHJpbmcsIHN0YXR1czogTGVhZFsnc3RhdHVzJ10pOiBQcm9taXNlPExlYWQ+ID0+IHtcbiAgYXdhaXQgbGVhZFNlcnZpY2UudXBkYXRlU3RhdHVzKGxlYWRJZCwgc3RhdHVzKTtcbiAgY29uc3QgdXBkYXRlZExlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGxlYWRJZCk7XG4gIGlmICghdXBkYXRlZExlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xlYWQgbm90IGZvdW5kIGFmdGVyIHVwZGF0ZScpO1xuICB9XG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih1cGRhdGVkTGVhZCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgbGVhZERhdGE6IFVwZGF0YWJsZUxlYWREYXRhKTogUHJvbWlzZTxMZWFkPiA9PiB7XG4gIGF3YWl0IGxlYWRTZXJ2aWNlLnVwZGF0ZShsZWFkSWQsIGxlYWREYXRhKTtcbiAgY29uc3QgdXBkYXRlZExlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGxlYWRJZCk7XG4gIGlmICghdXBkYXRlZExlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xlYWQgbm90IGZvdW5kIGFmdGVyIHVwZGF0ZScpO1xuICB9XG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih1cGRhdGVkTGVhZCk7XG59O1xuXG4vLyBQcm9kdWN0IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZHVjdFtdPiA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihwcm9kdWN0KSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4ucHJvZHVjdERhdGEsXG4gICAgaXNBY3RpdmU6IHRydWUsXG4gICAgc3RvY2tRdWFudGl0eTogMTAwLFxuICAgIG1pblN0b2NrTGV2ZWw6IDEwXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UHJvZHVjdCA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1Byb2R1Y3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcHJvZHVjdCcpO1xuICB9XG4gIFxuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3UHJvZHVjdCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChpZDogc3RyaW5nLCBwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBhd2FpdCBwcm9kdWN0U2VydmljZS51cGRhdGUoaWQsIHByb2R1Y3REYXRhKTtcbiAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCF1cGRhdGVkUHJvZHVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvZHVjdCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHVwZGF0ZWRQcm9kdWN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9kdWN0ID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG5cbi8vIExlYWQgU291cmNlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldExlYWRTb3VyY2VzID0gYXN5bmMgKCk6IFByb21pc2U8TGVhZFNvdXJjZVtdPiA9PiB7XG4gIGNvbnN0IHNvdXJjZXMgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBzb3VyY2VzLm1hcChzb3VyY2UgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4oc291cmNlKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTGVhZFNvdXJjZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPExlYWRTb3VyY2U+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuY3JlYXRlKHtcbiAgICBuYW1lLFxuICAgIGlzQWN0aXZlOiB0cnVlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3U291cmNlID0gYXdhaXQgbGVhZFNvdXJjZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1NvdXJjZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBsZWFkIHNvdXJjZScpO1xuICB9XG4gIFxuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3U291cmNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVMZWFkU291cmNlID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuXG4vLyBRdW90YXRpb24gZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0UXVvdGF0aW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPFF1b3RhdGlvbltdPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbnMgPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEFsbCgpO1xuICBjb25zdCBwbGFpblF1b3RhdGlvbnMgPSBxdW90YXRpb25zLm1hcChxID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHEpKTtcbiAgXG4gIHJldHVybiBwbGFpblF1b3RhdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25CeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPFF1b3RhdGlvbiB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCBxdW90YXRpb24gPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gcXVvdGF0aW9uID8gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4ocXVvdGF0aW9uKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRRdW90YXRpb24gPSBhc3luYyAocXVvdGF0aW9uRGF0YTogT21pdDxRdW90YXRpb24sICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdxdW90YXRpb25OdW1iZXInPik6IFByb21pc2U8UXVvdGF0aW9uPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbk51bWJlciA9IGF3YWl0IHF1b3RhdGlvblNlcnZpY2UuZ2VuZXJhdGVRdW90YXRpb25OdW1iZXIoKTtcbiAgXG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnF1b3RhdGlvbkRhdGEsXG4gICAgcXVvdGF0aW9uTnVtYmVyXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UXVvdGF0aW9uID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdRdW90YXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdRdW90YXRpb24pO1xufTtcblxuLy8gUXVvdGF0aW9uIFRlbXBsYXRlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFF1b3RhdGlvblRlbXBsYXRlcyA9IGFzeW5jICgpOiBQcm9taXNlPFF1b3RhdGlvblRlbXBsYXRlW10+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGVzID0gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIHRlbXBsYXRlcy5tYXAodGVtcGxhdGUgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4odGVtcGxhdGUpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25UZW1wbGF0ZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gdGVtcGxhdGUgPyBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih0ZW1wbGF0ZSkgOiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAodGVtcGxhdGVEYXRhOiBPbWl0PFF1b3RhdGlvblRlbXBsYXRlLCAnaWQnPik6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4udGVtcGxhdGVEYXRhLFxuICAgIGlzRGVmYXVsdDogZmFsc2VcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3VGVtcGxhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uIHRlbXBsYXRlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdUZW1wbGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZywgdGVtcGxhdGVEYXRhOiBRdW90YXRpb25UZW1wbGF0ZSk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS51cGRhdGUoaWQsIHRlbXBsYXRlRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghdXBkYXRlZFRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHVwZGF0ZWRUZW1wbGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuXG4vLyBFbXBsb3llZSBSb2xlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldEVtcGxveWVlUm9sZXMgPSBhc3luYyAoKTogUHJvbWlzZTxFbXBsb3llZVJvbGVbXT4gPT4ge1xuICBjb25zdCByb2xlcyA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmdldEFsbCgpO1xuICByZXR1cm4gcm9sZXMubWFwKHJvbGUgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4ocm9sZSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEVtcGxveWVlUm9sZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVtcGxveWVlUm9sZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmNyZWF0ZSh7IG5hbWUgfSk7XG4gIFxuICBjb25zdCBuZXdSb2xlID0gYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3Um9sZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZSByb2xlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdSb2xlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVFbXBsb3llZVJvbGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gRGVwYXJ0bWVudCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPERlcGFydG1lbnRbXT4gPT4ge1xuICBjb25zdCBkZXBhcnRtZW50cyA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIGRlcGFydG1lbnRzLm1hcChkZXB0ID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGRlcHQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGREZXBhcnRtZW50ID0gYXN5bmMgKG5hbWU6IHN0cmluZyk6IFByb21pc2U8RGVwYXJ0bWVudD4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5jcmVhdGUoeyBuYW1lIH0pO1xuICBcbiAgY29uc3QgbmV3RGVwYXJ0bWVudCA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdEZXBhcnRtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGRlcGFydG1lbnQnKTtcbiAgfVxuICBcbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKG5ld0RlcGFydG1lbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZURlcGFydG1lbnQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQWlIYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:19e538 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fb4f29abf3ebe0f2a94c04f8d336c3e47599188ee":"getRecentActivities"},"src/lib/firestore-data-service.ts",""] */ __turbopack_context__.s({
    "getRecentActivities": (()=>getRecentActivities)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getRecentActivities = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fb4f29abf3ebe0f2a94c04f8d336c3e47599188ee", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getRecentActivities"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlyZXN0b3JlLWRhdGEtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IFxuICBlbXBsb3llZVNlcnZpY2UsIFxuICBsZWFkU2VydmljZSwgXG4gIHByb2R1Y3RTZXJ2aWNlLCBcbiAgcXVvdGF0aW9uU2VydmljZSxcbiAgZGVwYXJ0bWVudHNTZXJ2aWNlLFxuICBlbXBsb3llZVJvbGVzU2VydmljZSxcbiAgbGVhZFNvdXJjZXNTZXJ2aWNlLFxuICBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlXG59IGZyb20gJy4vYnVzaW5lc3Mtc2VydmljZXMnO1xuaW1wb3J0IHsgXG4gIEVtcGxveWVlLCBcbiAgTGVhZCwgXG4gIFByb2R1Y3QsIFxuICBRdW90YXRpb24sIFxuICBRdW90YXRpb25UZW1wbGF0ZSxcbiAgRGVwYXJ0bWVudCxcbiAgRW1wbG95ZWVSb2xlLFxuICBMZWFkU291cmNlLFxuICBMZWFkQWN0aXZpdHlcbn0gZnJvbSAnLi9idXNpbmVzcy10eXBlcyc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBGaXJlc3RvcmUgVGltZXN0YW1wcyB0byBwbGFpbiBvYmplY3RzXG5mdW5jdGlvbiBjb252ZXJ0VGltZXN0YW1wVG9QbGFpbihvYmo6IGFueSk6IGFueSB7XG4gIGlmICghb2JqKSByZXR1cm4gb2JqO1xuICBcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIFRpbWVzdGFtcCkge1xuICAgIHJldHVybiBvYmoudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgfVxuICBcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmoubWFwKGl0ZW0gPT4gY29udmVydFRpbWVzdGFtcFRvUGxhaW4oaXRlbSkpO1xuICB9XG4gIFxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQ6IGFueSA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnZlcnRlZFtrZXldID0gY29udmVydFRpbWVzdGFtcFRvUGxhaW4ob2JqW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udmVydGVkO1xuICB9XG4gIFxuICByZXR1cm4gb2JqO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBGaXJlc3RvcmUgZG9jdW1lbnRzIHRvIHBsYWluIG9iamVjdHNcbmZ1bmN0aW9uIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluPFQ+KGRvYzogVCk6IFQge1xuICByZXR1cm4gY29udmVydFRpbWVzdGFtcFRvUGxhaW4oZG9jKTtcbn1cblxuLy8gVHlwZSBkZWZpbml0aW9ucyB0byBtYXRjaCB5b3VyIGV4aXN0aW5nIHR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5IGV4dGVuZHMgTGVhZEFjdGl2aXR5IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3RW1wbG95ZWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBob25lOiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcbiAgZGVwYXJ0bWVudDogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3UHJvZHVjdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgZ3N0UmF0ZTogbnVtYmVyO1xuICBza3VzPzogc3RyaW5nW107XG4gIGNhdGFsb2d1ZVVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGFibGVMZWFkRGF0YSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvbXBhbnk/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbiAgd2hhdHNhcHBOdW1iZXI/OiBzdHJpbmc7XG4gIHN0YXR1cz86IExlYWRbJ3N0YXR1cyddO1xuICBzb3VyY2U/OiBzdHJpbmc7XG4gIHByb2R1Y3RzPzogTGVhZFsncHJvZHVjdHMnXTtcbn1cblxuLy8gRW1wbG95ZWUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVzID0gYXN5bmMgKCk6IFByb21pc2U8RW1wbG95ZWVbXT4gPT4ge1xuICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBlbXBsb3llZXMubWFwKGVtcCA9PiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihlbXApKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFbXBsb3llZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8RW1wbG95ZWUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIHJldHVybiBlbXBsb3llZSA/IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGVtcGxveWVlKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFbXBsb3llZSA9IGFzeW5jIChlbXBsb3llZURhdGE6IE5ld0VtcGxveWVlKTogUHJvbWlzZTxFbXBsb3llZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGVtcGxveWVlU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLmVtcGxveWVlRGF0YSxcbiAgICBpc0FjdGl2ZTogdHJ1ZVxuICB9KTtcbiAgXG4gIGNvbnN0IG5ld0VtcGxveWVlID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0VtcGxveWVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGVtcGxveWVlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdFbXBsb3llZSk7XG59O1xuXG4vLyBMZWFkIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldExlYWRzID0gYXN5bmMgKHF1ZXJ5Pzogc3RyaW5nLCBzdGF0dXM/OiBzdHJpbmcpOiBQcm9taXNlPExlYWRbXT4gPT4ge1xuICBsZXQgbGVhZHM6IExlYWRbXSA9IFtdO1xuICBcbiAgaWYgKHN0YXR1cykge1xuICAgIGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0TGVhZHNCeVN0YXR1cyhzdGF0dXMgYXMgTGVhZFsnc3RhdHVzJ10pO1xuICB9IGVsc2Uge1xuICAgIGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QWxsKCk7XG4gIH1cbiAgXG4gIC8vIENvbnZlcnQgdG8gcGxhaW4gb2JqZWN0c1xuICBsZWFkcyA9IGxlYWRzLm1hcChsZWFkID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGxlYWQpKTtcbiAgXG4gIGlmIChxdWVyeSkge1xuICAgIGNvbnN0IGxvd2VyY2FzZWRRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgbGVhZHMgPSBsZWFkcy5maWx0ZXIoXG4gICAgICBsZWFkID0+XG4gICAgICAgIGxlYWQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyY2FzZWRRdWVyeSkgfHxcbiAgICAgICAgbGVhZC5jb21wYW55LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJjYXNlZFF1ZXJ5KVxuICAgICk7XG4gIH1cbiAgXG4gIHJldHVybiBsZWFkcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYURhdGUgPSBhLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGEuY3JlYXRlZEF0LnRvU3RyaW5nKCkpLmdldFRpbWUoKSA6IDA7XG4gICAgY29uc3QgYkRhdGUgPSBiLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGIuY3JlYXRlZEF0LnRvU3RyaW5nKCkpLmdldFRpbWUoKSA6IDA7XG4gICAgcmV0dXJuIGJEYXRlIC0gYURhdGU7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExlYWRCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPExlYWQgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIWxlYWQpIHJldHVybiB1bmRlZmluZWQ7XG4gIFxuICBjb25zdCBwbGFpbkxlYWQgPSBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihsZWFkKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5wbGFpbkxlYWQsXG4gICAgYWN0aXZpdGllczogcGxhaW5MZWFkLmFjdGl2aXRpZXMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGFEYXRlID0gbmV3IERhdGUoYS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGJEYXRlID0gbmV3IERhdGUoYi5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICAgIH0pXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmVjZW50QWN0aXZpdGllcyA9IGFzeW5jIChsaW1pdDogbnVtYmVyKTogUHJvbWlzZTx7IGxlYWQ6IExlYWQ7IGFjdGl2aXR5OiBBY3Rpdml0eSB9W10+ID0+IHtcbiAgY29uc3QgbGVhZHMgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRBbGwoKTtcbiAgY29uc3QgcGxhaW5MZWFkcyA9IGxlYWRzLm1hcChsZWFkID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGxlYWQpKTtcbiAgXG4gIGNvbnN0IGFsbEFjdGl2aXRpZXMgPSBwbGFpbkxlYWRzLmZsYXRNYXAobGVhZCA9PiBcbiAgICBsZWFkLmFjdGl2aXRpZXMubWFwKGFjdGl2aXR5ID0+ICh7IGxlYWQsIGFjdGl2aXR5IH0pKVxuICApO1xuICBcbiAgcmV0dXJuIGFsbEFjdGl2aXRpZXNcbiAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgYURhdGUgPSBuZXcgRGF0ZShhLmFjdGl2aXR5LmRhdGUudG9TdHJpbmcoKSkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgYkRhdGUgPSBuZXcgRGF0ZShiLmFjdGl2aXR5LmRhdGUudG9TdHJpbmcoKSkuZ2V0VGltZSgpO1xuICAgICAgcmV0dXJuIGJEYXRlIC0gYURhdGU7XG4gICAgfSlcbiAgICAuc2xpY2UoMCwgbGltaXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZExlYWQgPSBhc3luYyAobGVhZERhdGE6IE9taXQ8TGVhZCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ2FjdGl2aXRpZXMnPiAmIHsgbm90ZXM/OiBzdHJpbmcgfSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBjb25zdCB7IG5vdGVzLCAuLi5yZXN0T2ZMZWFkRGF0YSB9ID0gbGVhZERhdGE7XG4gIFxuICBjb25zdCBpbml0aWFsQWN0aXZpdHk6IExlYWRBY3Rpdml0eVtdID0gW107XG4gIGlmIChub3Rlcykge1xuICAgIGluaXRpYWxBY3Rpdml0eS5wdXNoKHtcbiAgICAgIGlkOiBgYWN0LSR7RGF0ZS5ub3coKX0tMWAsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB0eXBlOiAnRW1haWwnLFxuICAgICAgbm90ZXM6IGBMZWFkIGNyZWF0ZWQgaW4gdGhlIHN5c3RlbS4gSW5pdGlhbCBub3RlczogJHtub3Rlc31gLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaWQgPSBhd2FpdCBsZWFkU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnJlc3RPZkxlYWREYXRhLFxuICAgIGFjdGl2aXRpZXM6IGluaXRpYWxBY3Rpdml0eSxcbiAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgZXN0aW1hdGVkVmFsdWU6IGxlYWREYXRhLnByb2R1Y3RzPy5yZWR1Y2UoKHN1bSwgcHJvZHVjdCkgPT4gXG4gICAgICBzdW0gKyAocHJvZHVjdC5xdWFudGl0eSAqIHByb2R1Y3QucmF0ZSksIDApIHx8IDBcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdMZWFkID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3TGVhZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBsZWFkJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdMZWFkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRBY3Rpdml0eVRvTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgYWN0aXZpdHlEYXRhOiBPbWl0PEFjdGl2aXR5LCAnaWQnIHwgJ2RhdGUnPik6IFByb21pc2U8QWN0aXZpdHk+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCFsZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgY29uc3QgbmV3QWN0aXZpdHk6IExlYWRBY3Rpdml0eSA9IHtcbiAgICAuLi5hY3Rpdml0eURhdGEsXG4gICAgaWQ6IGBhY3QtJHtsZWFkSWR9LSR7RGF0ZS5ub3coKX1gLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbiAgXG4gIGF3YWl0IGxlYWRTZXJ2aWNlLmFkZEFjdGl2aXR5KGxlYWRJZCwgbmV3QWN0aXZpdHkpO1xuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3QWN0aXZpdHkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxlYWRTdGF0dXMgPSBhc3luYyAobGVhZElkOiBzdHJpbmcsIHN0YXR1czogTGVhZFsnc3RhdHVzJ10pOiBQcm9taXNlPExlYWQ+ID0+IHtcbiAgYXdhaXQgbGVhZFNlcnZpY2UudXBkYXRlU3RhdHVzKGxlYWRJZCwgc3RhdHVzKTtcbiAgY29uc3QgdXBkYXRlZExlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGxlYWRJZCk7XG4gIGlmICghdXBkYXRlZExlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xlYWQgbm90IGZvdW5kIGFmdGVyIHVwZGF0ZScpO1xuICB9XG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih1cGRhdGVkTGVhZCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgbGVhZERhdGE6IFVwZGF0YWJsZUxlYWREYXRhKTogUHJvbWlzZTxMZWFkPiA9PiB7XG4gIGF3YWl0IGxlYWRTZXJ2aWNlLnVwZGF0ZShsZWFkSWQsIGxlYWREYXRhKTtcbiAgY29uc3QgdXBkYXRlZExlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGxlYWRJZCk7XG4gIGlmICghdXBkYXRlZExlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xlYWQgbm90IGZvdW5kIGFmdGVyIHVwZGF0ZScpO1xuICB9XG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih1cGRhdGVkTGVhZCk7XG59O1xuXG4vLyBQcm9kdWN0IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZHVjdFtdPiA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihwcm9kdWN0KSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4ucHJvZHVjdERhdGEsXG4gICAgaXNBY3RpdmU6IHRydWUsXG4gICAgc3RvY2tRdWFudGl0eTogMTAwLFxuICAgIG1pblN0b2NrTGV2ZWw6IDEwXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UHJvZHVjdCA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1Byb2R1Y3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcHJvZHVjdCcpO1xuICB9XG4gIFxuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3UHJvZHVjdCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChpZDogc3RyaW5nLCBwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBhd2FpdCBwcm9kdWN0U2VydmljZS51cGRhdGUoaWQsIHByb2R1Y3REYXRhKTtcbiAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCF1cGRhdGVkUHJvZHVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvZHVjdCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHVwZGF0ZWRQcm9kdWN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9kdWN0ID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG5cbi8vIExlYWQgU291cmNlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldExlYWRTb3VyY2VzID0gYXN5bmMgKCk6IFByb21pc2U8TGVhZFNvdXJjZVtdPiA9PiB7XG4gIGNvbnN0IHNvdXJjZXMgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBzb3VyY2VzLm1hcChzb3VyY2UgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4oc291cmNlKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTGVhZFNvdXJjZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPExlYWRTb3VyY2U+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuY3JlYXRlKHtcbiAgICBuYW1lLFxuICAgIGlzQWN0aXZlOiB0cnVlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3U291cmNlID0gYXdhaXQgbGVhZFNvdXJjZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1NvdXJjZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBsZWFkIHNvdXJjZScpO1xuICB9XG4gIFxuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3U291cmNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVMZWFkU291cmNlID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuXG4vLyBRdW90YXRpb24gZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0UXVvdGF0aW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPFF1b3RhdGlvbltdPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbnMgPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEFsbCgpO1xuICBjb25zdCBwbGFpblF1b3RhdGlvbnMgPSBxdW90YXRpb25zLm1hcChxID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHEpKTtcbiAgXG4gIHJldHVybiBwbGFpblF1b3RhdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25CeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPFF1b3RhdGlvbiB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCBxdW90YXRpb24gPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gcXVvdGF0aW9uID8gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4ocXVvdGF0aW9uKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRRdW90YXRpb24gPSBhc3luYyAocXVvdGF0aW9uRGF0YTogT21pdDxRdW90YXRpb24sICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdxdW90YXRpb25OdW1iZXInPik6IFByb21pc2U8UXVvdGF0aW9uPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbk51bWJlciA9IGF3YWl0IHF1b3RhdGlvblNlcnZpY2UuZ2VuZXJhdGVRdW90YXRpb25OdW1iZXIoKTtcbiAgXG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnF1b3RhdGlvbkRhdGEsXG4gICAgcXVvdGF0aW9uTnVtYmVyXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UXVvdGF0aW9uID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdRdW90YXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdRdW90YXRpb24pO1xufTtcblxuLy8gUXVvdGF0aW9uIFRlbXBsYXRlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFF1b3RhdGlvblRlbXBsYXRlcyA9IGFzeW5jICgpOiBQcm9taXNlPFF1b3RhdGlvblRlbXBsYXRlW10+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGVzID0gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIHRlbXBsYXRlcy5tYXAodGVtcGxhdGUgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4odGVtcGxhdGUpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25UZW1wbGF0ZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gdGVtcGxhdGUgPyBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih0ZW1wbGF0ZSkgOiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAodGVtcGxhdGVEYXRhOiBPbWl0PFF1b3RhdGlvblRlbXBsYXRlLCAnaWQnPik6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4udGVtcGxhdGVEYXRhLFxuICAgIGlzRGVmYXVsdDogZmFsc2VcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3VGVtcGxhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uIHRlbXBsYXRlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdUZW1wbGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZywgdGVtcGxhdGVEYXRhOiBRdW90YXRpb25UZW1wbGF0ZSk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS51cGRhdGUoaWQsIHRlbXBsYXRlRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghdXBkYXRlZFRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHVwZGF0ZWRUZW1wbGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuXG4vLyBFbXBsb3llZSBSb2xlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldEVtcGxveWVlUm9sZXMgPSBhc3luYyAoKTogUHJvbWlzZTxFbXBsb3llZVJvbGVbXT4gPT4ge1xuICBjb25zdCByb2xlcyA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmdldEFsbCgpO1xuICByZXR1cm4gcm9sZXMubWFwKHJvbGUgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4ocm9sZSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEVtcGxveWVlUm9sZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVtcGxveWVlUm9sZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmNyZWF0ZSh7IG5hbWUgfSk7XG4gIFxuICBjb25zdCBuZXdSb2xlID0gYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3Um9sZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZSByb2xlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdSb2xlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVFbXBsb3llZVJvbGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gRGVwYXJ0bWVudCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPERlcGFydG1lbnRbXT4gPT4ge1xuICBjb25zdCBkZXBhcnRtZW50cyA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIGRlcGFydG1lbnRzLm1hcChkZXB0ID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGRlcHQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGREZXBhcnRtZW50ID0gYXN5bmMgKG5hbWU6IHN0cmluZyk6IFByb21pc2U8RGVwYXJ0bWVudD4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5jcmVhdGUoeyBuYW1lIH0pO1xuICBcbiAgY29uc3QgbmV3RGVwYXJ0bWVudCA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdEZXBhcnRtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGRlcGFydG1lbnQnKTtcbiAgfVxuICBcbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKG5ld0RlcGFydG1lbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZURlcGFydG1lbnQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjhTQTRKYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:dcf6f1 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7ff71b0c7623881d0aa5c8c677cd09724481a157b2":"getProducts"},"src/lib/firestore-data-service.ts",""] */ __turbopack_context__.s({
    "getProducts": (()=>getProducts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getProducts = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7ff71b0c7623881d0aa5c8c677cd09724481a157b2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProducts"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlyZXN0b3JlLWRhdGEtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IFxuICBlbXBsb3llZVNlcnZpY2UsIFxuICBsZWFkU2VydmljZSwgXG4gIHByb2R1Y3RTZXJ2aWNlLCBcbiAgcXVvdGF0aW9uU2VydmljZSxcbiAgZGVwYXJ0bWVudHNTZXJ2aWNlLFxuICBlbXBsb3llZVJvbGVzU2VydmljZSxcbiAgbGVhZFNvdXJjZXNTZXJ2aWNlLFxuICBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlXG59IGZyb20gJy4vYnVzaW5lc3Mtc2VydmljZXMnO1xuaW1wb3J0IHsgXG4gIEVtcGxveWVlLCBcbiAgTGVhZCwgXG4gIFByb2R1Y3QsIFxuICBRdW90YXRpb24sIFxuICBRdW90YXRpb25UZW1wbGF0ZSxcbiAgRGVwYXJ0bWVudCxcbiAgRW1wbG95ZWVSb2xlLFxuICBMZWFkU291cmNlLFxuICBMZWFkQWN0aXZpdHlcbn0gZnJvbSAnLi9idXNpbmVzcy10eXBlcyc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBGaXJlc3RvcmUgVGltZXN0YW1wcyB0byBwbGFpbiBvYmplY3RzXG5mdW5jdGlvbiBjb252ZXJ0VGltZXN0YW1wVG9QbGFpbihvYmo6IGFueSk6IGFueSB7XG4gIGlmICghb2JqKSByZXR1cm4gb2JqO1xuICBcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIFRpbWVzdGFtcCkge1xuICAgIHJldHVybiBvYmoudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgfVxuICBcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmoubWFwKGl0ZW0gPT4gY29udmVydFRpbWVzdGFtcFRvUGxhaW4oaXRlbSkpO1xuICB9XG4gIFxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQ6IGFueSA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnZlcnRlZFtrZXldID0gY29udmVydFRpbWVzdGFtcFRvUGxhaW4ob2JqW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udmVydGVkO1xuICB9XG4gIFxuICByZXR1cm4gb2JqO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBGaXJlc3RvcmUgZG9jdW1lbnRzIHRvIHBsYWluIG9iamVjdHNcbmZ1bmN0aW9uIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluPFQ+KGRvYzogVCk6IFQge1xuICByZXR1cm4gY29udmVydFRpbWVzdGFtcFRvUGxhaW4oZG9jKTtcbn1cblxuLy8gVHlwZSBkZWZpbml0aW9ucyB0byBtYXRjaCB5b3VyIGV4aXN0aW5nIHR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5IGV4dGVuZHMgTGVhZEFjdGl2aXR5IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3RW1wbG95ZWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBob25lOiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcbiAgZGVwYXJ0bWVudDogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3UHJvZHVjdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgZ3N0UmF0ZTogbnVtYmVyO1xuICBza3VzPzogc3RyaW5nW107XG4gIGNhdGFsb2d1ZVVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGFibGVMZWFkRGF0YSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvbXBhbnk/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbiAgd2hhdHNhcHBOdW1iZXI/OiBzdHJpbmc7XG4gIHN0YXR1cz86IExlYWRbJ3N0YXR1cyddO1xuICBzb3VyY2U/OiBzdHJpbmc7XG4gIHByb2R1Y3RzPzogTGVhZFsncHJvZHVjdHMnXTtcbn1cblxuLy8gRW1wbG95ZWUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVzID0gYXN5bmMgKCk6IFByb21pc2U8RW1wbG95ZWVbXT4gPT4ge1xuICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBlbXBsb3llZXMubWFwKGVtcCA9PiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihlbXApKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFbXBsb3llZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8RW1wbG95ZWUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIHJldHVybiBlbXBsb3llZSA/IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGVtcGxveWVlKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFbXBsb3llZSA9IGFzeW5jIChlbXBsb3llZURhdGE6IE5ld0VtcGxveWVlKTogUHJvbWlzZTxFbXBsb3llZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGVtcGxveWVlU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLmVtcGxveWVlRGF0YSxcbiAgICBpc0FjdGl2ZTogdHJ1ZVxuICB9KTtcbiAgXG4gIGNvbnN0IG5ld0VtcGxveWVlID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0VtcGxveWVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGVtcGxveWVlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdFbXBsb3llZSk7XG59O1xuXG4vLyBMZWFkIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldExlYWRzID0gYXN5bmMgKHF1ZXJ5Pzogc3RyaW5nLCBzdGF0dXM/OiBzdHJpbmcpOiBQcm9taXNlPExlYWRbXT4gPT4ge1xuICBsZXQgbGVhZHM6IExlYWRbXSA9IFtdO1xuICBcbiAgaWYgKHN0YXR1cykge1xuICAgIGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0TGVhZHNCeVN0YXR1cyhzdGF0dXMgYXMgTGVhZFsnc3RhdHVzJ10pO1xuICB9IGVsc2Uge1xuICAgIGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QWxsKCk7XG4gIH1cbiAgXG4gIC8vIENvbnZlcnQgdG8gcGxhaW4gb2JqZWN0c1xuICBsZWFkcyA9IGxlYWRzLm1hcChsZWFkID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGxlYWQpKTtcbiAgXG4gIGlmIChxdWVyeSkge1xuICAgIGNvbnN0IGxvd2VyY2FzZWRRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgbGVhZHMgPSBsZWFkcy5maWx0ZXIoXG4gICAgICBsZWFkID0+XG4gICAgICAgIGxlYWQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyY2FzZWRRdWVyeSkgfHxcbiAgICAgICAgbGVhZC5jb21wYW55LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJjYXNlZFF1ZXJ5KVxuICAgICk7XG4gIH1cbiAgXG4gIHJldHVybiBsZWFkcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYURhdGUgPSBhLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGEuY3JlYXRlZEF0LnRvU3RyaW5nKCkpLmdldFRpbWUoKSA6IDA7XG4gICAgY29uc3QgYkRhdGUgPSBiLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGIuY3JlYXRlZEF0LnRvU3RyaW5nKCkpLmdldFRpbWUoKSA6IDA7XG4gICAgcmV0dXJuIGJEYXRlIC0gYURhdGU7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExlYWRCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPExlYWQgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIWxlYWQpIHJldHVybiB1bmRlZmluZWQ7XG4gIFxuICBjb25zdCBwbGFpbkxlYWQgPSBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihsZWFkKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5wbGFpbkxlYWQsXG4gICAgYWN0aXZpdGllczogcGxhaW5MZWFkLmFjdGl2aXRpZXMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGFEYXRlID0gbmV3IERhdGUoYS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGJEYXRlID0gbmV3IERhdGUoYi5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICAgIH0pXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmVjZW50QWN0aXZpdGllcyA9IGFzeW5jIChsaW1pdDogbnVtYmVyKTogUHJvbWlzZTx7IGxlYWQ6IExlYWQ7IGFjdGl2aXR5OiBBY3Rpdml0eSB9W10+ID0+IHtcbiAgY29uc3QgbGVhZHMgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRBbGwoKTtcbiAgY29uc3QgcGxhaW5MZWFkcyA9IGxlYWRzLm1hcChsZWFkID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGxlYWQpKTtcbiAgXG4gIGNvbnN0IGFsbEFjdGl2aXRpZXMgPSBwbGFpbkxlYWRzLmZsYXRNYXAobGVhZCA9PiBcbiAgICBsZWFkLmFjdGl2aXRpZXMubWFwKGFjdGl2aXR5ID0+ICh7IGxlYWQsIGFjdGl2aXR5IH0pKVxuICApO1xuICBcbiAgcmV0dXJuIGFsbEFjdGl2aXRpZXNcbiAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgYURhdGUgPSBuZXcgRGF0ZShhLmFjdGl2aXR5LmRhdGUudG9TdHJpbmcoKSkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgYkRhdGUgPSBuZXcgRGF0ZShiLmFjdGl2aXR5LmRhdGUudG9TdHJpbmcoKSkuZ2V0VGltZSgpO1xuICAgICAgcmV0dXJuIGJEYXRlIC0gYURhdGU7XG4gICAgfSlcbiAgICAuc2xpY2UoMCwgbGltaXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZExlYWQgPSBhc3luYyAobGVhZERhdGE6IE9taXQ8TGVhZCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ2FjdGl2aXRpZXMnPiAmIHsgbm90ZXM/OiBzdHJpbmcgfSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBjb25zdCB7IG5vdGVzLCAuLi5yZXN0T2ZMZWFkRGF0YSB9ID0gbGVhZERhdGE7XG4gIFxuICBjb25zdCBpbml0aWFsQWN0aXZpdHk6IExlYWRBY3Rpdml0eVtdID0gW107XG4gIGlmIChub3Rlcykge1xuICAgIGluaXRpYWxBY3Rpdml0eS5wdXNoKHtcbiAgICAgIGlkOiBgYWN0LSR7RGF0ZS5ub3coKX0tMWAsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB0eXBlOiAnRW1haWwnLFxuICAgICAgbm90ZXM6IGBMZWFkIGNyZWF0ZWQgaW4gdGhlIHN5c3RlbS4gSW5pdGlhbCBub3RlczogJHtub3Rlc31gLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaWQgPSBhd2FpdCBsZWFkU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnJlc3RPZkxlYWREYXRhLFxuICAgIGFjdGl2aXRpZXM6IGluaXRpYWxBY3Rpdml0eSxcbiAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgZXN0aW1hdGVkVmFsdWU6IGxlYWREYXRhLnByb2R1Y3RzPy5yZWR1Y2UoKHN1bSwgcHJvZHVjdCkgPT4gXG4gICAgICBzdW0gKyAocHJvZHVjdC5xdWFudGl0eSAqIHByb2R1Y3QucmF0ZSksIDApIHx8IDBcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdMZWFkID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3TGVhZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBsZWFkJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdMZWFkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRBY3Rpdml0eVRvTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgYWN0aXZpdHlEYXRhOiBPbWl0PEFjdGl2aXR5LCAnaWQnIHwgJ2RhdGUnPik6IFByb21pc2U8QWN0aXZpdHk+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCFsZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgY29uc3QgbmV3QWN0aXZpdHk6IExlYWRBY3Rpdml0eSA9IHtcbiAgICAuLi5hY3Rpdml0eURhdGEsXG4gICAgaWQ6IGBhY3QtJHtsZWFkSWR9LSR7RGF0ZS5ub3coKX1gLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbiAgXG4gIGF3YWl0IGxlYWRTZXJ2aWNlLmFkZEFjdGl2aXR5KGxlYWRJZCwgbmV3QWN0aXZpdHkpO1xuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3QWN0aXZpdHkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxlYWRTdGF0dXMgPSBhc3luYyAobGVhZElkOiBzdHJpbmcsIHN0YXR1czogTGVhZFsnc3RhdHVzJ10pOiBQcm9taXNlPExlYWQ+ID0+IHtcbiAgYXdhaXQgbGVhZFNlcnZpY2UudXBkYXRlU3RhdHVzKGxlYWRJZCwgc3RhdHVzKTtcbiAgY29uc3QgdXBkYXRlZExlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGxlYWRJZCk7XG4gIGlmICghdXBkYXRlZExlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xlYWQgbm90IGZvdW5kIGFmdGVyIHVwZGF0ZScpO1xuICB9XG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih1cGRhdGVkTGVhZCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgbGVhZERhdGE6IFVwZGF0YWJsZUxlYWREYXRhKTogUHJvbWlzZTxMZWFkPiA9PiB7XG4gIGF3YWl0IGxlYWRTZXJ2aWNlLnVwZGF0ZShsZWFkSWQsIGxlYWREYXRhKTtcbiAgY29uc3QgdXBkYXRlZExlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGxlYWRJZCk7XG4gIGlmICghdXBkYXRlZExlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xlYWQgbm90IGZvdW5kIGFmdGVyIHVwZGF0ZScpO1xuICB9XG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih1cGRhdGVkTGVhZCk7XG59O1xuXG4vLyBQcm9kdWN0IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZHVjdFtdPiA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihwcm9kdWN0KSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4ucHJvZHVjdERhdGEsXG4gICAgaXNBY3RpdmU6IHRydWUsXG4gICAgc3RvY2tRdWFudGl0eTogMTAwLFxuICAgIG1pblN0b2NrTGV2ZWw6IDEwXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UHJvZHVjdCA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1Byb2R1Y3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcHJvZHVjdCcpO1xuICB9XG4gIFxuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3UHJvZHVjdCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChpZDogc3RyaW5nLCBwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBhd2FpdCBwcm9kdWN0U2VydmljZS51cGRhdGUoaWQsIHByb2R1Y3REYXRhKTtcbiAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCF1cGRhdGVkUHJvZHVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvZHVjdCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHVwZGF0ZWRQcm9kdWN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9kdWN0ID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG5cbi8vIExlYWQgU291cmNlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldExlYWRTb3VyY2VzID0gYXN5bmMgKCk6IFByb21pc2U8TGVhZFNvdXJjZVtdPiA9PiB7XG4gIGNvbnN0IHNvdXJjZXMgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBzb3VyY2VzLm1hcChzb3VyY2UgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4oc291cmNlKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTGVhZFNvdXJjZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPExlYWRTb3VyY2U+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuY3JlYXRlKHtcbiAgICBuYW1lLFxuICAgIGlzQWN0aXZlOiB0cnVlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3U291cmNlID0gYXdhaXQgbGVhZFNvdXJjZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1NvdXJjZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBsZWFkIHNvdXJjZScpO1xuICB9XG4gIFxuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3U291cmNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVMZWFkU291cmNlID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuXG4vLyBRdW90YXRpb24gZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0UXVvdGF0aW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPFF1b3RhdGlvbltdPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbnMgPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEFsbCgpO1xuICBjb25zdCBwbGFpblF1b3RhdGlvbnMgPSBxdW90YXRpb25zLm1hcChxID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHEpKTtcbiAgXG4gIHJldHVybiBwbGFpblF1b3RhdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25CeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPFF1b3RhdGlvbiB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCBxdW90YXRpb24gPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gcXVvdGF0aW9uID8gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4ocXVvdGF0aW9uKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRRdW90YXRpb24gPSBhc3luYyAocXVvdGF0aW9uRGF0YTogT21pdDxRdW90YXRpb24sICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdxdW90YXRpb25OdW1iZXInPik6IFByb21pc2U8UXVvdGF0aW9uPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbk51bWJlciA9IGF3YWl0IHF1b3RhdGlvblNlcnZpY2UuZ2VuZXJhdGVRdW90YXRpb25OdW1iZXIoKTtcbiAgXG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnF1b3RhdGlvbkRhdGEsXG4gICAgcXVvdGF0aW9uTnVtYmVyXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UXVvdGF0aW9uID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdRdW90YXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdRdW90YXRpb24pO1xufTtcblxuLy8gUXVvdGF0aW9uIFRlbXBsYXRlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFF1b3RhdGlvblRlbXBsYXRlcyA9IGFzeW5jICgpOiBQcm9taXNlPFF1b3RhdGlvblRlbXBsYXRlW10+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGVzID0gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIHRlbXBsYXRlcy5tYXAodGVtcGxhdGUgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4odGVtcGxhdGUpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25UZW1wbGF0ZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gdGVtcGxhdGUgPyBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih0ZW1wbGF0ZSkgOiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAodGVtcGxhdGVEYXRhOiBPbWl0PFF1b3RhdGlvblRlbXBsYXRlLCAnaWQnPik6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4udGVtcGxhdGVEYXRhLFxuICAgIGlzRGVmYXVsdDogZmFsc2VcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3VGVtcGxhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uIHRlbXBsYXRlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdUZW1wbGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZywgdGVtcGxhdGVEYXRhOiBRdW90YXRpb25UZW1wbGF0ZSk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS51cGRhdGUoaWQsIHRlbXBsYXRlRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghdXBkYXRlZFRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHVwZGF0ZWRUZW1wbGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuXG4vLyBFbXBsb3llZSBSb2xlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldEVtcGxveWVlUm9sZXMgPSBhc3luYyAoKTogUHJvbWlzZTxFbXBsb3llZVJvbGVbXT4gPT4ge1xuICBjb25zdCByb2xlcyA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmdldEFsbCgpO1xuICByZXR1cm4gcm9sZXMubWFwKHJvbGUgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4ocm9sZSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEVtcGxveWVlUm9sZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVtcGxveWVlUm9sZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmNyZWF0ZSh7IG5hbWUgfSk7XG4gIFxuICBjb25zdCBuZXdSb2xlID0gYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3Um9sZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZSByb2xlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdSb2xlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVFbXBsb3llZVJvbGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gRGVwYXJ0bWVudCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPERlcGFydG1lbnRbXT4gPT4ge1xuICBjb25zdCBkZXBhcnRtZW50cyA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIGRlcGFydG1lbnRzLm1hcChkZXB0ID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGRlcHQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGREZXBhcnRtZW50ID0gYXN5bmMgKG5hbWU6IHN0cmluZyk6IFByb21pc2U8RGVwYXJ0bWVudD4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5jcmVhdGUoeyBuYW1lIH0pO1xuICBcbiAgY29uc3QgbmV3RGVwYXJ0bWVudCA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdEZXBhcnRtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGRlcGFydG1lbnQnKTtcbiAgfVxuICBcbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKG5ld0RlcGFydG1lbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZURlcGFydG1lbnQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InNTQTZPYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:0029f1 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fabb9890e6ce6942891dc6903686fbb41d7e40da9":"getQuotations"},"src/lib/firestore-data-service.ts",""] */ __turbopack_context__.s({
    "getQuotations": (()=>getQuotations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getQuotations = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fabb9890e6ce6942891dc6903686fbb41d7e40da9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getQuotations"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlyZXN0b3JlLWRhdGEtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IFxuICBlbXBsb3llZVNlcnZpY2UsIFxuICBsZWFkU2VydmljZSwgXG4gIHByb2R1Y3RTZXJ2aWNlLCBcbiAgcXVvdGF0aW9uU2VydmljZSxcbiAgZGVwYXJ0bWVudHNTZXJ2aWNlLFxuICBlbXBsb3llZVJvbGVzU2VydmljZSxcbiAgbGVhZFNvdXJjZXNTZXJ2aWNlLFxuICBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlXG59IGZyb20gJy4vYnVzaW5lc3Mtc2VydmljZXMnO1xuaW1wb3J0IHsgXG4gIEVtcGxveWVlLCBcbiAgTGVhZCwgXG4gIFByb2R1Y3QsIFxuICBRdW90YXRpb24sIFxuICBRdW90YXRpb25UZW1wbGF0ZSxcbiAgRGVwYXJ0bWVudCxcbiAgRW1wbG95ZWVSb2xlLFxuICBMZWFkU291cmNlLFxuICBMZWFkQWN0aXZpdHlcbn0gZnJvbSAnLi9idXNpbmVzcy10eXBlcyc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBGaXJlc3RvcmUgVGltZXN0YW1wcyB0byBwbGFpbiBvYmplY3RzXG5mdW5jdGlvbiBjb252ZXJ0VGltZXN0YW1wVG9QbGFpbihvYmo6IGFueSk6IGFueSB7XG4gIGlmICghb2JqKSByZXR1cm4gb2JqO1xuICBcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIFRpbWVzdGFtcCkge1xuICAgIHJldHVybiBvYmoudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgfVxuICBcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmoubWFwKGl0ZW0gPT4gY29udmVydFRpbWVzdGFtcFRvUGxhaW4oaXRlbSkpO1xuICB9XG4gIFxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBjb252ZXJ0ZWQ6IGFueSA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnZlcnRlZFtrZXldID0gY29udmVydFRpbWVzdGFtcFRvUGxhaW4ob2JqW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udmVydGVkO1xuICB9XG4gIFxuICByZXR1cm4gb2JqO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBGaXJlc3RvcmUgZG9jdW1lbnRzIHRvIHBsYWluIG9iamVjdHNcbmZ1bmN0aW9uIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluPFQ+KGRvYzogVCk6IFQge1xuICByZXR1cm4gY29udmVydFRpbWVzdGFtcFRvUGxhaW4oZG9jKTtcbn1cblxuLy8gVHlwZSBkZWZpbml0aW9ucyB0byBtYXRjaCB5b3VyIGV4aXN0aW5nIHR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5IGV4dGVuZHMgTGVhZEFjdGl2aXR5IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3RW1wbG95ZWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBob25lOiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcbiAgZGVwYXJ0bWVudDogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3UHJvZHVjdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgZ3N0UmF0ZTogbnVtYmVyO1xuICBza3VzPzogc3RyaW5nW107XG4gIGNhdGFsb2d1ZVVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGFibGVMZWFkRGF0YSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvbXBhbnk/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbiAgd2hhdHNhcHBOdW1iZXI/OiBzdHJpbmc7XG4gIHN0YXR1cz86IExlYWRbJ3N0YXR1cyddO1xuICBzb3VyY2U/OiBzdHJpbmc7XG4gIHByb2R1Y3RzPzogTGVhZFsncHJvZHVjdHMnXTtcbn1cblxuLy8gRW1wbG95ZWUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVzID0gYXN5bmMgKCk6IFByb21pc2U8RW1wbG95ZWVbXT4gPT4ge1xuICBjb25zdCBlbXBsb3llZXMgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBlbXBsb3llZXMubWFwKGVtcCA9PiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihlbXApKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFbXBsb3llZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8RW1wbG95ZWUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgZW1wbG95ZWUgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIHJldHVybiBlbXBsb3llZSA/IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGVtcGxveWVlKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFbXBsb3llZSA9IGFzeW5jIChlbXBsb3llZURhdGE6IE5ld0VtcGxveWVlKTogUHJvbWlzZTxFbXBsb3llZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGVtcGxveWVlU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLmVtcGxveWVlRGF0YSxcbiAgICBpc0FjdGl2ZTogdHJ1ZVxuICB9KTtcbiAgXG4gIGNvbnN0IG5ld0VtcGxveWVlID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0VtcGxveWVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGVtcGxveWVlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdFbXBsb3llZSk7XG59O1xuXG4vLyBMZWFkIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldExlYWRzID0gYXN5bmMgKHF1ZXJ5Pzogc3RyaW5nLCBzdGF0dXM/OiBzdHJpbmcpOiBQcm9taXNlPExlYWRbXT4gPT4ge1xuICBsZXQgbGVhZHM6IExlYWRbXSA9IFtdO1xuICBcbiAgaWYgKHN0YXR1cykge1xuICAgIGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0TGVhZHNCeVN0YXR1cyhzdGF0dXMgYXMgTGVhZFsnc3RhdHVzJ10pO1xuICB9IGVsc2Uge1xuICAgIGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QWxsKCk7XG4gIH1cbiAgXG4gIC8vIENvbnZlcnQgdG8gcGxhaW4gb2JqZWN0c1xuICBsZWFkcyA9IGxlYWRzLm1hcChsZWFkID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGxlYWQpKTtcbiAgXG4gIGlmIChxdWVyeSkge1xuICAgIGNvbnN0IGxvd2VyY2FzZWRRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgbGVhZHMgPSBsZWFkcy5maWx0ZXIoXG4gICAgICBsZWFkID0+XG4gICAgICAgIGxlYWQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyY2FzZWRRdWVyeSkgfHxcbiAgICAgICAgbGVhZC5jb21wYW55LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJjYXNlZFF1ZXJ5KVxuICAgICk7XG4gIH1cbiAgXG4gIHJldHVybiBsZWFkcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYURhdGUgPSBhLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGEuY3JlYXRlZEF0LnRvU3RyaW5nKCkpLmdldFRpbWUoKSA6IDA7XG4gICAgY29uc3QgYkRhdGUgPSBiLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGIuY3JlYXRlZEF0LnRvU3RyaW5nKCkpLmdldFRpbWUoKSA6IDA7XG4gICAgcmV0dXJuIGJEYXRlIC0gYURhdGU7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldExlYWRCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPExlYWQgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIWxlYWQpIHJldHVybiB1bmRlZmluZWQ7XG4gIFxuICBjb25zdCBwbGFpbkxlYWQgPSBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihsZWFkKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5wbGFpbkxlYWQsXG4gICAgYWN0aXZpdGllczogcGxhaW5MZWFkLmFjdGl2aXRpZXMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGFEYXRlID0gbmV3IERhdGUoYS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGJEYXRlID0gbmV3IERhdGUoYi5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICAgIH0pXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmVjZW50QWN0aXZpdGllcyA9IGFzeW5jIChsaW1pdDogbnVtYmVyKTogUHJvbWlzZTx7IGxlYWQ6IExlYWQ7IGFjdGl2aXR5OiBBY3Rpdml0eSB9W10+ID0+IHtcbiAgY29uc3QgbGVhZHMgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRBbGwoKTtcbiAgY29uc3QgcGxhaW5MZWFkcyA9IGxlYWRzLm1hcChsZWFkID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGxlYWQpKTtcbiAgXG4gIGNvbnN0IGFsbEFjdGl2aXRpZXMgPSBwbGFpbkxlYWRzLmZsYXRNYXAobGVhZCA9PiBcbiAgICBsZWFkLmFjdGl2aXRpZXMubWFwKGFjdGl2aXR5ID0+ICh7IGxlYWQsIGFjdGl2aXR5IH0pKVxuICApO1xuICBcbiAgcmV0dXJuIGFsbEFjdGl2aXRpZXNcbiAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgYURhdGUgPSBuZXcgRGF0ZShhLmFjdGl2aXR5LmRhdGUudG9TdHJpbmcoKSkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgYkRhdGUgPSBuZXcgRGF0ZShiLmFjdGl2aXR5LmRhdGUudG9TdHJpbmcoKSkuZ2V0VGltZSgpO1xuICAgICAgcmV0dXJuIGJEYXRlIC0gYURhdGU7XG4gICAgfSlcbiAgICAuc2xpY2UoMCwgbGltaXQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZExlYWQgPSBhc3luYyAobGVhZERhdGE6IE9taXQ8TGVhZCwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ2FjdGl2aXRpZXMnPiAmIHsgbm90ZXM/OiBzdHJpbmcgfSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBjb25zdCB7IG5vdGVzLCAuLi5yZXN0T2ZMZWFkRGF0YSB9ID0gbGVhZERhdGE7XG4gIFxuICBjb25zdCBpbml0aWFsQWN0aXZpdHk6IExlYWRBY3Rpdml0eVtdID0gW107XG4gIGlmIChub3Rlcykge1xuICAgIGluaXRpYWxBY3Rpdml0eS5wdXNoKHtcbiAgICAgIGlkOiBgYWN0LSR7RGF0ZS5ub3coKX0tMWAsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB0eXBlOiAnRW1haWwnLFxuICAgICAgbm90ZXM6IGBMZWFkIGNyZWF0ZWQgaW4gdGhlIHN5c3RlbS4gSW5pdGlhbCBub3RlczogJHtub3Rlc31gLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaWQgPSBhd2FpdCBsZWFkU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnJlc3RPZkxlYWREYXRhLFxuICAgIGFjdGl2aXRpZXM6IGluaXRpYWxBY3Rpdml0eSxcbiAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgZXN0aW1hdGVkVmFsdWU6IGxlYWREYXRhLnByb2R1Y3RzPy5yZWR1Y2UoKHN1bSwgcHJvZHVjdCkgPT4gXG4gICAgICBzdW0gKyAocHJvZHVjdC5xdWFudGl0eSAqIHByb2R1Y3QucmF0ZSksIDApIHx8IDBcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdMZWFkID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3TGVhZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBsZWFkJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdMZWFkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRBY3Rpdml0eVRvTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgYWN0aXZpdHlEYXRhOiBPbWl0PEFjdGl2aXR5LCAnaWQnIHwgJ2RhdGUnPik6IFByb21pc2U8QWN0aXZpdHk+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCFsZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgY29uc3QgbmV3QWN0aXZpdHk6IExlYWRBY3Rpdml0eSA9IHtcbiAgICAuLi5hY3Rpdml0eURhdGEsXG4gICAgaWQ6IGBhY3QtJHtsZWFkSWR9LSR7RGF0ZS5ub3coKX1gLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbiAgXG4gIGF3YWl0IGxlYWRTZXJ2aWNlLmFkZEFjdGl2aXR5KGxlYWRJZCwgbmV3QWN0aXZpdHkpO1xuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3QWN0aXZpdHkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxlYWRTdGF0dXMgPSBhc3luYyAobGVhZElkOiBzdHJpbmcsIHN0YXR1czogTGVhZFsnc3RhdHVzJ10pOiBQcm9taXNlPExlYWQ+ID0+IHtcbiAgYXdhaXQgbGVhZFNlcnZpY2UudXBkYXRlU3RhdHVzKGxlYWRJZCwgc3RhdHVzKTtcbiAgY29uc3QgdXBkYXRlZExlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGxlYWRJZCk7XG4gIGlmICghdXBkYXRlZExlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xlYWQgbm90IGZvdW5kIGFmdGVyIHVwZGF0ZScpO1xuICB9XG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih1cGRhdGVkTGVhZCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgbGVhZERhdGE6IFVwZGF0YWJsZUxlYWREYXRhKTogUHJvbWlzZTxMZWFkPiA9PiB7XG4gIGF3YWl0IGxlYWRTZXJ2aWNlLnVwZGF0ZShsZWFkSWQsIGxlYWREYXRhKTtcbiAgY29uc3QgdXBkYXRlZExlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGxlYWRJZCk7XG4gIGlmICghdXBkYXRlZExlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xlYWQgbm90IGZvdW5kIGFmdGVyIHVwZGF0ZScpO1xuICB9XG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih1cGRhdGVkTGVhZCk7XG59O1xuXG4vLyBQcm9kdWN0IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZHVjdFtdPiA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihwcm9kdWN0KSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4ucHJvZHVjdERhdGEsXG4gICAgaXNBY3RpdmU6IHRydWUsXG4gICAgc3RvY2tRdWFudGl0eTogMTAwLFxuICAgIG1pblN0b2NrTGV2ZWw6IDEwXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UHJvZHVjdCA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1Byb2R1Y3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcHJvZHVjdCcpO1xuICB9XG4gIFxuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3UHJvZHVjdCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChpZDogc3RyaW5nLCBwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBhd2FpdCBwcm9kdWN0U2VydmljZS51cGRhdGUoaWQsIHByb2R1Y3REYXRhKTtcbiAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCF1cGRhdGVkUHJvZHVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvZHVjdCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHVwZGF0ZWRQcm9kdWN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9kdWN0ID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG5cbi8vIExlYWQgU291cmNlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldExlYWRTb3VyY2VzID0gYXN5bmMgKCk6IFByb21pc2U8TGVhZFNvdXJjZVtdPiA9PiB7XG4gIGNvbnN0IHNvdXJjZXMgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZ2V0QWxsKCk7XG4gIHJldHVybiBzb3VyY2VzLm1hcChzb3VyY2UgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4oc291cmNlKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTGVhZFNvdXJjZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPExlYWRTb3VyY2U+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuY3JlYXRlKHtcbiAgICBuYW1lLFxuICAgIGlzQWN0aXZlOiB0cnVlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3U291cmNlID0gYXdhaXQgbGVhZFNvdXJjZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1NvdXJjZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBsZWFkIHNvdXJjZScpO1xuICB9XG4gIFxuICByZXR1cm4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4obmV3U291cmNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVMZWFkU291cmNlID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuXG4vLyBRdW90YXRpb24gZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0UXVvdGF0aW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPFF1b3RhdGlvbltdPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbnMgPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEFsbCgpO1xuICBjb25zdCBwbGFpblF1b3RhdGlvbnMgPSBxdW90YXRpb25zLm1hcChxID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHEpKTtcbiAgXG4gIHJldHVybiBwbGFpblF1b3RhdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25CeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPFF1b3RhdGlvbiB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCBxdW90YXRpb24gPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gcXVvdGF0aW9uID8gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4ocXVvdGF0aW9uKSA6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRRdW90YXRpb24gPSBhc3luYyAocXVvdGF0aW9uRGF0YTogT21pdDxRdW90YXRpb24sICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdxdW90YXRpb25OdW1iZXInPik6IFByb21pc2U8UXVvdGF0aW9uPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbk51bWJlciA9IGF3YWl0IHF1b3RhdGlvblNlcnZpY2UuZ2VuZXJhdGVRdW90YXRpb25OdW1iZXIoKTtcbiAgXG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnF1b3RhdGlvbkRhdGEsXG4gICAgcXVvdGF0aW9uTnVtYmVyXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UXVvdGF0aW9uID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdRdW90YXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdRdW90YXRpb24pO1xufTtcblxuLy8gUXVvdGF0aW9uIFRlbXBsYXRlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFF1b3RhdGlvblRlbXBsYXRlcyA9IGFzeW5jICgpOiBQcm9taXNlPFF1b3RhdGlvblRlbXBsYXRlW10+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGVzID0gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIHRlbXBsYXRlcy5tYXAodGVtcGxhdGUgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4odGVtcGxhdGUpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25UZW1wbGF0ZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gdGVtcGxhdGUgPyBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbih0ZW1wbGF0ZSkgOiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAodGVtcGxhdGVEYXRhOiBPbWl0PFF1b3RhdGlvblRlbXBsYXRlLCAnaWQnPik6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4udGVtcGxhdGVEYXRhLFxuICAgIGlzRGVmYXVsdDogZmFsc2VcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3VGVtcGxhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uIHRlbXBsYXRlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdUZW1wbGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZywgdGVtcGxhdGVEYXRhOiBRdW90YXRpb25UZW1wbGF0ZSk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS51cGRhdGUoaWQsIHRlbXBsYXRlRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghdXBkYXRlZFRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKHVwZGF0ZWRUZW1wbGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuXG4vLyBFbXBsb3llZSBSb2xlIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldEVtcGxveWVlUm9sZXMgPSBhc3luYyAoKTogUHJvbWlzZTxFbXBsb3llZVJvbGVbXT4gPT4ge1xuICBjb25zdCByb2xlcyA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmdldEFsbCgpO1xuICByZXR1cm4gcm9sZXMubWFwKHJvbGUgPT4gY29udmVydEZpcmVzdG9yZURvY1RvUGxhaW4ocm9sZSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEVtcGxveWVlUm9sZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVtcGxveWVlUm9sZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmNyZWF0ZSh7IG5hbWUgfSk7XG4gIFxuICBjb25zdCBuZXdSb2xlID0gYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3Um9sZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGNyZWF0ZSBlbXBsb3llZSByb2xlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb252ZXJ0RmlyZXN0b3JlRG9jVG9QbGFpbihuZXdSb2xlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVFbXBsb3llZVJvbGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gRGVwYXJ0bWVudCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPERlcGFydG1lbnRbXT4gPT4ge1xuICBjb25zdCBkZXBhcnRtZW50cyA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIGRlcGFydG1lbnRzLm1hcChkZXB0ID0+IGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKGRlcHQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGREZXBhcnRtZW50ID0gYXN5bmMgKG5hbWU6IHN0cmluZyk6IFByb21pc2U8RGVwYXJ0bWVudD4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5jcmVhdGUoeyBuYW1lIH0pO1xuICBcbiAgY29uc3QgbmV3RGVwYXJ0bWVudCA9IGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdEZXBhcnRtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGRlcGFydG1lbnQnKTtcbiAgfVxuICBcbiAgcmV0dXJuIGNvbnZlcnRGaXJlc3RvcmVEb2NUb1BsYWluKG5ld0RlcGFydG1lbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZURlcGFydG1lbnQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQTBTYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard-chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
'use client';
;
;
const statusColors = {
    New: 'hsl(var(--chart-1))',
    'In Discussion': 'hsl(var(--chart-2))',
    Negotiation: 'hsl(var(--chart-3))',
    'Closed - Won': 'hsl(var(--chart-4))',
    'Closed - Lost': 'hsl(var(--chart-5))'
};
const statusToColor = (status)=>{
    if (status === 'Discussion') return statusColors['In Discussion'];
    if (status === 'Won') return statusColors['Closed - Won'];
    if (status === 'Lost') return statusColors['Closed - Lost'];
    return statusColors[status] || '#8884d8';
};
function DashboardChart({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
        width: "100%",
        height: 350,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            data: data,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                    strokeDasharray: "3 3",
                    vertical: false
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard-chart.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                    dataKey: "name",
                    stroke: "#888888",
                    fontSize: 12,
                    tickLine: false,
                    axisLine: false
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard-chart.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                    stroke: "#888888",
                    fontSize: 12,
                    tickLine: false,
                    axisLine: false,
                    tickFormatter: (value)=>`${value}`
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard-chart.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    cursor: {
                        fill: 'hsl(var(--muted))'
                    },
                    contentStyle: {
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard-chart.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    dataKey: "value",
                    radius: [
                        4,
                        4,
                        0,
                        0
                    ],
                    children: data.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                            fill: statusToColor(entry.name)
                        }, `cell-${index}`, false, {
                            fileName: "[project]/src/app/dashboard-chart.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard-chart.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard-chart.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-chart.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = DashboardChart;
var _c;
__turbopack_context__.k.register(_c, "DashboardChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/product-demand-chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductDemandChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
'use client';
;
;
function ProductDemandChart({ data }) {
    if (data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-muted-foreground py-10",
            children: "No product data available to display."
        }, void 0, false, {
            fileName: "[project]/src/app/product-demand-chart.tsx",
            lineNumber: 21,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
        width: "100%",
        height: 350,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            data: data,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                    strokeDasharray: "3 3",
                    vertical: false
                }, void 0, false, {
                    fileName: "[project]/src/app/product-demand-chart.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                    dataKey: "name",
                    stroke: "#888888",
                    fontSize: 12,
                    tickLine: false,
                    axisLine: false,
                    angle: -45,
                    textAnchor: "end",
                    height: 60
                }, void 0, false, {
                    fileName: "[project]/src/app/product-demand-chart.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                    stroke: "#888888",
                    fontSize: 12,
                    tickLine: false,
                    axisLine: false,
                    tickFormatter: (value)=>`${value}`,
                    allowDecimals: false
                }, void 0, false, {
                    fileName: "[project]/src/app/product-demand-chart.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    cursor: {
                        fill: 'hsl(var(--muted))'
                    },
                    contentStyle: {
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/product-demand-chart.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    dataKey: "count",
                    fill: "hsl(var(--primary))",
                    radius: [
                        4,
                        4,
                        0,
                        0
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/product-demand-chart.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/product-demand-chart.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/product-demand-chart.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = ProductDemandChart;
var _c;
__turbopack_context__.k.register(_c, "ProductDemandChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/average-conversion-time-chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AverageConversionTimeChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadialBarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/RadialBarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$RadialBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/RadialBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/PolarAngleAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
'use client';
;
;
function AverageConversionTimeChart({ timeInDays }) {
    const data = [
        {
            name: 'Conversion Time',
            value: timeInDays
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
        width: "100%",
        height: 150,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadialBarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadialBarChart"], {
            innerRadius: "80%",
            outerRadius: "100%",
            barSize: 10,
            data: data,
            startAngle: 90,
            endAngle: -270,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarAngleAxis"], {
                    type: "number",
                    domain: [
                        0,
                        Math.max(timeInDays, 30)
                    ],
                    angleAxisId: 0,
                    tick: false
                }, void 0, false, {
                    fileName: "[project]/src/app/average-conversion-time-chart.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$RadialBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadialBar"], {
                    background: true,
                    dataKey: "value",
                    cornerRadius: 10,
                    fill: "hsl(var(--primary))"
                }, void 0, false, {
                    fileName: "[project]/src/app/average-conversion-time-chart.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "50%",
                    y: "50%",
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    className: "fill-foreground text-3xl font-bold",
                    children: timeInDays
                }, void 0, false, {
                    fileName: "[project]/src/app/average-conversion-time-chart.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "50%",
                    y: "65%",
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    className: "fill-muted-foreground text-sm",
                    children: "Days"
                }, void 0, false, {
                    fileName: "[project]/src/app/average-conversion-time-chart.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/average-conversion-time-chart.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/average-conversion-time-chart.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = AverageConversionTimeChart;
var _c;
__turbopack_context__.k.register(_c, "AverageConversionTimeChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/quotations-by-month-chart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>QuotationsByMonthChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
'use client';
;
;
function QuotationsByMonthChart({ data }) {
    if (data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-muted-foreground py-10",
            children: "No quotation data available for the last 12 months."
        }, void 0, false, {
            fileName: "[project]/src/app/quotations-by-month-chart.tsx",
            lineNumber: 22,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
        width: "100%",
        height: 350,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            data: data,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                    strokeDasharray: "3 3",
                    vertical: false
                }, void 0, false, {
                    fileName: "[project]/src/app/quotations-by-month-chart.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                    dataKey: "month",
                    stroke: "#888888",
                    fontSize: 12,
                    tickLine: false,
                    axisLine: false
                }, void 0, false, {
                    fileName: "[project]/src/app/quotations-by-month-chart.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                    stroke: "#888888",
                    fontSize: 12,
                    tickLine: false,
                    axisLine: false,
                    tickFormatter: (value)=>`${value}`,
                    allowDecimals: false
                }, void 0, false, {
                    fileName: "[project]/src/app/quotations-by-month-chart.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    cursor: {
                        fill: 'hsl(var(--muted))'
                    },
                    contentStyle: {
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/quotations-by-month-chart.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    dataKey: "count",
                    fill: "hsl(var(--primary))",
                    radius: [
                        4,
                        4,
                        0,
                        0
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/app/quotations-by-month-chart.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/quotations-by-month-chart.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/quotations-by-month-chart.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = QuotationsByMonthChart;
var _c;
__turbopack_context__.k.register(_c, "QuotationsByMonthChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$0b5fb7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:0b5fb7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$19e538__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:19e538 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$dcf6f1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:dcf6f1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$0029f1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:0029f1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInDays.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$product$2d$demand$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/product-demand-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$average$2d$conversion$2d$time$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/average-conversion-time-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$quotations$2d$by$2d$month$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/quotations-by-month-chart.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
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
// We can't render the time on the server, as it may be in a different timezone than the client.
// Instead, we can render it on the client after the initial render.
function ClientTime({ date }) {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientTime.useEffect": ()=>{
            setTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(date), "p"));
        }
    }["ClientTime.useEffect"], [
        date
    ]);
    if (!time) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "outline",
        className: "ml-auto shrink-0",
        children: time
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ClientTime, "t5SmOhh13g3g0U8h9STA+7f4x44=");
_c = ClientTime;
function getConversionDate(lead) {
    if (lead.status !== 'Closed - Won') return null;
    // Find the activity where status was changed to 'Closed - Won'
    const statusChangeActivity = lead.activities.find((a)=>a.notes.includes("Status changed from") && a.notes.includes(`to "${'Closed - Won'}"`));
    if (statusChangeActivity) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(statusChangeActivity.date);
    }
    // Fallback: use the date of the last activity if no explicit status change is found
    if (lead.activities.length > 0) {
        // Activities are sorted by date descending, so the first one is the latest
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(lead.activities[0].date);
    }
    return null;
}
function Dashboard({ data }) {
    const { leads, recentActivities, productDemand, averageConversionTime, quotationsByMonth } = data;
    const stats = {
        total: leads.length,
        new: leads.filter((l)=>l.status === "New").length,
        inDiscussion: leads.filter((l)=>l.status === "In Discussion").length,
        negotiation: leads.filter((l)=>l.status === "Negotiation").length,
        closedWon: leads.filter((l)=>l.status === "Closed - Won").length,
        closedLost: leads.filter((l)=>l.status === "Closed - Lost").length
    };
    const chartData = [
        {
            name: "New",
            value: stats.new
        },
        {
            name: "Discussion",
            value: stats.inDiscussion
        },
        {
            name: "Negotiation",
            value: stats.negotiation
        },
        {
            name: "Won",
            value: stats.closedWon
        },
        {
            name: "Lost",
            value: stats.closedLost
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between space-y-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold tracking-tight",
                    children: "Dashboard"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Total Leads"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: stats.total
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "All leads in the system"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "In Discussion"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: stats.inDiscussion
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Leads currently in discussion"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "In Negotiation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: stats.negotiation
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Leads in negotiation phase"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 lg:grid-cols-2 xl:grid-cols-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "xl:col-span-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Leads Overview"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "A summary of leads by current status."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "pl-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    data: chartData
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "sm:col-span-1 xl:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "Average Conversion Time"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: "Average time from lead creation to closing a deal."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$average$2d$conversion$2d$time$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            timeInDays: averageConversionTime
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "sm:col-span-2 xl:col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: "Recent Activities"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: "A log of the most recent interactions with leads."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: recentActivities.map(({ lead, activity })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground border shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid gap-1 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        lead.name,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-normal text-muted-foreground",
                                                                            children: [
                                                                                " from ",
                                                                                lead.company
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/page.tsx",
                                                                            lineNumber: 196,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground",
                                                                    children: activity.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(activity.date), "PPP")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 199,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientTime, {
                                                            date: activity.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, activity.id, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Quotations Sent by Month"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Number of quotations created over the last 12 months."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$quotations$2d$by$2d$month$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    data: quotationsByMonth
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Product Demand"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Number of leads interested in each product."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$product$2d$demand$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    data: productDemand
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = Dashboard;
function DashboardPage() {
    _s1();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            async function fetchData() {
                const [leads, recentActivities, allProducts, quotations] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$0b5fb7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getLeads"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$19e538__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getRecentActivities"])(5),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$dcf6f1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProducts"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$0029f1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getQuotations"])()
                ]);
                let productDemand = [];
                if (leads.length > 0 && allProducts.length > 0) {
                    const productCounts = new Map();
                    leads.forEach({
                        "DashboardPage.useEffect.fetchData": (lead)=>{
                            if (lead.products) {
                                lead.products.forEach({
                                    "DashboardPage.useEffect.fetchData": (p)=>{
                                        productCounts.set(p.productId, (productCounts.get(p.productId) || 0) + 1);
                                    }
                                }["DashboardPage.useEffect.fetchData"]);
                            }
                        }
                    }["DashboardPage.useEffect.fetchData"]);
                    productDemand = Array.from(productCounts.entries()).map({
                        "DashboardPage.useEffect.fetchData": ([productId, count])=>{
                            const product = allProducts.find({
                                "DashboardPage.useEffect.fetchData.product": (p)=>p.id === productId
                            }["DashboardPage.useEffect.fetchData.product"]);
                            return {
                                name: product ? product.name : 'Unknown Product',
                                count: count
                            };
                        }
                    }["DashboardPage.useEffect.fetchData"]).sort({
                        "DashboardPage.useEffect.fetchData": (a, b)=>b.count - a.count
                    }["DashboardPage.useEffect.fetchData"]);
                }
                const wonLeads = leads.filter({
                    "DashboardPage.useEffect.fetchData.wonLeads": (lead)=>lead.status === 'Closed - Won'
                }["DashboardPage.useEffect.fetchData.wonLeads"]);
                let totalConversionDays = 0;
                let convertedCount = 0;
                wonLeads.forEach({
                    "DashboardPage.useEffect.fetchData": (lead)=>{
                        const creationDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(lead.createdAt);
                        const conversionDate = getConversionDate(lead);
                        if (conversionDate) {
                            totalConversionDays += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInDays"])(conversionDate, creationDate);
                            convertedCount++;
                        }
                    }
                }["DashboardPage.useEffect.fetchData"]);
                const averageConversionTime = convertedCount > 0 ? Math.round(totalConversionDays / convertedCount) : 0;
                const twelveMonthsAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(new Date(), 11);
                const monthlyCounts = {};
                // Initialize last 12 months
                for(let i = 0; i < 12; i++){
                    const monthKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(new Date(), i), 'MMM yyyy');
                    monthlyCounts[monthKey] = 0;
                }
                quotations.forEach({
                    "DashboardPage.useEffect.fetchData": (q)=>{
                        const qDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(q.createdAt);
                        if (qDate >= twelveMonthsAgo) {
                            const monthKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(qDate, 'MMM yyyy');
                            if (monthlyCounts.hasOwnProperty(monthKey)) {
                                monthlyCounts[monthKey]++;
                            }
                        }
                    }
                }["DashboardPage.useEffect.fetchData"]);
                const quotationsByMonth = Object.entries(monthlyCounts).map({
                    "DashboardPage.useEffect.fetchData.quotationsByMonth": ([month, count])=>({
                            month,
                            count
                        })
                }["DashboardPage.useEffect.fetchData.quotationsByMonth"]).sort({
                    "DashboardPage.useEffect.fetchData.quotationsByMonth": (a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(a.month), 'yyyy-MM-dd')).getTime() - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(b.month), 'yyyy-MM-dd')).getTime()
                }["DashboardPage.useEffect.fetchData.quotationsByMonth"]);
                setData({
                    leads,
                    recentActivities,
                    productDemand,
                    averageConversionTime,
                    quotationsByMonth
                });
            }
            fetchData();
        }
    }["DashboardPage.useEffect"], []);
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-4 pt-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between space-y-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold tracking-tight",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 321,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 320,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-muted-foreground py-10",
                    children: "Loading dashboard..."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 323,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 319,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dashboard, {
        data: data
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 330,
        columnNumber: 12
    }, this);
}
_s1(DashboardPage, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c2 = DashboardPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ClientTime");
__turbopack_context__.k.register(_c1, "Dashboard");
__turbopack_context__.k.register(_c2, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1544527d._.js.map