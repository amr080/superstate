import{a as i,s as c,S as d,b as l,h as p,o as f,c as y}from"./exports.Cg5VW7Mk.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="44712760-d21e-4c4a-865a-8c937169bf1a",t._sentryDebugIdIdentifier="sentry-dbid-44712760-d21e-4c4a-865a-8c937169bf1a")}catch{}})();function b(t){if(t==null||typeof t!="object")return!1;const e="location"in t&&typeof t.location=="string",o="status"in t&&typeof t.status=="number"&&t.status>=300&&t.status<=308;return e&&o}function _(t){return typeof t=="object"&&t!==null&&"status"in t&&"body"in t}function E(t){const e=f(t);return b(e)||_(e)&&e.status<500&&e.status>=400||y(e,{mechanism:{type:"sveltekit",handled:!1,data:{function:"load"}}}),e}function w(t){return new Proxy(t,{apply:(e,o,s)=>{const n=s[0];if(n.__sentry_wrapped__)return e.apply(o,s);const r={...n};i(r,"__sentry_wrapped__",!0);const u=n.route&&Object.getOwnPropertyDescriptor(n.route,"id"),a=u&&u.value||n.route.id;return c({op:"function.sveltekit.load",attributes:{[d]:"auto.function.sveltekit",[l]:a?"route":"url"},name:a||n.url.pathname},()=>p(()=>e.apply(o,[r]),E))}})}export{w};
//# sourceMappingURL=load.B--kSqqS.js.map
