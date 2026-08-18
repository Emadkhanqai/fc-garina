/* FC26 Tournament Arena — offline shell.
   Tournament night runs on a phone next to the console, so the app must open
   instantly and keep working if the house wifi drops. The page is served from
   cache first and refreshed in the background; when a newer build lands the
   page is told, so it can offer a reload instead of swapping under the
   operator mid-match. */
const CACHE = 'fc26-arena-v1';
/* A newer build is usually spotted while serving a navigation — at that moment
   the page asking for it does not exist yet, so postMessage has nobody to
   reach. The flag is left in the cache instead and the page picks it up once
   it is running. Keep this key in step with the one the page reads. */
const UPDATE_FLAG = './__fc26_update';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './posters/golden-boot.jpg',
  './logos/eclipse.png',
  './logos/royals.png',
  './logos/raptors.png',
  './logos/warriors.png',
  './logos/falcons.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(SHELL.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function tellClients(msg) {
  const cs = await self.clients.matchAll({ type: 'window' });
  cs.forEach((c) => c.postMessage(msg));
}

/* The page itself: serve the cached copy, then refresh it in the background.
   Launch stays instant and a new deploy is announced rather than forced. */
async function pageFirstFromCache(req) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match('./index.html');
  // Clone up front: `cached` is handed to the browser below and its body is
  // consumed as the page renders, so a later clone() throws and the comparison
  // silently never happens.
  const before = cached ? cached.clone() : null;
  // Must skip the HTTP cache: a plain fetch here is happily answered from it,
  // so a fresh deploy would look byte-identical and never be announced.
  const fresh = fetch(new Request(req.url, { cache: 'reload', credentials: 'same-origin' }))
    .then(async (res) => {
      if (!res || !res.ok) return null;
      const next = await res.clone().text();
      if (before) {
        const prev = await before.text();
        if (prev !== next) {
          await cache.put(UPDATE_FLAG, new Response('1'));
          tellClients({ type: 'fc26-update-ready' });
        }
      }
      await cache.put('./index.html', res.clone());
      return res;
    })
    .catch(() => null);
  return cached || (await fresh) || Response.error();
}

/* Everything else is versioned by filename or effectively static: cache first,
   fill the cache on the first online hit. */
async function assetCacheFirst(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
    return res;
  } catch (err) {
    return hit || Response.error();
  }
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate' || url.pathname.endsWith('/index.html')) {
    e.respondWith(pageFirstFromCache(req));
    return;
  }
  e.respondWith(assetCacheFirst(req));
});

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'fc26-skip-waiting') self.skipWaiting();
});
