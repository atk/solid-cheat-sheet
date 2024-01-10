import{_ as V,p as he,H as me}from"./HttpStatusCode-dd849264.js";import{M as ge}from"./index-e5f2924e.js";import{r as pe,c as P,g as ye,a as Y,b as C,d as we,u as X,e as Z,f as ve,o as ee,s as be,i as Ee,h as v,j as Pe,S as te,k as Re,l as ne,m as Ae,n as q,p as M,q as F,t as Se,w as U,x as N,y as $e,z as Le,E as _e,A as xe}from"./web-359a0177.js";const j="Invariant Violation",{setPrototypeOf:Ce=function(e,t){return e.__proto__=t,e}}=Object;class W extends Error{framesToPop=1;name=j;constructor(t=j){super(typeof t=="number"?`${j}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),Ce(this,W.prototype)}}function z(e,t){if(!e)throw new W(t)}function Te(e=""){return!e||!e.includes("\\")?e:e.replace(/\\/g,"/")}const Oe=/^[/\\]{2}/,ke=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Ie=/^[A-Za-z]:$/,Be=function(e){if(e.length===0)return".";e=Te(e);const t=e.match(Oe),n=G(e),r=e[e.length-1]==="/";return e=Me(e,!n),e.length===0?n?"/":r?"./":".":(r&&(e+="/"),Ie.test(e)&&(e+="/"),t?n?`//${e}`:`//./${e}`:n&&!G(e)?`/${e}`:e)},qe=function(...e){if(e.length===0)return".";let t;for(const n of e)n&&n.length>0&&(t===void 0?t=n:t+=`/${n}`);return t===void 0?".":Be(t.replace(/\/\/+/g,"/"))};function Me(e,t){let n="",r=0,s=-1,o=0,a=null;for(let i=0;i<=e.length;++i){if(i<e.length)a=e[i];else{if(a==="/")break;a="/"}if(a==="/"){if(!(s===i-1||o===1))if(o===2){if(n.length<2||r!==2||n[n.length-1]!=="."||n[n.length-2]!=="."){if(n.length>2){const c=n.lastIndexOf("/");c===-1?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),s=i,o=0;continue}else if(n.length>0){n="",r=0,s=i,o=0;continue}}t&&(n+=n.length>0?"/..":"..",r=2)}else n.length>0?n+=`/${e.slice(s+1,i)}`:n=e.slice(s+1,i),r=i-s-1;s=i,o=0}else a==="."&&o!==-1?++o:o=-1}return n}const G=function(e){return ke.test(e)};function Fe(e){return`virtual:${e}`}function Ue(e){return e.handler?.endsWith(".html")?e.handler:`#vinxi/handler/${e.name}`}const je=new Proxy({},{get(e,t){return z(typeof t=="string","Bundler name should be a string"),{handler:Fe(Ue({name:t})),chunks:new Proxy({},{get(n,r){z(typeof r=="string","Chunk expected");let s=qe("/_build",r+".js");return{import(){return V(()=>import(s),[])},output:{path:s}}}}),inputs:new Proxy({},{get(n,r){z(typeof r=="string","Input must be string");let s=window.manifest[r].output;return{async import(){return V(()=>import(s),[])},async assets(){return window.manifest[r].assets},output:{path:s}}}})}}});globalThis.MANIFEST=je;function ze(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const a={to:s,options:o,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const i of e)i.listener({...a,from:i.location,retry:c=>{c&&(n=!0),i.navigate(s,{...o,resolve:!1})}});return!a.defaultPrevented}return{subscribe:t,confirm:r}}const De=/^(?:[a-z0-9]+:)?\/\//i,Ne=/^\/+|(\/)\/+$/g;function T(e,t=!1){const n=e.replace(Ne,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function k(e,t,n){if(De.test(t))return;const r=T(e),s=n&&T(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+T(t,!o)}function We(e,t){return T(e).replace(/\/*(\*.*)?$/g,"")+T(t)}function re(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function He(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),a=o.length;return i=>{const c=i.split("/").filter(Boolean),f=c.length-a;if(f<0||f>0&&s===void 0&&!t)return null;const h={path:a?"":"/",params:{}},d=y=>n===void 0?void 0:n[y];for(let y=0;y<a;y++){const b=o[y],l=c[y],u=b[0]===":",g=u?b.slice(1):b;if(u&&D(l,d(g)))h.params[g]=l;else if(u||!D(l,b))return null;h.path+=`/${l}`}if(s){const y=f?c.slice(-f).join("/"):"";if(D(y,d(s)))h.params[s]=y;else return null}return h}}function D(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Ke(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function se(e){const t=new Map,n=ye();return new Proxy({},{get(r,s){return t.has(s)||pe(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function oe(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return oe(r).reduce((o,a)=>[...o,...s.map(i=>i+a)],[])}const Ve=100,Xe=Y(),H=Y();function Ze(e,t=""){const{component:n,load:r,children:s,metadata:o}=e,a=!s||Array.isArray(s)&&!s.length,i={key:e,component:n,load:r,metadata:o};return ae(e.path).reduce((c,f)=>{for(const h of oe(f)){const d=We(t,h),y=a?d:d.split("/*",1)[0];c.push({...i,originalPath:h,pattern:y,matcher:He(y,!a,e.matchFilters)})}return c},[])}function Ge(e,t=0){return{routes:e,score:Ke(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],a=o.matcher(n);if(!a)return null;r.unshift({...a,route:o})}return r}}}function ae(e){return Array.isArray(e)?e:[e]}function ie(e,t="",n=[],r=[]){const s=ae(e);for(let o=0,a=s.length;o<a;o++){const i=s[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const c=Ze(i,t);for(const f of c){n.push(f);const h=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!h)ie(i.children,f.pattern,n,r);else{const d=Ge([...n],r.length);r.push(d)}n.pop()}}}return n.length?r:r.sort((o,a)=>a.score-o.score)}function ce(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Je(e,t){const n=new URL("http://sar"),r=P(c=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),c}},n,{equals:(c,f)=>c.href===f.href}),s=P(()=>r().pathname),o=P(()=>r().search,!0),a=P(()=>r().hash),i=()=>"";return{get pathname(){return s()},get search(){return o()},get hash(){return a()},get state(){return t()},get key(){return i()},query:se(ee(o,()=>re(r())))}}let S;function Qe(e,t,n={}){const{signal:[r,s],utils:o={}}=e,a=o.parsePath||(m=>m),i=o.renderPath||(m=>m),c=o.beforeLeave||ze(),f=k("",n.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!r().value&&s({value:f,replace:!0,scroll:!1});const[h,d]=C(!1),y=async m=>{d(!0);try{await be(m)}finally{d(!1)}},[b,l]=C(r().value),[u,g]=C(r().state),p=Je(b,u),R=[],E=C([]),$={pattern:f,params:{},path:()=>f,outlet:()=>null,resolvePath(m){return k(f,m)}};return we(()=>{const{value:m,state:w}=r();X(()=>{m!==b()&&y(()=>{S="native",l(m),g(w),Z(),E[1]([])}).then(()=>{S=void 0})})}),{base:$,location:p,isRouting:h,renderPath:i,parsePath:a,navigatorFactory:le,beforeLeave:c,preloadRoute:fe,submissions:E};function O(m,w,A){X(()=>{if(typeof w=="number"){w&&(o.go?c.confirm(w,A)&&o.go(w):console.warn("Router integration does not support relative routing"));return}const{replace:I,resolve:B,scroll:L,state:_}={replace:!1,resolve:!0,scroll:!0,...A},x=B?m.resolvePath(w):k("",w);if(x===void 0)throw new Error(`Path '${w}' is not a routable path`);if(R.length>=Ve)throw new Error("Too many redirects");const K=b();if((x!==K||_!==u())&&!Ee){if(c.confirm(x,A)){const de=R.push({value:K,replace:I,scroll:L,state:u()});y(()=>{S="navigate",l(x),g(_),Z(),E[1]([])}).then(()=>{R.length===de&&(S=void 0,ue({value:x,state:_}))})}}})}function le(m){return m=m||ve(H)||$,(w,A)=>O(m,w,A)}function ue(m){const w=R[0];w&&((m.value!==w.value||m.state!==w.state)&&s({...m,replace:w.replace,scroll:w.scroll}),R.length=0)}function fe(m,w){const A=ce(t(),m.pathname),I=S;S="preload";for(let B in A){const{route:L,params:_}=A[B];L.component&&L.component.preload&&L.component.preload(),w&&L.load&&L.load({params:_,location:{pathname:m.pathname,search:m.search,hash:m.hash,query:re(m),state:null,key:""},intent:"preload"})}S=I}}function Ye(e,t,n,r,s){const{base:o,location:a}=e,{pattern:i,component:c,load:f}=r().route,h=P(()=>r().path);c&&c.preload&&c.preload();const d=f?f({params:s,location:a,intent:S||"initial"}):void 0;return{parent:t,pattern:i,path:h,params:s,outlet:()=>c?v(c,{params:s,location:a,data:d,get children(){return n()}}):n(),resolvePath(b){return k(o.path(),b,h())}}}const et=e=>t=>{const{base:n}=t,r=Pe(()=>t.children),s=P(()=>ie(t.root?{component:t.root,children:r()}:r(),t.base||"")),o=Qe(e,s,{base:n});return e.create&&e.create(o),v(Xe.Provider,{value:o,get children(){return v(tt,{routerState:o,get branches(){return s()}})}})};function tt(e){const t=P(()=>ce(e.branches,e.routerState.location.pathname)),n=se(()=>{const a=t(),i={};for(let c=0;c<a.length;c++)Object.assign(i,a[c].params);return i}),r=[];let s;const o=P(ee(t,(a,i,c)=>{let f=i&&a.length===i.length;const h=[];for(let d=0,y=a.length;d<y;d++){const b=i&&i[d],l=a[d];c&&b&&l.route.key===b.route.key?h[d]=c[d]:(f=!1,r[d]&&r[d](),Re(u=>{r[d]=u,h[d]=Ye(e.routerState,h[d-1]||e.routerState.base,nt(()=>o()[d+1]),()=>t()[d],n)}))}return r.splice(a.length).forEach(d=>d()),c&&f?c:(s=h[0],h)}));return v(te,{get when(){return o()&&s},keyed:!0,children:a=>v(H.Provider,{value:a,get children(){return a.outlet()}})})}const nt=e=>()=>v(te,{get when(){return e()},keyed:!0,children:t=>v(H.Provider,{value:t,get children(){return t.outlet()}})});function rt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function st(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function ot(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=rt(C(n(e.get()),{equals:(s,o)=>s.value===o.value}),void 0,s=>(!t&&e.set(s),s));return e.init&&ne(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),et({signal:r,create:e.create,utils:e.utils})}function at(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function it(e,t){const n=st(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const ct=new Map;function lt(e=!0,t=!1,n="/_server"){return r=>{const s=r.base.path(),o=r.navigatorFactory(r.base);let a={};function i(l){return l.namespaceURI==="http://www.w3.org/2000/svg"}function c(l){if(l.defaultPrevented||l.button!==0||l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)return;const u=l.composedPath().find(O=>O instanceof Node&&O.nodeName.toUpperCase()==="A");if(!u||t&&!u.getAttribute("link"))return;const g=i(u),p=g?u.href.baseVal:u.href;if((g?u.target.baseVal:u.target)||!p&&!u.hasAttribute("state"))return;const E=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||E&&E.includes("external"))return;const $=g?new URL(p,document.baseURI):new URL(p);if(!($.origin!==window.location.origin||s&&$.pathname&&!$.pathname.toLowerCase().startsWith(s.toLowerCase())))return[u,$]}function f(l){const u=c(l);if(!u)return;const[g,p]=u,R=r.parsePath(p.pathname+p.search+p.hash),E=g.getAttribute("state");l.preventDefault(),o(R,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:E&&JSON.parse(E)})}function h(l){const u=c(l);if(!u)return;const[g,p]=u;a[p.pathname]||r.preloadRoute(p,g.getAttribute("preload")!=="false")}function d(l){const u=c(l);if(!u)return;const[g,p]=u;a[p.pathname]||(a[p.pathname]=setTimeout(()=>{r.preloadRoute(p,g.getAttribute("preload")!=="false"),delete a[p.pathname]},200))}function y(l){const u=c(l);if(!u)return;const[,g]=u;a[g.pathname]&&(clearTimeout(a[g.pathname]),delete a[g.pathname])}function b(l){let u=l.submitter&&l.submitter.hasAttribute("formaction")?l.submitter.formAction:l.target.action;if(!u)return;if(!u.startsWith("https://action/")){const p=new URL(u);if(u=r.parsePath(p.pathname+p.search),!u.startsWith(n))return}if(l.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=ct.get(u);if(g){l.preventDefault();const p=new FormData(l.target);l.submitter&&l.submitter.name&&p.append(l.submitter.name,l.submitter.value),g.call(r,p)}}Ae(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mouseover",d),document.addEventListener("mouseout",y),document.addEventListener("focusin",h),document.addEventListener("touchstart",h)),document.addEventListener("submit",b),ne(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mouseover",d),document.removeEventListener("mouseout",y),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",b)})}}function ut(e){return ot({get:()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),set({value:t,replace:n,scroll:r,state:s}){n?window.history.replaceState(s,"",t):window.history.pushState(s,"",t),it(window.location.hash.slice(1),r)},init:t=>at(window,"popstate",()=>t()),create:lt(e.preload,e.explicitLinks,e.actionBase),utils:{go:t=>window.history.go(t)}})(e)}var ft=N("<style>"),dt=N("<link>"),ht=N("<script> ");const mt={style:e=>(()=>{var t=q(ft);return M(t,F(()=>e.attrs),!1,!0),Se(t,()=>e.children),U(),t})(),link:e=>(()=>{var t=q(dt);return M(t,F(()=>e.attrs),!1,!1),U(),t})(),script:e=>e.attrs.src?(()=>{var t=q(ht);return M(t,F(()=>e.attrs,{get id(){return e.key}}),!1,!0),U(),t})():null};function gt(e){let{tag:t,attrs:{key:n,...r}={key:void 0},children:s}=e;return mt[t]({attrs:r,key:n,children:s})}function pt(e,t,n,r="default"){return $e(async()=>{{const o=(await e.import())[r],i=(await t.inputs?.[e.src].assets()).filter(f=>f.tag==="style"||f.attrs.rel==="stylesheet");return{default:f=>[...i.map(h=>gt(h)),v(o,f)]}}})}function yt(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,metadata:{...n.$$route?n.$$route.require().route.metadata:{},filesystem:!0},component:pt(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return he.map(e)}let J;const wt=()=>J||(J=yt());function vt(){return v(ge,{get children(){return v(ut,{get base(){return{}.BASE_PATH},root:e=>v(Le,{get children(){return e.children}}),get children(){return v(wt,{})}})}})}function bt(e){return v(_e,{get fallback(){return v(me,{code:500})},get children(){return e.children}})}function Et(e,t){return xe(e,t)}function Q(e){return e.children}function Pt(){return v(Q,{get children(){return v(Q,{get children(){return v(bt,{get children(){return v(vt,{})}})}})}})}Et(()=>v(Pt,{}),document.getElementById("app"));const Lt=void 0;export{Lt as default};
