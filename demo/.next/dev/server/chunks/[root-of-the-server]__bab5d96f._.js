module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/th.gg/townhall/src/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
/**
 * @Author: BensonByte
 * @Date:   12/19/25 23:11:47 C8T
 * @Last Modified by:   BensonByte
 * @Last Modified time: 12/20/25 01:11:12 C2T
 */ /**
 * Next.js Middleware for Custom Domain Handling
 *
 * Detects custom domains and rewrites requests to the custom domain handler.
 * Custom domains can only access form-related endpoints, not the full app.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$th$2e$gg$2f$townhall$2f$skeleton$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/th.gg/townhall/skeleton/node_modules/.pnpm/next@16.1.1_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/server.js [middleware] (ecmascript)");
;
// Main domains that should be handled normally (full app access)
const MAIN_DOMAINS = [
    "townhall.gg",
    "localhost:3000",
    "127.0.0.1:3000",
    "localhost",
    "127.0.0.1",
    "*.townhall.gg",
    "www.townhall.gg"
];
// Paths ALLOWED on custom domains (whitelist approach for security)
const CUSTOM_DOMAIN_ALLOWED_PATHS = [
    "/f/",
    "/f",
    "/f/*",
    "/embed/",
    "/embed",
    "/api/track/",
    "/api/unsubscribe/",
    "/unsubscribe/",
    "/_next/",
    "/static/",
    "/favicon.ico",
    "/robots.txt",
    "/hero-bg.png",
    "/embed.js",
    "/.well-known/"
];
// Paths explicitly blocked on custom domains (for clarity)
const CUSTOM_DOMAIN_BLOCKED_PATHS = [
    "/dashboard",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/verify-email",
    "/verify-required",
    "/2fa",
    "/api/auth/",
    "/api/admin/",
    "/api/user/",
    "/api/workspaces/",
    "/api/forms/",
    "/api/files/",
    "/api/crm/",
    "/api/polar/",
    "/api/webhooks/",
    "/api/internal/",
    "/api/invites/",
    "/api/links/",
    "/api/api-keys/",
    "/api/export/",
    "/api/onboarding",
    "/docs",
    "/support",
    "/about",
    "/careers",
    "/blog",
    "/legal",
    "/non-profits",
    "/nonprofit",
    "/invite/",
    "/go",
    "/l/",
    ""
];
function proxy(request) {
    const hostname = request.headers.get("host") || "";
    const pathname = request.nextUrl.pathname;
    // Skip proxy for internal rewrites (already processed)
    if (pathname.startsWith("/custom-domain/")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$th$2e$gg$2f$townhall$2f$skeleton$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Remove port for comparison
    const hostnameWithoutPort = hostname.split(":")[0];
    // Check if this is a main domain
    const isMainDomain = MAIN_DOMAINS.some((domain)=>{
        const domainWithoutPort = domain.split(":")[0];
        return hostnameWithoutPort === domainWithoutPort || hostnameWithoutPort.endsWith("." + domainWithoutPort);
    });
    // Allow Vercel preview deployments
    if (hostnameWithoutPort.endsWith(".vercel.app")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$th$2e$gg$2f$townhall$2f$skeleton$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Allow localhost in development UNLESS explicitly testing custom domains
    // Set CUSTOM_DOMAIN_TEST=true in .env.local to test blocking locally
    const isLocalhost = hostnameWithoutPort === "localhost" || hostnameWithoutPort === "127.0.0.1";
    const isTestingCustomDomains = process.env.CUSTOM_DOMAIN_TEST === "true";
    if (("TURBOPACK compile-time value", "development") === "development" && isLocalhost && !isTestingCustomDomains) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$th$2e$gg$2f$townhall$2f$skeleton$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // If it's a main domain, proceed normally with full access
    if (isMainDomain) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$th$2e$gg$2f$townhall$2f$skeleton$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // === CUSTOM DOMAIN HANDLING ===
    // Custom domains have restricted access - only form-related endpoints
    // Check if path is explicitly blocked
    const isBlocked = CUSTOM_DOMAIN_BLOCKED_PATHS.some((path)=>pathname === path || pathname.startsWith(path));
    if (isBlocked) {
        // Rewrite to the restricted page (shows a nice UI explaining the domain)
        const url = request.nextUrl.clone();
        url.pathname = "/custom-domain/restricted";
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$th$2e$gg$2f$townhall$2f$skeleton$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(url);
        response.headers.set("x-custom-domain", hostname);
        return response;
    }
    // Check if path is allowed (whitelist)
    const isAllowed = CUSTOM_DOMAIN_ALLOWED_PATHS.some((path)=>pathname.startsWith(path));
    // For allowed paths like /f/[formId], pass through normally
    if (isAllowed) {
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$th$2e$gg$2f$townhall$2f$skeleton$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        response.headers.set("x-custom-domain", hostname);
        return response;
    }
    // Root path and unknown paths - rewrite to custom domain handler
    // This handles the form landing page at /
    if (pathname === "/" || pathname === "") {
        const url = request.nextUrl.clone();
        url.pathname = `/custom-domain/${hostname}${pathname}`;
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$th$2e$gg$2f$townhall$2f$skeleton$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(url);
        response.headers.set("x-custom-domain", hostname);
        return response;
    }
    // Any other unrecognized path - show restricted page
    const url = request.nextUrl.clone();
    url.pathname = "/custom-domain/restricted";
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$th$2e$gg$2f$townhall$2f$skeleton$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(url);
    response.headers.set("x-custom-domain", hostname);
    return response;
}
const config = {
    // Match all paths except static files and API routes that need special handling
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */ "/((?!_next/static|_next/image|favicon.ico).*)"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bab5d96f._.js.map