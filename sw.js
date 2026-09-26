// Scope-relative offline cache. A new version replaces previous app-owned caches.
const CACHE = 'quran-v89-shell-1';
const SCOPE = new URL('./', self.registration.scope).pathname;
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './favicon.ico', './apple-touch-icon.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => Promise.allSettled(SHELL.map(path => cache.add(path)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('quran-v') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(SCOPE)) return;
  const rest = url.pathname.slice(SCOPE.length);
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  if (!(rest === 'app.enc' || rest.startsWith('assets/') || rest.startsWith('data/') || rest.startsWith('miracles_img/') || rest.startsWith('vendor/') || /\.(png|jpe?g|webp|ico|svg|woff2|css|js|dat|enc)$/.test(rest))) return;
  // The app payload is versioned in its URL, and should always check the network first.
  if (rest === 'app.enc') {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, response.clone())));
      return response;
    }).catch(() => caches.match(request)));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok) event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, response.clone())));
    return response;
  })));
});
