const e={};function t(t){e.context=t}const n=Symbol("solid-proxy"),r={equals:(e,t)=>e===t};let o=B;const l={},s={owned:null,cleanups:null,context:null,owner:null},[i,u]=m(!1);var c=null;let a,f=null,d=null,h=null,p=null,g=0;function v(e,t){t&&(c=t);const n=f,r=c,o=0===e.length?s:{owned:null,cleanups:null,context:null,owner:r};c=o,f=null;try{return q((()=>e((()=>F(o)))),!0)}finally{f=n,c=r}}function m(e,t){t=t?Object.assign({},r,t):r;const n={value:e,observers:null,observerSlots:null,pending:l,comparator:t.equals||void 0};return[E.bind(n),e=>("function"==typeof e&&(e=e(n.pending!==l?n.pending:n.value)),L(n,e))]}function y(e,t,n){O(M(e,t,!0,1))}function w(e,t,n){O(M(e,t,!1,1))}function b(e,t,n){n=n?Object.assign({},r,n):r;const o=M(e,t,!0,0);return o.pending=l,o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,O(o),E.bind(o)}function x(e){if(d)return e();let t;const n=d=[];try{t=e()}finally{d=null}return q((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==l){const e=t.pending;t.pending=l,L(t,e)}}}),!1),t}function S(e){let t,n=f;return f=null,t=e(),f=n,t}function A(e,t,n){const r=Array.isArray(e);let o,l=n&&n.defer;return n=>{let s;if(r){s=[];for(let t=0;t<e.length;t++)s.push(e[t]())}else s=e();if(l)return void(l=!1);const i=S((()=>t(s,o,n)));return o=s,i}}function P(e){!function(e,t,n){o=D;const r=M(e,t,!1,1);r.user=!0,p?p.push(r):queueMicrotask((()=>O(r)))}((()=>S(e)))}function C(e){return null===c||(null===c.cleanups?c.cleanups=[e]:c.cleanups.push(e)),e}function T(e){const t=f,n=c;return Promise.resolve().then((()=>{f=t,c=n,x(e)}))}function $(e){const t=Symbol("context");return{id:t,Provider:_(t),defaultValue:e}}function k(e){return I(c,e.id)||e.defaultValue}function N(e){const t=b(e);return b((()=>V(t())))}function E(){if(this.sources&&this.state){const e=h;h=null,1===this.state?O(this):R(this),h=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function L(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(d)return e.pending===l&&d.push(e),e.pending=t,t;let r=!1;return e.value=t,e.observers&&e.observers.length&&q((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];r,n.pure?h.push(n):p.push(n),n.observers&&!n.state&&G(n),n.state=1}if(h.length>1e6)throw h=[],new Error}),!1),t}function O(e){if(!e.fn)return;F(e);const t=c,n=f,r=g;f=c=e,function(e,t,n){let r;try{r=e.fn(t)}catch(o){H(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?L(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),f=n,c=t}function M(e,t,n,r=1,o){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:c,context:null,pure:n};return null===c||c!==s&&(c.owned?c.owned.push(l):c.owned=[l]),l}function j(e){if(1!==e.state)return e.state=0;if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<g);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)O(e);else if(2===e.state){const n=h;h=null,R(e,t[0]),h=n}}function q(e,t){if(h)return e();let n=!1;t||(h=[]),p?n=!0:p=[],g++;try{return e()}catch(r){H(r)}finally{!function(e){h&&(B(h),h=null);if(e)return;p.length?x((()=>{o(p),p=null})):p=null}(n)}}function B(e){for(let t=0;t<e.length;t++)j(e[t])}function D(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:j(r)}const r=e.length;for(t=0;t<n;t++)j(e[t]);for(t=r;t<e.length;t++)j(e[t])}function R(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];r.sources&&(1===r.state?r!==t&&j(r):2===r.state&&R(r,t))}}function G(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.pure?h.push(n):p.push(n),n.observers&&G(n))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function H(e){throw e}function I(e,t){return e&&(e.context&&void 0!==e.context[t]?e.context[t]:e.owner&&I(e.owner,t))}function V(e){if("function"==typeof e&&!e.length)return V(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=V(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function _(e){return function(t){let n;return y((()=>n=S((()=>(c.context={[e]:t.value},N((()=>t.children))))))),n}}let K=!1;function U(n,r){if(K&&e.context){const o=e.context;t({...e.context,id:`${e.context.id}${e.context.count++}.`,count:0});const l=S((()=>n(r)));return t(o),l}return S((()=>n(r)))}function W(){return!0}const X={get:(e,t,r)=>t===n?r:e.get(t),has:(e,t)=>e.has(t),set:W,deleteProperty:W,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:W,deleteProperty:W}),ownKeys:e=>e.keys()};function Y(e){return"function"==typeof e?e():e}function z(e){let t=!1;const n=b((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return b((()=>{const r=n();if(r){const n=e.children;return(t="function"==typeof n&&n.length>0)?S((()=>n(r))):n}return e.fallback}))}const J=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline","allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),Q=new Set(["innerHTML","textContent","innerText","children"]),Z={className:"class",htmlFor:"for"},ee={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},te=new Set(["beforeinput","click","dblclick","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ne=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),re={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function oe(e,t,n){let r=n.length,o=t.length,l=r,s=0,i=0,u=t[o-1].nextSibling,c=null;for(;s<o||i<l;)if(t[s]!==n[i]){for(;t[o-1]===n[l-1];)o--,l--;if(o===s){const t=l<r?i?n[i-1].nextSibling:n[l-i]:u;for(;i<l;)e.insertBefore(n[i++],t)}else if(l===i)for(;s<o;)c&&c.has(t[s])||t[s].remove(),s++;else if(t[s]===n[l-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[s++].nextSibling),e.insertBefore(n[--l],r),t[o]=n[l]}else{if(!c){c=new Map;let e=i;for(;e<l;)c.set(n[e],e++)}const r=c.get(t[s]);if(null!=r)if(i<r&&r<l){let u,a=s,f=1;for(;++a<o&&a<l&&null!=(u=c.get(t[a]))&&u===r+f;)f++;if(f>r-i){const o=t[s];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[s++])}else s++;else t[s++].remove()}}else s++,i++}function le(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function se(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,he))}}function ie(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return ge(e,t,r,n);w((r=>ge(e,t(),r,n)),r)}function ue(t,n,r={}){e.completed=globalThis._$HY.completed,e.events=globalThis._$HY.events,e.load=globalThis._$HY.load,e.gather=e=>we(n,e),e.registry=new Map,e.context={id:r.renderId||"",count:0},we(n,r.renderId);const o=function(e,t,n){let r;return v((o=>{r=o,t===document?e():ie(t,e(),t.firstChild?null:void 0,n)})),()=>{r(),t.textContent=""}}(t,n,[...n.childNodes]);return e.context=null,o}function ce(t){let n,r;return e.context&&(n=e.registry.get(r=function(){const t=e.context;return`${t.id}${t.count++}`}()))?(e.completed&&e.completed.add(n),e.registry.delete(r),n):t.cloneNode(!0)}function ae(t){let n=t,r=0,o=[];if(e.context)for(;n;){if(8===n.nodeType){const e=n.nodeValue;if("#"===e)r++;else if("/"===e){if(0===r)return[n,o];r--}}o.push(n),n=n.nextSibling}return[n,o]}function fe(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,l=r.length;o<l;o++)e.classList.toggle(r[o],n)}function de(e,t,n,r,o){let l,s,i;if("style"===t)return function(e,t,n={}){const r=e.style;if(null==t||"string"==typeof t)return r.cssText=t;let o,l;for(l in"string"==typeof n&&(n={}),n)null==t[l]&&r.removeProperty(l),delete n[l];for(l in t)o=t[l],o!==n[l]&&(r.setProperty(l,o),n[l]=o);return n}(e,n,r);if("classList"===t)return function(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let l,s;for(l=0,s=o.length;l<s;l++){const r=o[l];r&&"undefined"!==r&&!t[r]&&(fe(e,r,!1),delete n[r])}for(l=0,s=r.length;l<s;l++){const o=r[l],s=!!t[o];o&&"undefined"!==o&&n[o]!==s&&s&&(fe(e,o,!0),n[o]=s)}return n}(e,n,r);if(n===r)return r;if("ref"===t)n(e);else if("on:"===t.slice(0,3))e.addEventListener(t.slice(3),n);else if("oncapture:"===t.slice(0,10))e.addEventListener(t.slice(10),n,!0);else if("on"===t.slice(0,2)){const r=t.slice(2).toLowerCase(),o=te.has(r);!function(e,t,n,r){r?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,(e=>n[0](n[1],e))):e.addEventListener(t,n)}(e,r,n,o),o&&se([r])}else if((i=Q.has(t))||!o&&(ee[t]||(s=J.has(t)))||(l=e.nodeName.includes("-")))!l||s||i?e[ee[t]||t]=n:e[(u=t,u.toLowerCase().replace(/-([a-z])/g,((e,t)=>t.toUpperCase())))]=n;else{const r=o&&t.indexOf(":")>-1&&re[t.split(":")[0]];r?function(e,t,n,r){null==r?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}(e,r,t,n):function(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}(e,Z[t]||t,n)}var u;return n}function he(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n||document});null!==n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(void 0!==o?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function pe(e,t,n={},r,o){return!o&&"children"in t&&w((()=>n.children=ge(e,t.children,n.children))),w((()=>function(e,t,n,r,o={}){for(const l in o)if(!(l in t)){if("children"===l)continue;de(e,l,null,o[l],n)}for(const l in t){if("children"===l){r||ge(e,t.children);continue}const s=t[l];o[l]=de(e,l,s,o[l],n)}}(e,t,r,!0,n))),n}function ge(t,n,r,o,l){for(e.context&&!r&&(r=[...t.childNodes]);"function"==typeof r;)r=r();if(n===r)return r;const s=typeof n,i=void 0!==o;if(t=i&&r[0]&&r[0].parentNode||t,"string"===s||"number"===s)if("number"===s&&(n=n.toString()),i){let e=r[0];e&&3===e.nodeType?e.data=n:e=document.createTextNode(n),r=ye(t,r,o,e)}else r=""!==r&&"string"==typeof r?t.firstChild.data=n:t.textContent=n;else if(null==n||"boolean"===s){if(e.context)return r;r=ye(t,r,o)}else{if("function"===s)return w((()=>{let e=n();for(;"function"==typeof e;)e=e();r=ge(t,e,r,o)})),()=>r;if(Array.isArray(n)){const s=[];if(ve(s,n,l))return w((()=>r=ge(t,s,r,o,!0))),()=>r;if(e.context&&r&&r.length){for(let e=0;e<s.length;e++)if(s[e].parentNode)return r=s;return r}if(0===s.length){if(r=ye(t,r,o),i)return r}else Array.isArray(r)?0===r.length?me(t,s,o):oe(t,r,s):null==r||""===r?me(t,s):oe(t,i&&r||[t.firstChild],s);r=s}else if(n instanceof Node){if(e.context)return r=n.parentNode?i?[n]:n:r;if(Array.isArray(r)){if(i)return r=ye(t,r,o,n);ye(t,r,null,n)}else null!=r&&""!==r&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);r=n}}return r}function ve(e,t,n){let r=!1;for(let o=0,l=t.length;o<l;o++){let l,s=t[o];if(s instanceof Node)e.push(s);else if(null==s||!0===s||!1===s);else if(Array.isArray(s))r=ve(e,s)||r;else if("string"==(l=typeof s))e.push(document.createTextNode(s));else if("function"===l)if(n){for(;"function"==typeof s;)s=s();r=ve(e,Array.isArray(s)?s:[s])||r}else e.push(s),r=!0;else e.push(document.createTextNode(s.toString()))}return r}function me(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function ye(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(o!==s){const t=s.parentNode===e;r||l?t&&s.remove():t?e.replaceChild(o,s):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function we(t,n){const r=t.querySelectorAll("*[data-hk]");for(let o=0;o<r.length;o++){const t=r[o],l=t.getAttribute("data-hk");n&&!l.startsWith(n)||e.registry.set(l,t)}}function be(){}function xe(t){return e.context?void 0:t.children}function Se(e,t=!1){return t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e)}function Ae(t){const{useShadow:n}=t,r=document.createTextNode(""),o=t.mount||document.body;function l(){if(e.context){const[e,n]=m(!1);return queueMicrotask((()=>n(!0))),()=>e()&&t.children}return()=>t.children}if(o instanceof HTMLHeadElement){const[t,n]=m(!1),r=()=>n(!0);v((e=>ie(o,(()=>t()?e():l()()),null))),C((()=>{e.context?queueMicrotask(r):r()}))}else{const e=Se(t.isSVG?"g":"div",t.isSVG),s=n&&e.attachShadow?e.attachShadow({mode:"open"}):e;Object.defineProperty(e,"host",{get:()=>r.parentNode}),ie(s,l()),o.appendChild(e),t.ref&&t.ref(e),C((()=>o.removeChild(e)))}return r}function Pe(t){const[n,r]=function(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),o=t.map((t=>{const n={};for(let o=0;o<t.length;o++){const l=t[o];Object.defineProperty(n,l,r[l]?r[l]:{get:()=>e[l],set:()=>!0})}return n}));return o.push(new Proxy({get:t=>n.has(t)?void 0:e[t],has:t=>!n.has(t)&&t in e,keys:()=>Object.keys(e).filter((e=>!n.has(e)))},X)),o}(t,["component"]);return b((()=>{const t=n.component;switch(typeof t){case"function":return S((()=>t(r)));case"string":const n=ne.has(t),u=e.context?ce():Se(t,n);return o=u,s=n,"function"==typeof(l=r)?w((e=>pe(o,l(),e,s,i))):pe(o,l,void 0,s,i),u}var o,l,s,i}))}const Ce=$(),Te=["title","meta"],$e=e=>{const t=new Map,[n,r]=m({});P((()=>{const e=document.head.querySelectorAll('[data-sm=""]');Array.prototype.forEach.call(e,(e=>e.parentNode.removeChild(e)))}));const o={addClientTag:(e,n)=>{if(-1!==Te.indexOf(e)){r((t=>{const r=t[e]||[];return{...t,[e]:[...r,n]}}));const o=t.has(e)?t.get(e)+1:0;return t.set(e,o),o}return-1},shouldRenderTag:(e,t)=>{if(-1!==Te.indexOf(e)){const r=n()[e];return r&&r.lastIndexOf(r[t])===t}return!0},removeClientTag:(e,t)=>{r((n=>{const r=n[e];return r?(r[t]=null,{...n,[e]:r}):n}))}};return U(Ce.Provider,{value:o,get children(){return e.children}})},ke=(e,t)=>{const n=k(Ce);if(!n)throw new Error("<MetaProvider /> should be in the tree");const{addClientTag:r,removeClientTag:o,addServerTag:l,shouldRenderTag:s}=n;let i=-1;return y((()=>{i=r(e,t.name||t.property),C((()=>o(e,i)))})),U(z,{get when(){return s(e,i)},get children(){return U(Ae,{get mount(){return document.head},get children(){return U(Pe,function(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=Y(e[n])[t];if(void 0!==r)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in Y(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(Y(e[n])));return[...new Set(t)]}},X)}({component:e},t))}})}})},Ne=e=>ke("title",e);function Ee(){return function(e,t,n,r){let o=!1;const l=e=>"string"==typeof e?{value:e}:e,s=function([e,t],n,r){return[n?()=>n(e()):e,r?e=>t(r(e)):t]}(m(l(e()),{equals:(e,t)=>e.value===t.value}),void 0,(e=>(!o&&t(e),e)));return n&&C(n(((t=e())=>{o=!0,s[1](l(t)),o=!1}))),{signal:s,utils:r}}((()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state})),(({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),n&&window.scrollTo(0,0)}),(e=>{return t=window,n="popstate",r=()=>e(),t.addEventListener(n,r),()=>t.removeEventListener(n,r);var t,n,r}),{go:e=>window.history.go(e)})}const Le=/^(?:[a-z0-9]+:)?\/\//i,Oe=/^\/+|\/+$|\s+/g;function Me(e){const t=e.replace(Oe,"");return t?t.startsWith("?")?t:"/"+t:""}function je(e,t,n){if(Le.test(t))return;const r=Me(e),o=n&&Me(n);let l="";return l=o&&"/"!==t.charAt(0)?0!==o.toLowerCase().indexOf(r.toLowerCase())?r+o:o:r,l+Me(t)||"/"}function qe(e,t){const n=Me(t);if(n){const t=e.replace(/^\/+|\/*(\*.*)?$/g,"");return t?`/${t}${n}`:n}return Me(e)}function Be(e,t){const[n,r]=e.split("/*",2),o=n.split("/").filter(Boolean),l=o.length;return e=>{const n=e.split("/").filter(Boolean),s=n.length-l;if(s<0||s>0&&void 0===r&&!t)return null;const i={path:l?"":"/",params:{}};for(let t=0;t<l;t++){const e=o[t],r=n[t];if(":"===e[0])i.params[e.slice(1)]=r;else if(0!==e.localeCompare(r,void 0,{sensitivity:"base"}))return null;i.path+=`/${r}`}return r&&(i.params[r]=s?n.slice(-s).join("/"):""),i}}function De(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce(((e,t)=>e+(t.startsWith(":")?2:3)),r.length-(void 0===n?0:1))}function Re(e){const t=new Map,n=c;return new Proxy({},{get:(r,o)=>(t.has(o)||function(e,t){const n=c;c=e;try{q(t,!0)}finally{c=n}}(n,(()=>t.set(o,b((()=>e()[o]))))),t.get(o)()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),ownKeys:()=>Reflect.ownKeys(e())})}const Ge=$(),Fe=$(),He=()=>function(e,t){if(null==e)throw new Error(t);return e}(k(Ge),"Make sure your app is wrapped in a <Router />"),Ie=()=>k(Fe)||He().base;function Ve(e,t="",n){const{path:r,component:o,data:l,children:s}=e,i=!s||Array.isArray(s)&&!s.length,u=qe(t,r),c=i?u:u.split("/*",1)[0];return{originalPath:r,pattern:c,element:o?()=>U(o,{}):()=>{const{element:t}=e;return void 0===t&&n?U(n,{}):t},preload:e.component?o.preload:e.preload,data:l,matcher:Be(c,!i)}}function _e(e,t=0){return{routes:e,score:1e4*De(e[e.length-1])-t,matcher(t){const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r],l=o.matcher(t);if(!l)return null;n.unshift({...l,route:o})}return n}}}function Ke(e,t="",n,r=[],o=[]){const l=Array.isArray(e)?e:[e];for(let s=0,i=l.length;s<i;s++){const e=l[s];if(e&&"object"==typeof e&&e.hasOwnProperty("path")){const l=Ve(e,t,n);if(r.push(l),e.children)Ke(e.children,l.pattern,n,r,o);else{const e=_e([...r],o.length);o.push(e)}r.pop()}}return r.length?o:o.sort(((e,t)=>t.score-e.score))}function Ue(e,t="",n,r){const{signal:[o,l],utils:s={}}=function(e){return e?Array.isArray(e)?{signal:e}:e:{signal:m({value:""})}}(e),u=je("",t);if(void 0===u)throw new Error(`${u} is not a valid base path`);u&&!o().value&&l({value:u,replace:!0,scroll:!1});const[c,a]=[i,T],[f,d]=m(o().value),[h,p]=m(o().state),g=function(e,t){const n=new URL("http://sar"),r=b((t=>{const r=e();try{return new URL(r,n)}catch(o){return console.error(`Invalid path ${r}`),t}}),n,{equals:(e,t)=>e.href===t.href}),o=b((()=>r().pathname)),l=b((()=>r().search.slice(1))),s=b((()=>r().hash.slice(1))),i=b((()=>""));return{get pathname(){return o()},get search(){return l()},get hash(){return s()},get state(){return t()},get key(){return i()},query:Re(A(l,(()=>function(e){const t={};return e.searchParams.forEach(((e,n)=>{t[n]=e})),t}(r()))))}}(f,h),v=[],y={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath:e=>je(u,e)};function x(e,t,n){S((()=>{if("number"==typeof t)return void(t&&(s.go?s.go(t):console.warn("Router integration does not support relative routing")));const{replace:r,resolve:o,scroll:i,state:u}={replace:!1,resolve:!0,scroll:!0,...n},c=o?e.resolvePath(t):je("",t);if(void 0===c)throw new Error(`Path '${t}' is not a routable path`);if(v.length>=100)throw new Error("Too many redirects");const g=f();if(c!==g||u!==h()){const e=v.push({value:g,replace:r,scroll:i,state:h});a((()=>{d(c),p(u)})).then((()=>{v.length===e&&function(e){const t=v[0];t&&(e.value===t.value&&e.state===t.state||l({...e,replace:t.replace,scroll:t.scroll}),v.length=0)}({value:c,state:u})}))}}))}function P(e){return e=e||k(Fe)||y,(t,n)=>x(e,t,n)}return n&&(y.data=n({params:{},location:g,navigate:P(y)})),w((()=>{const{value:e,state:t}=o();e!==S(f)&&a((()=>{d(e),p(t)}))})),{base:y,out:void 0,location:g,isRouting:c,renderPath:s.renderPath||(e=>e),navigatorFactory:P}}function We(e,t,n,r){const{base:o,location:l,navigatorFactory:s}=e,{pattern:i,element:u,preload:c,data:a}=r().route,f=b((()=>r().path)),d=Re((()=>r().params));c&&c();const h={parent:t,pattern:i,get child(){return n()},path:f,params:d,outlet:u,resolvePath:e=>je(o.path(),e,f())};return a&&(h.data=a({params:d,location:l,navigate:s(h)})),h}le("<a></a>");const Xe=e=>{const{source:t,url:n,base:r,data:o,out:l}=e,s=Ue(t||Ee(),r,o);return U(Ge.Provider,{value:s,get children(){return e.children}})},Ye=e=>{const t=He(),n=Ie(),r=b((()=>Ke(e.children,qe(n.pattern,e.base||""),ze))),o=b((()=>function(e,t){for(let n=0,r=e.length;n<r;n++){const r=e[n].matcher(t);if(r)return r}return[]}(r(),t.location.pathname)));t.out&&t.out.matches.push(o().map((({route:e,path:t,params:n})=>({originalPath:e.originalPath,pattern:e.pattern,path:t,params:n}))));const l=[];let s;const i=b(A(o,((e,r,u)=>{let c=r&&e.length===r.length;const a=[];for(let s=0,f=e.length;s<f;s++){const f=r&&r[s],d=e[s];u&&f&&d.route.pattern===f.route.pattern?a[s]=u[s]:(c=!1,l[s]&&l[s](),v((e=>{l[s]=e,a[s]=We(t,a[s-1]||n,(()=>i()[s+1]),(()=>o()[s]))})))}return l.splice(e.length).forEach((e=>e())),u&&c?u:(s=a[0],a)})));return U(z,{get when(){return i()&&s},children:e=>U(Fe.Provider,{value:e,get children(){return e.outlet()}})})},ze=()=>{const e=Ie();return U(z,{get when(){return e.child},children:e=>U(Fe.Provider,{value:e,get children(){return e.outlet()}})})};se(["click"]);const Je=$({});function Qe(e){return U(Je.Provider,{value:e,get children(){return e.children}})}const Ze=[{component:function(n){let r,o;const l=l=>{const s=e.context;if(s){const[e,l]=m();(o||(o=n())).then((e=>{t(s),l((()=>e.default)),t()})),r=e}else if(r){const e=r();if(e)return e(l)}else{const[t]=function(t,n,r){2===arguments.length?"object"==typeof n&&(r=n,n=t,t=!0):1===arguments.length&&(n=t,t=!0),r||(r={}),!1!==r.globalRefetch&&(a||(a=new Set),a.add(N),c&&C((()=>a.delete(N))));const o=new Set,[l,s]=m(r.initialValue),[i,u]=m(void 0,{equals:!1}),[d,h]=m(!1),[p,g]=m();let v,w=null,b=null,A=null,P="function"==typeof t;function T(e,t,n,o){return w===e&&(w=null,b&&e===b&&r.onHydrated&&r.onHydrated(o,{value:t}),b=null,g(v=n),$(t)),t}function $(e){x((()=>{s((()=>e)),h(!1);for(const e of o.keys())e.decrement();o.clear()}))}function k(){const e=void 0,t=l();if(v)throw v;return f&&!f.user&&e&&y((()=>{i(),w&&(e.resolved||o.has(e)||(e.increment(),o.add(e)))})),t}function N(e=!0){g(v=void 0);const r=P?t():t;if(null==r||!1===r)return void T(w,S(l));const o=b||S((()=>n(r,{value:l(),refetching:e})));return"object"==typeof o&&"then"in o?(w=o,x((()=>{h(!0),u()})),o.then((e=>T(o,e,void 0,r)),(e=>T(o,e,e)))):(T(w,o),o)}return e.context&&(A=`${e.context.id}${e.context.count++}`,e.load&&(b=e.load(A))),Object.defineProperties(k,{loading:{get:()=>d()},error:{get:()=>p()}}),P?y((()=>N(!1))):N(!1),[k,{refetch:N,mutate:s}]}((()=>(o||(o=n())).then((e=>e.default))),{globalRefetch:!1});r=t}let i;return b((()=>(i=r())&&S((()=>{if(!s)return i(l);const n=e.context;t(s);const r=i(l);return t(n),r}))))};return l.preload=()=>o||((o=n()).then((e=>r=()=>e.default)),o),l}((()=>import("./index.cb34210e.js"))),path:"/"}];var et,tt,nt=(et=Ze,()=>U(Ye,{base:tt,children:et}));function rt(){return k(Je),[U(be,{}),U(xe,{get children(){return false}})]}function ot(){return(()=>{const e=ce(),t=function(e,t){for(;e&&e.localName!==t;)e=e.nextSibling;return e}(e.firstChild,"body"),n=t.firstChild,[r,o]=ae(n.nextSibling),l=r.nextSibling,[s,i]=ae(l.nextSibling);return ie(t,U(nt,{}),r,o),ie(t,U(rt,{}),s,i),e})()}le('<script type="module" async><\/script>');const lt=Object.values({})[0],st=lt?lt.default:void 0;((...e)=>{K=!0,ue(...e)})((()=>U(Qe,{get children(){return U($e,{get children(){return U(Xe,{data:st,get children(){return U(ot,{})}})}})}})),document);export{Ne as T,ae as a,C as b,U as c,ce as g,ie as i,P as o,le as t};
