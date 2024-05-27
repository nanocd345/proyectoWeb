var lt=Object.defineProperty;var dt=(i,t,e)=>t in i?lt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var T=(i,t,e)=>(dt(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,D=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),W=new WeakMap;let ot=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(D&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=W.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&W.set(e,t))}return t}toString(){return this.cssText}};const ht=i=>new ot(typeof i=="string"?i:i+"",void 0,I),pt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,r,a)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new ot(e,i,I)},ut=(i,t)=>{if(D)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),r=M.litNonce;r!==void 0&&o.setAttribute("nonce",r),o.textContent=e.cssText,i.appendChild(o)}},F=D?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return ht(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mt,defineProperty:gt,getOwnPropertyDescriptor:ft,getOwnPropertyNames:vt,getOwnPropertySymbols:yt,getPrototypeOf:bt}=Object,f=globalThis,Z=f.trustedTypes,$t=Z?Z.emptyScript:"",O=f.reactiveElementPolyfillSupport,S=(i,t)=>i,j={toAttribute(i,t){switch(t){case Boolean:i=i?$t:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},rt=(i,t)=>!mt(i,t),J={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);r!==void 0&&gt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:a}=ft(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const c=r==null?void 0:r.call(this);a.call(this,s),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,o=[...vt(e),...yt(e)];for(const r of o)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,r]of e)this.elementProperties.set(o,r)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const r=this._$Eu(e,o);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const r of o)e.unshift(F(r))}else t!==void 0&&e.push(F(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var a;const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(r!==void 0&&o.reflect===!0){const s=(((a=o.converter)==null?void 0:a.toAttribute)!==void 0?o.converter:j).toAttribute(e,o.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){var a;const o=this.constructor,r=o._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=o.getPropertyOptions(r),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:j;this._$Em=r,this[r]=c.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??rt)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,s]of r)s.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(r=>{var a;return(a=r.hostUpdate)==null?void 0:a.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var r;return(r=o.hostUpdated)==null?void 0:r.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[S("elementProperties")]=new Map,$[S("finalized")]=new Map,O==null||O({ReactiveElement:$}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,H=x.trustedTypes,K=H?H.createPolicy("lit-html",{createHTML:i=>i}):void 0,it="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+g,_t=`<${st}>`,b=document,E=()=>b.createComment(""),P=i=>i===null||typeof i!="object"&&typeof i!="function",at=Array.isArray,wt=i=>at(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",N=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,G=/>/g,v=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,Q=/"/g,nt=/^(?:script|style|textarea|title)$/i,At=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),z=At(1),_=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),tt=new WeakMap,y=b.createTreeWalker(b,129);function ct(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return K!==void 0?K.createHTML(t):t}const St=(i,t)=>{const e=i.length-1,o=[];let r,a=t===2?"<svg>":"",s=A;for(let c=0;c<e;c++){const n=i[c];let d,p,l=-1,u=0;for(;u<n.length&&(s.lastIndex=u,p=s.exec(n),p!==null);)u=s.lastIndex,s===A?p[1]==="!--"?s=X:p[1]!==void 0?s=G:p[2]!==void 0?(nt.test(p[2])&&(r=RegExp("</"+p[2],"g")),s=v):p[3]!==void 0&&(s=v):s===v?p[0]===">"?(s=r??A,l=-1):p[1]===void 0?l=-2:(l=s.lastIndex-p[2].length,d=p[1],s=p[3]===void 0?v:p[3]==='"'?Q:Y):s===Q||s===Y?s=v:s===X||s===G?s=A:(s=v,r=void 0);const m=s===v&&i[c+1].startsWith("/>")?" ":"";a+=s===A?n+_t:l>=0?(o.push(d),n.slice(0,l)+it+n.slice(l)+g+m):n+g+(l===-2?c:m)}return[ct(i,a+(i[e]||"<?>")+(t===2?"</svg>":"")),o]};class R{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let a=0,s=0;const c=t.length-1,n=this.parts,[d,p]=St(t,e);if(this.el=R.createElement(d,o),y.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=y.nextNode())!==null&&n.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(it)){const u=p[s++],m=r.getAttribute(l).split(g),k=/([.?@])?(.*)/.exec(u);n.push({type:1,index:a,name:k[2],strings:m,ctor:k[1]==="."?Ct:k[1]==="?"?Et:k[1]==="@"?Pt:q}),r.removeAttribute(l)}else l.startsWith(g)&&(n.push({type:6,index:a}),r.removeAttribute(l));if(nt.test(r.tagName)){const l=r.textContent.split(g),u=l.length-1;if(u>0){r.textContent=H?H.emptyScript:"";for(let m=0;m<u;m++)r.append(l[m],E()),y.nextNode(),n.push({type:2,index:++a});r.append(l[u],E())}}}else if(r.nodeType===8)if(r.data===st)n.push({type:2,index:a});else{let l=-1;for(;(l=r.data.indexOf(g,l+1))!==-1;)n.push({type:7,index:a}),l+=g.length-1}a++}}static createElement(t,e){const o=b.createElement("template");return o.innerHTML=t,o}}function w(i,t,e=i,o){var s,c;if(t===_)return t;let r=o!==void 0?(s=e._$Co)==null?void 0:s[o]:e._$Cl;const a=P(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),a===void 0?r=void 0:(r=new a(i),r._$AT(i,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=r:e._$Cl=r),r!==void 0&&(t=w(i,r._$AS(i,t.values),r,o)),t}class xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=((t==null?void 0:t.creationScope)??b).importNode(e,!0);y.currentNode=r;let a=y.nextNode(),s=0,c=0,n=o[0];for(;n!==void 0;){if(s===n.index){let d;n.type===2?d=new U(a,a.nextSibling,this,t):n.type===1?d=new n.ctor(a,n.name,n.strings,this,t):n.type===6&&(d=new Rt(a,this,t)),this._$AV.push(d),n=o[++c]}s!==(n==null?void 0:n.index)&&(a=y.nextNode(),s++)}return y.currentNode=b,r}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),P(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==h&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=R.createElement(ct(o.h,o.h[0]),this.options)),o);if(((a=this._$AH)==null?void 0:a._$AD)===r)this._$AH.p(e);else{const s=new xt(r,this),c=s.u(this.options);s.p(e),this.T(c),this._$AH=s}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new R(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const a of t)r===e.length?e.push(o=new U(this.S(E()),this.S(E()),this,this.options)):o=e[r],o._$AI(a),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,a){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(t,e=this,o,r){const a=this.strings;let s=!1;if(a===void 0)t=w(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==_,s&&(this._$AH=t);else{const c=t;let n,d;for(t=a[0],n=0;n<a.length-1;n++)d=w(this,c[o+n],e,n),d===_&&(d=this._$AH[n]),s||(s=!P(d)||d!==this._$AH[n]),d===h?t=h:t!==h&&(t+=(d??"")+a[n+1]),this._$AH[n]=d}s&&!r&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Et extends q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Pt extends q{constructor(t,e,o,r,a){super(t,e,o,r,a),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??h)===_)return;const o=this._$AH,r=t===h&&o!==h||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==h&&(o===h||r);r&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const L=x.litHtmlPolyfillSupport;L==null||L(R,U),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.1.3");const Ut=(i,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let r=o._$litPart$;if(r===void 0){const a=(e==null?void 0:e.renderBefore)??null;o._$litPart$=r=new U(t.insertBefore(E(),a),a,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class C extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return _}}var et;C._$litElement$=!0,C.finalized=!0,(et=globalThis.litElementHydrateSupport)==null||et.call(globalThis,{LitElement:C});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:C});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const kt=async()=>{try{let i=await fetch("https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1716768000000&signature=DmNHOucnGkfcgGJUa3Rl0m_lgSc-SZXaEuR9YnCVYZA&downloadName=Documentos_DB.json");return i.ok?await i.json():(console.error("Error al obtener los datos:",i.status),null)}catch(i){return console.error("Error en la solicitud:",i),null}};class B extends C{constructor(){super(),this.contador=0,this.categoriaSeleccionada="",this.botonActivo="",this.products=[],this.total=0}async connectedCallback(){super.connectedCallback();try{this.data=await kt(),this.data["todos los productos"]=[...this.data.abrigo,...this.data.camiseta,...this.data.pantalon]}catch(t){console.error("Error al obtener los datos:",t)}}handleClickCategoria(t){const e=this.shadowRoot.querySelector(".carrito_vacio"),o=this.shadowRoot.querySelector("#carrito-comprado"),r=this.shadowRoot.querySelector(".contenedor-carrito"),a=this.shadowRoot.querySelector(".titulo"),s=this.shadowRoot.querySelector(".container_product"),c=this.shadowRoot.querySelector(".titulo-carrito"),n=this.shadowRoot.querySelector(".numerito"),d=this.shadowRoot.querySelector("#carrito-productos");e.style.display="flex",d.style.display="flex",o.style.display="none",n.style.background="var(--color-gold)",n.style.color="var(--color-main)",c.style.display="none",a.style.display="",s.style.display="grid",r.style.display="none",t!=="todos los productos"?(this.categoriaSeleccionada=t,this.botonActivo=t):(this.categoriaSeleccionada="todos los productos",this.botonActivo=t),this.requestUpdate()}guardarProducto(t){const e=t.target.closest(".product").querySelector(".product-description").textContent,o=parseFloat(t.target.closest(".product").querySelector(".product-price").textContent.replace("$","")),r=parseFloat(t.target.closest(".product").querySelector(".product-price").textContent.replace("$","")),a=t.target.closest(".product").querySelector(".img").src,s=this.products.find(c=>c.nombre===e);if(s)s.cantidad++,s.precio*=s.cantidad;else{const c={nombre:e,precio:o,subPrecio:r,cantidad:1,img:a};this.products.push(c)}console.log(this.products),s||(this.contador++,this.shadowRoot.querySelector(".numerito").textContent=this.contador),this.totalCompras(),this.requestUpdate()}eliminarProducto(t){const e=t.target.closest(".carrito-producto").querySelector(".product-title").textContent,o=this.products.findIndex(s=>s.nombre===e),r=this.shadowRoot.querySelector(".carrito_vacio"),a=this.shadowRoot.querySelector("#carrito-acciones");o>-1?(this.products.splice(o,1),console.log("Producto eliminado:",e)):console.log("Producto no encontrado:",e),this.products.length===0&&(r.style.display="flex",a.style.display="none"),this.contador--,this.shadowRoot.querySelector(".numerito").textContent=this.contador,this.totalCompras(),this.requestUpdate()}eliminarProductosDeLaVista(){const t=this.shadowRoot.querySelector(".contenedor-carrito"),e=this.shadowRoot.querySelector(".container_product"),o=this.shadowRoot.querySelector(".titulo"),r=this.shadowRoot.querySelector(".titulo-carrito"),a=this.shadowRoot.querySelector(".numerito"),s=this.shadowRoot.querySelector("#carrito-acciones"),c=this.shadowRoot.querySelector(".carrito_vacio");a.style.background="var(--color-main)",a.style.color="var(--color-gray)",r.style.display="flex",o.style.display="none",e.style.display="none",t.style.display="flex",this.botonActivo="carrito",this.products.length===0?s.style.display="none":(s.style.display="flex",c.style.display="none"),this.requestUpdate()}vaciarCarrito(){const t=this.shadowRoot.querySelector("#carrito-comprado"),e=this.shadowRoot.querySelector(".carrito_vacio"),o=this.shadowRoot.querySelector("#carrito-productos"),r=this.shadowRoot.querySelector("#carrito-acciones");t.style.display="none",r.style.display="none",this.shadowRoot.querySelector(".numerito").textContent="0",this.products=[],o.style.display="none",this.contador=0,e.style.display="flex",this.requestUpdate()}totalCompras(){this.total=this.products.reduce((t,e)=>t+e.precio,0),this.shadowRoot.querySelector("#total-compras").textContent=`$ ${this.total}`,this.requestUpdate()}graciasPorTuCompra(){const t=this.shadowRoot.querySelector(".carrito_vacio"),e=this.shadowRoot.querySelector("#carrito-acciones"),o=this.shadowRoot.querySelector("#carrito-comprado");t.style.display="none",e.style.display="none",o.style.display="flex",this.contador=0,this.shadowRoot.querySelector(".numerito").textContent=0,this.products=[],this.requestUpdate()}render(){return z`
            <div class="container">
                <aside class="aside">
                    <header>
                        <h1 class="logo">CampusShop 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-fill" viewBox="0 0 16 16">
                            <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </h1>
                    </header>
                    <nav>
                        <ul class="list">
                            <li>
                                <button class="boton_categoria ${this.botonActivo==="todos los productos"?"boton-activo":""}" @click=${()=>this.handleClickCategoria("todos los productos")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    Todos los productos
                                </button>
                            </li>
                            <li>
                                <button class="boton_categoria ${this.botonActivo==="abrigo"?"boton-activo":""}" @click=${()=>this.handleClickCategoria("abrigo")}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                                    </svg>
                                    Abrigos
                                </button>
                            </li>
                            <li><button class="boton_categoria ${this.botonActivo==="camiseta"?"boton-activo":""}" @click=${()=>this.handleClickCategoria("camiseta")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                                    </svg>
                                    Camisetas
                                </button>
                            </li>
                            <li><button class="boton_categoria ${this.botonActivo==="pantalon"?"boton-activo":""}" @click=${()=>this.handleClickCategoria("pantalon")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                                    </svg>
                                    Pantalones
                                </button>
                            </li>
                            <li>
                                <button class="boton_categoria_cart-fill ${this.botonActivo==="carrito"?"boton-activo":""}" @click=${()=>this.eliminarProductosDeLaVista()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>
                                    Carrito
                                    <span class="numerito">0</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                <footer class="footer_text">©CampusLands</footer>
                </aside>    
                <main class="main">
                    <h2 class="titulo">${this.categoriaSeleccionada}</h2>
                    <div class="container_product">
                    ${Object.values(this.data[this.categoriaSeleccionada]||{}).map(t=>z`
                            <div class="product">
                                <img src="${t.imagen}" class="img">
                                <div class="details">
                                    <h3 class="product-description">${t.nombre}</h3>
                                    <p class="product-price">$${t.precio}</p>
                                    <button class="product-button" @click=${this.guardarProducto}>Agregar</button>
                                </div>
                            </div>
                        `)}
                    </div>
                    <h2 class="titulo-carrito">Carrito de Compras</h2>
                    <div class="contenedor-carrito">
                        <p class="carrito_vacio">Tu carrito esta vacio            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                            </svg>
                        </p>
                        <div id="carrito-productos" class="carrito-productos disabled">
                            ${this.products.map(t=>z`
                                <div class="carrito-producto">
                                    <img src="${t.img}" class="carrito-producto-imagen">
                                    <div class="carrito-producto-titulo">
                                        <small>Titulo</small>
                                        <h3 class="product-title">${t.nombre}</h3>
                                    </div>
                                    <div class="carrito-producto-cantidad">
                                        <small>Cantidad</small>
                                        <h3>${t.cantidad}</h3>
                                    </div>
                                    <div class="carrito-producto-precio">   
                                        <small>Precio</small>
                                        <h3>$${t.subPrecio}</h3>
                                    </div>
                                    <div class="carrito-producto-subtotal">
                                        <small>Subtotal</small>
                                        <h3>$${t.precio}</h3>
                                    </div>
                                    <button class="carrito-producto-eliminar" @click=${this.eliminarProducto}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                        </svg>
                                    </button>
                                </div>
                            `)}
                        </div>
                        <div id="carrito-acciones" class="carrito-acciones disabled">
                            <div class="carrito-acciones-izquierda">
                                <button id="carrito-acciones-vaciar" class="carrito-acciones-vaciar" @click=${()=>this.vaciarCarrito()}>Vaciar carrito</button>
                            </div>
                            <div class="carrito-acciones-derecha">
                                <div class="carrito-acciones-total">
                                    <p>Total:</p>
                                    <p id="total-compras">$</p>
                                </div>
                                <button id="carrito-acciones-comprar" class="carrito-acciones-comprar" @click=${()=>this.graciasPorTuCompra()}>Comprar ahora</button>
                            </div>
                        </div>
                        <p id="carrito-comprado" class="carrito-comprado disabled"> Muchas gracias por tu compra. 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5"/>
                            </svg>
                        </p>
                    </div>
                </main>
            </div>
        `}}T(B,"properties",{data:{typeof:Object},categoriaSeleccionada:{typeof:String},botonActivo:{typeof:String},products:{typeof:Array},total:{typeof:Number}}),T(B,"styles",pt`
        :root {
            --color-main: #4b33a8;
            --color-main-light: #785be9;
            --color-gold: #ececec;
            --color-gray: #e2e2e2;
            --color-red: #961818;
        }
        h1, h2, h3, h4, h5, h6, p, a, input, textarea, ul {
            margin: 0;
            padding: 0;
        }
        * {
            margin: 0;
            padding: 0; 
            box-sizing: border-box; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        .container {
            display:grid;
            background: var(--color-main);
            grid-template-columns: 1.2fr 4fr;
            grid-template-rows: 1fr;
        }
        .aside {
            grid-area: 1 / 1 / 2 / 2;
            padding: 2rem;
            padding-right: 0; 
            color: var(--color-gold);
            height: 100vh;
            position: sticky;
            top: 0;
            display: flex; 
            flex-direction: column; 
            justify-content: space-between;
        }
        .logo {
            font-weight: 500;
            font-size: 1.4em;
            color: var(--color-gray); 
        }
        .list {
            list-style: none; 
            display:flex; 
            flex-direction: column; 
            gap: 1rem;
        }
        .footer_text {
            color: var(--color-gray); 
            font-size: 0.85rem;
        }
        .boton_categoria, .boton_categoria_cart-fill {
            display: flex; 
            align-items: center; 
            background: transparent; 
            color: var(--color-gray); 
            border: none; 
            font-size: 1.2rem;
            font-weight: 600; 
            gap: 1rem;
            padding: .75em;  
            cursor: pointer; 
        }
        .boton_categoria_cart-fill {
            margin-top: 4rem; 
        }
        .boton-activo {
            background-color: var(--color-gold);
            color: var(--color-gray); 
            width: 100%;
            border-top-left-radius: 1rem; 
            border-bottom-left-radius: 1rem;
        }
        .bi-hand-index-thumb {
            transform: rotateZ(90deg)
        }
        .main {
            grid-area: 1 / 2 / 2 / 3; 
            background-color: var(--color-gold);
            margin: 1rem;
            margin-left: 0;
            border-radius: 2rem;
            padding: 3rem;
        }
        .titulo, .titulo-carrito{
            text-transform: capitalize; 
            color: white; 
            margin-bottom: 2rem;
        }
        .container_product{
            display: grid; 
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            border-radius: 1rem;
        }
        .img {
            height: 20em; 
            width: 100%; 
            border-radius: 1rem; 
        }
        .numerito {
            background-color: var(--color-gold);
            color: var(--color-main);
            padding: .15rem .25rem;
            border-radius: 1rem;
        }
        .details {
            font-size: 0.8em;  
            background: var(--color-main);
            color: var(--color-gray); 
            padding: .5rem; 
            border-radius: 1rem;
            margin-top: -2rem; 
            position: relative; 
            display: flex;
            flex-direction: column; 
            gap: .25rem; 
            text-transform: capitalize
        }
        .product-description {
            font-size: 1em;
            max-height: 1.1em;
            overflow-y: scroll;
            color: var(--color-gray);   
        }
        .product-button {
            border: none;
            background-color: var(--color-gray);  
            color: var(--color-main); 
            padding: .25rem; 
            text-transform: uppercase;
            cursor: pointer; 
            border-radius: 2rem;    
            font-weight: 600; 
            transition: 0.5s
        }
        .product-button:hover {
            background-color: #00FF00; 
            color: var(--color-gold)
        }
        .boton_carrito {
            text-decoration: none;
            color: var(--color-gold)
        }
        /** CARRITO **/

        .contenedor-carrito {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .carrito_vacio,
        .carrito-comprado {
            color: var(--color-gray);
            font-weight: 500; 
        }
        .carrito-comprado {
            display: none; 
        }
        .carrito-productos {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .carrito-producto {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: var(--color-gray);
            color: var(--color-main);
            padding: .5rem;
            padding-right: 1.5rem;
            border-radius: 1rem;
        }
        .carrito-producto-titulo{
            overflow-x: hidden;
            max-width: 20em;
            width: 20em;

        }

        .carrito-producto-imagen {
            width: 4rem;
            border-radius: 1rem;
        }

        .carrito-producto small {
            font-size: .75rem;
        }

        .carrito-producto-eliminar {
            border: 0;
            background-color: transparent;
            color: var(--color-red);
            cursor: pointer;
        }

        .carrito-acciones {
            display: none;
            justify-content: space-between;
        }

        .carrito-acciones-vaciar {
            border: 0;
            background-color: var(--color-gray);
            padding: 1rem;
            border-radius: 1rem;
            color: var(--clr-main);
            text-transform: uppercase;
            cursor: pointer;
            font-weight: 500; 
        }

        .carrito-acciones-derecha {
            display: flex;
        }

        .carrito-acciones-total {
            display: flex;
            background-color: var(--color-gray);
            padding: 1rem;
            color: var(--color-main);
            text-transform: uppercase;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            gap: 1rem;
            font-weight: 500; 
        }

        .carrito-acciones-comprar {
            border: 0;
            background-color: var(--color-main);
            padding: 1rem;
            color: var(--color-gold);
            text-transform: uppercase;
            cursor: pointer;
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            font-weight: 500;
        }

        /*** MEDIA QUERIES ***/

        @media screen and (max-width: 850px) {
            .container_product {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        @media screen and (max-width: 675px) {
            .container_product {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media screen and (max-width: 600px) {

            .container {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }

            .aside {
                position: fixed;
                z-index: 9;
                background-color: var(--color-main);
                left: 0;
                box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .75);
                transform: translateX(-100%);
                opacity: 0;
                visibility: hidden;
                transition: .2s;
            }

            .aside-visible {
                transform: translateX(0);
                opacity: 1;
                visibility: visible;
            }

            .boton-menu.active::before,
            .boton-menu.active::after {
                display: none;
            }

            .main {
                margin: 1rem;
                margin-top: 0;
                padding: 2rem;
            }

            .container_product {
                grid-template-columns: 1fr 1fr;
            }

            .header-mobile {
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-mobile .logo {
                color: var(--color-gray);
            }

            .open-menu, .close-menu {
                background-color: transparent;
                color: var(--color-gray);
                border: 0;
                font-size: 2rem;
                cursor: pointer;
            }

            .close-menu {
                display: block;
                position: absolute;
                top: 1rem;
                right: 1rem;
            }

            .carrito-producto {
                gap: 1rem;
                flex-wrap: wrap;
                justify-content: flex-start;
                padding: .5rem;
            }

            .carrito-producto-subtotal {
                display: none;
            }

            .carrito-acciones {
                flex-wrap: wrap;
                row-gap: 1rem;
            }
            
        }

        @media screen and (max-width: 400px) {
            .container_product {
                grid-template-columns: 1fr;
            }
        }

    `);customElements.define("all-page",B);
