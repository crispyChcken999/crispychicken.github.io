const t=/#/g,n=/&/g,e=/=/g,r=/\+/g,c=/%5e/gi,o=/%60/gi,s=/%7c/gi,i=/%20/gi;function a(e){return(a="string"==typeof e?e:JSON.stringify(e),encodeURI(""+a).replace(s,"|")).replace(r,"%2B").replace(i,"+").replace(t,"%23").replace(n,"%26").replace(o,"`").replace(c,"^");var a}function u(t){return a(t).replace(e,"%3D")}function h(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function f(t=""){const n={};"?"===t[0]&&(t=t.slice(1));for(const e of t.split("&")){const t=e.match(/([^=]+)=?(.*)/)||[];if(t.length<2)continue;const c=h(t[1]);if("__proto__"===c||"constructor"===c)continue;const o=h((t[2]||"").replace(r," "));void 0!==n[c]?Array.isArray(n[c])?n[c].push(o):n[c]=[n[c],o]:n[c]=o}return n}function l(t){return Object.keys(t).filter((n=>void 0!==t[n])).map((n=>{return e=n,"number"!=typeof(r=t[n])&&"boolean"!=typeof r||(r=String(r)),r?Array.isArray(r)?r.map((t=>`${u(e)}=${a(t)}`)).join("&"):`${u(e)}=${a(r)}`:u(e);var e,r})).join("&")}const p=/^\w{2,}:([/\\]{1,2})/,g=/^\w{2,}:([/\\]{2})?/,m=/^([/\\]\s*){2,}[^/\\]/;function y(t,n={}){return"boolean"==typeof n&&(n={acceptRelative:n}),n.strict?p.test(t):g.test(t)||!!n.acceptRelative&&m.test(t)}const d=/\/$|\/\?/;function v(t="",n=!1){return n?d.test(t):t.endsWith("/")}function $(t="",n=!1){if(!n)return(v(t)?t.slice(0,-1):t)||"/";if(!v(t,!0))return t||"/";const[e,...r]=t.split("?");return(e.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function j(t="",n=!1){if(!n)return t.endsWith("/")?t:t+"/";if(v(t,!0))return t||"/";const[e,...r]=t.split("?");return e+"/"+(r.length>0?`?${r.join("?")}`:"")}function W(t=""){return(function(t=""){return t.startsWith("/")}(t)?t.slice(1):t)||"/"}function b(t,n){if(_(n)||y(t))return t;const e=$(n);return t.startsWith(e)?t:w(e,t)}function A(t,n){if(_(n))return t;const e=$(n);if(!t.startsWith(e))return t;const r=t.slice(e.length);return"/"===r[0]?r:"/"+r}function R(t,n){const e=x(t),r={...f(e.search),...n};return e.search=l(r),function(t){const n=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;if(!t.protocol)return n;return t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+n}(e)}function _(t){return!t||"/"===t}function w(t,...n){let e=t||"";for(const r of n.filter((t=>function(t){return t&&"/"!==t}(t))))e=e?j(e)+W(r):r;return e}function x(t="",n){if(!y(t,{acceptRelative:!0}))return n?x(n+t):I(t);const[e="",r,c=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[o="",s=""]=(c.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:i,search:a,hash:u}=I(s.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:e,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:i,search:a,hash:u}}function I(t=""){const[n="",e="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:n,search:e,hash:r}}export{f as a,j as b,$ as c,b as d,R as e,y as h,w as j,x as p,A as w};
