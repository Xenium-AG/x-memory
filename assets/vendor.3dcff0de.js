function x(){}const G=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function K(){return Object.create(null)}function E(t){t.forEach(J)}function Q(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let O;function jt(t,e){return O||(O=document.createElement("a")),O.href=e,t===O.href}function lt(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function qt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Nt(t,e,n,s){if(t){const o=U(t,e,n,s);return t[0](o)}}function U(t,e,n,s){return t[1]&&s?at(n.ctx.slice(),t[1](s(e))):n.ctx}function Rt(t,e,n,s){if(t[2]&&s){const o=t[2](s(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const a=[],r=Math.max(e.dirty.length,o.length);for(let u=0;u<r;u+=1)a[u]=e.dirty[u]|o[u];return a}return e.dirty|o}return e.dirty}function zt(t,e,n,s,o,a){if(o){const r=U(e,n,s,a);t.p(r,o)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Bt(t,e,n){return t.set(n),e}const X=typeof window!="undefined";let dt=X?()=>window.performance.now():()=>Date.now(),D=X?t=>requestAnimationFrame(t):x;const k=new Set;function Y(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&D(Y)}function _t(t){let e;return k.size===0&&D(Y),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}function ht(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=yt("style");return mt(tt(t),e),e}function mt(t,e){ht(t.head||t,e)}function Dt(t,e,n){t.insertBefore(e,n||null)}function gt(t){t.parentNode.removeChild(t)}function Pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function yt(t){return document.createElement(t)}function Vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function et(t){return document.createTextNode(t)}function Wt(){return et(" ")}function Ht(){return et("")}function It(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Gt(t){return t===""?null:+t}function bt(t){return Array.from(t.childNodes)}function Jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Kt(t,e){t.value=e==null?"":e}function Qt(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function Ut(t,e,n){t.classList[n?"add":"remove"](e)}function nt(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}const P=new Set;let j=0;function wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function st(t,e,n,s,o,a,r,u=0){const f=16.666/s;let i=`{
`;for(let m=0;m<=1;m+=f){const y=e+(n-e)*a(m);i+=m*100+`%{${r(y,1-y)}}
`}const p=i+`100% {${r(n,1-n)}}
}`,d=`__svelte_${wt(p)}_${u}`,c=tt(t);P.add(c);const l=c.__svelte_stylesheet||(c.__svelte_stylesheet=pt(t).sheet),_=c.__svelte_rules||(c.__svelte_rules={});_[d]||(_[d]=!0,l.insertRule(`@keyframes ${d} ${p}`,l.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${s}ms linear ${o}ms 1 both`,j+=1,d}function $t(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),o=n.length-s.length;o&&(t.style.animation=s.join(", "),j-=o,j||xt())}function xt(){D(()=>{j||(P.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),P.clear())})}let q;function N(t){q=t}function vt(){if(!q)throw new Error("Function called outside component initialization");return q}function Xt(){const t=vt();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const o=nt(e,n);s.slice().forEach(a=>{a.call(t,o)})}}}const M=[],ot=[],R=[],V=[],Ct=Promise.resolve();let W=!1;function Et(){W||(W=!0,Ct.then(rt))}function z(t){R.push(t)}function Yt(t){V.push(t)}let H=!1;const I=new Set;function rt(){if(!H){H=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];N(e),kt(e.$$)}for(N(null),M.length=0;ot.length;)ot.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];I.has(e)||(I.add(e),e())}R.length=0}while(M.length);for(;V.length;)V.pop()();W=!1,H=!1,I.clear()}}function kt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let A;function Lt(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function Z(t,e,n){t.dispatchEvent(nt(`${e?"intro":"outro"}${n}`))}const T=new Set;let $;function te(){$={r:0,c:[],p:$}}function ee(){$.r||E($.c),$=$.p}function it(t,e){t&&t.i&&(T.delete(t),t.i(e))}function Mt(t,e,n,s){if(t&&t.o){if(T.has(t))return;T.add(t),$.c.push(()=>{T.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const At={duration:0};function ne(t,e,n,s){let o=e(t,n),a=s?0:1,r=null,u=null,f=null;function i(){f&&$t(t,f)}function p(c,l){const _=c.b-a;return l*=Math.abs(_),{a,b:c.b,d:_,duration:l,start:c.start,end:c.start+l,group:c.group}}function d(c){const{delay:l=0,duration:_=300,easing:g=G,tick:m=x,css:y}=o||At,v={start:dt()+l,b:c};c||(v.group=$,$.r+=1),r||u?u=v:(y&&(i(),f=st(t,a,c,_,l,g,y)),c&&m(0,1),r=p(v,_),z(()=>Z(t,c,"start")),_t(C=>{if(u&&C>u.start&&(r=p(u,_),u=null,Z(t,r.b,"start"),y&&(i(),f=st(t,a,r.b,r.duration,0,g,o.css))),r){if(C>=r.end)m(a=r.b,1-a),Z(t,r.b,"end"),u||(r.b?i():--r.group.r||E(r.group.c)),r=null;else if(C>=r.start){const S=C-r.start;a=r.a+r.d*g(S/r.duration),m(a,1-a)}}return!!(r||u)}))}return{run(c){Q(o)?Lt().then(()=>{o=o(),d(c)}):d(c)},end(){i(),r=u=null}}}function se(t,e){Mt(t,1,1,()=>{e.delete(t.key)})}function oe(t,e,n,s,o,a,r,u,f,i,p,d){let c=t.length,l=a.length,_=c;const g={};for(;_--;)g[t[_].key]=_;const m=[],y=new Map,v=new Map;for(_=l;_--;){const h=d(o,a,_),b=n(h);let w=r.get(b);w?s&&w.p(h,e):(w=i(b,h),w.c()),y.set(b,m[_]=w),b in g&&v.set(b,Math.abs(_-g[b]))}const C=new Set,S=new Set;function B(h){it(h,1),h.m(u,p),r.set(h.key,h),p=h.first,l--}for(;c&&l;){const h=m[l-1],b=t[c-1],w=h.key,F=b.key;h===b?(p=h.first,c--,l--):y.has(F)?!r.has(w)||C.has(w)?B(h):S.has(F)?c--:v.get(w)>v.get(F)?(S.add(w),B(h)):(C.add(F),c--):(f(b,r),c--)}for(;c--;){const h=t[c];y.has(h.key)||f(h,r)}for(;l;)B(m[l-1]);return m}function re(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function ie(t){t&&t.c()}function St(t,e,n,s){const{fragment:o,on_mount:a,on_destroy:r,after_update:u}=t.$$;o&&o.m(e,n),s||z(()=>{const f=a.map(J).filter(Q);r?r.push(...f):E(f),t.$$.on_mount=[]}),u.forEach(z)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(M.push(t),Et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,s,o,a,r,u=[-1]){const f=q;N(t);const i=t.$$={fragment:null,ctx:null,props:a,update:x,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:K(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};r&&r(i.root);let p=!1;if(i.ctx=n?n(t,e.props||{},(d,c,...l)=>{const _=l.length?l[0]:c;return i.ctx&&o(i.ctx[d],i.ctx[d]=_)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](_),p&&Ot(t,d)),c}):[],i.update(),p=!0,E(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){const d=bt(e.target);i.fragment&&i.fragment.l(d),d.forEach(gt)}else i.fragment&&i.fragment.c();e.intro&&it(t.$$.fragment),St(t,e.target,e.anchor,e.customElement),rt()}N(f)}class ae{$destroy(){Ft(this,1),this.$destroy=x}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var ue="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",le="M21.47,4.35L20.13,3.79V12.82L22.56,6.96C22.97,5.94 22.5,4.77 21.47,4.35M1.97,8.05L6.93,20C7.24,20.77 7.97,21.24 8.74,21.26C9,21.26 9.27,21.21 9.53,21.1L16.9,18.05C17.65,17.74 18.11,17 18.13,16.26C18.14,16 18.09,15.71 18,15.45L13,3.5C12.71,2.73 11.97,2.26 11.19,2.25C10.93,2.25 10.67,2.31 10.42,2.4L3.06,5.45C2.04,5.87 1.55,7.04 1.97,8.05M18.12,4.25A2,2 0 0,0 16.12,2.25H14.67L18.12,10.59",fe="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z";function ct(t){const e=t-1;return e*e*e+1}function de(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}function _e(t,{delay:e=0,duration:n=400,easing:s=G}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:a=>`opacity: ${a*o}`}}function he(t,{delay:e=0,duration:n=400,easing:s=ct}={}){const o=getComputedStyle(t),a=+o.opacity,r=parseFloat(o.height),u=parseFloat(o.paddingTop),f=parseFloat(o.paddingBottom),i=parseFloat(o.marginTop),p=parseFloat(o.marginBottom),d=parseFloat(o.borderTopWidth),c=parseFloat(o.borderBottomWidth);return{delay:e,duration:n,easing:s,css:l=>`overflow: hidden;opacity: ${Math.min(l*20,1)*a};height: ${l*r}px;padding-top: ${l*u}px;padding-bottom: ${l*f}px;margin-top: ${l*i}px;margin-bottom: ${l*p}px;border-top-width: ${l*d}px;border-bottom-width: ${l*c}px;`}}function pe(t,{delay:e=0,duration:n=400,easing:s=ct,start:o=0,opacity:a=0}={}){const r=getComputedStyle(t),u=+r.opacity,f=r.transform==="none"?"":r.transform,i=1-o,p=u*(1-a);return{delay:e,duration:n,easing:s,css:(d,c)=>`
			transform: ${f} scale(${1-i*c});
			opacity: ${u-p*c}
		`}}const L=[];function me(t,e=x){let n;const s=new Set;function o(u){if(ut(t,u)&&(t=u,n)){const f=!L.length;for(const i of s)i[1](),L.push(i,t);if(f){for(let i=0;i<L.length;i+=2)L[i][0](L[i+1]);L.length=0}}}function a(u){o(u(t))}function r(u,f=x){const i=[u,f];return s.add(i),s.size===1&&(n=e(o)||x),u(t),()=>{s.delete(i),s.size===0&&(n(),n=null)}}return{set:o,update:a,subscribe:r}}export{Wt as A,St as B,Ft as C,E as D,zt as E,Tt as F,Rt as G,_e as H,pe as I,Nt as J,de as K,me as L,Kt as M,Gt as N,jt as O,oe as P,Pt as Q,qt as R,ae as S,ot as T,re as U,Yt as V,he as W,se as X,Bt as Y,Dt as a,it as b,ee as c,gt as d,Ht as e,yt as f,te as g,Zt as h,ce as i,Ut as j,ht as k,It as l,Xt as m,x as n,et as o,Jt as p,z as q,ne as r,ut as s,Mt as t,Qt as u,Vt as v,fe as w,le as x,ue as y,ie as z};