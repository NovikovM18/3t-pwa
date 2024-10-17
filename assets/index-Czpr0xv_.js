const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SignIn-DiBJRyxs.js","assets/SignIn-DKfO65z7.css","assets/SignUp-D9vdOAqV.js","assets/SignUp-k7rquBz5.css","assets/Main-C9T-_sEP.js","assets/Main-ehGRrhn2.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function js(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const J={},tn=[],qe=()=>{},bl=()=>!1,Or=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vs=t=>t.startsWith("onUpdate:"),de=Object.assign,Ws=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},El=Object.prototype.hasOwnProperty,X=(t,e)=>El.call(t,e),H=Array.isArray,nn=t=>kr(t)==="[object Map]",Yo=t=>kr(t)==="[object Set]",B=t=>typeof t=="function",ue=t=>typeof t=="string",Tt=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Xo=t=>(ae(t)||B(t))&&B(t.then)&&B(t.catch),Qo=Object.prototype.toString,kr=t=>Qo.call(t),wl=t=>kr(t).slice(8,-1),Zo=t=>kr(t)==="[object Object]",Ks=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,In=js(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Il=/-(\w)/g,De=Nr(t=>t.replace(Il,(e,n)=>n?n.toUpperCase():"")),Sl=/\B([A-Z])/g,Rt=Nr(t=>t.replace(Sl,"-$1").toLowerCase()),Dr=Nr(t=>t.charAt(0).toUpperCase()+t.slice(1)),qr=Nr(t=>t?`on${Dr(t)}`:""),Se=(t,e)=>!Object.is(t,e),or=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ea=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ms=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Si;const Lr=()=>Si||(Si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zs(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ue(r)?Al(r):zs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ue(t)||ae(t))return t}const Tl=/;(?![^(]*\))/g,Rl=/:([^]+)/,Cl=/\/\*[^]*?\*\//g;function Al(t){const e={};return t.replace(Cl,"").split(Tl).forEach(n=>{if(n){const r=n.split(Rl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qs(t){let e="";if(ue(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=qs(t[n]);r&&(e+=r+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ol=js(Pl);function ta(t){return!!t||t===""}const na=t=>!!(t&&t.__v_isRef===!0),kl=t=>ue(t)?t:t==null?"":H(t)||ae(t)&&(t.toString===Qo||!B(t.toString))?na(t)?kl(t.value):JSON.stringify(t,ra,2):String(t),ra=(t,e)=>na(e)?ra(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Gr(r,i)+" =>"]=s,n),{})}:Yo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Gr(n))}:Tt(e)?Gr(e):ae(e)&&!H(e)&&!Zo(e)?String(e):e,Gr=(t,e="")=>{var n;return Tt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _e;class sa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_e,!e&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=_e;try{return _e=this,e()}finally{_e=n}}}on(){_e=this}off(){_e=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ia(t){return new sa(t)}function oa(){return _e}function Nl(t,e=!1){_e&&_e.cleanups.push(t)}let re;const Jr=new WeakSet;class aa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_e&&_e.active&&_e.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Jr.has(this)&&(Jr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||la(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ti(this),ua(this);const e=re,n=Me;re=this,Me=!0;try{return this.fn()}finally{fa(this),re=e,Me=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ys(e);this.deps=this.depsTail=void 0,Ti(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Jr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_s(this)&&this.run()}get dirty(){return _s(this)}}let ca=0,Sn,Tn;function la(t,e=!1){if(t.flags|=8,e){t.next=Tn,Tn=t;return}t.next=Sn,Sn=t}function Gs(){ca++}function Js(){if(--ca>0)return;if(Tn){let e=Tn;for(Tn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Sn;){let e=Sn;for(Sn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ua(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fa(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ys(r),Dl(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function _s(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(da(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function da(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ln))return;t.globalVersion=Ln;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!_s(t)){t.flags&=-3;return}const n=re,r=Me;re=t,Me=!0;try{ua(t);const s=t.fn(t._value);(e.version===0||Se(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{re=n,Me=r,fa(t),t.flags&=-3}}function Ys(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ys(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Me=!0;const ha=[];function Ct(){ha.push(Me),Me=!1}function At(){const t=ha.pop();Me=t===void 0?!0:t}function Ti(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let Ln=0;class Ll{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!re||!Me||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Ll(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,pa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=r)}return n}trigger(e){this.version++,Ln++,this.notify(e)}notify(e){Gs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Js()}}}function pa(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pa(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pr=new WeakMap,$t=Symbol(""),vs=Symbol(""),xn=Symbol("");function pe(t,e,n){if(Me&&re){let r=pr.get(t);r||pr.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new xr),s.map=r,s.key=n),s.track()}}function nt(t,e,n,r,s,i){const o=pr.get(t);if(!o){Ln++;return}const c=a=>{a&&a.trigger()};if(Gs(),e==="clear")o.forEach(c);else{const a=H(t),l=a&&Ks(n);if(a&&n==="length"){const u=Number(r);o.forEach((d,p)=>{(p==="length"||p===xn||!Tt(p)&&p>=u)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),l&&c(o.get(xn)),e){case"add":a?l&&c(o.get("length")):(c(o.get($t)),nn(t)&&c(o.get(vs)));break;case"delete":a||(c(o.get($t)),nn(t)&&c(o.get(vs)));break;case"set":nn(t)&&c(o.get($t));break}}Js()}function xl(t,e){const n=pr.get(t);return n&&n.get(e)}function Jt(t){const e=G(t);return e===t?e:(pe(e,"iterate",xn),Ue(t)?e:e.map(ve))}function Xs(t){return pe(t=G(t),"iterate",xn),t}const Ml={__proto__:null,[Symbol.iterator](){return Yr(this,Symbol.iterator,ve)},concat(...t){return Jt(this).concat(...t.map(e=>H(e)?Jt(e):e))},entries(){return Yr(this,"entries",t=>(t[1]=ve(t[1]),t))},every(t,e){return Qe(this,"every",t,e,void 0,arguments)},filter(t,e){return Qe(this,"filter",t,e,n=>n.map(ve),arguments)},find(t,e){return Qe(this,"find",t,e,ve,arguments)},findIndex(t,e){return Qe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qe(this,"findLast",t,e,ve,arguments)},findLastIndex(t,e){return Qe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qe(this,"forEach",t,e,void 0,arguments)},includes(...t){return Xr(this,"includes",t)},indexOf(...t){return Xr(this,"indexOf",t)},join(t){return Jt(this).join(t)},lastIndexOf(...t){return Xr(this,"lastIndexOf",t)},map(t,e){return Qe(this,"map",t,e,void 0,arguments)},pop(){return mn(this,"pop")},push(...t){return mn(this,"push",t)},reduce(t,...e){return Ri(this,"reduce",t,e)},reduceRight(t,...e){return Ri(this,"reduceRight",t,e)},shift(){return mn(this,"shift")},some(t,e){return Qe(this,"some",t,e,void 0,arguments)},splice(...t){return mn(this,"splice",t)},toReversed(){return Jt(this).toReversed()},toSorted(t){return Jt(this).toSorted(t)},toSpliced(...t){return Jt(this).toSpliced(...t)},unshift(...t){return mn(this,"unshift",t)},values(){return Yr(this,"values",ve)}};function Yr(t,e,n){const r=Xs(t),s=r[e]();return r!==t&&!Ue(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ul=Array.prototype;function Qe(t,e,n,r,s,i){const o=Xs(t),c=o!==t&&!Ue(t),a=o[e];if(a!==Ul[e]){const d=a.apply(t,i);return c?ve(d):d}let l=n;o!==t&&(c?l=function(d,p){return n.call(this,ve(d),p,t)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,t)}));const u=a.call(o,l,r);return c&&s?s(u):u}function Ri(t,e,n,r){const s=Xs(t);let i=n;return s!==t&&(Ue(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,ve(c),a,t)}),s[e](i,...r)}function Xr(t,e,n){const r=G(t);pe(r,"iterate",xn);const s=r[e](...n);return(s===-1||s===!1)&&ei(n[0])?(n[0]=G(n[0]),r[e](...n)):s}function mn(t,e,n=[]){Ct(),Gs();const r=G(t)[e].apply(t,n);return Js(),At(),r}const Fl=js("__proto__,__v_isRef,__isVue"),ga=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tt));function $l(t){Tt(t)||(t=String(t));const e=G(this);return pe(e,"has",t),e.hasOwnProperty(t)}class ma{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Jl:ba:i?ya:va).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=H(e);if(!s){let a;if(o&&(a=Ml[n]))return a;if(n==="hasOwnProperty")return $l}const c=Reflect.get(e,n,le(e)?e:r);return(Tt(n)?ga.has(n):Fl(n))||(s||pe(e,"get",n),i)?c:le(c)?o&&Ks(n)?c:c.value:ae(c)?s?wa(c):Kn(c):c}}class _a extends ma{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=jt(i);if(!Ue(r)&&!jt(r)&&(i=G(i),r=G(r)),!H(e)&&le(i)&&!le(r))return a?!1:(i.value=r,!0)}const o=H(e)&&Ks(n)?Number(n)<e.length:X(e,n),c=Reflect.set(e,n,r,le(e)?e:s);return e===G(s)&&(o?Se(r,i)&&nt(e,"set",n,r):nt(e,"add",n,r)),c}deleteProperty(e,n){const r=X(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&nt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tt(n)||!ga.has(n))&&pe(e,"has",n),r}ownKeys(e){return pe(e,"iterate",H(e)?"length":$t),Reflect.ownKeys(e)}}class Hl extends ma{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Bl=new _a,jl=new Hl,Vl=new _a(!0);const ys=t=>t,nr=t=>Reflect.getPrototypeOf(t);function Wl(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=nn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?ys:e?bs:ve;return!e&&pe(i,"iterate",a?vs:$t),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:c?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function rr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Kl(t,e){const n={get(s){const i=this.__v_raw,o=G(i),c=G(s);t||(Se(s,c)&&pe(o,"get",s),pe(o,"get",c));const{has:a}=nr(o),l=e?ys:t?bs:ve;if(a.call(o,s))return l(i.get(s));if(a.call(o,c))return l(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pe(G(s),"iterate",$t),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=G(i),c=G(s);return t||(Se(s,c)&&pe(o,"has",s),pe(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,a=G(c),l=e?ys:t?bs:ve;return!t&&pe(a,"iterate",$t),c.forEach((u,d)=>s.call(i,l(u),l(d),o))}};return de(n,t?{add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear")}:{add(s){!e&&!Ue(s)&&!jt(s)&&(s=G(s));const i=G(this);return nr(i).has.call(i,s)||(i.add(s),nt(i,"add",s,s)),this},set(s,i){!e&&!Ue(i)&&!jt(i)&&(i=G(i));const o=G(this),{has:c,get:a}=nr(o);let l=c.call(o,s);l||(s=G(s),l=c.call(o,s));const u=a.call(o,s);return o.set(s,i),l?Se(i,u)&&nt(o,"set",s,i):nt(o,"add",s,i),this},delete(s){const i=G(this),{has:o,get:c}=nr(i);let a=o.call(i,s);a||(s=G(s),a=o.call(i,s)),c&&c.call(i,s);const l=i.delete(s);return a&&nt(i,"delete",s,void 0),l},clear(){const s=G(this),i=s.size!==0,o=s.clear();return i&&nt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Wl(s,t,e)}),n}function Qs(t,e){const n=Kl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const zl={get:Qs(!1,!1)},ql={get:Qs(!1,!0)},Gl={get:Qs(!0,!1)};const va=new WeakMap,ya=new WeakMap,ba=new WeakMap,Jl=new WeakMap;function Yl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xl(t){return t.__v_skip||!Object.isExtensible(t)?0:Yl(wl(t))}function Kn(t){return jt(t)?t:Zs(t,!1,Bl,zl,va)}function Ea(t){return Zs(t,!1,Vl,ql,ya)}function wa(t){return Zs(t,!0,jl,Gl,ba)}function Zs(t,e,n,r,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Xl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Ht(t){return jt(t)?Ht(t.__v_raw):!!(t&&t.__v_isReactive)}function jt(t){return!!(t&&t.__v_isReadonly)}function Ue(t){return!!(t&&t.__v_isShallow)}function ei(t){return t?!!t.__v_raw:!1}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function ti(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&ea(t,"__v_skip",!0),t}const ve=t=>ae(t)?Kn(t):t,bs=t=>ae(t)?wa(t):t;function le(t){return t?t.__v_isRef===!0:!1}function ni(t){return Ia(t,!1)}function Ql(t){return Ia(t,!0)}function Ia(t,e){return le(t)?t:new Zl(t,e)}class Zl{constructor(e,n){this.dep=new xr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:G(e),this._value=n?e:ve(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ue(e)||jt(e);e=r?e:G(e),Se(e,n)&&(this._rawValue=e,this._value=r?e:ve(e),this.dep.trigger())}}function rn(t){return le(t)?t.value:t}const eu={get:(t,e,n)=>e==="__v_raw"?t:rn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Sa(t){return Ht(t)?t:new Proxy(t,eu)}class tu{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new xr,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function nu(t){return new tu(t)}function ru(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=iu(t,n);return e}class su{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xl(G(this._object),this._key)}}function iu(t,e,n){const r=t[e];return le(r)?r:new su(t,e,n)}class ou{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ln-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return la(this,!0),!0}get value(){const e=this.dep.track();return da(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function au(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new ou(r,s,n)}const sr={},gr=new WeakMap;let Mt;function cu(t,e=!1,n=Mt){if(n){let r=gr.get(n);r||gr.set(n,r=[]),r.push(t)}}function lu(t,e,n=J){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=O=>s?O:Ue(O)||s===!1||s===0?rt(O,1):rt(O);let u,d,p,g,w=!1,T=!1;if(le(t)?(d=()=>t.value,w=Ue(t)):Ht(t)?(d=()=>l(t),w=!0):H(t)?(T=!0,w=t.some(O=>Ht(O)||Ue(O)),d=()=>t.map(O=>{if(le(O))return O.value;if(Ht(O))return l(O);if(B(O))return a?a(O,2):O()})):B(t)?e?d=a?()=>a(t,2):t:d=()=>{if(p){Ct();try{p()}finally{At()}}const O=Mt;Mt=u;try{return a?a(t,3,[g]):t(g)}finally{Mt=O}}:d=qe,e&&s){const O=d,j=s===!0?1/0:s;d=()=>rt(O(),j)}const F=oa(),L=()=>{u.stop(),F&&Ws(F.effects,u)};if(i&&e){const O=e;e=(...j)=>{O(...j),L()}}let k=T?new Array(t.length).fill(sr):sr;const N=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const j=u.run();if(s||w||(T?j.some((ce,q)=>Se(ce,k[q])):Se(j,k))){p&&p();const ce=Mt;Mt=u;try{const q=[j,k===sr?void 0:T&&k[0]===sr?[]:k,g];a?a(e,3,q):e(...q),k=j}finally{Mt=ce}}}else u.run()};return c&&c(N),u=new aa(d),u.scheduler=o?()=>o(N,!1):N,g=O=>cu(O,!1,u),p=u.onStop=()=>{const O=gr.get(u);if(O){if(a)a(O,4);else for(const j of O)j();gr.delete(u)}},e?r?N(!0):k=u.run():o?o(N.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function rt(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,le(t))rt(t.value,e,n);else if(H(t))for(let r=0;r<t.length;r++)rt(t[r],e,n);else if(Yo(t)||nn(t))t.forEach(r=>{rt(r,e,n)});else if(Zo(t)){for(const r in t)rt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&rt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zn(t,e,n,r){try{return r?t(...r):t()}catch(s){Mr(s,e,n)}}function Ye(t,e,n,r){if(B(t)){const s=zn(t,e,n,r);return s&&Xo(s)&&s.catch(i=>{Mr(i,e,n)}),s}if(H(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ye(t[i],e,n,r));return s}}function Mr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||J;if(e){let c=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,a,l)===!1)return}c=c.parent}if(i){Ct(),zn(i,null,10,[t,a,l]),At();return}}uu(t,n,s,r,o)}function uu(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const ye=[];let We=-1;const sn=[];let mt=null,Xt=0;const Ta=Promise.resolve();let mr=null;function ri(t){const e=mr||Ta;return t?e.then(this?t.bind(this):t):e}function fu(t){let e=We+1,n=ye.length;for(;e<n;){const r=e+n>>>1,s=ye[r],i=Mn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function si(t){if(!(t.flags&1)){const e=Mn(t),n=ye[ye.length-1];!n||!(t.flags&2)&&e>=Mn(n)?ye.push(t):ye.splice(fu(e),0,t),t.flags|=1,Ra()}}function Ra(){mr||(mr=Ta.then(Aa))}function du(t){H(t)?sn.push(...t):mt&&t.id===-1?mt.splice(Xt+1,0,t):t.flags&1||(sn.push(t),t.flags|=1),Ra()}function Ci(t,e,n=We+1){for(;n<ye.length;n++){const r=ye[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ye.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ca(t){if(sn.length){const e=[...new Set(sn)].sort((n,r)=>Mn(n)-Mn(r));if(sn.length=0,mt){mt.push(...e);return}for(mt=e,Xt=0;Xt<mt.length;Xt++){const n=mt[Xt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mt=null,Xt=0}}const Mn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Aa(t){try{for(We=0;We<ye.length;We++){const e=ye[We];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;We<ye.length;We++){const e=ye[We];e&&(e.flags&=-2)}We=-1,ye.length=0,Ca(),mr=null,(ye.length||sn.length)&&Aa()}}let be=null,Pa=null;function _r(t){const e=be;return be=t,Pa=t&&t.type.__scopeId||null,e}function hu(t,e=be,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mi(-1);const i=_r(e);let o;try{o=t(...s)}finally{_r(i),r._d&&Mi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function l_(t,e){if(be===null)return t;const n=Hr(be),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=J]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&rt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Lt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Ct(),Ye(a,n,8,[t.el,c,t,e]),At())}}const pu=Symbol("_vte"),gu=t=>t.__isTeleport;function ii(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ii(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Oa(t,e){return B(t)?de({name:t.name},e,{setup:t}):t}function ka(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Es(t,e,n,r,s=!1){if(H(t)){t.forEach((w,T)=>Es(w,e&&(H(e)?e[T]:e),n,r,s));return}if(Rn(r)&&!s)return;const i=r.shapeFlag&4?Hr(r.component):r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===J?c.refs={}:c.refs,d=c.setupState,p=G(d),g=d===J?()=>!1:w=>X(p,w);if(l!=null&&l!==a&&(ue(l)?(u[l]=null,g(l)&&(d[l]=null)):le(l)&&(l.value=null)),B(a))zn(a,c,12,[o,u]);else{const w=ue(a),T=le(a);if(w||T){const F=()=>{if(t.f){const L=w?g(a)?d[a]:u[a]:a.value;s?H(L)&&Ws(L,i):H(L)?L.includes(i)||L.push(i):w?(u[a]=[i],g(a)&&(d[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else w?(u[a]=o,g(a)&&(d[a]=o)):T&&(a.value=o,t.k&&(u[t.k]=o))};o?(F.id=-1,Oe(F,n)):F()}}}Lr().requestIdleCallback;Lr().cancelIdleCallback;const Rn=t=>!!t.type.__asyncLoader,Na=t=>t.type.__isKeepAlive;function mu(t,e){Da(t,"a",e)}function _u(t,e){Da(t,"da",e)}function Da(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ur(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Na(s.parent.vnode)&&vu(r,e,n,s),s=s.parent}}function vu(t,e,n,r){const s=Ur(e,t,r,!0);xa(()=>{Ws(r[e],s)},n)}function Ur(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ct();const c=qn(n),a=Ye(e,n,t,o);return c(),At(),a});return r?s.unshift(i):s.push(i),i}}const ut=t=>(e,n=fe)=>{(!Fn||t==="sp")&&Ur(t,(...r)=>e(...r),n)},yu=ut("bm"),La=ut("m"),bu=ut("bu"),Eu=ut("u"),wu=ut("bum"),xa=ut("um"),Iu=ut("sp"),Su=ut("rtg"),Tu=ut("rtc");function Ru(t,e=fe){Ur("ec",t,e)}const Cu="components";function Au(t,e){return Ou(Cu,t,!0,e)||t}const Pu=Symbol.for("v-ndc");function Ou(t,e,n=!0,r=!1){const s=be||fe;if(s){const i=s.type;{const c=Ef(i,!1);if(c&&(c===e||c===De(e)||c===Dr(De(e))))return i}const o=Ai(s[t]||i[t],e)||Ai(s.appContext[t],e);return!o&&r?i:o}}function Ai(t,e){return t&&(t[e]||t[De(e)]||t[Dr(De(e))])}const ws=t=>t?rc(t)?Hr(t):ws(t.parent):null,Cn=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ws(t.parent),$root:t=>ws(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>oi(t),$forceUpdate:t=>t.f||(t.f=()=>{si(t.update)}),$nextTick:t=>t.n||(t.n=ri.bind(t.proxy)),$watch:t=>Zu.bind(t)}),Qr=(t,e)=>t!==J&&!t.__isScriptSetup&&X(t,e),ku={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Qr(r,e))return o[e]=1,r[e];if(s!==J&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==J&&X(n,e))return o[e]=4,n[e];Is&&(o[e]=0)}}const u=Cn[e];let d,p;if(u)return e==="$attrs"&&pe(t.attrs,"get",""),u(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==J&&X(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,X(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Qr(s,e)?(s[e]=n,!0):r!==J&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==J&&X(t,o)||Qr(e,o)||(c=i[0])&&X(c,o)||X(r,o)||X(Cn,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pi(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Is=!0;function Nu(t){const e=oi(t),n=t.proxy,r=t.ctx;Is=!1,e.beforeCreate&&Oi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:w,activated:T,deactivated:F,beforeDestroy:L,beforeUnmount:k,destroyed:N,unmounted:O,render:j,renderTracked:ce,renderTriggered:q,errorCaptured:K,serverPrefetch:W,expose:se,inheritAttrs:ge,components:Re,directives:we,filters:Dt}=e;if(l&&Du(l,r,null),o)for(const V in o){const Y=o[V];B(Y)&&(r[V]=Y.bind(n))}if(s){const V=s.call(n,n);ae(V)&&(t.data=Kn(V))}if(Is=!0,i)for(const V in i){const Y=i[V],Xe=B(Y)?Y.bind(n,n):B(Y.get)?Y.get.bind(n,n):qe,dt=!B(Y)&&B(Y.set)?Y.set.bind(n):qe,Be=ke({get:Xe,set:dt});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Be.value,set:Ie=>Be.value=Ie})}if(c)for(const V in c)Ma(c[V],r,n,V);if(a){const V=B(a)?a.call(n):a;Reflect.ownKeys(V).forEach(Y=>{ar(Y,V[Y])})}u&&Oi(u,t,"c");function ie(V,Y){H(Y)?Y.forEach(Xe=>V(Xe.bind(n))):Y&&V(Y.bind(n))}if(ie(yu,d),ie(La,p),ie(bu,g),ie(Eu,w),ie(mu,T),ie(_u,F),ie(Ru,K),ie(Tu,ce),ie(Su,q),ie(wu,k),ie(xa,O),ie(Iu,W),H(se))if(se.length){const V=t.exposed||(t.exposed={});se.forEach(Y=>{Object.defineProperty(V,Y,{get:()=>n[Y],set:Xe=>n[Y]=Xe})})}else t.exposed||(t.exposed={});j&&t.render===qe&&(t.render=j),ge!=null&&(t.inheritAttrs=ge),Re&&(t.components=Re),we&&(t.directives=we),W&&ka(t)}function Du(t,e,n=qe){H(t)&&(t=Ss(t));for(const r in t){const s=t[r];let i;ae(s)?"default"in s?i=Fe(s.from||r,s.default,!0):i=Fe(s.from||r):i=Fe(s),le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Oi(t,e,n){Ye(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ma(t,e,n,r){let s=r.includes(".")?Ja(n,r):()=>n[r];if(ue(t)){const i=e[t];B(i)&&An(s,i)}else if(B(t))An(s,t.bind(n));else if(ae(t))if(H(t))t.forEach(i=>Ma(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&An(s,i,t)}}function oi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>vr(a,l,o,!0)),vr(a,e,o)),ae(e)&&i.set(e,a),a}function vr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&vr(t,i,n,!0),s&&s.forEach(o=>vr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Lu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Lu={data:ki,props:Ni,emits:Ni,methods:bn,computed:bn,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:bn,directives:bn,watch:Mu,provide:ki,inject:xu};function ki(t,e){return e?t?function(){return de(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function xu(t,e){return bn(Ss(t),Ss(e))}function Ss(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?de(Object.create(null),t,e):e}function Ni(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:de(Object.create(null),Pi(t),Pi(e??{})):e}function Mu(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const r in e)n[r]=me(t[r],e[r]);return n}function Ua(){return{app:null,config:{isNativeTag:bl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uu=0;function Fu(t,e){return function(r,s=null){B(r)||(r=de({},r)),s!=null&&!ae(s)&&(s=null);const i=Ua(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:Uu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:If,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(l,...d)):B(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!a){const g=l._ceVNode||Te(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,u):t(g,u,p),a=!0,l._container=u,u.__vue_app__=l,Hr(g.component)}},onUnmount(u){c.push(u)},unmount(){a&&(Ye(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Bt;Bt=l;try{return u()}finally{Bt=d}}};return l}}let Bt=null;function ar(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Fe(t,e,n=!1){const r=fe||be;if(r||Bt){const s=Bt?Bt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function $u(){return!!(fe||be||Bt)}const Fa={},$a=()=>Object.create(Fa),Ha=t=>Object.getPrototypeOf(t)===Fa;function Hu(t,e,n,r=!1){const s={},i=$a();t.propsDefaults=Object.create(null),Ba(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ea(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Bu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=G(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Fr(t.emitsOptions,p))continue;const g=e[p];if(a)if(X(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const w=De(p);s[w]=Ts(a,c,w,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Ba(t,e,s,i)&&(l=!0);let u;for(const d in c)(!e||!X(e,d)&&((u=Rt(d))===d||!X(e,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Ts(a,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!X(e,d))&&(delete i[d],l=!0)}l&&nt(t.attrs,"set","")}function Ba(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(In(a))continue;const l=e[a];let u;s&&X(s,u=De(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:Fr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=G(n),l=c||J;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Ts(s,a,d,l[d],t,!X(l,d))}}return o}function Ts(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=X(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=qn(s);r=l[n]=a.call(null,e),u()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Rt(n))&&(r=!0))}return r}const ju=new WeakMap;function ja(t,e,n=!1){const r=n?ju:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!B(t)){const u=d=>{a=!0;const[p,g]=ja(d,e,!0);de(o,p),g&&c.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return ae(t)&&r.set(t,tn),tn;if(H(i))for(let u=0;u<i.length;u++){const d=De(i[u]);Di(d)&&(o[d]=J)}else if(i)for(const u in i){const d=De(u);if(Di(d)){const p=i[u],g=o[d]=H(p)||B(p)?{type:p}:de({},p),w=g.type;let T=!1,F=!0;if(H(w))for(let L=0;L<w.length;++L){const k=w[L],N=B(k)&&k.name;if(N==="Boolean"){T=!0;break}else N==="String"&&(F=!1)}else T=B(w)&&w.name==="Boolean";g[0]=T,g[1]=F,(T||X(g,"default"))&&c.push(d)}}const l=[o,c];return ae(t)&&r.set(t,l),l}function Di(t){return t[0]!=="$"&&!In(t)}const Va=t=>t[0]==="_"||t==="$stable",ai=t=>H(t)?t.map(Ke):[Ke(t)],Vu=(t,e,n)=>{if(e._n)return e;const r=hu((...s)=>ai(e(...s)),n);return r._c=!1,r},Wa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Va(s))continue;const i=t[s];if(B(i))e[s]=Vu(s,i,r);else if(i!=null){const o=ai(i);e[s]=()=>o}}},Ka=(t,e)=>{const n=ai(e);t.slots.default=()=>n},za=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Wu=(t,e,n)=>{const r=t.slots=$a();if(t.vnode.shapeFlag&32){const s=e._;s?(za(r,e,n),n&&ea(r,"_",s,!0)):Wa(e,r)}else e&&Ka(t,e)},Ku=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=J;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:za(s,e,n):(i=!e.$stable,Wa(e,s)),o=e}else e&&(Ka(t,e),o={default:1});if(i)for(const c in s)!Va(c)&&o[c]==null&&delete s[c]},Oe=of;function zu(t){return qu(t)}function qu(t,e){const n=Lr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=qe,insertStaticContent:w}=t,T=(f,h,m,y=null,_=null,b=null,R=void 0,S=null,I=!!h.dynamicChildren)=>{if(f===h)return;f&&!_n(f,h)&&(y=v(f),Ie(f,_,b,!0),f=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:E,ref:M,shapeFlag:A}=h;switch(E){case $r:F(f,h,m,y);break;case Vt:L(f,h,m,y);break;case ts:f==null&&k(h,m,y,R);break;case tt:Re(f,h,m,y,_,b,R,S,I);break;default:A&1?j(f,h,m,y,_,b,R,S,I):A&6?we(f,h,m,y,_,b,R,S,I):(A&64||A&128)&&E.process(f,h,m,y,_,b,R,S,I,D)}M!=null&&_&&Es(M,f&&f.ref,b,h||f,!h)},F=(f,h,m,y)=>{if(f==null)r(h.el=c(h.children),m,y);else{const _=h.el=f.el;h.children!==f.children&&l(_,h.children)}},L=(f,h,m,y)=>{f==null?r(h.el=a(h.children||""),m,y):h.el=f.el},k=(f,h,m,y)=>{[f.el,f.anchor]=w(f.children,h,m,y,f.el,f.anchor)},N=({el:f,anchor:h},m,y)=>{let _;for(;f&&f!==h;)_=p(f),r(f,m,y),f=_;r(h,m,y)},O=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),s(f),f=m;s(h)},j=(f,h,m,y,_,b,R,S,I)=>{h.type==="svg"?R="svg":h.type==="math"&&(R="mathml"),f==null?ce(h,m,y,_,b,R,S,I):W(f,h,_,b,R,S,I)},ce=(f,h,m,y,_,b,R,S)=>{let I,E;const{props:M,shapeFlag:A,transition:x,dirs:$}=f;if(I=f.el=o(f.type,b,M&&M.is,M),A&8?u(I,f.children):A&16&&K(f.children,I,null,y,_,Zr(f,b),R,S),$&&Lt(f,null,y,"created"),q(I,f,f.scopeId,R,y),M){for(const ne in M)ne!=="value"&&!In(ne)&&i(I,ne,null,M[ne],b,y);"value"in M&&i(I,"value",null,M.value,b),(E=M.onVnodeBeforeMount)&&Ve(E,y,f)}$&&Lt(f,null,y,"beforeMount");const z=Gu(_,x);z&&x.beforeEnter(I),r(I,h,m),((E=M&&M.onVnodeMounted)||z||$)&&Oe(()=>{E&&Ve(E,y,f),z&&x.enter(I),$&&Lt(f,null,y,"mounted")},_)},q=(f,h,m,y,_)=>{if(m&&g(f,m),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(_){let b=_.subTree;if(h===b||Qa(b.type)&&(b.ssContent===h||b.ssFallback===h)){const R=_.vnode;q(f,R,R.scopeId,R.slotScopeIds,_.parent)}}},K=(f,h,m,y,_,b,R,S,I=0)=>{for(let E=I;E<f.length;E++){const M=f[E]=S?_t(f[E]):Ke(f[E]);T(null,M,h,m,y,_,b,R,S)}},W=(f,h,m,y,_,b,R)=>{const S=h.el=f.el;let{patchFlag:I,dynamicChildren:E,dirs:M}=h;I|=f.patchFlag&16;const A=f.props||J,x=h.props||J;let $;if(m&&xt(m,!1),($=x.onVnodeBeforeUpdate)&&Ve($,m,h,f),M&&Lt(h,f,m,"beforeUpdate"),m&&xt(m,!0),(A.innerHTML&&x.innerHTML==null||A.textContent&&x.textContent==null)&&u(S,""),E?se(f.dynamicChildren,E,S,m,y,Zr(h,_),b):R||Y(f,h,S,null,m,y,Zr(h,_),b,!1),I>0){if(I&16)ge(S,A,x,m,_);else if(I&2&&A.class!==x.class&&i(S,"class",null,x.class,_),I&4&&i(S,"style",A.style,x.style,_),I&8){const z=h.dynamicProps;for(let ne=0;ne<z.length;ne++){const Z=z[ne],Ce=A[Z],he=x[Z];(he!==Ce||Z==="value")&&i(S,Z,Ce,he,_,m)}}I&1&&f.children!==h.children&&u(S,h.children)}else!R&&E==null&&ge(S,A,x,m,_);(($=x.onVnodeUpdated)||M)&&Oe(()=>{$&&Ve($,m,h,f),M&&Lt(h,f,m,"updated")},y)},se=(f,h,m,y,_,b,R)=>{for(let S=0;S<h.length;S++){const I=f[S],E=h[S],M=I.el&&(I.type===tt||!_n(I,E)||I.shapeFlag&70)?d(I.el):m;T(I,E,M,null,y,_,b,R,!0)}},ge=(f,h,m,y,_)=>{if(h!==m){if(h!==J)for(const b in h)!In(b)&&!(b in m)&&i(f,b,h[b],null,_,y);for(const b in m){if(In(b))continue;const R=m[b],S=h[b];R!==S&&b!=="value"&&i(f,b,S,R,_,y)}"value"in m&&i(f,"value",h.value,m.value,_)}},Re=(f,h,m,y,_,b,R,S,I)=>{const E=h.el=f?f.el:c(""),M=h.anchor=f?f.anchor:c("");let{patchFlag:A,dynamicChildren:x,slotScopeIds:$}=h;$&&(S=S?S.concat($):$),f==null?(r(E,m,y),r(M,m,y),K(h.children||[],m,M,_,b,R,S,I)):A>0&&A&64&&x&&f.dynamicChildren?(se(f.dynamicChildren,x,m,_,b,R,S),(h.key!=null||_&&h===_.subTree)&&qa(f,h,!0)):Y(f,h,m,M,_,b,R,S,I)},we=(f,h,m,y,_,b,R,S,I)=>{h.slotScopeIds=S,f==null?h.shapeFlag&512?_.ctx.activate(h,m,y,R,I):Dt(h,m,y,_,b,R,I):ft(f,h,I)},Dt=(f,h,m,y,_,b,R)=>{const S=f.component=gf(f,y,_);if(Na(f)&&(S.ctx.renderer=D),_f(S,!1,R),S.asyncDep){if(_&&_.registerDep(S,ie,R),!f.el){const I=S.subTree=Te(Vt);L(null,I,h,m)}}else ie(S,f,h,m,_,b,R)},ft=(f,h,m)=>{const y=h.component=f.component;if(rf(f,h,m))if(y.asyncDep&&!y.asyncResolved){V(y,h,m);return}else y.next=h,y.update();else h.el=f.el,y.vnode=h},ie=(f,h,m,y,_,b,R)=>{const S=()=>{if(f.isMounted){let{next:A,bu:x,u:$,parent:z,vnode:ne}=f;{const Ae=Ga(f);if(Ae){A&&(A.el=ne.el,V(f,A,R)),Ae.asyncDep.then(()=>{f.isUnmounted||S()});return}}let Z=A,Ce;xt(f,!1),A?(A.el=ne.el,V(f,A,R)):A=ne,x&&or(x),(Ce=A.props&&A.props.onVnodeBeforeUpdate)&&Ve(Ce,z,A,ne),xt(f,!0);const he=es(f),xe=f.subTree;f.subTree=he,T(xe,he,d(xe.el),v(xe),f,_,b),A.el=he.el,Z===null&&sf(f,he.el),$&&Oe($,_),(Ce=A.props&&A.props.onVnodeUpdated)&&Oe(()=>Ve(Ce,z,A,ne),_)}else{let A;const{el:x,props:$}=h,{bm:z,m:ne,parent:Z,root:Ce,type:he}=f,xe=Rn(h);if(xt(f,!1),z&&or(z),!xe&&(A=$&&$.onVnodeBeforeMount)&&Ve(A,Z,h),xt(f,!0),x&&oe){const Ae=()=>{f.subTree=es(f),oe(x,f.subTree,f,_,null)};xe&&he.__asyncHydrate?he.__asyncHydrate(x,f,Ae):Ae()}else{Ce.ce&&Ce.ce._injectChildStyle(he);const Ae=f.subTree=es(f);T(null,Ae,m,y,f,_,b),h.el=Ae.el}if(ne&&Oe(ne,_),!xe&&(A=$&&$.onVnodeMounted)){const Ae=h;Oe(()=>Ve(A,Z,Ae),_)}(h.shapeFlag&256||Z&&Rn(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&Oe(f.a,_),f.isMounted=!0,h=m=y=null}};f.scope.on();const I=f.effect=new aa(S);f.scope.off();const E=f.update=I.run.bind(I),M=f.job=I.runIfDirty.bind(I);M.i=f,M.id=f.uid,I.scheduler=()=>si(M),xt(f,!0),E()},V=(f,h,m)=>{h.component=f;const y=f.vnode.props;f.vnode=h,f.next=null,Bu(f,h.props,y,m),Ku(f,h.children,m),Ct(),Ci(f),At()},Y=(f,h,m,y,_,b,R,S,I=!1)=>{const E=f&&f.children,M=f?f.shapeFlag:0,A=h.children,{patchFlag:x,shapeFlag:$}=h;if(x>0){if(x&128){dt(E,A,m,y,_,b,R,S,I);return}else if(x&256){Xe(E,A,m,y,_,b,R,S,I);return}}$&8?(M&16&&Le(E,_,b),A!==E&&u(m,A)):M&16?$&16?dt(E,A,m,y,_,b,R,S,I):Le(E,_,b,!0):(M&8&&u(m,""),$&16&&K(A,m,y,_,b,R,S,I))},Xe=(f,h,m,y,_,b,R,S,I)=>{f=f||tn,h=h||tn;const E=f.length,M=h.length,A=Math.min(E,M);let x;for(x=0;x<A;x++){const $=h[x]=I?_t(h[x]):Ke(h[x]);T(f[x],$,m,null,_,b,R,S,I)}E>M?Le(f,_,b,!0,!1,A):K(h,m,y,_,b,R,S,I,A)},dt=(f,h,m,y,_,b,R,S,I)=>{let E=0;const M=h.length;let A=f.length-1,x=M-1;for(;E<=A&&E<=x;){const $=f[E],z=h[E]=I?_t(h[E]):Ke(h[E]);if(_n($,z))T($,z,m,null,_,b,R,S,I);else break;E++}for(;E<=A&&E<=x;){const $=f[A],z=h[x]=I?_t(h[x]):Ke(h[x]);if(_n($,z))T($,z,m,null,_,b,R,S,I);else break;A--,x--}if(E>A){if(E<=x){const $=x+1,z=$<M?h[$].el:y;for(;E<=x;)T(null,h[E]=I?_t(h[E]):Ke(h[E]),m,z,_,b,R,S,I),E++}}else if(E>x)for(;E<=A;)Ie(f[E],_,b,!0),E++;else{const $=E,z=E,ne=new Map;for(E=z;E<=x;E++){const Pe=h[E]=I?_t(h[E]):Ke(h[E]);Pe.key!=null&&ne.set(Pe.key,E)}let Z,Ce=0;const he=x-z+1;let xe=!1,Ae=0;const gn=new Array(he);for(E=0;E<he;E++)gn[E]=0;for(E=$;E<=A;E++){const Pe=f[E];if(Ce>=he){Ie(Pe,_,b,!0);continue}let je;if(Pe.key!=null)je=ne.get(Pe.key);else for(Z=z;Z<=x;Z++)if(gn[Z-z]===0&&_n(Pe,h[Z])){je=Z;break}je===void 0?Ie(Pe,_,b,!0):(gn[je-z]=E+1,je>=Ae?Ae=je:xe=!0,T(Pe,h[je],m,null,_,b,R,S,I),Ce++)}const wi=xe?Ju(gn):tn;for(Z=wi.length-1,E=he-1;E>=0;E--){const Pe=z+E,je=h[Pe],Ii=Pe+1<M?h[Pe+1].el:y;gn[E]===0?T(null,je,m,Ii,_,b,R,S,I):xe&&(Z<0||E!==wi[Z]?Be(je,m,Ii,2):Z--)}}},Be=(f,h,m,y,_=null)=>{const{el:b,type:R,transition:S,children:I,shapeFlag:E}=f;if(E&6){Be(f.component.subTree,h,m,y);return}if(E&128){f.suspense.move(h,m,y);return}if(E&64){R.move(f,h,m,D);return}if(R===tt){r(b,h,m);for(let A=0;A<I.length;A++)Be(I[A],h,m,y);r(f.anchor,h,m);return}if(R===ts){N(f,h,m);return}if(y!==2&&E&1&&S)if(y===0)S.beforeEnter(b),r(b,h,m),Oe(()=>S.enter(b),_);else{const{leave:A,delayLeave:x,afterLeave:$}=S,z=()=>r(b,h,m),ne=()=>{A(b,()=>{z(),$&&$()})};x?x(b,z,ne):ne()}else r(b,h,m)},Ie=(f,h,m,y=!1,_=!1)=>{const{type:b,props:R,ref:S,children:I,dynamicChildren:E,shapeFlag:M,patchFlag:A,dirs:x,cacheIndex:$}=f;if(A===-2&&(_=!1),S!=null&&Es(S,null,m,f,!0),$!=null&&(h.renderCache[$]=void 0),M&256){h.ctx.deactivate(f);return}const z=M&1&&x,ne=!Rn(f);let Z;if(ne&&(Z=R&&R.onVnodeBeforeUnmount)&&Ve(Z,h,f),M&6)tr(f.component,m,y);else{if(M&128){f.suspense.unmount(m,y);return}z&&Lt(f,null,h,"beforeUnmount"),M&64?f.type.remove(f,h,m,D,y):E&&!E.hasOnce&&(b!==tt||A>0&&A&64)?Le(E,h,m,!1,!0):(b===tt&&A&384||!_&&M&16)&&Le(I,h,m),y&&qt(f)}(ne&&(Z=R&&R.onVnodeUnmounted)||z)&&Oe(()=>{Z&&Ve(Z,h,f),z&&Lt(f,null,h,"unmounted")},m)},qt=f=>{const{type:h,el:m,anchor:y,transition:_}=f;if(h===tt){Gt(m,y);return}if(h===ts){O(f);return}const b=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:S}=_,I=()=>R(m,b);S?S(f.el,b,I):I()}else b()},Gt=(f,h)=>{let m;for(;f!==h;)m=p(f),s(f),f=m;s(h)},tr=(f,h,m)=>{const{bum:y,scope:_,job:b,subTree:R,um:S,m:I,a:E}=f;Li(I),Li(E),y&&or(y),_.stop(),b&&(b.flags|=8,Ie(R,f,h,m)),S&&Oe(S,h),Oe(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Le=(f,h,m,y=!1,_=!1,b=0)=>{for(let R=b;R<f.length;R++)Ie(f[R],h,m,y,_)},v=f=>{if(f.shapeFlag&6)return v(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),m=h&&h[pu];return m?p(m):h};let P=!1;const C=(f,h,m)=>{f==null?h._vnode&&Ie(h._vnode,null,null,!0):T(h._vnode||null,f,h,null,null,null,m),h._vnode=f,P||(P=!0,Ci(),Ca(),P=!1)},D={p:T,um:Ie,m:Be,r:qt,mt:Dt,mc:K,pc:Y,pbc:se,n:v,o:t};let Q,oe;return{render:C,hydrate:Q,createApp:Fu(C,Q)}}function Zr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Gu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function qa(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=_t(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&qa(o,c)),c.type===$r&&(c.el=o.el)}}function Ju(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ga(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ga(e)}function Li(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Yu=Symbol.for("v-scx"),Xu=()=>Fe(Yu);function Qu(t,e){return ci(t,null,{flush:"sync"})}function An(t,e,n){return ci(t,e,n)}function ci(t,e,n=J){const{immediate:r,deep:s,flush:i,once:o}=n,c=de({},n),a=e&&r||!e&&i!=="post";let l;if(Fn){if(i==="sync"){const g=Xu();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=qe,g.resume=qe,g.pause=qe,g}}const u=fe;c.call=(g,w,T)=>Ye(g,u,w,T);let d=!1;i==="post"?c.scheduler=g=>{Oe(g,u&&u.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(g,w)=>{w?g():si(g)}),c.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=lu(t,e,c);return Fn&&(l?l.push(p):a&&p()),p}function Zu(t,e,n){const r=this.proxy,s=ue(t)?t.includes(".")?Ja(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=qn(this),c=ci(s,i.bind(r),n);return o(),c}function Ja(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function u_(t,e,n=J){const r=mf(),s=De(e),i=Rt(e),o=Ya(t,s),c=nu((a,l)=>{let u,d=J,p;return Qu(()=>{const g=t[s];Se(u,g)&&(u=g,l())}),{get(){return a(),n.get?n.get(u):u},set(g){const w=n.set?n.set(g):g;if(!Se(w,u)&&!(d!==J&&Se(g,d)))return;const T=r.vnode.props;T&&(e in T||s in T||i in T)&&(`onUpdate:${e}`in T||`onUpdate:${s}`in T||`onUpdate:${i}`in T)||(u=g,l()),r.emit(`update:${e}`,w),Se(g,w)&&Se(g,d)&&!Se(w,p)&&l(),d=g,p=w}}});return c[Symbol.iterator]=()=>{let a=0;return{next(){return a<2?{value:a++?o||J:c,done:!1}:{done:!0}}}},c}const Ya=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${Rt(e)}Modifiers`];function ef(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||J;let s=n;const i=e.startsWith("update:"),o=i&&Ya(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ue(u)?u.trim():u)),o.number&&(s=n.map(ms)));let c,a=r[c=qr(e)]||r[c=qr(De(e))];!a&&i&&(a=r[c=qr(Rt(e))]),a&&Ye(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ye(l,t,6,s)}}function Xa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!B(t)){const a=l=>{const u=Xa(l,e,!0);u&&(c=!0,de(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ae(t)&&r.set(t,null),null):(H(i)?i.forEach(a=>o[a]=null):de(o,i),ae(t)&&r.set(t,o),o)}function Fr(t,e){return!t||!Or(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Rt(e))||X(t,e))}function es(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:u,props:d,data:p,setupState:g,ctx:w,inheritAttrs:T}=t,F=_r(t);let L,k;try{if(n.shapeFlag&4){const O=s||r,j=O;L=Ke(l.call(j,O,u,d,g,p,w)),k=c}else{const O=e;L=Ke(O.length>1?O(d,{attrs:c,slots:o,emit:a}):O(d,null)),k=e.props?c:tf(c)}}catch(O){Pn.length=0,Mr(O,t,1),L=Te(Vt)}let N=L;if(k&&T!==!1){const O=Object.keys(k),{shapeFlag:j}=N;O.length&&j&7&&(i&&O.some(Vs)&&(k=nf(k,i)),N=un(N,k,!1,!0))}return n.dirs&&(N=un(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&ii(N,n.transition),L=N,_r(F),L}const tf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Or(n))&&((e||(e={}))[n]=t[n]);return e},nf=(t,e)=>{const n={};for(const r in t)(!Vs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function rf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?xi(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Fr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?xi(r,o,l):!0:!!o;return!1}function xi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Fr(n,i))return!0}return!1}function sf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Qa=t=>t.__isSuspense;function of(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):du(t)}const tt=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),ts=Symbol.for("v-stc"),Pn=[];let Ne=null;function yr(t=!1){Pn.push(Ne=t?null:[])}function af(){Pn.pop(),Ne=Pn[Pn.length-1]||null}let Un=1;function Mi(t){Un+=t,t<0&&Ne&&(Ne.hasOnce=!0)}function Za(t){return t.dynamicChildren=Un>0?Ne||tn:null,af(),Un>0&&Ne&&Ne.push(t),t}function ec(t,e,n,r,s,i){return Za(Ft(t,e,n,r,s,i,!0))}function tc(t,e,n,r,s){return Za(Te(t,e,n,r,s,!0))}function br(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const nc=({key:t})=>t??null,cr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||le(t)||B(t)?{i:be,r:t,k:e,f:!!n}:t:null);function Ft(t,e=null,n=null,r=0,s=null,i=t===tt?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nc(e),ref:e&&cr(e),scopeId:Pa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:be};return c?(li(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),Un>0&&!o&&Ne&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ne.push(a),a}const Te=cf;function cf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Pu)&&(t=Vt),br(t)){const c=un(t,e,!0);return n&&li(c,n),Un>0&&!i&&Ne&&(c.shapeFlag&6?Ne[Ne.indexOf(t)]=c:Ne.push(c)),c.patchFlag=-2,c}if(wf(t)&&(t=t.__vccOpts),e){e=lf(e);let{class:c,style:a}=e;c&&!ue(c)&&(e.class=qs(c)),ae(a)&&(ei(a)&&!H(a)&&(a=de({},a)),e.style=zs(a))}const o=ue(t)?1:Qa(t)?128:gu(t)?64:ae(t)?4:B(t)?2:0;return Ft(t,e,n,r,s,o,i,!0)}function lf(t){return t?ei(t)||Ha(t)?de({},t):t:null}function un(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?df(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&nc(l),ref:e&&e.ref?n&&i?H(i)?i.concat(cr(e)):[i,cr(e)]:cr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&ii(u,a.clone(u)),u}function uf(t=" ",e=0){return Te($r,null,t,e)}function ff(t="",e=!1){return e?(yr(),tc(Vt,null,t)):Te(Vt,null,t)}function Ke(t){return t==null||typeof t=="boolean"?Te(Vt):H(t)?Te(tt,null,t.slice()):br(t)?_t(t):Te($r,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function li(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),li(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ha(e)?e._ctx=be:s===3&&be&&(be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:be},n=32):(e=String(e),r&64?(n=16,e=[uf(e)]):n=8);t.children=e,t.shapeFlag|=n}function df(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=qs([e.class,r.class]));else if(s==="style")e.style=zs([e.style,r.style]);else if(Or(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ve(t,e,n,r=null){Ye(t,e,7,[n,r])}const hf=Ua();let pf=0;function gf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hf,i={uid:pf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ja(r,s),emitsOptions:Xa(r,s),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ef.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const mf=()=>fe||be;let Er,Rs;{const t=Lr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Er=e("__VUE_INSTANCE_SETTERS__",n=>fe=n),Rs=e("__VUE_SSR_SETTERS__",n=>Fn=n)}const qn=t=>{const e=fe;return Er(t),t.scope.on(),()=>{t.scope.off(),Er(e)}},Ui=()=>{fe&&fe.scope.off(),Er(null)};function rc(t){return t.vnode.shapeFlag&4}let Fn=!1;function _f(t,e=!1,n=!1){e&&Rs(e);const{props:r,children:s}=t.vnode,i=rc(t);Hu(t,r,i,e),Wu(t,s,n);const o=i?vf(t,e):void 0;return e&&Rs(!1),o}function vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ku);const{setup:r}=n;if(r){Ct();const s=t.setupContext=r.length>1?bf(t):null,i=qn(t),o=zn(r,t,0,[t.props,s]),c=Xo(o);if(At(),i(),(c||t.sp)&&!Rn(t)&&ka(t),c){if(o.then(Ui,Ui),e)return o.then(a=>{Fi(t,a,e)}).catch(a=>{Mr(a,t,0)});t.asyncDep=o}else Fi(t,o,e)}else sc(t,e)}function Fi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Sa(e)),sc(t,n)}let $i;function sc(t,e,n){const r=t.type;if(!t.render){if(!e&&$i&&!r.render){const s=r.template||oi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=de(de({isCustomElement:i,delimiters:c},o),a);r.render=$i(s,l)}}t.render=r.render||qe}{const s=qn(t);Ct();try{Nu(t)}finally{At(),s()}}}const yf={get(t,e){return pe(t,"get",""),t[e]}};function bf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yf),slots:t.slots,emit:t.emit,expose:e}}function Hr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sa(ti(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cn)return Cn[n](t)},has(e,n){return n in e||n in Cn}})):t.proxy}function Ef(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function wf(t){return B(t)&&"__vccOpts"in t}const ke=(t,e)=>au(t,e,Fn);function ic(t,e,n){const r=arguments.length;return r===2?ae(e)&&!H(e)?br(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&br(n)&&(n=[n]),Te(t,e,n))}const If="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cs;const Hi=typeof window<"u"&&window.trustedTypes;if(Hi)try{Cs=Hi.createPolicy("vue",{createHTML:t=>t})}catch{}const oc=Cs?t=>Cs.createHTML(t):t=>t,Sf="http://www.w3.org/2000/svg",Tf="http://www.w3.org/1998/Math/MathML",et=typeof document<"u"?document:null,Bi=et&&et.createElement("template"),Rf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?et.createElementNS(Sf,t):e==="mathml"?et.createElementNS(Tf,t):n?et.createElement(t,{is:n}):et.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>et.createTextNode(t),createComment:t=>et.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>et.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Bi.innerHTML=oc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Bi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cf=Symbol("_vtc");function Af(t,e,n){const r=t[Cf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ji=Symbol("_vod"),Pf=Symbol("_vsh"),Of=Symbol(""),kf=/(^|;)\s*display\s*:/;function Nf(t,e,n){const r=t.style,s=ue(n);let i=!1;if(n&&!s){if(e)if(ue(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&lr(r,c,"")}else for(const o in e)n[o]==null&&lr(r,o,"");for(const o in n)o==="display"&&(i=!0),lr(r,o,n[o])}else if(s){if(e!==n){const o=r[Of];o&&(n+=";"+o),r.cssText=n,i=kf.test(n)}}else e&&t.removeAttribute("style");ji in t&&(t[ji]=i?r.display:"",t[Pf]&&(r.display="none"))}const Vi=/\s*!important$/;function lr(t,e,n){if(H(n))n.forEach(r=>lr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Df(t,e);Vi.test(n)?t.setProperty(Rt(r),n.replace(Vi,""),"important"):t[r]=n}}const Wi=["Webkit","Moz","ms"],ns={};function Df(t,e){const n=ns[e];if(n)return n;let r=De(e);if(r!=="filter"&&r in t)return ns[e]=r;r=Dr(r);for(let s=0;s<Wi.length;s++){const i=Wi[s]+r;if(i in t)return ns[e]=i}return e}const Ki="http://www.w3.org/1999/xlink";function zi(t,e,n,r,s,i=Ol(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ki,e.slice(6,e.length)):t.setAttributeNS(Ki,e,n):n==null||i&&!ta(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tt(n)?String(n):n)}function qi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?oc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ta(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Qt(t,e,n,r){t.addEventListener(e,n,r)}function Lf(t,e,n,r){t.removeEventListener(e,n,r)}const Gi=Symbol("_vei");function xf(t,e,n,r,s=null){const i=t[Gi]||(t[Gi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Mf(e);if(r){const l=i[e]=$f(r,s);Qt(t,c,l,a)}else o&&(Lf(t,c,o,a),i[e]=void 0)}}const Ji=/(?:Once|Passive|Capture)$/;function Mf(t){let e;if(Ji.test(t)){e={};let r;for(;r=t.match(Ji);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rt(t.slice(2)),e]}let rs=0;const Uf=Promise.resolve(),Ff=()=>rs||(Uf.then(()=>rs=0),rs=Date.now());function $f(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ye(Hf(r,n.value),e,5,[r])};return n.value=t,n.attached=Ff(),n}function Hf(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Bf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Af(t,r,o):e==="style"?Nf(t,n,r):Or(e)?Vs(e)||xf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jf(t,e,r,o))?(qi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zi(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ue(r))?qi(t,De(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zi(t,e,r,o))};function jf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yi(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yi(e)&&ue(n)?!1:e in t}const Xi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>or(e,n):e};function Vf(t){t.target.composing=!0}function Qi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ss=Symbol("_assign"),f_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ss]=Xi(s);const i=r||s.props&&s.props.type==="number";Qt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ms(c)),t[ss](c)}),n&&Qt(t,"change",()=>{t.value=t.value.trim()}),e||(Qt(t,"compositionstart",Vf),Qt(t,"compositionend",Qi),Qt(t,"change",Qi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ss]=Xi(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?ms(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},Wf=de({patchProp:Bf},Rf);let Zi;function Kf(){return Zi||(Zi=zu(Wf))}const zf=(...t)=>{const e=Kf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Gf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gf(t){return ue(t)?document.querySelector(t):t}var eo={};/**
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
 */const ac=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,d=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(p=64)),r.push(n[u],n[d],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ac(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||d==null)throw new Yf;const p=i<<2|c>>4;if(r.push(p),l!==64){const g=c<<4&240|l>>2;if(r.push(g),d!==64){const w=l<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xf=function(t){const e=ac(t);return cc.encodeByteArray(e,!0)},lc=function(t){return Xf(t).replace(/\./g,"")},uc=function(t){try{return cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zf=()=>Qf().__FIREBASE_DEFAULTS__,ed=()=>{if(typeof process>"u"||typeof eo>"u")return;const t=eo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},td=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uc(t[1]);return e&&JSON.parse(e)},ui=()=>{try{return Zf()||ed()||td()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nd=t=>{var e,n;return(n=(e=ui())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fc=()=>{var t;return(t=ui())===null||t===void 0?void 0:t.config},dc=t=>{var e;return(e=ui())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function id(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function od(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ad(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cd(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ld(){try{return typeof indexedDB=="object"}catch{return!1}}function ud(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const fd="FirebaseError";class Pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fd,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?dd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Pt(s,c,r)}}function dd(t,e){return t.replace(hd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hd=/\{\$([^}]+)}/g;function pd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(to(i)&&to(o)){if(!wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function to(t){return t!==null&&typeof t=="object"}/**
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
 */function Jn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function En(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function wn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gd(t,e){const n=new md(t,e);return n.subscribe.bind(n)}class md{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_d(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=is),s.error===void 0&&(s.error=is),s.complete===void 0&&(s.complete=is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _d(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function is(){}/**
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
 */function Ot(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ut="[DEFAULT]";/**
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
 */class vd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bd(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yd(t){return t===Ut?void 0:t}function bd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ed{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const wd={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Id=te.INFO,Sd={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Td=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hc{constructor(e){this.name=e,this._logLevel=Id,this._logHandler=Td,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Rd=(t,e)=>e.some(n=>t instanceof n);let no,ro;function Cd(){return no||(no=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ad(){return ro||(ro=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pc=new WeakMap,As=new WeakMap,gc=new WeakMap,os=new WeakMap,fi=new WeakMap;function Pd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pc.set(n,t)}).catch(()=>{}),fi.set(e,t),e}function Od(t){if(As.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});As.set(t,e)}let Ps={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return As.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kd(t){Ps=t(Ps)}function Nd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(as(this),e,...n);return gc.set(r,e.sort?e.sort():[e]),It(r)}:Ad().includes(t)?function(...e){return t.apply(as(this),e),It(pc.get(this))}:function(...e){return It(t.apply(as(this),e))}}function Dd(t){return typeof t=="function"?Nd(t):(t instanceof IDBTransaction&&Od(t),Rd(t,Cd())?new Proxy(t,Ps):t)}function It(t){if(t instanceof IDBRequest)return Pd(t);if(os.has(t))return os.get(t);const e=Dd(t);return e!==t&&(os.set(t,e),fi.set(e,t)),e}const as=t=>fi.get(t);function Ld(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=It(o);return r&&o.addEventListener("upgradeneeded",a=>{r(It(o.result),a.oldVersion,a.newVersion,It(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const xd=["get","getKey","getAll","getAllKeys","count"],Md=["put","add","delete","clear"],cs=new Map;function so(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cs.get(e))return cs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Md.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xd.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return cs.set(e,i),i}kd(t=>({...t,get:(e,n,r)=>so(e,n)||t.get(e,n,r),has:(e,n)=>!!so(e,n)||t.has(e,n)}));/**
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
 */class Ud{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Os="@firebase/app",io="0.10.13";/**
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
 */const ct=new hc("@firebase/app"),$d="@firebase/app-compat",Hd="@firebase/analytics-compat",Bd="@firebase/analytics",jd="@firebase/app-check-compat",Vd="@firebase/app-check",Wd="@firebase/auth",Kd="@firebase/auth-compat",zd="@firebase/database",qd="@firebase/data-connect",Gd="@firebase/database-compat",Jd="@firebase/functions",Yd="@firebase/functions-compat",Xd="@firebase/installations",Qd="@firebase/installations-compat",Zd="@firebase/messaging",eh="@firebase/messaging-compat",th="@firebase/performance",nh="@firebase/performance-compat",rh="@firebase/remote-config",sh="@firebase/remote-config-compat",ih="@firebase/storage",oh="@firebase/storage-compat",ah="@firebase/firestore",ch="@firebase/vertexai-preview",lh="@firebase/firestore-compat",uh="firebase",fh="10.14.1";/**
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
 */const ks="[DEFAULT]",dh={[Os]:"fire-core",[$d]:"fire-core-compat",[Bd]:"fire-analytics",[Hd]:"fire-analytics-compat",[Vd]:"fire-app-check",[jd]:"fire-app-check-compat",[Wd]:"fire-auth",[Kd]:"fire-auth-compat",[zd]:"fire-rtdb",[qd]:"fire-data-connect",[Gd]:"fire-rtdb-compat",[Jd]:"fire-fn",[Yd]:"fire-fn-compat",[Xd]:"fire-iid",[Qd]:"fire-iid-compat",[Zd]:"fire-fcm",[eh]:"fire-fcm-compat",[th]:"fire-perf",[nh]:"fire-perf-compat",[rh]:"fire-rc",[sh]:"fire-rc-compat",[ih]:"fire-gcs",[oh]:"fire-gcs-compat",[ah]:"fire-fst",[lh]:"fire-fst-compat",[ch]:"fire-vertex","fire-js":"fire-js",[uh]:"fire-js-all"};/**
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
 */const Ir=new Map,hh=new Map,Ns=new Map;function oo(t,e){try{t.container.addComponent(e)}catch(n){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(Ns.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;Ns.set(e,t);for(const n of Ir.values())oo(n,t);for(const n of hh.values())oo(n,t);return!0}function mc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ze(t){return t.settings!==void 0}/**
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
 */const ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new Gn("app","Firebase",ph);/**
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
 */class gh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const Yn=fh;function _c(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ks,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});if(n||(n=fc()),!n)throw St.create("no-options");const i=Ir.get(s);if(i){if(wr(n,i.options)&&wr(r,i.config))return i;throw St.create("duplicate-app",{appName:s})}const o=new Ed(s);for(const a of Ns.values())o.addComponent(a);const c=new gh(n,r,o);return Ir.set(s,c),c}function mh(t=ks){const e=Ir.get(t);if(!e&&t===ks&&fc())return _c();if(!e)throw St.create("no-app",{appName:t});return e}function on(t,e,n){var r;let s=(r=dh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(c.join(" "));return}$n(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _h="firebase-heartbeat-database",vh=1,Hn="firebase-heartbeat-store";let ls=null;function vc(){return ls||(ls=Ld(_h,vh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hn)}catch(n){console.warn(n)}}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),ls}async function yh(t){try{const n=(await vc()).transaction(Hn),r=await n.objectStore(Hn).get(yc(t));return await n.done,r}catch(e){if(e instanceof Pt)ct.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(n.message)}}}async function ao(t,e){try{const r=(await vc()).transaction(Hn,"readwrite");await r.objectStore(Hn).put(e,yc(t)),await r.done}catch(n){if(n instanceof Pt)ct.warn(n.message);else{const r=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ct.warn(r.message)}}}function yc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bh=1024,Eh=30*24*60*60*1e3;class wh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=co();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Eh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ct.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=co(),{heartbeatsToSend:r,unsentEntries:s}=Ih(this._heartbeatsCache.heartbeats),i=lc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ct.warn(n),""}}}function co(){return new Date().toISOString().substring(0,10)}function Ih(t,e=bh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ld()?ud().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ao(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ao(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lo(t){return lc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Th(t){$n(new fn("platform-logger",e=>new Ud(e),"PRIVATE")),$n(new fn("heartbeat",e=>new wh(e),"PRIVATE")),on(Os,io,t),on(Os,io,"esm2017"),on("fire-js","")}Th("");function di(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rh=bc,Ec=new Gn("auth","Firebase",bc());/**
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
 */const Sr=new hc("@firebase/auth");function Ch(t,...e){Sr.logLevel<=te.WARN&&Sr.warn(`Auth (${Yn}): ${t}`,...e)}function ur(t,...e){Sr.logLevel<=te.ERROR&&Sr.error(`Auth (${Yn}): ${t}`,...e)}/**
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
 */function $e(t,...e){throw hi(t,...e)}function Ge(t,...e){return hi(t,...e)}function wc(t,e,n){const r=Object.assign(Object.assign({},Rh()),{[e]:n});return new Gn("auth","Firebase",r).create(e,{appName:t.name})}function at(t){return wc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ec.create(t,...e)}function U(t,e,...n){if(!t)throw hi(e,...n)}function st(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ur(e),new Error(e)}function lt(t,e){t||st(e)}/**
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
 */function Ds(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ah(){return uo()==="http:"||uo()==="https:"}function uo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ph(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ah()||od()||"connection"in navigator)?navigator.onLine:!0}function Oh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xn{constructor(e,n){this.shortDelay=e,this.longDelay=n,lt(n>e,"Short delay should be less than long delay!"),this.isMobile=sd()||ad()}get(){return Ph()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pi(t,e){lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ic{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Nh=new Xn(3e4,6e4);function kt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nt(t,e,n,r,s={}){return Sc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Jn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:a},i);return id()||(l.referrerPolicy="no-referrer"),Ic.fetch()(Tc(t,t.config.apiHost,n,c),l)})}async function Sc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kh),e);try{const s=new Lh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ir(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ir(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ir(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ir(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wc(t,u,l);$e(t,u)}}catch(s){if(s instanceof Pt)throw s;$e(t,"network-request-failed",{message:String(s)})}}async function Qn(t,e,n,r,s={}){const i=await Nt(t,e,n,r,s);return"mfaPendingCredential"in i&&$e(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Tc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?pi(t.config,s):`${t.config.apiScheme}://${s}`}function Dh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Lh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),Nh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ir(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ge(t,e,r);return s.customData._tokenResponse=n,s}function fo(t){return t!==void 0&&t.enterprise!==void 0}class xh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Dh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Mh(t,e){return Nt(t,"GET","/v2/recaptchaConfig",kt(t,e))}/**
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
 */async function Uh(t,e){return Nt(t,"POST","/v1/accounts:delete",e)}async function Rc(t,e){return Nt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fh(t,e=!1){const n=Ot(t),r=await n.getIdToken(e),s=gi(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(us(s.auth_time)),issuedAtTime:On(us(s.iat)),expirationTime:On(us(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function us(t){return Number(t)*1e3}function gi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const s=uc(n);return s?JSON.parse(s):(ur("Failed to decode base64 JWT payload"),null)}catch(s){return ur("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ho(t){const e=gi(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pt&&$h(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $h({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Hh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ls{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bn(t,Rc(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cc(i.providerUserInfo):[],c=jh(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ls(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Bh(t){const e=Ot(t);await Tr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Cc(t){return t.map(e=>{var{providerId:n}=e,r=di(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Vh(t,e){const n=await Sc(t,{},async()=>{const r=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Tc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ic.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Wh(t,e){return Nt(t,"POST","/v2/accounts:revokeToken",kt(t,e))}/**
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
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ho(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=ho(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Vh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new an;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function ht(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=di(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ls(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fh(this,e)}reload(){return Bh(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await Bn(this,Uh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:O,isAnonymous:j,providerData:ce,stsTokenManager:q}=n;U(N&&q,e,"internal-error");const K=an.fromJSON(this.name,q);U(typeof N=="string",e,"internal-error"),ht(d,e.name),ht(p,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof j=="boolean",e,"internal-error"),ht(g,e.name),ht(w,e.name),ht(T,e.name),ht(F,e.name),ht(L,e.name),ht(k,e.name);const W=new it({uid:N,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:j,photoURL:w,phoneNumber:g,tenantId:T,stsTokenManager:K,createdAt:L,lastLoginAt:k});return ce&&Array.isArray(ce)&&(W.providerData=ce.map(se=>Object.assign({},se))),F&&(W._redirectEventId=F),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new an;s.updateFromServerResponse(n);const i=new it({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new an;c.updateFromIdToken(r);const a=new it({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ls(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
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
 */const po=new Map;function ot(t){lt(t instanceof Function,"Expected a class definition");let e=po.get(t);return e?(lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,po.set(t,e),e)}/**
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
 */class Ac{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ac.type="NONE";const go=Ac;/**
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
 */function fr(t,e,n){return`firebase:${t}:${e}:${n}`}class cn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fr(this.userKey,s.apiKey,i),this.fullPersistenceKey=fr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cn(ot(go),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ot(go);const o=fr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const d=it._fromJSON(e,u);l!==i&&(c=d),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new cn(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new cn(i,e,r))}}/**
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
 */function mo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lc(e))return"Blackberry";if(xc(e))return"Webos";if(Oc(e))return"Safari";if((e.includes("chrome/")||kc(e))&&!e.includes("edge/"))return"Chrome";if(Dc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pc(t=Ee()){return/firefox\//i.test(t)}function Oc(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kc(t=Ee()){return/crios\//i.test(t)}function Nc(t=Ee()){return/iemobile/i.test(t)}function Dc(t=Ee()){return/android/i.test(t)}function Lc(t=Ee()){return/blackberry/i.test(t)}function xc(t=Ee()){return/webos/i.test(t)}function mi(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kh(t=Ee()){var e;return mi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zh(){return cd()&&document.documentMode===10}function Mc(t=Ee()){return mi(t)||Dc(t)||xc(t)||Lc(t)||/windows phone/i.test(t)||Nc(t)}/**
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
 */function Uc(t,e=[]){let n;switch(t){case"Browser":n=mo(Ee());break;case"Worker":n=`${mo(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yn}/${r}`}/**
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
 */class qh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Gh(t,e={}){return Nt(t,"GET","/v2/passwordPolicy",kt(t,e))}/**
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
 */const Jh=6;class Yh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Jh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Xh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _o(this),this.idTokenSubscription=new _o(this),this.beforeStateQueue=new qh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ec,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rc(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Oh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(at(this));const n=e?Ot(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gh(this),n=new Yh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Wh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ot(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ch(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zt(t){return Ot(t)}class _o{constructor(e){this.auth=e,this.observer=null,this.addObserver=gd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Br={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qh(t){Br=t}function Fc(t){return Br.loadJS(t)}function Zh(){return Br.recaptchaEnterpriseScript}function ep(){return Br.gapiScript}function tp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const np="recaptcha-enterprise",rp="NO_RECAPTCHA";class sp{constructor(e){this.type=np,this.auth=zt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Mh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new xh(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;fo(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(rp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&fo(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Zh();a.length!==0&&(a+=c),Fc(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function vo(t,e,n,r=!1){const s=new sp(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xs(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await vo(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vo(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function ip(t,e){const n=mc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(wr(i,e??{}))return s;$e(s,"already-initialized")}return n.initialize({options:e})}function op(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ap(t,e,n){const r=zt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$c(e),{host:o,port:c}=cp(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),lp()}function $c(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cp(t){const e=$c(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yo(o)}}}function yo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _i{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,n){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function up(t,e){return Nt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fp(t,e){return Qn(t,"POST","/v1/accounts:signInWithPassword",kt(t,e))}/**
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
 */async function dp(t,e){return Qn(t,"POST","/v1/accounts:signInWithEmailLink",kt(t,e))}async function hp(t,e){return Qn(t,"POST","/v1/accounts:signInWithEmailLink",kt(t,e))}/**
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
 */class jn extends _i{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new jn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xs(e,n,"signInWithPassword",fp);case"emailLink":return dp(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xs(e,r,"signUpPassword",up);case"emailLink":return hp(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ln(t,e){return Qn(t,"POST","/v1/accounts:signInWithIdp",kt(t,e))}/**
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
 */const pp="http://localhost";class Wt extends _i{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=di(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Wt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ln(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ln(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ln(e,n)}buildRequest(){const e={requestUri:pp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jn(n)}return e}}/**
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
 */function gp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mp(t){const e=En(wn(t)).link,n=e?En(wn(e)).deep_link_id:null,r=En(wn(t)).deep_link_id;return(r?En(wn(r)).link:null)||r||n||e||t}class vi{constructor(e){var n,r,s,i,o,c;const a=En(wn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,d=gp((s=a.mode)!==null&&s!==void 0?s:null);U(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=mp(e);try{return new vi(n)}catch{return null}}}/**
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
 */class pn{constructor(){this.providerId=pn.PROVIDER_ID}static credential(e,n){return jn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vi.parseLink(n);return U(r,"argument-error"),jn._fromEmailAndCode(e,r.code,r.tenantId)}}pn.PROVIDER_ID="password";pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zn extends Hc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yt extends Zn{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
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
 */class bt extends Zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class Et extends Zn{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
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
 */class wt extends Zn{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
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
 */async function _p(t,e){return Qn(t,"POST","/v1/accounts:signUp",kt(t,e))}/**
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
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await it._fromIdTokenResponse(e,r,s),o=bo(r);return new Kt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bo(r);return new Kt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rr extends Pt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Rr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Rr(e,n,r,s)}}function Bc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rr._fromErrorAndOperation(t,i,e,r):i})}async function vp(t,e,n=!1){const r=await Bn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kt._forOperation(t,"link",r)}/**
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
 */async function yp(t,e,n=!1){const{auth:r}=t;if(ze(r.app))return Promise.reject(at(r));const s="reauthenticate";try{const i=await Bn(t,Bc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=gi(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),Kt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),i}}/**
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
 */async function jc(t,e,n=!1){if(ze(t.app))return Promise.reject(at(t));const r="signIn",s=await Bc(t,r,e),i=await Kt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function bp(t,e){return jc(zt(t),e)}/**
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
 */async function Vc(t){const e=zt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function d_(t,e,n){if(ze(t.app))return Promise.reject(at(t));const r=zt(t),o=await xs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_p).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Vc(t),a}),c=await Kt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function h_(t,e,n){return ze(t.app)?Promise.reject(at(t)):bp(Ot(t),pn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vc(t),r})}function Ep(t,e,n,r){return Ot(t).onIdTokenChanged(e,n,r)}function wp(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}function Ip(t){return Ot(t).signOut()}const Cr="__sak";/**
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
 */class Wc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cr,"1"),this.storage.removeItem(Cr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Sp=1e3,Tp=10;class Kc extends Wc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Tp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Sp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kc.type="LOCAL";const Rp=Kc;/**
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
 */class zc extends Wc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zc.type="SESSION";const qc=zc;/**
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
 */function Cp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new jr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Cp(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jr.receivers=[];/**
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
 */function yi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ap{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=yi("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Je(){return window}function Pp(t){Je().location.href=t}/**
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
 */function Gc(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function Op(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Np(){return Gc()?self:null}/**
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
 */const Jc="firebaseLocalStorageDb",Dp=1,Ar="firebaseLocalStorage",Yc="fbase_key";class er{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vr(t,e){return t.transaction([Ar],e?"readwrite":"readonly").objectStore(Ar)}function Lp(){const t=indexedDB.deleteDatabase(Jc);return new er(t).toPromise()}function Ms(){const t=indexedDB.open(Jc,Dp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ar,{keyPath:Yc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ar)?e(r):(r.close(),await Lp(),e(await Ms()))})})}async function Eo(t,e,n){const r=Vr(t,!0).put({[Yc]:e,value:n});return new er(r).toPromise()}async function xp(t,e){const n=Vr(t,!1).get(e),r=await new er(n).toPromise();return r===void 0?null:r.value}function wo(t,e){const n=Vr(t,!0).delete(e);return new er(n).toPromise()}const Mp=800,Up=3;class Xc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ms(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Up)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jr._getInstance(Np()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Op(),!this.activeServiceWorker)return;this.sender=new Ap(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ms();return await Eo(e,Cr,"1"),await wo(e,Cr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vr(s,!1).getAll();return new er(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xc.type="LOCAL";const Fp=Xc;new Xn(3e4,6e4);/**
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
 */function $p(t,e){return e?ot(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bi extends _i{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hp(t){return jc(t.auth,new bi(t),t.bypassAuthState)}function Bp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),yp(n,new bi(t),t.bypassAuthState)}async function jp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),vp(n,new bi(t),t.bypassAuthState)}/**
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
 */class Qc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hp;case"linkViaPopup":case"linkViaRedirect":return jp;case"reauthViaPopup":case"reauthViaRedirect":return Bp;default:$e(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Vp=new Xn(2e3,1e4);class en extends Qc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=yi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vp.get())};e()}}en.currentPopupAction=null;/**
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
 */const Wp="pendingRedirect",dr=new Map;class Kp extends Qc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dr.get(this.auth._key());if(!e){try{const r=await zp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dr.set(this.auth._key(),e)}return this.bypassAuthState||dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zp(t,e){const n=Jp(e),r=Gp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qp(t,e){dr.set(t._key(),e)}function Gp(t){return ot(t._redirectPersistence)}function Jp(t){return fr(Wp,t.config.apiKey,t.name)}async function Yp(t,e,n=!1){if(ze(t.app))return Promise.reject(at(t));const r=zt(t),s=$p(r,e),o=await new Kp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Xp=10*60*1e3;class Qp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Io(e))}saveEventToCache(e){this.cachedEventUids.add(Io(e)),this.lastProcessedEventTime=Date.now()}}function Io(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zc(t);default:return!1}}/**
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
 */async function eg(t,e={}){return Nt(t,"GET","/v1/projects",e)}/**
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
 */const tg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ng=/^https?/;async function rg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eg(t);for(const n of e)try{if(sg(n))return}catch{}$e(t,"unauthorized-domain")}function sg(t){const e=Ds(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ng.test(n))return!1;if(tg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ig=new Xn(3e4,6e4);function So(){const t=Je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function og(t){return new Promise((e,n)=>{var r,s,i;function o(){So(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{So(),n(Ge(t,"network-request-failed"))},timeout:ig.get()})}if(!((s=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Je().gapi)===null||i===void 0)&&i.load)o();else{const c=tp("iframefcb");return Je()[c]=()=>{gapi.load?o():n(Ge(t,"network-request-failed"))},Fc(`${ep()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw hr=null,e})}let hr=null;function ag(t){return hr=hr||og(t),hr}/**
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
 */const cg=new Xn(5e3,15e3),lg="__/auth/iframe",ug="emulator/auth/iframe",fg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pi(e,ug):`https://${t.config.authDomain}/${lg}`,r={apiKey:e.apiKey,appName:t.name,v:Yn},s=dg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Jn(r).slice(1)}`}async function pg(t){const e=await ag(t),n=Je().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:hg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(t,"network-request-failed"),c=Je().setTimeout(()=>{i(o)},cg.get());function a(){Je().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const gg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mg=500,_g=600,vg="_blank",yg="http://localhost";class To{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bg(t,e,n,r=mg,s=_g){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},gg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(c=kc(l)?vg:n),Pc(l)&&(e=e||yg,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(Kh(l)&&c!=="_self")return Eg(e||"",c),new To(null);const d=window.open(e||"",c,u);U(d,t,"popup-blocked");try{d.focus()}catch{}return new To(d)}function Eg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wg="__/auth/handler",Ig="emulator/auth/handler",Sg=encodeURIComponent("fac");async function Ro(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yn,eventId:s};if(e instanceof Hc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Zn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${Sg}=${encodeURIComponent(a)}`:"";return`${Tg(t)}?${Jn(c).slice(1)}${l}`}function Tg({config:t}){return t.emulator?pi(t,Ig):`https://${t.authDomain}/${wg}`}/**
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
 */const fs="webStorageSupport";class Rg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qc,this._completeRedirectFn=Yp,this._overrideRedirectResult=qp}async _openPopup(e,n,r,s){var i;lt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ro(e,n,r,Ds(),s);return bg(e,o,yi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ro(e,n,r,Ds(),s);return Pp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pg(e),r=new Qp(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fs,{type:fs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[fs];o!==void 0&&n(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mc()||Oc()||mi()}}const Cg=Rg;var Co="@firebase/auth",Ao="1.7.9";/**
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
 */class Ag{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Pg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Og(t){$n(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uc(t)},l=new Xh(r,s,i,a);return op(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new fn("auth-internal",e=>{const n=zt(e.getProvider("auth").getImmediate());return(r=>new Ag(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Co,Ao,Pg(t)),on(Co,Ao,"esm2017")}/**
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
 */const kg=5*60,Ng=dc("authIdTokenMaxAge")||kg;let Po=null;const Dg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ng)return;const s=n==null?void 0:n.token;Po!==s&&(Po=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Lg(t=mh()){const e=mc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ip(t,{popupRedirectResolver:Cg,persistence:[Fp,Rp,qc]}),r=dc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Dg(i.toString());wp(n,o,()=>o(n.currentUser)),Ep(n,c=>o(c))}}const s=nd("auth");return s&&ap(n,`http://${s}`),n}function xg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Qh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",xg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Og("Browser");/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Zt=typeof document<"u";function el(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&el(t.default)}const ee=Object.assign;function ds(t,e){const n={};for(const r in e){const s=e[r];n[r]=He(s)?s.map(t):t(s)}return n}const kn=()=>{},He=Array.isArray,tl=/#/g,Ug=/&/g,Fg=/\//g,$g=/=/g,Hg=/\?/g,nl=/\+/g,Bg=/%5B/g,jg=/%5D/g,rl=/%5E/g,Vg=/%60/g,sl=/%7B/g,Wg=/%7C/g,il=/%7D/g,Kg=/%20/g;function Ei(t){return encodeURI(""+t).replace(Wg,"|").replace(Bg,"[").replace(jg,"]")}function zg(t){return Ei(t).replace(sl,"{").replace(il,"}").replace(rl,"^")}function Us(t){return Ei(t).replace(nl,"%2B").replace(Kg,"+").replace(tl,"%23").replace(Ug,"%26").replace(Vg,"`").replace(sl,"{").replace(il,"}").replace(rl,"^")}function qg(t){return Us(t).replace($g,"%3D")}function Gg(t){return Ei(t).replace(tl,"%23").replace(Hg,"%3F")}function Jg(t){return t==null?"":Gg(t).replace(Fg,"%2F")}function Vn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Yg=/\/$/,Xg=t=>t.replace(Yg,"");function hs(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=tm(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Vn(o)}}function Qg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Oo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&dn(e.matched[r],n.matched[s])&&ol(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function dn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ol(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!em(t[n],e[n]))return!1;return!0}function em(t,e){return He(t)?ko(t,e):He(e)?ko(e,t):t===e}function ko(t,e){return He(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function tm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Wn;(function(t){t.pop="pop",t.push="push"})(Wn||(Wn={}));var Nn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Nn||(Nn={}));function nm(t){if(!t)if(Zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xg(t)}const rm=/^[^#]+#/;function sm(t,e){return t.replace(rm,"#")+e}function im(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Wr=()=>({left:window.scrollX,top:window.scrollY});function om(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=im(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function No(t,e){return(history.state?history.state.position-e:-1)+t}const Fs=new Map;function am(t,e){Fs.set(t,e)}function cm(t){const e=Fs.get(t);return Fs.delete(t),e}let lm=()=>location.protocol+"//"+location.host;function al(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Oo(a,"")}return Oo(n,t)+r+s}function um(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const g=al(t,location),w=n.value,T=e.value;let F=0;if(p){if(n.value=g,e.value=p,o&&o===w){o=null;return}F=T?p.position-T.position:0}else r(g);s.forEach(L=>{L(n.value,w,{delta:F,type:Wn.pop,direction:F?F>0?Nn.forward:Nn.back:Nn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const g=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ee({},p.state,{scroll:Wr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:d}}function Do(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Wr():null}}function fm(t){const{history:e,location:n}=window,r={value:al(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:lm()+t+a;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(a,l){const u=ee({},e.state,Do(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=ee({},s.value,e.state,{forward:a,scroll:Wr()});i(u.current,u,!0);const d=ee({},Do(r.value,a,null),{position:u.position+1},l);i(a,d,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function dm(t){t=nm(t);const e=fm(t),n=um(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:t,go:r,createHref:sm.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function hm(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),dm(t)}function pm(t){return typeof t=="string"||t&&typeof t=="object"}function cl(t){return typeof t=="string"||typeof t=="symbol"}const ll=Symbol("");var Lo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lo||(Lo={}));function hn(t,e){return ee(new Error,{type:t,[ll]:!0},e)}function Ze(t,e){return t instanceof Error&&ll in t&&(e==null||!!(t.type&e))}const xo="[^/]+?",gm={sensitive:!1,strict:!1,start:!0,end:!0},mm=/[.+*?^${}()[\]/\\]/g;function _m(t,e){const n=ee({},gm,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(mm,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:T,optional:F,regexp:L}=p;i.push({name:w,repeatable:T,optional:F});const k=L||xo;if(k!==xo){g+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${w}" (${k}): `+O.message)}}let N=T?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(N=F&&l.length<2?`(?:/${N})`:"/"+N),F&&(N+="?"),s+=N,g+=20,F&&(g+=-8),T&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",w=i[p-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function a(l){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:T,optional:F}=g,L=w in l?l[w]:"";if(He(L)&&!T)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const k=He(L)?L.join("/"):L;if(!k)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function vm(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ul(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vm(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Mo(r))return 1;if(Mo(s))return-1}return s.length-r.length}function Mo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ym={type:0,value:""},bm=/[a-zA-Z0-9_]/;function Em(t){if(!t)return[[]];if(t==="/")return[[ym]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&d(),o()):a===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:bm.test(a)?p():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function wm(t,e,n){const r=_m(Em(t.path),n),s=ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Im(t,e){const n=[],r=new Map;e=Ho({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const w=!g,T=Fo(d);T.aliasOf=g&&g.record;const F=Ho(e,d),L=[T];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const j of O)L.push(Fo(ee({},T,{components:g?g.record.components:T.components,path:j,aliasOf:g?g.record:T})))}let k,N;for(const O of L){const{path:j}=O;if(p&&j[0]!=="/"){const ce=p.record.path,q=ce[ce.length-1]==="/"?"":"/";O.path=p.record.path+(j&&q+j)}if(k=wm(O,p,F),g?g.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),w&&d.name&&!$o(k)&&o(d.name)),fl(k)&&a(k),T.children){const ce=T.children;for(let q=0;q<ce.length;q++)i(ce[q],k,g&&g.children[q])}g=g||k}return N?()=>{o(N)}:kn}function o(d){if(cl(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function a(d){const p=Rm(d,n);n.splice(p,0,d),d.record.name&&!$o(d)&&r.set(d.record.name,d)}function l(d,p){let g,w={},T,F;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw hn(1,{location:d});F=g.record.name,w=ee(Uo(p.params,g.keys.filter(N=>!N.optional).concat(g.parent?g.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&Uo(d.params,g.keys.map(N=>N.name))),T=g.stringify(w)}else if(d.path!=null)T=d.path,g=n.find(N=>N.re.test(T)),g&&(w=g.parse(T),F=g.record.name);else{if(g=p.name?r.get(p.name):n.find(N=>N.re.test(p.path)),!g)throw hn(1,{location:d,currentLocation:p});F=g.record.name,w=ee({},p.params,d.params),T=g.stringify(w)}const L=[];let k=g;for(;k;)L.unshift(k.record),k=k.parent;return{name:F,path:T,params:w,matched:L,meta:Tm(L)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:c,getRecordMatcher:s}}function Uo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Fo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Sm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Sm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $o(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Tm(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function Ho(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Rm(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ul(t,e[i])<0?r=i:n=i+1}const s=Cm(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Cm(t){let e=t;for(;e=e.parent;)if(fl(e)&&ul(t,e)===0)return e}function fl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Am(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(nl," "),o=i.indexOf("="),c=Vn(o<0?i:i.slice(0,o)),a=o<0?null:Vn(i.slice(o+1));if(c in e){let l=e[c];He(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Bo(t){let e="";for(let n in t){const r=t[n];if(n=qg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&Us(i)):[r&&Us(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Pm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=He(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Om=Symbol(""),jo=Symbol(""),Kr=Symbol(""),dl=Symbol(""),$s=Symbol("");function vn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(hn(4,{from:n,to:e})):p instanceof Error?a(p):pm(p)?a(hn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let d=Promise.resolve(u);t.length<3&&(d=d.then(l)),d.catch(p=>a(p))})}function ps(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(el(a)){const u=(a.__vccOpts||a)[e];u&&i.push(vt(u,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=Mg(u)?u.default:u;o.mods[c]=u,o.components[c]=d;const g=(d.__vccOpts||d)[e];return g&&vt(g,n,r,o,c,s)()}))}}return i}function Vo(t){const e=Fe(Kr),n=Fe(dl),r=ke(()=>{const a=rn(t.to);return e.resolve(a)}),s=ke(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(dn.bind(null,u));if(p>-1)return p;const g=Wo(a[l-2]);return l>1&&Wo(u)===g&&d[d.length-1].path!==g?d.findIndex(dn.bind(null,a[l-2])):p}),i=ke(()=>s.value>-1&&Lm(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&ol(n.params,r.value.params));function c(a={}){return Dm(a)?e[rn(t.replace)?"replace":"push"](rn(t.to)).catch(kn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const km=Oa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vo,setup(t,{slots:e}){const n=Kn(Vo(t)),{options:r}=Fe(Kr),s=ke(()=>({[Ko(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ko(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ic("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Nm=km;function Dm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Lm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!He(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ko=(t,e,n)=>t??e??n,xm=Oa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Fe($s),s=ke(()=>t.route||r.value),i=Fe(jo,0),o=ke(()=>{let l=rn(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),c=ke(()=>s.value.matched[o.value]);ar(jo,ke(()=>o.value+1)),ar(Om,c),ar($s,s);const a=ni();return An(()=>[a.value,c.value,t.name],([l,u,d],[p,g,w])=>{u&&(u.instances[d]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!dn(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,d=c.value,p=d&&d.components[u];if(!p)return zo(n.default,{Component:p,route:l});const g=d.props[u],w=g?g===!0?l.params:typeof g=="function"?g(l):g:null,F=ic(p,ee({},w,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return zo(n.default,{Component:F,route:l})||F}}});function zo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mm=xm;function Um(t){const e=Im(t.routes,t),n=t.parseQuery||Am,r=t.stringifyQuery||Bo,s=t.history,i=vn(),o=vn(),c=vn(),a=Ql(pt);let l=pt;Zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ds.bind(null,v=>""+v),d=ds.bind(null,Jg),p=ds.bind(null,Vn);function g(v,P){let C,D;return cl(v)?(C=e.getRecordMatcher(v),D=P):D=v,e.addRoute(D,C)}function w(v){const P=e.getRecordMatcher(v);P&&e.removeRoute(P)}function T(){return e.getRoutes().map(v=>v.record)}function F(v){return!!e.getRecordMatcher(v)}function L(v,P){if(P=ee({},P||a.value),typeof v=="string"){const h=hs(n,v,P.path),m=e.resolve({path:h.path},P),y=s.createHref(h.fullPath);return ee(h,m,{params:p(m.params),hash:Vn(h.hash),redirectedFrom:void 0,href:y})}let C;if(v.path!=null)C=ee({},v,{path:hs(n,v.path,P.path).path});else{const h=ee({},v.params);for(const m in h)h[m]==null&&delete h[m];C=ee({},v,{params:d(h)}),P.params=d(P.params)}const D=e.resolve(C,P),Q=v.hash||"";D.params=u(p(D.params));const oe=Qg(r,ee({},v,{hash:zg(Q),path:D.path})),f=s.createHref(oe);return ee({fullPath:oe,hash:Q,query:r===Bo?Pm(v.query):v.query||{}},D,{redirectedFrom:void 0,href:f})}function k(v){return typeof v=="string"?hs(n,v,a.value.path):ee({},v)}function N(v,P){if(l!==v)return hn(8,{from:P,to:v})}function O(v){return q(v)}function j(v){return O(ee(k(v),{replace:!0}))}function ce(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let D=typeof C=="function"?C(v):C;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=k(D):{path:D},D.params={}),ee({query:v.query,hash:v.hash,params:D.path!=null?{}:v.params},D)}}function q(v,P){const C=l=L(v),D=a.value,Q=v.state,oe=v.force,f=v.replace===!0,h=ce(C);if(h)return q(ee(k(h),{state:typeof h=="object"?ee({},Q,h.state):Q,force:oe,replace:f}),P||C);const m=C;m.redirectedFrom=P;let y;return!oe&&Zg(r,D,C)&&(y=hn(16,{to:m,from:D}),Be(D,D,!0,!1)),(y?Promise.resolve(y):se(m,D)).catch(_=>Ze(_)?Ze(_,2)?_:dt(_):Y(_,m,D)).then(_=>{if(_){if(Ze(_,2))return q(ee({replace:f},k(_.to),{state:typeof _.to=="object"?ee({},Q,_.to.state):Q,force:oe}),P||m)}else _=Re(m,D,!0,f,Q);return ge(m,D,_),_})}function K(v,P){const C=N(v,P);return C?Promise.reject(C):Promise.resolve()}function W(v){const P=Gt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(v):v()}function se(v,P){let C;const[D,Q,oe]=Fm(v,P);C=ps(D.reverse(),"beforeRouteLeave",v,P);for(const h of D)h.leaveGuards.forEach(m=>{C.push(vt(m,v,P))});const f=K.bind(null,v,P);return C.push(f),Le(C).then(()=>{C=[];for(const h of i.list())C.push(vt(h,v,P));return C.push(f),Le(C)}).then(()=>{C=ps(Q,"beforeRouteUpdate",v,P);for(const h of Q)h.updateGuards.forEach(m=>{C.push(vt(m,v,P))});return C.push(f),Le(C)}).then(()=>{C=[];for(const h of oe)if(h.beforeEnter)if(He(h.beforeEnter))for(const m of h.beforeEnter)C.push(vt(m,v,P));else C.push(vt(h.beforeEnter,v,P));return C.push(f),Le(C)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),C=ps(oe,"beforeRouteEnter",v,P,W),C.push(f),Le(C))).then(()=>{C=[];for(const h of o.list())C.push(vt(h,v,P));return C.push(f),Le(C)}).catch(h=>Ze(h,8)?h:Promise.reject(h))}function ge(v,P,C){c.list().forEach(D=>W(()=>D(v,P,C)))}function Re(v,P,C,D,Q){const oe=N(v,P);if(oe)return oe;const f=P===pt,h=Zt?history.state:{};C&&(D||f?s.replace(v.fullPath,ee({scroll:f&&h&&h.scroll},Q)):s.push(v.fullPath,Q)),a.value=v,Be(v,P,C,f),dt()}let we;function Dt(){we||(we=s.listen((v,P,C)=>{if(!tr.listening)return;const D=L(v),Q=ce(D);if(Q){q(ee(Q,{replace:!0}),D).catch(kn);return}l=D;const oe=a.value;Zt&&am(No(oe.fullPath,C.delta),Wr()),se(D,oe).catch(f=>Ze(f,12)?f:Ze(f,2)?(q(f.to,D).then(h=>{Ze(h,20)&&!C.delta&&C.type===Wn.pop&&s.go(-1,!1)}).catch(kn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),Y(f,D,oe))).then(f=>{f=f||Re(D,oe,!1),f&&(C.delta&&!Ze(f,8)?s.go(-C.delta,!1):C.type===Wn.pop&&Ze(f,20)&&s.go(-1,!1)),ge(D,oe,f)}).catch(kn)}))}let ft=vn(),ie=vn(),V;function Y(v,P,C){dt(v);const D=ie.list();return D.length?D.forEach(Q=>Q(v,P,C)):console.error(v),Promise.reject(v)}function Xe(){return V&&a.value!==pt?Promise.resolve():new Promise((v,P)=>{ft.add([v,P])})}function dt(v){return V||(V=!v,Dt(),ft.list().forEach(([P,C])=>v?C(v):P()),ft.reset()),v}function Be(v,P,C,D){const{scrollBehavior:Q}=t;if(!Zt||!Q)return Promise.resolve();const oe=!C&&cm(No(v.fullPath,0))||(D||!C)&&history.state&&history.state.scroll||null;return ri().then(()=>Q(v,P,oe)).then(f=>f&&om(f)).catch(f=>Y(f,v,P))}const Ie=v=>s.go(v);let qt;const Gt=new Set,tr={currentRoute:a,listening:!0,addRoute:g,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:T,resolve:L,options:t,push:O,replace:j,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ie.add,isReady:Xe,install(v){const P=this;v.component("RouterLink",Nm),v.component("RouterView",Mm),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>rn(a)}),Zt&&!qt&&a.value===pt&&(qt=!0,O(s.location).catch(Q=>{}));const C={};for(const Q in pt)Object.defineProperty(C,Q,{get:()=>a.value[Q],enumerable:!0});v.provide(Kr,P),v.provide(dl,Ea(C)),v.provide($s,a);const D=v.unmount;Gt.add(v),v.unmount=function(){Gt.delete(v),Gt.size<1&&(l=pt,we&&we(),we=null,a.value=pt,qt=!1,V=!1),D()}}};function Le(v){return v.reduce((P,C)=>P.then(()=>W(C)),Promise.resolve())}return tr}function Fm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>dn(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>dn(l,a))||s.push(a))}return[n,r,s]}function hl(){return Fe(Kr)}const $m="/3t-pwa/favicon.svg",Hm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e";var Bm=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let pl;const zr=t=>pl=t,gl=Symbol();function Hs(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Dn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Dn||(Dn={}));function jm(){const t=ia(!0),e=t.run(()=>ni({}));let n=[],r=[];const s=ti({install(i){zr(s),s._a=i,i.provide(gl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Bm?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ml=()=>{};function qo(t,e,n,r=ml){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&oa()&&Nl(s),s}function Yt(t,...e){t.slice().forEach(n=>{n(...e)})}const Vm=t=>t(),Go=Symbol(),gs=Symbol();function Bs(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Hs(s)&&Hs(r)&&t.hasOwnProperty(n)&&!le(r)&&!Ht(r)?t[n]=Bs(s,r):t[n]=r}return t}const Wm=Symbol();function Km(t){return!Hs(t)||!t.hasOwnProperty(Wm)}const{assign:gt}=Object;function zm(t){return!!(le(t)&&t.effect)}function qm(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=s?s():{});const u=ru(n.state.value[t]);return gt(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=ti(ke(()=>{zr(n);const g=n._s.get(t);return o[p].call(g,g)})),d),{}))}return a=_l(t,l,e,n,r,!0),a}function _l(t,e,n={},r,s,i){let o;const c=gt({actions:{}},n),a={deep:!0};let l,u,d=[],p=[],g;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),ni({});let T;function F(K){let W;l=u=!1,typeof K=="function"?(K(r.state.value[t]),W={type:Dn.patchFunction,storeId:t,events:g}):(Bs(r.state.value[t],K),W={type:Dn.patchObject,payload:K,storeId:t,events:g});const se=T=Symbol();ri().then(()=>{T===se&&(l=!0)}),u=!0,Yt(d,W,r.state.value[t])}const L=i?function(){const{state:W}=n,se=W?W():{};this.$patch(ge=>{gt(ge,se)})}:ml;function k(){o.stop(),d=[],p=[],r._s.delete(t)}const N=(K,W="")=>{if(Go in K)return K[gs]=W,K;const se=function(){zr(r);const ge=Array.from(arguments),Re=[],we=[];function Dt(V){Re.push(V)}function ft(V){we.push(V)}Yt(p,{args:ge,name:se[gs],store:j,after:Dt,onError:ft});let ie;try{ie=K.apply(this&&this.$id===t?this:j,ge)}catch(V){throw Yt(we,V),V}return ie instanceof Promise?ie.then(V=>(Yt(Re,V),V)).catch(V=>(Yt(we,V),Promise.reject(V))):(Yt(Re,ie),ie)};return se[Go]=!0,se[gs]=W,se},O={_p:r,$id:t,$onAction:qo.bind(null,p),$patch:F,$reset:L,$subscribe(K,W={}){const se=qo(d,K,W.detached,()=>ge()),ge=o.run(()=>An(()=>r.state.value[t],Re=>{(W.flush==="sync"?u:l)&&K({storeId:t,type:Dn.direct,events:g},Re)},gt({},a,W)));return se},$dispose:k},j=Kn(O);r._s.set(t,j);const q=(r._a&&r._a.runWithContext||Vm)(()=>r._e.run(()=>(o=ia()).run(()=>e({action:N}))));for(const K in q){const W=q[K];if(le(W)&&!zm(W)||Ht(W))i||(w&&Km(W)&&(le(W)?W.value=w[K]:Bs(W,w[K])),r.state.value[t][K]=W);else if(typeof W=="function"){const se=N(W,K);q[K]=se,c.actions[K]=W}}return gt(j,q),gt(G(j),q),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:K=>{F(W=>{gt(W,K)})}}),r._p.forEach(K=>{gt(j,o.run(()=>K({store:j,app:r._a,pinia:r,options:c})))}),w&&i&&n.hydrate&&n.hydrate(j.$state,w),l=!0,u=!0,j}function Gm(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(c,a){const l=$u();return c=c||(l?Fe(gl,null):null),c&&zr(c),c=pl,c._s.has(r)||(i?_l(r,e,s,c):qm(r,s,c)),c._s.get(r)}return o.$id=r,o}const Pr=Gm("authStore",{state:()=>({isLogin:JSON.parse(localStorage.getItem("isLogin"))||!1,currentUser:JSON.parse(localStorage.getItem("currentUser"))||null}),getters:{isAuthenticated:t=>!!t.isLogin,getCurrentUser:t=>t.currentUser},actions:{login(t){try{this.isLogin=!0,this.currentUser=t,localStorage.setItem("isLogin",JSON.stringify(!0)),localStorage.setItem("currentUser",JSON.stringify(t))}catch(e){console.error("Error during login:",e)}},logout(){try{this.isLogin=!1,this.currentUser=null,localStorage.setItem("isLogin",JSON.stringify(!1)),localStorage.setItem("currentUser",null)}catch(t){console.error("Error during logout:",t)}},loadAuthState(){this.isLogin=JSON.parse(localStorage.getItem("isLogin"))||!1,this.currentUser=JSON.parse(localStorage.getItem("currentUser"))||null}}}),vl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Jm={class:"header"},Ym={__name:"Header",setup(t){const e=hl(),n=()=>{Ip(Lg()).then(()=>{Pr().logout(),e.push("/auth/signin")})};return(r,s)=>(yr(),ec("div",Jm,[s[1]||(s[1]=Ft("h1",null,"header",-1)),s[2]||(s[2]=Ft("img",{src:$m,class:"logo",alt:"3t-pwa logo"},null,-1)),s[3]||(s[3]=Ft("img",{src:Hm,class:"logo vue",alt:"Vue logo"},null,-1)),Ft("button",{onClick:s[0]||(s[0]=i=>n())},"logOut")]))}},Xm=vl(Ym,[["__scopeId","data-v-eeeb1aee"]]),Qm={class:"App"},Zm={class:"content"},e_={__name:"App",setup(t){hl();const e=ke(()=>Pr().isLogin);return La(()=>{Pr().loadAuthState()}),(n,r)=>{const s=Au("router-view");return yr(),ec("div",Qm,[e.value?(yr(),tc(Xm,{key:0})):ff("",!0),Ft("div",Zm,[Te(s)])])}}},t_=vl(e_,[["__scopeId","data-v-04bce3c8"]]),n_="modulepreload",r_=function(t){return"/3t-pwa/"+t},Jo={},yn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(a=>{if(a=r_(a),a in Jo)return;Jo[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":n_,l||(d.as="script"),d.crossOrigin="",d.href=a,c&&d.setAttribute("nonce",c),document.head.appendChild(d),l)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},s_=[{path:"/auth/signin",name:"auth-signin",component:()=>yn(()=>import("./SignIn-DiBJRyxs.js"),__vite__mapDeps([0,1])),meta:{requiredAuth:!1}},{path:"/auth/signup",name:"auth-signup",component:()=>yn(()=>import("./SignUp-D9vdOAqV.js"),__vite__mapDeps([2,3])),meta:{requiredAuth:!1}},{path:"/",name:"main",redirect:"/dashboard",component:()=>yn(()=>import("./Main-C9T-_sEP.js"),__vite__mapDeps([4,5])),meta:{requiredAuth:!0},children:[{path:"/dashboard",name:"dashboard",component:()=>yn(()=>import("./Dashboard-C4zbMN4b.js"),[])},{path:"/tasks",name:"tasks",component:()=>yn(()=>import("./Tasks-qKP9FWsF.js"),[])}]},{path:"/:pathMatch(.*)*",name:"404",redirect:{name:"main",params:{}},meta:{title:"404 ;(",requiredAuth:!0}}],yl=Um({history:hm("/3t-pwa/"),routes:s_});yl.beforeEach((t,e,n)=>{const r=Pr().isLogin;!t.name.includes("auth")&&!r?n({name:"auth-signin"}):t.name.includes("auth")&&r?n({name:"main"}):n()});var i_="firebase",o_="10.14.1";/**
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
 */on(i_,o_,"app");const a_={apiKey:"AIzaSyDfAqcEiLceMXThDtKSFaWYhke2BYMwHD4",authDomain:"tapp-497ad.firebaseapp.com",projectId:"tapp-497ad",storageBucket:"tapp-497ad.appspot.com",messagingSenderId:"1056111856158",appId:"1:1056111856158:web:30674d686d70dd82a9fc0f",measurementId:"G-85PYBH32MV"},c_=jm();_c(a_);zf(t_).use(c_).use(yl).mount("#app");export{vl as _,Ft as a,Te as b,ec as c,hu as d,Au as e,Pr as f,Lg as g,d_ as h,ke as i,La as j,tc as k,ff as l,u_ as m,yr as o,ni as r,h_ as s,kl as t,hl as u,f_ as v,l_ as w};
