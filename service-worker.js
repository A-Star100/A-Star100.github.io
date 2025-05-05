self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache-v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/index-style.css',
        '/images/me.png',
        '/images/gitlab.png',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
