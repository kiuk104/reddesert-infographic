// 이 사이트는 Fokus Spiel(https://kiuk104.github.io/fokus-spiel/)로 옮겨졌어요. 예전 캐시를 지우고 스스로 해제한다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('cd-note')).map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll()).then(cs => cs.forEach(c => c.navigate(c.url))));
});
