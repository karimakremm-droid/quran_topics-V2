const CACHE_NAME = 'quran-topics-v3';

// الملفات الأساسية تُحفظ فوراً عند التثبيت
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/index-JBEEVQCW.js',
  './assets/index-Mq0mt_p_.css',
  './assets/fonts/local.css',
  './assets/fonts/J7aRnpd8CGxBHpUrtLMA7w.woff2',
  './assets/fonts/J7acnpd8CGxBHp2VkaY6zp5yGw.woff2',
  './assets/fonts/J7acnpd8CGxBHp2VkaYxzp5yGw.woff2',
  './assets/fonts/J7acnpd8CGxBHp2VkaY_zp4.woff2',
  './assets/fonts/J7aRnpd8CGxBHpUgtLMA7w.woff2',
  './assets/fonts/J7aRnpd8CGxBHpUutLM.woff2',
  './assets/fonts/Iurf6YBj_oCad4k1l5qjHrFpiQ.woff2',
  './assets/fonts/Iurf6YBj_oCad4k1l5qjHrRpiYlJ.woff2',
  './assets/fonts/Iurf6YBj_oCad4k1l4qkHrFpiQ.woff2',
  './assets/fonts/Iurf6YBj_oCad4k1l4qkHrRpiYlJ.woff2',
  './assets/fonts/Iurf6YBj_oCad4k1l8KiHrFpiQ.woff2',
  './assets/fonts/Iurf6YBj_oCad4k1l8KiHrRpiYlJ.woff2',
  './assets/fonts/Iura6YBj_oCad4k1nzGBCw.woff2',
  './assets/fonts/Iura6YBj_oCad4k1nzSBC45I.woff2',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon.ico'
];

// ملفات البيانات تُحفظ عند أول طلب (cache-first)
const DATA_FILES = [
  './data/categories.json',
  './data/ayahs.json',
  './data/tafsir.json',
  './data/page_map.json',
  './data/tadabbur_data.json',
  './data/khatm_plan.json'
];

// تثبيت: precache الملفات الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// تفعيل: حذف الكاش القديم
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first لكل الملفات
self.addEventListener('fetch', event => {
  // تجاهل طلبات non-GET
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // ملفات البيانات: cache-first ثم network
  const isData = DATA_FILES.some(f => url.pathname.endsWith(f.replace('./', '')));
  if (isData) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(resp => {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return resp;
        });
      })
    );
    return;
  }

  // باقي الملفات: cache-first
  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return resp;
      })
    )
  );
});
