if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const c=s=>i(s,l),a={module:{uri:l},exports:o,require:c};e[l]=Promise.all(n.map((s=>a[s]||c(s)))).then((s=>(r(...s),o)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"a27d7b61a0241052f736ebe81718c101"},{url:"assets/Dashboard-bNPdeD8s.js",revision:null},{url:"assets/index-D7qFLR62.css",revision:null},{url:"assets/index-DX_ThbQC.js",revision:null},{url:"assets/Main-ehGRrhn2.css",revision:null},{url:"assets/Main-oRQysSW_.js",revision:null},{url:"assets/SignIn-DKfO65z7.css",revision:null},{url:"assets/SignIn-DwuOgkxJ.js",revision:null},{url:"assets/SignUp-DT2kVkal.js",revision:null},{url:"assets/SignUp-k7rquBz5.css",revision:null},{url:"assets/Tasks-1elztchM.js",revision:null},{url:"favicon.ico",revision:"89099cfae0775e3e086613bca3190493"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"index.html",revision:"a978debc71711fbba365e40ab20e26b4"},{url:"maskable-icon-512x512.png",revision:"126c55dc030a58db716758479c41c570"},{url:"pwa-192x192.png",revision:"14a23cc23a2f5a3157ac52e78135346c"},{url:"pwa-512x512.png",revision:"5a051418936d2f633fc164f78b1662e1"},{url:"pwa-64x64.png",revision:"f35ebe1d2519c34b44344b0135c4f1a1"},{url:"manifest.webmanifest",revision:"7aadafc7c438fbcc99c86604e5bfc7b3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
