// Service worker for GitHub Pages.
// Two changes vs the old one, both aimed at first-load speed on GitHub Pages:
//  1. All paths are RELATIVE, so the app works from https://user.github.io/repo/
//     (absolute "/data/..." pointed at the domain root and always missed).
//  2. Only the tiny shell is precached. The old worker precached every .dat
//     file (hadiths 16 MB, tafsir 7 MB, ayahs 6.7 MB ≈ 30 MB) during install,
//     which is exactly what made the first visit slow and data-hungry.
//     Data files are now cached the first time they are actually opened.
const CACHE = 'quran-v88-shell-1';
const SCOPE = new URL('./', self.registration.scope).pathname;

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './app.enc',
  './icon-192.png',
  './icon-512.png',
  './favicon.ico',
  './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(PRECACHE.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isAppAsset(url) {
  if (url.origin !== self.location.origin) return false;
  if (!url.pathname.startsWith(SCOPE)) return false;
  const rest = url.pathname.slice(SCOPE.length);
  return rest.startsWith('assets/') || rest.startsWith('data/') ||
         rest.startsWith('miracles_img/') || rest.startsWith('vendor/') ||
         rest === 'app.enc' || /\.(png|jpe?g|webp|ico|svg|woff2|css|js|dat|enc)$/.test(rest);
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Cache-first for versioned/static content, including data files, which get
  // stored on demand rather than all up front.
  if (isAppAsset(url)) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
        if (resp && (resp.ok || resp.status === 0)) {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => cached))
    );
    return;
  }

  // Navigations: network first, fall back to the cached shell when offline.
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() =>
        caches.match('./index.html').then(r => r || caches.match('./'))
      )
    );
  }
});
