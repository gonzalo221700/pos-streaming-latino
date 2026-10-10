// STREAMING CHUNK: Configurando el motor PWA
const CACHE_NAME = 'slmx-pos-cache-v1';

// STREAMING CHUNK: Instalación del Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// STREAMING CHUNK: Activación
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// STREAMING CHUNK: Intercepción de red (Lo mínimo para que Chrome lo acepte como App)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});