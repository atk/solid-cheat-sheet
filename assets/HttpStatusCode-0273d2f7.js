import{onCleanup as u}from"solid-js";import{isServer as f,getRequestEvent as m}from"solid-js/web";const a=[{type:"page",$component:{src:"src/routes/[...404].mdx?pick=$css",build:()=>import("../_...404_.js"),import:()=>import("../_...404_.js")},path:"/*404",filePath:"/home/runner/work/solid-cheat-sheet/solid-cheat-sheet/src/routes/[...404].mdx"},{type:"page",$component:{src:"src/routes/index.mdx?pick=$css",build:()=>import("../index.js"),import:()=>import("../index.js")},path:"/",filePath:"/home/runner/work/solid-cheat-sheet/solid-cheat-sheet/src/routes/index.mdx"}],k=g(a.filter(s=>s.type==="page")),d=x(a.filter(s=>s.type==="api"));function v(s,n){const e=s.split("/").filter(Boolean);e:for(const t of d){const o=t.matchSegments;if(e.length<o.length||!t.wildcard&&e.length>o.length)continue;for(let i=0;i<o.length;i++){const l=o[i];if(l&&e[i]!==l)continue e}const c=t[`$${n}`];if(c==="skip"||c===void 0)return;const r={};for(const{type:i,name:l,index:p}of t.params)i===":"?r[l]=e[p]:r[l]=e.slice(p).join("/");return{handler:c,params:r}}}function g(s){function n(e,t,o,c){const r=Object.values(e).find(i=>o.startsWith(i.id+"/"));return r?(n(r.children||(r.children=[]),t,o.slice(r.id.length)),e):(e.push({...t,id:o,path:o.replace(/\/\([^)/]+\)/g,"")}),e)}return s.sort((e,t)=>e.path.length-t.path.length).reduce((e,t)=>n(e,t,t.path,t.path),[])}function x(s){return s.flatMap(n=>h(n.path).map(t=>({...n,path:t}))).map(R).sort((n,e)=>e.score-n.score)}function h(s){let n=/(\/?\:[^\/]+)\?/.exec(s);if(!n)return[s];let e=s.slice(0,n.index),t=s.slice(n.index+n[0].length);const o=[e,e+=n[1]];for(;n=/^(\/\:[^\/]+)\?/.exec(t);)o.push(e+=n[1]),t=t.slice(n[0].length);return h(t).reduce((c,r)=>[...c,...o.map(i=>i+r)],[])}function R(s){const n=s.path.split("/").filter(Boolean),e=[],t=[];let o=0,c=!1;for(const[r,i]of n.entries())if(i[0]===":"){const l=i.slice(1);o+=3,e.push({type:":",name:l,index:r}),t.push(null)}else i[0]==="*"?(o-=1,e.push({type:"*",name:i.slice(1),index:r}),c=!0):(o+=4,i.match(/^\(.+\)$/)||t.push(i));return{...s,score:o,params:e,matchSegments:t,wildcard:c}}function w(s){if(f){const n=m();n&&u(n.components.status(s))}return null}export{w as H,v as m,k as p};
