/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable quotes */

const CACHE_NAME = 'cedric-mcdougal-v1';

const DO_NOT_CACHE = [
  // It seems like chrome extension requests might be getting cached? That
  // might not be the case, but ignore just in case.
  'chrome-extension',

  // The development server serves up a file that looks like this:
  // /_next/static/development/dll/dll_8a04123f1985fc11a212.js
  'dll/dll',

  // Cloudflare email address obfuscation:
  // https://support.cloudflare.com/hc/en-us/articles/200170016-What-is-Email-Address-Obfuscation-
  'email-decode.min.js',

  // Used by HMR in development server
  'hot-update.js',

  // Used by HMR in development server
  'on-demand-entries-ping',

  // The request for the service worker file would happen before the 'fetch'
  // event listener is installed, but exclude this explicitly just to be safe
  'serviceWorker.js',
];

self.addEventListener('fetch', function(event) {
  const doNotCache = DO_NOT_CACHE.some(function(s) {
    return event.request.url.indexOf(s) !== -1;
  });

  if (!doNotCache) {
    // IMPORTANT: Clone the request. A request is a stream and
    // can only be consumed once. Since we are consuming this
    // once by cache and once by the browser for fetch, we need
    // to clone the request.
    const fetchRequest = event.request.clone();

    // "Network first" approach: always fetch from the network but fallback to
    // the cache if the user is offline. We are not aiming to be a fully fledged
    // offline app at the moment -- this strategy is designed to mildly improve
    // the offline experience without having to deal with cache invalidation.
    event.respondWith(
      fetch(fetchRequest)
        .then(function(response) {
          // Only cache successful responses from our origin
          const cacheable =
            response &&
            event.request.method === `GET` &&
            response.status === 200 &&
            response.type === 'basic';

          if (cacheable) {
            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = response.clone();

            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, responseToCache);
            });
          }

          return response;
        })
        .catch(function() {
          return caches.match(event.request);
        })
    );
  }
});
