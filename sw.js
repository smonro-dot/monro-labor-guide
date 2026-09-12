const CACHE = 'monro-sheets-v3';
const ASSETS = [
  './',
  './index.html',
  './all.html',
  './manifest.json',
  './icon.svg',
  './labor-1.html','./labor-2.html','./labor-3.html',
  './comfort-1.html','./comfort-2.html',
  './space-1.html','./space-2.html',
  './plan-1.html','./plan-2.html'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
