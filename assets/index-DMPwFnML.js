const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SignIn-C0HCkveI.js","assets/SignIn-DKfO65z7.css","assets/SignUp-DqUdveZh.js","assets/SignUp-k7rquBz5.css","assets/Main-D7Ewro4S.js","assets/Main-B1YgICRE.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hs(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const te={},en=[],ze=()=>{},gl=()=>!1,Cr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$s=t=>t.startsWith("onUpdate:"),ue=Object.assign,Bs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ml=Object.prototype.hasOwnProperty,Y=(t,e)=>ml.call(t,e),$=Array.isArray,En=t=>Ar(t)==="[object Map]",_l=t=>Ar(t)==="[object Set]",B=t=>typeof t=="function",fe=t=>typeof t=="string",fn=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",qo=t=>(le(t)||B(t))&&B(t.then)&&B(t.catch),vl=Object.prototype.toString,Ar=t=>vl.call(t),yl=t=>Ar(t).slice(8,-1),bl=t=>Ar(t)==="[object Object]",js=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wn=Hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},El=/-(\w)/g,De=Pr(t=>t.replace(El,(e,n)=>n?n.toUpperCase():"")),wl=/\B([A-Z])/g,Wt=Pr(t=>t.replace(wl,"-$1").toLowerCase()),Or=Pr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wr=Pr(t=>t?`on${Or(t)}`:""),It=(t,e)=>!Object.is(t,e),sr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Go=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},hs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ei;const kr=()=>Ei||(Ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vs(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?Rl(r):Vs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(fe(t)||le(t))return t}const Il=/;(?![^(]*\))/g,Sl=/:([^]+)/,Tl=/\/\*[^]*?\*\//g;function Rl(t){const e={};return t.replace(Tl,"").split(Il).forEach(n=>{if(n){const r=n.split(Sl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ws(t){let e="";if(fe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Ws(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Al=Hs(Cl);function Jo(t){return!!t||t===""}/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _e;class Yo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_e,!e&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_e;try{return _e=this,e()}finally{_e=n}}}on(){_e=this}off(){_e=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Xo(t){return new Yo(t)}function Qo(){return _e}function Pl(t,e=!1){_e&&_e.cleanups.push(t)}let re;const Kr=new WeakSet;class Zo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_e&&_e.active&&_e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Kr.has(this)&&(Kr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ta(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wi(this),na(this);const e=re,n=Me;re=this,Me=!0;try{return this.fn()}finally{ra(this),re=e,Me=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qs(e);this.deps=this.depsTail=void 0,wi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Kr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ps(this)&&this.run()}get dirty(){return ps(this)}}let ea=0,In,Sn;function ta(t,e=!1){if(t.flags|=8,e){t.next=Sn,Sn=t;return}t.next=In,In=t}function Ks(){ea++}function zs(){if(--ea>0)return;if(Sn){let e=Sn;for(Sn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;In;){let e=In;for(In=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function na(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ra(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),qs(r),Ol(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ps(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function sa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Dn))return;t.globalVersion=Dn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ps(t)){t.flags&=-3;return}const n=re,r=Me;re=t,Me=!0;try{na(t);const s=t.fn(t._value);(e.version===0||It(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{re=n,Me=r,ra(t),t.flags&=-3}}function qs(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qs(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ol(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Me=!0;const ia=[];function Rt(){ia.push(Me),Me=!1}function Ct(){const t=ia.pop();Me=t===void 0?!0:t}function wi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let Dn=0;class kl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!re||!Me||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new kl(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,oa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=r)}return n}trigger(e){this.version++,Dn++,this.notify(e)}notify(e){Ks();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zs()}}}function oa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)oa(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const dr=new WeakMap,Lt=Symbol(""),gs=Symbol(""),xn=Symbol("");function pe(t,e,n){if(Me&&re){let r=dr.get(t);r||dr.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Gs),s.map=r,s.key=n),s.track()}}function tt(t,e,n,r,s,i){const o=dr.get(t);if(!o){Dn++;return}const c=a=>{a&&a.trigger()};if(Ks(),e==="clear")o.forEach(c);else{const a=$(t),l=a&&js(n);if(a&&n==="length"){const f=Number(r);o.forEach((d,p)=>{(p==="length"||p===xn||!fn(p)&&p>=f)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),l&&c(o.get(xn)),e){case"add":a?l&&c(o.get("length")):(c(o.get(Lt)),En(t)&&c(o.get(gs)));break;case"delete":a||(c(o.get(Lt)),En(t)&&c(o.get(gs)));break;case"set":En(t)&&c(o.get(Lt));break}}zs()}function Nl(t,e){const n=dr.get(t);return n&&n.get(e)}function Gt(t){const e=G(t);return e===t?e:(pe(e,"iterate",xn),Le(t)?e:e.map(ve))}function Js(t){return pe(t=G(t),"iterate",xn),t}const Dl={__proto__:null,[Symbol.iterator](){return zr(this,Symbol.iterator,ve)},concat(...t){return Gt(this).concat(...t.map(e=>$(e)?Gt(e):e))},entries(){return zr(this,"entries",t=>(t[1]=ve(t[1]),t))},every(t,e){return Xe(this,"every",t,e,void 0,arguments)},filter(t,e){return Xe(this,"filter",t,e,n=>n.map(ve),arguments)},find(t,e){return Xe(this,"find",t,e,ve,arguments)},findIndex(t,e){return Xe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xe(this,"findLast",t,e,ve,arguments)},findLastIndex(t,e){return Xe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xe(this,"forEach",t,e,void 0,arguments)},includes(...t){return qr(this,"includes",t)},indexOf(...t){return qr(this,"indexOf",t)},join(t){return Gt(this).join(t)},lastIndexOf(...t){return qr(this,"lastIndexOf",t)},map(t,e){return Xe(this,"map",t,e,void 0,arguments)},pop(){return gn(this,"pop")},push(...t){return gn(this,"push",t)},reduce(t,...e){return Ii(this,"reduce",t,e)},reduceRight(t,...e){return Ii(this,"reduceRight",t,e)},shift(){return gn(this,"shift")},some(t,e){return Xe(this,"some",t,e,void 0,arguments)},splice(...t){return gn(this,"splice",t)},toReversed(){return Gt(this).toReversed()},toSorted(t){return Gt(this).toSorted(t)},toSpliced(...t){return Gt(this).toSpliced(...t)},unshift(...t){return gn(this,"unshift",t)},values(){return zr(this,"values",ve)}};function zr(t,e,n){const r=Js(t),s=r[e]();return r!==t&&!Le(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const xl=Array.prototype;function Xe(t,e,n,r,s,i){const o=Js(t),c=o!==t&&!Le(t),a=o[e];if(a!==xl[e]){const d=a.apply(t,i);return c?ve(d):d}let l=n;o!==t&&(c?l=function(d,p){return n.call(this,ve(d),p,t)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,t)}));const f=a.call(o,l,r);return c&&s?s(f):f}function Ii(t,e,n,r){const s=Js(t);let i=n;return s!==t&&(Le(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,ve(c),a,t)}),s[e](i,...r)}function qr(t,e,n){const r=G(t);pe(r,"iterate",xn);const s=r[e](...n);return(s===-1||s===!1)&&Qs(n[0])?(n[0]=G(n[0]),r[e](...n)):s}function gn(t,e,n=[]){Rt(),Ks();const r=G(t)[e].apply(t,n);return zs(),Ct(),r}const Ml=Hs("__proto__,__v_isRef,__isVue"),aa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn));function Ll(t){fn(t)||(t=String(t));const e=G(this);return pe(e,"has",t),e.hasOwnProperty(t)}class ca{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?zl:da:i?fa:ua).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){let a;if(o&&(a=Dl[n]))return a;if(n==="hasOwnProperty")return Ll}const c=Reflect.get(e,n,ce(e)?e:r);return(fn(n)?aa.has(n):Ml(n))||(s||pe(e,"get",n),i)?c:ce(c)?o&&js(n)?c:c.value:le(c)?s?pa(c):dn(c):c}}class la extends ca{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=$t(i);if(!Le(r)&&!$t(r)&&(i=G(i),r=G(r)),!$(e)&&ce(i)&&!ce(r))return a?!1:(i.value=r,!0)}const o=$(e)&&js(n)?Number(n)<e.length:Y(e,n),c=Reflect.set(e,n,r,ce(e)?e:s);return e===G(s)&&(o?It(r,i)&&tt(e,"set",n,r):tt(e,"add",n,r)),c}deleteProperty(e,n){const r=Y(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fn(n)||!aa.has(n))&&pe(e,"has",n),r}ownKeys(e){return pe(e,"iterate",$(e)?"length":Lt),Reflect.ownKeys(e)}}class Ul extends ca{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fl=new la,Hl=new Ul,$l=new la(!0);const ms=t=>t,er=t=>Reflect.getPrototypeOf(t);function Bl(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=En(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?ms:e?_s:ve;return!e&&pe(i,"iterate",a?gs:Lt),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:c?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function tr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jl(t,e){const n={get(s){const i=this.__v_raw,o=G(i),c=G(s);t||(It(s,c)&&pe(o,"get",s),pe(o,"get",c));const{has:a}=er(o),l=e?ms:t?_s:ve;if(a.call(o,s))return l(i.get(s));if(a.call(o,c))return l(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pe(G(s),"iterate",Lt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=G(i),c=G(s);return t||(It(s,c)&&pe(o,"has",s),pe(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,a=G(c),l=e?ms:t?_s:ve;return!t&&pe(a,"iterate",Lt),c.forEach((f,d)=>s.call(i,l(f),l(d),o))}};return ue(n,t?{add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear")}:{add(s){!e&&!Le(s)&&!$t(s)&&(s=G(s));const i=G(this);return er(i).has.call(i,s)||(i.add(s),tt(i,"add",s,s)),this},set(s,i){!e&&!Le(i)&&!$t(i)&&(i=G(i));const o=G(this),{has:c,get:a}=er(o);let l=c.call(o,s);l||(s=G(s),l=c.call(o,s));const f=a.call(o,s);return o.set(s,i),l?It(i,f)&&tt(o,"set",s,i):tt(o,"add",s,i),this},delete(s){const i=G(this),{has:o,get:c}=er(i);let a=o.call(i,s);a||(s=G(s),a=o.call(i,s)),c&&c.call(i,s);const l=i.delete(s);return a&&tt(i,"delete",s,void 0),l},clear(){const s=G(this),i=s.size!==0,o=s.clear();return i&&tt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Bl(s,t,e)}),n}function Ys(t,e){const n=jl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Y(n,s)&&s in r?n:r,s,i)}const Vl={get:Ys(!1,!1)},Wl={get:Ys(!1,!0)},Kl={get:Ys(!0,!1)};const ua=new WeakMap,fa=new WeakMap,da=new WeakMap,zl=new WeakMap;function ql(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gl(t){return t.__v_skip||!Object.isExtensible(t)?0:ql(yl(t))}function dn(t){return $t(t)?t:Xs(t,!1,Fl,Vl,ua)}function ha(t){return Xs(t,!1,$l,Wl,fa)}function pa(t){return Xs(t,!0,Hl,Kl,da)}function Xs(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Gl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Ut(t){return $t(t)?Ut(t.__v_raw):!!(t&&t.__v_isReactive)}function $t(t){return!!(t&&t.__v_isReadonly)}function Le(t){return!!(t&&t.__v_isShallow)}function Qs(t){return t?!!t.__v_raw:!1}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Zs(t){return!Y(t,"__v_skip")&&Object.isExtensible(t)&&Go(t,"__v_skip",!0),t}const ve=t=>le(t)?dn(t):t,_s=t=>le(t)?pa(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function ei(t){return ga(t,!1)}function Jl(t){return ga(t,!0)}function ga(t,e){return ce(t)?t:new Yl(t,e)}class Yl{constructor(e,n){this.dep=new Gs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:G(e),this._value=n?e:ve(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Le(e)||$t(e);e=r?e:G(e),It(e,n)&&(this._rawValue=e,this._value=r?e:ve(e),this.dep.trigger())}}function Ft(t){return ce(t)?t.value:t}const Xl={get:(t,e,n)=>e==="__v_raw"?t:Ft(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ma(t){return Ut(t)?t:new Proxy(t,Xl)}function Ql(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=eu(t,n);return e}class Zl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Nl(G(this._object),this._key)}}function eu(t,e,n){const r=t[e];return ce(r)?r:new Zl(t,e,n)}class tu{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return ta(this,!0),!0}get value(){const e=this.dep.track();return sa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nu(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new tu(r,s,n)}const nr={},hr=new WeakMap;let xt;function ru(t,e=!1,n=xt){if(n){let r=hr.get(n);r||hr.set(n,r=[]),r.push(t)}}function su(t,e,n=te){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=O=>s?O:Le(O)||s===!1||s===0?nt(O,1):nt(O);let f,d,p,g,S=!1,A=!1;if(ce(t)?(d=()=>t.value,S=Le(t)):Ut(t)?(d=()=>l(t),S=!0):$(t)?(A=!0,S=t.some(O=>Ut(O)||Le(O)),d=()=>t.map(O=>{if(ce(O))return O.value;if(Ut(O))return l(O);if(B(O))return a?a(O,2):O()})):B(t)?e?d=a?()=>a(t,2):t:d=()=>{if(p){Rt();try{p()}finally{Ct()}}const O=xt;xt=f;try{return a?a(t,3,[g]):t(g)}finally{xt=O}}:d=ze,e&&s){const O=d,j=s===!0?1/0:s;d=()=>nt(O(),j)}const F=Qo(),x=()=>{f.stop(),F&&Bs(F.effects,f)};if(i&&e){const O=e;e=(...j)=>{O(...j),x()}}let k=A?new Array(t.length).fill(nr):nr;const N=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const j=f.run();if(s||S||(A?j.some((ae,q)=>It(ae,k[q])):It(j,k))){p&&p();const ae=xt;xt=f;try{const q=[j,k===nr?void 0:A&&k[0]===nr?[]:k,g];a?a(e,3,q):e(...q),k=j}finally{xt=ae}}}else f.run()};return c&&c(N),f=new Zo(d),f.scheduler=o?()=>o(N,!1):N,g=O=>ru(O,!1,f),p=f.onStop=()=>{const O=hr.get(f);if(O){if(a)a(O,4);else for(const j of O)j();hr.delete(f)}},e?r?N(!0):k=f.run():o?o(N.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function nt(t,e=1/0,n){if(e<=0||!le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))nt(t.value,e,n);else if($(t))for(let r=0;r<t.length;r++)nt(t[r],e,n);else if(_l(t)||En(t))t.forEach(r=>{nt(r,e,n)});else if(bl(t)){for(const r in t)nt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&nt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wn(t,e,n,r){try{return r?t(...r):t()}catch(s){Nr(s,e,n)}}function Je(t,e,n,r){if(B(t)){const s=Wn(t,e,n,r);return s&&qo(s)&&s.catch(i=>{Nr(i,e,n)}),s}if($(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Je(t[i],e,n,r));return s}}function Nr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||te;if(e){let c=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,a,l)===!1)return}c=c.parent}if(i){Rt(),Wn(i,null,10,[t,a,l]),Ct();return}}iu(t,n,s,r,o)}function iu(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const ye=[];let Ve=-1;const tn=[];let mt=null,Yt=0;const _a=Promise.resolve();let pr=null;function ti(t){const e=pr||_a;return t?e.then(this?t.bind(this):t):e}function ou(t){let e=Ve+1,n=ye.length;for(;e<n;){const r=e+n>>>1,s=ye[r],i=Mn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ni(t){if(!(t.flags&1)){const e=Mn(t),n=ye[ye.length-1];!n||!(t.flags&2)&&e>=Mn(n)?ye.push(t):ye.splice(ou(e),0,t),t.flags|=1,va()}}function va(){pr||(pr=_a.then(ba))}function au(t){$(t)?tn.push(...t):mt&&t.id===-1?mt.splice(Yt+1,0,t):t.flags&1||(tn.push(t),t.flags|=1),va()}function Si(t,e,n=Ve+1){for(;n<ye.length;n++){const r=ye[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ye.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ya(t){if(tn.length){const e=[...new Set(tn)].sort((n,r)=>Mn(n)-Mn(r));if(tn.length=0,mt){mt.push(...e);return}for(mt=e,Yt=0;Yt<mt.length;Yt++){const n=mt[Yt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mt=null,Yt=0}}const Mn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ba(t){try{for(Ve=0;Ve<ye.length;Ve++){const e=ye[Ve];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ve<ye.length;Ve++){const e=ye[Ve];e&&(e.flags&=-2)}Ve=-1,ye.length=0,ya(),pr=null,(ye.length||tn.length)&&ba()}}let Ie=null,Ea=null;function gr(t){const e=Ie;return Ie=t,Ea=t&&t.type.__scopeId||null,e}function cu(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Di(-1);const i=gr(e);let o;try{o=t(...s)}finally{gr(i),r._d&&Di(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function e_(t,e){if(Ie===null)return t;const n=Ur(Ie),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=te]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&nt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Nt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Rt(),Je(a,n,8,[t.el,c,t,e]),Ct())}}const lu=Symbol("_vte"),uu=t=>t.__isTeleport;function ri(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ri(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function wa(t,e){return B(t)?ue({name:t.name},e,{setup:t}):t}function Ia(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function vs(t,e,n,r,s=!1){if($(t)){t.forEach((S,A)=>vs(S,e&&($(e)?e[A]:e),n,r,s));return}if(Tn(r)&&!s)return;const i=r.shapeFlag&4?Ur(r.component):r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===te?c.refs={}:c.refs,d=c.setupState,p=G(d),g=d===te?()=>!1:S=>Y(p,S);if(l!=null&&l!==a&&(fe(l)?(f[l]=null,g(l)&&(d[l]=null)):ce(l)&&(l.value=null)),B(a))Wn(a,c,12,[o,f]);else{const S=fe(a),A=ce(a);if(S||A){const F=()=>{if(t.f){const x=S?g(a)?d[a]:f[a]:a.value;s?$(x)&&Bs(x,i):$(x)?x.includes(i)||x.push(i):S?(f[a]=[i],g(a)&&(d[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else S?(f[a]=o,g(a)&&(d[a]=o)):A&&(a.value=o,t.k&&(f[t.k]=o))};o?(F.id=-1,Pe(F,n)):F()}}}kr().requestIdleCallback;kr().cancelIdleCallback;const Tn=t=>!!t.type.__asyncLoader,Sa=t=>t.type.__isKeepAlive;function fu(t,e){Ta(t,"a",e)}function du(t,e){Ta(t,"da",e)}function Ta(t,e,n=de){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Dr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Sa(s.parent.vnode)&&hu(r,e,n,s),s=s.parent}}function hu(t,e,n,r){const s=Dr(e,t,r,!0);Ca(()=>{Bs(r[e],s)},n)}function Dr(t,e,n=de,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Rt();const c=Kn(n),a=Je(e,n,t,o);return c(),Ct(),a});return r?s.unshift(i):s.push(i),i}}const lt=t=>(e,n=de)=>{(!Un||t==="sp")&&Dr(t,(...r)=>e(...r),n)},pu=lt("bm"),Ra=lt("m"),gu=lt("bu"),mu=lt("u"),_u=lt("bum"),Ca=lt("um"),vu=lt("sp"),yu=lt("rtg"),bu=lt("rtc");function Eu(t,e=de){Dr("ec",t,e)}const wu="components";function Iu(t,e){return Tu(wu,t,!0,e)||t}const Su=Symbol.for("v-ndc");function Tu(t,e,n=!0,r=!1){const s=Ie||de;if(s){const i=s.type;{const c=pf(i,!1);if(c&&(c===e||c===De(e)||c===Or(De(e))))return i}const o=Ti(s[t]||i[t],e)||Ti(s.appContext[t],e);return!o&&r?i:o}}function Ti(t,e){return t&&(t[e]||t[De(e)]||t[Or(De(e))])}const ys=t=>t?Ya(t)?Ur(t):ys(t.parent):null,Rn=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ys(t.parent),$root:t=>ys(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>si(t),$forceUpdate:t=>t.f||(t.f=()=>{ni(t.update)}),$nextTick:t=>t.n||(t.n=ti.bind(t.proxy)),$watch:t=>qu.bind(t)}),Gr=(t,e)=>t!==te&&!t.__isScriptSetup&&Y(t,e),Ru={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Gr(r,e))return o[e]=1,r[e];if(s!==te&&Y(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Y(l,e))return o[e]=3,i[e];if(n!==te&&Y(n,e))return o[e]=4,n[e];bs&&(o[e]=0)}}const f=Rn[e];let d,p;if(f)return e==="$attrs"&&pe(t.attrs,"get",""),f(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==te&&Y(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,Y(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Gr(s,e)?(s[e]=n,!0):r!==te&&Y(r,e)?(r[e]=n,!0):Y(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==te&&Y(t,o)||Gr(e,o)||(c=i[0])&&Y(c,o)||Y(r,o)||Y(Rn,o)||Y(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Y(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ri(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bs=!0;function Cu(t){const e=si(t),n=t.proxy,r=t.ctx;bs=!1,e.beforeCreate&&Ci(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:S,activated:A,deactivated:F,beforeDestroy:x,beforeUnmount:k,destroyed:N,unmounted:O,render:j,renderTracked:ae,renderTriggered:q,errorCaptured:K,serverPrefetch:W,expose:se,inheritAttrs:ge,components:Te,directives:Ee,filters:kt}=e;if(l&&Au(l,r,null),o)for(const V in o){const J=o[V];B(J)&&(r[V]=J.bind(n))}if(s){const V=s.call(n,n);le(V)&&(t.data=dn(V))}if(bs=!0,i)for(const V in i){const J=i[V],Ye=B(J)?J.bind(n,n):B(J.get)?J.get.bind(n,n):ze,dt=!B(J)&&B(J.set)?J.set.bind(n):ze,$e=Ne({get:Ye,set:dt});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>$e.value,set:we=>$e.value=we})}if(c)for(const V in c)Aa(c[V],r,n,V);if(a){const V=B(a)?a.call(n):a;Reflect.ownKeys(V).forEach(J=>{ir(J,V[J])})}f&&Ci(f,t,"c");function ie(V,J){$(J)?J.forEach(Ye=>V(Ye.bind(n))):J&&V(J.bind(n))}if(ie(pu,d),ie(Ra,p),ie(gu,g),ie(mu,S),ie(fu,A),ie(du,F),ie(Eu,K),ie(bu,ae),ie(yu,q),ie(_u,k),ie(Ca,O),ie(vu,W),$(se))if(se.length){const V=t.exposed||(t.exposed={});se.forEach(J=>{Object.defineProperty(V,J,{get:()=>n[J],set:Ye=>n[J]=Ye})})}else t.exposed||(t.exposed={});j&&t.render===ze&&(t.render=j),ge!=null&&(t.inheritAttrs=ge),Te&&(t.components=Te),Ee&&(t.directives=Ee),W&&Ia(t)}function Au(t,e,n=ze){$(t)&&(t=Es(t));for(const r in t){const s=t[r];let i;le(s)?"default"in s?i=Ue(s.from||r,s.default,!0):i=Ue(s.from||r):i=Ue(s),ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ci(t,e,n){Je($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Aa(t,e,n,r){let s=r.includes(".")?ja(n,r):()=>n[r];if(fe(t)){const i=e[t];B(i)&&Cn(s,i)}else if(B(t))Cn(s,t.bind(n));else if(le(t))if($(t))t.forEach(i=>Aa(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Cn(s,i,t)}}function si(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>mr(a,l,o,!0)),mr(a,e,o)),le(e)&&i.set(e,a),a}function mr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&mr(t,i,n,!0),s&&s.forEach(o=>mr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Pu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Pu={data:Ai,props:Pi,emits:Pi,methods:vn,computed:vn,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:vn,directives:vn,watch:ku,provide:Ai,inject:Ou};function Ai(t,e){return e?t?function(){return ue(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Ou(t,e){return vn(Es(t),Es(e))}function Es(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?ue(Object.create(null),t,e):e}function Pi(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ue(Object.create(null),Ri(t),Ri(e??{})):e}function ku(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const r in e)n[r]=me(t[r],e[r]);return n}function Pa(){return{app:null,config:{isNativeTag:gl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nu=0;function Du(t,e){return function(r,s=null){B(r)||(r=ue({},r)),s!=null&&!le(s)&&(s=null);const i=Pa(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:Nu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mf,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...d)):B(f)&&(o.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,p){if(!a){const g=l._ceVNode||Se(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,f):t(g,f,p),a=!0,l._container=f,f.__vue_app__=l,Ur(g.component)}},onUnmount(f){c.push(f)},unmount(){a&&(Je(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){const d=Ht;Ht=l;try{return f()}finally{Ht=d}}};return l}}let Ht=null;function ir(t,e){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[t]=e}}function Ue(t,e,n=!1){const r=de||Ie;if(r||Ht){const s=Ht?Ht._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function xu(){return!!(de||Ie||Ht)}const Oa={},ka=()=>Object.create(Oa),Na=t=>Object.getPrototypeOf(t)===Oa;function Mu(t,e,n,r=!1){const s={},i=ka();t.propsDefaults=Object.create(null),Da(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ha(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Lu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=G(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(xr(t.emitsOptions,p))continue;const g=e[p];if(a)if(Y(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const S=De(p);s[S]=ws(a,c,S,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Da(t,e,s,i)&&(l=!0);let f;for(const d in c)(!e||!Y(e,d)&&((f=Wt(d))===d||!Y(e,f)))&&(a?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=ws(a,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Y(e,d))&&(delete i[d],l=!0)}l&&tt(t.attrs,"set","")}function Da(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(wn(a))continue;const l=e[a];let f;s&&Y(s,f=De(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:xr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=G(n),l=c||te;for(let f=0;f<i.length;f++){const d=i[f];n[d]=ws(s,a,d,l[d],t,!Y(l,d))}}return o}function ws(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Y(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=Kn(s);r=l[n]=a.call(null,e),f()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Wt(n))&&(r=!0))}return r}const Uu=new WeakMap;function xa(t,e,n=!1){const r=n?Uu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!B(t)){const f=d=>{a=!0;const[p,g]=xa(d,e,!0);ue(o,p),g&&c.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return le(t)&&r.set(t,en),en;if($(i))for(let f=0;f<i.length;f++){const d=De(i[f]);Oi(d)&&(o[d]=te)}else if(i)for(const f in i){const d=De(f);if(Oi(d)){const p=i[f],g=o[d]=$(p)||B(p)?{type:p}:ue({},p),S=g.type;let A=!1,F=!0;if($(S))for(let x=0;x<S.length;++x){const k=S[x],N=B(k)&&k.name;if(N==="Boolean"){A=!0;break}else N==="String"&&(F=!1)}else A=B(S)&&S.name==="Boolean";g[0]=A,g[1]=F,(A||Y(g,"default"))&&c.push(d)}}const l=[o,c];return le(t)&&r.set(t,l),l}function Oi(t){return t[0]!=="$"&&!wn(t)}const Ma=t=>t[0]==="_"||t==="$stable",ii=t=>$(t)?t.map(We):[We(t)],Fu=(t,e,n)=>{if(e._n)return e;const r=cu((...s)=>ii(e(...s)),n);return r._c=!1,r},La=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ma(s))continue;const i=t[s];if(B(i))e[s]=Fu(s,i,r);else if(i!=null){const o=ii(i);e[s]=()=>o}}},Ua=(t,e)=>{const n=ii(e);t.slots.default=()=>n},Fa=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Hu=(t,e,n)=>{const r=t.slots=ka();if(t.vnode.shapeFlag&32){const s=e._;s?(Fa(r,e,n),n&&Go(r,"_",s,!0)):La(e,r)}else e&&Ua(t,e)},$u=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Fa(s,e,n):(i=!e.$stable,La(e,s)),o=e}else e&&(Ua(t,e),o={default:1});if(i)for(const c in s)!Ma(c)&&o[c]==null&&delete s[c]},Pe=ef;function Bu(t){return ju(t)}function ju(t,e){const n=kr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=ze,insertStaticContent:S}=t,A=(u,h,m,y=null,_=null,b=null,T=void 0,I=null,w=!!h.dynamicChildren)=>{if(u===h)return;u&&!mn(u,h)&&(y=v(u),we(u,_,b,!0),u=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:E,ref:L,shapeFlag:C}=h;switch(E){case Mr:F(u,h,m,y);break;case Bt:x(u,h,m,y);break;case Xr:u==null&&k(h,m,y,T);break;case et:Te(u,h,m,y,_,b,T,I,w);break;default:C&1?j(u,h,m,y,_,b,T,I,w):C&6?Ee(u,h,m,y,_,b,T,I,w):(C&64||C&128)&&E.process(u,h,m,y,_,b,T,I,w,D)}L!=null&&_&&vs(L,u&&u.ref,b,h||u,!h)},F=(u,h,m,y)=>{if(u==null)r(h.el=c(h.children),m,y);else{const _=h.el=u.el;h.children!==u.children&&l(_,h.children)}},x=(u,h,m,y)=>{u==null?r(h.el=a(h.children||""),m,y):h.el=u.el},k=(u,h,m,y)=>{[u.el,u.anchor]=S(u.children,h,m,y,u.el,u.anchor)},N=({el:u,anchor:h},m,y)=>{let _;for(;u&&u!==h;)_=p(u),r(u,m,y),u=_;r(h,m,y)},O=({el:u,anchor:h})=>{let m;for(;u&&u!==h;)m=p(u),s(u),u=m;s(h)},j=(u,h,m,y,_,b,T,I,w)=>{h.type==="svg"?T="svg":h.type==="math"&&(T="mathml"),u==null?ae(h,m,y,_,b,T,I,w):W(u,h,_,b,T,I,w)},ae=(u,h,m,y,_,b,T,I)=>{let w,E;const{props:L,shapeFlag:C,transition:M,dirs:H}=u;if(w=u.el=o(u.type,b,L&&L.is,L),C&8?f(w,u.children):C&16&&K(u.children,w,null,y,_,Jr(u,b),T,I),H&&Nt(u,null,y,"created"),q(w,u,u.scopeId,T,y),L){for(const ne in L)ne!=="value"&&!wn(ne)&&i(w,ne,null,L[ne],b,y);"value"in L&&i(w,"value",null,L.value,b),(E=L.onVnodeBeforeMount)&&je(E,y,u)}H&&Nt(u,null,y,"beforeMount");const z=Vu(_,M);z&&M.beforeEnter(w),r(w,h,m),((E=L&&L.onVnodeMounted)||z||H)&&Pe(()=>{E&&je(E,y,u),z&&M.enter(w),H&&Nt(u,null,y,"mounted")},_)},q=(u,h,m,y,_)=>{if(m&&g(u,m),y)for(let b=0;b<y.length;b++)g(u,y[b]);if(_){let b=_.subTree;if(h===b||Wa(b.type)&&(b.ssContent===h||b.ssFallback===h)){const T=_.vnode;q(u,T,T.scopeId,T.slotScopeIds,_.parent)}}},K=(u,h,m,y,_,b,T,I,w=0)=>{for(let E=w;E<u.length;E++){const L=u[E]=I?_t(u[E]):We(u[E]);A(null,L,h,m,y,_,b,T,I)}},W=(u,h,m,y,_,b,T)=>{const I=h.el=u.el;let{patchFlag:w,dynamicChildren:E,dirs:L}=h;w|=u.patchFlag&16;const C=u.props||te,M=h.props||te;let H;if(m&&Dt(m,!1),(H=M.onVnodeBeforeUpdate)&&je(H,m,h,u),L&&Nt(h,u,m,"beforeUpdate"),m&&Dt(m,!0),(C.innerHTML&&M.innerHTML==null||C.textContent&&M.textContent==null)&&f(I,""),E?se(u.dynamicChildren,E,I,m,y,Jr(h,_),b):T||J(u,h,I,null,m,y,Jr(h,_),b,!1),w>0){if(w&16)ge(I,C,M,m,_);else if(w&2&&C.class!==M.class&&i(I,"class",null,M.class,_),w&4&&i(I,"style",C.style,M.style,_),w&8){const z=h.dynamicProps;for(let ne=0;ne<z.length;ne++){const Q=z[ne],Re=C[Q],he=M[Q];(he!==Re||Q==="value")&&i(I,Q,Re,he,_,m)}}w&1&&u.children!==h.children&&f(I,h.children)}else!T&&E==null&&ge(I,C,M,m,_);((H=M.onVnodeUpdated)||L)&&Pe(()=>{H&&je(H,m,h,u),L&&Nt(h,u,m,"updated")},y)},se=(u,h,m,y,_,b,T)=>{for(let I=0;I<h.length;I++){const w=u[I],E=h[I],L=w.el&&(w.type===et||!mn(w,E)||w.shapeFlag&70)?d(w.el):m;A(w,E,L,null,y,_,b,T,!0)}},ge=(u,h,m,y,_)=>{if(h!==m){if(h!==te)for(const b in h)!wn(b)&&!(b in m)&&i(u,b,h[b],null,_,y);for(const b in m){if(wn(b))continue;const T=m[b],I=h[b];T!==I&&b!=="value"&&i(u,b,I,T,_,y)}"value"in m&&i(u,"value",h.value,m.value,_)}},Te=(u,h,m,y,_,b,T,I,w)=>{const E=h.el=u?u.el:c(""),L=h.anchor=u?u.anchor:c("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:H}=h;H&&(I=I?I.concat(H):H),u==null?(r(E,m,y),r(L,m,y),K(h.children||[],m,L,_,b,T,I,w)):C>0&&C&64&&M&&u.dynamicChildren?(se(u.dynamicChildren,M,m,_,b,T,I),(h.key!=null||_&&h===_.subTree)&&Ha(u,h,!0)):J(u,h,m,L,_,b,T,I,w)},Ee=(u,h,m,y,_,b,T,I,w)=>{h.slotScopeIds=I,u==null?h.shapeFlag&512?_.ctx.activate(h,m,y,T,w):kt(h,m,y,_,b,T,w):ft(u,h,w)},kt=(u,h,m,y,_,b,T)=>{const I=u.component=lf(u,y,_);if(Sa(u)&&(I.ctx.renderer=D),uf(I,!1,T),I.asyncDep){if(_&&_.registerDep(I,ie,T),!u.el){const w=I.subTree=Se(Bt);x(null,w,h,m)}}else ie(I,u,h,m,_,b,T)},ft=(u,h,m)=>{const y=h.component=u.component;if(Qu(u,h,m))if(y.asyncDep&&!y.asyncResolved){V(y,h,m);return}else y.next=h,y.update();else h.el=u.el,y.vnode=h},ie=(u,h,m,y,_,b,T)=>{const I=()=>{if(u.isMounted){let{next:C,bu:M,u:H,parent:z,vnode:ne}=u;{const Ce=$a(u);if(Ce){C&&(C.el=ne.el,V(u,C,T)),Ce.asyncDep.then(()=>{u.isUnmounted||I()});return}}let Q=C,Re;Dt(u,!1),C?(C.el=ne.el,V(u,C,T)):C=ne,M&&sr(M),(Re=C.props&&C.props.onVnodeBeforeUpdate)&&je(Re,z,C,ne),Dt(u,!0);const he=Yr(u),xe=u.subTree;u.subTree=he,A(xe,he,d(xe.el),v(xe),u,_,b),C.el=he.el,Q===null&&Zu(u,he.el),H&&Pe(H,_),(Re=C.props&&C.props.onVnodeUpdated)&&Pe(()=>je(Re,z,C,ne),_)}else{let C;const{el:M,props:H}=h,{bm:z,m:ne,parent:Q,root:Re,type:he}=u,xe=Tn(h);if(Dt(u,!1),z&&sr(z),!xe&&(C=H&&H.onVnodeBeforeMount)&&je(C,Q,h),Dt(u,!0),M&&oe){const Ce=()=>{u.subTree=Yr(u),oe(M,u.subTree,u,_,null)};xe&&he.__asyncHydrate?he.__asyncHydrate(M,u,Ce):Ce()}else{Re.ce&&Re.ce._injectChildStyle(he);const Ce=u.subTree=Yr(u);A(null,Ce,m,y,u,_,b),h.el=Ce.el}if(ne&&Pe(ne,_),!xe&&(C=H&&H.onVnodeMounted)){const Ce=h;Pe(()=>je(C,Q,Ce),_)}(h.shapeFlag&256||Q&&Tn(Q.vnode)&&Q.vnode.shapeFlag&256)&&u.a&&Pe(u.a,_),u.isMounted=!0,h=m=y=null}};u.scope.on();const w=u.effect=new Zo(I);u.scope.off();const E=u.update=w.run.bind(w),L=u.job=w.runIfDirty.bind(w);L.i=u,L.id=u.uid,w.scheduler=()=>ni(L),Dt(u,!0),E()},V=(u,h,m)=>{h.component=u;const y=u.vnode.props;u.vnode=h,u.next=null,Lu(u,h.props,y,m),$u(u,h.children,m),Rt(),Si(u),Ct()},J=(u,h,m,y,_,b,T,I,w=!1)=>{const E=u&&u.children,L=u?u.shapeFlag:0,C=h.children,{patchFlag:M,shapeFlag:H}=h;if(M>0){if(M&128){dt(E,C,m,y,_,b,T,I,w);return}else if(M&256){Ye(E,C,m,y,_,b,T,I,w);return}}H&8?(L&16&&ke(E,_,b),C!==E&&f(m,C)):L&16?H&16?dt(E,C,m,y,_,b,T,I,w):ke(E,_,b,!0):(L&8&&f(m,""),H&16&&K(C,m,y,_,b,T,I,w))},Ye=(u,h,m,y,_,b,T,I,w)=>{u=u||en,h=h||en;const E=u.length,L=h.length,C=Math.min(E,L);let M;for(M=0;M<C;M++){const H=h[M]=w?_t(h[M]):We(h[M]);A(u[M],H,m,null,_,b,T,I,w)}E>L?ke(u,_,b,!0,!1,C):K(h,m,y,_,b,T,I,w,C)},dt=(u,h,m,y,_,b,T,I,w)=>{let E=0;const L=h.length;let C=u.length-1,M=L-1;for(;E<=C&&E<=M;){const H=u[E],z=h[E]=w?_t(h[E]):We(h[E]);if(mn(H,z))A(H,z,m,null,_,b,T,I,w);else break;E++}for(;E<=C&&E<=M;){const H=u[C],z=h[M]=w?_t(h[M]):We(h[M]);if(mn(H,z))A(H,z,m,null,_,b,T,I,w);else break;C--,M--}if(E>C){if(E<=M){const H=M+1,z=H<L?h[H].el:y;for(;E<=M;)A(null,h[E]=w?_t(h[E]):We(h[E]),m,z,_,b,T,I,w),E++}}else if(E>M)for(;E<=C;)we(u[E],_,b,!0),E++;else{const H=E,z=E,ne=new Map;for(E=z;E<=M;E++){const Ae=h[E]=w?_t(h[E]):We(h[E]);Ae.key!=null&&ne.set(Ae.key,E)}let Q,Re=0;const he=M-z+1;let xe=!1,Ce=0;const pn=new Array(he);for(E=0;E<he;E++)pn[E]=0;for(E=H;E<=C;E++){const Ae=u[E];if(Re>=he){we(Ae,_,b,!0);continue}let Be;if(Ae.key!=null)Be=ne.get(Ae.key);else for(Q=z;Q<=M;Q++)if(pn[Q-z]===0&&mn(Ae,h[Q])){Be=Q;break}Be===void 0?we(Ae,_,b,!0):(pn[Be-z]=E+1,Be>=Ce?Ce=Be:xe=!0,A(Ae,h[Be],m,null,_,b,T,I,w),Re++)}const yi=xe?Wu(pn):en;for(Q=yi.length-1,E=he-1;E>=0;E--){const Ae=z+E,Be=h[Ae],bi=Ae+1<L?h[Ae+1].el:y;pn[E]===0?A(null,Be,m,bi,_,b,T,I,w):xe&&(Q<0||E!==yi[Q]?$e(Be,m,bi,2):Q--)}}},$e=(u,h,m,y,_=null)=>{const{el:b,type:T,transition:I,children:w,shapeFlag:E}=u;if(E&6){$e(u.component.subTree,h,m,y);return}if(E&128){u.suspense.move(h,m,y);return}if(E&64){T.move(u,h,m,D);return}if(T===et){r(b,h,m);for(let C=0;C<w.length;C++)$e(w[C],h,m,y);r(u.anchor,h,m);return}if(T===Xr){N(u,h,m);return}if(y!==2&&E&1&&I)if(y===0)I.beforeEnter(b),r(b,h,m),Pe(()=>I.enter(b),_);else{const{leave:C,delayLeave:M,afterLeave:H}=I,z=()=>r(b,h,m),ne=()=>{C(b,()=>{z(),H&&H()})};M?M(b,z,ne):ne()}else r(b,h,m)},we=(u,h,m,y=!1,_=!1)=>{const{type:b,props:T,ref:I,children:w,dynamicChildren:E,shapeFlag:L,patchFlag:C,dirs:M,cacheIndex:H}=u;if(C===-2&&(_=!1),I!=null&&vs(I,null,m,u,!0),H!=null&&(h.renderCache[H]=void 0),L&256){h.ctx.deactivate(u);return}const z=L&1&&M,ne=!Tn(u);let Q;if(ne&&(Q=T&&T.onVnodeBeforeUnmount)&&je(Q,h,u),L&6)Zn(u.component,m,y);else{if(L&128){u.suspense.unmount(m,y);return}z&&Nt(u,null,h,"beforeUnmount"),L&64?u.type.remove(u,h,m,D,y):E&&!E.hasOnce&&(b!==et||C>0&&C&64)?ke(E,h,m,!1,!0):(b===et&&C&384||!_&&L&16)&&ke(w,h,m),y&&zt(u)}(ne&&(Q=T&&T.onVnodeUnmounted)||z)&&Pe(()=>{Q&&je(Q,h,u),z&&Nt(u,null,h,"unmounted")},m)},zt=u=>{const{type:h,el:m,anchor:y,transition:_}=u;if(h===et){qt(m,y);return}if(h===Xr){O(u);return}const b=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:T,delayLeave:I}=_,w=()=>T(m,b);I?I(u.el,b,w):w()}else b()},qt=(u,h)=>{let m;for(;u!==h;)m=p(u),s(u),u=m;s(h)},Zn=(u,h,m)=>{const{bum:y,scope:_,job:b,subTree:T,um:I,m:w,a:E}=u;ki(w),ki(E),y&&sr(y),_.stop(),b&&(b.flags|=8,we(T,u,h,m)),I&&Pe(I,h),Pe(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ke=(u,h,m,y=!1,_=!1,b=0)=>{for(let T=b;T<u.length;T++)we(u[T],h,m,y,_)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const h=p(u.anchor||u.el),m=h&&h[lu];return m?p(m):h};let P=!1;const R=(u,h,m)=>{u==null?h._vnode&&we(h._vnode,null,null,!0):A(h._vnode||null,u,h,null,null,null,m),h._vnode=u,P||(P=!0,Si(),ya(),P=!1)},D={p:A,um:we,m:$e,r:zt,mt:kt,mc:K,pc:J,pbc:se,n:v,o:t};let X,oe;return{render:R,hydrate:X,createApp:Du(R,X)}}function Jr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Vu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ha(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=_t(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ha(o,c)),c.type===Mr&&(c.el=o.el)}}function Wu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function $a(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$a(e)}function ki(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ku=Symbol.for("v-scx"),zu=()=>Ue(Ku);function Cn(t,e,n){return Ba(t,e,n)}function Ba(t,e,n=te){const{immediate:r,deep:s,flush:i,once:o}=n,c=ue({},n),a=e&&r||!e&&i!=="post";let l;if(Un){if(i==="sync"){const g=zu();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=ze,g.resume=ze,g.pause=ze,g}}const f=de;c.call=(g,S,A)=>Je(g,f,S,A);let d=!1;i==="post"?c.scheduler=g=>{Pe(g,f&&f.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(g,S)=>{S?g():ni(g)}),c.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const p=su(t,e,c);return Un&&(l?l.push(p):a&&p()),p}function qu(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?ja(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=Kn(this),c=Ba(s,i.bind(r),n);return o(),c}function ja(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Gu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${Wt(e)}Modifiers`];function Ju(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&Gu(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>fe(f)?f.trim():f)),o.number&&(s=n.map(hs)));let c,a=r[c=Wr(e)]||r[c=Wr(De(e))];!a&&i&&(a=r[c=Wr(Wt(e))]),a&&Je(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Je(l,t,6,s)}}function Va(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!B(t)){const a=l=>{const f=Va(l,e,!0);f&&(c=!0,ue(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(le(t)&&r.set(t,null),null):($(i)?i.forEach(a=>o[a]=null):ue(o,i),le(t)&&r.set(t,o),o)}function xr(t,e){return!t||!Cr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Y(t,e[0].toLowerCase()+e.slice(1))||Y(t,Wt(e))||Y(t,e))}function Yr(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:f,props:d,data:p,setupState:g,ctx:S,inheritAttrs:A}=t,F=gr(t);let x,k;try{if(n.shapeFlag&4){const O=s||r,j=O;x=We(l.call(j,O,f,d,g,p,S)),k=c}else{const O=e;x=We(O.length>1?O(d,{attrs:c,slots:o,emit:a}):O(d,null)),k=e.props?c:Yu(c)}}catch(O){An.length=0,Nr(O,t,1),x=Se(Bt)}let N=x;if(k&&A!==!1){const O=Object.keys(k),{shapeFlag:j}=N;O.length&&j&7&&(i&&O.some($s)&&(k=Xu(k,i)),N=an(N,k,!1,!0))}return n.dirs&&(N=an(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&ri(N,n.transition),x=N,gr(F),x}const Yu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Cr(n))&&((e||(e={}))[n]=t[n]);return e},Xu=(t,e)=>{const n={};for(const r in t)(!$s(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Qu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Ni(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!xr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ni(r,o,l):!0:!!o;return!1}function Ni(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xr(n,i))return!0}return!1}function Zu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wa=t=>t.__isSuspense;function ef(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):au(t)}const et=Symbol.for("v-fgt"),Mr=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Xr=Symbol.for("v-stc"),An=[];let Oe=null;function _r(t=!1){An.push(Oe=t?null:[])}function tf(){An.pop(),Oe=An[An.length-1]||null}let Ln=1;function Di(t){Ln+=t,t<0&&Oe&&(Oe.hasOnce=!0)}function Ka(t){return t.dynamicChildren=Ln>0?Oe||en:null,tf(),Ln>0&&Oe&&Oe.push(t),t}function za(t,e,n,r,s,i){return Ka(Lr(t,e,n,r,s,i,!0))}function qa(t,e,n,r,s){return Ka(Se(t,e,n,r,s,!0))}function vr(t){return t?t.__v_isVNode===!0:!1}function mn(t,e){return t.type===e.type&&t.key===e.key}const Ga=({key:t})=>t??null,or=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||ce(t)||B(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function Lr(t,e=null,n=null,r=0,s=null,i=t===et?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ga(e),ref:e&&or(e),scopeId:Ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return c?(oi(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=fe(n)?8:16),Ln>0&&!o&&Oe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Oe.push(a),a}const Se=nf;function nf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Su)&&(t=Bt),vr(t)){const c=an(t,e,!0);return n&&oi(c,n),Ln>0&&!i&&Oe&&(c.shapeFlag&6?Oe[Oe.indexOf(t)]=c:Oe.push(c)),c.patchFlag=-2,c}if(gf(t)&&(t=t.__vccOpts),e){e=rf(e);let{class:c,style:a}=e;c&&!fe(c)&&(e.class=Ws(c)),le(a)&&(Qs(a)&&!$(a)&&(a=ue({},a)),e.style=Vs(a))}const o=fe(t)?1:Wa(t)?128:uu(t)?64:le(t)?4:B(t)?2:0;return Lr(t,e,n,r,s,o,i,!0)}function rf(t){return t?Qs(t)||Na(t)?ue({},t):t:null}function an(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?of(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ga(l),ref:e&&e.ref?n&&i?$(i)?i.concat(or(e)):[i,or(e)]:or(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&ri(f,a.clone(f)),f}function Ja(t=" ",e=0){return Se(Mr,null,t,e)}function sf(t="",e=!1){return e?(_r(),qa(Bt,null,t)):Se(Bt,null,t)}function We(t){return t==null||typeof t=="boolean"?Se(Bt):$(t)?Se(et,null,t.slice()):vr(t)?_t(t):Se(Mr,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:an(t)}function oi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),oi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Na(e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[Ja(e)]):n=8);t.children=e,t.shapeFlag|=n}function of(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ws([e.class,r.class]));else if(s==="style")e.style=Vs([e.style,r.style]);else if(Cr(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function je(t,e,n,r=null){Je(t,e,7,[n,r])}const af=Pa();let cf=0;function lf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||af,i={uid:cf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xa(r,s),emitsOptions:Va(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ju.bind(null,i),t.ce&&t.ce(i),i}let de=null,yr,Is;{const t=kr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};yr=e("__VUE_INSTANCE_SETTERS__",n=>de=n),Is=e("__VUE_SSR_SETTERS__",n=>Un=n)}const Kn=t=>{const e=de;return yr(t),t.scope.on(),()=>{t.scope.off(),yr(e)}},xi=()=>{de&&de.scope.off(),yr(null)};function Ya(t){return t.vnode.shapeFlag&4}let Un=!1;function uf(t,e=!1,n=!1){e&&Is(e);const{props:r,children:s}=t.vnode,i=Ya(t);Mu(t,r,i,e),Hu(t,s,n);const o=i?ff(t,e):void 0;return e&&Is(!1),o}function ff(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ru);const{setup:r}=n;if(r){Rt();const s=t.setupContext=r.length>1?hf(t):null,i=Kn(t),o=Wn(r,t,0,[t.props,s]),c=qo(o);if(Ct(),i(),(c||t.sp)&&!Tn(t)&&Ia(t),c){if(o.then(xi,xi),e)return o.then(a=>{Mi(t,a,e)}).catch(a=>{Nr(a,t,0)});t.asyncDep=o}else Mi(t,o,e)}else Xa(t,e)}function Mi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=ma(e)),Xa(t,n)}let Li;function Xa(t,e,n){const r=t.type;if(!t.render){if(!e&&Li&&!r.render){const s=r.template||si(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ue(ue({isCustomElement:i,delimiters:c},o),a);r.render=Li(s,l)}}t.render=r.render||ze}{const s=Kn(t);Rt();try{Cu(t)}finally{Ct(),s()}}}const df={get(t,e){return pe(t,"get",""),t[e]}};function hf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,df),slots:t.slots,emit:t.emit,expose:e}}function Ur(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ma(Zs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}})):t.proxy}function pf(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function gf(t){return B(t)&&"__vccOpts"in t}const Ne=(t,e)=>nu(t,e,Un);function Qa(t,e,n){const r=arguments.length;return r===2?le(e)&&!$(e)?vr(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vr(n)&&(n=[n]),Se(t,e,n))}const mf="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ss;const Ui=typeof window<"u"&&window.trustedTypes;if(Ui)try{Ss=Ui.createPolicy("vue",{createHTML:t=>t})}catch{}const Za=Ss?t=>Ss.createHTML(t):t=>t,_f="http://www.w3.org/2000/svg",vf="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,Fi=Ze&&Ze.createElement("template"),yf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ze.createElementNS(_f,t):e==="mathml"?Ze.createElementNS(vf,t):n?Ze.createElement(t,{is:n}):Ze.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ze.createTextNode(t),createComment:t=>Ze.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ze.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fi.innerHTML=Za(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Fi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bf=Symbol("_vtc");function Ef(t,e,n){const r=t[bf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hi=Symbol("_vod"),wf=Symbol("_vsh"),If=Symbol(""),Sf=/(^|;)\s*display\s*:/;function Tf(t,e,n){const r=t.style,s=fe(n);let i=!1;if(n&&!s){if(e)if(fe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ar(r,c,"")}else for(const o in e)n[o]==null&&ar(r,o,"");for(const o in n)o==="display"&&(i=!0),ar(r,o,n[o])}else if(s){if(e!==n){const o=r[If];o&&(n+=";"+o),r.cssText=n,i=Sf.test(n)}}else e&&t.removeAttribute("style");Hi in t&&(t[Hi]=i?r.display:"",t[wf]&&(r.display="none"))}const $i=/\s*!important$/;function ar(t,e,n){if($(n))n.forEach(r=>ar(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Rf(t,e);$i.test(n)?t.setProperty(Wt(r),n.replace($i,""),"important"):t[r]=n}}const Bi=["Webkit","Moz","ms"],Qr={};function Rf(t,e){const n=Qr[e];if(n)return n;let r=De(e);if(r!=="filter"&&r in t)return Qr[e]=r;r=Or(r);for(let s=0;s<Bi.length;s++){const i=Bi[s]+r;if(i in t)return Qr[e]=i}return e}const ji="http://www.w3.org/1999/xlink";function Vi(t,e,n,r,s,i=Al(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ji,e.slice(6,e.length)):t.setAttributeNS(ji,e,n):n==null||i&&!Jo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fn(n)?String(n):n)}function Wi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Za(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Jo(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Xt(t,e,n,r){t.addEventListener(e,n,r)}function Cf(t,e,n,r){t.removeEventListener(e,n,r)}const Ki=Symbol("_vei");function Af(t,e,n,r,s=null){const i=t[Ki]||(t[Ki]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Pf(e);if(r){const l=i[e]=Nf(r,s);Xt(t,c,l,a)}else o&&(Cf(t,c,o,a),i[e]=void 0)}}const zi=/(?:Once|Passive|Capture)$/;function Pf(t){let e;if(zi.test(t)){e={};let r;for(;r=t.match(zi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wt(t.slice(2)),e]}let Zr=0;const Of=Promise.resolve(),kf=()=>Zr||(Of.then(()=>Zr=0),Zr=Date.now());function Nf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(Df(r,n.value),e,5,[r])};return n.value=t,n.attached=kf(),n}function Df(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Ef(t,r,o):e==="style"?Tf(t,n,r):Cr(e)?$s(e)||Af(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mf(t,e,r,o))?(Wi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vi(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!fe(r))?Wi(t,De(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Vi(t,e,r,o))};function Mf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&qi(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qi(e)&&fe(n)?!1:e in t}const Gi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>sr(e,n):e};function Lf(t){t.target.composing=!0}function Ji(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const es=Symbol("_assign"),t_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[es]=Gi(s);const i=r||s.props&&s.props.type==="number";Xt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=hs(c)),t[es](c)}),n&&Xt(t,"change",()=>{t.value=t.value.trim()}),e||(Xt(t,"compositionstart",Lf),Xt(t,"compositionend",Ji),Xt(t,"change",Ji))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[es]=Gi(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?hs(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},Uf=ue({patchProp:xf},yf);let Yi;function Ff(){return Yi||(Yi=Bu(Uf))}const Hf=(...t)=>{const e=Ff().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Bf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,$f(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function $f(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Bf(t){return fe(t)?document.querySelector(t):t}var Xi={};/**
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
 */const ec=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,d=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(p=64)),r.push(n[f],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ec(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||d==null)throw new Vf;const p=i<<2|c>>4;if(r.push(p),l!==64){const g=c<<4&240|l>>2;if(r.push(g),d!==64){const S=l<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wf=function(t){const e=ec(t);return tc.encodeByteArray(e,!0)},nc=function(t){return Wf(t).replace(/\./g,"")},rc=function(t){try{return tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zf=()=>Kf().__FIREBASE_DEFAULTS__,qf=()=>{if(typeof process>"u"||typeof Xi>"u")return;const t=Xi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rc(t[1]);return e&&JSON.parse(e)},ai=()=>{try{return zf()||qf()||Gf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jf=t=>{var e,n;return(n=(e=ai())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sc=()=>{var t;return(t=ai())===null||t===void 0?void 0:t.config},ic=t=>{var e;return(e=ai())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Yf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Qf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ed(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function td(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nd(){try{return typeof indexedDB=="object"}catch{return!1}}function rd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const sd="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sd,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?id(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new At(s,c,r)}}function id(t,e){return t.replace(od,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const od=/\{\$([^}]+)}/g;function ad(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qi(i)&&Qi(o)){if(!br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qi(t){return t!==null&&typeof t=="object"}/**
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
 */function qn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cd(t,e){const n=new ld(t,e);return n.subscribe.bind(n)}class ld{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ud(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ts),s.error===void 0&&(s.error=ts),s.complete===void 0&&(s.complete=ts);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ud(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ts(){}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class fd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hd(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dd(t){return t===Mt?void 0:t}function hd(t){return t.instantiationMode==="EAGER"}/**
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
 */class pd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const gd={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},md=ee.INFO,_d={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},vd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_d[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=md,this._logHandler=vd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const yd=(t,e)=>e.some(n=>t instanceof n);let Zi,eo;function bd(){return Zi||(Zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ed(){return eo||(eo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ac=new WeakMap,Ts=new WeakMap,cc=new WeakMap,ns=new WeakMap,ci=new WeakMap;function wd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(St(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ac.set(n,t)}).catch(()=>{}),ci.set(e,t),e}function Id(t){if(Ts.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ts.set(t,e)}let Rs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ts.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sd(t){Rs=t(Rs)}function Td(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rs(this),e,...n);return cc.set(r,e.sort?e.sort():[e]),St(r)}:Ed().includes(t)?function(...e){return t.apply(rs(this),e),St(ac.get(this))}:function(...e){return St(t.apply(rs(this),e))}}function Rd(t){return typeof t=="function"?Td(t):(t instanceof IDBTransaction&&Id(t),yd(t,bd())?new Proxy(t,Rs):t)}function St(t){if(t instanceof IDBRequest)return wd(t);if(ns.has(t))return ns.get(t);const e=Rd(t);return e!==t&&(ns.set(t,e),ci.set(e,t)),e}const rs=t=>ci.get(t);function Cd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=St(o);return r&&o.addEventListener("upgradeneeded",a=>{r(St(o.result),a.oldVersion,a.newVersion,St(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Ad=["get","getKey","getAll","getAllKeys","count"],Pd=["put","add","delete","clear"],ss=new Map;function to(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ss.get(e))return ss.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Pd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ad.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return ss.set(e,i),i}Sd(t=>({...t,get:(e,n,r)=>to(e,n)||t.get(e,n,r),has:(e,n)=>!!to(e,n)||t.has(e,n)}));/**
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
 */class Od{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cs="@firebase/app",no="0.10.13";/**
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
 */const at=new oc("@firebase/app"),Nd="@firebase/app-compat",Dd="@firebase/analytics-compat",xd="@firebase/analytics",Md="@firebase/app-check-compat",Ld="@firebase/app-check",Ud="@firebase/auth",Fd="@firebase/auth-compat",Hd="@firebase/database",$d="@firebase/data-connect",Bd="@firebase/database-compat",jd="@firebase/functions",Vd="@firebase/functions-compat",Wd="@firebase/installations",Kd="@firebase/installations-compat",zd="@firebase/messaging",qd="@firebase/messaging-compat",Gd="@firebase/performance",Jd="@firebase/performance-compat",Yd="@firebase/remote-config",Xd="@firebase/remote-config-compat",Qd="@firebase/storage",Zd="@firebase/storage-compat",eh="@firebase/firestore",th="@firebase/vertexai-preview",nh="@firebase/firestore-compat",rh="firebase",sh="10.14.1";/**
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
 */const As="[DEFAULT]",ih={[Cs]:"fire-core",[Nd]:"fire-core-compat",[xd]:"fire-analytics",[Dd]:"fire-analytics-compat",[Ld]:"fire-app-check",[Md]:"fire-app-check-compat",[Ud]:"fire-auth",[Fd]:"fire-auth-compat",[Hd]:"fire-rtdb",[$d]:"fire-data-connect",[Bd]:"fire-rtdb-compat",[jd]:"fire-fn",[Vd]:"fire-fn-compat",[Wd]:"fire-iid",[Kd]:"fire-iid-compat",[zd]:"fire-fcm",[qd]:"fire-fcm-compat",[Gd]:"fire-perf",[Jd]:"fire-perf-compat",[Yd]:"fire-rc",[Xd]:"fire-rc-compat",[Qd]:"fire-gcs",[Zd]:"fire-gcs-compat",[eh]:"fire-fst",[nh]:"fire-fst-compat",[th]:"fire-vertex","fire-js":"fire-js",[rh]:"fire-js-all"};/**
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
 */const Er=new Map,oh=new Map,Ps=new Map;function ro(t,e){try{t.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(Ps.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Ps.set(e,t);for(const n of Er.values())ro(n,t);for(const n of oh.values())ro(n,t);return!0}function lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ke(t){return t.settings!==void 0}/**
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
 */const ah={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tt=new zn("app","Firebase",ah);/**
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
 */class ch{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=sh;function uc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:As,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});if(n||(n=sc()),!n)throw Tt.create("no-options");const i=Er.get(s);if(i){if(br(n,i.options)&&br(r,i.config))return i;throw Tt.create("duplicate-app",{appName:s})}const o=new pd(s);for(const a of Ps.values())o.addComponent(a);const c=new ch(n,r,o);return Er.set(s,c),c}function lh(t=As){const e=Er.get(t);if(!e&&t===As&&sc())return uc();if(!e)throw Tt.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=ih[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(c.join(" "));return}Fn(new cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const uh="firebase-heartbeat-database",fh=1,Hn="firebase-heartbeat-store";let is=null;function fc(){return is||(is=Cd(uh,fh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tt.create("idb-open",{originalErrorMessage:t.message})})),is}async function dh(t){try{const n=(await fc()).transaction(Hn),r=await n.objectStore(Hn).get(dc(t));return await n.done,r}catch(e){if(e instanceof At)at.warn(e.message);else{const n=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function so(t,e){try{const r=(await fc()).transaction(Hn,"readwrite");await r.objectStore(Hn).put(e,dc(t)),await r.done}catch(n){if(n instanceof At)at.warn(n.message);else{const r=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(r.message)}}}function dc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hh=1024,ph=30*24*60*60*1e3;class gh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _h(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=io();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=ph}),this._storage.overwrite(this._heartbeatsCache))}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=io(),{heartbeatsToSend:r,unsentEntries:s}=mh(this._heartbeatsCache.heartbeats),i=nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return at.warn(n),""}}}function io(){return new Date().toISOString().substring(0,10)}function mh(t,e=hh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),oo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),oo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _h{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nd()?rd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return so(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return so(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function oo(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vh(t){Fn(new cn("platform-logger",e=>new Od(e),"PRIVATE")),Fn(new cn("heartbeat",e=>new gh(e),"PRIVATE")),nn(Cs,no,t),nn(Cs,no,"esm2017"),nn("fire-js","")}vh("");function li(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function hc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yh=hc,pc=new zn("auth","Firebase",hc());/**
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
 */const wr=new oc("@firebase/auth");function bh(t,...e){wr.logLevel<=ee.WARN&&wr.warn(`Auth (${Gn}): ${t}`,...e)}function cr(t,...e){wr.logLevel<=ee.ERROR&&wr.error(`Auth (${Gn}): ${t}`,...e)}/**
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
 */function Fe(t,...e){throw ui(t,...e)}function qe(t,...e){return ui(t,...e)}function gc(t,e,n){const r=Object.assign(Object.assign({},yh()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function ot(t){return gc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ui(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pc.create(t,...e)}function U(t,e,...n){if(!t)throw ui(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cr(e),new Error(e)}function ct(t,e){t||rt(e)}/**
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
 */function Os(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Eh(){return ao()==="http:"||ao()==="https:"}function ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Eh()||Zf()||"connection"in navigator)?navigator.onLine:!0}function Ih(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=Xf()||ed()}get(){return wh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fi(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Sh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Th=new Jn(3e4,6e4);function Pt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ot(t,e,n,r,s={}){return _c(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=qn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:a},i);return Qf()||(l.referrerPolicy="no-referrer"),mc.fetch()(vc(t,t.config.apiHost,n,c),l)})}async function _c(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Sh),e);try{const s=new Ch(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw rr(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw rr(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw rr(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gc(t,f,l);Fe(t,f)}}catch(s){if(s instanceof At)throw s;Fe(t,"network-request-failed",{message:String(s)})}}async function Yn(t,e,n,r,s={}){const i=await Ot(t,e,n,r,s);return"mfaPendingCredential"in i&&Fe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?fi(t.config,s):`${t.config.apiScheme}://${s}`}function Rh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ch{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),Th.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qe(t,e,r);return s.customData._tokenResponse=n,s}function co(t){return t!==void 0&&t.enterprise!==void 0}class Ah{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Rh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ph(t,e){return Ot(t,"GET","/v2/recaptchaConfig",Pt(t,e))}/**
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
 */async function Oh(t,e){return Ot(t,"POST","/v1/accounts:delete",e)}async function yc(t,e){return Ot(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kh(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=di(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pn(os(s.auth_time)),issuedAtTime:Pn(os(s.iat)),expirationTime:Pn(os(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function os(t){return Number(t)*1e3}function di(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cr("JWT malformed, contained fewer than 3 sections"),null;try{const s=rc(n);return s?JSON.parse(s):(cr("Failed to decode base64 JWT payload"),null)}catch(s){return cr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lo(t){const e=di(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $n(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&Nh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Nh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Dh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ks{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pn(this.lastLoginAt),this.creationTime=Pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ir(t){var e;const n=t.auth,r=await t.getIdToken(),s=await $n(t,yc(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bc(i.providerUserInfo):[],c=Mh(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ks(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function xh(t){const e=ut(t);await Ir(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bc(t){return t.map(e=>{var{providerId:n}=e,r=li(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Lh(t,e){const n=await _c(t,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",mc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Uh(t,e){return Ot(t,"POST","/v2/accounts:revokeToken",Pt(t,e))}/**
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
 */class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=lo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Lh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
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
 */function ht(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=li(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ks(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $n(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kh(this,e)}reload(){return xh(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ir(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await $n(this,Oh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:O,isAnonymous:j,providerData:ae,stsTokenManager:q}=n;U(N&&q,e,"internal-error");const K=rn.fromJSON(this.name,q);U(typeof N=="string",e,"internal-error"),ht(d,e.name),ht(p,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof j=="boolean",e,"internal-error"),ht(g,e.name),ht(S,e.name),ht(A,e.name),ht(F,e.name),ht(x,e.name),ht(k,e.name);const W=new st({uid:N,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:j,photoURL:S,phoneNumber:g,tenantId:A,stsTokenManager:K,createdAt:x,lastLoginAt:k});return ae&&Array.isArray(ae)&&(W.providerData=ae.map(se=>Object.assign({},se))),F&&(W._redirectEventId=F),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new rn;s.updateFromServerResponse(n);const i=new st({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ir(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new rn;c.updateFromIdToken(r);const a=new st({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ks(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
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
 */const uo=new Map;function it(t){ct(t instanceof Function,"Expected a class definition");let e=uo.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uo.set(t,e),e)}/**
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
 */class Ec{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ec.type="NONE";const fo=Ec;/**
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
 */function lr(t,e,n){return`firebase:${t}:${e}:${n}`}class sn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=lr(this.userKey,s.apiKey,i),this.fullPersistenceKey=lr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sn(it(fo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||it(fo);const o=lr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const d=st._fromJSON(e,f);l!==i&&(c=d),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new sn(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new sn(i,e,r))}}/**
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
 */function ho(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cc(e))return"Blackberry";if(Ac(e))return"Webos";if(Ic(e))return"Safari";if((e.includes("chrome/")||Sc(e))&&!e.includes("edge/"))return"Chrome";if(Rc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wc(t=be()){return/firefox\//i.test(t)}function Ic(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sc(t=be()){return/crios\//i.test(t)}function Tc(t=be()){return/iemobile/i.test(t)}function Rc(t=be()){return/android/i.test(t)}function Cc(t=be()){return/blackberry/i.test(t)}function Ac(t=be()){return/webos/i.test(t)}function hi(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fh(t=be()){var e;return hi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hh(){return td()&&document.documentMode===10}function Pc(t=be()){return hi(t)||Rc(t)||Ac(t)||Cc(t)||/windows phone/i.test(t)||Tc(t)}/**
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
 */function Oc(t,e=[]){let n;switch(t){case"Browser":n=ho(be());break;case"Worker":n=`${ho(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${r}`}/**
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
 */class $h{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Bh(t,e={}){return Ot(t,"GET","/v2/passwordPolicy",Pt(t,e))}/**
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
 */const jh=6;class Vh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Wh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new po(this),this.idTokenSubscription=new po(this),this.beforeStateQueue=new $h(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yc(this,{idToken:e}),r=await st._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ir(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ih()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(ot(this));const n=e?ut(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bh(this),n=new Vh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Uh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kt(t){return ut(t)}class po{constructor(e){this.auth=e,this.observer=null,this.addObserver=cd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Kh(t){Fr=t}function kc(t){return Fr.loadJS(t)}function zh(){return Fr.recaptchaEnterpriseScript}function qh(){return Fr.gapiScript}function Gh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Jh="recaptcha-enterprise",Yh="NO_RECAPTCHA";class Xh{constructor(e){this.type=Jh,this.auth=Kt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Ph(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ah(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;co(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Yh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&co(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=zh();a.length!==0&&(a+=c),kc(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function go(t,e,n,r=!1){const s=new Xh(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ns(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await go(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await go(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Qh(t,e){const n=lc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(br(i,e??{}))return s;Fe(s,"already-initialized")}return n.initialize({options:e})}function Zh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ep(t,e,n){const r=Kt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Nc(e),{host:o,port:c}=tp(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),np()}function Nc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tp(t){const e=Nc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:mo(o)}}}function mo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function np(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class pi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function rp(t,e){return Ot(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function sp(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",Pt(t,e))}/**
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
 */async function ip(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}async function op(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}/**
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
 */class Bn extends pi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ns(e,n,"signInWithPassword",sp);case"emailLink":return ip(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ns(e,r,"signUpPassword",rp);case"emailLink":return op(e,{idToken:n,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function on(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",Pt(t,e))}/**
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
 */const ap="http://localhost";class jt extends pi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=li(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return on(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,on(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,on(e,n)}buildRequest(){const e={requestUri:ap,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qn(n)}return e}}/**
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
 */function cp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lp(t){const e=yn(bn(t)).link,n=e?yn(bn(e)).deep_link_id:null,r=yn(bn(t)).deep_link_id;return(r?yn(bn(r)).link:null)||r||n||e||t}class gi{constructor(e){var n,r,s,i,o,c;const a=yn(bn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,d=cp((s=a.mode)!==null&&s!==void 0?s:null);U(l&&f&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=lp(e);try{return new gi(n)}catch{return null}}}/**
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
 */class hn{constructor(){this.providerId=hn.PROVIDER_ID}static credential(e,n){return Bn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gi.parseLink(n);return U(r,"argument-error"),Bn._fromEmailAndCode(e,r.code,r.tenantId)}}hn.PROVIDER_ID="password";hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xn extends Dc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yt extends Xn{constructor(){super("facebook.com")}static credential(e){return jt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
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
 */class bt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class Et extends Xn{constructor(){super("github.com")}static credential(e){return jt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class wt extends Xn{constructor(){super("twitter.com")}static credential(e,n){return jt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
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
 */async function up(t,e){return Yn(t,"POST","/v1/accounts:signUp",Pt(t,e))}/**
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
 */class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await st._fromIdTokenResponse(e,r,s),o=_o(r);return new Vt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_o(r);return new Vt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _o(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sr extends At{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sr(e,n,r,s)}}function xc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sr._fromErrorAndOperation(t,i,e,r):i})}async function fp(t,e,n=!1){const r=await $n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vt._forOperation(t,"link",r)}/**
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
 */async function dp(t,e,n=!1){const{auth:r}=t;if(Ke(r.app))return Promise.reject(ot(r));const s="reauthenticate";try{const i=await $n(t,xc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=di(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),Vt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),i}}/**
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
 */async function Mc(t,e,n=!1){if(Ke(t.app))return Promise.reject(ot(t));const r="signIn",s=await xc(t,r,e),i=await Vt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function hp(t,e){return Mc(Kt(t),e)}/**
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
 */async function Lc(t){const e=Kt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function n_(t,e,n){if(Ke(t.app))return Promise.reject(ot(t));const r=Kt(t),o=await Ns(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",up).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Lc(t),a}),c=await Vt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function r_(t,e,n){return Ke(t.app)?Promise.reject(ot(t)):hp(ut(t),hn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lc(t),r})}function pp(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function gp(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function mp(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}function _p(t){return ut(t).signOut()}const Tr="__sak";/**
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
 */class Uc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tr,"1"),this.storage.removeItem(Tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vp=1e3,yp=10;class Fc extends Uc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Hh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fc.type="LOCAL";const bp=Fc;/**
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
 */class Hc extends Uc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hc.type="SESSION";const $c=Hc;/**
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
 */function Ep(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Hr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Ep(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hr.receivers=[];/**
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
 */function mi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=mi("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function Ip(t){Ge().location.href=t}/**
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
 */function Bc(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Sp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Rp(){return Bc()?self:null}/**
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
 */const jc="firebaseLocalStorageDb",Cp=1,Rr="firebaseLocalStorage",Vc="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $r(t,e){return t.transaction([Rr],e?"readwrite":"readonly").objectStore(Rr)}function Ap(){const t=indexedDB.deleteDatabase(jc);return new Qn(t).toPromise()}function Ds(){const t=indexedDB.open(jc,Cp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rr,{keyPath:Vc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rr)?e(r):(r.close(),await Ap(),e(await Ds()))})})}async function vo(t,e,n){const r=$r(t,!0).put({[Vc]:e,value:n});return new Qn(r).toPromise()}async function Pp(t,e){const n=$r(t,!1).get(e),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function yo(t,e){const n=$r(t,!0).delete(e);return new Qn(n).toPromise()}const Op=800,kp=3;class Wc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ds(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hr._getInstance(Rp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Sp(),!this.activeServiceWorker)return;this.sender=new wp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ds();return await vo(e,Tr,"1"),await yo(e,Tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Pp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$r(s,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Op)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wc.type="LOCAL";const Np=Wc;new Jn(3e4,6e4);/**
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
 */function Dp(t,e){return e?it(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _i extends pi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,n){return on(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xp(t){return Mc(t.auth,new _i(t),t.bypassAuthState)}function Mp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),dp(n,new _i(t),t.bypassAuthState)}async function Lp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),fp(n,new _i(t),t.bypassAuthState)}/**
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
 */class Kc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xp;case"linkViaPopup":case"linkViaRedirect":return Lp;case"reauthViaPopup":case"reauthViaRedirect":return Mp;default:Fe(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Up=new Jn(2e3,1e4);class Zt extends Kc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=mi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Up.get())};e()}}Zt.currentPopupAction=null;/**
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
 */const Fp="pendingRedirect",ur=new Map;class Hp extends Kc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ur.get(this.auth._key());if(!e){try{const r=await $p(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ur.set(this.auth._key(),e)}return this.bypassAuthState||ur.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $p(t,e){const n=Vp(e),r=jp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Bp(t,e){ur.set(t._key(),e)}function jp(t){return it(t._redirectPersistence)}function Vp(t){return lr(Fp,t.config.apiKey,t.name)}async function Wp(t,e,n=!1){if(Ke(t.app))return Promise.reject(ot(t));const r=Kt(t),s=Dp(r,e),o=await new Hp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Kp=10*60*1e3;class zp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kp&&this.cachedEventUids.clear(),this.cachedEventUids.has(bo(e))}saveEventToCache(e){this.cachedEventUids.add(bo(e)),this.lastProcessedEventTime=Date.now()}}function bo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zc(t);default:return!1}}/**
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
 */async function Gp(t,e={}){return Ot(t,"GET","/v1/projects",e)}/**
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
 */const Jp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yp=/^https?/;async function Xp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gp(t);for(const n of e)try{if(Qp(n))return}catch{}Fe(t,"unauthorized-domain")}function Qp(t){const e=Os(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Yp.test(n))return!1;if(Jp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Zp=new Jn(3e4,6e4);function Eo(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eg(t){return new Promise((e,n)=>{var r,s,i;function o(){Eo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eo(),n(qe(t,"network-request-failed"))},timeout:Zp.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const c=Gh("iframefcb");return Ge()[c]=()=>{gapi.load?o():n(qe(t,"network-request-failed"))},kc(`${qh()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw fr=null,e})}let fr=null;function tg(t){return fr=fr||eg(t),fr}/**
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
 */const ng=new Jn(5e3,15e3),rg="__/auth/iframe",sg="emulator/auth/iframe",ig={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ag(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fi(e,sg):`https://${t.config.authDomain}/${rg}`,r={apiKey:e.apiKey,appName:t.name,v:Gn},s=og.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qn(r).slice(1)}`}async function cg(t){const e=await tg(t),n=Ge().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:ag(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ig,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qe(t,"network-request-failed"),c=Ge().setTimeout(()=>{i(o)},ng.get());function a(){Ge().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const lg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ug=500,fg=600,dg="_blank",hg="http://localhost";class wo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pg(t,e,n,r=ug,s=fg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},lg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=be().toLowerCase();n&&(c=Sc(l)?dg:n),wc(l)&&(e=e||hg,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[g,S])=>`${p}${g}=${S},`,"");if(Fh(l)&&c!=="_self")return gg(e||"",c),new wo(null);const d=window.open(e||"",c,f);U(d,t,"popup-blocked");try{d.focus()}catch{}return new wo(d)}function gg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mg="__/auth/handler",_g="emulator/auth/handler",vg=encodeURIComponent("fac");async function Io(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gn,eventId:s};if(e instanceof Dc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ad(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Xn){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${vg}=${encodeURIComponent(a)}`:"";return`${yg(t)}?${qn(c).slice(1)}${l}`}function yg({config:t}){return t.emulator?fi(t,_g):`https://${t.authDomain}/${mg}`}/**
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
 */const as="webStorageSupport";class bg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$c,this._completeRedirectFn=Wp,this._overrideRedirectResult=Bp}async _openPopup(e,n,r,s){var i;ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Io(e,n,r,Os(),s);return pg(e,o,mi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Io(e,n,r,Os(),s);return Ip(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cg(e),r=new zp(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(as,{type:as},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[as];o!==void 0&&n(!!o),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pc()||Ic()||hi()}}const Eg=bg;var So="@firebase/auth",To="1.7.9";/**
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
 */class wg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ig(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sg(t){Fn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oc(t)},l=new Wh(r,s,i,a);return Zh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new cn("auth-internal",e=>{const n=Kt(e.getProvider("auth").getImmediate());return(r=>new wg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(So,To,Ig(t)),nn(So,To,"esm2017")}/**
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
 */const Tg=5*60,Rg=ic("authIdTokenMaxAge")||Tg;let Ro=null;const Cg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Rg)return;const s=n==null?void 0:n.token;Ro!==s&&(Ro=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qc(t=lh()){const e=lc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Qh(t,{popupRedirectResolver:Eg,persistence:[Np,bp,$c]}),r=ic("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Cg(i.toString());gp(n,o,()=>o(n.currentUser)),pp(n,c=>o(c))}}const s=Jf("auth");return s&&ep(n,`http://${s}`),n}function Ag(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Kh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ag().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sg("Browser");/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qt=typeof document<"u";function Gc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Gc(t.default)}const Z=Object.assign;function cs(t,e){const n={};for(const r in e){const s=e[r];n[r]=He(s)?s.map(t):t(s)}return n}const On=()=>{},He=Array.isArray,Jc=/#/g,Og=/&/g,kg=/\//g,Ng=/=/g,Dg=/\?/g,Yc=/\+/g,xg=/%5B/g,Mg=/%5D/g,Xc=/%5E/g,Lg=/%60/g,Qc=/%7B/g,Ug=/%7C/g,Zc=/%7D/g,Fg=/%20/g;function vi(t){return encodeURI(""+t).replace(Ug,"|").replace(xg,"[").replace(Mg,"]")}function Hg(t){return vi(t).replace(Qc,"{").replace(Zc,"}").replace(Xc,"^")}function xs(t){return vi(t).replace(Yc,"%2B").replace(Fg,"+").replace(Jc,"%23").replace(Og,"%26").replace(Lg,"`").replace(Qc,"{").replace(Zc,"}").replace(Xc,"^")}function $g(t){return xs(t).replace(Ng,"%3D")}function Bg(t){return vi(t).replace(Jc,"%23").replace(Dg,"%3F")}function jg(t){return t==null?"":Bg(t).replace(kg,"%2F")}function jn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Vg=/\/$/,Wg=t=>t.replace(Vg,"");function ls(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Gg(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:jn(o)}}function Kg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Co(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ln(e.matched[r],n.matched[s])&&el(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function el(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qg(t[n],e[n]))return!1;return!0}function qg(t,e){return He(t)?Ao(t,e):He(e)?Ao(e,t):t===e}function Ao(t,e){return He(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Gg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vn;(function(t){t.pop="pop",t.push="push"})(Vn||(Vn={}));var kn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kn||(kn={}));function Jg(t){if(!t)if(Qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wg(t)}const Yg=/^[^#]+#/;function Xg(t,e){return t.replace(Yg,"#")+e}function Qg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Br=()=>({left:window.scrollX,top:window.scrollY});function Zg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Qg(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Po(t,e){return(history.state?history.state.position-e:-1)+t}const Ms=new Map;function em(t,e){Ms.set(t,e)}function tm(t){const e=Ms.get(t);return Ms.delete(t),e}let nm=()=>location.protocol+"//"+location.host;function tl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Co(a,"")}return Co(n,t)+r+s}function rm(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const g=tl(t,location),S=n.value,A=e.value;let F=0;if(p){if(n.value=g,e.value=p,o&&o===S){o=null;return}F=A?p.position-A.position:0}else r(g);s.forEach(x=>{x(n.value,S,{delta:F,type:Vn.pop,direction:F?F>0?kn.forward:kn.back:kn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const g=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(Z({},p.state,{scroll:Br()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:d}}function Oo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Br():null}}function sm(t){const{history:e,location:n}=window,r={value:tl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:nm()+t+a;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(a,l){const f=Z({},e.state,Oo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=Z({},s.value,e.state,{forward:a,scroll:Br()});i(f.current,f,!0);const d=Z({},Oo(r.value,a,null),{position:f.position+1},l);i(a,d,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function im(t){t=Jg(t);const e=sm(t),n=rm(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:Xg.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function om(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),im(t)}function am(t){return typeof t=="string"||t&&typeof t=="object"}function nl(t){return typeof t=="string"||typeof t=="symbol"}const rl=Symbol("");var ko;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ko||(ko={}));function un(t,e){return Z(new Error,{type:t,[rl]:!0},e)}function Qe(t,e){return t instanceof Error&&rl in t&&(e==null||!!(t.type&e))}const No="[^/]+?",cm={sensitive:!1,strict:!1,start:!0,end:!0},lm=/[.+*?^${}()[\]/\\]/g;function um(t,e){const n=Z({},cm,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(lm,"\\$&"),g+=40;else if(p.type===1){const{value:S,repeatable:A,optional:F,regexp:x}=p;i.push({name:S,repeatable:A,optional:F});const k=x||No;if(k!==No){g+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${S}" (${k}): `+O.message)}}let N=A?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(N=F&&l.length<2?`(?:/${N})`:"/"+N),F&&(N+="?"),s+=N,g+=20,F&&(g+=-8),A&&(g+=-20),k===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",S=i[p-1];d[S.name]=g&&S.repeatable?g.split("/"):g}return d}function a(l){let f="",d=!1;for(const p of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:S,repeatable:A,optional:F}=g,x=S in l?l[S]:"";if(He(x)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const k=He(x)?x.join("/"):x;if(!k)if(F)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);f+=k}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function fm(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function sl(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=fm(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Do(r))return 1;if(Do(s))return-1}return s.length-r.length}function Do(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dm={type:0,value:""},hm=/[a-zA-Z0-9_]/;function pm(t){if(!t)return[[]];if(t==="/")return[[dm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&d(),o()):a===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:hm.test(a)?p():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function gm(t,e,n){const r=um(pm(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mm(t,e){const n=[],r=new Map;e=Uo({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const S=!g,A=Mo(d);A.aliasOf=g&&g.record;const F=Uo(e,d),x=[A];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const j of O)x.push(Mo(Z({},A,{components:g?g.record.components:A.components,path:j,aliasOf:g?g.record:A})))}let k,N;for(const O of x){const{path:j}=O;if(p&&j[0]!=="/"){const ae=p.record.path,q=ae[ae.length-1]==="/"?"":"/";O.path=p.record.path+(j&&q+j)}if(k=gm(O,p,F),g?g.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),S&&d.name&&!Lo(k)&&o(d.name)),il(k)&&a(k),A.children){const ae=A.children;for(let q=0;q<ae.length;q++)i(ae[q],k,g&&g.children[q])}g=g||k}return N?()=>{o(N)}:On}function o(d){if(nl(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function a(d){const p=ym(d,n);n.splice(p,0,d),d.record.name&&!Lo(d)&&r.set(d.record.name,d)}function l(d,p){let g,S={},A,F;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw un(1,{location:d});F=g.record.name,S=Z(xo(p.params,g.keys.filter(N=>!N.optional).concat(g.parent?g.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&xo(d.params,g.keys.map(N=>N.name))),A=g.stringify(S)}else if(d.path!=null)A=d.path,g=n.find(N=>N.re.test(A)),g&&(S=g.parse(A),F=g.record.name);else{if(g=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!g)throw un(1,{location:d,currentLocation:p});F=g.record.name,S=Z({},p.params,d.params),A=g.stringify(S)}const x=[];let k=g;for(;k;)x.unshift(k.record),k=k.parent;return{name:F,path:A,params:S,matched:x,meta:vm(x)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function xo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Mo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_m(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _m(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vm(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function Uo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ym(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;sl(t,e[i])<0?r=i:n=i+1}const s=bm(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function bm(t){let e=t;for(;e=e.parent;)if(il(e)&&sl(t,e)===0)return e}function il({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Em(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Yc," "),o=i.indexOf("="),c=jn(o<0?i:i.slice(0,o)),a=o<0?null:jn(i.slice(o+1));if(c in e){let l=e[c];He(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Fo(t){let e="";for(let n in t){const r=t[n];if(n=$g(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&xs(i)):[r&&xs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=He(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Im=Symbol(""),Ho=Symbol(""),jr=Symbol(""),ol=Symbol(""),Ls=Symbol("");function _n(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(un(4,{from:n,to:e})):p instanceof Error?a(p):am(p)?a(un(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},f=i(()=>t.call(r&&r.instances[s],e,n,l));let d=Promise.resolve(f);t.length<3&&(d=d.then(l)),d.catch(p=>a(p))})}function us(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Gc(a)){const f=(a.__vccOpts||a)[e];f&&i.push(vt(f,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=Pg(f)?f.default:f;o.mods[c]=f,o.components[c]=d;const g=(d.__vccOpts||d)[e];return g&&vt(g,n,r,o,c,s)()}))}}return i}function $o(t){const e=Ue(jr),n=Ue(ol),r=Ne(()=>{const a=Ft(t.to);return e.resolve(a)}),s=Ne(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(ln.bind(null,f));if(p>-1)return p;const g=Bo(a[l-2]);return l>1&&Bo(f)===g&&d[d.length-1].path!==g?d.findIndex(ln.bind(null,a[l-2])):p}),i=Ne(()=>s.value>-1&&Cm(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&el(n.params,r.value.params));function c(a={}){return Rm(a)?e[Ft(t.replace)?"replace":"push"](Ft(t.to)).catch(On):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Sm=wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$o,setup(t,{slots:e}){const n=dn($o(t)),{options:r}=Ue(jr),s=Ne(()=>({[jo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Qa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Tm=Sm;function Rm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Cm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!He(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jo=(t,e,n)=>t??e??n,Am=wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ue(Ls),s=Ne(()=>t.route||r.value),i=Ue(Ho,0),o=Ne(()=>{let l=Ft(i);const{matched:f}=s.value;let d;for(;(d=f[l])&&!d.components;)l++;return l}),c=Ne(()=>s.value.matched[o.value]);ir(Ho,Ne(()=>o.value+1)),ir(Im,c),ir(Ls,s);const a=ei();return Cn(()=>[a.value,c.value,t.name],([l,f,d],[p,g,S])=>{f&&(f.instances[d]=l,g&&g!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!ln(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,d=c.value,p=d&&d.components[f];if(!p)return Vo(n.default,{Component:p,route:l});const g=d.props[f],S=g?g===!0?l.params:typeof g=="function"?g(l):g:null,F=Qa(p,Z({},S,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[f]=null)},ref:a}));return Vo(n.default,{Component:F,route:l})||F}}});function Vo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Pm=Am;function Om(t){const e=mm(t.routes,t),n=t.parseQuery||Em,r=t.stringifyQuery||Fo,s=t.history,i=_n(),o=_n(),c=_n(),a=Jl(pt);let l=pt;Qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=cs.bind(null,v=>""+v),d=cs.bind(null,jg),p=cs.bind(null,jn);function g(v,P){let R,D;return nl(v)?(R=e.getRecordMatcher(v),D=P):D=v,e.addRoute(D,R)}function S(v){const P=e.getRecordMatcher(v);P&&e.removeRoute(P)}function A(){return e.getRoutes().map(v=>v.record)}function F(v){return!!e.getRecordMatcher(v)}function x(v,P){if(P=Z({},P||a.value),typeof v=="string"){const h=ls(n,v,P.path),m=e.resolve({path:h.path},P),y=s.createHref(h.fullPath);return Z(h,m,{params:p(m.params),hash:jn(h.hash),redirectedFrom:void 0,href:y})}let R;if(v.path!=null)R=Z({},v,{path:ls(n,v.path,P.path).path});else{const h=Z({},v.params);for(const m in h)h[m]==null&&delete h[m];R=Z({},v,{params:d(h)}),P.params=d(P.params)}const D=e.resolve(R,P),X=v.hash||"";D.params=f(p(D.params));const oe=Kg(r,Z({},v,{hash:Hg(X),path:D.path})),u=s.createHref(oe);return Z({fullPath:oe,hash:X,query:r===Fo?wm(v.query):v.query||{}},D,{redirectedFrom:void 0,href:u})}function k(v){return typeof v=="string"?ls(n,v,a.value.path):Z({},v)}function N(v,P){if(l!==v)return un(8,{from:P,to:v})}function O(v){return q(v)}function j(v){return O(Z(k(v),{replace:!0}))}function ae(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:R}=P;let D=typeof R=="function"?R(v):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),Z({query:v.query,hash:v.hash,params:D.path!=null?{}:v.params},D)}}function q(v,P){const R=l=x(v),D=a.value,X=v.state,oe=v.force,u=v.replace===!0,h=ae(R);if(h)return q(Z(k(h),{state:typeof h=="object"?Z({},X,h.state):X,force:oe,replace:u}),P||R);const m=R;m.redirectedFrom=P;let y;return!oe&&zg(r,D,R)&&(y=un(16,{to:m,from:D}),$e(D,D,!0,!1)),(y?Promise.resolve(y):se(m,D)).catch(_=>Qe(_)?Qe(_,2)?_:dt(_):J(_,m,D)).then(_=>{if(_){if(Qe(_,2))return q(Z({replace:u},k(_.to),{state:typeof _.to=="object"?Z({},X,_.to.state):X,force:oe}),P||m)}else _=Te(m,D,!0,u,X);return ge(m,D,_),_})}function K(v,P){const R=N(v,P);return R?Promise.reject(R):Promise.resolve()}function W(v){const P=qt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(v):v()}function se(v,P){let R;const[D,X,oe]=km(v,P);R=us(D.reverse(),"beforeRouteLeave",v,P);for(const h of D)h.leaveGuards.forEach(m=>{R.push(vt(m,v,P))});const u=K.bind(null,v,P);return R.push(u),ke(R).then(()=>{R=[];for(const h of i.list())R.push(vt(h,v,P));return R.push(u),ke(R)}).then(()=>{R=us(X,"beforeRouteUpdate",v,P);for(const h of X)h.updateGuards.forEach(m=>{R.push(vt(m,v,P))});return R.push(u),ke(R)}).then(()=>{R=[];for(const h of oe)if(h.beforeEnter)if(He(h.beforeEnter))for(const m of h.beforeEnter)R.push(vt(m,v,P));else R.push(vt(h.beforeEnter,v,P));return R.push(u),ke(R)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),R=us(oe,"beforeRouteEnter",v,P,W),R.push(u),ke(R))).then(()=>{R=[];for(const h of o.list())R.push(vt(h,v,P));return R.push(u),ke(R)}).catch(h=>Qe(h,8)?h:Promise.reject(h))}function ge(v,P,R){c.list().forEach(D=>W(()=>D(v,P,R)))}function Te(v,P,R,D,X){const oe=N(v,P);if(oe)return oe;const u=P===pt,h=Qt?history.state:{};R&&(D||u?s.replace(v.fullPath,Z({scroll:u&&h&&h.scroll},X)):s.push(v.fullPath,X)),a.value=v,$e(v,P,R,u),dt()}let Ee;function kt(){Ee||(Ee=s.listen((v,P,R)=>{if(!Zn.listening)return;const D=x(v),X=ae(D);if(X){q(Z(X,{replace:!0}),D).catch(On);return}l=D;const oe=a.value;Qt&&em(Po(oe.fullPath,R.delta),Br()),se(D,oe).catch(u=>Qe(u,12)?u:Qe(u,2)?(q(u.to,D).then(h=>{Qe(h,20)&&!R.delta&&R.type===Vn.pop&&s.go(-1,!1)}).catch(On),Promise.reject()):(R.delta&&s.go(-R.delta,!1),J(u,D,oe))).then(u=>{u=u||Te(D,oe,!1),u&&(R.delta&&!Qe(u,8)?s.go(-R.delta,!1):R.type===Vn.pop&&Qe(u,20)&&s.go(-1,!1)),ge(D,oe,u)}).catch(On)}))}let ft=_n(),ie=_n(),V;function J(v,P,R){dt(v);const D=ie.list();return D.length?D.forEach(X=>X(v,P,R)):console.error(v),Promise.reject(v)}function Ye(){return V&&a.value!==pt?Promise.resolve():new Promise((v,P)=>{ft.add([v,P])})}function dt(v){return V||(V=!v,kt(),ft.list().forEach(([P,R])=>v?R(v):P()),ft.reset()),v}function $e(v,P,R,D){const{scrollBehavior:X}=t;if(!Qt||!X)return Promise.resolve();const oe=!R&&tm(Po(v.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return ti().then(()=>X(v,P,oe)).then(u=>u&&Zg(u)).catch(u=>J(u,v,P))}const we=v=>s.go(v);let zt;const qt=new Set,Zn={currentRoute:a,listening:!0,addRoute:g,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:A,resolve:x,options:t,push:O,replace:j,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ie.add,isReady:Ye,install(v){const P=this;v.component("RouterLink",Tm),v.component("RouterView",Pm),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ft(a)}),Qt&&!zt&&a.value===pt&&(zt=!0,O(s.location).catch(X=>{}));const R={};for(const X in pt)Object.defineProperty(R,X,{get:()=>a.value[X],enumerable:!0});v.provide(jr,P),v.provide(ol,ha(R)),v.provide(Ls,a);const D=v.unmount;qt.add(v),v.unmount=function(){qt.delete(v),qt.size<1&&(l=pt,Ee&&Ee(),Ee=null,a.value=pt,zt=!1,V=!1),D()}}};function ke(v){return v.reduce((P,R)=>P.then(()=>W(R)),Promise.resolve())}return Zn}function km(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>ln(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>ln(l,a))||s.push(a))}return[n,r,s]}function al(){return Ue(jr)}var Nm=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let cl;const Vr=t=>cl=t,ll=Symbol();function Us(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Nn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Nn||(Nn={}));function Dm(){const t=Xo(!0),e=t.run(()=>ei({}));let n=[],r=[];const s=Zs({install(i){Vr(s),s._a=i,i.provide(ll,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Nm?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ul=()=>{};function Wo(t,e,n,r=ul){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qo()&&Pl(s),s}function Jt(t,...e){t.slice().forEach(n=>{n(...e)})}const xm=t=>t(),Ko=Symbol(),fs=Symbol();function Fs(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Us(s)&&Us(r)&&t.hasOwnProperty(n)&&!ce(r)&&!Ut(r)?t[n]=Fs(s,r):t[n]=r}return t}const Mm=Symbol();function Lm(t){return!Us(t)||!t.hasOwnProperty(Mm)}const{assign:gt}=Object;function Um(t){return!!(ce(t)&&t.effect)}function Fm(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=s?s():{});const f=Ql(n.state.value[t]);return gt(f,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Zs(Ne(()=>{Vr(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return a=fl(t,l,e,n,r,!0),a}function fl(t,e,n={},r,s,i){let o;const c=gt({actions:{}},n),a={deep:!0};let l,f,d=[],p=[],g;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),ei({});let A;function F(K){let W;l=f=!1,typeof K=="function"?(K(r.state.value[t]),W={type:Nn.patchFunction,storeId:t,events:g}):(Fs(r.state.value[t],K),W={type:Nn.patchObject,payload:K,storeId:t,events:g});const se=A=Symbol();ti().then(()=>{A===se&&(l=!0)}),f=!0,Jt(d,W,r.state.value[t])}const x=i?function(){const{state:W}=n,se=W?W():{};this.$patch(ge=>{gt(ge,se)})}:ul;function k(){o.stop(),d=[],p=[],r._s.delete(t)}const N=(K,W="")=>{if(Ko in K)return K[fs]=W,K;const se=function(){Vr(r);const ge=Array.from(arguments),Te=[],Ee=[];function kt(V){Te.push(V)}function ft(V){Ee.push(V)}Jt(p,{args:ge,name:se[fs],store:j,after:kt,onError:ft});let ie;try{ie=K.apply(this&&this.$id===t?this:j,ge)}catch(V){throw Jt(Ee,V),V}return ie instanceof Promise?ie.then(V=>(Jt(Te,V),V)).catch(V=>(Jt(Ee,V),Promise.reject(V))):(Jt(Te,ie),ie)};return se[Ko]=!0,se[fs]=W,se},O={_p:r,$id:t,$onAction:Wo.bind(null,p),$patch:F,$reset:x,$subscribe(K,W={}){const se=Wo(d,K,W.detached,()=>ge()),ge=o.run(()=>Cn(()=>r.state.value[t],Te=>{(W.flush==="sync"?f:l)&&K({storeId:t,type:Nn.direct,events:g},Te)},gt({},a,W)));return se},$dispose:k},j=dn(O);r._s.set(t,j);const q=(r._a&&r._a.runWithContext||xm)(()=>r._e.run(()=>(o=Xo()).run(()=>e({action:N}))));for(const K in q){const W=q[K];if(ce(W)&&!Um(W)||Ut(W))i||(S&&Lm(W)&&(ce(W)?W.value=S[K]:Fs(W,S[K])),r.state.value[t][K]=W);else if(typeof W=="function"){const se=N(W,K);q[K]=se,c.actions[K]=W}}return gt(j,q),gt(G(j),q),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:K=>{F(W=>{gt(W,K)})}}),r._p.forEach(K=>{gt(j,o.run(()=>K({store:j,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(j.$state,S),l=!0,f=!0,j}function Hm(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(c,a){const l=xu();return c=c||(l?Ue(ll,null):null),c&&Vr(c),c=cl,c._s.has(r)||(i?fl(r,e,s,c):Fm(r,s,c)),c._s.get(r)}return o.$id=r,o}const dl=Hm("authStore",{state(){return{isLogin:localStorage.getItem("isLogin"),currentUser:JSON.parse(localStorage.getItem("currentUser"))}},getters:{},actions:{login(t){localStorage.setItem("isLogin",!0),localStorage.setItem("currentUser",JSON.stringify(t))},logout(){localStorage.setItem("isLogin",!1),localStorage.setItem("currentUser",null)}}}),hl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},$m={class:"header"},Bm={__name:"Header",setup(t){const e=al(),n=()=>{_p(qc()).then(()=>{dl().logout(),e.push("/auth/signin")})};return(r,s)=>(_r(),za("div",$m,[s[1]||(s[1]=Ja(" header ")),Lr("button",{onClick:s[0]||(s[0]=i=>n())},"logOut")]))}},jm=hl(Bm,[["__scopeId","data-v-cb0aa838"]]),Vm={class:"App"},Wm={class:"content"},Km={__name:"App",setup(t){al();let e=dn({});return Ra(()=>{mp(qc(),n=>{e.value=n})}),(n,r)=>{var i;const s=Iu("router-view");return _r(),za("div",Vm,[(i=Ft(e).value)!=null&&i.uid?(_r(),qa(jm,{key:0})):sf("",!0),Lr("div",Wm,[Se(s)])])}}},zm=hl(Km,[["__scopeId","data-v-cdffef3c"]]),qm="modulepreload",Gm=function(t){return"/3t-pwa/"+t},zo={},ds=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(a=>{if(a=Gm(a),a in zo)return;zo[a]=!0;const l=a.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${f}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":qm,l||(d.as="script"),d.crossOrigin="",d.href=a,c&&d.setAttribute("nonce",c),document.head.appendChild(d),l)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Jm=[{path:"/auth/signin",name:"signin",component:()=>ds(()=>import("./SignIn-C0HCkveI.js"),__vite__mapDeps([0,1])),meta:{requiredAuth:!1}},{path:"/auth/signup",name:"signup",component:()=>ds(()=>import("./SignUp-DqUdveZh.js"),__vite__mapDeps([2,3])),meta:{requiredAuth:!1}},{path:"/",name:"main",component:()=>ds(()=>import("./Main-D7Ewro4S.js"),__vite__mapDeps([4,5])),meta:{requiredAuth:!0}},{path:"/:pathMatch(.*)*",name:"404",redirect:{name:"Courses",params:{}},meta:{title:"404 ;(",requiredAuth:!0}}],pl=Om({history:om("/3t-pwa/"),routes:Jm});pl.beforeEach((t,e,n)=>{dl(),n()});var Ym="firebase",Xm="10.14.1";/**
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
 */nn(Ym,Xm,"app");const Qm={apiKey:"AIzaSyDfAqcEiLceMXThDtKSFaWYhke2BYMwHD4",authDomain:"tapp-497ad.firebaseapp.com",projectId:"tapp-497ad",storageBucket:"tapp-497ad.appspot.com",messagingSenderId:"1056111856158",appId:"1:1056111856158:web:30674d686d70dd82a9fc0f",measurementId:"G-85PYBH32MV"},Zm=Dm();uc(Qm);Hf(zm).use(Zm).use(pl).mount("#app");export{hl as _,Lr as a,Se as b,za as c,cu as d,Iu as e,Ja as f,qc as g,dl as h,n_ as i,_r as o,ei as r,r_ as s,al as u,t_ as v,e_ as w};
