const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SignIn-BSsbAkIt.js","assets/index-WVfrXQLY.js","assets/SignIn-BMY16zeM.css","assets/SignUp-DUDh-_t4.js","assets/SignUp-k7rquBz5.css","assets/Main-DgGmdM8Z.js","assets/Main-ehGRrhn2.css","assets/Tasks-B_SY1GJM.css","assets/Tasks-DhYLlJdW.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function us(t){const e=Object.create(null);for(const r of t.split(","))e[r]=1;return r=>r in e}const se={},jr=[],_t=()=>{},ef=()=>!1,Ln=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fs=t=>t.startsWith("onUpdate:"),Se=Object.assign,hs=(t,e)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)},tf=Object.prototype.hasOwnProperty,ae=(t,e)=>tf.call(t,e),G=Array.isArray,Ur=t=>Dn(t)==="[object Map]",ol=t=>Dn(t)==="[object Set]",J=t=>typeof t=="function",_e=t=>typeof t=="string",Dt=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",nl=t=>(ve(t)||J(t))&&J(t.then)&&J(t.catch),il=Object.prototype.toString,Dn=t=>il.call(t),rf=t=>Dn(t).slice(8,-1),sl=t=>Dn(t)==="[object Object]",ps=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,lo=us(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mn=t=>{const e=Object.create(null);return r=>e[r]||(e[r]=t(r))},of=/-(\w)/g,Qe=Mn(t=>t.replace(of,(e,r)=>r?r.toUpperCase():"")),nf=/\B([A-Z])/g,or=Mn(t=>t.replace(nf,"-$1").toLowerCase()),jn=Mn(t=>t.charAt(0).toUpperCase()+t.slice(1)),ni=Mn(t=>t?`on${jn(t)}`:""),Fe=(t,e)=>!Object.is(t,e),dn=(t,...e)=>{for(let r=0;r<t.length;r++)t[r](...e)},al=(t,e,r,o=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:o,value:r})},Ai=t=>{const e=parseFloat(t);return isNaN(e)?t:e},sf=t=>{const e=_e(t)?Number(t):NaN;return isNaN(e)?t:e};let Zs;const Un=()=>Zs||(Zs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gs(t){if(G(t)){const e={};for(let r=0;r<t.length;r++){const o=t[r],n=_e(o)?df(o):gs(o);if(n)for(const i in n)e[i]=n[i]}return e}else if(_e(t)||ve(t))return t}const af=/;(?![^(]*\))/g,cf=/:([^]+)/,lf=/\/\*[^]*?\*\//g;function df(t){const e={};return t.replace(lf,"").split(af).forEach(r=>{if(r){const o=r.split(cf);o.length>1&&(e[o[0].trim()]=o[1].trim())}}),e}function vr(t){let e="";if(_e(t))e=t;else if(G(t))for(let r=0;r<t.length;r++){const o=vr(t[r]);o&&(e+=o+" ")}else if(ve(t))for(const r in t)t[r]&&(e+=r+" ");return e.trim()}const uf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ff=us(uf);function cl(t){return!!t||t===""}const ll=t=>!!(t&&t.__v_isRef===!0),ms=t=>_e(t)?t:t==null?"":G(t)||ve(t)&&(t.toString===il||!J(t.toString))?ll(t)?ms(t.value):JSON.stringify(t,dl,2):String(t),dl=(t,e)=>ll(e)?dl(t,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[o,n],i)=>(r[ii(o,i)+" =>"]=n,r),{})}:ol(e)?{[`Set(${e.size})`]:[...e.values()].map(r=>ii(r))}:Dt(e)?ii(e):ve(e)&&!G(e)&&!sl(e)?String(e):e,ii=(t,e="")=>{var r;return Dt(t)?`Symbol(${(r=t.description)!=null?r:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class ul{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].pause();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].resume();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].resume()}}run(e){if(this._active){const r=Ne;try{return Ne=this,e()}finally{Ne=r}}}on(){Ne=this}off(){Ne=this.parent}stop(e){if(this._active){let r,o;for(r=0,o=this.effects.length;r<o;r++)this.effects[r].stop();for(r=0,o=this.cleanups.length;r<o;r++)this.cleanups[r]();if(this.scopes)for(r=0,o=this.scopes.length;r<o;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function fl(t){return new ul(t)}function hl(){return Ne}function hf(t,e=!1){Ne&&Ne.cleanups.push(t)}let pe;const si=new WeakSet;class pl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,si.has(this)&&(si.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ml(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ea(this),bl(this);const e=pe,r=at;pe=this,at=!0;try{return this.fn()}finally{vl(this),pe=e,at=r,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ys(e);this.deps=this.depsTail=void 0,ea(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?si.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bi(this)&&this.run()}get dirty(){return Bi(this)}}let gl=0,uo,fo;function ml(t,e=!1){if(t.flags|=8,e){t.next=fo,fo=t;return}t.next=uo,uo=t}function bs(){gl++}function vs(){if(--gl>0)return;if(fo){let e=fo;for(fo=void 0;e;){const r=e.next;e.next=void 0,e.flags&=-9,e=r}}let t;for(;uo;){let e=uo;for(uo=void 0;e;){const r=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(o){t||(t=o)}e=r}}if(t)throw t}function bl(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vl(t){let e,r=t.depsTail,o=r;for(;o;){const n=o.prevDep;o.version===-1?(o===r&&(r=n),ys(o),pf(o)):e=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=n}t.deps=e,t.depsTail=r}function Bi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(yl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function yl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wo))return;t.globalVersion=wo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Bi(t)){t.flags&=-3;return}const r=pe,o=at;pe=t,at=!0;try{bl(t);const n=t.fn(t._value);(e.version===0||Fe(n,t._value))&&(t._value=n,e.version++)}catch(n){throw e.version++,n}finally{pe=r,at=o,vl(t),t.flags&=-3}}function ys(t,e=!1){const{dep:r,prevSub:o,nextSub:n}=t;if(o&&(o.nextSub=n,t.prevSub=void 0),n&&(n.prevSub=o,t.nextSub=void 0),r.subs===t&&(r.subs=o,!o&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)ys(i,!0)}!e&&!--r.sc&&r.map&&r.map.delete(r.key)}function pf(t){const{prevDep:e,nextDep:r}=t;e&&(e.nextDep=r,t.prevDep=void 0),r&&(r.prevDep=e,t.nextDep=void 0)}let at=!0;const _l=[];function nr(){_l.push(at),at=!1}function ir(){const t=_l.pop();at=t===void 0?!0:t}function ea(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const r=pe;pe=void 0;try{e()}finally{pe=r}}}let wo=0;class gf{constructor(e,r){this.sub=e,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fn{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!pe||!at||pe===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==pe)r=this.activeLink=new gf(pe,this),pe.deps?(r.prevDep=pe.depsTail,pe.depsTail.nextDep=r,pe.depsTail=r):pe.deps=pe.depsTail=r,kl(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const o=r.nextDep;o.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=o),r.prevDep=pe.depsTail,r.nextDep=void 0,pe.depsTail.nextDep=r,pe.depsTail=r,pe.deps===r&&(pe.deps=o)}return r}trigger(e){this.version++,wo++,this.notify(e)}notify(e){bs();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{vs()}}}function kl(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let o=e.deps;o;o=o.nextDep)kl(o)}const r=t.dep.subs;r!==t&&(t.prevSub=r,r&&(r.nextSub=t)),t.dep.subs=t}}const yn=new WeakMap,yr=Symbol(""),$i=Symbol(""),Co=Symbol("");function Oe(t,e,r){if(at&&pe){let o=yn.get(t);o||yn.set(t,o=new Map);let n=o.get(r);n||(o.set(r,n=new Fn),n.map=o,n.key=r),n.track()}}function It(t,e,r,o,n,i){const s=yn.get(t);if(!s){wo++;return}const c=a=>{a&&a.trigger()};if(bs(),e==="clear")s.forEach(c);else{const a=G(t),l=a&&ps(r);if(a&&r==="length"){const d=Number(o);s.forEach((u,f)=>{(f==="length"||f===Co||!Dt(f)&&f>=d)&&c(u)})}else switch((r!==void 0||s.has(void 0))&&c(s.get(r)),l&&c(s.get(Co)),e){case"add":a?l&&c(s.get("length")):(c(s.get(yr)),Ur(t)&&c(s.get($i)));break;case"delete":a||(c(s.get(yr)),Ur(t)&&c(s.get($i)));break;case"set":Ur(t)&&c(s.get(yr));break}}vs()}function mf(t,e){const r=yn.get(t);return r&&r.get(e)}function Pr(t){const e=ne(t);return e===t?e:(Oe(e,"iterate",Co),ct(t)?e:e.map(Le))}function _s(t){return Oe(t=ne(t),"iterate",Co),t}const bf={__proto__:null,[Symbol.iterator](){return ai(this,Symbol.iterator,Le)},concat(...t){return Pr(this).concat(...t.map(e=>G(e)?Pr(e):e))},entries(){return ai(this,"entries",t=>(t[1]=Le(t[1]),t))},every(t,e){return St(this,"every",t,e,void 0,arguments)},filter(t,e){return St(this,"filter",t,e,r=>r.map(Le),arguments)},find(t,e){return St(this,"find",t,e,Le,arguments)},findIndex(t,e){return St(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return St(this,"findLast",t,e,Le,arguments)},findLastIndex(t,e){return St(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return St(this,"forEach",t,e,void 0,arguments)},includes(...t){return ci(this,"includes",t)},indexOf(...t){return ci(this,"indexOf",t)},join(t){return Pr(this).join(t)},lastIndexOf(...t){return ci(this,"lastIndexOf",t)},map(t,e){return St(this,"map",t,e,void 0,arguments)},pop(){return eo(this,"pop")},push(...t){return eo(this,"push",t)},reduce(t,...e){return ta(this,"reduce",t,e)},reduceRight(t,...e){return ta(this,"reduceRight",t,e)},shift(){return eo(this,"shift")},some(t,e){return St(this,"some",t,e,void 0,arguments)},splice(...t){return eo(this,"splice",t)},toReversed(){return Pr(this).toReversed()},toSorted(t){return Pr(this).toSorted(t)},toSpliced(...t){return Pr(this).toSpliced(...t)},unshift(...t){return eo(this,"unshift",t)},values(){return ai(this,"values",Le)}};function ai(t,e,r){const o=_s(t),n=o[e]();return o!==t&&!ct(t)&&(n._next=n.next,n.next=()=>{const i=n._next();return i.value&&(i.value=r(i.value)),i}),n}const vf=Array.prototype;function St(t,e,r,o,n,i){const s=_s(t),c=s!==t&&!ct(t),a=s[e];if(a!==vf[e]){const u=a.apply(t,i);return c?Le(u):u}let l=r;s!==t&&(c?l=function(u,f){return r.call(this,Le(u),f,t)}:r.length>2&&(l=function(u,f){return r.call(this,u,f,t)}));const d=a.call(s,l,o);return c&&n?n(d):d}function ta(t,e,r,o){const n=_s(t);let i=r;return n!==t&&(ct(t)?r.length>3&&(i=function(s,c,a){return r.call(this,s,c,a,t)}):i=function(s,c,a){return r.call(this,s,Le(c),a,t)}),n[e](i,...o)}function ci(t,e,r){const o=ne(t);Oe(o,"iterate",Co);const n=o[e](...r);return(n===-1||n===!1)&&Ss(r[0])?(r[0]=ne(r[0]),o[e](...r)):n}function eo(t,e,r=[]){nr(),bs();const o=ne(t)[e].apply(t,r);return vs(),ir(),o}const yf=us("__proto__,__v_isRef,__isVue"),wl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dt));function _f(t){Dt(t)||(t=String(t));const e=ne(this);return Oe(e,"has",t),e.hasOwnProperty(t)}class Cl{constructor(e=!1,r=!1){this._isReadonly=e,this._isShallow=r}get(e,r,o){const n=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return i;if(r==="__v_raw")return o===(n?i?Pf:Tl:i?El:xl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(o)?e:void 0;const s=G(e);if(!n){let a;if(s&&(a=bf[r]))return a;if(r==="hasOwnProperty")return _f}const c=Reflect.get(e,r,Ce(e)?e:o);return(Dt(r)?wl.has(r):yf(r))||(n||Oe(e,"get",r),i)?c:Ce(c)?s&&ps(r)?c:c.value:ve(c)?n?ws(c):Xr(c):c}}class Sl extends Cl{constructor(e=!1){super(!1,e)}set(e,r,o,n){let i=e[r];if(!this._isShallow){const a=xr(i);if(!ct(o)&&!xr(o)&&(i=ne(i),o=ne(o)),!G(e)&&Ce(i)&&!Ce(o))return a?!1:(i.value=o,!0)}const s=G(e)&&ps(r)?Number(r)<e.length:ae(e,r),c=Reflect.set(e,r,o,Ce(e)?e:n);return e===ne(n)&&(s?Fe(o,i)&&It(e,"set",r,o):It(e,"add",r,o)),c}deleteProperty(e,r){const o=ae(e,r);e[r];const n=Reflect.deleteProperty(e,r);return n&&o&&It(e,"delete",r,void 0),n}has(e,r){const o=Reflect.has(e,r);return(!Dt(r)||!wl.has(r))&&Oe(e,"has",r),o}ownKeys(e){return Oe(e,"iterate",G(e)?"length":yr),Reflect.ownKeys(e)}}class kf extends Cl{constructor(e=!1){super(!0,e)}set(e,r){return!0}deleteProperty(e,r){return!0}}const wf=new Sl,Cf=new kf,Sf=new Sl(!0);const Ni=t=>t,en=t=>Reflect.getPrototypeOf(t);function xf(t,e,r){return function(...o){const n=this.__v_raw,i=ne(n),s=Ur(i),c=t==="entries"||t===Symbol.iterator&&s,a=t==="keys"&&s,l=n[t](...o),d=r?Ni:e?Li:Le;return!e&&Oe(i,"iterate",a?$i:yr),{next(){const{value:u,done:f}=l.next();return f?{value:u,done:f}:{value:c?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function tn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ef(t,e){const r={get(n){const i=this.__v_raw,s=ne(i),c=ne(n);t||(Fe(n,c)&&Oe(s,"get",n),Oe(s,"get",c));const{has:a}=en(s),l=e?Ni:t?Li:Le;if(a.call(s,n))return l(i.get(n));if(a.call(s,c))return l(i.get(c));i!==s&&i.get(n)},get size(){const n=this.__v_raw;return!t&&Oe(ne(n),"iterate",yr),Reflect.get(n,"size",n)},has(n){const i=this.__v_raw,s=ne(i),c=ne(n);return t||(Fe(n,c)&&Oe(s,"has",n),Oe(s,"has",c)),n===c?i.has(n):i.has(n)||i.has(c)},forEach(n,i){const s=this,c=s.__v_raw,a=ne(c),l=e?Ni:t?Li:Le;return!t&&Oe(a,"iterate",yr),c.forEach((d,u)=>n.call(i,l(d),l(u),s))}};return Se(r,t?{add:tn("add"),set:tn("set"),delete:tn("delete"),clear:tn("clear")}:{add(n){!e&&!ct(n)&&!xr(n)&&(n=ne(n));const i=ne(this);return en(i).has.call(i,n)||(i.add(n),It(i,"add",n,n)),this},set(n,i){!e&&!ct(i)&&!xr(i)&&(i=ne(i));const s=ne(this),{has:c,get:a}=en(s);let l=c.call(s,n);l||(n=ne(n),l=c.call(s,n));const d=a.call(s,n);return s.set(n,i),l?Fe(i,d)&&It(s,"set",n,i):It(s,"add",n,i),this},delete(n){const i=ne(this),{has:s,get:c}=en(i);let a=s.call(i,n);a||(n=ne(n),a=s.call(i,n)),c&&c.call(i,n);const l=i.delete(n);return a&&It(i,"delete",n,void 0),l},clear(){const n=ne(this),i=n.size!==0,s=n.clear();return i&&It(n,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(n=>{r[n]=xf(n,t,e)}),r}function ks(t,e){const r=Ef(t,e);return(o,n,i)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?o:Reflect.get(ae(r,n)&&n in o?r:o,n,i)}const Tf={get:ks(!1,!1)},If={get:ks(!1,!0)},Rf={get:ks(!0,!1)};const xl=new WeakMap,El=new WeakMap,Tl=new WeakMap,Pf=new WeakMap;function Of(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Af(t){return t.__v_skip||!Object.isExtensible(t)?0:Of(rf(t))}function Xr(t){return xr(t)?t:Cs(t,!1,wf,Tf,xl)}function Il(t){return Cs(t,!1,Sf,If,El)}function ws(t){return Cs(t,!0,Cf,Rf,Tl)}function Cs(t,e,r,o,n){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=n.get(t);if(i)return i;const s=Af(t);if(s===0)return t;const c=new Proxy(t,s===2?o:r);return n.set(t,c),c}function _r(t){return xr(t)?_r(t.__v_raw):!!(t&&t.__v_isReactive)}function xr(t){return!!(t&&t.__v_isReadonly)}function ct(t){return!!(t&&t.__v_isShallow)}function Ss(t){return t?!!t.__v_raw:!1}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function xs(t){return!ae(t,"__v_skip")&&Object.isExtensible(t)&&al(t,"__v_skip",!0),t}const Le=t=>ve(t)?Xr(t):t,Li=t=>ve(t)?ws(t):t;function Ce(t){return t?t.__v_isRef===!0:!1}function kr(t){return Rl(t,!1)}function Bf(t){return Rl(t,!0)}function Rl(t,e){return Ce(t)?t:new $f(t,e)}class $f{constructor(e,r){this.dep=new Fn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?e:ne(e),this._value=r?e:Le(e),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(e){const r=this._rawValue,o=this.__v_isShallow||ct(e)||xr(e);e=o?e:ne(e),Fe(e,r)&&(this._rawValue=e,this._value=o?e:Le(e),this.dep.trigger())}}function wr(t){return Ce(t)?t.value:t}const Nf={get:(t,e,r)=>e==="__v_raw"?t:wr(Reflect.get(t,e,r)),set:(t,e,r,o)=>{const n=t[e];return Ce(n)&&!Ce(r)?(n.value=r,!0):Reflect.set(t,e,r,o)}};function Pl(t){return _r(t)?t:new Proxy(t,Nf)}class Lf{constructor(e){this.__v_isRef=!0,this._value=void 0;const r=this.dep=new Fn,{get:o,set:n}=e(r.track.bind(r),r.trigger.bind(r));this._get=o,this._set=n}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Df(t){return new Lf(t)}function Mf(t){const e=G(t)?new Array(t.length):{};for(const r in t)e[r]=Uf(t,r);return e}class jf{constructor(e,r,o){this._object=e,this._key=r,this._defaultValue=o,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return mf(ne(this._object),this._key)}}function Uf(t,e,r){const o=t[e];return Ce(o)?o:new jf(t,e,r)}class Ff{constructor(e,r,o){this.fn=e,this.setter=r,this._value=void 0,this.dep=new Fn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return ml(this,!0),!0}get value(){const e=this.dep.track();return yl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hf(t,e,r=!1){let o,n;return J(t)?o=t:(o=t.get,n=t.set),new Ff(o,n,r)}const rn={},_n=new WeakMap;let gr;function Vf(t,e=!1,r=gr){if(r){let o=_n.get(r);o||_n.set(r,o=[]),o.push(t)}}function Wf(t,e,r=se){const{immediate:o,deep:n,once:i,scheduler:s,augmentJob:c,call:a}=r,l=_=>n?_:ct(_)||n===!1||n===0?Rt(_,1):Rt(_);let d,u,f,h,m=!1,b=!1;if(Ce(t)?(u=()=>t.value,m=ct(t)):_r(t)?(u=()=>l(t),m=!0):G(t)?(b=!0,m=t.some(_=>_r(_)||ct(_)),u=()=>t.map(_=>{if(Ce(_))return _.value;if(_r(_))return l(_);if(J(_))return a?a(_,2):_()})):J(t)?e?u=a?()=>a(t,2):t:u=()=>{if(f){nr();try{f()}finally{ir()}}const _=gr;gr=d;try{return a?a(t,3,[h]):t(h)}finally{gr=_}}:u=_t,e&&n){const _=u,N=n===!0?1/0:n;u=()=>Rt(_(),N)}const T=hl(),x=()=>{d.stop(),T&&hs(T.effects,d)};if(i&&e){const _=e;e=(...N)=>{_(...N),x()}}let C=b?new Array(t.length).fill(rn):rn;const y=_=>{if(!(!(d.flags&1)||!d.dirty&&!_))if(e){const N=d.run();if(n||m||(b?N.some((H,V)=>Fe(H,C[V])):Fe(N,C))){f&&f();const H=gr;gr=d;try{const V=[N,C===rn?void 0:b&&C[0]===rn?[]:C,h];a?a(e,3,V):e(...V),C=N}finally{gr=H}}}else d.run()};return c&&c(y),d=new pl(u),d.scheduler=s?()=>s(y,!1):y,h=_=>Vf(_,!1,d),f=d.onStop=()=>{const _=_n.get(d);if(_){if(a)a(_,4);else for(const N of _)N();_n.delete(d)}},e?o?y(!0):C=d.run():s?s(y.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function Rt(t,e=1/0,r){if(e<=0||!ve(t)||t.__v_skip||(r=r||new Set,r.has(t)))return t;if(r.add(t),e--,Ce(t))Rt(t.value,e,r);else if(G(t))for(let o=0;o<t.length;o++)Rt(t[o],e,r);else if(ol(t)||Ur(t))t.forEach(o=>{Rt(o,e,r)});else if(sl(t)){for(const o in t)Rt(t[o],e,r);for(const o of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,o)&&Rt(t[o],e,r)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zo(t,e,r,o){try{return o?t(...o):t()}catch(n){Hn(n,e,r)}}function dt(t,e,r,o){if(J(t)){const n=zo(t,e,r,o);return n&&nl(n)&&n.catch(i=>{Hn(i,e,r)}),n}if(G(t)){const n=[];for(let i=0;i<t.length;i++)n.push(dt(t[i],e,r,o));return n}}function Hn(t,e,r,o=!0){const n=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||se;if(e){let c=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${r}`;for(;c;){const d=c.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](t,a,l)===!1)return}c=c.parent}if(i){nr(),zo(i,null,10,[t,a,l]),ir();return}}zf(t,r,n,o,s)}function zf(t,e,r,o=!0,n=!1){if(n)throw t;console.error(t)}const De=[];let mt=-1;const Fr=[];let Wt=null,Ar=0;const Ol=Promise.resolve();let kn=null;function Vn(t){const e=kn||Ol;return t?e.then(this?t.bind(this):t):e}function Kf(t){let e=mt+1,r=De.length;for(;e<r;){const o=e+r>>>1,n=De[o],i=So(n);i<t||i===t&&n.flags&2?e=o+1:r=o}return e}function Es(t){if(!(t.flags&1)){const e=So(t),r=De[De.length-1];!r||!(t.flags&2)&&e>=So(r)?De.push(t):De.splice(Kf(e),0,t),t.flags|=1,Al()}}function Al(){kn||(kn=Ol.then($l))}function Gf(t){G(t)?Fr.push(...t):Wt&&t.id===-1?Wt.splice(Ar+1,0,t):t.flags&1||(Fr.push(t),t.flags|=1),Al()}function ra(t,e,r=mt+1){for(;r<De.length;r++){const o=De[r];if(o&&o.flags&2){if(t&&o.id!==t.uid)continue;De.splice(r,1),r--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function Bl(t){if(Fr.length){const e=[...new Set(Fr)].sort((r,o)=>So(r)-So(o));if(Fr.length=0,Wt){Wt.push(...e);return}for(Wt=e,Ar=0;Ar<Wt.length;Ar++){const r=Wt[Ar];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Wt=null,Ar=0}}const So=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $l(t){try{for(mt=0;mt<De.length;mt++){const e=De[mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mt<De.length;mt++){const e=De[mt];e&&(e.flags&=-2)}mt=-1,De.length=0,Bl(),kn=null,(De.length||Fr.length)&&$l()}}let xe=null,Nl=null;function wn(t){const e=xe;return xe=t,Nl=t&&t.type.__scopeId||null,e}function Ll(t,e=xe,r){if(!e||t._n)return t;const o=(...n)=>{o._d&&pa(-1);const i=wn(e);let s;try{s=t(...n)}finally{wn(i),o._d&&pa(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function qf(t,e){if(xe===null)return t;const r=Yn(xe),o=t.dirs||(t.dirs=[]);for(let n=0;n<e.length;n++){let[i,s,c,a=se]=e[n];i&&(J(i)&&(i={mounted:i,updated:i}),i.deep&&Rt(s),o.push({dir:i,instance:r,value:s,oldValue:void 0,arg:c,modifiers:a}))}return t}function ur(t,e,r,o){const n=t.dirs,i=e&&e.dirs;for(let s=0;s<n.length;s++){const c=n[s];i&&(c.oldValue=i[s].value);let a=c.dir[o];a&&(nr(),dt(a,r,8,[t.el,c,t,e]),ir())}}const Dl=Symbol("_vte"),Ml=t=>t.__isTeleport,ho=t=>t&&(t.disabled||t.disabled===""),Yf=t=>t&&(t.defer||t.defer===""),oa=t=>typeof SVGElement<"u"&&t instanceof SVGElement,na=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Di=(t,e)=>{const r=t&&t.to;return _e(r)?e?e(r):null:r},Jf={name:"Teleport",__isTeleport:!0,process(t,e,r,o,n,i,s,c,a,l){const{mc:d,pc:u,pbc:f,o:{insert:h,querySelector:m,createText:b,createComment:T}}=l,x=ho(e.props);let{shapeFlag:C,children:y,dynamicChildren:_}=e;if(t==null){const N=e.el=b(""),H=e.anchor=b("");h(N,r,o),h(H,r,o);const V=(I,j)=>{C&16&&(n&&n.isCE&&(n.ce._teleportTarget=I),d(y,I,j,n,i,s,c,a))},M=()=>{const I=e.target=Di(e.props,m),j=jl(I,e,b,h);I&&(s!=="svg"&&oa(I)?s="svg":s!=="mathml"&&na(I)&&(s="mathml"),x||(V(I,j),un(e,!1)))};x&&(V(r,H),un(e,!0)),Yf(e.props)?Ue(M,i):M()}else{e.el=t.el,e.targetStart=t.targetStart;const N=e.anchor=t.anchor,H=e.target=t.target,V=e.targetAnchor=t.targetAnchor,M=ho(t.props),I=M?r:H,j=M?N:V;if(s==="svg"||oa(H)?s="svg":(s==="mathml"||na(H))&&(s="mathml"),_?(f(t.dynamicChildren,_,I,n,i,s,c),Os(t,e,!0)):a||u(t,e,I,j,n,i,s,c,!1),x)M?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):on(e,r,N,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const q=e.target=Di(e.props,m);q&&on(e,q,null,l,0)}else M&&on(e,H,V,l,1);un(e,x)}},remove(t,e,r,{um:o,o:{remove:n}},i){const{shapeFlag:s,children:c,anchor:a,targetStart:l,targetAnchor:d,target:u,props:f}=t;if(u&&(n(l),n(d)),i&&n(a),s&16){const h=i||!ho(f);for(let m=0;m<c.length;m++){const b=c[m];o(b,e,r,h,!!b.dynamicChildren)}}},move:on,hydrate:Xf};function on(t,e,r,{o:{insert:o},m:n},i=2){i===0&&o(t.targetAnchor,e,r);const{el:s,anchor:c,shapeFlag:a,children:l,props:d}=t,u=i===2;if(u&&o(s,e,r),(!u||ho(d))&&a&16)for(let f=0;f<l.length;f++)n(l[f],e,r,2);u&&o(c,e,r)}function Xf(t,e,r,o,n,i,{o:{nextSibling:s,parentNode:c,querySelector:a,insert:l,createText:d}},u){const f=e.target=Di(e.props,a);if(f){const h=ho(e.props),m=f._lpa||f.firstChild;if(e.shapeFlag&16)if(h)e.anchor=u(s(t),e,c(t),r,o,n,i),e.targetStart=m,e.targetAnchor=m&&s(m);else{e.anchor=s(t);let b=m;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,f._lpa=e.targetAnchor&&s(e.targetAnchor);break}}b=s(b)}e.targetAnchor||jl(f,e,d,l),u(m&&s(m),e,f,r,o,n,i)}un(e,h)}return e.anchor&&s(e.anchor)}const bw=Jf;function un(t,e){const r=t.ctx;if(r&&r.ut){let o,n;for(e?(o=t.el,n=t.anchor):(o=t.targetStart,n=t.targetAnchor);o&&o!==n;)o.nodeType===1&&o.setAttribute("data-v-owner",r.uid),o=o.nextSibling;r.ut()}}function jl(t,e,r,o){const n=e.targetStart=r(""),i=e.targetAnchor=r("");return n[Dl]=i,t&&(o(n,t),o(i,t)),i}const zt=Symbol("_leaveCb"),nn=Symbol("_enterCb");function Qf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kn(()=>{t.isMounted=!0}),ql(()=>{t.isUnmounting=!0}),t}const Ze=[Function,Array],Ul={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze},Fl=t=>{const e=t.subTree;return e.component?Fl(e.component):e},Zf={name:"BaseTransition",props:Ul,setup(t,{slots:e}){const r=$s(),o=Qf();return()=>{const n=e.default&&Wl(e.default(),!0);if(!n||!n.length)return;const i=Hl(n),s=ne(t),{mode:c}=s;if(o.isLeaving)return li(i);const a=ia(i);if(!a)return li(i);let l=Mi(a,s,o,r,f=>l=f);a.type!==Me&&xo(a,l);const d=r.subTree,u=d&&ia(d);if(u&&u.type!==Me&&!br(a,u)&&Fl(r).type!==Me){const f=Mi(u,s,o,r);if(xo(u,f),c==="out-in"&&a.type!==Me)return o.isLeaving=!0,f.afterLeave=()=>{o.isLeaving=!1,r.job.flags&8||r.update(),delete f.afterLeave},li(i);c==="in-out"&&a.type!==Me&&(f.delayLeave=(h,m,b)=>{const T=Vl(o,u);T[String(u.key)]=u,h[zt]=()=>{m(),h[zt]=void 0,delete l.delayedLeave},l.delayedLeave=b})}return i}}};function Hl(t){let e=t[0];if(t.length>1){for(const r of t)if(r.type!==Me){e=r;break}}return e}const eh=Zf;function Vl(t,e){const{leavingVNodes:r}=t;let o=r.get(e.type);return o||(o=Object.create(null),r.set(e.type,o)),o}function Mi(t,e,r,o,n){const{appear:i,mode:s,persisted:c=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:b,onBeforeAppear:T,onAppear:x,onAfterAppear:C,onAppearCancelled:y}=e,_=String(t.key),N=Vl(r,t),H=(I,j)=>{I&&dt(I,o,9,j)},V=(I,j)=>{const q=j[1];H(I,j),G(I)?I.every($=>$.length<=1)&&q():I.length<=1&&q()},M={mode:s,persisted:c,beforeEnter(I){let j=a;if(!r.isMounted)if(i)j=T||a;else return;I[zt]&&I[zt](!0);const q=N[_];q&&br(t,q)&&q.el[zt]&&q.el[zt](),H(j,[I])},enter(I){let j=l,q=d,$=u;if(!r.isMounted)if(i)j=x||l,q=C||d,$=y||u;else return;let X=!1;const ce=I[nn]=ke=>{X||(X=!0,ke?H($,[I]):H(q,[I]),M.delayedLeave&&M.delayedLeave(),I[nn]=void 0)};j?V(j,[I,ce]):ce()},leave(I,j){const q=String(t.key);if(I[nn]&&I[nn](!0),r.isUnmounting)return j();H(f,[I]);let $=!1;const X=I[zt]=ce=>{$||($=!0,j(),ce?H(b,[I]):H(m,[I]),I[zt]=void 0,N[q]===t&&delete N[q])};N[q]=t,h?V(h,[I,X]):X()},clone(I){const j=Mi(I,e,r,o,n);return n&&n(j),j}};return M}function li(t){if(Wn(t))return t=rr(t),t.children=null,t}function ia(t){if(!Wn(t))return Ml(t.type)&&t.children?Hl(t.children):t;const{shapeFlag:e,children:r}=t;if(r){if(e&16)return r[0];if(e&32&&J(r.default))return r.default()}}function xo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wl(t,e=!1,r){let o=[],n=0;for(let i=0;i<t.length;i++){let s=t[i];const c=r==null?s.key:String(r)+String(s.key!=null?s.key:i);s.type===Ge?(s.patchFlag&128&&n++,o=o.concat(Wl(s.children,e,c))):(e||s.type!==Me)&&o.push(c!=null?rr(s,{key:c}):s)}if(n>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function zl(t,e){return J(t)?Se({name:t.name},e,{setup:t}):t}function Kl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ji(t,e,r,o,n=!1){if(G(t)){t.forEach((m,b)=>ji(m,e&&(G(e)?e[b]:e),r,o,n));return}if(Hr(o)&&!n)return;const i=o.shapeFlag&4?Yn(o.component):o.el,s=n?null:i,{i:c,r:a}=t,l=e&&e.r,d=c.refs===se?c.refs={}:c.refs,u=c.setupState,f=ne(u),h=u===se?()=>!1:m=>ae(f,m);if(l!=null&&l!==a&&(_e(l)?(d[l]=null,h(l)&&(u[l]=null)):Ce(l)&&(l.value=null)),J(a))zo(a,c,12,[s,d]);else{const m=_e(a),b=Ce(a);if(m||b){const T=()=>{if(t.f){const x=m?h(a)?u[a]:d[a]:a.value;n?G(x)&&hs(x,i):G(x)?x.includes(i)||x.push(i):m?(d[a]=[i],h(a)&&(u[a]=d[a])):(a.value=[i],t.k&&(d[t.k]=a.value))}else m?(d[a]=s,h(a)&&(u[a]=s)):b&&(a.value=s,t.k&&(d[t.k]=s))};s?(T.id=-1,Ue(T,r)):T()}}}Un().requestIdleCallback;Un().cancelIdleCallback;const Hr=t=>!!t.type.__asyncLoader,Wn=t=>t.type.__isKeepAlive;function th(t,e){Gl(t,"a",e)}function rh(t,e){Gl(t,"da",e)}function Gl(t,e,r=Te){const o=t.__wdc||(t.__wdc=()=>{let n=r;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(zn(e,o,r),r){let n=r.parent;for(;n&&n.parent;)Wn(n.parent.vnode)&&oh(o,e,r,n),n=n.parent}}function oh(t,e,r,o){const n=zn(e,t,o,!0);Yl(()=>{hs(o[e],n)},r)}function zn(t,e,r=Te,o=!1){if(r){const n=r[t]||(r[t]=[]),i=e.__weh||(e.__weh=(...s)=>{nr();const c=Ko(r),a=dt(e,r,t,s);return c(),ir(),a});return o?n.unshift(i):n.push(i),i}}const Mt=t=>(e,r=Te)=>{(!Io||t==="sp")&&zn(t,(...o)=>e(...o),r)},nh=Mt("bm"),Kn=Mt("m"),ih=Mt("bu"),sh=Mt("u"),ql=Mt("bum"),Yl=Mt("um"),ah=Mt("sp"),ch=Mt("rtg"),lh=Mt("rtc");function dh(t,e=Te){zn("ec",t,e)}const Ts="components",uh="directives";function Ui(t,e){return Is(Ts,t,!0,e)||t}const Jl=Symbol.for("v-ndc");function fh(t){return _e(t)?Is(Ts,t,!1)||t:t||Jl}function hh(t){return Is(uh,t)}function Is(t,e,r=!0,o=!1){const n=xe||Te;if(n){const i=n.type;if(t===Ts){const c=Zh(i,!1);if(c&&(c===e||c===Qe(e)||c===jn(Qe(e))))return i}const s=sa(n[t]||i[t],e)||sa(n.appContext[t],e);return!s&&o?i:s}}function sa(t,e){return t&&(t[e]||t[Qe(e)]||t[jn(Qe(e))])}function no(t,e,r={},o,n){if(xe.ce||xe.parent&&Hr(xe.parent)&&xe.parent.ce)return e!=="default"&&(r.name=e),qe(),Sr(Ge,null,[Ae("slot",r,o&&o())],64);let i=t[e];i&&i._c&&(i._d=!1),qe();const s=i&&Xl(i(r)),c=r.key||s&&s.key,a=Sr(Ge,{key:(c&&!Dt(c)?c:`_${e}`)+(!s&&o?"_fb":"")},s||(o?o():[]),s&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Xl(t){return t.some(e=>To(e)?!(e.type===Me||e.type===Ge&&!Xl(e.children)):!0)?t:null}const Fi=t=>t?bd(t)?Yn(t):Fi(t.parent):null,po=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fi(t.parent),$root:t=>Fi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Rs(t),$forceUpdate:t=>t.f||(t.f=()=>{Es(t.update)}),$nextTick:t=>t.n||(t.n=Vn.bind(t.proxy)),$watch:t=>Lh.bind(t)}),di=(t,e)=>t!==se&&!t.__isScriptSetup&&ae(t,e),ph={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:r,setupState:o,data:n,props:i,accessCache:s,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const h=s[e];if(h!==void 0)switch(h){case 1:return o[e];case 2:return n[e];case 4:return r[e];case 3:return i[e]}else{if(di(o,e))return s[e]=1,o[e];if(n!==se&&ae(n,e))return s[e]=2,n[e];if((l=t.propsOptions[0])&&ae(l,e))return s[e]=3,i[e];if(r!==se&&ae(r,e))return s[e]=4,r[e];Hi&&(s[e]=0)}}const d=po[e];let u,f;if(d)return e==="$attrs"&&Oe(t.attrs,"get",""),d(t);if((u=c.__cssModules)&&(u=u[e]))return u;if(r!==se&&ae(r,e))return s[e]=4,r[e];if(f=a.config.globalProperties,ae(f,e))return f[e]},set({_:t},e,r){const{data:o,setupState:n,ctx:i}=t;return di(n,e)?(n[e]=r,!0):o!==se&&ae(o,e)?(o[e]=r,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:o,appContext:n,propsOptions:i}},s){let c;return!!r[s]||t!==se&&ae(t,s)||di(e,s)||(c=i[0])&&ae(c,s)||ae(o,s)||ae(po,s)||ae(n.config.globalProperties,s)},defineProperty(t,e,r){return r.get!=null?t._.accessCache[e]=0:ae(r,"value")&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}};function aa(t){return G(t)?t.reduce((e,r)=>(e[r]=null,e),{}):t}let Hi=!0;function gh(t){const e=Rs(t),r=t.proxy,o=t.ctx;Hi=!1,e.beforeCreate&&ca(e.beforeCreate,t,"bc");const{data:n,computed:i,methods:s,watch:c,provide:a,inject:l,created:d,beforeMount:u,mounted:f,beforeUpdate:h,updated:m,activated:b,deactivated:T,beforeDestroy:x,beforeUnmount:C,destroyed:y,unmounted:_,render:N,renderTracked:H,renderTriggered:V,errorCaptured:M,serverPrefetch:I,expose:j,inheritAttrs:q,components:$,directives:X,filters:ce}=e;if(l&&mh(l,o,null),s)for(const z in s){const Z=s[z];J(Z)&&(o[z]=Z.bind(r))}if(n){const z=n.call(r,r);ve(z)&&(t.data=Xr(z))}if(Hi=!0,i)for(const z in i){const Z=i[z],Ie=J(Z)?Z.bind(r,r):J(Z.get)?Z.get.bind(r,r):_t,Ee=!J(Z)&&J(Z.set)?Z.set.bind(r):_t,we=Je({get:Ie,set:Ee});Object.defineProperty(o,z,{enumerable:!0,configurable:!0,get:()=>we.value,set:ye=>we.value=ye})}if(c)for(const z in c)Ql(c[z],o,r,z);if(a){const z=J(a)?a.call(r):a;Reflect.ownKeys(z).forEach(Z=>{fn(Z,z[Z])})}d&&ca(d,t,"c");function te(z,Z){G(Z)?Z.forEach(Ie=>z(Ie.bind(r))):Z&&z(Z.bind(r))}if(te(nh,u),te(Kn,f),te(ih,h),te(sh,m),te(th,b),te(rh,T),te(dh,M),te(lh,H),te(ch,V),te(ql,C),te(Yl,_),te(ah,I),G(j))if(j.length){const z=t.exposed||(t.exposed={});j.forEach(Z=>{Object.defineProperty(z,Z,{get:()=>r[Z],set:Ie=>r[Z]=Ie})})}else t.exposed||(t.exposed={});N&&t.render===_t&&(t.render=N),q!=null&&(t.inheritAttrs=q),$&&(t.components=$),X&&(t.directives=X),I&&Kl(t)}function mh(t,e,r=_t){G(t)&&(t=Vi(t));for(const o in t){const n=t[o];let i;ve(n)?"default"in n?i=lt(n.from||o,n.default,!0):i=lt(n.from||o):i=lt(n),Ce(i)?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[o]=i}}function ca(t,e,r){dt(G(t)?t.map(o=>o.bind(e.proxy)):t.bind(e.proxy),e,r)}function Ql(t,e,r,o){let n=o.includes(".")?dd(r,o):()=>r[o];if(_e(t)){const i=e[t];J(i)&&vt(n,i)}else if(J(t))vt(n,t.bind(r));else if(ve(t))if(G(t))t.forEach(i=>Ql(i,e,r,o));else{const i=J(t.handler)?t.handler.bind(r):e[t.handler];J(i)&&vt(n,i,t)}}function Rs(t){const e=t.type,{mixins:r,extends:o}=e,{mixins:n,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,c=i.get(e);let a;return c?a=c:!n.length&&!r&&!o?a=e:(a={},n.length&&n.forEach(l=>Cn(a,l,s,!0)),Cn(a,e,s)),ve(e)&&i.set(e,a),a}function Cn(t,e,r,o=!1){const{mixins:n,extends:i}=e;i&&Cn(t,i,r,!0),n&&n.forEach(s=>Cn(t,s,r,!0));for(const s in e)if(!(o&&s==="expose")){const c=bh[s]||r&&r[s];t[s]=c?c(t[s],e[s]):e[s]}return t}const bh={data:la,props:da,emits:da,methods:io,computed:io,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:io,directives:io,watch:yh,provide:la,inject:vh};function la(t,e){return e?t?function(){return Se(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function vh(t,e){return io(Vi(t),Vi(e))}function Vi(t){if(G(t)){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function $e(t,e){return t?[...new Set([].concat(t,e))]:e}function io(t,e){return t?Se(Object.create(null),t,e):e}function da(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Se(Object.create(null),aa(t),aa(e??{})):e}function yh(t,e){if(!t)return e;if(!e)return t;const r=Se(Object.create(null),t);for(const o in e)r[o]=$e(t[o],e[o]);return r}function Zl(){return{app:null,config:{isNativeTag:ef,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _h=0;function kh(t,e){return function(o,n=null){J(o)||(o=Se({},o)),n!=null&&!ve(n)&&(n=null);const i=Zl(),s=new WeakSet,c=[];let a=!1;const l=i.app={_uid:_h++,_component:o,_props:n,_container:null,_context:i,_instance:null,version:tp,get config(){return i.config},set config(d){},use(d,...u){return s.has(d)||(d&&J(d.install)?(s.add(d),d.install(l,...u)):J(d)&&(s.add(d),d(l,...u))),l},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),l},component(d,u){return u?(i.components[d]=u,l):i.components[d]},directive(d,u){return u?(i.directives[d]=u,l):i.directives[d]},mount(d,u,f){if(!a){const h=l._ceVNode||Ae(o,n);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,d):t(h,d,f),a=!0,l._container=d,d.__vue_app__=l,Yn(h.component)}},onUnmount(d){c.push(d)},unmount(){a&&(dt(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(d,u){return i.provides[d]=u,l},runWithContext(d){const u=Cr;Cr=l;try{return d()}finally{Cr=u}}};return l}}let Cr=null;function fn(t,e){if(Te){let r=Te.provides;const o=Te.parent&&Te.parent.provides;o===r&&(r=Te.provides=Object.create(o)),r[t]=e}}function lt(t,e,r=!1){const o=Te||xe;if(o||Cr){const n=Cr?Cr._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(n&&t in n)return n[t];if(arguments.length>1)return r&&J(e)?e.call(o&&o.proxy):e}}function wh(){return!!(Te||xe||Cr)}const ed={},td=()=>Object.create(ed),rd=t=>Object.getPrototypeOf(t)===ed;function Ch(t,e,r,o=!1){const n={},i=td();t.propsDefaults=Object.create(null),od(t,e,n,i);for(const s in t.propsOptions[0])s in n||(n[s]=void 0);r?t.props=o?n:Il(n):t.type.props?t.props=n:t.props=i,t.attrs=i}function Sh(t,e,r,o){const{props:n,attrs:i,vnode:{patchFlag:s}}=t,c=ne(n),[a]=t.propsOptions;let l=!1;if((o||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(Gn(t.emitsOptions,f))continue;const h=e[f];if(a)if(ae(i,f))h!==i[f]&&(i[f]=h,l=!0);else{const m=Qe(f);n[m]=Wi(a,c,m,h,t,!1)}else h!==i[f]&&(i[f]=h,l=!0)}}}else{od(t,e,n,i)&&(l=!0);let d;for(const u in c)(!e||!ae(e,u)&&((d=or(u))===u||!ae(e,d)))&&(a?r&&(r[u]!==void 0||r[d]!==void 0)&&(n[u]=Wi(a,c,u,void 0,t,!0)):delete n[u]);if(i!==c)for(const u in i)(!e||!ae(e,u))&&(delete i[u],l=!0)}l&&It(t.attrs,"set","")}function od(t,e,r,o){const[n,i]=t.propsOptions;let s=!1,c;if(e)for(let a in e){if(lo(a))continue;const l=e[a];let d;n&&ae(n,d=Qe(a))?!i||!i.includes(d)?r[d]=l:(c||(c={}))[d]=l:Gn(t.emitsOptions,a)||(!(a in o)||l!==o[a])&&(o[a]=l,s=!0)}if(i){const a=ne(r),l=c||se;for(let d=0;d<i.length;d++){const u=i[d];r[u]=Wi(n,a,u,l[u],t,!ae(l,u))}}return s}function Wi(t,e,r,o,n,i){const s=t[r];if(s!=null){const c=ae(s,"default");if(c&&o===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&J(a)){const{propsDefaults:l}=n;if(r in l)o=l[r];else{const d=Ko(n);o=l[r]=a.call(null,e),d()}}else o=a;n.ce&&n.ce._setProp(r,o)}s[0]&&(i&&!c?o=!1:s[1]&&(o===""||o===or(r))&&(o=!0))}return o}const xh=new WeakMap;function nd(t,e,r=!1){const o=r?xh:e.propsCache,n=o.get(t);if(n)return n;const i=t.props,s={},c=[];let a=!1;if(!J(t)){const d=u=>{a=!0;const[f,h]=nd(u,e,!0);Se(s,f),h&&c.push(...h)};!r&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!a)return ve(t)&&o.set(t,jr),jr;if(G(i))for(let d=0;d<i.length;d++){const u=Qe(i[d]);ua(u)&&(s[u]=se)}else if(i)for(const d in i){const u=Qe(d);if(ua(u)){const f=i[d],h=s[u]=G(f)||J(f)?{type:f}:Se({},f),m=h.type;let b=!1,T=!0;if(G(m))for(let x=0;x<m.length;++x){const C=m[x],y=J(C)&&C.name;if(y==="Boolean"){b=!0;break}else y==="String"&&(T=!1)}else b=J(m)&&m.name==="Boolean";h[0]=b,h[1]=T,(b||ae(h,"default"))&&c.push(u)}}const l=[s,c];return ve(t)&&o.set(t,l),l}function ua(t){return t[0]!=="$"&&!lo(t)}const id=t=>t[0]==="_"||t==="$stable",Ps=t=>G(t)?t.map(bt):[bt(t)],Eh=(t,e,r)=>{if(e._n)return e;const o=Ll((...n)=>Ps(e(...n)),r);return o._c=!1,o},sd=(t,e,r)=>{const o=t._ctx;for(const n in t){if(id(n))continue;const i=t[n];if(J(i))e[n]=Eh(n,i,o);else if(i!=null){const s=Ps(i);e[n]=()=>s}}},ad=(t,e)=>{const r=Ps(e);t.slots.default=()=>r},cd=(t,e,r)=>{for(const o in e)(r||o!=="_")&&(t[o]=e[o])},Th=(t,e,r)=>{const o=t.slots=td();if(t.vnode.shapeFlag&32){const n=e._;n?(cd(o,e,r),r&&al(o,"_",n,!0)):sd(e,o)}else e&&ad(t,e)},Ih=(t,e,r)=>{const{vnode:o,slots:n}=t;let i=!0,s=se;if(o.shapeFlag&32){const c=e._;c?r&&c===1?i=!1:cd(n,e,r):(i=!e.$stable,sd(e,n)),s=e}else e&&(ad(t,e),s={default:1});if(i)for(const c in n)!id(c)&&s[c]==null&&delete n[c]},Ue=Hh;function Rh(t){return Ph(t)}function Ph(t,e){const r=Un();r.__VUE__=!0;const{insert:o,remove:n,patchProp:i,createElement:s,createText:c,createComment:a,setText:l,setElementText:d,parentNode:u,nextSibling:f,setScopeId:h=_t,insertStaticContent:m}=t,b=(p,g,v,S=null,k=null,E=null,A=void 0,O=null,P=!!g.dynamicChildren)=>{if(p===g)return;p&&!br(p,g)&&(S=w(p),ye(p,k,E,!0),p=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:R,ref:W,shapeFlag:L}=g;switch(R){case qn:T(p,g,v,S);break;case Me:x(p,g,v,S);break;case hi:p==null&&C(g,v,S,A);break;case Ge:$(p,g,v,S,k,E,A,O,P);break;default:L&1?N(p,g,v,S,k,E,A,O,P):L&6?X(p,g,v,S,k,E,A,O,P):(L&64||L&128)&&R.process(p,g,v,S,k,E,A,O,P,U)}W!=null&&k&&ji(W,p&&p.ref,E,g||p,!g)},T=(p,g,v,S)=>{if(p==null)o(g.el=c(g.children),v,S);else{const k=g.el=p.el;g.children!==p.children&&l(k,g.children)}},x=(p,g,v,S)=>{p==null?o(g.el=a(g.children||""),v,S):g.el=p.el},C=(p,g,v,S)=>{[p.el,p.anchor]=m(p.children,g,v,S,p.el,p.anchor)},y=({el:p,anchor:g},v,S)=>{let k;for(;p&&p!==g;)k=f(p),o(p,v,S),p=k;o(g,v,S)},_=({el:p,anchor:g})=>{let v;for(;p&&p!==g;)v=f(p),n(p),p=v;n(g)},N=(p,g,v,S,k,E,A,O,P)=>{g.type==="svg"?A="svg":g.type==="math"&&(A="mathml"),p==null?H(g,v,S,k,E,A,O,P):I(p,g,k,E,A,O,P)},H=(p,g,v,S,k,E,A,O)=>{let P,R;const{props:W,shapeFlag:L,transition:F,dirs:Y}=p;if(P=p.el=s(p.type,E,W&&W.is,W),L&8?d(P,p.children):L&16&&M(p.children,P,null,S,k,ui(p,E),A,O),Y&&ur(p,null,S,"created"),V(P,p,p.scopeId,A,S),W){for(const he in W)he!=="value"&&!lo(he)&&i(P,he,null,W[he],E,S);"value"in W&&i(P,"value",null,W.value,E),(R=W.onVnodeBeforeMount)&&pt(R,S,p)}Y&&ur(p,null,S,"beforeMount");const re=Oh(k,F);re&&F.beforeEnter(P),o(P,g,v),((R=W&&W.onVnodeMounted)||re||Y)&&Ue(()=>{R&&pt(R,S,p),re&&F.enter(P),Y&&ur(p,null,S,"mounted")},k)},V=(p,g,v,S,k)=>{if(v&&h(p,v),S)for(let E=0;E<S.length;E++)h(p,S[E]);if(k){let E=k.subTree;if(g===E||hd(E.type)&&(E.ssContent===g||E.ssFallback===g)){const A=k.vnode;V(p,A,A.scopeId,A.slotScopeIds,k.parent)}}},M=(p,g,v,S,k,E,A,O,P=0)=>{for(let R=P;R<p.length;R++){const W=p[R]=O?Kt(p[R]):bt(p[R]);b(null,W,g,v,S,k,E,A,O)}},I=(p,g,v,S,k,E,A)=>{const O=g.el=p.el;let{patchFlag:P,dynamicChildren:R,dirs:W}=g;P|=p.patchFlag&16;const L=p.props||se,F=g.props||se;let Y;if(v&&fr(v,!1),(Y=F.onVnodeBeforeUpdate)&&pt(Y,v,g,p),W&&ur(g,p,v,"beforeUpdate"),v&&fr(v,!0),(L.innerHTML&&F.innerHTML==null||L.textContent&&F.textContent==null)&&d(O,""),R?j(p.dynamicChildren,R,O,v,S,ui(g,k),E):A||Z(p,g,O,null,v,S,ui(g,k),E,!1),P>0){if(P&16)q(O,L,F,v,k);else if(P&2&&L.class!==F.class&&i(O,"class",null,F.class,k),P&4&&i(O,"style",L.style,F.style,k),P&8){const re=g.dynamicProps;for(let he=0;he<re.length;he++){const le=re[he],We=L[le],Re=F[le];(Re!==We||le==="value")&&i(O,le,We,Re,k,v)}}P&1&&p.children!==g.children&&d(O,g.children)}else!A&&R==null&&q(O,L,F,v,k);((Y=F.onVnodeUpdated)||W)&&Ue(()=>{Y&&pt(Y,v,g,p),W&&ur(g,p,v,"updated")},S)},j=(p,g,v,S,k,E,A)=>{for(let O=0;O<g.length;O++){const P=p[O],R=g[O],W=P.el&&(P.type===Ge||!br(P,R)||P.shapeFlag&70)?u(P.el):v;b(P,R,W,null,S,k,E,A,!0)}},q=(p,g,v,S,k)=>{if(g!==v){if(g!==se)for(const E in g)!lo(E)&&!(E in v)&&i(p,E,g[E],null,k,S);for(const E in v){if(lo(E))continue;const A=v[E],O=g[E];A!==O&&E!=="value"&&i(p,E,O,A,k,S)}"value"in v&&i(p,"value",g.value,v.value,k)}},$=(p,g,v,S,k,E,A,O,P)=>{const R=g.el=p?p.el:c(""),W=g.anchor=p?p.anchor:c("");let{patchFlag:L,dynamicChildren:F,slotScopeIds:Y}=g;Y&&(O=O?O.concat(Y):Y),p==null?(o(R,v,S),o(W,v,S),M(g.children||[],v,W,k,E,A,O,P)):L>0&&L&64&&F&&p.dynamicChildren?(j(p.dynamicChildren,F,v,k,E,A,O),(g.key!=null||k&&g===k.subTree)&&Os(p,g,!0)):Z(p,g,v,W,k,E,A,O,P)},X=(p,g,v,S,k,E,A,O,P)=>{g.slotScopeIds=O,p==null?g.shapeFlag&512?k.ctx.activate(g,v,S,A,P):ce(g,v,S,k,E,A,P):ke(p,g,P)},ce=(p,g,v,S,k,E,A)=>{const O=p.component=qh(p,S,k);if(Wn(p)&&(O.ctx.renderer=U),Yh(O,!1,A),O.asyncDep){if(k&&k.registerDep(O,te,A),!p.el){const P=O.subTree=Ae(Me);x(null,P,g,v)}}else te(O,p,g,v,k,E,A)},ke=(p,g,v)=>{const S=g.component=p.component;if(Uh(p,g,v))if(S.asyncDep&&!S.asyncResolved){z(S,g,v);return}else S.next=g,S.update();else g.el=p.el,S.vnode=g},te=(p,g,v,S,k,E,A)=>{const O=()=>{if(p.isMounted){let{next:L,bu:F,u:Y,parent:re,vnode:he}=p;{const ze=ld(p);if(ze){L&&(L.el=he.el,z(p,L,A)),ze.asyncDep.then(()=>{p.isUnmounted||O()});return}}let le=L,We;fr(p,!1),L?(L.el=he.el,z(p,L,A)):L=he,F&&dn(F),(We=L.props&&L.props.onVnodeBeforeUpdate)&&pt(We,re,L,he),fr(p,!0);const Re=fi(p),rt=p.subTree;p.subTree=Re,b(rt,Re,u(rt.el),w(rt),p,k,E),L.el=Re.el,le===null&&Fh(p,Re.el),Y&&Ue(Y,k),(We=L.props&&L.props.onVnodeUpdated)&&Ue(()=>pt(We,re,L,he),k)}else{let L;const{el:F,props:Y}=g,{bm:re,m:he,parent:le,root:We,type:Re}=p,rt=Hr(g);if(fr(p,!1),re&&dn(re),!rt&&(L=Y&&Y.onVnodeBeforeMount)&&pt(L,le,g),fr(p,!0),F&&ge){const ze=()=>{p.subTree=fi(p),ge(F,p.subTree,p,k,null)};rt&&Re.__asyncHydrate?Re.__asyncHydrate(F,p,ze):ze()}else{We.ce&&We.ce._injectChildStyle(Re);const ze=p.subTree=fi(p);b(null,ze,v,S,p,k,E),g.el=ze.el}if(he&&Ue(he,k),!rt&&(L=Y&&Y.onVnodeMounted)){const ze=g;Ue(()=>pt(L,le,ze),k)}(g.shapeFlag&256||le&&Hr(le.vnode)&&le.vnode.shapeFlag&256)&&p.a&&Ue(p.a,k),p.isMounted=!0,g=v=S=null}};p.scope.on();const P=p.effect=new pl(O);p.scope.off();const R=p.update=P.run.bind(P),W=p.job=P.runIfDirty.bind(P);W.i=p,W.id=p.uid,P.scheduler=()=>Es(W),fr(p,!0),R()},z=(p,g,v)=>{g.component=p;const S=p.vnode.props;p.vnode=g,p.next=null,Sh(p,g.props,S,v),Ih(p,g.children,v),nr(),ra(p),ir()},Z=(p,g,v,S,k,E,A,O,P=!1)=>{const R=p&&p.children,W=p?p.shapeFlag:0,L=g.children,{patchFlag:F,shapeFlag:Y}=g;if(F>0){if(F&128){Ee(R,L,v,S,k,E,A,O,P);return}else if(F&256){Ie(R,L,v,S,k,E,A,O,P);return}}Y&8?(W&16&&Be(R,k,E),L!==R&&d(v,L)):W&16?Y&16?Ee(R,L,v,S,k,E,A,O,P):Be(R,k,E,!0):(W&8&&d(v,""),Y&16&&M(L,v,S,k,E,A,O,P))},Ie=(p,g,v,S,k,E,A,O,P)=>{p=p||jr,g=g||jr;const R=p.length,W=g.length,L=Math.min(R,W);let F;for(F=0;F<L;F++){const Y=g[F]=P?Kt(g[F]):bt(g[F]);b(p[F],Y,v,null,k,E,A,O,P)}R>W?Be(p,k,E,!0,!1,L):M(g,v,S,k,E,A,O,P,L)},Ee=(p,g,v,S,k,E,A,O,P)=>{let R=0;const W=g.length;let L=p.length-1,F=W-1;for(;R<=L&&R<=F;){const Y=p[R],re=g[R]=P?Kt(g[R]):bt(g[R]);if(br(Y,re))b(Y,re,v,null,k,E,A,O,P);else break;R++}for(;R<=L&&R<=F;){const Y=p[L],re=g[F]=P?Kt(g[F]):bt(g[F]);if(br(Y,re))b(Y,re,v,null,k,E,A,O,P);else break;L--,F--}if(R>L){if(R<=F){const Y=F+1,re=Y<W?g[Y].el:S;for(;R<=F;)b(null,g[R]=P?Kt(g[R]):bt(g[R]),v,re,k,E,A,O,P),R++}}else if(R>F)for(;R<=L;)ye(p[R],k,E,!0),R++;else{const Y=R,re=R,he=new Map;for(R=re;R<=F;R++){const Ke=g[R]=P?Kt(g[R]):bt(g[R]);Ke.key!=null&&he.set(Ke.key,R)}let le,We=0;const Re=F-re+1;let rt=!1,ze=0;const Zr=new Array(Re);for(R=0;R<Re;R++)Zr[R]=0;for(R=Y;R<=L;R++){const Ke=p[R];if(We>=Re){ye(Ke,k,E,!0);continue}let ht;if(Ke.key!=null)ht=he.get(Ke.key);else for(le=re;le<=F;le++)if(Zr[le-re]===0&&br(Ke,g[le])){ht=le;break}ht===void 0?ye(Ke,k,E,!0):(Zr[ht-re]=R+1,ht>=ze?ze=ht:rt=!0,b(Ke,g[ht],v,null,k,E,A,O,P),We++)}const Xs=rt?Ah(Zr):jr;for(le=Xs.length-1,R=Re-1;R>=0;R--){const Ke=re+R,ht=g[Ke],Qs=Ke+1<W?g[Ke+1].el:S;Zr[R]===0?b(null,ht,v,Qs,k,E,A,O,P):rt&&(le<0||R!==Xs[le]?we(ht,v,Qs,2):le--)}}},we=(p,g,v,S,k=null)=>{const{el:E,type:A,transition:O,children:P,shapeFlag:R}=p;if(R&6){we(p.component.subTree,g,v,S);return}if(R&128){p.suspense.move(g,v,S);return}if(R&64){A.move(p,g,v,U);return}if(A===Ge){o(E,g,v);for(let L=0;L<P.length;L++)we(P[L],g,v,S);o(p.anchor,g,v);return}if(A===hi){y(p,g,v);return}if(S!==2&&R&1&&O)if(S===0)O.beforeEnter(E),o(E,g,v),Ue(()=>O.enter(E),k);else{const{leave:L,delayLeave:F,afterLeave:Y}=O,re=()=>o(E,g,v),he=()=>{L(E,()=>{re(),Y&&Y()})};F?F(E,re,he):he()}else o(E,g,v)},ye=(p,g,v,S=!1,k=!1)=>{const{type:E,props:A,ref:O,children:P,dynamicChildren:R,shapeFlag:W,patchFlag:L,dirs:F,cacheIndex:Y}=p;if(L===-2&&(k=!1),O!=null&&ji(O,null,v,p,!0),Y!=null&&(g.renderCache[Y]=void 0),W&256){g.ctx.deactivate(p);return}const re=W&1&&F,he=!Hr(p);let le;if(he&&(le=A&&A.onVnodeBeforeUnmount)&&pt(le,g,p),W&6)dr(p.component,v,S);else{if(W&128){p.suspense.unmount(v,S);return}re&&ur(p,null,g,"beforeUnmount"),W&64?p.type.remove(p,g,v,U,S):R&&!R.hasOnce&&(E!==Ge||L>0&&L&64)?Be(R,g,v,!1,!0):(E===Ge&&L&384||!k&&W&16)&&Be(P,g,v),S&&tt(p)}(he&&(le=A&&A.onVnodeUnmounted)||re)&&Ue(()=>{le&&pt(le,g,p),re&&ur(p,null,g,"unmounted")},v)},tt=p=>{const{type:g,el:v,anchor:S,transition:k}=p;if(g===Ge){Ve(v,S);return}if(g===hi){_(p);return}const E=()=>{n(v),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(p.shapeFlag&1&&k&&!k.persisted){const{leave:A,delayLeave:O}=k,P=()=>A(v,E);O?O(p.el,E,P):P()}else E()},Ve=(p,g)=>{let v;for(;p!==g;)v=f(p),n(p),p=v;n(g)},dr=(p,g,v)=>{const{bum:S,scope:k,job:E,subTree:A,um:O,m:P,a:R}=p;fa(P),fa(R),S&&dn(S),k.stop(),E&&(E.flags|=8,ye(A,p,g,v)),O&&Ue(O,g),Ue(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Be=(p,g,v,S=!1,k=!1,E=0)=>{for(let A=E;A<p.length;A++)ye(p[A],g,v,S,k)},w=p=>{if(p.shapeFlag&6)return w(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const g=f(p.anchor||p.el),v=g&&g[Dl];return v?f(v):g};let D=!1;const B=(p,g,v)=>{p==null?g._vnode&&ye(g._vnode,null,null,!0):b(g._vnode||null,p,g,null,null,null,v),g._vnode=p,D||(D=!0,ra(),Bl(),D=!1)},U={p:b,um:ye,m:we,r:tt,mt:ce,mc:M,pc:Z,pbc:j,n:w,o:t};let ie,ge;return{render:B,hydrate:ie,createApp:kh(B,ie)}}function ui({type:t,props:e},r){return r==="svg"&&t==="foreignObject"||r==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:r}function fr({effect:t,job:e},r){r?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Oh(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Os(t,e,r=!1){const o=t.children,n=e.children;if(G(o)&&G(n))for(let i=0;i<o.length;i++){const s=o[i];let c=n[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=n[i]=Kt(n[i]),c.el=s.el),!r&&c.patchFlag!==-2&&Os(s,c)),c.type===qn&&(c.el=s.el)}}function Ah(t){const e=t.slice(),r=[0];let o,n,i,s,c;const a=t.length;for(o=0;o<a;o++){const l=t[o];if(l!==0){if(n=r[r.length-1],t[n]<l){e[o]=n,r.push(o);continue}for(i=0,s=r.length-1;i<s;)c=i+s>>1,t[r[c]]<l?i=c+1:s=c;l<t[r[i]]&&(i>0&&(e[o]=r[i-1]),r[i]=o)}}for(i=r.length,s=r[i-1];i-- >0;)r[i]=s,s=e[s];return r}function ld(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ld(e)}function fa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Bh=Symbol.for("v-scx"),$h=()=>lt(Bh);function Nh(t,e){return As(t,null,{flush:"sync"})}function vt(t,e,r){return As(t,e,r)}function As(t,e,r=se){const{immediate:o,deep:n,flush:i,once:s}=r,c=Se({},r),a=e&&o||!e&&i!=="post";let l;if(Io){if(i==="sync"){const h=$h();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!a){const h=()=>{};return h.stop=_t,h.resume=_t,h.pause=_t,h}}const d=Te;c.call=(h,m,b)=>dt(h,d,m,b);let u=!1;i==="post"?c.scheduler=h=>{Ue(h,d&&d.suspense)}:i!=="sync"&&(u=!0,c.scheduler=(h,m)=>{m?h():Es(h)}),c.augmentJob=h=>{e&&(h.flags|=4),u&&(h.flags|=2,d&&(h.id=d.uid,h.i=d))};const f=Wf(t,e,c);return Io&&(l?l.push(f):a&&f()),f}function Lh(t,e,r){const o=this.proxy,n=_e(t)?t.includes(".")?dd(o,t):()=>o[t]:t.bind(o,o);let i;J(e)?i=e:(i=e.handler,r=e);const s=Ko(this),c=As(n,i.bind(o),r);return s(),c}function dd(t,e){const r=e.split(".");return()=>{let o=t;for(let n=0;n<r.length&&o;n++)o=o[r[n]];return o}}function vw(t,e,r=se){const o=$s(),n=Qe(e),i=or(e),s=ud(t,n),c=Df((a,l)=>{let d,u=se,f;return Nh(()=>{const h=t[n];Fe(d,h)&&(d=h,l())}),{get(){return a(),r.get?r.get(d):d},set(h){const m=r.set?r.set(h):h;if(!Fe(m,d)&&!(u!==se&&Fe(h,u)))return;const b=o.vnode.props;b&&(e in b||n in b||i in b)&&(`onUpdate:${e}`in b||`onUpdate:${n}`in b||`onUpdate:${i}`in b)||(d=h,l()),o.emit(`update:${e}`,m),Fe(h,m)&&Fe(h,u)&&!Fe(m,f)&&l(),u=h,f=m}}});return c[Symbol.iterator]=()=>{let a=0;return{next(){return a<2?{value:a++?s||se:c,done:!1}:{done:!0}}}},c}const ud=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Qe(e)}Modifiers`]||t[`${or(e)}Modifiers`];function Dh(t,e,...r){if(t.isUnmounted)return;const o=t.vnode.props||se;let n=r;const i=e.startsWith("update:"),s=i&&ud(o,e.slice(7));s&&(s.trim&&(n=r.map(d=>_e(d)?d.trim():d)),s.number&&(n=r.map(Ai)));let c,a=o[c=ni(e)]||o[c=ni(Qe(e))];!a&&i&&(a=o[c=ni(or(e))]),a&&dt(a,t,6,n);const l=o[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,dt(l,t,6,n)}}function fd(t,e,r=!1){const o=e.emitsCache,n=o.get(t);if(n!==void 0)return n;const i=t.emits;let s={},c=!1;if(!J(t)){const a=l=>{const d=fd(l,e,!0);d&&(c=!0,Se(s,d))};!r&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ve(t)&&o.set(t,null),null):(G(i)?i.forEach(a=>s[a]=null):Se(s,i),ve(t)&&o.set(t,s),s)}function Gn(t,e){return!t||!Ln(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,or(e))||ae(t,e))}function fi(t){const{type:e,vnode:r,proxy:o,withProxy:n,propsOptions:[i],slots:s,attrs:c,emit:a,render:l,renderCache:d,props:u,data:f,setupState:h,ctx:m,inheritAttrs:b}=t,T=wn(t);let x,C;try{if(r.shapeFlag&4){const _=n||o,N=_;x=bt(l.call(N,_,d,u,h,f,m)),C=c}else{const _=e;x=bt(_.length>1?_(u,{attrs:c,slots:s,emit:a}):_(u,null)),C=e.props?c:Mh(c)}}catch(_){go.length=0,Hn(_,t,1),x=Ae(Me)}let y=x;if(C&&b!==!1){const _=Object.keys(C),{shapeFlag:N}=y;_.length&&N&7&&(i&&_.some(fs)&&(C=jh(C,i)),y=rr(y,C,!1,!0))}return r.dirs&&(y=rr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(r.dirs):r.dirs),r.transition&&xo(y,r.transition),x=y,wn(T),x}const Mh=t=>{let e;for(const r in t)(r==="class"||r==="style"||Ln(r))&&((e||(e={}))[r]=t[r]);return e},jh=(t,e)=>{const r={};for(const o in t)(!fs(o)||!(o.slice(9)in e))&&(r[o]=t[o]);return r};function Uh(t,e,r){const{props:o,children:n,component:i}=t,{props:s,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&a>=0){if(a&1024)return!0;if(a&16)return o?ha(o,s,l):!!s;if(a&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(s[f]!==o[f]&&!Gn(l,f))return!0}}}else return(n||c)&&(!c||!c.$stable)?!0:o===s?!1:o?s?ha(o,s,l):!0:!!s;return!1}function ha(t,e,r){const o=Object.keys(e);if(o.length!==Object.keys(t).length)return!0;for(let n=0;n<o.length;n++){const i=o[n];if(e[i]!==t[i]&&!Gn(r,i))return!0}return!1}function Fh({vnode:t,parent:e},r){for(;e;){const o=e.subTree;if(o.suspense&&o.suspense.activeBranch===t&&(o.el=t.el),o===t)(t=e.vnode).el=r,e=e.parent;else break}}const hd=t=>t.__isSuspense;function Hh(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Gf(t)}const Ge=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),Me=Symbol.for("v-cmt"),hi=Symbol.for("v-stc"),go=[];let Xe=null;function qe(t=!1){go.push(Xe=t?null:[])}function Vh(){go.pop(),Xe=go[go.length-1]||null}let Eo=1;function pa(t){Eo+=t,t<0&&Xe&&(Xe.hasOnce=!0)}function pd(t){return t.dynamicChildren=Eo>0?Xe||jr:null,Vh(),Eo>0&&Xe&&Xe.push(t),t}function Gr(t,e,r,o,n,i){return pd(Zt(t,e,r,o,n,i,!0))}function Sr(t,e,r,o,n){return pd(Ae(t,e,r,o,n,!0))}function To(t){return t?t.__v_isVNode===!0:!1}function br(t,e){return t.type===e.type&&t.key===e.key}const gd=({key:t})=>t??null,hn=({ref:t,ref_key:e,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||Ce(t)||J(t)?{i:xe,r:t,k:e,f:!!r}:t:null);function Zt(t,e=null,r=null,o=0,n=null,i=t===Ge?0:1,s=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gd(e),ref:e&&hn(e),scopeId:Nl,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:xe};return c?(Bs(a,r),i&128&&t.normalize(a)):r&&(a.shapeFlag|=_e(r)?8:16),Eo>0&&!s&&Xe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Xe.push(a),a}const Ae=Wh;function Wh(t,e=null,r=null,o=0,n=null,i=!1){if((!t||t===Jl)&&(t=Me),To(t)){const c=rr(t,e,!0);return r&&Bs(c,r),Eo>0&&!i&&Xe&&(c.shapeFlag&6?Xe[Xe.indexOf(t)]=c:Xe.push(c)),c.patchFlag=-2,c}if(ep(t)&&(t=t.__vccOpts),e){e=zh(e);let{class:c,style:a}=e;c&&!_e(c)&&(e.class=vr(c)),ve(a)&&(Ss(a)&&!G(a)&&(a=Se({},a)),e.style=gs(a))}const s=_e(t)?1:hd(t)?128:Ml(t)?64:ve(t)?4:J(t)?2:0;return Zt(t,e,r,o,n,s,i,!0)}function zh(t){return t?Ss(t)||rd(t)?Se({},t):t:null}function rr(t,e,r=!1,o=!1){const{props:n,ref:i,patchFlag:s,children:c,transition:a}=t,l=e?Ye(n||{},e):n,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&gd(l),ref:e&&e.ref?r&&i?G(i)?i.concat(hn(e)):[i,hn(e)]:hn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rr(t.ssContent),ssFallback:t.ssFallback&&rr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&o&&xo(d,a.clone(d)),d}function md(t=" ",e=0){return Ae(qn,null,t,e)}function zi(t="",e=!1){return e?(qe(),Sr(Me,null,t)):Ae(Me,null,t)}function bt(t){return t==null||typeof t=="boolean"?Ae(Me):G(t)?Ae(Ge,null,t.slice()):To(t)?Kt(t):Ae(qn,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rr(t)}function Bs(t,e){let r=0;const{shapeFlag:o}=t;if(e==null)e=null;else if(G(e))r=16;else if(typeof e=="object")if(o&65){const n=e.default;n&&(n._c&&(n._d=!1),Bs(t,n()),n._c&&(n._d=!0));return}else{r=32;const n=e._;!n&&!rd(e)?e._ctx=xe:n===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:xe},r=32):(e=String(e),o&64?(r=16,e=[md(e)]):r=8);t.children=e,t.shapeFlag|=r}function Ye(...t){const e={};for(let r=0;r<t.length;r++){const o=t[r];for(const n in o)if(n==="class")e.class!==o.class&&(e.class=vr([e.class,o.class]));else if(n==="style")e.style=gs([e.style,o.style]);else if(Ln(n)){const i=e[n],s=o[n];s&&i!==s&&!(G(i)&&i.includes(s))&&(e[n]=i?[].concat(i,s):s)}else n!==""&&(e[n]=o[n])}return e}function pt(t,e,r,o=null){dt(t,e,7,[r,o])}const Kh=Zl();let Gh=0;function qh(t,e,r){const o=t.type,n=(e?e.appContext:t.appContext)||Kh,i={uid:Gh++,vnode:t,type:o,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ul(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nd(o,n),emitsOptions:fd(o,n),emit:null,emitted:null,propsDefaults:se,inheritAttrs:o.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Dh.bind(null,i),t.ce&&t.ce(i),i}let Te=null;const $s=()=>Te||xe;let Sn,Ki;{const t=Un(),e=(r,o)=>{let n;return(n=t[r])||(n=t[r]=[]),n.push(o),i=>{n.length>1?n.forEach(s=>s(i)):n[0](i)}};Sn=e("__VUE_INSTANCE_SETTERS__",r=>Te=r),Ki=e("__VUE_SSR_SETTERS__",r=>Io=r)}const Ko=t=>{const e=Te;return Sn(t),t.scope.on(),()=>{t.scope.off(),Sn(e)}},ga=()=>{Te&&Te.scope.off(),Sn(null)};function bd(t){return t.vnode.shapeFlag&4}let Io=!1;function Yh(t,e=!1,r=!1){e&&Ki(e);const{props:o,children:n}=t.vnode,i=bd(t);Ch(t,o,i,e),Th(t,n,r);const s=i?Jh(t,e):void 0;return e&&Ki(!1),s}function Jh(t,e){const r=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ph);const{setup:o}=r;if(o){nr();const n=t.setupContext=o.length>1?Qh(t):null,i=Ko(t),s=zo(o,t,0,[t.props,n]),c=nl(s);if(ir(),i(),(c||t.sp)&&!Hr(t)&&Kl(t),c){if(s.then(ga,ga),e)return s.then(a=>{ma(t,a,e)}).catch(a=>{Hn(a,t,0)});t.asyncDep=s}else ma(t,s,e)}else vd(t,e)}function ma(t,e,r){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=Pl(e)),vd(t,r)}let ba;function vd(t,e,r){const o=t.type;if(!t.render){if(!e&&ba&&!o.render){const n=o.template||Rs(t).template;if(n){const{isCustomElement:i,compilerOptions:s}=t.appContext.config,{delimiters:c,compilerOptions:a}=o,l=Se(Se({isCustomElement:i,delimiters:c},s),a);o.render=ba(n,l)}}t.render=o.render||_t}{const n=Ko(t);nr();try{gh(t)}finally{ir(),n()}}}const Xh={get(t,e){return Oe(t,"get",""),t[e]}};function Qh(t){const e=r=>{t.exposed=r||{}};return{attrs:new Proxy(t.attrs,Xh),slots:t.slots,emit:t.emit,expose:e}}function Yn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pl(xs(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in po)return po[r](t)},has(e,r){return r in e||r in po}})):t.proxy}function Zh(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function ep(t){return J(t)&&"__vccOpts"in t}const Je=(t,e)=>Hf(t,e,Io);function Ns(t,e,r){const o=arguments.length;return o===2?ve(e)&&!G(e)?To(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(o>3?r=Array.prototype.slice.call(arguments,2):o===3&&To(r)&&(r=[r]),Ae(t,e,r))}const tp="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gi;const va=typeof window<"u"&&window.trustedTypes;if(va)try{Gi=va.createPolicy("vue",{createHTML:t=>t})}catch{}const yd=Gi?t=>Gi.createHTML(t):t=>t,rp="http://www.w3.org/2000/svg",op="http://www.w3.org/1998/Math/MathML",Tt=typeof document<"u"?document:null,ya=Tt&&Tt.createElement("template"),np={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,o)=>{const n=e==="svg"?Tt.createElementNS(rp,t):e==="mathml"?Tt.createElementNS(op,t):r?Tt.createElement(t,{is:r}):Tt.createElement(t);return t==="select"&&o&&o.multiple!=null&&n.setAttribute("multiple",o.multiple),n},createText:t=>Tt.createTextNode(t),createComment:t=>Tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,r,o,n,i){const s=r?r.previousSibling:e.lastChild;if(n&&(n===i||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),r),!(n===i||!(n=n.nextSibling)););else{ya.innerHTML=yd(o==="svg"?`<svg>${t}</svg>`:o==="mathml"?`<math>${t}</math>`:t);const c=ya.content;if(o==="svg"||o==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,r)}return[s?s.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}},jt="transition",to="animation",Ro=Symbol("_vtc"),_d={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ip=Se({},Ul,_d),sp=t=>(t.displayName="Transition",t.props=ip,t),yw=sp((t,{slots:e})=>Ns(eh,ap(t),e)),hr=(t,e=[])=>{G(t)?t.forEach(r=>r(...e)):t&&t(...e)},_a=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function ap(t){const e={};for(const $ in t)$ in _d||(e[$]=t[$]);if(t.css===!1)return e;const{name:r="v",type:o,duration:n,enterFromClass:i=`${r}-enter-from`,enterActiveClass:s=`${r}-enter-active`,enterToClass:c=`${r}-enter-to`,appearFromClass:a=i,appearActiveClass:l=s,appearToClass:d=c,leaveFromClass:u=`${r}-leave-from`,leaveActiveClass:f=`${r}-leave-active`,leaveToClass:h=`${r}-leave-to`}=t,m=cp(n),b=m&&m[0],T=m&&m[1],{onBeforeEnter:x,onEnter:C,onEnterCancelled:y,onLeave:_,onLeaveCancelled:N,onBeforeAppear:H=x,onAppear:V=C,onAppearCancelled:M=y}=e,I=($,X,ce)=>{pr($,X?d:c),pr($,X?l:s),ce&&ce()},j=($,X)=>{$._isLeaving=!1,pr($,u),pr($,h),pr($,f),X&&X()},q=$=>(X,ce)=>{const ke=$?V:C,te=()=>I(X,$,ce);hr(ke,[X,te]),ka(()=>{pr(X,$?a:i),Ut(X,$?d:c),_a(ke)||wa(X,o,b,te)})};return Se(e,{onBeforeEnter($){hr(x,[$]),Ut($,i),Ut($,s)},onBeforeAppear($){hr(H,[$]),Ut($,a),Ut($,l)},onEnter:q(!1),onAppear:q(!0),onLeave($,X){$._isLeaving=!0;const ce=()=>j($,X);Ut($,u),Ut($,f),up(),ka(()=>{$._isLeaving&&(pr($,u),Ut($,h),_a(_)||wa($,o,T,ce))}),hr(_,[$,ce])},onEnterCancelled($){I($,!1),hr(y,[$])},onAppearCancelled($){I($,!0),hr(M,[$])},onLeaveCancelled($){j($),hr(N,[$])}})}function cp(t){if(t==null)return null;if(ve(t))return[pi(t.enter),pi(t.leave)];{const e=pi(t);return[e,e]}}function pi(t){return sf(t)}function Ut(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.add(r)),(t[Ro]||(t[Ro]=new Set)).add(e)}function pr(t,e){e.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const r=t[Ro];r&&(r.delete(e),r.size||(t[Ro]=void 0))}function ka(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lp=0;function wa(t,e,r,o){const n=t._endId=++lp,i=()=>{n===t._endId&&o()};if(r!=null)return setTimeout(i,r);const{type:s,timeout:c,propCount:a}=dp(t,e);if(!s)return o();const l=s+"end";let d=0;const u=()=>{t.removeEventListener(l,f),i()},f=h=>{h.target===t&&++d>=a&&u()};setTimeout(()=>{d<a&&u()},c+1),t.addEventListener(l,f)}function dp(t,e){const r=window.getComputedStyle(t),o=m=>(r[m]||"").split(", "),n=o(`${jt}Delay`),i=o(`${jt}Duration`),s=Ca(n,i),c=o(`${to}Delay`),a=o(`${to}Duration`),l=Ca(c,a);let d=null,u=0,f=0;e===jt?s>0&&(d=jt,u=s,f=i.length):e===to?l>0&&(d=to,u=l,f=a.length):(u=Math.max(s,l),d=u>0?s>l?jt:to:null,f=d?d===jt?i.length:a.length:0);const h=d===jt&&/\b(transform|all)(,|$)/.test(o(`${jt}Property`).toString());return{type:d,timeout:u,propCount:f,hasTransform:h}}function Ca(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((r,o)=>Sa(r)+Sa(t[o])))}function Sa(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function up(){return document.body.offsetHeight}function fp(t,e,r){const o=t[Ro];o&&(e=(e?[e,...o]:[...o]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}const xa=Symbol("_vod"),hp=Symbol("_vsh"),pp=Symbol(""),gp=/(^|;)\s*display\s*:/;function mp(t,e,r){const o=t.style,n=_e(r);let i=!1;if(r&&!n){if(e)if(_e(e))for(const s of e.split(";")){const c=s.slice(0,s.indexOf(":")).trim();r[c]==null&&pn(o,c,"")}else for(const s in e)r[s]==null&&pn(o,s,"");for(const s in r)s==="display"&&(i=!0),pn(o,s,r[s])}else if(n){if(e!==r){const s=o[pp];s&&(r+=";"+s),o.cssText=r,i=gp.test(r)}}else e&&t.removeAttribute("style");xa in t&&(t[xa]=i?o.display:"",t[hp]&&(o.display="none"))}const Ea=/\s*!important$/;function pn(t,e,r){if(G(r))r.forEach(o=>pn(t,e,o));else if(r==null&&(r=""),e.startsWith("--"))t.setProperty(e,r);else{const o=bp(t,e);Ea.test(r)?t.setProperty(or(o),r.replace(Ea,""),"important"):t[o]=r}}const Ta=["Webkit","Moz","ms"],gi={};function bp(t,e){const r=gi[e];if(r)return r;let o=Qe(e);if(o!=="filter"&&o in t)return gi[e]=o;o=jn(o);for(let n=0;n<Ta.length;n++){const i=Ta[n]+o;if(i in t)return gi[e]=i}return e}const Ia="http://www.w3.org/1999/xlink";function Ra(t,e,r,o,n,i=ff(e)){o&&e.startsWith("xlink:")?r==null?t.removeAttributeNS(Ia,e.slice(6,e.length)):t.setAttributeNS(Ia,e,r):r==null||i&&!cl(r)?t.removeAttribute(e):t.setAttribute(e,i?"":Dt(r)?String(r):r)}function Pa(t,e,r,o,n){if(e==="innerHTML"||e==="textContent"){r!=null&&(t[e]=e==="innerHTML"?yd(r):r);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,a=r==null?t.type==="checkbox"?"on":"":String(r);(c!==a||!("_value"in t))&&(t.value=a),r==null&&t.removeAttribute(e),t._value=r;return}let s=!1;if(r===""||r==null){const c=typeof t[e];c==="boolean"?r=cl(r):r==null&&c==="string"?(r="",s=!0):c==="number"&&(r=0,s=!0)}try{t[e]=r}catch{}s&&t.removeAttribute(n||e)}function Br(t,e,r,o){t.addEventListener(e,r,o)}function vp(t,e,r,o){t.removeEventListener(e,r,o)}const Oa=Symbol("_vei");function yp(t,e,r,o,n=null){const i=t[Oa]||(t[Oa]={}),s=i[e];if(o&&s)s.value=o;else{const[c,a]=_p(e);if(o){const l=i[e]=Cp(o,n);Br(t,c,l,a)}else s&&(vp(t,c,s,a),i[e]=void 0)}}const Aa=/(?:Once|Passive|Capture)$/;function _p(t){let e;if(Aa.test(t)){e={};let o;for(;o=t.match(Aa);)t=t.slice(0,t.length-o[0].length),e[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):or(t.slice(2)),e]}let mi=0;const kp=Promise.resolve(),wp=()=>mi||(kp.then(()=>mi=0),mi=Date.now());function Cp(t,e){const r=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=r.attached)return;dt(Sp(o,r.value),e,5,[o])};return r.value=t,r.attached=wp(),r}function Sp(t,e){if(G(e)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},e.map(o=>n=>!n._stopped&&o&&o(n))}else return e}const Ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xp=(t,e,r,o,n,i)=>{const s=n==="svg";e==="class"?fp(t,o,s):e==="style"?mp(t,r,o):Ln(e)?fs(e)||yp(t,e,r,o,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ep(t,e,o,s))?(Pa(t,e,o),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ra(t,e,o,s,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!_e(o))?Pa(t,Qe(e),o,i,e):(e==="true-value"?t._trueValue=o:e==="false-value"&&(t._falseValue=o),Ra(t,e,o,s))};function Ep(t,e,r,o){if(o)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ba(e)&&J(r));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=t.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Ba(e)&&_e(r)?!1:e in t}const $a=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?r=>dn(e,r):e};function Tp(t){t.target.composing=!0}function Na(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bi=Symbol("_assign"),_w={created(t,{modifiers:{lazy:e,trim:r,number:o}},n){t[bi]=$a(n);const i=o||n.props&&n.props.type==="number";Br(t,e?"change":"input",s=>{if(s.target.composing)return;let c=t.value;r&&(c=c.trim()),i&&(c=Ai(c)),t[bi](c)}),r&&Br(t,"change",()=>{t.value=t.value.trim()}),e||(Br(t,"compositionstart",Tp),Br(t,"compositionend",Na),Br(t,"change",Na))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:r,modifiers:{lazy:o,trim:n,number:i}},s){if(t[bi]=$a(s),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ai(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(o&&e===r||n&&t.value.trim()===a)||(t.value=a))}},Ip=Se({patchProp:xp},np);let La;function Rp(){return La||(La=Rh(Ip))}const Pp=(...t)=>{const e=Rp().createApp(...t),{mount:r}=e;return e.mount=o=>{const n=Ap(o);if(!n)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const s=r(n,!1,Op(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),s},e};function Op(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ap(t){return _e(t)?document.querySelector(t):t}var Da={};/**
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
 */const kd=function(t){const e=[];let r=0;for(let o=0;o<t.length;o++){let n=t.charCodeAt(o);n<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=n&63|128):(n&64512)===55296&&o+1<t.length&&(t.charCodeAt(o+1)&64512)===56320?(n=65536+((n&1023)<<10)+(t.charCodeAt(++o)&1023),e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=n&63|128):(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=n&63|128)}return e},Bp=function(t){const e=[];let r=0,o=0;for(;r<t.length;){const n=t[r++];if(n<128)e[o++]=String.fromCharCode(n);else if(n>191&&n<224){const i=t[r++];e[o++]=String.fromCharCode((n&31)<<6|i&63)}else if(n>239&&n<365){const i=t[r++],s=t[r++],c=t[r++],a=((n&7)<<18|(i&63)<<12|(s&63)<<6|c&63)-65536;e[o++]=String.fromCharCode(55296+(a>>10)),e[o++]=String.fromCharCode(56320+(a&1023))}else{const i=t[r++],s=t[r++];e[o++]=String.fromCharCode((n&15)<<12|(i&63)<<6|s&63)}}return e.join("")},wd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let n=0;n<t.length;n+=3){const i=t[n],s=n+1<t.length,c=s?t[n+1]:0,a=n+2<t.length,l=a?t[n+2]:0,d=i>>2,u=(i&3)<<4|c>>4;let f=(c&15)<<2|l>>6,h=l&63;a||(h=64,s||(f=64)),o.push(r[d],r[u],r[f],r[h])}return o.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let n=0;n<t.length;){const i=r[t.charAt(n++)],c=n<t.length?r[t.charAt(n)]:0;++n;const l=n<t.length?r[t.charAt(n)]:64;++n;const u=n<t.length?r[t.charAt(n)]:64;if(++n,i==null||c==null||l==null||u==null)throw new $p;const f=i<<2|c>>4;if(o.push(f),l!==64){const h=c<<4&240|l>>2;if(o.push(h),u!==64){const m=l<<6&192|u;o.push(m)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Np=function(t){const e=kd(t);return wd.encodeByteArray(e,!0)},Cd=function(t){return Np(t).replace(/\./g,"")},Sd=function(t){try{return wd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dp=()=>Lp().__FIREBASE_DEFAULTS__,Mp=()=>{if(typeof process>"u"||typeof Da>"u")return;const t=Da.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sd(t[1]);return e&&JSON.parse(e)},Ls=()=>{try{return Dp()||Mp()||jp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Up=t=>{var e,r;return(r=(e=Ls())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},xd=()=>{var t;return(t=Ls())===null||t===void 0?void 0:t.config},Ed=t=>{var e;return(e=Ls())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Fp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,o)=>{r?this.reject(r):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,o))}}}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Vp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kp(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gp(){try{return typeof indexedDB=="object"}catch{return!1}}function qp(){return new Promise((t,e)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(o);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(o),t(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var i;e(((i=n.error)===null||i===void 0?void 0:i.message)||"")}}catch(r){e(r)}})}/**
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
 */const Yp="FirebaseError";class sr extends Error{constructor(e,r,o){super(r),this.code=e,this.customData=o,this.name=Yp,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,r,o){this.service=e,this.serviceName=r,this.errors=o}create(e,...r){const o=r[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?Jp(i,o):"Error",c=`${this.serviceName}: ${s} (${n}).`;return new sr(n,c,o)}}function Jp(t,e){return t.replace(Xp,(r,o)=>{const n=e[o];return n!=null?String(n):`<${o}?>`})}const Xp=/\{\$([^}]+)}/g;function Qp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xn(t,e){if(t===e)return!0;const r=Object.keys(t),o=Object.keys(e);for(const n of r){if(!o.includes(n))return!1;const i=t[n],s=e[n];if(Ma(i)&&Ma(s)){if(!xn(i,s))return!1}else if(i!==s)return!1}for(const n of o)if(!r.includes(n))return!1;return!0}function Ma(t){return t!==null&&typeof t=="object"}/**
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
 */function qo(t){const e=[];for(const[r,o]of Object.entries(t))Array.isArray(o)?o.forEach(n=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function so(t){const e={};return t.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[n,i]=o.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function ao(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function Zp(t,e){const r=new eg(t,e);return r.subscribe.bind(r)}class eg{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,o){let n;if(e===void 0&&r===void 0&&o===void 0)throw new Error("Missing Observer.");tg(e,["next","error","complete"])?n=e:n={next:e,error:r,complete:o},n.next===void 0&&(n.next=vi),n.error===void 0&&(n.error=vi),n.complete===void 0&&(n.complete=vi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tg(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function vi(){}/**
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
 */function ar(t){return t&&t._delegate?t._delegate:t}class qr{constructor(e,r,o){this.name=e,this.instanceFactory=r,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class rg{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const o=new Fp;if(this.instancesDeferred.set(r,o),this.isInitialized(r)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:r});n&&o.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ng(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[r,o]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);try{const i=this.getOrInitializeService({instanceIdentifier:n});o.resolve(i)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:o,options:r});for(const[i,s]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);o===c&&s.resolve(n)}return n}onInit(e,r){var o;const n=this.normalizeInstanceIdentifier(r),i=(o=this.onInitCallbacks.get(n))!==null&&o!==void 0?o:new Set;i.add(e),this.onInitCallbacks.set(n,i);const s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,r){const o=this.onInitCallbacks.get(r);if(o)for(const n of o)try{n(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:og(e),options:r}),this.instances.set(e,o),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function og(t){return t===mr?void 0:t}function ng(t){return t.instantiationMode==="EAGER"}/**
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
 */class ig{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new rg(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const sg={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ag=fe.INFO,cg={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},lg=(t,e,...r)=>{if(e<t.logLevel)return;const o=new Date().toISOString(),n=cg[e];if(n)console[n](`[${o}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Td{constructor(e){this.name=e,this._logLevel=ag,this._logHandler=lg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const dg=(t,e)=>e.some(r=>t instanceof r);let ja,Ua;function ug(){return ja||(ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fg(){return Ua||(Ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Id=new WeakMap,qi=new WeakMap,Rd=new WeakMap,yi=new WeakMap,Ds=new WeakMap;function hg(t){const e=new Promise((r,o)=>{const n=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{r(er(t.result)),n()},s=()=>{o(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&Id.set(r,t)}).catch(()=>{}),Ds.set(e,t),e}function pg(t){if(qi.has(t))return;const e=new Promise((r,o)=>{const n=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{r(),n()},s=()=>{o(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});qi.set(t,e)}let Yi={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return qi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rd.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return er(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gg(t){Yi=t(Yi)}function mg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const o=t.call(_i(this),e,...r);return Rd.set(o,e.sort?e.sort():[e]),er(o)}:fg().includes(t)?function(...e){return t.apply(_i(this),e),er(Id.get(this))}:function(...e){return er(t.apply(_i(this),e))}}function bg(t){return typeof t=="function"?mg(t):(t instanceof IDBTransaction&&pg(t),dg(t,ug())?new Proxy(t,Yi):t)}function er(t){if(t instanceof IDBRequest)return hg(t);if(yi.has(t))return yi.get(t);const e=bg(t);return e!==t&&(yi.set(t,e),Ds.set(e,t)),e}const _i=t=>Ds.get(t);function vg(t,e,{blocked:r,upgrade:o,blocking:n,terminated:i}={}){const s=indexedDB.open(t,e),c=er(s);return o&&s.addEventListener("upgradeneeded",a=>{o(er(s.result),a.oldVersion,a.newVersion,er(s.transaction),a)}),r&&s.addEventListener("blocked",a=>r(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),n&&a.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const yg=["get","getKey","getAll","getAllKeys","count"],_g=["put","add","delete","clear"],ki=new Map;function Fa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ki.get(e))return ki.get(e);const r=e.replace(/FromIndex$/,""),o=e!==r,n=_g.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(n||yg.includes(r)))return;const i=async function(s,...c){const a=this.transaction(s,n?"readwrite":"readonly");let l=a.store;return o&&(l=l.index(c.shift())),(await Promise.all([l[r](...c),n&&a.done]))[0]};return ki.set(e,i),i}gg(t=>({...t,get:(e,r,o)=>Fa(e,r)||t.get(e,r,o),has:(e,r)=>!!Fa(e,r)||t.has(e,r)}));/**
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
 */class kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(wg(r)){const o=r.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(r=>r).join(" ")}}function wg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ji="@firebase/app",Ha="0.10.13";/**
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
 */const Nt=new Td("@firebase/app"),Cg="@firebase/app-compat",Sg="@firebase/analytics-compat",xg="@firebase/analytics",Eg="@firebase/app-check-compat",Tg="@firebase/app-check",Ig="@firebase/auth",Rg="@firebase/auth-compat",Pg="@firebase/database",Og="@firebase/data-connect",Ag="@firebase/database-compat",Bg="@firebase/functions",$g="@firebase/functions-compat",Ng="@firebase/installations",Lg="@firebase/installations-compat",Dg="@firebase/messaging",Mg="@firebase/messaging-compat",jg="@firebase/performance",Ug="@firebase/performance-compat",Fg="@firebase/remote-config",Hg="@firebase/remote-config-compat",Vg="@firebase/storage",Wg="@firebase/storage-compat",zg="@firebase/firestore",Kg="@firebase/vertexai-preview",Gg="@firebase/firestore-compat",qg="firebase",Yg="10.14.1";/**
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
 */const Xi="[DEFAULT]",Jg={[Ji]:"fire-core",[Cg]:"fire-core-compat",[xg]:"fire-analytics",[Sg]:"fire-analytics-compat",[Tg]:"fire-app-check",[Eg]:"fire-app-check-compat",[Ig]:"fire-auth",[Rg]:"fire-auth-compat",[Pg]:"fire-rtdb",[Og]:"fire-data-connect",[Ag]:"fire-rtdb-compat",[Bg]:"fire-fn",[$g]:"fire-fn-compat",[Ng]:"fire-iid",[Lg]:"fire-iid-compat",[Dg]:"fire-fcm",[Mg]:"fire-fcm-compat",[jg]:"fire-perf",[Ug]:"fire-perf-compat",[Fg]:"fire-rc",[Hg]:"fire-rc-compat",[Vg]:"fire-gcs",[Wg]:"fire-gcs-compat",[zg]:"fire-fst",[Gg]:"fire-fst-compat",[Kg]:"fire-vertex","fire-js":"fire-js",[qg]:"fire-js-all"};/**
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
 */const En=new Map,Xg=new Map,Qi=new Map;function Va(t,e){try{t.container.addComponent(e)}catch(r){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Po(t){const e=t.name;if(Qi.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;Qi.set(e,t);for(const r of En.values())Va(r,t);for(const r of Xg.values())Va(r,t);return!0}function Pd(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function yt(t){return t.settings!==void 0}/**
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
 */const Qg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new Go("app","Firebase",Qg);/**
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
 */class Zg{constructor(e,r,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
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
 */const Yo=Yg;function Od(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const o=Object.assign({name:Xi,automaticDataCollectionEnabled:!1},e),n=o.name;if(typeof n!="string"||!n)throw tr.create("bad-app-name",{appName:String(n)});if(r||(r=xd()),!r)throw tr.create("no-options");const i=En.get(n);if(i){if(xn(r,i.options)&&xn(o,i.config))return i;throw tr.create("duplicate-app",{appName:n})}const s=new ig(n);for(const a of Qi.values())s.addComponent(a);const c=new Zg(r,o,s);return En.set(n,c),c}function em(t=Xi){const e=En.get(t);if(!e&&t===Xi&&xd())return Od();if(!e)throw tr.create("no-app",{appName:t});return e}function Vr(t,e,r){var o;let n=(o=Jg[t])!==null&&o!==void 0?o:t;r&&(n+=`-${r}`);const i=n.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const c=[`Unable to register library "${n}" with version "${e}":`];i&&c.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&s&&c.push("and"),s&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(c.join(" "));return}Po(new qr(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const tm="firebase-heartbeat-database",rm=1,Oo="firebase-heartbeat-store";let wi=null;function Ad(){return wi||(wi=vg(tm,rm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oo)}catch(r){console.warn(r)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),wi}async function om(t){try{const r=(await Ad()).transaction(Oo),o=await r.objectStore(Oo).get(Bd(t));return await r.done,o}catch(e){if(e instanceof sr)Nt.warn(e.message);else{const r=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(r.message)}}}async function Wa(t,e){try{const o=(await Ad()).transaction(Oo,"readwrite");await o.objectStore(Oo).put(e,Bd(t)),await o.done}catch(r){if(r instanceof sr)Nt.warn(r.message);else{const o=tr.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Nt.warn(o.message)}}}function Bd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nm=1024,im=30*24*60*60*1e3;class sm{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new cm(r),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,r;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=za();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const c=new Date(s.date).valueOf();return Date.now()-c<=im}),this._storage.overwrite(this._heartbeatsCache))}catch(o){Nt.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=za(),{heartbeatsToSend:o,unsentEntries:n}=am(this._heartbeatsCache.heartbeats),i=Cd(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=r,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(r){return Nt.warn(r),""}}}function za(){return new Date().toISOString().substring(0,10)}function am(t,e=nm){const r=[];let o=t.slice();for(const n of t){const i=r.find(s=>s.agent===n.agent);if(i){if(i.dates.push(n.date),Ka(r)>e){i.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),Ka(r)>e){r.pop();break}o=o.slice(1)}return{heartbeatsToSend:r,unsentEntries:o}}class cm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gp()?qp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await om(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ka(t){return Cd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lm(t){Po(new qr("platform-logger",e=>new kg(e),"PRIVATE")),Po(new qr("heartbeat",e=>new sm(e),"PRIVATE")),Vr(Ji,Ha,t),Vr(Ji,Ha,"esm2017"),Vr("fire-js","")}lm("");function Ms(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(r[o[n]]=t[o[n]]);return r}function $d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dm=$d,Nd=new Go("auth","Firebase",$d());/**
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
 */const Tn=new Td("@firebase/auth");function um(t,...e){Tn.logLevel<=fe.WARN&&Tn.warn(`Auth (${Yo}): ${t}`,...e)}function gn(t,...e){Tn.logLevel<=fe.ERROR&&Tn.error(`Auth (${Yo}): ${t}`,...e)}/**
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
 */function ut(t,...e){throw js(t,...e)}function kt(t,...e){return js(t,...e)}function Ld(t,e,r){const o=Object.assign(Object.assign({},dm()),{[e]:r});return new Go("auth","Firebase",o).create(e,{appName:t.name})}function $t(t){return Ld(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function js(t,...e){if(typeof t!="string"){const r=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=t.name),t._errorFactory.create(r,...o)}return Nd.create(t,...e)}function K(t,e,...r){if(!t)throw js(e,...r)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gn(e),new Error(e)}function Lt(t,e){t||Pt(e)}/**
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
 */function Zi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fm(){return Ga()==="http:"||Ga()==="https:"}function Ga(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function hm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fm()||Wp()||"connection"in navigator)?navigator.onLine:!0}function pm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jo{constructor(e,r){this.shortDelay=e,this.longDelay=r,Lt(r>e,"Short delay should be less than long delay!"),this.isMobile=Hp()||zp()}get(){return hm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Us(t,e){Lt(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class Dd{static initialize(e,r,o){this.fetchImpl=e,r&&(this.headersImpl=r),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mm=new Jo(3e4,6e4);function cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lr(t,e,r,o,n={}){return Md(t,n,async()=>{let i={},s={};o&&(e==="GET"?s=o:i={body:JSON.stringify(o)});const c=qo(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:a},i);return Vp()||(l.referrerPolicy="no-referrer"),Dd.fetch()(jd(t,t.config.apiHost,r,c),l)})}async function Md(t,e,r){t._canInitEmulator=!1;const o=Object.assign(Object.assign({},gm),e);try{const n=new vm(t),i=await Promise.race([r(),n.promise]);n.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw sn(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const c=i.ok?s.errorMessage:s.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw sn(t,"credential-already-in-use",s);if(a==="EMAIL_EXISTS")throw sn(t,"email-already-in-use",s);if(a==="USER_DISABLED")throw sn(t,"user-disabled",s);const d=o[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ld(t,d,l);ut(t,d)}}catch(n){if(n instanceof sr)throw n;ut(t,"network-request-failed",{message:String(n)})}}async function Xo(t,e,r,o,n={}){const i=await lr(t,e,r,o,n);return"mfaPendingCredential"in i&&ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}function jd(t,e,r,o){const n=`${e}${r}?${o}`;return t.config.emulator?Us(t.config,n):`${t.config.apiScheme}://${n}`}function bm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,o)=>{this.timer=setTimeout(()=>o(kt(this.auth,"network-request-failed")),mm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sn(t,e,r){const o={appName:t.name};r.email&&(o.email=r.email),r.phoneNumber&&(o.phoneNumber=r.phoneNumber);const n=kt(t,e,o);return n.customData._tokenResponse=r,n}function qa(t){return t!==void 0&&t.enterprise!==void 0}class ym{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return bm(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _m(t,e){return lr(t,"GET","/v2/recaptchaConfig",cr(t,e))}/**
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
 */async function km(t,e){return lr(t,"POST","/v1/accounts:delete",e)}async function Ud(t,e){return lr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wm(t,e=!1){const r=ar(t),o=await r.getIdToken(e),n=Fs(o);K(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const i=typeof n.firebase=="object"?n.firebase:void 0,s=i==null?void 0:i.sign_in_provider;return{claims:n,token:o,authTime:mo(Ci(n.auth_time)),issuedAtTime:mo(Ci(n.iat)),expirationTime:mo(Ci(n.exp)),signInProvider:s||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ci(t){return Number(t)*1e3}function Fs(t){const[e,r,o]=t.split(".");if(e===void 0||r===void 0||o===void 0)return gn("JWT malformed, contained fewer than 3 sections"),null;try{const n=Sd(r);return n?JSON.parse(n):(gn("Failed to decode base64 JWT payload"),null)}catch(n){return gn("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function Ya(t){const e=Fs(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ao(t,e,r=!1){if(r)return e;try{return await e}catch(o){throw o instanceof sr&&Cm(o)&&t.auth.currentUser===t&&await t.auth.signOut(),o}}function Cm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Sm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const o=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),o}else{this.errorBackoff=3e4;const n=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class es{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function In(t){var e;const r=t.auth,o=await t.getIdToken(),n=await Ao(t,Ud(r,{idToken:o}));K(n==null?void 0:n.users.length,r,"internal-error");const i=n.users[0];t._notifyReloadListener(i);const s=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fd(i.providerUserInfo):[],c=Em(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new es(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function xm(t){const e=ar(t);await In(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Em(t,e){return[...t.filter(o=>!e.some(n=>n.providerId===o.providerId)),...e]}function Fd(t){return t.map(e=>{var{providerId:r}=e,o=Ms(e,["providerId"]);return{providerId:r,uid:o.rawId||"",displayName:o.displayName||null,email:o.email||null,phoneNumber:o.phoneNumber||null,photoURL:o.photoUrl||null}})}/**
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
 */async function Tm(t,e){const r=await Md(t,{},async()=>{const o=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:i}=t.config,s=jd(t,n,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Dd.fetch()(s,{method:"POST",headers:c,body:o})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Im(t,e){return lr(t,"POST","/v2/accounts:revokeToken",cr(t,e))}/**
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
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ya(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){K(e.length!==0,"internal-error");const r=Ya(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:o,refreshToken:n,expiresIn:i}=await Tm(e,r);this.updateTokensAndExpiration(o,n,Number(i))}updateTokensAndExpiration(e,r,o){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(e,r){const{refreshToken:o,accessToken:n,expirationTime:i}=r,s=new Wr;return o&&(K(typeof o=="string","internal-error",{appName:e}),s.refreshToken=o),n&&(K(typeof n=="string","internal-error",{appName:e}),s.accessToken=n),i&&(K(typeof i=="number","internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function Ft(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:r,auth:o,stsTokenManager:n}=e,i=Ms(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=o,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new es(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const r=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return K(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return wm(this,e)}reload(){return xm(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let o=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),o=!0),r&&await In(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await Ao(this,km(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var o,n,i,s,c,a,l,d;const u=(o=r.displayName)!==null&&o!==void 0?o:void 0,f=(n=r.email)!==null&&n!==void 0?n:void 0,h=(i=r.phoneNumber)!==null&&i!==void 0?i:void 0,m=(s=r.photoURL)!==null&&s!==void 0?s:void 0,b=(c=r.tenantId)!==null&&c!==void 0?c:void 0,T=(a=r._redirectEventId)!==null&&a!==void 0?a:void 0,x=(l=r.createdAt)!==null&&l!==void 0?l:void 0,C=(d=r.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:_,isAnonymous:N,providerData:H,stsTokenManager:V}=r;K(y&&V,e,"internal-error");const M=Wr.fromJSON(this.name,V);K(typeof y=="string",e,"internal-error"),Ft(u,e.name),Ft(f,e.name),K(typeof _=="boolean",e,"internal-error"),K(typeof N=="boolean",e,"internal-error"),Ft(h,e.name),Ft(m,e.name),Ft(b,e.name),Ft(T,e.name),Ft(x,e.name),Ft(C,e.name);const I=new Ot({uid:y,auth:e,email:f,emailVerified:_,displayName:u,isAnonymous:N,photoURL:m,phoneNumber:h,tenantId:b,stsTokenManager:M,createdAt:x,lastLoginAt:C});return H&&Array.isArray(H)&&(I.providerData=H.map(j=>Object.assign({},j))),T&&(I._redirectEventId=T),I}static async _fromIdTokenResponse(e,r,o=!1){const n=new Wr;n.updateFromServerResponse(r);const i=new Ot({uid:r.localId,auth:e,stsTokenManager:n,isAnonymous:o});return await In(i),i}static async _fromGetAccountInfoResponse(e,r,o){const n=r.users[0];K(n.localId!==void 0,"internal-error");const i=n.providerUserInfo!==void 0?Fd(n.providerUserInfo):[],s=!(n.email&&n.passwordHash)&&!(i!=null&&i.length),c=new Wr;c.updateFromIdToken(o);const a=new Ot({uid:n.localId,auth:e,stsTokenManager:c,isAnonymous:s}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new es(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
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
 */const Ja=new Map;function At(t){Lt(t instanceof Function,"Expected a class definition");let e=Ja.get(t);return e?(Lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ja.set(t,e),e)}/**
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
 */class Hd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}Hd.type="NONE";const Xa=Hd;/**
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
 */function mn(t,e,r){return`firebase:${t}:${e}:${r}`}class zr{constructor(e,r,o){this.persistence=e,this.auth=r,this.userKey=o;const{config:n,name:i}=this.auth;this.fullUserKey=mn(this.userKey,n.apiKey,i),this.fullPersistenceKey=mn("persistence",n.apiKey,i),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,o="authUser"){if(!r.length)return new zr(At(Xa),e,o);const n=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=n[0]||At(Xa);const s=mn(o,e.config.apiKey,e.name);let c=null;for(const l of r)try{const d=await l._get(s);if(d){const u=Ot._fromJSON(e,d);l!==i&&(c=u),i=l;break}}catch{}const a=n.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new zr(i,e,o):(i=a[0],c&&await i._set(s,c.toJSON()),await Promise.all(r.map(async l=>{if(l!==i)try{await l._remove(s)}catch{}})),new zr(i,e,o))}}/**
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
 */function Qa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qd(e))return"Blackberry";if(Yd(e))return"Webos";if(Wd(e))return"Safari";if((e.includes("chrome/")||zd(e))&&!e.includes("edge/"))return"Chrome";if(Gd(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=t.match(r);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function Vd(t=je()){return/firefox\//i.test(t)}function Wd(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zd(t=je()){return/crios\//i.test(t)}function Kd(t=je()){return/iemobile/i.test(t)}function Gd(t=je()){return/android/i.test(t)}function qd(t=je()){return/blackberry/i.test(t)}function Yd(t=je()){return/webos/i.test(t)}function Hs(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rm(t=je()){var e;return Hs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pm(){return Kp()&&document.documentMode===10}function Jd(t=je()){return Hs(t)||Gd(t)||Yd(t)||qd(t)||/windows phone/i.test(t)||Kd(t)}/**
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
 */function Xd(t,e=[]){let r;switch(t){case"Browser":r=Qa(je());break;case"Worker":r=`${Qa(je())}-${t}`;break;default:r=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Yo}/${o}`}/**
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
 */class Om{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const o=i=>new Promise((s,c)=>{try{const a=e(i);s(a)}catch(a){c(a)}});o.onAbort=r,this.queue.push(o);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const o of this.queue)await o(e),o.onAbort&&r.push(o.onAbort)}catch(o){r.reverse();for(const n of r)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message})}}}/**
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
 */async function Am(t,e={}){return lr(t,"GET","/v2/passwordPolicy",cr(t,e))}/**
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
 */const Bm=6;class $m{constructor(e){var r,o,n,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=s.minPasswordLength)!==null&&r!==void 0?r:Bm,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(o=e.allowedNonAlphanumericCharacters)===null||o===void 0?void 0:o.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,o,n,i,s,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(r=a.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.meetsMaxPasswordLength)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(n=a.containsLowercaseLetter)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsNumericCharacter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,r){const o=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;o&&(r.meetsMinPasswordLength=e.length>=o),n&&(r.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let o;for(let n=0;n<e.length;n++)o=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(r,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(e,r,o,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Nm{constructor(e,r,o,n){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=o,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Za(this),this.idTokenSubscription=new Za(this),this.beforeStateQueue=new Om(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=At(r)),this._initializationPromise=this.queue(async()=>{var o,n;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await Ud(this,{idToken:e}),o=await Ot._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(o)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(yt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(c,c))}):this.directlySetCurrentUser(null)}const o=await this.assertedPersistence.getCurrentUser();let n=o,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,c=n==null?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===c)&&(a!=null&&a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=o,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await In(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject($t(this));const r=e?ar(e):null;return r&&K(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Am(this),r=new $m(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,r,o){return this.registerStateListener(this.authStateSubscription,e,r,o)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,o){return this.registerStateListener(this.idTokenSubscription,e,r,o)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const o=this.onAuthStateChanged(()=>{o(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(o.tenantId=this.tenantId),await Im(this,o)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const o=await this.getOrInitRedirectPersistenceManager(r);return e===null?o.removeCurrentUser():o.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&At(e)||this._popupRedirectResolver;K(r,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[At(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,o;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const o=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==o&&(this.lastNotifiedUid=o,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,o,n){if(this._deleted)return()=>{};const i=typeof r=="function"?r:r.next.bind(r);let s=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{s||i(this.currentUser)}),typeof r=="function"){const a=e.addObserver(r,o,n);return()=>{s=!0,a()}}else{const a=e.addObserver(r);return()=>{s=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const o=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());o&&(r["X-Firebase-Client"]=o);const n=await this._getAppCheckToken();return n&&(r["X-Firebase-AppCheck"]=n),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&um(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function Ir(t){return ar(t)}class Za{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zp(r=>this.observer=r)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lm(t){Jn=t}function Qd(t){return Jn.loadJS(t)}function Dm(){return Jn.recaptchaEnterpriseScript}function Mm(){return Jn.gapiScript}function jm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Um="recaptcha-enterprise",Fm="NO_RECAPTCHA";class Hm{constructor(e){this.type=Um,this.auth=Ir(e)}async verify(e="verify",r=!1){async function o(i){if(!r){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(s,c)=>{_m(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new ym(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,s(l.siteKey)}}).catch(a=>{c(a)})})}function n(i,s,c){const a=window.grecaptcha;qa(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{s(l)}).catch(()=>{s(Fm)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,s)=>{o(this.auth).then(c=>{if(!r&&qa(window.grecaptcha))n(c,i,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Dm();a.length!==0&&(a+=c),Qd(a).then(()=>{n(c,i,s)}).catch(l=>{s(l)})}}).catch(c=>{s(c)})})}}async function ec(t,e,r,o=!1){const n=new Hm(t);let i;try{i=await n.verify(r)}catch{i=await n.verify(r,!0)}const s=Object.assign({},e);return o?Object.assign(s,{captchaResp:i}):Object.assign(s,{captchaResponse:i}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function ts(t,e,r,o){var n;if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ec(t,e,r,r==="getOobCode");return o(t,i)}else return o(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await ec(t,e,r,r==="getOobCode");return o(t,s)}else return Promise.reject(i)})}/**
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
 */function Vm(t,e){const r=Pd(t,"auth");if(r.isInitialized()){const n=r.getImmediate(),i=r.getOptions();if(xn(i,e??{}))return n;ut(n,"already-initialized")}return r.initialize({options:e})}function Wm(t,e){const r=(e==null?void 0:e.persistence)||[],o=(Array.isArray(r)?r:[r]).map(At);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(o,e==null?void 0:e.popupRedirectResolver)}function zm(t,e,r){const o=Ir(t);K(o._canInitEmulator,o,"emulator-config-failed"),K(/^https?:\/\//.test(e),o,"invalid-emulator-scheme");const n=!1,i=Zd(e),{host:s,port:c}=Km(e),a=c===null?"":`:${c}`;o.config.emulator={url:`${i}//${s}${a}/`},o.settings.appVerificationDisabledForTesting=!0,o.emulatorConfig=Object.freeze({host:s,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:n})}),Gm()}function Zd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Km(t){const e=Zd(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const o=r[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(o);if(n){const i=n[1];return{host:i,port:tc(o.substr(i.length+1))}}else{const[i,s]=o.split(":");return{host:i,port:tc(s)}}}function tc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gm(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vs{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,r){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function qm(t,e){return lr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ym(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",cr(t,e))}/**
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
 */async function Jm(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}async function Xm(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}/**
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
 */class Bo extends Vs{constructor(e,r,o,n=null){super("password",o),this._email=e,this._password=r,this._tenantId=n}static _fromEmailAndPassword(e,r){return new Bo(e,r,"password")}static _fromEmailAndCode(e,r,o=null){return new Bo(e,r,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ts(e,r,"signInWithPassword",Ym);case"emailLink":return Jm(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const o={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ts(e,o,"signUpPassword",qm);case"emailLink":return Xm(e,{idToken:r,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kr(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",cr(t,e))}/**
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
 */const Qm="http://localhost";class Er extends Vs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):ut("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:o,signInMethod:n}=r,i=Ms(r,["providerId","signInMethod"]);if(!o||!n)return null;const s=new Er(o,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return Kr(e,r)}_linkToIdToken(e,r){const o=this.buildRequest();return o.idToken=r,Kr(e,o)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Kr(e,r)}buildRequest(){const e={requestUri:Qm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=qo(r)}return e}}/**
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
 */function Zm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function e0(t){const e=so(ao(t)).link,r=e?so(ao(e)).deep_link_id:null,o=so(ao(t)).deep_link_id;return(o?so(ao(o)).link:null)||o||r||e||t}class Ws{constructor(e){var r,o,n,i,s,c;const a=so(ao(e)),l=(r=a.apiKey)!==null&&r!==void 0?r:null,d=(o=a.oobCode)!==null&&o!==void 0?o:null,u=Zm((n=a.mode)!==null&&n!==void 0?n:null);K(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(s=a.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const r=e0(e);try{return new Ws(r)}catch{return null}}}/**
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
 */class Qr{constructor(){this.providerId=Qr.PROVIDER_ID}static credential(e,r){return Bo._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const o=Ws.parseLink(r);return K(o,"argument-error"),Bo._fromEmailAndCode(e,o.code,o.tenantId)}}Qr.PROVIDER_ID="password";Qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class eu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qo extends eu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qt extends Qo{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Er._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:o}=e;if(!r&&!o)return null;try{return Yt.credential(r,o)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class Jt extends Qo{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
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
 */class Xt extends Qo{constructor(){super("twitter.com")}static credential(e,r){return Er._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:o}=e;if(!r||!o)return null;try{return Xt.credential(r,o)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
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
 */async function t0(t,e){return Xo(t,"POST","/v1/accounts:signUp",cr(t,e))}/**
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
 */class Tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,o,n=!1){const i=await Ot._fromIdTokenResponse(e,o,n),s=rc(o);return new Tr({user:i,providerId:s,_tokenResponse:o,operationType:r})}static async _forOperation(e,r,o){await e._updateTokensIfNecessary(o,!0);const n=rc(o);return new Tr({user:e,providerId:n,_tokenResponse:o,operationType:r})}}function rc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rn extends sr{constructor(e,r,o,n){var i;super(r.code,r.message),this.operationType=o,this.user=n,Object.setPrototypeOf(this,Rn.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:r.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(e,r,o,n){return new Rn(e,r,o,n)}}function tu(t,e,r,o){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rn._fromErrorAndOperation(t,i,e,o):i})}async function r0(t,e,r=!1){const o=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Tr._forOperation(t,"link",o)}/**
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
 */async function o0(t,e,r=!1){const{auth:o}=t;if(yt(o.app))return Promise.reject($t(o));const n="reauthenticate";try{const i=await Ao(t,tu(o,n,e,t),r);K(i.idToken,o,"internal-error");const s=Fs(i.idToken);K(s,o,"internal-error");const{sub:c}=s;return K(t.uid===c,o,"user-mismatch"),Tr._forOperation(t,n,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ut(o,"user-mismatch"),i}}/**
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
 */async function ru(t,e,r=!1){if(yt(t.app))return Promise.reject($t(t));const o="signIn",n=await tu(t,o,e),i=await Tr._fromIdTokenResponse(t,o,n);return r||await t._updateCurrentUser(i.user),i}async function n0(t,e){return ru(Ir(t),e)}/**
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
 */async function ou(t){const e=Ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kw(t,e,r){if(yt(t.app))return Promise.reject($t(t));const o=Ir(t),s=await ts(o,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",t0).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ou(t),a}),c=await Tr._fromIdTokenResponse(o,"signIn",s);return await o._updateCurrentUser(c.user),c}function ww(t,e,r){return yt(t.app)?Promise.reject($t(t)):n0(ar(t),Qr.credential(e,r)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&ou(t),o})}function i0(t,e,r,o){return ar(t).onIdTokenChanged(e,r,o)}function s0(t,e,r){return ar(t).beforeAuthStateChanged(e,r)}function a0(t){return ar(t).signOut()}const Pn="__sak";/**
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
 */class nu{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Pn,"1"),this.storage.removeItem(Pn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const c0=1e3,l0=10;class iu extends nu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const o=this.storage.getItem(r),n=this.localCache[r];o!==n&&e(r,n,o)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,c,a)=>{this.notifyListeners(s,a)});return}const o=e.key;r?this.detachListener():this.stopPolling();const n=()=>{const s=this.storage.getItem(o);!r&&this.localCache[o]===s||this.notifyListeners(o,s)},i=this.storage.getItem(o);Pm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,l0):n()}notifyListeners(e,r){this.localCache[e]=r;const o=this.listeners[e];if(o)for(const n of Array.from(o))n(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:o}),!0)})},c0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}iu.type="LOCAL";const d0=iu;/**
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
 */class su extends nu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}su.type="SESSION";const au=su;/**
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
 */function u0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Xn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(n=>n.isListeningto(e));if(r)return r;const o=new Xn(e);return this.receivers.push(o),o}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:o,eventType:n,data:i}=r.data,s=this.handlersMap[n];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:o,eventType:n});const c=Array.from(s).map(async l=>l(r.origin,i)),a=await u0(c);r.ports[0].postMessage({status:"done",eventId:o,eventType:n,response:a})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xn.receivers=[];/**
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
 */function zs(t="",e=10){let r="";for(let o=0;o<e;o++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class f0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,o=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,s;return new Promise((c,a)=>{const l=zs("",20);n.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},o);s={messageChannel:n,onMessage(u){const f=u;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(f.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:r},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function wt(){return window}function h0(t){wt().location.href=t}/**
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
 */function cu(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function p0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function m0(){return cu()?self:null}/**
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
 */const lu="firebaseLocalStorageDb",b0=1,On="firebaseLocalStorage",du="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Qn(t,e){return t.transaction([On],e?"readwrite":"readonly").objectStore(On)}function v0(){const t=indexedDB.deleteDatabase(lu);return new Zo(t).toPromise()}function rs(){const t=indexedDB.open(lu,b0);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const o=t.result;try{o.createObjectStore(On,{keyPath:du})}catch(n){r(n)}}),t.addEventListener("success",async()=>{const o=t.result;o.objectStoreNames.contains(On)?e(o):(o.close(),await v0(),e(await rs()))})})}async function oc(t,e,r){const o=Qn(t,!0).put({[du]:e,value:r});return new Zo(o).toPromise()}async function y0(t,e){const r=Qn(t,!1).get(e),o=await new Zo(r).toPromise();return o===void 0?null:o.value}function nc(t,e){const r=Qn(t,!0).delete(e);return new Zo(r).toPromise()}const _0=800,k0=3;class uu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rs(),this.db)}async _withRetries(e){let r=0;for(;;)try{const o=await this._openDb();return await e(o)}catch(o){if(r++>k0)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xn._getInstance(m0()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await p0(),!this.activeServiceWorker)return;this.sender=new f0(this.activeServiceWorker);const o=await this.sender._send("ping",{},800);o&&!((e=o[0])===null||e===void 0)&&e.fulfilled&&!((r=o[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||g0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rs();return await oc(e,Pn,"1"),await nc(e,Pn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(o=>oc(o,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(o=>y0(o,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>nc(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const i=Qn(n,!1).getAll();return new Zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],o=new Set;if(e.length!==0)for(const{fbase_key:n,value:i}of e)o.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),r.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!o.has(n)&&(this.notifyListeners(n,null),r.push(n));return r}notifyListeners(e,r){this.localCache[e]=r;const o=this.listeners[e];if(o)for(const n of Array.from(o))n(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uu.type="LOCAL";const w0=uu;new Jo(3e4,6e4);/**
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
 */function C0(t,e){return e?At(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ks extends Vs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Kr(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function S0(t){return ru(t.auth,new Ks(t),t.bypassAuthState)}function x0(t){const{auth:e,user:r}=t;return K(r,e,"internal-error"),o0(r,new Ks(t),t.bypassAuthState)}async function E0(t){const{auth:e,user:r}=t;return K(r,e,"internal-error"),r0(r,new Ks(t),t.bypassAuthState)}/**
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
 */class fu{constructor(e,r,o,n,i=!1){this.auth=e,this.resolver=o,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:o,postBody:n,tenantId:i,error:s,type:c}=e;if(s){this.reject(s);return}const a={auth:this.auth,requestUri:r,sessionId:o,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S0;case"linkViaPopup":case"linkViaRedirect":return E0;case"reauthViaPopup":case"reauthViaRedirect":return x0;default:ut(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const T0=new Jo(2e3,1e4);class Lr extends fu{constructor(e,r,o,n,i){super(e,r,n,i),this.provider=o,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=zs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,o;if(!((o=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||o===void 0)&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,T0.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const I0="pendingRedirect",bn=new Map;class R0 extends fu{constructor(e,r,o=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,o),this.eventId=null}async execute(){let e=bn.get(this.auth._key());if(!e){try{const o=await P0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(o)}catch(r){e=()=>Promise.reject(r)}bn.set(this.auth._key(),e)}return this.bypassAuthState||bn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function P0(t,e){const r=B0(e),o=A0(t);if(!await o._isAvailable())return!1;const n=await o._get(r)==="true";return await o._remove(r),n}function O0(t,e){bn.set(t._key(),e)}function A0(t){return At(t._redirectPersistence)}function B0(t){return mn(I0,t.config.apiKey,t.name)}async function $0(t,e,r=!1){if(yt(t.app))return Promise.reject($t(t));const o=Ir(t),n=C0(o,e),s=await new R0(o,n,r).execute();return s&&!r&&(delete s.user._redirectEventId,await o._persistUserIfCurrent(s.user),await o._setRedirectUser(null,e)),s}/**
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
 */const N0=10*60*1e3;class L0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(e,o)&&(r=!0,this.sendToConsumer(e,o),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D0(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var o;if(e.error&&!hu(e)){const n=((o=e.error.code)===null||o===void 0?void 0:o.split("auth/")[1])||"internal-error";r.onError(kt(this.auth,n))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const o=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&o}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ic(e))}saveEventToCache(e){this.cachedEventUids.add(ic(e)),this.lastProcessedEventTime=Date.now()}}function ic(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hu(t);default:return!1}}/**
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
 */async function M0(t,e={}){return lr(t,"GET","/v1/projects",e)}/**
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
 */const j0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U0=/^https?/;async function F0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await M0(t);for(const r of e)try{if(H0(r))return}catch{}ut(t,"unauthorized-domain")}function H0(t){const e=Zi(),{protocol:r,hostname:o}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&o===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===o}if(!U0.test(r))return!1;if(j0.test(t))return o===t;const n=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(o)}/**
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
 */const V0=new Jo(3e4,6e4);function sc(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function W0(t){return new Promise((e,r)=>{var o,n,i;function s(){sc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sc(),r(kt(t,"network-request-failed"))},timeout:V0.get()})}if(!((n=(o=wt().gapi)===null||o===void 0?void 0:o.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((i=wt().gapi)===null||i===void 0)&&i.load)s();else{const c=jm("iframefcb");return wt()[c]=()=>{gapi.load?s():r(kt(t,"network-request-failed"))},Qd(`${Mm()}?onload=${c}`).catch(a=>r(a))}}).catch(e=>{throw vn=null,e})}let vn=null;function z0(t){return vn=vn||W0(t),vn}/**
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
 */const K0=new Jo(5e3,15e3),G0="__/auth/iframe",q0="emulator/auth/iframe",Y0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X0(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Us(e,q0):`https://${t.config.authDomain}/${G0}`,o={apiKey:e.apiKey,appName:t.name,v:Yo},n=J0.get(t.config.apiHost);n&&(o.eid=n);const i=t._getFrameworks();return i.length&&(o.fw=i.join(",")),`${r}?${qo(o).slice(1)}`}async function Q0(t){const e=await z0(t),r=wt().gapi;return K(r,t,"internal-error"),e.open({where:document.body,url:X0(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y0,dontclear:!0},o=>new Promise(async(n,i)=>{await o.restyle({setHideOnLeave:!1});const s=kt(t,"network-request-failed"),c=wt().setTimeout(()=>{i(s)},K0.get());function a(){wt().clearTimeout(c),n(o)}o.ping(a).then(a,()=>{i(s)})}))}/**
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
 */const Z0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eb=500,tb=600,rb="_blank",ob="http://localhost";class ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nb(t,e,r,o=eb,n=tb){const i=Math.max((window.screen.availHeight-n)/2,0).toString(),s=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Z0),{width:o.toString(),height:n.toString(),top:i,left:s}),l=je().toLowerCase();r&&(c=zd(l)?rb:r),Vd(l)&&(e=e||ob,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[h,m])=>`${f}${h}=${m},`,"");if(Rm(l)&&c!=="_self")return ib(e||"",c),new ac(null);const u=window.open(e||"",c,d);K(u,t,"popup-blocked");try{u.focus()}catch{}return new ac(u)}function ib(t,e){const r=document.createElement("a");r.href=t,r.target=e;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(o)}/**
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
 */const sb="__/auth/handler",ab="emulator/auth/handler",cb=encodeURIComponent("fac");async function cc(t,e,r,o,n,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:o,v:Yo,eventId:n};if(e instanceof eu){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Qp(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))s[d]=u}if(e instanceof Qo){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const c=s;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const a=await t._getAppCheckToken(),l=a?`#${cb}=${encodeURIComponent(a)}`:"";return`${lb(t)}?${qo(c).slice(1)}${l}`}function lb({config:t}){return t.emulator?Us(t,ab):`https://${t.authDomain}/${sb}`}/**
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
 */const Si="webStorageSupport";class db{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=au,this._completeRedirectFn=$0,this._overrideRedirectResult=O0}async _openPopup(e,r,o,n){var i;Lt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await cc(e,r,o,Zi(),n);return nb(e,s,zs())}async _openRedirect(e,r,o,n){await this._originValidation(e);const i=await cc(e,r,o,Zi(),n);return h0(i),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:n,promise:i}=this.eventManagers[r];return n?Promise.resolve(n):(Lt(i,"If manager is not set, promise should be"),i)}const o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch(()=>{delete this.eventManagers[r]}),o}async initAndGetManager(e){const r=await Q0(e),o=new L0(e);return r.register("authEvent",n=>(K(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:o.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:o},this.iframes[e._key()]=r,o}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Si,{type:Si},n=>{var i;const s=(i=n==null?void 0:n[0])===null||i===void 0?void 0:i[Si];s!==void 0&&r(!!s),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=F0(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return Jd()||Wd()||Hs()}}const ub=db;var lc="@firebase/auth",dc="1.7.9";/**
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
 */class fb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(o=>{e((o==null?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pb(t){Po(new qr("auth",(e,{options:r})=>{const o=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:c}=o.options;K(s&&!s.includes(":"),"invalid-api-key",{appName:o.name});const a={apiKey:s,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xd(t)},l=new Nm(o,n,i,a);return Wm(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,o)=>{e.getProvider("auth-internal").initialize()})),Po(new qr("auth-internal",e=>{const r=Ir(e.getProvider("auth").getImmediate());return(o=>new fb(o))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vr(lc,dc,hb(t)),Vr(lc,dc,"esm2017")}/**
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
 */const gb=5*60,mb=Ed("authIdTokenMaxAge")||gb;let uc=null;const bb=t=>async e=>{const r=e&&await e.getIdTokenResult(),o=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(o&&o>mb)return;const n=r==null?void 0:r.token;uc!==n&&(uc=n,await fetch(t,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function vb(t=em()){const e=Pd(t,"auth");if(e.isInitialized())return e.getImmediate();const r=Vm(t,{popupRedirectResolver:ub,persistence:[w0,d0,au]}),o=Ed("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(o,location.origin);if(location.origin===i.origin){const s=bb(i.toString());s0(r,s,()=>s(r.currentUser)),i0(r,c=>s(c))}}const n=Up("auth");return n&&zm(r,`http://${n}`),r}function yb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Lm({loadJS(t){return new Promise((e,r)=>{const o=document.createElement("script");o.setAttribute("src",t),o.onload=e,o.onerror=n=>{const i=kt("internal-error");i.customData=n,r(i)},o.type="text/javascript",o.charset="UTF-8",yb().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pb("Browser");/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $r=typeof document<"u";function pu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _b(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&pu(t.default)}const de=Object.assign;function xi(t,e){const r={};for(const o in e){const n=e[o];r[o]=ft(n)?n.map(t):t(n)}return r}const bo=()=>{},ft=Array.isArray,gu=/#/g,kb=/&/g,wb=/\//g,Cb=/=/g,Sb=/\?/g,mu=/\+/g,xb=/%5B/g,Eb=/%5D/g,bu=/%5E/g,Tb=/%60/g,vu=/%7B/g,Ib=/%7C/g,yu=/%7D/g,Rb=/%20/g;function Gs(t){return encodeURI(""+t).replace(Ib,"|").replace(xb,"[").replace(Eb,"]")}function Pb(t){return Gs(t).replace(vu,"{").replace(yu,"}").replace(bu,"^")}function os(t){return Gs(t).replace(mu,"%2B").replace(Rb,"+").replace(gu,"%23").replace(kb,"%26").replace(Tb,"`").replace(vu,"{").replace(yu,"}").replace(bu,"^")}function Ob(t){return os(t).replace(Cb,"%3D")}function Ab(t){return Gs(t).replace(gu,"%23").replace(Sb,"%3F")}function Bb(t){return t==null?"":Ab(t).replace(wb,"%2F")}function $o(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $b=/\/$/,Nb=t=>t.replace($b,"");function Ei(t,e,r="/"){let o,n={},i="",s="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(o=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),n=t(i)),c>-1&&(o=o||e.slice(0,c),s=e.slice(c,e.length)),o=jb(o??e,r),{fullPath:o+(i&&"?")+i+s,path:o,query:n,hash:$o(s)}}function Lb(t,e){const r=e.query?t(e.query):"";return e.path+(r&&"?")+r+(e.hash||"")}function fc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Db(t,e,r){const o=e.matched.length-1,n=r.matched.length-1;return o>-1&&o===n&&Yr(e.matched[o],r.matched[n])&&_u(e.params,r.params)&&t(e.query)===t(r.query)&&e.hash===r.hash}function Yr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _u(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const r in t)if(!Mb(t[r],e[r]))return!1;return!0}function Mb(t,e){return ft(t)?hc(t,e):ft(e)?hc(e,t):t===e}function hc(t,e){return ft(e)?t.length===e.length&&t.every((r,o)=>r===e[o]):t.length===1&&t[0]===e}function jb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const r=e.split("/"),o=t.split("/"),n=o[o.length-1];(n===".."||n===".")&&o.push("");let i=r.length-1,s,c;for(s=0;s<o.length;s++)if(c=o[s],c!==".")if(c==="..")i>1&&i--;else break;return r.slice(0,i).join("/")+"/"+o.slice(s).join("/")}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var No;(function(t){t.pop="pop",t.push="push"})(No||(No={}));var vo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vo||(vo={}));function Ub(t){if(!t)if($r){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Nb(t)}const Fb=/^[^#]+#/;function Hb(t,e){return t.replace(Fb,"#")+e}function Vb(t,e){const r=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:e.behavior,left:o.left-r.left-(e.left||0),top:o.top-r.top-(e.top||0)}}const Zn=()=>({left:window.scrollX,top:window.scrollY});function Wb(t){let e;if("el"in t){const r=t.el,o=typeof r=="string"&&r.startsWith("#"),n=typeof r=="string"?o?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!n)return;e=Vb(n,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pc(t,e){return(history.state?history.state.position-e:-1)+t}const ns=new Map;function zb(t,e){ns.set(t,e)}function Kb(t){const e=ns.get(t);return ns.delete(t),e}let Gb=()=>location.protocol+"//"+location.host;function ku(t,e){const{pathname:r,search:o,hash:n}=e,i=t.indexOf("#");if(i>-1){let c=n.includes(t.slice(i))?t.slice(i).length:1,a=n.slice(c);return a[0]!=="/"&&(a="/"+a),fc(a,"")}return fc(r,t)+o+n}function qb(t,e,r,o){let n=[],i=[],s=null;const c=({state:f})=>{const h=ku(t,location),m=r.value,b=e.value;let T=0;if(f){if(r.value=h,e.value=f,s&&s===m){s=null;return}T=b?f.position-b.position:0}else o(h);n.forEach(x=>{x(r.value,m,{delta:T,type:No.pop,direction:T?T>0?vo.forward:vo.back:vo.unknown})})};function a(){s=r.value}function l(f){n.push(f);const h=()=>{const m=n.indexOf(f);m>-1&&n.splice(m,1)};return i.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState(de({},f.state,{scroll:Zn()}),"")}function u(){for(const f of i)f();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:a,listen:l,destroy:u}}function gc(t,e,r,o=!1,n=!1){return{back:t,current:e,forward:r,replaced:o,position:window.history.length,scroll:n?Zn():null}}function Yb(t){const{history:e,location:r}=window,o={value:ku(t,r)},n={value:e.state};n.value||i(o.value,{back:null,current:o.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,d){const u=t.indexOf("#"),f=u>-1?(r.host&&document.querySelector("base")?t:t.slice(u))+a:Gb()+t+a;try{e[d?"replaceState":"pushState"](l,"",f),n.value=l}catch(h){console.error(h),r[d?"replace":"assign"](f)}}function s(a,l){const d=de({},e.state,gc(n.value.back,a,n.value.forward,!0),l,{position:n.value.position});i(a,d,!0),o.value=a}function c(a,l){const d=de({},n.value,e.state,{forward:a,scroll:Zn()});i(d.current,d,!0);const u=de({},gc(o.value,a,null),{position:d.position+1},l);i(a,u,!1),o.value=a}return{location:o,state:n,push:c,replace:s}}function Jb(t){t=Ub(t);const e=Yb(t),r=qb(t,e.state,e.location,e.replace);function o(i,s=!0){s||r.pauseListeners(),history.go(i)}const n=de({location:"",base:t,go:o,createHref:Hb.bind(null,t)},e,r);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function Xb(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Jb(t)}function Qb(t){return typeof t=="string"||t&&typeof t=="object"}function wu(t){return typeof t=="string"||typeof t=="symbol"}const Cu=Symbol("");var mc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mc||(mc={}));function Jr(t,e){return de(new Error,{type:t,[Cu]:!0},e)}function xt(t,e){return t instanceof Error&&Cu in t&&(e==null||!!(t.type&e))}const bc="[^/]+?",Zb={sensitive:!1,strict:!1,start:!0,end:!0},ev=/[.+*?^${}()[\]/\\]/g;function tv(t,e){const r=de({},Zb,e),o=[];let n=r.start?"^":"";const i=[];for(const l of t){const d=l.length?[]:[90];r.strict&&!l.length&&(n+="/");for(let u=0;u<l.length;u++){const f=l[u];let h=40+(r.sensitive?.25:0);if(f.type===0)u||(n+="/"),n+=f.value.replace(ev,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:b,optional:T,regexp:x}=f;i.push({name:m,repeatable:b,optional:T});const C=x||bc;if(C!==bc){h+=10;try{new RegExp(`(${C})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+_.message)}}let y=b?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||(y=T&&l.length<2?`(?:/${y})`:"/"+y),T&&(y+="?"),n+=y,h+=20,T&&(h+=-8),b&&(h+=-20),C===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(r.strict&&r.end){const l=o.length-1;o[l][o[l].length-1]+=.7000000000000001}r.strict||(n+="/?"),r.end?n+="$":r.strict&&(n+="(?:/|$)");const s=new RegExp(n,r.sensitive?"":"i");function c(l){const d=l.match(s),u={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",m=i[f-1];u[m.name]=h&&m.repeatable?h.split("/"):h}return u}function a(l){let d="",u=!1;for(const f of t){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:b,optional:T}=h,x=m in l?l[m]:"";if(ft(x)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=ft(x)?x.join("/"):x;if(!C)if(T)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);d+=C}}return d||"/"}return{re:s,score:o,keys:i,parse:c,stringify:a}}function rv(t,e){let r=0;for(;r<t.length&&r<e.length;){const o=e[r]-t[r];if(o)return o;r++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Su(t,e){let r=0;const o=t.score,n=e.score;for(;r<o.length&&r<n.length;){const i=rv(o[r],n[r]);if(i)return i;r++}if(Math.abs(n.length-o.length)===1){if(vc(o))return 1;if(vc(n))return-1}return n.length-o.length}function vc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ov={type:0,value:""},nv=/[a-zA-Z0-9_]/;function iv(t){if(!t)return[[]];if(t==="/")return[[ov]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${r})/"${l}": ${h}`)}let r=0,o=r;const n=[];let i;function s(){i&&n.push(i),i=[]}let c=0,a,l="",d="";function u(){l&&(r===0?i.push({type:0,value:l}):r===1||r===2||r===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&r!==2){o=r,r=4;continue}switch(r){case 0:a==="/"?(l&&u(),s()):a===":"?(u(),r=1):f();break;case 4:f(),r=o;break;case 1:a==="("?r=2:nv.test(a)?f():(u(),r=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:r=3:d+=a;break;case 3:u(),r=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,d="";break;default:e("Unknown state");break}}return r===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),s(),n}function sv(t,e,r){const o=tv(iv(t.path),r),n=de(o,{record:t,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function av(t,e){const r=[],o=new Map;e=wc({strict:!1,end:!0,sensitive:!1},e);function n(u){return o.get(u)}function i(u,f,h){const m=!h,b=_c(u);b.aliasOf=h&&h.record;const T=wc(e,u),x=[b];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of _)x.push(_c(de({},b,{components:h?h.record.components:b.components,path:N,aliasOf:h?h.record:b})))}let C,y;for(const _ of x){const{path:N}=_;if(f&&N[0]!=="/"){const H=f.record.path,V=H[H.length-1]==="/"?"":"/";_.path=f.record.path+(N&&V+N)}if(C=sv(_,f,T),h?h.alias.push(C):(y=y||C,y!==C&&y.alias.push(C),m&&u.name&&!kc(C)&&s(u.name)),xu(C)&&a(C),b.children){const H=b.children;for(let V=0;V<H.length;V++)i(H[V],C,h&&h.children[V])}h=h||C}return y?()=>{s(y)}:bo}function s(u){if(wu(u)){const f=o.get(u);f&&(o.delete(u),r.splice(r.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=r.indexOf(u);f>-1&&(r.splice(f,1),u.record.name&&o.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function c(){return r}function a(u){const f=dv(u,r);r.splice(f,0,u),u.record.name&&!kc(u)&&o.set(u.record.name,u)}function l(u,f){let h,m={},b,T;if("name"in u&&u.name){if(h=o.get(u.name),!h)throw Jr(1,{location:u});T=h.record.name,m=de(yc(f.params,h.keys.filter(y=>!y.optional).concat(h.parent?h.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),u.params&&yc(u.params,h.keys.map(y=>y.name))),b=h.stringify(m)}else if(u.path!=null)b=u.path,h=r.find(y=>y.re.test(b)),h&&(m=h.parse(b),T=h.record.name);else{if(h=f.name?o.get(f.name):r.find(y=>y.re.test(f.path)),!h)throw Jr(1,{location:u,currentLocation:f});T=h.record.name,m=de({},f.params,u.params),b=h.stringify(m)}const x=[];let C=h;for(;C;)x.unshift(C.record),C=C.parent;return{name:T,path:b,params:m,matched:x,meta:lv(x)}}t.forEach(u=>i(u));function d(){r.length=0,o.clear()}return{addRoute:i,resolve:l,removeRoute:s,clearRoutes:d,getRoutes:c,getRecordMatcher:n}}function yc(t,e){const r={};for(const o of e)o in t&&(r[o]=t[o]);return r}function _c(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:cv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function cv(t){const e={},r=t.props||!1;if("component"in t)e.default=r;else for(const o in t.components)e[o]=typeof r=="object"?r[o]:r;return e}function kc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lv(t){return t.reduce((e,r)=>de(e,r.meta),{})}function wc(t,e){const r={};for(const o in t)r[o]=o in e?e[o]:t[o];return r}function dv(t,e){let r=0,o=e.length;for(;r!==o;){const i=r+o>>1;Su(t,e[i])<0?o=i:r=i+1}const n=uv(t);return n&&(o=e.lastIndexOf(n,o-1)),o}function uv(t){let e=t;for(;e=e.parent;)if(xu(e)&&Su(t,e)===0)return e}function xu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fv(t){const e={};if(t===""||t==="?")return e;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let n=0;n<o.length;++n){const i=o[n].replace(mu," "),s=i.indexOf("="),c=$o(s<0?i:i.slice(0,s)),a=s<0?null:$o(i.slice(s+1));if(c in e){let l=e[c];ft(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Cc(t){let e="";for(let r in t){const o=t[r];if(r=Ob(r),o==null){o!==void 0&&(e+=(e.length?"&":"")+r);continue}(ft(o)?o.map(i=>i&&os(i)):[o&&os(o)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+r,i!=null&&(e+="="+i))})}return e}function hv(t){const e={};for(const r in t){const o=t[r];o!==void 0&&(e[r]=ft(o)?o.map(n=>n==null?null:""+n):o==null?o:""+o)}return e}const pv=Symbol(""),Sc=Symbol(""),ei=Symbol(""),Eu=Symbol(""),is=Symbol("");function ro(){let t=[];function e(o){return t.push(o),()=>{const n=t.indexOf(o);n>-1&&t.splice(n,1)}}function r(){t=[]}return{add:e,list:()=>t.slice(),reset:r}}function Gt(t,e,r,o,n,i=s=>s()){const s=o&&(o.enterCallbacks[n]=o.enterCallbacks[n]||[]);return()=>new Promise((c,a)=>{const l=f=>{f===!1?a(Jr(4,{from:r,to:e})):f instanceof Error?a(f):Qb(f)?a(Jr(2,{from:e,to:f})):(s&&o.enterCallbacks[n]===s&&typeof f=="function"&&s.push(f),c())},d=i(()=>t.call(o&&o.instances[n],e,r,l));let u=Promise.resolve(d);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Ti(t,e,r,o,n=i=>i()){const i=[];for(const s of t)for(const c in s.components){let a=s.components[c];if(!(e!=="beforeRouteEnter"&&!s.instances[c]))if(pu(a)){const d=(a.__vccOpts||a)[e];d&&i.push(Gt(d,r,o,s,c,n))}else{let l=a();i.push(()=>l.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${s.path}"`);const u=_b(d)?d.default:d;s.mods[c]=d,s.components[c]=u;const h=(u.__vccOpts||u)[e];return h&&Gt(h,r,o,s,c,n)()}))}}return i}function xc(t){const e=lt(ei),r=lt(Eu),o=Je(()=>{const a=wr(t.to);return e.resolve(a)}),n=Je(()=>{const{matched:a}=o.value,{length:l}=a,d=a[l-1],u=r.matched;if(!d||!u.length)return-1;const f=u.findIndex(Yr.bind(null,d));if(f>-1)return f;const h=Ec(a[l-2]);return l>1&&Ec(d)===h&&u[u.length-1].path!==h?u.findIndex(Yr.bind(null,a[l-2])):f}),i=Je(()=>n.value>-1&&vv(r.params,o.value.params)),s=Je(()=>n.value>-1&&n.value===r.matched.length-1&&_u(r.params,o.value.params));function c(a={}){return bv(a)?e[wr(t.replace)?"replace":"push"](wr(t.to)).catch(bo):Promise.resolve()}return{route:o,href:Je(()=>o.value.href),isActive:i,isExactActive:s,navigate:c}}const gv=zl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xc,setup(t,{slots:e}){const r=Xr(xc(t)),{options:o}=lt(ei),n=Je(()=>({[Tc(t.activeClass,o.linkActiveClass,"router-link-active")]:r.isActive,[Tc(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const i=e.default&&e.default(r);return t.custom?i:Ns("a",{"aria-current":r.isExactActive?t.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:n.value},i)}}}),mv=gv;function bv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vv(t,e){for(const r in e){const o=e[r],n=t[r];if(typeof o=="string"){if(o!==n)return!1}else if(!ft(n)||n.length!==o.length||o.some((i,s)=>i!==n[s]))return!1}return!0}function Ec(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tc=(t,e,r)=>t??e??r,yv=zl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:r}){const o=lt(is),n=Je(()=>t.route||o.value),i=lt(Sc,0),s=Je(()=>{let l=wr(i);const{matched:d}=n.value;let u;for(;(u=d[l])&&!u.components;)l++;return l}),c=Je(()=>n.value.matched[s.value]);fn(Sc,Je(()=>s.value+1)),fn(pv,c),fn(is,n);const a=kr();return vt(()=>[a.value,c.value,t.name],([l,d,u],[f,h,m])=>{d&&(d.instances[u]=l,h&&h!==d&&l&&l===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),l&&d&&(!h||!Yr(d,h)||!f)&&(d.enterCallbacks[u]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=n.value,d=t.name,u=c.value,f=u&&u.components[d];if(!f)return Ic(r.default,{Component:f,route:l});const h=u.props[d],m=h?h===!0?l.params:typeof h=="function"?h(l):h:null,T=Ns(f,de({},m,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(u.instances[d]=null)},ref:a}));return Ic(r.default,{Component:T,route:l})||T}}});function Ic(t,e){if(!t)return null;const r=t(e);return r.length===1?r[0]:r}const _v=yv;function kv(t){const e=av(t.routes,t),r=t.parseQuery||fv,o=t.stringifyQuery||Cc,n=t.history,i=ro(),s=ro(),c=ro(),a=Bf(Ht);let l=Ht;$r&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=xi.bind(null,w=>""+w),u=xi.bind(null,Bb),f=xi.bind(null,$o);function h(w,D){let B,U;return wu(w)?(B=e.getRecordMatcher(w),U=D):U=w,e.addRoute(U,B)}function m(w){const D=e.getRecordMatcher(w);D&&e.removeRoute(D)}function b(){return e.getRoutes().map(w=>w.record)}function T(w){return!!e.getRecordMatcher(w)}function x(w,D){if(D=de({},D||a.value),typeof w=="string"){const g=Ei(r,w,D.path),v=e.resolve({path:g.path},D),S=n.createHref(g.fullPath);return de(g,v,{params:f(v.params),hash:$o(g.hash),redirectedFrom:void 0,href:S})}let B;if(w.path!=null)B=de({},w,{path:Ei(r,w.path,D.path).path});else{const g=de({},w.params);for(const v in g)g[v]==null&&delete g[v];B=de({},w,{params:u(g)}),D.params=u(D.params)}const U=e.resolve(B,D),ie=w.hash||"";U.params=d(f(U.params));const ge=Lb(o,de({},w,{hash:Pb(ie),path:U.path})),p=n.createHref(ge);return de({fullPath:ge,hash:ie,query:o===Cc?hv(w.query):w.query||{}},U,{redirectedFrom:void 0,href:p})}function C(w){return typeof w=="string"?Ei(r,w,a.value.path):de({},w)}function y(w,D){if(l!==w)return Jr(8,{from:D,to:w})}function _(w){return V(w)}function N(w){return _(de(C(w),{replace:!0}))}function H(w){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:B}=D;let U=typeof B=="function"?B(w):B;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=C(U):{path:U},U.params={}),de({query:w.query,hash:w.hash,params:U.path!=null?{}:w.params},U)}}function V(w,D){const B=l=x(w),U=a.value,ie=w.state,ge=w.force,p=w.replace===!0,g=H(B);if(g)return V(de(C(g),{state:typeof g=="object"?de({},ie,g.state):ie,force:ge,replace:p}),D||B);const v=B;v.redirectedFrom=D;let S;return!ge&&Db(o,U,B)&&(S=Jr(16,{to:v,from:U}),we(U,U,!0,!1)),(S?Promise.resolve(S):j(v,U)).catch(k=>xt(k)?xt(k,2)?k:Ee(k):Z(k,v,U)).then(k=>{if(k){if(xt(k,2))return V(de({replace:p},C(k.to),{state:typeof k.to=="object"?de({},ie,k.to.state):ie,force:ge}),D||v)}else k=$(v,U,!0,p,ie);return q(v,U,k),k})}function M(w,D){const B=y(w,D);return B?Promise.reject(B):Promise.resolve()}function I(w){const D=Ve.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(w):w()}function j(w,D){let B;const[U,ie,ge]=wv(w,D);B=Ti(U.reverse(),"beforeRouteLeave",w,D);for(const g of U)g.leaveGuards.forEach(v=>{B.push(Gt(v,w,D))});const p=M.bind(null,w,D);return B.push(p),Be(B).then(()=>{B=[];for(const g of i.list())B.push(Gt(g,w,D));return B.push(p),Be(B)}).then(()=>{B=Ti(ie,"beforeRouteUpdate",w,D);for(const g of ie)g.updateGuards.forEach(v=>{B.push(Gt(v,w,D))});return B.push(p),Be(B)}).then(()=>{B=[];for(const g of ge)if(g.beforeEnter)if(ft(g.beforeEnter))for(const v of g.beforeEnter)B.push(Gt(v,w,D));else B.push(Gt(g.beforeEnter,w,D));return B.push(p),Be(B)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),B=Ti(ge,"beforeRouteEnter",w,D,I),B.push(p),Be(B))).then(()=>{B=[];for(const g of s.list())B.push(Gt(g,w,D));return B.push(p),Be(B)}).catch(g=>xt(g,8)?g:Promise.reject(g))}function q(w,D,B){c.list().forEach(U=>I(()=>U(w,D,B)))}function $(w,D,B,U,ie){const ge=y(w,D);if(ge)return ge;const p=D===Ht,g=$r?history.state:{};B&&(U||p?n.replace(w.fullPath,de({scroll:p&&g&&g.scroll},ie)):n.push(w.fullPath,ie)),a.value=w,we(w,D,B,p),Ee()}let X;function ce(){X||(X=n.listen((w,D,B)=>{if(!dr.listening)return;const U=x(w),ie=H(U);if(ie){V(de(ie,{replace:!0}),U).catch(bo);return}l=U;const ge=a.value;$r&&zb(pc(ge.fullPath,B.delta),Zn()),j(U,ge).catch(p=>xt(p,12)?p:xt(p,2)?(V(p.to,U).then(g=>{xt(g,20)&&!B.delta&&B.type===No.pop&&n.go(-1,!1)}).catch(bo),Promise.reject()):(B.delta&&n.go(-B.delta,!1),Z(p,U,ge))).then(p=>{p=p||$(U,ge,!1),p&&(B.delta&&!xt(p,8)?n.go(-B.delta,!1):B.type===No.pop&&xt(p,20)&&n.go(-1,!1)),q(U,ge,p)}).catch(bo)}))}let ke=ro(),te=ro(),z;function Z(w,D,B){Ee(w);const U=te.list();return U.length?U.forEach(ie=>ie(w,D,B)):console.error(w),Promise.reject(w)}function Ie(){return z&&a.value!==Ht?Promise.resolve():new Promise((w,D)=>{ke.add([w,D])})}function Ee(w){return z||(z=!w,ce(),ke.list().forEach(([D,B])=>w?B(w):D()),ke.reset()),w}function we(w,D,B,U){const{scrollBehavior:ie}=t;if(!$r||!ie)return Promise.resolve();const ge=!B&&Kb(pc(w.fullPath,0))||(U||!B)&&history.state&&history.state.scroll||null;return Vn().then(()=>ie(w,D,ge)).then(p=>p&&Wb(p)).catch(p=>Z(p,w,D))}const ye=w=>n.go(w);let tt;const Ve=new Set,dr={currentRoute:a,listening:!0,addRoute:h,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:T,getRoutes:b,resolve:x,options:t,push:_,replace:N,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:s.add,afterEach:c.add,onError:te.add,isReady:Ie,install(w){const D=this;w.component("RouterLink",mv),w.component("RouterView",_v),w.config.globalProperties.$router=D,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>wr(a)}),$r&&!tt&&a.value===Ht&&(tt=!0,_(n.location).catch(ie=>{}));const B={};for(const ie in Ht)Object.defineProperty(B,ie,{get:()=>a.value[ie],enumerable:!0});w.provide(ei,D),w.provide(Eu,Il(B)),w.provide(is,a);const U=w.unmount;Ve.add(w),w.unmount=function(){Ve.delete(w),Ve.size<1&&(l=Ht,X&&X(),X=null,a.value=Ht,tt=!1,z=!1),U()}}};function Be(w){return w.reduce((D,B)=>D.then(()=>I(B)),Promise.resolve())}return dr}function wv(t,e){const r=[],o=[],n=[],i=Math.max(e.matched.length,t.matched.length);for(let s=0;s<i;s++){const c=e.matched[s];c&&(t.matched.find(l=>Yr(l,c))?o.push(c):r.push(c));const a=t.matched[s];a&&(e.matched.find(l=>Yr(l,a))||n.push(a))}return[r,o,n]}function Tu(){return lt(ei)}const Cv="/3t-pwa/favicon.svg",Sv="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e";var xv=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Iu;const ti=t=>Iu=t,Ru=Symbol();function ss(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var yo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(yo||(yo={}));function Ev(){const t=fl(!0),e=t.run(()=>kr({}));let r=[],o=[];const n=xs({install(i){ti(n),n._a=i,i.provide(Ru,n),i.config.globalProperties.$pinia=n,o.forEach(s=>r.push(s)),o=[]},use(i){return!this._a&&!xv?o.push(i):r.push(i),this},_p:r,_a:null,_e:t,_s:new Map,state:e});return n}const Pu=()=>{};function Rc(t,e,r,o=Pu){t.push(e);const n=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),o())};return!r&&hl()&&hf(n),n}function Or(t,...e){t.slice().forEach(r=>{r(...e)})}const Tv=t=>t(),Pc=Symbol(),Ii=Symbol();function as(t,e){t instanceof Map&&e instanceof Map?e.forEach((r,o)=>t.set(o,r)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const r in e){if(!e.hasOwnProperty(r))continue;const o=e[r],n=t[r];ss(n)&&ss(o)&&t.hasOwnProperty(r)&&!Ce(o)&&!_r(o)?t[r]=as(n,o):t[r]=o}return t}const Iv=Symbol();function Rv(t){return!ss(t)||!t.hasOwnProperty(Iv)}const{assign:Vt}=Object;function Pv(t){return!!(Ce(t)&&t.effect)}function Ov(t,e,r,o){const{state:n,actions:i,getters:s}=e,c=r.state.value[t];let a;function l(){c||(r.state.value[t]=n?n():{});const d=Mf(r.state.value[t]);return Vt(d,i,Object.keys(s||{}).reduce((u,f)=>(u[f]=xs(Je(()=>{ti(r);const h=r._s.get(t);return s[f].call(h,h)})),u),{}))}return a=Ou(t,l,e,r,o,!0),a}function Ou(t,e,r={},o,n,i){let s;const c=Vt({actions:{}},r),a={deep:!0};let l,d,u=[],f=[],h;const m=o.state.value[t];!i&&!m&&(o.state.value[t]={}),kr({});let b;function T(M){let I;l=d=!1,typeof M=="function"?(M(o.state.value[t]),I={type:yo.patchFunction,storeId:t,events:h}):(as(o.state.value[t],M),I={type:yo.patchObject,payload:M,storeId:t,events:h});const j=b=Symbol();Vn().then(()=>{b===j&&(l=!0)}),d=!0,Or(u,I,o.state.value[t])}const x=i?function(){const{state:I}=r,j=I?I():{};this.$patch(q=>{Vt(q,j)})}:Pu;function C(){s.stop(),u=[],f=[],o._s.delete(t)}const y=(M,I="")=>{if(Pc in M)return M[Ii]=I,M;const j=function(){ti(o);const q=Array.from(arguments),$=[],X=[];function ce(z){$.push(z)}function ke(z){X.push(z)}Or(f,{args:q,name:j[Ii],store:N,after:ce,onError:ke});let te;try{te=M.apply(this&&this.$id===t?this:N,q)}catch(z){throw Or(X,z),z}return te instanceof Promise?te.then(z=>(Or($,z),z)).catch(z=>(Or(X,z),Promise.reject(z))):(Or($,te),te)};return j[Pc]=!0,j[Ii]=I,j},_={_p:o,$id:t,$onAction:Rc.bind(null,f),$patch:T,$reset:x,$subscribe(M,I={}){const j=Rc(u,M,I.detached,()=>q()),q=s.run(()=>vt(()=>o.state.value[t],$=>{(I.flush==="sync"?d:l)&&M({storeId:t,type:yo.direct,events:h},$)},Vt({},a,I)));return j},$dispose:C},N=Xr(_);o._s.set(t,N);const V=(o._a&&o._a.runWithContext||Tv)(()=>o._e.run(()=>(s=fl()).run(()=>e({action:y}))));for(const M in V){const I=V[M];if(Ce(I)&&!Pv(I)||_r(I))i||(m&&Rv(I)&&(Ce(I)?I.value=m[M]:as(I,m[M])),o.state.value[t][M]=I);else if(typeof I=="function"){const j=y(I,M);V[M]=j,c.actions[M]=I}}return Vt(N,V),Vt(ne(N),V),Object.defineProperty(N,"$state",{get:()=>o.state.value[t],set:M=>{T(I=>{Vt(I,M)})}}),o._p.forEach(M=>{Vt(N,s.run(()=>M({store:N,app:o._a,pinia:o,options:c})))}),m&&i&&r.hydrate&&r.hydrate(N.$state,m),l=!0,d=!0,N}function Av(t,e,r){let o,n;const i=typeof e=="function";o=t,n=i?r:e;function s(c,a){const l=wh();return c=c||(l?lt(Ru,null):null),c&&ti(c),c=Iu,c._s.has(o)||(i?Ou(o,e,n,c):Ov(o,n,c)),c._s.get(o)}return s.$id=o,s}const An=Av("authStore",{state:()=>({isLogin:JSON.parse(localStorage.getItem("isLogin"))||!1,currentUser:JSON.parse(localStorage.getItem("currentUser"))||null}),getters:{isAuthenticated:t=>!!t.isLogin,getCurrentUser:t=>t.currentUser},actions:{login(t){try{this.isLogin=!0,this.currentUser=t,localStorage.setItem("isLogin",JSON.stringify(!0)),localStorage.setItem("currentUser",JSON.stringify(t))}catch(e){console.error("Error during login:",e)}},logout(){try{this.isLogin=!1,this.currentUser=null,localStorage.setItem("isLogin",JSON.stringify(!1)),localStorage.setItem("currentUser",null)}catch(t){console.error("Error during logout:",t)}},loadAuthState(){this.isLogin=JSON.parse(localStorage.getItem("isLogin"))||!1,this.currentUser=JSON.parse(localStorage.getItem("currentUser"))||null}}});var Bv=Object.defineProperty,Oc=Object.getOwnPropertySymbols,$v=Object.prototype.hasOwnProperty,Nv=Object.prototype.propertyIsEnumerable,Ac=(t,e,r)=>e in t?Bv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Lv=(t,e)=>{for(var r in e||(e={}))$v.call(e,r)&&Ac(t,r,e[r]);if(Oc)for(var r of Oc(e))Nv.call(e,r)&&Ac(t,r,e[r]);return t};function Rr(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function qs(t){return!!(t&&t.constructor&&t.call&&t.apply)}function me(t){return!Rr(t)}function Ct(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function et(t,...e){return qs(t)?t(...e):t}function He(t,e=!0){return typeof t=="string"&&(e||t!=="")}function it(t){return He(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Ys(t,e="",r={}){const o=it(e).split("."),n=o.shift();return n?Ct(t)?Ys(et(t[Object.keys(t).find(i=>it(i)===n)||""],r),o.join("."),r):void 0:et(t,r)}function ri(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function Au(t){return me(t)&&!isNaN(t)}function Bt(t,e){if(e){const r=e.test(t);return e.lastIndex=0,r}return!1}function Dv(...t){const e=(r={},o={})=>{const n=Lv({},r);return Object.keys(o).forEach(i=>{Ct(o[i])&&i in r&&Ct(r[i])?n[i]=e(r[i],o[i]):n[i]=o[i]}),n};return t.reduce((r,o,n)=>n===0?o:e(r,o),{})}function _o(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Mv(t){return He(t,!1)?t[0].toUpperCase()+t.slice(1):t}function Bu(t){return He(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,r)=>r===0?e:"-"+e.toLowerCase()).toLowerCase():t}function Bc(t){return He(t)?t.replace(/[A-Z]/g,(e,r)=>r===0?e:"."+e.toLowerCase()).toLowerCase():t}function $u(){const t=new Map;return{on(e,r){let o=t.get(e);return o?o.push(r):o=[r],t.set(e,o),this},off(e,r){let o=t.get(e);return o&&o.splice(o.indexOf(r)>>>0,1),this},emit(e,r){let o=t.get(e);o&&o.slice().map(n=>{n(r)})},clear(){t.clear()}}}var jv=Object.defineProperty,Uv=Object.defineProperties,Fv=Object.getOwnPropertyDescriptors,Bn=Object.getOwnPropertySymbols,Nu=Object.prototype.hasOwnProperty,Lu=Object.prototype.propertyIsEnumerable,$c=(t,e,r)=>e in t?jv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,st=(t,e)=>{for(var r in e||(e={}))Nu.call(e,r)&&$c(t,r,e[r]);if(Bn)for(var r of Bn(e))Lu.call(e,r)&&$c(t,r,e[r]);return t},Ri=(t,e)=>Uv(t,Fv(e)),Et=(t,e)=>{var r={};for(var o in t)Nu.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&Bn)for(var o of Bn(t))e.indexOf(o)<0&&Lu.call(t,o)&&(r[o]=t[o]);return r},Hv=$u(),nt=Hv;function Nc(t,e){ri(t)?t.push(...e||[]):Ct(t)&&Object.assign(t,e)}function Vv(t){return Ct(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Lc(t,e=""){return["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"].some(o=>e.endsWith(o))?t:`${t}`.trim().split(" ").map(i=>Au(i)?`${i}px`:i).join(" ")}function Wv(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function cs(t="",e=""){return Wv(`${He(t,!1)&&He(e,!1)?`${t}-`:t}${e}`)}function Du(t="",e=""){return`--${cs(t,e)}`}function Mu(t,e="",r="",o=[],n){if(He(t)){const i=/{([^}]*)}/g,s=t.trim();if(Bt(s,i)){const c=s.replaceAll(i,d=>{const f=d.replace(/{|}/g,"").split(".").filter(h=>!o.some(m=>Bt(h,m)));return`var(${Du(r,Bu(f.join("-")))}${me(n)?`, ${n}`:""})`}),a=/(\d+\s+[\+\-\*\/]\s+\d+)/g,l=/var\([^)]+\)/g;return Bt(c.replace(l,"0"),a)?`calc(${c})`:c}return Lc(s,e)}else if(Au(t))return Lc(t,e)}function zv(t,e,r){He(e,!1)&&t.push(`${e}:${r};`)}function Nr(t,e){return t?`${t}{${e}}`:""}var ko=(...t)=>Kv(ue.getTheme(),...t),Kv=(t={},e,r,o)=>{if(e){const{variable:n,options:i}=ue.defaults||{},{prefix:s,transform:c}=(t==null?void 0:t.options)||i||{},l=Bt(e,/{([^}]*)}/g)?e:`{${e}}`;return o==="value"||Rr(o)&&c==="strict"?ue.getTokenValue(e):Mu(l,void 0,s,[n.excludedKeyRegex],r)}return""};function Gv(t,e={}){const r=ue.defaults.variable,{prefix:o=r.prefix,selector:n=r.selector,excludedKeyRegex:i=r.excludedKeyRegex}=e,s=(l,d="")=>Object.entries(l).reduce((u,[f,h])=>{const m=Bt(f,i)?cs(d):cs(d,Bu(f)),b=Vv(h);if(Ct(b)){const{variables:T,tokens:x}=s(b,m);Nc(u.tokens,x),Nc(u.variables,T)}else u.tokens.push((o?m.replace(`${o}-`,""):m).replaceAll("-",".")),zv(u.variables,Du(m),Mu(b,m,o,[i]));return u},{variables:[],tokens:[]}),{variables:c,tokens:a}=s(t,o);return{value:c,tokens:a,declarations:c.join(""),css:Nr(n,c.join(""))}}var ot={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){const e=Object.keys(this.rules).filter(r=>r!=="custom").map(r=>this.rules[r]);return[t].flat().map(r=>{var o;return(o=e.map(n=>n.resolve(r)).find(n=>n.matched))!=null?o:this.rules.custom.resolve(r)})}},_toVariables(t,e){return Gv(t,{prefix:e==null?void 0:e.prefix})},getCommon({name:t="",theme:e={},params:r,set:o,defaults:n}){var i,s,c,a,l,d,u;const{preset:f,options:h}=e;let m,b,T,x,C,y,_;if(me(f)&&h.transform!=="strict"){const{primitive:N,semantic:H,extend:V}=f,M=H||{},{colorScheme:I}=M,j=Et(M,["colorScheme"]),q=V||{},{colorScheme:$}=q,X=Et(q,["colorScheme"]),ce=I||{},{dark:ke}=ce,te=Et(ce,["dark"]),z=$||{},{dark:Z}=z,Ie=Et(z,["dark"]),Ee=me(N)?this._toVariables({primitive:N},h):{},we=me(j)?this._toVariables({semantic:j},h):{},ye=me(te)?this._toVariables({light:te},h):{},tt=me(ke)?this._toVariables({dark:ke},h):{},Ve=me(X)?this._toVariables({semantic:X},h):{},dr=me(Ie)?this._toVariables({light:Ie},h):{},Be=me(Z)?this._toVariables({dark:Z},h):{},[w,D]=[(i=Ee.declarations)!=null?i:"",Ee.tokens],[B,U]=[(s=we.declarations)!=null?s:"",we.tokens||[]],[ie,ge]=[(c=ye.declarations)!=null?c:"",ye.tokens||[]],[p,g]=[(a=tt.declarations)!=null?a:"",tt.tokens||[]],[v,S]=[(l=Ve.declarations)!=null?l:"",Ve.tokens||[]],[k,E]=[(d=dr.declarations)!=null?d:"",dr.tokens||[]],[A,O]=[(u=Be.declarations)!=null?u:"",Be.tokens||[]];m=this.transformCSS(t,w,"light","variable",h,o,n),b=D;const P=this.transformCSS(t,`${B}${ie}`,"light","variable",h,o,n),R=this.transformCSS(t,`${p}`,"dark","variable",h,o,n);T=`${P}${R}`,x=[...new Set([...U,...ge,...g])];const W=this.transformCSS(t,`${v}${k}color-scheme:light`,"light","variable",h,o,n),L=this.transformCSS(t,`${A}color-scheme:dark`,"dark","variable",h,o,n);C=`${W}${L}`,y=[...new Set([...S,...E,...O])],_=et(f.css,{dt:ko})}return{primitive:{css:m,tokens:b},semantic:{css:T,tokens:x},global:{css:C,tokens:y},style:_}},getPreset({name:t="",preset:e={},options:r,params:o,set:n,defaults:i,selector:s}){var c,a,l;let d,u,f;if(me(e)&&r.transform!=="strict"){const h=t.replace("-directive",""),m=e,{colorScheme:b,extend:T,css:x}=m,C=Et(m,["colorScheme","extend","css"]),y=T||{},{colorScheme:_}=y,N=Et(y,["colorScheme"]),H=b||{},{dark:V}=H,M=Et(H,["dark"]),I=_||{},{dark:j}=I,q=Et(I,["dark"]),$=me(C)?this._toVariables({[h]:st(st({},C),N)},r):{},X=me(M)?this._toVariables({[h]:st(st({},M),q)},r):{},ce=me(V)?this._toVariables({[h]:st(st({},V),j)},r):{},[ke,te]=[(c=$.declarations)!=null?c:"",$.tokens||[]],[z,Z]=[(a=X.declarations)!=null?a:"",X.tokens||[]],[Ie,Ee]=[(l=ce.declarations)!=null?l:"",ce.tokens||[]],we=this.transformCSS(h,`${ke}${z}`,"light","variable",r,n,i,s),ye=this.transformCSS(h,Ie,"dark","variable",r,n,i,s);d=`${we}${ye}`,u=[...new Set([...te,...Z,...Ee])],f=et(x,{dt:ko})}return{css:d,tokens:u,style:f}},getPresetC({name:t="",theme:e={},params:r,set:o,defaults:n}){var i;const{preset:s,options:c}=e,a=(i=s==null?void 0:s.components)==null?void 0:i[t];return this.getPreset({name:t,preset:a,options:c,params:r,set:o,defaults:n})},getPresetD({name:t="",theme:e={},params:r,set:o,defaults:n}){var i;const s=t.replace("-directive",""),{preset:c,options:a}=e,l=(i=c==null?void 0:c.directives)==null?void 0:i[s];return this.getPreset({name:s,preset:l,options:a,params:r,set:o,defaults:n})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,e){var r;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?e.options.darkModeSelector:(r=t.darkModeSelector)!=null?r:e.options.darkModeSelector):[]},getLayerOrder(t,e={},r,o){const{cssLayer:n}=e;return n?`@layer ${et(n.order||"primeui",r)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:r,props:o={},set:n,defaults:i}){const s=this.getCommon({name:t,theme:e,params:r,set:n,defaults:i}),c=Object.entries(o).reduce((a,[l,d])=>a.push(`${l}="${d}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[l,d])=>{if(d!=null&&d.css){const u=_o(d==null?void 0:d.css),f=`${l}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${f}" ${c}>${u}</style>`)}return a},[]).join("")},getStyleSheet({name:t="",theme:e={},params:r,props:o={},set:n,defaults:i}){var s;const c={name:t,theme:e,params:r,set:n,defaults:i},a=(s=t.includes("-directive")?this.getPresetD(c):this.getPresetC(c))==null?void 0:s.css,l=Object.entries(o).reduce((d,[u,f])=>d.push(`${u}="${f}"`)&&d,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${t}-variables" ${l}>${_o(a)}</style>`:""},createTokens(t={},e,r="",o="",n={}){return Object.entries(t).forEach(([i,s])=>{const c=Bt(i,e.variable.excludedKeyRegex)?r:r?`${r}.${Bc(i)}`:Bc(i),a=o?`${o}.${i}`:i;Ct(s)?this.createTokens(s,e,c,a,n):(n[c]||(n[c]={paths:[],computed(l,d={}){var u,f;return this.paths.length===1?(u=this.paths[0])==null?void 0:u.computed(this.paths[0].scheme,d.binding):l&&l!=="none"?(f=this.paths.find(h=>h.scheme===l))==null?void 0:f.computed(l,d.binding):this.paths.map(h=>h.computed(h.scheme,d[h.scheme]))}}),n[c].paths.push({path:a,value:s,scheme:a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":"none",computed(l,d={}){const u=/{([^}]*)}/g;let f=s;if(d.name=this.path,d.binding||(d.binding={}),Bt(s,u)){const m=s.trim().replaceAll(u,x=>{var C;const y=x.replace(/{|}/g,""),_=(C=n[y])==null?void 0:C.computed(l,d);return ri(_)&&_.length===2?`light-dark(${_[0].value},${_[1].value})`:_==null?void 0:_.value}),b=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,T=/var\([^)]+\)/g;f=Bt(m.replace(T,"0"),b)?`calc(${m})`:m}return Rr(d.binding)&&delete d.binding,{colorScheme:l,path:this.path,paths:d,value:f.includes("undefined")?void 0:f}}}))}),n},getTokenValue(t,e,r){var o;const i=(a=>a.split(".").filter(d=>!Bt(d.toLowerCase(),r.variable.excludedKeyRegex)).join("."))(e),s=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,c=[(o=t[i])==null?void 0:o.computed(s)].flat().filter(a=>a);return c.length===1?c[0].value:c.reduce((a={},l)=>{const d=l,{colorScheme:u}=d,f=Et(d,["colorScheme"]);return a[u]=f,a},void 0)},getSelectorRule(t,e,r,o){return r==="class"||r==="attr"?Nr(me(e)?`${t}${e},${t} ${e}`:t,o):Nr(t,me(e)?Nr(e,o):o)},transformCSS(t,e,r,o,n={},i,s,c){if(me(e)){const{cssLayer:a}=n;if(o!=="style"){const l=this.getColorSchemeOption(n,s);e=r==="dark"?l.reduce((d,{type:u,selector:f})=>(me(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",e):this.getSelectorRule(f,c,u,e)),d),""):Nr(c??":root",e)}if(a){const l={name:"primeui",order:"primeui"};Ct(a)&&(l.name=et(a.name,{name:t,type:o})),me(l.name)&&(e=Nr(`@layer ${l.name}`,e),i==null||i.layerNames(l.name))}return e}return""}},ue={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){const{theme:e}=t;e&&(this._theme=Ri(st({},e),{options:st(st({},this.defaults.options),e.options)}),this._tokens=ot.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),nt.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Ri(st({},this.theme),{preset:t}),this._tokens=ot.createTokens(t,this.defaults),this.clearLoadedStyleNames(),nt.emit("preset:change",t),nt.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Ri(st({},this.theme),{options:t}),this.clearLoadedStyleNames(),nt.emit("options:change",t),nt.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return ot.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return ot.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){const r={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ot.getPresetC(r)},getDirective(t="",e){const r={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ot.getPresetD(r)},getCustomPreset(t="",e,r,o){const n={name:t,preset:e,options:this.options,selector:r,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ot.getPreset(n)},getLayerOrderCSS(t=""){return ot.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,r="style",o){return ot.transformCSS(t,e,o,r,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,r={}){return ot.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,r={}){return ot.getStyleSheet({name:t,theme:this.theme,params:e,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),nt.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&nt.emit("theme:load"))}};function qv(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}function Yv(t,e){if(t&&e){const r=o=>{qv(t,o)||(t.classList?t.classList.add(o):t.className+=" "+o)};[e].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r))}}function $n(t){for(const e of document==null?void 0:document.styleSheets)try{for(const r of e==null?void 0:e.cssRules)for(const o of r==null?void 0:r.style)if(t.test(o))return{name:o,value:r.style.getPropertyValue(o).trim()}}catch{}return null}function Pi(t,e){if(t&&e){const r=o=>{t.classList?t.classList.remove(o):t.className=t.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r))}}function ju(t){let e={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),e}function Uu(){let t=window,e=document,r=e.documentElement,o=e.getElementsByTagName("body")[0],n=t.innerWidth||r.clientWidth||o.clientWidth,i=t.innerHeight||r.clientHeight||o.clientHeight;return{width:n,height:i}}function Jv(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function Xv(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Cw(t,e,r=!0){var o,n,i,s;if(t){const c=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:ju(t),a=c.height,l=c.width,d=e.offsetHeight,u=e.offsetWidth,f=e.getBoundingClientRect(),h=Xv(),m=Jv(),b=Uu();let T,x,C="top";f.top+d+a>b.height?(T=f.top+h-a,C="bottom",T<0&&(T=h)):T=d+f.top+h,f.left+l>b.width?x=Math.max(0,f.left+m+u-l):x=f.left+m,t.style.top=T+"px",t.style.left=x+"px",t.style.transformOrigin=C,r&&(t.style.marginTop=C==="bottom"?`calc(${(n=(o=$n(/-anchor-gutter$/))==null?void 0:o.value)!=null?n:"2px"} * -1)`:(s=(i=$n(/-anchor-gutter$/))==null?void 0:i.value)!=null?s:"")}}function Sw(t,e){t&&(typeof e=="string"?t.style.cssText=e:Object.entries(e||{}).forEach(([r,o])=>t.style[r]=o))}function Qv(t,e){return t instanceof HTMLElement?t.offsetWidth:0}function xw(t,e,r=!0){var o,n,i,s;if(t){const c=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:ju(t),a=e.offsetHeight,l=e.getBoundingClientRect(),d=Uu();let u,f,h="top";l.top+a+c.height>d.height?(u=-1*c.height,h="bottom",l.top+u<0&&(u=-1*l.top)):u=a,c.width>d.width?f=l.left*-1:l.left+c.width>d.width?f=(l.left+c.width-d.width)*-1:f=0,t.style.top=u+"px",t.style.left=f+"px",t.style.transformOrigin=h,r&&(t.style.marginTop=h==="bottom"?`calc(${(n=(o=$n(/-anchor-gutter$/))==null?void 0:o.value)!=null?n:"2px"} * -1)`:(s=(i=$n(/-anchor-gutter$/))==null?void 0:i.value)!=null?s:"")}}function oi(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function Nn(t,e={}){if(oi(t)){const r=(o,n)=>{var i,s;const c=(i=t==null?void 0:t.$attrs)!=null&&i[o]?[(s=t==null?void 0:t.$attrs)==null?void 0:s[o]]:[];return[n].flat().reduce((a,l)=>{if(l!=null){const d=typeof l;if(d==="string"||d==="number")a.push(l);else if(d==="object"){const u=Array.isArray(l)?r(o,l):Object.entries(l).map(([f,h])=>o==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);a=u.length?a.concat(u.filter(f=>!!f)):a}}return a},c)};Object.entries(e).forEach(([o,n])=>{if(n!=null){const i=o.match(/^on(.+)/);i?t.addEventListener(i[1].toLowerCase(),n):o==="p-bind"?Nn(t,n):(n=o==="class"?[...new Set(r("class",n))].join(" ").trim():o==="style"?r("style",n).join(";").trim():n,(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=n),t.setAttribute(o,n))}})}}function Zv(t,e={},...r){{const o=document.createElement(t);return Nn(o,e),o.append(...r),o}}function Fu(t,e){return oi(t)?t.matches(e)?t:t.querySelector(e):null}function ey(t,e){if(oi(t)){const r=t.getAttribute(e);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}function Dc(t){if(t){let e=t.offsetHeight,r=getComputedStyle(t);return e-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),e}return 0}function Hu(t){if(t){let e=t.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function ty(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function ry(t,e){return t?t.offsetHeight:0}function Vu(t,e=[]){const r=Hu(t);return r===null?e:Vu(r,e.concat([r]))}function Ew(t){let e=[];if(t){let r=Vu(t);const o=/(auto|scroll)/,n=i=>{try{let s=window.getComputedStyle(i,null);return o.test(s.getPropertyValue("overflow"))||o.test(s.getPropertyValue("overflowX"))||o.test(s.getPropertyValue("overflowY"))}catch{return!1}};for(let i of r){let s=i.nodeType===1&&i.dataset.scrollselectors;if(s){let c=s.split(",");for(let a of c){let l=Fu(i,a);l&&n(l)&&e.push(l)}}i.nodeType!==9&&n(i)&&e.push(i)}}return e}function oy(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Hu(t))}function Mc(t){if(t){let e=t.offsetWidth,r=getComputedStyle(t);return e-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),e}return 0}function Wu(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Tw(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function ny(t,e="",r){oi(t)&&r!==null&&r!==void 0&&t.setAttribute(e,r)}var an={};function zu(t="pui_id_"){return an.hasOwnProperty(t)||(an[t]=0),an[t]++,`${t}${an[t]}`}var Qt={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function Lo(t){"@babel/helpers - typeof";return Lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lo(t)}function jc(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function Uc(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?jc(Object(r),!0).forEach(function(o){iy(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):jc(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function iy(t,e,r){return(e=sy(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function sy(t){var e=ay(t,"string");return Lo(e)=="symbol"?e:e+""}function ay(t,e){if(Lo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(Lo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function cy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;$s()?Kn(t):e?t():Vn(t)}var ly=0;function dy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=kr(!1),o=kr(t),n=kr(null),i=Wu()?window.document:void 0,s=e.document,c=s===void 0?i:s,a=e.immediate,l=a===void 0?!0:a,d=e.manual,u=d===void 0?!1:d,f=e.name,h=f===void 0?"style_".concat(++ly):f,m=e.id,b=m===void 0?void 0:m,T=e.media,x=T===void 0?void 0:T,C=e.nonce,y=C===void 0?void 0:C,_=e.first,N=_===void 0?!1:_,H=e.onMounted,V=H===void 0?void 0:H,M=e.onUpdated,I=M===void 0?void 0:M,j=e.onLoad,q=j===void 0?void 0:j,$=e.props,X=$===void 0?{}:$,ce=function(){},ke=function(Z){var Ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(c){var Ee=Uc(Uc({},X),Ie),we=Ee.name||h,ye=Ee.id||b,tt=Ee.nonce||y;n.value=c.querySelector('style[data-primevue-style-id="'.concat(we,'"]'))||c.getElementById(ye)||c.createElement("style"),n.value.isConnected||(o.value=Z||t,Nn(n.value,{type:"text/css",id:ye,media:x,nonce:tt}),N?c.head.prepend(n.value):c.head.appendChild(n.value),ny(n.value,"data-primevue-style-id",we),Nn(n.value,Ee),n.value.onload=function(Ve){return q==null?void 0:q(Ve,{name:we})},V==null||V(we)),!r.value&&(ce=vt(o,function(Ve){n.value.textContent=Ve,I==null||I(we)},{immediate:!0}),r.value=!0)}},te=function(){!c||!r.value||(ce(),oy(n.value)&&c.head.removeChild(n.value),r.value=!1)};return l&&!u&&cy(ke),{id:b,name:h,el:n,css:o,unload:te,load:ke,isLoaded:ws(r)}}function Do(t){"@babel/helpers - typeof";return Do=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Do(t)}function Fc(t,e){return py(t)||hy(t,e)||fy(t,e)||uy()}function uy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fy(t,e){if(t){if(typeof t=="string")return Hc(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Hc(t,e):void 0}}function Hc(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function hy(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,n,i,s,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,e!==0)for(;!(a=(o=i.call(r)).done)&&(c.push(o.value),c.length!==e);a=!0);}catch(d){l=!0,n=d}finally{try{if(!a&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw n}}return c}}function py(t){if(Array.isArray(t))return t}function Vc(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function Oi(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Vc(Object(r),!0).forEach(function(o){gy(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Vc(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function gy(t,e,r){return(e=my(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function my(t){var e=by(t,"string");return Do(e)=="symbol"?e:e+""}function by(t,e){if(Do(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(Do(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var vy=function(e){var r=e.dt;return`
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(r("disabled.opacity"),`;
}

.pi {
    font-size: `).concat(r("icon.size"),`;
}

.p-icon {
    width: `).concat(r("icon.size"),`;
    height: `).concat(r("icon.size"),`;
}

.p-overlay-mask {
    background: `).concat(r("mask.background"),`;
    color: `).concat(r("mask.color"),`;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(r("mask.transition.duration"),` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(r("mask.transition.duration"),` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(r("mask.background"),`;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(r("mask.background"),`;
    }
    to {
        background: transparent;
    }
}
`)},yy=function(e){var r=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(r("scrollbar.width"),`;
}
`)},_y={},ky={},be={name:"base",css:yy,theme:vy,classes:_y,inlineStyles:ky,load:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},n=o(et(e,{dt:ko}));return me(n)?dy(_o(n),Oi({name:this.name},r)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadTheme:function(){var e=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.theme,r,function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return ue.transformCSS(r.name||e.name,"".concat(n).concat(o))})},getCommonTheme:function(e){return ue.getCommon(this.name,e)},getComponentTheme:function(e){return ue.getComponent(this.name,e)},getDirectiveTheme:function(e){return ue.getDirective(this.name,e)},getPresetTheme:function(e,r,o){return ue.getCustomPreset(this.name,e,r,o)},getLayerOrderThemeCSS:function(){return ue.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var o=et(this.css,{dt:ko})||"",n=_o("".concat(o).concat(e)),i=Object.entries(r).reduce(function(s,c){var a=Fc(c,2),l=a[0],d=a[1];return s.push("".concat(l,'="').concat(d,'"'))&&s},[]).join(" ");return me(n)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(n,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ue.getCommonStyleSheet(this.name,e,r)},getThemeStyleSheet:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=[ue.getStyleSheet(this.name,e,r)];if(this.theme){var n=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=et(this.theme,{dt:ko}),s=_o(ue.transformCSS(n,i)),c=Object.entries(r).reduce(function(a,l){var d=Fc(l,2),u=d[0],f=d[1];return a.push("".concat(u,'="').concat(f,'"'))&&a},[]).join(" ");me(s)&&o.push('<style type="text/css" data-primevue-style-id="'.concat(n,'" ').concat(c,">").concat(s,"</style>"))}return o.join("")},extend:function(e){return Oi(Oi({},this),{},{css:void 0,theme:void 0},e)}},Wc=be.extend({name:"common"});function Mo(t){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mo(t)}function wy(t){return qu(t)||Cy(t)||Gu(t)||Ku()}function Cy(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cn(t,e){return qu(t)||Sy(t,e)||Gu(t,e)||Ku()}function Ku(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gu(t,e){if(t){if(typeof t=="string")return zc(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?zc(t,e):void 0}}function zc(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function Sy(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,n,i,s,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;a=!1}else for(;!(a=(o=i.call(r)).done)&&(c.push(o.value),c.length!==e);a=!0);}catch(d){l=!0,n=d}finally{try{if(!a&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw n}}return c}}function qu(t){if(Array.isArray(t))return t}function Kc(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function ee(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Kc(Object(r),!0).forEach(function(o){co(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Kc(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function co(t,e,r){return(e=xy(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function xy(t){var e=Ey(t,"string");return Mo(e)=="symbol"?e:e+""}function Ey(t,e){if(Mo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(Mo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Js={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var r=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return r._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var e,r,o,n,i,s,c,a,l,d,u,f=(e=this.pt)===null||e===void 0?void 0:e._usept,h=f?(r=this.pt)===null||r===void 0||(r=r.originalValue)===null||r===void 0?void 0:r[this.$.type.name]:void 0,m=f?(o=this.pt)===null||o===void 0||(o=o.value)===null||o===void 0?void 0:o[this.$.type.name]:this.pt;(n=m||h)===null||n===void 0||(n=n.hooks)===null||n===void 0||(i=n.onBeforeCreate)===null||i===void 0||i.call(n);var b=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,T=b?(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0||(c=c.pt)===null||c===void 0?void 0:c.originalValue:void 0,x=b?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.value:(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0?void 0:l.pt;(d=x||T)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(u=d.onBeforeCreate)===null||u===void 0||u.call(d),this.$attrSelector=zu("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=Fu(this.$el,'[data-pc-name="'.concat(it(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=ee({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var r=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),o=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));r==null||r(),o==null||o()}},_mergeProps:function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return qs(e)?e.apply(void 0,o):Ye.apply(void 0,o)},_loadStyles:function(){var e=this,r=function(){Qt.isStyleNameLoaded("base")||(be.loadCSS(e.$styleOptions),e._loadGlobalStyles(),Qt.setLoadedStyleName("base")),e._loadThemeStyles()};r(),this._themeChangeListener(r)},_loadCoreStyles:function(){var e,r;!Qt.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(r=this.$style)!==null&&r!==void 0&&r.name&&(Wc.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Qt.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);me(e)&&be.load(e,ee({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,r;if(!(this.isUnstyled||this.$theme==="none")){if(!ue.isStyleNameLoaded("common")){var o,n,i=((o=this.$style)===null||o===void 0||(n=o.getCommonTheme)===null||n===void 0?void 0:n.call(o))||{},s=i.primitive,c=i.semantic,a=i.global,l=i.style;be.load(s==null?void 0:s.css,ee({name:"primitive-variables"},this.$styleOptions)),be.load(c==null?void 0:c.css,ee({name:"semantic-variables"},this.$styleOptions)),be.load(a==null?void 0:a.css,ee({name:"global-variables"},this.$styleOptions)),be.loadTheme(ee({name:"global-style"},this.$styleOptions),l),ue.setLoadedStyleName("common")}if(!ue.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(r=this.$style)!==null&&r!==void 0&&r.name){var d,u,f,h,m=((d=this.$style)===null||d===void 0||(u=d.getComponentTheme)===null||u===void 0?void 0:u.call(d))||{},b=m.css,T=m.style;(f=this.$style)===null||f===void 0||f.load(b,ee({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadTheme(ee({name:"".concat(this.$style.name,"-style")},this.$styleOptions),T),ue.setLoadedStyleName(this.$style.name)}if(!ue.isStyleNameLoaded("layer-order")){var x,C,y=(x=this.$style)===null||x===void 0||(C=x.getLayerOrderThemeCSS)===null||C===void 0?void 0:C.call(x);be.load(y,ee({name:"layer-order",first:!0},this.$styleOptions)),ue.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var r,o,n,i=((r=this.$style)===null||r===void 0||(o=r.getPresetTheme)===null||o===void 0?void 0:o.call(r,e,"[".concat(this.$attrSelector,"]")))||{},s=i.css,c=(n=this.$style)===null||n===void 0?void 0:n.load(s,ee({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=c.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Qt.clearLoadedStyleNames(),nt.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var r;return this[e]||((r=this._getHostInstance(this))===null||r===void 0?void 0:r[e])},_getOptionValue:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Ys(e,r,o)},_getPTValue:function(){var e,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(o)&&!!n[o.split(".")[0]],c=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},a=c.mergeSections,l=a===void 0?!0:a,d=c.mergeProps,u=d===void 0?!1:d,f=i?s?this._useGlobalPT(this._getPTClassValue,o,n):this._useDefaultPT(this._getPTClassValue,o,n):void 0,h=s?void 0:this._getPTSelf(r,this._getPTClassValue,o,ee(ee({},n),{},{global:f||{}})),m=this._getPTDatasets(o);return l||!l&&h?u?this._mergeProps(u,f,h,m):ee(ee(ee({},f),h),m):ee(ee({},h),m)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return Ye(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(o)),this._usePT.apply(this,[this.$_attrsPT].concat(o)))},_getPTDatasets:function(){var e,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n="data-pc-",i=o==="root"&&me((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return o!=="transition"&&ee(ee({},o==="root"&&ee(ee(co({},"".concat(n,"name"),it(i?(r=this.pt)===null||r===void 0?void 0:r["data-pc-section"]:this.$.type.name)),i&&co({},"".concat(n,"extend"),it(this.$.type.name))),Wu()&&co({},"".concat(this.$attrSelector),""))),{},co({},"".concat(n,"section"),it(o)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return He(e)||ri(e)?{class:e}:e},_getPT:function(e){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=function(c){var a,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=n?n(c):c,u=it(o),f=it(r.$name);return(a=l?u!==f?d==null?void 0:d[u]:void 0:d==null?void 0:d[u])!==null&&a!==void 0?a:d};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},_usePT:function(e,r,o,n){var i=function(b){return r(b,o,n)};if(e!=null&&e.hasOwnProperty("_usept")){var s,c=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},a=c.mergeSections,l=a===void 0?!0:a,d=c.mergeProps,u=d===void 0?!1:d,f=i(e.originalValue),h=i(e.value);return f===void 0&&h===void 0?void 0:He(h)?h:He(f)?f:l||!l&&h?u?this._mergeProps(u,f,h):ee(ee({},f),h):h}return i(e)},_useGlobalPT:function(e,r,o){return this._usePT(this.globalPT,e,r,o)},_useDefaultPT:function(e,r,o){return this._usePT(this.defaultPT,e,r,o)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,ee(ee({},this.$params),r))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ye(this.$_attrsWithoutPT,this.ptm(e,r))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,r,ee({instance:this},o),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,ee(ee({},this.$params),r))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(r){var n=this._getOptionValue(this.$style.inlineStyles,e,ee(ee({},this.$params),o)),i=this._getOptionValue(Wc.inlineStyles,e,ee(ee({},this.$params),o));return[i,n]}}},computed:{globalPT:function(){var e,r=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(o){return et(o,{instance:r})})},defaultPT:function(){var e,r=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(o){return r._getOptionValue(o,r.$name,ee({},r.$params))||et(o,ee({},r.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return ee(ee({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var r=cn(e,1),o=r[0];return o==null?void 0:o.startsWith("pt:")}).reduce(function(e,r){var o=cn(r,2),n=o[0],i=o[1],s=n.split(":"),c=wy(s),a=c.slice(1);return a==null||a.reduce(function(l,d,u,f){return!l[d]&&(l[d]=u===f.length-1?i:{}),l[d]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var r=cn(e,1),o=r[0];return!(o!=null&&o.startsWith("pt:"))}).reduce(function(e,r){var o=cn(r,2),n=o[0],i=o[1];return e[n]=i,e},{})}}},Ty=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Iy=be.extend({name:"baseicon",css:Ty});function jo(t){"@babel/helpers - typeof";return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jo(t)}function Gc(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function qc(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Gc(Object(r),!0).forEach(function(o){Ry(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Gc(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Ry(t,e,r){return(e=Py(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Py(t){var e=Oy(t,"string");return jo(e)=="symbol"?e:e+""}function Oy(t,e){if(jo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(jo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ay={name:"BaseIcon",extends:Js,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:Iy,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=Rr(this.label);return qc(qc({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},Yu={name:"SpinnerIcon",extends:Ay};function By(t,e,r,o,n,i){return qe(),Gr("svg",Ye({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[Zt("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}Yu.render=By;var $y=function(e){var r=e.dt;return`
.p-badge {
    display: inline-flex;
    border-radius: `.concat(r("badge.border.radius"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(r("badge.padding"),`;
    background: `).concat(r("badge.primary.background"),`;
    color: `).concat(r("badge.primary.color"),`;
    font-size: `).concat(r("badge.font.size"),`;
    font-weight: `).concat(r("badge.font.weight"),`;
    min-width: `).concat(r("badge.min.width"),`;
    height: `).concat(r("badge.height"),`;
}

.p-badge-dot {
    width: `).concat(r("badge.dot.size"),`;
    min-width: `).concat(r("badge.dot.size"),`;
    height: `).concat(r("badge.dot.size"),`;
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: `).concat(r("badge.secondary.background"),`;
    color: `).concat(r("badge.secondary.color"),`;
}

.p-badge-success {
    background: `).concat(r("badge.success.background"),`;
    color: `).concat(r("badge.success.color"),`;
}

.p-badge-info {
    background: `).concat(r("badge.info.background"),`;
    color: `).concat(r("badge.info.color"),`;
}

.p-badge-warn {
    background: `).concat(r("badge.warn.background"),`;
    color: `).concat(r("badge.warn.color"),`;
}

.p-badge-danger {
    background: `).concat(r("badge.danger.background"),`;
    color: `).concat(r("badge.danger.color"),`;
}

.p-badge-contrast {
    background: `).concat(r("badge.contrast.background"),`;
    color: `).concat(r("badge.contrast.color"),`;
}

.p-badge-sm {
    font-size: `).concat(r("badge.sm.font.size"),`;
    min-width: `).concat(r("badge.sm.min.width"),`;
    height: `).concat(r("badge.sm.height"),`;
}

.p-badge-lg {
    font-size: `).concat(r("badge.lg.font.size"),`;
    min-width: `).concat(r("badge.lg.min.width"),`;
    height: `).concat(r("badge.lg.height"),`;
}

.p-badge-xl {
    font-size: `).concat(r("badge.xl.font.size"),`;
    min-width: `).concat(r("badge.xl.min.width"),`;
    height: `).concat(r("badge.xl.height"),`;
}
`)},Ny={root:function(e){var r=e.props,o=e.instance;return["p-badge p-component",{"p-badge-circle":me(r.value)&&String(r.value).length===1,"p-badge-dot":Rr(r.value)&&!o.$slots.default,"p-badge-sm":r.size==="small","p-badge-lg":r.size==="large","p-badge-xl":r.size==="xlarge","p-badge-info":r.severity==="info","p-badge-success":r.severity==="success","p-badge-warn":r.severity==="warn","p-badge-danger":r.severity==="danger","p-badge-secondary":r.severity==="secondary","p-badge-contrast":r.severity==="contrast"}]}},Ly=be.extend({name:"badge",theme:$y,classes:Ny}),Dy={name:"BaseBadge",extends:Js,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:Ly,provide:function(){return{$pcBadge:this,$parentInstance:this}}},Ju={name:"Badge",extends:Dy,inheritAttrs:!1};function My(t,e,r,o,n,i){return qe(),Gr("span",Ye({class:t.cx("root")},t.ptmi("root")),[no(t.$slots,"default",{},function(){return[md(ms(t.value),1)]})],16)}Ju.render=My;var Dr=$u();function Uo(t){"@babel/helpers - typeof";return Uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uo(t)}function Yc(t,e){return Hy(t)||Fy(t,e)||Uy(t,e)||jy()}function jy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Uy(t,e){if(t){if(typeof t=="string")return Jc(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Jc(t,e):void 0}}function Jc(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function Fy(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,n,i,s,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,e!==0)for(;!(a=(o=i.call(r)).done)&&(c.push(o.value),c.length!==e);a=!0);}catch(d){l=!0,n=d}finally{try{if(!a&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw n}}return c}}function Hy(t){if(Array.isArray(t))return t}function Xc(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function oe(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Xc(Object(r),!0).forEach(function(o){ls(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Xc(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function ls(t,e,r){return(e=Vy(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Vy(t){var e=Wy(t,"string");return Uo(e)=="symbol"?e:e+""}function Wy(t,e){if(Uo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(Uo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Q={_getMeta:function(){return[Ct(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],et(Ct(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,r){var o,n,i;return(o=(e==null||(n=e.instance)===null||n===void 0?void 0:n.$primevue)||(r==null||(i=r.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||o===void 0?void 0:o.config},_getOptionValue:Ys,_getPTValue:function(){var e,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=function(){var C=Q._getOptionValue.apply(Q,arguments);return He(C)||ri(C)?{class:C}:C},l=((e=o.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((r=o.$primevueConfig)===null||r===void 0?void 0:r.ptOptions)||{},d=l.mergeSections,u=d===void 0?!0:d,f=l.mergeProps,h=f===void 0?!1:f,m=c?Q._useDefaultPT(o,o.defaultPT(),a,i,s):void 0,b=Q._usePT(o,Q._getPT(n,o.$name),a,i,oe(oe({},s),{},{global:m||{}})),T=Q._getPTDatasets(o,i);return u||!u&&b?h?Q._mergeProps(o,h,m,b,T):oe(oe(oe({},m),b),T):oe(oe({},b),T)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o="data-pc-";return oe(oe({},r==="root"&&ls({},"".concat(o,"name"),it(e.$name))),{},ls({},"".concat(o,"section"),it(r)))},_getPT:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,n=function(s){var c,a=o?o(s):s,l=it(r);return(c=a==null?void 0:a[l])!==null&&c!==void 0?c:a};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:n(e.originalValue),value:n(e.value)}:n(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function(T){return o(T,n,i)};if(r!=null&&r.hasOwnProperty("_usept")){var c,a=r._usept||((c=e.$primevueConfig)===null||c===void 0?void 0:c.ptOptions)||{},l=a.mergeSections,d=l===void 0?!0:l,u=a.mergeProps,f=u===void 0?!1:u,h=s(r.originalValue),m=s(r.value);return h===void 0&&m===void 0?void 0:He(m)?m:He(h)?h:d||!d&&m?f?Q._mergeProps(e,f,h,m):oe(oe({},h),m):m}return s(r)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return Q._usePT(e,r,o,n,i)},_loadStyles:function(e,r,o){var n,i=Q._getConfig(r,o),s={nonce:i==null||(n=i.csp)===null||n===void 0?void 0:n.nonce};Q._loadCoreStyles(e.$instance,s),Q._loadThemeStyles(e.$instance,s),Q._loadScopedThemeStyles(e.$instance,s),Q._themeChangeListener(function(){return Q._loadThemeStyles(e.$instance,s)})},_loadCoreStyles:function(){var e,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(!Qt.isStyleNameLoaded((e=o.$style)===null||e===void 0?void 0:e.name)&&(r=o.$style)!==null&&r!==void 0&&r.name){var i;be.loadCSS(n),(i=o.$style)===null||i===void 0||i.loadCSS(n),Qt.setLoadedStyleName(o.$style.name)}},_loadThemeStyles:function(){var e,r,o,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!(n!=null&&n.isUnstyled()||(n==null||(e=n.theme)===null||e===void 0?void 0:e.call(n))==="none")){if(!ue.isStyleNameLoaded("common")){var s,c,a=((s=n.$style)===null||s===void 0||(c=s.getCommonTheme)===null||c===void 0?void 0:c.call(s))||{},l=a.primitive,d=a.semantic,u=a.global,f=a.style;be.load(l==null?void 0:l.css,oe({name:"primitive-variables"},i)),be.load(d==null?void 0:d.css,oe({name:"semantic-variables"},i)),be.load(u==null?void 0:u.css,oe({name:"global-variables"},i)),be.loadTheme(oe({name:"global-style"},i),f),ue.setLoadedStyleName("common")}if(!ue.isStyleNameLoaded((r=n.$style)===null||r===void 0?void 0:r.name)&&(o=n.$style)!==null&&o!==void 0&&o.name){var h,m,b,T,x=((h=n.$style)===null||h===void 0||(m=h.getDirectiveTheme)===null||m===void 0?void 0:m.call(h))||{},C=x.css,y=x.style;(b=n.$style)===null||b===void 0||b.load(C,oe({name:"".concat(n.$style.name,"-variables")},i)),(T=n.$style)===null||T===void 0||T.loadTheme(oe({name:"".concat(n.$style.name,"-style")},i),y),ue.setLoadedStyleName(n.$style.name)}if(!ue.isStyleNameLoaded("layer-order")){var _,N,H=(_=n.$style)===null||_===void 0||(N=_.getLayerOrderThemeCSS)===null||N===void 0?void 0:N.call(_);be.load(H,oe({name:"layer-order",first:!0},i)),ue.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=e.preset();if(o&&e.$attrSelector){var n,i,s,c=((n=e.$style)===null||n===void 0||(i=n.getPresetTheme)===null||i===void 0?void 0:i.call(n,o,"[".concat(e.$attrSelector,"]")))||{},a=c.css,l=(s=e.$style)===null||s===void 0?void 0:s.load(a,oe({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},r));e.scopedStyleEl=l.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Qt.clearLoadedStyleNames(),nt.on("theme:change",e)},_hook:function(e,r,o,n,i,s){var c,a,l="on".concat(Mv(r)),d=Q._getConfig(n,i),u=o==null?void 0:o.$instance,f=Q._usePT(u,Q._getPT(n==null||(c=n.value)===null||c===void 0?void 0:c.pt,e),Q._getOptionValue,"hooks.".concat(l)),h=Q._useDefaultPT(u,d==null||(a=d.pt)===null||a===void 0||(a=a.directives)===null||a===void 0?void 0:a[e],Q._getOptionValue,"hooks.".concat(l)),m={el:o,binding:n,vnode:i,prevVnode:s};f==null||f(u,m),h==null||h(u,m)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];return qs(e)?e.apply(void 0,o):Ye.apply(void 0,o)},_extend:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=function(s,c,a,l,d){var u,f,h,m;c._$instances=c._$instances||{};var b=Q._getConfig(a,l),T=c._$instances[e]||{},x=Rr(T)?oe(oe({},r),r==null?void 0:r.methods):{};c._$instances[e]=oe(oe({},T),{},{$name:e,$host:c,$binding:a,$modifiers:a==null?void 0:a.modifiers,$value:a==null?void 0:a.value,$el:T.$el||c||void 0,$style:oe({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},r==null?void 0:r.style),$primevueConfig:b,$attrSelector:(u=c.$pd)===null||u===void 0||(u=u[e])===null||u===void 0?void 0:u.attrSelector,defaultPT:function(){return Q._getPT(b==null?void 0:b.pt,void 0,function(y){var _;return y==null||(_=y.directives)===null||_===void 0?void 0:_[e]})},isUnstyled:function(){var y,_;return((y=c.$instance)===null||y===void 0||(y=y.$binding)===null||y===void 0||(y=y.value)===null||y===void 0?void 0:y.unstyled)!==void 0?(_=c.$instance)===null||_===void 0||(_=_.$binding)===null||_===void 0||(_=_.value)===null||_===void 0?void 0:_.unstyled:b==null?void 0:b.unstyled},theme:function(){var y;return(y=c.$instance)===null||y===void 0||(y=y.$primevueConfig)===null||y===void 0?void 0:y.theme},preset:function(){var y;return(y=c.$instance)===null||y===void 0||(y=y.$binding)===null||y===void 0||(y=y.value)===null||y===void 0?void 0:y.dt},ptm:function(){var y,_=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Q._getPTValue(c.$instance,(y=c.$instance)===null||y===void 0||(y=y.$binding)===null||y===void 0||(y=y.value)===null||y===void 0?void 0:y.pt,_,oe({},N))},ptmo:function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Q._getPTValue(c.$instance,y,_,N,!1)},cx:function(){var y,_,N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",H=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(y=c.$instance)!==null&&y!==void 0&&y.isUnstyled()?void 0:Q._getOptionValue((_=c.$instance)===null||_===void 0||(_=_.$style)===null||_===void 0?void 0:_.classes,N,oe({},H))},sx:function(){var y,_=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,H=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return N?Q._getOptionValue((y=c.$instance)===null||y===void 0||(y=y.$style)===null||y===void 0?void 0:y.inlineStyles,_,oe({},H)):void 0}},x),c.$instance=c._$instances[e],(f=(h=c.$instance)[s])===null||f===void 0||f.call(h,c,a,l,d),c["$".concat(e)]=c.$instance,Q._hook(e,s,c,a,l,d),c.$pd||(c.$pd={}),c.$pd[e]=oe(oe({},(m=c.$pd)===null||m===void 0?void 0:m[e]),{},{name:e,instance:c.$instance})},n=function(s){var c,a,l,d,u,f=(c=s.$instance)===null||c===void 0?void 0:c.watch;f==null||(a=f.config)===null||a===void 0||a.call(s.$instance,(l=s.$instance)===null||l===void 0?void 0:l.$primevueConfig),Dr.on("config:change",function(h){var m,b=h.newValue,T=h.oldValue;return f==null||(m=f.config)===null||m===void 0?void 0:m.call(s.$instance,b,T)}),f==null||(d=f["config.ripple"])===null||d===void 0||d.call(s.$instance,(u=s.$instance)===null||u===void 0||(u=u.$primevueConfig)===null||u===void 0?void 0:u.ripple),Dr.on("config:ripple:change",function(h){var m,b=h.newValue,T=h.oldValue;return f==null||(m=f["config.ripple"])===null||m===void 0?void 0:m.call(s.$instance,b,T)})};return{created:function(s,c,a,l){s.$pd||(s.$pd={}),s.$pd[e]={name:e,attrSelector:zu("pd")},o("created",s,c,a,l)},beforeMount:function(s,c,a,l){Q._loadStyles(s,c,a),o("beforeMount",s,c,a,l),n(s)},mounted:function(s,c,a,l){Q._loadStyles(s,c,a),o("mounted",s,c,a,l)},beforeUpdate:function(s,c,a,l){o("beforeUpdate",s,c,a,l)},updated:function(s,c,a,l){Q._loadStyles(s,c,a),o("updated",s,c,a,l)},beforeUnmount:function(s,c,a,l){o("beforeUnmount",s,c,a,l)},unmounted:function(s,c,a,l){var d;(d=s.$instance)===null||d===void 0||(d=d.scopedStyleEl)===null||d===void 0||(d=d.value)===null||d===void 0||d.remove(),o("unmounted",s,c,a,l)}}},extend:function(){var e=Q._getMeta.apply(Q,arguments),r=Yc(e,2),o=r[0],n=r[1];return oe({extend:function(){var s=Q._getMeta.apply(Q,arguments),c=Yc(s,2),a=c[0],l=c[1];return Q.extend(a,oe(oe(oe({},n),n==null?void 0:n.methods),l))}},Q._extend(o,n))}},zy=function(e){var r=e.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(r("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},Ky={root:"p-ink"},Gy=be.extend({name:"ripple-directive",theme:zy,classes:Ky}),qy=Q.extend({style:Gy});function Fo(t){"@babel/helpers - typeof";return Fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fo(t)}function Yy(t){return Zy(t)||Qy(t)||Xy(t)||Jy()}function Jy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xy(t,e){if(t){if(typeof t=="string")return ds(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ds(t,e):void 0}}function Qy(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Zy(t){if(Array.isArray(t))return ds(t)}function ds(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function Qc(t,e,r){return(e=e_(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e_(t){var e=t_(t,"string");return Fo(e)=="symbol"?e:e+""}function t_(t,e){if(Fo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(Fo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var r_=qy.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var r=Zv("span",Qc(Qc({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(r),this.$el=r},remove:function(e){var r=this.getInk(e);r&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),r.removeEventListener("animationend",this.onAnimationEnd),r.remove())},onMouseDown:function(e){var r=this,o=e.currentTarget,n=this.getInk(o);if(!(!n||getComputedStyle(n,null).display==="none")){if(!this.isUnstyled()&&Pi(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!Dc(n)&&!Mc(n)){var i=Math.max(Qv(o),ry(o));n.style.height=i+"px",n.style.width=i+"px"}var s=ty(o),c=e.pageX-s.left+document.body.scrollTop-Mc(n)/2,a=e.pageY-s.top+document.body.scrollLeft-Dc(n)/2;n.style.top=a+"px",n.style.left=c+"px",!this.isUnstyled()&&Yv(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){n&&(!r.isUnstyled()&&Pi(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&Pi(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?Yy(e.children).find(function(r){return ey(r,"data-pc-name")==="ripple"}):void 0}}});function Ho(t){"@babel/helpers - typeof";return Ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ho(t)}function gt(t,e,r){return(e=o_(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o_(t){var e=n_(t,"string");return Ho(e)=="symbol"?e:e+""}function n_(t,e){if(Ho(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(Ho(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var i_=function(e){var r=e.dt;return`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(r("button.primary.color"),`;
    background: `).concat(r("button.primary.background"),`;
    border: 1px solid `).concat(r("button.primary.border.color"),`;
    padding: `).concat(r("button.padding.y")," ").concat(r("button.padding.x"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(r("button.transition.duration"),", color ").concat(r("button.transition.duration"),", border-color ").concat(r("button.transition.duration"),`,
            outline-color `).concat(r("button.transition.duration"),", box-shadow ").concat(r("button.transition.duration"),`;
    border-radius: `).concat(r("button.border.radius"),`;
    outline-color: transparent;
    gap: `).concat(r("button.gap"),`;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: `).concat(r("button.icon.only.width"),`;
    padding-left: 0;
    padding-right: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: `).concat(r("button.icon.only.width"),`;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: `).concat(r("button.sm.font.size"),`;
    padding: `).concat(r("button.sm.padding.y")," ").concat(r("button.sm.padding.x"),`;
}

.p-button-sm .p-button-icon {
    font-size: `).concat(r("button.sm.font.size"),`;
}

.p-button-lg {
    font-size: `).concat(r("button.lg.font.size"),`;
    padding: `).concat(r("button.lg.padding.y")," ").concat(r("button.lg.padding.x"),`;
}

.p-button-lg .p-button-icon {
    font-size: `).concat(r("button.lg.font.size"),`;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: `).concat(r("button.label.font.weight"),`;
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: `).concat(r("button.icon.only.width"),`;
}

.p-button:not(:disabled):hover {
    background: `).concat(r("button.primary.hover.background"),`;
    border: 1px solid `).concat(r("button.primary.hover.border.color"),`;
    color: `).concat(r("button.primary.hover.color"),`;
}

.p-button:not(:disabled):active {
    background: `).concat(r("button.primary.active.background"),`;
    border: 1px solid `).concat(r("button.primary.active.border.color"),`;
    color: `).concat(r("button.primary.active.color"),`;
}

.p-button:focus-visible {
    box-shadow: `).concat(r("button.primary.focus.ring.shadow"),`;
    outline: `).concat(r("button.focus.ring.width")," ").concat(r("button.focus.ring.style")," ").concat(r("button.primary.focus.ring.color"),`;
    outline-offset: `).concat(r("button.focus.ring.offset"),`;
}

.p-button .p-badge {
    min-width: `).concat(r("button.badge.size"),`;
    height: `).concat(r("button.badge.size"),`;
    line-height: `).concat(r("button.badge.size"),`;
}

.p-button-raised {
    box-shadow: `).concat(r("button.raised.shadow"),`;
}

.p-button-rounded {
    border-radius: `).concat(r("button.rounded.border.radius"),`;
}

.p-button-secondary {
    background: `).concat(r("button.secondary.background"),`;
    border: 1px solid `).concat(r("button.secondary.border.color"),`;
    color: `).concat(r("button.secondary.color"),`;
}

.p-button-secondary:not(:disabled):hover {
    background: `).concat(r("button.secondary.hover.background"),`;
    border: 1px solid `).concat(r("button.secondary.hover.border.color"),`;
    color: `).concat(r("button.secondary.hover.color"),`;
}

.p-button-secondary:not(:disabled):active {
    background: `).concat(r("button.secondary.active.background"),`;
    border: 1px solid `).concat(r("button.secondary.active.border.color"),`;
    color: `).concat(r("button.secondary.active.color"),`;
}

.p-button-secondary:focus-visible {
    outline-color: `).concat(r("button.secondary.focus.ring.color"),`;
    box-shadow: `).concat(r("button.secondary.focus.ring.shadow"),`;
}

.p-button-success {
    background: `).concat(r("button.success.background"),`;
    border: 1px solid `).concat(r("button.success.border.color"),`;
    color: `).concat(r("button.success.color"),`;
}

.p-button-success:not(:disabled):hover {
    background: `).concat(r("button.success.hover.background"),`;
    border: 1px solid `).concat(r("button.success.hover.border.color"),`;
    color: `).concat(r("button.success.hover.color"),`;
}

.p-button-success:not(:disabled):active {
    background: `).concat(r("button.success.active.background"),`;
    border: 1px solid `).concat(r("button.success.active.border.color"),`;
    color: `).concat(r("button.success.active.color"),`;
}

.p-button-success:focus-visible {
    outline-color: `).concat(r("button.success.focus.ring.color"),`;
    box-shadow: `).concat(r("button.success.focus.ring.shadow"),`;
}

.p-button-info {
    background: `).concat(r("button.info.background"),`;
    border: 1px solid `).concat(r("button.info.border.color"),`;
    color: `).concat(r("button.info.color"),`;
}

.p-button-info:not(:disabled):hover {
    background: `).concat(r("button.info.hover.background"),`;
    border: 1px solid `).concat(r("button.info.hover.border.color"),`;
    color: `).concat(r("button.info.hover.color"),`;
}

.p-button-info:not(:disabled):active {
    background: `).concat(r("button.info.active.background"),`;
    border: 1px solid `).concat(r("button.info.active.border.color"),`;
    color: `).concat(r("button.info.active.color"),`;
}

.p-button-info:focus-visible {
    outline-color: `).concat(r("button.info.focus.ring.color"),`;
    box-shadow: `).concat(r("button.info.focus.ring.shadow"),`;
}

.p-button-warn {
    background: `).concat(r("button.warn.background"),`;
    border: 1px solid `).concat(r("button.warn.border.color"),`;
    color: `).concat(r("button.warn.color"),`;
}

.p-button-warn:not(:disabled):hover {
    background: `).concat(r("button.warn.hover.background"),`;
    border: 1px solid `).concat(r("button.warn.hover.border.color"),`;
    color: `).concat(r("button.warn.hover.color"),`;
}

.p-button-warn:not(:disabled):active {
    background: `).concat(r("button.warn.active.background"),`;
    border: 1px solid `).concat(r("button.warn.active.border.color"),`;
    color: `).concat(r("button.warn.active.color"),`;
}

.p-button-warn:focus-visible {
    outline-color: `).concat(r("button.warn.focus.ring.color"),`;
    box-shadow: `).concat(r("button.warn.focus.ring.shadow"),`;
}

.p-button-help {
    background: `).concat(r("button.help.background"),`;
    border: 1px solid `).concat(r("button.help.border.color"),`;
    color: `).concat(r("button.help.color"),`;
}

.p-button-help:not(:disabled):hover {
    background: `).concat(r("button.help.hover.background"),`;
    border: 1px solid `).concat(r("button.help.hover.border.color"),`;
    color: `).concat(r("button.help.hover.color"),`;
}

.p-button-help:not(:disabled):active {
    background: `).concat(r("button.help.active.background"),`;
    border: 1px solid `).concat(r("button.help.active.border.color"),`;
    color: `).concat(r("button.help.active.color"),`;
}

.p-button-help:focus-visible {
    outline-color: `).concat(r("button.help.focus.ring.color"),`;
    box-shadow: `).concat(r("button.help.focus.ring.shadow"),`;
}

.p-button-danger {
    background: `).concat(r("button.danger.background"),`;
    border: 1px solid `).concat(r("button.danger.border.color"),`;
    color: `).concat(r("button.danger.color"),`;
}

.p-button-danger:not(:disabled):hover {
    background: `).concat(r("button.danger.hover.background"),`;
    border: 1px solid `).concat(r("button.danger.hover.border.color"),`;
    color: `).concat(r("button.danger.hover.color"),`;
}

.p-button-danger:not(:disabled):active {
    background: `).concat(r("button.danger.active.background"),`;
    border: 1px solid `).concat(r("button.danger.active.border.color"),`;
    color: `).concat(r("button.danger.active.color"),`;
}

.p-button-danger:focus-visible {
    outline-color: `).concat(r("button.danger.focus.ring.color"),`;
    box-shadow: `).concat(r("button.danger.focus.ring.shadow"),`;
}

.p-button-contrast {
    background: `).concat(r("button.contrast.background"),`;
    border: 1px solid `).concat(r("button.contrast.border.color"),`;
    color: `).concat(r("button.contrast.color"),`;
}

.p-button-contrast:not(:disabled):hover {
    background: `).concat(r("button.contrast.hover.background"),`;
    border: 1px solid `).concat(r("button.contrast.hover.border.color"),`;
    color: `).concat(r("button.contrast.hover.color"),`;
}

.p-button-contrast:not(:disabled):active {
    background: `).concat(r("button.contrast.active.background"),`;
    border: 1px solid `).concat(r("button.contrast.active.border.color"),`;
    color: `).concat(r("button.contrast.active.color"),`;
}

.p-button-contrast:focus-visible {
    outline-color: `).concat(r("button.contrast.focus.ring.color"),`;
    box-shadow: `).concat(r("button.contrast.focus.ring.shadow"),`;
}

.p-button-outlined {
    background: transparent;
    border-color: `).concat(r("button.outlined.primary.border.color"),`;
    color: `).concat(r("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):hover {
    background: `).concat(r("button.outlined.primary.hover.background"),`;
    border-color: `).concat(r("button.outlined.primary.border.color"),`;
    color: `).concat(r("button.outlined.primary.color"),`;
}

.p-button-outlined:not(:disabled):active {
    background: `).concat(r("button.outlined.primary.active.background"),`;
    border-color: `).concat(r("button.outlined.primary.border.color"),`;
    color: `).concat(r("button.outlined.primary.color"),`;
}

.p-button-outlined.p-button-secondary {
    border-color: `).concat(r("button.outlined.secondary.border.color"),`;
    color: `).concat(r("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: `).concat(r("button.outlined.secondary.hover.background"),`;
    border-color: `).concat(r("button.outlined.secondary.border.color"),`;
    color: `).concat(r("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: `).concat(r("button.outlined.secondary.active.background"),`;
    border-color: `).concat(r("button.outlined.secondary.border.color"),`;
    color: `).concat(r("button.outlined.secondary.color"),`;
}

.p-button-outlined.p-button-success {
    border-color: `).concat(r("button.outlined.success.border.color"),`;
    color: `).concat(r("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: `).concat(r("button.outlined.success.hover.background"),`;
    border-color: `).concat(r("button.outlined.success.border.color"),`;
    color: `).concat(r("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: `).concat(r("button.outlined.success.active.background"),`;
    border-color: `).concat(r("button.outlined.success.border.color"),`;
    color: `).concat(r("button.outlined.success.color"),`;
}

.p-button-outlined.p-button-info {
    border-color: `).concat(r("button.outlined.info.border.color"),`;
    color: `).concat(r("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: `).concat(r("button.outlined.info.hover.background"),`;
    border-color: `).concat(r("button.outlined.info.border.color"),`;
    color: `).concat(r("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: `).concat(r("button.outlined.info.active.background"),`;
    border-color: `).concat(r("button.outlined.info.border.color"),`;
    color: `).concat(r("button.outlined.info.color"),`;
}

.p-button-outlined.p-button-warn {
    border-color: `).concat(r("button.outlined.warn.border.color"),`;
    color: `).concat(r("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: `).concat(r("button.outlined.warn.hover.background"),`;
    border-color: `).concat(r("button.outlined.warn.border.color"),`;
    color: `).concat(r("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: `).concat(r("button.outlined.warn.active.background"),`;
    border-color: `).concat(r("button.outlined.warn.border.color"),`;
    color: `).concat(r("button.outlined.warn.color"),`;
}

.p-button-outlined.p-button-help {
    border-color: `).concat(r("button.outlined.help.border.color"),`;
    color: `).concat(r("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: `).concat(r("button.outlined.help.hover.background"),`;
    border-color: `).concat(r("button.outlined.help.border.color"),`;
    color: `).concat(r("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: `).concat(r("button.outlined.help.active.background"),`;
    border-color: `).concat(r("button.outlined.help.border.color"),`;
    color: `).concat(r("button.outlined.help.color"),`;
}

.p-button-outlined.p-button-danger {
    border-color: `).concat(r("button.outlined.danger.border.color"),`;
    color: `).concat(r("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: `).concat(r("button.outlined.danger.hover.background"),`;
    border-color: `).concat(r("button.outlined.danger.border.color"),`;
    color: `).concat(r("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: `).concat(r("button.outlined.danger.active.background"),`;
    border-color: `).concat(r("button.outlined.danger.border.color"),`;
    color: `).concat(r("button.outlined.danger.color"),`;
}

.p-button-outlined.p-button-contrast {
    border-color: `).concat(r("button.outlined.contrast.border.color"),`;
    color: `).concat(r("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: `).concat(r("button.outlined.contrast.hover.background"),`;
    border-color: `).concat(r("button.outlined.contrast.border.color"),`;
    color: `).concat(r("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: `).concat(r("button.outlined.contrast.active.background"),`;
    border-color: `).concat(r("button.outlined.contrast.border.color"),`;
    color: `).concat(r("button.outlined.contrast.color"),`;
}

.p-button-outlined.p-button-plain {
    border-color: `).concat(r("button.outlined.plain.border.color"),`;
    color: `).concat(r("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: `).concat(r("button.outlined.plain.hover.background"),`;
    border-color: `).concat(r("button.outlined.plain.border.color"),`;
    color: `).concat(r("button.outlined.plain.color"),`;
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: `).concat(r("button.outlined.plain.active.background"),`;
    border-color: `).concat(r("button.outlined.plain.border.color"),`;
    color: `).concat(r("button.outlined.plain.color"),`;
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):hover {
    background: `).concat(r("button.text.primary.hover.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.primary.color"),`;
}

.p-button-text:not(:disabled):active {
    background: `).concat(r("button.text.primary.active.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.primary.color"),`;
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: `).concat(r("button.text.secondary.hover.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.secondary.color"),`;
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: `).concat(r("button.text.secondary.active.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.secondary.color"),`;
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: `).concat(r("button.text.success.hover.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.success.color"),`;
}

.p-button-text.p-button-success:not(:disabled):active {
    background: `).concat(r("button.text.success.active.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.success.color"),`;
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: `).concat(r("button.text.info.hover.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.info.color"),`;
}

.p-button-text.p-button-info:not(:disabled):active {
    background: `).concat(r("button.text.info.active.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.info.color"),`;
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: `).concat(r("button.text.warn.hover.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.warn.color"),`;
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: `).concat(r("button.text.warn.active.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.warn.color"),`;
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: `).concat(r("button.text.help.hover.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.help.color"),`;
}

.p-button-text.p-button-help:not(:disabled):active {
    background: `).concat(r("button.text.help.active.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.help.color"),`;
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: `).concat(r("button.text.danger.hover.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.danger.color"),`;
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: `).concat(r("button.text.danger.active.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.danger.color"),`;
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: `).concat(r("button.text.plain.hover.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.plain.color"),`;
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: `).concat(r("button.text.plain.active.background"),`;
    border-color: transparent;
    color: `).concat(r("button.text.plain.color"),`;
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.link.color"),`;
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.link.hover.color"),`;
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: `).concat(r("button.link.active.color"),`;
}
`)},s_={root:function(e){var r=e.instance,o=e.props;return["p-button p-component",gt(gt(gt(gt(gt(gt(gt(gt(gt({"p-button-icon-only":r.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link},"p-button-".concat(o.severity),o.severity),"p-button-raised",o.raised),"p-button-rounded",o.rounded),"p-button-text",o.text),"p-button-outlined",o.outlined),"p-button-sm",o.size==="small"),"p-button-lg",o.size==="large"),"p-button-plain",o.plain),"p-button-fluid",r.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var r=e.props;return["p-button-icon",gt({},"p-button-icon-".concat(r.iconPos),r.label)]},label:"p-button-label"},a_=be.extend({name:"button",theme:i_,classes:s_}),c_={name:"BaseButton",extends:Js,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:a_,provide:function(){return{$pcButton:this,$parentInstance:this}}},Xu={name:"Button",extends:c_,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var r=e==="root"?this.ptmi:this.ptm;return r(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return Ye(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Rr(this.fluid)?!!this.$pcFluid:this.fluid}},components:{SpinnerIcon:Yu,Badge:Ju},directives:{ripple:r_}};function l_(t,e,r,o,n,i){var s=Ui("SpinnerIcon"),c=Ui("Badge"),a=hh("ripple");return t.asChild?no(t.$slots,"default",{key:1,class:vr(t.cx("root")),a11yAttrs:i.a11yAttrs}):qf((qe(),Sr(fh(t.as),Ye({key:0,class:t.cx("root")},i.attrs),{default:Ll(function(){return[no(t.$slots,"default",{},function(){return[t.loading?no(t.$slots,"loadingicon",{key:0,class:vr([t.cx("loadingIcon"),t.cx("icon")])},function(){return[t.loadingIcon?(qe(),Gr("span",Ye({key:0,class:[t.cx("loadingIcon"),t.cx("icon"),t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(qe(),Sr(s,Ye({key:1,class:[t.cx("loadingIcon"),t.cx("icon")],spin:""},t.ptm("loadingIcon")),null,16,["class"]))]}):no(t.$slots,"icon",{key:1,class:vr([t.cx("icon")])},function(){return[t.icon?(qe(),Gr("span",Ye({key:0,class:[t.cx("icon"),t.icon,t.iconClass]},t.ptm("icon")),null,16)):zi("",!0)]}),Zt("span",Ye({class:t.cx("label")},t.ptm("label")),ms(t.label||" "),17),t.badge?(qe(),Sr(c,{key:2,value:t.badge,class:vr(t.badgeClass),severity:t.badgeSeverity,unstyled:t.unstyled,pt:t.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):zi("",!0)]})]}),_:3},16,["class"])),[[a]])}Xu.render=l_;const Qu=(t,e)=>{const r=t.__vccOpts||t;for(const[o,n]of e)r[o]=n;return r},d_={class:"header"},u_={__name:"Header",setup(t){const e=Tu(),r=()=>{a0(vb()).then(()=>{An().logout(),e.push("/auth/signin")})};return(o,n)=>(qe(),Gr("div",d_,[n[0]||(n[0]=Zt("h1",null,"header",-1)),n[1]||(n[1]=Zt("img",{src:Cv,class:"logo",alt:"3t-pwa logo"},null,-1)),n[2]||(n[2]=Zt("img",{src:Sv,class:"logo vue",alt:"Vue logo"},null,-1)),Ae(wr(Xu),{class:"btn",type:"submit",onClick:r,label:"logOut",severity:"secondary"})]))}},f_=Qu(u_,[["__scopeId","data-v-f69ab0f2"]]),h_={class:"App"},p_={class:"content"},g_={__name:"App",setup(t){Tu();const e=Je(()=>An().isLogin);return Kn(()=>{An().loadAuthState()}),(r,o)=>{const n=Ui("router-view");return qe(),Gr("div",h_,[e.value?(qe(),Sr(f_,{key:0})):zi("",!0),Zt("div",p_,[Ae(n)])])}}},m_=Qu(g_,[["__scopeId","data-v-7a39ff00"]]),b_="modulepreload",v_=function(t){return"/3t-pwa/"+t},Zc={},oo=function(e,r,o){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(a=>{if(a=v_(a),a in Zc)return;Zc[a]=!0;const l=a.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":b_,l||(u.as="script"),u.crossOrigin="",u.href=a,c&&u.setAttribute("nonce",c),document.head.appendChild(u),l)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return n.then(s=>{for(const c of s||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},y_=[{path:"/auth/signin",name:"auth-signin",component:()=>oo(()=>import("./SignIn-BSsbAkIt.js"),__vite__mapDeps([0,1,2])),meta:{requiredAuth:!1}},{path:"/auth/signup",name:"auth-signup",component:()=>oo(()=>import("./SignUp-DUDh-_t4.js"),__vite__mapDeps([3,4])),meta:{requiredAuth:!1}},{path:"/",name:"main",redirect:"/dashboard",component:()=>oo(()=>import("./Main-DgGmdM8Z.js"),__vite__mapDeps([5,6,7])),meta:{requiredAuth:!0},children:[{path:"/dashboard",name:"dashboard",component:()=>oo(()=>import("./Dashboard-DXOTwZEk.js"),[])},{path:"/tasks",name:"tasks",component:()=>oo(()=>import("./Tasks-DhYLlJdW.js"),__vite__mapDeps([8,1,7]))}]},{path:"/:pathMatch(.*)*",name:"404",redirect:{name:"main",params:{}},meta:{title:"404 ;(",requiredAuth:!0}}],Zu=kv({history:Xb("/3t-pwa/"),routes:y_});Zu.beforeEach((t,e,r)=>{const o=An().isLogin;!t.name.includes("auth")&&!o?r({name:"auth-signin"}):t.name.includes("auth")&&o?r({name:"main"}):r()});var __="firebase",k_="10.14.1";/**
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
 */Vr(__,k_,"app");const w_={apiKey:"AIzaSyDfAqcEiLceMXThDtKSFaWYhke2BYMwHD4",authDomain:"tapp-497ad.firebaseapp.com",projectId:"tapp-497ad",storageBucket:"tapp-497ad.appspot.com",messagingSenderId:"1056111856158",appId:"1:1056111856158:web:30674d686d70dd82a9fc0f",measurementId:"G-85PYBH32MV"};var Pe={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Vo(t){"@babel/helpers - typeof";return Vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vo(t)}function el(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function ln(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?el(Object(r),!0).forEach(function(o){C_(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):el(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function C_(t,e,r){return(e=S_(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function S_(t){var e=x_(t,"string");return Vo(e)=="symbol"?e:e+""}function x_(t,e){if(Vo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(Vo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var E_={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Pe.STARTS_WITH,Pe.CONTAINS,Pe.NOT_CONTAINS,Pe.ENDS_WITH,Pe.EQUALS,Pe.NOT_EQUALS],numeric:[Pe.EQUALS,Pe.NOT_EQUALS,Pe.LESS_THAN,Pe.LESS_THAN_OR_EQUAL_TO,Pe.GREATER_THAN,Pe.GREATER_THAN_OR_EQUAL_TO],date:[Pe.DATE_IS,Pe.DATE_IS_NOT,Pe.DATE_BEFORE,Pe.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},T_=Symbol();function I_(t,e){var r={config:Xr(e)};return t.config.globalProperties.$primevue=r,t.provide(T_,r),R_(),P_(t,r),r}var Mr=[];function R_(){nt.clear(),Mr.forEach(function(t){return t==null?void 0:t()}),Mr=[]}function P_(t,e){var r=kr(!1),o=function(){var l;if(((l=e.config)===null||l===void 0?void 0:l.theme)!=="none"&&!ue.isStyleNameLoaded("common")){var d,u,f=((d=be.getCommonTheme)===null||d===void 0?void 0:d.call(be))||{},h=f.primitive,m=f.semantic,b=f.global,T=f.style,x={nonce:(u=e.config)===null||u===void 0||(u=u.csp)===null||u===void 0?void 0:u.nonce};be.load(h==null?void 0:h.css,ln({name:"primitive-variables"},x)),be.load(m==null?void 0:m.css,ln({name:"semantic-variables"},x)),be.load(b==null?void 0:b.css,ln({name:"global-variables"},x)),be.loadTheme(ln({name:"global-style"},x),T),ue.setLoadedStyleName("common")}};nt.on("theme:change",function(a){r.value||(t.config.globalProperties.$primevue.config.theme=a,r.value=!0)});var n=vt(e.config,function(a,l){Dr.emit("config:change",{newValue:a,oldValue:l})},{immediate:!0,deep:!0}),i=vt(function(){return e.config.ripple},function(a,l){Dr.emit("config:ripple:change",{newValue:a,oldValue:l})},{immediate:!0,deep:!0}),s=vt(function(){return e.config.theme},function(a,l){r.value||ue.setTheme(a),e.config.unstyled||o(),r.value=!1,Dr.emit("config:theme:change",{newValue:a,oldValue:l})},{immediate:!0,deep:!0}),c=vt(function(){return e.config.unstyled},function(a,l){!a&&e.config.theme&&o(),Dr.emit("config:unstyled:change",{newValue:a,oldValue:l})},{immediate:!0,deep:!0});Mr.push(n),Mr.push(i),Mr.push(s),Mr.push(c)}var O_={install:function(e,r){var o=Dv(E_,r);I_(e,o)}},A_={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}},B_={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}},$_={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.background}",offset:"-1rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem"},xl:{width:"4rem",height:"4rem",fontSize:"2rem"}},N_={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},L_={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{red.400}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.700}",hoverBorderColor:"{surface.600}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{red.300}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}},D_={root:{borderRadius:"{content.border.radius}"}},M_={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}},j_={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}},U_={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}},F_={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}},H_={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}}},V_={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}"}},W_={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}},z_={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}},K_={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}},G_={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}},q_={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},Y_={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},J_={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}},X_={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0",fontWeight:"500",gap:"0.5rem"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.375rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.375rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}},Q_={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}},Z_={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}},ek={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},tk={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"}},rk={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}},ok={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}},nk={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}},ik={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}},sk={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},mask:{background:"{mask.background}",color:"{mask.color}"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}},ak={icon:{color:"{form.field.icon.color}"}},ck={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"}},lk={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},dk={handle:{size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},uk={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}},fk={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}},hk={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}},pk={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"}},gk={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}},mk={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"}}},bk={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}},vk={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}},yk={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.muted.hover.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},_k={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}},kk={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.muted.hover.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},wk={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem"},text:{fontSize:"1rem",fontWeight:"500"},icon:{size:"1.125rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},Ck={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}},Sk={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}},xk={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},Ek={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}},Tk={root:{outline:{width:"2px",color:"{content.background}"}}},Ik={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}},Rk={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}},Pk={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}},Ok={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}},Ak={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}},Bk={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}},$k={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}},Nk={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}},Lk={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}"}},Dk={root:{gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},Mk={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}},jk={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}},Uk={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}},Fk={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}},Hk={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}},Vk={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}},Wk={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}},zk={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}},Kk={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}},Gk={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0 0 0 1rem"}},qk={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},Yk={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}},Jk={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},Xk={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}},Qk={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}},Zk={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}},ew={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"}},tw={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}},rw={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}},ow={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}},nw={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}},iw={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}}},sw={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}},aw={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}},cw={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.5rem 0"}},lw={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}},dw={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}},uw={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};function Wo(t){"@babel/helpers - typeof";return Wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wo(t)}function tl(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function rl(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?tl(Object(r),!0).forEach(function(o){fw(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tl(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function fw(t,e,r){return(e=hw(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function hw(t){var e=pw(t,"string");return Wo(e)=="symbol"?e:e+""}function pw(t,e){if(Wo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(Wo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var gw=rl(rl({},L_),{},{components:{accordion:A_,autocomplete:B_,avatar:$_,badge:N_,blockui:D_,breadcrumb:M_,button:j_,datepicker:X_,card:U_,carousel:F_,cascadeselect:H_,checkbox:V_,chip:W_,colorpicker:z_,confirmdialog:K_,confirmpopup:G_,contextmenu:q_,dataview:J_,datatable:Y_,dialog:Q_,divider:Z_,dock:ek,drawer:tk,editor:rk,fieldset:ok,fileupload:nk,iftalabel:ck,floatlabel:ik,galleria:sk,iconfield:ak,image:lk,imagecompare:dk,inlinemessage:uk,inplace:fk,inputchips:hk,inputgroup:pk,inputnumber:gk,inputtext:mk,knob:bk,listbox:vk,megamenu:yk,menu:_k,menubar:kk,message:wk,metergroup:Ck,multiselect:Sk,orderlist:xk,organizationchart:Ek,overlaybadge:Tk,popover:Bk,paginator:Ik,password:Ok,panel:Rk,panelmenu:Pk,picklist:Ak,progressbar:$k,progressspinner:Nk,radiobutton:Lk,rating:Dk,scrollpanel:jk,select:Uk,selectbutton:Fk,skeleton:Hk,slider:Vk,speeddial:Wk,splitter:Kk,splitbutton:zk,stepper:Gk,steps:qk,tabmenu:Yk,tabs:Jk,tabview:Xk,textarea:ew,tieredmenu:tw,tag:Qk,terminal:Zk,timeline:rw,togglebutton:nw,toggleswitch:iw,tree:cw,treeselect:lw,treetable:dw,toast:ow,toolbar:sw,virtualscroller:uw},directives:{tooltip:aw,ripple:Mk}});const mw=Ev();Od(w_);Pp(m_).use(mw).use(Zu).use(O_,{theme:{preset:gw}}).mount("#app");export{Xu as A,be as B,Tu as C,ww as D,$u as E,vb as F,An as G,qf as H,_w as I,kw as J,Je as K,Kn as L,vw as M,bw as T,Qu as _,Zt as a,Sr as b,Gr as c,zi as d,Sw as e,xw as f,Ew as g,Qv as h,Wu as i,Cw as j,Tw as k,Rr as l,Ye as m,Js as n,qe as o,Ui as p,Ae as q,no as r,Ay as s,fh as t,zu as u,ms as v,Ll as w,yw as x,kr as y,wr as z};
