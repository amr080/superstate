import{d as l}from"./entry.CNWWqpSN.js";import{n as f,a as c,u as b,e as y}from"./create.Bit1cZk2.js";import{u as p}from"./helpers.C1xr1UtZ.js";import{c as g,u as m}from"./action.DuqT3eFd.js";import{u as w}from"./portal.DrANUrbR.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="b191dadc-beeb-4e93-a0cb-bc4291d2d044",e._sentryDebugIdIdentifier="sentry-dbid-b191dadc-beeb-4e93-a0cb-bc4291d2d044")}catch{}})();function C(e){const{open:r,forceVisible:t,activeTrigger:n}=e;return l([r,t,n],([d,s,a])=>(d||s)&&a!==null)}const h={floating:{},focusTrap:{},modal:{},escapeKeydown:{},portal:"body"},F=(e,r)=>{e.dataset.escapee="";const{anchorElement:t,open:n,options:d}=r;if(!t||!n||!d)return{destroy:f};const s={...h,...d},a=[];if(s.portal!==null){const o=w(e,s.portal);o!=null&&o.destroy&&a.push(o.destroy)}if(a.push(p(t,e,s.floating).destroy),s.focusTrap!==null){const{useFocusTrap:o}=g({immediate:!0,escapeDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:e,...s.focusTrap}),u=o(e);u!=null&&u.destroy&&a.push(u.destroy)}s.modal!==null&&a.push(m(e,{onClose:()=>{c(t)&&(n.set(!1),t.focus())},shouldCloseOnInteractOutside:o=>!(o.defaultPrevented||c(t)&&t.contains(o.target)),...s.modal}).destroy),s.escapeKeydown!==null&&a.push(b(e,{enabled:n,handler:()=>{n.set(!1)},...s.escapeKeydown}).destroy);const i=y(...a);return{destroy(){i()}}};export{C as d,F as u};
//# sourceMappingURL=action.DmTzdc6o.js.map
