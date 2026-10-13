import{a0 as Rf,a1 as At,a2 as vo}from"./vendor-CSdY4G_a.js";/**
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
 */const Pf=()=>{};var Su={};/**
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
 */const Fc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},xf=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const i=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=i>>2,p=(i&3)<<4|u>>4;let w=(u&15)<<2|f>>6,P=f&63;h||(P=64,a||(w=64)),r.push(e[m],e[p],e[w],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Fc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):xf(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const p=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||u==null||f==null||p==null)throw new Cf;const w=i<<2|u>>4;if(r.push(w),f!==64){const P=u<<4&240|f>>2;if(r.push(P),p!==64){const S=f<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sf=function(n){const t=Fc(n);return Bc.encodeByteArray(t,!0)},Ns=function(n){return Sf(n).replace(/\./g,"")},Nf=function(n){try{return Bc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Df(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Of=()=>Df().__FIREBASE_DEFAULTS__,kf=()=>{if(typeof process>"u"||typeof Su>"u")return;const n=Su.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Lf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Nf(n[1]);return t&&JSON.parse(t)},Io=()=>{try{return Pf()||Of()||kf()||Lf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mf=n=>{var t,e;return(e=(t=Io())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Uf=n=>{const t=Mf(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},qc=()=>{var n;return(n=Io())==null?void 0:n.config};/**
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
 */class Ff{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Bf(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ns(JSON.stringify(e)),Ns(JSON.stringify(a)),""].join(".")}/**
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
 */function qf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jf(){var t;const n=(t=Io())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $f(){return!jf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zf(){try{return typeof indexedDB=="object"}catch{return!1}}function Gf(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const Kf="FirebaseError";class Fn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Kf,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jc.prototype.create)}}class jc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Wf(i,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Fn(s,u,r)}}function Wf(n,t){try{let e=0,r="";for(;e<n.length;){const s=n.indexOf("{$",e);if(s===-1){r+=n.substring(e);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(e);break}const a=n.substring(s+2,i),u=t[a];r+=n.substring(e,s)+(u!=null?String(u):`<${a}?>`),e=i+1}return r}catch{return n}}function Ds(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],a=t[s];if(Nu(i)&&Nu(a)){if(!Ds(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Nu(n){return n!==null&&typeof n=="object"}/**
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
 */function fe(n){return n&&n._delegate?n._delegate:n}/**
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
 */function $c(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hf(n){return(await fetch(n,{credentials:"include"})).ok}class Vr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const sn="[DEFAULT]";/**
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
 */class Qf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ff;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yf(t))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=sn){return this.instances.has(t)}getOptions(t=sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xf(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=sn){return this.component?this.component.multipleInstances?t:sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xf(n){return n===sn?void 0:n}function Yf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Qf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Zf={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},td=J.INFO,ed={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},nd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ed[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zc{constructor(t){this.name=t,this._logLevel=td,this._logHandler=nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}/**
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
 */class rd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(sd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function sd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zi="@firebase/app",Du="0.16.3";/**
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
 */const ve=new zc("@firebase/app"),id="@firebase/app-compat",od="@firebase/analytics-compat",ad="@firebase/analytics",ud="@firebase/app-check-compat",cd="@firebase/app-check",ld="@firebase/auth",hd="@firebase/auth-compat",fd="@firebase/database",dd="@firebase/data-connect",md="@firebase/database-compat",pd="@firebase/functions",gd="@firebase/functions-compat",_d="@firebase/installations",yd="@firebase/installations-compat",Ed="@firebase/messaging",wd="@firebase/messaging-compat",Td="@firebase/performance",vd="@firebase/performance-compat",Id="@firebase/remote-config",Ad="@firebase/remote-config-compat",Vd="@firebase/storage",bd="@firebase/storage-compat",Rd="@firebase/firestore",Pd="@firebase/ai",xd="@firebase/firestore-compat",Cd="firebase",Sd="13.0.0";/**
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
 */const to="[DEFAULT]",Nd={[Zi]:"fire-core",[id]:"fire-core-compat",[ad]:"fire-analytics",[od]:"fire-analytics-compat",[cd]:"fire-app-check",[ud]:"fire-app-check-compat",[ld]:"fire-auth",[hd]:"fire-auth-compat",[fd]:"fire-rtdb",[dd]:"fire-data-connect",[md]:"fire-rtdb-compat",[pd]:"fire-fn",[gd]:"fire-fn-compat",[_d]:"fire-iid",[yd]:"fire-iid-compat",[Ed]:"fire-fcm",[wd]:"fire-fcm-compat",[Td]:"fire-perf",[vd]:"fire-perf-compat",[Id]:"fire-rc",[Ad]:"fire-rc-compat",[Vd]:"fire-gcs",[bd]:"fire-gcs-compat",[Rd]:"fire-fst",[xd]:"fire-fst-compat",[Pd]:"fire-vertex","fire-js":"fire-js",[Cd]:"fire-js-all"};/**
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
 */const br=new Map,Dd=new Map,eo=new Map;function Ou(n,t){try{n.container.addComponent(t)}catch(e){ve.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Os(n){const t=n.name;if(eo.has(t))return ve.debug(`There were multiple attempts to register component ${t}.`),!1;eo.set(t,n);for(const e of br.values())Ou(e,n);for(const e of Dd.values())Ou(e,n);return!0}function Od(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function kd(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ld={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pe=new jc("app","Firebase",Ld);/**
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
 */class Md{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}/**
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
 */const Ud=Sd;function Fd(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:to,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw pe.create("bad-app-name",{appName:String(s)});if(e||(e=qc()),!e)throw pe.create("no-options");const i=br.get(s);if(i)if(Ds(e,i.options)){if(Ds(r,i.config))return i;throw pe.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw pe.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(e)});const a=new Jf(s);for(const h of eo.values())a.addComponent(h);const u=new Md(e,r,a);return br.set(s,u),u}function Bd(n=to){const t=br.get(n);if(!t&&n===to&&qc())return Fd();if(!t)throw pe.create("no-app",{appName:n});return t}function Qy(){return Array.from(br.values())}function xn(n,t,e){let r=Nd[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ve.warn(a.join(" "));return}Os(new Vr(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const qd="firebase-heartbeat-database",jd=1,Rr="firebase-heartbeat-store";let Gi=null;function Gc(){return Gi||(Gi=Rf(qd,jd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Rr)}catch(e){console.warn(e)}}}}).catch(n=>{throw pe.create("idb-open",{originalErrorMessage:n.message})})),Gi}async function $d(n){try{const e=(await Gc()).transaction(Rr),r=await e.objectStore(Rr).get(Kc(n));return await e.done,r}catch(t){if(t instanceof Fn)ve.warn(t.message);else{const e=pe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ve.warn(e.message)}}}async function ku(n,t){try{const r=(await Gc()).transaction(Rr,"readwrite");await r.objectStore(Rr).put(t,Kc(n)),await r.done}catch(e){if(e instanceof Fn)ve.warn(e.message);else{const r=pe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ve.warn(r.message)}}}function Kc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zd=1024,Gd=30;class Kd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Hd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lu();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Gd){const a=Qd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ve.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lu(),{heartbeatsToSend:r,unsentEntries:s}=Wd(this._heartbeatsCache.heartbeats),i=Ns(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ve.warn(e),""}}}function Lu(){return new Date().toISOString().substring(0,10)}function Wd(n,t=zd){const e=[];let r=n.slice();for(const s of n){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Mu(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Mu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Hd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zf()?Gf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await $d(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ku(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ku(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Mu(n){return Ns(JSON.stringify({version:2,heartbeats:n})).length}function Qd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Xd(n){Os(new Vr("platform-logger",t=>new rd(t),"PRIVATE")),Os(new Vr("heartbeat",t=>new Kd(t),"PRIVATE")),xn(Zi,Du,n),xn(Zi,Du,"esm2020"),xn("fire-js","")}/**
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
 */Xd("");var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ke,Wc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,g){function y(){}y.prototype=g.prototype,v.F=g.prototype,v.prototype=new y,v.prototype.constructor=v,v.D=function(I,T,V){for(var _=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)_[Mt-2]=arguments[Mt];return g.prototype[T].apply(I,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,y){y||(y=0);const I=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)I[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;T<16;++T)I[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=v.g[0],y=v.g[1],T=v.g[2];let V=v.g[3],_;_=g+(V^y&(T^V))+I[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=V+(T^g&(y^T))+I[1]+3905402710&4294967295,V=g+(_<<12&4294967295|_>>>20),_=T+(y^V&(g^y))+I[2]+606105819&4294967295,T=V+(_<<17&4294967295|_>>>15),_=y+(g^T&(V^g))+I[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(V^y&(T^V))+I[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=V+(T^g&(y^T))+I[5]+1200080426&4294967295,V=g+(_<<12&4294967295|_>>>20),_=T+(y^V&(g^y))+I[6]+2821735955&4294967295,T=V+(_<<17&4294967295|_>>>15),_=y+(g^T&(V^g))+I[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(V^y&(T^V))+I[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=V+(T^g&(y^T))+I[9]+2336552879&4294967295,V=g+(_<<12&4294967295|_>>>20),_=T+(y^V&(g^y))+I[10]+4294925233&4294967295,T=V+(_<<17&4294967295|_>>>15),_=y+(g^T&(V^g))+I[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(V^y&(T^V))+I[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=V+(T^g&(y^T))+I[13]+4254626195&4294967295,V=g+(_<<12&4294967295|_>>>20),_=T+(y^V&(g^y))+I[14]+2792965006&4294967295,T=V+(_<<17&4294967295|_>>>15),_=y+(g^T&(V^g))+I[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^V&(y^T))+I[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=V+(y^T&(g^y))+I[6]+3225465664&4294967295,V=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(V^g))+I[11]+643717713&4294967295,T=V+(_<<14&4294967295|_>>>18),_=y+(V^g&(T^V))+I[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^V&(y^T))+I[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=V+(y^T&(g^y))+I[10]+38016083&4294967295,V=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(V^g))+I[15]+3634488961&4294967295,T=V+(_<<14&4294967295|_>>>18),_=y+(V^g&(T^V))+I[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^V&(y^T))+I[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=V+(y^T&(g^y))+I[14]+3275163606&4294967295,V=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(V^g))+I[3]+4107603335&4294967295,T=V+(_<<14&4294967295|_>>>18),_=y+(V^g&(T^V))+I[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^V&(y^T))+I[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=V+(y^T&(g^y))+I[2]+4243563512&4294967295,V=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(V^g))+I[7]+1735328473&4294967295,T=V+(_<<14&4294967295|_>>>18),_=y+(V^g&(T^V))+I[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^V)+I[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=V+(g^y^T)+I[8]+2272392833&4294967295,V=g+(_<<11&4294967295|_>>>21),_=T+(V^g^y)+I[11]+1839030562&4294967295,T=V+(_<<16&4294967295|_>>>16),_=y+(T^V^g)+I[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^V)+I[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=V+(g^y^T)+I[4]+1272893353&4294967295,V=g+(_<<11&4294967295|_>>>21),_=T+(V^g^y)+I[7]+4139469664&4294967295,T=V+(_<<16&4294967295|_>>>16),_=y+(T^V^g)+I[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^V)+I[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=V+(g^y^T)+I[0]+3936430074&4294967295,V=g+(_<<11&4294967295|_>>>21),_=T+(V^g^y)+I[3]+3572445317&4294967295,T=V+(_<<16&4294967295|_>>>16),_=y+(T^V^g)+I[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^V)+I[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=V+(g^y^T)+I[12]+3873151461&4294967295,V=g+(_<<11&4294967295|_>>>21),_=T+(V^g^y)+I[15]+530742520&4294967295,T=V+(_<<16&4294967295|_>>>16),_=y+(T^V^g)+I[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~V))+I[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=V+(y^(g|~T))+I[7]+1126891415&4294967295,V=g+(_<<10&4294967295|_>>>22),_=T+(g^(V|~y))+I[14]+2878612391&4294967295,T=V+(_<<15&4294967295|_>>>17),_=y+(V^(T|~g))+I[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~V))+I[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=V+(y^(g|~T))+I[3]+2399980690&4294967295,V=g+(_<<10&4294967295|_>>>22),_=T+(g^(V|~y))+I[10]+4293915773&4294967295,T=V+(_<<15&4294967295|_>>>17),_=y+(V^(T|~g))+I[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~V))+I[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=V+(y^(g|~T))+I[15]+4264355552&4294967295,V=g+(_<<10&4294967295|_>>>22),_=T+(g^(V|~y))+I[6]+2734768916&4294967295,T=V+(_<<15&4294967295|_>>>17),_=y+(V^(T|~g))+I[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~V))+I[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=V+(y^(g|~T))+I[11]+3174756917&4294967295,V=g+(_<<10&4294967295|_>>>22),_=T+(g^(V|~y))+I[2]+718787259&4294967295,T=V+(_<<15&4294967295|_>>>17),_=y+(V^(T|~g))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+V&4294967295}r.prototype.v=function(v,g){g===void 0&&(g=v.length);const y=g-this.blockSize,I=this.C;let T=this.h,V=0;for(;V<g;){if(T==0)for(;V<=y;)s(this,v,V),V+=this.blockSize;if(typeof v=="string"){for(;V<g;)if(I[T++]=v.charCodeAt(V++),T==this.blockSize){s(this,I),T=0;break}}else for(;V<g;)if(I[T++]=v[V++],T==this.blockSize){s(this,I),T=0;break}}this.h=T,this.o+=g},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;g=this.o*8;for(var y=v.length-8;y<v.length;++y)v[y]=g&255,g/=256;for(this.v(v),v=Array(16),g=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)v[g++]=this.g[y]>>>I&255;return v};function i(v,g){var y=u;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=g(v)}function a(v,g){this.h=g;const y=[];let I=!0;for(let T=v.length-1;T>=0;T--){const V=v[T]|0;I&&V==g||(y[T]=V,I=!1)}this.g=y}var u={};function h(v){return-128<=v&&v<128?i(v,function(g){return new a([g|0],g<0?-1:0)}):new a([v|0],v<0?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return k(f(-v));const g=[];let y=1;for(let I=0;v>=y;I++)g[I]=v/y|0,y*=4294967296;return new a(g,0)}function m(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return k(m(v.substring(1),g));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=f(Math.pow(g,8));let I=p;for(let V=0;V<v.length;V+=8){var T=Math.min(8,v.length-V);const _=parseInt(v.substring(V,V+T),g);T<8?(T=f(Math.pow(g,T)),I=I.j(T).add(f(_))):(I=I.j(y),I=I.add(f(_)))}return I}var p=h(0),w=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-k(this).m();let v=0,g=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);v+=(I>=0?I:4294967296+I)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(M(this))return"-"+k(this).toString(v);const g=f(Math.pow(v,6));var y=this;let I="";for(;;){const T=Nt(y,g).g;y=K(y,T.j(g));let V=((y.g.length>0?y.g[0]:y.h)>>>0).toString(v);if(y=T,S(y))return V+I;for(;V.length<6;)V="0"+V;I=V+I}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(let g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function M(v){return v.h==-1}n.l=function(v){return v=K(this,v),M(v)?-1:S(v)?0:1};function k(v){const g=v.g.length,y=[];for(let I=0;I<g;I++)y[I]=~v.g[I];return new a(y,~v.h).add(w)}n.abs=function(){return M(this)?k(this):this},n.add=function(v){const g=Math.max(this.g.length,v.g.length),y=[];let I=0;for(let T=0;T<=g;T++){let V=I+(this.i(T)&65535)+(v.i(T)&65535),_=(V>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);I=_>>>16,V&=65535,_&=65535,y[T]=_<<16|V}return new a(y,y[y.length-1]&-2147483648?-1:0)};function K(v,g){return v.add(k(g))}n.j=function(v){if(S(this)||S(v))return p;if(M(this))return M(v)?k(this).j(k(v)):k(k(this).j(v));if(M(v))return k(this.j(k(v)));if(this.l(P)<0&&v.l(P)<0)return f(this.m()*v.m());const g=this.g.length+v.g.length,y=[];for(var I=0;I<2*g;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let T=0;T<v.g.length;T++){const V=this.i(I)>>>16,_=this.i(I)&65535,Mt=v.i(T)>>>16,Je=v.i(T)&65535;y[2*I+2*T]+=_*Je,X(y,2*I+2*T),y[2*I+2*T+1]+=V*Je,X(y,2*I+2*T+1),y[2*I+2*T+1]+=_*Mt,X(y,2*I+2*T+1),y[2*I+2*T+2]+=V*Mt,X(y,2*I+2*T+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new a(y,0)};function X(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function rt(v,g){this.g=v,this.h=g}function Nt(v,g){if(S(g))throw Error("division by zero");if(S(v))return new rt(p,p);if(M(v))return g=Nt(k(v),g),new rt(k(g.g),k(g.h));if(M(g))return g=Nt(v,k(g)),new rt(k(g.g),g.h);if(v.g.length>30){if(M(v)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var y=w,I=g;I.l(v)<=0;)y=pt(y),I=pt(I);var T=gt(y,1),V=gt(I,1);for(I=gt(I,2),y=gt(y,2);!S(I);){var _=V.add(I);_.l(v)<=0&&(T=T.add(y),V=_),I=gt(I,1),y=gt(y,1)}return g=K(v,T.j(g)),new rt(T,g)}for(T=p;v.l(g)>=0;){for(y=Math.max(1,Math.floor(v.m()/g.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),V=f(y),_=V.j(g);M(_)||_.l(v)>0;)y-=I,V=f(y),_=V.j(g);S(V)&&(V=w),T=T.add(V),v=K(v,_)}return new rt(T,v)}n.B=function(v){return Nt(this,v).h},n.and=function(v){const g=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)&v.i(I);return new a(y,this.h&v.h)},n.or=function(v){const g=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)|v.i(I);return new a(y,this.h|v.h)},n.xor=function(v){const g=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)^v.i(I);return new a(y,this.h^v.h)};function pt(v){const g=v.g.length+1,y=[];for(let I=0;I<g;I++)y[I]=v.i(I)<<1|v.i(I-1)>>>31;return new a(y,v.h)}function gt(v,g){const y=g>>5;g%=32;const I=v.g.length-y,T=[];for(let V=0;V<I;V++)T[V]=g>0?v.i(V+y)>>>g|v.i(V+y+1)<<32-g:v.i(V+y);return new a(T,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Wc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,ke=a}).apply(typeof Uu<"u"?Uu:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hc,fr,Qc,As,no,Xc,Yc,Jc;(function(){var n,t=Object.defineProperty;function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var c=0;c<o.length;++c){var l=o[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(o,c){if(c)t:{var l=r;o=o.split(".");for(var d=0;d<o.length-1;d++){var A=o[d];if(!(A in l))break t;l=l[A]}o=o[o.length-1],d=l[o],c=c(d),c!=d&&c!=null&&t(l,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var l=[],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&l.push([d,c[d]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function u(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function h(o,c,l){return o.call.apply(o.bind,arguments)}function f(o,c,l){return f=h,f.apply(null,arguments)}function m(o,c){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),o.apply(this,d)}}function p(o,c){function l(){}l.prototype=c.prototype,o.Z=c.prototype,o.prototype=new l,o.prototype.constructor=o,o.Ob=function(d,A,b){for(var O=Array(arguments.length-2),W=2;W<arguments.length;W++)O[W-2]=arguments[W];return c.prototype[A].apply(d,O)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function P(o){const c=o.length;if(c>0){const l=Array(c);for(let d=0;d<c;d++)l[d]=o[d];return l}return[]}function S(o,c){for(let d=1;d<arguments.length;d++){const A=arguments[d];var l=typeof A;if(l=l!="object"?l:A?Array.isArray(A)?"array":l:"null",l=="array"||l=="object"&&typeof A.length=="number"){l=o.length||0;const b=A.length||0;o.length=l+b;for(let O=0;O<b;O++)o[l+O]=A[O]}else o.push(A)}}class M{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function k(o){a.setTimeout(()=>{throw o},0)}function K(){var o=v;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class X{constructor(){this.h=this.g=null}add(c,l){const d=rt.get();d.set(c,l),this.h?this.h.next=d:this.g=d,this.h=d}}var rt=new M(()=>new Nt,o=>o.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,gt=!1,v=new X,g=()=>{const o=Promise.resolve(void 0);pt=()=>{o.then(y)}};function y(){for(var o;o=K();){try{o.h.call(o.g)}catch(l){k(l)}var c=rt;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}gt=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function Mt(o,c){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(Mt,T),Mt.prototype.init=function(o,c){const l=this.type=o.type,d=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(l=="mouseover"?c=o.fromElement:l=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Mt.Z.h.call(this)},Mt.prototype.h=function(){Mt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Je="closure_listenable_"+(Math.random()*1e6|0),Hh=0;function Qh(o,c,l,d,A){this.listener=o,this.proxy=null,this.src=c,this.type=l,this.capture=!!d,this.ha=A,this.key=++Hh,this.da=this.fa=!1}function rs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ss(o,c,l){for(const d in o)c.call(l,o[d],d,o)}function Xh(o,c){for(const l in o)c.call(void 0,o[l],l,o)}function Ca(o){const c={};for(const l in o)c[l]=o[l];return c}const Sa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Na(o,c){let l,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(l in d)o[l]=d[l];for(let b=0;b<Sa.length;b++)l=Sa[b],Object.prototype.hasOwnProperty.call(d,l)&&(o[l]=d[l])}}function is(o){this.src=o,this.g={},this.h=0}is.prototype.add=function(o,c,l,d,A){const b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);const O=vi(o,c,d,A);return O>-1?(c=o[O],l||(c.fa=!1)):(c=new Qh(c,this.src,b,!!d,A),c.fa=l,o.push(c)),c};function Ti(o,c){const l=c.type;if(l in o.g){var d=o.g[l],A=Array.prototype.indexOf.call(d,c,void 0),b;(b=A>=0)&&Array.prototype.splice.call(d,A,1),b&&(rs(c),o.g[l].length==0&&(delete o.g[l],o.h--))}}function vi(o,c,l,d){for(let A=0;A<o.length;++A){const b=o[A];if(!b.da&&b.listener==c&&b.capture==!!l&&b.ha==d)return A}return-1}var Ii="closure_lm_"+(Math.random()*1e6|0),Ai={};function Da(o,c,l,d,A){if(Array.isArray(c)){for(let b=0;b<c.length;b++)Da(o,c[b],l,d,A);return null}return l=La(l),o&&o[Je]?o.J(c,l,u(d)?!!d.capture:!1,A):Yh(o,c,l,!1,d,A)}function Yh(o,c,l,d,A,b){if(!c)throw Error("Invalid event type");const O=u(A)?!!A.capture:!!A;let W=bi(o);if(W||(o[Ii]=W=new is(o)),l=W.add(c,l,d,O,b),l.proxy)return l;if(d=Jh(),l.proxy=d,d.src=o,d.listener=l,o.addEventListener)V||(A=O),A===void 0&&(A=!1),o.addEventListener(c.toString(),d,A);else if(o.attachEvent)o.attachEvent(ka(c.toString()),d);else if(o.addListener&&o.removeListener)o.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Jh(){function o(l){return c.call(o.src,o.listener,l)}const c=Zh;return o}function Oa(o,c,l,d,A){if(Array.isArray(c))for(var b=0;b<c.length;b++)Oa(o,c[b],l,d,A);else d=u(d)?!!d.capture:!!d,l=La(l),o&&o[Je]?(o=o.i,b=String(c).toString(),b in o.g&&(c=o.g[b],l=vi(c,l,d,A),l>-1&&(rs(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete o.g[b],o.h--)))):o&&(o=bi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=vi(c,l,d,A)),(l=o>-1?c[o]:null)&&Vi(l))}function Vi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Je])Ti(c.i,o);else{var l=o.type,d=o.proxy;c.removeEventListener?c.removeEventListener(l,d,o.capture):c.detachEvent?c.detachEvent(ka(l),d):c.addListener&&c.removeListener&&c.removeListener(d),(l=bi(c))?(Ti(l,o),l.h==0&&(l.src=null,c[Ii]=null)):rs(o)}}}function ka(o){return o in Ai?Ai[o]:Ai[o]="on"+o}function Zh(o,c){if(o.da)o=!0;else{c=new Mt(c,this);const l=o.listener,d=o.ha||o.src;o.fa&&Vi(o),o=l.call(d,c)}return o}function bi(o){return o=o[Ii],o instanceof is?o:null}var Ri="__closure_events_fn_"+(Math.random()*1e9>>>0);function La(o){return typeof o=="function"?o:(o[Ri]||(o[Ri]=function(c){return o.handleEvent(c)}),o[Ri])}function Rt(){I.call(this),this.i=new is(this),this.M=this,this.G=null}p(Rt,I),Rt.prototype[Je]=!0,Rt.prototype.removeEventListener=function(o,c,l,d){Oa(this,o,c,l,d)};function Dt(o,c){var l,d=o.G;if(d)for(l=[];d;d=d.G)l.push(d);if(o=o.M,d=c.type||c,typeof c=="string")c=new T(c,o);else if(c instanceof T)c.target=c.target||o;else{var A=c;c=new T(d,o),Na(c,A)}A=!0;let b,O;if(l)for(O=l.length-1;O>=0;O--)b=c.g=l[O],A=os(b,d,!0,c)&&A;if(b=c.g=o,A=os(b,d,!0,c)&&A,A=os(b,d,!1,c)&&A,l)for(O=0;O<l.length;O++)b=c.g=l[O],A=os(b,d,!1,c)&&A}Rt.prototype.N=function(){if(Rt.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const l=o.g[c];for(let d=0;d<l.length;d++)rs(l[d]);delete o.g[c],o.h--}}this.G=null},Rt.prototype.J=function(o,c,l,d){return this.i.add(String(o),c,!1,l,d)},Rt.prototype.K=function(o,c,l,d){return this.i.add(String(o),c,!0,l,d)};function os(o,c,l,d){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let b=0;b<c.length;++b){const O=c[b];if(O&&!O.da&&O.capture==l){const W=O.listener,_t=O.ha||O.src;O.fa&&Ti(o.i,O),A=W.call(_t,d)!==!1&&A}}return A&&!d.defaultPrevented}function tf(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function Ma(o){o.g=tf(()=>{o.g=null,o.i&&(o.i=!1,Ma(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class ef extends I{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ma(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hn(o){I.call(this),this.h=o,this.g={}}p(Hn,I);var Ua=[];function Fa(o){ss(o.g,function(c,l){this.g.hasOwnProperty(l)&&Vi(c)},o),o.g={}}Hn.prototype.N=function(){Hn.Z.N.call(this),Fa(this)},Hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pi=a.JSON.stringify,nf=a.JSON.parse,rf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ba(){}function qa(){}var Qn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xi(){T.call(this,"d")}p(xi,T);function Ci(){T.call(this,"c")}p(Ci,T);var Ze={},ja=null;function as(){return ja=ja||new Rt}Ze.Ia="serverreachability";function $a(o){T.call(this,Ze.Ia,o)}p($a,T);function Xn(o){const c=as();Dt(c,new $a(c))}Ze.STAT_EVENT="statevent";function za(o,c){T.call(this,Ze.STAT_EVENT,o),this.stat=c}p(za,T);function Ot(o){const c=as();Dt(c,new za(c,o))}Ze.Ja="timingevent";function Ga(o,c){T.call(this,Ze.Ja,o),this.size=c}p(Ga,T);function Yn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Jn(){this.g=!0}Jn.prototype.ua=function(){this.g=!1};function sf(o,c,l,d,A,b){o.info(function(){if(o.g)if(b){var O="",W=b.split("&");for(let et=0;et<W.length;et++){var _t=W[et].split("=");if(_t.length>1){const Et=_t[0];_t=_t[1];const se=Et.split("_");O=se.length>=2&&se[1]=="type"?O+(Et+"="+_t+"&"):O+(Et+"=redacted&")}}}else O=null;else O=b;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+c+`
`+l+`
`+O})}function of(o,c,l,d,A,b,O){o.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+c+`
`+l+`
`+b+" "+O})}function wn(o,c,l,d){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+uf(o,l)+(d?" "+d:"")})}function af(o,c){o.info(function(){return"TIMEOUT: "+c})}Jn.prototype.info=function(){};function uf(o,c){if(!o.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(o=0;o<b.length;o++)if(Array.isArray(b[o])){var l=b[o];if(!(l.length<2)){var d=l[1];if(Array.isArray(d)&&!(d.length<1)){var A=d[0];if(A!="noop"&&A!="stop"&&A!="close")for(let O=1;O<d.length;O++)d[O]=""}}}}return Pi(b)}catch{return c}}var us={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ka={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wa;function Si(){}p(Si,Ba),Si.prototype.g=function(){return new XMLHttpRequest},Wa=new Si;function Zn(o){return encodeURIComponent(String(o))}function cf(o){var c=1;o=o.split(":");const l=[];for(;c>0&&o.length;)l.push(o.shift()),c--;return o.length&&l.push(o.join(":")),l}function Re(o,c,l,d){this.j=o,this.i=c,this.l=l,this.S=d||1,this.V=new Hn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ha}function Ha(){this.i=null,this.g="",this.h=!1}var Qa={},Ni={};function Di(o,c,l){o.M=1,o.A=ls(re(c)),o.u=l,o.R=!0,Xa(o,null)}function Xa(o,c){o.F=Date.now(),cs(o),o.B=re(o.A);var l=o.B,d=o.S;Array.isArray(d)||(d=[String(d)]),cu(l.i,"t",d),o.C=0,l=o.j.L,o.h=new Ha,o.g=Ru(o.j,l?c:null,!o.u),o.P>0&&(o.O=new ef(f(o.Y,o,o.g),o.P)),c=o.V,l=o.g,d=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Ua[0]=A.toString()),A=Ua);for(let b=0;b<A.length;b++){const O=Da(l,A[b],d||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.J?Ca(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Xn(),sf(o.i,o.v,o.B,o.l,o.S,o.u)}Re.prototype.ba=function(o){o=o.target;const c=this.O;c&&Ce(o)==3?c.j():this.Y(o)},Re.prototype.Y=function(o){try{if(o==this.g)t:{const W=Ce(this.g),_t=this.g.ya(),et=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||gu(this.g)))){this.K||W!=4||_t==7||(_t==8||et<=0?Xn(3):Xn(2)),Oi(this);var c=this.g.ca();this.X=c;var l=lf(this);if(this.o=c==200,of(this.i,this.v,this.B,this.l,this.S,W,c),this.o){if(this.U&&!this.L){e:{if(this.g){var d,A=this.g;if((d=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(d)){var b=d;break e}}b=null}if(o=b)wn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ki(this,o);else{this.o=!1,this.m=3,Ot(12),tn(this),tr(this);break t}}if(this.R){o=!0;let Et;for(;!this.K&&this.C<l.length;)if(Et=hf(this,l),Et==Ni){W==4&&(this.m=4,Ot(14),o=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==Qa){this.m=4,Ot(15),wn(this.i,this.l,l,"[Invalid Chunk]"),o=!1;break}else wn(this.i,this.l,Et,null),ki(this,Et);if(Ya(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||l.length!=0||this.h.h||(this.m=1,Ot(16),o=!1),this.o=this.o&&o,!o)wn(this.i,this.l,l,"[Invalid Chunked Response]"),tn(this),tr(this);else if(l.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),$i(O),O.P=!0,Ot(11))}}else wn(this.i,this.l,l,null),ki(this,l);W==4&&tn(this),this.o&&!this.K&&(W==4?Iu(this.j,this):(this.o=!1,cs(this)))}else Vf(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,Ot(12)):(this.m=0,Ot(13)),tn(this),tr(this)}}}catch{}finally{}};function lf(o){if(!Ya(o))return o.g.la();const c=gu(o.g);if(c==="")return"";let l="";const d=c.length,A=Ce(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return tn(o),tr(o),"";o.h.i=new a.TextDecoder}for(let b=0;b<d;b++)o.h.h=!0,l+=o.h.i.decode(c[b],{stream:!(A&&b==d-1)});return c.length=0,o.h.g+=l,o.C=0,o.h.g}function Ya(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function hf(o,c){var l=o.C,d=c.indexOf(`
`,l);return d==-1?Ni:(l=Number(c.substring(l,d)),isNaN(l)?Qa:(d+=1,d+l>c.length?Ni:(c=c.slice(d,d+l),o.C=d+l,c)))}Re.prototype.cancel=function(){this.K=!0,tn(this)};function cs(o){o.T=Date.now()+o.H,Ja(o,o.H)}function Ja(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Yn(f(o.aa,o),c)}function Oi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Re.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(af(this.i,this.B),this.M!=2&&(Xn(),Ot(17)),tn(this),this.m=2,tr(this)):Ja(this,this.T-o)};function tr(o){o.j.I==0||o.K||Iu(o.j,o)}function tn(o){Oi(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Fa(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function ki(o,c){try{var l=o.j;if(l.I!=0&&(l.g==o||Li(l.h,o))){if(!o.L&&Li(l.h,o)&&l.I==3){try{var d=l.Ba.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<o.F)ps(l),ds(l);else break t;ji(l),Ot(18)}}else l.xa=A[1],0<l.xa-l.K&&A[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=Yn(f(l.Va,l),6e3));eu(l.h)<=1&&l.ta&&(l.ta=void 0)}else nn(l,11)}else if((o.L||l.g==o)&&ps(l),!_(c))for(A=l.Ba.g.parse(c),c=0;c<A.length;c++){let et=A[c];const Et=et[0];if(!(Et<=l.K))if(l.K=Et,et=et[1],l.I==2)if(et[0]=="c"){l.M=et[1],l.ba=et[2];const se=et[3];se!=null&&(l.ka=se,l.j.info("VER="+l.ka));const rn=et[4];rn!=null&&(l.za=rn,l.j.info("SVER="+l.za));const Se=et[5];Se!=null&&typeof Se=="number"&&Se>0&&(d=1.5*Se,l.O=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Ne=o.g;if(Ne){const _s=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_s){var b=d.h;b.g||_s.indexOf("spdy")==-1&&_s.indexOf("quic")==-1&&_s.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Mi(b,b.h),b.h=null))}if(d.G){const zi=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;zi&&(d.wa=zi,st(d.J,d.G,zi))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-o.F,l.j.info("Handshake RTT: "+l.T+"ms")),d=l;var O=o;if(d.na=bu(d,d.L?d.ba:null,d.W),O.L){nu(d.h,O);var W=O,_t=d.O;_t&&(W.H=_t),W.D&&(Oi(W),cs(W)),d.g=O}else Tu(d);l.i.length>0&&ms(l)}else et[0]!="stop"&&et[0]!="close"||nn(l,7);else l.I==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?nn(l,7):qi(l):et[0]!="noop"&&l.l&&l.l.qa(et),l.A=0)}}Xn(4)}catch{}}var ff=class{constructor(o,c){this.g=o,this.map=c}};function Za(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function tu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function eu(o){return o.h?1:o.g?o.g.size:0}function Li(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Mi(o,c){o.g?o.g.add(c):o.h=c}function nu(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Za.prototype.cancel=function(){if(this.i=ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ru(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const l of o.g.values())c=c.concat(l.G);return c}return P(o.i)}var su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function df(o,c){if(o){o=o.split("&");for(let l=0;l<o.length;l++){const d=o[l].indexOf("=");let A,b=null;d>=0?(A=o[l].substring(0,d),b=o[l].substring(d+1)):A=o[l],c(A,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Pe(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Pe?(this.l=o.l,er(this,o.j),this.o=o.o,this.g=o.g,nr(this,o.u),this.h=o.h,Ui(this,lu(o.i)),this.m=o.m):o&&(c=String(o).match(su))?(this.l=!1,er(this,c[1]||"",!0),this.o=rr(c[2]||""),this.g=rr(c[3]||"",!0),nr(this,c[4]),this.h=rr(c[5]||"",!0),Ui(this,c[6]||"",!0),this.m=rr(c[7]||"")):(this.l=!1,this.i=new ir(null,this.l))}Pe.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(sr(c,iu,!0),":");var l=this.g;return(l||c=="file")&&(o.push("//"),(c=this.o)&&o.push(sr(c,iu,!0),"@"),o.push(Zn(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&o.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&o.push("/"),o.push(sr(l,l.charAt(0)=="/"?gf:pf,!0))),(l=this.i.toString())&&o.push("?",l),(l=this.m)&&o.push("#",sr(l,yf)),o.join("")},Pe.prototype.resolve=function(o){const c=re(this);let l=!!o.j;l?er(c,o.j):l=!!o.o,l?c.o=o.o:l=!!o.g,l?c.g=o.g:l=o.u!=null;var d=o.h;if(l)nr(c,o.u);else if(l=!!o.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var A=c.h.lastIndexOf("/");A!=-1&&(d=c.h.slice(0,A+1)+d)}if(A=d,A==".."||A==".")d="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){d=A.lastIndexOf("/",0)==0,A=A.split("/");const b=[];for(let O=0;O<A.length;){const W=A[O++];W=="."?d&&O==A.length&&b.push(""):W==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),d&&O==A.length&&b.push("")):(b.push(W),d=!0)}d=b.join("/")}else d=A}return l?c.h=d:l=o.i.toString()!=="",l?Ui(c,lu(o.i)):l=!!o.m,l&&(c.m=o.m),c};function re(o){return new Pe(o)}function er(o,c,l){o.j=l?rr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function nr(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Ui(o,c,l){c instanceof ir?(o.i=c,Ef(o.i,o.l)):(l||(c=sr(c,_f)),o.i=new ir(c,o.l))}function st(o,c,l){o.i.set(c,l)}function ls(o){return st(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function rr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function sr(o,c,l){return typeof o=="string"?(o=encodeURI(o).replace(c,mf),l&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function mf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var iu=/[#\/\?@]/g,pf=/[#\?:]/g,gf=/[#\?]/g,_f=/[#\?@]/g,yf=/#/g;function ir(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function en(o){o.g||(o.g=new Map,o.h=0,o.i&&df(o.i,function(c,l){o.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=ir.prototype,n.add=function(o,c){en(this),this.i=null,o=Tn(this,o);let l=this.g.get(o);return l||this.g.set(o,l=[]),l.push(c),this.h+=1,this};function ou(o,c){en(o),c=Tn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function au(o,c){return en(o),c=Tn(o,c),o.g.has(c)}n.forEach=function(o,c){en(this),this.g.forEach(function(l,d){l.forEach(function(A){o.call(c,A,d,this)},this)},this)};function uu(o,c){en(o);let l=[];if(typeof c=="string")au(o,c)&&(l=l.concat(o.g.get(Tn(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)l=l.concat(o[c]);return l}n.set=function(o,c){return en(this),this.i=null,o=Tn(this,o),au(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=uu(this,o),o.length>0?String(o[0]):c):c};function cu(o,c,l){ou(o,c),l.length>0&&(o.i=null,o.g.set(Tn(o,c),P(l)),o.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let d=0;d<c.length;d++){var l=c[d];const A=Zn(l);l=uu(this,l);for(let b=0;b<l.length;b++){let O=A;l[b]!==""&&(O+="="+Zn(l[b])),o.push(O)}}return this.i=o.join("&")};function lu(o){const c=new ir;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Tn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ef(o,c){c&&!o.j&&(en(o),o.i=null,o.g.forEach(function(l,d){const A=d.toLowerCase();d!=A&&(ou(this,d),cu(this,A,l))},o)),o.j=c}function wf(o,c){const l=new Jn;if(a.Image){const d=new Image;d.onload=m(xe,l,"TestLoadImage: loaded",!0,c,d),d.onerror=m(xe,l,"TestLoadImage: error",!1,c,d),d.onabort=m(xe,l,"TestLoadImage: abort",!1,c,d),d.ontimeout=m(xe,l,"TestLoadImage: timeout",!1,c,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=o}else c(!1)}function Tf(o,c){const l=new Jn,d=new AbortController,A=setTimeout(()=>{d.abort(),xe(l,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:d.signal}).then(b=>{clearTimeout(A),b.ok?xe(l,"TestPingServer: ok",!0,c):xe(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),xe(l,"TestPingServer: error",!1,c)})}function xe(o,c,l,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(l)}catch{}}function vf(){this.g=new rf}function Fi(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Fi,Ba),Fi.prototype.g=function(){return new hs(this.i,this.h)};function hs(o,c){Rt.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(hs,Rt),n=hs.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,ar(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,or(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ar(this)),this.g&&(this.readyState=3,ar(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function hu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?or(this):ar(this),this.readyState==3&&hu(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,or(this))},n.Na=function(o){this.g&&(this.response=o,or(this))},n.ga=function(){this.g&&or(this)};function or(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ar(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,o.push(l[0]+": "+l[1]),l=c.next();return o.join(`\r
`)};function ar(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function fu(o){let c="";return ss(o,function(l,d){c+=d,c+=":",c+=l,c+=`\r
`}),c}function Bi(o,c,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=fu(l),typeof o=="string"?l!=null&&Zn(l):st(o,c,l))}function ut(o){Rt.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ut,Rt);var If=/^https?$/i,Af=["POST","PUT"];n=ut.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wa.g(),this.g.onreadystatechange=w(f(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(b){du(this,b);return}if(o=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)l.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const b of d.keys())l.set(b,d.get(b));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(b=>b.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Af,c,void 0)>=0)||d||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,O]of l)this.g.setRequestHeader(b,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(b){du(this,b)}};function du(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,mu(o),fs(o)}function mu(o){o.A||(o.A=!0,Dt(o,"complete"),Dt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Dt(this,"complete"),Dt(this,"abort"),fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fs(this,!0)),ut.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?pu(this):this.Xa())},n.Xa=function(){pu(this)};function pu(o){if(o.h&&typeof i<"u"){if(o.v&&Ce(o)==4)setTimeout(o.Ca.bind(o),0);else if(Dt(o,"readystatechange"),Ce(o)==4){o.h=!1;try{const b=o.ca();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var d;if(d=b===0){let O=String(o.D).match(su)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),d=!If.test(O?O.toLowerCase():"")}l=d}if(l)Dt(o,"complete"),Dt(o,"success");else{o.o=6;try{var A=Ce(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",mu(o)}}finally{fs(o)}}}}function fs(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const l=o.g;o.g=null,c||Dt(o,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ce(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ce(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),nf(c)}};function gu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Vf(o){const c={};o=(o.g&&Ce(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<o.length;d++){if(_(o[d]))continue;var l=cf(o[d]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const b=c[A]||[];c[A]=b,b.push(l)}Xh(c,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(o,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[o]||c}function _u(o){this.za=0,this.i=[],this.j=new Jn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ur("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ur("baseRetryDelayMs",5e3,o),this.Za=ur("retryDelaySeedMs",1e4,o),this.Ta=ur("forwardChannelMaxRetries",2,o),this.va=ur("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Za(o&&o.concurrentRequestLimit),this.Ba=new vf,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_u.prototype,n.ka=8,n.I=1,n.connect=function(o,c,l,d){Ot(0),this.W=o,this.H=c||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.J=bu(this,null,this.W),ms(this)};function qi(o){if(yu(o),o.I==3){var c=o.V++,l=re(o.J);if(st(l,"SID",o.M),st(l,"RID",c),st(l,"TYPE","terminate"),cr(o,l),c=new Re(o,o.j,c),c.M=2,c.A=ls(re(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=Ru(c.j,null),c.g.ea(c.A)),c.F=Date.now(),cs(c)}Vu(o)}function ds(o){o.g&&($i(o),o.g.cancel(),o.g=null)}function yu(o){ds(o),o.v&&(a.clearTimeout(o.v),o.v=null),ps(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ms(o){if(!tu(o.h)&&!o.m){o.m=!0;var c=o.Ea;pt||g(),gt||(pt(),gt=!0),v.add(c,o),o.D=0}}function bf(o,c){return eu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Yn(f(o.Ea,o,c),Au(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Re(this,this.j,o);let b=this.o;if(this.U&&(b?(b=Ca(b),Na(b,this.U)):b=this.U),this.u!==null||this.R||(A.J=b,b=null),this.S)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(c+=d,c>4096){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=wu(this,A,c),l=re(this.J),st(l,"RID",o),st(l,"CVER",22),this.G&&st(l,"X-HTTP-Session-Id",this.G),cr(this,l),b&&(this.R?c="headers="+Zn(fu(b))+"&"+c:this.u&&Bi(l,this.u,b)),Mi(this.h,A),this.Ra&&st(l,"TYPE","init"),this.S?(st(l,"$req",c),st(l,"SID","null"),A.U=!0,Di(A,l,null)):Di(A,l,c),this.I=2}}else this.I==3&&(o?Eu(this,o):this.i.length==0||tu(this.h)||Eu(this))};function Eu(o,c){var l;c?l=c.l:l=o.V++;const d=re(o.J);st(d,"SID",o.M),st(d,"RID",l),st(d,"AID",o.K),cr(o,d),o.u&&o.o&&Bi(d,o.u,o.o),l=new Re(o,o.j,l,o.D+1),o.u===null&&(l.J=o.o),c&&(o.i=c.G.concat(o.i)),c=wu(o,l,1e3),l.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Mi(o.h,l),Di(l,d,c)}function cr(o,c){o.H&&ss(o.H,function(l,d){st(c,d,l)}),o.l&&ss({},function(l,d){st(c,d,l)})}function wu(o,c,l){l=Math.min(o.i.length,l);const d=o.l?f(o.l.Ka,o.l,o):null;t:{var A=o.i;let W=-1;for(;;){const _t=["count="+l];W==-1?l>0?(W=A[0].g,_t.push("ofs="+W)):W=0:_t.push("ofs="+W);let et=!0;for(let Et=0;Et<l;Et++){var b=A[Et].g;const se=A[Et].map;if(b-=W,b<0)W=Math.max(0,A[Et].g-100),et=!1;else try{b="req"+b+"_"||"";try{var O=se instanceof Map?se:Object.entries(se);for(const[rn,Se]of O){let Ne=Se;u(Se)&&(Ne=Pi(Se)),_t.push(b+rn+"="+encodeURIComponent(Ne))}}catch(rn){throw _t.push(b+"type="+encodeURIComponent("_badmap")),rn}}catch{d&&d(se)}}if(et){O=_t.join("&");break t}}O=void 0}return o=o.i.splice(0,l),c.G=o,O}function Tu(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;pt||g(),gt||(pt(),gt=!0),v.add(c,o),o.A=0}}function ji(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Yn(f(o.Da,o),Au(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,vu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Yn(f(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ot(10),ds(this),vu(this))};function $i(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function vu(o){o.g=new Re(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=re(o.na);st(c,"RID","rpc"),st(c,"SID",o.M),st(c,"AID",o.K),st(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&st(c,"TO",o.ia),st(c,"TYPE","xmlhttp"),cr(o,c),o.u&&o.o&&Bi(c,o.u,o.o),o.O&&(o.g.H=o.O);var l=o.g;o=o.ba,l.M=1,l.A=ls(re(c)),l.u=null,l.R=!0,Xa(l,o)}n.Va=function(){this.C!=null&&(this.C=null,ds(this),ji(this),Ot(19))};function ps(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Iu(o,c){var l=null;if(o.g==c){ps(o),$i(o),o.g=null;var d=2}else if(Li(o.h,c))l=c.G,nu(o.h,c),d=1;else return;if(o.I!=0){if(c.o)if(d==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var A=o.D;d=as(),Dt(d,new Ga(d,l)),ms(o)}else Tu(o);else if(A=c.m,A==3||A==0&&c.X>0||!(d==1&&bf(o,c)||d==2&&ji(o)))switch(l&&l.length>0&&(c=o.h,c.i=c.i.concat(l)),A){case 1:nn(o,5);break;case 4:nn(o,10);break;case 3:nn(o,6);break;default:nn(o,2)}}}function Au(o,c){let l=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(l*=2),l*c}function nn(o,c){if(o.j.info("Error code "+c),c==2){var l=f(o.bb,o),d=o.Ua;const A=!d;d=new Pe(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||er(d,"https"),ls(d),A?wf(d.toString(),l):Tf(d.toString(),l)}else Ot(2);o.I=0,o.l&&o.l.pa(c),Vu(o),yu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Vu(o){if(o.I=0,o.ja=[],o.l){const c=ru(o.h);(c.length!=0||o.i.length!=0)&&(S(o.ja,c),S(o.ja,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.oa()}}function bu(o,c,l){var d=l instanceof Pe?re(l):new Pe(l);if(d.g!="")c&&(d.g=c+"."+d.g),nr(d,d.u);else{var A=a.location;d=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const b=new Pe(null);d&&er(b,d),c&&(b.g=c),A&&nr(b,A),l&&(b.h=l),d=b}return l=o.G,c=o.wa,l&&c&&st(d,l,c),st(d,"VER",o.ka),cr(o,d),d}function Ru(o,c,l){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new ut(new Fi({ab:l})):new ut(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pu(){}n=Pu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function gs(){}gs.prototype.g=function(o,c){return new zt(o,c)};function zt(o,c){Rt.call(this),this.g=new _u(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!_(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new vn(this)}p(zt,Rt),zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){qi(this.g)},zt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var l={};l.__data__=o,o=l}else this.v&&(l={},l.__data__=Pi(o),o=l);c.i.push(new ff(c.Ya++,o)),c.I==3&&ms(c)},zt.prototype.N=function(){this.g.l=null,delete this.j,qi(this.g),delete this.g,zt.Z.N.call(this)};function xu(o){xi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const l in c){o=l;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(xu,xi);function Cu(){Ci.call(this),this.status=1}p(Cu,Ci);function vn(o){this.g=o}p(vn,Pu),vn.prototype.ra=function(){Dt(this.g,"a")},vn.prototype.qa=function(o){Dt(this.g,new xu(o))},vn.prototype.pa=function(o){Dt(this.g,new Cu)},vn.prototype.oa=function(){Dt(this.g,"b")},gs.prototype.createWebChannel=gs.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Jc=function(){return new gs},Yc=function(){return as()},Xc=Ze,no={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},us.NO_ERROR=0,us.TIMEOUT=8,us.HTTP_ERROR=6,As=us,Ka.COMPLETE="complete",Qc=Ka,qa.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",Rt.prototype.listen=Rt.prototype.J,fr=qa,ut.prototype.listenOnce=ut.prototype.K,ut.prototype.getLastError=ut.prototype.Ha,ut.prototype.getLastErrorCode=ut.prototype.ya,ut.prototype.getStatus=ut.prototype.ca,ut.prototype.getResponseJson=ut.prototype.La,ut.prototype.getResponseText=ut.prototype.la,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Fa,Hc=ut}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Bn="13.0.0";function Yd(n){Bn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const fn=new zc("@firebase/firestore");function In(){return fn.logLevel}function L(n,...t){if(fn.logLevel<=J.DEBUG){const e=t.map(Ao);fn.debug(`Firestore (${Bn}): ${n}`,...e)}}function Ie(n,...t){if(fn.logLevel<=J.ERROR){const e=t.map(Ao);fn.error(`Firestore (${Bn}): ${n}`,...e)}}function ee(n,...t){if(fn.logLevel<=J.WARN){const e=t.map(Ao);fn.warn(`Firestore (${Bn}): ${n}`,...e)}}function Ao(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function q(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Zc(n,r,e)}function Zc(n,t,e){let r=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ie(r),new Error(r)}function U(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Zc(t,s,r)}function G(n,t){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Vo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Jd(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function Pr(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return Ki(s)===Ki(i)?H(s,i):Ki(s)?1:-1}return H(n.length,t.length)}const Zd=55296,tm=57343;function Ki(n){const t=n.charCodeAt(0);return t>=Zd&&t<=tm}function Nn(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
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
 */class it{constructor(t,e){this.comparator=t,this.root=e||Vt.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Es(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Es(this.root,t,this.comparator,!1)}getReverseIterator(){return new Es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Es(this.root,t,this.comparator,!0)}}class Es{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Vt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??Vt.RED,this.left=s??Vt.EMPTY,this.right=i??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new Vt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw q(27949);return t+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new Vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fu(this.data.getIterator())}getIteratorFrom(t){return new Fu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class Fu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Fn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const oe="__name__";class ie{constructor(t,e,r){e===void 0?e=0:e>t.length&&q(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&q(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return ie.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ie?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=ie.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return H(t.length,e.length)}static compareSegments(t,e){const r=ie.isNumericId(t),s=ie.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?ie.extractNumericId(t).compare(ie.extractNumericId(e)):Pr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ke.fromString(t.substring(4,t.length-2))}}class Z extends ie{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Z(e)}static emptyPath(){return new Z([])}}const em=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Qt=class An extends ie{construct(t,e,r){return new An(t,e,r)}static isValidIdentifier(t){return em.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),An.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===oe}static keyField(){return new An([oe])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new D(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new D(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(i(),s++)}if(i(),a)throw new D(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new An(e)}static emptyPath(){return new An([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.fields=t,t.sort(Qt.comparator)}static empty(){return new Wt([])}unionWith(t){let e=new dt(Qt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Nn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */function dn(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Qe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function nm(n,t){const e=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.push(t(n[r],r,n));return e}function tl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(Z.fromString(t))}static fromName(t){return new F(Z.fromString(t).popFirst(5))}static empty(){return new F(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new Z(t.slice()))}}/**
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
 */function el(n,t,e){if(!e)throw new D(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function rm(n,t,e,r){if(t===!0&&r===!0)throw new D(x.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Bu(n){if(!F.isDocumentKey(n))throw new D(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qu(n){if(F.isDocumentKey(n))throw new D(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Kr(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ti(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Bt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ti(n);throw new D(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function sm(n,t){if(t<=0)throw new D(x.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */function lt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Wr(n,t){if(!Kr(n))throw new D(x.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0,a=t[r].optional;if(!(r in n)){if(a)continue;e=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&u!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new D(x.INVALID_ARGUMENT,e);return!0}/**
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
 */const ju=-62135596800,$u=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*$u);return new tt(e,r)}static fromInstant(t){if(!t||typeof t.t!="bigint")throw new D(x.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return tt._fromEpochNanoseconds(t.t)}static _fromEpochNanoseconds(t){let e,r;if(t>=0n)e=Number(t/1000000000n),r=Number(t%1000000000n);else{const s=t%1000000000n;s===0n?(e=Number(t/1000000000n),r=0):(e=Number(t/1000000000n-1n),r=Number(s+1000000000n))}return new tt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ju)throw new D(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$u}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new D(x.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const t=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(t)}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Wr(t,tt._jsonSchema))return new tt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ju;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:lt("string",tt._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
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
 */class nl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nl("Invalid base64 string: "+i):i}})(t);return new at(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new at(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}at.EMPTY_BYTE_STRING=new at("");const im=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fe(n){if(U(!!n,39018),typeof n=="string"){let t=0;const e=im.exec(n);if(U(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function mn(n){return typeof n=="string"?at.fromBase64String(n):at.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="server_timestamp",sl="__type__",il="__previous_value__",ol="__local_write_time__";function bo(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[sl])==null?void 0:r.stringValue)===rl}function Hr(n){const t=n.mapValue.fields[il];return bo(t)?Hr(t):t}function Dn(n){const t=Fe(n.mapValue.fields[ol].timestampValue);return new tt(t.seconds,t.nanos)}/**
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
 */class om{constructor(t,e,r,s,i,a,u,h,f,m,p,w,P){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m,this.apiKey=p,this._customHeaders=w,this.grpcFlowControlWindow=P}}const ks="(default)";class xr{constructor(t,e){this.projectId=t,this.database=e||ks}static empty(){return new xr("","")}get isDefaultDatabase(){return this.database===ks}isEqual(t){return t instanceof xr&&t.projectId===this.projectId&&t.database===this.database}}function am(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xr(n.options.projectId,t)}/**
 * Copyright 2021 M.Vokhmentsev
 *
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
 */class j{constructor(){this.exponent=0,this.i=0n,this.o=0n,this.u=new Array(4).fill(0n),this.l=new Array(6).fill(0n),this.h=new Array(6).fill(0n),this.T=new Array(6).fill(0n),this.P=new Array(12).fill(0n)}static I(t,e){let r=new j;return r.parse(t,e),r}parse(t,e){e+=t.length-1,this.exponent=0,this.i=0n,this.o=0n;let r=this.T,s=this.R(t,r);if(s==0&&this.isEmpty(r)||(e+=s)<j.A)return;if(e>j.V)return void(this.exponent=Number(j.m));let i=this.p(e,r);this.S(e,i,r)}R(t,e){for(let i=0;i<6;i++)e[i]=0n;let r=0;for(;r<t.length&&t[r]==0;)r+=1;if(r==t.length)return 0;let s=-r;if(t.length-r>j.v){let i=t[j.v]>=5,a=new Array(j.v).fill(0);for(let u=0;u<j.v;u++)a[u]=t[u+r];i&&(s+=this.D(a)),t=a,r=0}for(let i=t.length-1;i>=r;i--)e[0]|=BigInt(t[i])<<32n,this.C(e);return s}C(t){let e=t.length;for(let r=0;r<e;r++){let s=t[r]%10n;t[r]=t[r]/10n,r+1<e&&(t[r+1]+=s<<32n)}}isEmpty(t){for(let e=0;e<t.length;e++)if(t[e]!=0n)return!1;return!0}D(t){for(let e=t.length-1;e>=0;e--){if(t[e]!=9)return t[e]=t[e]+1,0;t[e]=0}return t[0]=1,1}p(t,e){let r=e[0]<<31n|e[1]>>1n,s=Number(r)/j.F;return Math.floor(Number(t)*j.O+this.log2(s))}log2(t){return j.M*Math.log(t)}S(t,e,r){let s=this.u;this.N(-e,s);let i=this.P;this.B(r,s,i),this.L(i),BigInt(s[0])!=BigInt(-t)&&this.L(i),e+=this.U(i),(e+=j.k)<=0||(e+=this.q(i),BigInt(e)>=j.m?this.exponent=Number(j.m):(this.exponent=Number(e),this.i=(i[0]<<32n)+i[1]&0xffffffffffffffffn,this.o=(i[2]<<32n)+i[3]&0xffffffffffffffffn))}N(t,e){if(t==0)return void this.K(j.$[0],e);let r=j.$;t<0&&(t=-t,r=j.W);let s=j.G,i=32,a=!0;for(;t>0;)t>=s&&(a?(this.K(r[i],e),a=!1):this.j(e,r[i],e),t-=s),i-=1,s*=.5}K(t,e){for(let r=0;r<e.length;r++)e[r]=t[r]}j(t,e,r){this.H(t,e,this.P);let s=this.J(this.P);this.Y(this.P,r),r[0]=t[0]+e[0]+BigInt(s)}H(t,e,r){for(let s=0;s<r.length;s++)r[s]=0n;this.Z(t,this.l),this.Z(e,this.h);for(let s=5;s>=0;s--)for(let i=5;i>=0;i--){let a=this.l[s]*this.h[i];r[i+s+1]=r[i+s+1]+(a&j.X)&0xffffffffffffffffn,r[i+s]=r[i+s]+(a>>32n)&0xffffffffffffffffn}for(let s=11;s>=1;s--)r[s-1]=r[s-1]+(r[s]>>32n)&0xffffffffffffffffn,r[s]&=j.X}J(t){let e=0;for(;this.ee(t);)this.L(t),e-=1;return e}ee(t){if(t[0]<0x19999999n)return!0;if(t[0]>0x19999999n)return!1;for(let e=1;e<t.length;e++){if(t[e]<0x99999999n)return!0;if(t[e]>0x99999999n)return!1}return!1}B(t,e,r){for(let a=0;a<r.length;a++)r[a]=0n;let s=this.h;this.Z(e,s);let i=t.length;for(let a=i-1;a>=0;a--)for(let u=i-1;u>=0;u--){let h=t[a]*s[u];r[u+a+1]=r[u+a+1]+(h&j.X)&0xffffffffffffffffn,r[u+a]=r[u+a]+(h>>32n)&0xffffffffffffffffn}for(let a=11;a>=1;a--)r[a-1]=r[a-1]+(r[a]>>32n)&0xffffffffffffffffn,r[a]&=j.X}L(t){let e=t.length-1;t[0]&=j.X,t[e]*=10n;for(let r=e-1;r>=0;r--)t[r]=10n*t[r]+(t[r+1]>>32n)&0xffffffffffffffffn,t[r+1]&=j.X}U(t){let e=31-j.te(t[0]);return e!=0&&this.ne(t,e),e}q(t){return this.re(t,5,100n),this.re(t,4,0x80000000n),(t[0]&j.ie<<1n)!=0n?(this.ne(t,1),1):0}Y(t,e){e[1]=(t[0]<<32n)+t[1],e[2]=(t[2]<<32n)+t[3],e[3]=(t[4]<<32n)+t[5]}Z(t,e){e[0]=t[1]>>32n,e[1]=t[1]&j.X,e[2]=t[2]>>32n,e[3]=t[2]&j.X,e[4]=t[3]>>32n,e[5]=t[3]&j.X}ne(t,e){let r=t.length-1,s=BigInt(32-Math.abs(e));if(e>0){let i=BigInt(e);for(let a=r+1-1;a>=1;a--)t[a]=t[a]>>i|t[a-1]<<s&j.X;t[0]=t[0]>>i}else if(e<0){let i=BigInt(-e);t[0]=0xffffffffffffffffn&(t[0]<<i|t[1]>>s);for(let a=1;a<r;a++)t[a]=0xffffffffffffffffn&(t[a]<<i&j.X|t[a+1]>>s);t[r]=t[r]<<i&j.X}}re(t,e,r){let s=e;t[s]=t[s]+r&0xffffffffffffffffn;for(let i=s+1-1;i>=1&&(t[i]&j.ie)!=0n;i--)t[i]&=j.X,t[i-1]+=1n}static te(t){let e=Number(t>>32n);return e==0?32+Math.clz32(Number(BigInt.asUintN(32,t))):Math.clz32(e)}}/**
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
 */var wt,Pn,ro,Vs,bs,dr;j.v=59,j.V=646456993,j.A=-646457032,j.F=0xccccccccccccd00,j.se=0x8000000000000000n,j.G=2147483648,j.X=0x00000000ffffffffn,j.ie=0xffffffff00000000n,j.O=Math.log(10)/Math.log(2),j.M=1/Math.log(2),j.k=2147483647,j.m=0xffffffffn,j.$=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],j.W=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class B{constructor(t,e,r,s){this.negative=t,this._e=e,this.i=r,this.o=s}exponent(){return this._e-j.k}oe(){return this._e===0&&this.i===0n&&this.o===0n}ae(){return this._e===At(B,wt,"f",Pn)&&this.i===0n&&this.o===0n}isNaN(){return this._e===At(B,wt,"f",Pn)&&!(this.i===0n&&this.o===0n)}compareTo(t){if(this.isNaN())return t.isNaN()?0:1;if(t.isNaN())return-1;let e,r;if(this.negative){if(!t.negative)return-1;e=1,r=-1}else{if(t.negative)return 1;e=-1,r=1}return this._e<t._e?e:this._e>t._e?r:this.i<t.i?e:this.i>t.i?r:this.o<t.o?e:this.o>t.o?r:0}debug(){return(this.negative?"+":"-")+At(B,wt,"m",ro).call(B,this.i)+At(B,wt,"m",ro).call(B,this.o)+"*2^"+this.exponent()}static fromNumber(t){if(isNaN(t))return B.NaN;if(!isFinite(t))return t<0?B.ue:B.ce;if(t===0)return Math.sign(1/t)>0?B.le:B.Ee;const e=new DataView(new ArrayBuffer(8));e.setFloat64(0,t);const r=e.getBigUint64(0);let s=BigInt.asUintN(64,r<<12n),i=2047&Number(r>>52n);if(i===0){const a=j.te(s);s=a<63?s<<BigInt(a+1):0n,i=-a}return new B(t<0,At(B,wt,"m",dr).call(B,i-1023),s,0n)}static fromString(t){if(t==="NaN")return B.NaN;if(t==="-Infinity")return B.ue;if(t==="Infinity"||t==="+Infinity")return B.ce;const e=new Array(t.length).fill(0);let r=0,s=0,i=0,a=!1;for(t[r]==="-"?(a=!0,r++):t[r]==="+"&&r++;At(B,wt,"m",Vs).call(B,t,r);)e[s++]=At(B,wt,"m",bs).call(B,t,r++);if(t[r]==="."){const h=++r;for(;At(B,wt,"m",Vs).call(B,t,r);)e[s++]=At(B,wt,"m",bs).call(B,t,r++);i=h-r}if(t[r]==="e"||t[r]==="E"){let h=0;r++;let f=1;t[r]==="-"?(f=-1,r++):t[r]==="+"&&r++;const m=r;for(;At(B,wt,"m",Vs).call(B,t,r);)if(h=10*h+At(B,wt,"m",bs).call(B,t,r++),r-m>9)throw new Error("Exponent too large "+t);if(r===m)throw new Error("Invalid number "+t);i+=h*f}if(s===0||r!==t.length)throw new Error("Invalid number "+t);const u=j.I(e.slice(0,s),i);return new B(a,u.exponent,u.i,u.o)}}wt=B,ro=function(t){return t.toString(16).padStart(16,"0")},Vs=function(t,e){const r=t.codePointAt(e);return r!==void 0&&r>=48&&r<=57},bs=function(t,e){return t.codePointAt(e)-48},dr=function(t){return t+j.k},Pn={value:Number(j.m)},B.le=new B(!1,0,0n,0n),B.Ee=new B(!0,0,0n,0n),B.NaN=new B(!1,At(B,wt,"f",Pn),1n<<63n,0n),B.ue=new B(!0,At(B,wt,"f",Pn),0n,0n),B.ce=new B(!1,At(B,wt,"f",Pn),0n,0n),new B(!0,At(B,wt,"m",dr).call(B,63),0n,0n),new B(!1,At(B,wt,"m",dr).call(B,0),0n,0n),new B(!0,At(B,wt,"m",dr).call(B,0),0n,0n);/**
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
 */const Ro=-1;function ei(n){return n==null}function Cr(n){return n===0&&1/n==-1/0}function um(n){return typeof n=="number"&&Number.isInteger(n)&&!Cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function cm(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="__type__",xo="__vector__",Sr="value",lm="server_timestamp",al="__min__",Co="__max__",Oe="__regex__",Ls="pattern",Ms="options",Nr="__oid__",gn="__int__",Be="__decimal128__",an="__request_timestamp__",Us="seconds",Fs="increment",ni="__binary__",On={nullValue:"NULL_VALUE"},ws={mapValue:{}};var nt,Yt;(Yt=nt||(nt={})).he="regexValue",Yt.Te="bsonObjectIdValue",Yt.Pe="int32Value",Yt.Ie="decimal128Value",Yt.Re="bsonTimestampValue",Yt.Ae="bsonBinaryValue",Yt.Ve="minKeyValue",Yt.fe="maxKeyValue",Yt.de="maxValue",Yt.me="vectorValue",Yt.pe="serverTimestampValue",Yt.ge="regularMapValue";const zu={[xo]:nt.me,[Co]:nt.de,[lm]:nt.pe},ul={[Oe]:nt.he,[Nr]:nt.Te,[gn]:nt.Pe,[Be]:nt.Ie,[an]:nt.Re,[ni]:nt.Ae,[al]:nt.Ve,[Co]:nt.fe},hm=new Set(Object.values(ul)),jt={booleanValue:!0},vt={booleanValue:!1};function mt(n){if("nullValue"in n)return 0;if("booleanValue"in n)return 2;if("integerValue"in n||"doubleValue"in n)return 3;if("timestampValue"in n)return 4;if("stringValue"in n)return 7;if("bytesValue"in n)return 8;if("referenceValue"in n)return 9;if("geoPointValue"in n)return 11;if("arrayValue"in n)return 13;if(!("mapValue"in n))return q(28295,{value:n});switch(pl(n)){case nt.pe:return 6;case nt.de:return 9007199254740991;case nt.me:return 14;case nt.he:return 12;case nt.Te:return 10;case nt.Pe:case nt.Ie:return 3;case nt.Re:return 5;case nt.Ae:return 8;case nt.Ve:return 1;case nt.fe:return 16;default:return 15}}function Jt(n,t,e){if(n===t)return!0;const r=mt(n);if(r!==mt(t))return!1;switch(r){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return n.booleanValue===t.booleanValue;case 6:return Dn(n).isEqual(Dn(t));case 4:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const u=Fe(i.timestampValue),h=Fe(a.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos})(n,t);case 7:return n.stringValue===t.stringValue;case 8:return(function(i,a){return fl(i,a)===0})(n,t);case 9:return n.referenceValue===t.referenceValue;case 11:return(function(i,a){return ct(i.geoPointValue.latitude)===ct(a.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(a.geoPointValue.longitude)})(n,t);case 3:return(function(i,a,u){if(Zt(i)&&Zt(a))return ll(i,a)===0;if("integerValue"in i&&"integerValue"in a||qe(i)&&qe(a))return Or(i)===Or(a);let h,f;if("doubleValue"in i&&"doubleValue"in a)h=ct(i.doubleValue),f=ct(a.doubleValue);else{if(!(u!=null&&u.ye))return!1;h=ct(i.integerValue??i.doubleValue),f=ct(a.integerValue??a.doubleValue)}return h===f?!!(u!=null&&u.we)||Cr(h)===Cr(f):!!(u===void 0||u.be)&&isNaN(h)&&isNaN(f)})(n,t,e);case 13:return Nn(n.arrayValue.values||[],t.arrayValue.values||[],((s,i)=>Jt(s,i,e)));case 14:case 15:return(function(i,a,u){const h=i.mapValue.fields||{},f=a.mapValue.fields||{};if(dn(h)!==dn(f))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(f[m]===void 0||!Jt(h[m],f[m],u)))return!1;return!0})(n,t,e);case 5:return hl(n,t)===0;case 12:return dl(n,t)===0;case 10:return ml(n,t)===0;default:return q(52216,{left:n})}}function Dr(n,t){return(n.values||[]).find((e=>Jt(e,t)))!==void 0}function $t(n,t){if(n===t)return 0;const e=mt(n),r=mt(t);if(e!==r)return H(e,r);switch(e){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return H(n.booleanValue,t.booleanValue);case 3:return kr(n,t);case 4:return Ku(n.timestampValue,t.timestampValue);case 6:return Ku(Dn(n),Dn(t));case 7:return Pr(n.stringValue,t.stringValue);case 8:return fl(n,t);case 9:return(function(i,a){const u=i.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const m=H(u[f],h[f]);if(m!==0)return m}return H(u.length,h.length)})(n.referenceValue,t.referenceValue);case 11:return(function(i,a){const u=H(ct(i.latitude),ct(a.latitude));return u!==0?u:H(ct(i.longitude),ct(a.longitude))})(n.geoPointValue,t.geoPointValue);case 13:return Wu(n.arrayValue,t.arrayValue);case 14:return(function(i,a){var w,P,S,M;const u=i.fields||{},h=a.fields||{},f=(w=u[Sr])==null?void 0:w.arrayValue,m=(P=h[Sr])==null?void 0:P.arrayValue,p=H(((S=f==null?void 0:f.values)==null?void 0:S.length)||0,((M=m==null?void 0:m.values)==null?void 0:M.length)||0);return p!==0?p:Wu(f,m)})(n.mapValue,t.mapValue);case 15:return(function(i,a){if(i===ws.mapValue&&a===ws.mapValue)return 0;if(i===ws.mapValue)return 1;if(a===ws.mapValue)return-1;const u=i.fields||{},h=Object.keys(u),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let p=0;p<h.length&&p<m.length;++p){const w=Pr(h[p],m[p]);if(w!==0)return w;const P=$t(u[h[p]],f[m[p]]);if(P!==0)return P}return H(h.length,m.length)})(n.mapValue,t.mapValue);case 5:return hl(n,t);case 12:return dl(n,t);case 10:return ml(n,t);default:throw q(23264,{Se:e})}}function Or(n){let t;return t=qe(n)?n.mapValue.fields[gn].integerValue:n.integerValue||n.doubleValue,ct(t)}function cl(n){return n.mapValue.fields[Be].stringValue}function kr(n,t){if(Zt(n)||Zt(t))return ll(n,t);const e=Or(n),r=Or(t);return isNaN(e)?isNaN(r)?0:-1:isNaN(r)?1:H(e,r)}function ll(n,t){const e=Gu(n),r=Gu(t);return e.oe()&&r.oe()?0:e.isNaN()?r.isNaN()?0:-1:r.isNaN()?1:e.compareTo(r)}function Gu(n){return Zt(n)?B.fromString(cl(n)):B.fromNumber(Or(n))}function Ku(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=Fe(n),r=Fe(t),s=H(e.seconds,r.seconds);return s!==0?s:H(e.nanos,r.nanos)}function Wu(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=$t(e[s],r[s]);if(i!==void 0&&i!==0)return i}return H(e.length,r.length)}function hl(n,t){var u,h,f,m,p,w,P,S,M,k,K,X;const e=(f=(h=(u=n.mapValue.fields)==null?void 0:u[an].mapValue)==null?void 0:h.fields)==null?void 0:f[Us],r=(w=(p=(m=t.mapValue.fields)==null?void 0:m[an].mapValue)==null?void 0:p.fields)==null?void 0:w[Us],s=(M=(S=(P=n.mapValue.fields)==null?void 0:P[an].mapValue)==null?void 0:S.fields)==null?void 0:M[Fs],i=(X=(K=(k=t.mapValue.fields)==null?void 0:k[an].mapValue)==null?void 0:K.fields)==null?void 0:X[Fs],a=kr(e,r);return a!==0?a:kr(s,i)}function Hu(n){var u;if("bytesValue"in n)return{subtype:0,bytes:mn(n.bytesValue)};const t=(u=n.mapValue)==null?void 0:u.fields,e=t==null?void 0:t[ni],r=e==null?void 0:e.bytesValue;if(!r)throw new Error("Received incorrect value for BsonBinaryData");const s=mn(r).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const i=s[0],a=s.slice(1);return{subtype:i,bytes:at.fromUint8Array(a)}}function fl(n,t){const e=Hu(n),r=Hu(t);return e.subtype!==r.subtype?e.subtype<r.subtype?-1:1:e.bytes.compareTo(r.bytes)}function dl(n,t){var f,m,p,w,P,S,M,k,K,X,rt,Nt,pt,gt,v,g;const e=n.mapValue.fields,r=((w=(p=(m=(f=e==null?void 0:e[Oe])==null?void 0:f.mapValue)==null?void 0:m.fields)==null?void 0:p[Ls])==null?void 0:w.stringValue)??"",s=((k=(M=(S=(P=e==null?void 0:e[Oe])==null?void 0:P.mapValue)==null?void 0:S.fields)==null?void 0:M[Ms])==null?void 0:k.stringValue)??"",i=t.mapValue.fields,a=((Nt=(rt=(X=(K=i==null?void 0:i[Oe])==null?void 0:K.mapValue)==null?void 0:X.fields)==null?void 0:rt[Ls])==null?void 0:Nt.stringValue)??"",u=((g=(v=(gt=(pt=i==null?void 0:i[Oe])==null?void 0:pt.mapValue)==null?void 0:gt.fields)==null?void 0:v[Ms])==null?void 0:g.stringValue)??"",h=Pr(r,a);return h!==0?h:H(s,u)}function ml(n,t){var e,r,s,i;return Pr(((r=(e=n.mapValue.fields)==null?void 0:e[Nr])==null?void 0:r.stringValue)??"",((i=(s=t.mapValue.fields)==null?void 0:s[Nr])==null?void 0:i.stringValue)??"")}function kn(n){return so(n)}function so(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Fe(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return mn(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return F.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=so(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${so(e.fields[a])}`;return s+"}"})(n.mapValue):q(61005,{value:n})}function Bs(n){switch(mt(n)){case 0:case 2:return 4;case 3:return Zt(n)?16:8;case 4:case 11:return 16;case 6:const t=Hr(n);return t?16+Bs(t):16;case 7:return 2*n.stringValue.length;case 8:return"bytesValue"in n?mn(n.bytesValue).approximateByteSize():Qu(n.mapValue);case 9:return n.referenceValue.length;case 13:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Bs(i)),0)})(n.arrayValue);case 14:case 15:case 12:case 10:case 5:case 1:case 16:return Qu(n.mapValue);default:throw q(13486,{value:n})}}function Qu(n){let t=0;return Qe(n.fields,((e,r)=>{t+=e.length+Bs(r)})),t}function Xu(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ae(n){return!!n&&"integerValue"in n}function ue(n){return!!n&&"doubleValue"in n}function Zt(n){var e;if(!((e=n.mapValue)!=null&&e.fields))return!1;const t=n.mapValue.fields;return dn(t)===1&&t[Be]&&!!t[Be].stringValue}function qe(n){var e,r;if(!((e=n.mapValue)!=null&&e.fields))return!1;const t=n.mapValue.fields;return dn(t)===1&&((r=t[gn])==null?void 0:r.integerValue)!==void 0}function Ae(n){return ae(n)||ue(n)||!!n&&qe(n)||!!n&&Zt(n)}function Ln(n){return!!n&&"arrayValue"in n}function Ht(n){return!!n&&"nullValue"in n}function It(n){return!(!ue(n)||!isNaN(Number(n.doubleValue)))||!(!Zt(n)||cl(n)!=="NaN")}function un(n){return!!n&&"mapValue"in n}function pl(n){var r,s;if(!((r=n.mapValue)!=null&&r.fields))return nt.ge;const t=n.mapValue.fields,e=(s=t[Po])==null?void 0:s.stringValue;if(e&&zu[e])return zu[e];if(dn(t)===1){const i=Object.keys(t);return ul[i[0]]??nt.ge}return nt.ge}function io(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Po])==null?void 0:r.stringValue)===xo}function oo(n){var t,e;return(e=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sr])==null?void 0:e.arrayValue}function _r(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Qe(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=_r(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=_r(n.arrayValue.values[e]);return t}return{...n}}/**
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
 */class Lt{constructor(t){this.value=t}static empty(){return new Lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!un(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_r(e)}setAll(t){let e=Qt.emptyPath(),r={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=_r(a):s.push(u.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());un(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];un(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Qe(e,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new Lt(_r(this.value))}}function gl(n){const t=[];return Qe(n.fields,((e,r)=>{const s=new Qt([e]);if(un(r)&&!(function(a){return hm.has(pl(a))})(r)){const i=gl(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new Wt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cr(t)?"-0":t}}function Cn(n){return{integerValue:""+n}}function No(n,t,e){return um(t)?Cn(t):So(n,t)}/**
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
 */class ri{constructor(){this._=void 0}}function fm(n,t,e){return n instanceof qs?(function(s,i){const a={fields:{[sl]:{stringValue:rl},[ol]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bo(i)&&(i=Hr(i)),i&&(a.fields[il]=i),{mapValue:a}})(e,t):n instanceof Lr?yl(n,t):n instanceof Mr?El(n,t):n instanceof Ur?(function(s,i){const a=_l(s,i),u=Yu(a)+Yu(s.xe);return Zt(a)||Zt(s.xe)?{mapValue:{fields:{[Be]:{stringValue:u.toString()}}}}:qe(a)?ue(s.xe)?{doubleValue:u}:ae(s.xe)?{integerValue:u.toString()}:{mapValue:{fields:{[gn]:Cn(u)}}}:ae(a)&&(ae(s.xe)||qe(s.xe))?Cn(u):So(s.serializer,u)})(n,t):n instanceof js?(function(s,i){return!Ae(i)||It(s.xe)?s.xe:It(i)?i:kr(s.xe,i)<0?s.xe:i})(n,t):n instanceof $s?(function(s,i){return!Ae(i)||It(s.xe)?s.xe:It(i)?i:kr(s.xe,i)>0?s.xe:i})(n,t):void 0}function dm(n,t,e){return n instanceof Lr?yl(n,t):n instanceof Mr?El(n,t):e}function _l(n,t){return n instanceof Ur?Ae(t)?t:{integerValue:0}:null}class qs extends ri{}class Lr extends ri{constructor(t){super(),this.elements=t}}function yl(n,t){const e=wl(t);for(const r of n.elements)e.some((s=>Jt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Mr extends ri{constructor(t){super(),this.elements=t}}function El(n,t){let e=wl(t);for(const r of n.elements)e=e.filter((s=>!Jt(s,r)));return{arrayValue:{values:e}}}class Do extends ri{constructor(t,e){super(),this.serializer=t,this.xe=e}}class Ur extends Do{}class js extends Do{}class $s extends Do{}function Yu(n){return ae(n)?ct(n.integerValue):ue(n)?ct(n.doubleValue):qe(n)?ct(n.mapValue.fields[gn].integerValue):Zt(n)?parseFloat(n.mapValue.fields[Be].stringValue):0}function wl(n){return Ln(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mm(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof Lr&&s instanceof Lr||r instanceof Mr&&s instanceof Mr?Nn(r.elements,s.elements,Jt):r instanceof Ur&&s instanceof Ur||r instanceof js&&s instanceof js||r instanceof $s&&s instanceof $s?Jt(r.xe,s.xe):r instanceof qs&&s instanceof qs})(n.transform,t.transform)}class pm{constructor(t,e){this.version=t,this.transformResults=e}}class te{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new te}static exists(t){return new te(void 0,t)}static updateTime(t){return new te(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Rs(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class si{}function Tl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Oo(n.key,te.none()):new Qr(n.key,n.data,te.none());{const e=n.data,r=Lt.empty();let s=new dt(Qt.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Xe(n.key,r,new Wt(s.toArray()),te.none())}}function gm(n,t,e){n instanceof Qr?(function(s,i,a){const u=s.value.clone(),h=Zu(s.fieldTransforms,i,a.transformResults);u.setAll(h),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,t,e):n instanceof Xe?(function(s,i,a){if(!Rs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Zu(s.fieldTransforms,i,a.transformResults),h=i.data;h.setAll(vl(s)),h.setAll(u),i.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function yr(n,t,e,r){return n instanceof Qr?(function(i,a,u,h){if(!Rs(i.precondition,a))return u;const f=i.value.clone(),m=tc(i.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,t,e,r):n instanceof Xe?(function(i,a,u,h){if(!Rs(i.precondition,a))return u;const f=tc(i.fieldTransforms,h,a),m=a.data;return m.setAll(vl(i)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,t,e,r):(function(i,a,u){return Rs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(n,t,e)}function _m(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=_l(r.transform,s||null);i!=null&&(e===null&&(e=Lt.empty()),e.set(r.field,i))}return e||null}function Ju(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Nn(r,s,((i,a)=>mm(i,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Qr extends si{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xe extends si{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vl(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Zu(n,t,e){const r=new Map;U(n.length===e.length,32656,{ve:e.length,De:n.length});for(let s=0;s<e.length;s++){const i=n[s],a=i.transform,u=t.data.field(i.field);r.set(i.field,dm(a,u,e[s]))}return r}function tc(n,t,e){const r=new Map;for(const s of n){const i=s.transform,a=e.data.field(s.field);r.set(s.field,fm(i,a,t))}return r}class Oo extends si{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ym extends si{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zs{constructor(t,e){this.position=t,this.inclusive=e}}function ec(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=$t(a,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function nc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Jt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Il{}class ft extends Il{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new wm(t,e,r):e==="array-contains"?new Im(t,r):e==="in"?new Am(t,r):e==="not-in"?new Vm(t,r):e==="array-contains-any"?new bm(t,r):new ft(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Tm(t,r):new vm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison($t(e,this.value)):e!==null&&mt(this.value)===mt(e)&&this.matchesComparison($t(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends Il{constructor(t,e){super(),this.filters=t,this.op=e,this.Ce=null}static create(t,e){return new ne(t,e)}matches(t){return Al(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Ce!==null||(this.Ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Ce}getFilters(){return Object.assign([],this.filters)}}function Al(n){return n.op==="and"}function Vl(n){return Em(n)&&Al(n)}function Em(n){for(const t of n.filters)if(t instanceof ne)return!1;return!0}function ao(n){if(n instanceof ft)return n.field.canonicalString()+n.op.toString()+kn(n.value);if(Vl(n))return n.filters.map((t=>ao(t))).join(",");{const t=n.filters.map((e=>ao(e))).join(",");return`${n.op}(${t})`}}function bl(n,t){return n instanceof ft?(function(r,s){return s instanceof ft&&r.op===s.op&&r.field.isEqual(s.field)&&Jt(r.value,s.value)})(n,t):n instanceof ne?(function(r,s){return s instanceof ne&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,u)=>i&&bl(a,s.filters[u])),!0):!1})(n,t):void q(19439)}function Rl(n){return n instanceof ft?(function(e){return`${e.field.canonicalString()} ${e.op} ${kn(e.value)}`})(n):n instanceof ne?(function(e){return e.op.toString()+" {"+e.getFilters().map(Rl).join(" ,")+"}"})(n):"Filter"}class wm extends ft{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Tm extends ft{constructor(t,e){super(t,"in",e),this.keys=Pl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class vm extends ft{constructor(t,e){super(t,"not-in",e),this.keys=Pl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Pl(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>F.fromName(r.referenceValue)))}class Im extends ft{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ln(e)&&Dr(e.arrayValue,this.value)}}class Am extends ft{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Dr(this.value.arrayValue,e)}}class Vm extends ft{constructor(t,e){super(t,"not-in",e)}matches(t){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Dr(this.value.arrayValue,e)}}class bm extends ft{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ln(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Dr(this.value.arrayValue,r)))}}/**
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
 */class Gs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new tt(0,0))}static max(){return new z(new tt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ct{constructor(t,e,r,s,i,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Ct(t,0,z.min(),z.min(),z.min(),Lt.empty(),0)}static newFoundDocument(t,e,r,s){return new Ct(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new Ct(t,2,e,z.min(),z.min(),Lt.empty(),0)}static newUnknownDocument(t,e){return new Ct(t,3,e,z.min(),z.min(),Lt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const Fr=-1;function Pm(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new tt(e+1,0):new tt(e,r));return new je(s,F.empty(),t)}function xm(n){return new je(n.readTime,n.key,Fr)}class je{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new je(z.min(),F.empty(),Fr)}static max(){return new je(z.max(),F.empty(),Fr)}}function Cm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
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
 */class Sm{constructor(t,e=null,r=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Fe=null}}function rc(n,t=null,e=[],r=[],s=null,i=null,a=null){return new Sm(n,t,e,r,s,i,a)}function xl(n){const t=G(n);if(t.Fe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>ao(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ei(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>kn(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>kn(r))).join(",")),t.Fe=e}return t.Fe}function Cl(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Rm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!bl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!nc(n.startAt,t.startAt)&&nc(n.endAt,t.endAt)}function on(n){return!!n.isCorePipeline}function Sl(n){return!!n.path&&F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Xr{constructor(t,e=null,r=[],s=[],i=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=h,this.Oe=null,this.Me=null,this.Ne=null,this.startAt,this.endAt}}function Nm(n,t,e,r,s,i,a,u){return new Xr(n,t,e,r,s,i,a,u)}function ii(n){return new Xr(n)}function sc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dm(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Nl(n){return n.collectionGroup!==null}function Er(n){const t=G(n);if(t.Oe===null){t.Oe=[];const e=new Set;for(const i of t.explicitOrderBy)t.Oe.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new dt(Qt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(u=u.add(f.field))}))})),u})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Oe.push(new Gs(i,r))})),e.has(Qt.keyField().canonicalString())||t.Oe.push(new Gs(Qt.keyField(),r))}return t.Oe}function ce(n){const t=G(n);return t.Me||(t.Me=Om(t,Er(n))),t.Me}function Om(n,t){if(n.limitType==="F")return rc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Gs(s.field,i)}));const e=n.endAt?new zs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zs(n.startAt.position,n.startAt.inclusive):null;return rc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function uo(n,t){const e=n.filters.concat([t]);return new Xr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ks(n,t,e){return new Xr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function km(n,t){return Cl(ce(n),ce(t))&&n.limitType===t.limitType}function wr(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>Rl(s))).join(", ")}]`),ei(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>kn(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>kn(s))).join(",")),`Target(${r})`})(ce(n))}; limitType=${n.limitType})`}function oi(n,t){return t.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,t)&&(function(r,s){for(const i of Er(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,u,h){const f=ec(a,u,h);return a.inclusive?f<=0:f<0})(r.startAt,Er(r),s)||r.endAt&&!(function(a,u,h){const f=ec(a,u,h);return a.inclusive?f>=0:f>0})(r.endAt,Er(r),s))})(n,t)}function ko(n){return(t,e)=>{let r=!1;for(const s of Er(n)){const i=Lm(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Lm(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):(function(i,a,u){const h=a.data.field(i),f=u.data.field(i);return h!==null&&f!==null?$t(h,f):q(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
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
 */class Mm{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ht,Y;function Um(n){switch(n){case x.OK:return q(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function Dl(n){if(n===void 0)return Ie("GRPC error has no .code"),x.UNKNOWN;switch(n){case ht.OK:return x.OK;case ht.CANCELLED:return x.CANCELLED;case ht.UNKNOWN:return x.UNKNOWN;case ht.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case ht.INTERNAL:return x.INTERNAL;case ht.UNAVAILABLE:return x.UNAVAILABLE;case ht.UNAUTHENTICATED:return x.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case ht.NOT_FOUND:return x.NOT_FOUND;case ht.ALREADY_EXISTS:return x.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return x.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case ht.ABORTED:return x.ABORTED;case ht.OUT_OF_RANGE:return x.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return x.UNIMPLEMENTED;case ht.DATA_LOSS:return x.DATA_LOSS;default:return q(39323,{code:n})}}(Y=ht||(ht={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _n{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Qe(this.inner,((e,r)=>{for(const[s,i]of r)t(s,i)}))}isEmpty(){return tl(this.inner)}size(){return this.innerSize}}/**
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
 */const Fm=new it(F.comparator);function Ft(){return Fm}const Ol=new it(F.comparator);function Vn(...n){let t=Ol;for(const e of n)t=t.insert(e.key,e);return t}function kl(n){let t=Ol;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function De(){return Tr()}function Ll(){return Tr()}function Tr(){return new _n((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Bm=new it(F.comparator),qm=new dt(F.comparator);function Q(...n){let t=qm;for(const e of n)t=t.add(e);return t}const jm=new dt(H);function $m(){return jm}/**
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
 */function zm(){return new TextEncoder}/**
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
 */const Gm=new ke([4294967295,4294967295],0);function ic(n){const t=zm().encode(n),e=new Wc;return e.update(t),new Uint8Array(e.digest())}function oc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ke([e,r],0),new ke([s,i],0)]}class Lo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new mr(`Invalid padding: ${e}`);if(r<0)throw new mr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new mr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new mr(`Invalid padding when bitmap length is 0: ${e}`);this.Be=8*t.length-e,this.Le=ke.fromNumber(this.Be)}Ue(t,e,r){let s=t.add(e.multiply(ke.fromNumber(r)));return s.compare(Gm)===1&&(s=new ke([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Le).toNumber()}ke(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Be===0)return!1;const e=ic(t),[r,s]=oc(e);for(let i=0;i<this.hashCount;i++){const a=this.Ue(r,s,i);if(!this.ke(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Lo(i,s,e);return r.forEach((u=>a.insert(u))),a}insert(t){if(this.Be===0)return;const e=ic(t),[r,s]=oc(e);for(let i=0;i<this.hashCount;i++){const a=this.Ue(r,s,i);this.Qe(a)}}Qe(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Yr{constructor(t,e,r,s,i,a){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Jr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Yr(z.min(),s,new it(H),Ft(),Ft(),Q())}}class Jr{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Jr(r,e,Q(),Q(),Q())}}/**
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
 */class Ps{constructor(t,e,r,s){this.qe=t,this.removedTargetIds=e,this.key=r,this.Ke=s}}class Ml{constructor(t,e){this.targetId=t,this.$e=e}}class Ul{constructor(t,e,r=at.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ac{constructor(t){this.targetId=t,this.We=0,this.Ge=uc(),this.je=at.EMPTY_BYTE_STRING,this.ze=!1,this.He=!0}get current(){return this.ze}get resumeToken(){return this.je}get Je(){return this.We!==0}get Ye(){return this.He}Ze(t){t.approximateByteSize()>0&&(this.He=!0,this.je=t)}Xe(){let t=Q(),e=Q(),r=Q();return this.Ge.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}})),new Jr(this.je,this.ze,t,e,r)}et(){this.He=!1,this.Ge=uc()}tt(t,e){this.He=!0,this.Ge=this.Ge.insert(t,e)}nt(t){this.He=!0,this.Ge=this.Ge.remove(t)}rt(){this.We+=1}it(){this.We-=1,U(this.We>=0,3241,{We:this.We,targetId:this.targetId})}st(){this.He=!0,this.ze=!0}}const lr="WatchChangeAggregator";class Km{constructor(t){this._t=t,this.ot=new Map,this.ut=Ft(),this.ct=Ts(),this.lt=Ft(),this.Et=Ts(),this.ht=new it(H)}Tt(t){for(const e of t.qe)t.Ke&&t.Ke.isFoundDocument()?this.Pt(e,t.Ke):this.It(e,t.key,t.Ke);for(const e of t.removedTargetIds)this.It(e,t.key,t.Ke)}Rt(t){this.forEachTarget(t,(e=>{const r=this.ot.get(e);if(r)switch(t.state){case 0:this.At(e)&&r.Ze(t.resumeToken);break;case 1:r.it(),r.Je||r.et(),r.Ze(t.resumeToken);break;case 2:r.it(),r.Je||this.removeTarget(e);break;case 3:this.At(e)&&(r.st(),r.Ze(t.resumeToken));break;case 4:this.At(e)&&(this.Vt(e),r.Ze(t.resumeToken));break;default:q(56790,{state:t.state})}else L(lr,`handleTargetChange received targetChange for untracked target ID (${e}) with state (${t.state})`)}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ot.forEach(((r,s)=>{this.At(s)&&e(s)}))}ft(t){var e;return on(t)?t.getPipelineSourceType()==="documents"&&((e=t.getPipelineDocuments())==null?void 0:e.length)===1:Sl(t)}dt(t){const e=t.targetId,r=t.$e.count,s=this.gt(e);if(s){const i=s.target;if(this.ft(i))if(r===0){const a=new F(on(i)?Z.fromString(i.getPipelineDocuments()[0]):i.path);this.It(e,a,Ct.newNoDocument(a,z.min()))}else U(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.yt(e);if(a!==r){const u=this.wt(t),h=u?this.bt(u,t,a):1;if(h!==0){this.Vt(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ht=this.ht.insert(e,f)}}}}}wt(t){const e=t.$e.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=mn(r).toUint8Array()}catch(h){if(h instanceof nl)return ee("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Lo(a,s,i)}catch(h){return ee(h instanceof mr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Be===0?null:u}bt(t,e,r){return e.$e.count===r-this.vt(t,e.targetId)?0:2}vt(t,e){const r=this._t.getRemoteKeysForTarget(e);let s=0;return r.forEach((i=>{const a=this._t.xt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.It(e,i,null),s++)})),s}Dt(t){const e=new Map;this.ot.forEach(((i,a)=>{const u=this.gt(a);if(u){if(i.current&&this.ft(u.target)){const h=on(u.target)?Z.fromString(u.target.getPipelineDocuments()[0]):u.target.path,f=new F(h);this.Ct(f).has(a)||this.Ft(a,f)||this.It(a,f,Ct.newNoDocument(f,t))}i.Ye&&(e.set(a,i.Xe()),i.et())}}));let r=Q();this.Et.forEach(((i,a)=>{let u=!0;a.forEachWhile((h=>{const f=this.gt(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(r=r.add(i))})),this.ut.forEach(((i,a)=>a.setReadTime(t))),this.lt.forEach(((i,a)=>a.setReadTime(t)));const s=new Yr(t,e,this.ht,this.ut,this.lt,r);return this.ut=Ft(),this.ct=Ts(),this.lt=Ft(),this.Et=Ts(),this.ht=new it(H),s}Pt(t,e){const r=this.ot.get(t);if(!r||!this.At(t))return void L(lr,`addDocumentToTarget received document for unknown inactive target (${t})`);const s=this.Ft(t,e.key)?2:0;r.tt(e.key,s),on(this.gt(t).target)&&this.gt(t).target.getPipelineFlavor()!=="exact"?this.lt=this.lt.insert(e.key,e):this.ut=this.ut.insert(e.key,e),this.ct=this.ct.insert(e.key,this.Ct(e.key).add(t)),this.Et=this.Et.insert(e.key,this.Ot(e.key).add(t))}It(t,e,r){const s=this.ot.get(t);s&&this.At(t)?(this.Ft(t,e)?s.tt(e,1):s.nt(e),this.Et=this.Et.insert(e,this.Ot(e).delete(t)),this.Et=this.Et.insert(e,this.Ot(e).add(t)),r&&(on(this.gt(t).target)&&this.gt(t).target.getPipelineFlavor()!=="exact"?this.lt=this.lt.insert(e,r):this.ut=this.ut.insert(e,r))):L(lr,`removeDocumentFromTarget received document for unknown or inactive target (${t})`)}removeTarget(t){this.ot.delete(t)}yt(t){const e=this.ot.get(t);if(!e)return 0;const r=e.Xe();return this._t.getRemoteKeysForTarget(t).size+r.addedDocuments.size-r.removedDocuments.size}rt(t){let e=this.ot.get(t);e||(L(lr,`recordPendingTargetRequest set up tracking for target ID ${t}`),e=new ac(t),this.ot.set(t,e)),e.rt()}Ot(t){let e=this.Et.get(t);return e||(e=new dt(H),this.Et=this.Et.insert(t,e)),e}Ct(t){let e=this.ct.get(t);return e||(e=new dt(H),this.ct=this.ct.insert(t,e)),e}At(t){const e=this.gt(t)!==null;return e||L(lr,"Detected inactive target",t),e}gt(t){const e=this.ot.get(t);return e===void 0||e.Je?null:this._t.Mt(t)}Vt(t){this.ot.set(t,new ac(t)),this._t.getRemoteKeysForTarget(t).forEach((e=>{this.It(t,e,null)}))}Ft(t,e){return this._t.getRemoteKeysForTarget(t).has(e)}}function Ts(){return new it(F.comparator)}function uc(){return new it(F.comparator)}const Wm={asc:"ASCENDING",desc:"DESCENDING"},Hm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qm={and:"AND",or:"OR"};class Xm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function co(n,t){return n.useProto3Json||ei(t)?t:{value:t}}function vr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Mo(n){const t=Fe(n);return new tt(t.seconds,t.nanos)}function lo(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function xs(n,t){return vr(n,t.toTimestamp())}function le(n){return U(!!n,49232),z.fromTimestamp(Mo(n))}function Uo(n,t){return ho(n,t).canonicalString()}function ho(n,t){const e=(function(s){return new Z(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Fl(n){const t=Z.fromString(n);return U(zl(t),10190,{key:t.toString()}),t}function Ws(n,t){return Uo(n.databaseId,t.path)}function Wi(n,t){const e=Fl(t);if(e.get(1)!==n.databaseId.projectId)throw new D(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new D(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(ql(e))}function Bl(n,t){return Uo(n.databaseId,t)}function Ym(n){const t=Fl(n);return t.length===4?Z.emptyPath():ql(t)}function fo(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ql(n){return U(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function cc(n,t,e){return{name:Ws(n,t),fields:e.value.mapValue.fields}}function Jm(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:q(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(f,m){return f.useProto3Json?(U(m===void 0||typeof m=="string",58123),at.fromBase64String(m||"")):(U(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),at.fromUint8Array(m||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(f){const m=f.code===void 0?x.UNKNOWN:Dl(f.code);return new D(m,f.message||"")})(a);e=new Ul(r,s,i,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wi(n,r.document.name),i=le(r.document.updateTime),a=r.document.createTime?le(r.document.createTime):z.min(),u=new Lt({mapValue:{fields:r.document.fields}}),h=Ct.newFoundDocument(s,i,a,u),f=r.targetIds||[],m=r.removedTargetIds||[];e=new Ps(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Wi(n,r.document),i=r.readTime?le(r.readTime):z.min(),a=Ct.newNoDocument(s,i),u=r.removedTargetIds||[];e=new Ps([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Wi(n,r.document),i=r.removedTargetIds||[];e=new Ps([],i,s,null)}else{if(!("filter"in t))return q(11601,{Nt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Mm(s,i),u=r.targetId;e=new Ml(u,a)}}return e}function Zm(n,t){let e;if(t instanceof Qr)e={update:cc(n,t.key,t.value)};else if(t instanceof Oo)e={delete:Ws(n,t.key)};else if(t instanceof Xe)e={update:cc(n,t.key,t.data),updateMask:cp(t.fieldMask)};else{if(!(t instanceof ym))return q(16599,{Bt:t.type});e={verify:Ws(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(i,a){const u=a.transform;if(u instanceof qs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Mr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ur)return{fieldPath:a.field.canonicalString(),increment:u.xe};if(u instanceof js)return{fieldPath:a.field.canonicalString(),minimum:u.xe};if(u instanceof $s)return{fieldPath:a.field.canonicalString(),maximum:u.xe};throw q(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:xs(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)})(n,t.precondition)),e}function tp(n,t){return n&&n.length>0?(U(t!==void 0,14353),n.map((e=>(function(s,i){let a=s.updateTime?le(s.updateTime):le(i);return a.isEqual(z.min())&&(a=le(i)),new pm(a,s.transformResults||[])})(e,t)))):[]}function ep(n,t){return{documents:[Bl(n,t.path)]}}function np(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Bl(n,s);const i=(function(f){if(f.length!==0)return $l(ne.create(f,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(f){if(f.length!==0)return f.map((m=>(function(w){return{field:bn(w.field),direction:op(w.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=co(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{Lt:e,parent:s}}function rp(n){let t=Ym(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){U(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=(function(p){const w=jl(p);return w instanceof ne&&Vl(w)?w.getFilters():[w]})(e.where));let a=[];e.orderBy&&(a=(function(p){return p.map((w=>(function(S){return new Gs(Rn(S.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(w)))})(e.orderBy));let u=null;e.limit&&(u=(function(p){let w;return w=typeof p=="object"?p.value:p,ei(w)?null:w})(e.limit));let h=null;e.startAt&&(h=(function(p){const w=!!p.before,P=p.values||[];return new zs(P,w)})(e.startAt));let f=null;return e.endAt&&(f=(function(p){const w=!p.before,P=p.values||[];return new zs(P,w)})(e.endAt)),Nm(t,s,a,i,u,"F",h,f)}function sp(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ip(n,t){return{structuredPipeline:{pipeline:{stages:t.stages.map((e=>e._toProto(n)))}}}}function jl(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Rn(e.unaryFilter.field);return ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rn(e.unaryFilter.field);return ft.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rn(e.unaryFilter.field);return ft.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Rn(e.unaryFilter.field);return ft.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ft.create(Rn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return ne.create(e.compositeFilter.filters.map((r=>jl(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(e.compositeFilter.op))})(n):q(30097,{filter:n})}function op(n){return Wm[n]}function ap(n){return Hm[n]}function up(n){return Qm[n]}function bn(n){return{fieldPath:n.canonicalString()}}function Rn(n){return Qt.fromServerFormat(n.fieldPath)}function $l(n){return n instanceof ft?(function(e){if(e.op==="=="){if(It(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NAN"}};if(Ht(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(It(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NAN"}};if(Ht(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(e.field),op:ap(e.op),value:e.value}}})(n):n instanceof ne?(function(e){const r=e.getFilters().map((s=>$l(s)));return r.length===1?r[0]:{compositeFilter:{op:up(e.op),filters:r}}})(n):q(54877,{filter:n})}function cp(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function zl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Gl(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function Br(n,t){const e={fields:{}};return t.forEach(((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);e.fields[s]=r._toProto(n)})),{mapValue:e}}function Kl(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){return new Xm(n,!0)}/**
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
 */class Fo{constructor(t){this.value=t}isEqual(t){return this.value===t.value}}/**
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
 */class Bo{constructor(t,e){if(this.seconds=t,this.increment=e,!Number.isInteger(t)||t<0||t>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(t){return this.seconds===t.seconds&&this.increment===t.increment}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e=0){if(this.subtype=e,!Number.isInteger(e)||e<0||e>255)throw new D(x.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=t}static fromBase64String(t,e=0){try{return new Kt(at.fromBase64String(t),e)}catch(r){throw new D(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t,e=0){return new Kt(at.fromUint8Array(t),e)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(t){return this.subtype===t.subtype&&this._byteString.isEqual(t._byteString)}toJSON(){const t={type:Kt._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(t.subtype=this.subtype),t}static fromJSON(t){if(Wr(t,Kt._jsonSchema)){const e=t.subtype??0;return Kt.fromBase64String(t.bytes,e)}}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:lt("string",Kt._jsonSchemaVersion),bytes:lt("string"),subtype:{...lt("number"),optional:!0}};/**
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
 */class qo{constructor(t){this.stringValue=t,this.value=B.fromString(t)}isEqual(t){return!(!this.value.oe()||!t.value.oe())||this.value.compareTo(t.value)===0}toJSON(){return{kt:{stringValue:this.stringValue}}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function lp(){return new ui(oe)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t){this._methodName=t}}/**
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
 */class he{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:he._jsonSchemaVersion}}static fromJSON(t){if(Wr(t,he._jsonSchema))return new he(t.latitude,t.longitude)}}he._jsonSchemaVersion="firestore/geoPoint/1.0",he._jsonSchema={type:lt("string",he._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t){this.value=t}isEqual(t){return this.value===t.value}}/**
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
 */class ge{constructor(){this.type="MaxKey"}static instance(){return ge.MAX_KEY_VALUE_INSTANCE||(ge.MAX_KEY_VALUE_INSTANCE=new ge),ge.MAX_KEY_VALUE_INSTANCE}}ge.MAX_KEY_VALUE_INSTANCE=null;/**
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
 */class _e{constructor(){this.type="MinKey"}static instance(){return _e.MIN_KEY_VALUE_INSTANCE||(_e.MIN_KEY_VALUE_INSTANCE=new _e),_e.MIN_KEY_VALUE_INSTANCE}}_e.MIN_KEY_VALUE_INSTANCE=null;/**
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
 */class xt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
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
 */class we{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Wl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(xt.UNAUTHENTICATED)))}shutdown(){}}class fp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class dp{constructor(t){this.Qt=t,this.currentUser=xt.UNAUTHENTICATED,this.qt=0,this.forceRefresh=!1,this.auth=null}start(t,e){U(this.Kt===void 0,42304);let r=this.qt;const s=h=>this.qt!==r?(r=this.qt,e(h)):Promise.resolve();let i=new we;this.Kt=()=>{this.qt++,this.currentUser=this.$t(),i.resolve(),i=new we,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=i;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},u=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.Kt&&(this.auth.addAuthTokenListener(this.Kt),a())};this.Qt.onInit((h=>u(h))),setTimeout((()=>{if(!this.auth){const h=this.Qt.getImmediate({optional:!0});h?u(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new we)}}),0),a()}getToken(){const t=this.qt,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.qt!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string",31837,{Wt:r}),new Wl(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Kt&&this.auth.removeAuthTokenListener(this.Kt),this.Kt=void 0}$t(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string",2055,{Gt:t}),new xt(t)}}class mp{constructor(t,e,r){this.jt=t,this.zt=e,this.Ht=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.Jt=new Map}Yt(){return this.Ht?this.Ht():null}get headers(){this.Jt.set("X-Goog-AuthUser",this.jt);const t=this.Yt();return t&&this.Jt.set("Authorization",t),this.zt&&this.Jt.set("X-Goog-Iam-Authorization-Token",this.zt),this.Jt}}class pp{constructor(t,e,r){this.jt=t,this.zt=e,this.Ht=r}getToken(){return Promise.resolve(new mp(this.jt,this.zt,this.Ht))}start(t,e){t.enqueueRetryable((()=>e(xt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class lc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gp{constructor(t,e){this.Zt=e,this.forceRefresh=!1,this.appCheck=null,this.Xt=null,this.en=null,kd(t)&&t.settings.appCheckToken&&(this.en=t.settings.appCheckToken)}start(t,e){U(this.Kt===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.Xt;return this.Xt=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.Kt=i=>{t.enqueueRetryable((()=>r(i)))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Kt&&this.appCheck.addTokenListener(this.Kt)};this.Zt.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.Zt.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.en)return Promise.resolve(new lc(this.en));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(U(typeof e.token=="string",44558,{tokenResult:e}),this.Xt=e.token,new lc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Kt&&this.appCheck.removeTokenListener(this.Kt),this.Kt=void 0}}function Hl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */class _p{tn(t){}shutdown(){}}/**
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
 */const hc="ConnectivityMonitor";class fc{constructor(){this.nn=()=>this.rn(),this.sn=()=>this._n(),this.an=[],this.un()}tn(t){this.an.push(t)}shutdown(){window.removeEventListener("online",this.nn),window.removeEventListener("offline",this.sn)}un(){window.addEventListener("online",this.nn),window.addEventListener("offline",this.sn)}rn(){L(hc,"Network connectivity changed: AVAILABLE");for(const t of this.an)t(0)}_n(){L(hc,"Network connectivity changed: UNAVAILABLE");for(const t of this.an)t(1)}static cn(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vs=null;function mo(){return vs===null?vs=(function(){return 268435456+Math.round(2147483648*Math.random())})():vs++,"0x"+vs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="RestConnection",yp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Ep{get En(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.hn=e+"://"+t.host,this.Tn=`projects/${r}/databases/${s}`,this.Pn=this.databaseId.database===ks?`project_id=${r}`:`project_id=${r}&database_id=${s}`}In(t,e,r,s,i){const a=mo(),u=this.Rn(t,e.toUriEncodedString());L(Hi,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Tn,"x-goog-request-params":this.Pn};this.An(h,s,i);const{host:f}=new URL(u),m=$c(f);return this.Vn(t,u,h,r,m).then((p=>(L(Hi,`Received RPC '${t}' ${a}: `,p),p)),(p=>{throw ee(Hi,`RPC '${t}' ${a} failed with error: `,p,"url: ",u,"request:",r),p}))}fn(t,e,r,s,i,a){return this.In(t,e,r,s,i)}An(t,e,r){if(t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))t[s]=this.databaseInfo._customHeaders[s]}Rn(t,e){const r=yp[t];let s=`${this.hn}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class wp{constructor(t){this.dn=t.dn,this.mn=t.mn}pn(t){this.gn=t}yn(t){this.wn=t}bn(t){this.Sn=t}onMessage(t){this.xn=t}close(){this.mn()}send(t){this.dn(t)}vn(){this.gn()}Dn(){this.wn()}Cn(t){this.Sn(t)}Fn(t){this.xn(t)}}/**
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
 */const Pt="WebChannelConnection",hr=(n,t,e)=>{n.listen(t,(r=>{try{e(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Sn extends Ep{constructor(t){super(t),this.On=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static Mn(){if(!Sn.Nn){const t=Yc();hr(t,Xc.STAT_EVENT,(e=>{e.stat===no.PROXY?L(Pt,"STAT_EVENT: detected buffering proxy"):e.stat===no.NOPROXY&&L(Pt,"STAT_EVENT: detected no buffering proxy")})),Sn.Nn=!0}}Vn(t,e,r,s,i){const a=mo();return new Promise(((u,h)=>{const f=new Hc;f.setWithCredentials(!0),f.listenOnce(Qc.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case As.NO_ERROR:const p=f.getResponseJson();L(Pt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),u(p);break;case As.TIMEOUT:L(Pt,`RPC '${t}' ${a} timed out`),h(new D(x.DEADLINE_EXCEEDED,"Request time out"));break;case As.HTTP_ERROR:const w=f.getStatus();if(L(Pt,`RPC '${t}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const S=P==null?void 0:P.error;if(S&&S.status&&S.message){const M=(function(K){const X=K.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(X)>=0?X:x.UNKNOWN})(S.status);h(new D(M,S.message))}else h(new D(x.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new D(x.UNAVAILABLE,"Connection failed."));break;default:q(9055,{Bn:t,streamId:a,Ln:f.getLastErrorCode(),Un:f.getLastError()})}}finally{L(Pt,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);L(Pt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",m,r,15)}))}kn(t,e,r){const s=mo(),i=[this.hn,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.An(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=i.join("");L(Pt,`Creating RPC '${t}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.Qn(m);let p=!1,w=!1;const P=new wp({dn:S=>{w?L(Pt,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(p||(L(Pt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),p=!0),L(Pt,`RPC '${t}' stream ${s} sending:`,S),m.send(S))},mn:()=>m.close()});return hr(m,fr.EventType.OPEN,(()=>{w||(L(Pt,`RPC '${t}' stream ${s} transport opened.`),P.vn())})),hr(m,fr.EventType.CLOSE,(()=>{w||(w=!0,L(Pt,`RPC '${t}' stream ${s} transport closed`),P.Cn(),this.qn(m))})),hr(m,fr.EventType.ERROR,(S=>{w||(w=!0,ee(Pt,`RPC '${t}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),P.Cn(new D(x.UNAVAILABLE,"The operation could not be completed")))})),hr(m,fr.EventType.MESSAGE,(S=>{var M;if(!w){const k=S.data[0];U(!!k,16349);const K=k,X=(K==null?void 0:K.error)||((M=K[0])==null?void 0:M.error);if(X){L(Pt,`RPC '${t}' stream ${s} received error:`,X);const rt=X.status;let Nt=(function(v){const g=ht[v];if(g!==void 0)return Dl(g)})(rt),pt=X.message;rt==="NOT_FOUND"&&pt.includes("database")&&pt.includes("does not exist")&&pt.includes(this.databaseId.database)&&ee(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Nt===void 0&&(Nt=x.INTERNAL,pt="Unknown error status: "+rt+" with message "+X.message),w=!0,P.Cn(new D(Nt,pt)),m.close()}else L(Pt,`RPC '${t}' stream ${s} received:`,k),P.Fn(k)}})),Sn.Mn(),setTimeout((()=>{P.Dn()}),0),P}terminate(){this.On.forEach((t=>t.close())),this.On=[]}Qn(t){this.On.push(t)}qn(t){this.On=this.On.filter((e=>e===t))}An(t,e,r){super.An(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Jc()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n){return new Sn(n)}Sn.Nn=!1;class Ql{constructor(t,e,r=1e3,s=1.5,i=6e4){this.Kn=t,this.timerId=e,this.$n=r,this.Wn=s,this.Gn=i,this.jn=0,this.zn=null,this.Hn=Date.now(),this.reset()}reset(){this.jn=0}Jn(){this.jn=this.Gn}Yn(t){this.cancel();const e=Math.floor(this.jn+this.Zn()),r=Math.max(0,Date.now()-this.Hn),s=Math.max(0,e-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.jn} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.zn=this.Kn.enqueueAfterDelay(this.timerId,s,(()=>(this.Hn=Date.now(),t()))),this.jn*=this.Wn,this.jn<this.$n&&(this.jn=this.$n),this.jn>this.Gn&&(this.jn=this.Gn)}Xn(){this.zn!==null&&(this.zn.skipDelay(),this.zn=null)}cancel(){this.zn!==null&&(this.zn.cancel(),this.zn=null)}Zn(){return(Math.random()-.5)*this.jn}}/**
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
 */const dc="PersistentStream";class Xl{constructor(t,e,r,s,i,a,u,h){this.Kn=t,this.er=r,this.tr=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.nr=0,this.rr=null,this.ir=null,this.stream=null,this.sr=0,this._r=new Ql(t,e)}ar(){return this.state===1||this.state===5||this.ur()}ur(){return this.state===2||this.state===3}start(){this.sr=0,this.state!==4?this.auth():this.cr()}async stop(){this.ar()&&await this.close(0)}lr(){this.state=0,this._r.reset()}Er(){this.ur()&&this.rr===null&&(this.rr=this.Kn.enqueueAfterDelay(this.er,6e4,(()=>this.hr())))}Tr(t){this.Pr(),this.stream.send(t)}async hr(){if(this.ur())return this.close(0)}Pr(){this.rr&&(this.rr.cancel(),this.rr=null)}Ir(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this.Pr(),this.Ir(),this._r.cancel(),this.nr++,t!==4?this._r.reset():e&&e.code===x.RESOURCE_EXHAUSTED?(Ie(e.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this._r.Jn()):e&&e.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Rr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.bn(e)}Rr(){}auth(){this.state=1;const t=this.Ar(this.nr),e=this.nr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.nr===e&&this.Vr(r,s)}),(r=>{t((()=>{const s=new D(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.dr(s)}))}))}Vr(t,e){const r=this.Ar(this.nr);this.stream=this.mr(t,e),this.stream.pn((()=>{r((()=>this.listener.pn()))})),this.stream.yn((()=>{r((()=>(this.state=2,this.ir=this.Kn.enqueueAfterDelay(this.tr,1e4,(()=>(this.ur()&&(this.state=3),Promise.resolve()))),this.listener.yn())))})),this.stream.bn((s=>{r((()=>this.dr(s)))})),this.stream.onMessage((s=>{r((()=>++this.sr==1?this.pr(s):this.onNext(s)))}))}cr(){this.state=5,this._r.Yn((async()=>{this.state=0,this.start()}))}dr(t){return L(dc,`close with error: ${t}`),this.stream=null,this.close(4,t)}Ar(t){return e=>{this.Kn.enqueueAndForget((()=>this.nr===t?e():(L(dc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vp extends Xl{constructor(t,e,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}mr(t,e){return this.connection.kn("Listen",t,e)}pr(t){return this.onNext(t)}onNext(t){this._r.reset();const e=Jm(this.serializer,t),r=(function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?le(a.readTime):z.min()})(t);return this.listener.gr(e,r)}yr(t){const e={};e.database=fo(this.serializer),e.addTarget=(function(i,a){let u;const h=a.target;if(u=on(h)?{pipelineQuery:ip(i,h)}:Sl(h)?{documents:ep(i,h)}:{query:np(i,h).Lt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=lo(i,a.resumeToken);const f=co(i,a.expectedCount);f!==null&&(u.expectedCount=f)}else if(a.snapshotVersion.compareTo(z.min())>0){u.readTime=vr(i,a.snapshotVersion.toTimestamp());const f=co(i,a.expectedCount);f!==null&&(u.expectedCount=f)}return u})(this.serializer,t);const r=sp(this.serializer,t);r&&(e.labels=r),this.Tr(e)}wr(t){const e={};e.database=fo(this.serializer),e.removeTarget=t,this.Tr(e)}}class Ip extends Xl{constructor(t,e,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}get br(){return this.sr>0}start(){this.lastStreamToken=void 0,super.start()}Rr(){this.br&&this.Sr([])}mr(t,e){return this.connection.kn("Write",t,e)}pr(t){return U(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,U(!t.writeResults||t.writeResults.length===0,55816),this.listener.vr()}onNext(t){U(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this._r.reset();const e=tp(t.writeResults,t.commitTime),r=le(t.commitTime);return this.listener.Dr(r,e)}Cr(){const t={};t.database=fo(this.serializer),this.Tr(t)}Sr(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Zm(this.serializer,r)))};this.Tr(e)}}/**
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
 */class Ap{}class Vp extends Ap{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.Fr=!1}Or(){if(this.Fr)throw new D(x.FAILED_PRECONDITION,"The client has already been terminated.")}In(t,e,r,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.In(t,ho(e,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(x.UNKNOWN,i.toString())}))}fn(t,e,r,s,i){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.fn(t,ho(e,r),s,a,u,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(x.UNKNOWN,a.toString())}))}terminate(){this.Fr=!0,this.connection.terminate()}}function bp(n,t,e,r){return new Vp(n,t,e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="ComponentProvider",mc=new Map;function Pp(n,t,e,r,s){return new om(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Hl(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
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
 */const pc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yl=41943040;class Ut{static withCacheSize(t){return new Ut(t,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(Yl,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);/**
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
 */class ci{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.Mr(r),this.Nr=r=>e.writeSequenceNumber(r))}Mr(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.Nr&&this.Nr(t),t}}ci.Br=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function qn(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==xp)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,r)=>{e(t)}))}static reject(t){return new C(((e,r)=>{r(t)}))}static waitFor(t){return new C(((e,r)=>{let s=0,i=0,a=!1;t.forEach((u=>{++s,u.next((()=>{++i,a&&i===s&&e()}),(h=>r(h)))})),a=!0,i===s&&e()}))}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next((s=>s?C.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,i)=>{r.push(e.call(this,s,i))})),this.waitFor(r)}static mapArray(t,e){return new C(((r,s)=>{const i=t.length,a=new Array(i);let u=0;for(let h=0;h<i;h++){const f=h;e(t[f]).next((m=>{a[f]=m,++u,u===i&&r(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new C(((r,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):r()};i()}))}}function Sp(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="LruGarbageCollector",Np=1048576;function _c([n,t],[e,r]){const s=H(n,e);return s===0?H(t,r):s}class Dp{constructor(t){this.ai=t,this.buffer=new dt(_c),this.ui=0}ci(){return++this.ui}li(t){const e=[t,this.ci()];if(this.buffer.size<this.ai)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();_c(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Op{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ei=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.hi(6e4)}stop(){this.Ei&&(this.Ei.cancel(),this.Ei=null)}get started(){return this.Ei!==null}hi(t){L(gc,`Garbage collection scheduled in ${t}ms`),this.Ei=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ei=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){jn(e)?L(gc,"Ignoring IndexedDB error during garbage collection: ",e):await qn(e)}await this.hi(3e5)}))}}class kp{constructor(t,e){this.Ti=t,this.params=e}calculateTargetCount(t,e){return this.Ti.Pi(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return C.resolve(ci.Br);const r=new Dp(e);return this.Ti.forEachTarget(t,(s=>r.li(s.sequenceNumber))).next((()=>this.Ti.Ii(t,(s=>r.li(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Ti.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Ti.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(pc)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pc):this.Ri(t,e)))}getCacheSize(t){return this.Ti.getCacheSize(t)}Ri(t,e){let r,s,i,a,u,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s)))).next((p=>(r=p,u=Date.now(),this.removeTargets(t,r,e)))).next((p=>(i=p,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((p=>(f=Date.now(),In()<=J.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(h-u)+`ms
	Removed ${p} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Lp(n,t){return new kp(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="firestore.googleapis.com",yc=!0;class Ec{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jl,this.ssl=yc}else this.host=t.host,this.ssl=t.ssl??yc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t._customHeaders&&(this._customHeaders={...t._customHeaders}),t.cacheSizeBytes===void 0)this.cacheSizeBytes=Yl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Np)throw new D(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}if(rm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hl(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams,t.grpcFlowControlWindow!==void 0){if(typeof t.grpcFlowControlWindow!="number"||t.grpcFlowControlWindow<=0||t.grpcFlowControlWindow>2147483647||!Number.isInteger(t.grpcFlowControlWindow))throw new D(x.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=t.grpcFlowControlWindow}}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams&&this.grpcFlowControlWindow===t.grpcFlowControlWindow&&(function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),a=Object.keys(s);if(i.length!==a.length)return!1;for(const u of i)if(r[u]!==s[u])return!1;return!0})(this._customHeaders,t._customHeaders)}}let li=class{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ec({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ec(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new hp;switch(r.type){case"firstParty":return new pp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=mc.get(e);r&&(L(Rp,"Removing Datastore"),mc.delete(e),r.terminate())})(this),Promise.resolve()}};function Mp(n,t,e,r={}){var f;n=Bt(n,li);const s=$c(t),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;s&&Hf(`https://${u}`),i.host!==Jl&&i.host!==u&&ee("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...i,host:u,ssl:s,emulatorOptions:r};if(!Ds(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,p;if(typeof r.mockUserToken=="string")m=r.mockUserToken,p=xt.MOCK_USER;else{m=Bf(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new D(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new xt(w)}n._authCredentials=new fp(new Wl(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ye(this.firestore,t,this._query)}}class ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Le(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Wr(e,ot._jsonSchema))return new ot(t,r||null,new F(Z.fromString(e.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:lt("string",ot._jsonSchemaVersion),referencePath:lt("string")};class Le extends Ye{constructor(t,e,r){super(t,e,ii(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new F(t))}withConverter(t){return new Le(this.firestore,t,this._path)}}function Jy(n,t,...e){if(n=fe(n),el("collection","path",t),n instanceof li){const r=Z.fromString(t,...e);return qu(r),new Le(n,null,r)}{if(!(n instanceof ot||n instanceof Le))throw new D(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return qu(r),new Le(n.firestore,null,r)}}function Up(n,t,...e){if(n=fe(n),arguments.length===1&&(t=Vo.newId()),el("doc","path",t),n instanceof li){const r=Z.fromString(t,...e);return Bu(r),new ot(n,null,new F(r))}{if(!(n instanceof ot||n instanceof Le))throw new D(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Bu(r),new ot(n.firestore,n instanceof Le?n.converter:null,new F(r))}}/**
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
 */class zo{constructor(t,e){this.pattern=t,this.options=e}isEqual(t){return this.pattern===t.pattern&&this.options===t.options}}/**
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
 */class qt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Wr(t,qt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new qt(t.vectorValues);throw new D(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qt._jsonSchemaVersion="firestore/vectorValue/1.0",qt._jsonSchema={type:lt("string",qt._jsonSchemaVersion),vectorValues:lt("object")};/**
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
 */const Fp=/^__.*__$/;class Bp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Xe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Qr(t,this.data,e,this.fieldTransforms)}}class Zl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Xe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function th(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{dataSource:n})}}class Go{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Go({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Hs(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(th(this.dataSource)&&Fp.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class qp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ai(t)}createContext(t,e,r,s=!1){return new Go({dataSource:t,methodName:e,targetDoc:r,path:Qt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ko(n){const t=n._freezeSettings(),e=ai(n._databaseId);return new qp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function jp(n,t,e,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,t,e,s);Wo("Data must be an object, but it was:",a,r);const u=eh(r,a);let h,f;if(i.merge)h=new Wt(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const w=Mn(t,p,e);if(!a.contains(w))throw new D(x.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);ih(m,w)||m.push(w)}h=new Wt(m),f=a.fieldTransforms.filter((p=>h.covers(p.field)))}else h=null,f=a.fieldTransforms;return new Bp(new Lt(u),h,f)}class hi extends jo{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof hi}}function $p(n,t,e,r){const s=n.createContext(1,t,e);Wo("Data must be an object, but it was:",s,r);const i=[],a=Lt.empty();Qe(r,((h,f)=>{const m=sh(t,h,e);f=fe(f);const p=s.childContextForFieldPath(m);if(f instanceof hi)i.push(m);else{const w=$e(f,p);w!=null&&(i.push(m),a.set(m,w))}}));const u=new Wt(i);return new Zl(a,u,s.fieldTransforms)}function zp(n,t,e,r,s,i){const a=n.createContext(1,t,e),u=[Mn(t,r,e)],h=[s];if(i.length%2!=0)throw new D(x.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)u.push(Mn(t,i[w])),h.push(i[w+1]);const f=[],m=Lt.empty();for(let w=u.length-1;w>=0;--w)if(!ih(f,u[w])){const P=u[w];let S=h[w];S=fe(S);const M=a.childContextForFieldPath(P);if(S instanceof hi)f.push(P);else{const k=$e(S,M);k!=null&&(f.push(P),m.set(P,k))}}const p=new Wt(f);return new Zl(m,p,a.fieldTransforms)}function Gp(n,t,e,r=!1){return $e(e,n.createContext(r?4:3,t))}function $e(n,t,e){if(rh(n=fe(n)))return Wo("Unsupported field value:",t,n),eh(n,t);if(n instanceof jo)return(function(s,i){if(!th(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(s,i){const a=[];let u=0;for(const h of s){let f=$e(h,i.childContextForArray(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}})(n,t)}return(function(s,i,a){if((s=fe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return No(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=tt.fromDate(s);return{timestampValue:vr(i.serializer,u)}}if(s instanceof tt){const u=new tt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:vr(i.serializer,u)}}if(nh(s)){const u=tt.fromInstant(s),h=new tt(u.seconds,1e3*Math.floor(u.nanoseconds/1e3));return{timestampValue:vr(i.serializer,h)}}if(s instanceof he)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Kt)return s.subtype===0?{bytesValue:lo(i.serializer,s._byteString)}:(function(h,f){const m=f.toUint8Array(),p=new Uint8Array(m.length+1);return p[0]=f.subtype,p.set(m,1),{mapValue:{fields:{[ni]:{bytesValue:lo(h,at.fromUint8Array(p))}}}}})(i.serializer,s);if(s instanceof ot){const u=i.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw i.createError(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Uo(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof qt)return(function(h,f){const m=h instanceof qt?h.toArray():h;return{mapValue:{fields:{[Po]:{stringValue:xo},[Sr]:{arrayValue:{values:m.map((w=>{if(typeof w!="number")throw f.createError("VectorValues must only contain numeric values.");return So(f.serializer,w)}))}}}}}})(s,i);if(s instanceof zo)return(function(h){return{mapValue:{fields:{[Oe]:{mapValue:{fields:{[Ls]:{stringValue:h.pattern},[Ms]:{stringValue:h.options}}}}}}}})(s);if(s instanceof Fo)return(function(h){return{mapValue:{fields:{[Nr]:{stringValue:h.value}}}}})(s);if(s instanceof $o)return(function(h){return{mapValue:{fields:{[gn]:Cn(h.value)}}}})(s);if(s instanceof qo)return(function(h){return{mapValue:{fields:{[Be]:{stringValue:h.stringValue}}}}})(s);if(s instanceof Bo)return(function(h){return{mapValue:{fields:{[an]:{mapValue:{fields:{[Us]:Cn(h.seconds),[Fs]:Cn(h.increment)}}}}}}})(s);if(s instanceof _e)return(function(){return{mapValue:{fields:{[al]:{nullValue:"NULL_VALUE"}}}}})();if(s instanceof ge)return(function(){return{mapValue:{fields:{[Co]:{nullValue:"NULL_VALUE"}}}}})();if(Gl(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${ti(s)}`)})(n,t)}function eh(n,t){const e={};return tl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qe(n,((r,s)=>{const i=$e(s,t.childContextForField(r));i!=null&&(e[r]=i)})),{mapValue:{fields:e}}}function nh(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const t=n;return t[Symbol.toStringTag]==="Temporal.Instant"&&typeof t.t=="bigint"}function rh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof he||n instanceof Kt||n instanceof ot||n instanceof jo||n instanceof qt||n instanceof _e||n instanceof ge||n instanceof $o||n instanceof qo||n instanceof zo||n instanceof Fo||n instanceof Bo||nh(n)||Gl(n))}function Wo(n,t,e){if(!rh(e)||!Kr(e)){const r=ti(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Mn(n,t,e){if((t=fe(t))instanceof ui)return t._internalPath;if(typeof t=="string")return sh(n,t);throw Hs("Field path arguments must be of type string or ",n,!1,void 0,e)}const Kp=new RegExp("[~\\*/\\[\\]]");function sh(n,t,e){if(t.search(Kp)>=0)throw Hs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ui(...t.split("."))._internalPath}catch{throw Hs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Hs(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(i||a)&&(h+=" (found",i&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new D(x.INVALID_ARGUMENT,u+n+h)}function ih(n,t){return n.some((e=>e.isEqual(t)))}function oh(n){return typeof n._readUserData=="function"}/**
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
 */class St{constructor(t){this.optionDefinitions=t}_getKnownOptions(t,e){const r=Lt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in t){const a=t[s];let u;i.nestedOptions&&Kr(a)?u={mapValue:{fields:new St(i.nestedOptions).getOptionsProto(e,a)}}:a&&(u=$e(a,e)??void 0),u&&r.set(Qt.fromServerFormat(i.serverName),u)}}return r}getOptionsProto(t,e,r){const s=this._getKnownOptions(e,t);if(r){const i=new Map(nm(r,((a,u)=>[Qt.fromServerFormat(u),a!==void 0?$e(a,t):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function Wp(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(e){return typeof e=="object"&&e!==null&&"seconds"in e&&(e.seconds===null||typeof e.seconds=="number"||typeof e.seconds=="string")&&"nanos"in e&&(e.nanos===null||typeof e.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(e){return typeof e=="object"&&e!==null&&"latitude"in e&&(e.latitude===null||typeof e.latitude=="number")&&"longitude"in e&&(e.longitude===null||typeof e.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(e){return typeof e=="object"&&e!==null&&!(!("values"in e)||e.values!==null&&!Array.isArray(e.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(e){return typeof e=="object"&&e!==null&&!(!("fields"in e)||e.fields!==null&&!Kr(e.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(e){return typeof e=="object"&&e!==null&&!(!("name"in e)||e.name!==null&&typeof e.name!="string"||!("args"in e)||e.args!==null&&!Array.isArray(e.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(e){return typeof e=="object"&&e!==null&&!(!("stages"in e)||e.stages!==null&&!Array.isArray(e.stages))})(n.pipelineValue)))}function Hp(n){return new qt(n)}/**
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
 */function N(n){let t;return n instanceof yn?n:(t=Kr(n)?Zp(n):n instanceof Array?tg(n):ah(n,void 0),t)}function Qi(n){if(n instanceof yn)return n;if(n instanceof qt)return qr(n);if(Array.isArray(n))return qr(Hp(n));throw new Error("Unsupported value: "+typeof n)}function Ho(n){return cm(n)?Cs(n):N(n)}class yn{constructor(){this._protoValueType="ProtoValue"}add(t){return new R("add",[this,N(t)],"add")}asBoolean(){if(this instanceof ze)return this;if(this instanceof zn)return new ch(this);if(this instanceof $n)return new Jp(this);if(this instanceof R)return new uh(this);throw new D("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(t){return new R("subtract",[this,N(t)],"subtract")}multiply(t){return new R("multiply",[this,N(t)],"multiply")}divide(t){return new R("divide",[this,N(t)],"divide")}mod(t){return new R("mod",[this,N(t)],"mod")}equal(t){return new R("equal",[this,N(t)],"equal").asBoolean()}notEqual(t){return new R("not_equal",[this,N(t)],"notEqual").asBoolean()}lessThan(t){return new R("less_than",[this,N(t)],"lessThan").asBoolean()}lessThanOrEqual(t){return new R("less_than_or_equal",[this,N(t)],"lessThanOrEqual").asBoolean()}greaterThan(t){return new R("greater_than",[this,N(t)],"greaterThan").asBoolean()}greaterThanOrEqual(t){return new R("greater_than_or_equal",[this,N(t)],"greaterThanOrEqual").asBoolean()}arrayConcat(t,...e){const r=[t,...e].map((s=>N(s)));return new R("array_concat",[this,...r],"arrayConcat")}arrayContains(t){return new R("array_contains",[this,N(t)],"arrayContains").asBoolean()}arrayContainsAll(t){const e=Array.isArray(t)?new pr(t.map(N),"arrayContainsAll"):t;return new R("array_contains_all",[this,e],"arrayContainsAll").asBoolean()}arrayContainsAny(t){const e=Array.isArray(t)?new pr(t.map(N),"arrayContainsAny"):t;return new R("array_contains_any",[this,e],"arrayContainsAny").asBoolean()}arrayReverse(){return new R("array_reverse",[this])}arrayLength(){return new R("array_length",[this],"arrayLength")}equalAny(t){const e=Array.isArray(t)?new pr(t.map(N),"equalAny"):t;return new R("equal_any",[this,e],"equalAny").asBoolean()}notEqualAny(t){const e=Array.isArray(t)?new pr(t.map(N),"notEqualAny"):t;return new R("not_equal_any",[this,e],"notEqualAny").asBoolean()}exists(){return new R("exists",[this],"exists").asBoolean()}charLength(){return new R("char_length",[this],"charLength")}like(t){return new R("like",[this,N(t)],"like").asBoolean()}regexContains(t){return new R("regex_contains",[this,N(t)],"regexContains").asBoolean()}regexFind(t){return new R("regex_find",[this,N(t)],"regexFind")}regexFindAll(t){return new R("regex_find_all",[this,N(t)],"regexFindAll")}regexMatch(t){return new R("regex_match",[this,N(t)],"regexMatch").asBoolean()}stringContains(t){return new R("string_contains",[this,N(t)],"stringContains").asBoolean()}startsWith(t){return new R("starts_with",[this,N(t)],"startsWith").asBoolean()}endsWith(t){return new R("ends_with",[this,N(t)],"endsWith").asBoolean()}toLower(){return new R("to_lower",[this],"toLower")}toUpper(){return new R("to_upper",[this],"toUpper")}trim(t){const e=[this];return t&&e.push(N(t)),new R("trim",e,"trim")}ltrim(t){const e=[this];return t&&e.push(N(t)),new R("ltrim",e,"ltrim")}rtrim(t){const e=[this];return t&&e.push(N(t)),new R("rtrim",e,"rtrim")}type(){return new R("type",[this])}isType(t){return new R("is_type",[this,qr(t)],"isType").asBoolean()}stringConcat(t,...e){const r=[t,...e].map(N);return new R("string_concat",[this,...r],"stringConcat")}stringIndexOf(t){return new R("string_index_of",[this,N(t)],"stringIndexOf")}stringRepeat(t){return new R("string_repeat",[this,N(t)],"stringRepeat")}stringReplaceAll(t,e){return new R("string_replace_all",[this,N(t),N(e)],"stringReplaceAll")}stringReplaceOne(t,e){return new R("string_replace_one",[this,N(t),N(e)],"stringReplaceOne")}concat(t,...e){const r=[t,...e].map(N);return new R("concat",[this,...r],"concat")}reverse(){return new R("reverse",[this],"reverse")}arrayFilter(t,e){return new R("array_filter",[this,N(t),e],"arrayFilter")}arrayTransform(t,e){return new R("array_transform",[this,N(t),e],"arrayTransform")}arrayTransformWithIndex(t,e,r){return new R("array_transform",[this,N(t),N(e),r],"arrayTransformWithIndex")}arraySlice(t,e){const r=[this,N(t)];return e!==void 0&&r.push(N(e)),new R("array_slice",r,"arraySlice")}arrayFirst(){return new R("array_first",[this],"arrayFirst")}arrayFirstN(t){return new R("array_first_n",[this,N(t)],"arrayFirstN")}arrayLast(){return new R("array_last",[this],"arrayLast")}arrayLastN(t){return new R("array_last_n",[this,N(t)],"arrayLastN")}arrayMaximum(){return new R("maximum",[this],"arrayMaximum")}arrayMaximumN(t){return new R("maximum_n",[this,N(t)],"arrayMaximumN")}arrayMinimum(){return new R("minimum",[this],"arrayMinimum")}arrayMinimumN(t){return new R("minimum_n",[this,N(t)],"arrayMinimumN")}arrayIndexOf(t){return new R("array_index_of",[this,N(t),N("first")],"arrayIndexOf")}arrayLastIndexOf(t){return new R("array_index_of",[this,N(t),N("last")],"arrayLastIndexOf")}arrayIndexOfAll(t){return new R("array_index_of_all",[this,N(t)],"arrayIndexOfAll")}byteLength(){return new R("byte_length",[this],"byteLength")}ceil(){return new R("ceil",[this])}floor(){return new R("floor",[this])}abs(){return new R("abs",[this])}exp(){return new R("exp",[this])}mapGet(t){return new R("map_get",[this,qr(t)],"mapGet")}mapSet(t,e,...r){const s=[this,N(t),N(e),...r.map(N)];return new R("map_set",s,"mapSet")}mapKeys(){return new R("map_keys",[this],"mapKeys")}mapValues(){return new R("map_values",[this],"mapValues")}mapEntries(){return new R("map_entries",[this],"mapEntries")}getField(t){return new R("get_field",[this,N(t)],"get_field")}count(){return Gt._create("count",[this],"count")}sum(){return Gt._create("sum",[this],"sum")}average(){return Gt._create("average",[this],"average")}minimum(){return Gt._create("minimum",[this],"minimum")}maximum(){return Gt._create("maximum",[this],"maximum")}first(){return Gt._create("first",[this],"first")}last(){return Gt._create("last",[this],"last")}arrayAgg(){return Gt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Gt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Gt._create("count_distinct",[this],"countDistinct")}logicalMaximum(t,...e){const r=[t,...e];return new R("maximum",[this,...r.map(N)],"logicalMaximum")}logicalMinimum(t,...e){const r=[t,...e];return new R("minimum",[this,...r.map(N)],"minimum")}vectorLength(){return new R("vector_length",[this],"vectorLength")}cosineDistance(t){return new R("cosine_distance",[this,Qi(t)],"cosineDistance")}dotProduct(t){return new R("dot_product",[this,Qi(t)],"dotProduct")}euclideanDistance(t){return new R("euclidean_distance",[this,Qi(t)],"euclideanDistance")}unixMicrosToTimestamp(){return new R("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new R("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new R("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new R("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new R("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new R("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(t,e){return new R("timestamp_add",[this,N(t),N(e)],"timestampAdd")}timestampSubtract(t,e){return new R("timestamp_subtract",[this,N(t),N(e)],"timestampSubtract")}timestampDiff(t,e){return new R("timestamp_diff",[this,Ho(t),N(e)],"timestampDiff")}timestampExtract(t,e){const r=[this,N(t)];return e&&r.push(N(e)),new R("timestamp_extract",r,"timestampExtract")}documentId(){return new R("document_id",[this],"documentId")}parent(){return new R("parent",[this],"parent")}substring(t,e){const r=N(t);return new R("substring",e===void 0?[this,r]:[this,r,N(e)],"substring")}arrayGet(t){return new R("array_get",[this,N(t)],"arrayGet")}isError(){return new R("is_error",[this],"isError").asBoolean()}ifError(t){const e=new R("if_error",[this,N(t)],"ifError");return t instanceof ze?e.asBoolean():e}isAbsent(){return new R("is_absent",[this],"isAbsent").asBoolean()}mapRemove(t){return new R("map_remove",[this,N(t)],"mapRemove")}mapMerge(t,...e){const r=N(t),s=e.map(N);return new R("map_merge",[this,r,...s],"mapMerge")}pow(t){return new R("pow",[this,N(t)])}trunc(t){return t===void 0?new R("trunc",[this]):new R("trunc",[this,N(t)],"trunc")}round(t){return t===void 0?new R("round",[this]):new R("round",[this,N(t)],"round")}collectionId(){return new R("collection_id",[this])}length(){return new R("length",[this])}ln(){return new R("ln",[this])}sqrt(){return new R("sqrt",[this])}stringReverse(){return new R("string_reverse",[this])}ifAbsent(t){return new R("if_absent",[this,N(t)],"ifAbsent")}ifNull(t){return new R("if_null",[this,N(t)],"ifNull")}coalesce(t,...e){return new R("coalesce",[this,N(t),...e.map(N)],"coalesce")}join(t){return new R("join",[this,N(t)],"join")}log10(){return new R("log10",[this])}arraySum(){return new R("sum",[this])}split(t){return new R("split",[this,N(t)])}timestampTruncate(t,e){const r=[this,N(t)];return e&&r.push(N(e)),new R("timestamp_trunc",r)}ascending(){return eg(this)}descending(){return ng(this)}as(t){return new Xp(this,t,"as")}}class Gt{constructor(t,e){this.name=t,this.params=e,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(t,e,r){const s=new Gt(t,e);return s._methodName=r,s}as(t){return new Qp(this,t,"as")}_toProto(t){return{functionValue:{name:this.name,args:this.params.map((e=>e._toProto(t)))}}}_readUserData(t){t=this._methodName?t.contextWith({methodName:this._methodName}):t,this.params.forEach((e=>e._readUserData(t)))}}class Qp{constructor(t,e,r){this.aggregate=t,this.alias=e,this._methodName=r}_readUserData(t){this.aggregate._readUserData(t)}}class Xp{constructor(t,e,r){this.expr=t,this.alias=e,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(t){this.expr._readUserData(t)}}class pr extends yn{constructor(t,e){super(),this.fi=t,this._methodName=e,this.expressionType="ListOfExpressions"}_toProto(t){return{arrayValue:{values:this.fi.map((e=>e._toProto(t)))}}}_readUserData(t){this.fi.forEach((e=>e._readUserData(t)))}}class $n extends yn{constructor(t,e){super(),this.fieldPath=t,this._methodName=e,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(t){return new R("geo_distance",[this,N(t)],"geoDistance")}_toProto(t){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(t){}}function Cs(n){return Yp(n,"field")}function Yp(n,t){return new $n(typeof n=="string"?oe===n?lp()._internalPath:Mn("field",n):n._internalPath,t)}class zn extends yn{constructor(t,e){super(),this.value=t,this._methodName=e,this.expressionType="Constant"}static _fromProto(t){const e=new zn(t,void 0);return e._protoValue=t,e}_toProto(t){return U(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(t){t=this._methodName?t.contextWith({methodName:this._methodName}):t,Wp(this._protoValue)||(this._protoValue=$e(this.value,t))}}function qr(n,t){return ah(n,"constant")}function ah(n,t){const e=new zn(n,t);return typeof n=="boolean"?new ch(e):e}class R extends yn{constructor(t,e,r,s){super(),this.name=t,this.params=e,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new St({})}_toProto(t){const e={functionValue:{name:this.name,args:this.params.map((r=>r._toProto(t)))}};return this._optionsProto&&(e.functionValue.options=this._optionsProto),e}_readUserData(t){t=this._methodName?t.contextWith({methodName:this._methodName}):t,this.params.forEach((e=>e._readUserData(t))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(t,this._options))}}class ze extends yn{get _methodName(){return this._expr._methodName}countIf(){return Gt._create("count_if",[this],"countIf")}not(){return new R("not",[this],"not").asBoolean()}conditional(t,e){return new R("conditional",[this,t,e],"conditional")}ifError(t){const e=N(t),r=new R("if_error",[this,e],"ifError");return e instanceof ze?r.asBoolean():r}_toProto(t){return this._expr._toProto(t)}_readUserData(t){this._expr._readUserData(t)}}class uh extends ze{constructor(t){super(),this._expr=t,this.expressionType="Function"}}class ch extends ze{constructor(t){super(),this._expr=t,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Jp extends ze{constructor(t){super(),this._expr=t,this.expressionType="Field"}}function Zp(n,t){const e=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];e.push(qr(r)),e.push(N(s))}return new R("map",e,"map")}function tg(n){return(function(e,r){return new R("array",e.map((s=>N(s))),r)})(n,"array")}function eg(n){return new lh(Ho(n),"ascending","ascending")}function ng(n){return new lh(Ho(n),"descending","descending")}class lh{constructor(t,e,r){this.expr=t,this.direction=e,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(t){return{mapValue:{fields:{direction:Kl(this.direction),expression:this.expr._toProto(t)}}}}_readUserData(t){this.expr._readUserData(t)}}/**
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
 */class Xt{constructor(t){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=t}_readUserData(t){this.optionsProto=this._optionsUtil.getOptionsProto(t,this.knownOptions,this.rawOptions)}_toProto(t){return{name:this._name,options:this.optionsProto}}}class hh extends Xt{get _name(){return"add_fields"}get _optionsUtil(){return new St({})}constructor(t,e){super(e),this.fields=t}_toProto(t){return{...super._toProto(t),args:[Br(t,this.fields)]}}_readUserData(t){super._readUserData(t),Ge(this.fields,t)}}class fh extends Xt{get _name(){return"aggregate"}get _optionsUtil(){return new St({})}constructor(t,e,r){super(r),this.groups=t,this.accumulators=e}_toProto(t){return{...super._toProto(t),args:[Br(t,this.accumulators),Br(t,this.groups)]}}_readUserData(t){super._readUserData(t),Ge(this.groups,t),Ge(this.accumulators,t)}}class dh extends Xt{get _name(){return"distinct"}get _optionsUtil(){return new St({})}constructor(t,e){super(e),this.groups=t}_toProto(t){return{...super._toProto(t),args:[Br(t,this.groups)]}}_readUserData(t){super._readUserData(t),Ge(this.groups,t)}}class fi extends Xt{get _name(){return"collection"}get _optionsUtil(){return new St({forceIndex:{serverName:"force_index"}})}constructor(t,e){super(e),this.pi=t.startsWith("/")?t:"/"+t}_toProto(t){return{...super._toProto(t),args:[{referenceValue:this.pi}]}}_readUserData(t){super._readUserData(t)}}class di extends Xt{get _name(){return"collection_group"}get _optionsUtil(){return new St({forceIndex:{serverName:"force_index"}})}constructor(t,e){super(e),this.collectionId=t}_toProto(t){return{...super._toProto(t),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(t){super._readUserData(t)}}class Qo extends Xt{get _name(){return"database"}get _optionsUtil(){return new St({})}_toProto(t){return{...super._toProto(t)}}_readUserData(t){super._readUserData(t)}}class Xo extends Xt{get _name(){return"documents"}get _optionsUtil(){return new St({})}constructor(t,e){if(super(e),!t||t.length===0)throw new D(x.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=t.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(r);if(s.size!==r.length)throw new D(x.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.gi=r,this.yi=s}_toProto(t){return{...super._toProto(t),args:this.gi.map((e=>({referenceValue:e})))}}_readUserData(t){super._readUserData(t)}}class mi extends Xt{get _name(){return"where"}get _optionsUtil(){return new St({})}constructor(t,e){super(e),this.condition=t}_toProto(t){return{...super._toProto(t),args:[this.condition._toProto(t)]}}_readUserData(t){super._readUserData(t),Ge(this.condition,t)}}class pn extends Xt{get _name(){return"limit"}get _optionsUtil(){return new St({})}constructor(t,e){U(!isNaN(t)&&t!==1/0&&t!==-1/0,34860),super(e),this.limit=t}_toProto(t){return{...super._toProto(t),args:[No(t,this.limit)]}}}class wc extends Xt{get _name(){return"offset"}get _optionsUtil(){return new St({})}constructor(t,e){super(e),this.offset=t}_toProto(t){return{...super._toProto(t),args:[No(t,this.offset)]}}}class rg extends Xt{get _name(){return"select"}get _optionsUtil(){return new St({})}constructor(t,e){super(e),this.selections=t}_toProto(t){return{...super._toProto(t),args:[Br(t,this.selections)]}}_readUserData(t){super._readUserData(t),Ge(this.selections,t)}}class ye extends Xt{get _name(){return"sort"}get _optionsUtil(){return new St({})}constructor(t,e){super(e),this.orderings=t}_toProto(t){return{...super._toProto(t),args:this.orderings.map((e=>e._toProto(t)))}}_readUserData(t){super._readUserData(t),Ge(this.orderings,t)}}class Yo extends Xt{get _name(){return"replace_with"}get _optionsUtil(){return new St({})}constructor(t,e){super(e),this.map=t}_toProto(t){return{...super._toProto(t),args:[this.map._toProto(t),Kl(Yo.wi)]}}_readUserData(t){super._readUserData(t),Ge(this.map,t)}}Yo.wi="full_replace";function Ge(n,t){return oh(n)?n._readUserData(t):Array.isArray(n)?n.forEach((e=>e._readUserData(t))):n instanceof Map?n.forEach((e=>e._readUserData(t))):Object.values(n).forEach((e=>e._readUserData(t))),n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,r,s){this._db=t,this.userDataReader=e,this._userDataWriter=r,this.stages=s}xi(t,e){const r=this.userDataReader.createContext(3,t);return oh(e)?e._readUserData(r):Array.isArray(e)?e.forEach((s=>s._readUserData(r))):e.forEach((s=>s._readUserData(r))),e}where(t){const e=this.stages.map((r=>r));return this.xi("where",t),e.push(new mi(t,{})),new Ir(this._db,this.userDataReader,this._userDataWriter,e)}limit(t){const e=this.stages.map((r=>r));return e.push(new pn(t,{})),new Ir(this._db,this.userDataReader,this._userDataWriter,e)}sort(t,...e){const r=this.stages.map((s=>s));return"orderings"in t?r.push(new ye(this.xi("sort",t.orderings),{})):r.push(new ye(this.xi("sort",[t,...e]),{})),new Ir(this._db,this.userDataReader,this._userDataWriter,r)}Di(t){return{pipeline:{stages:this.stages.map((e=>e._toProto(t)))}}}}// Copyright 2024 Google LLC* @license
class kt{constructor(t,e,r){this.serializer=t,this.stages=e,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return pi(this)}getPipelineCollectionGroup(){return Jo(this)}getPipelineCollectionId(){return sg(this)}getPipelineDocuments(){return po(this)}getPipelineFlavor(){return(function(e){let r="exact";return e.stages.forEach(((s,i)=>{s._name!==dh.name&&s._name!==fh.name||(r="keyless"),s._name===rg.name&&r==="exact"&&(r="augmented"),s._name===hh.name&&i<e.stages.length-1&&r==="exact"&&(r="augmented")})),r})(this)}getPipelineSourceType(){return Me(this)}}function Me(n){const t=n.stages[0];return t instanceof fi||t instanceof di||t instanceof Qo||t instanceof Xo?t._name:"unknown"}function pi(n){if(Me(n)==="collection")return n.stages[0].pi}function Jo(n){if(Me(n)==="collection_group")return n.stages[0].collectionId}function sg(n){switch(Me(n)){case"collection":return Z.fromString(pi(n)).lastSegment();case"collection_group":return Jo(n);default:return}}function po(n){if(Me(n)==="documents")return n.stages[0].gi}class E{constructor(t,e){this.type=t,this.value=e}static Ci(){return new E("ERROR",void 0)}static Fi(){return new E("UNSET",void 0)}static Oi(){return new E("NULL",On)}static newValue(t){return Ht(t)?new E("NULL",On):(function(r){return!!r&&"booleanValue"in r})(t)?new E("BOOLEAN",t):ae(t)?new E("INT",t):ue(t)?new E("DOUBLE",t):(function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue})(t)?new E("TIMESTAMP",t):(function(r){return!!r&&"stringValue"in r})(t)?new E("STRING",t):(function(r){return!!r&&"bytesValue"in r})(t)?new E("BYTES",t):t.referenceValue?new E("REFERENCE",t):t.geoPointValue?new E("GEO_POINT",t):Ln(t)?new E("ARRAY",t):io(t)?new E("VECTOR",t):un(t)?new E("MAP",t):new E("ERROR",void 0)}Mi(){return this.type==="ERROR"||this.type==="UNSET"}Ni(){return this.type==="NULL"}}function Ar(n){if(!n.Mi())return n.value}function mh(n){return n instanceof ze?n._expr:n}function $(n){if((n=mh(n))instanceof $n)return new ig(n);if(n instanceof zn)return new og(n);if(n instanceof pr)return new ag(n);if(n instanceof R){if(n.name==="add")return new lg(n);if(n.name==="subtract")return new hg(n);if(n.name==="multiply")return new fg(n);if(n.name==="divide")return new dg(n);if(n.name==="mod")return new mg(n);if(n.name==="and")return new pg(n);if(n.name==="equal")return new Rg(n);if(n.name==="not_equal")return new Pg(n);if(n.name==="less_than")return new xg(n);if(n.name==="less_than_or_equal")return new Cg(n);if(n.name==="greater_than")return new Sg(n);if(n.name==="greater_than_or_equal")return new Ng(n);if(n.name==="array_concat")return new Dg(n);if(n.name==="array_reverse")return new Og(n);if(n.name==="array_contains")return new kg(n);if(n.name==="array_contains_all")return new Lg(n);if(n.name==="array_contains_any")return new Mg(n);if(n.name==="array_length")return new Ug(n);if(n.name==="array_element")return new Fg(n);if(n.name==="equal_any")return new ph(n);if(n.name==="not_equal_any")return new _g(n);if(n.name==="is_nan")return new yg(n);if(n.name==="is_not_nan")return new Eg(n);if(n.name==="is_null")return new wg(n);if(n.name==="is_not_null")return new Tg(n);if(n.name==="is_error")return new vg(n);if(n.name==="exists")return new Ig(n);if(n.name==="not")return new gi(n);if(n.name==="or")return new gg(n);if(n.name==="xor")return new Zo(n);if(n.name==="conditional")return new Ag(n);if(n.name==="maximum")return new Vg(n);if(n.name==="minimum")return new bg(n);if(n.name==="reverse")return new Bg(n);if(n.name==="replace_first")return new qg(n);if(n.name==="replace_all")return new jg(n);if(n.name==="char_length")return new $g(n);if(n.name==="byte_length")return new zg(n);if(n.name==="like")return new Gg(n);if(n.name==="regex_contains")return new Kg(n);if(n.name==="regex_match")return new Wg(n);if(n.name==="string_contains")return new Hg(n);if(n.name==="starts_with")return new Qg(n);if(n.name==="ends_with")return new Xg(n);if(n.name==="to_lower")return new Yg(n);if(n.name==="to_upper")return new Jg(n);if(n.name==="trim")return new Zg(n);if(n.name==="string_concat")return new t_(n);if(n.name==="map_get")return new e_(n);if(n.name==="cosine_distance")return new n_(n);if(n.name==="dot_product")return new r_(n);if(n.name==="euclidean_distance")return new s_(n);if(n.name==="vector_length")return new i_(n);if(n.name==="unix_micros_to_timestamp")return new l_(n);if(n.name==="timestamp_to_unix_micros")return new d_(n);if(n.name==="unix_millis_to_timestamp")return new h_(n);if(n.name==="timestamp_to_unix_millis")return new m_(n);if(n.name==="unix_seconds_to_timestamp")return new f_(n);if(n.name==="timestamp_to_unix_seconds")return new p_(n);if(n.name==="timestamp_add")return new g_(n);if(n.name==="timestamp_subtract")return new __(n)}throw new Error(`Unknown Expr : ${n}`)}class ig{constructor(t){this.expr=t}evaluate(t,e){if(this.expr.fieldName===oe)return E.newValue({referenceValue:Ws(t.serializer,e.key)});if(this.expr.fieldName==="__update_time__")return E.newValue({timestampValue:xs(t.serializer,e.version)});if(this.expr.fieldName==="__create_time__")return E.newValue({timestampValue:xs(t.serializer,e.createTime)});const r=e.data.field(this.expr._fieldPath);return r?bo(r)?E.newValue((function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:xs(i.serializer,z.fromTimestamp(Dn(a)))};if(i.serverTimestampBehavior==="previous"){const u=Hr(a);if(u)return u}return{nullValue:"NULL_VALUE"}})(t,r)):E.newValue(r):E.Fi()}}class og{constructor(t){this.expr=t}evaluate(t,e){return E.newValue(this.expr._getValue())}}class ag{constructor(t){this.expr=t}evaluate(t,e){const r=this.expr.fi.map((s=>$(s).evaluate(t,e)));return r.some((s=>s.Mi()))?E.Ci():E.newValue({arrayValue:{values:r.map((s=>s.value))}})}}function bt(n){return ue(n)?Number(n.doubleValue):Number(n.integerValue)}function de(n){return BigInt(n.integerValue)}const ug=BigInt("0x7fffffffffffffff"),cg=-BigInt("0x8000000000000000");class Zr{constructor(t){this.expr=t}evaluate(t,e){U(this.expr.params.length>=2,24778);const r=$(this.expr.params[0]).evaluate(t,e),s=$(this.expr.params[1]).evaluate(t,e);let i=this.Bi(r,s);for(const a of this.expr.params.slice(2)){const u=$(a).evaluate(t,e);i=this.Bi(i,u)}return i}Bi(t,e){if(t.Mi()||e.Mi())return E.Ci();if(t.Ni()||e.Ni())return E.Oi();const r=t.value,s=e.value;if(!ue(r)&&!ae(r)||!ue(s)&&!ae(s))return E.Ci();if(ue(r)||ue(s)){const i=this.Li(r,s);return i?E.newValue(i):E.Ci()}if(ae(r)&&ae(s)){const i=this.Ui(r,s);return i===void 0?E.Ci():typeof i=="number"?E.newValue({doubleValue:i}):i<cg||i>ug?E.Ci():E.newValue({integerValue:`${i}`})}return E.Ci()}}function Ve(n,t){return mt(n)!==mt(t)?"TYPE_MISMATCH":It(n)||It(t)?"NOT_EQ":Ht(n)&&Ht(t)?"EQ":Ht(n)||Ht(t)?"NULL":Ln(n)&&Ln(t)?(function(r,s){var a,u,h;if(((a=r.values)==null?void 0:a.length)!==((u=s.values)==null?void 0:u.length))return"NOT_EQ";let i=!1;for(let f=0;f<(((h=r.values)==null?void 0:h.length)??0);f++){const m=r.values[f],p=s.values[f];switch(Ve(m,p)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:q(44609,{ki:m,Qi:p})}}return i?"NULL":"EQ"})(n.arrayValue,t.arrayValue):io(n)&&io(t)||un(n)&&un(t)?(function(r,s){const i=r.fields||{},a=s.fields||{};if(dn(i)!==dn(a))return"NOT_EQ";let u=!1;for(const h in i)if(i.hasOwnProperty(h)){if(a[h]===void 0)return"NOT_EQ";switch(Ve(i[h],a[h])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":u=!0}}return u?"NULL":"EQ"})(n.mapValue,t.mapValue):(function(r,s){return Jt(r,s,{be:!1,ye:!0,we:!0})})(n,t)?"EQ":"NOT_EQ"}class lg extends Zr{Ui(t,e){return de(t)+de(e)}Li(t,e){return{doubleValue:bt(t)+bt(e)}}}class hg extends Zr{constructor(t){super(t),this.expr=t}Ui(t,e){return de(t)-de(e)}Li(t,e){return{doubleValue:bt(t)-bt(e)}}}class fg extends Zr{constructor(t){super(t),this.expr=t}Ui(t,e){return de(t)*de(e)}Li(t,e){return{doubleValue:bt(t)*bt(e)}}}class dg extends Zr{constructor(t){super(t),this.expr=t}Ui(t,e){const r=de(e);if(r!==BigInt(0))return de(t)/r}Li(t,e){const r=bt(e);return r===0?{doubleValue:Cr(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:bt(t)/r}}}class mg extends Zr{constructor(t){super(t),this.expr=t}Ui(t,e){const r=de(e);if(r!==BigInt(0))return de(t)%r}Li(t,e){const r=bt(e);if(r!==0)return{doubleValue:bt(t)%r}}}class pg{constructor(t){this.expr=t}evaluate(t,e){var i;let r=!1,s=!1;for(const a of this.expr.params){const u=$(a).evaluate(t,e);switch(u.type){case"BOOLEAN":if(!((i=u.value)!=null&&i.booleanValue))return E.newValue(vt);break;case"NULL":s=!0;break;default:r=!0}}return r?E.Ci():s?E.Oi():E.newValue(jt)}}class gi{constructor(t){this.expr=t}evaluate(t,e){var s;U(this.expr.params.length===1,9634);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"BOOLEAN":return E.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return E.Oi();default:return E.Ci()}}}class gg{constructor(t){this.expr=t}evaluate(t,e){var i;let r=!1,s=!1;for(const a of this.expr.params){const u=$(a).evaluate(t,e);switch(u.type){case"BOOLEAN":if((i=u.value)!=null&&i.booleanValue)return E.newValue(jt);break;case"NULL":s=!0;break;default:r=!0}}return r?E.Ci():s?E.Oi():E.newValue(vt)}}class Zo{constructor(t){this.expr=t}evaluate(t,e){var i;let r=!1,s=!1;for(const a of this.expr.params){const u=$(a).evaluate(t,e);switch(u.type){case"BOOLEAN":r=Zo.xor(r,!!((i=u.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return E.Ci()}}return s?E.Oi():E.newValue({booleanValue:r})}static xor(t,e){return(t||e)&&!(t&&e)}}class ph{constructor(t){this.expr=t}evaluate(t,e){var a,u;U(this.expr.params.length===2,55094);let r=!1;const s=$(this.expr.params[0]).evaluate(t,e);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return E.Ci()}const i=$(this.expr.params[1]).evaluate(t,e);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.Ci()}if(r)return E.Oi();for(const h of((u=(a=i.value)==null?void 0:a.arrayValue)==null?void 0:u.values)??[])switch(Ht(s.value)&&Ht(h)?"EQ":Ve(s.value,h)){case"EQ":return E.newValue(jt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(44608,{value:s.value,candidate:h})}return r?E.Oi():E.newValue(vt)}}class _g{constructor(t){this.expr=t}evaluate(t,e){return new gi(new R("not",[new R("equal_any",this.expr.params)])).evaluate(t,e)}}class yg{constructor(t){this.expr=t}evaluate(t,e){U(this.expr.params.length===1,23322);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"INT":return E.newValue(vt);case"DOUBLE":return E.newValue({booleanValue:isNaN(bt(r.value))});case"NULL":return E.Oi();default:return E.Ci()}}}class Eg{constructor(t){this.expr=t}evaluate(t,e){return U(this.expr.params.length===1,50406),new gi(new R("not",[new R("is_nan",this.expr.params)])).evaluate(t,e)}}class wg{constructor(t){this.expr=t}evaluate(t,e){switch(U(this.expr.params.length===1,23123),$(this.expr.params[0]).evaluate(t,e).type){case"NULL":return E.newValue(jt);case"UNSET":case"ERROR":return E.Ci();default:return E.newValue(vt)}}}class Tg{constructor(t){this.expr=t}evaluate(t,e){return U(this.expr.params.length===1,23167),new gi(new R("not",[new R("is_null",this.expr.params)])).evaluate(t,e)}}class vg{constructor(t){this.expr=t}evaluate(t,e){return U(this.expr.params.length===1,5228),$(this.expr.params[0]).evaluate(t,e).type==="ERROR"?E.newValue(jt):E.newValue(vt)}}class Ig{constructor(t){this.expr=t}evaluate(t,e){switch(U(this.expr.params.length===1,6877),$(this.expr.params[0]).evaluate(t,e).type){case"ERROR":return E.Ci();case"UNSET":return E.newValue(vt);default:return E.newValue(jt)}}}class Ag{constructor(t){this.expr=t}evaluate(t,e){var s;U(this.expr.params.length===3,11706);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?$(this.expr.params[1]).evaluate(t,e):$(this.expr.params[2]).evaluate(t,e);case"NULL":return $(this.expr.params[2]).evaluate(t,e);default:return E.Ci()}}}class Vg{constructor(t){this.expr=t}evaluate(t,e){const r=this.expr.params.map((i=>$(i).evaluate(t,e)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||$t(i.value,s.value)>0?i:s}return s===void 0?E.Oi():s}}class bg{constructor(t){this.expr=t}evaluate(t,e){const r=this.expr.params.map((i=>$(i).evaluate(t,e)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||$t(i.value,s.value)<0?i:s}return s===void 0?E.Oi():s}}class Gn{constructor(t){this.expr=t}evaluate(t,e){U(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"ERROR":case"UNSET":return E.Ci()}const s=$(this.expr.params[1]).evaluate(t,e);switch(s.type){case"ERROR":case"UNSET":return E.Ci()}return this.qi(r,s)}}class Rg extends Gn{constructor(t){super(t),this.expr=t}qi(t,e){if(t.Ni()&&e.Ni())return E.newValue(jt);if(t.Ni()||e.Ni()||It(t.value)||It(e.value)||mt(t.value)!==mt(e.value))return E.newValue(vt);switch(Ve(t.value,e.value)){case"EQ":return E.newValue(jt);case"NOT_EQ":return E.newValue(vt);case"NULL":return E.Oi();default:q(44615,{left:t,right:e})}}}class Pg extends Gn{constructor(t){super(t),this.expr=t}qi(t,e){switch(Ve(t.value,e.value)){case"EQ":return E.newValue(vt);case"NOT_EQ":case"TYPE_MISMATCH":return E.newValue(jt);case"NULL":return E.Oi();default:q(44614,{left:t,right:e})}}}class xg extends Gn{constructor(t){super(t),this.expr=t}qi(t,e){return mt(t.value)!==mt(e.value)||It(t.value)||It(e.value)?E.newValue(vt):E.newValue({booleanValue:$t(t.value,e.value)<0})}}class Cg extends Gn{constructor(t){super(t),this.expr=t}qi(t,e){return mt(t.value)!==mt(e.value)||It(t.value)||It(e.value)?E.newValue(vt):Ve(t.value,e.value)==="EQ"?E.newValue(jt):E.newValue({booleanValue:$t(t.value,e.value)<0})}}class Sg extends Gn{constructor(t){super(t),this.expr=t}qi(t,e){return mt(t.value)!==mt(e.value)||It(t.value)||It(e.value)?E.newValue(vt):E.newValue({booleanValue:$t(t.value,e.value)>0})}}class Ng extends Gn{constructor(t){super(t),this.expr=t}qi(t,e){return mt(t.value)!==mt(e.value)||It(t.value)||It(e.value)?E.newValue(vt):Ve(t.value,e.value)==="EQ"?E.newValue(jt):E.newValue({booleanValue:$t(t.value,e.value)>0})}}class Dg{constructor(t){this.expr=t}evaluate(t,e){throw new Error("Unimplemented")}}class Og{constructor(t){this.expr=t}evaluate(t,e){var s;U(this.expr.params.length===1,216);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"NULL":return E.Oi();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return E.newValue({arrayValue:{values:[...i].reverse()}})}default:return E.Ci()}}}class kg{constructor(t){this.expr=t}evaluate(t,e){return U(this.expr.params.length===2,52884),new ph(new R("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(t,e)}}class Lg{constructor(t){this.expr=t}evaluate(t,e){var h,f,m,p;U(this.expr.params.length===2,1392);let r=!1;const s=$(this.expr.params[0]).evaluate(t,e);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.Ci()}const i=$(this.expr.params[1]).evaluate(t,e);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.Ci()}if(r)return E.Oi();const a=((f=(h=i.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[],u=((p=(m=s.value)==null?void 0:m.arrayValue)==null?void 0:p.values)??[];for(const w of a){let P=!1;r=!1;for(const S of u){switch(Ht(w)&&Ht(S)?"EQ":Ve(w,S)){case"EQ":P=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(44613,{value:S,search:w})}if(P)break}if(!P)return E.newValue(vt)}return E.newValue(jt)}}class Mg{constructor(t){this.expr=t}evaluate(t,e){var h,f,m,p;U(this.expr.params.length===2,2680);let r=!1;const s=$(this.expr.params[0]).evaluate(t,e);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.Ci()}const i=$(this.expr.params[1]).evaluate(t,e);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.Ci()}if(r)return E.Oi();const a=((f=(h=i.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[],u=((p=(m=s.value)==null?void 0:m.arrayValue)==null?void 0:p.values)??[];for(const w of u)for(const P of a)switch(Ht(w)&&Ht(P)?"EQ":Ve(w,P)){case"EQ":return E.newValue(jt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(60403,{value:w,search:P})}return r?E.Oi():E.newValue(vt)}}class Ug{constructor(t){this.expr=t}evaluate(t,e){var s,i,a;U(this.expr.params.length===1,38605);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"NULL":return E.Oi();case"ARRAY":return E.newValue({integerValue:`${((a=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:a.length)??0}`});default:return E.Ci()}}}class Fg{constructor(t){this.expr=t}evaluate(t,e){throw new Error("Unimplemented")}}class Bg{constructor(t){this.expr=t}evaluate(t,e){var s,i;U(this.expr.params.length===1,1508);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"NULL":return E.Oi();case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;if(typeof a=="string"){const u=at.fromBase64String(a).toUint8Array();return u.reverse(),E.newValue({bytesValue:at.fromUint8Array(u).toBase64()})}return E.newValue({bytesValue:new Uint8Array(a).reverse()})}case"STRING":{const a=(i=r.value)==null?void 0:i.stringValue,u=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(a),h=Array.from(u,(f=>f.segment)).reverse();return E.newValue({stringValue:h.join("")})}default:return E.Ci()}}}class qg{constructor(t){this.expr=t}evaluate(t,e){throw new Error("Unimplemented")}}class jg{constructor(t){this.expr=t}evaluate(t,e){throw new Error("Unimplemented")}}class $g{constructor(t){this.expr=t}evaluate(t,e){U(this.expr.params.length===1,19400);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"NULL":return E.Oi();case"STRING":{const s=(function(a){let u=0;for(let h=0;h<a.length;h++){const f=a.codePointAt(h);if(f===void 0)return;if(f<=65535)if(f>=55296&&f<=57343)if(f<=56319){const m=a.codePointAt(h+1);m!==void 0&&m>=56320&&m<=57343?(u+=1,h++):u+=1}else u+=1;else u+=1;else{if(!(f<=1114111))return;u+=1,h++}}return u})(r.value.stringValue);return s===void 0?E.Ci():E.newValue({integerValue:s})}default:return E.Ci()}}}class zg{constructor(t){this.expr=t}evaluate(t,e){var s,i;U(this.expr.params.length===1,8486);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;return typeof a=="string"?E.newValue({integerValue:at.fromBase64String(a).toUint8Array().length}):E.newValue({integerValue:new Uint8Array(a).length})}case"STRING":{const a=(function(h){let f=0;for(let m=0;m<h.length;m++){const p=h.codePointAt(m);if(p===void 0)return;if(p>=55296&&p<=57343){if(!(p<=56319))return;{const w=h.codePointAt(m+1);if(w===void 0||!(w>=56320&&w<=57343))return;f+=4,m++}}else if(p<=127)f+=1;else if(p<=2047)f+=2;else if(p<=65535)f+=3;else{if(!(p<=1114111))return;f+=4,m++}}return f})((i=r.value)==null?void 0:i.stringValue);return a===void 0?E.Ci():E.newValue({integerValue:a})}case"NULL":return E.Oi();default:return E.Ci()}}}class Kn{constructor(t){this.expr=t}evaluate(t,e){var a,u;U(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=$(this.expr.params[0]).evaluate(t,e);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return E.Ci()}const i=$(this.expr.params[1]).evaluate(t,e);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return E.Ci()}return r?E.Oi():this.Ki((a=s.value)==null?void 0:a.stringValue,(u=i.value)==null?void 0:u.stringValue)}}class Gg extends Kn{Ki(t,e){try{const r=(function(a){let u="";for(let h=0;h<a.length;h++){const f=a.charAt(h);switch(f){case"_":u+=".";break;case"%":u+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":u+="\\"+f;break;default:u+=f}}return"^"+u+"$"})(e),s=vo.compile(r);return E.newValue({booleanValue:s.matches(t)})}catch(r){return ee(`Invalid LIKE pattern converted to regex: ${e}, returning error. Error: ${r}`),E.Ci()}}}class Kg extends Kn{Ki(t,e){try{const r=vo.compile(e);return E.newValue({booleanValue:r.test(t)})}catch{return ee(`Invalid regex pattern found in regex_contains: ${e}, returning error`),E.Ci()}}}class Wg extends Kn{Ki(t,e){try{return E.newValue({booleanValue:vo.compile(e).matches(t)})}catch{return ee(`Invalid regex pattern found in regex_match: ${e}, returning error`),E.Ci()}}}class Hg extends Kn{Ki(t,e){return E.newValue({booleanValue:t.includes(e)})}}class Qg extends Kn{Ki(t,e){return E.newValue({booleanValue:t.startsWith(e)})}}class Xg extends Kn{Ki(t,e){return E.newValue({booleanValue:t.endsWith(e)})}}class Yg{constructor(t){this.expr=t}evaluate(t,e){var s,i;U(this.expr.params.length===1,29079);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"STRING":return E.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return E.Oi();default:return E.Ci()}}}class Jg{constructor(t){this.expr=t}evaluate(t,e){var s,i;U(this.expr.params.length===1,60487);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"STRING":return E.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return E.Oi();default:return E.Ci()}}}class Zg{constructor(t){this.expr=t}evaluate(t,e){var s,i;U(this.expr.params.length===1,28544);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"STRING":return E.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return E.Oi();default:return E.Ci()}}}class t_{constructor(t){this.expr=t}evaluate(t,e){const r=this.expr.params.map((a=>$(a).evaluate(t,e)));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return E.Ci()}return i?E.Oi():E.newValue({stringValue:s})}}class e_{constructor(t){this.expr=t}evaluate(t,e){var a,u,h,f;U(this.expr.params.length===2,4483);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"UNSET":return E.Fi();case"MAP":break;default:return E.Ci()}const s=$(this.expr.params[1]).evaluate(t,e);if(s.type!=="STRING")return E.Ci();const i=(f=(u=(a=r.value)==null?void 0:a.mapValue)==null?void 0:u.fields)==null?void 0:f[(h=s.value)==null?void 0:h.stringValue];return i===void 0?E.Fi():E.newValue(i)}}class ta{constructor(t){this.expr=t}evaluate(t,e){var f,m;U(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=$(this.expr.params[0]).evaluate(t,e);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return E.Ci()}const i=$(this.expr.params[1]).evaluate(t,e);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return E.Ci()}if(r)return E.Oi();const a=oo(s.value),u=oo(i.value);if(a===void 0||u===void 0||((f=a.values)==null?void 0:f.length)!==((m=u.values)==null?void 0:m.length))return E.Ci();const h=this.$i(a,u);return h===void 0||isNaN(h)?E.Ci():E.newValue({doubleValue:h})}}class n_ extends ta{$i(t,e){const r=(t==null?void 0:t.values)??[],s=(e==null?void 0:e.values)??[];if(r.length===0)return;let i=0,a=0,u=0;for(let f=0;f<r.length;f++){if(!Ae(r[f])||!Ae(s[f]))return;const m=bt(r[f]),p=bt(s[f]);i+=m*p,a+=m*m,u+=p*p}const h=Math.sqrt(a)*Math.sqrt(u);if(h!==0)return 1-Math.max(-1,Math.min(1,i/h))}}class r_ extends ta{$i(t,e){const r=(t==null?void 0:t.values)??[],s=(e==null?void 0:e.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Ae(r[a])||!Ae(s[a]))return;i+=bt(r[a])*bt(s[a])}return i}}class s_ extends ta{$i(t,e){const r=(t==null?void 0:t.values)??[],s=(e==null?void 0:e.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Ae(r[a])||!Ae(s[a]))return;const u=bt(r[a]),h=bt(s[a]);i+=Math.pow(u-h,2)}return Math.sqrt(i)}}class i_{constructor(t){this.expr=t}evaluate(t,e){var s;U(this.expr.params.length===1,39044);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"VECTOR":{const i=oo(r.value);return E.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return E.Oi();default:return E.Ci()}}}const jr=BigInt(-62135596800),$r=BigInt(253402300799),Qs=BigInt(1e3),Ue=BigInt(1e6),o_=jr*Qs,a_=$r*Qs+BigInt(999),u_=jr*Ue,c_=$r*Ue+BigInt(999999);function ea(n){return n>=u_&&n<=c_}function gh(n){return n>=jr&&n<=$r}function zr(n,t){const e=BigInt(n);return!(e<jr||e>$r)&&!(t<0||t>=1e9)&&(e!==jr||t===0)&&!(e===$r&&t>999999999)}function _h(n,t){return t<0?{seconds:n-1,nanos:t+1e9}:{seconds:n,nanos:t}}function na(n){return BigInt(n.seconds)*Ue+BigInt(Math.trunc(n.nanoseconds/1e3))}class ra{constructor(t){this.expr=t}evaluate(t,e){U(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return E.Oi();default:return E.Ci()}}}class l_ extends ra{toTimestamp(t){if(!ea(t))return E.Ci();let e=Number(t/Ue),r=Number(t%Ue*BigInt(1e3));const s=_h(e,r);return e=s.seconds,r=s.nanos,zr(e,r)?E.newValue({timestampValue:{seconds:e,nanos:r}}):E.Ci()}}class h_ extends ra{toTimestamp(t){if(!(function(a){return a>=o_&&a<=a_})(t))return E.Ci();let e=Number(t/Qs),r=Number(t%Qs*BigInt(1e6));const s=_h(e,r);return e=s.seconds,r=s.nanos,zr(e,r)?E.newValue({timestampValue:{seconds:e,nanos:r}}):E.Ci()}}class f_ extends ra{toTimestamp(t){if(!gh(t))return E.Ci();const e=Number(t);return E.newValue({timestampValue:{seconds:e,nanos:0}})}}class sa{constructor(t){this.expr=t}evaluate(t,e){U(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=$(this.expr.params[0]).evaluate(t,e);switch(r.type){case"TIMESTAMP":break;case"NULL":return E.Oi();default:return E.Ci()}const s=Mo(r.value.timestampValue);return zr(s.seconds,s.nanoseconds)?this.Wi(s):E.Ci()}}class d_ extends sa{Wi(t){const e=na(t);return ea(e)?E.newValue({integerValue:`${e.toString()}`}):E.Ci()}}class m_ extends sa{Wi(t){const e=na(t),r=e/BigInt(1e3),s=e%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?E.newValue({integerValue:r.toString()}):E.newValue({integerValue:(r-BigInt(1)).toString()})}}class p_ extends sa{Wi(t){const e=BigInt(t.seconds);return gh(e)?E.newValue({integerValue:e.toString()}):E.Ci()}}class yh{constructor(t){this.expr=t}evaluate(t,e){U(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=$(this.expr.params[0]).evaluate(t,e);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return E.Ci()}const i=$(this.expr.params[1]).evaluate(t,e);let a;switch(i.type){case"STRING":if(a=(function(X){switch(X){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),a===void 0)return E.Ci();break;case"NULL":r=!0;break;default:return E.Ci()}const u=$(this.expr.params[2]).evaluate(t,e);switch(u.type){case"INT":break;case"NULL":r=!0;break;default:return E.Ci()}if(r)return E.Oi();const h=BigInt(u.value.integerValue);let f;try{switch(a){case"microsecond":f=h;break;case"millisecond":f=h*BigInt(1e3);break;case"second":f=h*BigInt(1e6);break;case"minute":f=h*BigInt(6e7);break;case"hour":f=h*BigInt(36e8);break;case"day":f=h*BigInt(864e8);break;default:return E.Ci()}if(a!=="microsecond"&&h!==BigInt(0)&&f/h!==BigInt(this.Gi(a)))return E.Ci()}catch(K){return ee(`Error during timestamp arithmetic: ${K}`),E.Ci()}const m=Mo(s.value.timestampValue);if(!zr(m.seconds,m.nanoseconds))return E.Ci();const p=na(m),w=this.ji(p,f);if(!ea(w))return E.Ci();const P=Number(w/Ue),S=w%Ue,M=Number((S<0?S+Ue:S)*BigInt(1e3)),k=S<0?P-1:P;return zr(k,M)?E.newValue({timestampValue:{seconds:k,nanos:M}}):E.Ci()}Gi(t){switch(t){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class g_ extends yh{ji(t,e){return t+e}}class __ extends yh{ji(t,e){return t-e}}function Gr(n){if((n=mh(n))instanceof $n)return`fld(${n.fieldName})`;if(n instanceof zn)return`cst(${(function(e){return e===null?"null":typeof e=="number"?e.toString():typeof e=="string"?`"${e}"`:e instanceof ot?`ref(${e.path})`:e instanceof qt?`vec(${JSON.stringify(e)})`:JSON.stringify(e)})(n.value)})`;if(n instanceof R)return`fn(${n.name},[${n.params.map(Gr).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.fi.map(Gr).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function y_(n){if(n instanceof hh)return`${n._name}(${Is(n.fields)})`;if(n instanceof fh){let t=`${n._name}(${Is(n.accumulators)})`;return n.groups.size>0&&(t+=`grouping(${Is(n.groups)})`),t}if(n instanceof dh)return`${n._name}(${Is(n.groups)})`;if(n instanceof fi)return`${n._name}(${n.pi})`;if(n instanceof di)return`${n._name}(${n.collectionId})`;if(n instanceof Qo)return`${n._name}()`;if(n instanceof Xo)return`${n._name}(${n.gi.sort()})`;if(n instanceof mi)return`${n._name}(${Gr(n.condition)})`;if(n instanceof pn)return`${n._name}(${n.limit})`;if(n instanceof ye)return`${n._name}(${(function(e){return e.map((r=>`${Gr(r.expr)}${r.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Is(n){return`${Array.from(n.entries()).sort().map((([t,e])=>`${t}=${Gr(e)}`)).join(",")}`}function Te(n){return n.stages.map((t=>y_(t))).join("|")}function Eh(n,t){return Te(n)===Te(t)}function yt(n){return n instanceof kt}function Tc(n){return yt(n)?Te(n):wr(n)}function wh(n){return yt(n)?Te(n):(function(e){return`${xl(ce(e))}|lt:${e.limitType}`})(n)}function _i(n,t){return n instanceof kt&&t instanceof kt?Eh(n,t):!(n instanceof kt&&!(t instanceof kt)||!(n instanceof kt)&&t instanceof kt)&&km(n,t)}function Th(n){return on(n)?Te(n):xl(n)}function vh(n,t){return n instanceof kt&&t instanceof kt?Eh(n,t):!(n instanceof kt&&!(t instanceof kt)||!(n instanceof kt)&&t instanceof kt)&&Cl(n,t)}function E_(n,t){const e=(function(s){let i=!1;const a=[];for(const u of s)if(u instanceof ye)if(i=!0,u.orderings.some((h=>h.expr instanceof $n&&h.expr.fieldName===oe)))a.push(u);else{const h=u.orderings.map((f=>f));h.push(Cs(oe).ascending()),a.push(new ye(h,{}))}else u instanceof pn&&(i||(a.push(new ye([Cs(oe).ascending()],{})),i=!0)),a.push(u);return i||a.push(new ye([Cs(oe).ascending()],{})),a})(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");e.forEach((s=>s._readUserData(r)))}return new kt(n.userDataReader.serializer,e,t)}/**
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
 */class w_{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&gm(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=yr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=yr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ll();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const h=Tl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Q())}isEqual(t){return this.batchId===t.batchId&&Nn(this.mutations,t.mutations,((e,r)=>Ju(e,r)))&&Nn(this.baseMutations,t.baseMutations,((e,r)=>Ju(e,r)))}}class ia{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){U(t.mutations.length===r.length,58842,{zi:t.mutations.length,Hi:r.length});let s=(function(){return Bm})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ia(t,e,r,s)}}/**
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
 */const Ih="";function T_(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=vc(t)),t=v_(n.get(e),t);return vc(t)}function v_(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":e+="";break;case Ih:e+="";break;default:e+=i}}return e}function vc(n){return n+Ih+""}/**
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
 */class I_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ee{constructor(t,e,r,s,i=z.min(),a=z.min(),u=at.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new Ee(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ee(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class A_{constructor(t){this.Yi=t}}function V_(n){const t=rp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ks(t,t.limit,"L"):t}/**
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
 */class b_{constructor(){this.A_=new R_}addToCollectionParentIndex(t,e){return this.A_.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.A_.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(je.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(je.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class R_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new dt(Z.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new dt(Z.comparator)).toArray()}}/**
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
 */class Ke{constructor(t){this.Q_=t}next(){return this.Q_+=2,this.Q_}static q_(){return new Ke(0)}static K_(){return new Ke(-1)}}// Copyright 2024 Google LLC* @license
function Ah(n,t){var r;let e=t;for(const s of n.stages)e=x_({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,e);return e}function yi(n,t){return Ah(n,[t]).length>0}function P_(n,t){return yt(n)?yi(n,t):oi(n,t)}function x_(n,t,e){if(t instanceof fi)return(function(s,i,a){return a.filter((u=>u.isFoundDocument()&&`/${u.key.getCollectionPath().canonicalString()}`===i.pi))})(0,t,e);if(t instanceof mi)return(function(s,i,a){return a.filter((u=>{const h=Ar($(i.condition).evaluate(s,u));return h!==void 0&&Jt(h,jt)}))})(n,t,e);if(t instanceof di)return(function(s,i,a){return a.filter((u=>u.isFoundDocument()&&u.key.getCollectionPath().lastSegment()===i.collectionId))})(0,t,e);if(t instanceof Qo)return(function(s,i,a){return a.filter((u=>u.isFoundDocument()))})(0,0,e);if(t instanceof Xo)return(function(s,i,a){return a.filter((u=>u.isFoundDocument()&&i.yi.has(u.key.path.toStringWithLeadingSlash())))})(0,t,e);if(t instanceof pn)return(function(s,i,a){return a.slice(0,i.limit)})(0,t,e);if(t instanceof ye)return(function(s,i,a){const u=i.orderings.map((h=>({Z_:$(h.expr),direction:h.direction})));return[...a].sort(((h,f)=>{for(const{Z_:m,direction:p}of u){const w=Ar(m.evaluate(s,h)),P=Ar(m.evaluate(s,f)),S=$t(w??On,P??On);if(S!==0)return p==="ascending"?S:-S}return 0}))})(n,t,e);throw new Error(`Unknown stage: ${t._name}`)}function go(n){const t=(function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof ye)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(e,r)=>{for(const s of t){const i=Ar($(s.expr).evaluate({serializer:n.serializer},e)),a=Ar($(s.expr).evaluate({serializer:n.serializer},r)),u=$t(i||On,a||On);if(u!==0)return s.direction==="ascending"?u:-u}return 0}}function Xi(n){for(let t=n.stages.length-1;t>=0;t--){const e=n.stages[t];if(e instanceof pn)return{limit:e.limit}}}/**
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
 */class C_{constructor(){this.changes=new _n((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class S_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class N_{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&yr(r.mutation,s,Wt.empty(),tt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,Q()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=Q()){const s=De();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((i=>{let a=Vn();return i.forEach(((u,h)=>{a=a.insert(u,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=De();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,Q())))}populateOverlays(t,e,r){const s=[];return r.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,r,s){let i=Ft();const a=Tr(),u=(function(){return Tr()})();return e.forEach(((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof Xe)?i=i.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),yr(m.mutation,f,m.mutation.getFieldMask(),tt.now())):a.set(f.key,Wt.empty())})),this.recalculateAndSaveOverlays(t,i).next((h=>(h.forEach(((f,m)=>a.set(f,m))),e.forEach(((f,m)=>u.set(f,new S_(m,a.get(f)??null)))),u)))}recalculateAndSaveOverlays(t,e){const r=Tr();let s=new it(((a,u)=>a-u)),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Wt.empty();m=u.applyToLocalView(f,m),r.set(h,m);const p=(s.get(u.batchId)||Q()).add(h);s=s.insert(u.batchId,p)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,m=h.value,p=Ll();m.forEach((w=>{if(!i.has(w)){const P=Tl(e.get(w),r.get(w));P!==null&&p.set(w,P),i=i.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(t,f,p))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return yt(e)?this.getDocumentsMatchingPipeline(t,e,r,s):Dm(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Nl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):C.resolve(De());let u=Fr,h=i;return a.next((f=>C.forEach(f,((m,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),i.get(m)?C.resolve():this.remoteDocumentCache.getEntry(t,m).next((w=>{h=h.insert(m,w)}))))).next((()=>this.populateOverlays(t,f,i))).next((()=>this.computeViews(t,h,f,Q()))).next((m=>({batchId:u,changes:kl(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next((r=>{let s=Vn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let a=Vn();return this.indexManager.getCollectionParents(t,i).next((u=>C.forEach(u,(h=>{const f=(function(p,w){return new Xr(w,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(e,h.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next((m=>{m.forEach(((p,w)=>{a=a.insert(p,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s)))).next((a=>this.retrieveMatchingLocalDocuments(i,a,(u=>oi(e,u)))))}getDocumentsMatchingPipeline(t,e,r,s){if(Me(e)==="collection_group"){const i=Jo(e);let a=Vn();return this.indexManager.getCollectionParents(t,i).next((u=>C.forEach(u,(h=>{const f=(function(p,w){const P=p.stages.map((S=>S instanceof di?new fi(w.canonicalString(),{}):S));return new kt(p.serializer,P)})(e,h.child(i));return this.getDocumentsMatchingPipeline(t,f,r,s).next((m=>{m.forEach(((p,w)=>{a=a.insert(p,w)}))}))})).next((()=>a))))}{let i;return this.getOverlaysForPipeline(t,e,r.largestBatchId).next((a=>{switch(i=a,Me(e)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s);case"documents":let u=Q();for(const h of po(e))u=u.add(F.fromPath(h));return this.remoteDocumentCache.getEntries(t,u);case"database":return this.remoteDocumentCache.getAllEntries(t);default:throw new D("invalid-argument",`Invalid pipeline source to execute offline: ${Te(e)}`)}})).next((a=>this.retrieveMatchingLocalDocuments(i,a,(u=>yi(e,u)))))}}retrieveMatchingLocalDocuments(t,e,r){t.forEach(((i,a)=>{const u=a.getKey();e.get(u)===null&&(e=e.insert(u,Ct.newInvalidDocument(u)))}));let s=Vn();return e.forEach(((i,a)=>{const u=t.get(i);u!==void 0&&yr(u.mutation,a,Wt.empty(),tt.now()),r(a)&&(s=s.insert(i,a))})),s}getOverlaysForPipeline(t,e,r){switch(Me(e)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(t,Z.fromString(pi(e)),r);case"collection_group":throw new D("invalid-argument",`Unexpected collection group pipeline: ${Te(e)}`);case"documents":return this.documentOverlayCache.getOverlays(t,po(e).map((s=>F.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(t,r);default:throw new D("invalid-argument",`Failed to get overlays for pipeline: ${Te(e)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(t){this.serializer=t,this.ao=new Map,this.uo=new Map}getBundleMetadata(t,e){return C.resolve(this.ao.get(e))}saveBundleMetadata(t,e){return this.ao.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:le(s.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.uo.get(e))}saveNamedQuery(t,e){return this.uo.set(e.name,(function(s){return{name:s.name,query:V_(s.bundledQuery),readTime:le(s.readTime)}})(e)),C.resolve()}}/**
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
 */class O_{constructor(){this.overlays=new it(F.comparator),this.co=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=De();return C.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}getAllOverlays(t,e){const r=De();return this.overlays.forEach(((s,i)=>{i.largestBatchId>e&&r.set(s,i)})),C.resolve(r)}saveOverlays(t,e,r){return r.forEach(((s,i)=>{this.cs(t,e,i)})),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.co.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.co.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=De(),i=e.length+1,a=new F(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===i&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new it(((f,m)=>f-m));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=i.get(f.largestBatchId);m===null&&(m=De(),i=i.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const u=De(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>u.set(f,m))),!(u.size()>=s)););return C.resolve(u)}cs(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.co.get(s.largestBatchId).delete(r.key);this.co.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new I_(e,r));let i=this.co.get(e);i===void 0&&(i=Q(),this.co.set(e,i)),this.co.set(e,i.add(r.key))}}/**
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
 */class k_{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class oa{constructor(){this.lo=new dt(Tt.Eo),this.ho=new dt(Tt.To)}isEmpty(){return this.lo.isEmpty()}addReference(t,e){const r=new Tt(t,e);this.lo=this.lo.add(r),this.ho=this.ho.add(r)}Po(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Io(new Tt(t,e))}Ro(t,e){t.forEach((r=>this.removeReference(r,e)))}Ao(t){const e=new F(new Z([])),r=new Tt(e,t),s=new Tt(e,t+1),i=[];return this.ho.forEachInRange([r,s],(a=>{this.Io(a),i.push(a.key)})),i}Vo(){this.lo.forEach((t=>this.Io(t)))}Io(t){this.lo=this.lo.delete(t),this.ho=this.ho.delete(t)}fo(t){const e=new F(new Z([])),r=new Tt(e,t),s=new Tt(e,t+1);let i=Q();return this.ho.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new Tt(t,0),r=this.lo.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Tt{constructor(t,e){this.key=t,this.mo=e}static Eo(t,e){return F.comparator(t.key,e.key)||H(t.mo,e.mo)}static To(t,e){return H(t.mo,e.mo)||F.comparator(t.key,e.key)}}/**
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
 */class L_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ts=1,this.po=new dt(Tt.Eo)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.ts;this.ts++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new w_(i,e,r,s);this.mutationQueue.push(a);for(const u of s)this.po=this.po.add(new Tt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.yo(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.wo(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Ro:this.ts-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Tt(e,0),s=new Tt(e,Number.POSITIVE_INFINITY),i=[];return this.po.forEachInRange([r,s],(a=>{const u=this.yo(a.mo);i.push(u)})),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new dt(H);return e.forEach((s=>{const i=new Tt(s,0),a=new Tt(s,Number.POSITIVE_INFINITY);this.po.forEachInRange([i,a],(u=>{r=r.add(u.mo)}))})),C.resolve(this.bo(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new Tt(new F(i),0);let u=new dt(H);return this.po.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(u=u.add(h.mo)),!0)}),a),C.resolve(this.bo(u))}bo(t){const e=[];return t.forEach((r=>{const s=this.yo(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){U(this.So(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.po;return C.forEach(e.mutations,(s=>{const i=new Tt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.po=r}))}ss(t){}containsKey(t,e){const r=new Tt(e,0),s=this.po.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}So(t,e){return this.wo(t)}wo(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yo(t){const e=this.wo(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class M_{constructor(t){this.xo=t,this.docs=(function(){return new it(F.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,a=this.xo(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(e))}getEntries(t,e){let r=Ft();return e.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ct.newInvalidDocument(s))})),C.resolve(r)}getAllEntries(t){let e=Ft();return this.docs.forEach(((r,s)=>{e=e.insert(r,s.document)})),C.resolve(e)}getDocumentsMatchingQuery(t,e,r,s){let i,a;yt(e)?(i=Z.fromString(pi(e)),a=m=>yi(e,m)):(i=e.path,a=m=>oi(e,m));let u=Ft();const h=new F(i.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:p}}=f.getNext();if(!i.isPrefixOf(m.path))break;m.path.length>i.length+1||Cm(xm(p),r)<=0||(s.has(p.key)||a(p))&&(u=u.insert(p.key,p.mutableCopy()))}return C.resolve(u)}getAllFromCollectionGroup(t,e,r,s){q(9500)}vo(t,e){return C.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new U_(this)}getSize(t){return C.resolve(this.size)}}class U_ extends C_{constructor(t){super(),this._o=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this._o.addEntry(t,s)):this._o.removeEntry(r)})),C.waitFor(e)}getFromCache(t,e){return this._o.getEntry(t,e)}getAllFromCache(t,e){return this._o.getEntries(t,e)}}/**
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
 */class F_{constructor(t){this.persistence=t,this.Do=new _n((e=>Th(e)),vh),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Co=0,this.Fo=new oa,this.targetCount=0,this.Oo=Ke.q_()}forEachTarget(t,e){return this.Do.forEach(((r,s)=>e(s))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Co)}allocateTargetId(t){return this.highestTargetId=this.Oo.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Co&&(this.Co=e),C.resolve()}j_(t){this.Do.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Oo=new Ke(e),this.highestTargetId=e),t.sequenceNumber>this.Co&&(this.Co=t.sequenceNumber)}addTargetData(t,e){return this.j_(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.j_(e),C.resolve()}removeTargetData(t,e){return this.Do.delete(e.target),this.Fo.Ao(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Do.forEach(((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Do.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),C.waitFor(i).next((()=>s))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Do.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Fo.Po(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Fo.Ro(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),C.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Fo.Ao(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Fo.fo(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Fo.containsKey(e))}}/**
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
 */class Vh{constructor(t,e){this.Mo={},this.overlays={},this.No=new ci(0),this.Bo=!1,this.Bo=!0,this.Lo=new k_,this.referenceDelegate=t(this),this.Uo=new F_(this),this.indexManager=new b_,this.remoteDocumentCache=(function(s){return new M_(s)})((r=>this.referenceDelegate.ko(r))),this.serializer=new A_(e),this.Qo=new D_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Bo=!1,Promise.resolve()}get started(){return this.Bo}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new O_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Mo[t.toKey()];return r||(r=new L_(e,this.referenceDelegate),this.Mo[t.toKey()]=r),r}getGlobalsCache(){return this.Lo}getTargetCache(){return this.Uo}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qo}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const s=new B_(this.No.next());return this.referenceDelegate.qo(),r(s).next((i=>this.referenceDelegate.Ko(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}$o(t,e){return C.or(Object.values(this.Mo).map((r=>()=>r.containsKey(t,e))))}}class B_ extends Cp{constructor(t){super(),this.currentSequenceNumber=t}}class aa{constructor(t){this.persistence=t,this.Wo=new oa,this.Go=null}static jo(t){return new aa(t)}get zo(){if(this.Go)return this.Go;throw q(60996)}addReference(t,e,r){return this.Wo.addReference(r,e),this.zo.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Wo.removeReference(r,e),this.zo.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.zo.add(e.toString()),C.resolve()}removeTarget(t,e){this.Wo.Ao(e.targetId).forEach((s=>this.zo.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.zo.add(i.toString())))})).next((()=>r.removeTargetData(t,e)))}qo(){this.Go=new Set}Ko(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.zo,(r=>{const s=F.fromPath(r);return this.Ho(t,s).next((i=>{i||e.removeEntry(s,z.min())}))})).next((()=>(this.Go=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ho(t,e).next((r=>{r?this.zo.delete(e.toString()):this.zo.add(e.toString())}))}ko(t){return 0}Ho(t,e){return C.or([()=>C.resolve(this.Wo.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.$o(t,e)])}}class Xs{constructor(t,e){this.persistence=t,this.Jo=new _n((r=>T_(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Lp(this,e)}static jo(t,e){return new Xs(t,e)}qo(){}Ko(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Pi(t){const e=this.H_(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}H_(t){let e=0;return this.Ii(t,(r=>{e++})).next((()=>e))}Ii(t,e){return C.forEach(this.Jo,((r,s)=>this.Y_(t,r,s).next((i=>i?C.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.vo(t,(a=>this.Y_(t,a,e).next((u=>{u||(r++,i.removeEntry(a,z.min()))})))).next((()=>i.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.Jo.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.Jo.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.Jo.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.Jo.set(e,t.currentSequenceNumber),C.resolve()}ko(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Bs(t.data.value)),e}Y_(t,e,r){return C.or([()=>this.persistence.$o(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.Jo.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ua{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ba=r,this.La=s}static Ua(t,e){let r=Q(),s=Q();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ua(t,e.fromCache,r,s)}}/**
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
 */function q_(n,t){return F.comparator(n.key,t.key)}/**
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
 */class j_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class $_{constructor(){this.ka=!1,this.Qa=!1,this.qa=100,this.Ka=(function(){return $f()?8:Sp(qf())>0?6:4})()}initialize(t,e){this.$a=t,this.indexManager=e,this.ka=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.Wa(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.Ga(t,e,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new j_;return this.ja(t,e,a).next((u=>{if(i.result=u,this.Qa)return this.za(t,e,a,u.size)}))})).next((()=>i.result))}za(t,e,r,s){return yt(e)?C.resolve():r.documentReadCount<this.qa?(In()<=J.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",wr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.qa,"documents"),C.resolve()):(In()<=J.DEBUG&&L("QueryEngine","Query:",wr(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Ka*s?(In()<=J.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",wr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ce(e))):C.resolve())}Wa(t,e){if(yt(e))return C.resolve(null);let r=e;if(sc(r))return C.resolve(null);let s=ce(r);return this.indexManager.getIndexType(t,s).next((i=>i===0?null:(r.limit!==null&&i===1&&(r=Ks(r,null,"F"),s=ce(r)),this.indexManager.getDocumentsMatchingTarget(t,s).next((a=>{const u=Q(...a);return this.$a.getDocuments(t,u).next((h=>this.indexManager.getMinOffset(t,s).next((f=>{const m=this.Ha(r,h);return this.Ja(r,m,u,f.readTime)?this.Wa(t,Ks(r,null,"F")):this.Ya(t,m,r,f)}))))})))))}Ga(t,e,r,s){return(yt(e)?(function(a){for(const u of a.stages){if(u instanceof pn||u instanceof wc)return!1;if(u instanceof mi){if(u.condition instanceof uh&&u.condition._expr.name==="exists"&&u.condition._expr.params[0]instanceof $n&&u.condition._expr.params[0].fieldName===oe)continue;return!1}}return!0})(e):sc(e))||s.isEqual(z.min())?C.resolve(null):this.$a.getDocuments(t,r).next((i=>{const a=this.Ha(e,i);return this.Ja(e,a,r,s)?C.resolve(null):(In()<=J.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Tc(e)),this.Ya(t,a,e,Pm(s,Fr)).next((u=>u)))}))}Ha(t,e){let r,s;return yt(t)?(r=new dt(q_),s=i=>yi(t,i)):(r=new dt(ko(t)),s=i=>oi(t,i)),e.forEach(((i,a)=>{s(a)&&(r=r.add(a))})),r}Ja(t,e,r,s){if(yt(t))return(function(u){return u.stages.some((h=>h instanceof pn||h instanceof wc))})(t);if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ja(t,e,r){return In()<=J.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Tc(e)),this.$a.getDocumentsMatchingQuery(t,e,je.min(),r)}Ya(t,e,r,s){return this.$a.getDocumentsMatchingQuery(t,r,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="LocalStore",z_=3e8;class G_{constructor(t,e,r,s){this.persistence=t,this.Za=e,this.serializer=s,this.Xa=new it(H),this.eu=new _n((i=>Th(i)),vh),this.tu=new Map,this.nu=t.getRemoteDocumentCache(),this.Uo=t.getTargetCache(),this.Qo=t.getBundleCache(),this.ru(r)}ru(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new N_(this.nu,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.nu.setIndexManager(this.indexManager),this.Za.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Xa)))}}function K_(n,t,e,r){return new G_(n,t,e,r)}async function bh(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,e.ru(t),e.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],u=[];let h=Q();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of i){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next((f=>({iu:f,removedBatchIds:a,addedBatchIds:u})))}))}))}function W_(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),i=e.nu.newChangeBuffer({trackRemovals:!0});return(function(u,h,f,m){const p=f.batch,w=p.keys();let P=C.resolve();return w.forEach((S=>{P=P.next((()=>m.getEntry(h,S))).next((M=>{const k=f.docVersions.get(S);U(k!==null,48541),M.version.compareTo(k)<0&&(p.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),m.addEntry(M)))}))})),P.next((()=>u.mutationQueue.removeMutationBatch(h,p)))})(e,r,t,i).next((()=>i.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let h=Q();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Rh(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Uo.getLastRemoteSnapshotVersion(e)))}function H_(n,t){const e=G(n),r=t.snapshotVersion;let s=e.Xa;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.nu.newChangeBuffer({trackRemovals:!0});s=e.Xa;const u=[];t.targetChanges.forEach(((m,p)=>{const w=s.get(p);if(!w)return;u.push(e.Uo.removeMatchingKeys(i,m.removedDocuments,p).next((()=>e.Uo.addMatchingKeys(i,m.addedDocuments,p))));let P=w.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?P=P.withResumeToken(at.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(m.resumeToken,r)),s=s.insert(p,P),(function(M,k,K){return M.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=z_?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(w,P,m)&&u.push(e.Uo.updateTargetData(i,P))}));let h=Ft(),f=Q();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))})),u.push(Q_(i,a,t.documentUpdates).next((m=>{h=m.su,f=m._u}))),!r.isEqual(z.min())){const m=e.Uo.getLastRemoteSnapshotVersion(i).next((p=>e.Uo.setTargetsMetadata(i,i.currentSequenceNumber,r)));u.push(m)}return C.waitFor(u).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,h,f))).next((()=>h))})).then((i=>(e.Xa=s,i)))}function Q_(n,t,e){let r=Q(),s=Q();return e.forEach((i=>r=r.add(i))),t.getEntries(n,r).next((i=>{let a=Ft();return e.forEach(((u,h)=>{const f=i.get(u);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(z.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):L(ca,"Ignoring outdated watch update for ",u,". Current version:",f.version," Watch version:",h.version)})),{su:a,_u:s}}))}function X_(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Ro),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function Y_(n,t){const e=G(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.Uo.getTargetData(r,t).next((i=>i?(s=i,C.resolve(s)):e.Uo.allocateTargetId(r).next((a=>(s=new Ee(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Uo.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Xa.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Xa=e.Xa.insert(r.targetId,r),e.eu.set(t,r.targetId)),r}))}async function _o(n,t,e){const r=G(n),s=r.Xa.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!jn(a))throw a;L(ca,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Xa=r.Xa.remove(t),r.eu.delete(s.target)}function Ic(n,t,e){const r=G(n);let s=z.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,m){const p=G(h),w=p.eu.get(m);return w!==void 0?C.resolve(p.Xa.get(w)):p.Uo.getTargetData(f,m)})(r,a,yt(t)?t:ce(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Uo.getMatchingKeysForTargetId(a,u.targetId).next((h=>{i=h}))})).next((()=>r.Za.getDocumentsMatchingQuery(a,t,e?s:z.min(),e?i:Q()))).next((u=>(J_(r,u),{documents:u,ou:i})))))}function J_(n,t){t.forEach(((e,r)=>{const s=r.key.getCollectionGroup(),i=n.tu.get(s)||z.min();r.readTime.compareTo(i)>0&&n.tu.set(s,r.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.hu=0,this.Tu=null,this.Pu=!0}Iu(){this.hu===0&&(this.Ru("Unknown"),this.Tu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Tu=null,this.Au("Backend didn't respond within 10 seconds."),this.Ru("Offline"),Promise.resolve()))))}Vu(t){this.state==="Online"?this.Ru("Unknown"):(this.hu++,this.hu>=1&&(this.fu(),this.Au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ru("Offline")))}set(t){this.fu(),this.hu=0,t==="Online"&&(this.Pu=!1),this.Ru(t)}Ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Au(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Pu?(Ie(e),this.Pu=!1):L("OnlineStateTracker",e)}fu(){this.Tu!==null&&(this.Tu.cancel(),this.Tu=null)}}/**
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
 */const me="RemoteStore";class ty{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this.mu=new Map,this.pu=new Map,this.gu=new Map,this.yu=new Ke(1e3),this.wu=new Ke(1001),this.bu=new Set,this.Su=[],this.xu=i,this.xu.tn((a=>{r.enqueueAndForget((async()=>{En(this)&&(L(me,"Restarting streams for network reachability change."),await(async function(h){const f=G(h);f.bu.add(4),await ts(f),f.vu.set("Unknown"),f.bu.delete(4),await Ei(f)})(this))}))})),this.vu=new Z_(r,s)}}async function Ei(n){if(En(n))for(const t of n.Su)await t(!0)}async function ts(n){for(const t of n.Su)await t(!1)}function yo(n,t){return n.pu.get(t)||void 0}function Ph(n,t){const e=G(n),r=yo(e,t.targetId);if(r!==void 0&&e.mu.has(r))return;const s=(function(u,h){const f=yo(u,h);f!==void 0&&u.gu.delete(f);const m=(function(w,P){return P%2!=0?w.wu.next():w.yu.next()})(u,h);return u.pu.set(h,m),u.gu.set(m,h),m})(e,t.targetId);L(me,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const i=new Ee(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.mu.set(s,i),da(e)?fa(e):Wn(e).ur()&&ha(e,i)}function la(n,t){const e=G(n),r=Wn(e),s=yo(e,t);L(me,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),e.mu.delete(s),e.pu.delete(t),e.gu.delete(s),r.ur()&&xh(e,s),e.mu.size===0&&(r.ur()?r.Er():En(e)&&e.vu.set("Unknown"))}function ha(n,t){if(n.Du.rt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const e=n.gu.get(t.targetId);if(e===void 0)return void L(me,"SDK target ID not found for remote ID: "+t.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(e).size;t=t.withExpectedCount(r)}Wn(n).yr(t)}function xh(n,t){n.Du.rt(t),Wn(n).wr(t)}function fa(n){n.Du=new Km({getRemoteKeysForTarget:t=>{const e=n.gu.get(t);return e!==void 0?n.remoteSyncer.getRemoteKeysForTarget(e):Q()},Mt:t=>n.mu.get(t)||null,xt:()=>n.datastore.serializer.databaseId}),Wn(n).start(),n.vu.Iu()}function da(n){return En(n)&&!Wn(n).ar()&&n.mu.size>0}function En(n){return G(n).bu.size===0}function Ch(n){n.Du=void 0}async function ey(n){n.vu.set("Online")}async function ny(n){n.mu.forEach(((t,e)=>{ha(n,t)}))}async function ry(n,t){Ch(n),da(n)?(n.vu.Vu(t),fa(n)):n.vu.set("Unknown")}async function sy(n,t,e){if(n.vu.set("Online"),t instanceof Ul&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const u of i.targetIds){if(s.mu.has(u)){const h=s.gu.get(u);h!==void 0&&(await s.remoteSyncer.rejectListen(h,a),s.pu.delete(h),s.gu.delete(u)),s.mu.delete(u)}s.Du.removeTarget(u)}})(n,t)}catch(r){L(me,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ys(n,r)}else if(t instanceof Ps?n.Du.Tt(t):t instanceof Ml?n.Du.dt(t):n.Du.Rt(t),!e.isEqual(z.min()))try{const r=await Rh(n.localStore);e.compareTo(r)>=0&&await(function(i,a){const u=i.Du.Dt(a);u.targetChanges.forEach(((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const p=i.mu.get(m);p&&i.mu.set(m,p.withResumeToken(f.resumeToken,a))}})),u.targetMismatches.forEach(((f,m)=>{const p=i.mu.get(f);if(!p)return;i.mu.set(f,p.withResumeToken(at.EMPTY_BYTE_STRING,p.snapshotVersion)),xh(i,f);const w=new Ee(p.target,f,m,p.sequenceNumber);ha(i,w)}));const h=(function(m,p){const w=new Map;p.targetChanges.forEach(((S,M)=>{const k=m.gu.get(M);k!==void 0&&w.set(k,S)}));let P=new it(H);return p.targetMismatches.forEach(((S,M)=>{const k=m.gu.get(S);k!==void 0&&(P=P.insert(k,M))})),new Yr(p.snapshotVersion,w,P,p.documentUpdates,p.augmentedDocumentUpdates,p.resolvedLimboDocuments)})(i,u);return i.remoteSyncer.applyRemoteEvent(h)})(n,e)}catch(r){L(me,"Failed to raise snapshot:",r),await Ys(n,r)}}async function Ys(n,t,e){if(!jn(t))throw t;n.bu.add(1),await ts(n),n.vu.set("Offline"),e||(e=()=>Rh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(me,"Retrying IndexedDB access"),await e(),n.bu.delete(1),await Ei(n)}))}function Sh(n,t){return t().catch((e=>Ys(n,e,t)))}async function wi(n){const t=G(n),e=We(t);let r=t.du.length>0?t.du[t.du.length-1].batchId:Ro;for(;iy(t);)try{const s=await X_(t.localStore,r);if(s===null){t.du.length===0&&e.Er();break}r=s.batchId,oy(t,s)}catch(s){await Ys(t,s)}Nh(t)&&Dh(t)}function iy(n){return En(n)&&n.du.length<10}function oy(n,t){n.du.push(t);const e=We(n);e.ur()&&e.br&&e.Sr(t.mutations)}function Nh(n){return En(n)&&!We(n).ar()&&n.du.length>0}function Dh(n){We(n).start()}async function ay(n){We(n).Cr()}async function uy(n){const t=We(n);for(const e of n.du)t.Sr(e.mutations)}async function cy(n,t,e){const r=n.du.shift(),s=ia.from(r,t,e);await Sh(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await wi(n)}async function ly(n,t){t&&We(n).br&&await(async function(r,s){if((function(a){return Um(a)&&a!==x.ABORTED})(s.code)){const i=r.du.shift();We(r).lr(),await Sh(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await wi(r)}})(n,t),Nh(n)&&Dh(n)}async function Ac(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),L(me,"RemoteStore received new credentials");const r=En(e);e.bu.add(3),await ts(e),r&&e.vu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.bu.delete(3),await Ei(e)}async function hy(n,t){const e=G(n);t?(e.bu.delete(2),await Ei(e)):t||(e.bu.add(2),await ts(e),e.vu.set("Unknown"))}function Wn(n){return n.Cu||(n.Cu=(function(e,r,s){const i=G(e);return i.Or(),new vp(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{pn:ey.bind(null,n),yn:ny.bind(null,n),bn:ry.bind(null,n),gr:sy.bind(null,n)}),n.Su.push((async t=>{t?(n.Cu.lr(),da(n)?fa(n):n.vu.set("Unknown")):(await n.Cu.stop(),Ch(n))}))),n.Cu}function We(n){return n.Fu||(n.Fu=(function(e,r,s){const i=G(e);return i.Or(),new Ip(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{pn:()=>Promise.resolve(),yn:ay.bind(null,n),bn:ly.bind(null,n),vr:uy.bind(null,n),Dr:cy.bind(null,n)}),n.Su.push((async t=>{t?(n.Fu.lr(),await wi(n)):(await n.Fu.stop(),n.du.length>0&&(L(me,`Stopping write stream with ${n.du.length} pending writes`),n.du=[]))}))),n.Fu}/**
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
 */class ma{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ie("Uncaught Error in snapshot listener:",t.toString()))}Mu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */class pa{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new we,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,u=new pa(t,e,a,s,i);return u.start(r),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(n,t){if(Ie("AsyncQueue",`${t}: ${n}`),jn(n))return new D(x.UNAVAILABLE,`${t}: ${n}`);throw n}class Vc{constructor(){this.activeTargetIds=$m()}ec(t){this.activeTargetIds=this.activeTargetIds.add(t)}tc(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xu(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fy{constructor(){this.Uc=new Vc,this.kc={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Uc.ec(t),this.kc[t]||"not-current"}updateQueryState(t,e,r){this.kc[t]=e}removeLocalQueryTarget(t){this.Uc.tc(t)}isLocalQueryTarget(t){return this.Uc.activeTargetIds.has(t)}clearQueryState(t){delete this.kc[t]}getAllActiveQueryTargets(){return this.Uc.activeTargetIds}isActiveQueryTarget(t){return this.Uc.activeTargetIds.has(t)}start(){return this.Uc=new Vc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}function Yi(){return typeof document<"u"?document:null}/**
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
 */class cn{static emptySet(t){return new cn(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=Vn(),this.sortedSet=new it(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof cn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new cn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class bc{constructor(){this.Qc=new it(F.comparator)}track(t){const e=t.doc.key,r=this.Qc.get(e);r?t.type!==0&&r.type===3?this.Qc=this.Qc.insert(e,t):t.type===3&&r.type!==1?this.Qc=this.Qc.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Qc=this.Qc.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Qc=this.Qc.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Qc=this.Qc.remove(e):t.type===1&&r.type===2?this.Qc=this.Qc.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Qc=this.Qc.insert(e,{type:2,doc:t.doc}):q(63341,{Nt:t,qc:r}):this.Qc=this.Qc.insert(e,t)}Kc(){const t=[];return this.Qc.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Un{constructor(t,e,r,s,i,a,u,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,i){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new Un(t,e,cn.emptySet(e),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_i(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class dy{constructor(){this.$c=void 0,this.Wc=[]}Gc(){return this.Wc.some((t=>t.jc()))}}class my{constructor(){this.queries=Rc(),this.onlineState="Unknown",this.zc=new Set}terminate(){(function(e,r){const s=G(e),i=s.queries;s.queries=Rc(),i.forEach(((a,u)=>{for(const h of u.Wc)h.onError(r)}))})(this,new D(x.ABORTED,"Firestore shutting down"))}}function Rc(){return new _n((n=>wh(n)),_i)}async function _a(n,t){const e=G(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.Gc()&&t.jc()&&(r=2):(i=new dy,r=t.jc()?0:1);try{switch(r){case 0:i.$c=await e.onListen(s,!0);break;case 1:i.$c=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=ga(a,`Initialization of query '${yt(t.query)?Te(t.query):wr(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.Wc.push(t),t.Hc(e.onlineState),i.$c&&t.Jc(i.$c)&&Ea(e)}async function ya(n,t){const e=G(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const a=i.Wc.indexOf(t);a>=0&&(i.Wc.splice(a,1),i.Wc.length===0?s=t.jc()?0:1:!i.Gc()&&t.jc()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function py(n,t){const e=G(n);let r=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.Wc)u.Jc(s)&&(r=!0);a.$c=s}}r&&Ea(e)}function gy(n,t,e){const r=G(n),s=r.queries.get(t);if(s)for(const i of s.Wc)i.onError(e);r.queries.delete(t)}function Ea(n){n.zc.forEach((t=>{t.next()}))}var Eo;(function(n){n.Default="default",n.Cache="cache"})(Eo||(Eo={}));class wa{constructor(t,e,r){this.query=t,this.Yc=e,this.Zc=!1,this.Xc=null,this.onlineState="Unknown",this.options=r||{}}Jc(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Un(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Zc?this.el(t)&&(this.Yc.next(t),e=!0):this.tl(t,this.onlineState)&&(this.nl(t),e=!0),this.Xc=t,e}onError(t){this.Yc.error(t)}Hc(t){this.onlineState=t;let e=!1;return this.Xc&&!this.Zc&&this.tl(this.Xc,t)&&(this.nl(this.Xc),e=!0),e}tl(t,e){if(!t.fromCache||!this.jc())return!0;const r=e!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}el(t){if(t.docChanges.length>0)return!0;const e=this.Xc&&this.Xc.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}nl(t){t=Un.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Zc=!0,this.Yc.next(t)}jc(){return this.options.source!==Eo.Cache}}/**
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
 */class Oh{constructor(t){this.key=t}}class kh{constructor(t){this.key=t}}class _y{constructor(t,e){this.query=t,this.ll=e,this.El=null,this.hasCachedResults=!1,this.current=!1,this.hl=Q(),this.mutatedKeys=Q(),this.Tl=yt(t)?go(t):ko(t),this.Pl=new cn(this.Tl)}get Il(){return this.ll}Rl(t,e){const r=e?e.Al:new bc,s=e?e.Pl:this.Pl;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const[h,f]=this.Vl(this.query,s);t.inorderTraversal(((p,w)=>{const P=s.get(p),S=P_(this.query,w)?w:null,M=!!P&&this.mutatedKeys.has(P.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let K=!1;P&&S?P.data.isEqual(S.data)?M!==k&&(r.track({type:3,doc:S}),K=!0):this.fl(P,S)||(r.track({type:2,doc:S}),K=!0,(h&&this.Tl(S,h)>0||f&&this.Tl(S,f)<0)&&(u=!0)):!P&&S?(r.track({type:0,doc:S}),K=!0):P&&!S&&(r.track({type:1,doc:P}),K=!0,(h||f)&&(u=!0)),K&&(S?(a=a.add(S),i=k?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}));const m=this.dl(this.query);if(m)if(yt(this.query)){const p=[];a.forEach((S=>p.push(S)));const w=Ah(this.query,p);let P=new cn(go(this.query));for(const S of w)P=P.add(S);a.forEach((S=>{P.has(S.key)||(i=i.delete(S.key),r.track({type:1,doc:S}))})),a=P}else{const p=this.ml(this.query);for(;a.size>m;){const w=p==="F"?a.last():a.first();a=a.delete(w.key),i=i.delete(w.key),r.track({type:1,doc:w})}}return{Pl:a,Al:r,Ja:u,mutatedKeys:i}}dl(t){var e;return yt(t)?(e=Xi(t))==null?void 0:e.limit:t.limit||void 0}ml(t){if(yt(t)){const e=Xi(t);return e&&e.limit<0?"L":"F"}return t.limitType}Vl(t,e){var r;if(yt(t)){const s=(r=Xi(t))==null?void 0:r.limit;return[e.size===s?e.last():null,null]}return[t.limitType==="F"&&e.size===this.dl(this.query)?e.last():null,t.limitType==="L"&&e.size===this.dl(this.query)?e.first():null]}fl(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.Pl;this.Pl=t.Pl,this.mutatedKeys=t.mutatedKeys;const a=t.Al.Kc();a.sort(((m,p)=>(function(P,S){const M=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Nt:k})}};return M(P)-M(S)})(m.type,p.type)||this.Tl(m.doc,p.doc))),this.pl(r),s=s??!1;const u=e&&!s?this.gl():[],h=this.hl.size===0&&this.current&&!s?1:0,f=h!==this.El;return this.El=h,a.length!==0||f?{snapshot:new Un(this.query,t.Pl,i,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),yl:u}:{yl:u}}Hc(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pl:this.Pl,Al:new bc,mutatedKeys:this.mutatedKeys,Ja:!1},!1)):{yl:[]}}wl(t){return!this.ll.has(t)&&!!this.Pl.has(t)&&!this.Pl.get(t).hasLocalMutations}pl(t){t&&(t.addedDocuments.forEach((e=>this.ll=this.ll.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.ll=this.ll.delete(e))),this.current=t.current)}gl(){if(!this.current)return[];const t=this.hl;this.hl=Q(),this.Pl.forEach((r=>{this.wl(r.key)&&(this.hl=this.hl.add(r.key))}));const e=[];return t.forEach((r=>{this.hl.has(r)||e.push(new kh(r))})),this.hl.forEach((r=>{t.has(r)||e.push(new Oh(r))})),e}bl(t){this.ll=t.ou,this.hl=Q();const e=this.Rl(t.documents);return this.applyChanges(e,!0)}Sl(){return Un.fromInitialDocuments(this.query,this.Pl,this.mutatedKeys,this.El===0,this.hasCachedResults)}}const Ta="SyncEngine";class yy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ey{constructor(t){this.key=t,this.xl=!1}}class wy{constructor(t,e,r,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.vl={},this.Dl=new _n((u=>wh(u)),_i),this.Cl=new Map,this.Fl=new Set,this.Ol=new it(F.comparator),this.Ml=new Map,this.Nl=new oa,this.Bl={},this.Ll=new Map,this.Ul=Ke.K_(),this.onlineState="Unknown",this.kl=void 0}get isPrimaryClient(){return this.kl===!0}}async function Ty(n,t,e=!0){const r=qh(n);let s;const i=r.Dl.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Sl()):s=await Lh(r,t,e,!0),s}async function vy(n,t){const e=qh(n);await Lh(e,t,!0,!1)}async function Lh(n,t,e,r){const s=await Y_(n.localStore,yt(t)?t:ce(t)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,e);let u;return r&&(u=await Iy(n,t,i,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ph(n.remoteStore,s),u}async function Iy(n,t,e,r,s){n.Ql=(p,w,P)=>(async function(M,k,K,X){let rt=k.view.Rl(K);rt.Ja&&(rt=await Ic(M.localStore,k.query,!1).then((({documents:v})=>k.view.Rl(v,rt))));const Nt=X&&X.targetChanges.get(k.targetId),pt=X&&X.targetMismatches.get(k.targetId)!=null,gt=k.view.applyChanges(rt,M.isPrimaryClient,Nt,pt);return xc(M,k.targetId,gt.yl),gt.snapshot})(n,p,w,P);const i=await Ic(n.localStore,t,!0),a=new _y(t,i.ou),u=a.Rl(i.documents),h=Jr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(u,n.isPrimaryClient,h);xc(n,e,f.yl);const m=new yy(t,e,a);return n.Dl.set(t,m),n.Cl.has(e)?n.Cl.get(e).push(t):n.Cl.set(e,[t]),f.snapshot}async function Ay(n,t,e){const r=G(n),s=r.Dl.get(t),i=r.Cl.get(s.targetId);if(i.length>1)return r.Cl.set(s.targetId,i.filter((a=>!_i(a,t)))),void r.Dl.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _o(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&la(r.remoteStore,s.targetId),wo(r,s.targetId)})).catch(qn)):(wo(r,s.targetId),await _o(r.localStore,s.targetId,!0))}async function Vy(n,t){const e=G(n),r=e.Dl.get(t),s=e.Cl.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),la(e.remoteStore,r.targetId))}async function by(n,t,e){const r=Dy(n);try{const s=await(function(a,u){const h=G(a),f=tt.now(),m=u.reduce(((P,S)=>P.add(S.key)),Q());let p,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let S=Ft(),M=Q();return h.nu.getEntries(P,m).next((k=>{S=k,S.forEach(((K,X)=>{X.isValidDocument()||(M=M.add(K))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,S))).next((k=>{p=k;const K=[];for(const X of u){const rt=_m(X,p.get(X.key).overlayedDocument);rt!=null&&K.push(new Xe(X.key,rt,gl(rt.value.mapValue),te.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,K,u)})).next((k=>{w=k;const K=k.applyToLocalDocumentSet(p,M);return h.documentOverlayCache.saveOverlays(P,k.batchId,K)}))})).then((()=>({batchId:w.batchId,changes:kl(p)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,u,h){let f=a.Bl[a.currentUser.toKey()];f||(f=new it(H)),f=f.insert(u,h),a.Bl[a.currentUser.toKey()]=f})(r,s.batchId,e),await es(r,s.changes),await wi(r.remoteStore)}catch(s){const i=ga(s,"Failed to persist write");e.reject(i)}}async function Mh(n,t){const e=G(n);try{const r=await H_(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Ml.get(i);a&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.xl=!0:s.modifiedDocuments.size>0?U(a.xl,14607):s.removedDocuments.size>0&&(U(a.xl,42227),a.xl=!1))})),await es(e,r,t)}catch(r){await qn(r)}}function Pc(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Dl.forEach(((i,a)=>{const u=a.view.Hc(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const h=G(a);h.onlineState=u;let f=!1;h.queries.forEach(((m,p)=>{for(const w of p.Wc)w.Hc(u)&&(f=!0)})),f&&Ea(h)})(r.eventManager,t),s.length&&r.vl.gr(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ry(n,t,e){const r=G(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ml.get(t),i=s&&s.key;if(i){let a=new it(F.comparator);a=a.insert(i,Ct.newNoDocument(i,z.min()));const u=Q().add(i),h=new Yr(z.min(),new Map,new it(H),a,Ft(),u);await Mh(r,h),r.Ol=r.Ol.remove(i),r.Ml.delete(t),va(r)}else await _o(r.localStore,t,!1).then((()=>wo(r,t,e))).catch(qn)}async function Py(n,t){const e=G(n),r=t.batch.batchId;try{const s=await W_(e.localStore,t);Fh(e,r,null),Uh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await es(e,s)}catch(s){await qn(s)}}async function xy(n,t,e){const r=G(n);try{const s=await(function(a,u){const h=G(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,u).next((p=>(U(p!==null,37113),m=p.keys(),h.mutationQueue.removeMutationBatch(f,p)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,u))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(r.localStore,t);Fh(r,t,e),Uh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await es(r,s)}catch(s){await qn(s)}}function Uh(n,t){(n.Ll.get(t)||[]).forEach((e=>{e.resolve()})),n.Ll.delete(t)}function Fh(n,t,e){const r=G(n);let s=r.Bl[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Bl[r.currentUser.toKey()]=s}}function wo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Cl.get(t))n.Dl.delete(r),e&&n.vl.ql(r,e);n.Cl.delete(t),n.isPrimaryClient&&n.Nl.Ao(t).forEach((r=>{n.Nl.containsKey(r)||Bh(n,r)}))}function Bh(n,t){n.Fl.delete(t.path.canonicalString());const e=n.Ol.get(t);e!==null&&(la(n.remoteStore,e),n.Ol=n.Ol.remove(t),n.Ml.delete(e),va(n))}function xc(n,t,e){for(const r of e)r instanceof Oh?(n.Nl.addReference(r.key,t),Cy(n,r)):r instanceof kh?(L(Ta,"Document no longer in limbo: "+r.key),n.Nl.removeReference(r.key,t),n.Nl.containsKey(r.key)||Bh(n,r.key)):q(19791,{Kl:r})}function Cy(n,t){const e=t.key,r=e.path.canonicalString();n.Ol.get(e)||n.Fl.has(r)||(L(Ta,"New document in limbo: "+e),n.Fl.add(r),va(n))}function va(n){for(;n.Fl.size>0&&n.Ol.size<n.maxConcurrentLimboResolutions;){const t=n.Fl.values().next().value;n.Fl.delete(t);const e=new F(Z.fromString(t)),r=n.Ul.next();n.Ml.set(r,new Ey(e)),n.Ol=n.Ol.insert(e,r),Ph(n.remoteStore,new Ee(ce(ii(e.path)),r,"TargetPurposeLimboResolution",ci.Br))}}async function es(n,t,e){const r=G(n),s=[],i=[],a=[];r.Dl.isEmpty()||(r.Dl.forEach(((u,h)=>{a.push(r.Ql(h,t,e).then((f=>{var m;if((f||e)&&r.isPrimaryClient){const p=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(f){s.push(f);const p=ua.Ua(h.targetId,f);i.push(p)}})))})),await Promise.all(a),r.vl.gr(s),await(async function(h,f){const m=G(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>C.forEach(f,(w=>C.forEach(w.Ba,(P=>m.persistence.referenceDelegate.addReference(p,w.targetId,P))).next((()=>C.forEach(w.La,(P=>m.persistence.referenceDelegate.removeReference(p,w.targetId,P)))))))))}catch(p){if(!jn(p))throw p;L(ca,"Failed to update sequence numbers: "+p)}for(const p of f){const w=p.targetId;if(!p.fromCache){const P=m.Xa.get(w),S=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(S);m.Xa=m.Xa.insert(w,M)}}})(r.localStore,i))}async function Sy(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){L(Ta,"User change. New user:",t.toKey());const r=await bh(e.localStore,t);e.currentUser=t,(function(i,a){i.Ll.forEach((u=>{u.forEach((h=>{h.reject(new D(x.CANCELLED,a))}))})),i.Ll.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await es(e,r.iu)}}function Ny(n,t){const e=G(n),r=e.Ml.get(t);if(r&&r.xl)return Q().add(r.key);{let s=Q();const i=e.Cl.get(t);if(!i)return s;for(const a of i??[]){const u=e.Dl.get(a);s=s.unionWith(u.view.Il)}return s}}function qh(n){const t=G(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ny.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ry.bind(null,t),t.vl.gr=py.bind(null,t.eventManager),t.vl.ql=gy.bind(null,t.eventManager),t}function Dy(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Py.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xy.bind(null,t),t}class Js{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ai(t.databaseInfo.databaseId),this.sharedClientState=this.Wl(t),this.persistence=this.Gl(t),await this.persistence.start(),this.localStore=this.jl(t),this.gcScheduler=this.zl(t,this.localStore),this.indexBackfillerScheduler=this.Hl(t,this.localStore)}zl(t,e){return null}Hl(t,e){return null}jl(t){return K_(this.persistence,new $_,t.initialUser,this.serializer)}Gl(t){return new Vh(aa.jo,this.serializer)}Wl(t){return new fy}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Js.provider={build:()=>new Js};class Oy extends Js{constructor(t){super(),this.cacheSizeBytes=t}zl(t,e){U(this.persistence.referenceDelegate instanceof Xs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Op(r,t.asyncQueue,e)}Gl(t){const e=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new Vh((r=>Xs.jo(r,e)),this.serializer)}}class To{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sy.bind(null,this.syncEngine),await hy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new my})()}createDatastore(t){const e=ai(t.databaseInfo.databaseId),r=Tp(t.databaseInfo);return bp(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,i,a,u){return new ty(r,s,i,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>Pc(this.syncEngine,e,0)),(function(){return fc.cn()?new fc:new _p})())}createSyncEngine(t,e){return(function(s,i,a,u,h,f,m){const p=new wy(s,i,a,u,h,f);return m&&(p.kl=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=G(s);L(me,"RemoteStore shutting down."),i.bu.add(5),await ts(i),i.xu.shutdown(),i.vu.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}To.provider={build:()=>new To};/**
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
 */const He="FirestoreClient";class ky{constructor(t,e,r,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=xt.UNAUTHENTICATED,this.clientId=Vo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{L(He,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(L(He,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new we;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ga(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ji(n,t){n.asyncQueue.verifyOperationInProgress(),L(He,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await bh(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Cc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ly(n);L(He,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Ac(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Ac(t.remoteStore,s))),n._onlineComponents=t}async function Ly(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(He,"Using user provided OfflineComponentProvider");try{await Ji(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ee("Error using user provided cache. Falling back to memory cache: "+e),await Ji(n,new Js)}}else L(He,"Using default OfflineComponentProvider"),await Ji(n,new Oy(void 0));return n._offlineComponents}async function jh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(He,"Using user provided OnlineComponentProvider"),await Cc(n,n._uninitializedComponentsProvider._online)):(L(He,"Using default OnlineComponentProvider"),await Cc(n,new To))),n._onlineComponents}function My(n){return jh(n).then((t=>t.syncEngine))}async function Zs(n){const t=await jh(n),e=t.eventManager;return e.onListen=Ty.bind(null,t.syncEngine),e.onUnlisten=Ay.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=vy.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vy.bind(null,t.syncEngine),e}function Uy(n,t,e,r){const s=new ma(r),i=new wa(t,s,e);return n.asyncQueue.enqueueAndForget((async()=>_a(await Zs(n),i))),()=>{s.Mu(),n.asyncQueue.enqueueAndForget((async()=>ya(await Zs(n),i)))}}function $h(n,t,e={}){const r=new we;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,h,f){const m=new ma({next:w=>{m.Mu(),a.enqueueAndForget((()=>ya(i,p)));const P=w.docs.has(u);!P&&w.fromCache?f.reject(new D(x.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&h&&h.source==="server"?f.reject(new D(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),p=new wa(ii(u.path),m,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return _a(i,p)})(await Zs(n),n.asyncQueue,t,e,r))),r.promise}function Fy(n,t,e={}){const r=new we;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,h,f){const m=new ma({next:w=>{m.Mu(),a.enqueueAndForget((()=>ya(i,p))),w.fromCache&&h.source==="server"?f.reject(new D(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),p=new wa(u instanceof Ir?E_(u):u,m,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return _a(i,p)})(await Zs(n),n.asyncQueue,t,e,r))),r.promise}function By(n,t){const e=new we;return n.asyncQueue.enqueueAndForget((async()=>by(await My(n),t,e))),e.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh=class{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new qy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Mn("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}},qy=class extends zh{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{convertValue(t,e="none"){switch(mt(t)){case 0:return null;case 2:return t.booleanValue;case 3:if("mapValue"in t){if(qe(t))return this.convertToInt32Value(t.mapValue);if(Zt(t))return this.convertToDecimal128Value(t.mapValue)}return ct(t.integerValue||t.doubleValue);case 4:return this.convertTimestamp(t.timestampValue);case 6:return this.convertServerTimestamp(t,e);case 7:return t.stringValue;case 8:return"bytesValue"in t?this.convertBytes(mn(t.bytesValue)):this.convertToBytesWithSubtype(t.mapValue);case 9:return this.convertReference(t.referenceValue);case 11:return this.convertGeoPoint(t.geoPointValue);case 13:return this.convertArray(t.arrayValue,e);case 15:return this.convertObject(t.mapValue,e);case 14:return this.convertVectorValue(t.mapValue);case 12:return this.convertToRegexValue(t.mapValue);case 10:return this.convertToBsonObjectId(t.mapValue);case 5:return this.convertToBsonTimestamp(t.mapValue);case 16:return ge.instance();case 1:return _e.instance();default:throw q(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Qe(t,((s,i)=>{r[s]=this.convertValue(i,e)})),r}convertVectorValue(t){var r,s,i;const e=(i=(s=(r=t.fields)==null?void 0:r[Sr].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>ct(a.doubleValue)));return new qt(e)}convertToBsonObjectId(t){var r,s;const e=((s=(r=t.fields)==null?void 0:r[Nr])==null?void 0:s.stringValue)??"";return new Fo(e)}convertToBytesWithSubtype(t){var u;const e=(u=t.fields)==null?void 0:u[ni],r=e==null?void 0:e.bytesValue;if(!r)throw new Error("Received incorrect bytesValue for Bytes with subtype");const s=mn(r).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const i=s[0],a=s.slice(1);return new Kt(at.fromUint8Array(a),i)}convertToBsonTimestamp(t){var i,a,u,h,f,m,p;const e=(i=t.fields)==null?void 0:i[an],r=Number((h=(u=(a=e==null?void 0:e.mapValue)==null?void 0:a.fields)==null?void 0:u[Us])==null?void 0:h.integerValue),s=Number((p=(m=(f=e==null?void 0:e.mapValue)==null?void 0:f.fields)==null?void 0:m[Fs])==null?void 0:p.integerValue);return new Bo(r,s)}convertToRegexValue(t){var s,i,a,u,h,f,m,p,w,P;const e=((h=(u=(a=(i=(s=t.fields)==null?void 0:s[Oe])==null?void 0:i.mapValue)==null?void 0:a.fields)==null?void 0:u[Ls])==null?void 0:h.stringValue)??"",r=((P=(w=(p=(m=(f=t.fields)==null?void 0:f[Oe])==null?void 0:m.mapValue)==null?void 0:p.fields)==null?void 0:w[Ms])==null?void 0:P.stringValue)??"";return new zo(e,r)}convertToInt32Value(t){var r,s;const e=Number((s=(r=t.fields)==null?void 0:r[gn])==null?void 0:s.integerValue);return new $o(e)}convertToDecimal128Value(t){var r,s;const e=((s=(r=t.fields)==null?void 0:r[Be])==null?void 0:s.stringValue)??"";return new qo(e)}convertGeoPoint(t){return new he(ct(t.latitude),ct(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Hr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Dn(t));default:return null}}convertTimestamp(t){const e=Fe(t);return new tt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);U(zl(r),9688,{name:t});const s=new xr(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(e)||Ie(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="AsyncQueue";class Nc{constructor(t=Promise.resolve()){this.iE=[],this.sE=!1,this._E=[],this.oE=null,this.aE=!1,this.uE=!1,this.cE=[],this._r=new Ql(this,"async_queue_retry"),this.lE=()=>{const r=Yi();r&&L(Sc,"Visibility state changed to "+r.visibilityState),this._r.Xn()},this.EE=t;const e=Yi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.lE)}get isShuttingDown(){return this.sE}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.hE(),this.TE(t)}enterRestrictedMode(t){if(!this.sE){this.sE=!0,this.uE=t||!1;const e=Yi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.lE)}}enqueue(t){if(this.hE(),this.sE)return new Promise((()=>{}));const e=new we;return this.TE((()=>this.sE&&this.uE?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.iE.push(t),this.PE())))}async PE(){if(this.iE.length!==0){try{await this.iE[0](),this.iE.shift(),this._r.reset()}catch(t){if(!jn(t))throw t;L(Sc,"Operation failed with retryable error: "+t)}this.iE.length>0&&this._r.Yn((()=>this.PE()))}}TE(t){const e=this.EE.then((()=>(this.aE=!0,t().catch((r=>{throw this.oE=r,this.aE=!1,Ie("INTERNAL UNHANDLED ERROR: ",Dc(r)),r})).then((r=>(this.aE=!1,r))))));return this.EE=e,e}enqueueAfterDelay(t,e,r){this.hE(),this.cE.indexOf(t)>-1&&(e=0);const s=pa.createAndSchedule(this,t,e,r,(i=>this.IE(i)));return this._E.push(s),s}hE(){this.oE&&q(47125,{RE:Dc(this.oE)})}verifyOperationInProgress(){}async AE(){let t;do t=this.EE,await t;while(t!==this.EE)}VE(t){for(const e of this._E)if(e.timerId===t)return!0;return!1}fE(t){return this.AE().then((()=>{this._E.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this._E)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.AE()}))}dE(t){this.cE.push(t)}IE(t){const e=this._E.indexOf(t);this._E.splice(e,1)}}function Dc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class be extends li{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Nc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Nc(t),this._firestoreClient=void 0,await t}}}function e0(n,t){const e=typeof n=="object"?n:Bd(),r=typeof n=="string"?n:t||ks,s=Od(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Uf("firestore");i&&Mp(s,...i)}return s}function ns(n){if(n._terminated)throw new D(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zy(n),n._firestoreClient}function zy(n){var r,s,i,a;const t=n._freezeSettings(),e=Pp(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new ky(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}})(n._componentsProvider))}/**
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
 */class Ia extends jy{constructor(t){super(),this.firestore=t}convertBytes(t){return new Kt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,e)}}class gr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ln extends zh{constructor(t,e,r,s,i,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Mn("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ln._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ln._jsonSchemaVersion="firestore/documentSnapshot/1.0",ln._jsonSchema={type:lt("string",ln._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class Ss extends ln{data(t={}){return super.data(t)}}class hn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new gr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Ss(this._firestore,this._userDataWriter,r.key,r,new gr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{yt(s._snapshot.query)?go(s._snapshot.query):ko(s.query._query);const h=new Ss(s._firestore,s._userDataWriter,u.doc.key,u.doc,new gr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const h=new Ss(s._firestore,s._userDataWriter,u.doc.key,u.doc,new gr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return u.type!==0&&(f=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Gy(u.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=hn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Vo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Gy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
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
 */hn._jsonSchemaVersion="firestore/querySnapshot/1.0",hn._jsonSchema={type:lt("string",hn._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Aa{}class Kh extends Aa{}function n0(n,t,...e){let r=[];t instanceof Aa&&r.push(t),r=r.concat(e),(function(i){const a=i.filter((h=>h instanceof ba)).length,u=i.filter((h=>h instanceof Va)).length;if(a>1||a>0&&u>0)throw new D(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Va extends Kh{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Va(t,e,r)}_apply(t){const e=this._parse(t);return Wh(t._query,e),new Ye(t.firestore,t.converter,uo(t._query,e))}_parse(t){const e=Ko(t.firestore);return(function(i,a,u,h,f,m,p){let w;if((function(M,k){if(typeof M=="number"&&isNaN(M)&&k!=="=="&&k!=="!="&&k!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on NaN.");if(M===null&&k!=="=="&&k!=="!="&&k!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on Null.")})(p,m),f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){kc(p,m);const S=[];for(const M of p)S.push(Oc(h,i,M));w={arrayValue:{values:S}}}else w=Oc(h,i,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||kc(p,m),w=Gp(u,a,p,m==="in"||m==="not-in");return ft.create(f,m,w)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ba extends Aa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ba(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:ne.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const u=i.getFlattenedFilters();for(const h of u)Wh(a,h),a=uo(a,h)})(t._query,e),new Ye(t.firestore,t.converter,uo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ra extends Kh{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Ra(t,e,r)}_apply(t){return new Ye(t.firestore,t.converter,Ks(t._query,this._limit,this._limitType))}}function r0(n){return sm("limit",n),Ra._create("limit",n,"F")}function Oc(n,t,e){if(typeof(e=fe(e))=="string"){if(e==="")throw new D(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nl(t)&&e.indexOf("/")!==-1)throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Z.fromString(e));if(!F.isDocumentKey(r))throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xu(n,new F(r))}if(e instanceof ot)return Xu(n,e._key);throw new D(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ti(e)}.`)}function kc(n,t){if(!Array.isArray(n)||n.length===0)throw new D(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Wh(n,t){const e=(function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new D(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}/**
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
 */function Lc(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(n){n=Bt(n,ot);const t=Bt(n.firestore,be),e=ns(t);return $h(e,n._key).then((r=>xa(t,n,r)))}function i0(n){n=Bt(n,ot);const t=Bt(n.firestore,be),e=ns(t);return $h(e,n._key,{source:"server"}).then((r=>xa(t,n,r)))}function o0(n){n=Bt(n,Ye);const t=Bt(n.firestore,be),e=ns(t),r=new Ia(t);return Gh(n._query),Fy(e,n._query).then((s=>new hn(t,r,n,s)))}function a0(n,t,e,...r){n=Bt(n,ot);const s=Bt(n.firestore,be),i=Ko(s);let a;return a=typeof(t=fe(t))=="string"||t instanceof ui?zp(i,"updateDoc",n._key,t,e,r):$p(i,"updateDoc",n._key,t),Pa(s,[a.toMutation(n._key,te.exists(!0))])}function u0(n){return Pa(Bt(n.firestore,be),[new Oo(n._key,te.none())])}function c0(n,t){const e=Bt(n.firestore,be),r=Up(n),s=$y(n.converter,t),i=Ko(n.firestore);return Pa(e,[jp(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,te.exists(!1))]).then((()=>r))}function l0(n,...t){var f,m,p;n=fe(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Lc(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Lc(t[r])){const w=t[r];t[r]=(f=w.next)==null?void 0:f.bind(w),t[r+1]=(m=w.error)==null?void 0:m.bind(w),t[r+2]=(p=w.complete)==null?void 0:p.bind(w)}let i,a,u;if(n instanceof ot)a=Bt(n.firestore,be),u=ii(n._key.path),i={next:w=>{t[r]&&t[r](xa(a,n,w))},error:t[r+1],complete:t[r+2]};else{const w=Bt(n,Ye);a=Bt(w.firestore,be),u=w._query;const P=new Ia(a);i={next:S=>{t[r]&&t[r](new hn(a,P,w,S))},error:t[r+1],complete:t[r+2]},Gh(n._query)}const h=ns(a);return Uy(h,u,s,i)}function Pa(n,t){const e=ns(n);return By(e,t)}function xa(n,t,e){const r=e.docs.get(t._key),s=new Ia(n);return new ln(n,s,t._key,r,new gr(e.hasPendingWrites,e.fromCache),t.converter)}const Mc="@firebase/firestore",Uc="4.18.0";(function(t,e=!0){Yd(Ud),Os(new Vr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),u=new be(new dp(r.getProvider("auth-internal")),new gp(a,r.getProvider("app-check-internal")),am(a,s),a);return i={useFetchStreams:e,...i},u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),xn(Mc,Uc,t),xn(Mc,Uc,"esm2020")})();var Ky="firebase",Wy="13.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(Ky,Wy,"app");export{Bd as a,e0 as b,i0 as c,Up as d,Jy as e,u0 as f,Qy as g,c0 as h,Fd as i,s0 as j,o0 as k,r0 as l,l0 as o,n0 as q,a0 as u};
