self.addEventListener('install', e => {
   e.waitUntil(
      caches.open('static').then(cache => {
         return cache.addAll([
            '/',
            '/app.js',
            '/index.html',
            '/manifest.json',
            '/script.js',
            '/style.css'
         ]);
      })
   )
});

self.addEventListener('fetch', e => {
   e.respondWith(
      caches.match(e.request).then(response => {
         return response || fetch(e.request);
      })
   )
})