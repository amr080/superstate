import{b as S}from"./Bxm-Cs45.js";import{A as y,a as b,b as s,c as f,H as T,E}from"./D7Ypq96i.js";import{i as N}from"./DltN3EHq.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="42d90e3c-9f5b-48a9-babc-8bfbe1b1cd89",t._sentryDebugIdIdentifier="sentry-dbid-42d90e3c-9f5b-48a9-babc-8bfbe1b1cd89")}catch{}})();function _(t){return window.getComputedStyle(t).getPropertyValue("direction")}function z(t="ltr",e="horizontal"){return{horizontal:t==="rtl"?y:b,vertical:s}[e]}function O(t="ltr",e="horizontal"){return{horizontal:t==="rtl"?b:y,vertical:f}[e]}function C(t="ltr",e="horizontal"){return["ltr","rtl"].includes(t)||(t="ltr"),["horizontal","vertical"].includes(e)||(e="horizontal"),{nextKey:z(t,e),prevKey:O(t,e)}}function k(t){const e=t.currentTabStopId?t.currentTabStopId:S(null);function i(){if(!N)return[];const n=document.getElementById(t.rootNodeId.current);return n?t.candidateSelector?Array.from(n.querySelectorAll(t.candidateSelector)):Array.from(n.querySelectorAll(`[${t.candidateAttr}]:not([data-disabled])`)):[]}function x(){var r;const n=i();n.length&&((r=n[0])==null||r.focus())}function A(n,r,a=!1){var v;const g=document.getElementById(t.rootNodeId.current);if(!g||!n)return;const c=i();if(!c.length)return;const d=c.indexOf(n),R=_(g),{nextKey:m,prevKey:I}=C(R,t.orientation.current),h=t.loop.current,l={[m]:d+1,[I]:d-1,[T]:0,[E]:c.length-1};if(a){const w=m===s?b:s,D=I===f?y:f;l[w]=d+1,l[D]=d-1}let o=l[r.key];if(o===void 0)return;r.preventDefault(),o<0&&h?o=c.length-1:o===c.length&&h&&(o=0);const u=c[o];if(u)return u.focus(),e.current=u.id,(v=t.onCandidateFocus)==null||v.call(t,u),u}function K(n){const r=i(),a=e.current!==null;return n&&!a&&r[0]===n?(e.current=n.id,0):(n==null?void 0:n.id)===e.current?0:-1}return{setCurrentTabStopId(n){e.current=n},getTabIndex:K,handleKeydown:A,focusFirstCandidate:x,currentTabStopId:e}}export{k as u};
//# sourceMappingURL=BJNSioD0.js.map
