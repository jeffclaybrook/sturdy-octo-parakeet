self.addEventListener('install', e => {
   e.waitUntil(
      caches.open('myApp').then(cache => {
         return cache.addAll([
            '/',
            '/app.js',
            '/index.html',
            '/manifest.json',
            '/script.js',
            '/style.css',
            '/images/favicon.ico',
            '/images/chance-1.webp',
            '/images/chance-2.webp',
            '/images/chance-3.webp',
            '/images/chance-4.webp',
            '/images/chance-5.webp',
            '/images/chance-6.webp',
            '/images/chance-7.webp',
            '/images/chance-8.webp',
            '/images/chance-9.webp',
            '/images/chance-10.webp',
            '/images/chance-11.webp',
            '/images/chance-12.webp',
            '/images/chance-13.webp',
            '/images/chance-14.webp',
            '/images/kendrick-1.webp',
            '/images/kendrick-2.webp',
            '/images/kendrick-3.webp',
            '/images/kendrick-4.webp',
            '/images/kendrick-5.webp',
            '/images/kendrick-6.webp',
            '/images/kendrick-7.webp',
            '/images/kendrick-8.webp',
            '/images/kendrick-9.webp',
            '/images/kendrick-10.webp',
            '/images/kendrick-11.webp',
            '/images/logo-192.png',
            '/images/logo-512.png',
            '/songs/song-1.mp3',
            '/songs/song-2.mp3',
            '/songs/song-3.mp3',
            '/songs/song-4.mp3',
            '/songs/song-5.mp3',
            '/songs/song-6.mp3',
            '/songs/song-7.mp3',
            '/songs/song-8.mp3',
            '/songs/song-9.mp3',
            '/songs/song-10.mp3',
            '/songs/song-11.mp3',
            '/songs/song-12.mp3',
            '/songs/song-13.mp3',
            '/songs/song-14.mp3',
            '/songs/song-15.mp3',
            '/songs/song-16.mp3',
            '/songs/song-17.mp3',
            '/songs/song-18.mp3',
            '/songs/song-19.mp3',
            '/songs/song-20.mp3',
            '/songs/song-21.mp3',
            '/songs/song-22.mp3',
            '/songs/song-23.mp3',
            '/songs/song-24.mp3',
            '/songs/song-25.mp3',
            '/songs/song-26.mp3',
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