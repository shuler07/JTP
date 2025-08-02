(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Od={exports:{}},pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function kS(){if(C_)return pl;C_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return pl.Fragment=t,pl.jsx=n,pl.jsxs=n,pl}var D_;function US(){return D_||(D_=1,Od.exports=kS()),Od.exports}var RO=US();const LS=()=>{};var O_={};/**
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
 */const _E=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[n++]=l:l<2048?(t[n++]=l>>6|192,t[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=l>>18|240,t[n++]=l>>12&63|128,t[n++]=l>>6&63|128,t[n++]=l&63|128):(t[n++]=l>>12|224,t[n++]=l>>6&63|128,t[n++]=l&63|128)}return t},xS=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[n++];t[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[n++],d=r[n++],p=r[n++],g=((l&7)<<18|(c&63)<<12|(d&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const c=r[n++],d=r[n++];t[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|d&63)}}return t.join("")},vE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],d=l+1<r.length,p=d?r[l+1]:0,g=l+2<r.length,y=g?r[l+2]:0,A=c>>2,C=(c&3)<<4|p>>4;let I=(p&15)<<2|y>>6,F=y&63;g||(F=64,d||(I=64)),s.push(n[A],n[C],n[I],n[F])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(_E(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):xS(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=n[r.charAt(l++)],p=l<r.length?n[r.charAt(l)]:0;++l;const y=l<r.length?n[r.charAt(l)]:64;++l;const C=l<r.length?n[r.charAt(l)]:64;if(++l,c==null||p==null||y==null||C==null)throw new zS;const I=c<<2|p>>4;if(s.push(I),y!==64){const F=p<<4&240|y>>2;if(s.push(F),C!==64){const $=y<<6&192|C;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class zS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BS=function(r){const t=_E(r);return vE.encodeByteArray(t,!0)},Lc=function(r){return BS(r).replace(/\./g,"")},EE=function(r){try{return vE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function qS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HS=()=>qS().__FIREBASE_DEFAULTS__,jS=()=>{if(typeof process>"u"||typeof O_>"u")return;const r=O_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},FS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&EE(r[1]);return t&&JSON.parse(t)},ah=()=>{try{return LS()||HS()||jS()||FS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},TE=r=>ah()?.emulatorHosts?.[r],GS=r=>{const t=TE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},AE=()=>ah()?.config,SE=r=>ah()?.[`_${r}`];/**
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
 */class KS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wE(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function QS(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Lc(JSON.stringify(n)),Lc(JSON.stringify(d)),""].join(".")}const Sl={};function YS(){const r={prod:[],emulator:[]};for(const t of Object.keys(Sl))Sl[t]?r.emulator.push(t):r.prod.push(t);return r}function XS(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let N_=!1;function bE(r,t){if(typeof window>"u"||typeof document>"u"||!Ja(window.location.host)||Sl[r]===t||Sl[r]||N_)return;Sl[r]=t;function n(I){return`__firebase__banner__${I}`}const s="__firebase__banner",c=YS().prod.length>0;function d(){const I=document.getElementById(s);I&&I.remove()}function p(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,F){I.setAttribute("width","24"),I.setAttribute("id",F),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{N_=!0,d()},I}function A(I,F){I.setAttribute("id",F),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function C(){const I=XS(s),F=n("text"),$=document.getElementById(F)||document.createElement("span"),nt=n("learnmore"),Z=document.getElementById(nt)||document.createElement("a"),Et=n("preprendIcon"),gt=document.getElementById(Et)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ct=I.element;p(ct),A(Z,nt);const qt=y();g(gt,Et),ct.append(gt,$,Z,qt),document.body.appendChild(ct)}c?($.innerText="Preview backend disconnected.",gt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(gt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $S(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function ZS(){const r=ah()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function JS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function t1(){const r=Xe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function e1(){return!ZS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function IE(){try{return typeof indexedDB=="object"}catch{return!1}}function CE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{t(l.error?.message||"")}}catch(n){t(n)}})}function n1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const i1="FirebaseError";class jn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=i1,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},l=`${this.service}/${t}`,c=this.errors[t],d=c?r1(c,s):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new jn(l,p,s)}}function r1(r,t){return r.replace(s1,(n,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const s1=/\{\$([^}]+)}/g;function a1(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function xr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const l of n){if(!s.includes(l))return!1;const c=r[l],d=t[l];if(M_(c)&&M_(d)){if(!xr(c,d))return!1}else if(c!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function M_(r){return r!==null&&typeof r=="object"}/**
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
 */function ql(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function yl(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,c]=s.split("=");t[decodeURIComponent(l)]=decodeURIComponent(c)}}),t}function _l(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function o1(r,t){const n=new l1(r,t);return n.subscribe.bind(n)}class l1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let l;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");u1(t,["next","error","complete"])?l=t:l={next:t,error:n,complete:s},l.next===void 0&&(l.next=Nd),l.error===void 0&&(l.error=Nd),l.complete===void 0&&(l.complete=Nd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u1(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Nd(){}/**
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
 */const c1=1e3,h1=2,f1=14400*1e3,d1=.5;function V_(r,t=c1,n=h1){const s=t*Math.pow(n,r),l=Math.round(d1*s*(Math.random()-.5)*2);return Math.min(f1,s+l)}/**
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
 */function Re(r){return r&&r._delegate?r._delegate:r}class qn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ns="[DEFAULT]";/**
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
 */class m1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new KS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(g1(t))try{this.getOrInitializeService({instanceIdentifier:Ns})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(t=Ns){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ns){return this.instances.has(t)}getOptions(t=Ns){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&d.resolve(l)}return l}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(t),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&t(c,s),()=>{l.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:p1(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ns){return this.component?this.component.multipleInstances?t:Ns:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p1(r){return r===Ns?void 0:r}function g1(r){return r.instantiationMode==="EAGER"}/**
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
 */class y1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new m1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ct;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ct||(Ct={}));const _1={debug:Ct.DEBUG,verbose:Ct.VERBOSE,info:Ct.INFO,warn:Ct.WARN,error:Ct.ERROR,silent:Ct.SILENT},v1=Ct.INFO,E1={[Ct.DEBUG]:"log",[Ct.VERBOSE]:"log",[Ct.INFO]:"info",[Ct.WARN]:"warn",[Ct.ERROR]:"error"},T1=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=E1[t];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class oh{constructor(t){this.name=t,this._logLevel=v1,this._logHandler=T1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ct.DEBUG,...t),this._logHandler(this,Ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ct.VERBOSE,...t),this._logHandler(this,Ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ct.INFO,...t),this._logHandler(this,Ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ct.WARN,...t),this._logHandler(this,Ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ct.ERROR,...t),this._logHandler(this,Ct.ERROR,...t)}}const A1=(r,t)=>t.some(n=>r instanceof n);let P_,k_;function S1(){return P_||(P_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w1(){return k_||(k_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DE=new WeakMap,Zd=new WeakMap,OE=new WeakMap,Md=new WeakMap,Sm=new WeakMap;function b1(r){const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",d)},c=()=>{n(Pr(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",d)});return t.then(n=>{n instanceof IDBCursor&&DE.set(n,r)}).catch(()=>{}),Sm.set(t,r),t}function R1(r){if(Zd.has(r))return;const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",d),r.removeEventListener("abort",d)},c=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",d),r.addEventListener("abort",d)});Zd.set(r,t)}let Wd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Zd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||OE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function I1(r){Wd=r(Wd)}function C1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Vd(this),t,...n);return OE.set(s,t.sort?t.sort():[t]),Pr(s)}:w1().includes(r)?function(...t){return r.apply(Vd(this),t),Pr(DE.get(this))}:function(...t){return Pr(r.apply(Vd(this),t))}}function D1(r){return typeof r=="function"?C1(r):(r instanceof IDBTransaction&&R1(r),A1(r,S1())?new Proxy(r,Wd):r)}function Pr(r){if(r instanceof IDBRequest)return b1(r);if(Md.has(r))return Md.get(r);const t=D1(r);return t!==r&&(Md.set(r,t),Sm.set(t,r)),t}const Vd=r=>Sm.get(r);function NE(r,t,{blocked:n,upgrade:s,blocking:l,terminated:c}={}){const d=indexedDB.open(r,t),p=Pr(d);return s&&d.addEventListener("upgradeneeded",g=>{s(Pr(d.result),g.oldVersion,g.newVersion,Pr(d.transaction),g)}),n&&d.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{c&&g.addEventListener("close",()=>c()),l&&g.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const O1=["get","getKey","getAll","getAllKeys","count"],N1=["put","add","delete","clear"],Pd=new Map;function U_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Pd.get(t))return Pd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,l=N1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||O1.includes(n)))return;const c=async function(d,...p){const g=this.transaction(d,l?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),l&&g.done]))[0]};return Pd.set(t,c),c}I1(r=>({...r,get:(t,n,s)=>U_(t,n)||r.get(t,n,s),has:(t,n)=>!!U_(t,n)||r.has(t,n)}));/**
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
 */class M1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function V1(r){return r.getComponent()?.type==="VERSION"}const Jd="@firebase/app",L_="0.14.0";/**
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
 */const Qi=new oh("@firebase/app"),P1="@firebase/app-compat",k1="@firebase/analytics-compat",U1="@firebase/analytics",L1="@firebase/app-check-compat",x1="@firebase/app-check",z1="@firebase/auth",B1="@firebase/auth-compat",q1="@firebase/database",H1="@firebase/data-connect",j1="@firebase/database-compat",F1="@firebase/functions",G1="@firebase/functions-compat",K1="@firebase/installations",Q1="@firebase/installations-compat",Y1="@firebase/messaging",X1="@firebase/messaging-compat",$1="@firebase/performance",Z1="@firebase/performance-compat",W1="@firebase/remote-config",J1="@firebase/remote-config-compat",tw="@firebase/storage",ew="@firebase/storage-compat",nw="@firebase/firestore",iw="@firebase/ai",rw="@firebase/firestore-compat",sw="firebase",aw="12.0.0";/**
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
 */const tm="[DEFAULT]",ow={[Jd]:"fire-core",[P1]:"fire-core-compat",[U1]:"fire-analytics",[k1]:"fire-analytics-compat",[x1]:"fire-app-check",[L1]:"fire-app-check-compat",[z1]:"fire-auth",[B1]:"fire-auth-compat",[q1]:"fire-rtdb",[H1]:"fire-data-connect",[j1]:"fire-rtdb-compat",[F1]:"fire-fn",[G1]:"fire-fn-compat",[K1]:"fire-iid",[Q1]:"fire-iid-compat",[Y1]:"fire-fcm",[X1]:"fire-fcm-compat",[$1]:"fire-perf",[Z1]:"fire-perf-compat",[W1]:"fire-rc",[J1]:"fire-rc-compat",[tw]:"fire-gcs",[ew]:"fire-gcs-compat",[nw]:"fire-fst",[rw]:"fire-fst-compat",[iw]:"fire-vertex","fire-js":"fire-js",[sw]:"fire-js-all"};/**
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
 */const xc=new Map,lw=new Map,em=new Map;function x_(r,t){try{r.container.addComponent(t)}catch(n){Qi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function pi(r){const t=r.name;if(em.has(t))return Qi.debug(`There were multiple attempts to register component ${t}.`),!1;em.set(t,r);for(const n of xc.values())x_(n,r);for(const n of lw.values())x_(n,r);return!0}function js(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Nn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const uw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new Hs("app","Firebase",uw);/**
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
 */class cw{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
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
 */const to=aw;function ME(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:tm,automaticDataCollectionEnabled:!0,...t},l=s.name;if(typeof l!="string"||!l)throw kr.create("bad-app-name",{appName:String(l)});if(n||(n=AE()),!n)throw kr.create("no-options");const c=xc.get(l);if(c){if(xr(n,c.options)&&xr(s,c.config))return c;throw kr.create("duplicate-app",{appName:l})}const d=new y1(l);for(const g of em.values())d.addComponent(g);const p=new cw(n,s,d);return xc.set(l,p),p}function wm(r=tm){const t=xc.get(r);if(!t&&r===tm&&AE())return ME();if(!t)throw kr.create("no-app",{appName:r});return t}function Vn(r,t,n){let s=ow[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const d=[`Unable to register library "${s}" with version "${t}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qi.warn(d.join(" "));return}pi(new qn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const hw="firebase-heartbeat-database",fw=1,Nl="firebase-heartbeat-store";let kd=null;function VE(){return kd||(kd=NE(hw,fw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Nl)}catch(n){console.warn(n)}}}}).catch(r=>{throw kr.create("idb-open",{originalErrorMessage:r.message})})),kd}async function dw(r){try{const n=(await VE()).transaction(Nl),s=await n.objectStore(Nl).get(PE(r));return await n.done,s}catch(t){if(t instanceof jn)Qi.warn(t.message);else{const n=kr.create("idb-get",{originalErrorMessage:t?.message});Qi.warn(n.message)}}}async function z_(r,t){try{const s=(await VE()).transaction(Nl,"readwrite");await s.objectStore(Nl).put(t,PE(r)),await s.done}catch(n){if(n instanceof jn)Qi.warn(n.message);else{const s=kr.create("idb-set",{originalErrorMessage:n?.message});Qi.warn(s.message)}}}function PE(r){return`${r.name}!${r.options.appId}`}/**
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
 */const mw=1024,pw=30;class gw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _w(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=B_();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>pw){const l=vw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Qi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=B_(),{heartbeatsToSend:n,unsentEntries:s}=yw(this._heartbeatsCache.heartbeats),l=Lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Qi.warn(t),""}}}function B_(){return new Date().toISOString().substring(0,10)}function yw(r,t=mw){const n=[];let s=r.slice();for(const l of r){const c=n.find(d=>d.agent===l.agent);if(c){if(c.dates.push(l.date),q_(n)>t){c.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),q_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _w{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IE()?CE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dw(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return z_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return z_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function q_(r){return Lc(JSON.stringify({version:2,heartbeats:r})).length}function vw(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
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
 */function Ew(r){pi(new qn("platform-logger",t=>new M1(t),"PRIVATE")),pi(new qn("heartbeat",t=>new gw(t),"PRIVATE")),Vn(Jd,L_,r),Vn(Jd,L_,"esm2020"),Vn("fire-js","")}Ew("");var Tw="firebase",Aw="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(Tw,Aw,"app");const kE="@firebase/installations",bm="0.6.19";/**
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
 */const UE=1e4,LE=`w:${bm}`,xE="FIS_v2",Sw="https://firebaseinstallations.googleapis.com/v1",ww=3600*1e3,bw="installations",Rw="Installations";/**
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
 */const Iw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ks=new Hs(bw,Rw,Iw);function zE(r){return r instanceof jn&&r.code.includes("request-failed")}/**
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
 */function BE({projectId:r}){return`${Sw}/projects/${r}/installations`}function qE(r){return{token:r.token,requestStatus:2,expiresIn:Dw(r.expiresIn),creationTime:Date.now()}}async function HE(r,t){const s=(await t.json()).error;return ks.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function jE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function Cw(r,{refreshToken:t}){const n=jE(r);return n.append("Authorization",Ow(t)),n}async function FE(r){const t=await r();return t.status>=500&&t.status<600?r():t}function Dw(r){return Number(r.replace("s","000"))}function Ow(r){return`${xE} ${r}`}/**
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
 */async function Nw({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=BE(r),l=jE(r),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const d={fid:n,authVersion:xE,appId:r.appId,sdkVersion:LE},p={method:"POST",headers:l,body:JSON.stringify(d)},g=await FE(()=>fetch(s,p));if(g.ok){const y=await g.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:qE(y.authToken)}}else throw await HE("Create Installation",g)}/**
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
 */function GE(r){return new Promise(t=>{setTimeout(t,r)})}/**
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
 */function Mw(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Vw=/^[cdef][\w-]{21}$/,nm="";function Pw(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=kw(r);return Vw.test(n)?n:nm}catch{return nm}}function kw(r){return Mw(r).substr(0,22)}/**
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
 */function lh(r){return`${r.appName}!${r.appId}`}/**
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
 */const KE=new Map;function QE(r,t){const n=lh(r);YE(n,t),Uw(n,t)}function YE(r,t){const n=KE.get(r);if(n)for(const s of n)s(t)}function Uw(r,t){const n=Lw();n&&n.postMessage({key:r,fid:t}),xw()}let Ms=null;function Lw(){return!Ms&&"BroadcastChannel"in self&&(Ms=new BroadcastChannel("[Firebase] FID Change"),Ms.onmessage=r=>{YE(r.data.key,r.data.fid)}),Ms}function xw(){KE.size===0&&Ms&&(Ms.close(),Ms=null)}/**
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
 */const zw="firebase-installations-database",Bw=1,Us="firebase-installations-store";let Ud=null;function Rm(){return Ud||(Ud=NE(zw,Bw,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Us)}}})),Ud}async function zc(r,t){const n=lh(r),l=(await Rm()).transaction(Us,"readwrite"),c=l.objectStore(Us),d=await c.get(n);return await c.put(t,n),await l.done,(!d||d.fid!==t.fid)&&QE(r,t.fid),t}async function XE(r){const t=lh(r),s=(await Rm()).transaction(Us,"readwrite");await s.objectStore(Us).delete(t),await s.done}async function uh(r,t){const n=lh(r),l=(await Rm()).transaction(Us,"readwrite"),c=l.objectStore(Us),d=await c.get(n),p=t(d);return p===void 0?await c.delete(n):await c.put(p,n),await l.done,p&&(!d||d.fid!==p.fid)&&QE(r,p.fid),p}/**
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
 */async function Im(r){let t;const n=await uh(r.appConfig,s=>{const l=qw(s),c=Hw(r,l);return t=c.registrationPromise,c.installationEntry});return n.fid===nm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function qw(r){const t=r||{fid:Pw(),registrationStatus:0};return $E(t)}function Hw(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(ks.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=jw(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Fw(r)}:{installationEntry:t}}async function jw(r,t){try{const n=await Nw(r,t);return zc(r.appConfig,n)}catch(n){throw zE(n)&&n.customData.serverCode===409?await XE(r.appConfig):await zc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Fw(r){let t=await H_(r.appConfig);for(;t.registrationStatus===1;)await GE(100),t=await H_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Im(r);return s||n}return t}function H_(r){return uh(r,t=>{if(!t)throw ks.create("installation-not-found");return $E(t)})}function $E(r){return Gw(r)?{fid:r.fid,registrationStatus:0}:r}function Gw(r){return r.registrationStatus===1&&r.registrationTime+UE<Date.now()}/**
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
 */async function Kw({appConfig:r,heartbeatServiceProvider:t},n){const s=Qw(r,n),l=Cw(r,n),c=t.getImmediate({optional:!0});if(c){const y=await c.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const d={installation:{sdkVersion:LE,appId:r.appId}},p={method:"POST",headers:l,body:JSON.stringify(d)},g=await FE(()=>fetch(s,p));if(g.ok){const y=await g.json();return qE(y)}else throw await HE("Generate Auth Token",g)}function Qw(r,{fid:t}){return`${BE(r)}/${t}/authTokens:generate`}/**
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
 */async function Cm(r,t=!1){let n;const s=await uh(r.appConfig,c=>{if(!ZE(c))throw ks.create("not-registered");const d=c.authToken;if(!t&&$w(d))return c;if(d.requestStatus===1)return n=Yw(r,t),c;{if(!navigator.onLine)throw ks.create("app-offline");const p=Ww(c);return n=Xw(r,p),p}});return n?await n:s.authToken}async function Yw(r,t){let n=await j_(r.appConfig);for(;n.authToken.requestStatus===1;)await GE(100),n=await j_(r.appConfig);const s=n.authToken;return s.requestStatus===0?Cm(r,t):s}function j_(r){return uh(r,t=>{if(!ZE(t))throw ks.create("not-registered");const n=t.authToken;return Jw(n)?{...t,authToken:{requestStatus:0}}:t})}async function Xw(r,t){try{const n=await Kw(r,t),s={...t,authToken:n};return await zc(r.appConfig,s),n}catch(n){if(zE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await XE(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await zc(r.appConfig,s)}throw n}}function ZE(r){return r!==void 0&&r.registrationStatus===2}function $w(r){return r.requestStatus===2&&!Zw(r)}function Zw(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+ww}function Ww(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function Jw(r){return r.requestStatus===1&&r.requestTime+UE<Date.now()}/**
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
 */async function tb(r){const t=r,{installationEntry:n,registrationPromise:s}=await Im(t);return s?s.catch(console.error):Cm(t).catch(console.error),n.fid}/**
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
 */async function eb(r,t=!1){const n=r;return await nb(n),(await Cm(n,t)).token}async function nb(r){const{registrationPromise:t}=await Im(r);t&&await t}/**
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
 */function ib(r){if(!r||!r.options)throw Ld("App Configuration");if(!r.name)throw Ld("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Ld(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Ld(r){return ks.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="installations",rb="installations-internal",sb=r=>{const t=r.getProvider("app").getImmediate(),n=ib(t),s=js(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},ab=r=>{const t=r.getProvider("app").getImmediate(),n=js(t,WE).getImmediate();return{getId:()=>tb(n),getToken:l=>eb(n,l)}};function ob(){pi(new qn(WE,sb,"PUBLIC")),pi(new qn(rb,ab,"PRIVATE"))}ob();Vn(kE,bm);Vn(kE,bm,"esm2020");/**
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
 */const Bc="analytics",lb="firebase_id",ub="origin",cb=60*1e3,hb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dm="https://www.googletagmanager.com/gtag/js";/**
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
 */const an=new oh("@firebase/analytics");/**
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
 */const fb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new Hs("analytics","Analytics",fb);/**
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
 */function db(r){if(!r.startsWith(Dm)){const t=yn.create("invalid-gtag-resource",{gtagURL:r});return an.warn(t.message),""}return r}function JE(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function mb(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function pb(r,t){const n=mb("firebase-js-sdk-policy",{createScriptURL:db}),s=document.createElement("script"),l=`${Dm}?l=${r}&id=${t}`;s.src=n?n?.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function gb(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function yb(r,t,n,s,l,c){const d=s[l];try{if(d)await t[d];else{const g=(await JE(n)).find(y=>y.measurementId===l);g&&await t[g.appId]}}catch(p){an.error(p)}r("config",l,c)}async function _b(r,t,n,s,l){try{let c=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const p=await JE(n);for(const g of d){const y=p.find(C=>C.measurementId===g),A=y&&t[y.appId];if(A)c.push(A);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),r("event",s,l||{})}catch(c){an.error(c)}}function vb(r,t,n,s){async function l(c,...d){try{if(c==="event"){const[p,g]=d;await _b(r,t,n,p,g)}else if(c==="config"){const[p,g]=d;await yb(r,t,n,s,p,g)}else if(c==="consent"){const[p,g]=d;r("consent",p,g)}else if(c==="get"){const[p,g,y]=d;r("get",p,g,y)}else if(c==="set"){const[p]=d;r("set",p)}else r(c,...d)}catch(p){an.error(p)}}return l}function Eb(r,t,n,s,l){let c=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=vb(c,r,t,n),{gtagCore:c,wrappedGtag:window[l]}}function Tb(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Dm)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=30,Sb=1e3;class wb{constructor(t={},n=Sb){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const tT=new wb;function bb(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Rb(r){const{appId:t,apiKey:n}=r,s={method:"GET",headers:bb(n)},l=hb.replace("{app-id}",t),c=await fetch(l,s);if(c.status!==200&&c.status!==304){let d="";try{const p=await c.json();p.error?.message&&(d=p.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function Ib(r,t=tT,n){const{appId:s,apiKey:l,measurementId:c}=r.options;if(!s)throw yn.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:s};throw yn.create("no-api-key")}const d=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new Ob;return setTimeout(async()=>{p.abort()},cb),eT({appId:s,apiKey:l,measurementId:c},d,p,t)}async function eT(r,{throttleEndTimeMillis:t,backoffCount:n},s,l=tT){const{appId:c,measurementId:d}=r;try{await Cb(s,t)}catch(p){if(d)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:c,measurementId:d};throw p}try{const p=await Rb(r);return l.deleteThrottleMetadata(c),p}catch(p){const g=p;if(!Db(g)){if(l.deleteThrottleMetadata(c),d)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:c,measurementId:d};throw p}const y=Number(g?.customData?.httpStatus)===503?V_(n,l.intervalMillis,Ab):V_(n,l.intervalMillis),A={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return l.setThrottleMetadata(c,A),an.debug(`Calling attemptFetch again in ${y} millis`),eT(r,A,s,l)}}function Cb(r,t){return new Promise((n,s)=>{const l=Math.max(t-Date.now(),0),c=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(c),s(yn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Db(r){if(!(r instanceof jn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ob{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Nb(r,t,n,s,l){if(l&&l.global){r("event",n,s);return}else{const c=await t,d={...s,send_to:c};r("event",n,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(){if(IE())try{await CE()}catch(r){return an.warn(yn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return an.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vb(r,t,n,s,l,c,d){const p=Ib(r);p.then(I=>{n[I.measurementId]=I.appId,r.options.measurementId&&I.measurementId!==r.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>an.error(I)),t.push(p);const g=Mb().then(I=>{if(I)return s.getId()}),[y,A]=await Promise.all([p,g]);Tb(c)||pb(c,y.measurementId),l("js",new Date);const C=d?.config??{};return C[ub]="firebase",C.update=!0,A!=null&&(C[lb]=A),l("config",y.measurementId,C),y.measurementId}/**
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
 */class Pb{constructor(t){this.app=t}_delete(){return delete wl[this.app.options.appId],Promise.resolve()}}let wl={},F_=[];const G_={};let xd="dataLayer",kb="gtag",K_,nT,Q_=!1;function Ub(){const r=[];if(RE()&&r.push("This is a browser extension environment."),n1()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:t});an.warn(n.message)}}function Lb(r,t,n){Ub();const s=r.options.appId;if(!s)throw yn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(wl[s]!=null)throw yn.create("already-exists",{id:s});if(!Q_){gb(xd);const{wrappedGtag:c,gtagCore:d}=Eb(wl,F_,G_,xd,kb);nT=c,K_=d,Q_=!0}return wl[s]=Vb(r,F_,G_,t,K_,xd,n),new Pb(r)}function xb(r=wm()){r=Re(r);const t=js(r,Bc);return t.isInitialized()?t.getImmediate():zb(r)}function zb(r,t={}){const n=js(r,Bc);if(n.isInitialized()){const l=n.getImmediate();if(xr(t,n.getOptions()))return l;throw yn.create("already-initialized")}return n.initialize({options:t})}function Bb(r,t,n,s){r=Re(r),Nb(nT,wl[r.app.options.appId],t,n,s).catch(l=>an.error(l))}const Y_="@firebase/analytics",X_="0.10.18";function qb(){pi(new qn(Bc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return Lb(s,l,n)},"PUBLIC")),pi(new qn("analytics-internal",r,"PRIVATE")),Vn(Y_,X_),Vn(Y_,X_,"esm2020");function r(t){try{const n=t.getProvider(Bc).getImmediate();return{logEvent:(s,l,c)=>Bb(n,s,l,c)}}catch(n){throw yn.create("interop-component-reg-failed",{reason:n})}}}qb();function iT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hb=iT,rT=new Hs("auth","Firebase",iT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new oh("@firebase/auth");function jb(r,...t){qc.logLevel<=Ct.WARN&&qc.warn(`Auth (${to}): ${r}`,...t)}function Ic(r,...t){qc.logLevel<=Ct.ERROR&&qc.error(`Auth (${to}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(r,...t){throw Om(r,...t)}function li(r,...t){return Om(r,...t)}function sT(r,t,n){const s={...Hb(),[t]:n};return new Hs("auth","Firebase",s).create(t,{appName:r.name})}function Ki(r){return sT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Om(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return rT.create(r,...t)}function dt(r,t,...n){if(!r)throw Om(t,...n)}function Fi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Ic(t),new Error(t)}function Yi(r,t){r||Fi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(){return typeof self<"u"&&self.location?.href||""}function Fb(){return $_()==="http:"||$_()==="https:"}function $_(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fb()||RE()||"connection"in navigator)?navigator.onLine:!0}function Kb(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Yi(n>t,"Short delay should be less than long delay!"),this.isMobile=$S()||JS()}get(){return Gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(r,t){Yi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xb=new Hl(3e4,6e4);function Zi(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function Wi(r,t,n,s,l={}){return oT(r,l,async()=>{let c={},d={};s&&(t==="GET"?d=s:c={body:JSON.stringify(s)});const p=ql({key:r.config.apiKey,...d}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:t,headers:g,...c};return WS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Ja(r.emulatorConfig.host)&&(y.credentials="include"),aT.fetch()(await lT(r,r.config.apiHost,n,p),y)})}async function oT(r,t,n){r._canInitEmulator=!1;const s={...Qb,...t};try{const l=new Zb(r),c=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Tc(r,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const p=c.ok?d.errorMessage:d.error.message,[g,y]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tc(r,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw Tc(r,"email-already-in-use",d);if(g==="USER_DISABLED")throw Tc(r,"user-disabled",d);const A=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw sT(r,A,y);Hn(r,A)}}catch(l){if(l instanceof jn)throw l;Hn(r,"network-request-failed",{message:String(l)})}}async function jl(r,t,n,s,l={}){const c=await Wi(r,t,n,s,l);return"mfaPendingCredential"in c&&Hn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function lT(r,t,n,s){const l=`${t}${n}?${s}`,c=r,d=c.config.emulator?Nm(r.config,l):`${r.config.apiScheme}://${l}`;return Yb.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}function $b(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(li(this.auth,"network-request-failed")),Xb.get())})}}function Tc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=li(r,t,s);return l.customData._tokenResponse=n,l}function Z_(r){return r!==void 0&&r.enterprise!==void 0}class Wb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return $b(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Jb(r,t){return Wi(r,"GET","/v2/recaptchaConfig",Zi(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(r,t){return Wi(r,"POST","/v1/accounts:delete",t)}async function Hc(r,t){return Wi(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function eR(r,t=!1){const n=Re(r),s=await n.getIdToken(t),l=Mm(s);dt(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,d=c?.sign_in_provider;return{claims:l,token:s,authTime:bl(zd(l.auth_time)),issuedAtTime:bl(zd(l.iat)),expirationTime:bl(zd(l.exp)),signInProvider:d||null,signInSecondFactor:c?.sign_in_second_factor||null}}function zd(r){return Number(r)*1e3}function Mm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Ic("JWT malformed, contained fewer than 3 sections"),null;try{const l=EE(n);return l?JSON.parse(l):(Ic("Failed to decode base64 JWT payload"),null)}catch(l){return Ic("Caught error parsing JWT payload as JSON",l?.toString()),null}}function W_(r){const t=Mm(r);return dt(t,"internal-error"),dt(typeof t.exp<"u","internal-error"),dt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof jn&&nR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function nR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bl(this.lastLoginAt),this.creationTime=bl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jc(r){const t=r.auth,n=await r.getIdToken(),s=await Ml(r,Hc(t,{idToken:n}));dt(s?.users.length,t,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?uT(l.providerUserInfo):[],d=sR(r.providerData,c),p=r.isAnonymous,g=!(r.email&&l.passwordHash)&&!d?.length,y=p?g:!1,A={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new rm(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(r,A)}async function rR(r){const t=Re(r);await jc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function sR(r,t){return[...r.filter(s=>!t.some(l=>l.providerId===s.providerId)),...t]}function uT(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aR(r,t){const n=await oT(r,{},async()=>{const s=ql({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,d=await lT(r,l,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&Ja(r.emulatorConfig.host)&&(g.credentials="include"),aT.fetch()(d,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oR(r,t){return Wi(r,"POST","/v2/accounts:revokeToken",Zi(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){dt(t.idToken,"internal-error"),dt(typeof t.idToken<"u","internal-error"),dt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):W_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){dt(t.length!==0,"internal-error");const n=W_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(dt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:l,expiresIn:c}=await aR(t,n);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:l,expirationTime:c}=n,d=new ja;return s&&(dt(typeof s=="string","internal-error",{appName:t}),d.refreshToken=s),l&&(dt(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),c&&(dt(typeof c=="number","internal-error",{appName:t}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ja,this.toJSON())}_performRefresh(){return Fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(r,t){dt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Bn{constructor({uid:t,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new iR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new rm(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const n=await Ml(this,this.stsTokenManager.getToken(this.auth,t));return dt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return eR(this,t)}reload(){return rR(this)}_assign(t){this!==t&&(dt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){dt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await jc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(Ki(this.auth));const t=await this.getIdToken();return await Ml(this,tR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,l=n.email??void 0,c=n.phoneNumber??void 0,d=n.photoURL??void 0,p=n.tenantId??void 0,g=n._redirectEventId??void 0,y=n.createdAt??void 0,A=n.lastLoginAt??void 0,{uid:C,emailVerified:I,isAnonymous:F,providerData:$,stsTokenManager:nt}=n;dt(C&&nt,t,"internal-error");const Z=ja.fromJSON(this.name,nt);dt(typeof C=="string",t,"internal-error"),Cr(s,t.name),Cr(l,t.name),dt(typeof I=="boolean",t,"internal-error"),dt(typeof F=="boolean",t,"internal-error"),Cr(c,t.name),Cr(d,t.name),Cr(p,t.name),Cr(g,t.name),Cr(y,t.name),Cr(A,t.name);const Et=new Bn({uid:C,auth:t,email:l,emailVerified:I,displayName:s,isAnonymous:F,photoURL:d,phoneNumber:c,tenantId:p,stsTokenManager:Z,createdAt:y,lastLoginAt:A});return $&&Array.isArray($)&&(Et.providerData=$.map(gt=>({...gt}))),g&&(Et._redirectEventId=g),Et}static async _fromIdTokenResponse(t,n,s=!1){const l=new ja;l.updateFromServerResponse(n);const c=new Bn({uid:n.localId,auth:t,stsTokenManager:l,isAnonymous:s});return await jc(c),c}static async _fromGetAccountInfoResponse(t,n,s){const l=n.users[0];dt(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?uT(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!c?.length,p=new ja;p.updateFromIdToken(s);const g=new Bn({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:d}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new rm(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=new Map;function Gi(r){Yi(r instanceof Function,"Expected a class definition");let t=J_.get(r);return t?(Yi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,J_.set(r,t),t)}/**
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
 */class cT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}cT.type="NONE";const tv=cT;/**
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
 */function Cc(r,t,n){return`firebase:${r}:${t}:${n}`}class Fa{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Cc(this.userKey,l.apiKey,c),this.fullPersistenceKey=Cc("persistence",l.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Hc(this.auth,{idToken:t}).catch(()=>{});return n?Bn._fromGetAccountInfoResponse(this.auth,n,t):null}return Bn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Fa(Gi(tv),t,s);const l=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=l[0]||Gi(tv);const d=Cc(s,t.config.apiKey,t.name);let p=null;for(const y of n)try{const A=await y._get(d);if(A){let C;if(typeof A=="string"){const I=await Hc(t,{idToken:A}).catch(()=>{});if(!I)break;C=await Bn._fromGetAccountInfoResponse(t,I,A)}else C=Bn._fromJSON(t,A);y!==c&&(p=C),c=y;break}}catch{}const g=l.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new Fa(c,t,s):(c=g[0],p&&await c._set(d,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(d)}catch{}})),new Fa(c,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(mT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(hT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gT(t))return"Blackberry";if(yT(t))return"Webos";if(fT(t))return"Safari";if((t.includes("chrome/")||dT(t))&&!t.includes("edge/"))return"Chrome";if(pT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function hT(r=Xe()){return/firefox\//i.test(r)}function fT(r=Xe()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dT(r=Xe()){return/crios\//i.test(r)}function mT(r=Xe()){return/iemobile/i.test(r)}function pT(r=Xe()){return/android/i.test(r)}function gT(r=Xe()){return/blackberry/i.test(r)}function yT(r=Xe()){return/webos/i.test(r)}function Vm(r=Xe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function lR(r=Xe()){return Vm(r)&&!!window.navigator?.standalone}function uR(){return t1()&&document.documentMode===10}function _T(r=Xe()){return Vm(r)||pT(r)||yT(r)||gT(r)||/windows phone/i.test(r)||mT(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(r,t=[]){let n;switch(r){case"Browser":n=ev(Xe());break;case"Worker":n=`${ev(Xe())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${to}/${s}`}/**
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
 */class cR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((d,p)=>{try{const g=t(c);d(g)}catch(g){p(g)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function hR(r,t={}){return Wi(r,"GET","/v2/passwordPolicy",Zi(r,t))}/**
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
 */const fR=6;class dR{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??fR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),l&&(n.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<t.length;l++)s=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(t,n,s,l){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nv(this),this.idTokenSubscription=new nv(this),this.beforeStateQueue=new cR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Gi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Fa.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Hc(this,{idToken:t}),s=await Bn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Nn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,d=s?._redirectEventId,p=await this.tryRedirectSignIn(t);(!c||c===d)&&p?.user&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return dt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await jc(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Kb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nn(this.app))return Promise.reject(Ki(this));const n=t?Re(t):null;return n&&dt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&dt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(Ki(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nn(this.app)?Promise.reject(Ki(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await hR(this),n=new dR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Hs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await oR(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Gi(t)||this._popupRedirectResolver;dt(n,this,"argument-error"),this.redirectPersistenceManager=await Fa.create(this,[Gi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,l){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(dt(p,this,"internal-error"),p.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,s,l);return()=>{d=!0,g()}}else{const g=t.addObserver(n);return()=>{d=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return dt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=vT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&jb(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Gr(r){return Re(r)}class nv{constructor(t){this.auth=t,this.observer=null,this.addObserver=o1(n=>this.observer=n)}get next(){return dt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pR(r){ch=r}function ET(r){return ch.loadJS(r)}function gR(){return ch.recaptchaEnterpriseScript}function yR(){return ch.gapiScript}function _R(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class vR{constructor(){this.enterprise=new ER}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class ER{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const TR="recaptcha-enterprise",TT="NO_RECAPTCHA";class AR{constructor(t){this.type=TR,this.auth=Gr(t)}async verify(t="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(d,p)=>{Jb(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new Wb(g);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,d(y.siteKey)}}).catch(g=>{p(g)})})}function l(c,d,p){const g=window.grecaptcha;Z_(g)?g.enterprise.ready(()=>{g.enterprise.execute(c,{action:t}).then(y=>{d(y)}).catch(()=>{d(TT)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vR().execute("siteKey",{action:"verify"}):new Promise((c,d)=>{s(this.auth).then(p=>{if(!n&&Z_(window.grecaptcha))l(p,c,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let g=gR();g.length!==0&&(g+=p),ET(g).then(()=>{l(p,c,d)}).catch(y=>{d(y)})}}).catch(p=>{d(p)})})}}async function iv(r,t,n,s=!1,l=!1){const c=new AR(r);let d;if(l)d=TT;else try{d=await c.verify(n)}catch{d=await c.verify(n,!0)}const p={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,y=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:d}):Object.assign(p,{captchaResponse:d}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Fc(r,t,n,s,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await iv(r,t,n,n==="getOobCode");return s(r,c)}else return s(r,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await iv(r,t,n,n==="getOobCode");return s(r,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(r,t){const n=js(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),c=n.getOptions();if(xr(c,t??{}))return l;Hn(l,"already-initialized")}return n.initialize({options:t})}function wR(r,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Gi);t?.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t?.popupRedirectResolver)}function bR(r,t,n){const s=Gr(r);dt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const l=!1,c=AT(t),{host:d,port:p}=RR(t),g=p===null?"":`:${p}`,y={url:`${c}//${d}${g}/`},A=Object.freeze({host:d,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){dt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),dt(xr(y,s.config.emulator)&&xr(A,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=A,s.settings.appVerificationDisabledForTesting=!0,Ja(d)?(wE(`${c}//${d}${g}`),bE("Auth",!0)):IR()}function AT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function RR(r){const t=AT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:rv(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:rv(d)}}}function rv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function IR(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Fi("not implemented")}_getIdTokenResponse(t){return Fi("not implemented")}_linkToIdToken(t,n){return Fi("not implemented")}_getReauthenticationResolver(t){return Fi("not implemented")}}async function CR(r,t){return Wi(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(r,t){return jl(r,"POST","/v1/accounts:signInWithPassword",Zi(r,t))}async function ST(r,t){return Wi(r,"POST","/v1/accounts:sendOobCode",Zi(r,t))}async function OR(r,t){return ST(r,t)}async function NR(r,t){return ST(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR(r,t){return jl(r,"POST","/v1/accounts:signInWithEmailLink",Zi(r,t))}async function VR(r,t){return jl(r,"POST","/v1/accounts:signInWithEmailLink",Zi(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Pm{constructor(t,n,s,l=null){super("password",s),this._email=t,this._password=n,this._tenantId=l}static _fromEmailAndPassword(t,n){return new Vl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Vl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fc(t,n,"signInWithPassword",DR);case"emailLink":return MR(t,{email:this._email,oobCode:this._password});default:Hn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fc(t,s,"signUpPassword",CR);case"emailLink":return VR(t,{idToken:n,email:this._email,oobCode:this._password});default:Hn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(r,t){return jl(r,"POST","/v1/accounts:signInWithIdp",Zi(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="http://localhost";class Ls extends Pm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ls(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:l,...c}=n;if(!s||!l)return null;const d=new Ls(s,l);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(t){const n=this.buildRequest();return Ga(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Ga(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ga(t,n)}buildRequest(){const t={requestUri:PR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ql(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UR(r){const t=yl(_l(r)).link,n=t?yl(_l(t)).deep_link_id:null,s=yl(_l(r)).deep_link_id;return(s?yl(_l(s)).link:null)||s||n||t||r}class km{constructor(t){const n=yl(_l(t)),s=n.apiKey??null,l=n.oobCode??null,c=kR(n.mode??null);dt(s&&l&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=l,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=UR(t);try{return new km(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.providerId=eo.PROVIDER_ID}static credential(t,n){return Vl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=km.parseLink(n);return dt(s,"argument-error"),Vl._fromEmailAndCode(t,s.code,s.tenantId)}}eo.PROVIDER_ID="password";eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fl extends wT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Fl{constructor(){super("facebook.com")}static credential(t){return Ls._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dr.credentialFromTaggedObject(t)}static credentialFromError(t){return Dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dr.credential(t.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Fl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ls._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Or.credential(n,s)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Fl{constructor(){super("github.com")}static credential(t){return Ls._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Nr.credential(t.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Fl{constructor(){super("twitter.com")}static credential(t,n){return Ls._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Mr.credential(n,s)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(r,t){return jl(r,"POST","/v1/accounts:signUp",Zi(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,l=!1){const c=await Bn._fromIdTokenResponse(t,s,l),d=sv(s);return new xs({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const l=sv(s);return new xs({user:t,providerId:l,_tokenResponse:s,operationType:n})}}function sv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends jn{constructor(t,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,l){return new Gc(t,n,s,l)}}function bT(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(r,c,t,s):c})}async function xR(r,t,n=!1){const s=await Ml(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return xs._forOperation(r,"link",s)}/**
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
 */async function zR(r,t,n=!1){const{auth:s}=r;if(Nn(s.app))return Promise.reject(Ki(s));const l="reauthenticate";try{const c=await Ml(r,bT(s,l,t,r),n);dt(c.idToken,s,"internal-error");const d=Mm(c.idToken);dt(d,s,"internal-error");const{sub:p}=d;return dt(r.uid===p,s,"user-mismatch"),xs._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Hn(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(r,t,n=!1){if(Nn(r.app))return Promise.reject(Ki(r));const s="signIn",l=await bT(r,s,t),c=await xs._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(c.user),c}async function BR(r,t){return RT(Gr(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(r){const t=Gr(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function IO(r,t,n){const s=Gr(r);await Fc(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",NR)}async function CO(r,t,n){if(Nn(r.app))return Promise.reject(Ki(r));const s=Gr(r),d=await Fc(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LR).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&IT(r),g}),p=await xs._fromIdTokenResponse(s,"signIn",d);return await s._updateCurrentUser(p.user),p}function DO(r,t,n){return Nn(r.app)?Promise.reject(Ki(r)):BR(Re(r),eo.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&IT(r),s})}async function OO(r,t){const n=Re(r),l={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()},{email:c}=await OR(n.auth,l);c!==r.email&&await r.reload()}function qR(r,t,n,s){return Re(r).onIdTokenChanged(t,n,s)}function HR(r,t,n){return Re(r).beforeAuthStateChanged(t,n)}function NO(r,t,n,s){return Re(r).onAuthStateChanged(t,n,s)}function MO(r){return Re(r).signOut()}const Kc="__sak";/**
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
 */class CT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kc,"1"),this.storage.removeItem(Kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=1e3,FR=10;class DT extends CT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_T(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&t(n,l,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((d,p,g)=>{this.notifyListeners(d,g)});return}const s=t.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);uR()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,FR):l()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},jR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}DT.type="LOCAL";const GR=DT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT extends CT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}OT.type="SESSION";const NT=OT;/**
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
 */function KR(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(l=>l.isListeningto(t));if(n)return n;const s=new hh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:l,data:c}=n.data,d=this.handlersMap[l];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const p=Array.from(d).map(async y=>y(n.origin,c)),g=await KR(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class QR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,d;return new Promise((p,g)=>{const y=Um("",20);l.port1.start();const A=setTimeout(()=>{g(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(C){const I=C;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(I.data.response);break;default:clearTimeout(A),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return window}function YR(r){ui().location.href=r}/**
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
 */function MT(){return typeof ui().WorkerGlobalScope<"u"&&typeof ui().importScripts=="function"}async function XR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $R(){return navigator?.serviceWorker?.controller||null}function ZR(){return MT()?self:null}/**
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
 */const VT="firebaseLocalStorageDb",WR=1,Qc="firebaseLocalStorage",PT="fbase_key";class Gl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fh(r,t){return r.transaction([Qc],t?"readwrite":"readonly").objectStore(Qc)}function JR(){const r=indexedDB.deleteDatabase(VT);return new Gl(r).toPromise()}function sm(){const r=indexedDB.open(VT,WR);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Qc,{keyPath:PT})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Qc)?t(s):(s.close(),await JR(),t(await sm()))})})}async function av(r,t,n){const s=fh(r,!0).put({[PT]:t,value:n});return new Gl(s).toPromise()}async function tI(r,t){const n=fh(r,!1).get(t),s=await new Gl(n).toPromise();return s===void 0?null:s.value}function ov(r,t){const n=fh(r,!0).delete(t);return new Gl(n).toPromise()}const eI=800,nI=3;class kT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>nI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hh._getInstance(ZR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await XR(),!this.activeServiceWorker)return;this.sender=new QR(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||$R()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await sm();return await av(t,Kc,"1"),await ov(t,Kc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>av(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>tI(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ov(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const c=fh(l,!1).getAll();return new Gl(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:l,value:c}of t)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kT.type="LOCAL";const iI=kT;new Hl(3e4,6e4);/**
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
 */function rI(r,t){return t?Gi(t):(dt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Lm extends Pm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ga(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ga(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ga(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function sI(r){return RT(r.auth,new Lm(r),r.bypassAuthState)}function aI(r){const{auth:t,user:n}=r;return dt(n,t,"internal-error"),zR(n,new Lm(r),r.bypassAuthState)}async function oI(r){const{auth:t,user:n}=r;return dt(n,t,"internal-error"),xR(n,new Lm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(t,n,s,l,c=!1){this.auth=t,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:l,tenantId:c,error:d,type:p}=t;if(d){this.reject(d);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sI;case"linkViaPopup":case"linkViaRedirect":return oI;case"reauthViaPopup":case"reauthViaRedirect":return aI;default:Hn(this.auth,"internal-error")}}resolve(t){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new Hl(2e3,1e4);class Ha extends UT{constructor(t,n,s,l,c){super(t,n,l,c),this.provider=s,this.authWindow=null,this.pollId=null,Ha.currentPopupAction&&Ha.currentPopupAction.cancel(),Ha.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return dt(t,this.auth,"internal-error"),t}async onExecution(){Yi(this.filter.length===1,"Popup operations only handle one event");const t=Um();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(li(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(li(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ha.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(li(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,lI.get())};t()}}Ha.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="pendingRedirect",Dc=new Map;class cI extends UT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Dc.get(this.auth._key());if(!t){try{const s=await hI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Dc.set(this.auth._key(),t)}return this.bypassAuthState||Dc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hI(r,t){const n=mI(t),s=dI(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function fI(r,t){Dc.set(r._key(),t)}function dI(r){return Gi(r._redirectPersistence)}function mI(r){return Cc(uI,r.config.apiKey,r.name)}async function pI(r,t,n=!1){if(Nn(r.app))return Promise.reject(Ki(r));const s=Gr(r),l=rI(s,t),d=await new cI(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,t)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=600*1e3;class yI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_I(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!LT(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";n.onError(li(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=gI&&this.cachedEventUids.clear(),this.cachedEventUids.has(lv(t))}saveEventToCache(t){this.cachedEventUids.add(lv(t)),this.lastProcessedEventTime=Date.now()}}function lv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function LT({type:r,error:t}){return r==="unknown"&&t?.code==="auth/no-auth-event"}function _I(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LT(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(r,t={}){return Wi(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TI=/^https?/;async function AI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await vI(r);for(const n of t)try{if(SI(n))return}catch{}Hn(r,"unauthorized-domain")}function SI(r){const t=im(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!TI.test(n))return!1;if(EI.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const wI=new Hl(3e4,6e4);function uv(){const r=ui().___jsl;if(r?.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function bI(r){return new Promise((t,n)=>{function s(){uv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{uv(),n(li(r,"network-request-failed"))},timeout:wI.get()})}if(ui().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(ui().gapi?.load)s();else{const l=_R("iframefcb");return ui()[l]=()=>{gapi.load?s():n(li(r,"network-request-failed"))},ET(`${yR()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw Oc=null,t})}let Oc=null;function RI(r){return Oc=Oc||bI(r),Oc}/**
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
 */const II=new Hl(5e3,15e3),CI="__/auth/iframe",DI="emulator/auth/iframe",OI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MI(r){const t=r.config;dt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Nm(t,DI):`https://${r.config.authDomain}/${CI}`,s={apiKey:t.apiKey,appName:r.name,v:to},l=NI.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${ql(s).slice(1)}`}async function VI(r){const t=await RI(r),n=ui().gapi;return dt(n,r,"internal-error"),t.open({where:document.body,url:MI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OI,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const d=li(r,"network-request-failed"),p=ui().setTimeout(()=>{c(d)},II.get());function g(){ui().clearTimeout(p),l(s)}s.ping(g).then(g,()=>{c(d)})}))}/**
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
 */const PI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kI=500,UI=600,LI="_blank",xI="http://localhost";class cv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zI(r,t,n,s=kI,l=UI){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g={...PI,width:s.toString(),height:l.toString(),top:c,left:d},y=Xe().toLowerCase();n&&(p=dT(y)?LI:n),hT(y)&&(t=t||xI,g.scrollbars="yes");const A=Object.entries(g).reduce((I,[F,$])=>`${I}${F}=${$},`,"");if(lR(y)&&p!=="_self")return BI(t||"",p),new cv(null);const C=window.open(t||"",p,A);dt(C,r,"popup-blocked");try{C.focus()}catch{}return new cv(C)}function BI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const qI="__/auth/handler",HI="emulator/auth/handler",jI=encodeURIComponent("fac");async function hv(r,t,n,s,l,c){dt(r.config.authDomain,r,"auth-domain-config-required"),dt(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:to,eventId:l};if(t instanceof wT){t.setDefaultLanguage(r.languageCode),d.providerId=t.providerId||"",a1(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,C]of Object.entries({}))d[A]=C}if(t instanceof Fl){const A=t.getScopes().filter(C=>C!=="");A.length>0&&(d.scopes=A.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const A of Object.keys(p))p[A]===void 0&&delete p[A];const g=await r._getAppCheckToken(),y=g?`#${jI}=${encodeURIComponent(g)}`:"";return`${FI(r)}?${ql(p).slice(1)}${y}`}function FI({config:r}){return r.emulator?Nm(r,HI):`https://${r.authDomain}/${qI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="webStorageSupport";class GI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NT,this._completeRedirectFn=pI,this._overrideRedirectResult=fI}async _openPopup(t,n,s,l){Yi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await hv(t,n,s,im(),l);return zI(t,c,Um())}async _openRedirect(t,n,s,l){await this._originValidation(t);const c=await hv(t,n,s,im(),l);return YR(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:l,promise:c}=this.eventManagers[n];return l?Promise.resolve(l):(Yi(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await VI(t),s=new yI(t);return n.register("authEvent",l=>(dt(l?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Bd,{type:Bd},l=>{const c=l?.[0]?.[Bd];c!==void 0&&n(!!c),Hn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return _T()||fT()||Vm()}}const KI=GI;var fv="@firebase/auth",dv="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){dt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XI(r){pi(new qn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=s.options;dt(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vT(r)},y=new mR(s,l,c,g);return wR(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),pi(new qn("auth-internal",t=>{const n=Gr(t.getProvider("auth").getImmediate());return(s=>new QI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(fv,dv,YI(r)),Vn(fv,dv,"esm2020")}/**
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
 */const $I=300,ZI=SE("authIdTokenMaxAge")||$I;let mv=null;const WI=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ZI)return;const l=n?.token;mv!==l&&(mv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function JI(r=wm()){const t=js(r,"auth");if(t.isInitialized())return t.getImmediate();const n=SR(r,{popupRedirectResolver:KI,persistence:[iI,GR,NT]}),s=SE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=WI(c.toString());HR(n,d,()=>d(n.currentUser)),qR(n,p=>d(p))}}const l=TE("auth");return l&&bR(n,`http://${l}`),n}function tC(){return document.getElementsByTagName("head")?.[0]??document}pR({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=l=>{const c=li("internal-error");c.customData=l,n(c)},s.type="text/javascript",s.charset="UTF-8",tC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XI("Browser");var pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,xT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,S){function R(){}R.prototype=S.prototype,V.D=S.prototype,V.prototype=new R,V.prototype.constructor=V,V.C=function(N,M,k){for(var b=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)b[Pe-2]=arguments[Pe];return S.prototype[M].apply(N,b)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(V,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var M=0;16>M;++M)N[M]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(M=0;16>M;++M)N[M]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=V.g[0],R=V.g[1],M=V.g[2];var k=V.g[3],b=S+(k^R&(M^k))+N[0]+3614090360&4294967295;S=R+(b<<7&4294967295|b>>>25),b=k+(M^S&(R^M))+N[1]+3905402710&4294967295,k=S+(b<<12&4294967295|b>>>20),b=M+(R^k&(S^R))+N[2]+606105819&4294967295,M=k+(b<<17&4294967295|b>>>15),b=R+(S^M&(k^S))+N[3]+3250441966&4294967295,R=M+(b<<22&4294967295|b>>>10),b=S+(k^R&(M^k))+N[4]+4118548399&4294967295,S=R+(b<<7&4294967295|b>>>25),b=k+(M^S&(R^M))+N[5]+1200080426&4294967295,k=S+(b<<12&4294967295|b>>>20),b=M+(R^k&(S^R))+N[6]+2821735955&4294967295,M=k+(b<<17&4294967295|b>>>15),b=R+(S^M&(k^S))+N[7]+4249261313&4294967295,R=M+(b<<22&4294967295|b>>>10),b=S+(k^R&(M^k))+N[8]+1770035416&4294967295,S=R+(b<<7&4294967295|b>>>25),b=k+(M^S&(R^M))+N[9]+2336552879&4294967295,k=S+(b<<12&4294967295|b>>>20),b=M+(R^k&(S^R))+N[10]+4294925233&4294967295,M=k+(b<<17&4294967295|b>>>15),b=R+(S^M&(k^S))+N[11]+2304563134&4294967295,R=M+(b<<22&4294967295|b>>>10),b=S+(k^R&(M^k))+N[12]+1804603682&4294967295,S=R+(b<<7&4294967295|b>>>25),b=k+(M^S&(R^M))+N[13]+4254626195&4294967295,k=S+(b<<12&4294967295|b>>>20),b=M+(R^k&(S^R))+N[14]+2792965006&4294967295,M=k+(b<<17&4294967295|b>>>15),b=R+(S^M&(k^S))+N[15]+1236535329&4294967295,R=M+(b<<22&4294967295|b>>>10),b=S+(M^k&(R^M))+N[1]+4129170786&4294967295,S=R+(b<<5&4294967295|b>>>27),b=k+(R^M&(S^R))+N[6]+3225465664&4294967295,k=S+(b<<9&4294967295|b>>>23),b=M+(S^R&(k^S))+N[11]+643717713&4294967295,M=k+(b<<14&4294967295|b>>>18),b=R+(k^S&(M^k))+N[0]+3921069994&4294967295,R=M+(b<<20&4294967295|b>>>12),b=S+(M^k&(R^M))+N[5]+3593408605&4294967295,S=R+(b<<5&4294967295|b>>>27),b=k+(R^M&(S^R))+N[10]+38016083&4294967295,k=S+(b<<9&4294967295|b>>>23),b=M+(S^R&(k^S))+N[15]+3634488961&4294967295,M=k+(b<<14&4294967295|b>>>18),b=R+(k^S&(M^k))+N[4]+3889429448&4294967295,R=M+(b<<20&4294967295|b>>>12),b=S+(M^k&(R^M))+N[9]+568446438&4294967295,S=R+(b<<5&4294967295|b>>>27),b=k+(R^M&(S^R))+N[14]+3275163606&4294967295,k=S+(b<<9&4294967295|b>>>23),b=M+(S^R&(k^S))+N[3]+4107603335&4294967295,M=k+(b<<14&4294967295|b>>>18),b=R+(k^S&(M^k))+N[8]+1163531501&4294967295,R=M+(b<<20&4294967295|b>>>12),b=S+(M^k&(R^M))+N[13]+2850285829&4294967295,S=R+(b<<5&4294967295|b>>>27),b=k+(R^M&(S^R))+N[2]+4243563512&4294967295,k=S+(b<<9&4294967295|b>>>23),b=M+(S^R&(k^S))+N[7]+1735328473&4294967295,M=k+(b<<14&4294967295|b>>>18),b=R+(k^S&(M^k))+N[12]+2368359562&4294967295,R=M+(b<<20&4294967295|b>>>12),b=S+(R^M^k)+N[5]+4294588738&4294967295,S=R+(b<<4&4294967295|b>>>28),b=k+(S^R^M)+N[8]+2272392833&4294967295,k=S+(b<<11&4294967295|b>>>21),b=M+(k^S^R)+N[11]+1839030562&4294967295,M=k+(b<<16&4294967295|b>>>16),b=R+(M^k^S)+N[14]+4259657740&4294967295,R=M+(b<<23&4294967295|b>>>9),b=S+(R^M^k)+N[1]+2763975236&4294967295,S=R+(b<<4&4294967295|b>>>28),b=k+(S^R^M)+N[4]+1272893353&4294967295,k=S+(b<<11&4294967295|b>>>21),b=M+(k^S^R)+N[7]+4139469664&4294967295,M=k+(b<<16&4294967295|b>>>16),b=R+(M^k^S)+N[10]+3200236656&4294967295,R=M+(b<<23&4294967295|b>>>9),b=S+(R^M^k)+N[13]+681279174&4294967295,S=R+(b<<4&4294967295|b>>>28),b=k+(S^R^M)+N[0]+3936430074&4294967295,k=S+(b<<11&4294967295|b>>>21),b=M+(k^S^R)+N[3]+3572445317&4294967295,M=k+(b<<16&4294967295|b>>>16),b=R+(M^k^S)+N[6]+76029189&4294967295,R=M+(b<<23&4294967295|b>>>9),b=S+(R^M^k)+N[9]+3654602809&4294967295,S=R+(b<<4&4294967295|b>>>28),b=k+(S^R^M)+N[12]+3873151461&4294967295,k=S+(b<<11&4294967295|b>>>21),b=M+(k^S^R)+N[15]+530742520&4294967295,M=k+(b<<16&4294967295|b>>>16),b=R+(M^k^S)+N[2]+3299628645&4294967295,R=M+(b<<23&4294967295|b>>>9),b=S+(M^(R|~k))+N[0]+4096336452&4294967295,S=R+(b<<6&4294967295|b>>>26),b=k+(R^(S|~M))+N[7]+1126891415&4294967295,k=S+(b<<10&4294967295|b>>>22),b=M+(S^(k|~R))+N[14]+2878612391&4294967295,M=k+(b<<15&4294967295|b>>>17),b=R+(k^(M|~S))+N[5]+4237533241&4294967295,R=M+(b<<21&4294967295|b>>>11),b=S+(M^(R|~k))+N[12]+1700485571&4294967295,S=R+(b<<6&4294967295|b>>>26),b=k+(R^(S|~M))+N[3]+2399980690&4294967295,k=S+(b<<10&4294967295|b>>>22),b=M+(S^(k|~R))+N[10]+4293915773&4294967295,M=k+(b<<15&4294967295|b>>>17),b=R+(k^(M|~S))+N[1]+2240044497&4294967295,R=M+(b<<21&4294967295|b>>>11),b=S+(M^(R|~k))+N[8]+1873313359&4294967295,S=R+(b<<6&4294967295|b>>>26),b=k+(R^(S|~M))+N[15]+4264355552&4294967295,k=S+(b<<10&4294967295|b>>>22),b=M+(S^(k|~R))+N[6]+2734768916&4294967295,M=k+(b<<15&4294967295|b>>>17),b=R+(k^(M|~S))+N[13]+1309151649&4294967295,R=M+(b<<21&4294967295|b>>>11),b=S+(M^(R|~k))+N[4]+4149444226&4294967295,S=R+(b<<6&4294967295|b>>>26),b=k+(R^(S|~M))+N[11]+3174756917&4294967295,k=S+(b<<10&4294967295|b>>>22),b=M+(S^(k|~R))+N[2]+718787259&4294967295,M=k+(b<<15&4294967295|b>>>17),b=R+(k^(M|~S))+N[9]+3951481745&4294967295,V.g[0]=V.g[0]+S&4294967295,V.g[1]=V.g[1]+(M+(b<<21&4294967295|b>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+k&4294967295}s.prototype.u=function(V,S){S===void 0&&(S=V.length);for(var R=S-this.blockSize,N=this.B,M=this.h,k=0;k<S;){if(M==0)for(;k<=R;)l(this,V,k),k+=this.blockSize;if(typeof V=="string"){for(;k<S;)if(N[M++]=V.charCodeAt(k++),M==this.blockSize){l(this,N),M=0;break}}else for(;k<S;)if(N[M++]=V[k++],M==this.blockSize){l(this,N),M=0;break}}this.h=M,this.o+=S},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var S=1;S<V.length-8;++S)V[S]=0;var R=8*this.o;for(S=V.length-8;S<V.length;++S)V[S]=R&255,R/=256;for(this.u(V),V=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)V[R++]=this.g[S]>>>N&255;return V};function c(V,S){var R=p;return Object.prototype.hasOwnProperty.call(R,V)?R[V]:R[V]=S(V)}function d(V,S){this.h=S;for(var R=[],N=!0,M=V.length-1;0<=M;M--){var k=V[M]|0;N&&k==S||(R[M]=k,N=!1)}this.g=R}var p={};function g(V){return-128<=V&&128>V?c(V,function(S){return new d([S|0],0>S?-1:0)}):new d([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return C;if(0>V)return Z(y(-V));for(var S=[],R=1,N=0;V>=R;N++)S[N]=V/R|0,R*=4294967296;return new d(S,0)}function A(V,S){if(V.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V.charAt(0)=="-")return Z(A(V.substring(1),S));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),N=C,M=0;M<V.length;M+=8){var k=Math.min(8,V.length-M),b=parseInt(V.substring(M,M+k),S);8>k?(k=y(Math.pow(S,k)),N=N.j(k).add(y(b))):(N=N.j(R),N=N.add(y(b)))}return N}var C=g(0),I=g(1),F=g(16777216);r=d.prototype,r.m=function(){if(nt(this))return-Z(this).m();for(var V=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);V+=(0<=N?N:4294967296+N)*S,S*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if($(this))return"0";if(nt(this))return"-"+Z(this).toString(V);for(var S=y(Math.pow(V,6)),R=this,N="";;){var M=qt(R,S).g;R=Et(R,M.j(S));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(V);if(R=M,$(R))return k+N;for(;6>k.length;)k="0"+k;N=k+N}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function $(V){if(V.h!=0)return!1;for(var S=0;S<V.g.length;S++)if(V.g[S]!=0)return!1;return!0}function nt(V){return V.h==-1}r.l=function(V){return V=Et(this,V),nt(V)?-1:$(V)?0:1};function Z(V){for(var S=V.g.length,R=[],N=0;N<S;N++)R[N]=~V.g[N];return new d(R,~V.h).add(I)}r.abs=function(){return nt(this)?Z(this):this},r.add=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],N=0,M=0;M<=S;M++){var k=N+(this.i(M)&65535)+(V.i(M)&65535),b=(k>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);N=b>>>16,k&=65535,b&=65535,R[M]=b<<16|k}return new d(R,R[R.length-1]&-2147483648?-1:0)};function Et(V,S){return V.add(Z(S))}r.j=function(V){if($(this)||$(V))return C;if(nt(this))return nt(V)?Z(this).j(Z(V)):Z(Z(this).j(V));if(nt(V))return Z(this.j(Z(V)));if(0>this.l(F)&&0>V.l(F))return y(this.m()*V.m());for(var S=this.g.length+V.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var M=0;M<V.g.length;M++){var k=this.i(N)>>>16,b=this.i(N)&65535,Pe=V.i(M)>>>16,re=V.i(M)&65535;R[2*N+2*M]+=b*re,gt(R,2*N+2*M),R[2*N+2*M+1]+=k*re,gt(R,2*N+2*M+1),R[2*N+2*M+1]+=b*Pe,gt(R,2*N+2*M+1),R[2*N+2*M+2]+=k*Pe,gt(R,2*N+2*M+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new d(R,0)};function gt(V,S){for(;(V[S]&65535)!=V[S];)V[S+1]+=V[S]>>>16,V[S]&=65535,S++}function ct(V,S){this.g=V,this.h=S}function qt(V,S){if($(S))throw Error("division by zero");if($(V))return new ct(C,C);if(nt(V))return S=qt(Z(V),S),new ct(Z(S.g),Z(S.h));if(nt(S))return S=qt(V,Z(S)),new ct(Z(S.g),S.h);if(30<V.g.length){if(nt(V)||nt(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,N=S;0>=N.l(V);)R=Tt(R),N=Tt(N);var M=xt(R,1),k=xt(N,1);for(N=xt(N,2),R=xt(R,2);!$(N);){var b=k.add(N);0>=b.l(V)&&(M=M.add(R),k=b),N=xt(N,1),R=xt(R,1)}return S=Et(V,M.j(S)),new ct(M,S)}for(M=C;0<=V.l(S);){for(R=Math.max(1,Math.floor(V.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),k=y(R),b=k.j(S);nt(b)||0<b.l(V);)R-=N,k=y(R),b=k.j(S);$(k)&&(k=I),M=M.add(k),V=Et(V,b)}return new ct(M,V)}r.A=function(V){return qt(this,V).h},r.and=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&V.i(N);return new d(R,this.h&V.h)},r.or=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|V.i(N);return new d(R,this.h|V.h)},r.xor=function(V){for(var S=Math.max(this.g.length,V.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^V.i(N);return new d(R,this.h^V.h)};function Tt(V){for(var S=V.g.length+1,R=[],N=0;N<S;N++)R[N]=V.i(N)<<1|V.i(N-1)>>>31;return new d(R,V.h)}function xt(V,S){var R=S>>5;S%=32;for(var N=V.g.length-R,M=[],k=0;k<N;k++)M[k]=0<S?V.i(k+R)>>>S|V.i(k+R+1)<<32-S:V.i(k+R);return new d(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,xT=s,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=A,Ur=d}).apply(typeof pv<"u"?pv:typeof self<"u"?self:typeof window<"u"?window:{});var Ac=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zT,vl,BT,Nc,am,qT,HT,jT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ac=="object"&&Ac];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function l(u,m){if(m)t:{var _=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var U=u[T];if(!(U in _))break t;_=_[U]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&t(_,u,{configurable:!0,writable:!0,value:m})}}function c(u,m){u instanceof String&&(u+="");var _=0,T=!1,U={next:function(){if(!T&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return T=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}l("Array.prototype.values",function(u){return u||function(){return c(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},p=this||self;function g(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function A(u,m,_){return u.call.apply(u.bind,arguments)}function C(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,T),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:C,I.apply(null,arguments)}function F(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function $(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,U,q){for(var J=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)J[Nt-2]=arguments[Nt];return m.prototype[U].apply(T,J)}}function nt(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function Z(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(g(T)){const U=u.length||0,q=T.length||0;u.length=U+q;for(let J=0;J<q;J++)u[U+J]=T[J]}else u.push(T)}}class Et{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function gt(u){return/^[\s\xa0]*$/.test(u)}function ct(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function qt(u){return qt[" "](u),u}qt[" "]=function(){};var Tt=ct().indexOf("Gecko")!=-1&&!(ct().toLowerCase().indexOf("webkit")!=-1&&ct().indexOf("Edge")==-1)&&!(ct().indexOf("Trident")!=-1||ct().indexOf("MSIE")!=-1)&&ct().indexOf("Edge")==-1;function xt(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function V(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let _,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(_ in T)u[_]=T[_];for(let q=0;q<R.length;q++)_=R[q],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function M(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function k(u){p.setTimeout(()=>{throw u},0)}function b(){var u=Ut;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Pe{constructor(){this.h=this.g=null}add(m,_){const T=re.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var re=new Et(()=>new H,u=>u.reset());class H{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,ot=!1,Ut=new Pe,D=()=>{const u=p.Promise.resolve(void 0);tt=()=>{u.then(Y)}};var Y=()=>{for(var u;u=b();){try{u.h.call(u.g)}catch(_){k(_)}var m=re;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ot=!1};function et(){this.s=this.s,this.C=this.C}et.prototype.s=!1,et.prototype.ma=function(){this.s||(this.s=!0,this.N())},et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var lt=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};p.addEventListener("test",_,m),p.removeEventListener("test",_,m)}catch{}return u}();function wt(u,m){if(W.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Tt){t:{try{qt(m.nodeName);var U=!0;break t}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:yt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&wt.aa.h.call(this)}}$(wt,W);var yt={2:"touch",3:"pen",4:"mouse"};wt.prototype.h=function(){wt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ie="closure_listenable_"+(1e6*Math.random()|0),$t=0;function Fn(u,m,_,T,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=U,this.key=++$t,this.da=this.fa=!1}function Ji(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function _i(u){this.src=u,this.g={},this.h=0}_i.prototype.add=function(u,m,_,T,U){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var J=Xr(u,m,T,U);return-1<J?(m=u[J],_||(m.fa=!1)):(m=new Fn(m,this.src,q,!!T,U),m.fa=_,u.push(m)),m};function Yr(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],U=Array.prototype.indexOf.call(T,m,void 0),q;(q=0<=U)&&Array.prototype.splice.call(T,U,1),q&&(Ji(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Xr(u,m,_,T){for(var U=0;U<u.length;++U){var q=u[U];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==T)return U}return-1}var $r="closure_lm_"+(1e6*Math.random()|0),ao={};function Zl(u,m,_,T,U){if(Array.isArray(m)){for(var q=0;q<m.length;q++)Zl(u,m[q],_,T,U);return null}return _=Wl(_),u&&u[Ie]?u.K(m,_,y(T)?!!T.capture:!1,U):_n(u,m,_,!1,T,U)}function _n(u,m,_,T,U,q){if(!m)throw Error("Invalid event type");var J=y(U)?!!U.capture:!!U,Nt=Qs(u);if(Nt||(u[$r]=Nt=new _i(u)),_=Nt.add(m,_,T,J,q),_.proxy)return _;if(T=Dh(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)lt||(U=J),U===void 0&&(U=!1),u.addEventListener(m.toString(),T,U);else if(u.attachEvent)u.attachEvent(Zr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Dh(){function u(_){return m.call(u.src,u.listener,_)}const m=Oh;return u}function oo(u,m,_,T,U){if(Array.isArray(m))for(var q=0;q<m.length;q++)oo(u,m[q],_,T,U);else T=y(T)?!!T.capture:!!T,_=Wl(_),u&&u[Ie]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=Xr(q,_,T,U),-1<_&&(Ji(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Qs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Xr(m,_,T,U)),(_=-1<u?m[u]:null)&&Ks(_))}function Ks(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ie])Yr(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(Zr(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=Qs(m))?(Yr(_,u),_.h==0&&(_.src=null,m[$r]=null)):Ji(u)}}}function Zr(u){return u in ao?ao[u]:ao[u]="on"+u}function Oh(u,m){if(u.da)u=!0;else{m=new wt(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&Ks(u),u=_.call(T,m)}return u}function Qs(u){return u=u[$r],u instanceof _i?u:null}var lo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wl(u){return typeof u=="function"?u:(u[lo]||(u[lo]=function(m){return u.handleEvent(m)}),u[lo])}function se(){et.call(this),this.i=new _i(this),this.M=this,this.F=null}$(se,et),se.prototype[Ie]=!0,se.prototype.removeEventListener=function(u,m,_,T){oo(this,u,m,_,T)};function Ht(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new W(m,u);else if(m instanceof W)m.target=m.target||u;else{var U=m;m=new W(T,u),N(m,U)}if(U=!0,_)for(var q=_.length-1;0<=q;q--){var J=m.g=_[q];U=on(J,T,!0,m)&&U}if(J=m.g=u,U=on(J,T,!0,m)&&U,U=on(J,T,!1,m)&&U,_)for(q=0;q<_.length;q++)J=m.g=_[q],U=on(J,T,!1,m)&&U}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)Ji(_[T]);delete u.g[m],u.h--}}this.F=null},se.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},se.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function on(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,q=0;q<m.length;++q){var J=m[q];if(J&&!J.da&&J.capture==_){var Nt=J.listener,ve=J.ha||J.src;J.fa&&Yr(u.i,J),U=Nt.call(ve,T)!==!1&&U}}return U&&!T.defaultPrevented}function je(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(u,m||0)}function Jl(u){u.g=je(()=>{u.g=null,u.i&&(u.i=!1,Jl(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Nh extends et{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Jl(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(u){et.call(this),this.h=u,this.g={}}$(Wr,et);var Jr=[];function ts(u){xt(u.g,function(m,_){this.g.hasOwnProperty(_)&&Ks(m)},u),u.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),ts(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=p.JSON.stringify,Ys=p.JSON.parse,es=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function uo(){}uo.prototype.h=null;function co(u){return u.h||(u.h=u.i())}function ho(){}var vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ei(){W.call(this,"d")}$(Ei,W);function fo(){W.call(this,"c")}$(fo,W);var Gn={},mo=null;function tr(){return mo=mo||new se}Gn.La="serverreachability";function Xs(u){W.call(this,Gn.La,u)}$(Xs,W);function er(u){const m=tr();Ht(m,new Xs(m))}Gn.STAT_EVENT="statevent";function tu(u,m){W.call(this,Gn.STAT_EVENT,u),this.stat=m}$(tu,W);function Jt(u){const m=tr();Ht(m,new tu(m,u))}Gn.Ma="timingevent";function _e(u,m){W.call(this,Gn.Ma,u),this.size=m}$(_e,W);function fe(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},m)}function vn(){this.g=!0}vn.prototype.xa=function(){this.g=!1};function po(u,m,_,T,U,q){u.info(function(){if(u.g)if(q)for(var J="",Nt=q.split("&"),ve=0;ve<Nt.length;ve++){var Mt=Nt[ve].split("=");if(1<Mt.length){var De=Mt[0];Mt=Mt[1];var Ee=De.split("_");J=2<=Ee.length&&Ee[1]=="type"?J+(De+"="+Mt+"&"):J+(De+"=redacted&")}}else J=null;else J=q;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+m+`
`+_+`
`+J})}function Mh(u,m,_,T,U,q,J){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+m+`
`+_+`
`+q+" "+J})}function nr(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+ns(u,_)+(T?" "+T:"")})}function eu(u,m){u.info(function(){return"TIMEOUT: "+m})}vn.prototype.info=function(){};function ns(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var U=T[1];if(Array.isArray(U)&&!(1>U.length)){var q=U[0];if(q!="noop"&&q!="stop"&&q!="close")for(var J=1;J<U.length;J++)U[J]=""}}}}return Pn(_)}catch{return m}}var ir={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kn;function Qn(){}$(Qn,uo),Qn.prototype.g=function(){return new XMLHttpRequest},Qn.prototype.i=function(){return{}},Kn=new Qn;function $e(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new le}function le(){this.i=null,this.g="",this.h=!1}var go={},$s={};function kn(u,m,_){u.L=1,u.v=os(ln(m)),u.m=_,u.P=!0,Ai(u,null)}function Ai(u,m){u.F=Date.now(),is(u),u.A=ln(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Ao(_.i,"t",T),u.C=0,_=u.j.J,u.h=new le,u.g=yu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Nh(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Jr[0]=U.toString()),U=Jr);for(var q=0;q<U.length;q++){var J=Zl(_,U[q],T||m.handleEvent,!1,m.h||m);if(!J)break;m.g[J.key]=J}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),er(),po(u.i,u.u,u.A,u.l,u.R,u.m)}$e.prototype.ca=function(u){u=u.target;const m=this.M;m&&Sn(u)==3?m.j():this.Y(u)},$e.prototype.Y=function(u){try{if(u==this.g)t:{const Ee=Sn(this.g);var m=this.g.Ba();const Oi=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||uu(this.g)))){this.J||Ee!=4||m==7||(m==8||0>=Oi?er(3):er(2)),rr(this);var _=this.g.Z();this.X=_;e:if(nu(this)){var T=uu(this.g);u="";var U=T.length,q=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),Yn(this);var J="";break e}this.h.i=new p.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(q&&m==U-1)});T.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=_==200,Mh(this.i,this.u,this.A,this.l,this.R,Ee,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Nt,ve=this.g;if((Nt=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gt(Nt)){var Mt=Nt;break e}}Mt=null}if(_=Mt)nr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rs(this,_);else{this.o=!1,this.s=3,Jt(12),ke(this),Yn(this);break t}}if(this.P){_=!0;let Ue;for(;!this.J&&this.C<J.length;)if(Ue=iu(this,J),Ue==$s){Ee==4&&(this.s=4,Jt(14),_=!1),nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==go){this.s=4,Jt(15),nr(this.i,this.l,J,"[Invalid Chunk]"),_=!1;break}else nr(this.i,this.l,Ue,null),rs(this,Ue);if(nu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||J.length!=0||this.h.h||(this.s=1,Jt(16),_=!1),this.o=this.o&&_,!_)nr(this.i,this.l,J,"[Invalid Chunked Response]"),ke(this),Yn(this);else if(0<J.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),ps(De),De.M=!0,Jt(11))}}else nr(this.i,this.l,J,null),rs(this,J);Ee==4&&ke(this),this.o&&!this.J&&(Ee==4?mu(this.j,this):(this.o=!1,is(this)))}else Lh(this.g),_==400&&0<J.indexOf("Unknown SID")?(this.s=3,Jt(12)):(this.s=0,Jt(13)),ke(this),Yn(this)}}}catch{}finally{}};function nu(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function iu(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?$s:(_=Number(m.substring(_,T)),isNaN(_)?go:(T+=1,T+_>m.length?$s:(m=m.slice(T,T+_),u.C=T+_,m)))}$e.prototype.cancel=function(){this.J=!0,ke(this)};function is(u){u.S=Date.now()+u.I,ru(u,u.I)}function ru(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=fe(I(u.ba,u),m)}function rr(u){u.B&&(p.clearTimeout(u.B),u.B=null)}$e.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(eu(this.i,this.A),this.L!=2&&(er(),Jt(17)),ke(this),this.s=2,Yn(this)):ru(this,this.S-u)};function Yn(u){u.j.G==0||u.J||mu(u.j,u)}function ke(u){rr(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ts(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function rs(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||yo(_.h,u))){if(!u.K&&yo(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)la(_),aa(_);else break t;Io(_),Jt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=fe(I(_.Za,_),6e3));if(1>=Ws(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Di(_,11)}else if((u.K||_.g==u)&&la(_),!gt(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let Mt=U[m];if(_.T=Mt[0],Mt=Mt[1],_.G==2)if(Mt[0]=="c"){_.K=Mt[1],_.ia=Mt[2];const De=Mt[3];De!=null&&(_.la=De,_.j.info("VER="+_.la));const Ee=Mt[4];Ee!=null&&(_.Aa=Ee,_.j.info("SVER="+_.Aa));const Oi=Mt[5];Oi!=null&&typeof Oi=="number"&&0<Oi&&(T=1.5*Oi,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Ue=u.g;if(Ue){const ei=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var q=T.h;q.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Js(q,q.h),q.h=null))}if(T.D){const Do=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;Do&&(T.ya=Do,Gt(T.I,T.D,Do))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var J=u;if(T.qa=gu(T,T.J?T.ia:null,T.W),J.K){Ze(T.h,J);var Nt=J,ve=T.L;ve&&(Nt.I=ve),Nt.B&&(rr(Nt),is(Nt)),T.g=J}else fu(T);0<_.i.length&&oa(_)}else Mt[0]!="stop"&&Mt[0]!="close"||Di(_,7);else _.G==3&&(Mt[0]=="stop"||Mt[0]=="close"?Mt[0]=="stop"?Di(_,7):bo(_):Mt[0]!="noop"&&_.l&&_.l.ta(Mt),_.v=0)}}er(4)}catch{}}var su=class{constructor(u,m){this.g=u,this.map=m}};function Si(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zs(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ws(u){return u.h?1:u.g?u.g.size:0}function yo(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Js(u,m){u.g?u.g.add(m):u.h=m}function Ze(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Si.prototype.cancel=function(){if(this.i=_o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function _o(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return nt(u.i)}function Vh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function ta(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function vo(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=ta(u),T=Vh(u),U=T.length,q=0;q<U;q++)m.call(void 0,T[q],_&&_[q],u)}var ss=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ph(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),U=null;if(0<=T){var q=u[_].substring(0,T);U=u[_].substring(T+1)}else q=u[_];m(q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function de(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof de){this.h=u.h,as(this,u.j),this.o=u.o,this.g=u.g,sr(this,u.s),this.l=u.l;var m=u.i,_=new bi;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),wi(this,_),this.m=u.m}else u&&(m=String(u).match(ss))?(this.h=!1,as(this,m[1]||"",!0),this.o=En(m[2]||""),this.g=En(m[3]||"",!0),sr(this,m[4]),this.l=En(m[5]||"",!0),wi(this,m[6]||"",!0),this.m=En(m[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}de.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ls(m,Eo,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ls(m,Eo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ls(_,_.charAt(0)=="/"?kh:To,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ls(_,ea)),u.join("")};function ln(u){return new de(u)}function as(u,m,_){u.j=_?En(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function sr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function wi(u,m,_){m instanceof bi?(u.i=m,ou(u.i,u.h)):(_||(m=ls(m,Uh)),u.i=new bi(m,u.h))}function Gt(u,m,_){u.i.set(m,_)}function os(u){return Gt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function En(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ls(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,au),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function au(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Eo=/[#\/\?@]/g,To=/[#\?:]/g,kh=/[#\?]/g,Uh=/[#\?@]/g,ea=/#/g;function bi(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Tn(u){u.g||(u.g=new Map,u.h=0,u.i&&Ph(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=bi.prototype,r.add=function(u,m){Tn(this),this.i=null,u=Xn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Ri(u,m){Tn(u),m=Xn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ii(u,m){return Tn(u),m=Xn(u,m),u.g.has(m)}r.forEach=function(u,m){Tn(this),this.g.forEach(function(_,T){_.forEach(function(U){u.call(m,U,T,this)},this)},this)},r.na=function(){Tn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const U=u[T];for(let q=0;q<U.length;q++)_.push(m[T])}return _},r.V=function(u){Tn(this);let m=[];if(typeof u=="string")Ii(this,u)&&(m=m.concat(this.g.get(Xn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return Tn(this),this.i=null,u=Xn(this,u),Ii(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Ao(u,m,_){Ri(u,m),0<_.length&&(u.i=null,u.g.set(Xn(u,m),nt(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const q=encodeURIComponent(String(T)),J=this.V(T);for(T=0;T<J.length;T++){var U=q;J[T]!==""&&(U+="="+encodeURIComponent(String(J[T]))),u.push(U)}}return this.i=u.join("&")};function Xn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function ou(u,m){m&&!u.j&&(Tn(u),u.i=null,u.g.forEach(function(_,T){var U=T.toLowerCase();T!=U&&(Ri(this,T),Ao(this,U,_))},u)),u.j=m}function us(u,m){const _=new vn;if(p.Image){const T=new Image;T.onload=F(An,_,"TestLoadImage: loaded",!0,m,T),T.onerror=F(An,_,"TestLoadImage: error",!1,m,T),T.onabort=F(An,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=F(An,_,"TestLoadImage: timeout",!1,m,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Un(u,m){const _=new vn,T=new AbortController,U=setTimeout(()=>{T.abort(),An(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(q=>{clearTimeout(U),q.ok?An(_,"TestPingServer: ok",!0,m):An(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),An(_,"TestPingServer: error",!1,m)})}function An(u,m,_,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(_)}catch{}}function cs(){this.g=new es}function $n(u,m,_){const T=_||"";try{vo(u,function(U,q){let J=U;y(U)&&(J=Pn(U)),m.push(T+q+"="+encodeURIComponent(J))})}catch(U){throw m.push(T+"type="+encodeURIComponent("_badmap")),U}}function ar(u){this.l=u.Ub||null,this.j=u.eb||!1}$(ar,uo),ar.prototype.g=function(){return new Ci(this.l,this.j)},ar.prototype.i=function(u){return function(){return u}}({});function Ci(u,m){se.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Ci,se),r=Ci.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Wn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;So(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function So(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Zn(this):Wn(this),this.readyState==3&&So(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Zn(this))},r.Qa=function(u){this.g&&(this.response=u,Zn(this))},r.ga=function(){this.g&&Zn(this)};function Zn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Wn(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Wn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wo(u){let m="";return xt(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function Ce(u,m,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=wo(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Gt(u,m,_))}function zt(u){se.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(zt,se);var na=/^https?$/i,hs=["POST","PUT"];r=zt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kn.g(),this.v=this.o?co(this.o):co(Kn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){lu(this,q);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)_.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const q of T.keys())_.set(q,T.get(q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),U=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(hs,m,void 0))||T||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,J]of _)this.g.setRequestHeader(q,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fs(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){lu(this,q)}};function lu(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ia(u),Jn(u)}function ia(u){u.A||(u.A=!0,Ht(u,"complete"),Ht(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ht(this,"complete"),Ht(this,"abort"),Jn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),zt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ra(this):this.bb())},r.bb=function(){ra(this)};function ra(u){if(u.h&&typeof d<"u"&&(!u.v[1]||Sn(u)!=4||u.Z()!=2)){if(u.u&&Sn(u)==4)je(u.Ea,0,u);else if(Ht(u,"readystatechange"),Sn(u)==4){u.h=!1;try{const J=u.Z();t:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var T;if(T=J===0){var U=String(u.D).match(ss)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),T=!na.test(U?U.toLowerCase():"")}_=T}if(_)Ht(u,"complete"),Ht(u,"success");else{u.m=6;try{var q=2<Sn(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",ia(u)}}finally{Jn(u)}}}}function Jn(u,m){if(u.g){fs(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Ht(u,"ready");try{_.onreadystatechange=T}catch{}}}function fs(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Sn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ys(m)}};function uu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Lh(u){const m={};u=(u.g&&2<=Sn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(gt(u[T]))continue;var _=M(u[T]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[U]||[];m[U]=q,q.push(_)}V(m,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function sa(u){this.Aa=0,this.i=[],this.j=new vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,u),this.cb=ds("retryDelaySeedMs",1e4,u),this.Wa=ds("forwardChannelMaxRetries",2,u),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Si(u&&u.concurrentRequestLimit),this.Da=new cs,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=sa.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,T){Jt(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=gu(this,null,this.W),oa(this)};function bo(u){if(cu(u),u.G==3){var m=u.U++,_=ln(u.I);if(Gt(_,"SID",u.K),Gt(_,"RID",m),Gt(_,"TYPE","terminate"),ms(u,_),m=new $e(u,u.j,m),m.L=2,m.v=os(ln(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=m.v,_=!0),_||(m.g=yu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),is(m)}pu(u)}function aa(u){u.g&&(ps(u),u.g.cancel(),u.g=null)}function cu(u){aa(u),u.u&&(p.clearTimeout(u.u),u.u=null),la(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function oa(u){if(!Zs(u.h)&&!u.s){u.s=!0;var m=u.Ga;tt||D(),ot||(tt(),ot=!0),Ut.add(m,u),u.B=0}}function xh(u,m){return Ws(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=fe(I(u.Ga,u,m),Co(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new $e(this,this.j,u);let q=this.o;if(this.S&&(q?(q=S(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(U.H=q,q=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=hu(this,U,m),_=ln(this.I),Gt(_,"RID",u),Gt(_,"CVER",22),this.D&&Gt(_,"X-HTTP-Session-Id",this.D),ms(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(wo(q)))+"&"+m:this.m&&Ce(_,this.m,q)),Js(this.h,U),this.Ua&&Gt(_,"TYPE","init"),this.P?(Gt(_,"$req",m),Gt(_,"SID","null"),U.T=!0,kn(U,_,null)):kn(U,_,m),this.G=2}}else this.G==3&&(u?Ro(this,u):this.i.length==0||Zs(this.h)||Ro(this))};function Ro(u,m){var _;m?_=m.l:_=u.U++;const T=ln(u.I);Gt(T,"SID",u.K),Gt(T,"RID",_),Gt(T,"AID",u.T),ms(u,T),u.m&&u.o&&Ce(T,u.m,u.o),_=new $e(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=hu(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Js(u.h,_),kn(_,T,m)}function ms(u,m){u.H&&xt(u.H,function(_,T){Gt(m,T,_)}),u.l&&vo({},function(_,T){Gt(m,T,_)})}function hu(u,m,_){_=Math.min(u.i.length,_);var T=u.l?I(u.l.Na,u.l,u):null;t:{var U=u.i;let q=-1;for(;;){const J=["count="+_];q==-1?0<_?(q=U[0].g,J.push("ofs="+q)):q=0:J.push("ofs="+q);let Nt=!0;for(let ve=0;ve<_;ve++){let Mt=U[ve].g;const De=U[ve].map;if(Mt-=q,0>Mt)q=Math.max(0,U[ve].g-100),Nt=!1;else try{$n(De,J,"req"+Mt+"_")}catch{T&&T(De)}}if(Nt){T=J.join("&");break t}}}return u=u.i.splice(0,_),m.D=u,T}function fu(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;tt||D(),ot||(tt(),ot=!0),Ut.add(m,u),u.v=0}}function Io(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=fe(I(u.Fa,u),Co(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=fe(I(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Jt(10),aa(this),du(this))};function ps(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function du(u){u.g=new $e(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=ln(u.qa);Gt(m,"RID","rpc"),Gt(m,"SID",u.K),Gt(m,"AID",u.T),Gt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Gt(m,"TO",u.ja),Gt(m,"TYPE","xmlhttp"),ms(u,m),u.m&&u.o&&Ce(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=os(ln(m)),_.m=null,_.P=!0,Ai(_,u)}r.Za=function(){this.C!=null&&(this.C=null,aa(this),Io(this),Jt(19))};function la(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function mu(u,m){var _=null;if(u.g==m){la(u),ps(u),u.g=null;var T=2}else if(yo(u.h,m))_=m.D,Ze(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;T=tr(),Ht(T,new _e(T,_)),oa(u)}else fu(u);else if(U=m.s,U==3||U==0&&0<m.X||!(T==1&&xh(u,m)||T==2&&Io(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:Di(u,5);break;case 4:Di(u,10);break;case 3:Di(u,6);break;default:Di(u,2)}}}function Co(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Di(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),T=u.Xa;const U=!T;T=new de(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||as(T,"https"),os(T),U?us(T.toString(),_):Un(T.toString(),_)}else Jt(2);u.G=0,u.l&&u.l.sa(m),pu(u),cu(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Jt(2)):(this.j.info("Failed to ping google.com"),Jt(1))};function pu(u){if(u.G=0,u.ka=[],u.l){const m=_o(u.h);(m.length!=0||u.i.length!=0)&&(Z(u.ka,m),Z(u.ka,u.i),u.h.i.length=0,nt(u.i),u.i.length=0),u.l.ra()}}function gu(u,m,_){var T=_ instanceof de?ln(_):new de(_);if(T.g!="")m&&(T.g=m+"."+T.g),sr(T,T.s);else{var U=p.location;T=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var q=new de(null);T&&as(q,T),m&&(q.g=m),U&&sr(q,U),_&&(q.l=_),T=q}return _=u.D,m=u.ya,_&&m&&Gt(T,_,m),Gt(T,"VER",u.la),ms(u,T),T}function yu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new zt(new ar({eb:_})):new zt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function _u(){}r=_u.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ua(){}ua.prototype.g=function(u,m){return new We(u,m)};function We(u,m){se.call(this),this.g=new sa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!gt(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!gt(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ti(this)}$(We,se),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){bo(this.g)},We.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Pn(u),u=_);m.i.push(new su(m.Ya++,u)),m.G==3&&oa(m)},We.prototype.N=function(){this.g.l=null,delete this.j,bo(this.g),delete this.g,We.aa.N.call(this)};function vu(u){Ei.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const _ in m){u=_;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(vu,Ei);function Eu(){fo.call(this),this.status=1}$(Eu,fo);function ti(u){this.g=u}$(ti,_u),ti.prototype.ua=function(){Ht(this.g,"a")},ti.prototype.ta=function(u){Ht(this.g,new vu(u))},ti.prototype.sa=function(u){Ht(this.g,new Eu)},ti.prototype.ra=function(){Ht(this.g,"b")},ua.prototype.createWebChannel=ua.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,jT=function(){return new ua},HT=function(){return tr()},qT=Gn,am={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ir.NO_ERROR=0,ir.TIMEOUT=8,ir.HTTP_ERROR=6,Nc=ir,Ti.COMPLETE="complete",BT=Ti,ho.EventType=vi,vi.OPEN="a",vi.CLOSE="b",vi.ERROR="c",vi.MESSAGE="d",se.prototype.listen=se.prototype.K,vl=ho,zt.prototype.listenOnce=zt.prototype.L,zt.prototype.getLastError=zt.prototype.Ka,zt.prototype.getLastErrorCode=zt.prototype.Ba,zt.prototype.getStatus=zt.prototype.Z,zt.prototype.getResponseJson=zt.prototype.Oa,zt.prototype.getResponseText=zt.prototype.oa,zt.prototype.send=zt.prototype.ea,zt.prototype.setWithCredentials=zt.prototype.Ha,zT=zt}).apply(typeof Ac<"u"?Ac:typeof self<"u"?self:typeof window<"u"?window:{});const gv="@firebase/firestore",yv="4.9.0";/**
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
 */class Qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let no="12.0.0";/**
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
 */const zs=new oh("@firebase/firestore");function xa(){return zs.logLevel}function it(r,...t){if(zs.logLevel<=Ct.DEBUG){const n=t.map(xm);zs.debug(`Firestore (${no}): ${r}`,...n)}}function Xi(r,...t){if(zs.logLevel<=Ct.ERROR){const n=t.map(xm);zs.error(`Firestore (${no}): ${r}`,...n)}}function Qa(r,...t){if(zs.logLevel<=Ct.WARN){const n=t.map(xm);zs.warn(`Firestore (${no}): ${r}`,...n)}}function xm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function mt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,FT(r,s,n)}function FT(r,t,n){let s=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Xi(s),new Error(s)}function Bt(r,t,n,s){let l="Unexpected state";typeof n=="string"?l=n:s=n,r||FT(t,l,s)}function vt(r,t){return r}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class st extends jn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class GT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class eC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class nC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iC{constructor(t){this.t=t,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Bt(this.o===void 0,42304);let s=this.i;const l=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let c=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Lr,t.enqueueRetryable(()=>l(this.currentUser))};const d=()=>{const g=c;t.enqueueRetryable(async()=>{await g.promise,await l(this.currentUser)})},p=g=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Lr)}},0),d()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Bt(typeof s.accessToken=="string",31837,{l:s}),new GT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Bt(t===null||typeof t=="string",2055,{h:t}),new Qe(t)}}class rC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sC{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new rC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _v{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Bt(this.o===void 0,3512);const s=c=>{c.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,it("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const l=c=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _v(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Bt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new _v(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class zm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=oC(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<n&&(s+=t.charAt(l[c]%62))}return s}}function Dt(r,t){return r<t?-1:r>t?1:0}function om(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const l=r.charAt(s),c=t.charAt(s);if(l!==c)return qd(l)===qd(c)?Dt(l,c):qd(l)?1:-1}return Dt(r.length,t.length)}const lC=55296,uC=57343;function qd(r){const t=r.charCodeAt(0);return t>=lC&&t<=uC}function Ya(r,t,n){return r.length===t.length&&r.every((s,l)=>n(s,t[l]))}/**
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
 */const vv="__name__";class oi{constructor(t,n,s){n===void 0?n=0:n>t.length&&mt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&mt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return oi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof oi?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let l=0;l<s;l++){const c=oi.compareSegments(t.get(l),n.get(l));if(c!==0)return c}return Dt(t.length,n.length)}static compareSegments(t,n){const s=oi.isNumericId(t),l=oi.isNumericId(n);return s&&!l?-1:!s&&l?1:s&&l?oi.extractNumericId(t).compare(oi.extractNumericId(n)):om(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ur.fromString(t.substring(4,t.length-2))}}class ne extends oi{construct(t,n,s){return new ne(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new st(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(l=>l.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const cC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends oi{construct(t,n,s){return new qe(t,n,s)}static isValidIdentifier(t){return cC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vv}static keyField(){return new qe([vv])}static fromServerFormat(t){const n=[];let s="",l=0;const c=()=>{if(s.length===0)throw new st(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let d=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new st(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new st(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(s+=p,l++):(c(),l++)}if(c(),d)throw new st(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class ut{constructor(t){this.path=t}static fromPath(t){return new ut(ne.fromString(t))}static fromName(t){return new ut(ne.fromString(t).popFirst(5))}static empty(){return new ut(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ne.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ne.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ut(new ne(t.slice()))}}/**
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
 */function hC(r,t,n){if(!n)throw new st(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function fC(r,t,n,s){if(t===!0&&s===!0)throw new st(X.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Ev(r){if(!ut.isDocumentKey(r))throw new st(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function KT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Bm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":mt(12329,{type:typeof r})}function Bs(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new st(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bm(r);throw new st(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(r,t){const n={typeString:r};return t&&(n.value=t),n}function Kl(r,t){if(!KT(r))throw new st(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const l=t[s].typeString,c="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const d=r[s];if(l&&typeof d!==l){n=`JSON field '${s}' must be a ${l}.`;break}if(c!==void 0&&d!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new st(X.INVALID_ARGUMENT,n);return!0}/**
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
 */const Tv=-62135596800,Av=1e6;class Wt{static now(){return Wt.fromMillis(Date.now())}static fromDate(t){return Wt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Av);return new Wt(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new st(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new st(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Tv)throw new st(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new st(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Av}_compareTo(t){return this.seconds===t.seconds?Dt(this.nanoseconds,t.nanoseconds):Dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Wt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Kl(t,Wt._jsonSchema))return new Wt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Tv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Wt._jsonSchemaVersion="firestore/timestamp/1.0",Wt._jsonSchema={type:ye("string",Wt._jsonSchemaVersion),seconds:ye("number"),nanoseconds:ye("number")};/**
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
 */class _t{static fromTimestamp(t){return new _t(t)}static min(){return new _t(new Wt(0,0))}static max(){return new _t(new Wt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Pl=-1;function dC(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=_t.fromTimestamp(s===1e9?new Wt(n+1,0):new Wt(n,s));return new zr(l,ut.empty(),t)}function mC(r){return new zr(r.readTime,r.key,Pl)}class zr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new zr(_t.min(),ut.empty(),Pl)}static max(){return new zr(_t.max(),ut.empty(),Pl)}}function pC(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ut.comparator(r.documentKey,t.documentKey),n!==0?n:Dt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function io(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==gC)throw r;it("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&mt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Q((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(t,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,l)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.reject(n)}static resolve(t){return new Q((n,s)=>{n(t)})}static reject(t){return new Q((n,s)=>{s(t)})}static waitFor(t){return new Q((n,s)=>{let l=0,c=0,d=!1;t.forEach(p=>{++l,p.next(()=>{++c,d&&c===l&&n()},g=>s(g))}),d=!0,c===l&&n()})}static or(t){let n=Q.resolve(!1);for(const s of t)n=n.next(l=>l?Q.resolve(l):s());return n}static forEach(t,n){const s=[];return t.forEach((l,c)=>{s.push(n.call(this,l,c))}),this.waitFor(s)}static mapArray(t,n){return new Q((s,l)=>{const c=t.length,d=new Array(c);let p=0;for(let g=0;g<c;g++){const y=g;n(t[y]).next(A=>{d[y]=A,++p,p===c&&s(d)},A=>l(A))}})}static doWhile(t,n){return new Q((s,l)=>{const c=()=>{t()===!0?n().next(()=>{c()},l):s()};c()})}}function _C(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ro(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class dh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}dh.ce=-1;/**
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
 */const qm=-1;function mh(r){return r==null}function Yc(r){return r===0&&1/r==-1/0}function vC(r){return typeof r=="number"&&Number.isInteger(r)&&!Yc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const QT="";function EC(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Sv(t)),t=TC(r.get(n),t);return Sv(t)}function TC(r,t){let n=t;const s=r.length;for(let l=0;l<s;l++){const c=r.charAt(l);switch(c){case"\0":n+="";break;case QT:n+="";break;default:n+=c}}return n}function Sv(r){return r+QT+""}/**
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
 */function wv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Kr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function YT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ie{constructor(t,n){this.comparator=t,this.root=n||Be.EMPTY}insert(t,n){return new ie(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(t){return new ie(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Be.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return n+s.left.size;l<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sc(this.root,t,this.comparator,!0)}}class Sc{constructor(t,n,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!t.isEmpty();)if(c=n?s(t.key,n):1,n&&l&&(c*=-1),c<0)t=this.isReverse?t.left:t.right;else{if(c===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Be{constructor(t,n,s,l,c){this.key=t,this.value=n,this.color=s??Be.RED,this.left=l??Be.EMPTY,this.right=c??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,l,c){return new Be(t??this.key,n??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let l=this;const c=s(t,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(t,n,s),null):c===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(t,n,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,l=this;if(n(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(t,l.key)===0){if(l.right.isEmpty())return Be.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw mt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw mt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw mt(27949);return t+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw mt(57766)}get value(){throw mt(16141)}get color(){throw mt(16727)}get left(){throw mt(29726)}get right(){throw mt(36894)}copy(t,n,s,l,c){return this}insert(t,n,s){return new Be(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class be{constructor(t){this.comparator=t,this.data=new ie(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;n(l.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new bv(this.data.getIterator())}getIteratorFrom(t){return new bv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new be(this.comparator);return n.data=t,n}}class bv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.fields=t,t.sort(qe.comparator)}static empty(){return new gn([])}unionWith(t){let n=new be(qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new gn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ya(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class XT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new XT("Invalid base64 string: "+c):c}}(t);return new He(n)}static fromUint8Array(t){const n=function(l){let c="";for(let d=0;d<l.length;++d)c+=String.fromCharCode(l[d]);return c}(t);return new He(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}He.EMPTY_BYTE_STRING=new He("");const AC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(r){if(Bt(!!r,39018),typeof r=="string"){let t=0;const n=AC.exec(r);if(Bt(!!n,46558,{timestamp:r}),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:he(r.seconds),nanos:he(r.nanos)}}function he(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function qr(r){return typeof r=="string"?He.fromBase64String(r):He.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="server_timestamp",ZT="__type__",WT="__previous_value__",JT="__local_write_time__";function Hm(r){return(r?.mapValue?.fields||{})[ZT]?.stringValue===$T}function ph(r){const t=r.mapValue.fields[WT];return Hm(t)?ph(t):t}function kl(r){const t=Br(r.mapValue.fields[JT].timestampValue);return new Wt(t.seconds,t.nanos)}/**
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
 */class SC{constructor(t,n,s,l,c,d,p,g,y,A){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=A}}const Xc="(default)";class Ul{constructor(t,n){this.projectId=t,this.database=n||Xc}static empty(){return new Ul("","")}get isDefaultDatabase(){return this.database===Xc}isEqual(t){return t instanceof Ul&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="__type__",wC="__max__",wc={mapValue:{}},e0="__vector__",$c="value";function Hr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Hm(r)?4:RC(r)?9007199254740991:bC(r)?10:11:mt(28295,{value:r})}function gi(r,t){if(r===t)return!0;const n=Hr(r);if(n!==Hr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return kl(r).isEqual(kl(t));case 3:return function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const d=Br(l.timestampValue),p=Br(c.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,c){return qr(l.bytesValue).isEqual(qr(c.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,c){return he(l.geoPointValue.latitude)===he(c.geoPointValue.latitude)&&he(l.geoPointValue.longitude)===he(c.geoPointValue.longitude)}(r,t);case 2:return function(l,c){if("integerValue"in l&&"integerValue"in c)return he(l.integerValue)===he(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const d=he(l.doubleValue),p=he(c.doubleValue);return d===p?Yc(d)===Yc(p):isNaN(d)&&isNaN(p)}return!1}(r,t);case 9:return Ya(r.arrayValue.values||[],t.arrayValue.values||[],gi);case 10:case 11:return function(l,c){const d=l.mapValue.fields||{},p=c.mapValue.fields||{};if(wv(d)!==wv(p))return!1;for(const g in d)if(d.hasOwnProperty(g)&&(p[g]===void 0||!gi(d[g],p[g])))return!1;return!0}(r,t);default:return mt(52216,{left:r})}}function Ll(r,t){return(r.values||[]).find(n=>gi(n,t))!==void 0}function Xa(r,t){if(r===t)return 0;const n=Hr(r),s=Hr(t);if(n!==s)return Dt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Dt(r.booleanValue,t.booleanValue);case 2:return function(c,d){const p=he(c.integerValue||c.doubleValue),g=he(d.integerValue||d.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(r,t);case 3:return Rv(r.timestampValue,t.timestampValue);case 4:return Rv(kl(r),kl(t));case 5:return om(r.stringValue,t.stringValue);case 6:return function(c,d){const p=qr(c),g=qr(d);return p.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(c,d){const p=c.split("/"),g=d.split("/");for(let y=0;y<p.length&&y<g.length;y++){const A=Dt(p[y],g[y]);if(A!==0)return A}return Dt(p.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(c,d){const p=Dt(he(c.latitude),he(d.latitude));return p!==0?p:Dt(he(c.longitude),he(d.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Iv(r.arrayValue,t.arrayValue);case 10:return function(c,d){const p=c.fields||{},g=d.fields||{},y=p[$c]?.arrayValue,A=g[$c]?.arrayValue,C=Dt(y?.values?.length||0,A?.values?.length||0);return C!==0?C:Iv(y,A)}(r.mapValue,t.mapValue);case 11:return function(c,d){if(c===wc.mapValue&&d===wc.mapValue)return 0;if(c===wc.mapValue)return 1;if(d===wc.mapValue)return-1;const p=c.fields||{},g=Object.keys(p),y=d.fields||{},A=Object.keys(y);g.sort(),A.sort();for(let C=0;C<g.length&&C<A.length;++C){const I=om(g[C],A[C]);if(I!==0)return I;const F=Xa(p[g[C]],y[A[C]]);if(F!==0)return F}return Dt(g.length,A.length)}(r.mapValue,t.mapValue);default:throw mt(23264,{he:n})}}function Rv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Dt(r,t);const n=Br(r),s=Br(t),l=Dt(n.seconds,s.seconds);return l!==0?l:Dt(n.nanos,s.nanos)}function Iv(r,t){const n=r.values||[],s=t.values||[];for(let l=0;l<n.length&&l<s.length;++l){const c=Xa(n[l],s[l]);if(c)return c}return Dt(n.length,s.length)}function $a(r){return lm(r)}function lm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Br(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return qr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ut.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",l=!0;for(const c of n.values||[])l?l=!1:s+=",",s+=lm(c);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let l="{",c=!0;for(const d of s)c?c=!1:l+=",",l+=`${d}:${lm(n.fields[d])}`;return l+"}"}(r.mapValue):mt(61005,{value:r})}function Mc(r){switch(Hr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ph(r);return t?16+Mc(t):16;case 5:return 2*r.stringValue.length;case 6:return qr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((l,c)=>l+Mc(c),0)}(r.arrayValue);case 10:case 11:return function(s){let l=0;return Kr(s.fields,(c,d)=>{l+=c.length+Mc(d)}),l}(r.mapValue);default:throw mt(13486,{value:r})}}function um(r){return!!r&&"integerValue"in r}function jm(r){return!!r&&"arrayValue"in r}function Cv(r){return!!r&&"nullValue"in r}function Dv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Vc(r){return!!r&&"mapValue"in r}function bC(r){return(r?.mapValue?.fields||{})[t0]?.stringValue===e0}function Rl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return Kr(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Rl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Rl(r.arrayValue.values[n]);return t}return{...r}}function RC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===wC}/**
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
 */class sn{constructor(t){this.value=t}static empty(){return new sn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Vc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Rl(n)}setAll(t){let n=qe.emptyPath(),s={},l=[];t.forEach((d,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,s,l),s={},l=[],n=p.popLast()}d?s[p.lastSegment()]=Rl(d):l.push(p.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,l)}delete(t){const n=this.field(t.popLast());Vc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return gi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=n.mapValue.fields[t.get(s)];Vc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=l),n=l}return n.mapValue.fields}applyChanges(t,n,s){Kr(n,(l,c)=>t[l]=c);for(const l of s)delete t[l]}clone(){return new sn(Rl(this.value))}}function n0(r){const t=[];return Kr(r.fields,(n,s)=>{const l=new qe([n]);if(Vc(s)){const c=n0(s.mapValue).fields;if(c.length===0)t.push(l);else for(const d of c)t.push(l.child(d))}else t.push(l)}),new gn(t)}/**
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
 */class Ye{constructor(t,n,s,l,c,d,p){this.key=t,this.documentType=n,this.version=s,this.readTime=l,this.createTime=c,this.data=d,this.documentState=p}static newInvalidDocument(t){return new Ye(t,0,_t.min(),_t.min(),_t.min(),sn.empty(),0)}static newFoundDocument(t,n,s,l){return new Ye(t,1,n,_t.min(),s,l,0)}static newNoDocument(t,n){return new Ye(t,2,n,_t.min(),_t.min(),sn.empty(),0)}static newUnknownDocument(t,n){return new Ye(t,3,n,_t.min(),_t.min(),sn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(_t.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_t.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ye&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zc{constructor(t,n){this.position=t,this.inclusive=n}}function Ov(r,t,n){let s=0;for(let l=0;l<r.position.length;l++){const c=t[l],d=r.position[l];if(c.field.isKeyField()?s=ut.comparator(ut.fromName(d.referenceValue),n.key):s=Xa(d,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!gi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Wc{constructor(t,n="asc"){this.field=t,this.dir=n}}function IC(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class i0{}class Se extends i0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new DC(t,n,s):n==="array-contains"?new MC(t,s):n==="in"?new VC(t,s):n==="not-in"?new PC(t,s):n==="array-contains-any"?new kC(t,s):new Se(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new OC(t,s):new NC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Xa(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(Xa(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return mt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yi extends i0{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new yi(t,n)}matches(t){return r0(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function r0(r){return r.op==="and"}function s0(r){return CC(r)&&r0(r)}function CC(r){for(const t of r.filters)if(t instanceof yi)return!1;return!0}function cm(r){if(r instanceof Se)return r.field.canonicalString()+r.op.toString()+$a(r.value);if(s0(r))return r.filters.map(t=>cm(t)).join(",");{const t=r.filters.map(n=>cm(n)).join(",");return`${r.op}(${t})`}}function a0(r,t){return r instanceof Se?function(s,l){return l instanceof Se&&s.op===l.op&&s.field.isEqual(l.field)&&gi(s.value,l.value)}(r,t):r instanceof yi?function(s,l){return l instanceof yi&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce((c,d,p)=>c&&a0(d,l.filters[p]),!0):!1}(r,t):void mt(19439)}function o0(r){return r instanceof Se?function(n){return`${n.field.canonicalString()} ${n.op} ${$a(n.value)}`}(r):r instanceof yi?function(n){return n.op.toString()+" {"+n.getFilters().map(o0).join(" ,")+"}"}(r):"Filter"}class DC extends Se{constructor(t,n,s){super(t,n,s),this.key=ut.fromName(s.referenceValue)}matches(t){const n=ut.comparator(t.key,this.key);return this.matchesComparison(n)}}class OC extends Se{constructor(t,n){super(t,"in",n),this.keys=l0("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class NC extends Se{constructor(t,n){super(t,"not-in",n),this.keys=l0("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function l0(r,t){return(t.arrayValue?.values||[]).map(n=>ut.fromName(n.referenceValue))}class MC extends Se{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return jm(n)&&Ll(n.arrayValue,this.value)}}class VC extends Se{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ll(this.value.arrayValue,n)}}class PC extends Se{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ll(this.value.arrayValue,n)}}class kC extends Se{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!jm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ll(this.value.arrayValue,s))}}/**
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
 */class UC{constructor(t,n=null,s=[],l=[],c=null,d=null,p=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=d,this.endAt=p,this.Te=null}}function Mv(r,t=null,n=[],s=[],l=null,c=null,d=null){return new UC(r,t,n,s,l,c,d)}function Fm(r){const t=vt(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>cm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),mh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>$a(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>$a(s)).join(",")),t.Te=n}return t.Te}function Gm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!IC(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!a0(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Nv(r.startAt,t.startAt)&&Nv(r.endAt,t.endAt)}function hm(r){return ut.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class gh{constructor(t,n=null,s=[],l=[],c=null,d="F",p=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=d,this.startAt=p,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function LC(r,t,n,s,l,c,d,p){return new gh(r,t,n,s,l,c,d,p)}function Km(r){return new gh(r)}function Vv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function xC(r){return r.collectionGroup!==null}function Il(r){const t=vt(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const c of t.explicitOrderBy)t.Ie.push(c),n.add(c.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new be(qe.comparator);return d.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(p=p.add(y.field))})}),p})(t).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||t.Ie.push(new Wc(c,s))}),n.has(qe.keyField().canonicalString())||t.Ie.push(new Wc(qe.keyField(),s))}return t.Ie}function ci(r){const t=vt(r);return t.Ee||(t.Ee=zC(t,Il(r))),t.Ee}function zC(r,t){if(r.limitType==="F")return Mv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const c=l.dir==="desc"?"asc":"desc";return new Wc(l.field,c)});const n=r.endAt?new Zc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Zc(r.startAt.position,r.startAt.inclusive):null;return Mv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function fm(r,t,n){return new gh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function yh(r,t){return Gm(ci(r),ci(t))&&r.limitType===t.limitType}function u0(r){return`${Fm(ci(r))}|lt:${r.limitType}`}function za(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(l=>o0(l)).join(", ")}]`),mh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(l=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(l)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(l=>$a(l)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(l=>$a(l)).join(",")),`Target(${s})`}(ci(r))}; limitType=${r.limitType})`}function _h(r,t){return t.isFoundDocument()&&function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ut.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(r,t)&&function(s,l){for(const c of Il(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0}(r,t)&&function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0}(r,t)&&function(s,l){return!(s.startAt&&!function(d,p,g){const y=Ov(d,p,g);return d.inclusive?y<=0:y<0}(s.startAt,Il(s),l)||s.endAt&&!function(d,p,g){const y=Ov(d,p,g);return d.inclusive?y>=0:y>0}(s.endAt,Il(s),l))}(r,t)}function BC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function c0(r){return(t,n)=>{let s=!1;for(const l of Il(r)){const c=qC(l,t,n);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function qC(r,t,n){const s=r.field.isKeyField()?ut.comparator(t.key,n.key):function(c,d,p){const g=d.data.field(c),y=p.data.field(c);return g!==null&&y!==null?Xa(g,y):mt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return mt(19790,{direction:r.dir})}}/**
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
 */class Fs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,t))return c}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],t))return void(l[c]=[t,n]);l.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[n]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Kr(this.inner,(n,s)=>{for(const[l,c]of s)t(l,c)})}isEmpty(){return YT(this.inner)}size(){return this.innerSize}}/**
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
 */const HC=new ie(ut.comparator);function $i(){return HC}const h0=new ie(ut.comparator);function El(...r){let t=h0;for(const n of r)t=t.insert(n.key,n);return t}function f0(r){let t=h0;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Vs(){return Cl()}function d0(){return Cl()}function Cl(){return new Fs(r=>r.toString(),(r,t)=>r.isEqual(t))}const jC=new ie(ut.comparator),FC=new be(ut.comparator);function Ot(...r){let t=FC;for(const n of r)t=t.add(n);return t}const GC=new be(Dt);function KC(){return GC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(t)?"-0":t}}function m0(r){return{integerValue:""+r}}function QC(r,t){return vC(t)?m0(t):Qm(r,t)}/**
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
 */class vh{constructor(){this._=void 0}}function YC(r,t,n){return r instanceof Jc?function(l,c){const d={fields:{[ZT]:{stringValue:$T},[JT]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&Hm(c)&&(c=ph(c)),c&&(d.fields[WT]=c),{mapValue:d}}(n,t):r instanceof xl?g0(r,t):r instanceof zl?y0(r,t):function(l,c){const d=p0(l,c),p=Pv(d)+Pv(l.Ae);return um(d)&&um(l.Ae)?m0(p):Qm(l.serializer,p)}(r,t)}function XC(r,t,n){return r instanceof xl?g0(r,t):r instanceof zl?y0(r,t):n}function p0(r,t){return r instanceof th?function(s){return um(s)||function(c){return!!c&&"doubleValue"in c}(s)}(t)?t:{integerValue:0}:null}class Jc extends vh{}class xl extends vh{constructor(t){super(),this.elements=t}}function g0(r,t){const n=_0(t);for(const s of r.elements)n.some(l=>gi(l,s))||n.push(s);return{arrayValue:{values:n}}}class zl extends vh{constructor(t){super(),this.elements=t}}function y0(r,t){let n=_0(t);for(const s of r.elements)n=n.filter(l=>!gi(l,s));return{arrayValue:{values:n}}}class th extends vh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Pv(r){return he(r.integerValue||r.doubleValue)}function _0(r){return jm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function $C(r,t){return r.field.isEqual(t.field)&&function(s,l){return s instanceof xl&&l instanceof xl||s instanceof zl&&l instanceof zl?Ya(s.elements,l.elements,gi):s instanceof th&&l instanceof th?gi(s.Ae,l.Ae):s instanceof Jc&&l instanceof Jc}(r.transform,t.transform)}class ZC{constructor(t,n){this.version=t,this.transformResults=n}}class hi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new hi}static exists(t){return new hi(void 0,t)}static updateTime(t){return new hi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Eh{}function v0(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new T0(r.key,hi.none()):new Ql(r.key,r.data,hi.none());{const n=r.data,s=sn.empty();let l=new be(qe.comparator);for(let c of t.fields)if(!l.has(c)){let d=n.field(c);d===null&&c.length>1&&(c=c.popLast(),d=n.field(c)),d===null?s.delete(c):s.set(c,d),l=l.add(c)}return new Qr(r.key,s,new gn(l.toArray()),hi.none())}}function WC(r,t,n){r instanceof Ql?function(l,c,d){const p=l.value.clone(),g=Uv(l.fieldTransforms,c,d.transformResults);p.setAll(g),c.convertToFoundDocument(d.version,p).setHasCommittedMutations()}(r,t,n):r instanceof Qr?function(l,c,d){if(!Pc(l.precondition,c))return void c.convertToUnknownDocument(d.version);const p=Uv(l.fieldTransforms,c,d.transformResults),g=c.data;g.setAll(E0(l)),g.setAll(p),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()}(r,t,n):function(l,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()}(0,t,n)}function Dl(r,t,n,s){return r instanceof Ql?function(c,d,p,g){if(!Pc(c.precondition,d))return p;const y=c.value.clone(),A=Lv(c.fieldTransforms,g,d);return y.setAll(A),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Qr?function(c,d,p,g){if(!Pc(c.precondition,d))return p;const y=Lv(c.fieldTransforms,g,d),A=d.data;return A.setAll(E0(c)),A.setAll(y),d.convertToFoundDocument(d.version,A).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(C=>C.field))}(r,t,n,s):function(c,d,p){return Pc(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p}(r,t,n)}function JC(r,t){let n=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),c=p0(s.transform,l||null);c!=null&&(n===null&&(n=sn.empty()),n.set(s.field,c))}return n||null}function kv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&Ya(s,l,(c,d)=>$C(c,d))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Ql extends Eh{constructor(t,n,s,l=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Qr extends Eh{constructor(t,n,s,l,c=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function E0(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Uv(r,t,n){const s=new Map;Bt(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let l=0;l<n.length;l++){const c=r[l],d=c.transform,p=t.data.field(c.field);s.set(c.field,XC(d,p,n[l]))}return s}function Lv(r,t,n){const s=new Map;for(const l of r){const c=l.transform,d=n.data.field(l.field);s.set(l.field,YC(c,d,t))}return s}class T0 extends Eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t2 extends Eh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class e2{constructor(t,n,s,l){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(t.key)&&WC(c,t,s[l])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Dl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Dl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=d0();return this.mutations.forEach(l=>{const c=t.get(l.key),d=c.overlayedDocument;let p=this.applyToLocalView(d,c.mutatedFields);p=n.has(l.key)?null:p;const g=v0(d,p);g!==null&&s.set(l.key,g),d.isValidDocument()||d.convertToNoDocument(_t.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Ot())}isEqual(t){return this.batchId===t.batchId&&Ya(this.mutations,t.mutations,(n,s)=>kv(n,s))&&Ya(this.baseMutations,t.baseMutations,(n,s)=>kv(n,s))}}class Ym{constructor(t,n,s,l){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=l}static from(t,n,s){Bt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let l=function(){return jC}();const c=t.mutations;for(let d=0;d<c.length;d++)l=l.insert(c[d].key,s[d].version);return new Ym(t,n,s,l)}}/**
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
 */class n2{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class i2{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var ge,Pt;function r2(r){switch(r){case X.OK:return mt(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return mt(15467,{code:r})}}function A0(r){if(r===void 0)return Xi("GRPC error has no .code"),X.UNKNOWN;switch(r){case ge.OK:return X.OK;case ge.CANCELLED:return X.CANCELLED;case ge.UNKNOWN:return X.UNKNOWN;case ge.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case ge.INTERNAL:return X.INTERNAL;case ge.UNAVAILABLE:return X.UNAVAILABLE;case ge.UNAUTHENTICATED:return X.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case ge.NOT_FOUND:return X.NOT_FOUND;case ge.ALREADY_EXISTS:return X.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return X.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case ge.ABORTED:return X.ABORTED;case ge.OUT_OF_RANGE:return X.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return X.UNIMPLEMENTED;case ge.DATA_LOSS:return X.DATA_LOSS;default:return mt(39323,{code:r})}}(Pt=ge||(ge={}))[Pt.OK=0]="OK",Pt[Pt.CANCELLED=1]="CANCELLED",Pt[Pt.UNKNOWN=2]="UNKNOWN",Pt[Pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pt[Pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pt[Pt.NOT_FOUND=5]="NOT_FOUND",Pt[Pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pt[Pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pt[Pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pt[Pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pt[Pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pt[Pt.ABORTED=10]="ABORTED",Pt[Pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pt[Pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pt[Pt.INTERNAL=13]="INTERNAL",Pt[Pt.UNAVAILABLE=14]="UNAVAILABLE",Pt[Pt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function s2(){return new TextEncoder}/**
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
 */const a2=new Ur([4294967295,4294967295],0);function xv(r){const t=s2().encode(r),n=new xT;return n.update(t),new Uint8Array(n.digest())}function zv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),c=t.getUint32(12,!0);return[new Ur([n,s],0),new Ur([l,c],0)]}class Xm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Tl(`Invalid padding: ${n}`);if(s<0)throw new Tl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Tl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Tl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Ur.fromNumber(this.ge)}ye(t,n,s){let l=t.add(n.multiply(Ur.fromNumber(s)));return l.compare(a2)===1&&(l=new Ur([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=xv(t),[s,l]=zv(n);for(let c=0;c<this.hashCount;c++){const d=this.ye(s,l,c);if(!this.we(d))return!1}return!0}static create(t,n,s){const l=t%8==0?0:8-t%8,c=new Uint8Array(Math.ceil(t/8)),d=new Xm(c,l,n);return s.forEach(p=>d.insert(p)),d}insert(t){if(this.ge===0)return;const n=xv(t),[s,l]=zv(n);for(let c=0;c<this.hashCount;c++){const d=this.ye(s,l,c);this.Se(d)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Tl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Th{constructor(t,n,s,l,c){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const l=new Map;return l.set(t,Yl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Th(_t.min(),l,new ie(Dt),$i(),Ot())}}class Yl{constructor(t,n,s,l,c){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Yl(s,n,Ot(),Ot(),Ot())}}/**
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
 */class kc{constructor(t,n,s,l){this.be=t,this.removedTargetIds=n,this.key=s,this.De=l}}class S0{constructor(t,n){this.targetId=t,this.Ce=n}}class w0{constructor(t,n,s=He.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=l}}class Bv{constructor(){this.ve=0,this.Fe=qv(),this.Me=He.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Ot(),n=Ot(),s=Ot();return this.Fe.forEach((l,c)=>{switch(c){case 0:t=t.add(l);break;case 2:n=n.add(l);break;case 1:s=s.add(l);break;default:mt(38017,{changeType:c})}}),new Yl(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=qv()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Bt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class o2{constructor(t){this.Ge=t,this.ze=new Map,this.je=$i(),this.Je=bc(),this.He=bc(),this.Ye=new ie(Dt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:mt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((s,l)=>{this.rt(l)&&n(l)})}st(t){const n=t.targetId,s=t.Ce.count,l=this.ot(n);if(l){const c=l.target;if(hm(c))if(s===0){const d=new ut(c.path);this.et(n,d,Ye.newNoDocument(d,_t.min()))}else Bt(s===1,20013,{expectedCount:s});else{const d=this._t(n);if(d!==s){const p=this.ut(t),g=p?this.ct(p,t,d):1;if(g!==0){this.it(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=n;let d,p;try{d=qr(s).toUint8Array()}catch(g){if(g instanceof XT)return Qa("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Xm(d,l,c)}catch(g){return Qa(g instanceof Tl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let l=0;return s.forEach(c=>{const d=this.Ge.ht(),p=`projects/${d.projectId}/databases/${d.database}/documents/${c.path.canonicalString()}`;t.mightContain(p)||(this.et(n,c,null),l++)}),l}Tt(t){const n=new Map;this.ze.forEach((c,d)=>{const p=this.ot(d);if(p){if(c.current&&hm(p.target)){const g=new ut(p.target.path);this.It(g).has(d)||this.Et(d,g)||this.et(d,g,Ye.newNoDocument(g,t))}c.Be&&(n.set(d,c.ke()),c.qe())}});let s=Ot();this.He.forEach((c,d)=>{let p=!0;d.forEachWhile(g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(c))}),this.je.forEach((c,d)=>d.setReadTime(t));const l=new Th(t,n,this.Ye,this.je,s);return this.je=$i(),this.Je=bc(),this.He=bc(),this.Ye=new ie(Dt),l}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,n)?l.Qe(n,1):l.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new Bv,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new be(Dt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new be(Dt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||it("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Bv),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function bc(){return new ie(ut.comparator)}function qv(){return new ie(ut.comparator)}const l2={asc:"ASCENDING",desc:"DESCENDING"},u2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c2={and:"AND",or:"OR"};class h2{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function dm(r,t){return r.useProto3Json||mh(t)?t:{value:t}}function eh(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function b0(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function f2(r,t){return eh(r,t.toTimestamp())}function fi(r){return Bt(!!r,49232),_t.fromTimestamp(function(n){const s=Br(n);return new Wt(s.seconds,s.nanos)}(r))}function $m(r,t){return mm(r,t).canonicalString()}function mm(r,t){const n=function(l){return new ne(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?n:n.child(t)}function R0(r){const t=ne.fromString(r);return Bt(N0(t),10190,{key:t.toString()}),t}function pm(r,t){return $m(r.databaseId,t.path)}function Hd(r,t){const n=R0(t);if(n.get(1)!==r.databaseId.projectId)throw new st(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new st(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ut(C0(n))}function I0(r,t){return $m(r.databaseId,t)}function d2(r){const t=R0(r);return t.length===4?ne.emptyPath():C0(t)}function gm(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function C0(r){return Bt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Hv(r,t,n){return{name:pm(r,t),fields:n.value.mapValue.fields}}function m2(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:mt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],c=function(y,A){return y.useProto3Json?(Bt(A===void 0||typeof A=="string",58123),He.fromBase64String(A||"")):(Bt(A===void 0||A instanceof Buffer||A instanceof Uint8Array,16193),He.fromUint8Array(A||new Uint8Array))}(r,t.targetChange.resumeToken),d=t.targetChange.cause,p=d&&function(y){const A=y.code===void 0?X.UNKNOWN:A0(y.code);return new st(A,y.message||"")}(d);n=new w0(s,l,c,p||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=Hd(r,s.document.name),c=fi(s.document.updateTime),d=s.document.createTime?fi(s.document.createTime):_t.min(),p=new sn({mapValue:{fields:s.document.fields}}),g=Ye.newFoundDocument(l,c,d,p),y=s.targetIds||[],A=s.removedTargetIds||[];n=new kc(y,A,g.key,g)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=Hd(r,s.document),c=s.readTime?fi(s.readTime):_t.min(),d=Ye.newNoDocument(l,c),p=s.removedTargetIds||[];n=new kc([],p,d.key,d)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=Hd(r,s.document),c=s.removedTargetIds||[];n=new kc([],c,l,null)}else{if(!("filter"in t))return mt(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,d=new i2(l,c),p=s.targetId;n=new S0(p,d)}}return n}function p2(r,t){let n;if(t instanceof Ql)n={update:Hv(r,t.key,t.value)};else if(t instanceof T0)n={delete:pm(r,t.key)};else if(t instanceof Qr)n={update:Hv(r,t.key,t.data),updateMask:w2(t.fieldMask)};else{if(!(t instanceof t2))return mt(16599,{Vt:t.type});n={verify:pm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(c,d){const p=d.transform;if(p instanceof Jc)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof xl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof zl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof th)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw mt(20930,{transform:d.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(l,c){return c.updateTime!==void 0?{updateTime:f2(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:mt(27497)}(r,t.precondition)),n}function g2(r,t){return r&&r.length>0?(Bt(t!==void 0,14353),r.map(n=>function(l,c){let d=l.updateTime?fi(l.updateTime):fi(c);return d.isEqual(_t.min())&&(d=fi(c)),new ZC(d,l.transformResults||[])}(n,t))):[]}function y2(r,t){return{documents:[I0(r,t.path)]}}function _2(r,t){const n={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=I0(r,l);const c=function(y){if(y.length!==0)return O0(yi.create(y,"and"))}(t.filters);c&&(n.structuredQuery.where=c);const d=function(y){if(y.length!==0)return y.map(A=>function(I){return{field:Ba(I.field),direction:T2(I.dir)}}(A))}(t.orderBy);d&&(n.structuredQuery.orderBy=d);const p=dm(r,t.limit);return p!==null&&(n.structuredQuery.limit=p),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ft:n,parent:l}}function v2(r){let t=d2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let l=null;if(s>0){Bt(s===1,65062);const A=n.from[0];A.allDescendants?l=A.collectionId:t=t.child(A.collectionId)}let c=[];n.where&&(c=function(C){const I=D0(C);return I instanceof yi&&s0(I)?I.getFilters():[I]}(n.where));let d=[];n.orderBy&&(d=function(C){return C.map(I=>function($){return new Wc(qa($.field),function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(I))}(n.orderBy));let p=null;n.limit&&(p=function(C){let I;return I=typeof C=="object"?C.value:C,mh(I)?null:I}(n.limit));let g=null;n.startAt&&(g=function(C){const I=!!C.before,F=C.values||[];return new Zc(F,I)}(n.startAt));let y=null;return n.endAt&&(y=function(C){const I=!C.before,F=C.values||[];return new Zc(F,I)}(n.endAt)),LC(t,l,d,c,p,"F",g,y)}function E2(r,t){const n=function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return mt(28987,{purpose:l})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function D0(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=qa(n.unaryFilter.field);return Se.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=qa(n.unaryFilter.field);return Se.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=qa(n.unaryFilter.field);return Se.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=qa(n.unaryFilter.field);return Se.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return mt(61313);default:return mt(60726)}}(r):r.fieldFilter!==void 0?function(n){return Se.create(qa(n.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return mt(58110);default:return mt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return yi.create(n.compositeFilter.filters.map(s=>D0(s)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return mt(1026)}}(n.compositeFilter.op))}(r):mt(30097,{filter:r})}function T2(r){return l2[r]}function A2(r){return u2[r]}function S2(r){return c2[r]}function Ba(r){return{fieldPath:r.canonicalString()}}function qa(r){return qe.fromServerFormat(r.fieldPath)}function O0(r){return r instanceof Se?function(n){if(n.op==="=="){if(Dv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NOT_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ba(n.field),op:A2(n.op),value:n.value}}}(r):r instanceof yi?function(n){const s=n.getFilters().map(l=>O0(l));return s.length===1?s[0]:{compositeFilter:{op:S2(n.op),filters:s}}}(r):mt(54877,{filter:r})}function w2(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function N0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Vr{constructor(t,n,s,l,c=_t.min(),d=_t.min(),p=He.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(t){return new Vr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class b2{constructor(t){this.yt=t}}function R2(r){const t=v2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?fm(t,t.limit,"L"):t}/**
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
 */class I2{constructor(){this.Cn=new C2}addToCollectionParentIndex(t,n){return this.Cn.add(n),Q.resolve()}getCollectionParents(t,n){return Q.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return Q.resolve()}deleteFieldIndex(t,n){return Q.resolve()}deleteAllFieldIndexes(t){return Q.resolve()}createTargetIndexes(t,n){return Q.resolve()}getDocumentsMatchingTarget(t,n){return Q.resolve(null)}getIndexType(t,n){return Q.resolve(0)}getFieldIndexes(t,n){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,n){return Q.resolve(zr.min())}getMinOffsetFromCollectionGroup(t,n){return Q.resolve(zr.min())}updateCollectionGroup(t,n,s){return Q.resolve()}updateIndexEntries(t,n){return Q.resolve()}}class C2{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n]||new be(ne.comparator),c=!l.has(s);return this.index[n]=l.add(s),c}has(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n];return l&&l.has(s)}getEntries(t){return(this.index[t]||new be(ne.comparator)).toArray()}}/**
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
 */const jv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},M0=41943040;class rn{static withCacheSize(t){return new rn(t,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(M0,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
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
 */class Za{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Za(0)}static cr(){return new Za(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="LruGarbageCollector",D2=1048576;function Gv([r,t],[n,s]){const l=Dt(r,n);return l===0?Dt(t,s):l}class O2{constructor(t){this.Ir=t,this.buffer=new be(Gv),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Gv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class N2{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){it(Fv,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ro(n)?it(Fv,"Ignoring IndexedDB error during garbage collection: ",n):await io(n)}await this.Vr(3e5)})}}class M2{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return Q.resolve(dh.ce);const s=new O2(n);return this.mr.forEachTarget(t,l=>s.Ar(l.sequenceNumber)).next(()=>this.mr.pr(t,l=>s.Ar(l))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(it("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(jv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(it("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jv):this.yr(t,n))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,l,c,d,p,g,y;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(it("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),l=this.params.maximumSequenceNumbersToCollect):l=C,d=Date.now(),this.nthSequenceNumber(t,l))).next(C=>(s=C,p=Date.now(),this.removeTargets(t,s,n))).next(C=>(c=C,g=Date.now(),this.removeOrphanedDocuments(t,s))).next(C=>(y=Date.now(),xa()<=Ct.DEBUG&&it("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-A}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${c} targets in `+(g-p)+`ms
	Removed ${C} documents in `+(y-g)+`ms
Total Duration: ${y-A}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:c,documentsRemoved:C})))}}function V2(r,t){return new M2(r,t)}/**
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
 */class P2{constructor(){this.changes=new Fs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ye.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Q.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class k2{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class U2{constructor(t,n,s,l){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(l=>(s=l,this.remoteDocumentCache.getEntry(t,n))).next(l=>(s!==null&&Dl(s.mutation,l,gn.empty(),Wt.now()),l))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Ot()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Ot()){const l=Vs();return this.populateOverlays(t,l,n).next(()=>this.computeViews(t,n,l,s).next(c=>{let d=El();return c.forEach((p,g)=>{d=d.insert(p,g.overlayedDocument)}),d}))}getOverlayedDocuments(t,n){const s=Vs();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Ot()))}populateOverlays(t,n,s){const l=[];return s.forEach(c=>{n.has(c)||l.push(c)}),this.documentOverlayCache.getOverlays(t,l).next(c=>{c.forEach((d,p)=>{n.set(d,p)})})}computeViews(t,n,s,l){let c=$i();const d=Cl(),p=function(){return Cl()}();return n.forEach((g,y)=>{const A=s.get(y.key);l.has(y.key)&&(A===void 0||A.mutation instanceof Qr)?c=c.insert(y.key,y):A!==void 0?(d.set(y.key,A.mutation.getFieldMask()),Dl(A.mutation,y,A.mutation.getFieldMask(),Wt.now())):d.set(y.key,gn.empty())}),this.recalculateAndSaveOverlays(t,c).next(g=>(g.forEach((y,A)=>d.set(y,A)),n.forEach((y,A)=>p.set(y,new k2(A,d.get(y)??null))),p))}recalculateAndSaveOverlays(t,n){const s=Cl();let l=new ie((d,p)=>d-p),c=Ot();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(d=>{for(const p of d)p.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let A=s.get(g)||gn.empty();A=p.applyToLocalView(y,A),s.set(g,A);const C=(l.get(p.batchId)||Ot()).add(g);l=l.insert(p.batchId,C)})}).next(()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,A=g.value,C=d0();A.forEach(I=>{if(!c.has(I)){const F=v0(n.get(I),s.get(I));F!==null&&C.set(I,F),c=c.add(I)}}),d.push(this.documentOverlayCache.saveOverlays(t,y,C))}return Q.waitFor(d)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,l){return function(d){return ut.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):xC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,l):this.getDocumentsMatchingCollectionQuery(t,n,s,l)}getNextDocuments(t,n,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,l).next(c=>{const d=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,l-c.size):Q.resolve(Vs());let p=Pl,g=c;return d.next(y=>Q.forEach(y,(A,C)=>(p<C.largestBatchId&&(p=C.largestBatchId),c.get(A)?Q.resolve():this.remoteDocumentCache.getEntry(t,A).next(I=>{g=g.insert(A,I)}))).next(()=>this.populateOverlays(t,y,c)).next(()=>this.computeViews(t,g,y,Ot())).next(A=>({batchId:p,changes:f0(A)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ut(n)).next(s=>{let l=El();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l})}getDocumentsMatchingCollectionGroupQuery(t,n,s,l){const c=n.collectionGroup;let d=El();return this.indexManager.getCollectionParents(t,c).next(p=>Q.forEach(p,g=>{const y=function(C,I){return new gh(I,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(n,g.child(c));return this.getDocumentsMatchingCollectionQuery(t,y,s,l).next(A=>{A.forEach((C,I)=>{d=d.insert(C,I)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(t,n,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,c,l))).next(d=>{c.forEach((g,y)=>{const A=y.getKey();d.get(A)===null&&(d=d.insert(A,Ye.newInvalidDocument(A)))});let p=El();return d.forEach((g,y)=>{const A=c.get(g);A!==void 0&&Dl(A.mutation,y,gn.empty(),Wt.now()),_h(n,y)&&(p=p.insert(g,y))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return Q.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,function(l){return{id:l.id,version:l.version,createTime:fi(l.createTime)}}(n)),Q.resolve()}getNamedQuery(t,n){return Q.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,function(l){return{name:l.name,query:R2(l.bundledQuery),readTime:fi(l.readTime)}}(n)),Q.resolve()}}/**
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
 */class x2{constructor(){this.overlays=new ie(ut.comparator),this.qr=new Map}getOverlay(t,n){return Q.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Vs();return Q.forEach(n,l=>this.getOverlay(t,l).next(c=>{c!==null&&s.set(l,c)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((l,c)=>{this.St(t,n,c)}),Q.resolve()}removeOverlaysForBatchId(t,n,s){const l=this.qr.get(s);return l!==void 0&&(l.forEach(c=>this.overlays=this.overlays.remove(c)),this.qr.delete(s)),Q.resolve()}getOverlaysForCollection(t,n,s){const l=Vs(),c=n.length+1,d=new ut(n.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&g.largestBatchId>s&&l.set(g.getKey(),g)}return Q.resolve(l)}getOverlaysForCollectionGroup(t,n,s,l){let c=new ie((y,A)=>y-A);const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let A=c.get(y.largestBatchId);A===null&&(A=Vs(),c=c.insert(y.largestBatchId,A)),A.set(y.getKey(),y)}}const p=Vs(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,A)=>p.set(y,A)),!(p.size()>=l)););return Q.resolve(p)}St(t,n,s){const l=this.overlays.get(s.key);if(l!==null){const d=this.qr.get(l.largestBatchId).delete(s.key);this.qr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new n2(n,s));let c=this.qr.get(n);c===void 0&&(c=Ot(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(t){return Q.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Q.resolve()}}/**
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
 */class Zm{constructor(){this.Qr=new be(Ve.$r),this.Ur=new be(Ve.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new Ve(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Gr(new Ve(t,n))}zr(t,n){t.forEach(s=>this.removeReference(s,n))}jr(t){const n=new ut(new ne([])),s=new Ve(n,t),l=new Ve(n,t+1),c=[];return this.Ur.forEachInRange([s,l],d=>{this.Gr(d),c.push(d.key)}),c}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new ut(new ne([])),s=new Ve(n,t),l=new Ve(n,t+1);let c=Ot();return this.Ur.forEachInRange([s,l],d=>{c=c.add(d.key)}),c}containsKey(t){const n=new Ve(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Ve{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return ut.comparator(t.key,n.key)||Dt(t.Yr,n.Yr)}static Kr(t,n){return Dt(t.Yr,n.Yr)||ut.comparator(t.key,n.key)}}/**
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
 */class B2{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new be(Ve.$r)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,l){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new e2(c,n,s,l);this.mutationQueue.push(d);for(const p of l)this.Zr=this.Zr.add(new Ve(p.key,c)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return Q.resolve(d)}lookupMutationBatch(t,n){return Q.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,l=this.ei(s),c=l<0?0:l;return Q.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?qm:this.tr-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Ve(n,0),l=new Ve(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,l],d=>{const p=this.Xr(d.Yr);c.push(p)}),Q.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new be(Dt);return n.forEach(l=>{const c=new Ve(l,0),d=new Ve(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,d],p=>{s=s.add(p.Yr)})}),Q.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,l=s.length+1;let c=s;ut.isDocumentKey(c)||(c=c.child(""));const d=new Ve(new ut(c),0);let p=new be(Dt);return this.Zr.forEachWhile(g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(p=p.add(g.Yr)),!0)},d),Q.resolve(this.ti(p))}ti(t){const n=[];return t.forEach(s=>{const l=this.Xr(s);l!==null&&n.push(l)}),n}removeMutationBatch(t,n){Bt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Q.forEach(n.mutations,l=>{const c=new Ve(l.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Zr=s})}ir(t){}containsKey(t,n){const s=new Ve(n,0),l=this.Zr.firstAfterOrEqual(s);return Q.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class q2{constructor(t){this.ri=t,this.docs=function(){return new ie(ut.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,l=this.docs.get(s),c=l?l.size:0,d=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Q.resolve(s?s.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(t,n){let s=$i();return n.forEach(l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():Ye.newInvalidDocument(l))}),Q.resolve(s)}getDocumentsMatchingQuery(t,n,s,l){let c=$i();const d=n.path,p=new ut(d.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:A}}=g.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||pC(mC(A),s)<=0||(l.has(A.key)||_h(n,A))&&(c=c.insert(A.key,A.mutableCopy()))}return Q.resolve(c)}getAllFromCollectionGroup(t,n,s,l){mt(9500)}ii(t,n){return Q.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new H2(this)}getSize(t){return Q.resolve(this.size)}}class H2 extends P2{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach((s,l)=>{l.isValidDocument()?n.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(s)}),Q.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
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
 */class j2{constructor(t){this.persistence=t,this.si=new Fs(n=>Fm(n),Gm),this.lastRemoteSnapshotVersion=_t.min(),this.highestTargetId=0,this.oi=0,this._i=new Zm,this.targetCount=0,this.ai=Za.ur()}forEachTarget(t,n){return this.si.forEach((s,l)=>n(l)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),Q.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new Za(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,Q.resolve()}updateTargetData(t,n){return this.Pr(n),Q.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,n,s){let l=0;const c=[];return this.si.forEach((d,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.si.delete(d),c.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)}),Q.waitFor(c).next(()=>l)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return Q.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),Q.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const l=this.persistence.referenceDelegate,c=[];return l&&n.forEach(d=>{c.push(l.markPotentiallyOrphaned(t,d))}),Q.waitFor(c)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),Q.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return Q.resolve(s)}containsKey(t,n){return Q.resolve(this._i.containsKey(n))}}/**
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
 */class V0{constructor(t,n){this.ui={},this.overlays={},this.ci=new dh(0),this.li=!1,this.li=!0,this.hi=new z2,this.referenceDelegate=t(this),this.Pi=new j2(this),this.indexManager=new I2,this.remoteDocumentCache=function(l){return new q2(l)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new b2(n),this.Ii=new L2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new x2,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new B2(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){it("MemoryPersistence","Starting transaction:",t);const l=new F2(this.ci.next());return this.referenceDelegate.Ei(),s(l).next(c=>this.referenceDelegate.di(l).next(()=>c)).toPromise().then(c=>(l.raiseOnCommittedEvent(),c))}Ai(t,n){return Q.or(Object.values(this.ui).map(s=>()=>s.containsKey(t,n)))}}class F2 extends yC{constructor(t){super(),this.currentSequenceNumber=t}}class Wm{constructor(t){this.persistence=t,this.Ri=new Zm,this.Vi=null}static mi(t){return new Wm(t)}get fi(){if(this.Vi)return this.Vi;throw mt(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),Q.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),Q.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),Q.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach(l=>this.fi.add(l.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(l=>{l.forEach(c=>this.fi.add(c.toString()))}).next(()=>s.removeTargetData(t,n))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.fi,s=>{const l=ut.fromPath(s);return this.gi(t,l).next(c=>{c||n.removeEntry(l,_t.min())})}).next(()=>(this.Vi=null,n.apply(t)))}updateLimboDocument(t,n){return this.gi(t,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(t){return 0}gi(t,n){return Q.or([()=>Q.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class nh{constructor(t,n){this.persistence=t,this.pi=new Fs(s=>EC(s.path),(s,l)=>s.isEqual(l)),this.garbageCollector=V2(this,n)}static mi(t,n){return new nh(t,n)}Ei(){}di(t){return Q.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(l=>s+l))}wr(t){let n=0;return this.pr(t,s=>{n++}).next(()=>n)}pr(t,n){return Q.forEach(this.pi,(s,l)=>this.br(t,s,l).next(c=>c?Q.resolve():n(l)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const l=this.persistence.getRemoteDocumentCache(),c=l.newChangeBuffer();return l.ii(t,d=>this.br(t,d,n).next(p=>{p||(s++,c.removeEntry(d,_t.min()))})).next(()=>c.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),Q.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),Q.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),Q.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),Q.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Mc(t.data.value)),n}br(t,n,s){return Q.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const l=this.pi.get(n);return Q.resolve(l!==void 0&&l>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Jm{constructor(t,n,s,l){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=l}static As(t,n){let s=Ot(),l=Ot();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new Jm(t,n.fromCache,s,l)}}/**
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
 */class G2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class K2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return e1()?8:_C(Xe())>0?6:4}()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,l){const c={result:null};return this.ys(t,n).next(d=>{c.result=d}).next(()=>{if(!c.result)return this.ws(t,n,l,s).next(d=>{c.result=d})}).next(()=>{if(c.result)return;const d=new G2;return this.Ss(t,n,d).next(p=>{if(c.result=p,this.Vs)return this.bs(t,n,d,p.size)})}).next(()=>c.result)}bs(t,n,s,l){return s.documentReadCount<this.fs?(xa()<=Ct.DEBUG&&it("QueryEngine","SDK will not create cache indexes for query:",za(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Q.resolve()):(xa()<=Ct.DEBUG&&it("QueryEngine","Query:",za(n),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.gs*l?(xa()<=Ct.DEBUG&&it("QueryEngine","The SDK decides to create cache indexes for query:",za(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ci(n))):Q.resolve())}ys(t,n){if(Vv(n))return Q.resolve(null);let s=ci(n);return this.indexManager.getIndexType(t,s).next(l=>l===0?null:(n.limit!==null&&l===1&&(n=fm(n,null,"F"),s=ci(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(c=>{const d=Ot(...c);return this.ps.getDocuments(t,d).next(p=>this.indexManager.getMinOffset(t,s).next(g=>{const y=this.Ds(n,p);return this.Cs(n,y,d,g.readTime)?this.ys(t,fm(n,null,"F")):this.vs(t,y,n,g)}))})))}ws(t,n,s,l){return Vv(n)||l.isEqual(_t.min())?Q.resolve(null):this.ps.getDocuments(t,s).next(c=>{const d=this.Ds(n,c);return this.Cs(n,d,s,l)?Q.resolve(null):(xa()<=Ct.DEBUG&&it("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),za(n)),this.vs(t,d,n,dC(l,Pl)).next(p=>p))})}Ds(t,n){let s=new be(c0(t));return n.forEach((l,c)=>{_h(t,c)&&(s=s.add(c))}),s}Cs(t,n,s,l){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const c=t.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Ss(t,n,s){return xa()<=Ct.DEBUG&&it("QueryEngine","Using full collection scan to execute query:",za(n)),this.ps.getDocumentsMatchingQuery(t,n,zr.min(),s)}vs(t,n,s,l){return this.ps.getDocumentsMatchingQuery(t,s,l).next(c=>(n.forEach(d=>{c=c.insert(d.key,d)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="LocalStore",Q2=3e8;class Y2{constructor(t,n,s,l){this.persistence=t,this.Fs=n,this.serializer=l,this.Ms=new ie(Dt),this.xs=new Fs(c=>Fm(c),Gm),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new U2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ms))}}function X2(r,t,n,s){return new Y2(r,t,n,s)}async function P0(r,t){const n=vt(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let l;return n.mutationQueue.getAllMutationBatches(s).next(c=>(l=c,n.Bs(t),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const d=[],p=[];let g=Ot();for(const y of l){d.push(y.batchId);for(const A of y.mutations)g=g.add(A.key)}for(const y of c){p.push(y.batchId);for(const A of y.mutations)g=g.add(A.key)}return n.localDocuments.getDocuments(s,g).next(y=>({Ls:y,removedBatchIds:d,addedBatchIds:p}))})})}function $2(r,t){const n=vt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const l=t.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return function(p,g,y,A){const C=y.batch,I=C.keys();let F=Q.resolve();return I.forEach($=>{F=F.next(()=>A.getEntry(g,$)).next(nt=>{const Z=y.docVersions.get($);Bt(Z!==null,48541),nt.version.compareTo(Z)<0&&(C.applyToRemoteDocument(nt,y),nt.isValidDocument()&&(nt.setReadTime(y.commitVersion),A.addEntry(nt)))})}),F.next(()=>p.mutationQueue.removeMutationBatch(g,C))}(n,s,t,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=Ot();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(g=g.add(p.batch.mutations[y].key));return g}(t))).next(()=>n.localDocuments.getDocuments(s,l))})}function k0(r){const t=vt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Pi.getLastRemoteSnapshotVersion(n))}function Z2(r,t){const n=vt(r),s=t.snapshotVersion;let l=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const d=n.Ns.newChangeBuffer({trackRemovals:!0});l=n.Ms;const p=[];t.targetChanges.forEach((A,C)=>{const I=l.get(C);if(!I)return;p.push(n.Pi.removeMatchingKeys(c,A.removedDocuments,C).next(()=>n.Pi.addMatchingKeys(c,A.addedDocuments,C)));let F=I.withSequenceNumber(c.currentSequenceNumber);t.targetMismatches.get(C)!==null?F=F.withResumeToken(He.EMPTY_BYTE_STRING,_t.min()).withLastLimboFreeSnapshotVersion(_t.min()):A.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(A.resumeToken,s)),l=l.insert(C,F),function(nt,Z,Et){return nt.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-nt.snapshotVersion.toMicroseconds()>=Q2?!0:Et.addedDocuments.size+Et.modifiedDocuments.size+Et.removedDocuments.size>0}(I,F,A)&&p.push(n.Pi.updateTargetData(c,F))});let g=$i(),y=Ot();if(t.documentUpdates.forEach(A=>{t.resolvedLimboDocuments.has(A)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(c,A))}),p.push(W2(c,d,t.documentUpdates).next(A=>{g=A.ks,y=A.qs})),!s.isEqual(_t.min())){const A=n.Pi.getLastRemoteSnapshotVersion(c).next(C=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s));p.push(A)}return Q.waitFor(p).next(()=>d.apply(c)).next(()=>n.localDocuments.getLocalViewOfDocuments(c,g,y)).next(()=>g)}).then(c=>(n.Ms=l,c))}function W2(r,t,n){let s=Ot(),l=Ot();return n.forEach(c=>s=s.add(c)),t.getEntries(r,s).next(c=>{let d=$i();return n.forEach((p,g)=>{const y=c.get(p);g.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(p)),g.isNoDocument()&&g.version.isEqual(_t.min())?(t.removeEntry(p,g.readTime),d=d.insert(p,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(g),d=d.insert(p,g)):it(tp,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",g.version)}),{ks:d,qs:l}})}function J2(r,t){const n=vt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=qm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function tD(r,t){const n=vt(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let l;return n.Pi.getTargetData(s,t).next(c=>c?(l=c,Q.resolve(l)):n.Pi.allocateTargetId(s).next(d=>(l=new Vr(t,d,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,l).next(()=>l))))}).then(s=>{const l=n.Ms.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s})}async function ym(r,t,n){const s=vt(r),l=s.Ms.get(t),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,d=>s.persistence.referenceDelegate.removeTarget(d,l))}catch(d){if(!ro(d))throw d;it(tp,`Failed to update sequence numbers for target ${t}: ${d}`)}s.Ms=s.Ms.remove(t),s.xs.delete(l.target)}function Kv(r,t,n){const s=vt(r);let l=_t.min(),c=Ot();return s.persistence.runTransaction("Execute query","readwrite",d=>function(g,y,A){const C=vt(g),I=C.xs.get(A);return I!==void 0?Q.resolve(C.Ms.get(I)):C.Pi.getTargetData(y,A)}(s,d,ci(t)).next(p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(d,p.targetId).next(g=>{c=g})}).next(()=>s.Fs.getDocumentsMatchingQuery(d,t,n?l:_t.min(),n?c:Ot())).next(p=>(eD(s,BC(t),p),{documents:p,Qs:c})))}function eD(r,t,n){let s=r.Os.get(t)||_t.min();n.forEach((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)}),r.Os.set(t,s)}class Qv{constructor(){this.activeTargetIds=KC()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nD{constructor(){this.Mo=new Qv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Qv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class iD{Oo(t){}shutdown(){}}/**
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
 */const Yv="ConnectivityMonitor";class Xv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){it(Yv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){it(Yv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rc=null;function _m(){return Rc===null?Rc=function(){return 268435456+Math.round(2147483648*Math.random())}():Rc++,"0x"+Rc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="RestConnection",rD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sD{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${l}`,this.Wo=this.databaseId.database===Xc?`project_id=${s}`:`project_id=${s}&database_id=${l}`}Go(t,n,s,l,c){const d=_m(),p=this.zo(t,n.toUriEncodedString());it(jd,`Sending RPC '${t}' ${d}:`,p,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,l,c);const{host:y}=new URL(p),A=Ja(y);return this.Jo(t,p,g,s,A).then(C=>(it(jd,`Received RPC '${t}' ${d}: `,C),C),C=>{throw Qa(jd,`RPC '${t}' ${d} failed with error: `,C,"url: ",p,"request:",s),C})}Ho(t,n,s,l,c,d){return this.Go(t,n,s,l,c)}jo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+no}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((l,c)=>t[c]=l),s&&s.headers.forEach((l,c)=>t[c]=l)}zo(t,n){const s=rD[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class aD{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const Ge="WebChannelConnection";class oD extends sD{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,l,c){const d=_m();return new Promise((p,g)=>{const y=new zT;y.setWithCredentials(!0),y.listenOnce(BT.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Nc.NO_ERROR:const C=y.getResponseJson();it(Ge,`XHR for RPC '${t}' ${d} received:`,JSON.stringify(C)),p(C);break;case Nc.TIMEOUT:it(Ge,`RPC '${t}' ${d} timed out`),g(new st(X.DEADLINE_EXCEEDED,"Request time out"));break;case Nc.HTTP_ERROR:const I=y.getStatus();if(it(Ge,`RPC '${t}' ${d} failed with status:`,I,"response text:",y.getResponseText()),I>0){let F=y.getResponseJson();Array.isArray(F)&&(F=F[0]);const $=F?.error;if($&&$.status&&$.message){const nt=function(Et){const gt=Et.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(gt)>=0?gt:X.UNKNOWN}($.status);g(new st(nt,$.message))}else g(new st(X.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new st(X.UNAVAILABLE,"Connection failed."));break;default:mt(9055,{l_:t,streamId:d,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{it(Ge,`RPC '${t}' ${d} completed.`)}});const A=JSON.stringify(l);it(Ge,`RPC '${t}' ${d} sending request:`,l),y.send(n,"POST",A,s,15)})}T_(t,n,s){const l=_m(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=jT(),p=HT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const A=c.join("");it(Ge,`Creating RPC '${t}' stream ${l}: ${A}`,g);const C=d.createWebChannel(A,g);this.I_(C);let I=!1,F=!1;const $=new aD({Yo:Z=>{F?it(Ge,`Not sending because RPC '${t}' stream ${l} is closed:`,Z):(I||(it(Ge,`Opening RPC '${t}' stream ${l} transport.`),C.open(),I=!0),it(Ge,`RPC '${t}' stream ${l} sending:`,Z),C.send(Z))},Zo:()=>C.close()}),nt=(Z,Et,gt)=>{Z.listen(Et,ct=>{try{gt(ct)}catch(qt){setTimeout(()=>{throw qt},0)}})};return nt(C,vl.EventType.OPEN,()=>{F||(it(Ge,`RPC '${t}' stream ${l} transport opened.`),$.o_())}),nt(C,vl.EventType.CLOSE,()=>{F||(F=!0,it(Ge,`RPC '${t}' stream ${l} transport closed`),$.a_(),this.E_(C))}),nt(C,vl.EventType.ERROR,Z=>{F||(F=!0,Qa(Ge,`RPC '${t}' stream ${l} transport errored. Name:`,Z.name,"Message:",Z.message),$.a_(new st(X.UNAVAILABLE,"The operation could not be completed")))}),nt(C,vl.EventType.MESSAGE,Z=>{if(!F){const Et=Z.data[0];Bt(!!Et,16349);const gt=Et,ct=gt?.error||gt[0]?.error;if(ct){it(Ge,`RPC '${t}' stream ${l} received error:`,ct);const qt=ct.status;let Tt=function(S){const R=ge[S];if(R!==void 0)return A0(R)}(qt),xt=ct.message;Tt===void 0&&(Tt=X.INTERNAL,xt="Unknown error status: "+qt+" with message "+ct.message),F=!0,$.a_(new st(Tt,xt)),C.close()}else it(Ge,`RPC '${t}' stream ${l} received:`,Et),$.u_(Et)}}),nt(p,qT.STAT_EVENT,Z=>{Z.stat===am.PROXY?it(Ge,`RPC '${t}' stream ${l} detected buffering proxy`):Z.stat===am.NOPROXY&&it(Ge,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{$.__()},0),$}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(n=>n===t)}}function Fd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(r){return new h2(r,!0)}/**
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
 */class U0{constructor(t,n,s=1e3,l=1.5,c=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),l=Math.max(0,n-s);l>0&&it("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const $v="PersistentStream";class L0{constructor(t,n,s,l,c,d,p,g){this.Mi=t,this.S_=s,this.b_=l,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new U0(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Xi(n.toString()),Xi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,l])=>{this.D_===n&&this.G_(s,l)},s=>{t(()=>{const l=new st(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(l)})})}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(l=>{s(()=>this.z_(l))}),this.stream.onMessage(l=>{s(()=>++this.F_==1?this.J_(l):this.onNext(l))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return it($v,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget(()=>this.D_===t?n():(it($v,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lD extends L0{constructor(t,n,s,l,c,d){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,l,d),this.serializer=c}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=m2(this.serializer,t),s=function(c){if(!("targetChange"in c))return _t.min();const d=c.targetChange;return d.targetIds&&d.targetIds.length?_t.min():d.readTime?fi(d.readTime):_t.min()}(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=gm(this.serializer),n.addTarget=function(c,d){let p;const g=d.target;if(p=hm(g)?{documents:y2(c,g)}:{query:_2(c,g).ft},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=b0(c,d.resumeToken);const y=dm(c,d.expectedCount);y!==null&&(p.expectedCount=y)}else if(d.snapshotVersion.compareTo(_t.min())>0){p.readTime=eh(c,d.snapshotVersion.toTimestamp());const y=dm(c,d.expectedCount);y!==null&&(p.expectedCount=y)}return p}(this.serializer,t);const s=E2(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=gm(this.serializer),n.removeTarget=t,this.q_(n)}}class uD extends L0{constructor(t,n,s,l,c,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,l,d),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Bt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Bt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Bt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=g2(t.writeResults,t.commitTime),s=fi(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=gm(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>p2(this.serializer,s))};this.q_(n)}}/**
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
 */class cD{}class hD extends cD{constructor(t,n,s,l){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new st(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Go(t,mm(n,s),l,c,d)).catch(c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new st(X.UNKNOWN,c.toString())})}Ho(t,n,s,l,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,p])=>this.connection.Ho(t,mm(n,s),l,d,p,c)).catch(d=>{throw d.name==="FirebaseError"?(d.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new st(X.UNKNOWN,d.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class fD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Xi(n),this.aa=!1):it("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const qs="RemoteStore";class dD{constructor(t,n,s,l,c){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo(d=>{s.enqueueAndForget(async()=>{Gs(this)&&(it(qs,"Restarting streams for network reachability change."),await async function(g){const y=vt(g);y.Ea.add(4),await Xl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Sh(y)}(this))})}),this.Ra=new fD(s,l)}}async function Sh(r){if(Gs(r))for(const t of r.da)await t(!0)}async function Xl(r){for(const t of r.da)await t(!1)}function x0(r,t){const n=vt(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),rp(n)?ip(n):so(n).O_()&&np(n,t))}function ep(r,t){const n=vt(r),s=so(n);n.Ia.delete(t),s.O_()&&z0(n,t),n.Ia.size===0&&(s.O_()?s.L_():Gs(n)&&n.Ra.set("Unknown"))}function np(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(_t.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}so(r).Y_(t)}function z0(r,t){r.Va.Ue(t),so(r).Z_(t)}function ip(r){r.Va=new o2({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),so(r).start(),r.Ra.ua()}function rp(r){return Gs(r)&&!so(r).x_()&&r.Ia.size>0}function Gs(r){return vt(r).Ea.size===0}function B0(r){r.Va=void 0}async function mD(r){r.Ra.set("Online")}async function pD(r){r.Ia.forEach((t,n)=>{np(r,t)})}async function gD(r,t){B0(r),rp(r)?(r.Ra.ha(t),ip(r)):r.Ra.set("Unknown")}async function yD(r,t,n){if(r.Ra.set("Online"),t instanceof w0&&t.state===2&&t.cause)try{await async function(l,c){const d=c.cause;for(const p of c.targetIds)l.Ia.has(p)&&(await l.remoteSyncer.rejectListen(p,d),l.Ia.delete(p),l.Va.removeTarget(p))}(r,t)}catch(s){it(qs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ih(r,s)}else if(t instanceof kc?r.Va.Ze(t):t instanceof S0?r.Va.st(t):r.Va.tt(t),!n.isEqual(_t.min()))try{const s=await k0(r.localStore);n.compareTo(s)>=0&&await function(c,d){const p=c.Va.Tt(d);return p.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const A=c.Ia.get(y);A&&c.Ia.set(y,A.withResumeToken(g.resumeToken,d))}}),p.targetMismatches.forEach((g,y)=>{const A=c.Ia.get(g);if(!A)return;c.Ia.set(g,A.withResumeToken(He.EMPTY_BYTE_STRING,A.snapshotVersion)),z0(c,g);const C=new Vr(A.target,g,y,A.sequenceNumber);np(c,C)}),c.remoteSyncer.applyRemoteEvent(p)}(r,n)}catch(s){it(qs,"Failed to raise snapshot:",s),await ih(r,s)}}async function ih(r,t,n){if(!ro(t))throw t;r.Ea.add(1),await Xl(r),r.Ra.set("Offline"),n||(n=()=>k0(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{it(qs,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await Sh(r)})}function q0(r,t){return t().catch(n=>ih(r,n,t))}async function wh(r){const t=vt(r),n=jr(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:qm;for(;_D(t);)try{const l=await J2(t.localStore,s);if(l===null){t.Ta.length===0&&n.L_();break}s=l.batchId,vD(t,l)}catch(l){await ih(t,l)}H0(t)&&j0(t)}function _D(r){return Gs(r)&&r.Ta.length<10}function vD(r,t){r.Ta.push(t);const n=jr(r);n.O_()&&n.X_&&n.ea(t.mutations)}function H0(r){return Gs(r)&&!jr(r).x_()&&r.Ta.length>0}function j0(r){jr(r).start()}async function ED(r){jr(r).ra()}async function TD(r){const t=jr(r);for(const n of r.Ta)t.ea(n.mutations)}async function AD(r,t,n){const s=r.Ta.shift(),l=Ym.from(s,t,n);await q0(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await wh(r)}async function SD(r,t){t&&jr(r).X_&&await async function(s,l){if(function(d){return r2(d)&&d!==X.ABORTED}(l.code)){const c=s.Ta.shift();jr(s).B_(),await q0(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l)),await wh(s)}}(r,t),H0(r)&&j0(r)}async function Zv(r,t){const n=vt(r);n.asyncQueue.verifyOperationInProgress(),it(qs,"RemoteStore received new credentials");const s=Gs(n);n.Ea.add(3),await Xl(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Sh(n)}async function wD(r,t){const n=vt(r);t?(n.Ea.delete(2),await Sh(n)):t||(n.Ea.add(2),await Xl(n),n.Ra.set("Unknown"))}function so(r){return r.ma||(r.ma=function(n,s,l){const c=vt(n);return c.sa(),new lD(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{Xo:mD.bind(null,r),t_:pD.bind(null,r),r_:gD.bind(null,r),H_:yD.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),rp(r)?ip(r):r.Ra.set("Unknown")):(await r.ma.stop(),B0(r))})),r.ma}function jr(r){return r.fa||(r.fa=function(n,s,l){const c=vt(n);return c.sa(),new uD(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:ED.bind(null,r),r_:SD.bind(null,r),ta:TD.bind(null,r),na:AD.bind(null,r)}),r.da.push(async t=>{t?(r.fa.B_(),await wh(r)):(await r.fa.stop(),r.Ta.length>0&&(it(qs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
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
 */class sp{constructor(t,n,s,l,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,l,c){const d=Date.now()+s,p=new sp(t,n,d,l,c);return p.start(s),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ap(r,t){if(Xi("AsyncQueue",`${t}: ${r}`),ro(r))return new st(X.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ka{static emptySet(t){return new Ka(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ut.comparator(n.key,s.key):(n,s)=>ut.comparator(n.key,s.key),this.keyedMap=El(),this.sortedSet=new ie(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ka)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ka;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Wv{constructor(){this.ga=new ie(ut.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):mt(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,s)=>{t.push(s)}),t}}class Wa{constructor(t,n,s,l,c,d,p,g,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,l,c){const d=[];return n.forEach(p=>{d.push({type:0,doc:p})}),new Wa(t,n,Ka.emptySet(n),d,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==s[l].type||!n[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
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
 */class bD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class RD{constructor(){this.queries=Jv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const l=vt(n),c=l.queries;l.queries=Jv(),c.forEach((d,p)=>{for(const g of p.Sa)g.onError(s)})})(this,new st(X.ABORTED,"Firestore shutting down"))}}function Jv(){return new Fs(r=>u0(r),yh)}async function ID(r,t){const n=vt(r);let s=3;const l=t.query;let c=n.queries.get(l);c?!c.ba()&&t.Da()&&(s=2):(c=new bD,s=t.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(l,!0);break;case 1:c.wa=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(d){const p=ap(d,`Initialization of query '${za(t.query)}' failed`);return void t.onError(p)}n.queries.set(l,c),c.Sa.push(t),t.va(n.onlineState),c.wa&&t.Fa(c.wa)&&op(n)}async function CD(r,t){const n=vt(r),s=t.query;let l=3;const c=n.queries.get(s);if(c){const d=c.Sa.indexOf(t);d>=0&&(c.Sa.splice(d,1),c.Sa.length===0?l=t.Da()?0:1:!c.ba()&&t.Da()&&(l=2))}switch(l){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function DD(r,t){const n=vt(r);let s=!1;for(const l of t){const c=l.query,d=n.queries.get(c);if(d){for(const p of d.Sa)p.Fa(l)&&(s=!0);d.wa=l}}s&&op(n)}function OD(r,t,n){const s=vt(r),l=s.queries.get(t);if(l)for(const c of l.Sa)c.onError(n);s.queries.delete(t)}function op(r){r.Ca.forEach(t=>{t.next()})}var vm,tE;(tE=vm||(vm={})).Ma="default",tE.Cache="cache";class ND{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new Wa(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=Wa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==vm.Cache}}/**
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
 */class F0{constructor(t){this.key=t}}class G0{constructor(t){this.key=t}}class MD{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ot(),this.mutatedKeys=Ot(),this.eu=c0(t),this.tu=new Ka(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new Wv,l=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,d=l,p=!1;const g=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal((A,C)=>{const I=l.get(A),F=_h(this.query,C)?C:null,$=!!I&&this.mutatedKeys.has(I.key),nt=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let Z=!1;I&&F?I.data.isEqual(F.data)?$!==nt&&(s.track({type:3,doc:F}),Z=!0):this.su(I,F)||(s.track({type:2,doc:F}),Z=!0,(g&&this.eu(F,g)>0||y&&this.eu(F,y)<0)&&(p=!0)):!I&&F?(s.track({type:0,doc:F}),Z=!0):I&&!F&&(s.track({type:1,doc:I}),Z=!0,(g||y)&&(p=!0)),Z&&(F?(d=d.add(F),c=nt?c.add(A):c.delete(A)):(d=d.delete(A),c=c.delete(A)))}),this.query.limit!==null)for(;d.size>this.query.limit;){const A=this.query.limitType==="F"?d.last():d.first();d=d.delete(A.key),c=c.delete(A.key),s.track({type:1,doc:A})}return{tu:d,iu:s,Cs:p,mutatedKeys:c}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,l){const c=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const d=t.iu.ya();d.sort((A,C)=>function(F,$){const nt=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return mt(20277,{Rt:Z})}};return nt(F)-nt($)}(A.type,C.type)||this.eu(A.doc,C.doc)),this.ou(s),l=l??!1;const p=n&&!l?this._u():[],g=this.Xa.size===0&&this.current&&!l?1:0,y=g!==this.Za;return this.Za=g,d.length!==0||y?{snapshot:new Wa(this.query,t.tu,c,d,t.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Wv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Ot(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return t.forEach(s=>{this.Xa.has(s)||n.push(new G0(s))}),this.Xa.forEach(s=>{t.has(s)||n.push(new F0(s))}),n}cu(t){this.Ya=t.Qs,this.Xa=Ot();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return Wa.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const lp="SyncEngine";class VD{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class PD{constructor(t){this.key=t,this.hu=!1}}class kD{constructor(t,n,s,l,c,d){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new Fs(p=>u0(p),yh),this.Iu=new Map,this.Eu=new Set,this.du=new ie(ut.comparator),this.Au=new Map,this.Ru=new Zm,this.Vu={},this.mu=new Map,this.fu=Za.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function UD(r,t,n=!0){const s=Z0(r);let l;const c=s.Tu.get(t);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.lu()):l=await K0(s,t,n,!0),l}async function LD(r,t){const n=Z0(r);await K0(n,t,!0,!1)}async function K0(r,t,n,s){const l=await tD(r.localStore,ci(t)),c=l.targetId,d=r.sharedClientState.addLocalQueryTarget(c,n);let p;return s&&(p=await xD(r,t,c,d==="current",l.resumeToken)),r.isPrimaryClient&&n&&x0(r.remoteStore,l),p}async function xD(r,t,n,s,l){r.pu=(C,I,F)=>async function(nt,Z,Et,gt){let ct=Z.view.ru(Et);ct.Cs&&(ct=await Kv(nt.localStore,Z.query,!1).then(({documents:V})=>Z.view.ru(V,ct)));const qt=gt&&gt.targetChanges.get(Z.targetId),Tt=gt&&gt.targetMismatches.get(Z.targetId)!=null,xt=Z.view.applyChanges(ct,nt.isPrimaryClient,qt,Tt);return nE(nt,Z.targetId,xt.au),xt.snapshot}(r,C,I,F);const c=await Kv(r.localStore,t,!0),d=new MD(t,c.Qs),p=d.ru(c.documents),g=Yl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",l),y=d.applyChanges(p,r.isPrimaryClient,g);nE(r,n,y.au);const A=new VD(t,n,d);return r.Tu.set(t,A),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),y.snapshot}async function zD(r,t,n){const s=vt(r),l=s.Tu.get(t),c=s.Iu.get(l.targetId);if(c.length>1)return s.Iu.set(l.targetId,c.filter(d=>!yh(d,t))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await ym(s.localStore,l.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(l.targetId),n&&ep(s.remoteStore,l.targetId),Em(s,l.targetId)}).catch(io)):(Em(s,l.targetId),await ym(s.localStore,l.targetId,!0))}async function BD(r,t){const n=vt(r),s=n.Tu.get(t),l=n.Iu.get(s.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),ep(n.remoteStore,s.targetId))}async function qD(r,t,n){const s=YD(r);try{const l=await function(d,p){const g=vt(d),y=Wt.now(),A=p.reduce((F,$)=>F.add($.key),Ot());let C,I;return g.persistence.runTransaction("Locally write mutations","readwrite",F=>{let $=$i(),nt=Ot();return g.Ns.getEntries(F,A).next(Z=>{$=Z,$.forEach((Et,gt)=>{gt.isValidDocument()||(nt=nt.add(Et))})}).next(()=>g.localDocuments.getOverlayedDocuments(F,$)).next(Z=>{C=Z;const Et=[];for(const gt of p){const ct=JC(gt,C.get(gt.key).overlayedDocument);ct!=null&&Et.push(new Qr(gt.key,ct,n0(ct.value.mapValue),hi.exists(!0)))}return g.mutationQueue.addMutationBatch(F,y,Et,p)}).next(Z=>{I=Z;const Et=Z.applyToLocalDocumentSet(C,nt);return g.documentOverlayCache.saveOverlays(F,Z.batchId,Et)})}).then(()=>({batchId:I.batchId,changes:f0(C)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),function(d,p,g){let y=d.Vu[d.currentUser.toKey()];y||(y=new ie(Dt)),y=y.insert(p,g),d.Vu[d.currentUser.toKey()]=y}(s,l.batchId,n),await $l(s,l.changes),await wh(s.remoteStore)}catch(l){const c=ap(l,"Failed to persist write");n.reject(c)}}async function Q0(r,t){const n=vt(r);try{const s=await Z2(n.localStore,t);t.targetChanges.forEach((l,c)=>{const d=n.Au.get(c);d&&(Bt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d.hu=!0:l.modifiedDocuments.size>0?Bt(d.hu,14607):l.removedDocuments.size>0&&(Bt(d.hu,42227),d.hu=!1))}),await $l(n,s,t)}catch(s){await io(s)}}function eE(r,t,n){const s=vt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const l=[];s.Tu.forEach((c,d)=>{const p=d.view.va(t);p.snapshot&&l.push(p.snapshot)}),function(d,p){const g=vt(d);g.onlineState=p;let y=!1;g.queries.forEach((A,C)=>{for(const I of C.Sa)I.va(p)&&(y=!0)}),y&&op(g)}(s.eventManager,t),l.length&&s.Pu.H_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function HD(r,t,n){const s=vt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const l=s.Au.get(t),c=l&&l.key;if(c){let d=new ie(ut.comparator);d=d.insert(c,Ye.newNoDocument(c,_t.min()));const p=Ot().add(c),g=new Th(_t.min(),new Map,new ie(Dt),d,p);await Q0(s,g),s.du=s.du.remove(c),s.Au.delete(t),up(s)}else await ym(s.localStore,t,!1).then(()=>Em(s,t,n)).catch(io)}async function jD(r,t){const n=vt(r),s=t.batch.batchId;try{const l=await $2(n.localStore,t);X0(n,s,null),Y0(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await $l(n,l)}catch(l){await io(l)}}async function FD(r,t,n){const s=vt(r);try{const l=await function(d,p){const g=vt(d);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let A;return g.mutationQueue.lookupMutationBatch(y,p).next(C=>(Bt(C!==null,37113),A=C.keys(),g.mutationQueue.removeMutationBatch(y,C))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,A,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,A)).next(()=>g.localDocuments.getDocuments(y,A))})}(s.localStore,t);X0(s,t,n),Y0(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await $l(s,l)}catch(l){await io(l)}}function Y0(r,t){(r.mu.get(t)||[]).forEach(n=>{n.resolve()}),r.mu.delete(t)}function X0(r,t,n){const s=vt(r);let l=s.Vu[s.currentUser.toKey()];if(l){const c=l.get(t);c&&(n?c.reject(n):c.resolve(),l=l.remove(t)),s.Vu[s.currentUser.toKey()]=l}}function Em(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(s=>{r.Ru.containsKey(s)||$0(r,s)})}function $0(r,t){r.Eu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(ep(r.remoteStore,n),r.du=r.du.remove(t),r.Au.delete(n),up(r))}function nE(r,t,n){for(const s of n)s instanceof F0?(r.Ru.addReference(s.key,t),GD(r,s)):s instanceof G0?(it(lp,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,t),r.Ru.containsKey(s.key)||$0(r,s.key)):mt(19791,{wu:s})}function GD(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(it(lp,"New document in limbo: "+n),r.Eu.add(s),up(r))}function up(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new ut(ne.fromString(t)),s=r.fu.next();r.Au.set(s,new PD(n)),r.du=r.du.insert(n,s),x0(r.remoteStore,new Vr(ci(Km(n.path)),s,"TargetPurposeLimboResolution",dh.ce))}}async function $l(r,t,n){const s=vt(r),l=[],c=[],d=[];s.Tu.isEmpty()||(s.Tu.forEach((p,g)=>{d.push(s.pu(g,t,n).then(y=>{if((y||n)&&s.isPrimaryClient){const A=y?!y.fromCache:n?.targetChanges.get(g.targetId)?.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(y){l.push(y);const A=Jm.As(g.targetId,y);c.push(A)}}))}),await Promise.all(d),s.Pu.H_(l),await async function(g,y){const A=vt(g);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>Q.forEach(y,I=>Q.forEach(I.Es,F=>A.persistence.referenceDelegate.addReference(C,I.targetId,F)).next(()=>Q.forEach(I.ds,F=>A.persistence.referenceDelegate.removeReference(C,I.targetId,F)))))}catch(C){if(!ro(C))throw C;it(tp,"Failed to update sequence numbers: "+C)}for(const C of y){const I=C.targetId;if(!C.fromCache){const F=A.Ms.get(I),$=F.snapshotVersion,nt=F.withLastLimboFreeSnapshotVersion($);A.Ms=A.Ms.insert(I,nt)}}}(s.localStore,c))}async function KD(r,t){const n=vt(r);if(!n.currentUser.isEqual(t)){it(lp,"User change. New user:",t.toKey());const s=await P0(n.localStore,t);n.currentUser=t,function(c,d){c.mu.forEach(p=>{p.forEach(g=>{g.reject(new st(X.CANCELLED,d))})}),c.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await $l(n,s.Ls)}}function QD(r,t){const n=vt(r),s=n.Au.get(t);if(s&&s.hu)return Ot().add(s.key);{let l=Ot();const c=n.Iu.get(t);if(!c)return l;for(const d of c){const p=n.Tu.get(d);l=l.unionWith(p.view.nu)}return l}}function Z0(r){const t=vt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Q0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=QD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=HD.bind(null,t),t.Pu.H_=DD.bind(null,t.eventManager),t.Pu.yu=OD.bind(null,t.eventManager),t}function YD(r){const t=vt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jD.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=FD.bind(null,t),t}class rh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ah(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return X2(this.persistence,new K2,t.initialUser,this.serializer)}Cu(t){return new V0(Wm.mi,this.serializer)}Du(t){return new nD}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rh.provider={build:()=>new rh};class XD extends rh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Bt(this.persistence.referenceDelegate instanceof nh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new N2(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new V0(s=>nh.mi(s,n),this.serializer)}}class Tm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>eE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=KD.bind(null,this.syncEngine),await wD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new RD}()}createDatastore(t){const n=Ah(t.databaseInfo.databaseId),s=function(c){return new oD(c)}(t.databaseInfo);return function(c,d,p,g){return new hD(c,d,p,g)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,l,c,d,p){return new dD(s,l,c,d,p)}(this.localStore,this.datastore,t.asyncQueue,n=>eE(this.syncEngine,n,0),function(){return Xv.v()?new Xv:new iD}())}createSyncEngine(t,n){return function(l,c,d,p,g,y,A){const C=new kD(l,c,d,p,g,y);return A&&(C.gu=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const s=vt(n);it(qs,"RemoteStore shutting down."),s.Ea.add(5),await Xl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Tm.provider={build:()=>new Tm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $D{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Xi("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Fr="FirestoreClient";class ZD{constructor(t,n,s,l,c){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=l,this.user=Qe.UNAUTHENTICATED,this.clientId=zm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async d=>{it(Fr,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(s,d=>(it(Fr,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ap(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Gd(r,t){r.asyncQueue.verifyOperationInProgress(),it(Fr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async l=>{s.isEqual(l)||(await P0(t.localStore,l),s=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function iE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await WD(r);it(Fr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>Zv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,l)=>Zv(t.remoteStore,l)),r._onlineComponents=t}async function WD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){it(Fr,"Using user provided OfflineComponentProvider");try{await Gd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(l){return l.name==="FirebaseError"?l.code===X.FAILED_PRECONDITION||l.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(n))throw n;Qa("Error using user provided cache. Falling back to memory cache: "+n),await Gd(r,new rh)}}else it(Fr,"Using default OfflineComponentProvider"),await Gd(r,new XD(void 0));return r._offlineComponents}async function W0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(it(Fr,"Using user provided OnlineComponentProvider"),await iE(r,r._uninitializedComponentsProvider._online)):(it(Fr,"Using default OnlineComponentProvider"),await iE(r,new Tm))),r._onlineComponents}function JD(r){return W0(r).then(t=>t.syncEngine)}async function tO(r){const t=await W0(r),n=t.eventManager;return n.onListen=UD.bind(null,t.syncEngine),n.onUnlisten=zD.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=LD.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=BD.bind(null,t.syncEngine),n}function eO(r,t,n={}){const s=new Lr;return r.asyncQueue.enqueueAndForget(async()=>function(c,d,p,g,y){const A=new $D({next:I=>{A.Nu(),d.enqueueAndForget(()=>CD(c,C));const F=I.docs.has(p);!F&&I.fromCache?y.reject(new st(X.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&I.fromCache&&g&&g.source==="server"?y.reject(new st(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),C=new ND(Km(p.path),A,{includeMetadataChanges:!0,qa:!0});return ID(c,C)}(await tO(r),r.asyncQueue,t,n,s)),s.promise}/**
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
 */function J0(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="firestore.googleapis.com",sE=!0;class aE{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new st(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tA,this.ssl=sE}else this.host=t.host,this.ssl=t.ssl??sE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=M0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<D2)throw new st(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J0(t.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new st(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new st(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new st(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class cp{constructor(t,n,s,l){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new st(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new eC;switch(s.type){case"firstParty":return new sC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new st(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=rE.get(n);s&&(it("ComponentProvider","Removing Datastore"),rE.delete(n),s.terminate())}(this),Promise.resolve()}}function nO(r,t,n,s={}){r=Bs(r,cp);const l=Ja(t),c=r._getSettings(),d={...c,emulatorOptions:r._getEmulatorOptions()},p=`${t}:${n}`;l&&(wE(`https://${p}`),bE("Firestore",!0)),c.host!==tA&&c.host!==p&&Qa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...c,host:p,ssl:l,emulatorOptions:s};if(!xr(g,d)&&(r._setSettings(g),s.mockUserToken)){let y,A;if(typeof s.mockUserToken=="string")y=s.mockUserToken,A=Qe.MOCK_USER;else{y=QS(s.mockUserToken,r._app?.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new st(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Qe(C)}r._authCredentials=new nC(new GT(y,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new hp(this.firestore,t,this._query)}}class we{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new we(this.firestore,t,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(Kl(n,we._jsonSchema))return new we(t,s||null,new ut(ne.fromString(n.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:ye("string",we._jsonSchemaVersion),referencePath:ye("string")};class Bl extends hp{constructor(t,n,s){super(t,n,Km(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new we(this.firestore,null,new ut(t))}withConverter(t){return new Bl(this.firestore,t,this._path)}}function PO(r,t,...n){if(r=Re(r),arguments.length===1&&(t=zm.newId()),hC("doc","path",t),r instanceof cp){const s=ne.fromString(t,...n);return Ev(s),new we(r,null,new ut(s))}{if(!(r instanceof we||r instanceof Bl))throw new st(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ne.fromString(t,...n));return Ev(s),new we(r.firestore,r instanceof Bl?r.converter:null,new ut(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="AsyncQueue";class lE{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new U0(this,"async_queue_retry"),this._c=()=>{const s=Fd();s&&it(oE,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=Fd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Lr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!ro(t))throw t;it(oE,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(s=>{throw this.nc=s,this.rc=!1,Xi("INTERNAL UNHANDLED ERROR: ",uE(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const l=sp.createAndSchedule(this,t,n,s,c=>this.hc(c));return this.tc.push(l),l}uc(){this.nc&&mt(47125,{Pc:uE(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function uE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class bh extends cp{constructor(t,n,s,l){super(t,n,s,l),this.type="firestore",this._queue=new lE,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new lE(t),this._firestoreClient=void 0,await t}}}function iO(r,t){const n=typeof r=="object"?r:wm(),s=typeof r=="string"?r:Xc,l=js(n,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=GS("firestore");c&&nO(l,...c)}return l}function eA(r){if(r._terminated)throw new st(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rO(r),r._firestoreClient}function rO(r){const t=r._freezeSettings(),n=function(l,c,d,p){return new SC(l,c,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,J0(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new ZD(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Mn(He.fromBase64String(t))}catch(n){throw new st(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Mn(He.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Mn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Kl(t,Mn._jsonSchema))return Mn.fromBase64String(t.bytes)}}Mn._jsonSchemaVersion="firestore/bytes/1.0",Mn._jsonSchema={type:ye("string",Mn._jsonSchemaVersion),bytes:ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new st(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t){this._methodName=t}}/**
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
 */class di{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new st(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new st(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Dt(this._lat,t._lat)||Dt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:di._jsonSchemaVersion}}static fromJSON(t){if(Kl(t,di._jsonSchema))return new di(t.latitude,t.longitude)}}di._jsonSchemaVersion="firestore/geoPoint/1.0",di._jsonSchema={type:ye("string",di._jsonSchemaVersion),latitude:ye("number"),longitude:ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0}(this._values,t._values)}toJSON(){return{type:mi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Kl(t,mi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new mi(t.vectorValues);throw new st(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mi._jsonSchemaVersion="firestore/vectorValue/1.0",mi._jsonSchema={type:ye("string",mi._jsonSchemaVersion),vectorValues:ye("object")};/**
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
 */const sO=/^__.*__$/;class aO{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Qr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ql(t,this.data,n,this.fieldTransforms)}}class nA{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Qr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function iA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw mt(40011,{Ac:r})}}class dp{constructor(t,n,s,l,c,d){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new dp({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){const n=this.path?.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return sh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(iA(this.Ac)&&sO.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class oO{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Ah(t)}Cc(t,n,s,l=!1){return new dp({Ac:t,methodName:n,Dc:s,path:qe.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rA(r){const t=r._freezeSettings(),n=Ah(r._databaseId);return new oO(r._databaseId,!!t.ignoreUndefinedProperties,n)}function lO(r,t,n,s,l,c={}){const d=r.Cc(c.merge||c.mergeFields?2:0,t,n,l);mp("Data must be an object, but it was:",d,s);const p=sA(s,d);let g,y;if(c.merge)g=new gn(d.fieldMask),y=d.fieldTransforms;else if(c.mergeFields){const A=[];for(const C of c.mergeFields){const I=Am(t,C,n);if(!d.contains(I))throw new st(X.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);oA(A,I)||A.push(I)}g=new gn(A),y=d.fieldTransforms.filter(C=>g.covers(C.field))}else g=null,y=d.fieldTransforms;return new aO(new sn(p),g,y)}class Ih extends fp{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ih}}function uO(r,t,n,s){const l=r.Cc(1,t,n);mp("Data must be an object, but it was:",l,s);const c=[],d=sn.empty();Kr(s,(g,y)=>{const A=pp(t,g,n);y=Re(y);const C=l.yc(A);if(y instanceof Ih)c.push(A);else{const I=Ch(y,C);I!=null&&(c.push(A),d.set(A,I))}});const p=new gn(c);return new nA(d,p,l.fieldTransforms)}function cO(r,t,n,s,l,c){const d=r.Cc(1,t,n),p=[Am(t,s,n)],g=[l];if(c.length%2!=0)throw new st(X.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<c.length;I+=2)p.push(Am(t,c[I])),g.push(c[I+1]);const y=[],A=sn.empty();for(let I=p.length-1;I>=0;--I)if(!oA(y,p[I])){const F=p[I];let $=g[I];$=Re($);const nt=d.yc(F);if($ instanceof Ih)y.push(F);else{const Z=Ch($,nt);Z!=null&&(y.push(F),A.set(F,Z))}}const C=new gn(y);return new nA(A,C,d.fieldTransforms)}function Ch(r,t){if(aA(r=Re(r)))return mp("Unsupported field value:",t,r),sA(r,t);if(r instanceof fp)return function(s,l){if(!iA(l.Ac))throw l.Sc(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(s,l){const c=[];let d=0;for(const p of s){let g=Ch(p,l.wc(d));g==null&&(g={nullValue:"NULL_VALUE"}),c.push(g),d++}return{arrayValue:{values:c}}}(r,t)}return function(s,l){if((s=Re(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return QC(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Wt.fromDate(s);return{timestampValue:eh(l.serializer,c)}}if(s instanceof Wt){const c=new Wt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:eh(l.serializer,c)}}if(s instanceof di)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Mn)return{bytesValue:b0(l.serializer,s._byteString)};if(s instanceof we){const c=l.databaseId,d=s.firestore._databaseId;if(!d.isEqual(c))throw l.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:$m(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof mi)return function(d,p){return{mapValue:{fields:{[t0]:{stringValue:e0},[$c]:{arrayValue:{values:d.toArray().map(y=>{if(typeof y!="number")throw p.Sc("VectorValues must only contain numeric values.");return Qm(p.serializer,y)})}}}}}}(s,l);throw l.Sc(`Unsupported field value: ${Bm(s)}`)}(r,t)}function sA(r,t){const n={};return YT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kr(r,(s,l)=>{const c=Ch(l,t.mc(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function aA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Wt||r instanceof di||r instanceof Mn||r instanceof we||r instanceof fp||r instanceof mi)}function mp(r,t,n){if(!aA(n)||!KT(n)){const s=Bm(n);throw s==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+s)}}function Am(r,t,n){if((t=Re(t))instanceof Rh)return t._internalPath;if(typeof t=="string")return pp(r,t);throw sh("Field path arguments must be of type string or ",r,!1,void 0,n)}const hO=new RegExp("[~\\*/\\[\\]]");function pp(r,t,n){if(t.search(hO)>=0)throw sh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Rh(...t.split("."))._internalPath}catch{throw sh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function sh(r,t,n,s,l){const c=s&&!s.isEmpty(),d=l!==void 0;let p=`Function ${t}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(c||d)&&(g+=" (found",c&&(g+=` in field ${s}`),d&&(g+=` in document ${l}`),g+=")"),new st(X.INVALID_ARGUMENT,p+r+g)}function oA(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(t,n,s,l,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new fO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(uA("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fO extends lA{data(){return super.data()}}function uA(r,t){return typeof t=="string"?pp(r,t):t instanceof Rh?t._internalPath:t._delegate._internalPath}class dO{convertValue(t,n="none"){switch(Hr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return he(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw mt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Kr(t,(l,c)=>{s[l]=this.convertValue(c,n)}),s}convertVectorValue(t){const n=t.fields?.[$c].arrayValue?.values?.map(s=>he(s.doubleValue));return new mi(n)}convertGeoPoint(t){return new di(he(t.latitude),he(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=ph(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(kl(t));default:return null}}convertTimestamp(t){const n=Br(t);return new Wt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ne.fromString(t);Bt(N0(s),9688,{name:t});const l=new Ul(s.get(1),s.get(3)),c=new ut(s.popFirst(5));return l.isEqual(n)||Xi(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(r,t,n){let s;return s=r?r.toFirestore(t):t,s}class Al{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ps extends lA{constructor(t,n,s,l,c,d){super(t,n,s,l,d),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(uA("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new st(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Ps._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:ye("string",Ps._jsonSchemaVersion),bundleSource:ye("string","DocumentSnapshot"),bundleName:ye("string"),bundle:ye("string")};class Uc extends Ps{data(t={}){return super.data(t)}}class Ol{constructor(t,n,s,l){this._firestore=t,this._userDataWriter=n,this._snapshot=l,this.metadata=new Al(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Uc(this._firestore,this._userDataWriter,s.key,s,new Al(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new st(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map(p=>{const g=new Uc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Al(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:d++}})}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(p=>c||p.type!==3).map(p=>{const g=new Uc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Al(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,A=-1;return p.type!==0&&(y=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),A=d.indexOf(p.doc.key)),{type:pO(p.type),doc:g,oldIndex:y,newIndex:A}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new st(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ol._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=zm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],l=[];return this.docs.forEach(c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function pO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return mt(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(r){r=Bs(r,we);const t=Bs(r.firestore,bh);return eO(eA(t),r._key).then(n=>yO(t,r,n))}Ol._jsonSchemaVersion="firestore/querySnapshot/1.0",Ol._jsonSchema={type:ye("string",Ol._jsonSchemaVersion),bundleSource:ye("string","QuerySnapshot"),bundleName:ye("string"),bundle:ye("string")};class gO extends dO{constructor(t){super(),this.firestore=t}convertBytes(t){return new Mn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new we(this.firestore,null,n)}}function UO(r,t,n){r=Bs(r,we);const s=Bs(r.firestore,bh),l=mO(r.converter,t);return cA(s,[lO(rA(s),"setDoc",r._key,l,r.converter!==null,n).toMutation(r._key,hi.none())])}function LO(r,t,n,...s){r=Bs(r,we);const l=Bs(r.firestore,bh),c=rA(l);let d;return d=typeof(t=Re(t))=="string"||t instanceof Rh?cO(c,"updateDoc",r._key,t,n,s):uO(c,"updateDoc",r._key,t),cA(l,[d.toMutation(r._key,hi.exists(!0))])}function cA(r,t){return function(s,l){const c=new Lr;return s.asyncQueue.enqueueAndForget(async()=>qD(await JD(s),l,c)),c.promise}(eA(r),t)}function yO(r,t,n){const s=n.docs.get(t._key),l=new gO(r);return new Ps(r,l,t._key,s,new Al(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(l){no=l})(to),pi(new qn("firestore",(s,{instanceIdentifier:l,options:c})=>{const d=s.getProvider("app").getImmediate(),p=new bh(new iC(s.getProvider("auth-internal")),new aC(d,s.getProvider("app-check-internal")),function(y,A){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new st(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ul(y.options.projectId,A)}(d,l),d);return c={useFetchStreams:n,...c},p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),Vn(gv,yv,t),Vn(gv,yv,"esm2020")})();const _O={apiKey:"AIzaSyAsMG_4s0N7Dbpw9P1bv9jjm1Qll36BDyQ",authDomain:"firstproject-207f5.firebaseapp.com",projectId:"firstproject-207f5",storageBucket:"firstproject-207f5.firebasestorage.app",messagingSenderId:"283821068320",appId:"1:283821068320:web:5826a58342bcc1f65d2c45",measurementId:"G-3VY41RFF2B"},gp=ME(_O);xb(gp);const xO=JI(gp),zO=iO(gp);var Kd={exports:{}},At={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE;function vO(){if(cE)return At;cE=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.iterator;function I(D){return D===null||typeof D!="object"?null:(D=C&&D[C]||D["@@iterator"],typeof D=="function"?D:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,nt={};function Z(D,Y,et){this.props=D,this.context=Y,this.refs=nt,this.updater=et||F}Z.prototype.isReactComponent={},Z.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},Z.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Et(){}Et.prototype=Z.prototype;function gt(D,Y,et){this.props=D,this.context=Y,this.refs=nt,this.updater=et||F}var ct=gt.prototype=new Et;ct.constructor=gt,$(ct,Z.prototype),ct.isPureReactComponent=!0;var qt=Array.isArray,Tt={H:null,A:null,T:null,S:null,V:null},xt=Object.prototype.hasOwnProperty;function V(D,Y,et,W,lt,wt){return et=wt.ref,{$$typeof:r,type:D,key:Y,ref:et!==void 0?et:null,props:wt}}function S(D,Y){return V(D.type,Y,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(et){return Y[et]})}var M=/\/+/g;function k(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):Y.toString(36)}function b(){}function Pe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(b,b):(D.status="pending",D.then(function(Y){D.status==="pending"&&(D.status="fulfilled",D.value=Y)},function(Y){D.status==="pending"&&(D.status="rejected",D.reason=Y)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function re(D,Y,et,W,lt){var wt=typeof D;(wt==="undefined"||wt==="boolean")&&(D=null);var yt=!1;if(D===null)yt=!0;else switch(wt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(D.$$typeof){case r:case t:yt=!0;break;case A:return yt=D._init,re(yt(D._payload),Y,et,W,lt)}}if(yt)return lt=lt(D),yt=W===""?"."+k(D,0):W,qt(lt)?(et="",yt!=null&&(et=yt.replace(M,"$&/")+"/"),re(lt,Y,et,"",function(Fn){return Fn})):lt!=null&&(R(lt)&&(lt=S(lt,et+(lt.key==null||D&&D.key===lt.key?"":(""+lt.key).replace(M,"$&/")+"/")+yt)),Y.push(lt)),1;yt=0;var Ie=W===""?".":W+":";if(qt(D))for(var $t=0;$t<D.length;$t++)W=D[$t],wt=Ie+k(W,$t),yt+=re(W,Y,et,wt,lt);else if($t=I(D),typeof $t=="function")for(D=$t.call(D),$t=0;!(W=D.next()).done;)W=W.value,wt=Ie+k(W,$t++),yt+=re(W,Y,et,wt,lt);else if(wt==="object"){if(typeof D.then=="function")return re(Pe(D),Y,et,W,lt);throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return yt}function H(D,Y,et){if(D==null)return D;var W=[],lt=0;return re(D,W,"","",function(wt){return Y.call(et,wt,lt++)}),W}function tt(D){if(D._status===-1){var Y=D._result;Y=Y(),Y.then(function(et){(D._status===0||D._status===-1)&&(D._status=1,D._result=et)},function(et){(D._status===0||D._status===-1)&&(D._status=2,D._result=et)}),D._status===-1&&(D._status=0,D._result=Y)}if(D._status===1)return D._result.default;throw D._result}var ot=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ut(){}return At.Children={map:H,forEach:function(D,Y,et){H(D,function(){Y.apply(this,arguments)},et)},count:function(D){var Y=0;return H(D,function(){Y++}),Y},toArray:function(D){return H(D,function(Y){return Y})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},At.Component=Z,At.Fragment=n,At.Profiler=l,At.PureComponent=gt,At.StrictMode=s,At.Suspense=g,At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt,At.__COMPILER_RUNTIME={__proto__:null,c:function(D){return Tt.H.useMemoCache(D)}},At.cache=function(D){return function(){return D.apply(null,arguments)}},At.cloneElement=function(D,Y,et){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var W=$({},D.props),lt=D.key,wt=void 0;if(Y!=null)for(yt in Y.ref!==void 0&&(wt=void 0),Y.key!==void 0&&(lt=""+Y.key),Y)!xt.call(Y,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&Y.ref===void 0||(W[yt]=Y[yt]);var yt=arguments.length-2;if(yt===1)W.children=et;else if(1<yt){for(var Ie=Array(yt),$t=0;$t<yt;$t++)Ie[$t]=arguments[$t+2];W.children=Ie}return V(D.type,lt,void 0,void 0,wt,W)},At.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},At.createElement=function(D,Y,et){var W,lt={},wt=null;if(Y!=null)for(W in Y.key!==void 0&&(wt=""+Y.key),Y)xt.call(Y,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(lt[W]=Y[W]);var yt=arguments.length-2;if(yt===1)lt.children=et;else if(1<yt){for(var Ie=Array(yt),$t=0;$t<yt;$t++)Ie[$t]=arguments[$t+2];lt.children=Ie}if(D&&D.defaultProps)for(W in yt=D.defaultProps,yt)lt[W]===void 0&&(lt[W]=yt[W]);return V(D,wt,void 0,void 0,null,lt)},At.createRef=function(){return{current:null}},At.forwardRef=function(D){return{$$typeof:p,render:D}},At.isValidElement=R,At.lazy=function(D){return{$$typeof:A,_payload:{_status:-1,_result:D},_init:tt}},At.memo=function(D,Y){return{$$typeof:y,type:D,compare:Y===void 0?null:Y}},At.startTransition=function(D){var Y=Tt.T,et={};Tt.T=et;try{var W=D(),lt=Tt.S;lt!==null&&lt(et,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Ut,ot)}catch(wt){ot(wt)}finally{Tt.T=Y}},At.unstable_useCacheRefresh=function(){return Tt.H.useCacheRefresh()},At.use=function(D){return Tt.H.use(D)},At.useActionState=function(D,Y,et){return Tt.H.useActionState(D,Y,et)},At.useCallback=function(D,Y){return Tt.H.useCallback(D,Y)},At.useContext=function(D){return Tt.H.useContext(D)},At.useDebugValue=function(){},At.useDeferredValue=function(D,Y){return Tt.H.useDeferredValue(D,Y)},At.useEffect=function(D,Y,et){var W=Tt.H;if(typeof et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(D,Y)},At.useId=function(){return Tt.H.useId()},At.useImperativeHandle=function(D,Y,et){return Tt.H.useImperativeHandle(D,Y,et)},At.useInsertionEffect=function(D,Y){return Tt.H.useInsertionEffect(D,Y)},At.useLayoutEffect=function(D,Y){return Tt.H.useLayoutEffect(D,Y)},At.useMemo=function(D,Y){return Tt.H.useMemo(D,Y)},At.useOptimistic=function(D,Y){return Tt.H.useOptimistic(D,Y)},At.useReducer=function(D,Y,et){return Tt.H.useReducer(D,Y,et)},At.useRef=function(D){return Tt.H.useRef(D)},At.useState=function(D){return Tt.H.useState(D)},At.useSyncExternalStore=function(D,Y,et){return Tt.H.useSyncExternalStore(D,Y,et)},At.useTransition=function(){return Tt.H.useTransition()},At.version="19.1.0",At}var hE;function yp(){return hE||(hE=1,Kd.exports=vO()),Kd.exports}var BO=yp(),Qd={exports:{}},gl={},Yd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE;function EO(){return fE||(fE=1,function(r){function t(H,tt){var ot=H.length;H.push(tt);t:for(;0<ot;){var Ut=ot-1>>>1,D=H[Ut];if(0<l(D,tt))H[Ut]=tt,H[ot]=D,ot=Ut;else break t}}function n(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var tt=H[0],ot=H.pop();if(ot!==tt){H[0]=ot;t:for(var Ut=0,D=H.length,Y=D>>>1;Ut<Y;){var et=2*(Ut+1)-1,W=H[et],lt=et+1,wt=H[lt];if(0>l(W,ot))lt<D&&0>l(wt,W)?(H[Ut]=wt,H[lt]=ot,Ut=lt):(H[Ut]=W,H[et]=ot,Ut=et);else if(lt<D&&0>l(wt,ot))H[Ut]=wt,H[lt]=ot,Ut=lt;else break t}}return tt}function l(H,tt){var ot=H.sortIndex-tt.sortIndex;return ot!==0?ot:H.id-tt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var g=[],y=[],A=1,C=null,I=3,F=!1,$=!1,nt=!1,Z=!1,Et=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;function qt(H){for(var tt=n(y);tt!==null;){if(tt.callback===null)s(y);else if(tt.startTime<=H)s(y),tt.sortIndex=tt.expirationTime,t(g,tt);else break;tt=n(y)}}function Tt(H){if(nt=!1,qt(H),!$)if(n(g)!==null)$=!0,xt||(xt=!0,k());else{var tt=n(y);tt!==null&&re(Tt,tt.startTime-H)}}var xt=!1,V=-1,S=5,R=-1;function N(){return Z?!0:!(r.unstable_now()-R<S)}function M(){if(Z=!1,xt){var H=r.unstable_now();R=H;var tt=!0;try{t:{$=!1,nt&&(nt=!1,gt(V),V=-1),F=!0;var ot=I;try{e:{for(qt(H),C=n(g);C!==null&&!(C.expirationTime>H&&N());){var Ut=C.callback;if(typeof Ut=="function"){C.callback=null,I=C.priorityLevel;var D=Ut(C.expirationTime<=H);if(H=r.unstable_now(),typeof D=="function"){C.callback=D,qt(H),tt=!0;break e}C===n(g)&&s(g),qt(H)}else s(g);C=n(g)}if(C!==null)tt=!0;else{var Y=n(y);Y!==null&&re(Tt,Y.startTime-H),tt=!1}}break t}finally{C=null,I=ot,F=!1}tt=void 0}}finally{tt?k():xt=!1}}}var k;if(typeof ct=="function")k=function(){ct(M)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,Pe=b.port2;b.port1.onmessage=M,k=function(){Pe.postMessage(null)}}else k=function(){Et(M,0)};function re(H,tt){V=Et(function(){H(r.unstable_now())},tt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_next=function(H){switch(I){case 1:case 2:case 3:var tt=3;break;default:tt=I}var ot=I;I=tt;try{return H()}finally{I=ot}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(H,tt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ot=I;I=H;try{return tt()}finally{I=ot}},r.unstable_scheduleCallback=function(H,tt,ot){var Ut=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?Ut+ot:Ut):ot=Ut,H){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ot+D,H={id:A++,callback:tt,priorityLevel:H,startTime:ot,expirationTime:D,sortIndex:-1},ot>Ut?(H.sortIndex=ot,t(y,H),n(g)===null&&H===n(y)&&(nt?(gt(V),V=-1):nt=!0,re(Tt,ot-Ut))):(H.sortIndex=D,t(g,H),$||F||($=!0,xt||(xt=!0,k()))),H},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(H){var tt=I;return function(){var ot=I;I=tt;try{return H.apply(this,arguments)}finally{I=ot}}}}(Xd)),Xd}var dE;function TO(){return dE||(dE=1,Yd.exports=EO()),Yd.exports}var $d={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mE;function AO(){if(mE)return Ke;mE=1;var r=yp();function t(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)y+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,y,A){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:C==null?null:""+C,children:g,containerInfo:y,implementation:A}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ke.createPortal=function(g,y){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return c(g,y,null,A)},Ke.flushSync=function(g){var y=d.T,A=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=y,s.p=A,s.d.f()}},Ke.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},Ke.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Ke.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var A=y.as,C=p(A,y.crossOrigin),I=typeof y.integrity=="string"?y.integrity:void 0,F=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;A==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:C,integrity:I,fetchPriority:F}):A==="script"&&s.d.X(g,{crossOrigin:C,integrity:I,fetchPriority:F,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ke.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var A=p(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},Ke.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var A=y.as,C=p(A,y.crossOrigin);s.d.L(g,A,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ke.preloadModule=function(g,y){if(typeof g=="string")if(y){var A=p(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},Ke.requestFormReset=function(g){s.d.r(g)},Ke.unstable_batchedUpdates=function(g,y){return g(y)},Ke.useFormState=function(g,y,A){return d.H.useFormState(g,y,A)},Ke.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ke.version="19.1.0",Ke}var pE;function SO(){if(pE)return $d.exports;pE=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),$d.exports=AO(),$d.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE;function wO(){if(gE)return gl;gE=1;var r=TO(),t=yp(),n=SO();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function d(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function g(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var h=a.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===a)return p(h),e;if(f===o)return p(h),i;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=f;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,o=f;break}if(E===o){v=!0,o=h,a=f;break}E=E.sibling}if(!v){for(E=f.child;E;){if(E===a){v=!0,a=f,o=h;break}if(E===o){v=!0,o=f,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var A=Object.assign,C=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),Et=Symbol.for("react.provider"),gt=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),qt=Symbol.for("react.forward_ref"),Tt=Symbol.for("react.suspense"),xt=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var b=Symbol.for("react.client.reference");function Pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===b?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case Z:return"Profiler";case nt:return"StrictMode";case Tt:return"Suspense";case xt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case ct:return(e.displayName||"Context")+".Provider";case gt:return(e._context.displayName||"Context")+".Consumer";case qt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return i=e.displayName||null,i!==null?i:Pe(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return Pe(e(i))}catch{}}return null}var re=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},Ut=[],D=-1;function Y(e){return{current:e}}function et(e){0>D||(e.current=Ut[D],Ut[D]=null,D--)}function W(e,i){D++,Ut[D]=e.current,e.current=i}var lt=Y(null),wt=Y(null),yt=Y(null),Ie=Y(null);function $t(e,i){switch(W(yt,i),W(wt,e),W(lt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?n_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=n_(i),e=i_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(lt),W(lt,e)}function Fn(){et(lt),et(wt),et(yt)}function Ji(e){e.memoizedState!==null&&W(Ie,e);var i=lt.current,a=i_(i,e.type);i!==a&&(W(wt,e),W(lt,a))}function _i(e){wt.current===e&&(et(lt),et(wt)),Ie.current===e&&(et(Ie),cl._currentValue=ot)}var Yr=Object.prototype.hasOwnProperty,Xr=r.unstable_scheduleCallback,$r=r.unstable_cancelCallback,ao=r.unstable_shouldYield,Zl=r.unstable_requestPaint,_n=r.unstable_now,Dh=r.unstable_getCurrentPriorityLevel,oo=r.unstable_ImmediatePriority,Ks=r.unstable_UserBlockingPriority,Zr=r.unstable_NormalPriority,Oh=r.unstable_LowPriority,Qs=r.unstable_IdlePriority,lo=r.log,Wl=r.unstable_setDisableYieldValue,se=null,Ht=null;function on(e){if(typeof lo=="function"&&Wl(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(se,e)}catch{}}var je=Math.clz32?Math.clz32:Wr,Jl=Math.log,Nh=Math.LN2;function Wr(e){return e>>>=0,e===0?32:31-(Jl(e)/Nh|0)|0}var Jr=256,ts=4194304;function Pn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ys(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var h=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?h=Pn(o):(v&=E,v!==0?h=Pn(v):a||(a=E&~e,a!==0&&(h=Pn(a))))):(E=o&~f,E!==0?h=Pn(E):v!==0?h=Pn(v):a||(a=o&~e,a!==0&&(h=Pn(a)))),h===0?0:i!==0&&i!==h&&(i&f)===0&&(f=h&-h,a=i&-i,f>=a||f===32&&(a&4194048)!==0)?i:h}function es(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function uo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function co(){var e=Jr;return Jr<<=1,(Jr&4194048)===0&&(Jr=256),e}function ho(){var e=ts;return ts<<=1,(ts&62914560)===0&&(ts=4194304),e}function vi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ei(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fo(e,i,a,o,h,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,x=e.hiddenUpdates;for(a=v&~a;0<a;){var j=31-je(a),K=1<<j;E[j]=0,w[j]=-1;var z=x[j];if(z!==null)for(x[j]=null,j=0;j<z.length;j++){var B=z[j];B!==null&&(B.lane&=-536870913)}a&=~K}o!==0&&Gn(e,o,0),f!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~i))}function Gn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-je(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function mo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-je(a),h=1<<o;h&i|e[o]&i&&(e[o]|=i),a&=~h}}function tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function er(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:A_(e.type))}function tu(e,i){var a=tt.p;try{return tt.p=e,i()}finally{tt.p=a}}var Jt=Math.random().toString(36).slice(2),_e="__reactFiber$"+Jt,fe="__reactProps$"+Jt,vn="__reactContainer$"+Jt,po="__reactEvents$"+Jt,Mh="__reactListeners$"+Jt,nr="__reactHandles$"+Jt,eu="__reactResources$"+Jt,ns="__reactMarker$"+Jt;function ir(e){delete e[_e],delete e[fe],delete e[po],delete e[Mh],delete e[nr]}function Ti(e){var i=e[_e];if(i)return i;for(var a=e.parentNode;a;){if(i=a[vn]||a[_e]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=o_(e);e!==null;){if(a=e[_e])return a;e=o_(e)}return i}e=a,a=e.parentNode}return null}function Kn(e){if(e=e[_e]||e[vn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Qn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function $e(e){var i=e[eu];return i||(i=e[eu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function le(e){e[ns]=!0}var go=new Set,$s={};function kn(e,i){Ai(e,i),Ai(e+"Capture",i)}function Ai(e,i){for($s[e]=i,e=0;e<i.length;e++)go.add(i[e])}var nu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),iu={},is={};function ru(e){return Yr.call(is,e)?!0:Yr.call(iu,e)?!1:nu.test(e)?is[e]=!0:(iu[e]=!0,!1)}function rr(e,i,a){if(ru(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Yn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function ke(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}var rs,su;function Si(e){if(rs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);rs=i&&i[1]||"",su=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rs+e+su}var Zs=!1;function Ws(e,i){if(!e||Zs)return"";Zs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var z=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){z=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){z=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],E=f[1];if(v&&E){var w=v.split(`
`),x=E.split(`
`);for(h=o=0;o<w.length&&!w[o].includes("DetermineComponentFrameRoot");)o++;for(;h<x.length&&!x[h].includes("DetermineComponentFrameRoot");)h++;if(o===w.length||h===x.length)for(o=w.length-1,h=x.length-1;1<=o&&0<=h&&w[o]!==x[h];)h--;for(;1<=o&&0<=h;o--,h--)if(w[o]!==x[h]){if(o!==1||h!==1)do if(o--,h--,0>h||w[o]!==x[h]){var j=`
`+w[o].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=o&&0<=h);break}}}finally{Zs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Si(a):""}function yo(e){switch(e.tag){case 26:case 27:case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return Ws(e.type,!1);case 11:return Ws(e.type.render,!1);case 1:return Ws(e.type,!0);case 31:return Si("Activity");default:return""}}function Js(e){try{var i="";do i+=yo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _o(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Vh(e){var i=_o(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,f=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){o=""+v,f.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ta(e){e._valueTracker||(e._valueTracker=Vh(e))}function vo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=_o(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ph=/[\n"\\]/g;function de(e){return e.replace(Ph,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ln(e,i,a,o,h,f,v,E){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ze(i)):e.value!==""+Ze(i)&&(e.value=""+Ze(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?sr(e,v,Ze(i)):a!=null?sr(e,v,Ze(a)):o!=null&&e.removeAttribute("value"),h==null&&f!=null&&(e.defaultChecked=!!f),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Ze(E):e.removeAttribute("name")}function as(e,i,a,o,h,f,v,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),i!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||i!=null))return;a=a!=null?""+Ze(a):"",i=i!=null?""+Ze(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function sr(e,i,a){i==="number"&&ss(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function wi(e,i,a,o){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ze(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Gt(e,i,a){if(i!=null&&(i=""+Ze(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Ze(a):""}function os(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(re(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=Ze(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function En(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var ls=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function au(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||ls.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Eo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&a[h]!==o&&au(e,h,o)}else for(var f in i)i.hasOwnProperty(f)&&au(e,f,i[f])}function To(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ea(e){return Uh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var bi=null;function Tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ri=null,Ii=null;function Ao(e){var i=Kn(e);if(i&&(e=i.stateNode)){var a=e[fe]||null;t:switch(e=i.stateNode,i.type){case"input":if(ln(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var h=o[fe]||null;if(!h)throw Error(s(90));ln(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&vo(o)}break t;case"textarea":Gt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&wi(e,!!a.multiple,i,!1)}}}var Xn=!1;function ou(e,i,a){if(Xn)return e(i,a);Xn=!0;try{var o=e(i);return o}finally{if(Xn=!1,(Ri!==null||Ii!==null)&&(tc(),Ri&&(i=Ri,e=Ii,Ii=Ri=null,Ao(i),e)))for(i=0;i<e.length;i++)Ao(e[i])}}function us(e,i){var a=e.stateNode;if(a===null)return null;var o=a[fe]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=!1;if(Un)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){An=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{An=!1}var $n=null,ar=null,Ci=null;function So(){if(Ci)return Ci;var e,i=ar,a=i.length,o,h="value"in $n?$n.value:$n.textContent,f=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(o=1;o<=v&&i[a-o]===h[f-o];o++);return Ci=h.slice(e,1<o?1-o:void 0)}function Zn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function wo(){return!1}function Ce(e){function i(a,o,h,f,v){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wn:wo,this.isPropagationStopped=wo,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=Ce(zt),hs=A({},zt,{view:0,detail:0}),lu=Ce(hs),ia,ra,Jn,fs=A({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(ia=e.screenX-Jn.screenX,ra=e.screenY-Jn.screenY):ra=ia=0,Jn=e),ia)},movementY:function(e){return"movementY"in e?e.movementY:ra}}),Sn=Ce(fs),uu=A({},fs,{dataTransfer:0}),Lh=Ce(uu),ds=A({},hs,{relatedTarget:0}),sa=Ce(ds),bo=A({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),aa=Ce(bo),cu=A({},zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oa=Ce(cu),xh=A({},zt,{data:0}),Ro=Ce(xh),ms={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Io(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=fu[e])?!!i[e]:!1}function ps(){return Io}var du=A({},hs,{key:function(e){if(e.key){var i=ms[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),la=Ce(du),mu=A({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Co=Ce(mu),Di=A({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),pu=Ce(Di),gu=A({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),yu=Ce(gu),_u=A({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ua=Ce(_u),We=A({},zt,{newState:0,oldState:0}),vu=Ce(We),Eu=[9,13,27,32],ti=Un&&"CompositionEvent"in window,u=null;Un&&"documentMode"in document&&(u=document.documentMode);var m=Un&&"TextEvent"in window&&!u,_=Un&&(!ti||u&&8<u&&11>=u),T=" ",U=!1;function q(e,i){switch(e){case"keyup":return Eu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nt=!1;function ve(e,i){switch(e){case"compositionend":return J(i);case"keypress":return i.which!==32?null:(U=!0,T);case"textInput":return e=i.data,e===T&&U?null:e;default:return null}}function Mt(e,i){if(Nt)return e==="compositionend"||!ti&&q(e,i)?(e=So(),Ci=ar=$n=null,Nt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var De={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ee(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!De[e.type]:i==="textarea"}function Oi(e,i,a,o){Ri?Ii?Ii.push(o):Ii=[o]:Ri=o,i=ac(i,"onChange"),0<i.length&&(a=new na("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var Ue=null,ei=null;function Do(e){Zy(e,0)}function Tu(e){var i=Qn(e);if(vo(i))return e}function _p(e,i){if(e==="change")return i}var vp=!1;if(Un){var zh;if(Un){var Bh="oninput"in document;if(!Bh){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),Bh=typeof Ep.oninput=="function"}zh=Bh}else zh=!1;vp=zh&&(!document.documentMode||9<document.documentMode)}function Tp(){Ue&&(Ue.detachEvent("onpropertychange",Ap),ei=Ue=null)}function Ap(e){if(e.propertyName==="value"&&Tu(ei)){var i=[];Oi(i,ei,e,Tn(e)),ou(Do,i)}}function hA(e,i,a){e==="focusin"?(Tp(),Ue=i,ei=a,Ue.attachEvent("onpropertychange",Ap)):e==="focusout"&&Tp()}function fA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tu(ei)}function dA(e,i){if(e==="click")return Tu(i)}function mA(e,i){if(e==="input"||e==="change")return Tu(i)}function pA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var un=typeof Object.is=="function"?Object.is:pA;function Oo(e,i){if(un(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!Yr.call(i,h)||!un(e[h],i[h]))return!1}return!0}function Sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wp(e,i){var a=Sp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Sp(a)}}function bp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?bp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Rp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ss(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ss(e.document)}return i}function qh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var gA=Un&&"documentMode"in document&&11>=document.documentMode,ca=null,Hh=null,No=null,jh=!1;function Ip(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jh||ca==null||ca!==ss(o)||(o=ca,"selectionStart"in o&&qh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),No&&Oo(No,o)||(No=o,o=ac(Hh,"onSelect"),0<o.length&&(i=new na("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=ca)))}function gs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var ha={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},Fh={},Cp={};Un&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function ys(e){if(Fh[e])return Fh[e];if(!ha[e])return e;var i=ha[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Cp)return Fh[e]=i[a];return e}var Dp=ys("animationend"),Op=ys("animationiteration"),Np=ys("animationstart"),yA=ys("transitionrun"),_A=ys("transitionstart"),vA=ys("transitioncancel"),Mp=ys("transitionend"),Vp=new Map,Gh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gh.push("scrollEnd");function Ln(e,i){Vp.set(e,i),kn(i,[e])}var Pp=new WeakMap;function wn(e,i){if(typeof e=="object"&&e!==null){var a=Pp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Js(i)},Pp.set(e,i),i)}return{value:e,source:i,stack:Js(i)}}var bn=[],fa=0,Kh=0;function Au(){for(var e=fa,i=Kh=fa=0;i<e;){var a=bn[i];bn[i++]=null;var o=bn[i];bn[i++]=null;var h=bn[i];bn[i++]=null;var f=bn[i];if(bn[i++]=null,o!==null&&h!==null){var v=o.pending;v===null?h.next=h:(h.next=v.next,v.next=h),o.pending=h}f!==0&&kp(a,h,f)}}function Su(e,i,a,o){bn[fa++]=e,bn[fa++]=i,bn[fa++]=a,bn[fa++]=o,Kh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Qh(e,i,a,o){return Su(e,i,a,o),wu(e)}function da(e,i){return Su(e,null,null,i),wu(e)}function kp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(h=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,h&&i!==null&&(h=31-je(a),e=f.hiddenUpdates,o=e[h],o===null?e[h]=[i]:o.push(i),i.lane=a|536870912),f):null}function wu(e){if(50<nl)throw nl=0,td=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ma={};function EA(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,i,a,o){return new EA(e,i,a,o)}function Yh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,i){var a=e.alternate;return a===null?(a=cn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Up(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function bu(e,i,a,o,h,f){var v=0;if(o=e,typeof e=="function")Yh(e)&&(v=1);else if(typeof e=="string")v=AS(e,a,lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=cn(31,a,i,h),e.elementType=R,e.lanes=f,e;case $:return _s(a.children,h,f,i);case nt:v=8,h|=24;break;case Z:return e=cn(12,a,i,h|2),e.elementType=Z,e.lanes=f,e;case Tt:return e=cn(13,a,i,h),e.elementType=Tt,e.lanes=f,e;case xt:return e=cn(19,a,i,h),e.elementType=xt,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Et:case ct:v=10;break t;case gt:v=9;break t;case qt:v=11;break t;case V:v=14;break t;case S:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=cn(v,a,i,h),i.elementType=e,i.type=o,i.lanes=f,i}function _s(e,i,a,o){return e=cn(7,e,o,i),e.lanes=a,e}function Xh(e,i,a){return e=cn(6,e,null,i),e.lanes=a,e}function $h(e,i,a){return i=cn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var pa=[],ga=0,Ru=null,Iu=0,Rn=[],In=0,vs=null,Mi=1,Vi="";function Es(e,i){pa[ga++]=Iu,pa[ga++]=Ru,Ru=e,Iu=i}function Lp(e,i,a){Rn[In++]=Mi,Rn[In++]=Vi,Rn[In++]=vs,vs=e;var o=Mi;e=Vi;var h=32-je(o)-1;o&=~(1<<h),a+=1;var f=32-je(i)+h;if(30<f){var v=h-h%5;f=(o&(1<<v)-1).toString(32),o>>=v,h-=v,Mi=1<<32-je(i)+h|a<<h|o,Vi=f+e}else Mi=1<<f|a<<h|o,Vi=e}function Zh(e){e.return!==null&&(Es(e,1),Lp(e,1,0))}function Wh(e){for(;e===Ru;)Ru=pa[--ga],pa[ga]=null,Iu=pa[--ga],pa[ga]=null;for(;e===vs;)vs=Rn[--In],Rn[In]=null,Vi=Rn[--In],Rn[In]=null,Mi=Rn[--In],Rn[In]=null}var Je=null,ae=null,Lt=!1,Ts=null,ni=!1,Jh=Error(s(519));function As(e){var i=Error(s(418,""));throw Po(wn(i,e)),Jh}function xp(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[_e]=e,i[fe]=o,a){case"dialog":It("cancel",i),It("close",i);break;case"iframe":case"object":case"embed":It("load",i);break;case"video":case"audio":for(a=0;a<rl.length;a++)It(rl[a],i);break;case"source":It("error",i);break;case"img":case"image":case"link":It("error",i),It("load",i);break;case"details":It("toggle",i);break;case"input":It("invalid",i),as(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ta(i);break;case"select":It("invalid",i);break;case"textarea":It("invalid",i),os(i,o.value,o.defaultValue,o.children),ta(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||e_(i.textContent,a)?(o.popover!=null&&(It("beforetoggle",i),It("toggle",i)),o.onScroll!=null&&It("scroll",i),o.onScrollEnd!=null&&It("scrollend",i),o.onClick!=null&&(i.onclick=oc),i=!0):i=!1,i||As(e)}function zp(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:Je=Je.return}}function Mo(e){if(e!==Je)return!1;if(!Lt)return zp(e),Lt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gd(e.type,e.memoizedProps)),a=!a),a&&ae&&As(e),zp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){ae=zn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}ae=null}}else i===27?(i=ae,Ar(e.type)?(e=Ed,Ed=null,ae=e):ae=i):ae=Je?zn(e.stateNode.nextSibling):null;return!0}function Vo(){ae=Je=null,Lt=!1}function Bp(){var e=Ts;return e!==null&&(nn===null?nn=e:nn.push.apply(nn,e),Ts=null),e}function Po(e){Ts===null?Ts=[e]:Ts.push(e)}var tf=Y(null),Ss=null,Pi=null;function or(e,i,a){W(tf,i._currentValue),i._currentValue=a}function ki(e){e._currentValue=tf.current,et(tf)}function ef(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function nf(e,i,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var f=h.dependencies;if(f!==null){var v=h.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=h;for(var w=0;w<i.length;w++)if(E.context===i[w]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),ef(f.return,a,e),o||(v=null);break t}f=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),ef(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function ko(e,i,a,o){e=null;for(var h=i,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;un(h.pendingProps.value,v.value)||(e!==null?e.push(E):e=[E])}}else if(h===Ie.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}h=h.return}e!==null&&nf(i,e,a,o),i.flags|=262144}function Cu(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ws(e){Ss=e,Pi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return qp(Ss,e)}function Du(e,i){return Ss===null&&ws(e),qp(e,i)}function qp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Pi===null){if(e===null)throw Error(s(308));Pi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Pi=Pi.next=i;return a}var TA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},AA=r.unstable_scheduleCallback,SA=r.unstable_NormalPriority,Te={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new TA,data:new Map,refCount:0}}function Uo(e){e.refCount--,e.refCount===0&&AA(SA,function(){e.controller.abort()})}var Lo=null,sf=0,ya=0,_a=null;function wA(e,i){if(Lo===null){var a=Lo=[];sf=0,ya=od(),_a={status:"pending",value:void 0,then:function(o){a.push(o)}}}return sf++,i.then(Hp,Hp),i}function Hp(){if(--sf===0&&Lo!==null){_a!==null&&(_a.status="fulfilled");var e=Lo;Lo=null,ya=0,_a=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function bA(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var jp=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&wA(e,i),jp!==null&&jp(e,i)};var bs=Y(null);function af(){var e=bs.current;return e!==null?e:Zt.pooledCache}function Ou(e,i){i===null?W(bs,bs.current):W(bs,i.pool)}function Fp(){var e=af();return e===null?null:{parent:Te._currentValue,pool:e}}var xo=Error(s(460)),Gp=Error(s(474)),Nu=Error(s(542)),of={then:function(){}};function Kp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mu(){}function Qp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Mu,Mu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Xp(e),e;default:if(typeof i.status=="string")i.then(Mu,Mu);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Xp(e),e}throw zo=i,xo}}var zo=null;function Yp(){if(zo===null)throw Error(s(459));var e=zo;return zo=null,e}function Xp(e){if(e===xo||e===Nu)throw Error(s(483))}var lr=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ur(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cr(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(jt&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=wu(e),kp(e,null,a),i}return Su(e,o,i,a),wu(e)}function Bo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,mo(e,a)}}function cf(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?h=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?h=f=i:f=f.next=i}else h=f=i;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var hf=!1;function qo(){if(hf){var e=_a;if(e!==null)throw e}}function Ho(e,i,a,o){hf=!1;var h=e.updateQueue;lr=!1;var f=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var w=E,x=w.next;w.next=null,v===null?f=x:v.next=x,v=w;var j=e.alternate;j!==null&&(j=j.updateQueue,E=j.lastBaseUpdate,E!==v&&(E===null?j.firstBaseUpdate=x:E.next=x,j.lastBaseUpdate=w))}if(f!==null){var K=h.baseState;v=0,j=x=w=null,E=f;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(Vt&z)===z:(o&z)===z){z!==0&&z===ya&&(hf=!0),j!==null&&(j=j.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var pt=e,ht=E;z=i;var Yt=a;switch(ht.tag){case 1:if(pt=ht.payload,typeof pt=="function"){K=pt.call(Yt,K,z);break t}K=pt;break t;case 3:pt.flags=pt.flags&-65537|128;case 0:if(pt=ht.payload,z=typeof pt=="function"?pt.call(Yt,K,z):pt,z==null)break t;K=A({},K,z);break t;case 2:lr=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},j===null?(x=j=B,w=K):j=j.next=B,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);j===null&&(w=K),h.baseState=w,h.firstBaseUpdate=x,h.lastBaseUpdate=j,f===null&&(h.shared.lanes=0),_r|=v,e.lanes=v,e.memoizedState=K}}function $p(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Zp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$p(a[e],i)}var va=Y(null),Vu=Y(0);function Wp(e,i){e=Hi,W(Vu,e),W(va,i),Hi=e|i.baseLanes}function ff(){W(Vu,Hi),W(va,va.current)}function df(){Hi=Vu.current,et(va),et(Vu)}var hr=0,St=null,Kt=null,me=null,Pu=!1,Ea=!1,Rs=!1,ku=0,jo=0,Ta=null,RA=0;function ue(){throw Error(s(321))}function mf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!un(e[a],i[a]))return!1;return!0}function pf(e,i,a,o,h,f){return hr=f,St=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?kg:Ug,Rs=!1,f=a(o,h),Rs=!1,Ea&&(f=tg(i,a,o,h)),Jp(e),f}function Jp(e){H.H=qu;var i=Kt!==null&&Kt.next!==null;if(hr=0,me=Kt=St=null,Pu=!1,jo=0,Ta=null,i)throw Error(s(300));e===null||Oe||(e=e.dependencies,e!==null&&Cu(e)&&(Oe=!0))}function tg(e,i,a,o){St=e;var h=0;do{if(Ea&&(Ta=null),jo=0,Ea=!1,25<=h)throw Error(s(301));if(h+=1,me=Kt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}H.H=VA,f=i(a,o)}while(Ea);return f}function IA(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?Fo(i):i,e=e.useState()[0],(Kt!==null?Kt.memoizedState:null)!==e&&(St.flags|=1024),i}function gf(){var e=ku!==0;return ku=0,e}function yf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function _f(e){if(Pu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Pu=!1}hr=0,me=Kt=St=null,Ea=!1,jo=ku=0,Ta=null}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?St.memoizedState=me=e:me=me.next=e,me}function pe(){if(Kt===null){var e=St.alternate;e=e!==null?e.memoizedState:null}else e=Kt.next;var i=me===null?St.memoizedState:me.next;if(i!==null)me=i,Kt=e;else{if(e===null)throw St.alternate===null?Error(s(467)):Error(s(310));Kt=e,e={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},me===null?St.memoizedState=me=e:me=me.next=e}return me}function vf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var i=jo;return jo+=1,Ta===null&&(Ta=[]),e=Qp(Ta,e,i),i=St,(me===null?i.memoizedState:me.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?kg:Ug),e}function Uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fo(e);if(e.$$typeof===ct)return Fe(e)}throw Error(s(438,String(e)))}function Ef(e){var i=null,a=St.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=St.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=vf(),St.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=N;return i.index++,a}function Ui(e,i){return typeof i=="function"?i(e):i}function Lu(e){var i=pe();return Tf(i,Kt,e)}function Tf(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,f=o.pending;if(f!==null){if(h!==null){var v=h.next;h.next=f.next,f.next=v}i.baseQueue=h=f,o.pending=null}if(f=e.baseState,h===null)e.memoizedState=f;else{i=h.next;var E=v=null,w=null,x=i,j=!1;do{var K=x.lane&-536870913;if(K!==x.lane?(Vt&K)===K:(hr&K)===K){var z=x.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),K===ya&&(j=!0);else if((hr&z)===z){x=x.next,z===ya&&(j=!0);continue}else K={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},w===null?(E=w=K,v=f):w=w.next=K,St.lanes|=z,_r|=z;K=x.action,Rs&&a(f,K),f=x.hasEagerState?x.eagerState:a(f,K)}else z={lane:K,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},w===null?(E=w=z,v=f):w=w.next=z,St.lanes|=K,_r|=K;x=x.next}while(x!==null&&x!==i);if(w===null?v=f:w.next=E,!un(f,e.memoizedState)&&(Oe=!0,j&&(a=_a,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=w,o.lastRenderedState=f}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Af(e){var i=pe(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,f=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do f=e(f,v.action),v=v.next;while(v!==h);un(f,i.memoizedState)||(Oe=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,o]}function eg(e,i,a){var o=St,h=pe(),f=Lt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!un((Kt||h).memoizedState,a);v&&(h.memoizedState=a,Oe=!0),h=h.queue;var E=rg.bind(null,o,h,e);if(Go(2048,8,E,[e]),h.getSnapshot!==i||v||me!==null&&me.memoizedState.tag&1){if(o.flags|=2048,Aa(9,xu(),ig.bind(null,o,h,a,i),null),Zt===null)throw Error(s(349));f||(hr&124)!==0||ng(o,i,a)}return a}function ng(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=St.updateQueue,i===null?(i=vf(),St.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function ig(e,i,a,o){i.value=a,i.getSnapshot=o,sg(i)&&ag(e)}function rg(e,i,a){return a(function(){sg(i)&&ag(e)})}function sg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!un(e,a)}catch{return!0}}function ag(e){var i=da(e,2);i!==null&&pn(i,e,2)}function Sf(e){var i=tn();if(typeof e=="function"){var a=e;if(e=a(),Rs){on(!0);try{a()}finally{on(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},i}function og(e,i,a,o){return e.baseState=a,Tf(e,Kt,typeof o=="function"?o:Ui)}function CA(e,i,a,o,h){if(Bu(e))throw Error(s(485));if(e=i.action,e!==null){var f={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};H.T!==null?a(!0):f.isTransition=!1,o(f),a=i.pending,a===null?(f.next=i.pending=f,lg(i,f)):(f.next=a.next,i.pending=a.next=f)}}function lg(e,i){var a=i.action,o=i.payload,h=e.state;if(i.isTransition){var f=H.T,v={};H.T=v;try{var E=a(h,o),w=H.S;w!==null&&w(v,E),ug(e,i,E)}catch(x){wf(e,i,x)}finally{H.T=f}}else try{f=a(h,o),ug(e,i,f)}catch(x){wf(e,i,x)}}function ug(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cg(e,i,o)},function(o){return wf(e,i,o)}):cg(e,i,a)}function cg(e,i,a){i.status="fulfilled",i.value=a,hg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,lg(e,a)))}function wf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,hg(i),i=i.next;while(i!==o)}e.action=null}function hg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function fg(e,i){return i}function dg(e,i){if(Lt){var a=Zt.formState;if(a!==null){t:{var o=St;if(Lt){if(ae){e:{for(var h=ae,f=ni;h.nodeType!==8;){if(!f){h=null;break e}if(h=zn(h.nextSibling),h===null){h=null;break e}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ae=zn(h.nextSibling),o=h.data==="F!";break t}}As(o)}o=!1}o&&(i=a[0])}}return a=tn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fg,lastRenderedState:i},a.queue=o,a=Mg.bind(null,St,o),o.dispatch=a,o=Sf(!1),f=Df.bind(null,St,!1,o.queue),o=tn(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,a=CA.bind(null,St,h,f,a),h.dispatch=a,o.memoizedState=e,[i,a,!1]}function mg(e){var i=pe();return pg(i,Kt,e)}function pg(e,i,a){if(i=Tf(e,i,fg)[0],e=Lu(Ui)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Fo(i)}catch(v){throw v===xo?Nu:v}else o=i;i=pe();var h=i.queue,f=h.dispatch;return a!==i.memoizedState&&(St.flags|=2048,Aa(9,xu(),DA.bind(null,h,a),null)),[o,f,e]}function DA(e,i){e.action=i}function gg(e){var i=pe(),a=Kt;if(a!==null)return pg(i,a,e);pe(),i=i.memoizedState,a=pe();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function Aa(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=St.updateQueue,i===null&&(i=vf(),St.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function xu(){return{destroy:void 0,resource:void 0}}function yg(){return pe().memoizedState}function zu(e,i,a,o){var h=tn();o=o===void 0?null:o,St.flags|=e,h.memoizedState=Aa(1|i,xu(),a,o)}function Go(e,i,a,o){var h=pe();o=o===void 0?null:o;var f=h.memoizedState.inst;Kt!==null&&o!==null&&mf(o,Kt.memoizedState.deps)?h.memoizedState=Aa(i,f,a,o):(St.flags|=e,h.memoizedState=Aa(1|i,f,a,o))}function _g(e,i){zu(8390656,8,e,i)}function vg(e,i){Go(2048,8,e,i)}function Eg(e,i){return Go(4,2,e,i)}function Tg(e,i){return Go(4,4,e,i)}function Ag(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Sg(e,i,a){a=a!=null?a.concat([e]):null,Go(4,4,Ag.bind(null,i,e),a)}function bf(){}function wg(e,i){var a=pe();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&mf(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function bg(e,i){var a=pe();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&mf(i,o[1]))return o[0];if(o=e(),Rs){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[o,i],o}function Rf(e,i,a){return a===void 0||(hr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Cy(),St.lanes|=e,_r|=e,a)}function Rg(e,i,a,o){return un(a,i)?a:va.current!==null?(e=Rf(e,a,o),un(e,i)||(Oe=!0),e):(hr&42)===0?(Oe=!0,e.memoizedState=a):(e=Cy(),St.lanes|=e,_r|=e,i)}function Ig(e,i,a,o,h){var f=tt.p;tt.p=f!==0&&8>f?f:8;var v=H.T,E={};H.T=E,Df(e,!1,i,a);try{var w=h(),x=H.S;if(x!==null&&x(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var j=bA(w,o);Ko(e,i,j,mn(e))}else Ko(e,i,o,mn(e))}catch(K){Ko(e,i,{then:function(){},status:"rejected",reason:K},mn())}finally{tt.p=f,H.T=v}}function OA(){}function If(e,i,a,o){if(e.tag!==5)throw Error(s(476));var h=Cg(e).queue;Ig(e,h,i,ot,a===null?OA:function(){return Dg(e),a(o)})}function Cg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:ot},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Dg(e){var i=Cg(e).next.queue;Ko(e,i,{},mn())}function Cf(){return Fe(cl)}function Og(){return pe().memoizedState}function Ng(){return pe().memoizedState}function NA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=mn();e=ur(a);var o=cr(i,e,a);o!==null&&(pn(o,i,a),Bo(o,i,a)),i={cache:rf()},e.payload=i;return}i=i.return}}function MA(e,i,a){var o=mn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Bu(e)?Vg(i,a):(a=Qh(e,i,a,o),a!==null&&(pn(a,e,o),Pg(a,i,o)))}function Mg(e,i,a){var o=mn();Ko(e,i,a,o)}function Ko(e,i,a,o){var h={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Vg(i,h);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,E=f(v,a);if(h.hasEagerState=!0,h.eagerState=E,un(E,v))return Su(e,i,h,0),Zt===null&&Au(),!1}catch{}finally{}if(a=Qh(e,i,h,o),a!==null)return pn(a,e,o),Pg(a,i,o),!0}return!1}function Df(e,i,a,o){if(o={lane:2,revertLane:od(),action:o,hasEagerState:!1,eagerState:null,next:null},Bu(e)){if(i)throw Error(s(479))}else i=Qh(e,a,o,2),i!==null&&pn(i,e,2)}function Bu(e){var i=e.alternate;return e===St||i!==null&&i===St}function Vg(e,i){Ea=Pu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Pg(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,mo(e,a)}}var qu={readContext:Fe,use:Uu,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useLayoutEffect:ue,useInsertionEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useSyncExternalStore:ue,useId:ue,useHostTransitionStatus:ue,useFormState:ue,useActionState:ue,useOptimistic:ue,useMemoCache:ue,useCacheRefresh:ue},kg={readContext:Fe,use:Uu,useCallback:function(e,i){return tn().memoizedState=[e,i===void 0?null:i],e},useContext:Fe,useEffect:_g,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,zu(4194308,4,Ag.bind(null,i,e),a)},useLayoutEffect:function(e,i){return zu(4194308,4,e,i)},useInsertionEffect:function(e,i){zu(4,2,e,i)},useMemo:function(e,i){var a=tn();i=i===void 0?null:i;var o=e();if(Rs){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=tn();if(a!==void 0){var h=a(i);if(Rs){on(!0);try{a(i)}finally{on(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=MA.bind(null,St,e),[o.memoizedState,e]},useRef:function(e){var i=tn();return e={current:e},i.memoizedState=e},useState:function(e){e=Sf(e);var i=e.queue,a=Mg.bind(null,St,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:bf,useDeferredValue:function(e,i){var a=tn();return Rf(a,e,i)},useTransition:function(){var e=Sf(!1);return e=Ig.bind(null,St,e.queue,!0,!1),tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=St,h=tn();if(Lt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Zt===null)throw Error(s(349));(Vt&124)!==0||ng(o,i,a)}h.memoizedState=a;var f={value:a,getSnapshot:i};return h.queue=f,_g(rg.bind(null,o,f,e),[e]),o.flags|=2048,Aa(9,xu(),ig.bind(null,o,f,a,i),null),a},useId:function(){var e=tn(),i=Zt.identifierPrefix;if(Lt){var a=Vi,o=Mi;a=(o&~(1<<32-je(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=ku++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=RA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Cf,useFormState:dg,useActionState:dg,useOptimistic:function(e){var i=tn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Df.bind(null,St,!0,a),a.dispatch=i,[e,i]},useMemoCache:Ef,useCacheRefresh:function(){return tn().memoizedState=NA.bind(null,St)}},Ug={readContext:Fe,use:Uu,useCallback:wg,useContext:Fe,useEffect:vg,useImperativeHandle:Sg,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:bg,useReducer:Lu,useRef:yg,useState:function(){return Lu(Ui)},useDebugValue:bf,useDeferredValue:function(e,i){var a=pe();return Rg(a,Kt.memoizedState,e,i)},useTransition:function(){var e=Lu(Ui)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:Fo(e),i]},useSyncExternalStore:eg,useId:Og,useHostTransitionStatus:Cf,useFormState:mg,useActionState:mg,useOptimistic:function(e,i){var a=pe();return og(a,Kt,e,i)},useMemoCache:Ef,useCacheRefresh:Ng},VA={readContext:Fe,use:Uu,useCallback:wg,useContext:Fe,useEffect:vg,useImperativeHandle:Sg,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:bg,useReducer:Af,useRef:yg,useState:function(){return Af(Ui)},useDebugValue:bf,useDeferredValue:function(e,i){var a=pe();return Kt===null?Rf(a,e,i):Rg(a,Kt.memoizedState,e,i)},useTransition:function(){var e=Af(Ui)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:Fo(e),i]},useSyncExternalStore:eg,useId:Og,useHostTransitionStatus:Cf,useFormState:gg,useActionState:gg,useOptimistic:function(e,i){var a=pe();return Kt!==null?og(a,Kt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ef,useCacheRefresh:Ng},Sa=null,Qo=0;function Hu(e){var i=Qo;return Qo+=1,Sa===null&&(Sa=[]),Qp(Sa,e,i)}function Yo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ju(e,i){throw i.$$typeof===C?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Lg(e){var i=e._init;return i(e._payload)}function xg(e){function i(P,O){if(e){var L=P.deletions;L===null?(P.deletions=[O],P.flags|=16):L.push(O)}}function a(P,O){if(!e)return null;for(;O!==null;)i(P,O),O=O.sibling;return null}function o(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function h(P,O){return P=Ni(P,O),P.index=0,P.sibling=null,P}function f(P,O,L){return P.index=L,e?(L=P.alternate,L!==null?(L=L.index,L<O?(P.flags|=67108866,O):L):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function E(P,O,L,G){return O===null||O.tag!==6?(O=Xh(L,P.mode,G),O.return=P,O):(O=h(O,L),O.return=P,O)}function w(P,O,L,G){var rt=L.type;return rt===$?j(P,O,L.props.children,G,L.key):O!==null&&(O.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===S&&Lg(rt)===O.type)?(O=h(O,L.props),Yo(O,L),O.return=P,O):(O=bu(L.type,L.key,L.props,null,P.mode,G),Yo(O,L),O.return=P,O)}function x(P,O,L,G){return O===null||O.tag!==4||O.stateNode.containerInfo!==L.containerInfo||O.stateNode.implementation!==L.implementation?(O=$h(L,P.mode,G),O.return=P,O):(O=h(O,L.children||[]),O.return=P,O)}function j(P,O,L,G,rt){return O===null||O.tag!==7?(O=_s(L,P.mode,G,rt),O.return=P,O):(O=h(O,L),O.return=P,O)}function K(P,O,L){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Xh(""+O,P.mode,L),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case I:return L=bu(O.type,O.key,O.props,null,P.mode,L),Yo(L,O),L.return=P,L;case F:return O=$h(O,P.mode,L),O.return=P,O;case S:var G=O._init;return O=G(O._payload),K(P,O,L)}if(re(O)||k(O))return O=_s(O,P.mode,L,null),O.return=P,O;if(typeof O.then=="function")return K(P,Hu(O),L);if(O.$$typeof===ct)return K(P,Du(P,O),L);ju(P,O)}return null}function z(P,O,L,G){var rt=O!==null?O.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return rt!==null?null:E(P,O,""+L,G);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case I:return L.key===rt?w(P,O,L,G):null;case F:return L.key===rt?x(P,O,L,G):null;case S:return rt=L._init,L=rt(L._payload),z(P,O,L,G)}if(re(L)||k(L))return rt!==null?null:j(P,O,L,G,null);if(typeof L.then=="function")return z(P,O,Hu(L),G);if(L.$$typeof===ct)return z(P,O,Du(P,L),G);ju(P,L)}return null}function B(P,O,L,G,rt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return P=P.get(L)||null,E(O,P,""+G,rt);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return P=P.get(G.key===null?L:G.key)||null,w(O,P,G,rt);case F:return P=P.get(G.key===null?L:G.key)||null,x(O,P,G,rt);case S:var bt=G._init;return G=bt(G._payload),B(P,O,L,G,rt)}if(re(G)||k(G))return P=P.get(L)||null,j(O,P,G,rt,null);if(typeof G.then=="function")return B(P,O,L,Hu(G),rt);if(G.$$typeof===ct)return B(P,O,L,Du(O,G),rt);ju(O,G)}return null}function pt(P,O,L,G){for(var rt=null,bt=null,at=O,ft=O=0,Me=null;at!==null&&ft<L.length;ft++){at.index>ft?(Me=at,at=null):Me=at.sibling;var kt=z(P,at,L[ft],G);if(kt===null){at===null&&(at=Me);break}e&&at&&kt.alternate===null&&i(P,at),O=f(kt,O,ft),bt===null?rt=kt:bt.sibling=kt,bt=kt,at=Me}if(ft===L.length)return a(P,at),Lt&&Es(P,ft),rt;if(at===null){for(;ft<L.length;ft++)at=K(P,L[ft],G),at!==null&&(O=f(at,O,ft),bt===null?rt=at:bt.sibling=at,bt=at);return Lt&&Es(P,ft),rt}for(at=o(at);ft<L.length;ft++)Me=B(at,P,ft,L[ft],G),Me!==null&&(e&&Me.alternate!==null&&at.delete(Me.key===null?ft:Me.key),O=f(Me,O,ft),bt===null?rt=Me:bt.sibling=Me,bt=Me);return e&&at.forEach(function(Ir){return i(P,Ir)}),Lt&&Es(P,ft),rt}function ht(P,O,L,G){if(L==null)throw Error(s(151));for(var rt=null,bt=null,at=O,ft=O=0,Me=null,kt=L.next();at!==null&&!kt.done;ft++,kt=L.next()){at.index>ft?(Me=at,at=null):Me=at.sibling;var Ir=z(P,at,kt.value,G);if(Ir===null){at===null&&(at=Me);break}e&&at&&Ir.alternate===null&&i(P,at),O=f(Ir,O,ft),bt===null?rt=Ir:bt.sibling=Ir,bt=Ir,at=Me}if(kt.done)return a(P,at),Lt&&Es(P,ft),rt;if(at===null){for(;!kt.done;ft++,kt=L.next())kt=K(P,kt.value,G),kt!==null&&(O=f(kt,O,ft),bt===null?rt=kt:bt.sibling=kt,bt=kt);return Lt&&Es(P,ft),rt}for(at=o(at);!kt.done;ft++,kt=L.next())kt=B(at,P,ft,kt.value,G),kt!==null&&(e&&kt.alternate!==null&&at.delete(kt.key===null?ft:kt.key),O=f(kt,O,ft),bt===null?rt=kt:bt.sibling=kt,bt=kt);return e&&at.forEach(function(PS){return i(P,PS)}),Lt&&Es(P,ft),rt}function Yt(P,O,L,G){if(typeof L=="object"&&L!==null&&L.type===$&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case I:t:{for(var rt=L.key;O!==null;){if(O.key===rt){if(rt=L.type,rt===$){if(O.tag===7){a(P,O.sibling),G=h(O,L.props.children),G.return=P,P=G;break t}}else if(O.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===S&&Lg(rt)===O.type){a(P,O.sibling),G=h(O,L.props),Yo(G,L),G.return=P,P=G;break t}a(P,O);break}else i(P,O);O=O.sibling}L.type===$?(G=_s(L.props.children,P.mode,G,L.key),G.return=P,P=G):(G=bu(L.type,L.key,L.props,null,P.mode,G),Yo(G,L),G.return=P,P=G)}return v(P);case F:t:{for(rt=L.key;O!==null;){if(O.key===rt)if(O.tag===4&&O.stateNode.containerInfo===L.containerInfo&&O.stateNode.implementation===L.implementation){a(P,O.sibling),G=h(O,L.children||[]),G.return=P,P=G;break t}else{a(P,O);break}else i(P,O);O=O.sibling}G=$h(L,P.mode,G),G.return=P,P=G}return v(P);case S:return rt=L._init,L=rt(L._payload),Yt(P,O,L,G)}if(re(L))return pt(P,O,L,G);if(k(L)){if(rt=k(L),typeof rt!="function")throw Error(s(150));return L=rt.call(L),ht(P,O,L,G)}if(typeof L.then=="function")return Yt(P,O,Hu(L),G);if(L.$$typeof===ct)return Yt(P,O,Du(P,L),G);ju(P,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,O!==null&&O.tag===6?(a(P,O.sibling),G=h(O,L),G.return=P,P=G):(a(P,O),G=Xh(L,P.mode,G),G.return=P,P=G),v(P)):a(P,O)}return function(P,O,L,G){try{Qo=0;var rt=Yt(P,O,L,G);return Sa=null,rt}catch(at){if(at===xo||at===Nu)throw at;var bt=cn(29,at,null,P.mode);return bt.lanes=G,bt.return=P,bt}finally{}}}var wa=xg(!0),zg=xg(!1),Cn=Y(null),ii=null;function fr(e){var i=e.alternate;W(Ae,Ae.current&1),W(Cn,e),ii===null&&(i===null||va.current!==null||i.memoizedState!==null)&&(ii=e)}function Bg(e){if(e.tag===22){if(W(Ae,Ae.current),W(Cn,e),ii===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ii=e)}}else dr()}function dr(){W(Ae,Ae.current),W(Cn,Cn.current)}function Li(e){et(Cn),ii===e&&(ii=null),et(Ae)}var Ae=Y(0);function Fu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||vd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Of(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:A({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Nf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=mn(),h=ur(o);h.payload=i,a!=null&&(h.callback=a),i=cr(e,h,o),i!==null&&(pn(i,e,o),Bo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=mn(),h=ur(o);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=cr(e,h,o),i!==null&&(pn(i,e,o),Bo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=mn(),o=ur(a);o.tag=2,i!=null&&(o.callback=i),i=cr(e,o,a),i!==null&&(pn(i,e,a),Bo(i,e,a))}};function qg(e,i,a,o,h,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):i.prototype&&i.prototype.isPureReactComponent?!Oo(a,o)||!Oo(h,f):!0}function Hg(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&Nf.enqueueReplaceState(i,i.state,null)}function Is(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=A({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Gu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function jg(e){Gu(e)}function Fg(e){console.error(e)}function Gg(e){Gu(e)}function Ku(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Kg(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Mf(e,i,a){return a=ur(a),a.tag=3,a.payload={element:null},a.callback=function(){Ku(e,i)},a}function Qg(e){return e=ur(e),e.tag=3,e}function Yg(e,i,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;e.payload=function(){return h(f)},e.callback=function(){Kg(i,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Kg(i,a,o),typeof h!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function PA(e,i,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&ko(i,a,h,!0),a=Cn.current,a!==null){switch(a.tag){case 13:return ii===null?nd():a.alternate===null&&oe===0&&(oe=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===of?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),rd(e,o,h)),!1;case 22:return a.flags|=65536,o===of?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),rd(e,o,h)),!1}throw Error(s(435,a.tag))}return rd(e,o,h),nd(),!1}if(Lt)return i=Cn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==Jh&&(e=Error(s(422),{cause:o}),Po(wn(e,a)))):(o!==Jh&&(i=Error(s(423),{cause:o}),Po(wn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=wn(o,a),h=Mf(e.stateNode,o,h),cf(e,h),oe!==4&&(oe=2)),!1;var f=Error(s(520),{cause:o});if(f=wn(f,a),el===null?el=[f]:el.push(f),oe!==4&&(oe=2),i===null)return!0;o=wn(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Mf(a.stateNode,o,e),cf(a,e),!1;case 1:if(i=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(vr===null||!vr.has(f))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Qg(h),Yg(h,e,a,o),cf(a,h),!1}a=a.return}while(a!==null);return!1}var Xg=Error(s(461)),Oe=!1;function Le(e,i,a,o){i.child=e===null?zg(i,null,a,o):wa(i,e.child,a,o)}function $g(e,i,a,o,h){a=a.render;var f=i.ref;if("ref"in o){var v={};for(var E in o)E!=="ref"&&(v[E]=o[E])}else v=o;return ws(i),o=pf(e,i,a,v,f,h),E=gf(),e!==null&&!Oe?(yf(e,i,h),xi(e,i,h)):(Lt&&E&&Zh(i),i.flags|=1,Le(e,i,o,h),i.child)}function Zg(e,i,a,o,h){if(e===null){var f=a.type;return typeof f=="function"&&!Yh(f)&&f.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=f,Wg(e,i,f,o,h)):(e=bu(a.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(f=e.child,!Bf(e,h)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(v,o)&&e.ref===i.ref)return xi(e,i,h)}return i.flags|=1,e=Ni(f,o),e.ref=i.ref,e.return=i,i.child=e}function Wg(e,i,a,o,h){if(e!==null){var f=e.memoizedProps;if(Oo(f,o)&&e.ref===i.ref)if(Oe=!1,i.pendingProps=o=f,Bf(e,h))(e.flags&131072)!==0&&(Oe=!0);else return i.lanes=e.lanes,xi(e,i,h)}return Vf(e,i,a,o,h)}function Jg(e,i,a){var o=i.pendingProps,h=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(h=i.child=e.child,f=0;h!==null;)f=f|h.lanes|h.childLanes,h=h.sibling;i.childLanes=f&~o}else i.childLanes=0,i.child=null;return ty(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ou(i,f!==null?f.cachePool:null),f!==null?Wp(i,f):ff(),Bg(i);else return i.lanes=i.childLanes=536870912,ty(e,i,f!==null?f.baseLanes|a:a,a)}else f!==null?(Ou(i,f.cachePool),Wp(i,f),dr(),i.memoizedState=null):(e!==null&&Ou(i,null),ff(),dr());return Le(e,i,h,a),i.child}function ty(e,i,a,o){var h=af();return h=h===null?null:{parent:Te._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Ou(i,null),ff(),Bg(i),e!==null&&ko(e,i,o,!0),null}function Qu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Vf(e,i,a,o,h){return ws(i),a=pf(e,i,a,o,void 0,h),o=gf(),e!==null&&!Oe?(yf(e,i,h),xi(e,i,h)):(Lt&&o&&Zh(i),i.flags|=1,Le(e,i,a,h),i.child)}function ey(e,i,a,o,h,f){return ws(i),i.updateQueue=null,a=tg(i,o,a,h),Jp(e),o=gf(),e!==null&&!Oe?(yf(e,i,f),xi(e,i,f)):(Lt&&o&&Zh(i),i.flags|=1,Le(e,i,a,f),i.child)}function ny(e,i,a,o,h){if(ws(i),i.stateNode===null){var f=ma,v=a.contextType;typeof v=="object"&&v!==null&&(f=Fe(v)),f=new a(o,f),i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nf,i.stateNode=f,f._reactInternals=i,f=i.stateNode,f.props=o,f.state=i.memoizedState,f.refs={},lf(i),v=a.contextType,f.context=typeof v=="object"&&v!==null?Fe(v):ma,f.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Of(i,a,v,o),f.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Nf.enqueueReplaceState(f,f.state,null),Ho(i,o,f,h),qo(),f.state=i.memoizedState),typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){f=i.stateNode;var E=i.memoizedProps,w=Is(a,E);f.props=w;var x=f.context,j=a.contextType;v=ma,typeof j=="object"&&j!==null&&(v=Fe(j));var K=a.getDerivedStateFromProps;j=typeof K=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,j||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||x!==v)&&Hg(i,f,o,v),lr=!1;var z=i.memoizedState;f.state=z,Ho(i,o,f,h),qo(),x=i.memoizedState,E||z!==x||lr?(typeof K=="function"&&(Of(i,a,K,o),x=i.memoizedState),(w=lr||qg(i,a,w,o,z,x,v))?(j||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(i.flags|=4194308)):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=x),f.props=o,f.state=x,f.context=v,o=w):(typeof f.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{f=i.stateNode,uf(e,i),v=i.memoizedProps,j=Is(a,v),f.props=j,K=i.pendingProps,z=f.context,x=a.contextType,w=ma,typeof x=="object"&&x!==null&&(w=Fe(x)),E=a.getDerivedStateFromProps,(x=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==K||z!==w)&&Hg(i,f,o,w),lr=!1,z=i.memoizedState,f.state=z,Ho(i,o,f,h),qo();var B=i.memoizedState;v!==K||z!==B||lr||e!==null&&e.dependencies!==null&&Cu(e.dependencies)?(typeof E=="function"&&(Of(i,a,E,o),B=i.memoizedState),(j=lr||qg(i,a,j,o,z,B,w)||e!==null&&e.dependencies!==null&&Cu(e.dependencies))?(x||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,B,w),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,B,w)),typeof f.componentDidUpdate=="function"&&(i.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=B),f.props=o,f.state=B,f.context=w,o=j):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),o=!1)}return f=o,Qu(e,i),o=(i.flags&128)!==0,f||o?(f=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),i.flags|=1,e!==null&&o?(i.child=wa(i,e.child,null,h),i.child=wa(i,null,a,h)):Le(e,i,a,h),i.memoizedState=f.state,e=i.child):e=xi(e,i,h),e}function iy(e,i,a,o){return Vo(),i.flags|=256,Le(e,i,a,o),i.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(e){return{baseLanes:e,cachePool:Fp()}}function Uf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Dn),e}function ry(e,i,a){var o=i.pendingProps,h=!1,f=(i.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Ae.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Lt){if(h?fr(i):dr(),Lt){var E=ae,w;if(w=E){t:{for(w=E,E=ni;w.nodeType!==8;){if(!E){E=null;break t}if(w=zn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(i.memoizedState={dehydrated:E,treeContext:vs!==null?{id:Mi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},w=cn(18,null,null,0),w.stateNode=E,w.return=i,i.child=w,Je=i,ae=null,w=!0):w=!1}w||As(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return vd(E)?i.lanes=32:i.lanes=536870912,null;Li(i)}return E=o.children,o=o.fallback,h?(dr(),h=i.mode,E=Yu({mode:"hidden",children:E},h),o=_s(o,h,a,null),E.return=i,o.return=i,E.sibling=o,i.child=E,h=i.child,h.memoizedState=kf(a),h.childLanes=Uf(e,v,a),i.memoizedState=Pf,o):(fr(i),Lf(i,E))}if(w=e.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(f)i.flags&256?(fr(i),i.flags&=-257,i=xf(e,i,a)):i.memoizedState!==null?(dr(),i.child=e.child,i.flags|=128,i=null):(dr(),h=o.fallback,E=i.mode,o=Yu({mode:"visible",children:o.children},E),h=_s(h,E,a,null),h.flags|=2,o.return=i,h.return=i,o.sibling=h,i.child=o,wa(i,e.child,null,a),o=i.child,o.memoizedState=kf(a),o.childLanes=Uf(e,v,a),i.memoizedState=Pf,i=h);else if(fr(i),vd(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var x=v.dgst;v=x,o=Error(s(419)),o.stack="",o.digest=v,Po({value:o,source:null,stack:null}),i=xf(e,i,a)}else if(Oe||ko(e,i,a,!1),v=(a&e.childLanes)!==0,Oe||v){if(v=Zt,v!==null&&(o=a&-a,o=(o&42)!==0?1:tr(o),o=(o&(v.suspendedLanes|a))!==0?0:o,o!==0&&o!==w.retryLane))throw w.retryLane=o,da(e,o),pn(v,e,o),Xg;E.data==="$?"||nd(),i=xf(e,i,a)}else E.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=w.treeContext,ae=zn(E.nextSibling),Je=i,Lt=!0,Ts=null,ni=!1,e!==null&&(Rn[In++]=Mi,Rn[In++]=Vi,Rn[In++]=vs,Mi=e.id,Vi=e.overflow,vs=i),i=Lf(i,o.children),i.flags|=4096);return i}return h?(dr(),h=o.fallback,E=i.mode,w=e.child,x=w.sibling,o=Ni(w,{mode:"hidden",children:o.children}),o.subtreeFlags=w.subtreeFlags&65011712,x!==null?h=Ni(x,h):(h=_s(h,E,a,null),h.flags|=2),h.return=i,o.return=i,o.sibling=h,i.child=o,o=h,h=i.child,E=e.child.memoizedState,E===null?E=kf(a):(w=E.cachePool,w!==null?(x=Te._currentValue,w=w.parent!==x?{parent:x,pool:x}:w):w=Fp(),E={baseLanes:E.baseLanes|a,cachePool:w}),h.memoizedState=E,h.childLanes=Uf(e,v,a),i.memoizedState=Pf,o):(fr(i),a=e.child,e=a.sibling,a=Ni(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Lf(e,i){return i=Yu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Yu(e,i){return e=cn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xf(e,i,a){return wa(i,e.child,null,a),e=Lf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function sy(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),ef(e.return,i,a)}function zf(e,i,a,o,h){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=h)}function ay(e,i,a){var o=i.pendingProps,h=o.revealOrder,f=o.tail;if(Le(e,i,o.children,a),o=Ae.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sy(e,a,i);else if(e.tag===19)sy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(W(Ae,o),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Fu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),zf(i,!1,h,a,f);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Fu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}zf(i,!0,a,null,f);break;case"together":zf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function xi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),_r|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(ko(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Ni(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Ni(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Bf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Cu(e)))}function kA(e,i,a){switch(i.tag){case 3:$t(i,i.stateNode.containerInfo),or(i,Te,e.memoizedState.cache),Vo();break;case 27:case 5:Ji(i);break;case 4:$t(i,i.stateNode.containerInfo);break;case 10:or(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(fr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?ry(e,i,a):(fr(i),e=xi(e,i,a),e!==null?e.sibling:null);fr(i);break;case 19:var h=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(ko(e,i,a,!1),o=(a&i.childLanes)!==0),h){if(o)return ay(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),W(Ae,Ae.current),o)break;return null;case 22:case 23:return i.lanes=0,Jg(e,i,a);case 24:or(i,Te,e.memoizedState.cache)}return xi(e,i,a)}function oy(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Oe=!0;else{if(!Bf(e,a)&&(i.flags&128)===0)return Oe=!1,kA(e,i,a);Oe=(e.flags&131072)!==0}else Oe=!1,Lt&&(i.flags&1048576)!==0&&Lp(i,Iu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,h=o._init;if(o=h(o._payload),i.type=o,typeof o=="function")Yh(o)?(e=Is(o,e),i.tag=1,i=ny(null,i,o,e,a)):(i.tag=0,i=Vf(null,i,o,e,a));else{if(o!=null){if(h=o.$$typeof,h===qt){i.tag=11,i=$g(null,i,o,e,a);break t}else if(h===V){i.tag=14,i=Zg(null,i,o,e,a);break t}}throw i=Pe(o)||o,Error(s(306,i,""))}}return i;case 0:return Vf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,h=Is(o,i.pendingProps),ny(e,i,o,h,a);case 3:t:{if($t(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var f=i.memoizedState;h=f.element,uf(e,i),Ho(i,o,null,a);var v=i.memoizedState;if(o=v.cache,or(i,Te,o),o!==f.cache&&nf(i,[Te],a,!0),qo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){i=iy(e,i,o,a);break t}else if(o!==h){h=wn(Error(s(424)),i),Po(h),i=iy(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ae=zn(e.firstChild),Je=i,Lt=!0,Ts=null,ni=!0,a=zg(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vo(),o===h){i=xi(e,i,a);break t}Le(e,i,o,a)}i=i.child}return i;case 26:return Qu(e,i),e===null?(a=h_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Lt||(a=i.type,e=i.pendingProps,o=lc(yt.current).createElement(a),o[_e]=i,o[fe]=e,ze(o,a,e),le(o),i.stateNode=o):i.memoizedState=h_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ji(i),e===null&&Lt&&(o=i.stateNode=l_(i.type,i.pendingProps,yt.current),Je=i,ni=!0,h=ae,Ar(i.type)?(Ed=h,ae=zn(o.firstChild)):ae=h),Le(e,i,i.pendingProps.children,a),Qu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Lt&&((h=o=ae)&&(o=uS(o,i.type,i.pendingProps,ni),o!==null?(i.stateNode=o,Je=i,ae=zn(o.firstChild),ni=!1,h=!0):h=!1),h||As(i)),Ji(i),h=i.type,f=i.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,gd(h,f)?o=null:v!==null&&gd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=pf(e,i,IA,null,null,a),cl._currentValue=h),Qu(e,i),Le(e,i,o,a),i.child;case 6:return e===null&&Lt&&((e=a=ae)&&(a=cS(a,i.pendingProps,ni),a!==null?(i.stateNode=a,Je=i,ae=null,e=!0):e=!1),e||As(i)),null;case 13:return ry(e,i,a);case 4:return $t(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=wa(i,null,o,a):Le(e,i,o,a),i.child;case 11:return $g(e,i,i.type,i.pendingProps,a);case 7:return Le(e,i,i.pendingProps,a),i.child;case 8:return Le(e,i,i.pendingProps.children,a),i.child;case 12:return Le(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,or(i,i.type,o.value),Le(e,i,o.children,a),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,ws(i),h=Fe(h),o=o(h),i.flags|=1,Le(e,i,o,a),i.child;case 14:return Zg(e,i,i.type,i.pendingProps,a);case 15:return Wg(e,i,i.type,i.pendingProps,a);case 19:return ay(e,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},e===null?(a=Yu(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Ni(e.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Jg(e,i,a);case 24:return ws(i),o=Fe(Te),e===null?(h=af(),h===null&&(h=Zt,f=rf(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=a),h=f),i.memoizedState={parent:o,cache:h},lf(i),or(i,Te,h)):((e.lanes&a)!==0&&(uf(e,i),Ho(i,null,null,a),qo()),h=e.memoizedState,f=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),or(i,Te,o)):(o=f.cache,or(i,Te,o),o!==h.cache&&nf(i,[Te],a,!0))),Le(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function zi(e){e.flags|=4}function ly(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!g_(i)){if(i=Cn.current,i!==null&&((Vt&4194048)===Vt?ii!==null:(Vt&62914560)!==Vt&&(Vt&536870912)===0||i!==ii))throw zo=of,Gp;e.flags|=8192}}function Xu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ho():536870912,e.lanes|=i,Ca|=i)}function Xo(e,i){if(!Lt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ee(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function UA(e,i,a){var o=i.pendingProps;switch(Wh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ee(i),null;case 1:return ee(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ki(Te),Fn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Mo(i)?zi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bp())),ee(i),null;case 26:return a=i.memoizedState,e===null?(zi(i),a!==null?(ee(i),ly(i,a)):(ee(i),i.flags&=-16777217)):a?a!==e.memoizedState?(zi(i),ee(i),ly(i,a)):(ee(i),i.flags&=-16777217):(e.memoizedProps!==o&&zi(i),ee(i),i.flags&=-16777217),null;case 27:_i(i),a=yt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&zi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ee(i),null}e=lt.current,Mo(i)?xp(i):(e=l_(h,o,a),i.stateNode=e,zi(i))}return ee(i),null;case 5:if(_i(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&zi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ee(i),null}if(e=lt.current,Mo(i))xp(i);else{switch(h=lc(yt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(a,{is:o.is}):h.createElement(a)}}e[_e]=i,e[fe]=o;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(ze(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&zi(i)}}return ee(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&zi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=yt.current,Mo(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,h=Je,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[_e]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||e_(e.nodeValue,a)),e||As(i)}else e=lc(e).createTextNode(o),e[_e]=i,i.stateNode=e}return ee(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Mo(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[_e]=i}else Vo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ee(i),h=!1}else h=Bp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Li(i),i):(Li(i),null)}if(Li(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Xu(i,i.updateQueue),ee(i),null;case 4:return Fn(),e===null&&hd(i.stateNode.containerInfo),ee(i),null;case 10:return ki(i.type),ee(i),null;case 19:if(et(Ae),h=i.memoizedState,h===null)return ee(i),null;if(o=(i.flags&128)!==0,f=h.rendering,f===null)if(o)Xo(h,!1);else{if(oe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(f=Fu(e),f!==null){for(i.flags|=128,Xo(h,!1),e=f.updateQueue,i.updateQueue=e,Xu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Up(a,e),a=a.sibling;return W(Ae,Ae.current&1|2),i.child}e=e.sibling}h.tail!==null&&_n()>Wu&&(i.flags|=128,o=!0,Xo(h,!1),i.lanes=4194304)}else{if(!o)if(e=Fu(f),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Xu(i,e),Xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!f.alternate&&!Lt)return ee(i),null}else 2*_n()-h.renderingStartTime>Wu&&a!==536870912&&(i.flags|=128,o=!0,Xo(h,!1),i.lanes=4194304);h.isBackwards?(f.sibling=i.child,i.child=f):(e=h.last,e!==null?e.sibling=f:i.child=f,h.last=f)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=_n(),i.sibling=null,e=Ae.current,W(Ae,o?e&1|2:e&1),i):(ee(i),null);case 22:case 23:return Li(i),df(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(ee(i),i.subtreeFlags&6&&(i.flags|=8192)):ee(i),a=i.updateQueue,a!==null&&Xu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&et(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ki(Te),ee(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function LA(e,i){switch(Wh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ki(Te),Fn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return _i(i),null;case 13:if(Li(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Vo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(Ae),null;case 4:return Fn(),null;case 10:return ki(i.type),null;case 22:case 23:return Li(i),df(),e!==null&&et(bs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ki(Te),null;case 25:return null;default:return null}}function uy(e,i){switch(Wh(i),i.tag){case 3:ki(Te),Fn();break;case 26:case 27:case 5:_i(i);break;case 4:Fn();break;case 13:Li(i);break;case 19:et(Ae);break;case 10:ki(i.type);break;case 22:case 23:Li(i),df(),e!==null&&et(bs);break;case 24:ki(Te)}}function $o(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==h)}}catch(E){Xt(i,i.return,E)}}function mr(e,i,a){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&e)===e){var v=o.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var w=a,x=E;try{x()}catch(j){Xt(h,w,j)}}}o=o.next}while(o!==f)}}catch(j){Xt(i,i.return,j)}}function cy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Zp(i,a)}catch(o){Xt(e,e.return,o)}}}function hy(e,i,a){a.props=Is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Xt(e,i,o)}}function Zo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(h){Xt(e,i,h)}}function ri(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){Xt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xt(e,i,h)}else a.current=null}function fy(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){Xt(e,e.return,h)}}function qf(e,i,a){try{var o=e.stateNode;rS(o,e.type,a,i),o[fe]=i}catch(h){Xt(e,e.return,h)}}function dy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ar(e.type)||e.tag===4}function Hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||dy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=oc));else if(o!==4&&(o===27&&Ar(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(jf(e,i,a),e=e.sibling;e!==null;)jf(e,i,a),e=e.sibling}function $u(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&Ar(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($u(e,i,a),e=e.sibling;e!==null;)$u(e,i,a),e=e.sibling}function my(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);ze(i,o,a),i[_e]=e,i[fe]=a}catch(f){Xt(e,e.return,f)}}var Bi=!1,ce=!1,Ff=!1,py=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function xA(e,i){if(e=e.containerInfo,md=mc,e=Rp(e),qh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,E=-1,w=-1,x=0,j=0,K=e,z=null;e:for(;;){for(var B;K!==a||h!==0&&K.nodeType!==3||(E=v+h),K!==f||o!==0&&K.nodeType!==3||(w=v+o),K.nodeType===3&&(v+=K.nodeValue.length),(B=K.firstChild)!==null;)z=K,K=B;for(;;){if(K===e)break e;if(z===a&&++x===h&&(E=v),z===f&&++j===o&&(w=v),(B=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=B}a=E===-1||w===-1?null:{start:E,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(pd={focusedElem:e,selectionRange:a},mc=!1,Ne=i;Ne!==null;)if(i=Ne,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ne=e;else for(;Ne!==null;){switch(i=Ne,f=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=i,h=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var pt=Is(a.type,h,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(pt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ht){Xt(a,a.return,ht)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)_d(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_d(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ne=e;break}Ne=i.return}}function gy(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pr(e,a),o&4&&$o(5,a);break;case 1:if(pr(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Xt(a,a.return,v)}else{var h=Is(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Xt(a,a.return,v)}}o&64&&cy(a),o&512&&Zo(a,a.return);break;case 3:if(pr(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Zp(e,i)}catch(v){Xt(a,a.return,v)}}break;case 27:i===null&&o&4&&my(a);case 26:case 5:pr(e,a),i===null&&o&4&&fy(a),o&512&&Zo(a,a.return);break;case 12:pr(e,a);break;case 13:pr(e,a),o&4&&vy(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=QA.bind(null,a),hS(e,a))));break;case 22:if(o=a.memoizedState!==null||Bi,!o){i=i!==null&&i.memoizedState!==null||ce,h=Bi;var f=ce;Bi=o,(ce=i)&&!f?gr(e,a,(a.subtreeFlags&8772)!==0):pr(e,a),Bi=h,ce=f}break;case 30:break;default:pr(e,a)}}function yy(e){var i=e.alternate;i!==null&&(e.alternate=null,yy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ir(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var te=null,en=!1;function qi(e,i,a){for(a=a.child;a!==null;)_y(e,i,a),a=a.sibling}function _y(e,i,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 26:ce||ri(a,i),qi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ce||ri(a,i);var o=te,h=en;Ar(a.type)&&(te=a.stateNode,en=!1),qi(e,i,a),al(a.stateNode),te=o,en=h;break;case 5:ce||ri(a,i);case 6:if(o=te,h=en,te=null,qi(e,i,a),te=o,en=h,te!==null)if(en)try{(te.nodeType===9?te.body:te.nodeName==="HTML"?te.ownerDocument.body:te).removeChild(a.stateNode)}catch(f){Xt(a,i,f)}else try{te.removeChild(a.stateNode)}catch(f){Xt(a,i,f)}break;case 18:te!==null&&(en?(e=te,a_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ml(e)):a_(te,a.stateNode));break;case 4:o=te,h=en,te=a.stateNode.containerInfo,en=!0,qi(e,i,a),te=o,en=h;break;case 0:case 11:case 14:case 15:ce||mr(2,a,i),ce||mr(4,a,i),qi(e,i,a);break;case 1:ce||(ri(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&hy(a,i,o)),qi(e,i,a);break;case 21:qi(e,i,a);break;case 22:ce=(o=ce)||a.memoizedState!==null,qi(e,i,a),ce=o;break;default:qi(e,i,a)}}function vy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(a){Xt(i,i.return,a)}}function zA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new py),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new py),i;default:throw Error(s(435,e.tag))}}function Gf(e,i){var a=zA(e);i.forEach(function(o){var h=YA.bind(null,e,o);a.has(o)||(a.add(o),o.then(h,h))})}function hn(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],f=e,v=i,E=v;t:for(;E!==null;){switch(E.tag){case 27:if(Ar(E.type)){te=E.stateNode,en=!1;break t}break;case 5:te=E.stateNode,en=!1;break t;case 3:case 4:te=E.stateNode.containerInfo,en=!0;break t}E=E.return}if(te===null)throw Error(s(160));_y(f,v,h),te=null,en=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ey(i,e),i=i.sibling}var xn=null;function Ey(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(i,e),fn(e),o&4&&(mr(3,e,e.return),$o(3,e),mr(5,e,e.return));break;case 1:hn(i,e),fn(e),o&512&&(ce||a===null||ri(a,a.return)),o&64&&Bi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=xn;if(hn(i,e),fn(e),o&512&&(ce||a===null||ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[ns]||f[_e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),ze(f,o,a),f[_e]=e,le(f),o=f;break t;case"link":var v=m_("link","href",h).get(o+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(f=v[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break e}}f=h.createElement(o),ze(f,o,a),h.head.appendChild(f);break;case"meta":if(v=m_("meta","content",h).get(o+(a.content||""))){for(E=0;E<v.length;E++)if(f=v[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break e}}f=h.createElement(o),ze(f,o,a),h.head.appendChild(f);break;default:throw Error(s(468,o))}f[_e]=e,le(f),o=f}e.stateNode=o}else p_(h,e.type,e.stateNode);else e.stateNode=d_(h,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?p_(h,e.type,e.stateNode):d_(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&qf(e,e.memoizedProps,a.memoizedProps)}break;case 27:hn(i,e),fn(e),o&512&&(ce||a===null||ri(a,a.return)),a!==null&&o&4&&qf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(hn(i,e),fn(e),o&512&&(ce||a===null||ri(a,a.return)),e.flags&32){h=e.stateNode;try{En(h,"")}catch(B){Xt(e,e.return,B)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,qf(e,h,a!==null?a.memoizedProps:h)),o&1024&&(Ff=!0);break;case 6:if(hn(i,e),fn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(B){Xt(e,e.return,B)}}break;case 3:if(hc=null,h=xn,xn=uc(i.containerInfo),hn(i,e),xn=h,fn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(i.containerInfo)}catch(B){Xt(e,e.return,B)}Ff&&(Ff=!1,Ty(e));break;case 4:o=xn,xn=uc(e.stateNode.containerInfo),hn(i,e),fn(e),xn=o;break;case 12:hn(i,e),fn(e);break;case 13:hn(i,e),fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zf=_n()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gf(e,o)));break;case 22:h=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,x=Bi,j=ce;if(Bi=x||h,ce=j||w,hn(i,e),ce=j,Bi=x,fn(e),o&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||w||Bi||ce||Cs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){w=a=i;try{if(f=w.stateNode,h)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=w.stateNode;var K=w.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Xt(w,w.return,B)}}}else if(i.tag===6){if(a===null){w=i;try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(B){Xt(w,w.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gf(e,a))));break;case 19:hn(i,e),fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Gf(e,o)));break;case 30:break;case 21:break;default:hn(i,e),fn(e)}}function fn(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(dy(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,f=Hf(e);$u(e,f,h);break;case 5:var v=a.stateNode;a.flags&32&&(En(v,""),a.flags&=-33);var E=Hf(e);$u(e,E,v);break;case 3:case 4:var w=a.stateNode.containerInfo,x=Hf(e);jf(e,x,w);break;default:throw Error(s(161))}}catch(j){Xt(e,e.return,j)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ty(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ty(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function pr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)gy(e,i.alternate,i),i=i.sibling}function Cs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:mr(4,i,i.return),Cs(i);break;case 1:ri(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&hy(i,i.return,a),Cs(i);break;case 27:al(i.stateNode);case 26:case 5:ri(i,i.return),Cs(i);break;case 22:i.memoizedState===null&&Cs(i);break;case 30:Cs(i);break;default:Cs(i)}e=e.sibling}}function gr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,f=i,v=f.flags;switch(f.tag){case 0:case 11:case 15:gr(h,f,a),$o(4,f);break;case 1:if(gr(h,f,a),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(x){Xt(o,o.return,x)}if(o=f,h=o.updateQueue,h!==null){var E=o.stateNode;try{var w=h.shared.hiddenCallbacks;if(w!==null)for(h.shared.hiddenCallbacks=null,h=0;h<w.length;h++)$p(w[h],E)}catch(x){Xt(o,o.return,x)}}a&&v&64&&cy(f),Zo(f,f.return);break;case 27:my(f);case 26:case 5:gr(h,f,a),a&&o===null&&v&4&&fy(f),Zo(f,f.return);break;case 12:gr(h,f,a);break;case 13:gr(h,f,a),a&&v&4&&vy(h,f);break;case 22:f.memoizedState===null&&gr(h,f,a),Zo(f,f.return);break;case 30:break;default:gr(h,f,a)}i=i.sibling}}function Kf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Uo(a))}function Qf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Uo(e))}function si(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ay(e,i,a,o),i=i.sibling}function Ay(e,i,a,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:si(e,i,a,o),h&2048&&$o(9,i);break;case 1:si(e,i,a,o);break;case 3:si(e,i,a,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Uo(e)));break;case 12:if(h&2048){si(e,i,a,o),e=i.stateNode;try{var f=i.memoizedProps,v=f.id,E=f.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Xt(i,i.return,w)}}else si(e,i,a,o);break;case 13:si(e,i,a,o);break;case 23:break;case 22:f=i.stateNode,v=i.alternate,i.memoizedState!==null?f._visibility&2?si(e,i,a,o):Wo(e,i):f._visibility&2?si(e,i,a,o):(f._visibility|=2,ba(e,i,a,o,(i.subtreeFlags&10256)!==0)),h&2048&&Kf(v,i);break;case 24:si(e,i,a,o),h&2048&&Qf(i.alternate,i);break;default:si(e,i,a,o)}}function ba(e,i,a,o,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var f=e,v=i,E=a,w=o,x=v.flags;switch(v.tag){case 0:case 11:case 15:ba(f,v,E,w,h),$o(8,v);break;case 23:break;case 22:var j=v.stateNode;v.memoizedState!==null?j._visibility&2?ba(f,v,E,w,h):Wo(f,v):(j._visibility|=2,ba(f,v,E,w,h)),h&&x&2048&&Kf(v.alternate,v);break;case 24:ba(f,v,E,w,h),h&&x&2048&&Qf(v.alternate,v);break;default:ba(f,v,E,w,h)}i=i.sibling}}function Wo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,h=o.flags;switch(o.tag){case 22:Wo(a,o),h&2048&&Kf(o.alternate,o);break;case 24:Wo(a,o),h&2048&&Qf(o.alternate,o);break;default:Wo(a,o)}i=i.sibling}}var Jo=8192;function Ra(e){if(e.subtreeFlags&Jo)for(e=e.child;e!==null;)Sy(e),e=e.sibling}function Sy(e){switch(e.tag){case 26:Ra(e),e.flags&Jo&&e.memoizedState!==null&&wS(xn,e.memoizedState,e.memoizedProps);break;case 5:Ra(e);break;case 3:case 4:var i=xn;xn=uc(e.stateNode.containerInfo),Ra(e),xn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Jo,Jo=16777216,Ra(e),Jo=i):Ra(e));break;default:Ra(e)}}function wy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function tl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Ne=o,Ry(o,e)}wy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)by(e),e=e.sibling}function by(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&mr(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Zu(e)):tl(e);break;default:tl(e)}}function Zu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Ne=o,Ry(o,e)}wy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:mr(8,i,i.return),Zu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Zu(i));break;default:Zu(i)}e=e.sibling}}function Ry(e,i){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:mr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ne=o;else t:for(a=e;Ne!==null;){o=Ne;var h=o.sibling,f=o.return;if(yy(o),o===a){Ne=null;break t}if(h!==null){h.return=f,Ne=h;break t}Ne=f}}}var BA={getCacheForType:function(e){var i=Fe(Te),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},qA=typeof WeakMap=="function"?WeakMap:Map,jt=0,Zt=null,Rt=null,Vt=0,Ft=0,dn=null,yr=!1,Ia=!1,Yf=!1,Hi=0,oe=0,_r=0,Ds=0,Xf=0,Dn=0,Ca=0,el=null,nn=null,$f=!1,Zf=0,Wu=1/0,Ju=null,vr=null,xe=0,Er=null,Da=null,Oa=0,Wf=0,Jf=null,Iy=null,nl=0,td=null;function mn(){if((jt&2)!==0&&Vt!==0)return Vt&-Vt;if(H.T!==null){var e=ya;return e!==0?e:od()}return er()}function Cy(){Dn===0&&(Dn=(Vt&536870912)===0||Lt?co():536870912);var e=Cn.current;return e!==null&&(e.flags|=32),Dn}function pn(e,i,a){(e===Zt&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)&&(Na(e,0),Tr(e,Vt,Dn,!1)),Ei(e,a),((jt&2)===0||e!==Zt)&&(e===Zt&&((jt&2)===0&&(Ds|=a),oe===4&&Tr(e,Vt,Dn,!1)),ai(e))}function Dy(e,i,a){if((jt&6)!==0)throw Error(s(327));var o=!a&&(i&124)===0&&(i&e.expiredLanes)===0||es(e,i),h=o?FA(e,i):id(e,i,!0),f=o;do{if(h===0){Ia&&!o&&Tr(e,i,0,!1);break}else{if(a=e.current.alternate,f&&!HA(a)){h=id(e,i,!1),f=!1;continue}if(h===2){if(f=i,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var E=e;h=el;var w=E.current.memoizedState.isDehydrated;if(w&&(Na(E,v).flags|=256),v=id(E,v,!1),v!==2){if(Yf&&!w){E.errorRecoveryDisabledLanes|=f,Ds|=f,h=4;break t}f=nn,nn=h,f!==null&&(nn===null?nn=f:nn.push.apply(nn,f))}h=v}if(f=!1,h!==2)continue}}if(h===1){Na(e,0),Tr(e,i,0,!0);break}t:{switch(o=e,f=h,f){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Tr(o,i,Dn,!yr);break t;case 2:nn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Zf+300-_n(),10<h)){if(Tr(o,i,Dn,!yr),Ys(o,0,!0)!==0)break t;o.timeoutHandle=r_(Oy.bind(null,o,a,nn,Ju,$f,i,Dn,Ds,Ca,yr,f,2,-0,0),h);break t}Oy(o,a,nn,Ju,$f,i,Dn,Ds,Ca,yr,f,0,-0,0)}}break}while(!0);ai(e)}function Oy(e,i,a,o,h,f,v,E,w,x,j,K,z,B){if(e.timeoutHandle=-1,K=i.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(ul={stylesheets:null,count:0,unsuspend:SS},Sy(i),K=bS(),K!==null)){e.cancelPendingCommit=K(Ly.bind(null,e,i,f,a,o,h,v,E,w,j,1,z,B)),Tr(e,f,v,!x);return}Ly(e,i,f,a,o,h,v,E,w)}function HA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],f=h.getSnapshot;h=h.value;try{if(!un(f(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(e,i,a,o){i&=~Xf,i&=~Ds,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var f=31-je(h),v=1<<f;o[f]=-1,h&=~v}a!==0&&Gn(e,a,i)}function tc(){return(jt&6)===0?(il(0),!1):!0}function ed(){if(Rt!==null){if(Ft===0)var e=Rt.return;else e=Rt,Pi=Ss=null,_f(e),Sa=null,Qo=0,e=Rt;for(;e!==null;)uy(e.alternate,e),e=e.return;Rt=null}}function Na(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,aS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ed(),Zt=e,Rt=a=Ni(e.current,null),Vt=i,Ft=0,dn=null,yr=!1,Ia=es(e,i),Yf=!1,Ca=Dn=Xf=Ds=_r=oe=0,nn=el=null,$f=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-je(o),f=1<<h;i|=e[h],o&=~f}return Hi=i,Au(),a}function Ny(e,i){St=null,H.H=qu,i===xo||i===Nu?(i=Yp(),Ft=3):i===Gp?(i=Yp(),Ft=4):Ft=i===Xg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,dn=i,Rt===null&&(oe=1,Ku(e,wn(i,e.current)))}function My(){var e=H.H;return H.H=qu,e===null?qu:e}function Vy(){var e=H.A;return H.A=BA,e}function nd(){oe=4,yr||(Vt&4194048)!==Vt&&Cn.current!==null||(Ia=!0),(_r&134217727)===0&&(Ds&134217727)===0||Zt===null||Tr(Zt,Vt,Dn,!1)}function id(e,i,a){var o=jt;jt|=2;var h=My(),f=Vy();(Zt!==e||Vt!==i)&&(Ju=null,Na(e,i)),i=!1;var v=oe;t:do try{if(Ft!==0&&Rt!==null){var E=Rt,w=dn;switch(Ft){case 8:ed(),v=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(i=!0);var x=Ft;if(Ft=0,dn=null,Ma(e,E,w,x),a&&Ia){v=0;break t}break;default:x=Ft,Ft=0,dn=null,Ma(e,E,w,x)}}jA(),v=oe;break}catch(j){Ny(e,j)}while(!0);return i&&e.shellSuspendCounter++,Pi=Ss=null,jt=o,H.H=h,H.A=f,Rt===null&&(Zt=null,Vt=0,Au()),v}function jA(){for(;Rt!==null;)Py(Rt)}function FA(e,i){var a=jt;jt|=2;var o=My(),h=Vy();Zt!==e||Vt!==i?(Ju=null,Wu=_n()+500,Na(e,i)):Ia=es(e,i);t:do try{if(Ft!==0&&Rt!==null){i=Rt;var f=dn;e:switch(Ft){case 1:Ft=0,dn=null,Ma(e,i,f,1);break;case 2:case 9:if(Kp(f)){Ft=0,dn=null,ky(i);break}i=function(){Ft!==2&&Ft!==9||Zt!==e||(Ft=7),ai(e)},f.then(i,i);break t;case 3:Ft=7;break t;case 4:Ft=5;break t;case 7:Kp(f)?(Ft=0,dn=null,ky(i)):(Ft=0,dn=null,Ma(e,i,f,7));break;case 5:var v=null;switch(Rt.tag){case 26:v=Rt.memoizedState;case 5:case 27:var E=Rt;if(!v||g_(v)){Ft=0,dn=null;var w=E.sibling;if(w!==null)Rt=w;else{var x=E.return;x!==null?(Rt=x,ec(x)):Rt=null}break e}}Ft=0,dn=null,Ma(e,i,f,5);break;case 6:Ft=0,dn=null,Ma(e,i,f,6);break;case 8:ed(),oe=6;break t;default:throw Error(s(462))}}GA();break}catch(j){Ny(e,j)}while(!0);return Pi=Ss=null,H.H=o,H.A=h,jt=a,Rt!==null?0:(Zt=null,Vt=0,Au(),oe)}function GA(){for(;Rt!==null&&!ao();)Py(Rt)}function Py(e){var i=oy(e.alternate,e,Hi);e.memoizedProps=e.pendingProps,i===null?ec(e):Rt=i}function ky(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=ey(a,i,i.pendingProps,i.type,void 0,Vt);break;case 11:i=ey(a,i,i.pendingProps,i.type.render,i.ref,Vt);break;case 5:_f(i);default:uy(a,i),i=Rt=Up(i,Hi),i=oy(a,i,Hi)}e.memoizedProps=e.pendingProps,i===null?ec(e):Rt=i}function Ma(e,i,a,o){Pi=Ss=null,_f(i),Sa=null,Qo=0;var h=i.return;try{if(PA(e,h,i,a,Vt)){oe=1,Ku(e,wn(a,e.current)),Rt=null;return}}catch(f){if(h!==null)throw Rt=h,f;oe=1,Ku(e,wn(a,e.current)),Rt=null;return}i.flags&32768?(Lt||o===1?e=!0:Ia||(Vt&536870912)!==0?e=!1:(yr=e=!0,(o===2||o===9||o===3||o===6)&&(o=Cn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Uy(i,e)):ec(i)}function ec(e){var i=e;do{if((i.flags&32768)!==0){Uy(i,yr);return}e=i.return;var a=UA(i.alternate,i,Hi);if(a!==null){Rt=a;return}if(i=i.sibling,i!==null){Rt=i;return}Rt=i=e}while(i!==null);oe===0&&(oe=5)}function Uy(e,i){do{var a=LA(e.alternate,e);if(a!==null){a.flags&=32767,Rt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Rt=e;return}Rt=e=a}while(e!==null);oe=6,Rt=null}function Ly(e,i,a,o,h,f,v,E,w){e.cancelPendingCommit=null;do nc();while(xe!==0);if((jt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(f=i.lanes|i.childLanes,f|=Kh,fo(e,a,f,v,E,w),e===Zt&&(Rt=Zt=null,Vt=0),Da=i,Er=e,Oa=a,Wf=f,Jf=h,Iy=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,XA(Zr,function(){return Hy(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,h=tt.p,tt.p=2,v=jt,jt|=4;try{xA(e,i,a)}finally{jt=v,tt.p=h,H.T=o}}xe=1,xy(),zy(),By()}}function xy(){if(xe===1){xe=0;var e=Er,i=Da,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var o=tt.p;tt.p=2;var h=jt;jt|=4;try{Ey(i,e);var f=pd,v=Rp(e.containerInfo),E=f.focusedElem,w=f.selectionRange;if(v!==E&&E&&E.ownerDocument&&bp(E.ownerDocument.documentElement,E)){if(w!==null&&qh(E)){var x=w.start,j=w.end;if(j===void 0&&(j=x),"selectionStart"in E)E.selectionStart=x,E.selectionEnd=Math.min(j,E.value.length);else{var K=E.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var B=z.getSelection(),pt=E.textContent.length,ht=Math.min(w.start,pt),Yt=w.end===void 0?ht:Math.min(w.end,pt);!B.extend&&ht>Yt&&(v=Yt,Yt=ht,ht=v);var P=wp(E,ht),O=wp(E,Yt);if(P&&O&&(B.rangeCount!==1||B.anchorNode!==P.node||B.anchorOffset!==P.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var L=K.createRange();L.setStart(P.node,P.offset),B.removeAllRanges(),ht>Yt?(B.addRange(L),B.extend(O.node,O.offset)):(L.setEnd(O.node,O.offset),B.addRange(L))}}}}for(K=[],B=E;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<K.length;E++){var G=K[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}mc=!!md,pd=md=null}finally{jt=h,tt.p=o,H.T=a}}e.current=i,xe=2}}function zy(){if(xe===2){xe=0;var e=Er,i=Da,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var o=tt.p;tt.p=2;var h=jt;jt|=4;try{gy(e,i.alternate,i)}finally{jt=h,tt.p=o,H.T=a}}xe=3}}function By(){if(xe===4||xe===3){xe=0,Zl();var e=Er,i=Da,a=Oa,o=Iy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?xe=5:(xe=0,Da=Er=null,qy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(vr=null),Xs(a),i=i.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(se,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=H.T,h=tt.p,tt.p=2,H.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var E=o[v];f(E.value,{componentStack:E.stack})}}finally{H.T=i,tt.p=h}}(Oa&3)!==0&&nc(),ai(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===td?nl++:(nl=0,td=e):nl=0,il(0)}}function qy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Uo(i)))}function nc(e){return xy(),zy(),By(),Hy()}function Hy(){if(xe!==5)return!1;var e=Er,i=Wf;Wf=0;var a=Xs(Oa),o=H.T,h=tt.p;try{tt.p=32>a?32:a,H.T=null,a=Jf,Jf=null;var f=Er,v=Oa;if(xe=0,Da=Er=null,Oa=0,(jt&6)!==0)throw Error(s(331));var E=jt;if(jt|=4,by(f.current),Ay(f,f.current,v,a),jt=E,il(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(se,f)}catch{}return!0}finally{tt.p=h,H.T=o,qy(e,i)}}function jy(e,i,a){i=wn(a,i),i=Mf(e.stateNode,i,2),e=cr(e,i,2),e!==null&&(Ei(e,2),ai(e))}function Xt(e,i,a){if(e.tag===3)jy(e,e,a);else for(;i!==null;){if(i.tag===3){jy(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(vr===null||!vr.has(o))){e=wn(a,e),a=Qg(2),o=cr(i,a,2),o!==null&&(Yg(a,o,i,e),Ei(o,2),ai(o));break}}i=i.return}}function rd(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new qA;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(a)||(Yf=!0,h.add(a),e=KA.bind(null,e,i,a),i.then(e,e))}function KA(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(Vt&a)===a&&(oe===4||oe===3&&(Vt&62914560)===Vt&&300>_n()-Zf?(jt&2)===0&&Na(e,0):Xf|=a,Ca===Vt&&(Ca=0)),ai(e)}function Fy(e,i){i===0&&(i=ho()),e=da(e,i),e!==null&&(Ei(e,i),ai(e))}function QA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Fy(e,a)}function YA(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),Fy(e,a)}function XA(e,i){return Xr(e,i)}var ic=null,Va=null,sd=!1,rc=!1,ad=!1,Os=0;function ai(e){e!==Va&&e.next===null&&(Va===null?ic=Va=e:Va=Va.next=e),rc=!0,sd||(sd=!0,ZA())}function il(e,i){if(!ad&&rc){ad=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var v=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-je(42|e)+1)-1,f&=h&~(v&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Yy(o,f))}else f=Vt,f=Ys(o,o===Zt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||es(o,f)||(a=!0,Yy(o,f));o=o.next}while(a);ad=!1}}function $A(){Gy()}function Gy(){rc=sd=!1;var e=0;Os!==0&&(sS()&&(e=Os),Os=0);for(var i=_n(),a=null,o=ic;o!==null;){var h=o.next,f=Ky(o,i);f===0?(o.next=null,a===null?ic=h:a.next=h,h===null&&(Va=a)):(a=o,(e!==0||(f&3)!==0)&&(rc=!0)),o=h}il(e)}function Ky(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-je(f),E=1<<v,w=h[v];w===-1?((E&a)===0||(E&o)!==0)&&(h[v]=uo(E,i)):w<=i&&(e.expiredLanes|=E),f&=~E}if(i=Zt,a=Vt,a=Ys(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&$r(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||es(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&$r(o),Xs(a)){case 2:case 8:a=Ks;break;case 32:a=Zr;break;case 268435456:a=Qs;break;default:a=Zr}return o=Qy.bind(null,e),a=Xr(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&$r(o),e.callbackPriority=2,e.callbackNode=null,2}function Qy(e,i){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=Vt;return o=Ys(e,e===Zt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Dy(e,o,i),Ky(e,_n()),e.callbackNode!=null&&e.callbackNode===a?Qy.bind(null,e):null)}function Yy(e,i){if(nc())return null;Dy(e,i,!0)}function ZA(){oS(function(){(jt&6)!==0?Xr(oo,$A):Gy()})}function od(){return Os===0&&(Os=co()),Os}function Xy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ea(""+e)}function $y(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function WA(e,i,a,o,h){if(i==="submit"&&a&&a.stateNode===h){var f=Xy((h[fe]||null).action),v=o.submitter;v&&(i=(i=v[fe]||null)?Xy(i.formAction):v.getAttribute("formAction"),i!==null&&(f=i,v=null));var E=new na("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Os!==0){var w=v?$y(h,v):new FormData(h);If(a,{pending:!0,data:w,method:h.method,action:f},null,w)}}else typeof f=="function"&&(E.preventDefault(),w=v?$y(h,v):new FormData(h),If(a,{pending:!0,data:w,method:h.method,action:f},f,w))},currentTarget:h}]})}}for(var ld=0;ld<Gh.length;ld++){var ud=Gh[ld],JA=ud.toLowerCase(),tS=ud[0].toUpperCase()+ud.slice(1);Ln(JA,"on"+tS)}Ln(Dp,"onAnimationEnd"),Ln(Op,"onAnimationIteration"),Ln(Np,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(yA,"onTransitionRun"),Ln(_A,"onTransitionStart"),Ln(vA,"onTransitionCancel"),Ln(Mp,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function Zy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var f=void 0;if(i)for(var v=o.length-1;0<=v;v--){var E=o[v],w=E.instance,x=E.currentTarget;if(E=E.listener,w!==f&&h.isPropagationStopped())break t;f=E,h.currentTarget=x;try{f(h)}catch(j){Gu(j)}h.currentTarget=null,f=w}else for(v=0;v<o.length;v++){if(E=o[v],w=E.instance,x=E.currentTarget,E=E.listener,w!==f&&h.isPropagationStopped())break t;f=E,h.currentTarget=x;try{f(h)}catch(j){Gu(j)}h.currentTarget=null,f=w}}}}function It(e,i){var a=i[po];a===void 0&&(a=i[po]=new Set);var o=e+"__bubble";a.has(o)||(Wy(i,e,2,!1),a.add(o))}function cd(e,i,a){var o=0;i&&(o|=4),Wy(a,e,o,i)}var sc="_reactListening"+Math.random().toString(36).slice(2);function hd(e){if(!e[sc]){e[sc]=!0,go.forEach(function(a){a!=="selectionchange"&&(eS.has(a)||cd(a,!1,e),cd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[sc]||(i[sc]=!0,cd("selectionchange",!1,i))}}function Wy(e,i,a,o){switch(A_(i)){case 2:var h=CS;break;case 8:h=DS;break;default:h=bd}a=h.bind(null,i,a,e),h=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function fd(e,i,a,o,h){var f=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var E=o.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=o.return;v!==null;){var w=v.tag;if((w===3||w===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=Ti(E),v===null)return;if(w=v.tag,w===5||w===6||w===26||w===27){o=f=v;continue t}E=E.parentNode}}o=o.return}ou(function(){var x=f,j=Tn(a),K=[];t:{var z=Vp.get(e);if(z!==void 0){var B=na,pt=e;switch(e){case"keypress":if(Zn(a)===0)break t;case"keydown":case"keyup":B=la;break;case"focusin":pt="focus",B=sa;break;case"focusout":pt="blur",B=sa;break;case"beforeblur":case"afterblur":B=sa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=pu;break;case Dp:case Op:case Np:B=aa;break;case Mp:B=yu;break;case"scroll":case"scrollend":B=lu;break;case"wheel":B=ua;break;case"copy":case"cut":case"paste":B=oa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Co;break;case"toggle":case"beforetoggle":B=vu}var ht=(i&4)!==0,Yt=!ht&&(e==="scroll"||e==="scrollend"),P=ht?z!==null?z+"Capture":null:z;ht=[];for(var O=x,L;O!==null;){var G=O;if(L=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||L===null||P===null||(G=us(O,P),G!=null&&ht.push(sl(O,G,L))),Yt)break;O=O.return}0<ht.length&&(z=new B(z,pt,null,a,j),K.push({event:z,listeners:ht}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==bi&&(pt=a.relatedTarget||a.fromElement)&&(Ti(pt)||pt[vn]))break t;if((B||z)&&(z=j.window===j?j:(z=j.ownerDocument)?z.defaultView||z.parentWindow:window,B?(pt=a.relatedTarget||a.toElement,B=x,pt=pt?Ti(pt):null,pt!==null&&(Yt=c(pt),ht=pt.tag,pt!==Yt||ht!==5&&ht!==27&&ht!==6)&&(pt=null)):(B=null,pt=x),B!==pt)){if(ht=Sn,G="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ht=Co,G="onPointerLeave",P="onPointerEnter",O="pointer"),Yt=B==null?z:Qn(B),L=pt==null?z:Qn(pt),z=new ht(G,O+"leave",B,a,j),z.target=Yt,z.relatedTarget=L,G=null,Ti(j)===x&&(ht=new ht(P,O+"enter",pt,a,j),ht.target=L,ht.relatedTarget=Yt,G=ht),Yt=G,B&&pt)e:{for(ht=B,P=pt,O=0,L=ht;L;L=Pa(L))O++;for(L=0,G=P;G;G=Pa(G))L++;for(;0<O-L;)ht=Pa(ht),O--;for(;0<L-O;)P=Pa(P),L--;for(;O--;){if(ht===P||P!==null&&ht===P.alternate)break e;ht=Pa(ht),P=Pa(P)}ht=null}else ht=null;B!==null&&Jy(K,z,B,ht,!1),pt!==null&&Yt!==null&&Jy(K,Yt,pt,ht,!0)}}t:{if(z=x?Qn(x):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var rt=_p;else if(Ee(z))if(vp)rt=mA;else{rt=fA;var bt=hA}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?x&&To(x.elementType)&&(rt=_p):rt=dA;if(rt&&(rt=rt(e,x))){Oi(K,rt,a,j);break t}bt&&bt(e,z,x),e==="focusout"&&x&&z.type==="number"&&x.memoizedProps.value!=null&&sr(z,"number",z.value)}switch(bt=x?Qn(x):window,e){case"focusin":(Ee(bt)||bt.contentEditable==="true")&&(ca=bt,Hh=x,No=null);break;case"focusout":No=Hh=ca=null;break;case"mousedown":jh=!0;break;case"contextmenu":case"mouseup":case"dragend":jh=!1,Ip(K,a,j);break;case"selectionchange":if(gA)break;case"keydown":case"keyup":Ip(K,a,j)}var at;if(ti)t:{switch(e){case"compositionstart":var ft="onCompositionStart";break t;case"compositionend":ft="onCompositionEnd";break t;case"compositionupdate":ft="onCompositionUpdate";break t}ft=void 0}else Nt?q(e,a)&&(ft="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(_&&a.locale!=="ko"&&(Nt||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Nt&&(at=So()):($n=j,ar="value"in $n?$n.value:$n.textContent,Nt=!0)),bt=ac(x,ft),0<bt.length&&(ft=new Ro(ft,e,null,a,j),K.push({event:ft,listeners:bt}),at?ft.data=at:(at=J(a),at!==null&&(ft.data=at)))),(at=m?ve(e,a):Mt(e,a))&&(ft=ac(x,"onBeforeInput"),0<ft.length&&(bt=new Ro("onBeforeInput","beforeinput",null,a,j),K.push({event:bt,listeners:ft}),bt.data=at)),WA(K,e,x,a,j)}Zy(K,i)})}function sl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function ac(e,i){for(var a=i+"Capture",o=[];e!==null;){var h=e,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=us(e,a),h!=null&&o.unshift(sl(e,h,f)),h=us(e,i),h!=null&&o.push(sl(e,h,f))),e.tag===3)return o;e=e.return}return[]}function Pa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jy(e,i,a,o,h){for(var f=i._reactName,v=[];a!==null&&a!==o;){var E=a,w=E.alternate,x=E.stateNode;if(E=E.tag,w!==null&&w===o)break;E!==5&&E!==26&&E!==27||x===null||(w=x,h?(x=us(a,f),x!=null&&v.unshift(sl(a,x,w))):h||(x=us(a,f),x!=null&&v.push(sl(a,x,w)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var nS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function t_(e){return(typeof e=="string"?e:""+e).replace(nS,`
`).replace(iS,"")}function e_(e,i){return i=t_(i),t_(e)===i}function oc(){}function Qt(e,i,a,o,h,f){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||En(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&En(e,""+o);break;case"className":Yn(e,"class",o);break;case"tabIndex":Yn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yn(e,a,o);break;case"style":Eo(e,o,f);break;case"data":if(i!=="object"){Yn(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ea(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(i!=="input"&&Qt(e,i,"name",h.name,h,null),Qt(e,i,"formEncType",h.formEncType,h,null),Qt(e,i,"formMethod",h.formMethod,h,null),Qt(e,i,"formTarget",h.formTarget,h,null)):(Qt(e,i,"encType",h.encType,h,null),Qt(e,i,"method",h.method,h,null),Qt(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ea(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=oc);break;case"onScroll":o!=null&&It("scroll",e);break;case"onScrollEnd":o!=null&&It("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ea(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":It("beforetoggle",e),It("toggle",e),rr(e,"popover",o);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":rr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kh.get(a)||a,rr(e,a,o))}}function dd(e,i,a,o,h,f){switch(a){case"style":Eo(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?En(e,o):(typeof o=="number"||typeof o=="bigint")&&En(e,""+o);break;case"onScroll":o!=null&&It("scroll",e);break;case"onScrollEnd":o!=null&&It("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$s.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),f=e[fe]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(i,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):rr(e,a,o)}}}function ze(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":It("error",e),It("load",e);var o=!1,h=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(e,i,f,v,a,null)}}h&&Qt(e,i,"srcSet",a.srcSet,a,null),o&&Qt(e,i,"src",a.src,a,null);return;case"input":It("invalid",e);var E=f=v=h=null,w=null,x=null;for(o in a)if(a.hasOwnProperty(o)){var j=a[o];if(j!=null)switch(o){case"name":h=j;break;case"type":v=j;break;case"checked":w=j;break;case"defaultChecked":x=j;break;case"value":f=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:Qt(e,i,o,j,a,null)}}as(e,f,E,w,x,v,h,!1),ta(e);return;case"select":It("invalid",e),o=v=f=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":f=E;break;case"defaultValue":v=E;break;case"multiple":o=E;default:Qt(e,i,h,E,a,null)}i=f,a=v,e.multiple=!!o,i!=null?wi(e,!!o,i,!1):a!=null&&wi(e,!!o,a,!0);return;case"textarea":It("invalid",e),f=h=o=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":o=E;break;case"defaultValue":h=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Qt(e,i,v,E,a,null)}os(e,o,h,f),ta(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(o=a[w],o!=null))switch(w){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Qt(e,i,w,o,a,null)}return;case"dialog":It("beforetoggle",e),It("toggle",e),It("cancel",e),It("close",e);break;case"iframe":case"object":It("load",e);break;case"video":case"audio":for(o=0;o<rl.length;o++)It(rl[o],e);break;case"image":It("error",e),It("load",e);break;case"details":It("toggle",e);break;case"embed":case"source":case"link":It("error",e),It("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in a)if(a.hasOwnProperty(x)&&(o=a[x],o!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Qt(e,i,x,o,a,null)}return;default:if(To(i)){for(j in a)a.hasOwnProperty(j)&&(o=a[j],o!==void 0&&dd(e,i,j,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Qt(e,i,E,o,a,null))}function rS(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,v=null,E=null,w=null,x=null,j=null;for(B in a){var K=a[B];if(a.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=K;default:o.hasOwnProperty(B)||Qt(e,i,B,null,o,K)}}for(var z in o){var B=o[z];if(K=a[z],o.hasOwnProperty(z)&&(B!=null||K!=null))switch(z){case"type":f=B;break;case"name":h=B;break;case"checked":x=B;break;case"defaultChecked":j=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==K&&Qt(e,i,z,B,o,K)}}ln(e,v,E,w,x,j,f,h);return;case"select":B=v=E=z=null;for(f in a)if(w=a[f],a.hasOwnProperty(f)&&w!=null)switch(f){case"value":break;case"multiple":B=w;default:o.hasOwnProperty(f)||Qt(e,i,f,null,o,w)}for(h in o)if(f=o[h],w=a[h],o.hasOwnProperty(h)&&(f!=null||w!=null))switch(h){case"value":z=f;break;case"defaultValue":E=f;break;case"multiple":v=f;default:f!==w&&Qt(e,i,h,f,o,w)}i=E,a=v,o=B,z!=null?wi(e,!!a,z,!1):!!o!=!!a&&(i!=null?wi(e,!!a,i,!0):wi(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Qt(e,i,E,null,o,h)}for(v in o)if(h=o[v],f=a[v],o.hasOwnProperty(v)&&(h!=null||f!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==f&&Qt(e,i,v,h,o,f)}Gt(e,z,B);return;case"option":for(var pt in a)if(z=a[pt],a.hasOwnProperty(pt)&&z!=null&&!o.hasOwnProperty(pt))switch(pt){case"selected":e.selected=!1;break;default:Qt(e,i,pt,null,o,z)}for(w in o)if(z=o[w],B=a[w],o.hasOwnProperty(w)&&z!==B&&(z!=null||B!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Qt(e,i,w,z,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in a)z=a[ht],a.hasOwnProperty(ht)&&z!=null&&!o.hasOwnProperty(ht)&&Qt(e,i,ht,null,o,z);for(x in o)if(z=o[x],B=a[x],o.hasOwnProperty(x)&&z!==B&&(z!=null||B!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Qt(e,i,x,z,o,B)}return;default:if(To(i)){for(var Yt in a)z=a[Yt],a.hasOwnProperty(Yt)&&z!==void 0&&!o.hasOwnProperty(Yt)&&dd(e,i,Yt,void 0,o,z);for(j in o)z=o[j],B=a[j],!o.hasOwnProperty(j)||z===B||z===void 0&&B===void 0||dd(e,i,j,z,o,B);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!o.hasOwnProperty(P)&&Qt(e,i,P,null,o,z);for(K in o)z=o[K],B=a[K],!o.hasOwnProperty(K)||z===B||z==null&&B==null||Qt(e,i,K,z,o,B)}var md=null,pd=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function n_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function gd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yd=null;function sS(){var e=window.event;return e&&e.type==="popstate"?e===yd?!1:(yd=e,!0):(yd=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,aS=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(e){return s_.resolve(null).then(e).catch(lS)}:r_;function lS(e){setTimeout(function(){throw e})}function Ar(e){return e==="head"}function a_(e,i){var a=i,o=0,h=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var v=e.ownerDocument;if(a&1&&al(v.documentElement),a&2&&al(v.body),a&4)for(a=v.head,al(a),v=a.firstChild;v;){var E=v.nextSibling,w=v.nodeName;v[ns]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){e.removeChild(f),ml(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);ml(i)}function _d(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_d(a),ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function uS(e,i,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ns])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function cS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zn(e.nextSibling),e===null))return null;return e}function vd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function hS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function zn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Ed=null;function o_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function l_(e,i,a){switch(i=lc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function al(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ir(e)}var On=new Map,u_=new Set;function uc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=tt.d;tt.d={f:fS,r:dS,D:mS,C:pS,L:gS,m:yS,X:vS,S:_S,M:ES};function fS(){var e=ji.f(),i=tc();return e||i}function dS(e){var i=Kn(e);i!==null&&i.tag===5&&i.type==="form"?Dg(i):ji.r(e)}var ka=typeof document>"u"?null:document;function c_(e,i,a){var o=ka;if(o&&typeof i=="string"&&i){var h=de(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),u_.has(h)||(u_.add(h),e={rel:e,crossOrigin:a,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),ze(i,"link",e),le(i),o.head.appendChild(i)))}}function mS(e){ji.D(e),c_("dns-prefetch",e,null)}function pS(e,i){ji.C(e,i),c_("preconnect",e,i)}function gS(e,i,a){ji.L(e,i,a);var o=ka;if(o&&e&&i){var h='link[rel="preload"][as="'+de(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+de(a.imageSizes)+'"]')):h+='[href="'+de(e)+'"]';var f=h;switch(i){case"style":f=Ua(e);break;case"script":f=La(e)}On.has(f)||(e=A({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),On.set(f,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(ol(f))||i==="script"&&o.querySelector(ll(f))||(i=o.createElement("link"),ze(i,"link",e),le(i),o.head.appendChild(i)))}}function yS(e,i){ji.m(e,i);var a=ka;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=La(e)}if(!On.has(f)&&(e=A({rel:"modulepreload",href:e},i),On.set(f,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(f)))return}o=a.createElement("link"),ze(o,"link",e),le(o),a.head.appendChild(o)}}}function _S(e,i,a){ji.S(e,i,a);var o=ka;if(o&&e){var h=$e(o).hoistableStyles,f=Ua(e);i=i||"default";var v=h.get(f);if(!v){var E={loading:0,preload:null};if(v=o.querySelector(ol(f)))E.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":i},a),(a=On.get(f))&&Td(e,a);var w=v=o.createElement("link");le(w),ze(w,"link",e),w._p=new Promise(function(x,j){w.onload=x,w.onerror=j}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,cc(v,i,o)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(f,v)}}}function vS(e,i){ji.X(e,i);var a=ka;if(a&&e){var o=$e(a).hoistableScripts,h=La(e),f=o.get(h);f||(f=a.querySelector(ll(h)),f||(e=A({src:e,async:!0},i),(i=On.get(h))&&Ad(e,i),f=a.createElement("script"),le(f),ze(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function ES(e,i){ji.M(e,i);var a=ka;if(a&&e){var o=$e(a).hoistableScripts,h=La(e),f=o.get(h);f||(f=a.querySelector(ll(h)),f||(e=A({src:e,async:!0,type:"module"},i),(i=On.get(h))&&Ad(e,i),f=a.createElement("script"),le(f),ze(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function h_(e,i,a,o){var h=(h=yt.current)?uc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ua(a.href),a=$e(h).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ua(a.href);var f=$e(h).hoistableStyles,v=f.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=h.querySelector(ol(e)))&&!f._p&&(v.instance=f,v.state.loading=5),On.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},On.set(e,a),f||TS(h,e,a,v.state))),i&&o===null)throw Error(s(528,""));return v}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=La(a),a=$e(h).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ua(e){return'href="'+de(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function f_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function TS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),ze(i,"link",a),le(i),e.head.appendChild(i))}function La(e){return'[src="'+de(e)+'"]'}function ll(e){return"script[async]"+e}function d_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+de(a.href)+'"]');if(o)return i.instance=o,le(o),o;var h=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),le(o),ze(o,"style",h),cc(o,a.precedence,e),i.instance=o;case"stylesheet":h=Ua(a.href);var f=e.querySelector(ol(h));if(f)return i.state.loading|=4,i.instance=f,le(f),f;o=f_(a),(h=On.get(h))&&Td(o,h),f=(e.ownerDocument||e).createElement("link"),le(f);var v=f;return v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),ze(f,"link",o),i.state.loading|=4,cc(f,a.precedence,e),i.instance=f;case"script":return f=La(a.src),(h=e.querySelector(ll(f)))?(i.instance=h,le(h),h):(o=a,(h=On.get(f))&&(o=A({},a),Ad(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),le(h),ze(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,cc(o,a.precedence,e));return i.instance}function cc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,v=0;v<o.length;v++){var E=o[v];if(E.dataset.precedence===i)f=E;else if(f!==h)break}f?f.parentNode.insertBefore(e,f.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Td(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ad(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var hc=null;function m_(e,i,a){if(hc===null){var o=new Map,h=hc=new Map;h.set(a,o)}else h=hc,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var f=a[h];if(!(f[ns]||f[_e]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(i)||"";v=e+v;var E=o.get(v);E?E.push(f):o.set(v,[f])}}return o}function p_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function AS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function g_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ul=null;function SS(){}function wS(e,i,a){if(ul===null)throw Error(s(475));var o=ul;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ua(a.href),f=e.querySelector(ol(h));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=fc.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=f,le(f);return}f=e.ownerDocument||e,a=f_(a),(h=On.get(h))&&Td(a,h),f=f.createElement("link"),le(f);var v=f;v._p=new Promise(function(E,w){v.onload=E,v.onerror=w}),ze(f,"link",a),i.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=fc.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function bS(){if(ul===null)throw Error(s(475));var e=ul;return e.stylesheets&&e.count===0&&Sd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Sd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function fc(){if(this.count--,this.count===0){if(this.stylesheets)Sd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function Sd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,i.forEach(RS,e),dc=null,fc.call(e))}function RS(e,i){if(!(i.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var v=h[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}h=i.instance,v=h.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,h),a.set(v,h),this.count++,o=fc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var cl={$$typeof:ct,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function IS(e,i,a,o,h,f,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.hiddenUpdates=vi(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function y_(e,i,a,o,h,f,v,E,w,x,j,K){return e=new IS(e,i,a,v,E,w,x,K),i=1,f===!0&&(i|=24),f=cn(3,null,null,i),e.current=f,f.stateNode=e,i=rf(),i.refCount++,e.pooledCache=i,i.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:i},lf(f),e}function __(e){return e?(e=ma,e):ma}function v_(e,i,a,o,h,f){h=__(h),o.context===null?o.context=h:o.pendingContext=h,o=ur(i),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=cr(e,o,i),a!==null&&(pn(a,e,i),Bo(a,e,i))}function E_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function wd(e,i){E_(e,i),(e=e.alternate)&&E_(e,i)}function T_(e){if(e.tag===13){var i=da(e,67108864);i!==null&&pn(i,e,67108864),wd(e,67108864)}}var mc=!0;function CS(e,i,a,o){var h=H.T;H.T=null;var f=tt.p;try{tt.p=2,bd(e,i,a,o)}finally{tt.p=f,H.T=h}}function DS(e,i,a,o){var h=H.T;H.T=null;var f=tt.p;try{tt.p=8,bd(e,i,a,o)}finally{tt.p=f,H.T=h}}function bd(e,i,a,o){if(mc){var h=Rd(o);if(h===null)fd(e,i,o,pc,a),S_(e,o);else if(NS(h,e,i,a,o))o.stopPropagation();else if(S_(e,o),i&4&&-1<OS.indexOf(e)){for(;h!==null;){var f=Kn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Pn(f.pendingLanes);if(v!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var w=1<<31-je(v);E.entanglements[1]|=w,v&=~w}ai(f),(jt&6)===0&&(Wu=_n()+500,il(0))}}break;case 13:E=da(f,2),E!==null&&pn(E,f,2),tc(),wd(f,2)}if(f=Rd(o),f===null&&fd(e,i,o,pc,a),f===h)break;h=f}h!==null&&o.stopPropagation()}else fd(e,i,o,null,a)}}function Rd(e){return e=Tn(e),Id(e)}var pc=null;function Id(e){if(pc=null,e=Ti(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=d(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return pc=e,null}function A_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dh()){case oo:return 2;case Ks:return 8;case Zr:case Oh:return 32;case Qs:return 268435456;default:return 32}default:return 32}}var Cd=!1,Sr=null,wr=null,br=null,hl=new Map,fl=new Map,Rr=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S_(e,i){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":hl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(i.pointerId)}}function dl(e,i,a,o,h,f){return e===null||e.nativeEvent!==f?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},i!==null&&(i=Kn(i),i!==null&&T_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function NS(e,i,a,o,h){switch(i){case"focusin":return Sr=dl(Sr,e,i,a,o,h),!0;case"dragenter":return wr=dl(wr,e,i,a,o,h),!0;case"mouseover":return br=dl(br,e,i,a,o,h),!0;case"pointerover":var f=h.pointerId;return hl.set(f,dl(hl.get(f)||null,e,i,a,o,h)),!0;case"gotpointercapture":return f=h.pointerId,fl.set(f,dl(fl.get(f)||null,e,i,a,o,h)),!0}return!1}function w_(e){var i=Ti(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=d(a),i!==null){e.blockedOn=i,tu(e.priority,function(){if(a.tag===13){var o=mn();o=tr(o);var h=da(a,o);h!==null&&pn(h,a,o),wd(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Rd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);bi=o,a.target.dispatchEvent(o),bi=null}else return i=Kn(a),i!==null&&T_(i),e.blockedOn=a,!1;i.shift()}return!0}function b_(e,i,a){gc(e)&&a.delete(i)}function MS(){Cd=!1,Sr!==null&&gc(Sr)&&(Sr=null),wr!==null&&gc(wr)&&(wr=null),br!==null&&gc(br)&&(br=null),hl.forEach(b_),fl.forEach(b_)}function yc(e,i){e.blockedOn===i&&(e.blockedOn=null,Cd||(Cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,MS)))}var _c=null;function R_(e){_c!==e&&(_c=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(Id(o||a)===null)continue;break}var f=Kn(a);f!==null&&(e.splice(i,3),i-=3,If(f,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function ml(e){function i(w){return yc(w,e)}Sr!==null&&yc(Sr,e),wr!==null&&yc(wr,e),br!==null&&yc(br,e),hl.forEach(i),fl.forEach(i);for(var a=0;a<Rr.length;a++){var o=Rr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)w_(a),a.blockedOn===null&&Rr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],f=a[o+1],v=h[fe]||null;if(typeof f=="function")v||R_(a);else if(v){var E=null;if(f&&f.hasAttribute("formAction")){if(h=f,v=f[fe]||null)E=v.formAction;else if(Id(h)!==null)continue}else E=v.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),R_(a)}}}function Dd(e){this._internalRoot=e}vc.prototype.render=Dd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=mn();v_(a,o,e,i,null,null)},vc.prototype.unmount=Dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;v_(e.current,2,null,e,null,null),tc(),i[vn]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var i=er();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Rr.length&&i!==0&&i<Rr[a].priority;a++);Rr.splice(a,0,e),a===0&&w_(e)}};var I_=t.version;if(I_!=="19.1.0")throw Error(s(527,I_,"19.1.0"));tt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var VS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{se=Ec.inject(VS),Ht=Ec}catch{}}return gl.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",h=jg,f=Fg,v=Gg,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(f=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=y_(e,1,!1,null,null,a,o,h,f,v,E,null),e[vn]=i.current,hd(e),new Dd(i)},gl.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,h="",f=jg,v=Fg,E=Gg,w=null,x=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(x=a.formState)),i=y_(e,1,!0,i,a??null,o,h,f,v,E,w,x),i.context=__(null),a=i.current,o=mn(),o=tr(o),h=ur(o),h.callback=null,cr(a,h,o),a=o,i.current.lanes=a,Ei(i,a),ai(i),e[vn]=i.current,hd(e),new vc(i)},gl.version="19.1.0",gl}var yE;function bO(){if(yE)return Qd.exports;yE=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Qd.exports=wO(),Qd.exports}var qO=bO();export{xO as a,CO as b,qO as c,PO as d,OO as e,zO as f,kO as g,DO as h,UO as i,RO as j,IO as k,NO as o,BO as r,MO as s,LO as u};
