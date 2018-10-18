self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {});


self.addEventListener('push', function(event) {
    event.waitUntil(
        self.registration.showNotification(event.data.json().notification.title, {
            'body': event.data.json().notification.body,
            'icon': './icon.png'
        })
    );
});