const CACHE_NAME = "eksipnos-v2";
const PRECACHE_URLS = ["/", "/index.html", "/manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))),
    ),
  );
  self.clients.claim();
});

// IMPORTANT:
// Do NOT runtime-cache JS/CSS/module chunks. Caching build artifacts can pin old bundles
// and cause persistent runtime crashes after deployments.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin requests.
  if (url.origin !== self.location.origin) return;

  // Cache-first for our precached app-shell URLs (basic offline support).
  if (PRECACHE_URLS.includes(url.pathname)) {
    event.respondWith(caches.match(req).then((cached) => cached || fetch(req)));
    return;
  }

  // Network-only for everything else.
  event.respondWith(fetch(req));
});

