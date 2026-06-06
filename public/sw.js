// This service worker unregisters itself and clears all caches
// to fix stale redirect issues from previous deployments.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', async () => {
  // Clear all caches
  const keys = await caches.keys();
  await Promise.all(keys.map((key) => caches.delete(key)));
  // Unregister this service worker
  await self.registration.unregister();
});
