import{b as S,t as x}from"./index.DSqMFQ5_.js";import{C as A}from"./scheduler.DQu3tbww.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="9e6d684a-498a-444c-ae17-ab115f21b773",e._sentryDebugIdIdentifier="sentry-dbid-9e6d684a-498a-444c-ae17-ab115f21b773")}catch{}})();function q(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function z(e,i){e.d(1),i.delete(e.key)}function B(e,i){S(e,1,1,()=>{i.delete(e.key)})}function F(e,i,b,C,D,m,a,v,p,M,u,k){let d=e.length,c=m.length,f=d;const w={};for(;f--;)w[e[f].key]=f;const o=[],h=new Map,y=new Map,I=[];for(f=c;f--;){const n=k(D,m,f),s=b(n);let t=a.get(s);t?I.push(()=>t.p(n,i)):(t=M(s,n),t.c()),h.set(s,o[f]=t),s in w&&y.set(s,Math.abs(f-w[s]))}const _=new Set,r=new Set;function g(n){x(n,1),n.m(v,u),a.set(n.key,n),u=n.first,c--}for(;d&&c;){const n=o[c-1],s=e[d-1],t=n.key,l=s.key;n===s?(u=n.first,d--,c--):h.has(l)?!a.has(t)||_.has(t)?g(n):r.has(l)?d--:y.get(t)>y.get(l)?(r.add(t),g(n)):(_.add(l),d--):(p(s,a),d--)}for(;d--;){const n=e[d];h.has(n.key)||p(n,a)}for(;c;)g(o[c-1]);return A(I),o}export{z as d,q as e,B as o,F as u};
//# sourceMappingURL=each.CAAIs8bA.js.map
