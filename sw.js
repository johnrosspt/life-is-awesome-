const CACHE='ironkey-v9';
const B='/life-is-awesome-';
const FILES=[B+'/',B+'/manifest.json',B+'/apple-touch-icon.png',B+'/icon-192.png',B+'/icon-512.png',B+'/_expo/static/js/web/index-106774e4126f28726c28617022fecc8a.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match(B+'/'))))});
