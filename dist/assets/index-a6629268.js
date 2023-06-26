(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function pa(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ee={},Fs=[],Mt=()=>{},Kv=()=>!1,Wv=/^on[^a-z]/,bi=t=>Wv.test(t),Ul=t=>t.startsWith("onUpdate:"),Se=Object.assign,Fl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gv=Object.prototype.hasOwnProperty,fe=(t,e)=>Gv.call(t,e),q=Array.isArray,Vs=t=>ar(t)==="[object Map]",ws=t=>ar(t)==="[object Set]",Dh=t=>ar(t)==="[object Date]",zv=t=>ar(t)==="[object RegExp]",ee=t=>typeof t=="function",Ne=t=>typeof t=="string",Yr=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Vl=t=>Te(t)&&ee(t.then)&&ee(t.catch),Xd=Object.prototype.toString,ar=t=>Xd.call(t),Qv=t=>ar(t).slice(8,-1),Jd=t=>ar(t)==="[object Object]",$l=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xr=pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Yv=/-(\w)/g,dt=ga(t=>t.replace(Yv,(e,n)=>n?n.toUpperCase():"")),Xv=/\B([A-Z])/g,Rt=ga(t=>t.replace(Xv,"-$1").toLowerCase()),Si=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mr=ga(t=>t?`on${Si(t)}`:""),Ws=(t,e)=>!Object.is(t,e),$s=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Lo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Mo=t=>{const e=Ne(t)?Number(t):NaN;return isNaN(e)?t:e};let Lh;const Uc=()=>Lh||(Lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Jv="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",Zv=pa(Jv);function Ai(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ne(s)?s_(s):Ai(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ne(t))return t;if(Te(t))return t}}const e_=/;(?![^(]*\))/g,t_=/:([^]+)/,n_=/\/\*[^]*?\*\//g;function s_(t){const e={};return t.replace(n_,"").split(e_).forEach(n=>{if(n){const s=n.split(t_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ci(t){let e="";if(Ne(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=Ci(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function r_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ne(e)&&(t.class=Ci(e)),n&&(t.style=Ai(n)),t}const i_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",o_=pa(i_);function Zd(t){return!!t||t===""}function a_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ln(t[s],e[s]);return n}function Ln(t,e){if(t===e)return!0;let n=Dh(t),s=Dh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Yr(t),s=Yr(e),n||s)return t===e;if(n=q(t),s=q(e),n||s)return n&&s?a_(t,e):!1;if(n=Te(t),s=Te(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ln(t[o],e[o]))return!1}}return String(t)===String(e)}function ma(t,e){return t.findIndex(n=>Ln(n,e))}const c_=t=>Ne(t)?t:t==null?"":q(t)||Te(t)&&(t.toString===Xd||!ee(t.toString))?JSON.stringify(t,ep,2):String(t),ep=(t,e)=>e&&e.__v_isRef?ep(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:ws(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!q(e)&&!Jd(e)?String(e):e;let yt;class Bl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function l_(t){return new Bl(t)}function tp(t,e=yt){e&&e.active&&e.effects.push(t)}function np(){return yt}function u_(t){yt&&yt.cleanups.push(t)}const jl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},sp=t=>(t.w&xn)>0,rp=t=>(t.n&xn)>0,h_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xn},f_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];sp(r)&&!rp(r)?r.delete(t):e[n++]=r,r.w&=~xn,r.n&=~xn}e.length=n}},Uo=new WeakMap;let Rr=0,xn=1;const Fc=30;let Dt;const ts=Symbol(""),Vc=Symbol("");class Ri{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tp(this,s)}run(){if(!this.active)return this.fn();let e=Dt,n=Rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,Rn=!0,xn=1<<++Rr,Rr<=Fc?h_(this):xh(this),this.fn()}finally{Rr<=Fc&&f_(this),xn=1<<--Rr,Dt=this.parent,Rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(xh(this),this.onStop&&this.onStop(),this.active=!1)}}function xh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function d_(t,e){t.effect&&(t=t.effect.fn);const n=new Ri(t);e&&(Se(n,e),e.scope&&tp(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function p_(t){t.effect.stop()}let Rn=!0;const ip=[];function cr(){ip.push(Rn),Rn=!1}function lr(){const t=ip.pop();Rn=t===void 0?!0:t}function pt(t,e,n){if(Rn&&Dt){let s=Uo.get(t);s||Uo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=jl()),op(r)}}function op(t,e){let n=!1;Rr<=Fc?rp(t)||(t.n|=xn,n=!sp(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function ln(t,e,n,s,r,i){const o=Uo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?$l(n)&&a.push(o.get("length")):(a.push(o.get(ts)),Vs(t)&&a.push(o.get(Vc)));break;case"delete":q(t)||(a.push(o.get(ts)),Vs(t)&&a.push(o.get(Vc)));break;case"set":Vs(t)&&a.push(o.get(ts));break}if(a.length===1)a[0]&&$c(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);$c(jl(c))}}function $c(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&Mh(s);for(const s of n)s.computed||Mh(s)}function Mh(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function g_(t,e){var n;return(n=Uo.get(t))==null?void 0:n.get(e)}const m_=pa("__proto__,__v_isRef,__isVue"),ap=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yr)),y_=ya(),v_=ya(!1,!0),__=ya(!0),w_=ya(!0,!0),Uh=E_();function E_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ce(this);for(let i=0,o=this.length;i<o;i++)pt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ce)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){cr();const s=ce(this)[e].apply(this,n);return lr(),s}}),t}function T_(t){const e=ce(this);return pt(e,"has",t),e.hasOwnProperty(t)}function ya(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?pp:dp:e?fp:hp).get(s))return s;const o=q(s);if(!t){if(o&&fe(Uh,r))return Reflect.get(Uh,r,i);if(r==="hasOwnProperty")return T_}const a=Reflect.get(s,r,i);return(Yr(r)?ap.has(r):m_(r))||(t||pt(s,"get",r),e)?a:Ue(a)?o&&$l(r)?a:a.value:Te(a)?t?ql(a):Es(a):a}}const I_=cp(),b_=cp(!0);function cp(t=!1){return function(n,s,r,i){let o=n[s];if(cs(o)&&Ue(o)&&!Ue(r))return!1;if(!t&&(!Xr(r)&&!cs(r)&&(o=ce(o),r=ce(r)),!q(n)&&Ue(o)&&!Ue(r)))return o.value=r,!0;const a=q(n)&&$l(s)?Number(s)<n.length:fe(n,s),c=Reflect.set(n,s,r,i);return n===ce(i)&&(a?Ws(r,o)&&ln(n,"set",s,r):ln(n,"add",s,r)),c}}function S_(t,e){const n=fe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ln(t,"delete",e,void 0),s}function A_(t,e){const n=Reflect.has(t,e);return(!Yr(e)||!ap.has(e))&&pt(t,"has",e),n}function C_(t){return pt(t,"iterate",q(t)?"length":ts),Reflect.ownKeys(t)}const lp={get:y_,set:I_,deleteProperty:S_,has:A_,ownKeys:C_},up={get:__,set(t,e){return!0},deleteProperty(t,e){return!0}},R_=Se({},lp,{get:v_,set:b_}),N_=Se({},up,{get:w_}),Hl=t=>t,va=t=>Reflect.getPrototypeOf(t);function oo(t,e,n=!1,s=!1){t=t.__v_raw;const r=ce(t),i=ce(e);n||(e!==i&&pt(r,"get",e),pt(r,"get",i));const{has:o}=va(r),a=s?Hl:n?Gl:Jr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ao(t,e=!1){const n=this.__v_raw,s=ce(n),r=ce(t);return e||(t!==r&&pt(s,"has",t),pt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function co(t,e=!1){return t=t.__v_raw,!e&&pt(ce(t),"iterate",ts),Reflect.get(t,"size",t)}function Fh(t){t=ce(t);const e=ce(this);return va(e).has.call(e,t)||(e.add(t),ln(e,"add",t,t)),this}function Vh(t,e){e=ce(e);const n=ce(this),{has:s,get:r}=va(n);let i=s.call(n,t);i||(t=ce(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ws(e,o)&&ln(n,"set",t,e):ln(n,"add",t,e),this}function $h(t){const e=ce(this),{has:n,get:s}=va(e);let r=n.call(e,t);r||(t=ce(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ln(e,"delete",t,void 0),i}function Bh(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&ln(t,"clear",void 0,void 0),n}function lo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ce(o),c=e?Hl:t?Gl:Jr;return!t&&pt(a,"iterate",ts),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function uo(t,e,n){return function(...s){const r=this.__v_raw,i=ce(r),o=Vs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Hl:e?Gl:Jr;return!e&&pt(i,"iterate",c?Vc:ts),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function gn(t){return function(...e){return t==="delete"?!1:this}}function k_(){const t={get(i){return oo(this,i)},get size(){return co(this)},has:ao,add:Fh,set:Vh,delete:$h,clear:Bh,forEach:lo(!1,!1)},e={get(i){return oo(this,i,!1,!0)},get size(){return co(this)},has:ao,add:Fh,set:Vh,delete:$h,clear:Bh,forEach:lo(!1,!0)},n={get(i){return oo(this,i,!0)},get size(){return co(this,!0)},has(i){return ao.call(this,i,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:lo(!0,!1)},s={get(i){return oo(this,i,!0,!0)},get size(){return co(this,!0)},has(i){return ao.call(this,i,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:lo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=uo(i,!1,!1),n[i]=uo(i,!0,!1),e[i]=uo(i,!1,!0),s[i]=uo(i,!0,!0)}),[t,n,e,s]}const[O_,P_,D_,L_]=k_();function _a(t,e){const n=e?t?L_:D_:t?P_:O_;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(fe(n,r)&&r in s?n:s,r,i)}const x_={get:_a(!1,!1)},M_={get:_a(!1,!0)},U_={get:_a(!0,!1)},F_={get:_a(!0,!0)},hp=new WeakMap,fp=new WeakMap,dp=new WeakMap,pp=new WeakMap;function V_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $_(t){return t.__v_skip||!Object.isExtensible(t)?0:V_(Qv(t))}function Es(t){return cs(t)?t:wa(t,!1,lp,x_,hp)}function gp(t){return wa(t,!1,R_,M_,fp)}function ql(t){return wa(t,!0,up,U_,dp)}function B_(t){return wa(t,!0,N_,F_,pp)}function wa(t,e,n,s,r){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=$_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ns(t){return cs(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function cs(t){return!!(t&&t.__v_isReadonly)}function Xr(t){return!!(t&&t.__v_isShallow)}function Kl(t){return ns(t)||cs(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Wl(t){return Lo(t,"__v_skip",!0),t}const Jr=t=>Te(t)?Es(t):t,Gl=t=>Te(t)?ql(t):t;function zl(t){Rn&&Dt&&(t=ce(t),op(t.dep||(t.dep=jl())))}function Ea(t,e){t=ce(t);const n=t.dep;n&&$c(n)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function ss(t){return yp(t,!1)}function mp(t){return yp(t,!0)}function yp(t,e){return Ue(t)?t:new j_(t,e)}class j_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:Jr(e)}get value(){return zl(this),this._value}set value(e){const n=this.__v_isShallow||Xr(e)||cs(e);e=n?e:ce(e),Ws(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Jr(e),Ea(this))}}function H_(t){Ea(t)}function ke(t){return Ue(t)?t.value:t}function q_(t){return ee(t)?t():ke(t)}const K_={get:(t,e,n)=>ke(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ue(r)&&!Ue(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Ql(t){return ns(t)?t:new Proxy(t,K_)}class W_{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>zl(this),()=>Ea(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function G_(t){return new W_(t)}function z_(t){const e=q(t)?new Array(t.length):{};for(const n in t)e[n]=vp(t,n);return e}class Q_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return g_(ce(this._object),this._key)}}class Y_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function X_(t,e,n){return Ue(t)?t:ee(t)?new Y_(t):Te(t)&&arguments.length>1?vp(t,e,n):ss(t)}function vp(t,e,n){const s=t[e];return Ue(s)?s:new Q_(t,e,n)}class J_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ri(e,()=>{this._dirty||(this._dirty=!0,Ea(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ce(this);return zl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Z_(t,e,n=!1){let s,r;const i=ee(t);return i?(s=t,r=Mt):(s=t.get,r=t.set),new J_(s,r,i||!r,n)}function ew(t,...e){}function tw(t,e){}function an(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ts(i,e,n)}return r}function wt(t,e,n,s){if(ee(t)){const i=an(t,e,n,s);return i&&Vl(i)&&i.catch(o=>{Ts(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(wt(t[i],e,n,s));return r}function Ts(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){an(c,null,10,[t,o,a]);return}}nw(t,n,r,s)}function nw(t,e,n,s=!0){console.error(t)}let Zr=!1,Bc=!1;const Xe=[];let Kt=0;const Bs=[];let en=null,Qn=0;const _p=Promise.resolve();let Yl=null;function Ta(t){const e=Yl||_p;return t?e.then(this?t.bind(this):t):e}function sw(t){let e=Kt+1,n=Xe.length;for(;e<n;){const s=e+n>>>1;ei(Xe[s])<t?e=s+1:n=s}return e}function Ia(t){(!Xe.length||!Xe.includes(t,Zr&&t.allowRecurse?Kt+1:Kt))&&(t.id==null?Xe.push(t):Xe.splice(sw(t.id),0,t),wp())}function wp(){!Zr&&!Bc&&(Bc=!0,Yl=_p.then(Ep))}function rw(t){const e=Xe.indexOf(t);e>Kt&&Xe.splice(e,1)}function Xl(t){q(t)?Bs.push(...t):(!en||!en.includes(t,t.allowRecurse?Qn+1:Qn))&&Bs.push(t),wp()}function jh(t,e=Zr?Kt+1:0){for(;e<Xe.length;e++){const n=Xe[e];n&&n.pre&&(Xe.splice(e,1),e--,n())}}function Fo(t){if(Bs.length){const e=[...new Set(Bs)];if(Bs.length=0,en){en.push(...e);return}for(en=e,en.sort((n,s)=>ei(n)-ei(s)),Qn=0;Qn<en.length;Qn++)en[Qn]();en=null,Qn=0}}const ei=t=>t.id==null?1/0:t.id,iw=(t,e)=>{const n=ei(t)-ei(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ep(t){Bc=!1,Zr=!0,Xe.sort(iw);const e=Mt;try{for(Kt=0;Kt<Xe.length;Kt++){const n=Xe[Kt];n&&n.active!==!1&&an(n,null,14)}}finally{Kt=0,Xe.length=0,Fo(),Zr=!1,Yl=null,(Xe.length||Bs.length)&&Ep()}}let Ls,ho=[];function Tp(t,e){var n,s;Ls=t,Ls?(Ls.enabled=!0,ho.forEach(({event:r,args:i})=>Ls.emit(r,...i)),ho=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Tp(i,e)}),setTimeout(()=>{Ls||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ho=[])},3e3)):ho=[]}function ow(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ee;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ee;f&&(r=n.map(d=>Ne(d)?d.trim():d)),h&&(r=n.map(xo))}let a,c=s[a=Mr(e)]||s[a=Mr(dt(e))];!c&&i&&(c=s[a=Mr(Rt(e))]),c&&wt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(l,t,6,r)}}function Ip(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=Ip(l,e,!0);u&&(a=!0,Se(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Te(t)&&s.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):Se(o,i),Te(t)&&s.set(t,o),o)}function ba(t,e){return!t||!bi(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,Rt(e))||fe(t,e))}let $e=null,Sa=null;function ti(t){const e=$e;return $e=t,Sa=t&&t.type.__scopeId||null,e}function bp(t){Sa=t}function Sp(){Sa=null}const aw=t=>At;function At(t,e=$e,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&zc(-1);const i=ti(e);let o;try{o=t(...r)}finally{ti(i),s._d&&zc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function bo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:y,inheritAttrs:T}=t;let k,v;const m=ti(t);try{if(n.shapeFlag&4){const w=r||s;k=vt(u.call(w,w,h,i,d,f,y)),v=c}else{const w=e;k=vt(w.length>1?w(i,{attrs:c,slots:a,emit:l}):w(i,null)),v=e.props?c:lw(c)}}catch(w){$r.length=0,Ts(w,t,1),k=he(Je)}let A=k;if(v&&T!==!1){const w=Object.keys(v),{shapeFlag:E}=A;w.length&&E&7&&(o&&w.some(Ul)&&(v=uw(v,o)),A=Qt(A,v))}return n.dirs&&(A=Qt(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),k=A,ti(m),k}function cw(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Mn(s)){if(s.type!==Je||s.children==="v-if"){if(e)return;e=s}}else return}return e}const lw=t=>{let e;for(const n in t)(n==="class"||n==="style"||bi(n))&&((e||(e={}))[n]=t[n]);return e},uw=(t,e)=>{const n={};for(const s in t)(!Ul(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Hh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ba(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Hh(s,o,l):!0:!!o;return!1}function Hh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ba(n,i))return!0}return!1}function Jl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ap=t=>t.__isSuspense,fw={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?pw(e,n,s,r,i,o,a,c,l):gw(t,e,n,s,r,o,a,c,l)},hydrate:mw,create:Zl,normalize:yw},dw=fw;function ni(t,e){const n=t.props&&t.props[e];ee(n)&&n()}function pw(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=Zl(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(ni(t,"onPending"),ni(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),js(f,t.ssFallback)):f.resolve(!1,!0)}function gw(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:y,pendingBranch:T,isInFallback:k,isHydrating:v}=h;if(T)h.pendingBranch=f,Lt(f,T)?(c(T,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():k&&(c(y,d,n,s,r,null,i,o,a),js(h,d))):(h.pendingId++,v?(h.isHydrating=!1,h.activeBranch=T):l(T,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),k?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(y,d,n,s,r,null,i,o,a),js(h,d))):y&&Lt(f,y)?(c(y,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&Lt(f,y))c(y,f,n,s,r,h,i,o,a),js(h,f);else if(ni(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:m,pendingId:A}=h;m>0?setTimeout(()=>{h.pendingId===A&&h.fallback(d)},m):m===0&&h.fallback(d)}}function Zl(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:d,n:y,o:{parentNode:T,remove:k}}=l;let v;const m=vw(t);m&&e!=null&&e.pendingBranch&&(v=e.pendingId,e.deps++);const A=t.props?Mo(t.props.timeout):void 0,w={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof A=="number"?A:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(E=!1,b=!1){const{vnode:N,activeBranch:C,pendingBranch:U,pendingId:V,effects:Q,parentComponent:$,container:Z}=w;if(w.isHydrating)w.isHydrating=!1;else if(!E){const le=C&&U.transition&&U.transition.mode==="out-in";le&&(C.transition.afterLeave=()=>{V===w.pendingId&&f(U,Z,de,0)});let{anchor:de}=w;C&&(de=y(C),d(C,$,w,!0)),le||f(U,Z,de,0)}js(w,U),w.pendingBranch=null,w.isInFallback=!1;let K=w.parent,Oe=!1;for(;K;){if(K.pendingBranch){K.effects.push(...Q),Oe=!0;break}K=K.parent}Oe||Xl(Q),w.effects=[],m&&e&&e.pendingBranch&&v===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),ni(N,"onResolve")},fallback(E){if(!w.pendingBranch)return;const{vnode:b,activeBranch:N,parentComponent:C,container:U,isSVG:V}=w;ni(b,"onFallback");const Q=y(N),$=()=>{w.isInFallback&&(h(null,E,U,Q,C,null,V,a,c),js(w,E))},Z=E.transition&&E.transition.mode==="out-in";Z&&(N.transition.afterLeave=$),w.isInFallback=!0,d(N,C,null,!0),Z||$()},move(E,b,N){w.activeBranch&&f(w.activeBranch,E,b,N),w.container=E},next(){return w.activeBranch&&y(w.activeBranch)},registerDep(E,b){const N=!!w.pendingBranch;N&&w.deps++;const C=E.vnode.el;E.asyncDep.catch(U=>{Ts(U,E,0)}).then(U=>{if(E.isUnmounted||w.isUnmounted||w.pendingId!==E.suspenseId)return;E.asyncResolved=!0;const{vnode:V}=E;Qc(E,U,!1),C&&(V.el=C);const Q=!C&&E.subTree.el;b(E,V,T(C||E.subTree.el),C?null:y(E.subTree),w,o,c),Q&&k(Q),Jl(E,V.el),N&&--w.deps===0&&w.resolve()})},unmount(E,b){w.isUnmounted=!0,w.activeBranch&&d(w.activeBranch,n,E,b),w.pendingBranch&&d(w.pendingBranch,n,E,b)}};return w}function mw(t,e,n,s,r,i,o,a,c){const l=e.suspense=Zl(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function yw(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=qh(s?n.default:n),t.ssFallback=s?qh(n.fallback):he(Je)}function qh(t){let e;if(ee(t)){const n=hs&&t._c;n&&(t._d=!1,Wt()),t=t(),n&&(t._d=!0,e=ft,tg())}return q(t)&&(t=cw(t)),t=vt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Cp(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Xl(t)}function js(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,Jl(s,r))}function vw(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function _w(t,e){return Ni(t,null,e)}function Rp(t,e){return Ni(t,null,{flush:"post"})}function ww(t,e){return Ni(t,null,{flush:"sync"})}const fo={};function Ut(t,e,n){return Ni(t,e,n)}function Ni(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ee){var a;const c=np()===((a=xe)==null?void 0:a.scope)?xe:null;let l,u=!1,h=!1;if(Ue(t)?(l=()=>t.value,u=Xr(t)):ns(t)?(l=()=>t,s=!0):q(t)?(h=!0,u=t.some(w=>ns(w)||Xr(w)),l=()=>t.map(w=>{if(Ue(w))return w.value;if(ns(w))return Xn(w);if(ee(w))return an(w,c,2)})):ee(t)?e?l=()=>an(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),wt(t,c,3,[d])}:l=Mt,e&&s){const w=l;l=()=>Xn(w())}let f,d=w=>{f=m.onStop=()=>{an(w,c,4)}},y;if(zs)if(d=Mt,e?n&&wt(e,c,3,[l(),h?[]:void 0,d]):l(),r==="sync"){const w=fg();y=w.__watcherHandles||(w.__watcherHandles=[])}else return Mt;let T=h?new Array(t.length).fill(fo):fo;const k=()=>{if(m.active)if(e){const w=m.run();(s||u||(h?w.some((E,b)=>Ws(E,T[b])):Ws(w,T)))&&(f&&f(),wt(e,c,3,[w,T===fo?void 0:h&&T[0]===fo?[]:T,d]),T=w)}else m.run()};k.allowRecurse=!!e;let v;r==="sync"?v=k:r==="post"?v=()=>He(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),v=()=>Ia(k));const m=new Ri(l,v);e?n?k():T=m.run():r==="post"?He(m.run.bind(m),c&&c.suspense):m.run();const A=()=>{m.stop(),c&&c.scope&&Fl(c.scope.effects,m)};return y&&y.push(A),A}function Ew(t,e,n){const s=this.proxy,r=Ne(t)?t.includes(".")?Np(s,t):()=>s[t]:t.bind(s,s);let i;ee(e)?i=e:(i=e.handler,n=e);const o=xe;Un(this);const a=Ni(r,i.bind(s),n);return o?Un(o):Nn(),a}function Np(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Xn(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))Xn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(ws(t)||Vs(t))t.forEach(n=>{Xn(n,e)});else if(Jd(t))for(const n in t)Xn(t[n],e);return t}function Tw(t,e){const n=$e;if(n===null)return t;const s=Pa(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ee]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Xn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ht(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(cr(),wt(c,n,8,[t.el,a,t,e]),lr())}}function eu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Oi(()=>{t.isMounted=!0}),Na(()=>{t.isUnmounting=!0}),t}const bt=[Function,Array],tu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bt,onEnter:bt,onAfterEnter:bt,onEnterCancelled:bt,onBeforeLeave:bt,onLeave:bt,onAfterLeave:bt,onLeaveCancelled:bt,onBeforeAppear:bt,onAppear:bt,onAfterAppear:bt,onAppearCancelled:bt},Iw={name:"BaseTransition",props:tu,setup(t,{slots:e}){const n=dn(),s=eu();let r;return()=>{const i=e.default&&Aa(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const T of i)if(T.type!==Je){o=T;break}}const a=ce(t),{mode:c}=a;if(s.isLeaving)return lc(o);const l=Kh(o);if(!l)return lc(o);const u=Gs(l,a,s,n);ls(l,u);const h=n.subTree,f=h&&Kh(h);let d=!1;const{getTransitionKey:y}=l.type;if(y){const T=y();r===void 0?r=T:T!==r&&(r=T,d=!0)}if(f&&f.type!==Je&&(!Lt(l,f)||d)){const T=Gs(f,a,s,n);if(ls(f,T),c==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},lc(o);c==="in-out"&&l.type!==Je&&(T.delayLeave=(k,v,m)=>{const A=Op(s,f);A[String(f.key)]=f,k._leaveCb=()=>{v(),k._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return o}}},kp=Iw;function Op(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Gs(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:y,onBeforeAppear:T,onAppear:k,onAfterAppear:v,onAppearCancelled:m}=e,A=String(t.key),w=Op(n,t),E=(C,U)=>{C&&wt(C,s,9,U)},b=(C,U)=>{const V=U[1];E(C,U),q(C)?C.every(Q=>Q.length<=1)&&V():C.length<=1&&V()},N={mode:i,persisted:o,beforeEnter(C){let U=a;if(!n.isMounted)if(r)U=T||a;else return;C._leaveCb&&C._leaveCb(!0);const V=w[A];V&&Lt(t,V)&&V.el._leaveCb&&V.el._leaveCb(),E(U,[C])},enter(C){let U=c,V=l,Q=u;if(!n.isMounted)if(r)U=k||c,V=v||l,Q=m||u;else return;let $=!1;const Z=C._enterCb=K=>{$||($=!0,K?E(Q,[C]):E(V,[C]),N.delayedLeave&&N.delayedLeave(),C._enterCb=void 0)};U?b(U,[C,Z]):Z()},leave(C,U){const V=String(t.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return U();E(h,[C]);let Q=!1;const $=C._leaveCb=Z=>{Q||(Q=!0,U(),Z?E(y,[C]):E(d,[C]),C._leaveCb=void 0,w[V]===t&&delete w[V])};w[V]=t,f?b(f,[C,$]):$()},clone(C){return Gs(C,e,n,s)}};return N}function lc(t){if(ki(t))return t=Qt(t),t.children=null,t}function Kh(t){return ki(t)?t.children?t.children[0]:void 0:t}function ls(t,e){t.shapeFlag&6&&t.component?ls(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Aa(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ve?(o.patchFlag&128&&r++,s=s.concat(Aa(o.children,e,a))):(e||o.type!==Je)&&s.push(a!=null?Qt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Is(t,e){return ee(t)?(()=>Se({name:t.name},e,{setup:t}))():t}const rs=t=>!!t.type.__asyncLoader;function bw(t){ee(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let d;return c||(d=c=e().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),a)return new Promise((T,k)=>{a(y,()=>T(h()),()=>k(y),u+1)});throw y}).then(y=>d!==c&&c?c:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),l=y,y)))};return Is({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const d=xe;if(l)return()=>uc(l,d);const y=m=>{c=null,Ts(m,d,13,!s)};if(o&&d.suspense||zs)return f().then(m=>()=>uc(m,d)).catch(m=>(y(m),()=>s?he(s,{error:m}):null));const T=ss(!1),k=ss(),v=ss(!!r);return r&&setTimeout(()=>{v.value=!1},r),i!=null&&setTimeout(()=>{if(!T.value&&!k.value){const m=new Error(`Async component timed out after ${i}ms.`);y(m),k.value=m}},i),f().then(()=>{T.value=!0,d.parent&&ki(d.parent.vnode)&&Ia(d.parent.update)}).catch(m=>{y(m),k.value=m}),()=>{if(T.value&&l)return uc(l,d);if(k.value&&s)return he(s,{error:k.value});if(n&&!v.value)return he(n)}}})}function uc(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=he(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const ki=t=>t.type.__isKeepAlive,Sw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=dn(),s=n.ctx;if(!s.renderer)return()=>{const m=e.default&&e.default();return m&&m.length===1?m[0]:m};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(m,A,w,E,b)=>{const N=m.component;l(m,A,w,0,a),c(N.vnode,m,A,w,N,a,E,m.slotScopeIds,b),He(()=>{N.isDeactivated=!1,N.a&&$s(N.a);const C=m.props&&m.props.onVnodeMounted;C&&lt(C,N.parent,m)},a)},s.deactivate=m=>{const A=m.component;l(m,f,null,1,a),He(()=>{A.da&&$s(A.da);const w=m.props&&m.props.onVnodeUnmounted;w&&lt(w,A.parent,m),A.isDeactivated=!0},a)};function d(m){hc(m),u(m,n,a,!0)}function y(m){r.forEach((A,w)=>{const E=Xc(A.type);E&&(!m||!m(E))&&T(w)})}function T(m){const A=r.get(m);!o||!Lt(A,o)?d(A):o&&hc(o),r.delete(m),i.delete(m)}Ut(()=>[t.include,t.exclude],([m,A])=>{m&&y(w=>Nr(m,w)),A&&y(w=>!Nr(A,w))},{flush:"post",deep:!0});let k=null;const v=()=>{k!=null&&r.set(k,fc(n.subTree))};return Oi(v),Ra(v),Na(()=>{r.forEach(m=>{const{subTree:A,suspense:w}=n,E=fc(A);if(m.type===E.type&&m.key===E.key){hc(E);const b=E.component.da;b&&He(b,w);return}d(m)})}),()=>{if(k=null,!e.default)return null;const m=e.default(),A=m[0];if(m.length>1)return o=null,m;if(!Mn(A)||!(A.shapeFlag&4)&&!(A.shapeFlag&128))return o=null,A;let w=fc(A);const E=w.type,b=Xc(rs(w)?w.type.__asyncResolved||{}:E),{include:N,exclude:C,max:U}=t;if(N&&(!b||!Nr(N,b))||C&&b&&Nr(C,b))return o=w,A;const V=w.key==null?E:w.key,Q=r.get(V);return w.el&&(w=Qt(w),A.shapeFlag&128&&(A.ssContent=w)),k=V,Q?(w.el=Q.el,w.component=Q.component,w.transition&&ls(w,w.transition),w.shapeFlag|=512,i.delete(V),i.add(V)):(i.add(V),U&&i.size>parseInt(U,10)&&T(i.values().next().value)),w.shapeFlag|=256,o=w,Ap(A.type)?A:w}}},Aw=Sw;function Nr(t,e){return q(t)?t.some(n=>Nr(n,e)):Ne(t)?t.split(",").includes(e):zv(t)?t.test(e):!1}function Pp(t,e){Lp(t,"a",e)}function Dp(t,e){Lp(t,"da",e)}function Lp(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ca(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ki(r.parent.vnode)&&Cw(s,e,n,r),r=r.parent}}function Cw(t,e,n,s){const r=Ca(e,t,s,!0);ka(()=>{Fl(s[e],r)},n)}function hc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function fc(t){return t.shapeFlag&128?t.ssContent:t}function Ca(t,e,n=xe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;cr(),Un(n);const a=wt(e,n,t,o);return Nn(),lr(),a});return s?r.unshift(i):r.push(i),i}}const fn=t=>(e,n=xe)=>(!zs||t==="sp")&&Ca(t,(...s)=>e(...s),n),nu=fn("bm"),Oi=fn("m"),xp=fn("bu"),Ra=fn("u"),Na=fn("bum"),ka=fn("um"),Mp=fn("sp"),Up=fn("rtg"),Fp=fn("rtc");function Vp(t,e=xe){Ca("ec",t,e)}const su="components",Rw="directives";function $p(t,e){return ru(su,t,!0,e)||t}const Bp=Symbol.for("v-ndc");function Nw(t){return Ne(t)?ru(su,t,!1)||t:t||Bp}function kw(t){return ru(Rw,t)}function ru(t,e,n=!0,s=!1){const r=$e||xe;if(r){const i=r.type;if(t===su){const a=Xc(i,!1);if(a&&(a===e||a===dt(e)||a===Si(dt(e))))return i}const o=Wh(r[t]||i[t],e)||Wh(r.appContext[t],e);return!o&&s?i:o}}function Wh(t,e){return t&&(t[e]||t[dt(e)]||t[Si(dt(e))])}function Ow(t,e,n,s){let r;const i=n&&n[s];if(q(t)||Ne(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Te(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Pw(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(q(s))for(let r=0;r<s.length;r++)t[s[r].name]=s[r].fn;else s&&(t[s.name]=s.key?(...r)=>{const i=s.fn(...r);return i&&(i.key=s.key),i}:s.fn)}return t}function Dw(t,e,n={},s,r){if($e.isCE||$e.parent&&rs($e.parent)&&$e.parent.isCE)return e!=="default"&&(n.name=e),he("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),Wt();const o=i&&jp(i(n)),a=ii(Ve,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function jp(t){return t.some(e=>Mn(e)?!(e.type===Je||e.type===Ve&&!jp(e.children)):!0)?t:null}function Lw(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:Mr(s)]=t[s];return n}const jc=t=>t?ag(t)?Pa(t)||t.proxy:jc(t.parent):null,Ur=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jc(t.parent),$root:t=>jc(t.root),$emit:t=>t.emit,$options:t=>iu(t),$forceUpdate:t=>t.f||(t.f=()=>Ia(t.update)),$nextTick:t=>t.n||(t.n=Ta.bind(t.proxy)),$watch:t=>Ew.bind(t)}),dc=(t,e)=>t!==Ee&&!t.__isScriptSetup&&fe(t,e),Hc={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(dc(s,e))return o[e]=1,s[e];if(r!==Ee&&fe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&fe(l,e))return o[e]=3,i[e];if(n!==Ee&&fe(n,e))return o[e]=4,n[e];qc&&(o[e]=0)}}const u=Ur[e];let h,f;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&fe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,fe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return dc(r,e)?(r[e]=n,!0):s!==Ee&&fe(s,e)?(s[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ee&&fe(t,o)||dc(e,o)||(a=i[0])&&fe(a,o)||fe(s,o)||fe(Ur,o)||fe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},xw=Se({},Hc,{get(t,e){if(e!==Symbol.unscopables)return Hc.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Zv(e)}});function Mw(){return null}function Uw(){return null}function Fw(t){}function Vw(t){}function $w(){return null}function Bw(){}function jw(t,e){return null}function Hw(){return Hp().slots}function qw(){return Hp().attrs}function Kw(t,e,n){const s=dn();if(n&&n.local){const r=ss(t[e]);return Ut(()=>t[e],i=>r.value=i),Ut(r,i=>{i!==t[e]&&s.emit(`update:${e}`,i)}),r}else return{__v_isRef:!0,get value(){return t[e]},set value(r){s.emit(`update:${e}`,r)}}}function Hp(){const t=dn();return t.setupContext||(t.setupContext=ug(t))}function si(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Ww(t,e){const n=si(t);for(const s in e){if(s.startsWith("__skip"))continue;let r=n[s];r?q(r)||ee(r)?r=n[s]={type:r,default:e[s]}:r.default=e[s]:r===null&&(r=n[s]={default:e[s]}),r&&e[`__skip_${s}`]&&(r.skipFactory=!0)}return n}function Gw(t,e){return!t||!e?t||e:q(t)&&q(e)?t.concat(e):Se({},si(t),si(e))}function zw(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function Qw(t){const e=dn();let n=t();return Nn(),Vl(n)&&(n=n.catch(s=>{throw Un(e),s})),[n,()=>Un(e)]}let qc=!0;function Yw(t){const e=iu(t),n=t.proxy,s=t.ctx;qc=!1,e.beforeCreate&&Gh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:y,activated:T,deactivated:k,beforeDestroy:v,beforeUnmount:m,destroyed:A,unmounted:w,render:E,renderTracked:b,renderTriggered:N,errorCaptured:C,serverPrefetch:U,expose:V,inheritAttrs:Q,components:$,directives:Z,filters:K}=e;if(l&&Xw(l,s,null),o)for(const de in o){const ge=o[de];ee(ge)&&(s[de]=ge.bind(n))}if(r){const de=r.call(n,n);Te(de)&&(t.data=Es(de))}if(qc=!0,i)for(const de in i){const ge=i[de],Xt=ee(ge)?ge.bind(n,n):ee(ge.get)?ge.get.bind(n,n):Mt,pn=!ee(ge)&&ee(ge.set)?ge.set.bind(n):Mt,$t=_t({get:Xt,set:pn});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>$t.value,set:ct=>$t.value=ct})}if(a)for(const de in a)qp(a[de],s,n,de);if(c){const de=ee(c)?c.call(n):c;Reflect.ownKeys(de).forEach(ge=>{Fr(ge,de[ge])})}u&&Gh(u,t,"c");function le(de,ge){q(ge)?ge.forEach(Xt=>de(Xt.bind(n))):ge&&de(ge.bind(n))}if(le(nu,h),le(Oi,f),le(xp,d),le(Ra,y),le(Pp,T),le(Dp,k),le(Vp,C),le(Fp,b),le(Up,N),le(Na,m),le(ka,w),le(Mp,U),q(V))if(V.length){const de=t.exposed||(t.exposed={});V.forEach(ge=>{Object.defineProperty(de,ge,{get:()=>n[ge],set:Xt=>n[ge]=Xt})})}else t.exposed||(t.exposed={});E&&t.render===Mt&&(t.render=E),Q!=null&&(t.inheritAttrs=Q),$&&(t.components=$),Z&&(t.directives=Z)}function Xw(t,e,n=Mt){q(t)&&(t=Kc(t));for(const s in t){const r=t[s];let i;Te(r)?"default"in r?i=Nt(r.from||s,r.default,!0):i=Nt(r.from||s):i=Nt(r),Ue(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Gh(t,e,n){wt(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function qp(t,e,n,s){const r=s.includes(".")?Np(n,s):()=>n[s];if(Ne(t)){const i=e[t];ee(i)&&Ut(r,i)}else if(ee(t))Ut(r,t.bind(n));else if(Te(t))if(q(t))t.forEach(i=>qp(i,e,n,s));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&Ut(r,i,t)}}function iu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Vo(c,l,o,!0)),Vo(c,e,o)),Te(e)&&i.set(e,c),c}function Vo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Vo(t,i,n,!0),r&&r.forEach(o=>Vo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Jw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jw={data:zh,props:Qh,emits:Qh,methods:kr,computed:kr,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:kr,directives:kr,watch:eE,provide:zh,inject:Zw};function zh(t,e){return e?t?function(){return Se(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function Zw(t,e){return kr(Kc(t),Kc(e))}function Kc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function kr(t,e){return t?Se(Object.create(null),t,e):e}function Qh(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:Se(Object.create(null),si(t),si(e??{})):e}function eE(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const s in e)n[s]=nt(t[s],e[s]);return n}function Kp(){return{app:null,config:{isNativeTag:Kv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tE=0;function nE(t,e){return function(s,r=null){ee(s)||(s=Se({},s)),r!=null&&!Te(r)&&(r=null);const i=Kp(),o=new Set;let a=!1;const c=i.app={_uid:tE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:pg,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=he(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Pa(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){ri=c;try{return l()}finally{ri=null}}};return c}}let ri=null;function Fr(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function Nt(t,e,n=!1){const s=xe||$e;if(s||ri){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ri._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ee(e)?e.call(s&&s.proxy):e}}function sE(){return!!(xe||$e||ri)}function rE(t,e,n,s=!1){const r={},i={};Lo(i,Oa,1),t.propsDefaults=Object.create(null),Wp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:gp(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function iE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ce(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ba(t.emitsOptions,f))continue;const d=e[f];if(c)if(fe(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const y=dt(f);r[y]=Wc(c,a,y,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{Wp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=Rt(h))===h||!fe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Wc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!fe(e,h))&&(delete i[h],l=!0)}l&&ln(t,"set","$attrs")}function Wp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xr(c))continue;const l=e[c];let u;r&&fe(r,u=dt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ba(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ce(n),l=a||Ee;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Wc(r,c,h,l[h],t,!fe(l,h))}}return o}function Wc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ee(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Un(r),s=l[n]=c.call(null,e),Nn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Rt(n))&&(s=!0))}return s}function Gp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[f,d]=Gp(h,e,!0);Se(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Te(t)&&s.set(t,Fs),Fs;if(q(i))for(let u=0;u<i.length;u++){const h=dt(i[u]);Yh(h)&&(o[h]=Ee)}else if(i)for(const u in i){const h=dt(u);if(Yh(h)){const f=i[u],d=o[h]=q(f)||ee(f)?{type:f}:Se({},f);if(d){const y=Zh(Boolean,d.type),T=Zh(String,d.type);d[0]=y>-1,d[1]=T<0||y<T,(y>-1||fe(d,"default"))&&a.push(h)}}}const l=[o,a];return Te(t)&&s.set(t,l),l}function Yh(t){return t[0]!=="$"}function Xh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Jh(t,e){return Xh(t)===Xh(e)}function Zh(t,e){return q(e)?e.findIndex(n=>Jh(n,t)):ee(e)&&Jh(e,t)?0:-1}const zp=t=>t[0]==="_"||t==="$stable",ou=t=>q(t)?t.map(vt):[vt(t)],oE=(t,e,n)=>{if(e._n)return e;const s=At((...r)=>ou(e(...r)),n);return s._c=!1,s},Qp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(zp(r))continue;const i=t[r];if(ee(i))e[r]=oE(r,i,s);else if(i!=null){const o=ou(i);e[r]=()=>o}}},Yp=(t,e)=>{const n=ou(e);t.slots.default=()=>n},aE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Lo(e,"_",n)):Qp(e,t.slots={})}else t.slots={},e&&Yp(t,e);Lo(t.slots,Oa,1)},cE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Se(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Qp(e,r)),o=e}else e&&(Yp(t,e),o={default:1});if(i)for(const a in r)!zp(a)&&!(a in o)&&delete r[a]};function $o(t,e,n,s,r=!1){if(q(t)){t.forEach((f,d)=>$o(f,e&&(q(e)?e[d]:e),n,s,r));return}if(rs(s)&&!r)return;const i=s.shapeFlag&4?Pa(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ne(l)?(u[l]=null,fe(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),ee(c))an(c,a,12,[o,u]);else{const f=Ne(c),d=Ue(c);if(f||d){const y=()=>{if(t.f){const T=f?fe(h,c)?h[c]:u[c]:c.value;r?q(T)&&Fl(T,i):q(T)?T.includes(i)||T.push(i):f?(u[c]=[i],fe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,fe(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,He(y,n)):y()}}}let mn=!1;const po=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",go=t=>t.nodeType===8;function lE(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(v,m)=>{if(!m.hasChildNodes()){n(null,v,m),Fo(),m._vnode=v;return}mn=!1,h(m.firstChild,v,null,null,null),Fo(),m._vnode=v,mn&&console.error("Hydration completed but contains mismatches.")},h=(v,m,A,w,E,b=!1)=>{const N=go(v)&&v.data==="[",C=()=>T(v,m,A,w,E,N),{type:U,ref:V,shapeFlag:Q,patchFlag:$}=m;let Z=v.nodeType;m.el=v,$===-2&&(b=!1,m.dynamicChildren=null);let K=null;switch(U){case us:Z!==3?m.children===""?(c(m.el=r(""),o(v),v),K=v):K=C():(v.data!==m.children&&(mn=!0,v.data=m.children),K=i(v));break;case Je:Z!==8||N?K=C():K=i(v);break;case is:if(N&&(v=i(v),Z=v.nodeType),Z===1||Z===3){K=v;const Oe=!m.children.length;for(let le=0;le<m.staticCount;le++)Oe&&(m.children+=K.nodeType===1?K.outerHTML:K.data),le===m.staticCount-1&&(m.anchor=K),K=i(K);return N?i(K):K}else C();break;case Ve:N?K=y(v,m,A,w,E,b):K=C();break;default:if(Q&1)Z!==1||m.type.toLowerCase()!==v.tagName.toLowerCase()?K=C():K=f(v,m,A,w,E,b);else if(Q&6){m.slotScopeIds=E;const Oe=o(v);if(e(m,Oe,null,A,w,po(Oe),b),K=N?k(v):i(v),K&&go(K)&&K.data==="teleport end"&&(K=i(K)),rs(m)){let le;N?(le=he(Ve),le.anchor=K?K.previousSibling:Oe.lastChild):le=v.nodeType===3?Ct(""):he("div"),le.el=v,m.component.subTree=le}}else Q&64?Z!==8?K=C():K=m.type.hydrate(v,m,A,w,E,b,t,d):Q&128&&(K=m.type.hydrate(v,m,A,w,po(o(v)),E,b,t,h))}return V!=null&&$o(V,null,w,m),K},f=(v,m,A,w,E,b)=>{b=b||!!m.dynamicChildren;const{type:N,props:C,patchFlag:U,shapeFlag:V,dirs:Q}=m,$=N==="input"&&Q||N==="option";if($||U!==-1){if(Q&&Ht(m,null,A,"created"),C)if($||!b||U&48)for(const K in C)($&&K.endsWith("value")||bi(K)&&!xr(K))&&s(v,K,null,C[K],!1,void 0,A);else C.onClick&&s(v,"onClick",null,C.onClick,!1,void 0,A);let Z;if((Z=C&&C.onVnodeBeforeMount)&&lt(Z,A,m),Q&&Ht(m,null,A,"beforeMount"),((Z=C&&C.onVnodeMounted)||Q)&&Cp(()=>{Z&&lt(Z,A,m),Q&&Ht(m,null,A,"mounted")},w),V&16&&!(C&&(C.innerHTML||C.textContent))){let K=d(v.firstChild,m,v,A,w,E,b);for(;K;){mn=!0;const Oe=K;K=K.nextSibling,a(Oe)}}else V&8&&v.textContent!==m.children&&(mn=!0,v.textContent=m.children)}return v.nextSibling},d=(v,m,A,w,E,b,N)=>{N=N||!!m.dynamicChildren;const C=m.children,U=C.length;for(let V=0;V<U;V++){const Q=N?C[V]:C[V]=vt(C[V]);if(v)v=h(v,Q,w,E,b,N);else{if(Q.type===us&&!Q.children)continue;mn=!0,n(null,Q,A,null,w,E,po(A),b)}}return v},y=(v,m,A,w,E,b)=>{const{slotScopeIds:N}=m;N&&(E=E?E.concat(N):N);const C=o(v),U=d(i(v),m,C,A,w,E,b);return U&&go(U)&&U.data==="]"?i(m.anchor=U):(mn=!0,c(m.anchor=l("]"),C,U),U)},T=(v,m,A,w,E,b)=>{if(mn=!0,m.el=null,b){const U=k(v);for(;;){const V=i(v);if(V&&V!==U)a(V);else break}}const N=i(v),C=o(v);return a(v),n(null,m,C,N,A,w,po(C),E),N},k=v=>{let m=0;for(;v;)if(v=i(v),v&&go(v)&&(v.data==="["&&m++,v.data==="]")){if(m===0)return i(v);m--}return v};return[u,h]}const He=Cp;function Xp(t){return Zp(t)}function Jp(t){return Zp(t,lE)}function Zp(t,e){const n=Uc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Mt,insertStaticContent:y}=t,T=(p,g,_,I=null,R=null,P=null,F=!1,L=null,x=!!g.dynamicChildren)=>{if(p===g)return;p&&!Lt(p,g)&&(I=S(p),ct(p,R,P,!0),p=null),g.patchFlag===-2&&(x=!1,g.dynamicChildren=null);const{type:D,ref:Y,shapeFlag:G}=g;switch(D){case us:k(p,g,_,I);break;case Je:v(p,g,_,I);break;case is:p==null&&m(g,_,I,F);break;case Ve:$(p,g,_,I,R,P,F,L,x);break;default:G&1?E(p,g,_,I,R,P,F,L,x):G&6?Z(p,g,_,I,R,P,F,L,x):(G&64||G&128)&&D.process(p,g,_,I,R,P,F,L,x,M)}Y!=null&&R&&$o(Y,p&&p.ref,P,g||p,!g)},k=(p,g,_,I)=>{if(p==null)s(g.el=a(g.children),_,I);else{const R=g.el=p.el;g.children!==p.children&&l(R,g.children)}},v=(p,g,_,I)=>{p==null?s(g.el=c(g.children||""),_,I):g.el=p.el},m=(p,g,_,I)=>{[p.el,p.anchor]=y(p.children,g,_,I,p.el,p.anchor)},A=({el:p,anchor:g},_,I)=>{let R;for(;p&&p!==g;)R=f(p),s(p,_,I),p=R;s(g,_,I)},w=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=f(p),r(p),p=_;r(g)},E=(p,g,_,I,R,P,F,L,x)=>{F=F||g.type==="svg",p==null?b(g,_,I,R,P,F,L,x):U(p,g,R,P,F,L,x)},b=(p,g,_,I,R,P,F,L)=>{let x,D;const{type:Y,props:G,shapeFlag:X,transition:re,dirs:ae}=p;if(x=p.el=o(p.type,P,G&&G.is,G),X&8?u(x,p.children):X&16&&C(p.children,x,null,I,R,P&&Y!=="foreignObject",F,L),ae&&Ht(p,null,I,"created"),N(x,p,p.scopeId,F,I),G){for(const we in G)we!=="value"&&!xr(we)&&i(x,we,null,G[we],P,p.children,I,R,Qe);"value"in G&&i(x,"value",null,G.value),(D=G.onVnodeBeforeMount)&&lt(D,I,p)}ae&&Ht(p,null,I,"beforeMount");const Ie=(!R||R&&!R.pendingBranch)&&re&&!re.persisted;Ie&&re.beforeEnter(x),s(x,g,_),((D=G&&G.onVnodeMounted)||Ie||ae)&&He(()=>{D&&lt(D,I,p),Ie&&re.enter(x),ae&&Ht(p,null,I,"mounted")},R)},N=(p,g,_,I,R)=>{if(_&&d(p,_),I)for(let P=0;P<I.length;P++)d(p,I[P]);if(R){let P=R.subTree;if(g===P){const F=R.vnode;N(p,F,F.scopeId,F.slotScopeIds,R.parent)}}},C=(p,g,_,I,R,P,F,L,x=0)=>{for(let D=x;D<p.length;D++){const Y=p[D]=L?Tn(p[D]):vt(p[D]);T(null,Y,g,_,I,R,P,F,L)}},U=(p,g,_,I,R,P,F)=>{const L=g.el=p.el;let{patchFlag:x,dynamicChildren:D,dirs:Y}=g;x|=p.patchFlag&16;const G=p.props||Ee,X=g.props||Ee;let re;_&&Wn(_,!1),(re=X.onVnodeBeforeUpdate)&&lt(re,_,g,p),Y&&Ht(g,p,_,"beforeUpdate"),_&&Wn(_,!0);const ae=R&&g.type!=="foreignObject";if(D?V(p.dynamicChildren,D,L,_,I,ae,P):F||ge(p,g,L,null,_,I,ae,P,!1),x>0){if(x&16)Q(L,g,G,X,_,I,R);else if(x&2&&G.class!==X.class&&i(L,"class",null,X.class,R),x&4&&i(L,"style",G.style,X.style,R),x&8){const Ie=g.dynamicProps;for(let we=0;we<Ie.length;we++){const Pe=Ie[we],Pt=G[Pe],Ns=X[Pe];(Ns!==Pt||Pe==="value")&&i(L,Pe,Pt,Ns,R,p.children,_,I,Qe)}}x&1&&p.children!==g.children&&u(L,g.children)}else!F&&D==null&&Q(L,g,G,X,_,I,R);((re=X.onVnodeUpdated)||Y)&&He(()=>{re&&lt(re,_,g,p),Y&&Ht(g,p,_,"updated")},I)},V=(p,g,_,I,R,P,F)=>{for(let L=0;L<g.length;L++){const x=p[L],D=g[L],Y=x.el&&(x.type===Ve||!Lt(x,D)||x.shapeFlag&70)?h(x.el):_;T(x,D,Y,null,I,R,P,F,!0)}},Q=(p,g,_,I,R,P,F)=>{if(_!==I){if(_!==Ee)for(const L in _)!xr(L)&&!(L in I)&&i(p,L,_[L],null,F,g.children,R,P,Qe);for(const L in I){if(xr(L))continue;const x=I[L],D=_[L];x!==D&&L!=="value"&&i(p,L,D,x,F,g.children,R,P,Qe)}"value"in I&&i(p,"value",_.value,I.value)}},$=(p,g,_,I,R,P,F,L,x)=>{const D=g.el=p?p.el:a(""),Y=g.anchor=p?p.anchor:a("");let{patchFlag:G,dynamicChildren:X,slotScopeIds:re}=g;re&&(L=L?L.concat(re):re),p==null?(s(D,_,I),s(Y,_,I),C(g.children,_,Y,R,P,F,L,x)):G>0&&G&64&&X&&p.dynamicChildren?(V(p.dynamicChildren,X,_,R,P,F,L),(g.key!=null||R&&g===R.subTree)&&au(p,g,!0)):ge(p,g,_,Y,R,P,F,L,x)},Z=(p,g,_,I,R,P,F,L,x)=>{g.slotScopeIds=L,p==null?g.shapeFlag&512?R.ctx.activate(g,_,I,F,x):K(g,_,I,R,P,F,x):Oe(p,g,x)},K=(p,g,_,I,R,P,F)=>{const L=p.component=og(p,I,R);if(ki(p)&&(L.ctx.renderer=M),cg(L),L.asyncDep){if(R&&R.registerDep(L,le),!p.el){const x=L.subTree=he(Je);v(null,x,g,_)}return}le(L,p,g,_,R,P,F)},Oe=(p,g,_)=>{const I=g.component=p.component;if(hw(p,g,_))if(I.asyncDep&&!I.asyncResolved){de(I,g,_);return}else I.next=g,rw(I.update),I.update();else g.el=p.el,I.vnode=g},le=(p,g,_,I,R,P,F)=>{const L=()=>{if(p.isMounted){let{next:Y,bu:G,u:X,parent:re,vnode:ae}=p,Ie=Y,we;Wn(p,!1),Y?(Y.el=ae.el,de(p,Y,F)):Y=ae,G&&$s(G),(we=Y.props&&Y.props.onVnodeBeforeUpdate)&&lt(we,re,Y,ae),Wn(p,!0);const Pe=bo(p),Pt=p.subTree;p.subTree=Pe,T(Pt,Pe,h(Pt.el),S(Pt),p,R,P),Y.el=Pe.el,Ie===null&&Jl(p,Pe.el),X&&He(X,R),(we=Y.props&&Y.props.onVnodeUpdated)&&He(()=>lt(we,re,Y,ae),R)}else{let Y;const{el:G,props:X}=g,{bm:re,m:ae,parent:Ie}=p,we=rs(g);if(Wn(p,!1),re&&$s(re),!we&&(Y=X&&X.onVnodeBeforeMount)&&lt(Y,Ie,g),Wn(p,!0),G&&me){const Pe=()=>{p.subTree=bo(p),me(G,p.subTree,p,R,null)};we?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Pe()):Pe()}else{const Pe=p.subTree=bo(p);T(null,Pe,_,I,p,R,P),g.el=Pe.el}if(ae&&He(ae,R),!we&&(Y=X&&X.onVnodeMounted)){const Pe=g;He(()=>lt(Y,Ie,Pe),R)}(g.shapeFlag&256||Ie&&rs(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&p.a&&He(p.a,R),p.isMounted=!0,g=_=I=null}},x=p.effect=new Ri(L,()=>Ia(D),p.scope),D=p.update=()=>x.run();D.id=p.uid,Wn(p,!0),D()},de=(p,g,_)=>{g.component=p;const I=p.vnode.props;p.vnode=g,p.next=null,iE(p,g.props,I,_),cE(p,g.children,_),cr(),jh(),lr()},ge=(p,g,_,I,R,P,F,L,x=!1)=>{const D=p&&p.children,Y=p?p.shapeFlag:0,G=g.children,{patchFlag:X,shapeFlag:re}=g;if(X>0){if(X&128){pn(D,G,_,I,R,P,F,L,x);return}else if(X&256){Xt(D,G,_,I,R,P,F,L,x);return}}re&8?(Y&16&&Qe(D,R,P),G!==D&&u(_,G)):Y&16?re&16?pn(D,G,_,I,R,P,F,L,x):Qe(D,R,P,!0):(Y&8&&u(_,""),re&16&&C(G,_,I,R,P,F,L,x))},Xt=(p,g,_,I,R,P,F,L,x)=>{p=p||Fs,g=g||Fs;const D=p.length,Y=g.length,G=Math.min(D,Y);let X;for(X=0;X<G;X++){const re=g[X]=x?Tn(g[X]):vt(g[X]);T(p[X],re,_,null,R,P,F,L,x)}D>Y?Qe(p,R,P,!0,!1,G):C(g,_,I,R,P,F,L,x,G)},pn=(p,g,_,I,R,P,F,L,x)=>{let D=0;const Y=g.length;let G=p.length-1,X=Y-1;for(;D<=G&&D<=X;){const re=p[D],ae=g[D]=x?Tn(g[D]):vt(g[D]);if(Lt(re,ae))T(re,ae,_,null,R,P,F,L,x);else break;D++}for(;D<=G&&D<=X;){const re=p[G],ae=g[X]=x?Tn(g[X]):vt(g[X]);if(Lt(re,ae))T(re,ae,_,null,R,P,F,L,x);else break;G--,X--}if(D>G){if(D<=X){const re=X+1,ae=re<Y?g[re].el:I;for(;D<=X;)T(null,g[D]=x?Tn(g[D]):vt(g[D]),_,ae,R,P,F,L,x),D++}}else if(D>X)for(;D<=G;)ct(p[D],R,P,!0),D++;else{const re=D,ae=D,Ie=new Map;for(D=ae;D<=X;D++){const mt=g[D]=x?Tn(g[D]):vt(g[D]);mt.key!=null&&Ie.set(mt.key,D)}let we,Pe=0;const Pt=X-ae+1;let Ns=!1,kh=0;const Tr=new Array(Pt);for(D=0;D<Pt;D++)Tr[D]=0;for(D=re;D<=G;D++){const mt=p[D];if(Pe>=Pt){ct(mt,R,P,!0);continue}let Bt;if(mt.key!=null)Bt=Ie.get(mt.key);else for(we=ae;we<=X;we++)if(Tr[we-ae]===0&&Lt(mt,g[we])){Bt=we;break}Bt===void 0?ct(mt,R,P,!0):(Tr[Bt-ae]=D+1,Bt>=kh?kh=Bt:Ns=!0,T(mt,g[Bt],_,null,R,P,F,L,x),Pe++)}const Oh=Ns?uE(Tr):Fs;for(we=Oh.length-1,D=Pt-1;D>=0;D--){const mt=ae+D,Bt=g[mt],Ph=mt+1<Y?g[mt+1].el:I;Tr[D]===0?T(null,Bt,_,Ph,R,P,F,L,x):Ns&&(we<0||D!==Oh[we]?$t(Bt,_,Ph,2):we--)}}},$t=(p,g,_,I,R=null)=>{const{el:P,type:F,transition:L,children:x,shapeFlag:D}=p;if(D&6){$t(p.component.subTree,g,_,I);return}if(D&128){p.suspense.move(g,_,I);return}if(D&64){F.move(p,g,_,M);return}if(F===Ve){s(P,g,_);for(let G=0;G<x.length;G++)$t(x[G],g,_,I);s(p.anchor,g,_);return}if(F===is){A(p,g,_);return}if(I!==2&&D&1&&L)if(I===0)L.beforeEnter(P),s(P,g,_),He(()=>L.enter(P),R);else{const{leave:G,delayLeave:X,afterLeave:re}=L,ae=()=>s(P,g,_),Ie=()=>{G(P,()=>{ae(),re&&re()})};X?X(P,ae,Ie):Ie()}else s(P,g,_)},ct=(p,g,_,I=!1,R=!1)=>{const{type:P,props:F,ref:L,children:x,dynamicChildren:D,shapeFlag:Y,patchFlag:G,dirs:X}=p;if(L!=null&&$o(L,null,_,p,!0),Y&256){g.ctx.deactivate(p);return}const re=Y&1&&X,ae=!rs(p);let Ie;if(ae&&(Ie=F&&F.onVnodeBeforeUnmount)&&lt(Ie,g,p),Y&6)io(p.component,_,I);else{if(Y&128){p.suspense.unmount(_,I);return}re&&Ht(p,null,g,"beforeUnmount"),Y&64?p.type.remove(p,g,_,R,M,I):D&&(P!==Ve||G>0&&G&64)?Qe(D,g,_,!1,!0):(P===Ve&&G&384||!R&&Y&16)&&Qe(x,g,_),I&&Cs(p)}(ae&&(Ie=F&&F.onVnodeUnmounted)||re)&&He(()=>{Ie&&lt(Ie,g,p),re&&Ht(p,null,g,"unmounted")},_)},Cs=p=>{const{type:g,el:_,anchor:I,transition:R}=p;if(g===Ve){Rs(_,I);return}if(g===is){w(p);return}const P=()=>{r(_),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:F,delayLeave:L}=R,x=()=>F(_,P);L?L(p.el,P,x):x()}else P()},Rs=(p,g)=>{let _;for(;p!==g;)_=f(p),r(p),p=_;r(g)},io=(p,g,_)=>{const{bum:I,scope:R,update:P,subTree:F,um:L}=p;I&&$s(I),R.stop(),P&&(P.active=!1,ct(F,p,g,_)),L&&He(L,g),He(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Qe=(p,g,_,I=!1,R=!1,P=0)=>{for(let F=P;F<p.length;F++)ct(p[F],g,_,I,R)},S=p=>p.shapeFlag&6?S(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),j=(p,g,_)=>{p==null?g._vnode&&ct(g._vnode,null,null,!0):T(g._vnode||null,p,g,null,null,null,_),jh(),Fo(),g._vnode=p},M={p:T,um:ct,m:$t,r:Cs,mt:K,mc:C,pc:ge,pbc:V,n:S,o:t};let z,me;return e&&([z,me]=e(M)),{render:j,hydrate:z,createApp:nE(j,z)}}function Wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function au(t,e,n=!1){const s=t.children,r=e.children;if(q(s)&&q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Tn(r[i]),a.el=o.el),n||au(o,a)),a.type===us&&(a.el=o.el)}}function uE(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const hE=t=>t.__isTeleport,Vr=t=>t&&(t.disabled||t.disabled===""),ef=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Gc=(t,e)=>{const n=t&&t.to;return Ne(n)?e?e(n):null:n},fE={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:y,createText:T,createComment:k}}=l,v=Vr(e.props);let{shapeFlag:m,children:A,dynamicChildren:w}=e;if(t==null){const E=e.el=T(""),b=e.anchor=T("");d(E,n,s),d(b,n,s);const N=e.target=Gc(e.props,y),C=e.targetAnchor=T("");N&&(d(C,N),o=o||ef(N));const U=(V,Q)=>{m&16&&u(A,V,Q,r,i,o,a,c)};v?U(n,b):N&&U(N,C)}else{e.el=t.el;const E=e.anchor=t.anchor,b=e.target=t.target,N=e.targetAnchor=t.targetAnchor,C=Vr(t.props),U=C?n:b,V=C?E:N;if(o=o||ef(b),w?(f(t.dynamicChildren,w,U,r,i,o,a),au(t,e,!0)):c||h(t,e,U,V,r,i,o,a,!1),v)C||mo(e,n,E,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Q=e.target=Gc(e.props,y);Q&&mo(e,Q,null,l,0)}else C&&mo(e,b,N,l,1)}eg(e)},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!Vr(f))&&(i(l),a&16))for(let d=0;d<c.length;d++){const y=c[d];r(y,e,n,!0,!!y.dynamicChildren)}},move:mo,hydrate:dE};function mo(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||Vr(u))&&c&16)for(let f=0;f<l.length;f++)r(l[f],e,n,2);h&&s(a,e,n)}function dE(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Gc(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Vr(e.props))e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,s,r,i)}eg(e)}return e.anchor&&o(e.anchor)}const pE=fE;function eg(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ve=Symbol.for("v-fgt"),us=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),is=Symbol.for("v-stc"),$r=[];let ft=null;function Wt(t=!1){$r.push(ft=t?null:[])}function tg(){$r.pop(),ft=$r[$r.length-1]||null}let hs=1;function zc(t){hs+=t}function ng(t){return t.dynamicChildren=hs>0?ft||Fs:null,tg(),hs>0&&ft&&ft.push(t),t}function Br(t,e,n,s,r,i){return ng(it(t,e,n,s,r,i,!0))}function ii(t,e,n,s,r){return ng(he(t,e,n,s,r,!0))}function Mn(t){return t?t.__v_isVNode===!0:!1}function Lt(t,e){return t.type===e.type&&t.key===e.key}function gE(t){}const Oa="__vInternal",sg=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ne(t)||Ue(t)||ee(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function it(t,e=null,n=null,s=0,r=null,i=t===Ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sg(e),ref:e&&So(e),scopeId:Sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$e};return a?(cu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ne(n)?8:16),hs>0&&!o&&ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ft.push(c),c}const he=mE;function mE(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Bp)&&(t=Je),Mn(t)){const a=Qt(t,e,!0);return n&&cu(a,n),hs>0&&!i&&ft&&(a.shapeFlag&6?ft[ft.indexOf(t)]=a:ft.push(a)),a.patchFlag|=-2,a}if(bE(t)&&(t=t.__vccOpts),e){e=rg(e);let{class:a,style:c}=e;a&&!Ne(a)&&(e.class=Ci(a)),Te(c)&&(Kl(c)&&!q(c)&&(c=Se({},c)),e.style=Ai(c))}const o=Ne(t)?1:Ap(t)?128:hE(t)?64:Te(t)?4:ee(t)?2:0;return it(t,e,n,s,r,o,i,!0)}function rg(t){return t?Kl(t)||Oa in t?Se({},t):t:null}function Qt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?ig(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sg(a),ref:e&&e.ref?n&&r?q(r)?r.concat(So(e)):[r,So(e)]:So(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ct(t=" ",e=0){return he(us,null,t,e)}function yE(t,e){const n=he(is,null,t);return n.staticCount=e,n}function Or(t="",e=!1){return e?(Wt(),ii(Je,null,t)):he(Je,null,t)}function vt(t){return t==null||typeof t=="boolean"?he(Je):q(t)?he(Ve,null,t.slice()):typeof t=="object"?Tn(t):he(us,null,String(t))}function Tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qt(t)}function cu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),cu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Oa in e)?e._ctx=$e:r===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[Ct(e)]):n=8);t.children=e,t.shapeFlag|=n}function ig(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ci([e.class,s.class]));else if(r==="style")e.style=Ai([e.style,s.style]);else if(bi(r)){const i=e[r],o=s[r];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function lt(t,e,n,s=null){wt(t,e,7,[n,s])}const vE=Kp();let _E=0;function og(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||vE,i={uid:_E++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gp(s,r),emitsOptions:Ip(s,r),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ow.bind(null,i),t.ce&&t.ce(i),i}let xe=null;const dn=()=>xe||$e;let lu,ks,tf="__VUE_INSTANCE_SETTERS__";(ks=Uc()[tf])||(ks=Uc()[tf]=[]),ks.push(t=>xe=t),lu=t=>{ks.length>1?ks.forEach(e=>e(t)):ks[0](t)};const Un=t=>{lu(t),t.scope.on()},Nn=()=>{xe&&xe.scope.off(),lu(null)};function ag(t){return t.vnode.shapeFlag&4}let zs=!1;function cg(t,e=!1){zs=e;const{props:n,children:s}=t.vnode,r=ag(t);rE(t,n,r,e),aE(t,s);const i=r?wE(t,e):void 0;return zs=!1,i}function wE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wl(new Proxy(t.ctx,Hc));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?ug(t):null;Un(t),cr();const i=an(s,t,0,[t.props,r]);if(lr(),Nn(),Vl(i)){if(i.then(Nn,Nn),e)return i.then(o=>{Qc(t,o,e)}).catch(o=>{Ts(o,t,0)});t.asyncDep=i}else Qc(t,i,e)}else lg(t,e)}function Qc(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=Ql(e)),lg(t,n)}let Bo,Yc;function EE(t){Bo=t,Yc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,xw))}}const TE=()=>!Bo;function lg(t,e,n){const s=t.type;if(!t.render){if(!e&&Bo&&!s.render){const r=s.template||iu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Se(Se({isCustomElement:i,delimiters:a},o),c);s.render=Bo(r,l)}}t.render=s.render||Mt,Yc&&Yc(t)}Un(t),cr(),Yw(t),lr(),Nn()}function IE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}}))}function ug(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return IE(t)},slots:t.slots,emit:t.emit,expose:e}}function Pa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ql(Wl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ur)return Ur[n](t)},has(e,n){return n in e||n in Ur}}))}function Xc(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function bE(t){return ee(t)&&"__vccOpts"in t}const _t=(t,e)=>Z_(t,e,zs);function Da(t,e,n){const s=arguments.length;return s===2?Te(e)&&!q(e)?Mn(e)?he(t,null,[e]):he(t,e):he(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Mn(n)&&(n=[n]),he(t,e,n))}const hg=Symbol.for("v-scx"),fg=()=>Nt(hg);function SE(){}function AE(t,e,n,s){const r=n[s];if(r&&dg(r,t))return r;const i=e();return i.memo=t.slice(),n[s]=i}function dg(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(Ws(n[s],e[s]))return!1;return hs>0&&ft&&ft.push(t),!0}const pg="3.3.4",CE={createComponentInstance:og,setupComponent:cg,renderComponentRoot:bo,setCurrentRenderingInstance:ti,isVNode:Mn,normalizeVNode:vt},RE=CE,NE=null,kE=null,OE="http://www.w3.org/2000/svg",Yn=typeof document<"u"?document:null,nf=Yn&&Yn.createElement("template"),PE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Yn.createElementNS(OE,t):Yn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Yn.createTextNode(t),createComment:t=>Yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{nf.innerHTML=s?`<svg>${t}</svg>`:t;const a=nf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function DE(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function LE(t,e,n){const s=t.style,r=Ne(n);if(n&&!r){if(e&&!Ne(e))for(const i in e)n[i]==null&&Jc(s,i,"");for(const i in n)Jc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const sf=/\s*!important$/;function Jc(t,e,n){if(q(n))n.forEach(s=>Jc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=xE(t,e);sf.test(n)?t.setProperty(Rt(s),n.replace(sf,""),"important"):t[s]=n}}const rf=["Webkit","Moz","ms"],pc={};function xE(t,e){const n=pc[e];if(n)return n;let s=dt(e);if(s!=="filter"&&s in t)return pc[e]=s;s=Si(s);for(let r=0;r<rf.length;r++){const i=rf[r]+s;if(i in t)return pc[e]=i}return e}const of="http://www.w3.org/1999/xlink";function ME(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(of,e.slice(6,e.length)):t.setAttributeNS(of,e,n);else{const i=o_(e);n==null||i&&!Zd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function UE(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Zd(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function tn(t,e,n,s){t.addEventListener(e,n,s)}function FE(t,e,n,s){t.removeEventListener(e,n,s)}function VE(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=$E(e);if(s){const l=i[e]=HE(s,r);tn(t,a,l,c)}else o&&(FE(t,a,o,c),i[e]=void 0)}}const af=/(?:Once|Passive|Capture)$/;function $E(t){let e;if(af.test(t)){e={};let s;for(;s=t.match(af);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rt(t.slice(2)),e]}let gc=0;const BE=Promise.resolve(),jE=()=>gc||(BE.then(()=>gc=0),gc=Date.now());function HE(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;wt(qE(s,n.value),e,5,[s])};return n.value=t,n.attached=jE(),n}function qE(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const cf=/^on[a-z]/,KE=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?DE(t,s,r):e==="style"?LE(t,n,s):bi(e)?Ul(e)||VE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WE(t,e,s,r))?UE(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ME(t,e,s,r))};function WE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&cf.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||cf.test(e)&&Ne(n)?!1:e in t}function gg(t,e){const n=Is(t);class s extends La{constructor(i){super(n,i,e)}}return s.def=n,s}const GE=t=>gg(t,Og),zE=typeof HTMLElement<"u"?HTMLElement:class{};class La extends zE{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Ta(()=>{this._connected||(tl(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const e=(s,r=!1)=>{const{props:i,styles:o}=s;let a;if(i&&!q(i))for(const c in i){const l=i[c];(l===Number||l&&l.type===Number)&&(c in this._props&&(this._props[c]=Mo(this._props[c])),(a||(a=Object.create(null)))[dt(c)]=!0)}this._numberProps=a,r&&this._resolveProps(s),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(s=>e(s,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,s=q(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&s.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of s.map(dt))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(i){this._setProp(r,i)}})}_setAttr(e){let n=this.getAttribute(e);const s=dt(e);this._numberProps&&this._numberProps[s]&&(n=Mo(n)),this._setProp(s,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,r=!0){n!==this._props[e]&&(this._props[e]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Rt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Rt(e),n+""):n||this.removeAttribute(Rt(e))))}_update(){tl(this._createVNode(),this.shadowRoot)}_createVNode(){const e=he(this._def,Se({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const s=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{s(i,o),Rt(i)!==i&&s(Rt(i),o)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof La){n.parent=r._instance,n.provides=r._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function QE(t="$style"){{const e=dn();if(!e)return Ee;const n=e.type.__cssModules;if(!n)return Ee;const s=n[t];return s||Ee}}function YE(t){const e=dn();if(!e)return;const n=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>el(i,r))},s=()=>{const r=t(e.proxy);Zc(e.subTree,r),n(r)};Rp(s),Oi(()=>{const r=new MutationObserver(s);r.observe(e.subTree.el.parentNode,{childList:!0}),ka(()=>r.disconnect())})}function Zc(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Zc(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)el(t.el,e);else if(t.type===Ve)t.children.forEach(n=>Zc(n,e));else if(t.type===is){let{el:n,anchor:s}=t;for(;n&&(el(n,e),n!==s);)n=n.nextSibling}}function el(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const yn="transition",Ir="animation",uu=(t,{slots:e})=>Da(kp,yg(t),e);uu.displayName="Transition";const mg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},XE=uu.props=Se({},tu,mg),Gn=(t,e=[])=>{q(t)?t.forEach(n=>n(...e)):t&&t(...e)},lf=t=>t?q(t)?t.some(e=>e.length>1):t.length>1:!1;function yg(t){const e={};for(const $ in t)$ in mg||(e[$]=t[$]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,y=JE(r),T=y&&y[0],k=y&&y[1],{onBeforeEnter:v,onEnter:m,onEnterCancelled:A,onLeave:w,onLeaveCancelled:E,onBeforeAppear:b=v,onAppear:N=m,onAppearCancelled:C=A}=e,U=($,Z,K)=>{En($,Z?u:a),En($,Z?l:o),K&&K()},V=($,Z)=>{$._isLeaving=!1,En($,h),En($,d),En($,f),Z&&Z()},Q=$=>(Z,K)=>{const Oe=$?N:m,le=()=>U(Z,$,K);Gn(Oe,[Z,le]),uf(()=>{En(Z,$?c:i),Zt(Z,$?u:a),lf(Oe)||hf(Z,s,T,le)})};return Se(e,{onBeforeEnter($){Gn(v,[$]),Zt($,i),Zt($,o)},onBeforeAppear($){Gn(b,[$]),Zt($,c),Zt($,l)},onEnter:Q(!1),onAppear:Q(!0),onLeave($,Z){$._isLeaving=!0;const K=()=>V($,Z);Zt($,h),_g(),Zt($,f),uf(()=>{$._isLeaving&&(En($,h),Zt($,d),lf(w)||hf($,s,k,K))}),Gn(w,[$,K])},onEnterCancelled($){U($,!1),Gn(A,[$])},onAppearCancelled($){U($,!0),Gn(C,[$])},onLeaveCancelled($){V($),Gn(E,[$])}})}function JE(t){if(t==null)return null;if(Te(t))return[mc(t.enter),mc(t.leave)];{const e=mc(t);return[e,e]}}function mc(t){return Mo(t)}function Zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function En(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function uf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ZE=0;function hf(t,e,n,s){const r=t._endId=++ZE,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=vg(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=d=>{d.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function vg(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),r=s(`${yn}Delay`),i=s(`${yn}Duration`),o=ff(r,i),a=s(`${Ir}Delay`),c=s(`${Ir}Duration`),l=ff(a,c);let u=null,h=0,f=0;e===yn?o>0&&(u=yn,h=o,f=i.length):e===Ir?l>0&&(u=Ir,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?yn:Ir:null,f=u?u===yn?i.length:c.length:0);const d=u===yn&&/\b(transform|all)(,|$)/.test(s(`${yn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function ff(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>df(n)+df(t[s])))}function df(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function _g(){return document.body.offsetHeight}const wg=new WeakMap,Eg=new WeakMap,Tg={name:"TransitionGroup",props:Se({},XE,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=dn(),s=eu();let r,i;return Ra(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!i0(r[0].el,n.vnode.el,o))return;r.forEach(n0),r.forEach(s0);const a=r.filter(r0);_g(),a.forEach(c=>{const l=c.el,u=l.style;Zt(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,En(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=ce(t),a=yg(o);let c=o.tag||Ve;r=i,i=e.default?Aa(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&ls(u,Gs(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];ls(u,Gs(u,a,s,n)),wg.set(u,u.el.getBoundingClientRect())}return he(c,null,i)}}},e0=t=>delete t.mode;Tg.props;const t0=Tg;function n0(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function s0(t){Eg.set(t,t.el.getBoundingClientRect())}function r0(t){const e=wg.get(t),n=Eg.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function i0(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=vg(s);return r.removeChild(s),i}const Fn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>$s(e,n):e};function o0(t){t.target.composing=!0}function pf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jo={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Fn(r);const i=s||r.props&&r.props.type==="number";tn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=xo(a)),t._assign(a)}),n&&tn(t,"change",()=>{t.value=t.value.trim()}),e||(tn(t,"compositionstart",o0),tn(t,"compositionend",pf),tn(t,"change",pf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Fn(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&xo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},hu={deep:!0,created(t,e,n){t._assign=Fn(n),tn(t,"change",()=>{const s=t._modelValue,r=Qs(t),i=t.checked,o=t._assign;if(q(s)){const a=ma(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(ws(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(bg(t,i))})},mounted:gf,beforeUpdate(t,e,n){t._assign=Fn(n),gf(t,e,n)}};function gf(t,{value:e,oldValue:n},s){t._modelValue=e,q(e)?t.checked=ma(e,s.props.value)>-1:ws(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Ln(e,bg(t,!0)))}const fu={created(t,{value:e},n){t.checked=Ln(e,n.props.value),t._assign=Fn(n),tn(t,"change",()=>{t._assign(Qs(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Fn(s),e!==n&&(t.checked=Ln(e,s.props.value))}},Ig={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=ws(e);tn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?xo(Qs(o)):Qs(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Fn(s)},mounted(t,{value:e}){mf(t,e)},beforeUpdate(t,e,n){t._assign=Fn(n)},updated(t,{value:e}){mf(t,e)}};function mf(t,e){const n=t.multiple;if(!(n&&!q(e)&&!ws(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Qs(i);if(n)q(e)?i.selected=ma(e,o)>-1:i.selected=e.has(o);else if(Ln(Qs(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Qs(t){return"_value"in t?t._value:t.value}function bg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Sg={created(t,e,n){yo(t,e,n,null,"created")},mounted(t,e,n){yo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){yo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){yo(t,e,n,s,"updated")}};function Ag(t,e){switch(t){case"SELECT":return Ig;case"TEXTAREA":return jo;default:switch(e){case"checkbox":return hu;case"radio":return fu;default:return jo}}}function yo(t,e,n,s,r){const o=Ag(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}function a0(){jo.getSSRProps=({value:t})=>({value:t}),fu.getSSRProps=({value:t},e)=>{if(e.props&&Ln(e.props.value,t))return{checked:!0}},hu.getSSRProps=({value:t},e)=>{if(q(t)){if(e.props&&ma(t,e.props.value)>-1)return{checked:!0}}else if(ws(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},Sg.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Ag(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const c0=["ctrl","shift","alt","meta"],l0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>c0.some(n=>t[`${n}Key`]&&!e.includes(n))},u0=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=l0[e[r]];if(i&&i(n,e))return}return t(n,...s)},h0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},f0=(t,e)=>n=>{if(!("key"in n))return;const s=Rt(n.key);if(e.some(r=>r===s||h0[r]===s))return t(n)},Cg={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):br(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),br(t,!0),s.enter(t)):s.leave(t,()=>{br(t,!1)}):br(t,e))},beforeUnmount(t,{value:e}){br(t,e)}};function br(t,e){t.style.display=e?t._vod:"none"}function d0(){Cg.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Rg=Se({patchProp:KE},PE);let jr,yf=!1;function Ng(){return jr||(jr=Xp(Rg))}function kg(){return jr=yf?jr:Jp(Rg),yf=!0,jr}const tl=(...t)=>{Ng().render(...t)},Og=(...t)=>{kg().hydrate(...t)},Pg=(...t)=>{const e=Ng().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Dg(s);if(!r)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},p0=(...t)=>{const e=kg().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Dg(s);if(r)return n(r,!0,r instanceof SVGElement)},e};function Dg(t){return Ne(t)?document.querySelector(t):t}let vf=!1;const g0=()=>{vf||(vf=!0,a0(),d0())},m0=()=>{},y0=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:kp,BaseTransitionPropsValidators:tu,Comment:Je,EffectScope:Bl,Fragment:Ve,KeepAlive:Aw,ReactiveEffect:Ri,Static:is,Suspense:dw,Teleport:pE,Text:us,Transition:uu,TransitionGroup:t0,VueElement:La,assertNumber:tw,callWithAsyncErrorHandling:wt,callWithErrorHandling:an,camelize:dt,capitalize:Si,cloneVNode:Qt,compatUtils:kE,compile:m0,computed:_t,createApp:Pg,createBlock:ii,createCommentVNode:Or,createElementBlock:Br,createElementVNode:it,createHydrationRenderer:Jp,createPropsRestProxy:zw,createRenderer:Xp,createSSRApp:p0,createSlots:Pw,createStaticVNode:yE,createTextVNode:Ct,createVNode:he,customRef:G_,defineAsyncComponent:bw,defineComponent:Is,defineCustomElement:gg,defineEmits:Uw,defineExpose:Fw,defineModel:Bw,defineOptions:Vw,defineProps:Mw,defineSSRCustomElement:GE,defineSlots:$w,get devtools(){return Ls},effect:d_,effectScope:l_,getCurrentInstance:dn,getCurrentScope:np,getTransitionRawChildren:Aa,guardReactiveProps:rg,h:Da,handleError:Ts,hasInjectionContext:sE,hydrate:Og,initCustomFormatter:SE,initDirectivesForSSR:g0,inject:Nt,isMemoSame:dg,isProxy:Kl,isReactive:ns,isReadonly:cs,isRef:Ue,isRuntimeOnly:TE,isShallow:Xr,isVNode:Mn,markRaw:Wl,mergeDefaults:Ww,mergeModels:Gw,mergeProps:ig,nextTick:Ta,normalizeClass:Ci,normalizeProps:r_,normalizeStyle:Ai,onActivated:Pp,onBeforeMount:nu,onBeforeUnmount:Na,onBeforeUpdate:xp,onDeactivated:Dp,onErrorCaptured:Vp,onMounted:Oi,onRenderTracked:Fp,onRenderTriggered:Up,onScopeDispose:u_,onServerPrefetch:Mp,onUnmounted:ka,onUpdated:Ra,openBlock:Wt,popScopeId:Sp,provide:Fr,proxyRefs:Ql,pushScopeId:bp,queuePostFlushCb:Xl,reactive:Es,readonly:ql,ref:ss,registerRuntimeCompiler:EE,render:tl,renderList:Ow,renderSlot:Dw,resolveComponent:$p,resolveDirective:kw,resolveDynamicComponent:Nw,resolveFilter:NE,resolveTransitionHooks:Gs,setBlockTracking:zc,setDevtoolsHook:Tp,setTransitionHooks:ls,shallowReactive:gp,shallowReadonly:B_,shallowRef:mp,ssrContextKey:hg,ssrUtils:RE,stop:p_,toDisplayString:c_,toHandlerKey:Mr,toHandlers:Lw,toRaw:ce,toRef:X_,toRefs:z_,toValue:q_,transformVNodeArgs:gE,triggerRef:H_,unref:ke,useAttrs:qw,useCssModule:QE,useCssVars:YE,useModel:Kw,useSSRContext:fg,useSlots:Hw,useTransitionState:eu,vModelCheckbox:hu,vModelDynamic:Sg,vModelRadio:fu,vModelSelect:Ig,vModelText:jo,vShow:Cg,version:pg,warn:ew,watch:Ut,watchEffect:_w,watchPostEffect:Rp,watchSyncEffect:ww,withAsyncContext:Qw,withCtx:At,withDefaults:jw,withDirectives:Tw,withKeys:f0,withMemo:AE,withModifiers:u0,withScopeId:aw},Symbol.toStringTag,{value:"Module"}));function v0(){return Lg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Lg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const _0=typeof Proxy=="function",w0="devtools-plugin:setup",E0="plugin:settings:set";let Os,nl;function T0(){var t;return Os!==void 0||(typeof window<"u"&&window.performance?(Os=!0,nl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Os=!0,nl=global.perf_hooks.performance):Os=!1),Os}function I0(){return T0()?nl.now():Date.now()}class b0{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},s);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}i=o},now(){return I0()}},n&&n.on(E0,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function S0(t,e){const n=t,s=Lg(),r=v0(),i=_0&&n.enableEarlyProxy;if(r&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(w0,t,e);else{const o=i?new b0(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var xg="store";function Mg(t){return t===void 0&&(t=null),Nt(t!==null?t:xg)}function ur(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function A0(t){return t!==null&&typeof t=="object"}function C0(t){return t&&typeof t.then=="function"}function R0(t,e){return function(){return t(e)}}function Ug(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Fg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;xa(t,n,[],t._modules.root,!0),du(t,n,e)}function du(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,i={};ur(r,function(o,a){i[a]=R0(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Es({data:e}),t.strict&&D0(t),s&&n&&t._withCommit(function(){s.data=null})}function xa(t,e,n,s,r){var i=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!i&&!r){var a=pu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=s.state})}var l=s.context=N0(t,o,n);s.forEachMutation(function(u,h){var f=o+h;k0(t,f,u,l)}),s.forEachAction(function(u,h){var f=u.root?h:o+h,d=u.handler||u;O0(t,f,d,l)}),s.forEachGetter(function(u,h){var f=o+h;P0(t,f,u,l)}),s.forEachChild(function(u,h){xa(t,e,n.concat(h),u,r)})}function N0(t,e,n){var s=e==="",r={dispatch:s?t.dispatch:function(i,o,a){var c=Ho(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:s?t.commit:function(i,o,a){var c=Ho(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(r,{getters:{get:s?function(){return t.getters}:function(){return Vg(t,e)}},state:{get:function(){return pu(t.state,n)}}}),r}function Vg(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,s)===e){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function k0(t,e,n,s){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,s.state,o)})}function O0(t,e,n,s){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return C0(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function P0(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(s.state,s.getters,i.state,i.getters)})}function D0(t){Ut(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function pu(t,e){return e.reduce(function(n,s){return n[s]},t)}function Ho(t,e,n){return A0(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var L0="vuex bindings",_f="vuex:mutations",yc="vuex:actions",Ps="vuex",x0=0;function M0(t,e){S0({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[L0]},function(n){n.addTimelineLayer({id:_f,label:"Vuex Mutations",color:wf}),n.addTimelineLayer({id:yc,label:"Vuex Actions",color:wf}),n.addInspector({id:Ps,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Ps)if(s.filter){var r=[];Hg(r,e._modules.root,s.filter,""),s.rootNodes=r}else s.rootNodes=[jg(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Ps){var r=s.nodeId;Vg(e,r),s.state=V0(B0(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Ps){var r=s.nodeId,i=s.path;r!=="root"&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit(function(){s.set(e._state.data,i,s.state.value)})}}),e.subscribe(function(s,r){var i={};s.payload&&(i.payload=s.payload),i.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(Ps),n.sendInspectorState(Ps),n.addTimelineEvent({layerId:_f,event:{time:Date.now(),title:s.type,data:i}})}),e.subscribeAction({before:function(s,r){var i={};s.payload&&(i.payload=s.payload),s._id=x0++,s._time=Date.now(),i.state=r,n.addTimelineEvent({layerId:yc,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:i}})},after:function(s,r){var i={},o=Date.now()-s._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(i.payload=s.payload),i.state=r,n.addTimelineEvent({layerId:yc,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:i}})}})})}var wf=8702998,U0=6710886,F0=16777215,$g={label:"namespaced",textColor:F0,backgroundColor:U0};function Bg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function jg(t,e){return{id:e||"root",label:Bg(e),tags:t.namespaced?[$g]:[],children:Object.keys(t._children).map(function(n){return jg(t._children[n],e+n+"/")})}}function Hg(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[$g]:[]}),Object.keys(e._children).forEach(function(r){Hg(t,e._children[r],n,s+r+"/")})}function V0(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var i=$0(e);r.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Bg(o):o,editable:!1,value:sl(function(){return i[o]})}})}return r}function $0(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var r=e,i=s.pop();s.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[i]=sl(function(){return t[n]})}else e[n]=sl(function(){return t[n]})}),e}function B0(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,r,i){var o=s[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function sl(t){try{return t()}catch(e){return e}}var Vt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},qg={namespaced:{configurable:!0}};qg.namespaced.get=function(){return!!this._rawModule.namespaced};Vt.prototype.addChild=function(e,n){this._children[e]=n};Vt.prototype.removeChild=function(e){delete this._children[e]};Vt.prototype.getChild=function(e){return this._children[e]};Vt.prototype.hasChild=function(e){return e in this._children};Vt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Vt.prototype.forEachChild=function(e){ur(this._children,e)};Vt.prototype.forEachGetter=function(e){this._rawModule.getters&&ur(this._rawModule.getters,e)};Vt.prototype.forEachAction=function(e){this._rawModule.actions&&ur(this._rawModule.actions,e)};Vt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ur(this._rawModule.mutations,e)};Object.defineProperties(Vt.prototype,qg);var bs=function(e){this.register([],e,!1)};bs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};bs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,r){return n=n.getChild(r),s+(n.namespaced?r+"/":"")},"")};bs.prototype.update=function(e){Kg([],this.root,e)};bs.prototype.register=function(e,n,s){var r=this;s===void 0&&(s=!0);var i=new Vt(n,s);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ur(n.modules,function(a,c){r.register(e.concat(c),a,s)})};bs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],r=n.getChild(s);r&&r.runtime&&n.removeChild(s)};bs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Kg(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Kg(t.concat(s),e.getChild(s),n.modules[s])}}function j0(t){return new gt(t)}var gt=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var r=e.strict;r===void 0&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new bs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,d){return c.call(o,f,d)},this.commit=function(f,d,y){return l.call(o,f,d,y)},this.strict=r;var u=this._modules.root.state;xa(this,u,[],this._modules.root),du(this,u),s.forEach(function(h){return h(n)})},gu={state:{configurable:!0}};gt.prototype.install=function(e,n){e.provide(n||xg,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&M0(e,this)};gu.state.get=function(){return this._state.data};gu.state.set=function(t){};gt.prototype.commit=function(e,n,s){var r=this,i=Ho(e,n,s),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};gt.prototype.dispatch=function(e,n){var s=this,r=Ho(e,n),i=r.type,o=r.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{s._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,s.state,f)})}catch{}h(f)})})}};gt.prototype.subscribe=function(e,n){return Ug(e,this._subscribers,n)};gt.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return Ug(s,this._actionSubscribers,n)};gt.prototype.watch=function(e,n,s){var r=this;return Ut(function(){return e(r.state,r.getters)},n,Object.assign({},s))};gt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};gt.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),xa(this,this.state,e,this._modules.get(e),s.preserveState),du(this,this.state)};gt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=pu(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Fg(this)};gt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};gt.prototype.hotUpdate=function(e){this._modules.update(e),Fg(this,!0)};gt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(gt.prototype,gu);const H0="/cosmo-nav-live/assets/images/logo.svg";/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xs=typeof window<"u";function q0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function vc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ft(r)?r.map(t):t(r)}return n}const Hr=()=>{},Ft=Array.isArray,K0=/\/$/,W0=t=>t.replace(K0,"");function _c(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Y0(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function G0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ef(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function z0(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ys(e.matched[s],n.matched[r])&&Wg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Q0(t[n],e[n]))return!1;return!0}function Q0(t,e){return Ft(t)?Tf(t,e):Ft(e)?Tf(e,t):t===e}function Tf(t,e){return Ft(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Y0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var oi;(function(t){t.pop="pop",t.push="push"})(oi||(oi={}));var qr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qr||(qr={}));function X0(t){if(!t)if(xs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),W0(t)}const J0=/^[^#]+#/;function Z0(t,e){return t.replace(J0,"#")+e}function eT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ma=()=>({left:window.pageXOffset,top:window.pageYOffset});function tT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=eT(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function If(t,e){return(history.state?history.state.position-e:-1)+t}const rl=new Map;function nT(t,e){rl.set(t,e)}function sT(t){const e=rl.get(t);return rl.delete(t),e}let rT=()=>location.protocol+"//"+location.host;function Gg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ef(c,"")}return Ef(n,t)+s+r}function iT(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const d=Gg(t,location),y=n.value,T=e.value;let k=0;if(f){if(n.value=d,e.value=f,o&&o===y){o=null;return}k=T?f.position-T.position:0}else s(d);r.forEach(v=>{v(n.value,y,{delta:k,type:oi.pop,direction:k?k>0?qr.forward:qr.back:qr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const d=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ve({},f.state,{scroll:Ma()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function bf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ma():null}}function oT(t){const{history:e,location:n}=window,s={value:Gg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:rT()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=ve({},e.state,bf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ve({},r.value,e.state,{forward:c,scroll:Ma()});i(u.current,u,!0);const h=ve({},bf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function aT(t){t=X0(t);const e=oT(t),n=iT(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ve({location:"",base:t,go:s,createHref:Z0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function cT(t){return typeof t=="string"||t&&typeof t=="object"}function zg(t){return typeof t=="string"||typeof t=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qg=Symbol("");var Sf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sf||(Sf={}));function Xs(t,e){return ve(new Error,{type:t,[Qg]:!0},e)}function Jt(t,e){return t instanceof Error&&Qg in t&&(e==null||!!(t.type&e))}const Af="[^/]+?",lT={sensitive:!1,strict:!1,start:!0,end:!0},uT=/[.+*?^${}()[\]/\\]/g;function hT(t,e){const n=ve({},lT,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(uT,"\\$&"),d+=40;else if(f.type===1){const{value:y,repeatable:T,optional:k,regexp:v}=f;i.push({name:y,repeatable:T,optional:k});const m=v||Af;if(m!==Af){d+=10;try{new RegExp(`(${m})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${y}" (${m}): `+w.message)}}let A=T?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;h||(A=k&&l.length<2?`(?:/${A})`:"/"+A),k&&(A+="?"),r+=A,d+=20,k&&(d+=-8),T&&(d+=-20),m===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",y=i[f-1];h[y.name]=d&&y.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:y,repeatable:T,optional:k}=d,v=y in l?l[y]:"";if(Ft(v)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const m=Ft(v)?v.join("/"):v;if(!m)if(k)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=m}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function fT(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function dT(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=fT(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Cf(s))return 1;if(Cf(r))return-1}return r.length-s.length}function Cf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const pT={type:0,value:""},gT=/[a-zA-Z0-9_]/;function mT(t){if(!t)return[[]];if(t==="/")return[[pT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:gT.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function yT(t,e,n){const s=hT(mT(t.path),n),r=ve(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function vT(t,e){const n=[],s=new Map;e=kf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const d=!f,y=_T(u);y.aliasOf=f&&f.record;const T=kf(e,u),k=[y];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of A)k.push(ve({},y,{components:f?f.record.components:y.components,path:w,aliasOf:f?f.record:y}))}let v,m;for(const A of k){const{path:w}=A;if(h&&w[0]!=="/"){const E=h.record.path,b=E[E.length-1]==="/"?"":"/";A.path=h.record.path+(w&&b+w)}if(v=yT(A,h,T),f?f.alias.push(v):(m=m||v,m!==v&&m.alias.push(v),d&&u.name&&!Nf(v)&&o(u.name)),y.children){const E=y.children;for(let b=0;b<E.length;b++)i(E[b],v,f&&f.children[b])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return m?()=>{o(m)}:Hr}function o(u){if(zg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&dT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Yg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Nf(u)&&s.set(u.record.name,u)}function l(u,h){let f,d={},y,T;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Xs(1,{location:u});T=f.record.name,d=ve(Rf(h.params,f.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&Rf(u.params,f.keys.map(m=>m.name))),y=f.stringify(d)}else if("path"in u)y=u.path,f=n.find(m=>m.re.test(y)),f&&(d=f.parse(y),T=f.record.name);else{if(f=h.name?s.get(h.name):n.find(m=>m.re.test(h.path)),!f)throw Xs(1,{location:u,currentLocation:h});T=f.record.name,d=ve({},h.params,u.params),y=f.stringify(d)}const k=[];let v=f;for(;v;)k.unshift(v.record),v=v.parent;return{name:T,path:y,params:d,matched:k,meta:ET(k)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Rf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function _T(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Nf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ET(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function kf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Yg(t,e){return e.children.some(n=>n===t||Yg(t,n))}const Xg=/#/g,TT=/&/g,IT=/\//g,bT=/=/g,ST=/\?/g,Jg=/\+/g,AT=/%5B/g,CT=/%5D/g,Zg=/%5E/g,RT=/%60/g,em=/%7B/g,NT=/%7C/g,tm=/%7D/g,kT=/%20/g;function mu(t){return encodeURI(""+t).replace(NT,"|").replace(AT,"[").replace(CT,"]")}function OT(t){return mu(t).replace(em,"{").replace(tm,"}").replace(Zg,"^")}function il(t){return mu(t).replace(Jg,"%2B").replace(kT,"+").replace(Xg,"%23").replace(TT,"%26").replace(RT,"`").replace(em,"{").replace(tm,"}").replace(Zg,"^")}function PT(t){return il(t).replace(bT,"%3D")}function DT(t){return mu(t).replace(Xg,"%23").replace(ST,"%3F")}function LT(t){return t==null?"":DT(t).replace(IT,"%2F")}function qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function xT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Jg," "),o=i.indexOf("="),a=qo(o<0?i:i.slice(0,o)),c=o<0?null:qo(i.slice(o+1));if(a in e){let l=e[a];Ft(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Of(t){let e="";for(let n in t){const s=t[n];if(n=PT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ft(s)?s.map(i=>i&&il(i)):[s&&il(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function MT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ft(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const UT=Symbol(""),Pf=Symbol(""),yu=Symbol(""),vu=Symbol(""),ol=Symbol("");function Sr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function In(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Xs(4,{from:n,to:e})):h instanceof Error?a(h):cT(h)?a(Xs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function wc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(FT(a)){const l=(a.__vccOpts||a)[e];l&&r.push(In(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=q0(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&In(f,n,s,i,o)()}))}}return r}function FT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Df(t){const e=Nt(yu),n=Nt(vu),s=_t(()=>e.resolve(ke(t.to))),r=_t(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ys.bind(null,u));if(f>-1)return f;const d=Lf(c[l-2]);return l>1&&Lf(u)===d&&h[h.length-1].path!==d?h.findIndex(Ys.bind(null,c[l-2])):f}),i=_t(()=>r.value>-1&&BT(n.params,s.value.params)),o=_t(()=>r.value>-1&&r.value===n.matched.length-1&&Wg(n.params,s.value.params));function a(c={}){return $T(c)?e[ke(t.replace)?"replace":"push"](ke(t.to)).catch(Hr):Promise.resolve()}return{route:s,href:_t(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const VT=Is({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Df,setup(t,{slots:e}){const n=Es(Df(t)),{options:s}=Nt(yu),r=_t(()=>({[xf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[xf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Da("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),jt=VT;function $T(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function BT(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ft(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Lf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xf=(t,e,n)=>t??e??n,jT=Is({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Nt(ol),r=_t(()=>t.route||s.value),i=Nt(Pf,0),o=_t(()=>{let l=ke(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=_t(()=>r.value.matched[o.value]);Fr(Pf,_t(()=>o.value+1)),Fr(UT,a),Fr(ol,r);const c=ss();return Ut(()=>[c.value,a.value,t.name],([l,u,h],[f,d,y])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Ys(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Mf(n.default,{Component:f,route:l});const d=h.props[u],y=d?d===!0?l.params:typeof d=="function"?d(l):d:null,k=Da(f,ve({},y,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Mf(n.default,{Component:k,route:l})||k}}});function Mf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const HT=jT;function qT(t){const e=vT(t.routes,t),n=t.parseQuery||xT,s=t.stringifyQuery||Of,r=t.history,i=Sr(),o=Sr(),a=Sr(),c=mp(vn);let l=vn;xs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vc.bind(null,S=>""+S),h=vc.bind(null,LT),f=vc.bind(null,qo);function d(S,j){let M,z;return zg(S)?(M=e.getRecordMatcher(S),z=j):z=S,e.addRoute(z,M)}function y(S){const j=e.getRecordMatcher(S);j&&e.removeRoute(j)}function T(){return e.getRoutes().map(S=>S.record)}function k(S){return!!e.getRecordMatcher(S)}function v(S,j){if(j=ve({},j||c.value),typeof S=="string"){const _=_c(n,S,j.path),I=e.resolve({path:_.path},j),R=r.createHref(_.fullPath);return ve(_,I,{params:f(I.params),hash:qo(_.hash),redirectedFrom:void 0,href:R})}let M;if("path"in S)M=ve({},S,{path:_c(n,S.path,j.path).path});else{const _=ve({},S.params);for(const I in _)_[I]==null&&delete _[I];M=ve({},S,{params:h(_)}),j.params=h(j.params)}const z=e.resolve(M,j),me=S.hash||"";z.params=u(f(z.params));const p=G0(s,ve({},S,{hash:OT(me),path:z.path})),g=r.createHref(p);return ve({fullPath:p,hash:me,query:s===Of?MT(S.query):S.query||{}},z,{redirectedFrom:void 0,href:g})}function m(S){return typeof S=="string"?_c(n,S,c.value.path):ve({},S)}function A(S,j){if(l!==S)return Xs(8,{from:j,to:S})}function w(S){return N(S)}function E(S){return w(ve(m(S),{replace:!0}))}function b(S){const j=S.matched[S.matched.length-1];if(j&&j.redirect){const{redirect:M}=j;let z=typeof M=="function"?M(S):M;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=m(z):{path:z},z.params={}),ve({query:S.query,hash:S.hash,params:"path"in z?{}:S.params},z)}}function N(S,j){const M=l=v(S),z=c.value,me=S.state,p=S.force,g=S.replace===!0,_=b(M);if(_)return N(ve(m(_),{state:typeof _=="object"?ve({},me,_.state):me,force:p,replace:g}),j||M);const I=M;I.redirectedFrom=j;let R;return!p&&z0(s,z,M)&&(R=Xs(16,{to:I,from:z}),$t(z,z,!0,!1)),(R?Promise.resolve(R):V(I,z)).catch(P=>Jt(P)?Jt(P,2)?P:pn(P):ge(P,I,z)).then(P=>{if(P){if(Jt(P,2))return N(ve({replace:g},m(P.to),{state:typeof P.to=="object"?ve({},me,P.to.state):me,force:p}),j||I)}else P=$(I,z,!0,g,me);return Q(I,z,P),P})}function C(S,j){const M=A(S,j);return M?Promise.reject(M):Promise.resolve()}function U(S){const j=Rs.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(S):S()}function V(S,j){let M;const[z,me,p]=KT(S,j);M=wc(z.reverse(),"beforeRouteLeave",S,j);for(const _ of z)_.leaveGuards.forEach(I=>{M.push(In(I,S,j))});const g=C.bind(null,S,j);return M.push(g),Qe(M).then(()=>{M=[];for(const _ of i.list())M.push(In(_,S,j));return M.push(g),Qe(M)}).then(()=>{M=wc(me,"beforeRouteUpdate",S,j);for(const _ of me)_.updateGuards.forEach(I=>{M.push(In(I,S,j))});return M.push(g),Qe(M)}).then(()=>{M=[];for(const _ of S.matched)if(_.beforeEnter&&!j.matched.includes(_))if(Ft(_.beforeEnter))for(const I of _.beforeEnter)M.push(In(I,S,j));else M.push(In(_.beforeEnter,S,j));return M.push(g),Qe(M)}).then(()=>(S.matched.forEach(_=>_.enterCallbacks={}),M=wc(p,"beforeRouteEnter",S,j),M.push(g),Qe(M))).then(()=>{M=[];for(const _ of o.list())M.push(In(_,S,j));return M.push(g),Qe(M)}).catch(_=>Jt(_,8)?_:Promise.reject(_))}function Q(S,j,M){for(const z of a.list())U(()=>z(S,j,M))}function $(S,j,M,z,me){const p=A(S,j);if(p)return p;const g=j===vn,_=xs?history.state:{};M&&(z||g?r.replace(S.fullPath,ve({scroll:g&&_&&_.scroll},me)):r.push(S.fullPath,me)),c.value=S,$t(S,j,M,g),pn()}let Z;function K(){Z||(Z=r.listen((S,j,M)=>{if(!io.listening)return;const z=v(S),me=b(z);if(me){N(ve(me,{replace:!0}),z).catch(Hr);return}l=z;const p=c.value;xs&&nT(If(p.fullPath,M.delta),Ma()),V(z,p).catch(g=>Jt(g,12)?g:Jt(g,2)?(N(g.to,z).then(_=>{Jt(_,20)&&!M.delta&&M.type===oi.pop&&r.go(-1,!1)}).catch(Hr),Promise.reject()):(M.delta&&r.go(-M.delta,!1),ge(g,z,p))).then(g=>{g=g||$(z,p,!1),g&&(M.delta&&!Jt(g,8)?r.go(-M.delta,!1):M.type===oi.pop&&Jt(g,20)&&r.go(-1,!1)),Q(z,p,g)}).catch(Hr)}))}let Oe=Sr(),le=Sr(),de;function ge(S,j,M){pn(S);const z=le.list();return z.length?z.forEach(me=>me(S,j,M)):console.error(S),Promise.reject(S)}function Xt(){return de&&c.value!==vn?Promise.resolve():new Promise((S,j)=>{Oe.add([S,j])})}function pn(S){return de||(de=!S,K(),Oe.list().forEach(([j,M])=>S?M(S):j()),Oe.reset()),S}function $t(S,j,M,z){const{scrollBehavior:me}=t;if(!xs||!me)return Promise.resolve();const p=!M&&sT(If(S.fullPath,0))||(z||!M)&&history.state&&history.state.scroll||null;return Ta().then(()=>me(S,j,p)).then(g=>g&&tT(g)).catch(g=>ge(g,S,j))}const ct=S=>r.go(S);let Cs;const Rs=new Set,io={currentRoute:c,listening:!0,addRoute:d,removeRoute:y,hasRoute:k,getRoutes:T,resolve:v,options:t,push:w,replace:E,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:Xt,install(S){const j=this;S.component("RouterLink",jt),S.component("RouterView",HT),S.config.globalProperties.$router=j,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(c)}),xs&&!Cs&&c.value===vn&&(Cs=!0,w(r.location).catch(me=>{}));const M={};for(const me in vn)M[me]=_t(()=>c.value[me]);S.provide(yu,j),S.provide(vu,Es(M)),S.provide(ol,c);const z=S.unmount;Rs.add(S),S.unmount=function(){Rs.delete(S),Rs.size<1&&(l=vn,Z&&Z(),Z=null,c.value=vn,Cs=!1,de=!1),z()}}};function Qe(S){return S.reduce((j,M)=>j.then(()=>U(M)),Promise.resolve())}return io}function KT(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ys(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ys(l,c))||r.push(c))}return[n,s,r]}function WT(){return Nt(vu)}const jn=t=>(bp("data-v-ba8af80d"),t=t(),Sp(),t),GT=jn(()=>it("img",{alt:"Vue logo",src:H0,width:"125",height:"125"},null,-1)),zT=jn(()=>it("span",null,null,-1)),QT=jn(()=>it("span",null,null,-1)),YT=jn(()=>it("span",null,null,-1)),XT=[zT,QT,YT],JT={key:0,class:"auth-wrapper"},ZT={key:1,class:"profile-wrapper"},eI=jn(()=>it("span",{class:"label"},"Profile",-1)),tI={class:"drop-down"},nI=jn(()=>it("i",{class:"cs-user"},null,-1)),sI=jn(()=>it("i",{class:"cs-heart"},null,-1)),rI=jn(()=>it("i",{class:"cs-sign-out"},null,-1)),iI=Is({__name:"Nav",setup(t){const e=Mg(),n=WT(),s=()=>{e.dispatch("logout")},r=()=>{const i=document.querySelector(".menu-toggler"),o=document.querySelector("nav");i.classList.contains("active")?(i.classList.remove("active"),o.classList.remove("active")):(i.classList.add("active"),o.classList.add("active"))};return Ut(n,(i,o,a)=>{document.querySelector(".menu-toggler.active")&&r()}),(i,o)=>(Wt(),Br("header",null,[he(ke(jt),{to:"/",class:"logo"},{default:At(()=>[GT]),_:1}),it("a",{class:"menu-toggler",ref:"menuToggler",href:"javascript:void(0);",onClick:o[0]||(o[0]=a=>r())},XT,512),it("nav",null,[he(ke(jt),{to:"/"},{default:At(()=>[Ct("Home")]),_:1}),he(ke(jt),{to:{name:"dailyPic"}},{default:At(()=>[Ct("Picture of the Day")]),_:1}),he(ke(jt),{to:{name:"currentLocation"}},{default:At(()=>[Ct("Current Location")]),_:1}),he(ke(jt),{to:{name:"earthImage"}},{default:At(()=>[Ct("Most Recent Earth Image")]),_:1}),ke(e).state.user?Or("",!0):(Wt(),Br("div",JT,[ke(e).state.user?Or("",!0):(Wt(),ii(ke(jt),{key:0,to:{name:"login"}},{default:At(()=>[Ct(" Login ")]),_:1})),ke(e).state.user?Or("",!0):(Wt(),ii(ke(jt),{key:1,to:{name:"register"}},{default:At(()=>[Ct(" Register ")]),_:1}))])),ke(e).state.user?(Wt(),Br("div",ZT,[eI,it("div",tI,[he(ke(jt),{to:{name:"profile"}},{default:At(()=>[nI,Ct(" View Profile ")]),_:1}),he(ke(jt),{to:{name:"favoriteImages"}},{default:At(()=>[sI,Ct(" Favorite Images ")]),_:1}),it("a",{href:"javascript:void(0);",onClick:s},[rI,Ct(" Logout ")])])])):Or("",!0)])]))}});const oI=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},aI=oI(iI,[["__scopeId","data-v-ba8af80d"]]),cI=Is({__name:"App",setup(t){const e=Mg();return nu(()=>{e.dispatch("fetchUser")}),(n,s)=>{const r=$p("RouterView");return Wt(),Br(Ve,null,[he(aI),he(r)],64)}}}),lI="modulepreload",uI=function(t){return"/cosmo-nav-live/"+t},Uf={},Hn=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=uI(i),i in Uf)return;Uf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":lI,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
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
 */const hI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},fI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},pI=function(t){try{return dI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class gI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function sm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mI(){return Be().indexOf("Electron/")>=0}function im(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yI(){return Be().indexOf("MSAppHost/")>=0}/**
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
 */const vI="FirebaseError";class hr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=vI,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?_I(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new hr(r,a,s)}}function _I(t,e){return t.replace(wI,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const wI=/\{\$([^}]+)}/g;function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ko(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ff(i)&&Ff(o)){if(!Ko(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ff(t){return t!==null&&typeof t=="object"}/**
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
 */function Di(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Pr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Dr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TI(t,e){const n=new II(t,e);return n.subscribe.bind(n)}class II{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");bI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ec),r.error===void 0&&(r.error=Ec),r.complete===void 0&&(r.complete=Ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
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
 */function kt(t){return t&&t._delegate?t._delegate:t}class Js{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class SI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new gI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CI(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:AI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AI(t){return t===zn?void 0:t}function CI(t){return t.instantiationMode==="EAGER"}/**
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
 */class RI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const NI={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},kI=pe.INFO,OI={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},PI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=OI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=kI,this._logHandler=PI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}/**
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
 */class DI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function LI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",Vf="0.7.7";/**
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
 */const wu=new _u("@firebase/app"),xI="@firebase/app-compat",MI="@firebase/analytics-compat",UI="@firebase/analytics",FI="@firebase/app-check-compat",VI="@firebase/app-check",$I="@firebase/auth",BI="@firebase/auth-compat",jI="@firebase/database",HI="@firebase/database-compat",qI="@firebase/functions",KI="@firebase/functions-compat",WI="@firebase/installations",GI="@firebase/installations-compat",zI="@firebase/messaging",QI="@firebase/messaging-compat",YI="@firebase/performance",XI="@firebase/performance-compat",JI="@firebase/remote-config",ZI="@firebase/remote-config-compat",eb="@firebase/storage",tb="@firebase/storage-compat",nb="@firebase/firestore",sb="@firebase/firestore-compat",rb="firebase",ib="9.4.0";/**
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
 */const om="[DEFAULT]",ob={[al]:"fire-core",[xI]:"fire-core-compat",[UI]:"fire-analytics",[MI]:"fire-analytics-compat",[VI]:"fire-app-check",[FI]:"fire-app-check-compat",[$I]:"fire-auth",[BI]:"fire-auth-compat",[jI]:"fire-rtdb",[HI]:"fire-rtdb-compat",[qI]:"fire-fn",[KI]:"fire-fn-compat",[WI]:"fire-iid",[GI]:"fire-iid-compat",[zI]:"fire-fcm",[QI]:"fire-fcm-compat",[YI]:"fire-perf",[XI]:"fire-perf-compat",[JI]:"fire-rc",[ZI]:"fire-rc-compat",[eb]:"fire-gcs",[tb]:"fire-gcs-compat",[nb]:"fire-fst",[sb]:"fire-fst-compat","fire-js":"fire-js",[rb]:"fire-js-all"};/**
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
 */const Wo=new Map,cl=new Map;function ab(t,e){try{t.container.addComponent(e)}catch(n){wu.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ai(t){const e=t.name;if(cl.has(e))return wu.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,t);for(const n of Wo.values())ab(n,t);return!0}function Eu(t,e){return t.container.getProvider(e)}/**
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
 */const cb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Go=new Pi("app","Firebase",cb);/**
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
 */class lb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Js("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Go.create("app-deleted",{appName:this._name})}}/**
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
 */const Li=ib;function ub(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:om,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Go.create("bad-app-name",{appName:String(s)});const r=Wo.get(s);if(r){if(Ko(t,r.options)&&Ko(n,r.config))return r;throw Go.create("duplicate-app",{appName:s})}const i=new RI(s);for(const a of cl.values())i.addComponent(a);const o=new lb(t,n,i);return Wo.set(s,o),o}function am(t=om){const e=Wo.get(t);if(!e)throw Go.create("no-app",{appName:t});return e}function kn(t,e,n){var s;let r=(s=ob[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wu.warn(a.join(" "));return}ai(new Js(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */function hb(t){ai(new Js("platform-logger",e=>new DI(e),"PRIVATE")),kn(al,Vf,t),kn(al,Vf,"esm2017"),kn("fire-js","")}hb("");var fb="firebase",db="9.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(fb,db,"app");function Tu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function cm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pb=cm,lm=new Pi("auth","Firebase",cm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new _u("@firebase/auth");function Ao(t,...e){$f.logLevel<=pe.ERROR&&$f.error(`Auth (${Li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw Iu(t,...e)}function Gt(t,...e){return Iu(t,...e)}function um(t,e,n){const s=Object.assign(Object.assign({},pb()),{[e]:n});return new Pi("auth","Firebase",s).create(e,{appName:t.name})}function gb(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ot(t,"argument-error"),um(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Iu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return lm.create(t,...e)}function ne(t,e,...n){if(!t)throw Iu(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ao(e),new Error(e)}function un(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new Map;function rn(t){un(t instanceof Function,"Expected a class definition");let e=Bf.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t,e){const n=Eu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ko(i,e??{}))return r;Ot(r,"already-initialized")}return n.initialize({options:e})}function yb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vb(){return jf()==="http:"||jf()==="https:"}function jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vb()||sm()||"connection"in navigator)?navigator.onLine:!0}function wb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=nm()||rm()}get(){return _b()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=new xi(3e4,6e4);function Mi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ui(t,e,n,s,r={}){return hm(t,r,()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Di(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(ul.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),ul.fetch()(fm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function hm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Eb),e);try{const r=new Ib(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Tc(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw um(t,u,l);Ot(t,u)}}catch(r){if(r instanceof hr)throw r;Ot(t,"network-request-failed")}}async function Fi(t,e,n,s,r={}){const i=await Ui(t,e,n,s,r);return"mfaPendingCredential"in i&&Ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fm(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?bu(t.config,r):`${t.config.apiScheme}://${r}`}class Ib{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gt(this.auth,"timeout")),Tb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tc(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Gt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e){return Ui(t,"POST","/v1/accounts:delete",e)}async function Sb(t,e){return Ui(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ab(t,e=!1){const n=kt(t),s=await n.getIdToken(e),r=Su(s);ne(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Kr(Ic(r.auth_time)),issuedAtTime:Kr(Ic(r.iat)),expirationTime:Kr(Ic(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ic(t){return Number(t)*1e3}function Su(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ao("JWT malformed, contained fewer than 3 sections"),null;try{const r=pI(n);return r?JSON.parse(r):(Ao("Failed to decode base64 JWT payload"),null)}catch(r){return Ao("Caught error parsing JWT payload as JSON",r),null}}function Cb(t){const e=Su(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof hr&&Rb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Rb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kr(this.lastLoginAt),this.creationTime=Kr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ci(t,Sb(n,{idToken:s}));ne(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Pb(i.providerUserInfo):[],a=Ob(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function kb(t){const e=kt(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ob(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Pb(t){return t.map(e=>{var{providerId:n}=e,s=Tu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(t,e){const n=await hm(t,{},()=>{const s=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=fm(t,r,"/v1/token",`key=${i}`);return ul.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Db(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new li;return s&&(ne(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ne(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class os{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new dm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ci(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ab(this,e)}reload(){return kb(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new os(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ci(this,bb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:w,isAnonymous:E,providerData:b,stsTokenManager:N}=n;ne(A&&N,e,"internal-error");const C=li.fromJSON(this.name,N);ne(typeof A=="string",e,"internal-error"),_n(h,e.name),_n(f,e.name),ne(typeof w=="boolean",e,"internal-error"),ne(typeof E=="boolean",e,"internal-error"),_n(d,e.name),_n(y,e.name),_n(T,e.name),_n(k,e.name),_n(v,e.name),_n(m,e.name);const U=new os({uid:A,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:d,tenantId:T,stsTokenManager:C,createdAt:v,lastLoginAt:m});return b&&Array.isArray(b)&&(U.providerData=b.map(V=>Object.assign({},V))),k&&(U._redirectEventId=k),U}static async _fromIdTokenResponse(e,n,s=!1){const r=new li;r.updateFromServerResponse(n);const i=new os({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await zo(i),i}}/**
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
 */class pm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pm.type="NONE";const Hf=pm;/**
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
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Co(this.userKey,r.apiKey,i),this.fullPersistenceKey=Co("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?os._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Hs(rn(Hf),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||rn(Hf);const o=Co(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=os._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Hs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ym(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_m(e))return"Blackberry";if(wm(e))return"Webos";if(Au(e))return"Safari";if((e.includes("chrome/")||mm(e))&&!e.includes("edge/"))return"Chrome";if(vm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function gm(t=Be()){return/firefox\//i.test(t)}function Au(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mm(t=Be()){return/crios\//i.test(t)}function ym(t=Be()){return/iemobile/i.test(t)}function vm(t=Be()){return/android/i.test(t)}function _m(t=Be()){return/blackberry/i.test(t)}function wm(t=Be()){return/webos/i.test(t)}function Ua(t=Be()){return/iphone|ipad|ipod/i.test(t)}function Lb(t=Be()){var e;return Ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xb(){return im()&&document.documentMode===10}function Em(t=Be()){return Ua(t)||vm(t)||wm(t)||_m(t)||/windows phone/i.test(t)||ym(t)}function Mb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e=[]){let n;switch(t){case"Browser":n=qf(Be());break;case"Worker":n=`${qf(Be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Li}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kf(this),this.idTokenSubscription=new Kf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var s,r;this._deleted||(this.persistenceManager=await Hs.create(this,e),!this._deleted&&(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===i)&&(o!=null&&o.user)&&(s=o.user)}return s?s._redirectEventId?(ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?kt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Vi(t){return kt(t)}class Kf{constructor(e){this.auth=e,this.observer=null,this.addObserver=TI(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function Fb(t,e){return Ui(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(t,e){return Fi(t,"POST","/v1/accounts:signInWithPassword",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(t,e){return Fi(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}async function Bb(t,e){return Fi(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Cu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ui(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ui(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Vb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $b(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Fb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Bb(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return Fi(t,"POST","/v1/accounts:signInWithIdp",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb="http://localhost";class fs extends Cu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Tu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new fs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,qs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:jb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qb(t){const e=Pr(Dr(t)).link,n=e?Pr(Dr(e)).deep_link_id:null,s=Pr(Dr(t)).deep_link_id;return(s?Pr(Dr(s)).link:null)||s||n||e||t}class Ru{constructor(e){var n,s,r,i,o,a;const c=Pr(Dr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Hb((r=c.mode)!==null&&r!==void 0?r:null);ne(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qb(e);try{return new Ru(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.providerId=fr.PROVIDER_ID}static credential(e,n){return ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ru.parseLink(n);return ne(s,"argument-error"),ui._fromEmailAndCode(e,s.code,s.tenantId)}}fr.PROVIDER_ID="password";fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $i extends Nu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends $i{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return nn.credential(n,s)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends $i{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends $i{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e){return Fi(t,"POST","/v1/accounts:signUp",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await os._fromIdTokenResponse(e,s,r),o=Wf(s);return new ds({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Wf(s);return new ds({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Wf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends hr{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Qo(e,n,s,r)}}function Im(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,i,e,s):i})}async function Wb(t,e,n=!1){const s=await ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",s)}/**
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
 */async function Gb(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ci(t,Im(s,r,e,t),n);ne(i.idToken,s,"internal-error");const o=Su(i.idToken);ne(o,s,"internal-error");const{sub:a}=o;return ne(t.uid===a,s,"user-mismatch"),ds._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(t,e,n=!1){const s="signIn",r=await Im(t,s,e),i=await ds._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function zb(t,e){return bm(Vi(t),e)}async function Qb(t,e,n){const s=Vi(t),r=await Kb(s,{returnSecureToken:!0,email:e,password:n}),i=await ds._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Yb(t,e,n){return zb(kt(t),fr.credential(e,n))}function Xb(t){return kt(t).signOut()}const Yo="__sak";/**
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
 */class Sm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(){const t=Be();return Au(t)||Ua(t)}const Zb=1e3,eS=10;class Am extends Sm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jb()&&Mb(),this.fallbackToPolling=Em(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);xb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,eS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Am.type="LOCAL";const tS=Am;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends Sm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cm.type="SESSION";const Rm=Cm;/**
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
 */function nS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Fa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await nS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ku("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function rS(t){zt().location.href=t}/**
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
 */function Nm(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function iS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aS(){return Nm()?self:null}/**
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
 */const km="firebaseLocalStorageDb",cS=1,Xo="firebaseLocalStorage",Om="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function lS(){const t=indexedDB.deleteDatabase(km);return new Bi(t).toPromise()}function hl(){const t=indexedDB.open(km,cS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Xo,{keyPath:Om})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Xo)?e(s):(s.close(),await lS(),e(await hl()))})})}async function Gf(t,e,n){const s=Va(t,!0).put({[Om]:e,value:n});return new Bi(s).toPromise()}async function uS(t,e){const n=Va(t,!1).get(e),s=await new Bi(n).toPromise();return s===void 0?null:s.value}function zf(t,e){const n=Va(t,!0).delete(e);return new Bi(n).toPromise()}const hS=800,fS=3;class Pm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>fS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(aS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iS(),!this.activeServiceWorker)return;this.sender=new sS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hl();return await Gf(e,Yo,"1"),await zf(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>uS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Va(r,!1).getAll();return new Bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pm.type="LOCAL";const dS=Pm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Gt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",pS().appendChild(s)})}function mS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xi(3e4,6e4);/**
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
 */function Dm(t,e){return e?rn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ou extends Cu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yS(t){return bm(t.auth,new Ou(t),t.bypassAuthState)}function vS(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Gb(n,new Ou(t),t.bypassAuthState)}async function _S(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Wb(n,new Ou(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yS;case"linkViaPopup":case"linkViaRedirect":return _S;case"reauthViaPopup":case"reauthViaRedirect":return vS;default:Ot(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new xi(2e3,1e4);async function ES(t,e,n){const s=Vi(t);gb(t,e,Nu);const r=Dm(s,n);return new Jn(s,"signInViaPopup",e,r).executeNotNull()}class Jn extends Lm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,wS.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="pendingRedirect",bc=new Map;class IS extends Lm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=bc.get(this.auth._key());if(!e){try{const s=await bS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}bc.set(this.auth._key(),e)}return this.bypassAuthState||bc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bS(t,e){const n=AS(e),s=SS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function SS(t){return rn(t._redirectPersistence)}function AS(t){return Co(TS,t.config.apiKey,t.name)}async function CS(t,e,n=!1){const s=Vi(t),r=Dm(s,e),o=await new IS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=10*60*1e3;class NS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!xm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e={}){return Ui(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DS=/^https?/;async function LS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OS(t);for(const n of e)try{if(xS(n))return}catch{}Ot(t,"unauthorized-domain")}function xS(t){const e=ll(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!DS.test(n))return!1;if(PS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const MS=new xi(3e4,6e4);function Yf(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function US(t){return new Promise((e,n)=>{var s,r,i;function o(){Yf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yf(),n(Gt(t,"network-request-failed"))},timeout:MS.get()})}if(!((r=(s=zt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=zt().gapi)===null||i===void 0)&&i.load)o();else{const a=mS("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},gS(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Ro=null,e})}let Ro=null;function FS(t){return Ro=Ro||US(t),Ro}/**
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
 */const VS=new xi(5e3,15e3),$S="__/auth/iframe",BS="emulator/auth/iframe",jS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qS(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bu(e,BS):`https://${t.config.authDomain}/${$S}`,s={apiKey:e.apiKey,appName:t.name,v:Li},r=HS.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Di(s).slice(1)}`}async function KS(t){const e=await FS(t),n=zt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:qS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jS,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=zt().setTimeout(()=>{i(o)},VS.get());function c(){zt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const WS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GS=500,zS=600,QS="_blank",YS="http://localhost";class Xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XS(t,e,n,s=GS,r=zS){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},WS),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Be().toLowerCase();n&&(a=mm(l)?QS:n),gm(l)&&(e=e||YS,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,y])=>`${f}${d}=${y},`,"");if(Lb(l)&&a!=="_self")return JS(e||"",a),new Xf(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new Xf(h)}function JS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ZS="__/auth/handler",eA="emulator/auth/handler";function Jf(t,e,n,s,r,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Li,eventId:r};if(e instanceof Nu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof $i){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${tA(t)}?${Di(a).slice(1)}`}function tA({config:t}){return t.emulator?bu(t,eA):`https://${t.authDomain}/${ZS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class nA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rm,this._completeRedirectFn=CS}async _openPopup(e,n,s,r){var i;un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Jf(e,n,s,ll(),r);return XS(e,o,ku())}async _openRedirect(e,n,s,r){return await this._originValidation(e),rS(Jf(e,n,s,ll(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(un(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s}async initAndGetManager(e){const n=await KS(e),s=new NS(e);return n.register("authEvent",r=>(ne(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Sc];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Em()||Au()||Ua()}}const sA=nA;var Zf="@firebase/auth",ed="0.19.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oA(t){ai(new Js("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=s.options;return(o=>{ne(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),ne(!(i!=null&&i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tm(t)},c=new Ub(o,a);return yb(c,n),c})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ai(new Js("auth-internal",e=>{const n=Vi(e.getProvider("auth").getImmediate());return(s=>new rA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(Zf,ed,iA(t)),kn(Zf,ed,"esm2017")}/**
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
 */function Mm(t=am()){const e=Eu(t,"auth");return e.isInitialized()?e.getImmediate():mb(t,{popupRedirectResolver:sA,persistence:[dS,tS,Rm]})}oA("Browser");var aA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H,Pu=Pu||{},se=aA||self;function Jo(){}function fl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ji(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cA(t){return Object.prototype.hasOwnProperty.call(t,Ac)&&t[Ac]||(t[Ac]=++lA)}var Ac="closure_uid_"+(1e9*Math.random()>>>0),lA=0;function uA(t,e,n){return t.call.apply(t.bind,arguments)}function hA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ke=uA:Ke=hA,Ke.apply(null,arguments)}function vo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function qn(){this.s=this.s,this.o=this.o}var fA=0;qn.prototype.s=!1;qn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),fA!=0)&&cA(this)};qn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Um=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Fm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function dA(t){e:{var e=rC;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function td(t){return Array.prototype.concat.apply([],arguments)}function Du(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zo(t){return/^[\s\xa0]*$/.test(t)}var nd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function st(t,e){return t.indexOf(e)!=-1}function Cc(t,e){return t<e?-1:t>e?1:0}var rt;e:{var sd=se.navigator;if(sd){var rd=sd.userAgent;if(rd){rt=rd;break e}}rt=""}function Lu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Vm(t){const e={};for(const n in t)e[n]=t[n];return e}var id="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $m(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<id.length;i++)n=id[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function xu(t){return xu[" "](t),t}xu[" "]=Jo;function pA(t){var e=yA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var gA=st(rt,"Opera"),Zs=st(rt,"Trident")||st(rt,"MSIE"),Bm=st(rt,"Edge"),dl=Bm||Zs,jm=st(rt,"Gecko")&&!(st(rt.toLowerCase(),"webkit")&&!st(rt,"Edge"))&&!(st(rt,"Trident")||st(rt,"MSIE"))&&!st(rt,"Edge"),mA=st(rt.toLowerCase(),"webkit")&&!st(rt,"Edge");function Hm(){var t=se.document;return t?t.documentMode:void 0}var ea;e:{var Rc="",Nc=function(){var t=rt;if(jm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Bm)return/Edge\/([\d\.]+)/.exec(t);if(Zs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mA)return/WebKit\/(\S+)/.exec(t);if(gA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Rc=Nc?Nc[1]:""),Zs){var kc=Hm();if(kc!=null&&kc>parseFloat(Rc)){ea=String(kc);break e}}ea=Rc}var yA={};function vA(){return pA(function(){let t=0;const e=nd(String(ea)).split("."),n=nd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Cc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Cc(r[2].length==0,i[2].length==0)||Cc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var pl;if(se.document&&Zs){var od=Hm();pl=od||parseInt(ea,10)||void 0}else pl=void 0;var _A=pl,wA=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{se.addEventListener("test",Jo,e),se.removeEventListener("test",Jo,e)}catch{}return t}();function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};function hi(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(jm){e:{try{xu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:EA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hi.Z.h.call(this)}}ze(hi,Ze);var EA={2:"touch",3:"pen",4:"mouse"};hi.prototype.h=function(){hi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Hi="closure_listenable_"+(1e6*Math.random()|0),TA=0;function IA(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++TA,this.ca=this.fa=!1}function $a(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ba(t){this.src=t,this.g={},this.h=0}Ba.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ml(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new IA(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function gl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Um(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&($a(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ml(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Mu="closure_lm_"+(1e6*Math.random()|0),Oc={};function qm(t,e,n,s,r){if(s&&s.once)return Wm(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)qm(t,e[i],n,s,r);return null}return n=Vu(n),t&&t[Hi]?t.N(e,n,ji(s)?!!s.capture:!!s,r):Km(t,e,n,!1,s,r)}function Km(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ji(r)?!!r.capture:!!r,a=Fu(t);if(a||(t[Mu]=a=new Ba(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=bA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)wA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(zm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bA(){function t(n){return e.call(t.src,t.listener,n)}var e=SA;return t}function Wm(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wm(t,e[i],n,s,r);return null}return n=Vu(n),t&&t[Hi]?t.O(e,n,ji(s)?!!s.capture:!!s,r):Km(t,e,n,!0,s,r)}function Gm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Gm(t,e[i],n,s,r);else s=ji(s)?!!s.capture:!!s,n=Vu(n),t&&t[Hi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ml(i,n,s,r),-1<n&&($a(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ml(e,n,s,r)),(n=-1<t?e[t]:null)&&Uu(n))}function Uu(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Hi])gl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(zm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Fu(e))?(gl(n,t),n.h==0&&(n.src=null,e[Mu]=null)):$a(t)}}}function zm(t){return t in Oc?Oc[t]:Oc[t]="on"+t}function SA(t,e){if(t.ca)t=!0;else{e=new hi(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Uu(t),t=n.call(s,e)}return t}function Fu(t){return t=t[Mu],t instanceof Ba?t:null}var Pc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vu(t){return typeof t=="function"?t:(t[Pc]||(t[Pc]=function(e){return t.handleEvent(e)}),t[Pc])}function je(){qn.call(this),this.i=new Ba(this),this.P=this,this.I=null}ze(je,qn);je.prototype[Hi]=!0;je.prototype.removeEventListener=function(t,e,n,s){Gm(this,t,e,n,s)};function We(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var r=e;e=new Ze(s,t),$m(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=_o(o,s,!0,e)&&r}if(o=e.g=t,r=_o(o,s,!0,e)&&r,r=_o(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=_o(o,s,!1,e)&&r}je.prototype.M=function(){if(je.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)$a(n[s]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function _o(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var $u=se.JSON.stringify;function AA(){var t=Ym;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CA{constructor(){this.h=this.g=null}add(e,n){const s=Qm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Qm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new RA,t=>t.reset());class RA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NA(t){se.setTimeout(()=>{throw t},0)}function Bu(t,e){yl||kA(),vl||(yl(),vl=!0),Ym.add(t,e)}var yl;function kA(){var t=se.Promise.resolve(void 0);yl=function(){t.then(OA)}}var vl=!1,Ym=new CA;function OA(){for(var t;t=AA();){try{t.h.call(t.g)}catch(n){NA(n)}var e=Qm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vl=!1}function ja(t,e){je.call(this),this.h=t||1,this.g=e||se,this.j=Ke(this.kb,this),this.l=Date.now()}ze(ja,je);H=ja.prototype;H.da=!1;H.S=null;H.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),We(this,"tick"),this.da&&(ju(this),this.start()))}};H.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ju(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}H.M=function(){ja.Z.M.call(this),ju(this),delete this.g};function Hu(t,e,n){if(typeof t=="function")n&&(t=Ke(t,n));else if(t&&typeof t.handleEvent=="function")t=Ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function Xm(t){t.g=Hu(()=>{t.g=null,t.i&&(t.i=!1,Xm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PA extends qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xm(this)}M(){super.M(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fi(t){qn.call(this),this.h=t,this.g={}}ze(fi,qn);var ad=[];function Jm(t,e,n,s){Array.isArray(n)||(n&&(ad[0]=n.toString()),n=ad);for(var r=0;r<n.length;r++){var i=qm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zm(t){Lu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Uu(e)},t),t.g={}}fi.prototype.M=function(){fi.Z.M.call(this),Zm(this)};fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ha(){this.g=!0}Ha.prototype.Aa=function(){this.g=!1};function DA(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function LA(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ms(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MA(t,n)+(s?" "+s:"")})}function xA(t,e){t.info(function(){return"TIMEOUT: "+e})}Ha.prototype.info=function(){};function MA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return $u(n)}catch{return e}}var Ss={},cd=null;function qa(){return cd=cd||new je}Ss.Ma="serverreachability";function ey(t){Ze.call(this,Ss.Ma,t)}ze(ey,Ze);function di(t){const e=qa();We(e,new ey(e))}Ss.STAT_EVENT="statevent";function ty(t,e){Ze.call(this,Ss.STAT_EVENT,t),this.stat=e}ze(ty,Ze);function ot(t){const e=qa();We(e,new ty(e,t))}Ss.Na="timingevent";function ny(t,e){Ze.call(this,Ss.Na,t),this.size=e}ze(ny,Ze);function qi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Ka={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},sy={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function qu(){}qu.prototype.h=null;function ld(t){return t.h||(t.h=t.i())}function ry(){}var Ki={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ku(){Ze.call(this,"d")}ze(Ku,Ze);function Wu(){Ze.call(this,"c")}ze(Wu,Ze);var _l;function Wa(){}ze(Wa,qu);Wa.prototype.g=function(){return new XMLHttpRequest};Wa.prototype.i=function(){return{}};_l=new Wa;function Wi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new fi(this),this.P=UA,t=dl?125:void 0,this.W=new ja(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new iy}function iy(){this.i=null,this.g="",this.h=!1}var UA=45e3,wl={},ta={};H=Wi.prototype;H.setTimeout=function(t){this.P=t};function El(t,e,n){t.K=1,t.v=za(hn(e)),t.s=n,t.U=!0,oy(t,null)}function oy(t,e){t.F=Date.now(),Gi(t),t.A=hn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),dy(n.h,"t",s),t.C=0,n=t.l.H,t.h=new iy,t.g=Dy(t.l,n?e:null,!t.s),0<t.O&&(t.L=new PA(Ke(t.Ia,t,t.g),t.O)),Jm(t.V,t.g,"readystatechange",t.gb),e=t.H?Vm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),di(),DA(t.j,t.u,t.A,t.m,t.X,t.s)}H.gb=function(t){t=t.target;const e=this.L;e&&on(t)==3?e.l():this.Ia(t)};H.Ia=function(t){try{if(t==this.g)e:{const u=on(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||dl||this.g&&(this.h.h||this.g.ga()||dd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?di(3):di(2)),Ga(this);var n=this.g.ba();this.N=n;t:if(ay(this)){var s=dd(this.g);t="";var r=s.length,i=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),Wr(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,LA(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zo(a)){var l=a;break t}}l=null}if(n=l)Ms(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Tl(this,n);else{this.i=!1,this.o=3,ot(12),Zn(this),Wr(this);break e}}this.U?(cy(this,u,o),dl&&this.i&&u==3&&(Jm(this.V,this.W,"tick",this.fb),this.W.start())):(Ms(this.j,this.m,o,null),Tl(this,o)),u==4&&Zn(this),this.i&&!this.I&&(u==4?Ny(this.l,this):(this.i=!1,Gi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Zn(this),Wr(this)}}}catch{}finally{}};function ay(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function cy(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=FA(t,n),r==ta){e==4&&(t.o=4,ot(14),s=!1),Ms(t.j,t.m,null,"[Incomplete Response]");break}else if(r==wl){t.o=4,ot(15),Ms(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ms(t.j,t.m,r,null),Tl(t,r);ay(t)&&r!=ta&&r!=wl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),th(e),e.L=!0,ot(11))):(Ms(t.j,t.m,n,"[Invalid Chunked Response]"),Zn(t),Wr(t))}H.fb=function(){if(this.g){var t=on(this.g),e=this.g.ga();this.C<e.length&&(Ga(this),cy(this,t,e),this.i&&t!=4&&Gi(this))}};function FA(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ta:(n=Number(e.substring(n,s)),isNaN(n)?wl:(s+=1,s+n>e.length?ta:(e=e.substr(s,n),t.C=s+n,e)))}H.cancel=function(){this.I=!0,Zn(this)};function Gi(t){t.Y=Date.now()+t.P,ly(t,t.P)}function ly(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qi(Ke(t.eb,t),e)}function Ga(t){t.B&&(se.clearTimeout(t.B),t.B=null)}H.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xA(this.j,this.A),this.K!=2&&(di(),ot(17)),Zn(this),this.o=2,Wr(this)):ly(this,this.Y-t)};function Wr(t){t.l.G==0||t.I||Ny(t.l,t)}function Zn(t){Ga(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ju(t.W),Zm(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Tl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Il(n.i,t))){if(n.I=t.N,!t.J&&Il(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ia(n),Xa(n);else break e;eh(n),ot(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=qi(Ke(n.ab,n),6e3));if(1>=my(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else es(n,11)}else if((t.J||n.g==t)&&ia(n),!Zo(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const y=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(st(y,"spdy")||st(y,"quic")||st(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Qu(i,i.h),i.h=null))}if(s.D){const T=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.sa=T,Ce(s.F,s.D,T))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Py(s,s.H?s.la:null,s.W),o.J){yy(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ga(a),Gi(a)),s.g=o}else Cy(s);0<n.l.length&&Ja(n)}else l[0]!="stop"&&l[0]!="close"||es(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?es(n,7):Zu(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}di(4)}catch{}}function VA(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(fl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Gu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fl(t)||typeof t=="string")Fm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(fl(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=VA(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function dr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof dr)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}H=dr.prototype;H.R=function(){zu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};H.T=function(){return zu(this),this.g.concat()};function zu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ps(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],ps(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}H.get=function(t,e){return ps(this.h,t)?this.h[t]:e};H.set=function(t,e){ps(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};H.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function ps(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var uy=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $A(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function gs(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof gs){this.g=e!==void 0?e:t.g,na(this,t.j),this.s=t.s,sa(this,t.i),ra(this,t.m),this.l=t.l,e=t.h;var n=new pi;n.i=e.i,e.g&&(n.g=new dr(e.g),n.h=e.h),ud(this,n),this.o=t.o}else t&&(n=String(t).match(uy))?(this.g=!!e,na(this,n[1]||"",!0),this.s=Gr(n[2]||""),sa(this,n[3]||"",!0),ra(this,n[4]),this.l=Gr(n[5]||"",!0),ud(this,n[6]||"",!0),this.o=Gr(n[7]||"")):(this.g=!!e,this.h=new pi(null,this.g))}gs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lr(e,hd,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Lr(e,hd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Lr(n,n.charAt(0)=="/"?KA:qA,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Lr(n,GA)),t.join("")};function hn(t){return new gs(t)}function na(t,e,n){t.j=n?Gr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sa(t,e,n){t.i=n?Gr(e,!0):e}function ra(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ud(t,e,n){e instanceof pi?(t.h=e,zA(t.h,t.g)):(n||(e=Lr(e,WA)),t.h=new pi(e,t.g))}function Ce(t,e,n){t.h.set(e,n)}function za(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function BA(t){return t instanceof gs?hn(t):new gs(t,void 0)}function jA(t,e,n,s){var r=new gs(null,void 0);return t&&na(r,t),e&&sa(r,e),n&&ra(r,n),s&&(r.l=s),r}function Gr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,HA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function HA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hd=/[#\/\?@]/g,qA=/[#\?:]/g,KA=/[#\?]/g,WA=/[#\?@]/g,GA=/#/g;function pi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kn(t){t.g||(t.g=new dr,t.h=0,t.i&&$A(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}H=pi.prototype;H.add=function(t,e){Kn(this),this.i=null,t=pr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hy(t,e){Kn(t),e=pr(t,e),ps(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ps(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&zu(t)))}function fy(t,e){return Kn(t),e=pr(t,e),ps(t.g.h,e)}H.forEach=function(t,e){Kn(this),this.g.forEach(function(n,s){Fm(n,function(r){t.call(e,r,s,this)},this)},this)};H.T=function(){Kn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};H.R=function(t){Kn(this);var e=[];if(typeof t=="string")fy(this,t)&&(e=td(e,this.g.get(pr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=td(e,t[n])}return e};H.set=function(t,e){return Kn(this),this.i=null,t=pr(this,t),fy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};H.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function dy(t,e,n){hy(t,e),0<n.length&&(t.i=null,t.g.set(pr(t,e),Du(n)),t.h+=n.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function pr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zA(t,e){e&&!t.j&&(Kn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(hy(this,s),dy(this,r,n))},t)),t.j=e}var QA=class{constructor(t,e){this.h=t,this.g=e}};function py(t){this.l=t||YA,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ea&&se.g.Ea()&&se.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YA=10;function gy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function my(t){return t.h?1:t.g?t.g.size:0}function Il(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qu(t,e){t.g?t.g.add(e):t.h=e}function yy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}py.prototype.cancel=function(){if(this.i=vy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Du(t.i)}function Yu(){}Yu.prototype.stringify=function(t){return se.JSON.stringify(t,void 0)};Yu.prototype.parse=function(t){return se.JSON.parse(t,void 0)};function XA(){this.g=new Yu}function JA(t,e,n){const s=n||"";try{Gu(t,function(r,i){let o=r;ji(r)&&(o=$u(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ZA(t,e){const n=new Ha;if(se.Image){const s=new Image;s.onload=vo(wo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=vo(wo,n,s,"TestLoadImage: error",!1,e),s.onabort=vo(wo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=vo(wo,n,s,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function wo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function zi(t){this.l=t.$b||null,this.j=t.ib||!1}ze(zi,qu);zi.prototype.g=function(){return new Qa(this.l,this.j)};zi.prototype.i=function(t){return function(){return t}}({});function Qa(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Qa,je);var Xu=0;H=Qa.prototype;H.open=function(t,e){if(this.readyState!=Xu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,gi(this)};H.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||se).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=Xu};H.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_y(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function _y(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}H.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qi(this):gi(this),this.readyState==3&&_y(this)}};H.Ua=function(t){this.g&&(this.response=this.responseText=t,Qi(this))};H.Ta=function(t){this.g&&(this.response=t,Qi(this))};H.ha=function(){this.g&&Qi(this)};function Qi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,gi(t)}H.setRequestHeader=function(t,e){this.v.append(t,e)};H.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function gi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eC=se.JSON.parse;function Me(t){je.call(this),this.headers=new dr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wy,this.K=this.L=!1}ze(Me,je);var wy="",tC=/^https?$/i,nC=["POST","PUT"];H=Me.prototype;H.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_l.g(),this.C=this.u?ld(this.u):ld(_l),this.g.onreadystatechange=Ke(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){fd(this,i);return}t=n||"";const r=new dr(this.headers);s&&Gu(s,function(i,o){r.set(o,i)}),s=dA(r.T()),n=se.FormData&&t instanceof se.FormData,!(0<=Um(nC,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Iy(this),0<this.B&&((this.K=sC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ke(this.pa,this)):this.A=Hu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){fd(this,i)}};function sC(t){return Zs&&vA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function rC(t){return t.toLowerCase()=="content-type"}H.pa=function(){typeof Pu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function fd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ey(t),Ya(t)}function Ey(t){t.D||(t.D=!0,We(t,"complete"),We(t,"error"))}H.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),Ya(this))};H.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ya(this,!0)),Me.Z.M.call(this)};H.Fa=function(){this.s||(this.F||this.v||this.l?Ty(this):this.cb())};H.cb=function(){Ty(this)};function Ty(t){if(t.h&&typeof Pu<"u"&&(!t.C[1]||on(t)!=4||t.ba()!=2)){if(t.v&&on(t)==4)Hu(t.Fa,0,t);else if(We(t,"readystatechange"),on(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(uy)[1]||null;if(!r&&se.self&&se.self.location){var i=se.self.location.protocol;r=i.substr(0,i.length-1)}s=!tC.test(r?r.toLowerCase():"")}n=s}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var o=2<on(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Ey(t)}}finally{Ya(t)}}}}function Ya(t,e){if(t.g){Iy(t);const n=t.g,s=t.C[0]?Jo:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=s}catch{}}}function Iy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}function on(t){return t.g?t.g.readyState:0}H.ba=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}};H.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eC(e)}};function dd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}H.Da=function(){return this.m};H.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function iC(t){let e="";return Lu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ju(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=iC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Ar(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function by(t){this.za=0,this.l=[],this.h=new Ha,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ar("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ar("baseRetryDelayMs",5e3,t),this.$a=Ar("retryDelaySeedMs",1e4,t),this.Ya=Ar("forwardChannelMaxRetries",2,t),this.ra=Ar("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new py(t&&t.concurrentRequestLimit),this.Ca=new XA,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}H=by.prototype;H.ma=8;H.G=1;function Zu(t){if(Sy(t),t.G==3){var e=t.V++,n=hn(t.F);Ce(n,"SID",t.J),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Yi(t,n),e=new Wi(t,t.h,e,void 0),e.K=2,e.v=za(hn(n)),n=!1,se.navigator&&se.navigator.sendBeacon&&(n=se.navigator.sendBeacon(e.v.toString(),"")),!n&&se.Image&&(new Image().src=e.v,n=!0),n||(e.g=Dy(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Gi(e)}Oy(t)}H.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Xa(t){t.g&&(th(t),t.g.cancel(),t.g=null)}function Sy(t){Xa(t),t.u&&(se.clearTimeout(t.u),t.u=null),ia(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function Dc(t,e){t.l.push(new QA(t.Za++,e)),t.G==3&&Ja(t)}function Ja(t){gy(t.i)||t.m||(t.m=!0,Bu(t.Ha,t),t.C=0)}function oC(t,e){return my(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=qi(Ke(t.Ha,t,e),ky(t,t.C)),t.C++,!0)}H.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Wi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Vm(i),$m(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ay(this,r,e),n=hn(this.F),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),Yi(this,n),this.o&&i&&Ju(n,this.o,i),Qu(this.i,r),this.Ra&&Ce(n,"TYPE","init"),this.ja?(Ce(n,"$req",e),Ce(n,"SID","null"),r.$=!0,El(r,n,null)):El(r,n,e),this.G=2}}else this.G==3&&(t?pd(this,t):this.l.length==0||gy(this.i)||pd(this))};function pd(t,e){var n;e?n=e.m:n=t.V++;const s=hn(t.F);Ce(s,"SID",t.J),Ce(s,"RID",n),Ce(s,"AID",t.U),Yi(t,s),t.o&&t.s&&Ju(s,t.o,t.s),n=new Wi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Ay(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Qu(t.i,n),El(n,s,e)}function Yi(t,e){t.j&&Gu({},function(n,s){Ce(e,s,n)})}function Ay(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ke(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{JA(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Cy(t){t.g||t.u||(t.Y=1,Bu(t.Ga,t),t.A=0)}function eh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=qi(Ke(t.Ga,t),ky(t,t.A)),t.A++,!0)}H.Ga=function(){if(this.u=null,Ry(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=qi(Ke(this.bb,this),t)}};H.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ot(10),Xa(this),Ry(this))};function th(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function Ry(t){t.g=new Wi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=hn(t.oa);Ce(e,"RID","rpc"),Ce(e,"SID",t.J),Ce(e,"CI",t.N?"0":"1"),Ce(e,"AID",t.U),Yi(t,e),Ce(e,"TYPE","xmlhttp"),t.o&&t.s&&Ju(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=za(hn(e)),n.s=null,n.U=!0,oy(n,t)}H.ab=function(){this.v!=null&&(this.v=null,Xa(this),eh(this),ot(19))};function ia(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function Ny(t,e){var n=null;if(t.g==e){ia(t),th(t),t.g=null;var s=2}else if(Il(t.i,e))n=e.D,yy(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=qa(),We(s,new ny(s,n)),Ja(t)}else Cy(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&oC(t,e)||s==2&&eh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:es(t,5);break;case 4:es(t,10);break;case 3:es(t,6);break;default:es(t,2)}}}function ky(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function es(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Ke(t.jb,t);n||(n=new gs("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||na(n,"https"),za(n)),ZA(n.toString(),s)}else ot(2);t.G=0,t.j&&t.j.va(e),Oy(t),Sy(t)}H.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ot(2)):(this.h.info("Failed to ping google.com"),ot(1))};function Oy(t){t.G=0,t.I=-1,t.j&&((vy(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Du(t.l),t.l.length=0),t.j.ua())}function Py(t,e,n){let s=BA(n);if(s.i!="")e&&sa(s,e+"."+s.i),ra(s,s.m);else{const r=se.location;s=jA(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Lu(t.aa,function(r,i){Ce(s,i,r)}),e=t.D,n=t.sa,e&&n&&Ce(s,e,n),Ce(s,"VER",t.ma),Yi(t,s),s}function Dy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Me(new zi({ib:!0})):new Me(t.qa),e.L=t.H,e}function Ly(){}H=Ly.prototype;H.xa=function(){};H.wa=function(){};H.va=function(){};H.ua=function(){};H.Oa=function(){};function oa(){if(Zs&&!(10<=Number(_A)))throw Error("Environmental error: no available transport.")}oa.prototype.g=function(t,e){return new It(t,e)};function It(t,e){je.call(this),this.g=new by(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Zo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gr(this)}ze(It,je);It.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Bu(Ke(t.hb,t,e))),ot(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Py(t,null,t.W),Ja(t)};It.prototype.close=function(){Zu(this.g)};It.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Dc(this.g,e)}else this.v?(e={},e.__data__=$u(t),Dc(this.g,e)):Dc(this.g,t)};It.prototype.M=function(){this.g.j=null,delete this.j,Zu(this.g),delete this.g,It.Z.M.call(this)};function xy(t){Ku.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(xy,Ku);function My(){Wu.call(this),this.status=1}ze(My,Wu);function gr(t){this.g=t}ze(gr,Ly);gr.prototype.xa=function(){We(this.g,"a")};gr.prototype.wa=function(t){We(this.g,new xy(t))};gr.prototype.va=function(t){We(this.g,new My)};gr.prototype.ua=function(){We(this.g,"b")};oa.prototype.createWebChannel=oa.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;Ka.NO_ERROR=0;Ka.TIMEOUT=8;Ka.HTTP_ERROR=6;sy.COMPLETE="complete";ry.EventType=Ki;Ki.OPEN="a";Ki.CLOSE="b";Ki.ERROR="c";Ki.MESSAGE="d";je.prototype.listen=je.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.La;Me.prototype.getLastErrorCode=Me.prototype.Da;Me.prototype.getStatus=Me.prototype.ba;Me.prototype.getResponseJson=Me.prototype.Qa;Me.prototype.getResponseText=Me.prototype.ga;Me.prototype.send=Me.prototype.ea;var aC=function(){return new oa},cC=function(){return qa()},Lc=Ka,lC=sy,uC=Ss,gd={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},hC=zi,Eo=ry,fC=Me;const md="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let mr="9.4.0";/**
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
 */const ms=new _u("@firebase/firestore");function yd(){return ms.logLevel}function J(t,...e){if(ms.logLevel<=pe.DEBUG){const n=e.map(nh);ms.debug(`Firestore (${mr}): ${t}`,...n)}}function Vn(t,...e){if(ms.logLevel<=pe.ERROR){const n=e.map(nh);ms.error(`Firestore (${mr}): ${t}`,...n)}}function vd(t,...e){if(ms.logLevel<=pe.WARN){const n=e.map(nh);ms.warn(`Firestore (${mr}): ${t}`,...n)}}function nh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function be(t,e){t||ie()}function oe(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class dC{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class pC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class gC{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{J("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(J("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(J("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new dC(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new ut(e)}}class mC{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=ut.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class yC{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new mC(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class sh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.g(s),this.p=s=>n.writeSequenceNumber(s))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */sh.T=-1;class Uy{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=vC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function _e(t,e){return t<e?-1:t>e?1:0}function er(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Et(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function _d(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class mi{constructor(e,n,s){n===void 0?n=0:n>e.length&&ie(),s===void 0?s=e.length-n:s>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends mi{construct(e,n,s){return new Re(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(O.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const _C=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends mi{construct(e,n,s){return new ht(e,n,s)}static isValidIdentifier(e){return _C.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new W(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new W(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.fields=e,e.sort(ht.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new et(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new et(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const wC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(be(!!t),typeof t=="string"){let e=0;const n=wC.exec(t);if(be(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function tr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $y(t){const e=t.mapValue.fields.__previous_value__;return Vy(e)?$y(e):e}function yi(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
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
 */function vr(t){return t==null}function aa(t){return t===0&&1/t==-1/0}function EC(t){return typeof t=="number"&&Number.isInteger(t)&&!aa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Re.fromString(e))}static fromName(e){return new te(Re.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Re(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vy(t)?4:10:ie()}function Yt(t,e){const n=ys(t);if(n!==ys(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yi(t).isEqual(yi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=$n(s.timestampValue),o=$n(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return tr(s.bytesValue).isEqual(tr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Le(s.geoPointValue.latitude)===Le(r.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Le(s.integerValue)===Le(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Le(s.doubleValue),o=Le(r.doubleValue);return i===o?aa(i)===aa(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return er(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(_d(i)!==_d(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Yt(i[a],o[a])))return!1;return!0}(t,e);default:return ie()}}function vi(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function nr(t,e){const n=ys(t),s=ys(e);if(n!==s)return _e(n,s);switch(n){case 0:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Le(r.integerValue||r.doubleValue),a=Le(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return wd(t.timestampValue,e.timestampValue);case 4:return wd(yi(t),yi(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(r,i){const o=tr(r),a=tr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=_e(o[c],a[c]);if(l!==0)return l}return _e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=_e(Le(r.latitude),Le(i.latitude));return o!==0?o:_e(Le(r.longitude),Le(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=nr(o[c],a[c]);if(l)return l}return _e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=_e(a[u],l[u]);if(h!==0)return h;const f=nr(o[a[u]],c[l[u]]);if(f!==0)return f}return _e(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ie()}}function wd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=$n(t),s=$n(e),r=_e(n.seconds,s.seconds);return r!==0?r:_e(n.nanos,s.nanos)}function rh(t){return Sl(t)}function Sl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=$n(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?tr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,te.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Sl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Sl(s.fields[a])}`;return i+"}"}(t.mapValue):ie();var e,n}function Ed(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Al(t){return!!t&&"integerValue"in t}function ih(t){return!!t&&"arrayValue"in t}function Td(t){return!!t&&"nullValue"in t}function Id(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function No(t){return!!t&&"mapValue"in t}function zr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=zr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zr(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!No(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(n)}setAll(e){let n=ht.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=zr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());No(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];No(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){yr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new xt(zr(this.value))}}function By(t){const e=[];return yr(t.fields,(n,s)=>{const r=new ht([n]);if(No(s)){const i=By(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new bl(e)}/**
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
 */class Ye{constructor(e,n,s,r,i){this.key=e,this.documentType=n,this.version=s,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Ye(e,0,ye.min(),xt.empty(),0)}static newFoundDocument(e,n,s){return new Ye(e,1,n,s,0)}static newNoDocument(e,n){return new Ye(e,2,n,xt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,xt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ye(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class TC{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function bd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new TC(t,e,n,s,r,i,o)}function oh(t){const e=oe(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>bC(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),vr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=ca(e.startAt)),e.endAt&&(n+="|ub:",n+=ca(e.endAt)),e.A=n}return e.A}function IC(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${rh(s.value)}`;var s}).join(", ")}]`),vr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+ca(t.startAt)),t.endAt&&(e+=", endAt: "+ca(t.endAt)),`Target(${e})`}function ah(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!PC(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Yt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ad(t.startAt,e.startAt)&&Ad(t.endAt,e.endAt)}function Cl(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class at extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,s):new SC(e,n,s):n==="array-contains"?new RC(e,s):n==="in"?new NC(e,s):n==="not-in"?new kC(e,s):n==="array-contains-any"?new OC(e,s):new at(e,n,s)}static R(e,n,s){return n==="in"?new AC(e,s):new CC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(nr(n,this.value)):n!==null&&ys(this.value)===ys(n)&&this.P(nr(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function bC(t){return t.field.canonicalString()+t.op.toString()+rh(t.value)}class SC extends at{constructor(e,n,s){super(e,n,s),this.key=te.fromName(s.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.P(n)}}class AC extends at{constructor(e,n){super(e,"in",n),this.keys=jy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CC extends at{constructor(e,n){super(e,"not-in",n),this.keys=jy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>te.fromName(s.referenceValue))}class RC extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ih(n)&&vi(n.arrayValue,this.value)}}class NC extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vi(this.value.arrayValue,n)}}class kC extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vi(this.value.arrayValue,n)}}class OC extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ih(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>vi(this.value.arrayValue,s))}}class Rl{constructor(e,n){this.position=e,this.before=n}}function ca(t){return`${t.before?"b":"a"}:${t.position.map(e=>rh(e)).join(",")}`}class Qr{constructor(e,n="asc"){this.field=e,this.dir=n}}function PC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Sd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=te.comparator(te.fromName(o.referenceValue),n.key):s=nr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return t.before?s<=0:s<0}function Ad(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function DC(t,e,n,s,r,i,o,a){return new Xi(t,e,n,s,r,i,o,a)}function Hy(t){return new Xi(t)}function ko(t){return!vr(t.limit)&&t.limitType==="F"}function la(t){return!vr(t.limit)&&t.limitType==="L"}function qy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ky(t){for(const e of t.filters)if(e.v())return e.field;return null}function Wy(t){return t.collectionGroup!==null}function _i(t){const e=oe(t);if(e.V===null){e.V=[];const n=Ky(e),s=qy(e);if(n!==null&&s===null)n.isKeyField()||e.V.push(new Qr(n)),e.V.push(new Qr(ht.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Qr(ht.keyField(),i))}}}return e.V}function vs(t){const e=oe(t);if(!e.S)if(e.limitType==="F")e.S=bd(e.path,e.collectionGroup,_i(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of _i(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Qr(i.field,o))}const s=e.endAt?new Rl(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Rl(e.startAt.position,!e.startAt.before):null;e.S=bd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.S}function Gy(t,e,n){return new Xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Za(t,e){return ah(vs(t),vs(e))&&t.limitType===e.limitType}function zy(t){return`${oh(vs(t))}|lt:${t.limitType}`}function Nl(t){return`Query(target=${IC(vs(t))}; limitType=${t.limitType})`}function ec(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):te.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!Sd(n.startAt,_i(n),s)||n.endAt&&Sd(n.endAt,_i(n),s))}(t,e)}function Qy(t){return(e,n)=>{let s=!1;for(const r of _i(t)){const i=LC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function LC(t,e,n){const s=t.field.isKeyField()?te.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?nr(a,c):ie()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:aa(e)?"-0":e}}function Xy(t){return{integerValue:""+t}}function xC(t,e){return EC(e)?Xy(e):Yy(t,e)}/**
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
 */class tc{constructor(){this._=void 0}}function MC(t,e,n){return t instanceof wi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ei?Zy(t,e):t instanceof Ti?ev(t,e):function(s,r){const i=Jy(s,r),o=Cd(i)+Cd(s.C);return Al(i)&&Al(s.C)?Xy(o):Yy(s.N,o)}(t,e)}function UC(t,e,n){return t instanceof Ei?Zy(t,e):t instanceof Ti?ev(t,e):n}function Jy(t,e){return t instanceof ua?Al(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class wi extends tc{}class Ei extends tc{constructor(e){super(),this.elements=e}}function Zy(t,e){const n=tv(e);for(const s of t.elements)n.some(r=>Yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ti extends tc{constructor(e){super(),this.elements=e}}function ev(t,e){let n=tv(e);for(const s of t.elements)n=n.filter(r=>!Yt(r,s));return{arrayValue:{values:n}}}class ua extends tc{constructor(e,n){super(),this.N=e,this.C=n}}function Cd(t){return Le(t.integerValue||t.doubleValue)}function tv(t){return ih(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class FC{constructor(e,n){this.field=e,this.transform=n}}function VC(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ei&&s instanceof Ei||n instanceof Ti&&s instanceof Ti?er(n.elements,s.elements,Yt):n instanceof ua&&s instanceof ua?Yt(n.C,s.C):n instanceof wi&&s instanceof wi}(t.transform,e.transform)}class $C{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nc{}function BC(t,e,n){t instanceof sc?function(s,r,i){const o=s.value.clone(),a=kd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(s,r,i){if(!Oo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=kd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(nv(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function kl(t,e,n){t instanceof sc?function(s,r,i){if(!Oo(s.precondition,r))return;const o=s.value.clone(),a=Od(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Nd(r),o).setHasLocalMutations()}(t,e,n):t instanceof _r?function(s,r,i){if(!Oo(s.precondition,r))return;const o=Od(s.fieldTransforms,i,r),a=r.data;a.setAll(nv(s)),a.setAll(o),r.convertToFoundDocument(Nd(r),a).setHasLocalMutations()}(t,e,n):function(s,r){Oo(s.precondition,r)&&r.convertToNoDocument(ye.min())}(t,e)}function jC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Jy(s.transform,r||null);i!=null&&(n==null&&(n=xt.empty()),n.set(s.field,i))}return n||null}function Rd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&er(n,s,(r,i)=>VC(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Nd(t){return t.isFoundDocument()?t.version:ye.min()}class sc extends nc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class _r extends nc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function nv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function kd(t,e,n){const s=new Map;be(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,UC(o,a,n[r]))}return s}function Od(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,MC(i,o,e))}return s}class sv extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class HC extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class qC{constructor(e){this.count=e}}/**
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
 */var De,ue;function KC(t){switch(t){default:return ie();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function rv(t){if(t===void 0)return Vn("GRPC error has no .code"),O.UNKNOWN;switch(t){case De.OK:return O.OK;case De.CANCELLED:return O.CANCELLED;case De.UNKNOWN:return O.UNKNOWN;case De.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case De.INTERNAL:return O.INTERNAL;case De.UNAVAILABLE:return O.UNAVAILABLE;case De.UNAUTHENTICATED:return O.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case De.NOT_FOUND:return O.NOT_FOUND;case De.ALREADY_EXISTS:return O.ALREADY_EXISTS;case De.PERMISSION_DENIED:return O.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case De.ABORTED:return O.ABORTED;case De.OUT_OF_RANGE:return O.OUT_OF_RANGE;case De.UNIMPLEMENTED:return O.UNIMPLEMENTED;case De.DATA_LOSS:return O.DATA_LOSS;default:return ie()}}(ue=De||(De={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class tt{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??qe.RED,this.left=r??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new qe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(t,e,n,s,r){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pd(this.data.getIterator())}getIteratorFrom(e){return new Pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const WC=new tt(te.comparator);function _s(){return WC}const GC=new tt(te.comparator);function Ol(){return GC}const zC=new tt(te.comparator);function QC(){return zC}const YC=new Ge(te.comparator);function Ae(...t){let e=YC;for(const n of t)e=e.add(n);return e}const XC=new Ge(_e);function iv(){return XC}/**
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
 */class rc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Ji.createSynthesizedTargetChangeForCurrentChange(e,n)),new rc(ye.min(),s,iv(),_s(),Ae())}}class Ji{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ji(et.EMPTY_BYTE_STRING,n,Ae(),Ae(),Ae())}}/**
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
 */class Po{constructor(e,n,s,r){this.k=e,this.removedTargetIds=n,this.key=s,this.$=r}}class ov{constructor(e,n){this.targetId=e,this.O=n}}class av{constructor(e,n,s=et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Dd{constructor(){this.F=0,this.M=xd(),this.L=et.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Ae(),n=Ae(),s=Ae();return this.M.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ie()}}),new Ji(this.L,this.B,e,n,s)}G(){this.U=!1,this.M=xd()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class JC{constructor(e){this.tt=e,this.et=new Map,this.nt=_s(),this.st=Ld(),this.it=new Ge(_e)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const s=this.ut(n);switch(e.state){case 0:this.ht(n)&&s.j(e.resumeToken);break;case 1:s.X(),s.q||s.G(),s.j(e.resumeToken);break;case 2:s.X(),s.q||this.removeTarget(n);break;case 3:this.ht(n)&&(s.Z(),s.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),s.j(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((s,r)=>{this.ht(r)&&n(r)})}ft(e){const n=e.targetId,s=e.O.count,r=this.dt(n);if(r){const i=r.target;if(Cl(i))if(s===0){const o=new te(i.path);this.ct(n,o,Ye.newNoDocument(o,ye.min()))}else be(s===1);else this.wt(n)!==s&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&Cl(a.target)){const c=new te(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.ct(o,c,Ye.newNoDocument(c,e))}i.K&&(n.set(o,i.W()),i.G())}});let s=Ae();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.dt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))});const r=new rc(e,n,this.it,this.nt,s);return this.nt=_s(),this.st=Ld(),this.it=new Ge(_e),r}ot(e,n){if(!this.ht(e))return;const s=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,s),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,s){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,n)?r.H(n,1):r.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),s&&(this.nt=this.nt.insert(n,s))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Dd,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Ge(_e),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Dd),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Ld(){return new tt(te.comparator)}function xd(){return new tt(te.comparator)}/**
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
 */const ZC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),eR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class tR{constructor(e,n){this.databaseId=e,this.D=n}}function ha(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cv(t,e){return t.D?e.toBase64():e.toUint8Array()}function nR(t,e){return ha(t,e.toTimestamp())}function cn(t){return be(!!t),ye.fromTimestamp(function(e){const n=$n(e);return new Et(n.seconds,n.nanos)}(t))}function ch(t,e){return function(n){return new Re(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function lv(t){const e=Re.fromString(t);return be(fv(e)),e}function Pl(t,e){return ch(t.databaseId,e.path)}function xc(t,e){const n=lv(e);if(n.get(1)!==t.databaseId.projectId)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(uv(n))}function Dl(t,e){return ch(t.databaseId,e)}function sR(t){const e=lv(t);return e.length===4?Re.emptyPath():uv(e)}function Ll(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uv(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Md(t,e,n){return{name:Pl(t,e),fields:n.value.mapValue.fields}}function rR(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.D?(be(l===void 0||typeof l=="string"),et.fromBase64String(l||"")):(be(l===void 0||l instanceof Uint8Array),et.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?O.UNKNOWN:rv(c.code);return new W(l,c.message||"")}(o);n=new av(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=xc(t,s.document.name),i=cn(s.document.updateTime),o=new xt({mapValue:{fields:s.document.fields}}),a=Ye.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Po(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=xc(t,s.document),i=s.readTime?cn(s.readTime):ye.min(),o=Ye.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Po([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=xc(t,s.document),i=s.removedTargetIds||[];n=new Po([],i,r,null)}else{if(!("filter"in e))return ie();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new qC(r),o=s.targetId;n=new ov(o,i)}}return n}function iR(t,e){let n;if(e instanceof sc)n={update:Md(t,e.key,e.value)};else if(e instanceof sv)n={delete:Pl(t,e.key)};else if(e instanceof _r)n={update:Md(t,e.key,e.data),updateMask:gR(e.fieldMask)};else{if(!(e instanceof HC))return ie();n={verify:Pl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof wi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ei)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ti)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ua)return{fieldPath:i.field.canonicalString(),increment:o.C};throw ie()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:nR(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ie()}(t,e.precondition)),n}function oR(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?cn(s.updateTime):cn(r);return i.isEqual(ye.min())&&(i=cn(r)),new $C(i,s.transformResults||[])}(n,e))):[]}function aR(t,e){return{documents:[Dl(t,e.path)]}}function cR(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Dl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(Id(u.value))return{unaryFilter:{field:Ds(u.field),op:"IS_NAN"}};if(Td(u.value))return{unaryFilter:{field:Ds(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Id(u.value))return{unaryFilter:{field:Ds(u.field),op:"IS_NOT_NAN"}};if(Td(u.value))return{unaryFilter:{field:Ds(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(u.field),op:fR(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:Ds(l.field),direction:hR(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.D||vr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Ud(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ud(e.endAt)),n}function lR(t){let e=sR(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){be(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=hv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Qr(Us(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,vr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Fd(n.startAt));let l=null;return n.endAt&&(l=Fd(n.endAt)),DC(e,r,o,i,a,"F",c,l)}function uR(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ie()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function hv(t){return t?t.unaryFilter!==void 0?[pR(t)]:t.fieldFilter!==void 0?[dR(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>hv(e)).reduce((e,n)=>e.concat(n)):ie():[]}function Ud(t){return{before:t.before,values:t.position}}function Fd(t){const e=!!t.before,n=t.values||[];return new Rl(n,e)}function hR(t){return ZC[t]}function fR(t){return eR[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function Us(t){return ht.fromServerFormat(t.fieldPath)}function dR(t){return at.create(Us(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(t.fieldFilter.op),t.fieldFilter.value)}function pR(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Us(t.unaryFilter.field);return at.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Us(t.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Us(t.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Us(t.unaryFilter.field);return at.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}function gR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const mR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,s)=>{n(e)})}static reject(e){return new B((n,s)=>{s(e)})}static waitFor(e){return new B((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=B.resolve(!1);for(const s of e)n=n.next(r=>r?B.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Zi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class vR{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&BC(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&kl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&kl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(ye.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(n,s)=>Rd(n,s))&&er(this.baseMutations,e.baseMutations,(n,s)=>Rd(n,s))}}class lh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){be(e.mutations.length===s.length);let r=QC();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new lh(e,n,s,r)}}/**
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
 */class as{constructor(e,n,s,r,i=ye.min(),o=ye.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new as(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class _R{constructor(e){this.Wt=e}}function wR(t){const e=lR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gy(e,e.limit,"L"):e}/**
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
 */class ER{constructor(){this.Gt=new TR}addToCollectionParentIndex(e,n){return this.Gt.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Gt.getEntries(n))}}class TR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ge(Re.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ge(Re.comparator)).toArray()}}/**
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
 */class sr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new sr(0)}static ie(){return new sr(-1)}}/**
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
 */async function eo(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==mR)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class to{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),!0;return!1}forEach(e){yr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Fy(this.inner)}}/**
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
 */class IR{constructor(){this.changes=new to(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:ye.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Ye.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?B.resolve(s.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dv{constructor(e,n,s){this.He=e,this.In=n,this.Ht=s}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Rn(e,n,s))}Rn(e,n,s){return this.He.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}bn(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Pn(e,n){return this.He.getEntries(e,n).next(s=>this.vn(e,s).next(()=>s))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.bn(n,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return te.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Vn(e,n.path):Wy(n)?this.Sn(e,n,s):this.Dn(e,n,s)}Vn(e,n){return this.An(e,new te(n)).next(s=>{let r=Ol();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Sn(e,n,s){const r=n.collectionGroup;let i=Ol();return this.Ht.getCollectionParents(e,r).next(o=>B.forEach(o,a=>{const c=function(l,u){return new Xi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.Dn(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Dn(e,n,s){let r,i;return this.He.getDocumentsMatchingQuery(e,n,s).next(o=>(r=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Cn(e,i,r).next(a=>{r=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=r.get(u);h==null&&(h=Ye.newInvalidDocument(u),r=r.insert(u,h)),kl(l,h,c.localWriteTime),h.isFoundDocument()||(r=r.remove(u))}}))).next(()=>(r.forEach((o,a)=>{ec(n,a)||(r=r.remove(o))}),r))}Cn(e,n,s){let r=Ae();for(const o of n)for(const a of o.mutations)a instanceof _r&&s.get(a.key)===null&&(r=r.add(a.key));let i=s;return this.He.getEntries(e,r).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
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
 */class uh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Nn=s,this.xn=r}static kn(e,n){let s=Ae(),r=Ae();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new uh(e,n.fromCache,s,r)}}/**
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
 */class bR{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(ye.min())?this.Fn(e,n):this.On.Pn(e,r).next(i=>{const o=this.Mn(n,i);return(ko(n)||la(n))&&this.Ln(n.limitType,o,r,s)?this.Fn(e,n):(yd()<=pe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nl(n)),this.On.getDocumentsMatchingQuery(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let s=new Ge(Qy(e));return n.forEach((r,i)=>{ec(e,i)&&(s=s.add(i))}),s}Ln(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,n){return yd()<=pe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Nl(n)),this.On.getDocumentsMatchingQuery(e,n,ye.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n,s,r){this.persistence=e,this.Bn=n,this.N=r,this.Un=new tt(_e),this.qn=new to(i=>oh(i),ah),this.Kn=ye.min(),this.In=e.getMutationQueue(s),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new dv(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function AR(t,e,n,s){return new SR(t,e,n,s)}async function pv(t,e){const n=oe(t);let s=n.In,r=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,s=n.persistence.getMutationQueue(e),r=new dv(n.jn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=Ae();for(const f of a){l.push(f.batchId);for(const d of f.mutations)h=h.add(d.key)}for(const f of c){u.push(f.batchId);for(const d of f.mutations)h=h.add(d.key)}return r.Pn(o,h).next(f=>({Wn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.In=s,n.Qn=r,n.Bn.$n(n.Qn),i}function CR(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=B.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(y=>{const T=c.docVersions.get(d);be(T!==null),y.version.compareTo(T)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&l.addEntry(y,c.commitVersion))})}),f.next(()=>o.In.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.In.performConsistencyCheck(s)).next(()=>n.Qn.Pn(s,r))})}function gv(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function RR(t,e){const n=oe(t),s=e.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ze.addMatchingKeys(i,l.addedDocuments,u)));const f=l.resumeToken;if(f.approximateByteSize()>0){const d=h.withResumeToken(f,s).withSequenceNumber(i.currentSequenceNumber);r=r.insert(u,d),function(y,T,k){return be(T.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(h,d,l)&&a.push(n.ze.updateTargetData(i,d))}});let c=_s();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(NR(i,o,e.documentUpdates,s,void 0).next(l=>{c=l})),!s.isEqual(ye.min())){const l=n.ze.getLastRemoteSnapshotVersion(i).next(u=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,c)).next(()=>c)}).then(i=>(n.Un=r,i))}function NR(t,e,n,s,r){let i=Ae();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=_s();return n.forEach((c,l)=>{const u=o.get(c),h=(r==null?void 0:r.get(c))||s;l.isNoDocument()&&l.version.isEqual(ye.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):J("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function kR(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(s,e)))}function OR(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.ze.getTargetData(s,e).next(i=>i?(r=i,B.resolve(r)):n.ze.allocateTargetId(s).next(o=>(r=new as(e,o,0,s.currentSequenceNumber),n.ze.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Un.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(s.targetId,s),n.qn.set(e,s.targetId)),s})}async function xl(t,e,n){const s=oe(t),r=s.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Zi(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Un=s.Un.remove(e),s.qn.delete(r.target)}function Vd(t,e,n){const s=oe(t);let r=ye.min(),i=Ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=oe(a),h=u.qn.get(l);return h!==void 0?B.resolve(u.Un.get(h)):u.ze.getTargetData(c,l)}(s,o,vs(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bn.getDocumentsMatchingQuery(o,e,n?r:ye.min(),n?i:Ae())).next(a=>({documents:a,Gn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return B.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var s;return this.Yn.set(n.id,{id:(s=n).id,version:s.version,createTime:cn(s.createTime)}),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:wR(s.bundledQuery),readTime:cn(s.readTime)}}(n)),B.resolve()}}/**
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
 */class hh{constructor(){this.Zn=new Ge(Fe.ts),this.es=new Ge(Fe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new Fe(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new Fe(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}cs(e){const n=new te(new Re([])),s=new Fe(n,e),r=new Fe(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new te(new Re([])),s=new Fe(n,e),r=new Fe(n,e+1);let i=Ae();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Fe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return te.comparator(e.key,n.key)||_e(e.ls,n.ls)}static ns(e,n){return _e(e.ls,n.ls)||te.comparator(e.key,n.key)}}/**
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
 */class DR{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Ge(Fe.ts)}checkEmpty(e){return B.resolve(this.In.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new vR(i,n,s,r);this.In.push(o);for(const a of r)this.ds=this.ds.add(new Fe(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this._s(s),i=r<0?0:r;return B.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return B.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Fe(n,0),r=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this.ws(o.ls);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ge(_e);return n.forEach(r=>{const i=new Fe(r,0),o=new Fe(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),B.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;te.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new te(i),0);let a=new Ge(_e);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ls)),!0)},o),B.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this.ws(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){be(this.ys(n.batchId,"removed")===0),this.In.shift();let s=this.ds;return B.forEach(n.mutations,r=>{const i=new Fe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}te(e){}containsKey(e,n){const s=new Fe(n,0),r=this.ds.firstAfterOrEqual(s);return B.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,B.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class LR{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new tt(te.comparator),this.size=0}addEntry(e,n,s){const r=n.key,i=this.docs.get(r),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(r,{document:n.clone(),size:a,readTime:s}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return B.resolve(s?s.document.clone():Ye.newInvalidDocument(n))}getEntries(e,n){let s=_s();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.clone():Ye.newInvalidDocument(r))}),B.resolve(s)}getDocumentsMatchingQuery(e,n,s){let r=_s();const i=new te(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(s)<=0||ec(n,c)&&(r=r.insert(c.key,c.clone()))}return B.resolve(r)}Ts(e,n){return B.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new xR(this)}getSize(e){return B.resolve(this.size)}}class xR extends IR{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.document.isValidDocument()?n.push(this.Se.addEntry(e,r.document,this.getReadTime(s))):this.Se.removeEntry(s)}),B.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class MR{constructor(e){this.persistence=e,this.Es=new to(n=>oh(n),ah),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Is=0,this.As=new hh,this.targetCount=0,this.Rs=sr.se()}forEachTarget(e,n){return this.Es.forEach((s,r)=>n(r)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Is&&(this.Is=n),B.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new sr(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.ce(n),B.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),B.waitFor(i).next(()=>r)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const s=this.Es.get(n)||null;return B.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),B.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),B.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return B.resolve(s)}containsKey(e,n){return B.resolve(this.As.containsKey(n))}}/**
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
 */class UR{constructor(e,n){this.bs={},this.Le=new sh(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new MR(this),this.Ht=new ER,this.He=function(s,r){return new LR(s,r)}(this.Ht,s=>this.referenceDelegate.Ps(s)),this.N=new _R(n),this.Je=new PR(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new DR(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,s){J("MemoryPersistence","Starting transaction:",e);const r=new FR(this.Le.next());return this.referenceDelegate.vs(),s(r).next(i=>this.referenceDelegate.Vs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ss(e,n){return B.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class FR extends yR{constructor(e){super(),this.currentSequenceNumber=e}}class fh{constructor(e){this.persistence=e,this.Ds=new hh,this.Cs=null}static Ns(e){return new fh(e)}get xs(){if(this.Cs)return this.Cs;throw ie()}addReference(e,n,s){return this.Ds.addReference(s,n),this.xs.delete(s.toString()),B.resolve()}removeReference(e,n,s){return this.Ds.removeReference(s,n),this.xs.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(r=>this.xs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.xs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.xs,s=>{const r=te.fromPath(s);return this.ks(e,r).next(i=>{i||n.removeEntry(r)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return B.or([()=>B.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class $d{constructor(){this.activeTargetIds=iv()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VR{constructor(){this.yi=new $d,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,s){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new $d,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class $R{Ti(e){}shutdown(){}}/**
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
 */class Bd{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class jR{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class HR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,s,r){const i=this.Bi(e,n);J("RestConnection","Sending: ",i,s);const o={};return this.Ui(o,r),this.qi(e,i,o,s).then(a=>(J("RestConnection","Received: ",a),a),a=>{throw vd("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",s),a})}Ki(e,n,s,r){return this.Li(e,n,s,r)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+mr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const s in n.authHeaders)n.authHeaders.hasOwnProperty(s)&&(e[s]=n.authHeaders[s])}Bi(e,n){const s=BR[e];return`${this.Fi}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,s,r){return new Promise((i,o)=>{const a=new fC;a.listenOnce(lC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Lc.NO_ERROR:const l=a.getResponseJson();J("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Lc.TIMEOUT:J("Connection",'RPC "'+e+'" timed out'),o(new W(O.DEADLINE_EXCEEDED,"Request time out"));break;case Lc.HTTP_ERROR:const u=a.getStatus();if(J("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(d){const y=d.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(y)>=0?y:O.UNKNOWN}(h.status);o(new W(f,h.message))}else o(new W(O.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(O.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{J("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ji(e,n){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=aC(),i=cC(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new hC({})),this.Ui(o.initMessageHeaders,n),nm()||rm()||mI()||im()||yI()||sm()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");J("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let l=!1,u=!1;const h=new jR({vi:d=>{u?J("Connection","Not sending because WebChannel is closed:",d):(l||(J("Connection","Opening WebChannel transport."),c.open(),l=!0),J("Connection","WebChannel sending:",d),c.send(d))},Vi:()=>c.close()}),f=(d,y,T)=>{d.listen(y,k=>{try{T(k)}catch(v){setTimeout(()=>{throw v},0)}})};return f(c,Eo.EventType.OPEN,()=>{u||J("Connection","WebChannel transport opened.")}),f(c,Eo.EventType.CLOSE,()=>{u||(u=!0,J("Connection","WebChannel transport closed"),h.$i())}),f(c,Eo.EventType.ERROR,d=>{u||(u=!0,vd("Connection","WebChannel transport errored:",d),h.$i(new W(O.UNAVAILABLE,"The operation could not be completed")))}),f(c,Eo.EventType.MESSAGE,d=>{var y;if(!u){const T=d.data[0];be(!!T);const k=T,v=k.error||((y=k[0])===null||y===void 0?void 0:y.error);if(v){J("Connection","WebChannel received error:",v);const m=v.status;let A=function(E){const b=De[E];if(b!==void 0)return rv(b)}(m),w=v.message;A===void 0&&(A=O.INTERNAL,w="Unknown error status: "+m+" with message "+v.message),u=!0,h.$i(new W(A,w)),c.close()}else J("Connection","WebChannel received:",T),h.Oi(T)}}),f(i,uC.STAT_EVENT,d=>{d.stat===gd.PROXY?J("Connection","Detected buffering proxy"):d.stat===gd.NOPROXY&&J("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return new tR(t,!0)}class mv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Qi=s,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),s=Math.max(0,Date.now()-this.Ji),r=Math.max(0,n-s);r>0&&J("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class yv{constructor(e,n,s,r,i,o,a){this.Oe=e,this.er=s,this.nr=r,this.sr=i,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new mv(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(s=>{this.ir===n&&this.Er(s)},s=>{e(()=>{const r=new W(O.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ir(r)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(s=>{n(()=>this.Ir(s))}),this.stream.onMessage(s=>{n(()=>this.onMessage(s))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qR extends yv{constructor(e,n,s,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i),this.N=r}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=rR(this.N,e),s=function(r){if(!("targetChange"in r))return ye.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ye.min():i.readTime?cn(i.readTime):ye.min()}(e);return this.listener.Rr(n,s)}br(e){const n={};n.database=Ll(this.N),n.addTarget=function(r,i){let o;const a=i.target;return o=Cl(a)?{documents:aR(r,a)}:{query:cR(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=cv(r,i.resumeToken):i.snapshotVersion.compareTo(ye.min())>0&&(o.readTime=ha(r,i.snapshotVersion.toTimestamp())),o}(this.N,e);const s=uR(this.N,e);s&&(n.labels=s),this.mr(n)}Pr(e){const n={};n.database=Ll(this.N),n.removeTarget=e,this.mr(n)}}class KR extends yv{constructor(e,n,s,r,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i),this.N=r,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=oR(e.writeResults,e.commitTime),s=cn(e.commitTime);return this.listener.Dr(s,n)}return be(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=Ll(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>iR(this.N,s))};this.mr(n)}}/**
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
 */class WR extends class{}{constructor(e,n,s){super(),this.credentials=e,this.sr=n,this.N=s,this.kr=!1}$r(){if(this.kr)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,s){return this.$r(),this.credentials.getToken().then(r=>this.sr.Li(e,n,s,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new W(O.UNKNOWN,r.toString())})}Ki(e,n,s){return this.$r(),this.credentials.getToken().then(r=>this.sr.Ki(e,n,s,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new W(O.UNKNOWN,r.toString())})}terminate(){this.kr=!0}}class GR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Vn(n),this.Mr=!1):J("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class zR{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(o=>{s.enqueueAndForget(async()=>{As(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=oe(a);c.Wr.add(4),await no(c),c.Hr.set("Unknown"),c.Wr.delete(4),await oc(c)}(this))})}),this.Hr=new GR(s,r)}}async function oc(t){if(As(t))for(const e of t.Gr)await e(!0)}async function no(t){for(const e of t.Gr)await e(!1)}function vv(t,e){const n=oe(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),gh(n)?ph(n):wr(n).hr()&&dh(n,e))}function _v(t,e){const n=oe(t),s=wr(n);n.Qr.delete(e),s.hr()&&wv(n,e),n.Qr.size===0&&(s.hr()?s.wr():As(n)&&n.Hr.set("Unknown"))}function dh(t,e){t.Jr.Y(e.targetId),wr(t).br(e)}function wv(t,e){t.Jr.Y(e),wr(t).Pr(e)}function ph(t){t.Jr=new JC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),wr(t).start(),t.Hr.Lr()}function gh(t){return As(t)&&!wr(t).ur()&&t.Qr.size>0}function As(t){return oe(t).Wr.size===0}function Ev(t){t.Jr=void 0}async function QR(t){t.Qr.forEach((e,n)=>{dh(t,e)})}async function YR(t,e){Ev(t),gh(t)?(t.Hr.qr(e),ph(t)):t.Hr.set("Unknown")}async function XR(t,e,n){if(t.Hr.set("Online"),e instanceof av&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Qr.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Qr.delete(o),s.Jr.removeTarget(o))}(t,e)}catch(s){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await fa(t,s)}else if(e instanceof Po?t.Jr.rt(e):e instanceof ov?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(ye.min()))try{const s=await gv(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Jr._t(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Qr.get(c);l&&r.Qr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.Qr.get(a);if(!c)return;r.Qr.set(a,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),wv(r,a);const l=new as(c.target,a,1,c.sequenceNumber);dh(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){J("RemoteStore","Failed to raise snapshot:",s),await fa(t,s)}}async function fa(t,e,n){if(!Zi(e))throw e;t.Wr.add(1),await no(t),t.Hr.set("Offline"),n||(n=()=>gv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await oc(t)})}function Tv(t,e){return e().catch(n=>fa(t,n,e))}async function ac(t){const e=oe(t),n=Bn(e);let s=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;JR(e);)try{const r=await kR(e.localStore,s);if(r===null){e.jr.length===0&&n.wr();break}s=r.batchId,ZR(e,r)}catch(r){await fa(e,r)}Iv(e)&&bv(e)}function JR(t){return As(t)&&t.jr.length<10}function ZR(t,e){t.jr.push(e);const n=Bn(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Iv(t){return As(t)&&!Bn(t).ur()&&t.jr.length>0}function bv(t){Bn(t).start()}async function eN(t){Bn(t).Nr()}async function tN(t){const e=Bn(t);for(const n of t.jr)e.Sr(n.mutations)}async function nN(t,e,n){const s=t.jr.shift(),r=lh.from(s,e,n);await Tv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ac(t)}async function sN(t,e){e&&Bn(t).Vr&&await async function(n,s){if(r=s.code,KC(r)&&r!==O.ABORTED){const i=n.jr.shift();Bn(n).dr(),await Tv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ac(n)}var r}(t,e),Iv(t)&&bv(t)}async function rN(t,e){const n=oe(t);e?(n.Wr.delete(2),await oc(n)):e||(n.Wr.add(2),await no(n),n.Hr.set("Unknown"))}function wr(t){return t.Yr||(t.Yr=function(e,n,s){const r=oe(e);return r.$r(),new qR(n,r.sr,r.credentials,r.N,s)}(t.datastore,t.asyncQueue,{Si:QR.bind(null,t),Ci:YR.bind(null,t),Rr:XR.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),gh(t)?ph(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Ev(t))})),t.Yr}function Bn(t){return t.Xr||(t.Xr=function(e,n,s){const r=oe(e);return r.$r(),new KR(n,r.sr,r.credentials,r.N,s)}(t.datastore,t.asyncQueue,{Si:eN.bind(null,t),Ci:sN.bind(null,t),Cr:tN.bind(null,t),Dr:nN.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await ac(t)):(await t.Xr.stop(),t.jr.length>0&&(J("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
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
 */class mh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new mh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yh(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Zi(t))return new W(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ks{constructor(e){this.comparator=e?(n,s)=>e(n,s)||te.comparator(n.key,s.key):(n,s)=>te.comparator(n.key,s.key),this.keyedMap=Ol(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new Ks(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ks)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ks;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class jd{constructor(){this.Zr=new tt(te.comparator)}track(e){const n=e.doc.key,s=this.Zr.get(n);s?e.type!==0&&s.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&s.type!==1?this.Zr=this.Zr.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Zr=this.Zr.remove(n):e.type===1&&s.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):ie():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,s)=>{e.push(s)}),e}}class rr{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new rr(e,n,Ks.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Za(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class iN{constructor(){this.no=void 0,this.listeners=[]}}class oN{constructor(){this.queries=new to(e=>zy(e),Za),this.onlineState="Unknown",this.so=new Set}}async function aN(t,e){const n=oe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new iN),r)try{i.no=await n.onListen(s)}catch(o){const a=yh(o,`Initialization of query '${Nl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.io(n.onlineState),i.no&&e.ro(i.no)&&vh(n)}async function cN(t,e){const n=oe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function lN(t,e){const n=oe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ro(r)&&(s=!0);o.no=r}}s&&vh(n)}function uN(t,e,n){const s=oe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function vh(t){t.so.forEach(e=>{e.next()})}class hN{constructor(e,n,s){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=s||{}}ro(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new rr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.fo||!s)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
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
 */class Sv{constructor(e){this.key=e}}class Av{constructor(e){this.key=e}}class fN{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=Ae(),this.mutatedKeys=Ae(),this.Io=Qy(e),this.Ao=new Ks(this.Io)}get Ro(){return this.po}bo(e,n){const s=n?n.Po:new jd,r=n?n.Ao:this.Ao;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=ko(this.query)&&r.size===this.query.limit?r.last():null,l=la(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=ec(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),T=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let k=!1;f&&d?f.data.isEqual(d.data)?y!==T&&(s.track({type:3,doc:d}),k=!0):this.vo(f,d)||(s.track({type:2,doc:d}),k=!0,(c&&this.Io(d,c)>0||l&&this.Io(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),k=!0):f&&!d&&(s.track({type:1,doc:f}),k=!0,(c||l)&&(a=!0)),k&&(d?(o=o.add(d),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),ko(this.query)||la(this.query))for(;o.size>this.query.limit;){const u=ko(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Ao:o,Po:s,Ln:a,mutatedKeys:i}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const i=e.Po.eo();i.sort((l,u)=>function(h,f){const d=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return d(h)-d(f)}(l.type,u.type)||this.Io(l.doc,u.doc)),this.Vo(s);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,c=a!==this.To;return this.To=a,i.length!==0||c?{snapshot:new rr(this.query,e.Ao,r,i,e.mutatedKeys,a===0,c,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new jd,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=Ae(),this.Ao.forEach(s=>{this.Co(s.key)&&(this.Eo=this.Eo.add(s.key))});const n=[];return e.forEach(s=>{this.Eo.has(s)||n.push(new Av(s))}),this.Eo.forEach(s=>{e.has(s)||n.push(new Sv(s))}),n}No(e){this.po=e.Gn,this.Eo=Ae();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return rr.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class dN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class pN{constructor(e){this.key=e,this.ko=!1}}class gN{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new to(a=>zy(a),Za),this.Fo=new Map,this.Mo=new Set,this.Lo=new tt(te.comparator),this.Bo=new Map,this.Uo=new hh,this.qo={},this.Ko=new Map,this.jo=sr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function mN(t,e){const n=AN(t);let s,r;const i=n.Oo.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.xo();else{const o=await OR(n.localStore,vs(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await yN(n,e,s,a==="current"),n.isPrimaryClient&&vv(n.remoteStore,o)}return r}async function yN(t,e,n,s){t.Wo=(u,h,f)=>async function(d,y,T,k){let v=y.view.bo(T);v.Ln&&(v=await Vd(d.localStore,y.query,!1).then(({documents:w})=>y.view.bo(w,v)));const m=k&&k.targetChanges.get(y.targetId),A=y.view.applyChanges(v,d.isPrimaryClient,m);return qd(d,y.targetId,A.Do),A.snapshot}(t,u,h,f);const r=await Vd(t.localStore,e,!0),i=new fN(e,r.Gn),o=i.bo(r.documents),a=Ji.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);qd(t,n,c.Do);const l=new dN(e,n,i);return t.Oo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function vN(t,e){const n=oe(t),s=n.Oo.get(e),r=n.Fo.get(s.targetId);if(r.length>1)return n.Fo.set(s.targetId,r.filter(i=>!Za(i,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await xl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),_v(n.remoteStore,s.targetId),Ml(n,s.targetId)}).catch(eo)):(Ml(n,s.targetId),await xl(n.localStore,s.targetId,!0))}async function _N(t,e,n){const s=CN(t);try{const r=await function(i,o){const a=oe(i),c=Et.now(),l=o.reduce((h,f)=>h.add(f.key),Ae());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(f=>{u=f;const d=[];for(const y of o){const T=jC(y,u.get(y.key));T!=null&&d.push(new _r(y.key,T,By(T.value.mapValue),Pn.exists(!0)))}return a.In.addMutationBatch(h,c,d,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.qo[i.currentUser.toKey()];c||(c=new tt(_e)),c=c.insert(o,a),i.qo[i.currentUser.toKey()]=c}(s,r.batchId,n),await so(s,r.changes),await ac(s.remoteStore)}catch(r){const i=yh(r,"Failed to persist write");n.reject(i)}}async function Cv(t,e){const n=oe(t);try{const s=await RR(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Bo.get(i);o&&(be(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ko=!0:r.modifiedDocuments.size>0?be(o.ko):r.removedDocuments.size>0&&(be(o.ko),o.ko=!1))}),await so(n,s,e)}catch(s){await eo(s)}}function Hd(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Oo.forEach((i,o)=>{const a=o.view.io(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=oe(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.io(o)&&(c=!0)}),c&&vh(a)}(s.eventManager,e),r.length&&s.$o.Rr(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wN(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Bo.get(e),i=r&&r.key;if(i){let o=new tt(te.comparator);o=o.insert(i,Ye.newNoDocument(i,ye.min()));const a=Ae().add(i),c=new rc(ye.min(),new Map,new Ge(_e),o,a);await Cv(s,c),s.Lo=s.Lo.remove(i),s.Bo.delete(e),_h(s)}else await xl(s.localStore,e,!1).then(()=>Ml(s,e,n)).catch(eo)}async function EN(t,e){const n=oe(t),s=e.batch.batchId;try{const r=await CR(n.localStore,e);Nv(n,s,null),Rv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await so(n,r)}catch(r){await eo(r)}}async function TN(t,e,n){const s=oe(t);try{const r=await function(i,o){const a=oe(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.In.lookupMutationBatch(c,o).next(u=>(be(u!==null),l=u.keys(),a.In.removeMutationBatch(c,u))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,l))})}(s.localStore,e);Nv(s,e,n),Rv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await so(s,r)}catch(r){await eo(r)}}function Rv(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function Nv(t,e,n){const s=oe(t);let r=s.qo[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.qo[s.currentUser.toKey()]=r}}function Ml(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Fo.get(e))t.Oo.delete(s),n&&t.$o.Go(s,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(s=>{t.Uo.containsKey(s)||kv(t,s)})}function kv(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(_v(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),_h(t))}function qd(t,e,n){for(const s of n)s instanceof Sv?(t.Uo.addReference(s.key,e),IN(t,s)):s instanceof Av?(J("SyncEngine","Document no longer in limbo: "+s.key),t.Uo.removeReference(s.key,e),t.Uo.containsKey(s.key)||kv(t,s.key)):ie()}function IN(t,e){const n=e.key,s=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(s)||(J("SyncEngine","New document in limbo: "+n),t.Mo.add(s),_h(t))}function _h(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new te(Re.fromString(e)),s=t.jo.next();t.Bo.set(s,new pN(n)),t.Lo=t.Lo.insert(n,s),vv(t.remoteStore,new as(vs(Hy(n.path)),s,2,sh.T))}}async function so(t,e,n){const s=oe(t),r=[],i=[],o=[];s.Oo.isEmpty()||(s.Oo.forEach((a,c)=>{o.push(s.Wo(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=uh.kn(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.$o.Rr(r),await async function(a,c){const l=oe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>B.forEach(c,h=>B.forEach(h.Nn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>B.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Zi(u))throw u;J("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Un.get(h),d=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(d);l.Un=l.Un.insert(h,y)}}}(s.localStore,i))}async function bN(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const s=await pv(n.localStore,e);n.currentUser=e,function(r,i){r.Ko.forEach(o=>{o.forEach(a=>{a.reject(new W(O.CANCELLED,i))})}),r.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await so(n,s.Wn)}}function SN(t,e){const n=oe(t),s=n.Bo.get(e);if(s&&s.ko)return Ae().add(s.key);{let r=Ae();const i=n.Fo.get(e);if(!i)return r;for(const o of i){const a=n.Oo.get(o);r=r.unionWith(a.view.Ro)}return r}}function AN(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wN.bind(null,e),e.$o.Rr=lN.bind(null,e.eventManager),e.$o.Go=uN.bind(null,e.eventManager),e}function CN(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TN.bind(null,e),e}class RN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=ic(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return AR(this.persistence,new bR,e.initialUser,this.N)}Jo(e){return new UR(fh.Ns,this.N)}Ho(e){return new VR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bN.bind(null,this.syncEngine),await rN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oN}createDatastore(e){const n=ic(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new HR(r));var r;return function(i,o,a){return new WR(i,o,a)}(e.credentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Hd(this.syncEngine,a,0),o=Bd.bt()?new Bd:new $R,new zR(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new gN(s,r,i,o,a,c);return l&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);J("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await no(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ON{constructor(e,n,s){this.credentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=Uy.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async r=>{J("FirestoreClient","Received user=",r.uid),await this.credentialListener(r),this.user=r})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const s=yh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function PN(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await pv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function DN(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LN(t);J("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>async function(i,o){const a=oe(i);a.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const c=As(a);a.Wr.add(3),await no(a),c&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await oc(a)}(e.remoteStore,r)),t.onlineComponents=e}async function LN(t){return t.offlineComponents||(J("FirestoreClient","Using default OfflineComponentProvider"),await PN(t,new RN)),t.offlineComponents}async function Ov(t){return t.onlineComponents||(J("FirestoreClient","Using default OnlineComponentProvider"),await DN(t,new NN)),t.onlineComponents}function xN(t){return Ov(t).then(e=>e.syncEngine)}async function MN(t){const e=await Ov(t),n=e.eventManager;return n.onListen=mN.bind(null,e.syncEngine),n.onUnlisten=vN.bind(null,e.syncEngine),n}function UN(t,e,n={}){const s=new On;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new kN({next:h=>{i.enqueueAndForget(()=>cN(r,u)),h.fromCache&&a.source==="server"?c.reject(new W(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new hN(o,l,{includeMetadataChanges:!0,fo:!0});return aN(r,u)}(await MN(t),t.asyncQueue,e,n,s)),s.promise}class FN{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ii&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Map;/**
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
 */function Pv(t,e,n){if(!n)throw new W(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VN(t,e,n,s){if(e===!0&&s===!0)throw new W(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wd(t){if(!te.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gd(t){if(te.isDocumentKey(t))throw new W(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function ir(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cc(t);throw new W(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function $N(t,e){if(e<=0)throw new W(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,VN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zd({}),this._settingsFrozen=!1,e instanceof Ii?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new W(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ii(s.options.projectId)}(e))}get app(){if(!this._app)throw new W(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zd(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new pC;switch(n.type){case"gapi":const s=n.client;return be(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new yC(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new W(O.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Kd.get(e);n&&(J("ComponentProvider","Removing Datastore"),Kd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Er{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Er(this.firestore,e,this._query)}}class Dn extends Er{constructor(e,n,s){super(e,n,Hy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new te(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function BN(t,e,...n){if(t=kt(t),Pv("collection","path",e),t instanceof wh){const s=Re.fromString(e,...n);return Gd(s),new Dn(t,null,s)}{if(!(t instanceof Tt||t instanceof Dn))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Re.fromString(e,...n));return Gd(s),new Dn(t.firestore,null,s)}}function jN(t,e,...n){if(t=kt(t),arguments.length===1&&(e=Uy.I()),Pv("doc","path",e),t instanceof wh){const s=Re.fromString(e,...n);return Wd(s),new Tt(t,null,new te(s))}{if(!(t instanceof Tt||t instanceof Dn))throw new W(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Re.fromString(e,...n));return Wd(s),new Tt(t.firestore,t instanceof Dn?t.converter:null,new te(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new mv(this,"async_queue_retry"),this.Rc=()=>{const n=Mc();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=Mc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new On;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Zi(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(s=>{this.Tc=s,this.Ec=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Vn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ec=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const r=mh.createAndSchedule(this,e,n,s,i=>this.Vc(i));return this.yc.push(r),r}bc(){this.Tc&&ie()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}class ro extends wh{constructor(e,n){super(e,n),this.type="firestore",this._queue=new HN,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Lv(this),this._firestoreClient.terminate()}}function qN(t=am()){return Eu(t,"firestore").getImmediate()}function Dv(t){return t._firestoreClient||Lv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Lv(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new FN(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ON(t._credentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Eh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this._byteString=e}static fromBase64String(e){try{return new or(et.fromBase64String(e))}catch(n){throw new W(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new or(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this._methodName=e}}/**
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
 */class Ih{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const KN=/^__.*__$/;class WN{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new sc(e,this.data,n,this.fieldTransforms)}}function xv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class bh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.N=s,this.ignoreUndefinedProperties=r,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new bh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$c({path:s,Fc:!1});return r.Mc(e),r}Lc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.$c({path:s,Fc:!1});return r.xc(),r}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return da(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(xv(this.kc)&&KN.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class GN{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=s||ic(e)}jc(e,n,s,r=!1){return new bh({kc:e,methodName:n,Kc:s,path:ht.emptyPath(),Fc:!1,qc:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Sh(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new GN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mv(t,e,n,s,r,i={}){const o=t.jc(i.merge||i.mergeFields?2:0,e,n,r);Vv("Data must be an object, but it was:",o,s);const a=Uv(s,o);let c,l;if(i.merge)c=new bl(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=QN(e,h,n);if(!o.contains(f))throw new W(O.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);XN(u,f)||u.push(f)}c=new bl(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new WN(new xt(a),c,l)}class Ah extends Th{_toFieldTransform(e){return new FC(e.path,new wi)}isEqual(e){return e instanceof Ah}}function zN(t,e,n,s=!1){return Ch(n,t.jc(s?4:3,e))}function Ch(t,e){if(Fv(t=kt(t)))return Vv("Unsupported field value:",e,t),Uv(t,e);if(t instanceof Th)return function(n,s){if(!xv(s.kc))throw s.Uc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Uc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ch(o,s.Bc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=kt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xC(s.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Et.fromDate(n);return{timestampValue:ha(s.N,r)}}if(n instanceof Et){const r=new Et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ha(s.N,r)}}if(n instanceof Ih)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof or)return{bytesValue:cv(s.N,n._byteString)};if(n instanceof Tt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.Uc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ch(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Uc(`Unsupported field value: ${cc(n)}`)}(t,e)}function Uv(t,e){const n={};return Fy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,(s,r)=>{const i=Ch(r,e.Oc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Fv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof Ih||t instanceof or||t instanceof Tt||t instanceof Th)}function Vv(t,e,n){if(!Fv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=cc(n);throw s==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+s)}}function QN(t,e,n){if((e=kt(e))instanceof Eh)return e._internalPath;if(typeof e=="string")return $v(t,e);throw da("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const YN=new RegExp("[~\\*/\\[\\]]");function $v(t,e,n){if(e.search(YN)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Eh(...e.split("."))._internalPath}catch{throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function da(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new W(O.INVALID_ARGUMENT,a+t+c)}function XN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JN extends Bv{data(){return super.data()}}function Rh(t,e){return typeof e=="string"?$v(t,e):e instanceof Eh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ZN extends Bv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Do(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Rh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Do extends ZN{data(e={}){return super.data(e)}}class ek{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Io(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Do(this._firestore,this._userDataWriter,s.key,s,new Io(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Do(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Io(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Do(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Io(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:tk(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){if(la(t)&&t.explicitOrderBy.length===0)throw new W(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jv{}function Sk(t,...e){for(const n of e)t=n._apply(t);return t}class sk extends jv{constructor(e,n,s){super(),this.Gc=e,this.zc=n,this.Hc=s,this.type="where"}_apply(e){const n=Sh(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new W(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){Yd(u,l);const d=[];for(const y of u)d.push(Qd(a,r,y));h={arrayValue:{values:d}}}else h=Qd(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Yd(u,l),h=zN(o,i,u,l==="in"||l==="not-in");const f=at.create(c,l,h);return function(d,y){if(y.v()){const k=Ky(d);if(k!==null&&!k.isEqual(y.field))throw new W(O.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${k.toString()}' and '${y.field.toString()}'`);const v=qy(d);v!==null&&ik(d,y.field,v)}const T=function(k,v){for(const m of k.filters)if(v.indexOf(m.op)>=0)return m.op;return null}(d,function(k){switch(k){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(T!==null)throw T===y.op?new W(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new W(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${T.toString()}' filters.`)}(r,f),f}(e._query,"where",n,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new Er(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Xi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function Ak(t,e,n){const s=e,r=Rh("where",t);return new sk(r,s,n)}class rk extends jv{constructor(e,n,s){super(),this.type=e,this.Yc=n,this.Xc=s}_apply(e){return new Er(e.firestore,e.converter,Gy(e._query,this.Yc,this.Xc))}}function Ck(t){return $N("limit",t),new rk("limit",t,"F")}function Qd(t,e,n){if(typeof(n=kt(n))=="string"){if(n==="")throw new W(O.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wy(e)&&n.indexOf("/")!==-1)throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Re.fromString(n));if(!te.isDocumentKey(s))throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ed(t,new te(s))}if(n instanceof Tt)return Ed(t,n._key);throw new W(O.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${cc(n)}.`)}function Yd(t,e){if(!Array.isArray(t)||t.length===0)throw new W(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new W(O.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ik(t,e,n){if(!n.isEqual(e))throw new W(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{convertValue(e,n="none"){switch(ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){const s={};return yr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ih(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=$y(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(yi(e));default:return null}}convertTimestamp(e){const n=$n(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Re.fromString(e);be(fv(s));const r=new Ii(s.get(1),s.get(3)),i=new te(s.popFirst(5));return r.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class ak extends ok{constructor(e){super(),this.firestore=e}convertBytes(e){return new or(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function Rk(t){t=ir(t,Er);const e=ir(t.firestore,ro),n=Dv(e),s=new ak(e);return nk(t._query),UN(n,t._query).then(r=>new ek(e,s,t,r))}function Nk(t,e,n){t=ir(t,Tt);const s=ir(t.firestore,ro),r=Hv(t.converter,e,n);return Nh(s,[Mv(Sh(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Pn.none())])}function kk(t){return Nh(ir(t.firestore,ro),[new sv(t._key,Pn.none())])}function ck(t,e){const n=ir(t.firestore,ro),s=jN(t),r=Hv(t.converter,e);return Nh(n,[Mv(Sh(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Pn.exists(!1))]).then(()=>s)}function Nh(t,e){return function(n,s){const r=new On;return n.asyncQueue.enqueueAndForget(async()=>_N(await xN(n),s,r)),r.promise}(Dv(t),e)}function Ok(){return new Ah("serverTimestamp")}(function(t,e=!0){(function(n){mr=n})(Li),ai(new Js("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new ro(r,new gC(n.getProvider("auth-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),kn(md,"3.3.0",t),kn(md,"3.3.0","esm2017")})();const lk={apiKey:"AIzaSyATA2qOqdgy3-jop8SsDI6lM0cuUs2EKaQ",authDomain:"cosmonav-da72f.firebaseapp.com",projectId:"cosmonav-da72f",storageBucket:"cosmonav-da72f.appspot.com",messagingSenderId:"152795157329",appId:"1:152795157329:web:fc1886f3a1e91e977a3970",measurementId:"G-073151V246"},uk=ub(lk),qt=Mm(uk),hk=qN(),fk=()=>Hn(()=>import("./HomeView-ff56f489.js"),["assets/HomeView-ff56f489.js","assets/HomeView-9e2debc1.css"]),dk=()=>Hn(()=>import("./DailyPic-f2e6368c.js"),["assets/DailyPic-f2e6368c.js","assets/utils-6d05abca.js","assets/utils-03cbe7a5.css","assets/DailyPic-a5a2f60d.css"]),pk=()=>Hn(()=>import("./CurrentLocation-68e577c1.js"),["assets/CurrentLocation-68e577c1.js","assets/utils-6d05abca.js","assets/utils-03cbe7a5.css","assets/CurrentLocation-1600ffe5.css"]),gk=()=>Hn(()=>import("./EarthImage-37e4ff93.js"),["assets/EarthImage-37e4ff93.js","assets/utils-6d05abca.js","assets/utils-03cbe7a5.css","assets/EarthImage-deb0e98e.css"]),mk=()=>Hn(()=>import("./Login-51f5fa2e.js"),["assets/Login-51f5fa2e.js","assets/Login-052942fc.css"]),yk=()=>Hn(()=>import("./Register-4059396c.js"),["assets/Register-4059396c.js","assets/Register-8d40b782.css"]),vk=()=>Hn(()=>import("./Profile-9503b7e1.js"),["assets/Profile-9503b7e1.js","assets/Profile-28f7d64b.css"]),_k=()=>Hn(()=>import("./FavoriteImages-300a02d7.js"),["assets/FavoriteImages-300a02d7.js","assets/FavoriteImages-bb6efdc3.css"]),bn=qT({history:aT("/cosmo-nav-live"),routes:[{path:"/",name:"home",component:fk},{path:"/picture-of-the-day",name:"dailyPic",component:dk},{path:"/current-location",name:"currentLocation",component:pk},{path:"/earth-image",name:"earthImage",component:gk},{path:"/login",name:"login",component:mk},{path:"/register",name:"register",component:yk},{path:"/profile",name:"profile",component:vk,meta:{requiresAuth:!0}},{path:"/favorite-images",name:"favoriteImages",component:_k,meta:{requiresAuth:!0}}]});bn.beforeEach(async(t,e,n)=>{if(t.path==="/login"&&qt.currentUser){n("/");return}if(t.matched.some(s=>s.meta.requiresAuth)&&!qt.currentUser){n("login");return}n()});var wk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ek(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function s(){if(this instanceof s){var r=[null];r.push.apply(r,arguments);var i=Function.bind.apply(e,r);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var r=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return t[s]}})}),n}var qv={exports:{}};const Tk=Ek(y0);(function(t,e){(function(n,s){t.exports=s(Tk)})(wk,n=>(()=>{var s={831:(a,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.default=(l,u)=>{const h=l.__vccOpts||l;for(const[f,d]of u)h[f]=d;return h}},976:a=>{a.exports=n}},r={};function i(a){var c=r[a];if(c!==void 0)return c.exports;var l=r[a]={exports:{}};return s[a](l,l.exports,i),l.exports}i.d=(a,c)=>{for(var l in c)i.o(c,l)&&!i.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:c[l]})},i.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),i.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>v,ToastPlugin:()=>A,ToastPositions:()=>d,default:()=>w,useToast:()=>m});var a=i(976);const c=(0,a.createElementVNode)("div",{class:"v-toast__icon"},null,-1),l=["innerHTML"];function u(E){var b;E.remove!==void 0?E.remove():(b=E.parentNode)===null||b===void 0||b.removeChild(E)}function h(E,b,N){let C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const U=(0,a.h)(E,b,C),V=document.createElement("div");return V.classList.add("v-toast--pending"),N.appendChild(V),(0,a.render)(U,V),U.component}class f{constructor(b,N){this.startedAt=Date.now(),this.callback=b,this.delay=N,this.timer=setTimeout(b,N)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const d=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});var y;const T={all:y=y||new Map,on:function(E,b){var N=y.get(E);N?N.push(b):y.set(E,[b])},off:function(E,b){var N=y.get(E);N&&(b?N.splice(N.indexOf(b)>>>0,1):y.set(E,[]))},emit:function(E,b){var N=y.get(E);N&&N.slice().map(function(C){C(b)}),(N=y.get("*"))&&N.slice().map(function(C){C(E,b)})}},k=(0,a.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:d.BOTTOM_RIGHT,validator:E=>Object.values(d).includes(E)},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data:()=>({isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}),beforeMount(){this.setupContainer()},mounted(){this.showNotice(),T.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const E=document.body;E.appendChild(this.parentTop),E.appendChild(this.parentBottom)},shouldQueue(){return!!this.queue&&(this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0)},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const E=this.$refs.root;(0,a.render)(null,E),u(E)},150)},showNotice(){if(this.shouldQueue())return void(this.queueTimer=setTimeout(this.showNotice,250));const E=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),u(E),this.isActive=!0,this.duration&&(this.timer=new f(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(E){this.pauseOnHover&&this.timer&&(E?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case d.TOP:case d.TOP_RIGHT:case d.TOP_LEFT:return this.parentTop;case d.BOTTOM:case d.BOTTOM_RIGHT:case d.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case d.TOP:case d.TOP_RIGHT:case d.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case d.BOTTOM:case d.BOTTOM_RIGHT:case d.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){T.off("toast-clear",this.dismiss)}}),v=(0,i(831).default)(k,[["render",function(E,b,N,C,U,V){return(0,a.openBlock)(),(0,a.createBlock)(a.Transition,{"enter-active-class":E.transition.enter,"leave-active-class":E.transition.leave},{default:(0,a.withCtx)(()=>[(0,a.withDirectives)((0,a.createElementVNode)("div",{ref:"root",role:"alert",class:(0,a.normalizeClass)(["v-toast__item",["v-toast__item--".concat(E.type),"v-toast__item--".concat(E.position)]]),onMouseover:b[0]||(b[0]=Q=>E.toggleTimer(!0)),onMouseleave:b[1]||(b[1]=Q=>E.toggleTimer(!1)),onClick:b[2]||(b[2]=function(){return E.whenClicked&&E.whenClicked(...arguments)})},[c,(0,a.createElementVNode)("p",{class:"v-toast__text",innerHTML:E.message},null,8,l)],34),[[a.vShow,E.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}]]),m=function(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(b){let N=null;typeof b=="string"&&(N=b);const C={message:N},U=Object.assign({},C,E,b);return{dismiss:h(v,U,document.body).ctx.dismiss}},clear(){T.emit("toast-clear")},success(b){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:b,type:"success"},N))},error(b){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:b,type:"error"},N))},info(b){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:b,type:"info"},N))},warning(b){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:b,type:"warning"},N))},default(b){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:b,type:"default"},N))}}},A={install:function(E){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=m(b);E.config.globalProperties.$toast=N,E.provide("$toast",N)}},w=A})(),o})())})(qv);var Ik=qv.exports;const St=Ik.useToast(),wn=document.querySelector("body"),bk=j0({state:{user:null},mutations:{SET_USER(t,e){t.user=e},CLEAR_USER(t){t.user=null}},actions:{async login({commit:t},e){const{email:n,password:s}=e;wn.classList.add("loading");try{await Yb(qt,n,s),wn.classList.remove("loading")}catch(r){switch(r.code){case"auth/user-not-found":console.log("User not found"),St.error("User not found",{position:"bottom-right"});break;case"auth/wrong-password":console.log("Wrong password"),St.error("Wrong password",{position:"bottom-right"});break;default:console.log("Something went wrong"),St.error("Something went wrong",{position:"bottom-right"})}wn.classList.remove("loading");return}t("SET_USER",qt.currentUser),St.success("Successfully logged in!",{position:"bottom-right"}),bn.push("/")},async loginWithGoogle({commit:t}){wn.classList.add("loading");try{const e=Mm(),n=new nn,r=(await ES(e,n)).user;t("SET_USER",r),St.success("Successfully logged in!",{position:"bottom-right"})}catch(e){console.error("Error signing in with Google:",e),St.error("Error signing in with Google: "+e,{position:"bottom-right"})}wn.classList.remove("loading")},async register({commit:t},e){const{email:n,password:s,age:r,address:i}=e;wn.classList.add("loading");try{await Qb(qt,n,s),wn.classList.remove("loading"),St.success("Successfully registered!",{position:"bottom-right"})}catch(c){switch(c.code){case"auth/email-already-in-use":console.log("Email already in use"),St.error("Email already in use",{position:"bottom-right"});break;case"auth/invalid-email":console.log("Invalid email"),St.error("Invalid email",{position:"bottom-right"});break;case"auth/opeartion-not-allowed":console.log("Operation not allowed"),St.error("Operation not allowed",{position:"bottom-right"});break;case"auth/weak-password":console.log("Weak password"),St.error("Weak password",{position:"bottom-right"});break;default:console.log("Something went wrong"),St.error("Something went wrong",{position:"bottom-right"})}wn.classList.remove("loading");return}const a={uid:qt.currentUser.uid,age:r,address:i};try{await ck(BN(hk,"usersCollection"),a)}catch(c){console.log(c)}t("SET_USER",qt.currentUser),bn.push("/")},async logout({commit:t}){await Xb(qt),t("CLEAR_USER"),bn.push("/login")},fetchUser({commit:t}){qt.onAuthStateChanged(async e=>{e===null?t("CLEAR_USER"):(t("SET_USER",e),await bn.isReady(),bn.currentRoute.value.path==="/login"&&bn.push("/"))})}}});let Cr;window.nasa_api_key="eRMoQ6l5gXrhya9VGch0aLCRiTx1jioiSd7jFByI";qt.onAuthStateChanged(()=>{var t;Cr||(Cr=Pg(cI),Cr.use(bk),Cr.use(bn),Cr.mount("#app"),(t=document.querySelector("body.loading"))==null||t.classList.remove("loading"))});export{u0 as $,Es as A,Ak as B,Ue as C,Ai as D,Da as E,Ve as F,Ra as G,Fr as H,Ta as I,Na as J,xp as K,_t as L,Sk as M,Ow as N,ii as O,Hw as P,X_ as Q,ka as R,Pw as S,Dw as T,r_ as U,rg as V,ig as W,Nw as X,pE as Y,f0 as Z,oI as _,it as a,uu as a0,Tw as a1,Cg as a2,np as a3,u_ as a4,jo as a5,jN as a6,Nk as a7,Mn as a8,he as b,Br as c,Is as d,Sp as e,Ct as f,ss as g,Ut as h,Oi as i,ke as j,Or as k,BN as l,hk as m,Ci as n,Wt as o,bp as p,Ck as q,$p as r,Rk as s,c_ as t,Mg as u,Ik as v,At as w,ck as x,kk as y,Ok as z};
