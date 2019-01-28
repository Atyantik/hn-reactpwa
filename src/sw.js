serviceWorker.workbox.routing.registerRoute(
  new RegExp('https://hacker-news.firebaseio.com/v0/'),
  serviceWorker.workbox.strategies.staleWhileRevalidate({
    cacheName: 'firebase-hn-api-cache',
  }),
);
