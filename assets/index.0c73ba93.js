var It=Object.defineProperty;var Be=Object.getOwnPropertySymbols;var Mt=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable;var Le=(l,e,t)=>e in l?It(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,be=(l,e)=>{for(var t in e||(e={}))Mt.call(e,t)&&Le(l,t,e[t]);if(Be)for(var t of Be(e))Ot.call(e,t)&&Le(l,t,e[t]);return l};import{S as X,i as x,s as ee,e as Ce,a as P,g as ue,t as O,c as fe,b as I,d as M,f as h,h as u,j as K,k as m,l as Z,n as H,m as Ae,o as G,p as ie,q as Q,r as j,u as qe,v as ke,w as St,x as Nt,y as Rt,z as T,A as S,B,C as L,D as Pe,E as Et,F as jt,G as Tt,H as we,I as de,J as Bt,P as Lt,K as qt,L as Ie,M as pe,N as Dt,O as Kt,Q as ye,R as ne,T as Ft,U as De,V as zt,W as Ke,X as Jt,Y as ae,Z as re,_ as oe,$ as Fe,a0 as Wt,a1 as Ht,a2 as Gt}from"./vendor.c5562358.js";const Ut=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};Ut();const Zt=[{name:"petrol",color:"007c9d"},{name:"tuerkis",color:"00afc6"},{name:"grau",color:"5a5a5a"},{name:"orange",color:"fa965a"}],Qt=["petrol","petrol","petrol","tuerkis","tuerkis","tuerkis","grau","orange","orange"],U={Correct:"correct",Incorrect:"incorrect",None:"none"};function Yt(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}function ze(l){return l[Math.floor(Math.random()*l.length)]}function Vt(l){const e=[...l];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e}function Xt(l,e){var t=!1;return function(){t||(l.apply(this,arguments),t=!0,setTimeout(function(){t=!1},e))}}function Me(l){return l.split(",").map(e=>e.trim())}function Je(l,e){let t=[];if(e>l.length||e<1)return[];if(e===l.length)return[l];if(e===1)return l.map(n=>[n]);for(let n=0;n<l.length-e+1;n++){let s=l.slice(n,n+1),i=Je(l.slice(n+1),e-1);for(let a=0;a<i.length;a++)t.push(s.concat(i[a]))}return t}function We(l){let e,t,n;const s=[tn,en,xt],i=[];function a(r,c){return r[0].flipped?r[0].type==="image"?1:2:0}return e=a(l),t=i[e]=s[e](l),{c(){t.c(),n=Ce()},m(r,c){i[e].m(r,c),P(r,n,c)},p(r,c){let o=e;e=a(r),e===o?i[e].p(r,c):(ue(),O(i[o],1,1,()=>{i[o]=null}),fe(),t=i[e],t?t.p(r,c):(t=i[e]=s[e](r),t.c()),I(t,1),t.m(n.parentNode,n))},d(r){i[e].d(r),r&&M(n)}}}function xt(l){let e,t=l[0].value+"",n,s,i;return{c(){e=h("div"),n=G(t),u(e,"class","card-front text-light-blue-800 svelte-14cke48"),K(e,"incorrect",l[0].status===U.Incorrect),K(e,"correct",l[0].status===U.Correct)},m(a,r){P(a,e,r),m(e,n),i=!0},p(a,r){(!i||r&1)&&t!==(t=a[0].value+"")&&ie(n,t),r&1&&K(e,"incorrect",a[0].status===U.Incorrect),r&1&&K(e,"correct",a[0].status===U.Correct)},i(a){i||(a&&Q(()=>{s||(s=j(e,me,{},!0)),s.run(1)}),i=!0)},o(a){a&&(s||(s=j(e,me,{},!1)),s.run(0)),i=!1},d(a){a&&M(e),a&&s&&s.end()}}}function en(l){let e,t,n;return{c(){e=h("div"),u(e,"class","card-front svelte-14cke48"),qe(e,"background-image","url("+l[0].value+")"),K(e,"incorrect",l[0].status===U.Incorrect),K(e,"correct",l[0].status===U.Correct)},m(s,i){P(s,e,i),n=!0},p(s,i){(!n||i&1)&&qe(e,"background-image","url("+s[0].value+")"),i&1&&K(e,"incorrect",s[0].status===U.Incorrect),i&1&&K(e,"correct",s[0].status===U.Correct)},i(s){n||(s&&Q(()=>{t||(t=j(e,me,{},!0)),t.run(1)}),n=!0)},o(s){s&&(t||(t=j(e,me,{},!1)),t.run(0)),n=!1},d(s){s&&M(e),s&&t&&t.end()}}}function tn(l){let e,t,n,s;return{c(){e=h("div"),u(e,"class","card-back absolute transition inset-0 shadow-md rounded-sm svelte-14cke48"),u(e,"style",t=";background-image:url('"+l[2][l[0].backColor]+"');")},m(i,a){P(i,e,a),s=!0},p(i,a){(!s||a&1&&t!==(t=";background-image:url('"+i[2][i[0].backColor]+"');"))&&u(e,"style",t)},i(i){s||(i&&Q(()=>{n||(n=j(e,me,{},!0)),n.run(1)}),s=!0)},o(i){i&&(n||(n=j(e,me,{},!1)),n.run(0)),s=!1},d(i){i&&M(e),i&&n&&n.end()}}}function nn(l){let e,t,n,s,i,a=l[0]&&We(l);return{c(){e=h("div"),t=h("div"),n=h("div"),a&&a.c(),u(n,"class","absolute inset-1 transform rotate transform transition card-container scale-100 svelte-14cke48"),u(n,"style",`--tw-rotate:${Math.random()*6-3}deg`),K(n,"closed",!l[0]||!l[0].flipped),K(n,"touchy",Yt()),u(t,"class","absolute cursor-pointer transition inset-0 hover:z-2 preserve-3d perspect-origin-center perspect-1000px svelte-14cke48"),u(e,"class","relative w-27 h-27 svelte-14cke48")},m(r,c){P(r,e,c),m(e,t),m(t,n),a&&a.m(n,null),s||(i=Z(e,"click",l[3]),s=!0)},p(r,[c]){r[0]?a?a.p(r,c):(a=We(r),a.c(),a.m(n,null)):a&&(a.d(1),a=null),c&1&&K(n,"closed",!r[0]||!r[0].flipped)},i:H,o:H,d(r){r&&M(e),a&&a.d(),s=!1,i()}}}function me(l,{delay:e=0,duration:t=250}){return{delay:e,duration:t,css:(n,s)=>`
        transform: rotateX(${1-s*180}deg) rotateZ(${1-s*5}deg) scale(${1+s*.6});
        opacity: ${s<.5?1:0};
      `}}function ln(l,e,t){const n=Ae(),s=Object.fromEntries(Zt.map(({name:r,color:c})=>[r,`data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" stroke="%23${c.replace("#","")}" stroke-width="22" viewBox="0 0 100 100"%3E%3Cg transform="rotate(45)"%3E%3Cpath d="M0 0h150M0 30h150M0 60h150M0 -30h150M0 -60h150"/%3E%3C/g%3E%3C/svg%3E`]));let{card:i}=e;const a=()=>{n("flipped")};return l.$$set=r=>{"card"in r&&t(0,i=r.card)},[i,n,s,a]}class Oe extends X{constructor(e){super();x(this,e,ln,nn,ee,{card:0})}}function sn(l){let e,t,n;return{c(){e=ke("svg"),t=ke("path"),u(t,"d",l[0]),u(e,"viewBox",n="0 0 "+l[1].w+" "+l[1].h),u(e,"fill",l[2]),u(e,"width","100%"),u(e,"height","100%")},m(s,i){P(s,e,i),m(e,t)},p(s,[i]){i&1&&u(t,"d",s[0]),i&2&&n!==(n="0 0 "+s[1].w+" "+s[1].h)&&u(e,"viewBox",n),i&4&&u(e,"fill",s[2])},i:H,o:H,d(s){s&&M(e)}}}function an(l,e,t){let{d:n}=e,{dim:s={w:30,h:30}}=e,{fill:i="rgb(156, 163, 175)"}=e;return l.$$set=a=>{"d"in a&&t(0,n=a.d),"dim"in a&&t(1,s=a.dim),"fill"in a&&t(2,i=a.fill)},[n,s,i]}class Se extends X{constructor(e){super();x(this,e,an,sn,ee,{d:0,dim:1,fill:2})}}function rn(l){let e,t,n,s,i,a,r,c,o,d,f,_,g,b,$,C,A,D,N;return i=new Se({props:{d:St}}),d=new Se({props:{d:Nt,fill:"rgb(251, 146, 60)"}}),$=new Se({props:{d:Rt}}),{c(){e=h("div"),t=h("div"),n=h("button"),s=h("span"),T(i.$$.fragment),a=G("Optionen"),r=S(),c=h("button"),o=h("span"),T(d.$$.fragment),f=G("Neu"),_=S(),g=h("button"),b=h("span"),T($.$$.fragment),C=G("Daten"),u(s,"class","w-6 h-6 inline-block mr-1 svelte-1uh3kgt"),u(n,"class","svelte-1uh3kgt"),u(o,"class","w-6 h-6 inline-block mr-1 svelte-1uh3kgt"),u(c,"class","text-orange-400 h-full  svelte-1uh3kgt"),u(b,"class","w-6 h-6 inline-block mr-1 svelte-1uh3kgt"),u(g,"class","svelte-1uh3kgt"),u(t,"class","max-w-xl mx-auto flex justify-between svelte-1uh3kgt"),u(e,"class","absolute left-0 right-0 top-0 z-10 bg-dark-200 svelte-1uh3kgt")},m(y,E){P(y,e,E),m(e,t),m(t,n),m(n,s),B(i,s,null),m(n,a),m(t,r),m(t,c),m(c,o),B(d,o,null),m(c,f),m(t,_),m(t,g),m(g,b),B($,b,null),m(g,C),A=!0,D||(N=[Z(n,"click",l[1]),Z(c,"click",l[2]),Z(g,"click",l[3])],D=!0)},p:H,i(y){A||(I(i.$$.fragment,y),I(d.$$.fragment,y),I($.$$.fragment,y),A=!0)},o(y){O(i.$$.fragment,y),O(d.$$.fragment,y),O($.$$.fragment,y),A=!1},d(y){y&&M(e),L(i),L(d),L($),D=!1,Pe(N)}}}function on(l){const e=Ae();return[e,()=>{e("menu-settings")},()=>{e("shuffle")},()=>{e("menu-data")}]}class cn extends X{constructor(e){super();x(this,e,on,rn,ee,{})}}function He(l){let e,t,n,s,i,a,r,c,o,d,f,_,g;const b=l[4].default,$=Bt(b,l,l[3],null);return{c(){e=h("div"),n=S(),s=h("div"),i=h("h1"),a=G(l[1]),r=S(),$&&$.c(),c=S(),o=h("button"),o.textContent="OK",u(e,"class","fixed z-20 inset-0 bg-light-300/15 backdrop-filter backdrop-blur-sm backdrop-grayscale svelte-do0nsj"),u(i,"class","mt-0 mb-10 pt-1 text-center font-thin text-xl svelte-do0nsj"),u(o,"class","btn w-full mt-5 svelte-do0nsj"),u(s,"class","absolute self-center mt-20 w-xs bg-dark-200 z-21 rounded-xl shadow px-5 pt-3 pb-5 text-light-900 svelte-do0nsj")},m(C,A){P(C,e,A),P(C,n,A),P(C,s,A),m(s,i),m(i,a),m(s,r),$&&$.m(s,null),m(s,c),m(s,o),f=!0,_||(g=[Z(e,"click",l[2]),Z(o,"click",l[2])],_=!0)},p(C,A){(!f||A&2)&&ie(a,C[1]),$&&$.p&&(!f||A&8)&&Et($,b,C,C[3],f?Tt(b,C[3],A,null):jt(C[3]),null)},i(C){f||(Q(()=>{t||(t=j(e,we,{duration:50},!0)),t.run(1)}),I($,C),Q(()=>{d||(d=j(s,de,{duration:150},!0)),d.run(1)}),f=!0)},o(C){t||(t=j(e,we,{duration:50},!1)),t.run(0),O($,C),d||(d=j(s,de,{duration:150},!1)),d.run(0),f=!1},d(C){C&&M(e),C&&t&&t.end(),C&&M(n),C&&M(s),$&&$.d(C),C&&d&&d.end(),_=!1,Pe(g)}}}function un(l){let e,t,n=l[0]&&He(l);return{c(){n&&n.c(),e=Ce()},m(s,i){n&&n.m(s,i),P(s,e,i),t=!0},p(s,[i]){s[0]?n?(n.p(s,i),i&1&&I(n,1)):(n=He(s),n.c(),I(n,1),n.m(e.parentNode,e)):n&&(ue(),O(n,1,1,()=>{n=null}),fe())},i(s){t||(I(n),t=!0)},o(s){O(n),t=!1},d(s){n&&n.d(s),s&&M(e)}}}function fn(l,e,t){let{$$slots:n={},$$scope:s}=e;const i=Ae();let{open:a=!1}=e,{title:r=""}=e;function c(){i("close")}return l.$$set=o=>{"open"in o&&t(0,a=o.open),"title"in o&&t(1,r=o.title),"$$scope"in o&&t(3,s=o.$$scope)},[a,r,c,s,n]}class $e extends X{constructor(e){super();x(this,e,fn,un,ee,{open:0,title:1})}}function dn(l,e,t){const n=.1;let s=l.map(r=>{var g;const c={isLeft:!0,type:"text",origin:r,value:null},o={isLeft:!1,type:"text",origin:r,value:null},d=Math.max(1,Math.ceil(n/(1-n)*r.characteristics.length)),f=Array.from({length:d},b=>({type:"name",value:r.name}));let _=t.onlyNames?f:[...r.characteristics];return((g=r.profilePicture)==null?void 0:g.length)?(c.type="image",c.value=r.profilePicture):(c.type="text",c.value=r.name,_=r.characteristics),o.value=ze(_).value,t.isCatMode&&(o.type="image",o.value=r.profilePicture),{left:c,right:o}});const i=Vt(s.slice(0,e).map(({left:r,right:c},o)=>[r,c].map(({isLeft:d,type:f,value:_},g)=>({id:o*2+g,type:f,value:_,flipped:!1,status:"none",backColor:t.isCardBackRandom?ze(Qt):d?"orange":"petrol"}))).flat()),a=[];for(let r=0;r<i.length-1;r++)for(let c=r+1;c<i.length;c++)Ge(l,[i[r],i[c]])&&a.push([i[r].id,i[c].id]);return{legalPairs:a,cards:i}}function Ge(l,e){const[t,n]=e;return l.find(s=>{let i=!1;t.type==="image"||n.type==="image"?i=s.profilePicture===t.value||s.profilePicture===n.value:i=s.name===t.value||s.name===n.value;const a=s.values.filter(c=>c===t.value),r=s.values.filter(c=>c===n.value);return i&&a.length&&r.length})}function pn(l,e,t,n){const s=Ge(l,t),i=e.filter(o=>!o.flipped).map(o=>o.id);if(i.length===0)return{isCorrect:!!s,isSolvable:!0};if(t.every(o=>o.value.match(/(ruppert|jores)\.jpg$/)))return{isCorrect:!0,isSolvable:!1};const a=n.filter(([o,d])=>i.includes(o)&&i.includes(d)),c=Je(a,i.length/2).some(o=>i.length===new Set(o.flat()).size);return{isCorrect:!!s,isSolvable:c}}const mn={auth:{clientId:"8cb79a95-16ba-4944-ba1f-3eb6aba590af",authority:"https://login.microsoftonline.com/xenium.de/",redirectUri:"https://xenium-ag.github.io/x-memory/",postLogoutRedirectUri:"https://xenium-ag.github.io/x-memory/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1}},Ne={scopes:["openid","profile","User.Read","Files.ReadWrite.All"]},Ue={scopes:["Files.ReadWrite.All"]},Ze="https://graph.microsoft.com/v1.0/",Qe={graphMeEndpoint:Ze+"me",graphExcelEndpoint:Ze+"me/drives('b!Utxo2OdxZ0m6Aa6YyxsRYJq_yqIJBDhAhzfzV4IdMqAfOk7I-jyKSbaKTjKw9ckq')/items/01J56JD4FDQGYFDNQWWBF33LJVPIJ227RC/workbook"},F=new Lt(mn);(async()=>{_n(await F.handleRedirectPromise())})();function _n(l){F.getAllAccounts().length===0?F.loginRedirect(Ne):F.setActiveAccount(F.getAllAccounts()[0])}async function gn(){const l=await F.loginRedirect(Ne);return console.log("id_token acquired at: "+new Date().toString()),F.setActiveAccount(F.getAllAccounts()[0]),l}async function hn(){return F.logoutRedirect()}function vn(){return!!F.getActiveAccount()}async function Ye(l,e,t,n,s){const i={method:l,headers:new Headers(be({Authorization:`Bearer ${s}`},e))};return["patch","post"].some(a=>a===l.toLowerCase())&&(i.body=JSON.stringify(n)),(await fetch(t,i)).json()}async function Ve(l){try{return await F.acquireTokenSilent(l)}catch(e){return console.error(e),F.acquireTokenRedirect(l)}}async function Xe(l){F.getActiveAccount()||await gn();const{accessToken:e}=await Ve(l);return e}async function xe(){return F.getActiveAccount()||await Ve(Ne),F.getActiveAccount().username}let Re="";async function bn(){if(!Re){const{id:l}=await Ye("POST",{persistChanges:!0},Qe.graphExcelEndpoint+"/createSession",{},await Xe(Ue));Re=l,kn()}}async function Ee(l,e,t={}){return await bn(),Ye(l,{"workbook-session-id":Re},Qe.graphExcelEndpoint+"/"+e,t,await Xe(Ue))}async function kn(){setInterval(async()=>{Ee("GET","worksheets")},1e3*60*2)}const et="ABCDEFGHIJKLMOPQRSTUVWXYZ".split("");function wn(l){const e=l.slice(0,1).flat();return l.slice(1).map(t=>{const n={};return t.forEach((s,i)=>n[e[i]]=s),n})}async function tt(){return wn((await Ee("GET","worksheets('data')/usedRange")).values)}async function nt(l){const e=await tt(),t=e.findIndex(n=>n.accountName===l);return{index:t,row:e[t]}}async function yn(l,e){const{index:t,row:n}=await nt(l);Object.entries(e).forEach(([r,c])=>{n.hasOwnProperty(r)&&(n[r]=c)});const s=Object.values(n).slice(1),i={values:[s]},a=1;await Ee("PATCH",`worksheets('data')/range(address='${et[a]}${t+2}:${et[a+s.length-1]}${t+2}')`,i)}Me("Berlin,M\xFCnchen,Hamburg");Me("Anna,Max,Peter,Michael,Hans,Frank,Tina,Lea,Hannah,Rudolf");Me("Wick,Johnson,Cooper,Gandalf,Mask,Ford");async function $n(l=null){const e=(await tt()).filter(t=>t.optIn);if(l){const t=e.findIndex(n=>n.accountName===l.accountName);t>=0&&(e[t]=l)}return e.map((t,n)=>{const s=[{type:"name",value:t.name}].concat(t.hobbies.split(/[\,\.;]/g).filter(a=>a.trim().length>0).map(a=>({type:"hobby",value:a}))),i=s.map(a=>a.value).concat([t.profilePicture]);return{id:n,accountName:t.accountName,profilePicture:t.profilePicture,name:t.name,characteristics:s,values:i}})}function lt(l,{delay:e=0}){return{delay:Math.random()*150,duration:200+Math.random()*50,css:(t,n)=>`
      transform:  translate(${-(1-t)*(-l.parentElement.offsetWidth/2+l.offsetLeft+l.offsetWidth/2)}px,${-(1-t)*(l.offsetTop+2*l.offsetHeight+l.parentElement.offsetTop)}px) rotateZ(${(1-t)*90}deg);
    `,easing:qt}}const _e=Ie(0),st={numOfPairs:12,onlyNames:!1,randomCardBacks:!1},Cn={accountName:"lorem",optIn:!1,name:"ipsum",profilePicture:"http://placekitten.com/g/200/200",hobbies:""},it="x-memory.settings",ge=Ie(st);var _t;ge.set(be(be({},st),JSON.parse((_t=localStorage.getItem(it))!=null?_t:"{}")));const he=Ie(Cn);ge.subscribe(l=>{localStorage.setItem(it,JSON.stringify(l))});function An(l){let e,t,n,s,i,a,r,c,o,d,f,_;return{c(){e=h("label"),t=h("span"),n=h("input"),s=S(),i=h("div"),a=S(),r=h("div"),c=S(),o=h("span"),d=G(l[1]),u(n,"id",l[2]),u(n,"type","checkbox"),u(n,"class","hidden svelte-19cvki3"),u(i,"class","w-10 h-6 rounded-full shadow-inner bg-red-400 transition svelte-19cvki3"),K(i,"bg-green-500",l[0]),u(r,"class","absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow bg-dark-200 transition svelte-19cvki3"),K(r,"checked",l[0]),u(t,"class","relative svelte-19cvki3"),u(o,"class","text-sm svelte-19cvki3"),u(e,"for",l[2]),u(e,"class","inline-flex items-center space-x-4 cursor-pointer text-coolGray-100 svelte-19cvki3")},m(g,b){P(g,e,b),m(e,t),m(t,n),n.checked=l[0],m(t,s),m(t,i),m(t,a),m(t,r),m(e,c),m(e,o),m(o,d),f||(_=Z(n,"change",l[3]),f=!0)},p(g,[b]){b&1&&(n.checked=g[0]),b&1&&K(i,"bg-green-500",g[0]),b&1&&K(r,"checked",g[0]),b&2&&ie(d,g[1])},i:H,o:H,d(g){g&&M(e),f=!1,_()}}}let Pn=0;function In(l,e,t){let{checked:n}=e,{label:s}=e,i="checkbox_input_"+Pn++;function a(){n=this.checked,t(0,n)}return l.$$set=r=>{"checked"in r&&t(0,n=r.checked),"label"in r&&t(1,s=r.label)},[n,s,i,a]}class je extends X{constructor(e){super();x(this,e,In,An,ee,{checked:0,label:1})}}function Mn(l){let e,t,n,s,i,a,r;return{c(){e=h("label"),t=h("span"),n=G(l[1]),s=S(),i=h("input"),u(t,"class","text-sm svelte-1owp41l"),u(i,"id",l[4]),u(i,"type","range"),u(i,"min",l[2]),u(i,"max",l[3]),u(i,"class","range my-10 svelte-1owp41l"),u(e,"for",l[4]),u(e,"class","relative svelte-1owp41l")},m(c,o){P(c,e,o),m(e,t),m(t,n),m(e,s),m(e,i),pe(i,l[0]),a||(r=[Z(i,"change",l[5]),Z(i,"input",l[5])],a=!0)},p(c,[o]){o&2&&ie(n,c[1]),o&4&&u(i,"min",c[2]),o&8&&u(i,"max",c[3]),o&1&&pe(i,c[0])},i:H,o:H,d(c){c&&M(e),a=!1,Pe(r)}}}let On=0;function Sn(l,e,t){let{label:n=""}=e,{min:s=3}=e,{max:i=100}=e,{value:a=0}=e,r="range_input_"+On++;function c(){a=Dt(this.value),t(0,a)}return l.$$set=o=>{"label"in o&&t(1,n=o.label),"min"in o&&t(2,s=o.min),"max"in o&&t(3,i=o.max),"value"in o&&t(0,a=o.value)},[a,n,s,i,r,c]}class Nn extends X{constructor(e){super();x(this,e,Sn,Mn,ee,{label:1,min:2,max:3,value:0})}}function Rn(l){let e,t,n;return{c(){e=h("input"),u(e,"type","text"),u(e,"id",l[3]),u(e,"spellcheck","false"),u(e,"autocomplete","new-password"),u(e,"class","input svelte-hkroje")},m(s,i){P(s,e,i),pe(e,l[0]),t||(n=Z(e,"input",l[5]),t=!0)},p(s,i){i&1&&e.value!==s[0]&&pe(e,s[0])},d(s){s&&M(e),t=!1,n()}}}function En(l){let e,t,n;return{c(){e=h("textarea"),u(e,"id",l[3]),u(e,"class","input svelte-hkroje")},m(s,i){P(s,e,i),pe(e,l[0]),t||(n=Z(e,"input",l[4]),t=!0)},p(s,i){i&1&&pe(e,s[0])},d(s){s&&M(e),t=!1,n()}}}function jn(l){let e,t,n,s;function i(c,o){return c[2]?En:Rn}let a=i(l),r=a(l);return{c(){e=h("label"),t=h("span"),n=G(l[1]),s=S(),r.c(),u(t,"class","text-sm svelte-hkroje"),u(e,"for",l[3]),u(e,"class","relative svelte-hkroje")},m(c,o){P(c,e,o),m(e,t),m(t,n),m(e,s),r.m(e,null)},p(c,[o]){o&2&&ie(n,c[1]),a===(a=i(c))&&r?r.p(c,o):(r.d(1),r=a(c),r&&(r.c(),r.m(e,null)))},i:H,o:H,d(c){c&&M(e),r.d()}}}let Tn=0;function Bn(l,e,t){let{label:n=""}=e,{value:s=""}=e,{textarea:i=!1}=e,a="input_"+Tn++;function r(){s=this.value,t(0,s)}function c(){s=this.value,t(0,s)}return l.$$set=o=>{"label"in o&&t(1,n=o.label),"value"in o&&t(0,s=o.value),"textarea"in o&&t(2,i=o.textarea)},[s,n,i,a,r,c]}class Te extends X{constructor(e){super();x(this,e,Bn,jn,ee,{label:1,value:0,textarea:2})}}function at(l){let e,t,n,s,i,a,r,c,o,d;return{c(){e=h("div"),n=S(),s=h("div"),i=ke("svg"),a=ke("path"),u(e,"class","fixed z-20 inset-0 bg-light-300/15 backdrop-filter backdrop-blur-sm backdrop-grayscale svelte-1eup0q6"),u(a,"d",`M18 2.0845\r
          a 15.9155 15.9155 0 0 1 0 31.831\r
          a 15.9155 15.9155 0 0 1 0 -31.831`),u(a,"fill","none"),u(a,"stroke","#fa965a"),u(a,"stroke-width","3"),u(a,"stroke-linecap","round"),u(a,"stroke-dasharray",r=l[2]+", 100"),u(a,"transform",c=`scale(${l[1]?-1:1} 1)`),u(a,"transform-origin","center"),u(a,"class","svelte-1eup0q6"),u(i,"viewBox","0 0 36 36"),u(i,"width","100"),u(i,"height","100"),u(s,"class","absolute self-center top-1/2 -m-50px z-20 svelte-1eup0q6")},m(f,_){P(f,e,_),P(f,n,_),P(f,s,_),m(s,i),m(i,a),d=!0},p(f,_){(!d||_&4&&r!==(r=f[2]+", 100"))&&u(a,"stroke-dasharray",r),(!d||_&2&&c!==(c=`scale(${f[1]?-1:1} 1)`))&&u(a,"transform",c)},i(f){d||(Q(()=>{t||(t=j(e,we,{duration:50},!0)),t.run(1)}),Q(()=>{o||(o=j(s,de,{duration:30},!0)),o.run(1)}),d=!0)},o(f){t||(t=j(e,we,{duration:50},!1)),t.run(0),o||(o=j(s,de,{duration:30},!1)),o.run(0),d=!1},d(f){f&&M(e),f&&t&&t.end(),f&&M(n),f&&M(s),f&&o&&o.end()}}}function Ln(l){let e,t,n=l[0]&&at(l);return{c(){n&&n.c(),e=Ce()},m(s,i){n&&n.m(s,i),P(s,e,i),t=!0},p(s,[i]){s[0]?n?(n.p(s,i),i&1&&I(n,1)):(n=at(s),n.c(),I(n,1),n.m(e.parentNode,e)):n&&(ue(),O(n,1,1,()=>{n=null}),fe())},i(s){t||(I(n),t=!0)},o(s){O(n),t=!1},d(s){n&&n.d(s),s&&M(e)}}}function qn(l,e,t){let n,s=Kt(0,{duration:1200,easing:Ft});ye(l,s,r=>t(2,n=r));let i=!0;setInterval(()=>{n<=0?(ne(s,n=100,n),t(1,i=!i)):n>=100&&(ne(s,n=0,n),t(1,i=!i))},300);let{open:a=!1}=e;return l.$$set=r=>{"open"in r&&t(0,a=r.open)},[a,i,n,s]}class Dn extends X{constructor(e){super();x(this,e,qn,Ln,ee,{open:0})}}function rt(l,e,t){const n=l.slice();return n[42]=e[t],n[44]=t,n}function ot(l,e,t){const n=l.slice();return n[45]=e[t],n}function ct(l,e,t){const n=l.slice();return n[48]=e[t],n[44]=t,n}function ut(l,e){let t,n,s,i;function a(){return e[17](e[48],e[44])}return n=new Oe({props:{card:e[48]}}),n.$on("flipped",a),{key:l,first:null,c(){t=h("span"),T(n.$$.fragment),u(t,"class",""),this.first=t},m(r,c){P(r,t,c),B(n,t,null),i=!0},p(r,c){e=r;const o={};c[0]&2&&(o.card=e[48]),n.$set(o)},i(r){i||(I(n.$$.fragment,r),Q(()=>{s||(s=j(t,lt,{},!0)),s.run(1)}),i=!0)},o(r){O(n.$$.fragment,r),s||(s=j(t,lt,{},!1)),s.run(0),i=!1},d(r){r&&M(t),L(n),r&&s&&s.end()}}}function ft(l){let e,t;return{c(){e=h("img"),De(e.src,t=l[45])||u(e,"src",t),u(e,"alt","")},m(n,s){P(n,e,s)},p(n,s){s[0]&8&&!De(e.src,t=n[45])&&u(e,"src",t)},d(n){n&&M(e)}}}function Kn(l){let e,t,n,s,i,a,r,c,o,d,f,_,g;function b(y){l[18](y)}let $={label:"Nur Namen"};l[9].onlyNames!==void 0&&($.checked=l[9].onlyNames),n=new je({props:$}),ae.push(()=>re(n,"checked",b));function C(y){l[19](y)}let A={label:"Zuf\xE4llige Kartenr\xFCcken"};l[9].randomCardBacks!==void 0&&(A.checked=l[9].randomCardBacks),r=new je({props:A}),ae.push(()=>re(r,"checked",C));function D(y){l[20](y)}let N={min:3,max:50,label:`${l[9].numOfPairs} Kartenpaare`};return l[9].numOfPairs!==void 0&&(N.value=l[9].numOfPairs),f=new Nn({props:N}),ae.push(()=>re(f,"value",D)),{c(){e=h("div"),t=h("span"),T(n.$$.fragment),i=S(),a=h("span"),T(r.$$.fragment),o=S(),d=h("span"),T(f.$$.fragment),u(t,"class","svelte-1ned7l1"),u(a,"class","svelte-1ned7l1"),u(d,"class","svelte-1ned7l1"),u(e,"class","flex flex-col space-y-8 svelte-1ned7l1")},m(y,E){P(y,e,E),m(e,t),B(n,t,null),m(e,i),m(e,a),B(r,a,null),m(e,o),m(e,d),B(f,d,null),g=!0},p(y,E){const Y={};!s&&E[0]&512&&(s=!0,Y.checked=y[9].onlyNames,oe(()=>s=!1)),n.$set(Y);const z={};!c&&E[0]&512&&(c=!0,z.checked=y[9].randomCardBacks,oe(()=>c=!1)),r.$set(z);const R={};E[0]&512&&(R.label=`${y[9].numOfPairs} Kartenpaare`),!_&&E[0]&512&&(_=!0,R.value=y[9].numOfPairs,oe(()=>_=!1)),f.$set(R)},i(y){g||(I(n.$$.fragment,y),I(r.$$.fragment,y),I(f.$$.fragment,y),g=!0)},o(y){O(n.$$.fragment,y),O(r.$$.fragment,y),O(f.$$.fragment,y),g=!1},d(y){y&&M(e),L(n),L(r),L(f)}}}function dt(l){let e,t,n,s,i,a;function r(o){l[22](o)}let c={label:"Mitmachen"};return l[7].optIn!==void 0&&(c.checked=l[7].optIn),t=new je({props:c}),ae.push(()=>re(t,"checked",r)),{c(){e=h("span"),T(t.$$.fragment),s=S(),i=h("div"),i.textContent="Ohne deinen Opt-in tauchst du im Spiel nicht auf.",u(i,"class","mt-1 text-xs svelte-1ned7l1"),u(e,"class","svelte-1ned7l1")},m(o,d){P(o,e,d),B(t,e,null),m(e,s),m(e,i),a=!0},p(o,d){const f={};!n&&d[0]&128&&(n=!0,f.checked=o[7].optIn,oe(()=>n=!1)),t.$set(f)},i(o){a||(I(t.$$.fragment,o),a=!0)},o(o){O(t.$$.fragment,o),a=!1},d(o){o&&M(e),L(t)}}}function pt(l){let e,t,n,s,i,a,r,c,o,d,f,_,g,b,$,C,A,D,N,y;n=new Oe({props:{card:{type:"image",flipped:!0,value:l[7].profilePicture}}}),i=new Oe({props:{card:{type:"text",flipped:!0,value:l[7].name}}});function E(w){l[23](w)}let Y={label:"Bild URL (default: Website)"};l[7].profilePicture!==void 0&&(Y.value=l[7].profilePicture),o=new Te({props:Y}),ae.push(()=>re(o,"value",E));function z(w){l[24](w)}let R={label:"Name"};l[7].name!==void 0&&(R.value=l[7].name),g=new Te({props:R}),ae.push(()=>re(g,"value",z));function p(w){l[25](w)}let v={label:"Hobbies, Regien, Lieblingsessen, etc.",textarea:!0};return l[7].hobbies!==void 0&&(v.value=l[7].hobbies),A=new Te({props:v}),ae.push(()=>re(A,"value",p)),{c(){e=h("span"),t=h("div"),T(n.$$.fragment),s=S(),T(i.$$.fragment),r=S(),c=h("div"),T(o.$$.fragment),f=S(),_=h("div"),T(g.$$.fragment),$=S(),C=h("div"),T(A.$$.fragment),u(t,"class","self-center flex justify-around w-full svelte-1ned7l1"),u(c,"class","svelte-1ned7l1"),u(_,"class","svelte-1ned7l1"),u(C,"class","svelte-1ned7l1"),u(e,"class","space-y-6 svelte-1ned7l1")},m(w,J){P(w,e,J),m(e,t),B(n,t,null),m(t,s),B(i,t,null),m(e,r),m(e,c),B(o,c,null),m(e,f),m(e,_),B(g,_,null),m(e,$),m(e,C),B(A,C,null),y=!0},p(w,J){const V={};J[0]&128&&(V.card={type:"image",flipped:!0,value:w[7].profilePicture}),n.$set(V);const te={};J[0]&128&&(te.card={type:"text",flipped:!0,value:w[7].name}),i.$set(te);const le={};!d&&J[0]&128&&(d=!0,le.value=w[7].profilePicture,oe(()=>d=!1)),o.$set(le);const q={};!b&&J[0]&128&&(b=!0,q.value=w[7].name,oe(()=>b=!1)),g.$set(q);const se={};!D&&J[0]&128&&(D=!0,se.value=w[7].hobbies,oe(()=>D=!1)),A.$set(se)},i(w){y||(I(n.$$.fragment,w),I(i.$$.fragment,w),Q(()=>{a||(a=j(t,de,{},!0)),a.run(1)}),I(o.$$.fragment,w),I(g.$$.fragment,w),I(A.$$.fragment,w),Q(()=>{N||(N=j(e,Fe,{},!0)),N.run(1)}),y=!0)},o(w){O(n.$$.fragment,w),O(i.$$.fragment,w),a||(a=j(t,de,{},!1)),a.run(0),O(o.$$.fragment,w),O(g.$$.fragment,w),O(A.$$.fragment,w),N||(N=j(e,Fe,{},!1)),N.run(0),y=!1},d(w){w&&M(e),L(n),L(i),w&&a&&a.end(),L(o),L(g),L(A),w&&N&&N.end()}}}function Fn(l){let e,t=l[7].accountName.includes("@"),n,s,i,a,r,c,o=t&&dt(l),d=l[7].optIn&&pt(l);return{c(){e=h("div"),o&&o.c(),n=S(),d&&d.c(),s=S(),i=h("button"),i.textContent="Abmelden",u(i,"class","btn bg-cool-gray-700 hover:bg-cool-gray-500 svelte-1ned7l1"),u(e,"class","flex flex-col space-y-6 svelte-1ned7l1")},m(f,_){P(f,e,_),o&&o.m(e,null),m(e,n),d&&d.m(e,null),m(e,s),m(e,i),a=!0,r||(c=Z(i,"click",l[26]),r=!0)},p(f,_){_[0]&128&&(t=f[7].accountName.includes("@")),t?o?(o.p(f,_),_[0]&128&&I(o,1)):(o=dt(f),o.c(),I(o,1),o.m(e,n)):o&&(ue(),O(o,1,1,()=>{o=null}),fe()),f[7].optIn?d?(d.p(f,_),_[0]&128&&I(d,1)):(d=pt(f),d.c(),I(d,1),d.m(e,s)):d&&(ue(),O(d,1,1,()=>{d=null}),fe())},i(f){a||(I(o),I(d),a=!0)},o(f){O(o),O(d),a=!1},d(f){f&&M(e),o&&o.d(),d&&d.d(),r=!1,c()}}}function mt(l){let e,t=l[42]+"",n,s;return{c(){e=h("span"),n=G(t),u(e,"class","inline-block svelte-1ned7l1")},m(i,a){P(i,e,a),m(e,n)},p(i,a){a[0]&64&&t!==(t=i[42]+"")&&ie(n,t)},i(i){s||Q(()=>{s=Wt(e,Ht,{y:-10,duration:500,delay:200+l[44]*100}),s.start()})},o:H,d(i){i&&M(e)}}}function zn(l){let e,t,n,s,i,a,r,c,o,d=String(l[6]).split(""),f=[];for(let _=0;_<d.length;_+=1)f[_]=mt(rt(l,d,_));return{c(){e=h("div"),t=G("Du hast alle Karten in "),n=G(l[4]),s=G(` Z\xFCgen aufgedeckt!\r
    `),i=h("div"),a=G("Erinnerungsquote: "),r=h("div");for(let _=0;_<f.length;_+=1)f[_].c();c=S(),o=h("span"),o.textContent="%",u(o,"class","text-xl pt-0.2 pl-0.3 svelte-1ned7l1"),u(r,"class","text-5xl mt-2 align-top justify-center flex svelte-1ned7l1"),u(i,"class","my-8 svelte-1ned7l1"),u(e,"class","text-center svelte-1ned7l1")},m(_,g){P(_,e,g),m(e,t),m(e,n),m(e,s),m(e,i),m(i,a),m(i,r);for(let b=0;b<f.length;b+=1)f[b].m(r,null);m(r,c),m(r,o)},p(_,g){if(g[0]&16&&ie(n,_[4]),g[0]&64){d=String(_[6]).split("");let b;for(b=0;b<d.length;b+=1){const $=rt(_,d,b);f[b]?(f[b].p($,g),I(f[b],1)):(f[b]=mt($),f[b].c(),I(f[b],1),f[b].m(r,c))}for(;b<f.length;b+=1)f[b].d(1);f.length=d.length}},i(_){for(let g=0;g<d.length;g+=1)I(f[g])},o:H,d(_){_&&M(e),Ke(f,_)}}}function Jn(l){let e;return{c(){e=h("div"),e.innerHTML=`Die Karten passen, aber ein anderes P\xE4rchen ist gemeint, sonst ist die Runde
    nicht mehr l\xF6sbar.
    <br/>  <br/>
    Der Zug wurde nicht gez\xE4hlt \u{1F648}`,u(e,"class","text-center svelte-1ned7l1")},m(t,n){P(t,e,n)},d(t){t&&M(e)}}}function Wn(l){let e,t,n,s,i,a=[],r=new Map,c,o,d,f,_,g,b,$,C,A,D,N,y;t=new cn({}),t.$on("shuffle",l[12]),t.$on("menu-settings",l[15]),t.$on("menu-data",l[16]);let E=l[1];const Y=p=>p[44];for(let p=0;p<E.length;p+=1){let v=ct(l,E,p),w=Y(v);r.set(w,a[p]=ut(w,v))}let z=l[3],R=[];for(let p=0;p<z.length;p+=1)R[p]=ft(ot(l,z,p));return f=new $e({props:{open:l[8]==1,title:"Optionen",$$slots:{default:[Kn]},$$scope:{ctx:l}}}),f.$on("close",l[21]),g=new $e({props:{open:l[8]==2,title:"Meine Daten",$$slots:{default:[Fn]},$$scope:{ctx:l}}}),g.$on("close",l[27]),$=new $e({props:{open:l[8]==0&&l[2]>1&&l[2]==l[1].length,title:"\u{1F308} Gl\xFCckwunsch! \u{1F308}",$$slots:{default:[zn]},$$scope:{ctx:l}}}),$.$on("close",l[28]),A=new $e({props:{open:l[8]==0&&l[5],title:"Richtig, aber...",$$slots:{default:[Jn]},$$scope:{ctx:l}}}),A.$on("close",l[29]),N=new Dn({props:{open:!l[0]}}),{c(){e=h("main"),T(t.$$.fragment),n=S(),s=h("div"),i=h("div");for(let p=0;p<a.length;p+=1)a[p].c();c=S(),o=h("div");for(let p=0;p<R.length;p+=1)R[p].c();d=S(),T(f.$$.fragment),_=S(),T(g.$$.fragment),b=S(),T($.$$.fragment),C=S(),T(A.$$.fragment),D=S(),T(N.$$.fragment),u(i,"class","relative max-w-xl h-full p-5 flex flex-wrap justify-between svelte-1ned7l1"),u(s,"class","relative flex flex-grow justify-center items-center mt-25 mb-5 text-gray-800 svelte-1ned7l1"),u(e,"class","container my-2 mx-auto flex flex-col svelte-1ned7l1"),u(o,"class","hidden svelte-1ned7l1")},m(p,v){P(p,e,v),B(t,e,null),m(e,n),m(e,s),m(s,i);for(let w=0;w<a.length;w+=1)a[w].m(i,null);P(p,c,v),P(p,o,v);for(let w=0;w<R.length;w+=1)R[w].m(o,null);P(p,d,v),B(f,p,v),P(p,_,v),B(g,p,v),P(p,b,v),B($,p,v),P(p,C,v),B(A,p,v),P(p,D,v),B(N,p,v),y=!0},p(p,v){if(v[0]&1026&&(E=p[1],ue(),a=zt(a,v,Y,1,p,E,r,i,Gt,ut,null,ct),fe()),v[0]&8){z=p[3];let q;for(q=0;q<z.length;q+=1){const se=ot(p,z,q);R[q]?R[q].p(se,v):(R[q]=ft(se),R[q].c(),R[q].m(o,null))}for(;q<R.length;q+=1)R[q].d(1);R.length=z.length}const w={};v[0]&256&&(w.open=p[8]==1),v[0]&512|v[1]&524288&&(w.$$scope={dirty:v,ctx:p}),f.$set(w);const J={};v[0]&256&&(J.open=p[8]==2),v[0]&128|v[1]&524288&&(J.$$scope={dirty:v,ctx:p}),g.$set(J);const V={};v[0]&262&&(V.open=p[8]==0&&p[2]>1&&p[2]==p[1].length),v[0]&80|v[1]&524288&&(V.$$scope={dirty:v,ctx:p}),$.$set(V);const te={};v[0]&288&&(te.open=p[8]==0&&p[5]),v[1]&524288&&(te.$$scope={dirty:v,ctx:p}),A.$set(te);const le={};v[0]&1&&(le.open=!p[0]),N.$set(le)},i(p){if(!y){I(t.$$.fragment,p);for(let v=0;v<E.length;v+=1)I(a[v]);I(f.$$.fragment,p),I(g.$$.fragment,p),I($.$$.fragment,p),I(A.$$.fragment,p),I(N.$$.fragment,p),y=!0}},o(p){O(t.$$.fragment,p);for(let v=0;v<a.length;v+=1)O(a[v]);O(f.$$.fragment,p),O(g.$$.fragment,p),O($.$$.fragment,p),O(A.$$.fragment,p),O(N.$$.fragment,p),y=!1},d(p){p&&M(e),L(t);for(let v=0;v<a.length;v+=1)a[v].d();p&&M(c),p&&M(o),Ke(R,p),p&&M(d),L(f,p),p&&M(_),L(g,p),p&&M(b),L($,p),p&&M(C),L(A,p),p&&M(D),L(N,p)}}}function Hn(l,e,t){let n,s,i;ye(l,he,k=>t(7,n=k)),ye(l,_e,k=>t(8,s=k)),ye(l,ge,k=>t(9,i=k));let a=!1,r=[],c=[],o=0,d=[],f=[],_=[],g=0,b=!1,$=new Set,C=0,A=0,D="100";function N(){E(d,U.None,!0),d=[]}function y(k,W){k.flipped=!0,t(1,c[W]=k,c),d=[...d,k]}function E(k,W,ce=!1){k.forEach(ve=>{ve.status=W,ce&&(ve.flipped=!1)}),t(1,c)}function Y(){E(d,U.Correct);const k=[...d];d=[],setTimeout(()=>{E(k,U.None)},500)}function z(k,W){if(d.length===2)if(!k.flipped)N();else{N();return}if(!k.flipped&&(y(k,W),d.length===2)){const{isCorrect:ce,isSolvable:ve}=pn(f,c,d,r);ce&&!ve?(setTimeout(()=>{t(5,b=!0)},500),E(d,U.Correct)):(t(4,g++,g),ce&&ve?(Y(),t(2,o+=2)):(E(d,U.Incorrect),t(14,A+=1),$.has(k.id)&&t(13,C++,C)))}$.add(k.id)}async function R(){return d=[],new Promise(k=>{setTimeout(()=>k(!0),300),c.forEach((W,ce)=>{setTimeout(()=>{W.flipped=!1,t(1,c[ce]=W,c)},Math.random()*300)})})}async function p(k){t(4,g=0),t(2,o=0),t(14,A=0),t(13,C=0),$=new Set,await R(),t(1,c=[]),setTimeout(()=>{t(1,{legalPairs:r,cards:c}=dn(f,i.numOfPairs,{isCardBackRandom:i.randomCardBacks,onlyNames:i.onlyNames}),c)},800)}async function v(){const k=await xe(),{row:W}=await nt(k);ne(he,n=W,n),await w(),V()}async function w(k=null){f=await $n(k),t(3,_=f.map(W=>W.profilePicture))}Jt(async()=>{setInterval(async()=>{a||await xe()&&(await v(),t(0,a=!0),n.optIn||ne(_e,s=2,s))},1e3)});async function J(){vn()&&(await yn(n.accountName,n),await w(n),await v())}const V=Xt(p,800),te=()=>ne(_e,s=1,s),le=()=>ne(_e,s=2,s),q=(k,W)=>z(k,W);function se(k){l.$$.not_equal(i.onlyNames,k)&&(i.onlyNames=k,ge.set(i))}function gt(k){l.$$.not_equal(i.randomCardBacks,k)&&(i.randomCardBacks=k,ge.set(i))}function ht(k){l.$$.not_equal(i.numOfPairs,k)&&(i.numOfPairs=k,ge.set(i))}const vt=()=>ne(_e,s=0,s);function bt(k){l.$$.not_equal(n.optIn,k)&&(n.optIn=k,he.set(n))}function kt(k){l.$$.not_equal(n.profilePicture,k)&&(n.profilePicture=k,he.set(n))}function wt(k){l.$$.not_equal(n.name,k)&&(n.name=k,he.set(n))}function yt(k){l.$$.not_equal(n.hobbies,k)&&(n.hobbies=k,he.set(n))}const $t=()=>{confirm("M\xF6chtest du dich wirklich ausloggen?")&&hn()},Ct=()=>(ne(_e,s=0,s),J()),At=()=>{t(2,o=0),V()},Pt=()=>{t(5,b=!1)};return l.$$.update=()=>{l.$$.dirty[0]&24576&&t(6,D=(100-100*C/Math.max(1,A)).toFixed(0))},[a,c,o,_,g,b,D,n,s,i,z,J,V,C,A,te,le,q,se,gt,ht,vt,bt,kt,wt,yt,$t,Ct,At,Pt]}class Gn extends X{constructor(e){super();x(this,e,Hn,Wn,ee,{},null,[-1,-1])}}new Gn({target:document.getElementById("app")});
