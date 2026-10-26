const CACHE_NAME = 'igreja-herege-v1';

const ASSETS_TO_CACHE = [
'./',
'index.html',
'manifest.json',
'logo-512.png',
'logo-192.png',

// 35 Capítulos HTML
'1.html',
'2.html',
'3.html',
'4.html',
'5.html',
'6.html',
'7.html',
'8.html',
'9.html',
'10.html',
'11.html',
'12.html',
'13.html',
'14.html',
'15.html',
'16.html',
'17.html',
'18.html',
'19.html',
'20.html',
'21.html',
'22.html',
'23.html',
'24.html',
'25.html',
'26.html',
'27.html',
'28.html',
'29.html',
'30.html',
'31.html',
'32.html',
'33.html',
'34.html',
'35.html',

// 3 Páginas Finais
'biografia.html',
'bibliografia.html',
'infoprodutos.html',

// 35 Imagens Correspondentes aos Capítulos
'1.png',
'2.png',
'3.png',
'4.png',
'5.png',
'6.png',
'7.png',
'8.png',
'9.png',
'10.png',
'11.png',
'12.png',
'13.png',
'14.png',
'15.png',
'16.png',
'17.png',
'18.png',
'19.png',
'20.png',
'21.png',
'22.png',
'23.png',
'24.png',
'25.png',
'26.png',
'27.png',
'28.png',
'29.png',
'30.png',
'31.png',
'32.png',
'33.png',
'34.png',
'35.png'
];

self.addEventListener('install', (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => {
return cache.addAll(ASSETS_TO_CACHE);
})
);
self.skipWaiting();
});

self.addEventListener('activate', (event) => {
event.waitUntil(
caches.keys().then((cacheNames) => {
return Promise.all(
cacheNames.map((cache) => {
if (cache !== CACHE_NAME) {
return caches.delete(cache);
}
})
);
})
);
self.clients.claim();
});

self.addEventListener('fetch', (event) => {
event.respondWith(
caches.match(event.request).then((response) => {
return response || fetch(event.request);
})
);
});