import"./BDoNhndn.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new n.Error().stack;s&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[s]="497871cb-489b-40ab-916b-32a7190f36e7",n._sentryDebugIdIdentifier="sentry-dbid-497871cb-489b-40ab-916b-32a7190f36e7")}catch{}})();const m="modulepreload",g=function(n,s){return new URL(n,s).href},y={},p=function(s,c,u){let d=Promise.resolve();if(c&&c.length>0){const o=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),b=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));d=Promise.allSettled(c.map(t=>{if(t=g(t,u),t in y)return;y[t]=!0;const l=t.endsWith(".css"),_=l?'[rel="stylesheet"]':"";if(!!u)for(let i=o.length-1;i>=0;i--){const a=o[i];if(a.href===t&&(!l||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${_}`))return;const r=document.createElement("link");if(r.rel=l?"stylesheet":m,l||(r.as="script"),r.crossOrigin="",r.href=t,b&&r.setAttribute("nonce",b),document.head.appendChild(r),l)return new Promise((i,a)=>{r.addEventListener("load",i),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${t}`)))})}))}function f(o){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=o,window.dispatchEvent(e),!e.defaultPrevented)throw o}return d.then(o=>{for(const e of o||[])e.status==="rejected"&&f(e.reason);return s().catch(f)})},w=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),S=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),E=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{p as _,w as a,S as b,E as c};
//# sourceMappingURL=oaZngUZs.js.map
