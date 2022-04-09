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
            '/images/image-1.webp',
            '/images/image-2.webp',
            '/images/image-3.webp',
            '/images/image-4.webp',
            '/images/image-5.webp',
            '/images/image-6.webp',
            '/images/image-7.webp',
            '/images/image-8.webp',
            '/images/image-9.webp',
            '/images/image-10.webp',
            '/images/image-11.webp',
            '/images/image-12.webp',
            '/images/image-13.webp',
            '/images/image-14.webp',
            '/images/image-15.webp',
            '/images/image-16.webp',
            '/images/image-17.webp',
            '/images/image-18.webp',
            '/images/image-19.webp',
            '/images/image-20.webp',
            '/images/image-21.webp',
            '/images/image-22.webp',
            '/images/image-23.webp',
            '/images/image-24.webp',
            '/images/image-25.webp',
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