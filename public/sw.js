let cacheData = "appV1";
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/favicon.ico',
                '/logo192.png',
                '/manifest.json',
                'static/js/bundle.js',
                '/index.js',
                '/'
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp){
                    return resp;
                }
            })
        )
    }   
})