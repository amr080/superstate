import{a as r,n as i}from"./create.Bit1cZk2.js";import{V as d}from"./scheduler.DQu3tbww.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new n.Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="cbd18ace-4e97-4c45-b693-2680bfed261e",n._sentryDebugIdIdentifier="sentry-dbid-cbd18ace-4e97-4c45-b693-2680bfed261e")}catch{}})();function c(n){return new Promise(e=>setTimeout(e,n))}function u(n){let e=n.parentElement;for(;r(e)&&!e.hasAttribute("data-portal");)e=e.parentElement;return e||"body"}function y(n,e){return e!==void 0?e:u(n)==="body"?document.body:null}const p=(n,e="body")=>{let t;if(!r(e)&&typeof e!="string")return{destroy:i};async function o(l){if(e=l,typeof e=="string"){if(t=document.querySelector(e),t===null&&(await d(),t=document.querySelector(e)),t===null)throw new Error(`No element found matching css selector: "${e}"`)}else if(e instanceof HTMLElement)t=e;else throw new TypeError(`Unknown portal target type: ${e===null?"null":typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);n.dataset.portal="",t.appendChild(n),n.hidden=!1}function s(){n.remove()}return o(e),{update:o,destroy:s}};export{y as g,c as s,p as u};
//# sourceMappingURL=portal.DrANUrbR.js.map
