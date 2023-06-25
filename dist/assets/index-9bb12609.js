(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Vc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const we={},yr=[],At=()=>{},sy=()=>!1,iy=/^on[^a-z]/,So=t=>iy.test(t),$c=t=>t.startsWith("onUpdate:"),Oe=Object.assign,jc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oy=Object.prototype.hasOwnProperty,ie=(t,e)=>oy.call(t,e),K=Array.isArray,vr=t=>Ao(t)==="[object Map]",qf=t=>Ao(t)==="[object Set]",Y=t=>typeof t=="function",Ae=t=>typeof t=="string",Bc=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Kf=t=>_e(t)&&Y(t.then)&&Y(t.catch),zf=Object.prototype.toString,Ao=t=>zf.call(t),ay=t=>Ao(t).slice(8,-1),Wf=t=>Ao(t)==="[object Object]",Hc=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Di=Vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Co=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cy=/-(\w)/g,jt=Co(t=>t.replace(cy,(e,n)=>n?n.toUpperCase():"")),ly=/\B([A-Z])/g,nr=Co(t=>t.replace(ly,"-$1").toLowerCase()),Ro=Co(t=>t.charAt(0).toUpperCase()+t.slice(1)),ga=Co(t=>t?`on${Ro(t)}`:""),ws=(t,e)=>!Object.is(t,e),Pi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ki=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e},uy=t=>{const e=Ae(t)?Number(t):NaN;return isNaN(e)?t:e};let Au;const qa=()=>Au||(Au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function No(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ae(r)?py(r):No(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ae(t))return t;if(_e(t))return t}}const hy=/;(?![^(]*\))/g,fy=/:([^]+)/,dy=/\/\*[^]*?\*\//g;function py(t){const e={};return t.replace(dy,"").split(hy).forEach(n=>{if(n){const r=n.split(fy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ko(t){let e="";if(Ae(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=ko(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function HC(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ae(e)&&(t.class=ko(e)),n&&(t.style=No(n)),t}const gy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",my=Vc(gy);function Gf(t){return!!t||t===""}const qC=t=>Ae(t)?t:t==null?"":K(t)||_e(t)&&(t.toString===zf||!Y(t.toString))?JSON.stringify(t,Qf,2):String(t),Qf=(t,e)=>e&&e.__v_isRef?Qf(t,e.value):vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:qf(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!K(e)&&!Wf(e)?String(e):e;let ht;class yy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){ht=this}off(){ht=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function vy(t,e=ht){e&&e.active&&e.effects.push(t)}function _y(){return ht}function KC(t){ht&&ht.cleanups.push(t)}const qc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Yf=t=>(t.w&In)>0,Xf=t=>(t.n&In)>0,wy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=In},Ey=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Yf(s)&&!Xf(s)?s.delete(t):e[n++]=s,s.w&=~In,s.n&=~In}e.length=n}},zi=new WeakMap;let ss=0,In=1;const Ka=30;let Tt;const Hn=Symbol(""),za=Symbol("");class Kc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vy(this,r)}run(){if(!this.active)return this.fn();let e=Tt,n=mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Tt,Tt=this,mn=!0,In=1<<++ss,ss<=Ka?wy(this):Cu(this),this.fn()}finally{ss<=Ka&&Ey(this),In=1<<--ss,Tt=this.parent,mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tt===this?this.deferStop=!0:this.active&&(Cu(this),this.onStop&&this.onStop(),this.active=!1)}}function Cu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mn=!0;const Jf=[];function Ur(){Jf.push(mn),mn=!1}function Fr(){const t=Jf.pop();mn=t===void 0?!0:t}function ct(t,e,n){if(mn&&Tt){let r=zi.get(t);r||zi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=qc()),Zf(s)}}function Zf(t,e){let n=!1;ss<=Ka?Xf(t)||(t.n|=In,n=!Yf(t)):n=!t.has(Tt),n&&(t.add(Tt),Tt.deps.push(t))}function Xt(t,e,n,r,s,i){const o=zi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Hc(n)&&a.push(o.get("length")):(a.push(o.get(Hn)),vr(t)&&a.push(o.get(za)));break;case"delete":K(t)||(a.push(o.get(Hn)),vr(t)&&a.push(o.get(za)));break;case"set":vr(t)&&a.push(o.get(Hn));break}if(a.length===1)a[0]&&Wa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Wa(qc(c))}}function Wa(t,e){const n=K(t)?t:[...t];for(const r of n)r.computed&&Ru(r);for(const r of n)r.computed||Ru(r)}function Ru(t,e){(t!==Tt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Iy(t,e){var n;return(n=zi.get(t))==null?void 0:n.get(e)}const Ty=Vc("__proto__,__v_isRef,__isVue"),ed=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bc)),by=zc(),Sy=zc(!1,!0),Ay=zc(!0),Nu=Cy();function Cy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=oe(this);for(let i=0,o=this.length;i<o;i++)ct(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(oe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ur();const r=oe(this)[e].apply(this,n);return Fr(),r}}),t}function Ry(t){const e=oe(this);return ct(e,"has",t),e.hasOwnProperty(t)}function zc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?qy:id:e?sd:rd).get(r))return r;const o=K(r);if(!t){if(o&&ie(Nu,s))return Reflect.get(Nu,s,i);if(s==="hasOwnProperty")return Ry}const a=Reflect.get(r,s,i);return(Bc(s)?ed.has(s):Ty(s))||(t||ct(r,"get",s),e)?a:xe(a)?o&&Hc(s)?a:a.value:_e(a)?t?od(a):Vr(a):a}}const Ny=td(),ky=td(!0);function td(t=!1){return function(n,r,s,i){let o=n[r];if(br(o)&&xe(o)&&!xe(s))return!1;if(!t&&(!Wi(s)&&!br(s)&&(o=oe(o),s=oe(s)),!K(n)&&xe(o)&&!xe(s)))return o.value=s,!0;const a=K(n)&&Hc(r)?Number(r)<n.length:ie(n,r),c=Reflect.set(n,r,s,i);return n===oe(i)&&(a?ws(s,o)&&Xt(n,"set",r,s):Xt(n,"add",r,s)),c}}function Oy(t,e){const n=ie(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Xt(t,"delete",e,void 0),r}function Dy(t,e){const n=Reflect.has(t,e);return(!Bc(e)||!ed.has(e))&&ct(t,"has",e),n}function Py(t){return ct(t,"iterate",K(t)?"length":Hn),Reflect.ownKeys(t)}const nd={get:by,set:Ny,deleteProperty:Oy,has:Dy,ownKeys:Py},Ly={get:Ay,set(t,e){return!0},deleteProperty(t,e){return!0}},My=Oe({},nd,{get:Sy,set:ky}),Wc=t=>t,Oo=t=>Reflect.getPrototypeOf(t);function vi(t,e,n=!1,r=!1){t=t.__v_raw;const s=oe(t),i=oe(e);n||(e!==i&&ct(s,"get",e),ct(s,"get",i));const{has:o}=Oo(s),a=r?Wc:n?Yc:Es;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function _i(t,e=!1){const n=this.__v_raw,r=oe(n),s=oe(t);return e||(t!==s&&ct(r,"has",t),ct(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function wi(t,e=!1){return t=t.__v_raw,!e&&ct(oe(t),"iterate",Hn),Reflect.get(t,"size",t)}function ku(t){t=oe(t);const e=oe(this);return Oo(e).has.call(e,t)||(e.add(t),Xt(e,"add",t,t)),this}function Ou(t,e){e=oe(e);const n=oe(this),{has:r,get:s}=Oo(n);let i=r.call(n,t);i||(t=oe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ws(e,o)&&Xt(n,"set",t,e):Xt(n,"add",t,e),this}function Du(t){const e=oe(this),{has:n,get:r}=Oo(e);let s=n.call(e,t);s||(t=oe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Xt(e,"delete",t,void 0),i}function Pu(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Xt(t,"clear",void 0,void 0),n}function Ei(t,e){return function(r,s){const i=this,o=i.__v_raw,a=oe(o),c=e?Wc:t?Yc:Es;return!t&&ct(a,"iterate",Hn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ii(t,e,n){return function(...r){const s=this.__v_raw,i=oe(s),o=vr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Wc:e?Yc:Es;return!e&&ct(i,"iterate",c?za:Hn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function nn(t){return function(...e){return t==="delete"?!1:this}}function xy(){const t={get(i){return vi(this,i)},get size(){return wi(this)},has:_i,add:ku,set:Ou,delete:Du,clear:Pu,forEach:Ei(!1,!1)},e={get(i){return vi(this,i,!1,!0)},get size(){return wi(this)},has:_i,add:ku,set:Ou,delete:Du,clear:Pu,forEach:Ei(!1,!0)},n={get(i){return vi(this,i,!0)},get size(){return wi(this,!0)},has(i){return _i.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Ei(!0,!1)},r={get(i){return vi(this,i,!0,!0)},get size(){return wi(this,!0)},has(i){return _i.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Ei(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ii(i,!1,!1),n[i]=Ii(i,!0,!1),e[i]=Ii(i,!1,!0),r[i]=Ii(i,!0,!0)}),[t,n,e,r]}const[Uy,Fy,Vy,$y]=xy();function Gc(t,e){const n=e?t?$y:Vy:t?Fy:Uy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const jy={get:Gc(!1,!1)},By={get:Gc(!1,!0)},Hy={get:Gc(!0,!1)},rd=new WeakMap,sd=new WeakMap,id=new WeakMap,qy=new WeakMap;function Ky(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ky(ay(t))}function Vr(t){return br(t)?t:Qc(t,!1,nd,jy,rd)}function Wy(t){return Qc(t,!1,My,By,sd)}function od(t){return Qc(t,!0,Ly,Hy,id)}function Qc(t,e,n,r,s){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=zy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function _r(t){return br(t)?_r(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function Wi(t){return!!(t&&t.__v_isShallow)}function ad(t){return _r(t)||br(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function cd(t){return Ki(t,"__v_skip",!0),t}const Es=t=>_e(t)?Vr(t):t,Yc=t=>_e(t)?od(t):t;function ld(t){mn&&Tt&&(t=oe(t),Zf(t.dep||(t.dep=qc())))}function ud(t,e){t=oe(t);const n=t.dep;n&&Wa(n)}function xe(t){return!!(t&&t.__v_isRef===!0)}function hd(t){return fd(t,!1)}function Gy(t){return fd(t,!0)}function fd(t,e){return xe(t)?t:new Qy(t,e)}class Qy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:Es(e)}get value(){return ld(this),this._value}set value(e){const n=this.__v_isShallow||Wi(e)||br(e);e=n?e:oe(e),ws(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Es(e),ud(this))}}function Pe(t){return xe(t)?t.value:t}const Yy={get:(t,e,n)=>Pe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return xe(s)&&!xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dd(t){return _r(t)?t:new Proxy(t,Yy)}class Xy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Iy(oe(this._object),this._key)}}class Jy{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function zC(t,e,n){return xe(t)?t:Y(t)?new Jy(t):_e(t)&&arguments.length>1?Zy(t,e,n):hd(t)}function Zy(t,e,n){const r=t[e];return xe(r)?r:new Xy(t,e,n)}class ev{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Kc(e,()=>{this._dirty||(this._dirty=!0,ud(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=oe(this);return ld(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tv(t,e,n=!1){let r,s;const i=Y(t);return i?(r=t,s=At):(r=t.get,s=t.set),new ev(r,s,i||!s,n)}function yn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Do(i,e,n)}return s}function vt(t,e,n,r){if(Y(t)){const i=yn(t,e,n,r);return i&&Kf(i)&&i.catch(o=>{Do(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(vt(t[i],e,n,r));return s}function Do(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){yn(c,null,10,[t,o,a]);return}}nv(t,n,s,r)}function nv(t,e,n,r=!0){console.error(t)}let Is=!1,Ga=!1;const We=[];let Ft=0;const wr=[];let zt=null,xn=0;const pd=Promise.resolve();let Xc=null;function gd(t){const e=Xc||pd;return t?e.then(this?t.bind(this):t):e}function rv(t){let e=Ft+1,n=We.length;for(;e<n;){const r=e+n>>>1;Ts(We[r])<t?e=r+1:n=r}return e}function Jc(t){(!We.length||!We.includes(t,Is&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?We.push(t):We.splice(rv(t.id),0,t),md())}function md(){!Is&&!Ga&&(Ga=!0,Xc=pd.then(vd))}function sv(t){const e=We.indexOf(t);e>Ft&&We.splice(e,1)}function iv(t){K(t)?wr.push(...t):(!zt||!zt.includes(t,t.allowRecurse?xn+1:xn))&&wr.push(t),md()}function Lu(t,e=Is?Ft+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function yd(t){if(wr.length){const e=[...new Set(wr)];if(wr.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,r)=>Ts(n)-Ts(r)),xn=0;xn<zt.length;xn++)zt[xn]();zt=null,xn=0}}const Ts=t=>t.id==null?1/0:t.id,ov=(t,e)=>{const n=Ts(t)-Ts(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function vd(t){Ga=!1,Is=!0,We.sort(ov);const e=At;try{for(Ft=0;Ft<We.length;Ft++){const n=We[Ft];n&&n.active!==!1&&yn(n,null,14)}}finally{Ft=0,We.length=0,yd(),Is=!1,Xc=null,(We.length||wr.length)&&vd()}}function av(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||we;f&&(s=n.map(g=>Ae(g)?g.trim():g)),h&&(s=n.map(Ha))}let a,c=r[a=ga(e)]||r[a=ga(jt(e))];!c&&i&&(c=r[a=ga(nr(e))]),c&&vt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vt(l,t,6,s)}}function _d(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=_d(l,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(_e(t)&&r.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):Oe(o,i),_e(t)&&r.set(t,o),o)}function Po(t,e){return!t||!So(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,nr(e))||ie(t,e))}let $e=null,Lo=null;function Gi(t){const e=$e;return $e=t,Lo=t&&t.type.__scopeId||null,e}function cv(t){Lo=t}function lv(){Lo=null}function Pt(t,e=$e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Wu(-1);const i=Gi(e);let o;try{o=t(...s)}finally{Gi(i),r._d&&Wu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ma(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:E}=t;let C,A;const O=Gi(t);try{if(n.shapeFlag&4){const D=s||r;C=Ut(u.call(D,D,h,i,g,f,y)),A=c}else{const D=e;C=Ut(D.length>1?D(i,{attrs:c,slots:a,emit:l}):D(i,null)),A=e.props?c:uv(c)}}catch(D){fs.length=0,Do(D,t,1),C=Se(_t)}let B=C;if(A&&E!==!1){const D=Object.keys(A),{shapeFlag:Z}=B;D.length&&Z&7&&(o&&D.some($c)&&(A=hv(A,o)),B=Tn(B,A))}return n.dirs&&(B=Tn(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),C=B,Gi(O),C}const uv=t=>{let e;for(const n in t)(n==="class"||n==="style"||So(n))&&((e||(e={}))[n]=t[n]);return e},hv=(t,e)=>{const n={};for(const r in t)(!$c(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function fv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Mu(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Po(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Mu(r,o,l):!0:!!o;return!1}function Mu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Po(n,i))return!0}return!1}function dv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pv=t=>t.__isSuspense;function gv(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):iv(t)}const Ti={};function qn(t,e,n){return wd(t,e,n)}function wd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){var a;const c=_y()===((a=Me)==null?void 0:a.scope)?Me:null;let l,u=!1,h=!1;if(xe(t)?(l=()=>t.value,u=Wi(t)):_r(t)?(l=()=>t,r=!0):K(t)?(h=!0,u=t.some(D=>_r(D)||Wi(D)),l=()=>t.map(D=>{if(xe(D))return D.value;if(_r(D))return Vn(D);if(Y(D))return yn(D,c,2)})):Y(t)?e?l=()=>yn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),vt(t,c,3,[g])}:l=At,e&&r){const D=l;l=()=>Vn(D())}let f,g=D=>{f=O.onStop=()=>{yn(D,c,4)}},y;if(Ss)if(g=At,e?n&&vt(e,c,3,[l(),h?[]:void 0,g]):l(),s==="sync"){const D=l_();y=D.__watcherHandles||(D.__watcherHandles=[])}else return At;let E=h?new Array(t.length).fill(Ti):Ti;const C=()=>{if(O.active)if(e){const D=O.run();(r||u||(h?D.some((Z,ne)=>ws(Z,E[ne])):ws(D,E)))&&(f&&f(),vt(e,c,3,[D,E===Ti?void 0:h&&E[0]===Ti?[]:E,g]),E=D)}else O.run()};C.allowRecurse=!!e;let A;s==="sync"?A=C:s==="post"?A=()=>st(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),A=()=>Jc(C));const O=new Kc(l,A);e?n?C():E=O.run():s==="post"?st(O.run.bind(O),c&&c.suspense):O.run();const B=()=>{O.stop(),c&&c.scope&&jc(c.scope.effects,O)};return y&&y.push(B),B}function mv(t,e,n){const r=this.proxy,s=Ae(t)?t.includes(".")?Ed(r,t):()=>r[t]:t.bind(r,r);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Me;Sr(this);const a=wd(s,i.bind(r),n);return o?Sr(o):Kn(),a}function Ed(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Vn(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))Vn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Vn(t[n],e);else if(qf(t)||vr(t))t.forEach(n=>{Vn(n,e)});else if(Wf(t))for(const n in t)Vn(t[n],e);return t}function WC(t,e){const n=$e;if(n===null)return t;const r=$o(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Vn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function On(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ur(),vt(c,n,8,[t.el,a,t,e]),Fr())}}function yv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cd(()=>{t.isMounted=!0}),Rd(()=>{t.isUnmounting=!0}),t}const mt=[Function,Array],Id={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mt,onEnter:mt,onAfterEnter:mt,onEnterCancelled:mt,onBeforeLeave:mt,onLeave:mt,onAfterLeave:mt,onLeaveCancelled:mt,onBeforeAppear:mt,onAppear:mt,onAfterAppear:mt,onAppearCancelled:mt},vv={name:"BaseTransition",props:Id,setup(t,{slots:e}){const n=Hd(),r=yv();let s;return()=>{const i=e.default&&bd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const E of i)if(E.type!==_t){o=E;break}}const a=oe(t),{mode:c}=a;if(r.isLeaving)return ya(o);const l=xu(o);if(!l)return ya(o);const u=Qa(l,a,r,n);Ya(l,u);const h=n.subTree,f=h&&xu(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const E=y();s===void 0?s=E:E!==s&&(s=E,g=!0)}if(f&&f.type!==_t&&(!Un(l,f)||g)){const E=Qa(f,a,r,n);if(Ya(f,E),c==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ya(o);c==="in-out"&&l.type!==_t&&(E.delayLeave=(C,A,O)=>{const B=Td(r,f);B[String(f.key)]=f,C._leaveCb=()=>{A(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},_v=vv;function Td(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Qa(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:E,onAppear:C,onAfterAppear:A,onAppearCancelled:O}=e,B=String(t.key),D=Td(n,t),Z=(q,te)=>{q&&vt(q,r,9,te)},ne=(q,te)=>{const re=te[1];Z(q,te),K(q)?q.every(Ie=>Ie.length<=1)&&re():q.length<=1&&re()},pe={mode:i,persisted:o,beforeEnter(q){let te=a;if(!n.isMounted)if(s)te=E||a;else return;q._leaveCb&&q._leaveCb(!0);const re=D[B];re&&Un(t,re)&&re.el._leaveCb&&re.el._leaveCb(),Z(te,[q])},enter(q){let te=c,re=l,Ie=u;if(!n.isMounted)if(s)te=C||c,re=A||l,Ie=O||u;else return;let F=!1;const he=q._enterCb=Xe=>{F||(F=!0,Xe?Z(Ie,[q]):Z(re,[q]),pe.delayedLeave&&pe.delayedLeave(),q._enterCb=void 0)};te?ne(te,[q,he]):he()},leave(q,te){const re=String(t.key);if(q._enterCb&&q._enterCb(!0),n.isUnmounting)return te();Z(h,[q]);let Ie=!1;const F=q._leaveCb=he=>{Ie||(Ie=!0,te(),he?Z(y,[q]):Z(g,[q]),q._leaveCb=void 0,D[re]===t&&delete D[re])};D[re]=t,f?ne(f,[q,F]):F()},clone(q){return Qa(q,e,n,r)}};return pe}function ya(t){if(xo(t))return t=Tn(t),t.children=null,t}function xu(t){return xo(t)?t.children?t.children[0]:void 0:t}function Ya(t,e){t.shapeFlag&6&&t.component?Ya(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function bd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ft?(o.patchFlag&128&&s++,r=r.concat(bd(o.children,e,a))):(e||o.type!==_t)&&r.push(a!=null?Tn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Mo(t,e){return Y(t)?(()=>Oe({name:t.name},e,{setup:t}))():t}const ls=t=>!!t.type.__asyncLoader,xo=t=>t.type.__isKeepAlive;function wv(t,e){Sd(t,"a",e)}function Ev(t,e){Sd(t,"da",e)}function Sd(t,e,n=Me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Uo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xo(s.parent.vnode)&&Iv(r,e,n,s),s=s.parent}}function Iv(t,e,n,r){const s=Uo(e,t,r,!0);Nd(()=>{jc(r[e],s)},n)}function Uo(t,e,n=Me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ur(),Sr(n);const a=vt(e,n,t,o);return Kn(),Fr(),a});return r?s.unshift(i):s.push(i),i}}const en=t=>(e,n=Me)=>(!Ss||t==="sp")&&Uo(t,(...r)=>e(...r),n),Ad=en("bm"),Cd=en("m"),Tv=en("bu"),bv=en("u"),Rd=en("bum"),Nd=en("um"),Sv=en("sp"),Av=en("rtg"),Cv=en("rtc");function Rv(t,e=Me){Uo("ec",t,e)}const Zc="components";function Nv(t,e){return Od(Zc,t,!0,e)||t}const kd=Symbol.for("v-ndc");function GC(t){return Ae(t)?Od(Zc,t,!1)||t:t||kd}function Od(t,e,n=!0,r=!1){const s=$e||Me;if(s){const i=s.type;if(t===Zc){const a=o_(i,!1);if(a&&(a===e||a===jt(e)||a===Ro(jt(e))))return i}const o=Uu(s[t]||i[t],e)||Uu(s.appContext[t],e);return!o&&r?i:o}}function Uu(t,e){return t&&(t[e]||t[jt(e)]||t[Ro(jt(e))])}function QC(t,e,n,r){let s;const i=n&&n[r];if(K(t)||Ae(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function YC(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(K(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}function XC(t,e,n={},r,s){if($e.isCE||$e.parent&&ls($e.parent)&&$e.parent.isCE)return e!=="default"&&(n.name=e),Se("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),hn();const o=i&&Dd(i(n)),a=Xi(ft,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Dd(t){return t.some(e=>Ji(e)?!(e.type===_t||e.type===ft&&!Dd(e.children)):!0)?t:null}const Xa=t=>t?qd(t)?$o(t)||t.proxy:Xa(t.parent):null,us=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xa(t.parent),$root:t=>Xa(t.root),$emit:t=>t.emit,$options:t=>el(t),$forceUpdate:t=>t.f||(t.f=()=>Jc(t.update)),$nextTick:t=>t.n||(t.n=gd.bind(t.proxy)),$watch:t=>mv.bind(t)}),va=(t,e)=>t!==we&&!t.__isScriptSetup&&ie(t,e),kv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(va(r,e))return o[e]=1,r[e];if(s!==we&&ie(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==we&&ie(n,e))return o[e]=4,n[e];Ja&&(o[e]=0)}}const u=us[e];let h,f;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return va(s,e)?(s[e]=n,!0):r!==we&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ie(t,o)||va(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(us,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function JC(){return Ov().slots}function Ov(){const t=Hd();return t.setupContext||(t.setupContext=zd(t))}function Fu(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ja=!0;function Dv(t){const e=el(t),n=t.proxy,r=t.ctx;Ja=!1,e.beforeCreate&&Vu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:E,deactivated:C,beforeDestroy:A,beforeUnmount:O,destroyed:B,unmounted:D,render:Z,renderTracked:ne,renderTriggered:pe,errorCaptured:q,serverPrefetch:te,expose:re,inheritAttrs:Ie,components:F,directives:he,filters:Xe}=e;if(l&&Pv(l,r,null),o)for(const me in o){const ce=o[me];Y(ce)&&(r[me]=ce.bind(n))}if(s){const me=s.call(n,n);_e(me)&&(t.data=Vr(me))}if(Ja=!0,i)for(const me in i){const ce=i[me],qt=Y(ce)?ce.bind(n,n):Y(ce.get)?ce.get.bind(n,n):At,tn=!Y(ce)&&Y(ce.set)?ce.set.bind(n):At,kt=yt({get:qt,set:tn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>kt.value,set:rt=>kt.value=rt})}if(a)for(const me in a)Pd(a[me],r,n,me);if(c){const me=Y(c)?c.call(n):c;Reflect.ownKeys(me).forEach(ce=>{Li(ce,me[ce])})}u&&Vu(u,t,"c");function Ce(me,ce){K(ce)?ce.forEach(qt=>me(qt.bind(n))):ce&&me(ce.bind(n))}if(Ce(Ad,h),Ce(Cd,f),Ce(Tv,g),Ce(bv,y),Ce(wv,E),Ce(Ev,C),Ce(Rv,q),Ce(Cv,ne),Ce(Av,pe),Ce(Rd,O),Ce(Nd,D),Ce(Sv,te),K(re))if(re.length){const me=t.exposed||(t.exposed={});re.forEach(ce=>{Object.defineProperty(me,ce,{get:()=>n[ce],set:qt=>n[ce]=qt})})}else t.exposed||(t.exposed={});Z&&t.render===At&&(t.render=Z),Ie!=null&&(t.inheritAttrs=Ie),F&&(t.components=F),he&&(t.directives=he)}function Pv(t,e,n=At){K(t)&&(t=Za(t));for(const r in t){const s=t[r];let i;_e(s)?"default"in s?i=Ct(s.from||r,s.default,!0):i=Ct(s.from||r):i=Ct(s),xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Vu(t,e,n){vt(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pd(t,e,n,r){const s=r.includes(".")?Ed(n,r):()=>n[r];if(Ae(t)){const i=e[t];Y(i)&&qn(s,i)}else if(Y(t))qn(s,t.bind(n));else if(_e(t))if(K(t))t.forEach(i=>Pd(i,e,n,r));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&qn(s,i,t)}}function el(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Qi(c,l,o,!0)),Qi(c,e,o)),_e(e)&&i.set(e,c),c}function Qi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qi(t,i,n,!0),s&&s.forEach(o=>Qi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Lv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lv={data:$u,props:ju,emits:ju,methods:is,computed:is,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:is,directives:is,watch:xv,provide:$u,inject:Mv};function $u(t,e){return e?t?function(){return Oe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Mv(t,e){return is(Za(t),Za(e))}function Za(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function is(t,e){return t?Oe(Object.create(null),t,e):e}function ju(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Oe(Object.create(null),Fu(t),Fu(e??{})):e}function xv(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const r in e)n[r]=Je(t[r],e[r]);return n}function Ld(){return{app:null,config:{isNativeTag:sy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uv=0;function Fv(t,e){return function(r,s=null){Y(r)||(r=Oe({},r)),s!=null&&!_e(s)&&(s=null);const i=Ld(),o=new Set;let a=!1;const c=i.app={_uid:Uv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:u_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Se(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,$o(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Yi=c;try{return l()}finally{Yi=null}}};return c}}let Yi=null;function Li(t,e){if(Me){let n=Me.provides;const r=Me.parent&&Me.parent.provides;r===n&&(n=Me.provides=Object.create(r)),n[t]=e}}function Ct(t,e,n=!1){const r=Me||$e;if(r||Yi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Yi._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(r&&r.proxy):e}}function Vv(t,e,n,r=!1){const s={},i={};Ki(i,Vo,1),t.propsDefaults=Object.create(null),Md(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Wy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function $v(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=oe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Po(t.emitsOptions,f))continue;const g=e[f];if(c)if(ie(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=jt(f);s[y]=ec(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Md(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=nr(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ec(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&Xt(t,"set","$attrs")}function Md(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Di(c))continue;const l=e[c];let u;s&&ie(s,u=jt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Po(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=oe(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ec(s,c,h,l[h],t,!ie(l,h))}}return o}function ec(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Y(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Sr(s),r=l[n]=c.call(null,e),Kn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===nr(n))&&(r=!0))}return r}function xd(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[f,g]=xd(h,e,!0);Oe(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return _e(t)&&r.set(t,yr),yr;if(K(i))for(let u=0;u<i.length;u++){const h=jt(i[u]);Bu(h)&&(o[h]=we)}else if(i)for(const u in i){const h=jt(u);if(Bu(h)){const f=i[u],g=o[h]=K(f)||Y(f)?{type:f}:Oe({},f);if(g){const y=Ku(Boolean,g.type),E=Ku(String,g.type);g[0]=y>-1,g[1]=E<0||y<E,(y>-1||ie(g,"default"))&&a.push(h)}}}const l=[o,a];return _e(t)&&r.set(t,l),l}function Bu(t){return t[0]!=="$"}function Hu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function qu(t,e){return Hu(t)===Hu(e)}function Ku(t,e){return K(e)?e.findIndex(n=>qu(n,t)):Y(e)&&qu(e,t)?0:-1}const Ud=t=>t[0]==="_"||t==="$stable",tl=t=>K(t)?t.map(Ut):[Ut(t)],jv=(t,e,n)=>{if(e._n)return e;const r=Pt((...s)=>tl(e(...s)),n);return r._c=!1,r},Fd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ud(s))continue;const i=t[s];if(Y(i))e[s]=jv(s,i,r);else if(i!=null){const o=tl(i);e[s]=()=>o}}},Vd=(t,e)=>{const n=tl(e);t.slots.default=()=>n},Bv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Ki(e,"_",n)):Fd(e,t.slots={})}else t.slots={},e&&Vd(t,e);Ki(t.slots,Vo,1)},Hv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Oe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Fd(e,s)),o=e}else e&&(Vd(t,e),o={default:1});if(i)for(const a in s)!Ud(a)&&!(a in o)&&delete s[a]};function tc(t,e,n,r,s=!1){if(K(t)){t.forEach((f,g)=>tc(f,e&&(K(e)?e[g]:e),n,r,s));return}if(ls(r)&&!s)return;const i=r.shapeFlag&4?$o(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ae(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):xe(l)&&(l.value=null)),Y(c))yn(c,a,12,[o,u]);else{const f=Ae(c),g=xe(c);if(f||g){const y=()=>{if(t.f){const E=f?ie(h,c)?h[c]:u[c]:c.value;s?K(E)&&jc(E,i):K(E)?E.includes(i)||E.push(i):f?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ie(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,st(y,n)):y()}}}const st=gv;function qv(t){return Kv(t)}function Kv(t,e){const n=qa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=At,insertStaticContent:y}=t,E=(d,p,m,v=null,w=null,T=null,k=!1,S=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Un(d,p)&&(v=_(d),rt(d,w,T,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:b,ref:$,shapeFlag:U}=p;switch(b){case Fo:C(d,p,m,v);break;case _t:A(d,p,m,v);break;case _a:d==null&&O(p,m,v,k);break;case ft:F(d,p,m,v,w,T,k,S,R);break;default:U&1?Z(d,p,m,v,w,T,k,S,R):U&6?he(d,p,m,v,w,T,k,S,R):(U&64||U&128)&&b.process(d,p,m,v,w,T,k,S,R,N)}$!=null&&w&&tc($,d&&d.ref,T,p||d,!p)},C=(d,p,m,v)=>{if(d==null)r(p.el=a(p.children),m,v);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},A=(d,p,m,v)=>{d==null?r(p.el=c(p.children||""),m,v):p.el=d.el},O=(d,p,m,v)=>{[d.el,d.anchor]=y(d.children,p,m,v,d.el,d.anchor)},B=({el:d,anchor:p},m,v)=>{let w;for(;d&&d!==p;)w=f(d),r(d,m,v),d=w;r(p,m,v)},D=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},Z=(d,p,m,v,w,T,k,S,R)=>{k=k||p.type==="svg",d==null?ne(p,m,v,w,T,k,S,R):te(d,p,w,T,k,S,R)},ne=(d,p,m,v,w,T,k,S)=>{let R,b;const{type:$,props:U,shapeFlag:j,transition:Q,dirs:ee}=d;if(R=d.el=o(d.type,T,U&&U.is,U),j&8?u(R,d.children):j&16&&q(d.children,R,null,v,w,T&&$!=="foreignObject",k,S),ee&&On(d,null,v,"created"),pe(R,d,d.scopeId,k,v),U){for(const ge in U)ge!=="value"&&!Di(ge)&&i(R,ge,null,U[ge],T,d.children,v,w,Ke);"value"in U&&i(R,"value",null,U.value),(b=U.onVnodeBeforeMount)&&Dt(b,v,d)}ee&&On(d,null,v,"beforeMount");const ye=(!w||w&&!w.pendingBranch)&&Q&&!Q.persisted;ye&&Q.beforeEnter(R),r(R,p,m),((b=U&&U.onVnodeMounted)||ye||ee)&&st(()=>{b&&Dt(b,v,d),ye&&Q.enter(R),ee&&On(d,null,v,"mounted")},w)},pe=(d,p,m,v,w)=>{if(m&&g(d,m),v)for(let T=0;T<v.length;T++)g(d,v[T]);if(w){let T=w.subTree;if(p===T){const k=w.vnode;pe(d,k,k.scopeId,k.slotScopeIds,w.parent)}}},q=(d,p,m,v,w,T,k,S,R=0)=>{for(let b=R;b<d.length;b++){const $=d[b]=S?cn(d[b]):Ut(d[b]);E(null,$,p,m,v,w,T,k,S)}},te=(d,p,m,v,w,T,k)=>{const S=p.el=d.el;let{patchFlag:R,dynamicChildren:b,dirs:$}=p;R|=d.patchFlag&16;const U=d.props||we,j=p.props||we;let Q;m&&Dn(m,!1),(Q=j.onVnodeBeforeUpdate)&&Dt(Q,m,p,d),$&&On(p,d,m,"beforeUpdate"),m&&Dn(m,!0);const ee=w&&p.type!=="foreignObject";if(b?re(d.dynamicChildren,b,S,m,v,ee,T):k||ce(d,p,S,null,m,v,ee,T,!1),R>0){if(R&16)Ie(S,p,U,j,m,v,w);else if(R&2&&U.class!==j.class&&i(S,"class",null,j.class,w),R&4&&i(S,"style",U.style,j.style,w),R&8){const ye=p.dynamicProps;for(let ge=0;ge<ye.length;ge++){const Re=ye[ge],It=U[Re],cr=j[Re];(cr!==It||Re==="value")&&i(S,Re,It,cr,w,d.children,m,v,Ke)}}R&1&&d.children!==p.children&&u(S,p.children)}else!k&&b==null&&Ie(S,p,U,j,m,v,w);((Q=j.onVnodeUpdated)||$)&&st(()=>{Q&&Dt(Q,m,p,d),$&&On(p,d,m,"updated")},v)},re=(d,p,m,v,w,T,k)=>{for(let S=0;S<p.length;S++){const R=d[S],b=p[S],$=R.el&&(R.type===ft||!Un(R,b)||R.shapeFlag&70)?h(R.el):m;E(R,b,$,null,v,w,T,k,!0)}},Ie=(d,p,m,v,w,T,k)=>{if(m!==v){if(m!==we)for(const S in m)!Di(S)&&!(S in v)&&i(d,S,m[S],null,k,p.children,w,T,Ke);for(const S in v){if(Di(S))continue;const R=v[S],b=m[S];R!==b&&S!=="value"&&i(d,S,b,R,k,p.children,w,T,Ke)}"value"in v&&i(d,"value",m.value,v.value)}},F=(d,p,m,v,w,T,k,S,R)=>{const b=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:j,slotScopeIds:Q}=p;Q&&(S=S?S.concat(Q):Q),d==null?(r(b,m,v),r($,m,v),q(p.children,m,$,w,T,k,S,R)):U>0&&U&64&&j&&d.dynamicChildren?(re(d.dynamicChildren,j,m,w,T,k,S),(p.key!=null||w&&p===w.subTree)&&nl(d,p,!0)):ce(d,p,m,$,w,T,k,S,R)},he=(d,p,m,v,w,T,k,S,R)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?w.ctx.activate(p,m,v,k,R):Xe(p,m,v,w,T,k,R):Ht(d,p,R)},Xe=(d,p,m,v,w,T,k)=>{const S=d.component=n_(d,v,w);if(xo(d)&&(S.ctx.renderer=N),r_(S),S.asyncDep){if(w&&w.registerDep(S,Ce),!d.el){const R=S.subTree=Se(_t);A(null,R,p,m)}return}Ce(S,d,p,m,w,T,k)},Ht=(d,p,m)=>{const v=p.component=d.component;if(fv(d,p,m))if(v.asyncDep&&!v.asyncResolved){me(v,p,m);return}else v.next=p,sv(v.update),v.update();else p.el=d.el,v.vnode=p},Ce=(d,p,m,v,w,T,k)=>{const S=()=>{if(d.isMounted){let{next:$,bu:U,u:j,parent:Q,vnode:ee}=d,ye=$,ge;Dn(d,!1),$?($.el=ee.el,me(d,$,k)):$=ee,U&&Pi(U),(ge=$.props&&$.props.onVnodeBeforeUpdate)&&Dt(ge,Q,$,ee),Dn(d,!0);const Re=ma(d),It=d.subTree;d.subTree=Re,E(It,Re,h(It.el),_(It),d,w,T),$.el=Re.el,ye===null&&dv(d,Re.el),j&&st(j,w),(ge=$.props&&$.props.onVnodeUpdated)&&st(()=>Dt(ge,Q,$,ee),w)}else{let $;const{el:U,props:j}=p,{bm:Q,m:ee,parent:ye}=d,ge=ls(p);if(Dn(d,!1),Q&&Pi(Q),!ge&&($=j&&j.onVnodeBeforeMount)&&Dt($,ye,p),Dn(d,!0),U&&le){const Re=()=>{d.subTree=ma(d),le(U,d.subTree,d,w,null)};ge?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Re()):Re()}else{const Re=d.subTree=ma(d);E(null,Re,m,v,d,w,T),p.el=Re.el}if(ee&&st(ee,w),!ge&&($=j&&j.onVnodeMounted)){const Re=p;st(()=>Dt($,ye,Re),w)}(p.shapeFlag&256||ye&&ls(ye.vnode)&&ye.vnode.shapeFlag&256)&&d.a&&st(d.a,w),d.isMounted=!0,p=m=v=null}},R=d.effect=new Kc(S,()=>Jc(b),d.scope),b=d.update=()=>R.run();b.id=d.uid,Dn(d,!0),b()},me=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,$v(d,p.props,v,m),Hv(d,p.children,m),Ur(),Lu(),Fr()},ce=(d,p,m,v,w,T,k,S,R=!1)=>{const b=d&&d.children,$=d?d.shapeFlag:0,U=p.children,{patchFlag:j,shapeFlag:Q}=p;if(j>0){if(j&128){tn(b,U,m,v,w,T,k,S,R);return}else if(j&256){qt(b,U,m,v,w,T,k,S,R);return}}Q&8?($&16&&Ke(b,w,T),U!==b&&u(m,U)):$&16?Q&16?tn(b,U,m,v,w,T,k,S,R):Ke(b,w,T,!0):($&8&&u(m,""),Q&16&&q(U,m,v,w,T,k,S,R))},qt=(d,p,m,v,w,T,k,S,R)=>{d=d||yr,p=p||yr;const b=d.length,$=p.length,U=Math.min(b,$);let j;for(j=0;j<U;j++){const Q=p[j]=R?cn(p[j]):Ut(p[j]);E(d[j],Q,m,null,w,T,k,S,R)}b>$?Ke(d,w,T,!0,!1,U):q(p,m,v,w,T,k,S,R,U)},tn=(d,p,m,v,w,T,k,S,R)=>{let b=0;const $=p.length;let U=d.length-1,j=$-1;for(;b<=U&&b<=j;){const Q=d[b],ee=p[b]=R?cn(p[b]):Ut(p[b]);if(Un(Q,ee))E(Q,ee,m,null,w,T,k,S,R);else break;b++}for(;b<=U&&b<=j;){const Q=d[U],ee=p[j]=R?cn(p[j]):Ut(p[j]);if(Un(Q,ee))E(Q,ee,m,null,w,T,k,S,R);else break;U--,j--}if(b>U){if(b<=j){const Q=j+1,ee=Q<$?p[Q].el:v;for(;b<=j;)E(null,p[b]=R?cn(p[b]):Ut(p[b]),m,ee,w,T,k,S,R),b++}}else if(b>j)for(;b<=U;)rt(d[b],w,T,!0),b++;else{const Q=b,ee=b,ye=new Map;for(b=ee;b<=j;b++){const ut=p[b]=R?cn(p[b]):Ut(p[b]);ut.key!=null&&ye.set(ut.key,b)}let ge,Re=0;const It=j-ee+1;let cr=!1,Tu=0;const Jr=new Array(It);for(b=0;b<It;b++)Jr[b]=0;for(b=Q;b<=U;b++){const ut=d[b];if(Re>=It){rt(ut,w,T,!0);continue}let Ot;if(ut.key!=null)Ot=ye.get(ut.key);else for(ge=ee;ge<=j;ge++)if(Jr[ge-ee]===0&&Un(ut,p[ge])){Ot=ge;break}Ot===void 0?rt(ut,w,T,!0):(Jr[Ot-ee]=b+1,Ot>=Tu?Tu=Ot:cr=!0,E(ut,p[Ot],m,null,w,T,k,S,R),Re++)}const bu=cr?zv(Jr):yr;for(ge=bu.length-1,b=It-1;b>=0;b--){const ut=ee+b,Ot=p[ut],Su=ut+1<$?p[ut+1].el:v;Jr[b]===0?E(null,Ot,m,Su,w,T,k,S,R):cr&&(ge<0||b!==bu[ge]?kt(Ot,m,Su,2):ge--)}}},kt=(d,p,m,v,w=null)=>{const{el:T,type:k,transition:S,children:R,shapeFlag:b}=d;if(b&6){kt(d.component.subTree,p,m,v);return}if(b&128){d.suspense.move(p,m,v);return}if(b&64){k.move(d,p,m,N);return}if(k===ft){r(T,p,m);for(let U=0;U<R.length;U++)kt(R[U],p,m,v);r(d.anchor,p,m);return}if(k===_a){B(d,p,m);return}if(v!==2&&b&1&&S)if(v===0)S.beforeEnter(T),r(T,p,m),st(()=>S.enter(T),w);else{const{leave:U,delayLeave:j,afterLeave:Q}=S,ee=()=>r(T,p,m),ye=()=>{U(T,()=>{ee(),Q&&Q()})};j?j(T,ee,ye):ye()}else r(T,p,m)},rt=(d,p,m,v=!1,w=!1)=>{const{type:T,props:k,ref:S,children:R,dynamicChildren:b,shapeFlag:$,patchFlag:U,dirs:j}=d;if(S!=null&&tc(S,null,m,d,!0),$&256){p.ctx.deactivate(d);return}const Q=$&1&&j,ee=!ls(d);let ye;if(ee&&(ye=k&&k.onVnodeBeforeUnmount)&&Dt(ye,p,d),$&6)yi(d.component,m,v);else{if($&128){d.suspense.unmount(m,v);return}Q&&On(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,m,w,N,v):b&&(T!==ft||U>0&&U&64)?Ke(b,p,m,!1,!0):(T===ft&&U&384||!w&&$&16)&&Ke(R,p,m),v&&or(d)}(ee&&(ye=k&&k.onVnodeUnmounted)||Q)&&st(()=>{ye&&Dt(ye,p,d),Q&&On(d,null,p,"unmounted")},m)},or=d=>{const{type:p,el:m,anchor:v,transition:w}=d;if(p===ft){ar(m,v);return}if(p===_a){D(d);return}const T=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:k,delayLeave:S}=w,R=()=>k(m,T);S?S(d.el,T,R):R()}else T()},ar=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},yi=(d,p,m)=>{const{bum:v,scope:w,update:T,subTree:k,um:S}=d;v&&Pi(v),w.stop(),T&&(T.active=!1,rt(k,d,p,m)),S&&st(S,p),st(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ke=(d,p,m,v=!1,w=!1,T=0)=>{for(let k=T;k<d.length;k++)rt(d[k],p,m,v,w)},_=d=>d.shapeFlag&6?_(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),L=(d,p,m)=>{d==null?p._vnode&&rt(p._vnode,null,null,!0):E(p._vnode||null,d,p,null,null,null,m),Lu(),yd(),p._vnode=d},N={p:E,um:rt,m:kt,r:or,mt:Xe,mc:q,pc:ce,pbc:re,n:_,o:t};let V,le;return e&&([V,le]=e(N)),{render:L,hydrate:V,createApp:Fv(L,V)}}function Dn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nl(t,e,n=!1){const r=t.children,s=e.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=cn(s[i]),a.el=o.el),n||nl(o,a)),a.type===Fo&&(a.el=o.el)}}function zv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Wv=t=>t.__isTeleport,hs=t=>t&&(t.disabled||t.disabled===""),zu=t=>typeof SVGElement<"u"&&t instanceof SVGElement,nc=(t,e)=>{const n=t&&t.to;return Ae(n)?e?e(n):null:n},Gv={__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:h,pbc:f,o:{insert:g,querySelector:y,createText:E,createComment:C}}=l,A=hs(e.props);let{shapeFlag:O,children:B,dynamicChildren:D}=e;if(t==null){const Z=e.el=E(""),ne=e.anchor=E("");g(Z,n,r),g(ne,n,r);const pe=e.target=nc(e.props,y),q=e.targetAnchor=E("");pe&&(g(q,pe),o=o||zu(pe));const te=(re,Ie)=>{O&16&&u(B,re,Ie,s,i,o,a,c)};A?te(n,ne):pe&&te(pe,q)}else{e.el=t.el;const Z=e.anchor=t.anchor,ne=e.target=t.target,pe=e.targetAnchor=t.targetAnchor,q=hs(t.props),te=q?n:ne,re=q?Z:pe;if(o=o||zu(ne),D?(f(t.dynamicChildren,D,te,s,i,o,a),nl(t,e,!0)):c||h(t,e,te,re,s,i,o,a,!1),A)q||bi(e,n,Z,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ie=e.target=nc(e.props,y);Ie&&bi(e,Ie,null,l,0)}else q&&bi(e,ne,pe,l,1)}$d(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!hs(f))&&(i(l),a&16))for(let g=0;g<c.length;g++){const y=c[g];s(y,e,n,!0,!!y.dynamicChildren)}},move:bi,hydrate:Qv};function bi(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&r(o,e,n),(!h||hs(u))&&c&16)for(let f=0;f<l.length;f++)s(l[f],e,n,2);h&&r(a,e,n)}function Qv(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=nc(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(hs(e.props))e.anchor=l(o(t),e,a(t),n,r,s,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,r,s,i)}$d(e)}return e.anchor&&o(e.anchor)}const ZC=Gv;function $d(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const ft=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),_a=Symbol.for("v-stc"),fs=[];let St=null;function hn(t=!1){fs.push(St=t?null:[])}function Yv(){fs.pop(),St=fs[fs.length-1]||null}let bs=1;function Wu(t){bs+=t}function jd(t){return t.dynamicChildren=bs>0?St||yr:null,Yv(),bs>0&&St&&St.push(t),t}function Mi(t,e,n,r,s,i){return jd(at(t,e,n,r,s,i,!0))}function Xi(t,e,n,r,s){return jd(Se(t,e,n,r,s,!0))}function Ji(t){return t?t.__v_isVNode===!0:!1}function Un(t,e){return t.type===e.type&&t.key===e.key}const Vo="__vInternal",Bd=({key:t})=>t??null,xi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ae(t)||xe(t)||Y(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function at(t,e=null,n=null,r=0,s=null,i=t===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bd(e),ref:e&&xi(e),scopeId:Lo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return a?(rl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ae(n)?8:16),bs>0&&!o&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const Se=Xv;function Xv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===kd)&&(t=_t),Ji(t)){const a=Tn(t,e,!0);return n&&rl(a,n),bs>0&&!i&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(a_(t)&&(t=t.__vccOpts),e){e=Jv(e);let{class:a,style:c}=e;a&&!Ae(a)&&(e.class=ko(a)),_e(c)&&(ad(c)&&!K(c)&&(c=Oe({},c)),e.style=No(c))}const o=Ae(t)?1:pv(t)?128:Wv(t)?64:_e(t)?4:Y(t)?2:0;return at(t,e,n,r,s,o,i,!0)}function Jv(t){return t?ad(t)||Vo in t?Oe({},t):t:null}function Tn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Zv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bd(a),ref:e&&e.ref?n&&s?K(s)?s.concat(xi(e)):[s,xi(e)]:xi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tn(t.ssContent),ssFallback:t.ssFallback&&Tn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Lt(t=" ",e=0){return Se(Fo,null,t,e)}function Si(t="",e=!1){return e?(hn(),Xi(_t,null,t)):Se(_t,null,t)}function Ut(t){return t==null||typeof t=="boolean"?Se(_t):K(t)?Se(ft,null,t.slice()):typeof t=="object"?cn(t):Se(Fo,null,String(t))}function cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tn(t)}function rl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),rl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Vo in e)?e._ctx=$e:s===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),r&64?(n=16,e=[Lt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ko([e.class,r.class]));else if(s==="style")e.style=No([e.style,r.style]);else if(So(s)){const i=e[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Dt(t,e,n,r=null){vt(t,e,7,[n,r])}const e_=Ld();let t_=0;function n_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||e_,i={uid:t_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new yy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xd(r,s),emitsOptions:_d(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=av.bind(null,i),t.ce&&t.ce(i),i}let Me=null;const Hd=()=>Me||$e;let sl,lr,Gu="__VUE_INSTANCE_SETTERS__";(lr=qa()[Gu])||(lr=qa()[Gu]=[]),lr.push(t=>Me=t),sl=t=>{lr.length>1?lr.forEach(e=>e(t)):lr[0](t)};const Sr=t=>{sl(t),t.scope.on()},Kn=()=>{Me&&Me.scope.off(),sl(null)};function qd(t){return t.vnode.shapeFlag&4}let Ss=!1;function r_(t,e=!1){Ss=e;const{props:n,children:r}=t.vnode,s=qd(t);Vv(t,n,s,e),Bv(t,r);const i=s?s_(t,e):void 0;return Ss=!1,i}function s_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cd(new Proxy(t.ctx,kv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?zd(t):null;Sr(t),Ur();const i=yn(r,t,0,[t.props,s]);if(Fr(),Kn(),Kf(i)){if(i.then(Kn,Kn),e)return i.then(o=>{Qu(t,o,e)}).catch(o=>{Do(o,t,0)});t.asyncDep=i}else Qu(t,i,e)}else Kd(t,e)}function Qu(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=dd(e)),Kd(t,n)}let Yu;function Kd(t,e,n){const r=t.type;if(!t.render){if(!e&&Yu&&!r.render){const s=r.template||el(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Oe(Oe({isCustomElement:i,delimiters:a},o),c);r.render=Yu(s,l)}}t.render=r.render||At}Sr(t),Ur(),Dv(t),Fr(),Kn()}function i_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}}))}function zd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return i_(t)},slots:t.slots,emit:t.emit,expose:e}}function $o(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dd(cd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in us)return us[n](t)},has(e,n){return n in e||n in us}}))}function o_(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function a_(t){return Y(t)&&"__vccOpts"in t}const yt=(t,e)=>tv(t,e,Ss);function il(t,e,n){const r=arguments.length;return r===2?_e(e)&&!K(e)?Ji(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ji(n)&&(n=[n]),Se(t,e,n))}const c_=Symbol.for("v-scx"),l_=()=>Ct(c_),u_="3.3.4",h_="http://www.w3.org/2000/svg",Fn=typeof document<"u"?document:null,Xu=Fn&&Fn.createElement("template"),f_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Fn.createElementNS(h_,t):Fn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Xu.innerHTML=r?`<svg>${t}</svg>`:t;const a=Xu.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function d_(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function p_(t,e,n){const r=t.style,s=Ae(n);if(n&&!s){if(e&&!Ae(e))for(const i in e)n[i]==null&&rc(r,i,"");for(const i in n)rc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ju=/\s*!important$/;function rc(t,e,n){if(K(n))n.forEach(r=>rc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=g_(t,e);Ju.test(n)?t.setProperty(nr(r),n.replace(Ju,""),"important"):t[r]=n}}const Zu=["Webkit","Moz","ms"],wa={};function g_(t,e){const n=wa[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return wa[e]=r;r=Ro(r);for(let s=0;s<Zu.length;s++){const i=Zu[s]+r;if(i in t)return wa[e]=i}return e}const eh="http://www.w3.org/1999/xlink";function m_(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(eh,e.slice(6,e.length)):t.setAttributeNS(eh,e,n);else{const i=my(e);n==null||i&&!Gf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function y_(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Gf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function dr(t,e,n,r){t.addEventListener(e,n,r)}function v_(t,e,n,r){t.removeEventListener(e,n,r)}function __(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=w_(e);if(r){const l=i[e]=T_(r,s);dr(t,a,l,c)}else o&&(v_(t,a,o,c),i[e]=void 0)}}const th=/(?:Once|Passive|Capture)$/;function w_(t){let e;if(th.test(t)){e={};let r;for(;r=t.match(th);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nr(t.slice(2)),e]}let Ea=0;const E_=Promise.resolve(),I_=()=>Ea||(E_.then(()=>Ea=0),Ea=Date.now());function T_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;vt(b_(r,n.value),e,5,[r])};return n.value=t,n.attached=I_(),n}function b_(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const nh=/^on[a-z]/,S_=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?d_(t,r,s):e==="style"?p_(t,n,r):So(e)?$c(e)||__(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A_(t,e,r,s))?y_(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),m_(t,e,r,s))};function A_(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&nh.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||nh.test(e)&&Ae(n)?!1:e in t}const rn="transition",Zr="animation",Wd=(t,{slots:e})=>il(_v,C_(t),e);Wd.displayName="Transition";const Gd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Wd.props=Oe({},Id,Gd);const Pn=(t,e=[])=>{K(t)?t.forEach(n=>n(...e)):t&&t(...e)},rh=t=>t?K(t)?t.some(e=>e.length>1):t.length>1:!1;function C_(t){const e={};for(const F in t)F in Gd||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,y=R_(s),E=y&&y[0],C=y&&y[1],{onBeforeEnter:A,onEnter:O,onEnterCancelled:B,onLeave:D,onLeaveCancelled:Z,onBeforeAppear:ne=A,onAppear:pe=O,onAppearCancelled:q=B}=e,te=(F,he,Xe)=>{Ln(F,he?u:a),Ln(F,he?l:o),Xe&&Xe()},re=(F,he)=>{F._isLeaving=!1,Ln(F,h),Ln(F,g),Ln(F,f),he&&he()},Ie=F=>(he,Xe)=>{const Ht=F?pe:O,Ce=()=>te(he,F,Xe);Pn(Ht,[he,Ce]),sh(()=>{Ln(he,F?c:i),sn(he,F?u:a),rh(Ht)||ih(he,r,E,Ce)})};return Oe(e,{onBeforeEnter(F){Pn(A,[F]),sn(F,i),sn(F,o)},onBeforeAppear(F){Pn(ne,[F]),sn(F,c),sn(F,l)},onEnter:Ie(!1),onAppear:Ie(!0),onLeave(F,he){F._isLeaving=!0;const Xe=()=>re(F,he);sn(F,h),O_(),sn(F,f),sh(()=>{F._isLeaving&&(Ln(F,h),sn(F,g),rh(D)||ih(F,r,C,Xe))}),Pn(D,[F,Xe])},onEnterCancelled(F){te(F,!1),Pn(B,[F])},onAppearCancelled(F){te(F,!0),Pn(q,[F])},onLeaveCancelled(F){re(F),Pn(Z,[F])}})}function R_(t){if(t==null)return null;if(_e(t))return[Ia(t.enter),Ia(t.leave)];{const e=Ia(t);return[e,e]}}function Ia(t){return uy(t)}function sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ln(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function sh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let N_=0;function ih(t,e,n,r){const s=t._endId=++N_,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=k_(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=g=>{g.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function k_(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(`${rn}Delay`),i=r(`${rn}Duration`),o=oh(s,i),a=r(`${Zr}Delay`),c=r(`${Zr}Duration`),l=oh(a,c);let u=null,h=0,f=0;e===rn?o>0&&(u=rn,h=o,f=i.length):e===Zr?l>0&&(u=Zr,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?rn:Zr:null,f=u?u===rn?i.length:c.length:0);const g=u===rn&&/\b(transform|all)(,|$)/.test(r(`${rn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:g}}function oh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ah(n)+ah(t[r])))}function ah(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function O_(){return document.body.offsetHeight}const ch=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Pi(e,n):e};function D_(t){t.target.composing=!0}function lh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const eR={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ch(s);const i=r||s.props&&s.props.type==="number";dr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ha(a)),t._assign(a)}),n&&dr(t,"change",()=>{t.value=t.value.trim()}),e||(dr(t,"compositionstart",D_),dr(t,"compositionend",lh),dr(t,"change",lh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ch(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ha(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},P_=["ctrl","shift","alt","meta"],L_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>P_.some(n=>t[`${n}Key`]&&!e.includes(n))},tR=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=L_[e[s]];if(i&&i(n,e))return}return t(n,...r)},M_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nR=(t,e)=>n=>{if(!("key"in n))return;const r=nr(n.key);if(e.some(s=>s===r||M_[s]===r))return t(n)},rR={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):es(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),es(t,!0),r.enter(t)):r.leave(t,()=>{es(t,!1)}):es(t,e))},beforeUnmount(t,{value:e}){es(t,e)}};function es(t,e){t.style.display=e?t._vod:"none"}const x_=Oe({patchProp:S_},f_);let uh;function U_(){return uh||(uh=qv(x_))}const F_=(...t)=>{const e=U_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=V_(r);if(!s)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function V_(t){return Ae(t)?document.querySelector(t):t}function $_(){return Qd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Qd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const j_=typeof Proxy=="function",B_="devtools-plugin:setup",H_="plugin:settings:set";let ur,sc;function q_(){var t;return ur!==void 0||(typeof window<"u"&&window.performance?(ur=!0,sc=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ur=!0,sc=global.perf_hooks.performance):ur=!1),ur}function K_(){return q_()?sc.now():Date.now()}class z_{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return K_()}},n&&n.on(H_,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function W_(t,e){const n=t,r=Qd(),s=$_(),i=j_&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(B_,t,e);else{const o=i?new z_(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Yd="store";function Xd(t){return t===void 0&&(t=null),Ct(t!==null?t:Yd)}function $r(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function G_(t){return t!==null&&typeof t=="object"}function Q_(t){return t&&typeof t.then=="function"}function Y_(t,e){return function(){return t(e)}}function Jd(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Zd(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;jo(t,n,[],t._modules.root,!0),ol(t,n,e)}function ol(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};$r(s,function(o,a){i[a]=Y_(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Vr({data:e}),t.strict&&tw(t),r&&n&&t._withCommit(function(){r.data=null})}function jo(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=al(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=X_(t,o,n);r.forEachMutation(function(u,h){var f=o+h;J_(t,f,u,l)}),r.forEachAction(function(u,h){var f=u.root?h:o+h,g=u.handler||u;Z_(t,f,g,l)}),r.forEachGetter(function(u,h){var f=o+h;ew(t,f,u,l)}),r.forEachChild(function(u,h){jo(t,e,n.concat(h),u,s)})}function X_(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Zi(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=Zi(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return ep(t,e)}},state:{get:function(){return al(t.state,n)}}}),s}function ep(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function J_(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function Z_(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return Q_(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function ew(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function tw(t){qn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function al(t,e){return e.reduce(function(n,r){return n[r]},t)}function Zi(t,e,n){return G_(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var nw="vuex bindings",hh="vuex:mutations",Ta="vuex:actions",hr="vuex",rw=0;function sw(t,e){W_({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[nw]},function(n){n.addTimelineLayer({id:hh,label:"Vuex Mutations",color:fh}),n.addTimelineLayer({id:Ta,label:"Vuex Actions",color:fh}),n.addInspector({id:hr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===hr)if(r.filter){var s=[];sp(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[rp(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===hr){var s=r.nodeId;ep(e,s),r.state=aw(lw(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===hr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(hr),n.sendInspectorState(hr),n.addTimelineEvent({layerId:hh,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=rw++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Ta,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Ta,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var fh=8702998,iw=6710886,ow=16777215,tp={label:"namespaced",textColor:ow,backgroundColor:iw};function np(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function rp(t,e){return{id:e||"root",label:np(e),tags:t.namespaced?[tp]:[],children:Object.keys(t._children).map(function(n){return rp(t._children[n],e+n+"/")})}}function sp(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[tp]:[]}),Object.keys(e._children).forEach(function(s){sp(t,e._children[s],n,r+s+"/")})}function aw(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=cw(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?np(o):o,editable:!1,value:ic(function(){return i[o]})}})}return s}function cw(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=ic(function(){return t[n]})}else e[n]=ic(function(){return t[n]})}),e}function lw(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function ic(t){try{return t()}catch(e){return e}}var Nt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},ip={namespaced:{configurable:!0}};ip.namespaced.get=function(){return!!this._rawModule.namespaced};Nt.prototype.addChild=function(e,n){this._children[e]=n};Nt.prototype.removeChild=function(e){delete this._children[e]};Nt.prototype.getChild=function(e){return this._children[e]};Nt.prototype.hasChild=function(e){return e in this._children};Nt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Nt.prototype.forEachChild=function(e){$r(this._children,e)};Nt.prototype.forEachGetter=function(e){this._rawModule.getters&&$r(this._rawModule.getters,e)};Nt.prototype.forEachAction=function(e){this._rawModule.actions&&$r(this._rawModule.actions,e)};Nt.prototype.forEachMutation=function(e){this._rawModule.mutations&&$r(this._rawModule.mutations,e)};Object.defineProperties(Nt.prototype,ip);var rr=function(e){this.register([],e,!1)};rr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};rr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};rr.prototype.update=function(e){op([],this.root,e)};rr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Nt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&$r(n.modules,function(a,c){s.register(e.concat(c),a,r)})};rr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};rr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function op(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;op(t.concat(r),e.getChild(r),n.modules[r])}}function uw(t){return new lt(t)}var lt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new rr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,g){return c.call(o,f,g)},this.commit=function(f,g,y){return l.call(o,f,g,y)},this.strict=s;var u=this._modules.root.state;jo(this,u,[],this._modules.root),ol(this,u),r.forEach(function(h){return h(n)})},cl={state:{configurable:!0}};lt.prototype.install=function(e,n){e.provide(n||Yd,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&sw(e,this)};cl.state.get=function(){return this._state.data};cl.state.set=function(t){};lt.prototype.commit=function(e,n,r){var s=this,i=Zi(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};lt.prototype.dispatch=function(e,n){var r=this,s=Zi(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,f)})}catch{}h(f)})})}};lt.prototype.subscribe=function(e,n){return Jd(e,this._subscribers,n)};lt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Jd(r,this._actionSubscribers,n)};lt.prototype.watch=function(e,n,r){var s=this;return qn(function(){return e(s.state,s.getters)},n,Object.assign({},r))};lt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};lt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),jo(this,this.state,e,this._modules.get(e),r.preserveState),ol(this,this.state)};lt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=al(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Zd(this)};lt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};lt.prototype.hotUpdate=function(e){this._modules.update(e),Zd(this,!0)};lt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(lt.prototype,cl);const hw="/cosmo-nav/assets/images/logo.svg";/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const pr=typeof window<"u";function fw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function ba(t,e){const n={};for(const r in e){const s=e[r];n[r]=Rt(s)?s.map(t):t(s)}return n}const ds=()=>{},Rt=Array.isArray,dw=/\/$/,pw=t=>t.replace(dw,"");function Sa(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=vw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function gw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ar(e.matched[r],n.matched[s])&&ap(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ar(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ap(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yw(t[n],e[n]))return!1;return!0}function yw(t,e){return Rt(t)?ph(t,e):Rt(e)?ph(e,t):t===e}function ph(t,e){return Rt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function vw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var As;(function(t){t.pop="pop",t.push="push"})(As||(As={}));var ps;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ps||(ps={}));function _w(t){if(!t)if(pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pw(t)}const ww=/^[^#]+#/;function Ew(t,e){return t.replace(ww,"#")+e}function Iw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Bo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Tw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Iw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gh(t,e){return(history.state?history.state.position-e:-1)+t}const oc=new Map;function bw(t,e){oc.set(t,e)}function Sw(t){const e=oc.get(t);return oc.delete(t),e}let Aw=()=>location.protocol+"//"+location.host;function cp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),dh(c,"")}return dh(n,t)+r+s}function Cw(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=cp(t,location),y=n.value,E=e.value;let C=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}C=E?f.position-E.position:0}else r(g);s.forEach(A=>{A(n.value,y,{delta:C,type:As.pop,direction:C?C>0?ps.forward:ps.back:ps.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(fe({},f.state,{scroll:Bo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function mh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Bo():null}}function Rw(t){const{history:e,location:n}=window,r={value:cp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Aw()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=fe({},e.state,mh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=fe({},s.value,e.state,{forward:c,scroll:Bo()});i(u.current,u,!0);const h=fe({},mh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Nw(t){t=_w(t);const e=Rw(t),n=Cw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:t,go:r,createHref:Ew.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function kw(t){return typeof t=="string"||t&&typeof t=="object"}function lp(t){return typeof t=="string"||typeof t=="symbol"}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},up=Symbol("");var yh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yh||(yh={}));function Cr(t,e){return fe(new Error,{type:t,[up]:!0},e)}function Kt(t,e){return t instanceof Error&&up in t&&(e==null||!!(t.type&e))}const vh="[^/]+?",Ow={sensitive:!1,strict:!1,start:!0,end:!0},Dw=/[.+*?^${}()[\]/\\]/g;function Pw(t,e){const n=fe({},Ow,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Dw,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:E,optional:C,regexp:A}=f;i.push({name:y,repeatable:E,optional:C});const O=A||vh;if(O!==vh){g+=10;try{new RegExp(`(${O})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${y}" (${O}): `+D.message)}}let B=E?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(B=C&&l.length<2?`(?:/${B})`:"/"+B),C&&(B+="?"),s+=B,g+=20,C&&(g+=-8),E&&(g+=-20),O===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:E,optional:C}=g,A=y in l?l[y]:"";if(Rt(A)&&!E)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const O=Rt(A)?A.join("/"):A;if(!O)if(C)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Lw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Mw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Lw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(_h(r))return 1;if(_h(s))return-1}return s.length-r.length}function _h(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xw={type:0,value:""},Uw=/[a-zA-Z0-9_]/;function Fw(t){if(!t)return[[]];if(t==="/")return[[xw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:Uw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Vw(t,e,n){const r=Pw(Fw(t.path),n),s=fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $w(t,e){const n=[],r=new Map;e=Ih({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,y=jw(u);y.aliasOf=f&&f.record;const E=Ih(e,u),C=[y];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of B)C.push(fe({},y,{components:f?f.record.components:y.components,path:D,aliasOf:f?f.record:y}))}let A,O;for(const B of C){const{path:D}=B;if(h&&D[0]!=="/"){const Z=h.record.path,ne=Z[Z.length-1]==="/"?"":"/";B.path=h.record.path+(D&&ne+D)}if(A=Vw(B,h,E),f?f.alias.push(A):(O=O||A,O!==A&&O.alias.push(A),g&&u.name&&!Eh(A)&&o(u.name)),y.children){const Z=y.children;for(let ne=0;ne<Z.length;ne++)i(Z[ne],A,f&&f.children[ne])}f=f||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return O?()=>{o(O)}:ds}function o(u){if(lp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Mw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!hp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Eh(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},y,E;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Cr(1,{location:u});E=f.record.name,g=fe(wh(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&wh(u.params,f.keys.map(O=>O.name))),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(O=>O.re.test(y)),f&&(g=f.parse(y),E=f.record.name);else{if(f=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw Cr(1,{location:u,currentLocation:h});E=f.record.name,g=fe({},h.params,u.params),y=f.stringify(g)}const C=[];let A=f;for(;A;)C.unshift(A.record),A=A.parent;return{name:E,path:y,params:g,matched:C,meta:Hw(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function wh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Bw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Bw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Eh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Hw(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Ih(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hp(t,e){return e.children.some(n=>n===t||hp(t,n))}const fp=/#/g,qw=/&/g,Kw=/\//g,zw=/=/g,Ww=/\?/g,dp=/\+/g,Gw=/%5B/g,Qw=/%5D/g,pp=/%5E/g,Yw=/%60/g,gp=/%7B/g,Xw=/%7C/g,mp=/%7D/g,Jw=/%20/g;function ll(t){return encodeURI(""+t).replace(Xw,"|").replace(Gw,"[").replace(Qw,"]")}function Zw(t){return ll(t).replace(gp,"{").replace(mp,"}").replace(pp,"^")}function ac(t){return ll(t).replace(dp,"%2B").replace(Jw,"+").replace(fp,"%23").replace(qw,"%26").replace(Yw,"`").replace(gp,"{").replace(mp,"}").replace(pp,"^")}function eE(t){return ac(t).replace(zw,"%3D")}function tE(t){return ll(t).replace(fp,"%23").replace(Ww,"%3F")}function nE(t){return t==null?"":tE(t).replace(Kw,"%2F")}function eo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function rE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dp," "),o=i.indexOf("="),a=eo(o<0?i:i.slice(0,o)),c=o<0?null:eo(i.slice(o+1));if(a in e){let l=e[a];Rt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Th(t){let e="";for(let n in t){const r=t[n];if(n=eE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Rt(r)?r.map(i=>i&&ac(i)):[r&&ac(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function sE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Rt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const iE=Symbol(""),bh=Symbol(""),ul=Symbol(""),hl=Symbol(""),cc=Symbol("");function ts(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ln(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Cr(4,{from:n,to:e})):h instanceof Error?a(h):kw(h)?a(Cr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Aa(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(oE(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ln(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=fw(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ln(f,n,r,i,o)()}))}}return s}function oE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sh(t){const e=Ct(ul),n=Ct(hl),r=yt(()=>e.resolve(Pe(t.to))),s=yt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ar.bind(null,u));if(f>-1)return f;const g=Ah(c[l-2]);return l>1&&Ah(u)===g&&h[h.length-1].path!==g?h.findIndex(Ar.bind(null,c[l-2])):f}),i=yt(()=>s.value>-1&&lE(n.params,r.value.params)),o=yt(()=>s.value>-1&&s.value===n.matched.length-1&&ap(n.params,r.value.params));function a(c={}){return cE(c)?e[Pe(t.replace)?"replace":"push"](Pe(t.to)).catch(ds):Promise.resolve()}return{route:r,href:yt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const aE=Mo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sh,setup(t,{slots:e}){const n=Vr(Sh(t)),{options:r}=Ct(ul),s=yt(()=>({[Ch(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ch(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:il("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Mt=aE;function cE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Rt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ah(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ch=(t,e,n)=>t??e??n,uE=Mo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ct(cc),s=yt(()=>t.route||r.value),i=Ct(bh,0),o=yt(()=>{let l=Pe(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=yt(()=>s.value.matched[o.value]);Li(bh,yt(()=>o.value+1)),Li(iE,a),Li(cc,s);const c=hd();return qn(()=>[c.value,a.value,t.name],([l,u,h],[f,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Ar(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Rh(n.default,{Component:f,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,C=il(f,fe({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Rh(n.default,{Component:C,route:l})||C}}});function Rh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hE=uE;function fE(t){const e=$w(t.routes,t),n=t.parseQuery||rE,r=t.stringifyQuery||Th,s=t.history,i=ts(),o=ts(),a=ts(),c=Gy(on);let l=on;pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ba.bind(null,_=>""+_),h=ba.bind(null,nE),f=ba.bind(null,eo);function g(_,L){let N,V;return lp(_)?(N=e.getRecordMatcher(_),V=L):V=_,e.addRoute(V,N)}function y(_){const L=e.getRecordMatcher(_);L&&e.removeRoute(L)}function E(){return e.getRoutes().map(_=>_.record)}function C(_){return!!e.getRecordMatcher(_)}function A(_,L){if(L=fe({},L||c.value),typeof _=="string"){const m=Sa(n,_,L.path),v=e.resolve({path:m.path},L),w=s.createHref(m.fullPath);return fe(m,v,{params:f(v.params),hash:eo(m.hash),redirectedFrom:void 0,href:w})}let N;if("path"in _)N=fe({},_,{path:Sa(n,_.path,L.path).path});else{const m=fe({},_.params);for(const v in m)m[v]==null&&delete m[v];N=fe({},_,{params:h(m)}),L.params=h(L.params)}const V=e.resolve(N,L),le=_.hash||"";V.params=u(f(V.params));const d=gw(r,fe({},_,{hash:Zw(le),path:V.path})),p=s.createHref(d);return fe({fullPath:d,hash:le,query:r===Th?sE(_.query):_.query||{}},V,{redirectedFrom:void 0,href:p})}function O(_){return typeof _=="string"?Sa(n,_,c.value.path):fe({},_)}function B(_,L){if(l!==_)return Cr(8,{from:L,to:_})}function D(_){return pe(_)}function Z(_){return D(fe(O(_),{replace:!0}))}function ne(_){const L=_.matched[_.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let V=typeof N=="function"?N(_):N;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=O(V):{path:V},V.params={}),fe({query:_.query,hash:_.hash,params:"path"in V?{}:_.params},V)}}function pe(_,L){const N=l=A(_),V=c.value,le=_.state,d=_.force,p=_.replace===!0,m=ne(N);if(m)return pe(fe(O(m),{state:typeof m=="object"?fe({},le,m.state):le,force:d,replace:p}),L||N);const v=N;v.redirectedFrom=L;let w;return!d&&mw(r,V,N)&&(w=Cr(16,{to:v,from:V}),kt(V,V,!0,!1)),(w?Promise.resolve(w):re(v,V)).catch(T=>Kt(T)?Kt(T,2)?T:tn(T):ce(T,v,V)).then(T=>{if(T){if(Kt(T,2))return pe(fe({replace:p},O(T.to),{state:typeof T.to=="object"?fe({},le,T.to.state):le,force:d}),L||v)}else T=F(v,V,!0,p,le);return Ie(v,V,T),T})}function q(_,L){const N=B(_,L);return N?Promise.reject(N):Promise.resolve()}function te(_){const L=ar.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(_):_()}function re(_,L){let N;const[V,le,d]=dE(_,L);N=Aa(V.reverse(),"beforeRouteLeave",_,L);for(const m of V)m.leaveGuards.forEach(v=>{N.push(ln(v,_,L))});const p=q.bind(null,_,L);return N.push(p),Ke(N).then(()=>{N=[];for(const m of i.list())N.push(ln(m,_,L));return N.push(p),Ke(N)}).then(()=>{N=Aa(le,"beforeRouteUpdate",_,L);for(const m of le)m.updateGuards.forEach(v=>{N.push(ln(v,_,L))});return N.push(p),Ke(N)}).then(()=>{N=[];for(const m of _.matched)if(m.beforeEnter&&!L.matched.includes(m))if(Rt(m.beforeEnter))for(const v of m.beforeEnter)N.push(ln(v,_,L));else N.push(ln(m.beforeEnter,_,L));return N.push(p),Ke(N)}).then(()=>(_.matched.forEach(m=>m.enterCallbacks={}),N=Aa(d,"beforeRouteEnter",_,L),N.push(p),Ke(N))).then(()=>{N=[];for(const m of o.list())N.push(ln(m,_,L));return N.push(p),Ke(N)}).catch(m=>Kt(m,8)?m:Promise.reject(m))}function Ie(_,L,N){for(const V of a.list())te(()=>V(_,L,N))}function F(_,L,N,V,le){const d=B(_,L);if(d)return d;const p=L===on,m=pr?history.state:{};N&&(V||p?s.replace(_.fullPath,fe({scroll:p&&m&&m.scroll},le)):s.push(_.fullPath,le)),c.value=_,kt(_,L,N,p),tn()}let he;function Xe(){he||(he=s.listen((_,L,N)=>{if(!yi.listening)return;const V=A(_),le=ne(V);if(le){pe(fe(le,{replace:!0}),V).catch(ds);return}l=V;const d=c.value;pr&&bw(gh(d.fullPath,N.delta),Bo()),re(V,d).catch(p=>Kt(p,12)?p:Kt(p,2)?(pe(p.to,V).then(m=>{Kt(m,20)&&!N.delta&&N.type===As.pop&&s.go(-1,!1)}).catch(ds),Promise.reject()):(N.delta&&s.go(-N.delta,!1),ce(p,V,d))).then(p=>{p=p||F(V,d,!1),p&&(N.delta&&!Kt(p,8)?s.go(-N.delta,!1):N.type===As.pop&&Kt(p,20)&&s.go(-1,!1)),Ie(V,d,p)}).catch(ds)}))}let Ht=ts(),Ce=ts(),me;function ce(_,L,N){tn(_);const V=Ce.list();return V.length?V.forEach(le=>le(_,L,N)):console.error(_),Promise.reject(_)}function qt(){return me&&c.value!==on?Promise.resolve():new Promise((_,L)=>{Ht.add([_,L])})}function tn(_){return me||(me=!_,Xe(),Ht.list().forEach(([L,N])=>_?N(_):L()),Ht.reset()),_}function kt(_,L,N,V){const{scrollBehavior:le}=t;if(!pr||!le)return Promise.resolve();const d=!N&&Sw(gh(_.fullPath,0))||(V||!N)&&history.state&&history.state.scroll||null;return gd().then(()=>le(_,L,d)).then(p=>p&&Tw(p)).catch(p=>ce(p,_,L))}const rt=_=>s.go(_);let or;const ar=new Set,yi={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:C,getRoutes:E,resolve:A,options:t,push:D,replace:Z,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ce.add,isReady:qt,install(_){const L=this;_.component("RouterLink",Mt),_.component("RouterView",hE),_.config.globalProperties.$router=L,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(c)}),pr&&!or&&c.value===on&&(or=!0,D(s.location).catch(le=>{}));const N={};for(const le in on)N[le]=yt(()=>c.value[le]);_.provide(ul,L),_.provide(hl,Vr(N)),_.provide(cc,c);const V=_.unmount;ar.add(_),_.unmount=function(){ar.delete(_),ar.size<1&&(l=on,he&&he(),he=null,c.value=on,or=!1,me=!1),V()}}};function Ke(_){return _.reduce((L,N)=>L.then(()=>te(N)),Promise.resolve())}return yi}function dE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ar(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ar(l,c))||s.push(c))}return[n,r,s]}function pE(){return Ct(hl)}const Cn=t=>(cv("data-v-94c7823c"),t=t(),lv(),t),gE=Cn(()=>at("img",{alt:"Vue logo",src:hw,width:"125",height:"125"},null,-1)),mE=Cn(()=>at("span",null,null,-1)),yE=Cn(()=>at("span",null,null,-1)),vE=Cn(()=>at("span",null,null,-1)),_E=[mE,yE,vE],wE={key:0,class:"auth-wrapper"},EE={key:1,class:"profile-wrapper"},IE=Cn(()=>at("span",{class:"label"},"Profile",-1)),TE={class:"drop-down"},bE=Cn(()=>at("i",{class:"cs-user"},null,-1)),SE=Cn(()=>at("i",{class:"cs-heart"},null,-1)),AE=Cn(()=>at("i",{class:"cs-sign-out"},null,-1)),CE=Mo({__name:"Nav",setup(t){const e=Xd(),n=pE(),r=()=>{e.dispatch("logout")},s=()=>{const i=document.querySelector(".menu-toggler"),o=document.querySelector("nav");i.classList.contains("active")?(i.classList.remove("active"),o.classList.remove("active")):(i.classList.add("active"),o.classList.add("active"))};return qn(n,(i,o,a)=>{document.querySelector(".menu-toggler.active")&&s()}),(i,o)=>(hn(),Mi("header",null,[Se(Pe(Mt),{to:"/",class:"logo"},{default:Pt(()=>[gE]),_:1}),at("a",{class:"menu-toggler",ref:"menuToggler",href:"javascript:void(0);",onClick:o[0]||(o[0]=a=>s())},_E,512),at("nav",null,[Se(Pe(Mt),{to:"/"},{default:Pt(()=>[Lt("Home")]),_:1}),Se(Pe(Mt),{to:{name:"dailyPic"}},{default:Pt(()=>[Lt("Picture of the Day")]),_:1}),Se(Pe(Mt),{to:{name:"currentLocation"}},{default:Pt(()=>[Lt("Current Location")]),_:1}),Se(Pe(Mt),{to:{name:"earthImage"}},{default:Pt(()=>[Lt("Most Recent Earth Image")]),_:1}),Pe(e).state.user?Si("",!0):(hn(),Mi("div",wE,[Pe(e).state.user?Si("",!0):(hn(),Xi(Pe(Mt),{key:0,to:{name:"login"}},{default:Pt(()=>[Lt(" Login ")]),_:1})),Pe(e).state.user?Si("",!0):(hn(),Xi(Pe(Mt),{key:1,to:{name:"register"}},{default:Pt(()=>[Lt(" Register ")]),_:1}))])),Pe(e).state.user?(hn(),Mi("div",EE,[IE,at("div",TE,[Se(Pe(Mt),{to:{name:"profile"}},{default:Pt(()=>[bE,Lt(" View Profile ")]),_:1}),Se(Pe(Mt),{to:{name:"favoriteImages"}},{default:Pt(()=>[SE,Lt(" Favorite Images ")]),_:1}),at("a",{href:"javascript:void(0);",onClick:r},[AE,Lt(" Logout ")])])])):Si("",!0)])]))}});const RE=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},NE=RE(CE,[["__scopeId","data-v-94c7823c"]]),kE=Mo({__name:"App",setup(t){const e=Xd();return Ad(()=>{e.dispatch("fetchUser")}),(n,r)=>{const s=Nv("RouterView");return hn(),Mi(ft,null,[Se(NE),Se(s)],64)}}}),OE="modulepreload",DE=function(t){return"/cosmo-nav/"+t},Nh={},Rn=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=DE(i),i in Nh)return;Nh[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":OE,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
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
 *//**
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
 */const PE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},LE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ME={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},xE=function(t){try{return ME.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class UE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function vp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FE(){return Ue().indexOf("Electron/")>=0}function wp(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VE(){return Ue().indexOf("MSAppHost/")>=0}/**
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
 */const $E="FirebaseError";class jr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$E,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?jE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new jr(s,a,r)}}function jE(t,e){return t.replace(BE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const BE=/\{\$([^}]+)}/g;function HE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function to(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kh(i)&&kh(o)){if(!to(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kh(t){return t!==null&&typeof t=="object"}/**
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
 */function Ks(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function os(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function as(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qE(t,e){const n=new KE(t,e);return n.subscribe.bind(n)}class KE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ca),s.error===void 0&&(s.error=Ca),s.complete===void 0&&(s.complete=Ca);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ca(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mn="[DEFAULT]";/**
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
 */class WE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QE(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GE(t){return t===Mn?void 0:t}function QE(t){return t.instantiationMode==="EAGER"}/**
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
 */class YE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const XE={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},JE=ae.INFO,ZE={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},eI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ZE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fl{constructor(e){this.name=e,this._logLevel=JE,this._logHandler=eI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}/**
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
 */class tI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lc="@firebase/app",Oh="0.7.7";/**
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
 */const dl=new fl("@firebase/app"),rI="@firebase/app-compat",sI="@firebase/analytics-compat",iI="@firebase/analytics",oI="@firebase/app-check-compat",aI="@firebase/app-check",cI="@firebase/auth",lI="@firebase/auth-compat",uI="@firebase/database",hI="@firebase/database-compat",fI="@firebase/functions",dI="@firebase/functions-compat",pI="@firebase/installations",gI="@firebase/installations-compat",mI="@firebase/messaging",yI="@firebase/messaging-compat",vI="@firebase/performance",_I="@firebase/performance-compat",wI="@firebase/remote-config",EI="@firebase/remote-config-compat",II="@firebase/storage",TI="@firebase/storage-compat",bI="@firebase/firestore",SI="@firebase/firestore-compat",AI="firebase",CI="9.4.0";/**
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
 */const Ep="[DEFAULT]",RI={[lc]:"fire-core",[rI]:"fire-core-compat",[iI]:"fire-analytics",[sI]:"fire-analytics-compat",[aI]:"fire-app-check",[oI]:"fire-app-check-compat",[cI]:"fire-auth",[lI]:"fire-auth-compat",[uI]:"fire-rtdb",[hI]:"fire-rtdb-compat",[fI]:"fire-fn",[dI]:"fire-fn-compat",[pI]:"fire-iid",[gI]:"fire-iid-compat",[mI]:"fire-fcm",[yI]:"fire-fcm-compat",[vI]:"fire-perf",[_I]:"fire-perf-compat",[wI]:"fire-rc",[EI]:"fire-rc-compat",[II]:"fire-gcs",[TI]:"fire-gcs-compat",[bI]:"fire-fst",[SI]:"fire-fst-compat","fire-js":"fire-js",[AI]:"fire-js-all"};/**
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
 */const no=new Map,uc=new Map;function NI(t,e){try{t.container.addComponent(e)}catch(n){dl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cs(t){const e=t.name;if(uc.has(e))return dl.debug(`There were multiple attempts to register component ${e}.`),!1;uc.set(e,t);for(const n of no.values())NI(n,t);return!0}function pl(t,e){return t.container.getProvider(e)}/**
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
 */const kI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ro=new qs("app","Firebase",kI);/**
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
 */class OI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ro.create("app-deleted",{appName:this._name})}}/**
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
 */const zs=CI;function DI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ep,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ro.create("bad-app-name",{appName:String(r)});const s=no.get(r);if(s){if(to(t,s.options)&&to(n,s.config))return s;throw ro.create("duplicate-app",{appName:r})}const i=new YE(r);for(const a of uc.values())i.addComponent(a);const o=new OI(t,n,i);return no.set(r,o),o}function Ip(t=Ep){const e=no.get(t);if(!e)throw ro.create("no-app",{appName:t});return e}function vn(t,e,n){var r;let s=(r=RI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dl.warn(a.join(" "));return}Cs(new Rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function PI(t){Cs(new Rr("platform-logger",e=>new tI(e),"PRIVATE")),vn(lc,Oh,t),vn(lc,Oh,"esm2017"),vn("fire-js","")}PI("");var LI="firebase",MI="9.4.0";/**
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
 */vn(LI,MI,"app");function gl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Tp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xI=Tp,bp=new qs("auth","Firebase",Tp());/**
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
 */const Dh=new fl("@firebase/auth");function Ui(t,...e){Dh.logLevel<=ae.ERROR&&Dh.error(`Auth (${zs}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw ml(t,...e)}function Vt(t,...e){return ml(t,...e)}function Sp(t,e,n){const r=Object.assign(Object.assign({},xI()),{[e]:n});return new qs("auth","Firebase",r).create(e,{appName:t.name})}function UI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),Sp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ml(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bp.create(t,...e)}function W(t,e,...n){if(!t)throw ml(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ui(e),new Error(e)}function Jt(t,e){t||Wt(e)}/**
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
 */const Ph=new Map;function Gt(t){Jt(t instanceof Function,"Expected a class definition");let e=Ph.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ph.set(t,e),e)}/**
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
 */function FI(t,e){const n=pl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(to(i,e??{}))return s;Et(s,"already-initialized")}return n.initialize({options:e})}function VI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function hc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $I(){return Lh()==="http:"||Lh()==="https:"}function Lh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function jI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($I()||vp()||"connection"in navigator)?navigator.onLine:!0}function BI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ws{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=yp()||_p()}get(){return jI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yl(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const HI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const qI=new Ws(3e4,6e4);function Gs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qs(t,e,n,r,s={}){return Ap(t,s,()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ks(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(fc.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),fc.fetch()(Cp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ap(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HI),e);try{const s=new KI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ra(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Sp(t,u,l);Et(t,u)}}catch(s){if(s instanceof jr)throw s;Et(t,"network-request-failed")}}async function Ys(t,e,n,r,s={}){const i=await Qs(t,e,n,r,s);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Cp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?yl(t.config,s):`${t.config.apiScheme}://${s}`}class KI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"timeout")),qI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Vt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function zI(t,e){return Qs(t,"POST","/v1/accounts:delete",e)}async function WI(t,e){return Qs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GI(t,e=!1){const n=wt(t),r=await n.getIdToken(e),s=vl(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gs(Na(s.auth_time)),issuedAtTime:gs(Na(s.iat)),expirationTime:gs(Na(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Na(t){return Number(t)*1e3}function vl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const s=xE(n);return s?JSON.parse(s):(Ui("Failed to decode base64 JWT payload"),null)}catch(s){return Ui("Caught error parsing JWT payload as JSON",s),null}}function QI(t){const e=vl(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jr&&YI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class XI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gs(this.lastLoginAt),this.creationTime=gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function so(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Rs(t,WI(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?e0(i.providerUserInfo):[],a=ZI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Rp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function JI(t){const e=wt(t);await so(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function e0(t){return t.map(e=>{var{providerId:n}=e,r=gl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function t0(t,e){const n=await Ap(t,{},()=>{const r=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Cp(t,s,"/v1/token",`key=${i}`);return fc.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):QI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await t0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ns;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function an(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new XI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Rp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GI(this,e)}reload(){return JI(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await so(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rs(this,zI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:D,isAnonymous:Z,providerData:ne,stsTokenManager:pe}=n;W(B&&pe,e,"internal-error");const q=Ns.fromJSON(this.name,pe);W(typeof B=="string",e,"internal-error"),an(h,e.name),an(f,e.name),W(typeof D=="boolean",e,"internal-error"),W(typeof Z=="boolean",e,"internal-error"),an(g,e.name),an(y,e.name),an(E,e.name),an(C,e.name),an(A,e.name),an(O,e.name);const te=new zn({uid:B,auth:e,email:f,emailVerified:D,displayName:h,isAnonymous:Z,photoURL:y,phoneNumber:g,tenantId:E,stsTokenManager:q,createdAt:A,lastLoginAt:O});return ne&&Array.isArray(ne)&&(te.providerData=ne.map(re=>Object.assign({},re))),C&&(te._redirectEventId=C),te}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ns;s.updateFromServerResponse(n);const i=new zn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await so(i),i}}/**
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
 */class Np{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Np.type="NONE";const Mh=Np;/**
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
 */function Fi(t,e,n){return`firebase:${t}:${e}:${n}`}class Er{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Er(Gt(Mh),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Gt(Mh);const o=Fi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=zn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Er(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Er(i,e,r))}}/**
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
 */function xh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lp(e))return"Blackberry";if(Mp(e))return"Webos";if(_l(e))return"Safari";if((e.includes("chrome/")||Op(e))&&!e.includes("edge/"))return"Chrome";if(Pp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kp(t=Ue()){return/firefox\//i.test(t)}function _l(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Op(t=Ue()){return/crios\//i.test(t)}function Dp(t=Ue()){return/iemobile/i.test(t)}function Pp(t=Ue()){return/android/i.test(t)}function Lp(t=Ue()){return/blackberry/i.test(t)}function Mp(t=Ue()){return/webos/i.test(t)}function Ho(t=Ue()){return/iphone|ipad|ipod/i.test(t)}function n0(t=Ue()){var e;return Ho(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function r0(){return wp()&&document.documentMode===10}function xp(t=Ue()){return Ho(t)||Pp(t)||Mp(t)||Lp(t)||/windows phone/i.test(t)||Dp(t)}function s0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Up(t,e=[]){let n;switch(t){case"Browser":n=xh(Ue());break;case"Worker":n=`${xh(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${r}`}/**
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
 */class i0{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uh(this),this.idTokenSubscription=new Uh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,s;this._deleted||(this.persistenceManager=await Er.create(this,e),!this._deleted&&(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o!=null&&o.user)&&(r=o.user)}return r?r._redirectEventId?(W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await so(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?wt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Up(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Xs(t){return wt(t)}class Uh{constructor(e){this.auth=e,this.observer=null,this.addObserver=qE(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class wl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function o0(t,e){return Qs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function a0(t,e){return Ys(t,"POST","/v1/accounts:signInWithPassword",Gs(t,e))}/**
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
 */async function c0(t,e){return Ys(t,"POST","/v1/accounts:signInWithEmailLink",Gs(t,e))}async function l0(t,e){return Ys(t,"POST","/v1/accounts:signInWithEmailLink",Gs(t,e))}/**
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
 */class ks extends wl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ks(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ks(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return a0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return c0(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return o0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return l0(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ir(t,e){return Ys(t,"POST","/v1/accounts:signInWithIdp",Gs(t,e))}/**
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
 */const u0="http://localhost";class Gn extends wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}buildRequest(){const e={requestUri:u0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ks(n)}return e}}/**
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
 */function h0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f0(t){const e=os(as(t)).link,n=e?os(as(e)).deep_link_id:null,r=os(as(t)).deep_link_id;return(r?os(as(r)).link:null)||r||n||e||t}class El{constructor(e){var n,r,s,i,o,a;const c=os(as(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=h0((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=f0(e);try{return new El(n)}catch{return null}}}/**
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
 */class Br{constructor(){this.providerId=Br.PROVIDER_ID}static credential(e,n){return ks._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=El.parseLink(n);return W(r,"argument-error"),ks._fromEmailAndCode(e,r.code,r.tenantId)}}Br.PROVIDER_ID="password";Br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Il{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Js extends Il{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fn extends Js{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class pn extends Js{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
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
 */class gn extends Js{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */async function d0(t,e){return Ys(t,"POST","/v1/accounts:signUp",Gs(t,e))}/**
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
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zn._fromIdTokenResponse(e,r,s),o=Fh(r);return new Qn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fh(r);return new Qn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class io extends jr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new io(e,n,r,s)}}function Fp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?io._fromErrorAndOperation(t,i,e,r):i})}async function p0(t,e,n=!1){const r=await Rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",r)}/**
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
 */async function g0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Rs(t,Fp(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=vl(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Qn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),i}}/**
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
 */async function Vp(t,e,n=!1){const r="signIn",s=await Fp(t,r,e),i=await Qn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function m0(t,e){return Vp(Xs(t),e)}async function y0(t,e,n){const r=Xs(t),s=await d0(r,{returnSecureToken:!0,email:e,password:n}),i=await Qn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function v0(t,e,n){return m0(wt(t),Br.credential(e,n))}function _0(t){return wt(t).signOut()}const oo="__sak";/**
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
 */class $p{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oo,"1"),this.storage.removeItem(oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function w0(){const t=Ue();return _l(t)||Ho(t)}const E0=1e3,I0=10;class jp extends $p{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=w0()&&s0(),this.fallbackToPolling=xp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);r0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,I0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},E0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jp.type="LOCAL";const T0=jp;/**
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
 */class Bp extends $p{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bp.type="SESSION";const Hp=Bp;/**
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
 */function b0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await b0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
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
 */function Tl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class S0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Tl("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $t(){return window}function A0(t){$t().location.href=t}/**
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
 */function qp(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function C0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function N0(){return qp()?self:null}/**
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
 */const Kp="firebaseLocalStorageDb",k0=1,ao="firebaseLocalStorage",zp="fbase_key";class Zs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(t,e){return t.transaction([ao],e?"readwrite":"readonly").objectStore(ao)}function O0(){const t=indexedDB.deleteDatabase(Kp);return new Zs(t).toPromise()}function dc(){const t=indexedDB.open(Kp,k0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ao,{keyPath:zp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ao)?e(r):(r.close(),await O0(),e(await dc()))})})}async function Vh(t,e,n){const r=Ko(t,!0).put({[zp]:e,value:n});return new Zs(r).toPromise()}async function D0(t,e){const n=Ko(t,!1).get(e),r=await new Zs(n).toPromise();return r===void 0?null:r.value}function $h(t,e){const n=Ko(t,!0).delete(e);return new Zs(n).toPromise()}const P0=800,L0=3;class Wp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>L0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(N0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await C0(),!this.activeServiceWorker)return;this.sender=new S0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dc();return await Vh(e,oo,"1"),await $h(e,oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>D0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$h(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ko(s,!1).getAll();return new Zs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wp.type="LOCAL";const M0=Wp;/**
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
 */function x0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function U0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Vt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",x0().appendChild(r)})}function F0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ws(3e4,6e4);/**
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
 */function Gp(t,e){return e?Gt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bl extends wl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function V0(t){return Vp(t.auth,new bl(t),t.bypassAuthState)}function $0(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),g0(n,new bl(t),t.bypassAuthState)}async function j0(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),p0(n,new bl(t),t.bypassAuthState)}/**
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
 */class Qp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return V0;case"linkViaPopup":case"linkViaRedirect":return j0;case"reauthViaPopup":case"reauthViaRedirect":return $0;default:Et(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const B0=new Ws(2e3,1e4);async function sR(t,e,n){const r=Xs(t);UI(t,e,Il);const s=Gp(r,n);return new $n(r,"signInViaPopup",e,s).executeNotNull()}class $n extends Qp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Tl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,B0.get())};e()}}$n.currentPopupAction=null;/**
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
 */const H0="pendingRedirect",ka=new Map;class q0 extends Qp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await K0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K0(t,e){const n=W0(e),r=z0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function z0(t){return Gt(t._redirectPersistence)}function W0(t){return Fi(H0,t.config.apiKey,t.name)}async function G0(t,e,n=!1){const r=Xs(t),s=Gp(r,e),o=await new q0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Q0=10*60*1e3;class Y0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q0&&this.cachedEventUids.clear(),this.cachedEventUids.has(jh(e))}saveEventToCache(e){this.cachedEventUids.add(jh(e)),this.lastProcessedEventTime=Date.now()}}function jh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function X0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yp(t);default:return!1}}/**
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
 */async function J0(t,e={}){return Qs(t,"GET","/v1/projects",e)}/**
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
 */const Z0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eT=/^https?/;async function tT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await J0(t);for(const n of e)try{if(nT(n))return}catch{}Et(t,"unauthorized-domain")}function nT(t){const e=hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eT.test(n))return!1;if(Z0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rT=new Ws(3e4,6e4);function Bh(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sT(t){return new Promise((e,n)=>{var r,s,i;function o(){Bh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bh(),n(Vt(t,"network-request-failed"))},timeout:rT.get()})}if(!((s=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$t().gapi)===null||i===void 0)&&i.load)o();else{const a=F0("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},U0(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Vi=null,e})}let Vi=null;function iT(t){return Vi=Vi||sT(t),Vi}/**
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
 */const oT=new Ws(5e3,15e3),aT="__/auth/iframe",cT="emulator/auth/iframe",lT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hT(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yl(e,cT):`https://${t.config.authDomain}/${aT}`,r={apiKey:e.apiKey,appName:t.name,v:zs},s=uT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ks(r).slice(1)}`}async function fT(t){const e=await iT(t),n=$t().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:hT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=$t().setTimeout(()=>{i(o)},oT.get());function c(){$t().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const dT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pT=500,gT=600,mT="_blank",yT="http://localhost";class Hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vT(t,e,n,r=pT,s=gT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dT),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ue().toLowerCase();n&&(a=Op(l)?mT:n),kp(l)&&(e=e||yT,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(n0(l)&&a!=="_self")return _T(e||"",a),new Hh(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Hh(h)}function _T(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wT="__/auth/handler",ET="emulator/auth/handler";function qh(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zs,eventId:s};if(e instanceof Il){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Js){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${IT(t)}?${Ks(a).slice(1)}`}function IT({config:t}){return t.emulator?yl(t,ET):`https://${t.authDomain}/${wT}`}/**
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
 */const Oa="webStorageSupport";class TT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hp,this._completeRedirectFn=G0}async _openPopup(e,n,r,s){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=qh(e,n,r,hc(),s);return vT(e,o,Tl())}async _openRedirect(e,n,r,s){return await this._originValidation(e),A0(qh(e,n,r,hc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await fT(e),r=new Y0(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oa,{type:Oa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oa];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xp()||_l()||Ho()}}const bT=TT;var Kh="@firebase/auth",zh="0.19.2";/**
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
 */class ST{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CT(t){Cs(new Rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{W(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),W(!(i!=null&&i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Up(t)},c=new i0(o,a);return VI(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cs(new Rr("auth-internal",e=>{const n=Xs(e.getProvider("auth").getImmediate());return(r=>new ST(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Kh,zh,AT(t)),vn(Kh,zh,"esm2017")}/**
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
 */function RT(t=Ip()){const e=pl(t,"auth");return e.isInitialized()?e.getImmediate():FI(t,{popupRedirectResolver:bT,persistence:[M0,T0,Hp]})}CT("Browser");var NT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Sl=Sl||{},G=NT||self;function co(){}function pc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ei(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function kT(t){return Object.prototype.hasOwnProperty.call(t,Da)&&t[Da]||(t[Da]=++OT)}var Da="closure_uid_"+(1e9*Math.random()>>>0),OT=0;function DT(t,e,n){return t.call.apply(t.bind,arguments)}function PT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=DT:je=PT,je.apply(null,arguments)}function Ai(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Nn(){this.s=this.s,this.o=this.o}var LT=0;Nn.prototype.s=!1;Nn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),LT!=0)&&kT(this)};Nn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Jp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function MT(t){e:{var e=Ab;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Wh(t){return Array.prototype.concat.apply([],arguments)}function Al(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function lo(t){return/^[\s\xa0]*$/.test(t)}var Gh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ze(t,e){return t.indexOf(e)!=-1}function Pa(t,e){return t<e?-1:t>e?1:0}var et;e:{var Qh=G.navigator;if(Qh){var Yh=Qh.userAgent;if(Yh){et=Yh;break e}}et=""}function Cl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Zp(t){const e={};for(const n in t)e[n]=t[n];return e}var Xh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Xh.length;i++)n=Xh[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Rl(t){return Rl[" "](t),t}Rl[" "]=co;function xT(t){var e=VT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var UT=Ze(et,"Opera"),Nr=Ze(et,"Trident")||Ze(et,"MSIE"),tg=Ze(et,"Edge"),gc=tg||Nr,ng=Ze(et,"Gecko")&&!(Ze(et.toLowerCase(),"webkit")&&!Ze(et,"Edge"))&&!(Ze(et,"Trident")||Ze(et,"MSIE"))&&!Ze(et,"Edge"),FT=Ze(et.toLowerCase(),"webkit")&&!Ze(et,"Edge");function rg(){var t=G.document;return t?t.documentMode:void 0}var uo;e:{var La="",Ma=function(){var t=et;if(ng)return/rv:([^\);]+)(\)|;)/.exec(t);if(tg)return/Edge\/([\d\.]+)/.exec(t);if(Nr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(FT)return/WebKit\/(\S+)/.exec(t);if(UT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ma&&(La=Ma?Ma[1]:""),Nr){var xa=rg();if(xa!=null&&xa>parseFloat(La)){uo=String(xa);break e}}uo=La}var VT={};function $T(){return xT(function(){let t=0;const e=Gh(String(uo)).split("."),n=Gh("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Pa(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Pa(s[2].length==0,i[2].length==0)||Pa(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var mc;if(G.document&&Nr){var Jh=rg();mc=Jh||parseInt(uo,10)||void 0}else mc=void 0;var jT=mc,BT=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",co,e),G.removeEventListener("test",co,e)}catch{}return t}();function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};function Os(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ng){e:{try{Rl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:HT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Os.Z.h.call(this)}}qe(Os,Ge);var HT={2:"touch",3:"pen",4:"mouse"};Os.prototype.h=function(){Os.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ti="closure_listenable_"+(1e6*Math.random()|0),qT=0;function KT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++qT,this.ca=this.fa=!1}function zo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Wo(t){this.src=t,this.g={},this.h=0}Wo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=vc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new KT(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function yc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Xp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(zo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Nl="closure_lm_"+(1e6*Math.random()|0),Ua={};function sg(t,e,n,r,s){if(r&&r.once)return og(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)sg(t,e[i],n,r,s);return null}return n=Dl(n),t&&t[ti]?t.N(e,n,ei(r)?!!r.capture:!!r,s):ig(t,e,n,!1,r,s)}function ig(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ei(s)?!!s.capture:!!s,a=Ol(t);if(a||(t[Nl]=a=new Wo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=zT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)BT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(cg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zT(){function t(n){return e.call(t.src,t.listener,n)}var e=WT;return t}function og(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)og(t,e[i],n,r,s);return null}return n=Dl(n),t&&t[ti]?t.O(e,n,ei(r)?!!r.capture:!!r,s):ig(t,e,n,!0,r,s)}function ag(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)ag(t,e[i],n,r,s);else r=ei(r)?!!r.capture:!!r,n=Dl(n),t&&t[ti]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=vc(i,n,r,s),-1<n&&(zo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ol(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vc(e,n,r,s)),(n=-1<t?e[t]:null)&&kl(n))}function kl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ti])yc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ol(e))?(yc(n,t),n.h==0&&(n.src=null,e[Nl]=null)):zo(t)}}}function cg(t){return t in Ua?Ua[t]:Ua[t]="on"+t}function WT(t,e){if(t.ca)t=!0;else{e=new Os(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&kl(t),t=n.call(r,e)}return t}function Ol(t){return t=t[Nl],t instanceof Wo?t:null}var Fa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dl(t){return typeof t=="function"?t:(t[Fa]||(t[Fa]=function(e){return t.handleEvent(e)}),t[Fa])}function Fe(){Nn.call(this),this.i=new Wo(this),this.P=this,this.I=null}qe(Fe,Nn);Fe.prototype[ti]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){ag(this,t,e,n,r)};function Be(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var s=e;e=new Ge(r,t),eg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ci(o,r,!0,e)&&s}if(o=e.g=t,s=Ci(o,r,!0,e)&&s,s=Ci(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ci(o,r,!1,e)&&s}Fe.prototype.M=function(){if(Fe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)zo(n[r]);delete t.g[e],t.h--}}this.I=null};Fe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ci(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&yc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Pl=G.JSON.stringify;function GT(){var t=ug;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class QT{constructor(){this.h=this.g=null}add(e,n){const r=lg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var lg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new YT,t=>t.reset());class YT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XT(t){G.setTimeout(()=>{throw t},0)}function Ll(t,e){_c||JT(),wc||(_c(),wc=!0),ug.add(t,e)}var _c;function JT(){var t=G.Promise.resolve(void 0);_c=function(){t.then(ZT)}}var wc=!1,ug=new QT;function ZT(){for(var t;t=GT();){try{t.h.call(t.g)}catch(n){XT(n)}var e=lg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wc=!1}function Go(t,e){Fe.call(this),this.h=t||1,this.g=e||G,this.j=je(this.kb,this),this.l=Date.now()}qe(Go,Fe);M=Go.prototype;M.da=!1;M.S=null;M.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Be(this,"tick"),this.da&&(Ml(this),this.start()))}};M.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ml(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}M.M=function(){Go.Z.M.call(this),Ml(this),delete this.g};function xl(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function hg(t){t.g=xl(()=>{t.g=null,t.i&&(t.i=!1,hg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class eb extends Nn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hg(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(t){Nn.call(this),this.h=t,this.g={}}qe(Ds,Nn);var Zh=[];function fg(t,e,n,r){Array.isArray(n)||(n&&(Zh[0]=n.toString()),n=Zh);for(var s=0;s<n.length;s++){var i=sg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function dg(t){Cl(t.g,function(e,n){this.g.hasOwnProperty(n)&&kl(e)},t),t.g={}}Ds.prototype.M=function(){Ds.Z.M.call(this),dg(this)};Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qo(){this.g=!0}Qo.prototype.Aa=function(){this.g=!1};function tb(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function nb(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function gr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+sb(t,n)+(r?" "+r:"")})}function rb(t,e){t.info(function(){return"TIMEOUT: "+e})}Qo.prototype.info=function(){};function sb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Pl(n)}catch{return e}}var sr={},ef=null;function Yo(){return ef=ef||new Fe}sr.Ma="serverreachability";function pg(t){Ge.call(this,sr.Ma,t)}qe(pg,Ge);function Ps(t){const e=Yo();Be(e,new pg(e))}sr.STAT_EVENT="statevent";function gg(t,e){Ge.call(this,sr.STAT_EVENT,t),this.stat=e}qe(gg,Ge);function tt(t){const e=Yo();Be(e,new gg(e,t))}sr.Na="timingevent";function mg(t,e){Ge.call(this,sr.Na,t),this.size=e}qe(mg,Ge);function ni(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Xo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},yg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ul(){}Ul.prototype.h=null;function tf(t){return t.h||(t.h=t.i())}function vg(){}var ri={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Fl(){Ge.call(this,"d")}qe(Fl,Ge);function Vl(){Ge.call(this,"c")}qe(Vl,Ge);var Ec;function Jo(){}qe(Jo,Ul);Jo.prototype.g=function(){return new XMLHttpRequest};Jo.prototype.i=function(){return{}};Ec=new Jo;function si(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ds(this),this.P=ib,t=gc?125:void 0,this.W=new Go(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _g}function _g(){this.i=null,this.g="",this.h=!1}var ib=45e3,Ic={},ho={};M=si.prototype;M.setTimeout=function(t){this.P=t};function Tc(t,e,n){t.K=1,t.v=ea(Zt(e)),t.s=n,t.U=!0,wg(t,null)}function wg(t,e){t.F=Date.now(),ii(t),t.A=Zt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Cg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new _g,t.g=Wg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new eb(je(t.Ia,t,t.g),t.O)),fg(t.V,t.g,"readystatechange",t.gb),e=t.H?Zp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ps(),tb(t.j,t.u,t.A,t.m,t.X,t.s)}M.gb=function(t){t=t.target;const e=this.L;e&&Qt(t)==3?e.l():this.Ia(t)};M.Ia=function(t){try{if(t==this.g)e:{const u=Qt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||gc||this.g&&(this.h.h||this.g.ga()||of(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ps(3):Ps(2)),Zo(this);var n=this.g.ba();this.N=n;t:if(Eg(this)){var r=of(this.g);t="";var s=r.length,i=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),ms(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,nb(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!lo(a)){var l=a;break t}}l=null}if(n=l)gr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bc(this,n);else{this.i=!1,this.o=3,tt(12),jn(this),ms(this);break e}}this.U?(Ig(this,u,o),gc&&this.i&&u==3&&(fg(this.V,this.W,"tick",this.fb),this.W.start())):(gr(this.j,this.m,o,null),bc(this,o)),u==4&&jn(this),this.i&&!this.I&&(u==4?Hg(this.l,this):(this.i=!1,ii(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),jn(this),ms(this)}}}catch{}finally{}};function Eg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ig(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=ob(t,n),s==ho){e==4&&(t.o=4,tt(14),r=!1),gr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ic){t.o=4,tt(15),gr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else gr(t.j,t.m,s,null),bc(t,s);Eg(t)&&s!=ho&&s!=Ic&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gl(e),e.L=!0,tt(11))):(gr(t.j,t.m,n,"[Invalid Chunked Response]"),jn(t),ms(t))}M.fb=function(){if(this.g){var t=Qt(this.g),e=this.g.ga();this.C<e.length&&(Zo(this),Ig(this,t,e),this.i&&t!=4&&ii(this))}};function ob(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ho:(n=Number(e.substring(n,r)),isNaN(n)?Ic:(r+=1,r+n>e.length?ho:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,jn(this)};function ii(t){t.Y=Date.now()+t.P,Tg(t,t.P)}function Tg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ni(je(t.eb,t),e)}function Zo(t){t.B&&(G.clearTimeout(t.B),t.B=null)}M.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(rb(this.j,this.A),this.K!=2&&(Ps(),tt(17)),jn(this),this.o=2,ms(this)):Tg(this,this.Y-t)};function ms(t){t.l.G==0||t.I||Hg(t.l,t)}function jn(t){Zo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ml(t.W),dg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function bc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Sc(n.i,t))){if(n.I=t.N,!t.J&&Sc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)mo(n),ra(n);else break e;Wl(n),tt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=ni(je(n.ab,n),6e3));if(1>=kg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Bn(n,11)}else if((t.J||n.g==t)&&mo(n),!lo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;!i.g&&(Ze(y,"spdy")||Ze(y,"quic")||Ze(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Bl(i,i.h),i.h=null))}if(r.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,Te(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=zg(r,r.H?r.la:null,r.W),o.J){Og(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Zo(a),ii(a)),r.g=o}else jg(r);0<n.l.length&&sa(n)}else l[0]!="stop"&&l[0]!="close"||Bn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Bn(n,7):zl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ps(4)}catch{}}function ab(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(pc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function $l(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pc(t)||typeof t=="string")Jp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(pc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=ab(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Hr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Hr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}M=Hr.prototype;M.R=function(){jl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};M.T=function(){return jl(this),this.g.concat()};function jl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Yn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Yn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}M.get=function(t,e){return Yn(this.h,t)?this.h[t]:e};M.set=function(t,e){Yn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};M.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var bg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function cb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Xn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Xn){this.g=e!==void 0?e:t.g,fo(this,t.j),this.s=t.s,po(this,t.i),go(this,t.m),this.l=t.l,e=t.h;var n=new Ls;n.i=e.i,e.g&&(n.g=new Hr(e.g),n.h=e.h),nf(this,n),this.o=t.o}else t&&(n=String(t).match(bg))?(this.g=!!e,fo(this,n[1]||"",!0),this.s=ys(n[2]||""),po(this,n[3]||"",!0),go(this,n[4]),this.l=ys(n[5]||"",!0),nf(this,n[6]||"",!0),this.o=ys(n[7]||"")):(this.g=!!e,this.h=new Ls(null,this.g))}Xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(cs(e,rf,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(cs(e,rf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(cs(n,n.charAt(0)=="/"?db:fb,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",cs(n,gb)),t.join("")};function Zt(t){return new Xn(t)}function fo(t,e,n){t.j=n?ys(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function po(t,e,n){t.i=n?ys(e,!0):e}function go(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nf(t,e,n){e instanceof Ls?(t.h=e,mb(t.h,t.g)):(n||(e=cs(e,pb)),t.h=new Ls(e,t.g))}function Te(t,e,n){t.h.set(e,n)}function ea(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function lb(t){return t instanceof Xn?Zt(t):new Xn(t,void 0)}function ub(t,e,n,r){var s=new Xn(null,void 0);return t&&fo(s,t),e&&po(s,e),n&&go(s,n),r&&(s.l=r),s}function ys(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,hb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rf=/[#\/\?@]/g,fb=/[#\?:]/g,db=/[#\?]/g,pb=/[#\?@]/g,gb=/#/g;function Ls(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function kn(t){t.g||(t.g=new Hr,t.h=0,t.i&&cb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ls.prototype;M.add=function(t,e){kn(this),this.i=null,t=qr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Sg(t,e){kn(t),e=qr(t,e),Yn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Yn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&jl(t)))}function Ag(t,e){return kn(t),e=qr(t,e),Yn(t.g.h,e)}M.forEach=function(t,e){kn(this),this.g.forEach(function(n,r){Jp(n,function(s){t.call(e,s,r,this)},this)},this)};M.T=function(){kn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};M.R=function(t){kn(this);var e=[];if(typeof t=="string")Ag(this,t)&&(e=Wh(e,this.g.get(qr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Wh(e,t[n])}return e};M.set=function(t,e){return kn(this),this.i=null,t=qr(this,t),Ag(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Cg(t,e,n){Sg(t,e),0<n.length&&(t.i=null,t.g.set(qr(t,e),Al(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function qr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mb(t,e){e&&!t.j&&(kn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Sg(this,r),Cg(this,s,n))},t)),t.j=e}var yb=class{constructor(t,e){this.h=t,this.g=e}};function Rg(t){this.l=t||vb,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ea&&G.g.Ea()&&G.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vb=10;function Ng(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kg(t){return t.h?1:t.g?t.g.size:0}function Sc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bl(t,e){t.g?t.g.add(e):t.h=e}function Og(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Rg.prototype.cancel=function(){if(this.i=Dg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Al(t.i)}function Hl(){}Hl.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};Hl.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function _b(){this.g=new Hl}function wb(t,e,n){const r=n||"";try{$l(t,function(s,i){let o=s;ei(s)&&(o=Pl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Eb(t,e){const n=new Qo;if(G.Image){const r=new Image;r.onload=Ai(Ri,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ai(Ri,n,r,"TestLoadImage: error",!1,e),r.onabort=Ai(Ri,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ai(Ri,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ri(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function oi(t){this.l=t.$b||null,this.j=t.ib||!1}qe(oi,Ul);oi.prototype.g=function(){return new ta(this.l,this.j)};oi.prototype.i=function(t){return function(){return t}}({});function ta(t,e){Fe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ql,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(ta,Fe);var ql=0;M=ta.prototype;M.open=function(t,e){if(this.readyState!=ql)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ms(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=ql};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Pg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ai(this):Ms(this),this.readyState==3&&Pg(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,ai(this))};M.Ta=function(t){this.g&&(this.response=t,ai(this))};M.ha=function(){this.g&&ai(this)};function ai(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ms(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ms(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Ib=G.JSON.parse;function De(t){Fe.call(this),this.headers=new Hr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Lg,this.K=this.L=!1}qe(De,Fe);var Lg="",Tb=/^https?$/i,bb=["POST","PUT"];M=De.prototype;M.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ec.g(),this.C=this.u?tf(this.u):tf(Ec),this.g.onreadystatechange=je(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){sf(this,i);return}t=n||"";const s=new Hr(this.headers);r&&$l(r,function(i,o){s.set(o,i)}),r=MT(s.T()),n=G.FormData&&t instanceof G.FormData,!(0<=Xp(bb,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ug(this),0<this.B&&((this.K=Sb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.pa,this)):this.A=xl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sf(this,i)}};function Sb(t){return Nr&&$T()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Ab(t){return t.toLowerCase()=="content-type"}M.pa=function(){typeof Sl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function sf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Mg(t),na(t)}function Mg(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),na(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),na(this,!0)),De.Z.M.call(this)};M.Fa=function(){this.s||(this.F||this.v||this.l?xg(this):this.cb())};M.cb=function(){xg(this)};function xg(t){if(t.h&&typeof Sl<"u"&&(!t.C[1]||Qt(t)!=4||t.ba()!=2)){if(t.v&&Qt(t)==4)xl(t.Fa,0,t);else if(Be(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(bg)[1]||null;if(!s&&G.self&&G.self.location){var i=G.self.location.protocol;s=i.substr(0,i.length-1)}r=!Tb.test(s?s.toLowerCase():"")}n=r}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<Qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Mg(t)}}finally{na(t)}}}}function na(t,e){if(t.g){Ug(t);const n=t.g,r=t.C[0]?co:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ug(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function Qt(t){return t.g?t.g.readyState:0}M.ba=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};M.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ib(e)}};function of(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Lg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Da=function(){return this.m};M.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Cb(t){let e="";return Cl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Kl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Cb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fg(t){this.za=0,this.l=[],this.h=new Qo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ns("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ns("baseRetryDelayMs",5e3,t),this.$a=ns("retryDelaySeedMs",1e4,t),this.Ya=ns("forwardChannelMaxRetries",2,t),this.ra=ns("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Rg(t&&t.concurrentRequestLimit),this.Ca=new _b,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}M=Fg.prototype;M.ma=8;M.G=1;function zl(t){if(Vg(t),t.G==3){var e=t.V++,n=Zt(t.F);Te(n,"SID",t.J),Te(n,"RID",e),Te(n,"TYPE","terminate"),ci(t,n),e=new si(t,t.h,e,void 0),e.K=2,e.v=ea(Zt(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=Wg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ii(e)}Kg(t)}M.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ra(t){t.g&&(Gl(t),t.g.cancel(),t.g=null)}function Vg(t){ra(t),t.u&&(G.clearTimeout(t.u),t.u=null),mo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Va(t,e){t.l.push(new yb(t.Za++,e)),t.G==3&&sa(t)}function sa(t){Ng(t.i)||t.m||(t.m=!0,Ll(t.Ha,t),t.C=0)}function Rb(t,e){return kg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ni(je(t.Ha,t,e),qg(t,t.C)),t.C++,!0)}M.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new si(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Zp(i),eg(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$g(this,s,e),n=Zt(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),ci(this,n),this.o&&i&&Kl(n,this.o,i),Bl(this.i,s),this.Ra&&Te(n,"TYPE","init"),this.ja?(Te(n,"$req",e),Te(n,"SID","null"),s.$=!0,Tc(s,n,null)):Tc(s,n,e),this.G=2}}else this.G==3&&(t?af(this,t):this.l.length==0||Ng(this.i)||af(this))};function af(t,e){var n;e?n=e.m:n=t.V++;const r=Zt(t.F);Te(r,"SID",t.J),Te(r,"RID",n),Te(r,"AID",t.U),ci(t,r),t.o&&t.s&&Kl(r,t.o,t.s),n=new si(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=$g(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Bl(t.i,n),Tc(n,r,e)}function ci(t,e){t.j&&$l({},function(n,r){Te(e,r,n)})}function $g(t,e,n){n=Math.min(t.l.length,n);var r=t.j?je(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{wb(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function jg(t){t.g||t.u||(t.Y=1,Ll(t.Ga,t),t.A=0)}function Wl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ni(je(t.Ga,t),qg(t,t.A)),t.A++,!0)}M.Ga=function(){if(this.u=null,Bg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ni(je(this.bb,this),t)}};M.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,tt(10),ra(this),Bg(this))};function Gl(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Bg(t){t.g=new si(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Zt(t.oa);Te(e,"RID","rpc"),Te(e,"SID",t.J),Te(e,"CI",t.N?"0":"1"),Te(e,"AID",t.U),ci(t,e),Te(e,"TYPE","xmlhttp"),t.o&&t.s&&Kl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ea(Zt(e)),n.s=null,n.U=!0,wg(n,t)}M.ab=function(){this.v!=null&&(this.v=null,ra(this),Wl(this),tt(19))};function mo(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Hg(t,e){var n=null;if(t.g==e){mo(t),Gl(t),t.g=null;var r=2}else if(Sc(t.i,e))n=e.D,Og(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Yo(),Be(r,new mg(r,n)),sa(t)}else jg(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&Rb(t,e)||r==2&&Wl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}}function qg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Bn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=je(t.jb,t);n||(n=new Xn("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||fo(n,"https"),ea(n)),Eb(n.toString(),r)}else tt(2);t.G=0,t.j&&t.j.va(e),Kg(t),Vg(t)}M.jb=function(t){t?(this.h.info("Successfully pinged google.com"),tt(2)):(this.h.info("Failed to ping google.com"),tt(1))};function Kg(t){t.G=0,t.I=-1,t.j&&((Dg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Al(t.l),t.l.length=0),t.j.ua())}function zg(t,e,n){let r=lb(n);if(r.i!="")e&&po(r,e+"."+r.i),go(r,r.m);else{const s=G.location;r=ub(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Cl(t.aa,function(s,i){Te(r,i,s)}),e=t.D,n=t.sa,e&&n&&Te(r,e,n),Te(r,"VER",t.ma),ci(t,r),r}function Wg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new De(new oi({ib:!0})):new De(t.qa),e.L=t.H,e}function Gg(){}M=Gg.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Oa=function(){};function yo(){if(Nr&&!(10<=Number(jT)))throw Error("Environmental error: no available transport.")}yo.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){Fe.call(this),this.g=new Fg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!lo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!lo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Kr(this)}qe(gt,Fe);gt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ll(je(t.hb,t,e))),tt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=zg(t,null,t.W),sa(t)};gt.prototype.close=function(){zl(this.g)};gt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Va(this.g,e)}else this.v?(e={},e.__data__=Pl(t),Va(this.g,e)):Va(this.g,t)};gt.prototype.M=function(){this.g.j=null,delete this.j,zl(this.g),delete this.g,gt.Z.M.call(this)};function Qg(t){Fl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(Qg,Fl);function Yg(){Vl.call(this),this.status=1}qe(Yg,Vl);function Kr(t){this.g=t}qe(Kr,Gg);Kr.prototype.xa=function(){Be(this.g,"a")};Kr.prototype.wa=function(t){Be(this.g,new Qg(t))};Kr.prototype.va=function(t){Be(this.g,new Yg)};Kr.prototype.ua=function(){Be(this.g,"b")};yo.prototype.createWebChannel=yo.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;Xo.NO_ERROR=0;Xo.TIMEOUT=8;Xo.HTTP_ERROR=6;yg.COMPLETE="complete";vg.EventType=ri;ri.OPEN="a";ri.CLOSE="b";ri.ERROR="c";ri.MESSAGE="d";Fe.prototype.listen=Fe.prototype.N;De.prototype.listenOnce=De.prototype.O;De.prototype.getLastError=De.prototype.La;De.prototype.getLastErrorCode=De.prototype.Da;De.prototype.getStatus=De.prototype.ba;De.prototype.getResponseJson=De.prototype.Qa;De.prototype.getResponseText=De.prototype.ga;De.prototype.send=De.prototype.ea;var Nb=function(){return new yo},kb=function(){return Yo()},$a=Xo,Ob=yg,Db=sr,cf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pb=oi,Ni=vg,Lb=De;const lf="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let zr="9.4.0";/**
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
 */const Jn=new fl("@firebase/firestore");function uf(){return Jn.logLevel}function H(t,...e){if(Jn.logLevel<=ae.DEBUG){const n=e.map(Ql);Jn.debug(`Firestore (${zr}): ${t}`,...n)}}function bn(t,...e){if(Jn.logLevel<=ae.ERROR){const n=e.map(Ql);Jn.error(`Firestore (${zr}): ${t}`,...n)}}function hf(t,...e){if(Jn.logLevel<=ae.WARN){const n=e.map(Ql);Jn.warn(`Firestore (${zr}): ${t}`,...n)}}function Ql(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${zr}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function ve(t,e){t||X()}function J(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Mb{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class xb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Ub{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new Mb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new it(e)}}class Fb{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=it.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class Vb{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Fb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function $b(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Yl.T=-1;class Xg{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=$b(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function kr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class dt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new dt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new dt(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function ff(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Jg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xs{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends xs{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const jb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends xs{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return jb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new x(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new x(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class Ac{constructor(e){this.fields=e,e.sort(ot.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return kr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Qe(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Qe(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Bb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=Bb.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */function Zg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function em(t){const e=t.mapValue.fields.__previous_value__;return Zg(e)?em(e):e}function Us(t){const e=Sn(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */function Gr(t){return t==null}function vo(t){return t===0&&1/t==-1/0}function Hb(t){return typeof t=="number"&&Number.isInteger(t)&&!vo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(be.fromString(e))}static fromName(e){return new z(be.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new be(e.slice()))}}/**
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
 */function Zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zg(t)?4:10:X()}function Bt(t,e){const n=Zn(t);if(n!==Zn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Us(t).isEqual(Us(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Sn(r.timestampValue),o=Sn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Or(r.bytesValue).isEqual(Or(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return ke(r.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(r.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ke(r.integerValue)===ke(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ke(r.doubleValue),o=ke(s.doubleValue);return i===o?vo(i)===vo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return kr(t.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(ff(i)!==ff(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Bt(i[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Fs(t,e){return(t.values||[]).find(n=>Bt(n,e))!==void 0}function Dr(t,e){const n=Zn(t),r=Zn(e);if(n!==r)return de(n,r);switch(n){case 0:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ke(s.integerValue||s.doubleValue),a=ke(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return df(t.timestampValue,e.timestampValue);case 4:return df(Us(t),Us(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Or(s),a=Or(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=de(o[c],a[c]);if(l!==0)return l}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=de(ke(s.latitude),ke(i.latitude));return o!==0?o:de(ke(s.longitude),ke(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Dr(o[c],a[c]);if(l)return l}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=de(a[u],l[u]);if(h!==0)return h;const f=Dr(o[a[u]],c[l[u]]);if(f!==0)return f}return de(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function df(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Sn(t),r=Sn(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function Xl(t){return Cc(t)}function Cc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Sn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Or(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Cc(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Cc(r.fields[a])}`;return i+"}"}(t.mapValue):X();var e,n}function pf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Rc(t){return!!t&&"integerValue"in t}function Jl(t){return!!t&&"arrayValue"in t}function gf(t){return!!t&&"nullValue"in t}function mf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $i(t){return!!t&&"mapValue"in t}function vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$i(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=vs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$i(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$i(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Wr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(vs(this.value))}}function tm(t){const e=[];return Wr(t.fields,(n,r)=>{const s=new ot([n]);if($i(r)){const i=tm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ac(e)}/**
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
 */class ze{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new ze(e,0,ue.min(),bt.empty(),0)}static newFoundDocument(e,n,r){return new ze(e,1,n,r,0)}static newNoDocument(e,n){return new ze(e,2,n,bt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,bt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new ze(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qb{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function yf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new qb(t,e,n,r,s,i,o)}function Zl(t){const e=J(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zb(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=_o(e.startAt)),e.endAt&&(n+="|ub:",n+=_o(e.endAt)),e.A=n}return e.A}function Kb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Xl(r.value)}`;var r}).join(", ")}]`),Gr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+_o(t.startAt)),t.endAt&&(e+=", endAt: "+_o(t.endAt)),`Target(${e})`}function eu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!eS(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Bt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_f(t.startAt,e.startAt)&&_f(t.endAt,e.endAt)}function Nc(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class nt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new Wb(e,n,r):n==="array-contains"?new Yb(e,r):n==="in"?new Xb(e,r):n==="not-in"?new Jb(e,r):n==="array-contains-any"?new Zb(e,r):new nt(e,n,r)}static R(e,n,r){return n==="in"?new Gb(e,r):new Qb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(Dr(n,this.value)):n!==null&&Zn(this.value)===Zn(n)&&this.P(Dr(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function zb(t){return t.field.canonicalString()+t.op.toString()+Xl(t.value)}class Wb extends nt{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.P(n)}}class Gb extends nt{constructor(e,n){super(e,"in",n),this.keys=nm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Qb extends nt{constructor(e,n){super(e,"not-in",n),this.keys=nm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class Yb extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jl(n)&&Fs(n.arrayValue,this.value)}}class Xb extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fs(this.value.arrayValue,n)}}class Jb extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fs(this.value.arrayValue,n)}}class Zb extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fs(this.value.arrayValue,r))}}class kc{constructor(e,n){this.position=e,this.before=n}}function _o(t){return`${t.before?"b":"a"}:${t.position.map(e=>Xl(e)).join(",")}`}class _s{constructor(e,n="asc"){this.field=e,this.dir=n}}function eS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function vf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=Dr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function _f(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class li{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function tS(t,e,n,r,s,i,o,a){return new li(t,e,n,r,s,i,o,a)}function rm(t){return new li(t)}function ji(t){return!Gr(t.limit)&&t.limitType==="F"}function wo(t){return!Gr(t.limit)&&t.limitType==="L"}function sm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function im(t){for(const e of t.filters)if(e.v())return e.field;return null}function om(t){return t.collectionGroup!==null}function Vs(t){const e=J(t);if(e.V===null){e.V=[];const n=im(e),r=sm(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new _s(n)),e.V.push(new _s(ot.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new _s(ot.keyField(),i))}}}return e.V}function er(t){const e=J(t);if(!e.S)if(e.limitType==="F")e.S=yf(e.path,e.collectionGroup,Vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Vs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new _s(i.field,o))}const r=e.endAt?new kc(e.endAt.position,!e.endAt.before):null,s=e.startAt?new kc(e.startAt.position,!e.startAt.before):null;e.S=yf(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.S}function am(t,e,n){return new li(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ia(t,e){return eu(er(t),er(e))&&t.limitType===e.limitType}function cm(t){return`${Zl(er(t))}|lt:${t.limitType}`}function Oc(t){return`Query(target=${Kb(er(t))}; limitType=${t.limitType})`}function oa(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):z.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!vf(n.startAt,Vs(n),r)||n.endAt&&vf(n.endAt,Vs(n),r))}(t,e)}function lm(t){return(e,n)=>{let r=!1;for(const s of Vs(t)){const i=nS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function nS(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Dr(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */function um(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vo(e)?"-0":e}}function hm(t){return{integerValue:""+t}}function rS(t,e){return Hb(e)?hm(e):um(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this._=void 0}}function sS(t,e,n){return t instanceof $s?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof js?dm(t,e):t instanceof Bs?pm(t,e):function(r,s){const i=fm(r,s),o=wf(i)+wf(r.C);return Rc(i)&&Rc(r.C)?hm(o):um(r.N,o)}(t,e)}function iS(t,e,n){return t instanceof js?dm(t,e):t instanceof Bs?pm(t,e):n}function fm(t,e){return t instanceof Eo?Rc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class $s extends aa{}class js extends aa{constructor(e){super(),this.elements=e}}function dm(t,e){const n=gm(e);for(const r of t.elements)n.some(s=>Bt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bs extends aa{constructor(e){super(),this.elements=e}}function pm(t,e){let n=gm(e);for(const r of t.elements)n=n.filter(s=>!Bt(s,r));return{arrayValue:{values:n}}}class Eo extends aa{constructor(e,n){super(),this.N=e,this.C=n}}function wf(t){return ke(t.integerValue||t.doubleValue)}function gm(t){return Jl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class oS{constructor(e,n){this.field=e,this.transform=n}}function aS(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof js&&r instanceof js||n instanceof Bs&&r instanceof Bs?kr(n.elements,r.elements,Bt):n instanceof Eo&&r instanceof Eo?Bt(n.C,r.C):n instanceof $s&&r instanceof $s}(t.transform,e.transform)}class cS{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ca{}function lS(t,e,n){t instanceof la?function(r,s,i){const o=r.value.clone(),a=Tf(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(r,s,i){if(!Bi(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Tf(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(mm(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Dc(t,e,n){t instanceof la?function(r,s,i){if(!Bi(r.precondition,s))return;const o=r.value.clone(),a=bf(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(If(s),o).setHasLocalMutations()}(t,e,n):t instanceof Qr?function(r,s,i){if(!Bi(r.precondition,s))return;const o=bf(r.fieldTransforms,i,s),a=s.data;a.setAll(mm(r)),a.setAll(o),s.convertToFoundDocument(If(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Bi(r.precondition,s)&&s.convertToNoDocument(ue.min())}(t,e)}function uS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=fm(r.transform,s||null);i!=null&&(n==null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function Ef(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&kr(n,r,(s,i)=>aS(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function If(t){return t.isFoundDocument()?t.version:ue.min()}class la extends ca{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Qr extends ca{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function mm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tf(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,iS(o,a,n[s]))}return r}function bf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,sS(i,o,e))}return r}class ym extends ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class hS extends ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class fS{constructor(e){this.count=e}}/**
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
 */var Ne,se;function dS(t){switch(t){default:return X();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function vm(t){if(t===void 0)return bn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ne.OK:return I.OK;case Ne.CANCELLED:return I.CANCELLED;case Ne.UNKNOWN:return I.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return I.INTERNAL;case Ne.UNAVAILABLE:return I.UNAVAILABLE;case Ne.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ne.NOT_FOUND:return I.NOT_FOUND;case Ne.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ne.ABORTED:return I.ABORTED;case Ne.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ne.DATA_LOSS:return I.DATA_LOSS;default:return X()}}(se=Ne||(Ne={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ki(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ki(this.root,e,this.comparator,!1)}getReverseIterator(){return new ki(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ki(this.root,e,this.comparator,!0)}}class ki{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=s??Ve.EMPTY,this.right=i??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ve(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ve(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sf(this.data.getIterator())}getIteratorFrom(e){return new Sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const pS=new Ye(z.comparator);function tr(){return pS}const gS=new Ye(z.comparator);function Pc(){return gS}const mS=new Ye(z.comparator);function yS(){return mS}const vS=new He(z.comparator);function Ee(...t){let e=vS;for(const n of t)e=e.add(n);return e}const _S=new He(de);function _m(){return _S}/**
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
 */class ua{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,ui.createSynthesizedTargetChangeForCurrentChange(e,n)),new ua(ue.min(),r,_m(),tr(),Ee())}}class ui{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ui(Qe.EMPTY_BYTE_STRING,n,Ee(),Ee(),Ee())}}/**
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
 */class Hi{constructor(e,n,r,s){this.k=e,this.removedTargetIds=n,this.key=r,this.$=s}}class wm{constructor(e,n){this.targetId=e,this.O=n}}class Em{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Af{constructor(){this.F=0,this.M=Rf(),this.L=Qe.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Ee(),n=Ee(),r=Ee();return this.M.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:X()}}),new ui(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=Rf()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class wS{constructor(e){this.tt=e,this.et=new Map,this.nt=tr(),this.st=Cf(),this.it=new He(de)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,r=e.O.count,s=this.dt(n);if(s){const i=s.target;if(Nc(i))if(r===0){const o=new z(i.path);this.ct(n,o,ze.newNoDocument(o,ue.min()))}else ve(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&Nc(a.target)){const c=new z(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.ct(o,c,ze.newNoDocument(c,e))}i.K&&(n.set(o,i.W()),i.G())}});let r=Ee();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.dt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new ua(e,n,this.it,this.nt,r);return this.nt=tr(),this.st=Cf(),this.it=new He(de),s}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,r){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Af,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new He(de),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Af),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Cf(){return new Ye(z.comparator)}function Rf(){return new Ye(z.comparator)}/**
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
 */const ES=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),IS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class TS{constructor(e,n){this.databaseId=e,this.D=n}}function Io(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Im(t,e){return t.D?e.toBase64():e.toUint8Array()}function bS(t,e){return Io(t,e.toTimestamp())}function Yt(t){return ve(!!t),ue.fromTimestamp(function(e){const n=Sn(e);return new dt(n.seconds,n.nanos)}(t))}function tu(t,e){return function(n){return new be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Tm(t){const e=be.fromString(t);return ve(Am(e)),e}function Lc(t,e){return tu(t.databaseId,e.path)}function ja(t,e){const n=Tm(e);if(n.get(1)!==t.databaseId.projectId)throw new x(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(bm(n))}function Mc(t,e){return tu(t.databaseId,e)}function SS(t){const e=Tm(t);return e.length===4?be.emptyPath():bm(e)}function xc(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bm(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Nf(t,e,n){return{name:Lc(t,e),fields:n.value.mapValue.fields}}function AS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.D?(ve(l===void 0||typeof l=="string"),Qe.fromBase64String(l||"")):(ve(l===void 0||l instanceof Uint8Array),Qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:vm(c.code);return new x(l,c.message||"")}(o);n=new Em(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ja(t,r.document.name),i=Yt(r.document.updateTime),o=new bt({mapValue:{fields:r.document.fields}}),a=ze.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Hi(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ja(t,r.document),i=r.readTime?Yt(r.readTime):ue.min(),o=ze.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ja(t,r.document),i=r.removedTargetIds||[];n=new Hi([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new fS(s),o=r.targetId;n=new wm(o,i)}}return n}function CS(t,e){let n;if(e instanceof la)n={update:Nf(t,e.key,e.value)};else if(e instanceof ym)n={delete:Lc(t,e.key)};else if(e instanceof Qr)n={update:Nf(t,e.key,e.data),updateMask:US(e.fieldMask)};else{if(!(e instanceof hS))return X();n={verify:Lc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof $s)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof js)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Eo)return{fieldPath:i.field.canonicalString(),increment:o.C};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:bS(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function RS(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Yt(r.updateTime):Yt(s);return i.isEqual(ue.min())&&(i=Yt(s)),new cS(i,r.transformResults||[])}(n,e))):[]}function NS(t,e){return{documents:[Mc(t,e.path)]}}function kS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Mc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(mf(u.value))return{unaryFilter:{field:fr(u.field),op:"IS_NAN"}};if(gf(u.value))return{unaryFilter:{field:fr(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(mf(u.value))return{unaryFilter:{field:fr(u.field),op:"IS_NOT_NAN"}};if(gf(u.value))return{unaryFilter:{field:fr(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fr(u.field),op:LS(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:fr(l.field),direction:PS(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.D||Gr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=kf(e.startAt)),e.endAt&&(n.structuredQuery.endAt=kf(e.endAt)),n}function OS(t){let e=SS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Sm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new _s(mr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Gr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Of(n.startAt));let l=null;return n.endAt&&(l=Of(n.endAt)),tS(e,s,o,i,a,"F",c,l)}function DS(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sm(t){return t?t.unaryFilter!==void 0?[xS(t)]:t.fieldFilter!==void 0?[MS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Sm(e)).reduce((e,n)=>e.concat(n)):X():[]}function kf(t){return{before:t.before,values:t.position}}function Of(t){const e=!!t.before,n=t.values||[];return new kc(n,e)}function PS(t){return ES[t]}function LS(t){return IS[t]}function fr(t){return{fieldPath:t.canonicalString()}}function mr(t){return ot.fromServerFormat(t.fieldPath)}function MS(t){return nt.create(mr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}function xS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=mr(t.unaryFilter.field);return nt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=mr(t.unaryFilter.field);return nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mr(t.unaryFilter.field);return nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=mr(t.unaryFilter.field);return nt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return X()}}function US(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Am(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const FS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(s=>s?P.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function hi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $S{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lS(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Dc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Dc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(ue.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&kr(this.mutations,e.mutations,(n,r)=>Ef(n,r))&&kr(this.baseMutations,e.baseMutations,(n,r)=>Ef(n,r))}}class nu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=yS();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new nu(e,n,r,s)}}/**
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
 */class Wn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),a=Qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class jS{constructor(e){this.Wt=e}}function BS(t){const e=OS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?am(e,e.limit,"L"):e}/**
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
 */class HS{constructor(){this.Gt=new qS}addToCollectionParentIndex(e,n){return this.Gt.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.Gt.getEntries(n))}}class qS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(be.comparator)).toArray()}}/**
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
 */class Pr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Pr(0)}static ie(){return new Pr(-1)}}/**
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
 */async function fi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==FS)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){Wr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Jg(this.inner)}}/**
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
 */class KS{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:ue.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:ze.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Cm{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}bn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):om(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new z(n)).next(r=>{let s=Pc();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Sn(e,n,r){const s=n.collectionGroup;let i=Pc();return this.Ht.getCollectionParents(e,s).next(o=>P.forEach(o,a=>{const c=function(l,u){return new li(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.Dn(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Dn(e,n,r){let s,i;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Cn(e,i,s).next(a=>{s=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=s.get(u);h==null&&(h=ze.newInvalidDocument(u),s=s.insert(u,h)),Dc(l,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{oa(n,a)||(s=s.remove(o))}),s))}Cn(e,n,r){let s=Ee();for(const o of n)for(const a of o.mutations)a instanceof Qr&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.He.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
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
 */class ru{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=s}static kn(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ru(e,n.fromCache,r,s)}}/**
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
 */class zS{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ue.min())?this.Fn(e,n):this.On.Pn(e,s).next(i=>{const o=this.Mn(n,i);return(ji(n)||wo(n))&&this.Ln(n.limitType,o,s,r)?this.Fn(e,n):(uf()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Oc(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new He(lm(e));return n.forEach((s,i)=>{oa(e,i)&&(r=r.add(i))}),r}Ln(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return uf()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Oc(n)),this.On.getDocumentsMatchingQuery(e,n,ue.min())}}/**
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
 */class WS{constructor(e,n,r,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new Ye(de),this.qn=new di(i=>Zl(i),eu),this.Kn=ue.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Cm(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function GS(t,e,n,r){return new WS(t,e,n,r)}async function Rm(t,e){const n=J(t);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new Cm(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=Ee();for(const f of a){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of c){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return s.Pn(o,h).next(f=>({Wn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function QS(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=P.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const E=c.docVersions.get(g);ve(E!==null),y.version.compareTo(E)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&l.addEntry(y,c.commitVersion))})}),f.next(()=>o.In.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,s))})}function Nm(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function YS(t,e){const n=J(t),r=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ze.addMatchingKeys(i,l.addedDocuments,u)));const f=l.resumeToken;if(f.approximateByteSize()>0){const g=h.withResumeToken(f,r).withSequenceNumber(i.currentSequenceNumber);s=s.insert(u,g),function(y,E,C){return ve(E.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(h,g,l)&&a.push(n.ze.updateTargetData(i,g))}});let c=tr();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(XS(i,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(ue.min())){const l=n.ze.getLastRemoteSnapshotVersion(i).next(u=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,c)).next(()=>c)}).then(i=>(n.Un=s,i))}function XS(t,e,n,r,s){let i=Ee();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=tr();return n.forEach((c,l)=>{const u=o.get(c),h=(s==null?void 0:s.get(c))||r;l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):H("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function JS(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function ZS(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ze.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):n.ze.allocateTargetId(r).next(o=>(s=new Wn(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Un.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function Uc(t,e,n){const r=J(t),s=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!hi(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function Df(t,e,n){const r=J(t);let s=ue.min(),i=Ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.qn.get(l);return h!==void 0?P.resolve(u.Un.get(h)):u.ze.getTargetData(c,l)}(r,o,er(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:Ee())).next(a=>({documents:a,Gn:i})))}/**
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
 */class eA{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return P.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Yt(r.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:BS(r.bundledQuery),readTime:Yt(r.readTime)}}(n)),P.resolve()}}/**
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
 */class su{constructor(){this.Zn=new He(Le.ts),this.es=new He(Le.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Le(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new z(new be([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new z(new be([])),r=new Le(n,e),s=new Le(n,e+1);let i=Ee();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return z.comparator(e.key,n.key)||de(e.ls,n.ls)}static ns(e,n){return de(e.ls,n.ls)||z.comparator(e.key,n.key)}}/**
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
 */class tA{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new He(Le.ts)}checkEmpty(e){return P.resolve(this.In.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new $S(i,n,r,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new Le(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this._s(r),i=s<0?0:s;return P.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return P.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this.ws(o.ls);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(de);return n.forEach(s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),P.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Le(new z(i),0);let a=new He(de);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),P.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this.ws(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return P.forEach(n.mutations,s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new Le(n,0),s=this.ds.firstAfterOrEqual(r);return P.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,P.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class nA{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Ye(z.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.clone():ze.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.clone():ze.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=tr();const i=new z(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||oa(n,c)&&(s=s.insert(c.key,c.clone()))}return P.resolve(s)}Ts(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rA(this)}getSize(e){return P.resolve(this.size)}}class rA extends KS{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(r))):this.Se.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class sA{constructor(e){this.persistence=e,this.Es=new di(n=>Zl(n),eu),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Is=0,this.As=new su,this.targetCount=0,this.Rs=Pr.se()}forEachTarget(e,n){return this.Es.forEach((r,s)=>n(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),P.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Pr(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.ce(n),P.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.As.containsKey(n))}}/**
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
 */class iA{constructor(e,n){this.bs={},this.Le=new Yl(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new sA(this),this.Ht=new HS,this.He=function(r,s){return new nA(r,s)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new jS(n),this.Je=new eA(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new tA(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new oA(this.Le.next());return this.referenceDelegate.vs(),r(s).next(i=>this.referenceDelegate.Vs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ss(e,n){return P.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class oA extends VS{constructor(e){super(),this.currentSequenceNumber=e}}class iu{constructor(e){this.persistence=e,this.Ds=new su,this.Cs=null}static Ns(e){return new iu(e)}get xs(){if(this.Cs)return this.Cs;throw X()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),P.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.xs,r=>{const s=z.fromPath(r);return this.ks(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return P.or([()=>P.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class Pf{constructor(){this.activeTargetIds=_m()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aA{constructor(){this.yi=new Pf,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Pf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class cA{Ti(e){}shutdown(){}}/**
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
 */class Lf{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const lA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class uA{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class hA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,s){const i=this.Bi(e,n);H("RestConnection","Sending: ",i,r);const o={};return this.Ui(o,s),this.qi(e,i,o,r).then(a=>(H("RestConnection","Received: ",a),a),a=>{throw hf("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",r),a})}Ki(e,n,r,s){return this.Li(e,n,r,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+zr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=lA[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,s){return new Promise((i,o)=>{const a=new Lb;a.listenOnce(Ob.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case $a.NO_ERROR:const l=a.getResponseJson();H("Connection","XHR received:",JSON.stringify(l)),i(l);break;case $a.TIMEOUT:H("Connection",'RPC "'+e+'" timed out'),o(new x(I.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const u=a.getStatus();if(H("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(y)>=0?y:I.UNKNOWN}(h.status);o(new x(f,h.message))}else o(new x(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(I.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{H("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Nb(),i=kb(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Pb({})),this.Ui(o.initMessageHeaders,n),yp()||_p()||FE()||wp()||VE()||vp()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");H("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new uA({vi:g=>{u?H("Connection","Not sending because WebChannel is closed:",g):(l||(H("Connection","Opening WebChannel transport."),c.open(),l=!0),H("Connection","WebChannel sending:",g),c.send(g))},Vi:()=>c.close()}),f=(g,y,E)=>{g.listen(y,C=>{try{E(C)}catch(A){setTimeout(()=>{throw A},0)}})};return f(c,Ni.EventType.OPEN,()=>{u||H("Connection","WebChannel transport opened.")}),f(c,Ni.EventType.CLOSE,()=>{u||(u=!0,H("Connection","WebChannel transport closed"),h.$i())}),f(c,Ni.EventType.ERROR,g=>{u||(u=!0,hf("Connection","WebChannel transport errored:",g),h.$i(new x(I.UNAVAILABLE,"The operation could not be completed")))}),f(c,Ni.EventType.MESSAGE,g=>{var y;if(!u){const E=g.data[0];ve(!!E);const C=E,A=C.error||((y=C[0])===null||y===void 0?void 0:y.error);if(A){H("Connection","WebChannel received error:",A);const O=A.status;let B=function(Z){const ne=Ne[Z];if(ne!==void 0)return vm(ne)}(O),D=A.message;B===void 0&&(B=I.INTERNAL,D="Unknown error status: "+O+" with message "+A.message),u=!0,h.$i(new x(B,D)),c.close()}else H("Connection","WebChannel received:",E),h.Oi(E)}}),f(i,Db.STAT_EVENT,g=>{g.stat===cf.PROXY?H("Connection","Detected buffering proxy"):g.stat===cf.NOPROXY&&H("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Ba(){return typeof document<"u"?document:null}/**
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
 */function ha(t){return new TS(t,!0)}class km{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=s,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class Om{constructor(e,n,r,s,i,o,a){this.Oe=e,this.er=r,this.nr=s,this.sr=i,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new km(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(r=>{this.ir===n&&this.Er(r)},r=>{e(()=>{const s=new x(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ir(s)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.Ir(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fA extends Om{constructor(e,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=AS(this.N,e),r=function(s){if(!("targetChange"in s))return ue.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ue.min():i.readTime?Yt(i.readTime):ue.min()}(e);return this.listener.Rr(n,r)}br(e){const n={};n.database=xc(this.N),n.addTarget=function(s,i){let o;const a=i.target;return o=Nc(a)?{documents:NS(s,a)}:{query:kS(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Im(s,i.resumeToken):i.snapshotVersion.compareTo(ue.min())>0&&(o.readTime=Io(s,i.snapshotVersion.toTimestamp())),o}(this.N,e);const r=DS(this.N,e);r&&(n.labels=r),this.mr(n)}Pr(e){const n={};n.database=xc(this.N),n.removeTarget=e,this.mr(n)}}class dA extends Om{constructor(e,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=RS(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.Dr(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=xc(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CS(this.N,r))};this.mr(n)}}/**
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
 */class pA extends class{}{constructor(e,n,r){super(),this.credentials=e,this.sr=n,this.N=r,this.kr=!1}$r(){if(this.kr)throw new x(I.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new x(I.UNKNOWN,s.toString())})}Ki(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new x(I.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class gA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(bn(n),this.Mr=!1):H("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class mA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(o=>{r.enqueueAndForget(async()=>{ir(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.Wr.add(4),await pi(c),c.Hr.set("Unknown"),c.Wr.delete(4),await fa(c)}(this))})}),this.Hr=new gA(r,s)}}async function fa(t){if(ir(t))for(const e of t.Gr)await e(!0)}async function pi(t){for(const e of t.Gr)await e(!1)}function Dm(t,e){const n=J(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),cu(n)?au(n):Yr(n).hr()&&ou(n,e))}function Pm(t,e){const n=J(t),r=Yr(n);n.Qr.delete(e),r.hr()&&Lm(n,e),n.Qr.size===0&&(r.hr()?r.wr():ir(n)&&n.Hr.set("Unknown"))}function ou(t,e){t.Jr.Y(e.targetId),Yr(t).br(e)}function Lm(t,e){t.Jr.Y(e),Yr(t).Pr(e)}function au(t){t.Jr=new wS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),Yr(t).start(),t.Hr.Lr()}function cu(t){return ir(t)&&!Yr(t).ur()&&t.Qr.size>0}function ir(t){return J(t).Wr.size===0}function Mm(t){t.Jr=void 0}async function yA(t){t.Qr.forEach((e,n)=>{ou(t,e)})}async function vA(t,e){Mm(t),cu(t)?(t.Hr.qr(e),au(t)):t.Hr.set("Unknown")}async function _A(t,e,n){if(t.Hr.set("Online"),e instanceof Em&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Qr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Qr.delete(o),r.Jr.removeTarget(o))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await To(t,r)}else if(e instanceof Hi?t.Jr.rt(e):e instanceof wm?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(ue.min()))try{const r=await Nm(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Jr._t(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Qr.get(c);l&&s.Qr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.Qr.get(a);if(!c)return;s.Qr.set(a,c.withResumeToken(Qe.EMPTY_BYTE_STRING,c.snapshotVersion)),Lm(s,a);const l=new Wn(c.target,a,1,c.sequenceNumber);ou(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await To(t,r)}}async function To(t,e,n){if(!hi(e))throw e;t.Wr.add(1),await pi(t),t.Hr.set("Offline"),n||(n=()=>Nm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await fa(t)})}function xm(t,e){return e().catch(n=>To(t,n,e))}async function da(t){const e=J(t),n=An(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;wA(e);)try{const s=await JS(e.localStore,r);if(s===null){e.jr.length===0&&n.wr();break}r=s.batchId,EA(e,s)}catch(s){await To(e,s)}Um(e)&&Fm(e)}function wA(t){return ir(t)&&t.jr.length<10}function EA(t,e){t.jr.push(e);const n=An(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Um(t){return ir(t)&&!An(t).ur()&&t.jr.length>0}function Fm(t){An(t).start()}async function IA(t){An(t).Nr()}async function TA(t){const e=An(t);for(const n of t.jr)e.Sr(n.mutations)}async function bA(t,e,n){const r=t.jr.shift(),s=nu.from(r,e,n);await xm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await da(t)}async function SA(t,e){e&&An(t).Vr&&await async function(n,r){if(s=r.code,dS(s)&&s!==I.ABORTED){const i=n.jr.shift();An(n).dr(),await xm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await da(n)}var s}(t,e),Um(t)&&Fm(t)}async function AA(t,e){const n=J(t);e?(n.Wr.delete(2),await fa(n)):e||(n.Wr.add(2),await pi(n),n.Hr.set("Unknown"))}function Yr(t){return t.Yr||(t.Yr=function(e,n,r){const s=J(e);return s.$r(),new fA(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:yA.bind(null,t),Ci:vA.bind(null,t),Rr:_A.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),cu(t)?au(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Mm(t))})),t.Yr}function An(t){return t.Xr||(t.Xr=function(e,n,r){const s=J(e);return s.$r(),new dA(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:IA.bind(null,t),Ci:SA.bind(null,t),Cr:TA.bind(null,t),Dr:bA.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await da(t)):(await t.Xr.stop(),t.jr.length>0&&(H("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
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
 */class lu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new lu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uu(t,e){if(bn("AsyncQueue",`${e}: ${t}`),hi(t))return new x(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Tr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=Pc(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new Tr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Tr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Tr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Mf{constructor(){this.Zr=new Ye(z.comparator)}track(e){const n=e.doc.key,r=this.Zr.get(n);r?e.type!==0&&r.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&r.type!==1?this.Zr=this.Zr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Zr=this.Zr.remove(n):e.type===1&&r.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):X():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,r)=>{e.push(r)}),e}}class Lr{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Lr(e,n,Tr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class CA{constructor(){this.no=void 0,this.listeners=[]}}class RA{constructor(){this.queries=new di(e=>cm(e),ia),this.onlineState="Unknown",this.so=new Set}}async function NA(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new CA),s)try{i.no=await n.onListen(r)}catch(o){const a=uu(o,`Initialization of query '${Oc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.io(n.onlineState),i.no&&e.ro(i.no)&&hu(n)}async function kA(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function OA(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ro(s)&&(r=!0);o.no=s}}r&&hu(n)}function DA(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function hu(t){t.so.forEach(e=>{e.next()})}class PA{constructor(e,n,r){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=r||{}}ro(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Lr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.fo||!r)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=Lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
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
 */class Vm{constructor(e){this.key=e}}class $m{constructor(e){this.key=e}}class LA{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=Ee(),this.mutatedKeys=Ee(),this.Io=lm(e),this.Ao=new Tr(this.Io)}get Ro(){return this.po}bo(e,n){const r=n?n.Po:new Mf,s=n?n.Ao:this.Ao;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=ji(this.query)&&s.size===this.query.limit?s.last():null,l=wo(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=oa(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;f&&g?f.data.isEqual(g.data)?y!==E&&(r.track({type:3,doc:g}),C=!0):this.vo(f,g)||(r.track({type:2,doc:g}),C=!0,(c&&this.Io(g,c)>0||l&&this.Io(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),C=!0):f&&!g&&(r.track({type:1,doc:f}),C=!0,(c||l)&&(a=!0)),C&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),ji(this.query)||wo(this.query))for(;o.size>this.query.limit;){const u=ji(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ao:o,Po:r,Ln:a,mutatedKeys:i}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const i=e.Po.eo();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return g(h)-g(f)}(l.type,u.type)||this.Io(l.doc,u.doc)),this.Vo(r);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,c=a!==this.To;return this.To=a,i.length!==0||c?{snapshot:new Lr(this.query,e.Ao,s,i,e.mutatedKeys,a===0,c,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Mf,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=Ee(),this.Ao.forEach(r=>{this.Co(r.key)&&(this.Eo=this.Eo.add(r.key))});const n=[];return e.forEach(r=>{this.Eo.has(r)||n.push(new $m(r))}),this.Eo.forEach(r=>{e.has(r)||n.push(new Vm(r))}),n}No(e){this.po=e.Gn,this.Eo=Ee();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Lr.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class MA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xA{constructor(e){this.key=e,this.ko=!1}}class UA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new di(a=>cm(a),ia),this.Fo=new Map,this.Mo=new Set,this.Lo=new Ye(z.comparator),this.Bo=new Map,this.Uo=new su,this.qo={},this.Ko=new Map,this.jo=Pr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function FA(t,e){const n=GA(t);let r,s;const i=n.Oo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await ZS(n.localStore,er(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await VA(n,e,r,a==="current"),n.isPrimaryClient&&Dm(n.remoteStore,o)}return s}async function VA(t,e,n,r){t.Wo=(u,h,f)=>async function(g,y,E,C){let A=y.view.bo(E);A.Ln&&(A=await Df(g.localStore,y.query,!1).then(({documents:D})=>y.view.bo(D,A)));const O=C&&C.targetChanges.get(y.targetId),B=y.view.applyChanges(A,g.isPrimaryClient,O);return Uf(g,y.targetId,B.Do),B.snapshot}(t,u,h,f);const s=await Df(t.localStore,e,!0),i=new LA(e,s.Gn),o=i.bo(s.documents),a=ui.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Uf(t,n,c.Do);const l=new MA(e,n,i);return t.Oo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function $A(t,e){const n=J(t),r=n.Oo.get(e),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter(i=>!ia(i,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Uc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Pm(n.remoteStore,r.targetId),Fc(n,r.targetId)}).catch(fi)):(Fc(n,r.targetId),await Uc(n.localStore,r.targetId,!0))}async function jA(t,e,n){const r=QA(t);try{const s=await function(i,o){const a=J(i),c=dt.now(),l=o.reduce((h,f)=>h.add(f.key),Ee());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(f=>{u=f;const g=[];for(const y of o){const E=uS(y,u.get(y.key));E!=null&&g.push(new Qr(y.key,E,tm(E.value.mapValue),wn.exists(!0)))}return a.In.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.qo[i.currentUser.toKey()];c||(c=new Ye(de)),c=c.insert(o,a),i.qo[i.currentUser.toKey()]=c}(r,s.batchId,n),await gi(r,s.changes),await da(r.remoteStore)}catch(s){const i=uu(s,"Failed to persist write");n.reject(i)}}async function jm(t,e){const n=J(t);try{const r=await YS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Bo.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?ve(o.ko):s.removedDocuments.size>0&&(ve(o.ko),o.ko=!1))}),await gi(n,r,e)}catch(r){await fi(r)}}function xf(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Oo.forEach((i,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.io(o)&&(c=!0)}),c&&hu(a)}(r.eventManager,e),s.length&&r.$o.Rr(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BA(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Bo.get(e),i=s&&s.key;if(i){let o=new Ye(z.comparator);o=o.insert(i,ze.newNoDocument(i,ue.min()));const a=Ee().add(i),c=new ua(ue.min(),new Map,new He(de),o,a);await jm(r,c),r.Lo=r.Lo.remove(i),r.Bo.delete(e),fu(r)}else await Uc(r.localStore,e,!1).then(()=>Fc(r,e,n)).catch(fi)}async function HA(t,e){const n=J(t),r=e.batch.batchId;try{const s=await QS(n.localStore,e);Hm(n,r,null),Bm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gi(n,s)}catch(s){await fi(s)}}async function qA(t,e,n){const r=J(t);try{const s=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.In.lookupMutationBatch(c,o).next(u=>(ve(u!==null),l=u.keys(),a.In.removeMutationBatch(c,u))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,l))})}(r.localStore,e);Hm(r,e,n),Bm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gi(r,s)}catch(s){await fi(s)}}function Bm(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function Hm(t,e,n){const r=J(t);let s=r.qo[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qo[r.currentUser.toKey()]=s}}function Fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(r=>{t.Uo.containsKey(r)||qm(t,r)})}function qm(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(Pm(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),fu(t))}function Uf(t,e,n){for(const r of n)r instanceof Vm?(t.Uo.addReference(r.key,e),KA(t,r)):r instanceof $m?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||qm(t,r.key)):X()}function KA(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Mo.add(r),fu(t))}function fu(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new z(be.fromString(e)),r=t.jo.next();t.Bo.set(r,new xA(n)),t.Lo=t.Lo.insert(n,r),Dm(t.remoteStore,new Wn(er(rm(n.path)),r,2,Yl.T))}}async function gi(t,e,n){const r=J(t),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Wo(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=ru.kn(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.$o.Rr(s),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>P.forEach(c,h=>P.forEach(h.Nn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>P.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!hi(u))throw u;H("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Un.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.Un=l.Un.insert(h,y)}}}(r.localStore,i))}async function zA(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Rm(n.localStore,e);n.currentUser=e,function(s,i){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new x(I.CANCELLED,i))})}),s.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gi(n,r.Wn)}}function WA(t,e){const n=J(t),r=n.Bo.get(e);if(r&&r.ko)return Ee().add(r.key);{let s=Ee();const i=n.Fo.get(e);if(!i)return s;for(const o of i){const a=n.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}function GA(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BA.bind(null,e),e.$o.Rr=OA.bind(null,e.eventManager),e.$o.Go=DA.bind(null,e.eventManager),e}function QA(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qA.bind(null,e),e}class YA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=ha(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return GS(this.persistence,new zS,e.initialUser,this.N)}Jo(e){return new iA(iu.Ns,this.N)}Ho(e){return new aA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zA.bind(null,this.syncEngine),await AA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new RA}createDatastore(e){const n=ha(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new hA(s));var s;return function(i,o,a){return new pA(i,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>xf(this.syncEngine,a,0),o=Lf.bt()?new Lf:new cA,new mA(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new UA(r,s,i,o,a,c);return l&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);H("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await pi(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class JA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ZA{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=it.UNAUTHENTICATED,this.clientId=Xg.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{H("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=uu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function eC(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function tC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nC(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>async function(i,o){const a=J(i);a.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const c=ir(a);a.Wr.add(3),await pi(a),c&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await fa(a)}(e.remoteStore,s)),t.onlineComponents=e}async function nC(t){return t.offlineComponents||(H("FirestoreClient","Using default OfflineComponentProvider"),await eC(t,new YA)),t.offlineComponents}async function Km(t){return t.onlineComponents||(H("FirestoreClient","Using default OnlineComponentProvider"),await tC(t,new XA)),t.onlineComponents}function rC(t){return Km(t).then(e=>e.syncEngine)}async function sC(t){const e=await Km(t),n=e.eventManager;return n.onListen=FA.bind(null,e.syncEngine),n.onUnlisten=$A.bind(null,e.syncEngine),n}function iC(t,e,n={}){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new JA({next:h=>{i.enqueueAndForget(()=>kA(s,u)),h.fromCache&&a.source==="server"?c.reject(new x(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new PA(o,l,{includeMetadataChanges:!0,fo:!0});return NA(s,u)}(await sC(t),t.asyncQueue,e,n,r)),r.promise}class oC{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Hs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ff=new Map;/**
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
 */function zm(t,e,n){if(!n)throw new x(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aC(t,e,n,r){if(e===!0&&r===!0)throw new x(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!z.isDocumentKey(t))throw new x(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $f(t){if(z.isDocumentKey(t))throw new x(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Mr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pa(t);throw new x(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function cC(t,e){if(e<=0)throw new x(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class jf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,aC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class du{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jf({}),this._settingsFrozen=!1,e instanceof Hs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new x(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(r.options.projectId)}(e))}get app(){if(!this._app)throw new x(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jf(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new xb;switch(n.type){case"gapi":const r=n.client;return ve(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Vb(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new x(I.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ff.get(e);n&&(H("ComponentProvider","Removing Datastore"),Ff.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class Xr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xr(this.firestore,e,this._query)}}class En extends Xr{constructor(e,n,r){super(e,n,rm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new z(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function lC(t,e,...n){if(t=wt(t),zm("collection","path",e),t instanceof du){const r=be.fromString(e,...n);return $f(r),new En(t,null,r)}{if(!(t instanceof pt||t instanceof En))throw new x(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return $f(r),new En(t.firestore,null,r)}}function uC(t,e,...n){if(t=wt(t),arguments.length===1&&(e=Xg.I()),zm("doc","path",e),t instanceof du){const r=be.fromString(e,...n);return Vf(r),new pt(t,null,new z(r))}{if(!(t instanceof pt||t instanceof En))throw new x(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Vf(r),new pt(t.firestore,t instanceof En?t.converter:null,new z(r))}}/**
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
 */class hC{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new km(this,"async_queue_retry"),this.Rc=()=>{const n=Ba();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=Ba();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=Ba();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new _n;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!hi(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(r=>{this.Tc=r,this.Ec=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw bn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ec=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const s=lu.createAndSchedule(this,e,n,r,i=>this.Vc(i));return this.yc.push(s),s}bc(){this.Tc&&X()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}class mi extends du{constructor(e,n){super(e,n),this.type="firestore",this._queue=new hC,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Gm(this),this._firestoreClient.terminate()}}function fC(t=Ip()){return pl(t,"firestore").getImmediate()}function Wm(t){return t._firestoreClient||Gm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gm(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new oC(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ZA(t._credentials,t._queue,r)}/**
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
 *//**
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
 */class pu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xr(Qe.fromBase64String(e))}catch(n){throw new x(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xr(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gu{constructor(e){this._methodName=e}}/**
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
 */class mu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const dC=/^__.*__$/;class pC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new la(e,this.data,n,this.fieldTransforms)}}function Qm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class yu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=s,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new yu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.Mc(e),s}Lc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return bo(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(Qm(this.kc)&&dC.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class gC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||ha(e)}jc(e,n,r,s=!1){return new yu({kc:e,methodName:n,Kc:r,path:ot.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function vu(t){const e=t._freezeSettings(),n=ha(t._databaseId);return new gC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ym(t,e,n,r,s,i={}){const o=t.jc(i.merge||i.mergeFields?2:0,e,n,s);Zm("Data must be an object, but it was:",o,r);const a=Xm(r,o);let c,l;if(i.merge)c=new Ac(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=yC(e,h,n);if(!o.contains(f))throw new x(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);_C(u,f)||u.push(f)}c=new Ac(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new pC(new bt(a),c,l)}class _u extends gu{_toFieldTransform(e){return new oS(e.path,new $s)}isEqual(e){return e instanceof _u}}function mC(t,e,n,r=!1){return wu(n,t.jc(r?4:3,e))}function wu(t,e){if(Jm(t=wt(t)))return Zm("Unsupported field value:",e,t),Xm(t,e);if(t instanceof gu)return function(n,r){if(!Qm(r.kc))throw r.Uc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Uc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=wu(o,r.Bc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=wt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rS(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=dt.fromDate(n);return{timestampValue:Io(r.N,s)}}if(n instanceof dt){const s=new dt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Io(r.N,s)}}if(n instanceof mu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xr)return{bytesValue:Im(r.N,n._byteString)};if(n instanceof pt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.Uc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:tu(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Uc(`Unsupported field value: ${pa(n)}`)}(t,e)}function Xm(t,e){const n={};return Jg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(t,(r,s)=>{const i=wu(s,e.Oc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Jm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof mu||t instanceof xr||t instanceof pt||t instanceof gu)}function Zm(t,e,n){if(!Jm(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=pa(n);throw r==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function yC(t,e,n){if((e=wt(e))instanceof pu)return e._internalPath;if(typeof e=="string")return ey(t,e);throw bo("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const vC=new RegExp("[~\\*/\\[\\]]");function ey(t,e,n){if(e.search(vC)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pu(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new x(I.INVALID_ARGUMENT,a+t+c)}function _C(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ty{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Eu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wC extends ty{data(){return super.data()}}function Eu(t,e){return typeof e=="string"?ey(t,e):e instanceof pu?e._internalPath:e._delegate._internalPath}/**
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
 */class Oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EC extends ty{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Eu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qi extends EC{data(e={}){return super.data(e)}}class IC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qi(this._firestore,this._userDataWriter,r.key,r,new Oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new qi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Oi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new qi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Oi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:TC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function bC(t){if(wo(t)&&t.explicitOrderBy.length===0)throw new x(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ny{}function iR(t,...e){for(const n of e)t=n._apply(t);return t}class SC extends ny{constructor(e,n,r){super(),this.Gc=e,this.zc=n,this.Hc=r,this.type="where"}_apply(e){const n=vu(e.firestore),r=function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new x(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){Hf(u,l);const g=[];for(const y of u)g.push(Bf(a,s,y));h={arrayValue:{values:g}}}else h=Bf(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Hf(u,l),h=mC(o,i,u,l==="in"||l==="not-in");const f=nt.create(c,l,h);return function(g,y){if(y.v()){const C=im(g);if(C!==null&&!C.isEqual(y.field))throw new x(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${C.toString()}' and '${y.field.toString()}'`);const A=sm(g);A!==null&&CC(g,y.field,A)}const E=function(C,A){for(const O of C.filters)if(A.indexOf(O.op)>=0)return O.op;return null}(g,function(C){switch(C){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(E!==null)throw E===y.op?new x(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new x(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${E.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new Xr(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new li(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function oR(t,e,n){const r=e,s=Eu("where",t);return new SC(s,r,n)}class AC extends ny{constructor(e,n,r){super(),this.type=e,this.Yc=n,this.Xc=r}_apply(e){return new Xr(e.firestore,e.converter,am(e._query,this.Yc,this.Xc))}}function aR(t){return cC("limit",t),new AC("limit",t,"F")}function Bf(t,e,n){if(typeof(n=wt(n))=="string"){if(n==="")throw new x(I.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!om(e)&&n.indexOf("/")!==-1)throw new x(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!z.isDocumentKey(r))throw new x(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pf(t,new z(r))}if(n instanceof pt)return pf(t,n._key);throw new x(I.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(n)}.`)}function Hf(t,e){if(!Array.isArray(t)||t.length===0)throw new x(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new x(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function CC(t,e,n){if(!n.isEqual(e))throw new x(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class RC{convertValue(e,n="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const r={};return Wr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new mu(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=em(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Us(e));default:return null}}convertTimestamp(e){const n=Sn(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);ve(Am(r));const s=new Hs(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ry(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class NC extends RC{constructor(e){super(),this.firestore=e}convertBytes(e){return new xr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function cR(t){t=Mr(t,Xr);const e=Mr(t.firestore,mi),n=Wm(e),r=new NC(e);return bC(t._query),iC(n,t._query).then(s=>new IC(e,r,t,s))}function lR(t,e,n){t=Mr(t,pt);const r=Mr(t.firestore,mi),s=ry(t.converter,e,n);return Iu(r,[Ym(vu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,wn.none())])}function uR(t){return Iu(Mr(t.firestore,mi),[new ym(t._key,wn.none())])}function kC(t,e){const n=Mr(t.firestore,mi),r=uC(t),s=ry(t.converter,e);return Iu(n,[Ym(vu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,wn.exists(!1))]).then(()=>r)}function Iu(t,e){return function(n,r){const s=new _n;return n.asyncQueue.enqueueAndForget(async()=>jA(await rC(n),r,s)),s.promise}(Wm(t),e)}function hR(){return new _u("serverTimestamp")}(function(t,e=!0){(function(n){zr=n})(zs),Cs(new Rr("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new mi(s,new Ub(n.getProvider("auth-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),vn(lf,"3.3.0",t),vn(lf,"3.3.0","esm2017")})();const OC={apiKey:"AIzaSyATA2qOqdgy3-jop8SsDI6lM0cuUs2EKaQ",authDomain:"cosmonav-da72f.firebaseapp.com",projectId:"cosmonav-da72f",storageBucket:"cosmonav-da72f.appspot.com",messagingSenderId:"152795157329",appId:"1:152795157329:web:fc1886f3a1e91e977a3970",measurementId:"G-073151V246"},DC=DI(OC),xt=RT(DC),PC=fC(),LC=()=>Rn(()=>import("./HomeView-5cf2a685.js"),["assets/HomeView-5cf2a685.js","assets/HomeView-751d3437.css"]),MC=()=>Rn(()=>import("./DailyPic-c00cde9f.js"),["assets/DailyPic-c00cde9f.js","assets/utils-dc4ea094.js","assets/utils-03cbe7a5.css","assets/DailyPic-7ce656cf.css"]),xC=()=>Rn(()=>import("./CurrentLocation-9977e556.js"),["assets/CurrentLocation-9977e556.js","assets/utils-dc4ea094.js","assets/utils-03cbe7a5.css","assets/CurrentLocation-015beabd.css"]),UC=()=>Rn(()=>import("./EarthImage-c822a3d5.js"),["assets/EarthImage-c822a3d5.js","assets/utils-dc4ea094.js","assets/utils-03cbe7a5.css","assets/EarthImage-9359521e.css"]),FC=()=>Rn(()=>import("./Login-30dd3970.js"),["assets/Login-30dd3970.js","assets/Login-2a57d7f2.css"]),VC=()=>Rn(()=>import("./Register-67eb60bf.js"),["assets/Register-67eb60bf.js","assets/Register-361c3e66.css"]),$C=()=>Rn(()=>import("./Profile-c0321fb5.js"),["assets/Profile-c0321fb5.js","assets/Profile-e99603b7.css"]),jC=()=>Rn(()=>import("./FavoriteImages-76c97a4d.js"),["assets/FavoriteImages-76c97a4d.js","assets/FavoriteImages-02ac8c3e.css"]),un=fE({history:Nw("/cosmo-nav"),routes:[{path:"/",name:"home",component:LC},{path:"/picture-of-the-day",name:"dailyPic",component:MC},{path:"/current-location",name:"currentLocation",component:xC},{path:"/earth-image",name:"earthImage",component:UC},{path:"/login",name:"login",component:FC},{path:"/register",name:"register",component:VC},{path:"/profile",name:"profile",component:$C,meta:{requiresAuth:!0}},{path:"/favorite-images",name:"favoriteImages",component:jC,meta:{requiresAuth:!0}}]});un.beforeEach(async(t,e,n)=>{if(t.path==="/login"&&xt.currentUser){n("/");return}if(t.matched.some(r=>r.meta.requiresAuth)&&!xt.currentUser){n("login");return}n()});const BC=uw({state:{user:null},mutations:{SET_USER(t,e){t.user=e},CLEAR_USER(t){t.user=null}},actions:{async login({commit:t},e){const{email:n,password:r}=e;try{await v0(xt,n,r)}catch(s){switch(s.code){case"auth/user-not-found":console.log("User not found");break;case"auth/wrong-password":console.log("Wrong password");break;default:console.log("Something went wrong")}return}t("SET_USER",xt.currentUser),un.push("/")},async register({commit:t},e){const{email:n,password:r,age:s,address:i}=e;try{await y0(xt,n,r)}catch(c){switch(c.code){case"auth/email-already-in-use":console.log("Email already in use");break;case"auth/invalid-email":console.log("Invalid email");break;case"auth/opeartion-not-allowed":console.log("Operation not allowed");break;case"auth/weak-password":console.log("Weak password");break;default:console.log("Something went wrong")}return}const a={uid:xt.currentUser.uid,age:s,address:i};try{await kC(lC(PC,"usersCollection"),a)}catch(c){console.log(c)}t("SET_USER",xt.currentUser),un.push("/")},async logout({commit:t}){await _0(xt),t("CLEAR_USER"),un.push("/login")},fetchUser({commit:t}){xt.onAuthStateChanged(async e=>{e===null?t("CLEAR_USER"):(t("SET_USER",e),await un.isReady(),un.currentRoute.value.path==="/login"&&un.push("/"))})}}});let rs;window.nasa_api_key="eRMoQ6l5gXrhya9VGch0aLCRiTx1jioiSd7jFByI";xt.onAuthStateChanged(()=>{rs||(rs=F_(kE),rs.use(BC),rs.use(un),rs.mount("#app"))});export{WC as $,No as A,oR as B,il as C,bv as D,Li as E,ft as F,gd as G,Rd as H,Tv as I,yt as J,QC as K,Xi as L,iR as M,JC as N,zC as O,Nd as P,YC as Q,XC as R,HC as S,Jv as T,Zv as U,GC as V,ZC as W,nR as X,tR as Y,Wd as Z,RE as _,lv as a,rR as a0,_y as a1,KC as a2,Nv as a3,eR as a4,RT as a5,dn as a6,sR as a7,uC as a8,lR as a9,Ji as aa,at as b,Mi as c,Mo as d,Lt as e,Cd as f,Se as g,Pt as h,Pe as i,Si as j,lC as k,PC as l,aR as m,ko as n,hn as o,cv as p,cR as q,hd as r,kC as s,qC as t,Xd as u,uR as v,qn as w,hR as x,Vr as y,xe as z};
