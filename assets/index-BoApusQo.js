const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Main-Bd4YAkZD.js","assets/Main-C24QtXj4.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ns(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Q={},Jt=[],Ve=()=>{},qc=()=>!1,Ir=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ds=t=>t.startsWith("onUpdate:"),oe=Object.assign,xs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jc=Object.prototype.hasOwnProperty,z=(t,e)=>Jc.call(t,e),B=Array.isArray,_n=t=>Sr(t)==="[object Map]",Yc=t=>Sr(t)==="[object Set]",$=t=>typeof t=="function",ae=t=>typeof t=="string",an=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",Mo=t=>(se(t)||$(t))&&$(t.then)&&$(t.catch),Xc=Object.prototype.toString,Sr=t=>Xc.call(t),Qc=t=>Sr(t).slice(8,-1),Zc=t=>Sr(t)==="[object Object]",Ms=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vn=Ns(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},el=/-(\w)/g,Pe=Tr(t=>t.replace(el,(e,n)=>n?n.toUpperCase():"")),tl=/\B([A-Z])/g,Ht=Tr(t=>t.replace(tl,"-$1").toLowerCase()),Rr=Tr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Hr=Tr(t=>t?`on${Rr(t)}`:""),bt=(t,e)=>!Object.is(t,e),er=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Lo=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},as=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fi;const Cr=()=>fi||(fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ls(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ae(r)?il(r):Ls(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ae(t)||se(t))return t}const nl=/;(?![^(]*\))/g,rl=/:([^]+)/,sl=/\/\*[^]*?\*\//g;function il(t){const e={};return t.replace(sl,"").split(nl).forEach(n=>{if(n){const r=n.split(rl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Us(t){let e="";if(ae(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Us(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ol="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",al=Ns(ol);function Uo(t){return!!t||t===""}/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class cl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=we;try{return we=this,e()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ll(){return we}let te;const $r=new WeakSet;class Fo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$r.has(this)&&($r.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$o(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,di(this),Bo(this);const e=te,n=Ne;te=this,Ne=!0;try{return this.fn()}finally{jo(this),te=e,Ne=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$s(e);this.deps=this.depsTail=void 0,di(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$r.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cs(this)&&this.run()}get dirty(){return cs(this)}}let Ho=0,yn,bn;function $o(t,e=!1){if(t.flags|=8,e){t.next=bn,bn=t;return}t.next=yn,yn=t}function Fs(){Ho++}function Hs(){if(--Ho>0)return;if(bn){let e=bn;for(bn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yn;){let e=yn;for(yn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Bo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jo(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),$s(r),ul(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function cs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vo(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Vo(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===An))return;t.globalVersion=An;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!cs(t)){t.flags&=-3;return}const n=te,r=Ne;te=t,Ne=!0;try{Bo(t);const s=t.fn(t._value);(e.version===0||bt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{te=n,Ne=r,jo(t),t.flags&=-3}}function $s(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)$s(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ul(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ne=!0;const Wo=[];function It(){Wo.push(Ne),Ne=!1}function St(){const t=Wo.pop();Ne=t===void 0?!0:t}function di(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=te;te=void 0;try{e()}finally{te=n}}}let An=0;class fl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!te||!Ne||te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==te)n=this.activeLink=new fl(te,this),te.deps?(n.prevDep=te.depsTail,te.depsTail.nextDep=n,te.depsTail=n):te.deps=te.depsTail=n,Ko(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=te.depsTail,n.nextDep=void 0,te.depsTail.nextDep=n,te.depsTail=n,te.deps===n&&(te.deps=r)}return n}trigger(e){this.version++,An++,this.notify(e)}notify(e){Fs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Hs()}}}function Ko(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ko(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ls=new WeakMap,Dt=Symbol(""),us=Symbol(""),Pn=Symbol("");function le(t,e,n){if(Ne&&te){let r=ls.get(t);r||ls.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Bs),s.map=r,s.key=n),s.track()}}function Ze(t,e,n,r,s,i){const o=ls.get(t);if(!o){An++;return}const c=a=>{a&&a.trigger()};if(Fs(),e==="clear")o.forEach(c);else{const a=B(t),l=a&&Ms(n);if(a&&n==="length"){const f=Number(r);o.forEach((d,p)=>{(p==="length"||p===Pn||!an(p)&&p>=f)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),l&&c(o.get(Pn)),e){case"add":a?l&&c(o.get("length")):(c(o.get(Dt)),_n(t)&&c(o.get(us)));break;case"delete":a||(c(o.get(Dt)),_n(t)&&c(o.get(us)));break;case"set":_n(t)&&c(o.get(Dt));break}}Hs()}function Wt(t){const e=K(t);return e===t?e:(le(e,"iterate",Pn),De(t)?e:e.map(he))}function js(t){return le(t=K(t),"iterate",Pn),t}const dl={__proto__:null,[Symbol.iterator](){return Br(this,Symbol.iterator,he)},concat(...t){return Wt(this).concat(...t.map(e=>B(e)?Wt(e):e))},entries(){return Br(this,"entries",t=>(t[1]=he(t[1]),t))},every(t,e){return Je(this,"every",t,e,void 0,arguments)},filter(t,e){return Je(this,"filter",t,e,n=>n.map(he),arguments)},find(t,e){return Je(this,"find",t,e,he,arguments)},findIndex(t,e){return Je(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Je(this,"findLast",t,e,he,arguments)},findLastIndex(t,e){return Je(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Je(this,"forEach",t,e,void 0,arguments)},includes(...t){return jr(this,"includes",t)},indexOf(...t){return jr(this,"indexOf",t)},join(t){return Wt(this).join(t)},lastIndexOf(...t){return jr(this,"lastIndexOf",t)},map(t,e){return Je(this,"map",t,e,void 0,arguments)},pop(){return fn(this,"pop")},push(...t){return fn(this,"push",t)},reduce(t,...e){return hi(this,"reduce",t,e)},reduceRight(t,...e){return hi(this,"reduceRight",t,e)},shift(){return fn(this,"shift")},some(t,e){return Je(this,"some",t,e,void 0,arguments)},splice(...t){return fn(this,"splice",t)},toReversed(){return Wt(this).toReversed()},toSorted(t){return Wt(this).toSorted(t)},toSpliced(...t){return Wt(this).toSpliced(...t)},unshift(...t){return fn(this,"unshift",t)},values(){return Br(this,"values",he)}};function Br(t,e,n){const r=js(t),s=r[e]();return r!==t&&!De(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const hl=Array.prototype;function Je(t,e,n,r,s,i){const o=js(t),c=o!==t&&!De(t),a=o[e];if(a!==hl[e]){const d=a.apply(t,i);return c?he(d):d}let l=n;o!==t&&(c?l=function(d,p){return n.call(this,he(d),p,t)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,t)}));const f=a.call(o,l,r);return c&&s?s(f):f}function hi(t,e,n,r){const s=js(t);let i=n;return s!==t&&(De(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,he(c),a,t)}),s[e](i,...r)}function jr(t,e,n){const r=K(t);le(r,"iterate",Pn);const s=r[e](...n);return(s===-1||s===!1)&&Ks(n[0])?(n[0]=K(n[0]),r[e](...n)):s}function fn(t,e,n=[]){It(),Fs();const r=K(t)[e].apply(t,n);return Hs(),St(),r}const pl=Ns("__proto__,__v_isRef,__isVue"),zo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(an));function gl(t){an(t)||(t=String(t));const e=K(this);return le(e,"has",t),e.hasOwnProperty(t)}class Go{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Tl:Xo:i?Yo:Jo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=B(e);if(!s){let a;if(o&&(a=dl[n]))return a;if(n==="hasOwnProperty")return gl}const c=Reflect.get(e,n,fe(e)?e:r);return(an(n)?zo.has(n):pl(n))||(s||le(e,"get",n),i)?c:fe(c)?o&&Ms(n)?c:c.value:se(c)?s?Zo(c):Hn(c):c}}class qo extends Go{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Mt(i);if(!De(r)&&!Mt(r)&&(i=K(i),r=K(r)),!B(e)&&fe(i)&&!fe(r))return a?!1:(i.value=r,!0)}const o=B(e)&&Ms(n)?Number(n)<e.length:z(e,n),c=Reflect.set(e,n,r,fe(e)?e:s);return e===K(s)&&(o?bt(r,i)&&Ze(e,"set",n,r):Ze(e,"add",n,r)),c}deleteProperty(e,n){const r=z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ze(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!an(n)||!zo.has(n))&&le(e,"has",n),r}ownKeys(e){return le(e,"iterate",B(e)?"length":Dt),Reflect.ownKeys(e)}}class ml extends Go{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _l=new qo,vl=new ml,yl=new qo(!0);const fs=t=>t,Yn=t=>Reflect.getPrototypeOf(t);function bl(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=_n(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?fs:e?ds:he;return!e&&le(i,"iterate",a?us:Dt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:c?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function Xn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function El(t,e){const n={get(s){const i=this.__v_raw,o=K(i),c=K(s);t||(bt(s,c)&&le(o,"get",s),le(o,"get",c));const{has:a}=Yn(o),l=e?fs:t?ds:he;if(a.call(o,s))return l(i.get(s));if(a.call(o,c))return l(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&le(K(s),"iterate",Dt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=K(i),c=K(s);return t||(bt(s,c)&&le(o,"has",s),le(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,a=K(c),l=e?fs:t?ds:he;return!t&&le(a,"iterate",Dt),c.forEach((f,d)=>s.call(i,l(f),l(d),o))}};return oe(n,t?{add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear")}:{add(s){!e&&!De(s)&&!Mt(s)&&(s=K(s));const i=K(this);return Yn(i).has.call(i,s)||(i.add(s),Ze(i,"add",s,s)),this},set(s,i){!e&&!De(i)&&!Mt(i)&&(i=K(i));const o=K(this),{has:c,get:a}=Yn(o);let l=c.call(o,s);l||(s=K(s),l=c.call(o,s));const f=a.call(o,s);return o.set(s,i),l?bt(i,f)&&Ze(o,"set",s,i):Ze(o,"add",s,i),this},delete(s){const i=K(this),{has:o,get:c}=Yn(i);let a=o.call(i,s);a||(s=K(s),a=o.call(i,s)),c&&c.call(i,s);const l=i.delete(s);return a&&Ze(i,"delete",s,void 0),l},clear(){const s=K(this),i=s.size!==0,o=s.clear();return i&&Ze(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=bl(s,t,e)}),n}function Vs(t,e){const n=El(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const wl={get:Vs(!1,!1)},Il={get:Vs(!1,!0)},Sl={get:Vs(!0,!1)};const Jo=new WeakMap,Yo=new WeakMap,Xo=new WeakMap,Tl=new WeakMap;function Rl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cl(t){return t.__v_skip||!Object.isExtensible(t)?0:Rl(Qc(t))}function Hn(t){return Mt(t)?t:Ws(t,!1,_l,wl,Jo)}function Qo(t){return Ws(t,!1,yl,Il,Yo)}function Zo(t){return Ws(t,!0,vl,Sl,Xo)}function Ws(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Cl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function En(t){return Mt(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function Mt(t){return!!(t&&t.__v_isReadonly)}function De(t){return!!(t&&t.__v_isShallow)}function Ks(t){return t?!!t.__v_raw:!1}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Al(t){return!z(t,"__v_skip")&&Object.isExtensible(t)&&Lo(t,"__v_skip",!0),t}const he=t=>se(t)?Hn(t):t,ds=t=>se(t)?Zo(t):t;function fe(t){return t?t.__v_isRef===!0:!1}function Pl(t){return ea(t,!1)}function Ol(t){return ea(t,!0)}function ea(t,e){return fe(t)?t:new kl(t,e)}class kl{constructor(e,n){this.dep=new Bs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:K(e),this._value=n?e:he(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||De(e)||Mt(e);e=r?e:K(e),bt(e,n)&&(this._rawValue=e,this._value=r?e:he(e),this.dep.trigger())}}function xt(t){return fe(t)?t.value:t}const Nl={get:(t,e,n)=>e==="__v_raw"?t:xt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ta(t){return En(t)?t:new Proxy(t,Nl)}class Dl{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=An-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&te!==this)return $o(this,!0),!0}get value(){const e=this.dep.track();return Vo(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xl(t,e,n=!1){let r,s;return $(t)?r=t:(r=t.get,s=t.set),new Dl(r,s,n)}const Qn={},lr=new WeakMap;let kt;function Ml(t,e=!1,n=kt){if(n){let r=lr.get(n);r||lr.set(n,r=[]),r.push(t)}}function Ll(t,e,n=Q){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=O=>s?O:De(O)||s===!1||s===0?et(O,1):et(O);let f,d,p,g,R=!1,P=!1;if(fe(t)?(d=()=>t.value,R=De(t)):En(t)?(d=()=>l(t),R=!0):B(t)?(P=!0,R=t.some(O=>En(O)||De(O)),d=()=>t.map(O=>{if(fe(O))return O.value;if(En(O))return l(O);if($(O))return a?a(O,2):O()})):$(t)?e?d=a?()=>a(t,2):t:d=()=>{if(p){It();try{p()}finally{St()}}const O=kt;kt=f;try{return a?a(t,3,[g]):t(g)}finally{kt=O}}:d=Ve,e&&s){const O=d,V=s===!0?1/0:s;d=()=>et(O(),V)}const H=ll(),M=()=>{f.stop(),H&&xs(H.effects,f)};if(i&&e){const O=e;e=(...V)=>{O(...V),M()}}let k=P?new Array(t.length).fill(Qn):Qn;const x=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const V=f.run();if(s||R||(P?V.some((re,Z)=>bt(re,k[Z])):bt(V,k))){p&&p();const re=kt;kt=f;try{const Z=[V,k===Qn?void 0:P&&k[0]===Qn?[]:k,g];a?a(e,3,Z):e(...Z),k=V}finally{kt=re}}}else f.run()};return c&&c(x),f=new Fo(d),f.scheduler=o?()=>o(x,!1):x,g=O=>Ml(O,!1,f),p=f.onStop=()=>{const O=lr.get(f);if(O){if(a)a(O,4);else for(const V of O)V();lr.delete(f)}},e?r?x(!0):k=f.run():o?o(x.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function et(t,e=1/0,n){if(e<=0||!se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,fe(t))et(t.value,e,n);else if(B(t))for(let r=0;r<t.length;r++)et(t[r],e,n);else if(Yc(t)||_n(t))t.forEach(r=>{et(r,e,n)});else if(Zc(t)){for(const r in t)et(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&et(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $n(t,e,n,r){try{return r?t(...r):t()}catch(s){Ar(s,e,n)}}function Ge(t,e,n,r){if($(t)){const s=$n(t,e,n,r);return s&&Mo(s)&&s.catch(i=>{Ar(i,e,n)}),s}if(B(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ge(t[i],e,n,r));return s}}function Ar(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Q;if(e){let c=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,a,l)===!1)return}c=c.parent}if(i){It(),$n(i,null,10,[t,a,l]),St();return}}Ul(t,n,s,r,o)}function Ul(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const pe=[];let $e=-1;const Yt=[];let ht=null,Kt=0;const na=Promise.resolve();let ur=null;function ra(t){const e=ur||na;return t?e.then(this?t.bind(this):t):e}function Fl(t){let e=$e+1,n=pe.length;for(;e<n;){const r=e+n>>>1,s=pe[r],i=On(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function zs(t){if(!(t.flags&1)){const e=On(t),n=pe[pe.length-1];!n||!(t.flags&2)&&e>=On(n)?pe.push(t):pe.splice(Fl(e),0,t),t.flags|=1,sa()}}function sa(){ur||(ur=na.then(oa))}function Hl(t){B(t)?Yt.push(...t):ht&&t.id===-1?ht.splice(Kt+1,0,t):t.flags&1||(Yt.push(t),t.flags|=1),sa()}function pi(t,e,n=$e+1){for(;n<pe.length;n++){const r=pe[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ia(t){if(Yt.length){const e=[...new Set(Yt)].sort((n,r)=>On(n)-On(r));if(Yt.length=0,ht){ht.push(...e);return}for(ht=e,Kt=0;Kt<ht.length;Kt++){const n=ht[Kt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ht=null,Kt=0}}const On=t=>t.id==null?t.flags&2?-1:1/0:t.id;function oa(t){try{for($e=0;$e<pe.length;$e++){const e=pe[$e];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$n(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$e<pe.length;$e++){const e=pe[$e];e&&(e.flags&=-2)}$e=-1,pe.length=0,ia(),ur=null,(pe.length||Yt.length)&&oa()}}let Ie=null,aa=null;function fr(t){const e=Ie;return Ie=t,aa=t&&t.type.__scopeId||null,e}function $l(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ii(-1);const i=fr(e);let o;try{o=t(...s)}finally{fr(i),r._d&&Ii(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Im(t,e){if(Ie===null)return t;const n=Dr(Ie),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=Q]=e[s];i&&($(i)&&(i={mounted:i,updated:i}),i.deep&&et(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Pt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(It(),Ge(a,n,8,[t.el,c,t,e]),St())}}const Bl=Symbol("_vte"),jl=t=>t.__isTeleport;function Gs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ca(t,e){return $(t)?oe({name:t.name},e,{setup:t}):t}function la(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function hs(t,e,n,r,s=!1){if(B(t)){t.forEach((R,P)=>hs(R,e&&(B(e)?e[P]:e),n,r,s));return}if(wn(r)&&!s)return;const i=r.shapeFlag&4?Dr(r.component):r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Q?c.refs={}:c.refs,d=c.setupState,p=K(d),g=d===Q?()=>!1:R=>z(p,R);if(l!=null&&l!==a&&(ae(l)?(f[l]=null,g(l)&&(d[l]=null)):fe(l)&&(l.value=null)),$(a))$n(a,c,12,[o,f]);else{const R=ae(a),P=fe(a);if(R||P){const H=()=>{if(t.f){const M=R?g(a)?d[a]:f[a]:a.value;s?B(M)&&xs(M,i):B(M)?M.includes(i)||M.push(i):R?(f[a]=[i],g(a)&&(d[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else R?(f[a]=o,g(a)&&(d[a]=o)):P&&(a.value=o,t.k&&(f[t.k]=o))};o?(H.id=-1,Ee(H,n)):H()}}}Cr().requestIdleCallback;Cr().cancelIdleCallback;const wn=t=>!!t.type.__asyncLoader,ua=t=>t.type.__isKeepAlive;function Vl(t,e){fa(t,"a",e)}function Wl(t,e){fa(t,"da",e)}function fa(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ua(s.parent.vnode)&&Kl(r,e,n,s),s=s.parent}}function Kl(t,e,n,r){const s=Pr(e,t,r,!0);ha(()=>{xs(r[e],s)},n)}function Pr(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{It();const c=Bn(n),a=Ge(e,n,t,o);return c(),St(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=ue)=>{(!Nn||t==="sp")&&Pr(t,(...r)=>e(...r),n)},zl=at("bm"),da=at("m"),Gl=at("bu"),ql=at("u"),Jl=at("bum"),ha=at("um"),Yl=at("sp"),Xl=at("rtg"),Ql=at("rtc");function Zl(t,e=ue){Pr("ec",t,e)}const eu="components";function tu(t,e){return ru(eu,t,!0,e)||t}const nu=Symbol.for("v-ndc");function ru(t,e,n=!0,r=!1){const s=Ie||ue;if(s){const i=s.type;{const c=Wu(i,!1);if(c&&(c===e||c===Pe(e)||c===Rr(Pe(e))))return i}const o=gi(s[t]||i[t],e)||gi(s.appContext[t],e);return!o&&r?i:o}}function gi(t,e){return t&&(t[e]||t[Pe(e)]||t[Rr(Pe(e))])}const ps=t=>t?La(t)?Dr(t):ps(t.parent):null,In=oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ps(t.parent),$root:t=>ps(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qs(t),$forceUpdate:t=>t.f||(t.f=()=>{zs(t.update)}),$nextTick:t=>t.n||(t.n=ra.bind(t.proxy)),$watch:t=>Su.bind(t)}),Vr=(t,e)=>t!==Q&&!t.__isScriptSetup&&z(t,e),su={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Vr(r,e))return o[e]=1,r[e];if(s!==Q&&z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==Q&&z(n,e))return o[e]=4,n[e];gs&&(o[e]=0)}}const f=In[e];let d,p;if(f)return e==="$attrs"&&le(t.attrs,"get",""),f(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Q&&z(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Vr(s,e)?(s[e]=n,!0):r!==Q&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&z(t,o)||Vr(e,o)||(c=i[0])&&z(c,o)||z(r,o)||z(In,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mi(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let gs=!0;function iu(t){const e=qs(t),n=t.proxy,r=t.ctx;gs=!1,e.beforeCreate&&_i(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:R,activated:P,deactivated:H,beforeDestroy:M,beforeUnmount:k,destroyed:x,unmounted:O,render:V,renderTracked:re,renderTriggered:Z,errorCaptured:Te,serverPrefetch:Re,expose:Ce,inheritAttrs:lt,components:At,directives:Le,filters:ln}=e;if(l&&ou(l,r,null),o)for(const Y in o){const W=o[Y];$(W)&&(r[Y]=W.bind(n))}if(s){const Y=s.call(n,n);se(Y)&&(t.data=Hn(Y))}if(gs=!0,i)for(const Y in i){const W=i[Y],qe=$(W)?W.bind(n,n):$(W.get)?W.get.bind(n,n):Ve,ut=!$(W)&&$(W.set)?W.set.bind(n):Ve,Ue=ke({get:qe,set:ut});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:me=>Ue.value=me})}if(c)for(const Y in c)pa(c[Y],r,n,Y);if(a){const Y=$(a)?a.call(n):a;Reflect.ownKeys(Y).forEach(W=>{tr(W,Y[W])})}f&&_i(f,t,"c");function ie(Y,W){B(W)?W.forEach(qe=>Y(qe.bind(n))):W&&Y(W.bind(n))}if(ie(zl,d),ie(da,p),ie(Gl,g),ie(ql,R),ie(Vl,P),ie(Wl,H),ie(Zl,Te),ie(Ql,re),ie(Xl,Z),ie(Jl,k),ie(ha,O),ie(Yl,Re),B(Ce))if(Ce.length){const Y=t.exposed||(t.exposed={});Ce.forEach(W=>{Object.defineProperty(Y,W,{get:()=>n[W],set:qe=>n[W]=qe})})}else t.exposed||(t.exposed={});V&&t.render===Ve&&(t.render=V),lt!=null&&(t.inheritAttrs=lt),At&&(t.components=At),Le&&(t.directives=Le),Re&&la(t)}function ou(t,e,n=Ve){B(t)&&(t=ms(t));for(const r in t){const s=t[r];let i;se(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),fe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function _i(t,e,n){Ge(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pa(t,e,n,r){let s=r.includes(".")?Aa(n,r):()=>n[r];if(ae(t)){const i=e[t];$(i)&&nr(s,i)}else if($(t))nr(s,t.bind(n));else if(se(t))if(B(t))t.forEach(i=>pa(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&nr(s,i,t)}}function qs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>dr(a,l,o,!0)),dr(a,e,o)),se(e)&&i.set(e,a),a}function dr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&dr(t,i,n,!0),s&&s.forEach(o=>dr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=au[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const au={data:vi,props:yi,emits:yi,methods:pn,computed:pn,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:pn,directives:pn,watch:lu,provide:vi,inject:cu};function vi(t,e){return e?t?function(){return oe($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function cu(t,e){return pn(ms(t),ms(e))}function ms(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function pn(t,e){return t?oe(Object.create(null),t,e):e}function yi(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:oe(Object.create(null),mi(t),mi(e??{})):e}function lu(t,e){if(!t)return e;if(!e)return t;const n=oe(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function ga(){return{app:null,config:{isNativeTag:qc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uu=0;function fu(t,e){return function(r,s=null){$(r)||(r=oe({},r)),s!=null&&!se(s)&&(s=null);const i=ga(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:uu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zu,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&$(f.install)?(o.add(f),f.install(l,...d)):$(f)&&(o.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,p){if(!a){const g=l._ceVNode||_e(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,f):t(g,f,p),a=!0,l._container=f,f.__vue_app__=l,Dr(g.component)}},onUnmount(f){c.push(f)},unmount(){a&&(Ge(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){const d=Xt;Xt=l;try{return f()}finally{Xt=d}}};return l}}let Xt=null;function tr(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function We(t,e,n=!1){const r=ue||Ie;if(r||Xt){const s=Xt?Xt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}const ma={},_a=()=>Object.create(ma),va=t=>Object.getPrototypeOf(t)===ma;function du(t,e,n,r=!1){const s={},i=_a();t.propsDefaults=Object.create(null),ya(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qo(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=K(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Or(t.emitsOptions,p))continue;const g=e[p];if(a)if(z(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const R=Pe(p);s[R]=_s(a,c,R,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{ya(t,e,s,i)&&(l=!0);let f;for(const d in c)(!e||!z(e,d)&&((f=Ht(d))===d||!z(e,f)))&&(a?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=_s(a,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!z(e,d))&&(delete i[d],l=!0)}l&&Ze(t.attrs,"set","")}function ya(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(vn(a))continue;const l=e[a];let f;s&&z(s,f=Pe(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Or(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=K(n),l=c||Q;for(let f=0;f<i.length;f++){const d=i[f];n[d]=_s(s,a,d,l[d],t,!z(l,d))}}return o}function _s(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=z(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&$(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=Bn(s);r=l[n]=a.call(null,e),f()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}const pu=new WeakMap;function ba(t,e,n=!1){const r=n?pu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!$(t)){const f=d=>{a=!0;const[p,g]=ba(d,e,!0);oe(o,p),g&&c.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return se(t)&&r.set(t,Jt),Jt;if(B(i))for(let f=0;f<i.length;f++){const d=Pe(i[f]);bi(d)&&(o[d]=Q)}else if(i)for(const f in i){const d=Pe(f);if(bi(d)){const p=i[f],g=o[d]=B(p)||$(p)?{type:p}:oe({},p),R=g.type;let P=!1,H=!0;if(B(R))for(let M=0;M<R.length;++M){const k=R[M],x=$(k)&&k.name;if(x==="Boolean"){P=!0;break}else x==="String"&&(H=!1)}else P=$(R)&&R.name==="Boolean";g[0]=P,g[1]=H,(P||z(g,"default"))&&c.push(d)}}const l=[o,c];return se(t)&&r.set(t,l),l}function bi(t){return t[0]!=="$"&&!vn(t)}const Ea=t=>t[0]==="_"||t==="$stable",Js=t=>B(t)?t.map(Be):[Be(t)],gu=(t,e,n)=>{if(e._n)return e;const r=$l((...s)=>Js(e(...s)),n);return r._c=!1,r},wa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ea(s))continue;const i=t[s];if($(i))e[s]=gu(s,i,r);else if(i!=null){const o=Js(i);e[s]=()=>o}}},Ia=(t,e)=>{const n=Js(e);t.slots.default=()=>n},Sa=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},mu=(t,e,n)=>{const r=t.slots=_a();if(t.vnode.shapeFlag&32){const s=e._;s?(Sa(r,e,n),n&&Lo(r,"_",s,!0)):wa(e,r)}else e&&Ia(t,e)},_u=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Sa(s,e,n):(i=!e.$stable,wa(e,s)),o=e}else e&&(Ia(t,e),o={default:1});if(i)for(const c in s)!Ea(c)&&o[c]==null&&delete s[c]},Ee=ku;function vu(t){return yu(t)}function yu(t,e){const n=Cr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Ve,insertStaticContent:R}=t,P=(u,h,m,y=null,_=null,b=null,S=void 0,I=null,w=!!h.dynamicChildren)=>{if(u===h)return;u&&!dn(u,h)&&(y=v(u),me(u,_,b,!0),u=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:E,ref:L,shapeFlag:C}=h;switch(E){case kr:H(u,h,m,y);break;case Lt:M(u,h,m,y);break;case zr:u==null&&k(h,m,y,S);break;case Qe:At(u,h,m,y,_,b,S,I,w);break;default:C&1?V(u,h,m,y,_,b,S,I,w):C&6?Le(u,h,m,y,_,b,S,I,w):(C&64||C&128)&&E.process(u,h,m,y,_,b,S,I,w,N)}L!=null&&_&&hs(L,u&&u.ref,b,h||u,!h)},H=(u,h,m,y)=>{if(u==null)r(h.el=c(h.children),m,y);else{const _=h.el=u.el;h.children!==u.children&&l(_,h.children)}},M=(u,h,m,y)=>{u==null?r(h.el=a(h.children||""),m,y):h.el=u.el},k=(u,h,m,y)=>{[u.el,u.anchor]=R(u.children,h,m,y,u.el,u.anchor)},x=({el:u,anchor:h},m,y)=>{let _;for(;u&&u!==h;)_=p(u),r(u,m,y),u=_;r(h,m,y)},O=({el:u,anchor:h})=>{let m;for(;u&&u!==h;)m=p(u),s(u),u=m;s(h)},V=(u,h,m,y,_,b,S,I,w)=>{h.type==="svg"?S="svg":h.type==="math"&&(S="mathml"),u==null?re(h,m,y,_,b,S,I,w):Re(u,h,_,b,S,I,w)},re=(u,h,m,y,_,b,S,I)=>{let w,E;const{props:L,shapeFlag:C,transition:D,dirs:F}=u;if(w=u.el=o(u.type,b,L&&L.is,L),C&8?f(w,u.children):C&16&&Te(u.children,w,null,y,_,Wr(u,b),S,I),F&&Pt(u,null,y,"created"),Z(w,u,u.scopeId,S,y),L){for(const ee in L)ee!=="value"&&!vn(ee)&&i(w,ee,null,L[ee],b,y);"value"in L&&i(w,"value",null,L.value,b),(E=L.onVnodeBeforeMount)&&He(E,y,u)}F&&Pt(u,null,y,"beforeMount");const j=bu(_,D);j&&D.beforeEnter(w),r(w,h,m),((E=L&&L.onVnodeMounted)||j||F)&&Ee(()=>{E&&He(E,y,u),j&&D.enter(w),F&&Pt(u,null,y,"mounted")},_)},Z=(u,h,m,y,_)=>{if(m&&g(u,m),y)for(let b=0;b<y.length;b++)g(u,y[b]);if(_){let b=_.subTree;if(h===b||Oa(b.type)&&(b.ssContent===h||b.ssFallback===h)){const S=_.vnode;Z(u,S,S.scopeId,S.slotScopeIds,_.parent)}}},Te=(u,h,m,y,_,b,S,I,w=0)=>{for(let E=w;E<u.length;E++){const L=u[E]=I?pt(u[E]):Be(u[E]);P(null,L,h,m,y,_,b,S,I)}},Re=(u,h,m,y,_,b,S)=>{const I=h.el=u.el;let{patchFlag:w,dynamicChildren:E,dirs:L}=h;w|=u.patchFlag&16;const C=u.props||Q,D=h.props||Q;let F;if(m&&Ot(m,!1),(F=D.onVnodeBeforeUpdate)&&He(F,m,h,u),L&&Pt(h,u,m,"beforeUpdate"),m&&Ot(m,!0),(C.innerHTML&&D.innerHTML==null||C.textContent&&D.textContent==null)&&f(I,""),E?Ce(u.dynamicChildren,E,I,m,y,Wr(h,_),b):S||W(u,h,I,null,m,y,Wr(h,_),b,!1),w>0){if(w&16)lt(I,C,D,m,_);else if(w&2&&C.class!==D.class&&i(I,"class",null,D.class,_),w&4&&i(I,"style",C.style,D.style,_),w&8){const j=h.dynamicProps;for(let ee=0;ee<j.length;ee++){const q=j[ee],ve=C[q],ce=D[q];(ce!==ve||q==="value")&&i(I,q,ve,ce,_,m)}}w&1&&u.children!==h.children&&f(I,h.children)}else!S&&E==null&&lt(I,C,D,m,_);((F=D.onVnodeUpdated)||L)&&Ee(()=>{F&&He(F,m,h,u),L&&Pt(h,u,m,"updated")},y)},Ce=(u,h,m,y,_,b,S)=>{for(let I=0;I<h.length;I++){const w=u[I],E=h[I],L=w.el&&(w.type===Qe||!dn(w,E)||w.shapeFlag&70)?d(w.el):m;P(w,E,L,null,y,_,b,S,!0)}},lt=(u,h,m,y,_)=>{if(h!==m){if(h!==Q)for(const b in h)!vn(b)&&!(b in m)&&i(u,b,h[b],null,_,y);for(const b in m){if(vn(b))continue;const S=m[b],I=h[b];S!==I&&b!=="value"&&i(u,b,I,S,_,y)}"value"in m&&i(u,"value",h.value,m.value,_)}},At=(u,h,m,y,_,b,S,I,w)=>{const E=h.el=u?u.el:c(""),L=h.anchor=u?u.anchor:c("");let{patchFlag:C,dynamicChildren:D,slotScopeIds:F}=h;F&&(I=I?I.concat(F):F),u==null?(r(E,m,y),r(L,m,y),Te(h.children||[],m,L,_,b,S,I,w)):C>0&&C&64&&D&&u.dynamicChildren?(Ce(u.dynamicChildren,D,m,_,b,S,I),(h.key!=null||_&&h===_.subTree)&&Ta(u,h,!0)):W(u,h,m,L,_,b,S,I,w)},Le=(u,h,m,y,_,b,S,I,w)=>{h.slotScopeIds=I,u==null?h.shapeFlag&512?_.ctx.activate(h,m,y,S,w):ln(h,m,y,_,b,S,w):Bt(u,h,w)},ln=(u,h,m,y,_,b,S)=>{const I=u.component=Hu(u,y,_);if(ua(u)&&(I.ctx.renderer=N),$u(I,!1,S),I.asyncDep){if(_&&_.registerDep(I,ie,S),!u.el){const w=I.subTree=_e(Lt);M(null,w,h,m)}}else ie(I,u,h,m,_,b,S)},Bt=(u,h,m)=>{const y=h.component=u.component;if(Pu(u,h,m))if(y.asyncDep&&!y.asyncResolved){Y(y,h,m);return}else y.next=h,y.update();else h.el=u.el,y.vnode=h},ie=(u,h,m,y,_,b,S)=>{const I=()=>{if(u.isMounted){let{next:C,bu:D,u:F,parent:j,vnode:ee}=u;{const ye=Ra(u);if(ye){C&&(C.el=ee.el,Y(u,C,S)),ye.asyncDep.then(()=>{u.isUnmounted||I()});return}}let q=C,ve;Ot(u,!1),C?(C.el=ee.el,Y(u,C,S)):C=ee,D&&er(D),(ve=C.props&&C.props.onVnodeBeforeUpdate)&&He(ve,j,C,ee),Ot(u,!0);const ce=Kr(u),Oe=u.subTree;u.subTree=ce,P(Oe,ce,d(Oe.el),v(Oe),u,_,b),C.el=ce.el,q===null&&Ou(u,ce.el),F&&Ee(F,_),(ve=C.props&&C.props.onVnodeUpdated)&&Ee(()=>He(ve,j,C,ee),_)}else{let C;const{el:D,props:F}=h,{bm:j,m:ee,parent:q,root:ve,type:ce}=u,Oe=wn(h);if(Ot(u,!1),j&&er(j),!Oe&&(C=F&&F.onVnodeBeforeMount)&&He(C,q,h),Ot(u,!0),D&&ne){const ye=()=>{u.subTree=Kr(u),ne(D,u.subTree,u,_,null)};Oe&&ce.__asyncHydrate?ce.__asyncHydrate(D,u,ye):ye()}else{ve.ce&&ve.ce._injectChildStyle(ce);const ye=u.subTree=Kr(u);P(null,ye,m,y,u,_,b),h.el=ye.el}if(ee&&Ee(ee,_),!Oe&&(C=F&&F.onVnodeMounted)){const ye=h;Ee(()=>He(C,q,ye),_)}(h.shapeFlag&256||q&&wn(q.vnode)&&q.vnode.shapeFlag&256)&&u.a&&Ee(u.a,_),u.isMounted=!0,h=m=y=null}};u.scope.on();const w=u.effect=new Fo(I);u.scope.off();const E=u.update=w.run.bind(w),L=u.job=w.runIfDirty.bind(w);L.i=u,L.id=u.uid,w.scheduler=()=>zs(L),Ot(u,!0),E()},Y=(u,h,m)=>{h.component=u;const y=u.vnode.props;u.vnode=h,u.next=null,hu(u,h.props,y,m),_u(u,h.children,m),It(),pi(u),St()},W=(u,h,m,y,_,b,S,I,w=!1)=>{const E=u&&u.children,L=u?u.shapeFlag:0,C=h.children,{patchFlag:D,shapeFlag:F}=h;if(D>0){if(D&128){ut(E,C,m,y,_,b,S,I,w);return}else if(D&256){qe(E,C,m,y,_,b,S,I,w);return}}F&8?(L&16&&Ae(E,_,b),C!==E&&f(m,C)):L&16?F&16?ut(E,C,m,y,_,b,S,I,w):Ae(E,_,b,!0):(L&8&&f(m,""),F&16&&Te(C,m,y,_,b,S,I,w))},qe=(u,h,m,y,_,b,S,I,w)=>{u=u||Jt,h=h||Jt;const E=u.length,L=h.length,C=Math.min(E,L);let D;for(D=0;D<C;D++){const F=h[D]=w?pt(h[D]):Be(h[D]);P(u[D],F,m,null,_,b,S,I,w)}E>L?Ae(u,_,b,!0,!1,C):Te(h,m,y,_,b,S,I,w,C)},ut=(u,h,m,y,_,b,S,I,w)=>{let E=0;const L=h.length;let C=u.length-1,D=L-1;for(;E<=C&&E<=D;){const F=u[E],j=h[E]=w?pt(h[E]):Be(h[E]);if(dn(F,j))P(F,j,m,null,_,b,S,I,w);else break;E++}for(;E<=C&&E<=D;){const F=u[C],j=h[D]=w?pt(h[D]):Be(h[D]);if(dn(F,j))P(F,j,m,null,_,b,S,I,w);else break;C--,D--}if(E>C){if(E<=D){const F=D+1,j=F<L?h[F].el:y;for(;E<=D;)P(null,h[E]=w?pt(h[E]):Be(h[E]),m,j,_,b,S,I,w),E++}}else if(E>D)for(;E<=C;)me(u[E],_,b,!0),E++;else{const F=E,j=E,ee=new Map;for(E=j;E<=D;E++){const be=h[E]=w?pt(h[E]):Be(h[E]);be.key!=null&&ee.set(be.key,E)}let q,ve=0;const ce=D-j+1;let Oe=!1,ye=0;const un=new Array(ce);for(E=0;E<ce;E++)un[E]=0;for(E=F;E<=C;E++){const be=u[E];if(ve>=ce){me(be,_,b,!0);continue}let Fe;if(be.key!=null)Fe=ee.get(be.key);else for(q=j;q<=D;q++)if(un[q-j]===0&&dn(be,h[q])){Fe=q;break}Fe===void 0?me(be,_,b,!0):(un[Fe-j]=E+1,Fe>=ye?ye=Fe:Oe=!0,P(be,h[Fe],m,null,_,b,S,I,w),ve++)}const li=Oe?Eu(un):Jt;for(q=li.length-1,E=ce-1;E>=0;E--){const be=j+E,Fe=h[be],ui=be+1<L?h[be+1].el:y;un[E]===0?P(null,Fe,m,ui,_,b,S,I,w):Oe&&(q<0||E!==li[q]?Ue(Fe,m,ui,2):q--)}}},Ue=(u,h,m,y,_=null)=>{const{el:b,type:S,transition:I,children:w,shapeFlag:E}=u;if(E&6){Ue(u.component.subTree,h,m,y);return}if(E&128){u.suspense.move(h,m,y);return}if(E&64){S.move(u,h,m,N);return}if(S===Qe){r(b,h,m);for(let C=0;C<w.length;C++)Ue(w[C],h,m,y);r(u.anchor,h,m);return}if(S===zr){x(u,h,m);return}if(y!==2&&E&1&&I)if(y===0)I.beforeEnter(b),r(b,h,m),Ee(()=>I.enter(b),_);else{const{leave:C,delayLeave:D,afterLeave:F}=I,j=()=>r(b,h,m),ee=()=>{C(b,()=>{j(),F&&F()})};D?D(b,j,ee):ee()}else r(b,h,m)},me=(u,h,m,y=!1,_=!1)=>{const{type:b,props:S,ref:I,children:w,dynamicChildren:E,shapeFlag:L,patchFlag:C,dirs:D,cacheIndex:F}=u;if(C===-2&&(_=!1),I!=null&&hs(I,null,m,u,!0),F!=null&&(h.renderCache[F]=void 0),L&256){h.ctx.deactivate(u);return}const j=L&1&&D,ee=!wn(u);let q;if(ee&&(q=S&&S.onVnodeBeforeUnmount)&&He(q,h,u),L&6)Jn(u.component,m,y);else{if(L&128){u.suspense.unmount(m,y);return}j&&Pt(u,null,h,"beforeUnmount"),L&64?u.type.remove(u,h,m,N,y):E&&!E.hasOnce&&(b!==Qe||C>0&&C&64)?Ae(E,h,m,!1,!0):(b===Qe&&C&384||!_&&L&16)&&Ae(w,h,m),y&&jt(u)}(ee&&(q=S&&S.onVnodeUnmounted)||j)&&Ee(()=>{q&&He(q,h,u),j&&Pt(u,null,h,"unmounted")},m)},jt=u=>{const{type:h,el:m,anchor:y,transition:_}=u;if(h===Qe){Vt(m,y);return}if(h===zr){O(u);return}const b=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:I}=_,w=()=>S(m,b);I?I(u.el,b,w):w()}else b()},Vt=(u,h)=>{let m;for(;u!==h;)m=p(u),s(u),u=m;s(h)},Jn=(u,h,m)=>{const{bum:y,scope:_,job:b,subTree:S,um:I,m:w,a:E}=u;Ei(w),Ei(E),y&&er(y),_.stop(),b&&(b.flags|=8,me(S,u,h,m)),I&&Ee(I,h),Ee(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ae=(u,h,m,y=!1,_=!1,b=0)=>{for(let S=b;S<u.length;S++)me(u[S],h,m,y,_)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const h=p(u.anchor||u.el),m=h&&h[Bl];return m?p(m):h};let A=!1;const T=(u,h,m)=>{u==null?h._vnode&&me(h._vnode,null,null,!0):P(h._vnode||null,u,h,null,null,null,m),h._vnode=u,A||(A=!0,pi(),ia(),A=!1)},N={p:P,um:me,m:Ue,r:jt,mt:ln,mc:Te,pc:W,pbc:Ce,n:v,o:t};let G,ne;return{render:T,hydrate:G,createApp:fu(T,G)}}function Wr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ot({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function bu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ta(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=pt(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ta(o,c)),c.type===kr&&(c.el=o.el)}}function Eu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ra(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ra(e)}function Ei(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const wu=Symbol.for("v-scx"),Iu=()=>We(wu);function nr(t,e,n){return Ca(t,e,n)}function Ca(t,e,n=Q){const{immediate:r,deep:s,flush:i,once:o}=n,c=oe({},n),a=e&&r||!e&&i!=="post";let l;if(Nn){if(i==="sync"){const g=Iu();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=Ve,g.resume=Ve,g.pause=Ve,g}}const f=ue;c.call=(g,R,P)=>Ge(g,f,R,P);let d=!1;i==="post"?c.scheduler=g=>{Ee(g,f&&f.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(g,R)=>{R?g():zs(g)}),c.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=Ll(t,e,c);return Nn&&(l?l.push(p):a&&p()),p}function Su(t,e,n){const r=this.proxy,s=ae(t)?t.includes(".")?Aa(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=Bn(this),c=Ca(s,i.bind(r),n);return o(),c}function Aa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Tu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Pe(e)}Modifiers`]||t[`${Ht(e)}Modifiers`];function Ru(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&Tu(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ae(f)?f.trim():f)),o.number&&(s=n.map(as)));let c,a=r[c=Hr(e)]||r[c=Hr(Pe(e))];!a&&i&&(a=r[c=Hr(Ht(e))]),a&&Ge(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ge(l,t,6,s)}}function Pa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!$(t)){const a=l=>{const f=Pa(l,e,!0);f&&(c=!0,oe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(se(t)&&r.set(t,null),null):(B(i)?i.forEach(a=>o[a]=null):oe(o,i),se(t)&&r.set(t,o),o)}function Or(t,e){return!t||!Ir(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Ht(e))||z(t,e))}function Kr(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:f,props:d,data:p,setupState:g,ctx:R,inheritAttrs:P}=t,H=fr(t);let M,k;try{if(n.shapeFlag&4){const O=s||r,V=O;M=Be(l.call(V,O,f,d,g,p,R)),k=c}else{const O=e;M=Be(O.length>1?O(d,{attrs:c,slots:o,emit:a}):O(d,null)),k=e.props?c:Cu(c)}}catch(O){Sn.length=0,Ar(O,t,1),M=_e(Lt)}let x=M;if(k&&P!==!1){const O=Object.keys(k),{shapeFlag:V}=x;O.length&&V&7&&(i&&O.some(Ds)&&(k=Au(k,i)),x=nn(x,k,!1,!0))}return n.dirs&&(x=nn(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&Gs(x,n.transition),M=x,fr(H),M}const Cu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ir(n))&&((e||(e={}))[n]=t[n]);return e},Au=(t,e)=>{const n={};for(const r in t)(!Ds(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?wi(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!Or(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?wi(r,o,l):!0:!!o;return!1}function wi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Or(n,i))return!0}return!1}function Ou({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Oa=t=>t.__isSuspense;function ku(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Hl(t)}const Qe=Symbol.for("v-fgt"),kr=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),zr=Symbol.for("v-stc"),Sn=[];let Se=null;function hr(t=!1){Sn.push(Se=t?null:[])}function Nu(){Sn.pop(),Se=Sn[Sn.length-1]||null}let kn=1;function Ii(t){kn+=t,t<0&&Se&&(Se.hasOnce=!0)}function ka(t){return t.dynamicChildren=kn>0?Se||Jt:null,Nu(),kn>0&&Se&&Se.push(t),t}function Na(t,e,n,r,s,i){return ka(Nr(t,e,n,r,s,i,!0))}function Da(t,e,n,r,s){return ka(_e(t,e,n,r,s,!0))}function pr(t){return t?t.__v_isVNode===!0:!1}function dn(t,e){return t.type===e.type&&t.key===e.key}const xa=({key:t})=>t??null,rr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ae(t)||fe(t)||$(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function Nr(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xa(e),ref:e&&rr(e),scopeId:aa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return c?(Ys(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ae(n)?8:16),kn>0&&!o&&Se&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Se.push(a),a}const _e=Du;function Du(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===nu)&&(t=Lt),pr(t)){const c=nn(t,e,!0);return n&&Ys(c,n),kn>0&&!i&&Se&&(c.shapeFlag&6?Se[Se.indexOf(t)]=c:Se.push(c)),c.patchFlag=-2,c}if(Ku(t)&&(t=t.__vccOpts),e){e=xu(e);let{class:c,style:a}=e;c&&!ae(c)&&(e.class=Us(c)),se(a)&&(Ks(a)&&!B(a)&&(a=oe({},a)),e.style=Ls(a))}const o=ae(t)?1:Oa(t)?128:jl(t)?64:se(t)?4:$(t)?2:0;return Nr(t,e,n,r,s,o,i,!0)}function xu(t){return t?Ks(t)||va(t)?oe({},t):t:null}function nn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?Lu(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&xa(l),ref:e&&e.ref?n&&i?B(i)?i.concat(rr(e)):[i,rr(e)]:rr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&Gs(f,a.clone(f)),f}function Ma(t=" ",e=0){return _e(kr,null,t,e)}function Mu(t="",e=!1){return e?(hr(),Da(Lt,null,t)):_e(Lt,null,t)}function Be(t){return t==null||typeof t=="boolean"?_e(Lt):B(t)?_e(Qe,null,t.slice()):pr(t)?pt(t):_e(kr,null,String(t))}function pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:nn(t)}function Ys(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ys(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!va(e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[Ma(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Us([e.class,r.class]));else if(s==="style")e.style=Ls([e.style,r.style]);else if(Ir(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function He(t,e,n,r=null){Ge(t,e,7,[n,r])}const Uu=ga();let Fu=0;function Hu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Uu,i={uid:Fu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ba(r,s),emitsOptions:Pa(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ru.bind(null,i),t.ce&&t.ce(i),i}let ue=null,gr,vs;{const t=Cr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};gr=e("__VUE_INSTANCE_SETTERS__",n=>ue=n),vs=e("__VUE_SSR_SETTERS__",n=>Nn=n)}const Bn=t=>{const e=ue;return gr(t),t.scope.on(),()=>{t.scope.off(),gr(e)}},Si=()=>{ue&&ue.scope.off(),gr(null)};function La(t){return t.vnode.shapeFlag&4}let Nn=!1;function $u(t,e=!1,n=!1){e&&vs(e);const{props:r,children:s}=t.vnode,i=La(t);du(t,r,i,e),mu(t,s,n);const o=i?Bu(t,e):void 0;return e&&vs(!1),o}function Bu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,su);const{setup:r}=n;if(r){It();const s=t.setupContext=r.length>1?Vu(t):null,i=Bn(t),o=$n(r,t,0,[t.props,s]),c=Mo(o);if(St(),i(),(c||t.sp)&&!wn(t)&&la(t),c){if(o.then(Si,Si),e)return o.then(a=>{Ti(t,a,e)}).catch(a=>{Ar(a,t,0)});t.asyncDep=o}else Ti(t,o,e)}else Ua(t,e)}function Ti(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=ta(e)),Ua(t,n)}let Ri;function Ua(t,e,n){const r=t.type;if(!t.render){if(!e&&Ri&&!r.render){const s=r.template||qs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=oe(oe({isCustomElement:i,delimiters:c},o),a);r.render=Ri(s,l)}}t.render=r.render||Ve}{const s=Bn(t);It();try{iu(t)}finally{St(),s()}}}const ju={get(t,e){return le(t,"get",""),t[e]}};function Vu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ju),slots:t.slots,emit:t.emit,expose:e}}function Dr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ta(Al(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in In)return In[n](t)},has(e,n){return n in e||n in In}})):t.proxy}function Wu(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function Ku(t){return $(t)&&"__vccOpts"in t}const ke=(t,e)=>xl(t,e,Nn);function Fa(t,e,n){const r=arguments.length;return r===2?se(e)&&!B(e)?pr(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pr(n)&&(n=[n]),_e(t,e,n))}const zu="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ys;const Ci=typeof window<"u"&&window.trustedTypes;if(Ci)try{ys=Ci.createPolicy("vue",{createHTML:t=>t})}catch{}const Ha=ys?t=>ys.createHTML(t):t=>t,Gu="http://www.w3.org/2000/svg",qu="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,Ai=Xe&&Xe.createElement("template"),Ju={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Xe.createElementNS(Gu,t):e==="mathml"?Xe.createElementNS(qu,t):n?Xe.createElement(t,{is:n}):Xe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xe.createTextNode(t),createComment:t=>Xe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ai.innerHTML=Ha(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Ai.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yu=Symbol("_vtc");function Xu(t,e,n){const r=t[Yu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pi=Symbol("_vod"),Qu=Symbol("_vsh"),Zu=Symbol(""),ef=/(^|;)\s*display\s*:/;function tf(t,e,n){const r=t.style,s=ae(n);let i=!1;if(n&&!s){if(e)if(ae(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&sr(r,c,"")}else for(const o in e)n[o]==null&&sr(r,o,"");for(const o in n)o==="display"&&(i=!0),sr(r,o,n[o])}else if(s){if(e!==n){const o=r[Zu];o&&(n+=";"+o),r.cssText=n,i=ef.test(n)}}else e&&t.removeAttribute("style");Pi in t&&(t[Pi]=i?r.display:"",t[Qu]&&(r.display="none"))}const Oi=/\s*!important$/;function sr(t,e,n){if(B(n))n.forEach(r=>sr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nf(t,e);Oi.test(n)?t.setProperty(Ht(r),n.replace(Oi,""),"important"):t[r]=n}}const ki=["Webkit","Moz","ms"],Gr={};function nf(t,e){const n=Gr[e];if(n)return n;let r=Pe(e);if(r!=="filter"&&r in t)return Gr[e]=r;r=Rr(r);for(let s=0;s<ki.length;s++){const i=ki[s]+r;if(i in t)return Gr[e]=i}return e}const Ni="http://www.w3.org/1999/xlink";function Di(t,e,n,r,s,i=al(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ni,e.slice(6,e.length)):t.setAttributeNS(Ni,e,n):n==null||i&&!Uo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":an(n)?String(n):n)}function xi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ha(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Uo(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function zt(t,e,n,r){t.addEventListener(e,n,r)}function rf(t,e,n,r){t.removeEventListener(e,n,r)}const Mi=Symbol("_vei");function sf(t,e,n,r,s=null){const i=t[Mi]||(t[Mi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=of(e);if(r){const l=i[e]=lf(r,s);zt(t,c,l,a)}else o&&(rf(t,c,o,a),i[e]=void 0)}}const Li=/(?:Once|Passive|Capture)$/;function of(t){let e;if(Li.test(t)){e={};let r;for(;r=t.match(Li);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ht(t.slice(2)),e]}let qr=0;const af=Promise.resolve(),cf=()=>qr||(af.then(()=>qr=0),qr=Date.now());function lf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ge(uf(r,n.value),e,5,[r])};return n.value=t,n.attached=cf(),n}function uf(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ui=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ff=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Xu(t,r,o):e==="style"?tf(t,n,r):Ir(e)?Ds(e)||sf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):df(t,e,r,o))?(xi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Di(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ae(r))?xi(t,Pe(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Di(t,e,r,o))};function df(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ui(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ui(e)&&ae(n)?!1:e in t}const Fi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>er(e,n):e};function hf(t){t.target.composing=!0}function Hi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jr=Symbol("_assign"),Sm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Jr]=Fi(s);const i=r||s.props&&s.props.type==="number";zt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=as(c)),t[Jr](c)}),n&&zt(t,"change",()=>{t.value=t.value.trim()}),e||(zt(t,"compositionstart",hf),zt(t,"compositionend",Hi),zt(t,"change",Hi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Jr]=Fi(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?as(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},pf=oe({patchProp:ff},Ju);let $i;function gf(){return $i||($i=vu(pf))}const mf=(...t)=>{const e=gf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=vf(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,_f(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _f(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vf(t){return ae(t)?document.querySelector(t):t}var Bi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,d=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(p=64)),r.push(n[f],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||d==null)throw new bf;const p=i<<2|c>>4;if(r.push(p),l!==64){const g=c<<4&240|l>>2;if(r.push(g),d!==64){const R=l<<6&192|d;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ef=function(t){const e=$a(t);return Ba.encodeByteArray(e,!0)},ja=function(t){return Ef(t).replace(/\./g,"")},Va=function(t){try{return Ba.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=()=>wf().__FIREBASE_DEFAULTS__,Sf=()=>{if(typeof process>"u"||typeof Bi>"u")return;const t=Bi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Va(t[1]);return e&&JSON.parse(e)},Xs=()=>{try{return If()||Sf()||Tf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rf=t=>{var e,n;return(n=(e=Xs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wa=()=>{var t;return(t=Xs())===null||t===void 0?void 0:t.config},Ka=t=>{var e;return(e=Xs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Af(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Pf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Of(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nf(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Df(){try{return typeof indexedDB=="object"}catch{return!1}}function xf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Mf,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jn.prototype.create)}}class jn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Lf(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Tt(s,c,r)}}function Lf(t,e){return t.replace(Uf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Uf=/\{\$([^}]+)}/g;function Ff(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ji(i)&&ji(o)){if(!mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ji(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Hf(t,e){const n=new $f(t,e);return n.subscribe.bind(n)}class $f{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Yr),s.error===void 0&&(s.error=Yr),s.complete===void 0&&(s.complete=Yr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wf(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vf(t){return t===Nt?void 0:t}function Wf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const zf={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Gf=X.INFO,qf={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Jf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=qf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class za{constructor(e){this.name=e,this._logLevel=Gf,this._logHandler=Jf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Yf=(t,e)=>e.some(n=>t instanceof n);let Vi,Wi;function Xf(){return Vi||(Vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qf(){return Wi||(Wi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ga=new WeakMap,bs=new WeakMap,qa=new WeakMap,Xr=new WeakMap,Qs=new WeakMap;function Zf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Et(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ga.set(n,t)}).catch(()=>{}),Qs.set(e,t),e}function ed(t){if(bs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bs.set(t,e)}let Es={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function td(t){Es=t(Es)}function nd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qr(this),e,...n);return qa.set(r,e.sort?e.sort():[e]),Et(r)}:Qf().includes(t)?function(...e){return t.apply(Qr(this),e),Et(Ga.get(this))}:function(...e){return Et(t.apply(Qr(this),e))}}function rd(t){return typeof t=="function"?nd(t):(t instanceof IDBTransaction&&ed(t),Yf(t,Xf())?new Proxy(t,Es):t)}function Et(t){if(t instanceof IDBRequest)return Zf(t);if(Xr.has(t))return Xr.get(t);const e=rd(t);return e!==t&&(Xr.set(t,e),Qs.set(e,t)),e}const Qr=t=>Qs.get(t);function sd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Et(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Et(o.result),a.oldVersion,a.newVersion,Et(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const id=["get","getKey","getAll","getAllKeys","count"],od=["put","add","delete","clear"],Zr=new Map;function Ki(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zr.get(e))return Zr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=od.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||id.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Zr.set(e,i),i}td(t=>({...t,get:(e,n,r)=>Ki(e,n)||t.get(e,n,r),has:(e,n)=>!!Ki(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ws="@firebase/app",zi="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new za("@firebase/app"),ld="@firebase/app-compat",ud="@firebase/analytics-compat",fd="@firebase/analytics",dd="@firebase/app-check-compat",hd="@firebase/app-check",pd="@firebase/auth",gd="@firebase/auth-compat",md="@firebase/database",_d="@firebase/data-connect",vd="@firebase/database-compat",yd="@firebase/functions",bd="@firebase/functions-compat",Ed="@firebase/installations",wd="@firebase/installations-compat",Id="@firebase/messaging",Sd="@firebase/messaging-compat",Td="@firebase/performance",Rd="@firebase/performance-compat",Cd="@firebase/remote-config",Ad="@firebase/remote-config-compat",Pd="@firebase/storage",Od="@firebase/storage-compat",kd="@firebase/firestore",Nd="@firebase/vertexai-preview",Dd="@firebase/firestore-compat",xd="firebase",Md="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="[DEFAULT]",Ld={[ws]:"fire-core",[ld]:"fire-core-compat",[fd]:"fire-analytics",[ud]:"fire-analytics-compat",[hd]:"fire-app-check",[dd]:"fire-app-check-compat",[pd]:"fire-auth",[gd]:"fire-auth-compat",[md]:"fire-rtdb",[_d]:"fire-data-connect",[vd]:"fire-rtdb-compat",[yd]:"fire-fn",[bd]:"fire-fn-compat",[Ed]:"fire-iid",[wd]:"fire-iid-compat",[Id]:"fire-fcm",[Sd]:"fire-fcm-compat",[Td]:"fire-perf",[Rd]:"fire-perf-compat",[Cd]:"fire-rc",[Ad]:"fire-rc-compat",[Pd]:"fire-gcs",[Od]:"fire-gcs-compat",[kd]:"fire-fst",[Dd]:"fire-fst-compat",[Nd]:"fire-vertex","fire-js":"fire-js",[xd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map,Ud=new Map,Ss=new Map;function Gi(t,e){try{t.container.addComponent(e)}catch(n){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Ss.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;Ss.set(e,t);for(const n of _r.values())Gi(n,t);for(const n of Ud.values())Gi(n,t);return!0}function Ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function je(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new jn("app","Firebase",Fd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=Md;function Ya(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Is,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(n||(n=Wa()),!n)throw wt.create("no-options");const i=_r.get(s);if(i){if(mr(n,i.options)&&mr(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const o=new Kf(s);for(const a of Ss.values())o.addComponent(a);const c=new Hd(n,r,o);return _r.set(s,c),c}function $d(t=Is){const e=_r.get(t);if(!e&&t===Is&&Wa())return Ya();if(!e)throw wt.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let s=(r=Ld[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(c.join(" "));return}Dn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="firebase-heartbeat-database",jd=1,xn="firebase-heartbeat-store";let es=null;function Xa(){return es||(es=sd(Bd,jd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xn)}catch(n){console.warn(n)}}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),es}async function Vd(t){try{const n=(await Xa()).transaction(xn),r=await n.objectStore(xn).get(Qa(t));return await n.done,r}catch(e){if(e instanceof Tt)it.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(n.message)}}}async function qi(t,e){try{const r=(await Xa()).transaction(xn,"readwrite");await r.objectStore(xn).put(e,Qa(t)),await r.done}catch(n){if(n instanceof Tt)it.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});it.warn(r.message)}}}function Qa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=1024,Kd=30*24*60*60*1e3;class zd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ji();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Kd}),this._storage.overwrite(this._heartbeatsCache))}catch(r){it.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ji(),{heartbeatsToSend:r,unsentEntries:s}=Gd(this._heartbeatsCache.heartbeats),i=ja(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return it.warn(n),""}}}function Ji(){return new Date().toISOString().substring(0,10)}function Gd(t,e=Wd){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Df()?xf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yi(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){Dn(new rn("platform-logger",e=>new ad(e),"PRIVATE")),Dn(new rn("heartbeat",e=>new zd(e),"PRIVATE")),Qt(ws,zi,t),Qt(ws,zi,"esm2017"),Qt("fire-js","")}Jd("");function Zs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Za(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yd=Za,ec=new jn("auth","Firebase",Za());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new za("@firebase/auth");function Xd(t,...e){vr.logLevel<=X.WARN&&vr.warn(`Auth (${Wn}): ${t}`,...e)}function ir(t,...e){vr.logLevel<=X.ERROR&&vr.error(`Auth (${Wn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,...e){throw ei(t,...e)}function Ke(t,...e){return ei(t,...e)}function tc(t,e,n){const r=Object.assign(Object.assign({},Yd()),{[e]:n});return new jn("auth","Firebase",r).create(e,{appName:t.name})}function st(t){return tc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ei(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ec.create(t,...e)}function U(t,e,...n){if(!t)throw ei(e,...n)}function tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ir(e),new Error(e)}function ot(t,e){t||tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qd(){return Xi()==="http:"||Xi()==="https:"}function Xi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qd()||Of()||"connection"in navigator)?navigator.onLine:!0}function eh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Af()||kf()}get(){return Zd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new Kn(3e4,6e4);function Rt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ct(t,e,n,r,s={}){return rc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Vn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:a},i);return Pf()||(l.referrerPolicy="no-referrer"),nc.fetch()(sc(t,t.config.apiHost,n,c),l)})}async function rc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},th),e);try{const s=new sh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Zn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Zn(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw tc(t,f,l);xe(t,f)}}catch(s){if(s instanceof Tt)throw s;xe(t,"network-request-failed",{message:String(s)})}}async function zn(t,e,n,r,s={}){const i=await Ct(t,e,n,r,s);return"mfaPendingCredential"in i&&xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function sc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ti(t.config,s):`${t.config.apiScheme}://${s}`}function rh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),nh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(t,e,r);return s.customData._tokenResponse=n,s}function Qi(t){return t!==void 0&&t.enterprise!==void 0}class ih{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function oh(t,e){return Ct(t,"GET","/v2/recaptchaConfig",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(t,e){return Ct(t,"POST","/v1/accounts:delete",e)}async function ic(t,e){return Ct(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ch(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=ni(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Tn(ts(s.auth_time)),issuedAtTime:Tn(ts(s.iat)),expirationTime:Tn(ts(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ts(t){return Number(t)*1e3}function ni(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ir("JWT malformed, contained fewer than 3 sections"),null;try{const s=Va(n);return s?JSON.parse(s):(ir("Failed to decode base64 JWT payload"),null)}catch(s){return ir("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zi(t){const e=ni(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&lh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mn(t,ic(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?oc(i.providerUserInfo):[],c=dh(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Rs(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function fh(t){const e=ct(t);await yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oc(t){return t.map(e=>{var{providerId:n}=e,r=Zs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(t,e){const n=await rc(t,{},async()=>{const r=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=sc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",nc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ph(t,e){return Ct(t,"POST","/v2/accounts:revokeToken",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=Zi(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Zt;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zt,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ch(this,e)}reload(){return fh(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await Mn(this,ah(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,H=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,M=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:O,isAnonymous:V,providerData:re,stsTokenManager:Z}=n;U(x&&Z,e,"internal-error");const Te=Zt.fromJSON(this.name,Z);U(typeof x=="string",e,"internal-error"),ft(d,e.name),ft(p,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof V=="boolean",e,"internal-error"),ft(g,e.name),ft(R,e.name),ft(P,e.name),ft(H,e.name),ft(M,e.name),ft(k,e.name);const Re=new nt({uid:x,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:V,photoURL:R,phoneNumber:g,tenantId:P,stsTokenManager:Te,createdAt:M,lastLoginAt:k});return re&&Array.isArray(re)&&(Re.providerData=re.map(Ce=>Object.assign({},Ce))),H&&(Re._redirectEventId=H),Re}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zt;s.updateFromServerResponse(n);const i=new nt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?oc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Zt;c.updateFromIdToken(r);const a=new nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Rs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new Map;function rt(t){ot(t instanceof Function,"Expected a class definition");let e=eo.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ac.type="NONE";const to=ac;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e,n){return`firebase:${t}:${e}:${n}`}class en{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=or(this.userKey,s.apiKey,i),this.fullPersistenceKey=or("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new en(rt(to),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rt(to);const o=or(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const d=nt._fromJSON(e,f);l!==i&&(c=d),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new en(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new en(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hc(e))return"Blackberry";if(pc(e))return"Webos";if(lc(e))return"Safari";if((e.includes("chrome/")||uc(e))&&!e.includes("edge/"))return"Chrome";if(dc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cc(t=ge()){return/firefox\//i.test(t)}function lc(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uc(t=ge()){return/crios\//i.test(t)}function fc(t=ge()){return/iemobile/i.test(t)}function dc(t=ge()){return/android/i.test(t)}function hc(t=ge()){return/blackberry/i.test(t)}function pc(t=ge()){return/webos/i.test(t)}function ri(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gh(t=ge()){var e;return ri(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mh(){return Nf()&&document.documentMode===10}function gc(t=ge()){return ri(t)||dc(t)||pc(t)||hc(t)||/windows phone/i.test(t)||fc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t,e=[]){let n;switch(t){case"Browser":n=no(ge());break;case"Worker":n=`${no(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(t,e={}){return Ct(t,"GET","/v2/passwordPolicy",Rt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=6;class bh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ro(this),this.idTokenSubscription=new ro(this),this.beforeStateQueue=new _h(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ec,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ic(this,{idToken:e}),r=await nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(st(this));const n=e?ct(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vh(this),n=new bh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ph(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Xd(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $t(t){return ct(t)}class ro{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hf(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wh(t){xr=t}function _c(t){return xr.loadJS(t)}function Ih(){return xr.recaptchaEnterpriseScript}function Sh(){return xr.gapiScript}function Th(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Rh="recaptcha-enterprise",Ch="NO_RECAPTCHA";class Ah{constructor(e){this.type=Rh,this.auth=$t(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{oh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new ih(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;Qi(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ch)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Qi(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Ih();a.length!==0&&(a+=c),_c(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function so(t,e,n,r=!1){const s=new Ah(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Cs(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await so(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await so(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t,e){const n=Ja(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(mr(i,e??{}))return s;xe(s,"already-initialized")}return n.initialize({options:e})}function Oh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kh(t,e,n){const r=$t(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vc(e),{host:o,port:c}=Nh(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Dh()}function vc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nh(t){const e=vc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:io(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:io(o)}}}function io(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}async function xh(t,e){return Ct(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(t,e){return zn(t,"POST","/v1/accounts:signInWithPassword",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",Rt(t,e))}async function Uh(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends si{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ln(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ln(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cs(e,n,"signInWithPassword",Mh);case"emailLink":return Lh(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cs(e,r,"signUpPassword",xh);case"emailLink":return Uh(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(t,e){return zn(t,"POST","/v1/accounts:signInWithIdp",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="http://localhost";class Ut extends si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ut(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tn(e,n)}buildRequest(){const e={requestUri:Fh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $h(t){const e=gn(mn(t)).link,n=e?gn(mn(e)).deep_link_id:null,r=gn(mn(t)).deep_link_id;return(r?gn(mn(r)).link:null)||r||n||e||t}class ii{constructor(e){var n,r,s,i,o,c;const a=gn(mn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,d=Hh((s=a.mode)!==null&&s!==void 0?s:null);U(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=$h(e);try{return new ii(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.providerId=cn.PROVIDER_ID}static credential(e,n){return Ln._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ii.parseLink(n);return U(r,"argument-error"),Ln._fromEmailAndCode(e,r.code,r.tenantId)}}cn.PROVIDER_ID="password";cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends yc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Gn{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ut._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Gn{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Gn{constructor(){super("twitter.com")}static credential(e,n){return Ut._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bh(t,e){return zn(t,"POST","/v1/accounts:signUp",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nt._fromIdTokenResponse(e,r,s),o=oo(r);return new Ft({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=oo(r);return new Ft({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function oo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Tt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,br.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new br(e,n,r,s)}}function bc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?br._fromErrorAndOperation(t,i,e,r):i})}async function jh(t,e,n=!1){const r=await Mn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ft._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vh(t,e,n=!1){const{auth:r}=t;if(je(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const i=await Mn(t,bc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=ni(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),Ft._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(t,e,n=!1){if(je(t.app))return Promise.reject(st(t));const r="signIn",s=await bc(t,r,e),i=await Ft._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Wh(t,e){return Ec($t(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(t){const e=$t(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Tm(t,e,n){if(je(t.app))return Promise.reject(st(t));const r=$t(t),o=await Cs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Bh).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&wc(t),a}),c=await Ft._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Rm(t,e,n){return je(t.app)?Promise.reject(st(t)):Wh(ct(t),cn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wc(t),r})}function Kh(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function zh(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function Gh(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function qh(t){return ct(t).signOut()}const Er="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Er,"1"),this.storage.removeItem(Er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=1e3,Yh=10;class Sc extends Ic{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Yh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Jh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sc.type="LOCAL";const Xh=Sc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Ic{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tc.type="SESSION";const Rc=Tc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Mr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Qh(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=oi("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return window}function ep(t){ze().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function tp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function np(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rp(){return Cc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="firebaseLocalStorageDb",sp=1,wr="firebaseLocalStorage",Pc="fbase_key";class qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lr(t,e){return t.transaction([wr],e?"readwrite":"readonly").objectStore(wr)}function ip(){const t=indexedDB.deleteDatabase(Ac);return new qn(t).toPromise()}function As(){const t=indexedDB.open(Ac,sp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wr,{keyPath:Pc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wr)?e(r):(r.close(),await ip(),e(await As()))})})}async function ao(t,e,n){const r=Lr(t,!0).put({[Pc]:e,value:n});return new qn(r).toPromise()}async function op(t,e){const n=Lr(t,!1).get(e),r=await new qn(n).toPromise();return r===void 0?null:r.value}function co(t,e){const n=Lr(t,!0).delete(e);return new qn(n).toPromise()}const ap=800,cp=3;class Oc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await As(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mr._getInstance(rp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tp(),!this.activeServiceWorker)return;this.sender=new Zh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||np()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await As();return await ao(e,Er,"1"),await co(e,Er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ao(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>op(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>co(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Lr(s,!1).getAll();return new qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ap)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oc.type="LOCAL";const lp=Oc;new Kn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e){return e?rt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fp(t){return Ec(t.auth,new ai(t),t.bypassAuthState)}function dp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Vh(n,new ai(t),t.bypassAuthState)}async function hp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),jh(n,new ai(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fp;case"linkViaPopup":case"linkViaRedirect":return hp;case"reauthViaPopup":case"reauthViaRedirect":return dp;default:xe(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Kn(2e3,1e4);class qt extends kc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=oi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pp.get())};e()}}qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="pendingRedirect",ar=new Map;class mp extends kc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ar.get(this.auth._key());if(!e){try{const r=await _p(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ar.set(this.auth._key(),e)}return this.bypassAuthState||ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _p(t,e){const n=bp(e),r=yp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function vp(t,e){ar.set(t._key(),e)}function yp(t){return rt(t._redirectPersistence)}function bp(t){return or(gp,t.config.apiKey,t.name)}async function Ep(t,e,n=!1){if(je(t.app))return Promise.reject(st(t));const r=$t(t),s=up(r,e),o=await new mp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=10*60*1e3;class Ip{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wp&&this.cachedEventUids.clear(),this.cachedEventUids.has(lo(e))}saveEventToCache(e){this.cachedEventUids.add(lo(e)),this.lastProcessedEventTime=Date.now()}}function lo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(t,e={}){return Ct(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cp=/^https?/;async function Ap(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tp(t);for(const n of e)try{if(Pp(n))return}catch{}xe(t,"unauthorized-domain")}function Pp(t){const e=Ts(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Cp.test(n))return!1;if(Rp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=new Kn(3e4,6e4);function uo(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kp(t){return new Promise((e,n)=>{var r,s,i;function o(){uo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uo(),n(Ke(t,"network-request-failed"))},timeout:Op.get()})}if(!((s=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ze().gapi)===null||i===void 0)&&i.load)o();else{const c=Th("iframefcb");return ze()[c]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},_c(`${Sh()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw cr=null,e})}let cr=null;function Np(t){return cr=cr||kp(t),cr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=new Kn(5e3,15e3),xp="__/auth/iframe",Mp="emulator/auth/iframe",Lp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Up=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fp(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ti(e,Mp):`https://${t.config.authDomain}/${xp}`,r={apiKey:e.apiKey,appName:t.name,v:Wn},s=Up.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vn(r).slice(1)}`}async function Hp(t){const e=await Np(t),n=ze().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Fp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),c=ze().setTimeout(()=>{i(o)},Dp.get());function a(){ze().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bp=500,jp=600,Vp="_blank",Wp="http://localhost";class fo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kp(t,e,n,r=Bp,s=jp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},$p),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ge().toLowerCase();n&&(c=uc(l)?Vp:n),cc(l)&&(e=e||Wp,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[g,R])=>`${p}${g}=${R},`,"");if(gh(l)&&c!=="_self")return zp(e||"",c),new fo(null);const d=window.open(e||"",c,f);U(d,t,"popup-blocked");try{d.focus()}catch{}return new fo(d)}function zp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="__/auth/handler",qp="emulator/auth/handler",Jp=encodeURIComponent("fac");async function ho(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wn,eventId:s};if(e instanceof yc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ff(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Gn){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${Jp}=${encodeURIComponent(a)}`:"";return`${Yp(t)}?${Vn(c).slice(1)}${l}`}function Yp({config:t}){return t.emulator?ti(t,qp):`https://${t.authDomain}/${Gp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="webStorageSupport";class Xp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rc,this._completeRedirectFn=Ep,this._overrideRedirectResult=vp}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ho(e,n,r,Ts(),s);return Kp(e,o,oi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ho(e,n,r,Ts(),s);return ep(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Hp(e),r=new Ip(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ns,{type:ns},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ns];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ap(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gc()||lc()||ri()}}const Qp=Xp;var po="@firebase/auth",go="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tg(t){Dn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mc(t)},l=new Eh(r,s,i,a);return Oh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new rn("auth-internal",e=>{const n=$t(e.getProvider("auth").getImmediate());return(r=>new Zp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(po,go,eg(t)),Qt(po,go,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=5*60,rg=Ka("authIdTokenMaxAge")||ng;let mo=null;const sg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rg)return;const s=n==null?void 0:n.token;mo!==s&&(mo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Dc(t=$d()){const e=Ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ph(t,{popupRedirectResolver:Qp,persistence:[lp,Xh,Rc]}),r=Ka("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=sg(i.toString());zh(n,o,()=>o(n.currentUser)),Kh(n,c=>o(c))}}const s=Rf("auth");return s&&kh(n,`http://${s}`),n}function ig(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ig().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tg("Browser");/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Gt=typeof document<"u";function xc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function og(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xc(t.default)}const J=Object.assign;function rs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Me(s)?s.map(t):t(s)}return n}const Rn=()=>{},Me=Array.isArray,Mc=/#/g,ag=/&/g,cg=/\//g,lg=/=/g,ug=/\?/g,Lc=/\+/g,fg=/%5B/g,dg=/%5D/g,Uc=/%5E/g,hg=/%60/g,Fc=/%7B/g,pg=/%7C/g,Hc=/%7D/g,gg=/%20/g;function ci(t){return encodeURI(""+t).replace(pg,"|").replace(fg,"[").replace(dg,"]")}function mg(t){return ci(t).replace(Fc,"{").replace(Hc,"}").replace(Uc,"^")}function Ps(t){return ci(t).replace(Lc,"%2B").replace(gg,"+").replace(Mc,"%23").replace(ag,"%26").replace(hg,"`").replace(Fc,"{").replace(Hc,"}").replace(Uc,"^")}function _g(t){return Ps(t).replace(lg,"%3D")}function vg(t){return ci(t).replace(Mc,"%23").replace(ug,"%3F")}function yg(t){return t==null?"":vg(t).replace(cg,"%2F")}function Un(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const bg=/\/$/,Eg=t=>t.replace(bg,"");function ss(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Tg(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Un(o)}}function wg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _o(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ig(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&sn(e.matched[r],n.matched[s])&&$c(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $c(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Sg(t[n],e[n]))return!1;return!0}function Sg(t,e){return Me(t)?vo(t,e):Me(e)?vo(e,t):t===e}function vo(t,e){return Me(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Tg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fn;(function(t){t.pop="pop",t.push="push"})(Fn||(Fn={}));var Cn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Cn||(Cn={}));function Rg(t){if(!t)if(Gt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Eg(t)}const Cg=/^[^#]+#/;function Ag(t,e){return t.replace(Cg,"#")+e}function Pg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ur=()=>({left:window.scrollX,top:window.scrollY});function Og(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Pg(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yo(t,e){return(history.state?history.state.position-e:-1)+t}const Os=new Map;function kg(t,e){Os.set(t,e)}function Ng(t){const e=Os.get(t);return Os.delete(t),e}let Dg=()=>location.protocol+"//"+location.host;function Bc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),_o(a,"")}return _o(n,t)+r+s}function xg(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const g=Bc(t,location),R=n.value,P=e.value;let H=0;if(p){if(n.value=g,e.value=p,o&&o===R){o=null;return}H=P?p.position-P.position:0}else r(g);s.forEach(M=>{M(n.value,R,{delta:H,type:Fn.pop,direction:H?H>0?Cn.forward:Cn.back:Cn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const g=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(J({},p.state,{scroll:Ur()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:d}}function bo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ur():null}}function Mg(t){const{history:e,location:n}=window,r={value:Bc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:Dg()+t+a;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(a,l){const f=J({},e.state,bo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=J({},s.value,e.state,{forward:a,scroll:Ur()});i(f.current,f,!0);const d=J({},bo(r.value,a,null),{position:f.position+1},l);i(a,d,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Lg(t){t=Rg(t);const e=Mg(t),n=xg(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:Ag.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ug(t){return typeof t=="string"||t&&typeof t=="object"}function jc(t){return typeof t=="string"||typeof t=="symbol"}const Vc=Symbol("");var Eo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Eo||(Eo={}));function on(t,e){return J(new Error,{type:t,[Vc]:!0},e)}function Ye(t,e){return t instanceof Error&&Vc in t&&(e==null||!!(t.type&e))}const wo="[^/]+?",Fg={sensitive:!1,strict:!1,start:!0,end:!0},Hg=/[.+*?^${}()[\]/\\]/g;function $g(t,e){const n=J({},Fg,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Hg,"\\$&"),g+=40;else if(p.type===1){const{value:R,repeatable:P,optional:H,regexp:M}=p;i.push({name:R,repeatable:P,optional:H});const k=M||wo;if(k!==wo){g+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${k}): `+O.message)}}let x=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(x=H&&l.length<2?`(?:/${x})`:"/"+x),H&&(x+="?"),s+=x,g+=20,H&&(g+=-8),P&&(g+=-20),k===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",R=i[p-1];d[R.name]=g&&R.repeatable?g.split("/"):g}return d}function a(l){let f="",d=!1;for(const p of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:R,repeatable:P,optional:H}=g,M=R in l?l[R]:"";if(Me(M)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const k=Me(M)?M.join("/"):M;if(!k)if(H)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${R}"`);f+=k}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Bg(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Wc(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Bg(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Io(r))return 1;if(Io(s))return-1}return s.length-r.length}function Io(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jg={type:0,value:""},Vg=/[a-zA-Z0-9_]/;function Wg(t){if(!t)return[[]];if(t==="/")return[[jg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&d(),o()):a===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Vg.test(a)?p():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function Kg(t,e,n){const r=$g(Wg(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zg(t,e){const n=[],r=new Map;e=Co({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const R=!g,P=To(d);P.aliasOf=g&&g.record;const H=Co(e,d),M=[P];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of O)M.push(To(J({},P,{components:g?g.record.components:P.components,path:V,aliasOf:g?g.record:P})))}let k,x;for(const O of M){const{path:V}=O;if(p&&V[0]!=="/"){const re=p.record.path,Z=re[re.length-1]==="/"?"":"/";O.path=p.record.path+(V&&Z+V)}if(k=Kg(O,p,H),g?g.alias.push(k):(x=x||k,x!==k&&x.alias.push(k),R&&d.name&&!Ro(k)&&o(d.name)),Kc(k)&&a(k),P.children){const re=P.children;for(let Z=0;Z<re.length;Z++)i(re[Z],k,g&&g.children[Z])}g=g||k}return x?()=>{o(x)}:Rn}function o(d){if(jc(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function a(d){const p=Jg(d,n);n.splice(p,0,d),d.record.name&&!Ro(d)&&r.set(d.record.name,d)}function l(d,p){let g,R={},P,H;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw on(1,{location:d});H=g.record.name,R=J(So(p.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&So(d.params,g.keys.map(x=>x.name))),P=g.stringify(R)}else if(d.path!=null)P=d.path,g=n.find(x=>x.re.test(P)),g&&(R=g.parse(P),H=g.record.name);else{if(g=p.name?r.get(p.name):n.find(x=>x.re.test(p.path)),!g)throw on(1,{location:d,currentLocation:p});H=g.record.name,R=J({},p.params,d.params),P=g.stringify(R)}const M=[];let k=g;for(;k;)M.unshift(k.record),k=k.parent;return{name:H,path:P,params:R,matched:M,meta:qg(M)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function So(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function To(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Gg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Gg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ro(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qg(t){return t.reduce((e,n)=>J(e,n.meta),{})}function Co(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Jg(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Wc(t,e[i])<0?r=i:n=i+1}const s=Yg(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Yg(t){let e=t;for(;e=e.parent;)if(Kc(e)&&Wc(t,e)===0)return e}function Kc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Xg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Lc," "),o=i.indexOf("="),c=Un(o<0?i:i.slice(0,o)),a=o<0?null:Un(i.slice(o+1));if(c in e){let l=e[c];Me(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Ao(t){let e="";for(let n in t){const r=t[n];if(n=_g(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Me(r)?r.map(i=>i&&Ps(i)):[r&&Ps(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Qg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Me(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Zg=Symbol(""),Po=Symbol(""),Fr=Symbol(""),zc=Symbol(""),ks=Symbol("");function hn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(on(4,{from:n,to:e})):p instanceof Error?a(p):Ug(p)?a(on(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},f=i(()=>t.call(r&&r.instances[s],e,n,l));let d=Promise.resolve(f);t.length<3&&(d=d.then(l)),d.catch(p=>a(p))})}function is(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(xc(a)){const f=(a.__vccOpts||a)[e];f&&i.push(gt(f,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=og(f)?f.default:f;o.mods[c]=f,o.components[c]=d;const g=(d.__vccOpts||d)[e];return g&&gt(g,n,r,o,c,s)()}))}}return i}function Oo(t){const e=We(Fr),n=We(zc),r=ke(()=>{const a=xt(t.to);return e.resolve(a)}),s=ke(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(sn.bind(null,f));if(p>-1)return p;const g=ko(a[l-2]);return l>1&&ko(f)===g&&d[d.length-1].path!==g?d.findIndex(sn.bind(null,a[l-2])):p}),i=ke(()=>s.value>-1&&rm(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&$c(n.params,r.value.params));function c(a={}){return nm(a)?e[xt(t.replace)?"replace":"push"](xt(t.to)).catch(Rn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const em=ca({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oo,setup(t,{slots:e}){const n=Hn(Oo(t)),{options:r}=We(Fr),s=ke(()=>({[No(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[No(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Fa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tm=em;function nm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Me(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ko(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const No=(t,e,n)=>t??e??n,sm=ca({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=We(ks),s=ke(()=>t.route||r.value),i=We(Po,0),o=ke(()=>{let l=xt(i);const{matched:f}=s.value;let d;for(;(d=f[l])&&!d.components;)l++;return l}),c=ke(()=>s.value.matched[o.value]);tr(Po,ke(()=>o.value+1)),tr(Zg,c),tr(ks,s);const a=Pl();return nr(()=>[a.value,c.value,t.name],([l,f,d],[p,g,R])=>{f&&(f.instances[d]=l,g&&g!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!sn(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,d=c.value,p=d&&d.components[f];if(!p)return Do(n.default,{Component:p,route:l});const g=d.props[f],R=g?g===!0?l.params:typeof g=="function"?g(l):g:null,H=Fa(p,J({},R,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(d.instances[f]=null)},ref:a}));return Do(n.default,{Component:H,route:l})||H}}});function Do(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const im=sm;function om(t){const e=zg(t.routes,t),n=t.parseQuery||Xg,r=t.stringifyQuery||Ao,s=t.history,i=hn(),o=hn(),c=hn(),a=Ol(dt);let l=dt;Gt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=rs.bind(null,v=>""+v),d=rs.bind(null,yg),p=rs.bind(null,Un);function g(v,A){let T,N;return jc(v)?(T=e.getRecordMatcher(v),N=A):N=v,e.addRoute(N,T)}function R(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function H(v){return!!e.getRecordMatcher(v)}function M(v,A){if(A=J({},A||a.value),typeof v=="string"){const h=ss(n,v,A.path),m=e.resolve({path:h.path},A),y=s.createHref(h.fullPath);return J(h,m,{params:p(m.params),hash:Un(h.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=J({},v,{path:ss(n,v.path,A.path).path});else{const h=J({},v.params);for(const m in h)h[m]==null&&delete h[m];T=J({},v,{params:d(h)}),A.params=d(A.params)}const N=e.resolve(T,A),G=v.hash||"";N.params=f(p(N.params));const ne=wg(r,J({},v,{hash:mg(G),path:N.path})),u=s.createHref(ne);return J({fullPath:ne,hash:G,query:r===Ao?Qg(v.query):v.query||{}},N,{redirectedFrom:void 0,href:u})}function k(v){return typeof v=="string"?ss(n,v,a.value.path):J({},v)}function x(v,A){if(l!==v)return on(8,{from:A,to:v})}function O(v){return Z(v)}function V(v){return O(J(k(v),{replace:!0}))}function re(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let N=typeof T=="function"?T(v):T;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=k(N):{path:N},N.params={}),J({query:v.query,hash:v.hash,params:N.path!=null?{}:v.params},N)}}function Z(v,A){const T=l=M(v),N=a.value,G=v.state,ne=v.force,u=v.replace===!0,h=re(T);if(h)return Z(J(k(h),{state:typeof h=="object"?J({},G,h.state):G,force:ne,replace:u}),A||T);const m=T;m.redirectedFrom=A;let y;return!ne&&Ig(r,N,T)&&(y=on(16,{to:m,from:N}),Ue(N,N,!0,!1)),(y?Promise.resolve(y):Ce(m,N)).catch(_=>Ye(_)?Ye(_,2)?_:ut(_):W(_,m,N)).then(_=>{if(_){if(Ye(_,2))return Z(J({replace:u},k(_.to),{state:typeof _.to=="object"?J({},G,_.to.state):G,force:ne}),A||m)}else _=At(m,N,!0,u,G);return lt(m,N,_),_})}function Te(v,A){const T=x(v,A);return T?Promise.reject(T):Promise.resolve()}function Re(v){const A=Vt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Ce(v,A){let T;const[N,G,ne]=am(v,A);T=is(N.reverse(),"beforeRouteLeave",v,A);for(const h of N)h.leaveGuards.forEach(m=>{T.push(gt(m,v,A))});const u=Te.bind(null,v,A);return T.push(u),Ae(T).then(()=>{T=[];for(const h of i.list())T.push(gt(h,v,A));return T.push(u),Ae(T)}).then(()=>{T=is(G,"beforeRouteUpdate",v,A);for(const h of G)h.updateGuards.forEach(m=>{T.push(gt(m,v,A))});return T.push(u),Ae(T)}).then(()=>{T=[];for(const h of ne)if(h.beforeEnter)if(Me(h.beforeEnter))for(const m of h.beforeEnter)T.push(gt(m,v,A));else T.push(gt(h.beforeEnter,v,A));return T.push(u),Ae(T)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),T=is(ne,"beforeRouteEnter",v,A,Re),T.push(u),Ae(T))).then(()=>{T=[];for(const h of o.list())T.push(gt(h,v,A));return T.push(u),Ae(T)}).catch(h=>Ye(h,8)?h:Promise.reject(h))}function lt(v,A,T){c.list().forEach(N=>Re(()=>N(v,A,T)))}function At(v,A,T,N,G){const ne=x(v,A);if(ne)return ne;const u=A===dt,h=Gt?history.state:{};T&&(N||u?s.replace(v.fullPath,J({scroll:u&&h&&h.scroll},G)):s.push(v.fullPath,G)),a.value=v,Ue(v,A,T,u),ut()}let Le;function ln(){Le||(Le=s.listen((v,A,T)=>{if(!Jn.listening)return;const N=M(v),G=re(N);if(G){Z(J(G,{replace:!0}),N).catch(Rn);return}l=N;const ne=a.value;Gt&&kg(yo(ne.fullPath,T.delta),Ur()),Ce(N,ne).catch(u=>Ye(u,12)?u:Ye(u,2)?(Z(u.to,N).then(h=>{Ye(h,20)&&!T.delta&&T.type===Fn.pop&&s.go(-1,!1)}).catch(Rn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),W(u,N,ne))).then(u=>{u=u||At(N,ne,!1),u&&(T.delta&&!Ye(u,8)?s.go(-T.delta,!1):T.type===Fn.pop&&Ye(u,20)&&s.go(-1,!1)),lt(N,ne,u)}).catch(Rn)}))}let Bt=hn(),ie=hn(),Y;function W(v,A,T){ut(v);const N=ie.list();return N.length?N.forEach(G=>G(v,A,T)):console.error(v),Promise.reject(v)}function qe(){return Y&&a.value!==dt?Promise.resolve():new Promise((v,A)=>{Bt.add([v,A])})}function ut(v){return Y||(Y=!v,ln(),Bt.list().forEach(([A,T])=>v?T(v):A()),Bt.reset()),v}function Ue(v,A,T,N){const{scrollBehavior:G}=t;if(!Gt||!G)return Promise.resolve();const ne=!T&&Ng(yo(v.fullPath,0))||(N||!T)&&history.state&&history.state.scroll||null;return ra().then(()=>G(v,A,ne)).then(u=>u&&Og(u)).catch(u=>W(u,v,A))}const me=v=>s.go(v);let jt;const Vt=new Set,Jn={currentRoute:a,listening:!0,addRoute:g,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:H,getRoutes:P,resolve:M,options:t,push:O,replace:V,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ie.add,isReady:qe,install(v){const A=this;v.component("RouterLink",tm),v.component("RouterView",im),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>xt(a)}),Gt&&!jt&&a.value===dt&&(jt=!0,O(s.location).catch(G=>{}));const T={};for(const G in dt)Object.defineProperty(T,G,{get:()=>a.value[G],enumerable:!0});v.provide(Fr,A),v.provide(zc,Qo(T)),v.provide(ks,a);const N=v.unmount;Vt.add(v),v.unmount=function(){Vt.delete(v),Vt.size<1&&(l=dt,Le&&Le(),Le=null,a.value=dt,jt=!1,Y=!1),N()}}};function Ae(v){return v.reduce((A,T)=>A.then(()=>Re(T)),Promise.resolve())}return Jn}function am(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>sn(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>sn(l,a))||s.push(a))}return[n,r,s]}function cm(){return We(Fr)}const Gc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},lm={class:"header"},um={__name:"Header",setup(t){const e=()=>{qh(Dc()).then(()=>{router.push("/signin")})};return(n,r)=>(hr(),Na("div",lm,[r[1]||(r[1]=Ma(" header ")),Nr("button",{onClick:r[0]||(r[0]=s=>e())},"logOut")]))}},fm=Gc(um,[["__scopeId","data-v-efeb33c5"]]),dm={class:"App"},hm={class:"content"},pm={__name:"App",setup(t){cm();let e=Hn({});return da(()=>{Gh(Dc(),n=>{e.value=n})}),(n,r)=>{var i;const s=tu("router-view");return hr(),Na("div",dm,[(i=xt(e).value)!=null&&i.uid?(hr(),Da(fm,{key:0})):Mu("",!0),Nr("div",hm,[_e(s)])])}}},gm=Gc(pm,[["__scopeId","data-v-cdffef3c"]]),mm="modulepreload",_m=function(t){return"/"+t},xo={},os=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(a=>{if(a=_m(a),a in xo)return;xo[a]=!0;const l=a.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${f}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":mm,l||(d.as="script"),d.crossOrigin="",d.href=a,c&&d.setAttribute("nonce",c),document.head.appendChild(d),l)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},vm=[{path:"/",name:"main",component:()=>os(()=>import("./Main-Bd4YAkZD.js"),__vite__mapDeps([0,1]))},{path:"/signin",name:"signin",component:()=>os(()=>import("./SignIn-Cc2NcG_0.js"),[])},{path:"/signup",name:"signup",component:()=>os(()=>import("./SignUp-DupVSKQT.js"),[])}],ym=om({history:Lg(),routes:vm});var bm="firebase",Em="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(bm,Em,"app");const wm={apiKey:"AIzaSyDfAqcEiLceMXThDtKSFaWYhke2BYMwHD4",authDomain:"tapp-497ad.firebaseapp.com",projectId:"tapp-497ad",storageBucket:"tapp-497ad.appspot.com",messagingSenderId:"1056111856158",appId:"1:1056111856158:web:30674d686d70dd82a9fc0f",measurementId:"G-85PYBH32MV"};Ya(wm);mf(gm).use(ym).mount("#app");export{Qe as F,Gc as _,Nr as a,Tm as b,Na as c,Dc as g,hr as o,Pl as r,Rm as s,cm as u,Sm as v,Im as w};
