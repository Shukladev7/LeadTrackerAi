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
"[project]/src/lib/data:816221 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f4280ff5e64067f99266109815caf0860a45cc58c":"getLeads"},"src/lib/firestore-data-service.ts",""] */ __turbopack_context__.s({
    "getLeads": (()=>getLeads)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getLeads = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f4280ff5e64067f99266109815caf0860a45cc58c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getLeads"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlyZXN0b3JlLWRhdGEtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IFxuICBlbXBsb3llZVNlcnZpY2UsIFxuICBsZWFkU2VydmljZSwgXG4gIHByb2R1Y3RTZXJ2aWNlLCBcbiAgcXVvdGF0aW9uU2VydmljZSxcbiAgZGVwYXJ0bWVudHNTZXJ2aWNlLFxuICBlbXBsb3llZVJvbGVzU2VydmljZSxcbiAgbGVhZFNvdXJjZXNTZXJ2aWNlLFxuICBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlXG59IGZyb20gJy4vYnVzaW5lc3Mtc2VydmljZXMnO1xuaW1wb3J0IHsgXG4gIEVtcGxveWVlLCBcbiAgTGVhZCwgXG4gIFByb2R1Y3QsIFxuICBRdW90YXRpb24sIFxuICBRdW90YXRpb25UZW1wbGF0ZSxcbiAgRGVwYXJ0bWVudCxcbiAgRW1wbG95ZWVSb2xlLFxuICBMZWFkU291cmNlLFxuICBMZWFkQWN0aXZpdHlcbn0gZnJvbSAnLi9idXNpbmVzcy10eXBlcyc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBUeXBlIGRlZmluaXRpb25zIHRvIG1hdGNoIHlvdXIgZXhpc3RpbmcgdHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHkgZXh0ZW5kcyBMZWFkQWN0aXZpdHkge31cblxuZXhwb3J0IGludGVyZmFjZSBOZXdFbXBsb3llZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGhvbmU6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBkZXBhcnRtZW50OiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXdQcm9kdWN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBnc3RSYXRlOiBudW1iZXI7XG4gIHNrdXM/OiBzdHJpbmdbXTtcbiAgY2F0YWxvZ3VlVXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0YWJsZUxlYWREYXRhIHtcbiAgbmFtZT86IHN0cmluZztcbiAgY29tcGFueT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lPzogc3RyaW5nO1xuICB3aGF0c2FwcE51bWJlcj86IHN0cmluZztcbiAgc3RhdHVzPzogTGVhZFsnc3RhdHVzJ107XG4gIHNvdXJjZT86IHN0cmluZztcbiAgcHJvZHVjdHM/OiBMZWFkWydwcm9kdWN0cyddO1xufVxuXG4vLyBFbXBsb3llZSBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXRFbXBsb3llZXMgPSBhc3luYyAoKTogUHJvbWlzZTxFbXBsb3llZVtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QWxsKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPEVtcGxveWVlIHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gZW1wbG95ZWUgfHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEVtcGxveWVlID0gYXN5bmMgKGVtcGxveWVlRGF0YTogTmV3RW1wbG95ZWUpOiBQcm9taXNlPEVtcGxveWVlPiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4uZW1wbG95ZWVEYXRhLFxuICAgIGlzQWN0aXZlOiB0cnVlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3RW1wbG95ZWUgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3RW1wbG95ZWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZW1wbG95ZWUnKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld0VtcGxveWVlO1xufTtcblxuLy8gTGVhZCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXRMZWFkcyA9IGFzeW5jIChxdWVyeT86IHN0cmluZywgc3RhdHVzPzogc3RyaW5nKTogUHJvbWlzZTxMZWFkW10+ID0+IHtcbiAgbGV0IGxlYWRzOiBMZWFkW10gPSBbXTtcbiAgXG4gIGlmIChzdGF0dXMpIHtcbiAgICBsZWFkcyA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldExlYWRzQnlTdGF0dXMoc3RhdHVzIGFzIExlYWRbJ3N0YXR1cyddKTtcbiAgfSBlbHNlIHtcbiAgICBsZWFkcyA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEFsbCgpO1xuICB9XG4gIFxuICBpZiAocXVlcnkpIHtcbiAgICBjb25zdCBsb3dlcmNhc2VkUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgIGxlYWRzID0gbGVhZHMuZmlsdGVyKFxuICAgICAgbGVhZCA9PlxuICAgICAgICBsZWFkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlcmNhc2VkUXVlcnkpIHx8XG4gICAgICAgIGxlYWQuY29tcGFueS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyY2FzZWRRdWVyeSlcbiAgICApO1xuICB9XG4gIFxuICByZXR1cm4gbGVhZHMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMZWFkQnlJZCA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTxMZWFkIHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IGxlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFsZWFkKSByZXR1cm4gdW5kZWZpbmVkO1xuICBcbiAgcmV0dXJuIHtcbiAgICAuLi5sZWFkLFxuICAgIGFjdGl2aXRpZXM6IGxlYWQuYWN0aXZpdGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBhRGF0ZSA9IG5ldyBEYXRlKGEuZGF0ZS50b1N0cmluZygpKS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCBiRGF0ZSA9IG5ldyBEYXRlKGIuZGF0ZS50b1N0cmluZygpKS5nZXRUaW1lKCk7XG4gICAgICByZXR1cm4gYkRhdGUgLSBhRGF0ZTtcbiAgICB9KVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlY2VudEFjdGl2aXRpZXMgPSBhc3luYyAobGltaXQ6IG51bWJlcik6IFByb21pc2U8eyBsZWFkOiBMZWFkOyBhY3Rpdml0eTogQWN0aXZpdHkgfVtdPiA9PiB7XG4gIGNvbnN0IGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QWxsKCk7XG4gIGNvbnN0IGFsbEFjdGl2aXRpZXMgPSBsZWFkcy5mbGF0TWFwKGxlYWQgPT4gXG4gICAgbGVhZC5hY3Rpdml0aWVzLm1hcChhY3Rpdml0eSA9PiAoeyBsZWFkLCBhY3Rpdml0eSB9KSlcbiAgKTtcbiAgXG4gIHJldHVybiBhbGxBY3Rpdml0aWVzXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGFEYXRlID0gbmV3IERhdGUoYS5hY3Rpdml0eS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGJEYXRlID0gbmV3IERhdGUoYi5hY3Rpdml0eS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICAgIH0pXG4gICAgLnNsaWNlKDAsIGxpbWl0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMZWFkID0gYXN5bmMgKGxlYWREYXRhOiBPbWl0PExlYWQsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdhY3Rpdml0aWVzJz4gJiB7IG5vdGVzPzogc3RyaW5nIH0pOiBQcm9taXNlPExlYWQ+ID0+IHtcbiAgY29uc3QgeyBub3RlcywgLi4ucmVzdE9mTGVhZERhdGEgfSA9IGxlYWREYXRhO1xuICBcbiAgY29uc3QgaW5pdGlhbEFjdGl2aXR5OiBMZWFkQWN0aXZpdHlbXSA9IFtdO1xuICBpZiAobm90ZXMpIHtcbiAgICBpbml0aWFsQWN0aXZpdHkucHVzaCh7XG4gICAgICBpZDogYGFjdC0ke0RhdGUubm93KCl9LTFgLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgdHlwZTogJ0VtYWlsJyxcbiAgICAgIG5vdGVzOiBgTGVhZCBjcmVhdGVkIGluIHRoZSBzeXN0ZW0uIEluaXRpYWwgbm90ZXM6ICR7bm90ZXN9YCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlkID0gYXdhaXQgbGVhZFNlcnZpY2UuY3JlYXRlKHtcbiAgICAuLi5yZXN0T2ZMZWFkRGF0YSxcbiAgICBhY3Rpdml0aWVzOiBpbml0aWFsQWN0aXZpdHksXG4gICAgcHJpb3JpdHk6ICdNZWRpdW0nLFxuICAgIGVzdGltYXRlZFZhbHVlOiBsZWFkRGF0YS5wcm9kdWN0cz8ucmVkdWNlKChzdW0sIHByb2R1Y3QpID0+IFxuICAgICAgc3VtICsgKHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LnJhdGUpLCAwKSB8fCAwXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3TGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0xlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgbGVhZCcpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3TGVhZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRBY3Rpdml0eVRvTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgYWN0aXZpdHlEYXRhOiBPbWl0PEFjdGl2aXR5LCAnaWQnIHwgJ2RhdGUnPik6IFByb21pc2U8QWN0aXZpdHk+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCFsZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgY29uc3QgbmV3QWN0aXZpdHk6IExlYWRBY3Rpdml0eSA9IHtcbiAgICAuLi5hY3Rpdml0eURhdGEsXG4gICAgaWQ6IGBhY3QtJHtsZWFkSWR9LSR7RGF0ZS5ub3coKX1gLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbiAgXG4gIGF3YWl0IGxlYWRTZXJ2aWNlLmFkZEFjdGl2aXR5KGxlYWRJZCwgbmV3QWN0aXZpdHkpO1xuICByZXR1cm4gbmV3QWN0aXZpdHk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGVhZFN0YXR1cyA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgc3RhdHVzOiBMZWFkWydzdGF0dXMnXSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBhd2FpdCBsZWFkU2VydmljZS51cGRhdGVTdGF0dXMobGVhZElkLCBzdGF0dXMpO1xuICBjb25zdCB1cGRhdGVkTGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCF1cGRhdGVkTGVhZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTGVhZCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRMZWFkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxlYWQgPSBhc3luYyAobGVhZElkOiBzdHJpbmcsIGxlYWREYXRhOiBVcGRhdGFibGVMZWFkRGF0YSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBhd2FpdCBsZWFkU2VydmljZS51cGRhdGUobGVhZElkLCBsZWFkRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRMZWFkID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QnlJZChsZWFkSWQpO1xuICBpZiAoIXVwZGF0ZWRMZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCBhZnRlciB1cGRhdGUnKTtcbiAgfVxuICByZXR1cm4gdXBkYXRlZExlYWQ7XG59O1xuXG4vLyBQcm9kdWN0IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZHVjdFtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3REYXRhOiBOZXdQcm9kdWN0KTogUHJvbWlzZTxQcm9kdWN0PiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuY3JlYXRlKHtcbiAgICAuLi5wcm9kdWN0RGF0YSxcbiAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICBzdG9ja1F1YW50aXR5OiAxMDAsIC8vIERlZmF1bHQgc3RvY2tcbiAgICBtaW5TdG9ja0xldmVsOiAxMCAgIC8vIERlZmF1bHQgbWluaW11bSBzdG9ja1xuICB9KTtcbiAgXG4gIGNvbnN0IG5ld1Byb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdQcm9kdWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHByb2R1Y3QnKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld1Byb2R1Y3Q7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChpZDogc3RyaW5nLCBwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBhd2FpdCBwcm9kdWN0U2VydmljZS51cGRhdGUoaWQsIHByb2R1Y3REYXRhKTtcbiAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCF1cGRhdGVkUHJvZHVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvZHVjdCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0O1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgcHJvZHVjdFNlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gTGVhZCBTb3VyY2UgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0TGVhZFNvdXJjZXMgPSBhc3luYyAoKTogUHJvbWlzZTxMZWFkU291cmNlW10+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMZWFkU291cmNlID0gYXN5bmMgKG5hbWU6IHN0cmluZyk6IFByb21pc2U8TGVhZFNvdXJjZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5jcmVhdGUoe1xuICAgIG5hbWUsXG4gICAgaXNBY3RpdmU6IHRydWVcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdTb3VyY2UgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3U291cmNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGxlYWQgc291cmNlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXdTb3VyY2U7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTGVhZFNvdXJjZSA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4gPT4ge1xuICBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gUXVvdGF0aW9uIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFF1b3RhdGlvbnMgPSBhc3luYyAoKTogUHJvbWlzZTxRdW90YXRpb25bXT4gPT4ge1xuICBjb25zdCBxdW90YXRpb25zID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIHF1b3RhdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25CeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPFF1b3RhdGlvbiB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCBxdW90YXRpb24gPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gcXVvdGF0aW9uIHx8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRRdW90YXRpb24gPSBhc3luYyAocXVvdGF0aW9uRGF0YTogT21pdDxRdW90YXRpb24sICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdxdW90YXRpb25OdW1iZXInPik6IFByb21pc2U8UXVvdGF0aW9uPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbk51bWJlciA9IGF3YWl0IHF1b3RhdGlvblNlcnZpY2UuZ2VuZXJhdGVRdW90YXRpb25OdW1iZXIoKTtcbiAgXG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnF1b3RhdGlvbkRhdGEsXG4gICAgcXVvdGF0aW9uTnVtYmVyXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UXVvdGF0aW9uID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdRdW90YXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uJyk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXdRdW90YXRpb247XG59O1xuXG4vLyBRdW90YXRpb24gVGVtcGxhdGUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0UXVvdGF0aW9uVGVtcGxhdGVzID0gYXN5bmMgKCk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGVbXT4gPT4ge1xuICByZXR1cm4gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25UZW1wbGF0ZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gdGVtcGxhdGUgfHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFF1b3RhdGlvblRlbXBsYXRlID0gYXN5bmMgKHRlbXBsYXRlRGF0YTogT21pdDxRdW90YXRpb25UZW1wbGF0ZSwgJ2lkJz4pOiBQcm9taXNlPFF1b3RhdGlvblRlbXBsYXRlPiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnRlbXBsYXRlRGF0YSxcbiAgICBpc0RlZmF1bHQ6IGZhbHNlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3VGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1RlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHF1b3RhdGlvbiB0ZW1wbGF0ZScpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3VGVtcGxhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZywgdGVtcGxhdGVEYXRhOiBRdW90YXRpb25UZW1wbGF0ZSk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS51cGRhdGUoaWQsIHRlbXBsYXRlRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghdXBkYXRlZFRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRUZW1wbGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVRdW90YXRpb25UZW1wbGF0ZSA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4gPT4ge1xuICBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG5cbi8vIEVtcGxveWVlIFJvbGUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVSb2xlcyA9IGFzeW5jICgpOiBQcm9taXNlPEVtcGxveWVlUm9sZVtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBlbXBsb3llZVJvbGVzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFbXBsb3llZVJvbGUgPSBhc3luYyAobmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbXBsb3llZVJvbGU+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBlbXBsb3llZVJvbGVzU2VydmljZS5jcmVhdGUoeyBuYW1lIH0pO1xuICBcbiAgY29uc3QgbmV3Um9sZSA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1JvbGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZW1wbG95ZWUgcm9sZScpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3Um9sZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVFbXBsb3llZVJvbGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gRGVwYXJ0bWVudCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPERlcGFydG1lbnRbXT4gPT4ge1xuICByZXR1cm4gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmdldEFsbCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZERlcGFydG1lbnQgPSBhc3luYyAobmFtZTogc3RyaW5nKTogUHJvbWlzZTxEZXBhcnRtZW50PiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmNyZWF0ZSh7IG5hbWUgfSk7XG4gIFxuICBjb25zdCBuZXdEZXBhcnRtZW50ID0gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0RlcGFydG1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZGVwYXJ0bWVudCcpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3RGVwYXJ0bWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVEZXBhcnRtZW50ID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0FrRmEifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:00e69b [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fb4f29abf3ebe0f2a94c04f8d336c3e47599188ee":"getRecentActivities"},"src/lib/firestore-data-service.ts",""] */ __turbopack_context__.s({
    "getRecentActivities": (()=>getRecentActivities)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getRecentActivities = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fb4f29abf3ebe0f2a94c04f8d336c3e47599188ee", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getRecentActivities"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlyZXN0b3JlLWRhdGEtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IFxuICBlbXBsb3llZVNlcnZpY2UsIFxuICBsZWFkU2VydmljZSwgXG4gIHByb2R1Y3RTZXJ2aWNlLCBcbiAgcXVvdGF0aW9uU2VydmljZSxcbiAgZGVwYXJ0bWVudHNTZXJ2aWNlLFxuICBlbXBsb3llZVJvbGVzU2VydmljZSxcbiAgbGVhZFNvdXJjZXNTZXJ2aWNlLFxuICBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlXG59IGZyb20gJy4vYnVzaW5lc3Mtc2VydmljZXMnO1xuaW1wb3J0IHsgXG4gIEVtcGxveWVlLCBcbiAgTGVhZCwgXG4gIFByb2R1Y3QsIFxuICBRdW90YXRpb24sIFxuICBRdW90YXRpb25UZW1wbGF0ZSxcbiAgRGVwYXJ0bWVudCxcbiAgRW1wbG95ZWVSb2xlLFxuICBMZWFkU291cmNlLFxuICBMZWFkQWN0aXZpdHlcbn0gZnJvbSAnLi9idXNpbmVzcy10eXBlcyc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBUeXBlIGRlZmluaXRpb25zIHRvIG1hdGNoIHlvdXIgZXhpc3RpbmcgdHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHkgZXh0ZW5kcyBMZWFkQWN0aXZpdHkge31cblxuZXhwb3J0IGludGVyZmFjZSBOZXdFbXBsb3llZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGhvbmU6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBkZXBhcnRtZW50OiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXdQcm9kdWN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBnc3RSYXRlOiBudW1iZXI7XG4gIHNrdXM/OiBzdHJpbmdbXTtcbiAgY2F0YWxvZ3VlVXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0YWJsZUxlYWREYXRhIHtcbiAgbmFtZT86IHN0cmluZztcbiAgY29tcGFueT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lPzogc3RyaW5nO1xuICB3aGF0c2FwcE51bWJlcj86IHN0cmluZztcbiAgc3RhdHVzPzogTGVhZFsnc3RhdHVzJ107XG4gIHNvdXJjZT86IHN0cmluZztcbiAgcHJvZHVjdHM/OiBMZWFkWydwcm9kdWN0cyddO1xufVxuXG4vLyBFbXBsb3llZSBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXRFbXBsb3llZXMgPSBhc3luYyAoKTogUHJvbWlzZTxFbXBsb3llZVtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QWxsKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPEVtcGxveWVlIHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gZW1wbG95ZWUgfHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEVtcGxveWVlID0gYXN5bmMgKGVtcGxveWVlRGF0YTogTmV3RW1wbG95ZWUpOiBQcm9taXNlPEVtcGxveWVlPiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4uZW1wbG95ZWVEYXRhLFxuICAgIGlzQWN0aXZlOiB0cnVlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3RW1wbG95ZWUgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3RW1wbG95ZWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZW1wbG95ZWUnKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld0VtcGxveWVlO1xufTtcblxuLy8gTGVhZCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXRMZWFkcyA9IGFzeW5jIChxdWVyeT86IHN0cmluZywgc3RhdHVzPzogc3RyaW5nKTogUHJvbWlzZTxMZWFkW10+ID0+IHtcbiAgbGV0IGxlYWRzOiBMZWFkW10gPSBbXTtcbiAgXG4gIGlmIChzdGF0dXMpIHtcbiAgICBsZWFkcyA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldExlYWRzQnlTdGF0dXMoc3RhdHVzIGFzIExlYWRbJ3N0YXR1cyddKTtcbiAgfSBlbHNlIHtcbiAgICBsZWFkcyA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEFsbCgpO1xuICB9XG4gIFxuICBpZiAocXVlcnkpIHtcbiAgICBjb25zdCBsb3dlcmNhc2VkUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgIGxlYWRzID0gbGVhZHMuZmlsdGVyKFxuICAgICAgbGVhZCA9PlxuICAgICAgICBsZWFkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlcmNhc2VkUXVlcnkpIHx8XG4gICAgICAgIGxlYWQuY29tcGFueS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyY2FzZWRRdWVyeSlcbiAgICApO1xuICB9XG4gIFxuICByZXR1cm4gbGVhZHMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMZWFkQnlJZCA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTxMZWFkIHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IGxlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFsZWFkKSByZXR1cm4gdW5kZWZpbmVkO1xuICBcbiAgcmV0dXJuIHtcbiAgICAuLi5sZWFkLFxuICAgIGFjdGl2aXRpZXM6IGxlYWQuYWN0aXZpdGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBhRGF0ZSA9IG5ldyBEYXRlKGEuZGF0ZS50b1N0cmluZygpKS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCBiRGF0ZSA9IG5ldyBEYXRlKGIuZGF0ZS50b1N0cmluZygpKS5nZXRUaW1lKCk7XG4gICAgICByZXR1cm4gYkRhdGUgLSBhRGF0ZTtcbiAgICB9KVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlY2VudEFjdGl2aXRpZXMgPSBhc3luYyAobGltaXQ6IG51bWJlcik6IFByb21pc2U8eyBsZWFkOiBMZWFkOyBhY3Rpdml0eTogQWN0aXZpdHkgfVtdPiA9PiB7XG4gIGNvbnN0IGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QWxsKCk7XG4gIGNvbnN0IGFsbEFjdGl2aXRpZXMgPSBsZWFkcy5mbGF0TWFwKGxlYWQgPT4gXG4gICAgbGVhZC5hY3Rpdml0aWVzLm1hcChhY3Rpdml0eSA9PiAoeyBsZWFkLCBhY3Rpdml0eSB9KSlcbiAgKTtcbiAgXG4gIHJldHVybiBhbGxBY3Rpdml0aWVzXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGFEYXRlID0gbmV3IERhdGUoYS5hY3Rpdml0eS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGJEYXRlID0gbmV3IERhdGUoYi5hY3Rpdml0eS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICAgIH0pXG4gICAgLnNsaWNlKDAsIGxpbWl0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMZWFkID0gYXN5bmMgKGxlYWREYXRhOiBPbWl0PExlYWQsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdhY3Rpdml0aWVzJz4gJiB7IG5vdGVzPzogc3RyaW5nIH0pOiBQcm9taXNlPExlYWQ+ID0+IHtcbiAgY29uc3QgeyBub3RlcywgLi4ucmVzdE9mTGVhZERhdGEgfSA9IGxlYWREYXRhO1xuICBcbiAgY29uc3QgaW5pdGlhbEFjdGl2aXR5OiBMZWFkQWN0aXZpdHlbXSA9IFtdO1xuICBpZiAobm90ZXMpIHtcbiAgICBpbml0aWFsQWN0aXZpdHkucHVzaCh7XG4gICAgICBpZDogYGFjdC0ke0RhdGUubm93KCl9LTFgLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgdHlwZTogJ0VtYWlsJyxcbiAgICAgIG5vdGVzOiBgTGVhZCBjcmVhdGVkIGluIHRoZSBzeXN0ZW0uIEluaXRpYWwgbm90ZXM6ICR7bm90ZXN9YCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlkID0gYXdhaXQgbGVhZFNlcnZpY2UuY3JlYXRlKHtcbiAgICAuLi5yZXN0T2ZMZWFkRGF0YSxcbiAgICBhY3Rpdml0aWVzOiBpbml0aWFsQWN0aXZpdHksXG4gICAgcHJpb3JpdHk6ICdNZWRpdW0nLFxuICAgIGVzdGltYXRlZFZhbHVlOiBsZWFkRGF0YS5wcm9kdWN0cz8ucmVkdWNlKChzdW0sIHByb2R1Y3QpID0+IFxuICAgICAgc3VtICsgKHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LnJhdGUpLCAwKSB8fCAwXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3TGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0xlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgbGVhZCcpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3TGVhZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRBY3Rpdml0eVRvTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgYWN0aXZpdHlEYXRhOiBPbWl0PEFjdGl2aXR5LCAnaWQnIHwgJ2RhdGUnPik6IFByb21pc2U8QWN0aXZpdHk+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCFsZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgY29uc3QgbmV3QWN0aXZpdHk6IExlYWRBY3Rpdml0eSA9IHtcbiAgICAuLi5hY3Rpdml0eURhdGEsXG4gICAgaWQ6IGBhY3QtJHtsZWFkSWR9LSR7RGF0ZS5ub3coKX1gLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbiAgXG4gIGF3YWl0IGxlYWRTZXJ2aWNlLmFkZEFjdGl2aXR5KGxlYWRJZCwgbmV3QWN0aXZpdHkpO1xuICByZXR1cm4gbmV3QWN0aXZpdHk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGVhZFN0YXR1cyA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgc3RhdHVzOiBMZWFkWydzdGF0dXMnXSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBhd2FpdCBsZWFkU2VydmljZS51cGRhdGVTdGF0dXMobGVhZElkLCBzdGF0dXMpO1xuICBjb25zdCB1cGRhdGVkTGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCF1cGRhdGVkTGVhZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTGVhZCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRMZWFkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxlYWQgPSBhc3luYyAobGVhZElkOiBzdHJpbmcsIGxlYWREYXRhOiBVcGRhdGFibGVMZWFkRGF0YSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBhd2FpdCBsZWFkU2VydmljZS51cGRhdGUobGVhZElkLCBsZWFkRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRMZWFkID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QnlJZChsZWFkSWQpO1xuICBpZiAoIXVwZGF0ZWRMZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCBhZnRlciB1cGRhdGUnKTtcbiAgfVxuICByZXR1cm4gdXBkYXRlZExlYWQ7XG59O1xuXG4vLyBQcm9kdWN0IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZHVjdFtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3REYXRhOiBOZXdQcm9kdWN0KTogUHJvbWlzZTxQcm9kdWN0PiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuY3JlYXRlKHtcbiAgICAuLi5wcm9kdWN0RGF0YSxcbiAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICBzdG9ja1F1YW50aXR5OiAxMDAsIC8vIERlZmF1bHQgc3RvY2tcbiAgICBtaW5TdG9ja0xldmVsOiAxMCAgIC8vIERlZmF1bHQgbWluaW11bSBzdG9ja1xuICB9KTtcbiAgXG4gIGNvbnN0IG5ld1Byb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdQcm9kdWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHByb2R1Y3QnKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld1Byb2R1Y3Q7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChpZDogc3RyaW5nLCBwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBhd2FpdCBwcm9kdWN0U2VydmljZS51cGRhdGUoaWQsIHByb2R1Y3REYXRhKTtcbiAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCF1cGRhdGVkUHJvZHVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvZHVjdCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0O1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgcHJvZHVjdFNlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gTGVhZCBTb3VyY2UgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0TGVhZFNvdXJjZXMgPSBhc3luYyAoKTogUHJvbWlzZTxMZWFkU291cmNlW10+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMZWFkU291cmNlID0gYXN5bmMgKG5hbWU6IHN0cmluZyk6IFByb21pc2U8TGVhZFNvdXJjZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5jcmVhdGUoe1xuICAgIG5hbWUsXG4gICAgaXNBY3RpdmU6IHRydWVcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdTb3VyY2UgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3U291cmNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGxlYWQgc291cmNlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXdTb3VyY2U7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTGVhZFNvdXJjZSA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4gPT4ge1xuICBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gUXVvdGF0aW9uIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFF1b3RhdGlvbnMgPSBhc3luYyAoKTogUHJvbWlzZTxRdW90YXRpb25bXT4gPT4ge1xuICBjb25zdCBxdW90YXRpb25zID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIHF1b3RhdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25CeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPFF1b3RhdGlvbiB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCBxdW90YXRpb24gPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gcXVvdGF0aW9uIHx8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRRdW90YXRpb24gPSBhc3luYyAocXVvdGF0aW9uRGF0YTogT21pdDxRdW90YXRpb24sICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdxdW90YXRpb25OdW1iZXInPik6IFByb21pc2U8UXVvdGF0aW9uPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbk51bWJlciA9IGF3YWl0IHF1b3RhdGlvblNlcnZpY2UuZ2VuZXJhdGVRdW90YXRpb25OdW1iZXIoKTtcbiAgXG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnF1b3RhdGlvbkRhdGEsXG4gICAgcXVvdGF0aW9uTnVtYmVyXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UXVvdGF0aW9uID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdRdW90YXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uJyk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXdRdW90YXRpb247XG59O1xuXG4vLyBRdW90YXRpb24gVGVtcGxhdGUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0UXVvdGF0aW9uVGVtcGxhdGVzID0gYXN5bmMgKCk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGVbXT4gPT4ge1xuICByZXR1cm4gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25UZW1wbGF0ZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gdGVtcGxhdGUgfHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFF1b3RhdGlvblRlbXBsYXRlID0gYXN5bmMgKHRlbXBsYXRlRGF0YTogT21pdDxRdW90YXRpb25UZW1wbGF0ZSwgJ2lkJz4pOiBQcm9taXNlPFF1b3RhdGlvblRlbXBsYXRlPiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnRlbXBsYXRlRGF0YSxcbiAgICBpc0RlZmF1bHQ6IGZhbHNlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3VGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1RlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHF1b3RhdGlvbiB0ZW1wbGF0ZScpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3VGVtcGxhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZywgdGVtcGxhdGVEYXRhOiBRdW90YXRpb25UZW1wbGF0ZSk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS51cGRhdGUoaWQsIHRlbXBsYXRlRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghdXBkYXRlZFRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRUZW1wbGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVRdW90YXRpb25UZW1wbGF0ZSA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4gPT4ge1xuICBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG5cbi8vIEVtcGxveWVlIFJvbGUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVSb2xlcyA9IGFzeW5jICgpOiBQcm9taXNlPEVtcGxveWVlUm9sZVtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBlbXBsb3llZVJvbGVzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFbXBsb3llZVJvbGUgPSBhc3luYyAobmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbXBsb3llZVJvbGU+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBlbXBsb3llZVJvbGVzU2VydmljZS5jcmVhdGUoeyBuYW1lIH0pO1xuICBcbiAgY29uc3QgbmV3Um9sZSA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1JvbGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZW1wbG95ZWUgcm9sZScpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3Um9sZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVFbXBsb3llZVJvbGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gRGVwYXJ0bWVudCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPERlcGFydG1lbnRbXT4gPT4ge1xuICByZXR1cm4gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmdldEFsbCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZERlcGFydG1lbnQgPSBhc3luYyAobmFtZTogc3RyaW5nKTogUHJvbWlzZTxEZXBhcnRtZW50PiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmNyZWF0ZSh7IG5hbWUgfSk7XG4gIFxuICBjb25zdCBuZXdEZXBhcnRtZW50ID0gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0RlcGFydG1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZGVwYXJ0bWVudCcpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3RGVwYXJ0bWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVEZXBhcnRtZW50ID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4U0F5SGEifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:ecd847 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7ff71b0c7623881d0aa5c8c677cd09724481a157b2":"getProducts"},"src/lib/firestore-data-service.ts",""] */ __turbopack_context__.s({
    "getProducts": (()=>getProducts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getProducts = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7ff71b0c7623881d0aa5c8c677cd09724481a157b2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProducts"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlyZXN0b3JlLWRhdGEtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IFxuICBlbXBsb3llZVNlcnZpY2UsIFxuICBsZWFkU2VydmljZSwgXG4gIHByb2R1Y3RTZXJ2aWNlLCBcbiAgcXVvdGF0aW9uU2VydmljZSxcbiAgZGVwYXJ0bWVudHNTZXJ2aWNlLFxuICBlbXBsb3llZVJvbGVzU2VydmljZSxcbiAgbGVhZFNvdXJjZXNTZXJ2aWNlLFxuICBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlXG59IGZyb20gJy4vYnVzaW5lc3Mtc2VydmljZXMnO1xuaW1wb3J0IHsgXG4gIEVtcGxveWVlLCBcbiAgTGVhZCwgXG4gIFByb2R1Y3QsIFxuICBRdW90YXRpb24sIFxuICBRdW90YXRpb25UZW1wbGF0ZSxcbiAgRGVwYXJ0bWVudCxcbiAgRW1wbG95ZWVSb2xlLFxuICBMZWFkU291cmNlLFxuICBMZWFkQWN0aXZpdHlcbn0gZnJvbSAnLi9idXNpbmVzcy10eXBlcyc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBUeXBlIGRlZmluaXRpb25zIHRvIG1hdGNoIHlvdXIgZXhpc3RpbmcgdHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHkgZXh0ZW5kcyBMZWFkQWN0aXZpdHkge31cblxuZXhwb3J0IGludGVyZmFjZSBOZXdFbXBsb3llZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGhvbmU6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBkZXBhcnRtZW50OiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXdQcm9kdWN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBnc3RSYXRlOiBudW1iZXI7XG4gIHNrdXM/OiBzdHJpbmdbXTtcbiAgY2F0YWxvZ3VlVXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0YWJsZUxlYWREYXRhIHtcbiAgbmFtZT86IHN0cmluZztcbiAgY29tcGFueT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lPzogc3RyaW5nO1xuICB3aGF0c2FwcE51bWJlcj86IHN0cmluZztcbiAgc3RhdHVzPzogTGVhZFsnc3RhdHVzJ107XG4gIHNvdXJjZT86IHN0cmluZztcbiAgcHJvZHVjdHM/OiBMZWFkWydwcm9kdWN0cyddO1xufVxuXG4vLyBFbXBsb3llZSBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXRFbXBsb3llZXMgPSBhc3luYyAoKTogUHJvbWlzZTxFbXBsb3llZVtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QWxsKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPEVtcGxveWVlIHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gZW1wbG95ZWUgfHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEVtcGxveWVlID0gYXN5bmMgKGVtcGxveWVlRGF0YTogTmV3RW1wbG95ZWUpOiBQcm9taXNlPEVtcGxveWVlPiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4uZW1wbG95ZWVEYXRhLFxuICAgIGlzQWN0aXZlOiB0cnVlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3RW1wbG95ZWUgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3RW1wbG95ZWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZW1wbG95ZWUnKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld0VtcGxveWVlO1xufTtcblxuLy8gTGVhZCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXRMZWFkcyA9IGFzeW5jIChxdWVyeT86IHN0cmluZywgc3RhdHVzPzogc3RyaW5nKTogUHJvbWlzZTxMZWFkW10+ID0+IHtcbiAgbGV0IGxlYWRzOiBMZWFkW10gPSBbXTtcbiAgXG4gIGlmIChzdGF0dXMpIHtcbiAgICBsZWFkcyA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldExlYWRzQnlTdGF0dXMoc3RhdHVzIGFzIExlYWRbJ3N0YXR1cyddKTtcbiAgfSBlbHNlIHtcbiAgICBsZWFkcyA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEFsbCgpO1xuICB9XG4gIFxuICBpZiAocXVlcnkpIHtcbiAgICBjb25zdCBsb3dlcmNhc2VkUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgIGxlYWRzID0gbGVhZHMuZmlsdGVyKFxuICAgICAgbGVhZCA9PlxuICAgICAgICBsZWFkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlcmNhc2VkUXVlcnkpIHx8XG4gICAgICAgIGxlYWQuY29tcGFueS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyY2FzZWRRdWVyeSlcbiAgICApO1xuICB9XG4gIFxuICByZXR1cm4gbGVhZHMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMZWFkQnlJZCA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTxMZWFkIHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IGxlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFsZWFkKSByZXR1cm4gdW5kZWZpbmVkO1xuICBcbiAgcmV0dXJuIHtcbiAgICAuLi5sZWFkLFxuICAgIGFjdGl2aXRpZXM6IGxlYWQuYWN0aXZpdGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBhRGF0ZSA9IG5ldyBEYXRlKGEuZGF0ZS50b1N0cmluZygpKS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCBiRGF0ZSA9IG5ldyBEYXRlKGIuZGF0ZS50b1N0cmluZygpKS5nZXRUaW1lKCk7XG4gICAgICByZXR1cm4gYkRhdGUgLSBhRGF0ZTtcbiAgICB9KVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlY2VudEFjdGl2aXRpZXMgPSBhc3luYyAobGltaXQ6IG51bWJlcik6IFByb21pc2U8eyBsZWFkOiBMZWFkOyBhY3Rpdml0eTogQWN0aXZpdHkgfVtdPiA9PiB7XG4gIGNvbnN0IGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QWxsKCk7XG4gIGNvbnN0IGFsbEFjdGl2aXRpZXMgPSBsZWFkcy5mbGF0TWFwKGxlYWQgPT4gXG4gICAgbGVhZC5hY3Rpdml0aWVzLm1hcChhY3Rpdml0eSA9PiAoeyBsZWFkLCBhY3Rpdml0eSB9KSlcbiAgKTtcbiAgXG4gIHJldHVybiBhbGxBY3Rpdml0aWVzXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGFEYXRlID0gbmV3IERhdGUoYS5hY3Rpdml0eS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGJEYXRlID0gbmV3IERhdGUoYi5hY3Rpdml0eS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICAgIH0pXG4gICAgLnNsaWNlKDAsIGxpbWl0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMZWFkID0gYXN5bmMgKGxlYWREYXRhOiBPbWl0PExlYWQsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdhY3Rpdml0aWVzJz4gJiB7IG5vdGVzPzogc3RyaW5nIH0pOiBQcm9taXNlPExlYWQ+ID0+IHtcbiAgY29uc3QgeyBub3RlcywgLi4ucmVzdE9mTGVhZERhdGEgfSA9IGxlYWREYXRhO1xuICBcbiAgY29uc3QgaW5pdGlhbEFjdGl2aXR5OiBMZWFkQWN0aXZpdHlbXSA9IFtdO1xuICBpZiAobm90ZXMpIHtcbiAgICBpbml0aWFsQWN0aXZpdHkucHVzaCh7XG4gICAgICBpZDogYGFjdC0ke0RhdGUubm93KCl9LTFgLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgdHlwZTogJ0VtYWlsJyxcbiAgICAgIG5vdGVzOiBgTGVhZCBjcmVhdGVkIGluIHRoZSBzeXN0ZW0uIEluaXRpYWwgbm90ZXM6ICR7bm90ZXN9YCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlkID0gYXdhaXQgbGVhZFNlcnZpY2UuY3JlYXRlKHtcbiAgICAuLi5yZXN0T2ZMZWFkRGF0YSxcbiAgICBhY3Rpdml0aWVzOiBpbml0aWFsQWN0aXZpdHksXG4gICAgcHJpb3JpdHk6ICdNZWRpdW0nLFxuICAgIGVzdGltYXRlZFZhbHVlOiBsZWFkRGF0YS5wcm9kdWN0cz8ucmVkdWNlKChzdW0sIHByb2R1Y3QpID0+IFxuICAgICAgc3VtICsgKHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LnJhdGUpLCAwKSB8fCAwXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3TGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0xlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgbGVhZCcpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3TGVhZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRBY3Rpdml0eVRvTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgYWN0aXZpdHlEYXRhOiBPbWl0PEFjdGl2aXR5LCAnaWQnIHwgJ2RhdGUnPik6IFByb21pc2U8QWN0aXZpdHk+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCFsZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgY29uc3QgbmV3QWN0aXZpdHk6IExlYWRBY3Rpdml0eSA9IHtcbiAgICAuLi5hY3Rpdml0eURhdGEsXG4gICAgaWQ6IGBhY3QtJHtsZWFkSWR9LSR7RGF0ZS5ub3coKX1gLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbiAgXG4gIGF3YWl0IGxlYWRTZXJ2aWNlLmFkZEFjdGl2aXR5KGxlYWRJZCwgbmV3QWN0aXZpdHkpO1xuICByZXR1cm4gbmV3QWN0aXZpdHk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGVhZFN0YXR1cyA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgc3RhdHVzOiBMZWFkWydzdGF0dXMnXSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBhd2FpdCBsZWFkU2VydmljZS51cGRhdGVTdGF0dXMobGVhZElkLCBzdGF0dXMpO1xuICBjb25zdCB1cGRhdGVkTGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCF1cGRhdGVkTGVhZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTGVhZCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRMZWFkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxlYWQgPSBhc3luYyAobGVhZElkOiBzdHJpbmcsIGxlYWREYXRhOiBVcGRhdGFibGVMZWFkRGF0YSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBhd2FpdCBsZWFkU2VydmljZS51cGRhdGUobGVhZElkLCBsZWFkRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRMZWFkID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QnlJZChsZWFkSWQpO1xuICBpZiAoIXVwZGF0ZWRMZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCBhZnRlciB1cGRhdGUnKTtcbiAgfVxuICByZXR1cm4gdXBkYXRlZExlYWQ7XG59O1xuXG4vLyBQcm9kdWN0IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZHVjdFtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3REYXRhOiBOZXdQcm9kdWN0KTogUHJvbWlzZTxQcm9kdWN0PiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuY3JlYXRlKHtcbiAgICAuLi5wcm9kdWN0RGF0YSxcbiAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICBzdG9ja1F1YW50aXR5OiAxMDAsIC8vIERlZmF1bHQgc3RvY2tcbiAgICBtaW5TdG9ja0xldmVsOiAxMCAgIC8vIERlZmF1bHQgbWluaW11bSBzdG9ja1xuICB9KTtcbiAgXG4gIGNvbnN0IG5ld1Byb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdQcm9kdWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHByb2R1Y3QnKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld1Byb2R1Y3Q7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChpZDogc3RyaW5nLCBwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBhd2FpdCBwcm9kdWN0U2VydmljZS51cGRhdGUoaWQsIHByb2R1Y3REYXRhKTtcbiAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCF1cGRhdGVkUHJvZHVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvZHVjdCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0O1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgcHJvZHVjdFNlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gTGVhZCBTb3VyY2UgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0TGVhZFNvdXJjZXMgPSBhc3luYyAoKTogUHJvbWlzZTxMZWFkU291cmNlW10+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMZWFkU291cmNlID0gYXN5bmMgKG5hbWU6IHN0cmluZyk6IFByb21pc2U8TGVhZFNvdXJjZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5jcmVhdGUoe1xuICAgIG5hbWUsXG4gICAgaXNBY3RpdmU6IHRydWVcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdTb3VyY2UgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3U291cmNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGxlYWQgc291cmNlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXdTb3VyY2U7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTGVhZFNvdXJjZSA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4gPT4ge1xuICBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gUXVvdGF0aW9uIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFF1b3RhdGlvbnMgPSBhc3luYyAoKTogUHJvbWlzZTxRdW90YXRpb25bXT4gPT4ge1xuICBjb25zdCBxdW90YXRpb25zID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIHF1b3RhdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25CeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPFF1b3RhdGlvbiB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCBxdW90YXRpb24gPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gcXVvdGF0aW9uIHx8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRRdW90YXRpb24gPSBhc3luYyAocXVvdGF0aW9uRGF0YTogT21pdDxRdW90YXRpb24sICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdxdW90YXRpb25OdW1iZXInPik6IFByb21pc2U8UXVvdGF0aW9uPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbk51bWJlciA9IGF3YWl0IHF1b3RhdGlvblNlcnZpY2UuZ2VuZXJhdGVRdW90YXRpb25OdW1iZXIoKTtcbiAgXG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnF1b3RhdGlvbkRhdGEsXG4gICAgcXVvdGF0aW9uTnVtYmVyXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UXVvdGF0aW9uID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdRdW90YXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uJyk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXdRdW90YXRpb247XG59O1xuXG4vLyBRdW90YXRpb24gVGVtcGxhdGUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0UXVvdGF0aW9uVGVtcGxhdGVzID0gYXN5bmMgKCk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGVbXT4gPT4ge1xuICByZXR1cm4gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25UZW1wbGF0ZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gdGVtcGxhdGUgfHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFF1b3RhdGlvblRlbXBsYXRlID0gYXN5bmMgKHRlbXBsYXRlRGF0YTogT21pdDxRdW90YXRpb25UZW1wbGF0ZSwgJ2lkJz4pOiBQcm9taXNlPFF1b3RhdGlvblRlbXBsYXRlPiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnRlbXBsYXRlRGF0YSxcbiAgICBpc0RlZmF1bHQ6IGZhbHNlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3VGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1RlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHF1b3RhdGlvbiB0ZW1wbGF0ZScpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3VGVtcGxhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZywgdGVtcGxhdGVEYXRhOiBRdW90YXRpb25UZW1wbGF0ZSk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS51cGRhdGUoaWQsIHRlbXBsYXRlRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghdXBkYXRlZFRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRUZW1wbGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVRdW90YXRpb25UZW1wbGF0ZSA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4gPT4ge1xuICBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG5cbi8vIEVtcGxveWVlIFJvbGUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVSb2xlcyA9IGFzeW5jICgpOiBQcm9taXNlPEVtcGxveWVlUm9sZVtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBlbXBsb3llZVJvbGVzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFbXBsb3llZVJvbGUgPSBhc3luYyAobmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbXBsb3llZVJvbGU+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBlbXBsb3llZVJvbGVzU2VydmljZS5jcmVhdGUoeyBuYW1lIH0pO1xuICBcbiAgY29uc3QgbmV3Um9sZSA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1JvbGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZW1wbG95ZWUgcm9sZScpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3Um9sZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVFbXBsb3llZVJvbGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gRGVwYXJ0bWVudCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPERlcGFydG1lbnRbXT4gPT4ge1xuICByZXR1cm4gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmdldEFsbCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZERlcGFydG1lbnQgPSBhc3luYyAobmFtZTogc3RyaW5nKTogUHJvbWlzZTxEZXBhcnRtZW50PiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmNyZWF0ZSh7IG5hbWUgfSk7XG4gIFxuICBjb25zdCBuZXdEZXBhcnRtZW50ID0gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0RlcGFydG1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZGVwYXJ0bWVudCcpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3RGVwYXJ0bWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVEZXBhcnRtZW50ID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0F3TWEifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data:37c5d8 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7fabb9890e6ce6942891dc6903686fbb41d7e40da9":"getQuotations"},"src/lib/firestore-data-service.ts",""] */ __turbopack_context__.s({
    "getQuotations": (()=>getQuotations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getQuotations = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fabb9890e6ce6942891dc6903686fbb41d7e40da9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getQuotations"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlyZXN0b3JlLWRhdGEtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IFxuICBlbXBsb3llZVNlcnZpY2UsIFxuICBsZWFkU2VydmljZSwgXG4gIHByb2R1Y3RTZXJ2aWNlLCBcbiAgcXVvdGF0aW9uU2VydmljZSxcbiAgZGVwYXJ0bWVudHNTZXJ2aWNlLFxuICBlbXBsb3llZVJvbGVzU2VydmljZSxcbiAgbGVhZFNvdXJjZXNTZXJ2aWNlLFxuICBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlXG59IGZyb20gJy4vYnVzaW5lc3Mtc2VydmljZXMnO1xuaW1wb3J0IHsgXG4gIEVtcGxveWVlLCBcbiAgTGVhZCwgXG4gIFByb2R1Y3QsIFxuICBRdW90YXRpb24sIFxuICBRdW90YXRpb25UZW1wbGF0ZSxcbiAgRGVwYXJ0bWVudCxcbiAgRW1wbG95ZWVSb2xlLFxuICBMZWFkU291cmNlLFxuICBMZWFkQWN0aXZpdHlcbn0gZnJvbSAnLi9idXNpbmVzcy10eXBlcyc7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBUeXBlIGRlZmluaXRpb25zIHRvIG1hdGNoIHlvdXIgZXhpc3RpbmcgdHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHkgZXh0ZW5kcyBMZWFkQWN0aXZpdHkge31cblxuZXhwb3J0IGludGVyZmFjZSBOZXdFbXBsb3llZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGhvbmU6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBkZXBhcnRtZW50OiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZXdQcm9kdWN0IHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBnc3RSYXRlOiBudW1iZXI7XG4gIHNrdXM/OiBzdHJpbmdbXTtcbiAgY2F0YWxvZ3VlVXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0YWJsZUxlYWREYXRhIHtcbiAgbmFtZT86IHN0cmluZztcbiAgY29tcGFueT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lPzogc3RyaW5nO1xuICB3aGF0c2FwcE51bWJlcj86IHN0cmluZztcbiAgc3RhdHVzPzogTGVhZFsnc3RhdHVzJ107XG4gIHNvdXJjZT86IHN0cmluZztcbiAgcHJvZHVjdHM/OiBMZWFkWydwcm9kdWN0cyddO1xufVxuXG4vLyBFbXBsb3llZSBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXRFbXBsb3llZXMgPSBhc3luYyAoKTogUHJvbWlzZTxFbXBsb3llZVtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QWxsKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPEVtcGxveWVlIHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gZW1wbG95ZWUgfHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEVtcGxveWVlID0gYXN5bmMgKGVtcGxveWVlRGF0YTogTmV3RW1wbG95ZWUpOiBQcm9taXNlPEVtcGxveWVlPiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgZW1wbG95ZWVTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgLi4uZW1wbG95ZWVEYXRhLFxuICAgIGlzQWN0aXZlOiB0cnVlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3RW1wbG95ZWUgPSBhd2FpdCBlbXBsb3llZVNlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3RW1wbG95ZWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZW1wbG95ZWUnKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld0VtcGxveWVlO1xufTtcblxuLy8gTGVhZCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXRMZWFkcyA9IGFzeW5jIChxdWVyeT86IHN0cmluZywgc3RhdHVzPzogc3RyaW5nKTogUHJvbWlzZTxMZWFkW10+ID0+IHtcbiAgbGV0IGxlYWRzOiBMZWFkW10gPSBbXTtcbiAgXG4gIGlmIChzdGF0dXMpIHtcbiAgICBsZWFkcyA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldExlYWRzQnlTdGF0dXMoc3RhdHVzIGFzIExlYWRbJ3N0YXR1cyddKTtcbiAgfSBlbHNlIHtcbiAgICBsZWFkcyA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEFsbCgpO1xuICB9XG4gIFxuICBpZiAocXVlcnkpIHtcbiAgICBjb25zdCBsb3dlcmNhc2VkUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgIGxlYWRzID0gbGVhZHMuZmlsdGVyKFxuICAgICAgbGVhZCA9PlxuICAgICAgICBsZWFkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlcmNhc2VkUXVlcnkpIHx8XG4gICAgICAgIGxlYWQuY29tcGFueS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyY2FzZWRRdWVyeSlcbiAgICApO1xuICB9XG4gIFxuICByZXR1cm4gbGVhZHMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMZWFkQnlJZCA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTxMZWFkIHwgdW5kZWZpbmVkPiA9PiB7XG4gIGNvbnN0IGxlYWQgPSBhd2FpdCBsZWFkU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFsZWFkKSByZXR1cm4gdW5kZWZpbmVkO1xuICBcbiAgcmV0dXJuIHtcbiAgICAuLi5sZWFkLFxuICAgIGFjdGl2aXRpZXM6IGxlYWQuYWN0aXZpdGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBhRGF0ZSA9IG5ldyBEYXRlKGEuZGF0ZS50b1N0cmluZygpKS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCBiRGF0ZSA9IG5ldyBEYXRlKGIuZGF0ZS50b1N0cmluZygpKS5nZXRUaW1lKCk7XG4gICAgICByZXR1cm4gYkRhdGUgLSBhRGF0ZTtcbiAgICB9KVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFJlY2VudEFjdGl2aXRpZXMgPSBhc3luYyAobGltaXQ6IG51bWJlcik6IFByb21pc2U8eyBsZWFkOiBMZWFkOyBhY3Rpdml0eTogQWN0aXZpdHkgfVtdPiA9PiB7XG4gIGNvbnN0IGxlYWRzID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QWxsKCk7XG4gIGNvbnN0IGFsbEFjdGl2aXRpZXMgPSBsZWFkcy5mbGF0TWFwKGxlYWQgPT4gXG4gICAgbGVhZC5hY3Rpdml0aWVzLm1hcChhY3Rpdml0eSA9PiAoeyBsZWFkLCBhY3Rpdml0eSB9KSlcbiAgKTtcbiAgXG4gIHJldHVybiBhbGxBY3Rpdml0aWVzXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGFEYXRlID0gbmV3IERhdGUoYS5hY3Rpdml0eS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGJEYXRlID0gbmV3IERhdGUoYi5hY3Rpdml0eS5kYXRlLnRvU3RyaW5nKCkpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICAgIH0pXG4gICAgLnNsaWNlKDAsIGxpbWl0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMZWFkID0gYXN5bmMgKGxlYWREYXRhOiBPbWl0PExlYWQsICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdhY3Rpdml0aWVzJz4gJiB7IG5vdGVzPzogc3RyaW5nIH0pOiBQcm9taXNlPExlYWQ+ID0+IHtcbiAgY29uc3QgeyBub3RlcywgLi4ucmVzdE9mTGVhZERhdGEgfSA9IGxlYWREYXRhO1xuICBcbiAgY29uc3QgaW5pdGlhbEFjdGl2aXR5OiBMZWFkQWN0aXZpdHlbXSA9IFtdO1xuICBpZiAobm90ZXMpIHtcbiAgICBpbml0aWFsQWN0aXZpdHkucHVzaCh7XG4gICAgICBpZDogYGFjdC0ke0RhdGUubm93KCl9LTFgLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgdHlwZTogJ0VtYWlsJyxcbiAgICAgIG5vdGVzOiBgTGVhZCBjcmVhdGVkIGluIHRoZSBzeXN0ZW0uIEluaXRpYWwgbm90ZXM6ICR7bm90ZXN9YCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlkID0gYXdhaXQgbGVhZFNlcnZpY2UuY3JlYXRlKHtcbiAgICAuLi5yZXN0T2ZMZWFkRGF0YSxcbiAgICBhY3Rpdml0aWVzOiBpbml0aWFsQWN0aXZpdHksXG4gICAgcHJpb3JpdHk6ICdNZWRpdW0nLFxuICAgIGVzdGltYXRlZFZhbHVlOiBsZWFkRGF0YS5wcm9kdWN0cz8ucmVkdWNlKChzdW0sIHByb2R1Y3QpID0+IFxuICAgICAgc3VtICsgKHByb2R1Y3QucXVhbnRpdHkgKiBwcm9kdWN0LnJhdGUpLCAwKSB8fCAwXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3TGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0xlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgbGVhZCcpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3TGVhZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRBY3Rpdml0eVRvTGVhZCA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgYWN0aXZpdHlEYXRhOiBPbWl0PEFjdGl2aXR5LCAnaWQnIHwgJ2RhdGUnPik6IFByb21pc2U8QWN0aXZpdHk+ID0+IHtcbiAgY29uc3QgbGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCFsZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgY29uc3QgbmV3QWN0aXZpdHk6IExlYWRBY3Rpdml0eSA9IHtcbiAgICAuLi5hY3Rpdml0eURhdGEsXG4gICAgaWQ6IGBhY3QtJHtsZWFkSWR9LSR7RGF0ZS5ub3coKX1gLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgfTtcbiAgXG4gIGF3YWl0IGxlYWRTZXJ2aWNlLmFkZEFjdGl2aXR5KGxlYWRJZCwgbmV3QWN0aXZpdHkpO1xuICByZXR1cm4gbmV3QWN0aXZpdHk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGVhZFN0YXR1cyA9IGFzeW5jIChsZWFkSWQ6IHN0cmluZywgc3RhdHVzOiBMZWFkWydzdGF0dXMnXSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBhd2FpdCBsZWFkU2VydmljZS51cGRhdGVTdGF0dXMobGVhZElkLCBzdGF0dXMpO1xuICBjb25zdCB1cGRhdGVkTGVhZCA9IGF3YWl0IGxlYWRTZXJ2aWNlLmdldEJ5SWQobGVhZElkKTtcbiAgaWYgKCF1cGRhdGVkTGVhZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTGVhZCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRMZWFkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxlYWQgPSBhc3luYyAobGVhZElkOiBzdHJpbmcsIGxlYWREYXRhOiBVcGRhdGFibGVMZWFkRGF0YSk6IFByb21pc2U8TGVhZD4gPT4ge1xuICBhd2FpdCBsZWFkU2VydmljZS51cGRhdGUobGVhZElkLCBsZWFkRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRMZWFkID0gYXdhaXQgbGVhZFNlcnZpY2UuZ2V0QnlJZChsZWFkSWQpO1xuICBpZiAoIXVwZGF0ZWRMZWFkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMZWFkIG5vdCBmb3VuZCBhZnRlciB1cGRhdGUnKTtcbiAgfVxuICByZXR1cm4gdXBkYXRlZExlYWQ7XG59O1xuXG4vLyBQcm9kdWN0IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZHVjdFtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3REYXRhOiBOZXdQcm9kdWN0KTogUHJvbWlzZTxQcm9kdWN0PiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuY3JlYXRlKHtcbiAgICAuLi5wcm9kdWN0RGF0YSxcbiAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICBzdG9ja1F1YW50aXR5OiAxMDAsIC8vIERlZmF1bHQgc3RvY2tcbiAgICBtaW5TdG9ja0xldmVsOiAxMCAgIC8vIERlZmF1bHQgbWluaW11bSBzdG9ja1xuICB9KTtcbiAgXG4gIGNvbnN0IG5ld1Byb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdQcm9kdWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHByb2R1Y3QnKTtcbiAgfVxuICBcbiAgcmV0dXJuIG5ld1Byb2R1Y3Q7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZHVjdCA9IGFzeW5jIChpZDogc3RyaW5nLCBwcm9kdWN0RGF0YTogTmV3UHJvZHVjdCk6IFByb21pc2U8UHJvZHVjdD4gPT4ge1xuICBhd2FpdCBwcm9kdWN0U2VydmljZS51cGRhdGUoaWQsIHByb2R1Y3REYXRhKTtcbiAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBhd2FpdCBwcm9kdWN0U2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCF1cGRhdGVkUHJvZHVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvZHVjdCBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRQcm9kdWN0O1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgcHJvZHVjdFNlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gTGVhZCBTb3VyY2UgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0TGVhZFNvdXJjZXMgPSBhc3luYyAoKTogUHJvbWlzZTxMZWFkU291cmNlW10+ID0+IHtcbiAgcmV0dXJuIGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMZWFkU291cmNlID0gYXN5bmMgKG5hbWU6IHN0cmluZyk6IFByb21pc2U8TGVhZFNvdXJjZT4gPT4ge1xuICBjb25zdCBpZCA9IGF3YWl0IGxlYWRTb3VyY2VzU2VydmljZS5jcmVhdGUoe1xuICAgIG5hbWUsXG4gICAgaXNBY3RpdmU6IHRydWVcbiAgfSk7XG4gIFxuICBjb25zdCBuZXdTb3VyY2UgPSBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghbmV3U291cmNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGxlYWQgc291cmNlJyk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXdTb3VyY2U7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTGVhZFNvdXJjZSA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4gPT4ge1xuICBhd2FpdCBsZWFkU291cmNlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gUXVvdGF0aW9uIGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGdldFF1b3RhdGlvbnMgPSBhc3luYyAoKTogUHJvbWlzZTxRdW90YXRpb25bXT4gPT4ge1xuICBjb25zdCBxdW90YXRpb25zID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRBbGwoKTtcbiAgcmV0dXJuIHF1b3RhdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFEYXRlID0gYS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShhLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIGNvbnN0IGJEYXRlID0gYi5jcmVhdGVkQXQgPyBuZXcgRGF0ZShiLmNyZWF0ZWRBdC50b1N0cmluZygpKS5nZXRUaW1lKCkgOiAwO1xuICAgIHJldHVybiBiRGF0ZSAtIGFEYXRlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25CeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPFF1b3RhdGlvbiB8IHVuZGVmaW5lZD4gPT4ge1xuICBjb25zdCBxdW90YXRpb24gPSBhd2FpdCBxdW90YXRpb25TZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gcXVvdGF0aW9uIHx8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRRdW90YXRpb24gPSBhc3luYyAocXVvdGF0aW9uRGF0YTogT21pdDxRdW90YXRpb24sICdpZCcgfCAnY3JlYXRlZEF0JyB8ICdxdW90YXRpb25OdW1iZXInPik6IFByb21pc2U8UXVvdGF0aW9uPiA9PiB7XG4gIGNvbnN0IHF1b3RhdGlvbk51bWJlciA9IGF3YWl0IHF1b3RhdGlvblNlcnZpY2UuZ2VuZXJhdGVRdW90YXRpb25OdW1iZXIoKTtcbiAgXG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnF1b3RhdGlvbkRhdGEsXG4gICAgcXVvdGF0aW9uTnVtYmVyXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3UXVvdGF0aW9uID0gYXdhaXQgcXVvdGF0aW9uU2VydmljZS5nZXRCeUlkKGlkKTtcbiAgaWYgKCFuZXdRdW90YXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcXVvdGF0aW9uJyk7XG4gIH1cbiAgXG4gIHJldHVybiBuZXdRdW90YXRpb247XG59O1xuXG4vLyBRdW90YXRpb24gVGVtcGxhdGUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0UXVvdGF0aW9uVGVtcGxhdGVzID0gYXN5bmMgKCk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGVbXT4gPT4ge1xuICByZXR1cm4gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90YXRpb25UZW1wbGF0ZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGUgfCB1bmRlZmluZWQ+ID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICByZXR1cm4gdGVtcGxhdGUgfHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFF1b3RhdGlvblRlbXBsYXRlID0gYXN5bmMgKHRlbXBsYXRlRGF0YTogT21pdDxRdW90YXRpb25UZW1wbGF0ZSwgJ2lkJz4pOiBQcm9taXNlPFF1b3RhdGlvblRlbXBsYXRlPiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS5jcmVhdGUoe1xuICAgIC4uLnRlbXBsYXRlRGF0YSxcbiAgICBpc0RlZmF1bHQ6IGZhbHNlXG4gIH0pO1xuICBcbiAgY29uc3QgbmV3VGVtcGxhdGUgPSBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1RlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHF1b3RhdGlvbiB0ZW1wbGF0ZScpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3VGVtcGxhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUXVvdGF0aW9uVGVtcGxhdGUgPSBhc3luYyAoaWQ6IHN0cmluZywgdGVtcGxhdGVEYXRhOiBRdW90YXRpb25UZW1wbGF0ZSk6IFByb21pc2U8UXVvdGF0aW9uVGVtcGxhdGU+ID0+IHtcbiAgYXdhaXQgcXVvdGF0aW9uVGVtcGxhdGVzU2VydmljZS51cGRhdGUoaWQsIHRlbXBsYXRlRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWRUZW1wbGF0ZSA9IGF3YWl0IHF1b3RhdGlvblRlbXBsYXRlc1NlcnZpY2UuZ2V0QnlJZChpZCk7XG4gIGlmICghdXBkYXRlZFRlbXBsYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUZW1wbGF0ZSBub3QgZm91bmQgYWZ0ZXIgdXBkYXRlJyk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWRUZW1wbGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVRdW90YXRpb25UZW1wbGF0ZSA9IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4gfT4gPT4ge1xuICBhd2FpdCBxdW90YXRpb25UZW1wbGF0ZXNTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn07XG5cbi8vIEVtcGxveWVlIFJvbGUgZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZWVSb2xlcyA9IGFzeW5jICgpOiBQcm9taXNlPEVtcGxveWVlUm9sZVtdPiA9PiB7XG4gIHJldHVybiBhd2FpdCBlbXBsb3llZVJvbGVzU2VydmljZS5nZXRBbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRFbXBsb3llZVJvbGUgPSBhc3luYyAobmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbXBsb3llZVJvbGU+ID0+IHtcbiAgY29uc3QgaWQgPSBhd2FpdCBlbXBsb3llZVJvbGVzU2VydmljZS5jcmVhdGUoeyBuYW1lIH0pO1xuICBcbiAgY29uc3QgbmV3Um9sZSA9IGF3YWl0IGVtcGxveWVlUm9sZXNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld1JvbGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZW1wbG95ZWUgcm9sZScpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3Um9sZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVFbXBsb3llZVJvbGUgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+ID0+IHtcbiAgYXdhaXQgZW1wbG95ZWVSb2xlc1NlcnZpY2UuZGVsZXRlKGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufTtcblxuLy8gRGVwYXJ0bWVudCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBnZXREZXBhcnRtZW50cyA9IGFzeW5jICgpOiBQcm9taXNlPERlcGFydG1lbnRbXT4gPT4ge1xuICByZXR1cm4gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmdldEFsbCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZERlcGFydG1lbnQgPSBhc3luYyAobmFtZTogc3RyaW5nKTogUHJvbWlzZTxEZXBhcnRtZW50PiA9PiB7XG4gIGNvbnN0IGlkID0gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmNyZWF0ZSh7IG5hbWUgfSk7XG4gIFxuICBjb25zdCBuZXdEZXBhcnRtZW50ID0gYXdhaXQgZGVwYXJ0bWVudHNTZXJ2aWNlLmdldEJ5SWQoaWQpO1xuICBpZiAoIW5ld0RlcGFydG1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgZGVwYXJ0bWVudCcpO1xuICB9XG4gIFxuICByZXR1cm4gbmV3RGVwYXJ0bWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVEZXBhcnRtZW50ID0gYXN5bmMgKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiB9PiA9PiB7XG4gIGF3YWl0IGRlcGFydG1lbnRzU2VydmljZS5kZWxldGUoaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0FtUWEifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$816221__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:816221 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$00e69b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:00e69b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$ecd847__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:ecd847 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$37c5d8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:37c5d8 [app-client] (ecmascript) <text/javascript>");
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$816221__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getLeads"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$00e69b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getRecentActivities"])(5),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$ecd847__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProducts"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$37c5d8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getQuotations"])()
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

//# sourceMappingURL=src_dcc6bd73._.js.map