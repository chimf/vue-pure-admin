import{af as G,fW as O,fX as W,a9 as X,aw as $,p as o,dd as k,fY as c,fP as Y,fD as q,fL as J,ac as x,fU as T,fH as K,fZ as Q,U as tt,ae as et,n as nt,a0 as ot,f as w,k as _,g as i}from"./index-DDFqk3Tf.js";import{e as y}from"./mitt-E5P-NQ8u.js";import{u as at}from"./user-DNtD0Fqa.js";import{u as st}from"./app-ga-m7NnY.js";import{u as rt}from"./epTheme-B4Z6747u.js";const Ct={width:24,height:24,body:'<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16ZM11 7h2v2h-2V7Zm0 4h2v6h-2v-6Z"/>'},ct="The current routing configuration is incorrect, please check the configuration";function it(){var z,M;const n=st(),a=G().options.routes,{isFullscreen:p,toggle:l}=O(),{wholeMenus:s}=W(X()),m=(M=(z=$())==null?void 0:z.TooltipEffect)!=null?M:"light",u=o(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),v=o(()=>{var t,e;return k((t=c())==null?void 0:t.avatar)?at:(e=c())==null?void 0:e.avatar}),h=o(()=>{var t,e,r;return k((t=c())==null?void 0:t.nickname)?(e=c())==null?void 0:e.username:(r=c())==null?void 0:r.nickname}),d=o(()=>(t,e)=>({background:t===e?rt().epThemeColor:"",color:t===e?"#f4f4f5":"#000"})),g=o(()=>(t,e)=>t===e?"":"dark:hover:!text-primary"),C=o(()=>h.value?{marginRight:"10px"}:""),H=o(()=>!n.getSidebarStatus),B=o(()=>n.getDevice),{$storage:f,$config:b}=Y(),A=o(()=>{var t;return(t=f==null?void 0:f.layout)==null?void 0:t.layout}),I=o(()=>b.Title);function L(t){const e=$().Title;e?document.title=`${x(t.title)} | ${e}`:document.title=x(t.title)}function R(){c().logOut()}function E(){var t;T.push((t=K())==null?void 0:t.path)}function P(){y.emit("openPanel")}function D(){T.push({name:"AccountSettings"})}function Z(){n.toggleSideBar()}function F(t){t==null||t.handleResize()}function U(t){var S;if(!t.children)return console.error(ct);const e=/^http(s?):\/\//,r=(S=t.children[0])==null?void 0:S.path;return e.test(r)?t.path+"/"+r:r}function V(t){s.value.length===0||j(t)||y.emit("changLayoutRoute",t)}function j(t){return Q.includes(t)}function N(){return new URL("/vue-pure-admin/logo.svg",import.meta.url).href}return{title:I,device:B,layout:A,logout:R,routers:a,$storage:f,isFullscreen:p,Fullscreen:q,ExitFullscreen:J,toggle:l,backTopMenu:E,onPanel:P,getDivStyle:u,changeTitle:L,toggleSideBar:Z,menuSelect:V,handleResize:F,resolvePath:U,getLogo:N,isCollapse:H,pureApp:n,username:h,userAvatar:v,avatarsStyle:C,tooltipEffect:m,toAccountSettings:D,getDropdownItemStyle:d,getDropdownItemClass:g}}function Ht(n){const{$storage:a,changeTitle:p,handleResize:l}=it(),{locale:s,t:m}=tt(),u=et();function v(){a.locale={locale:"zh"},s.value="zh",n&&l(n.value)}function h(){a.locale={locale:"en"},s.value="en",n&&l(n.value)}return nt(()=>s.value,()=>{p(u.meta)}),ot(()=>{var d,g;s.value=(g=(d=a.locale)==null?void 0:d.locale)!=null?g:"zh"}),{t:m,route:u,locale:s,translationCh:v,translationEn:h}}const lt={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},ut=i("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),ht=[ut];function dt(n,a){return w(),_("svg",lt,[...ht])}const Bt={render:dt},gt={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},ft=i("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),pt=i("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"},null,-1),mt=[ft,pt];function vt(n,a){return w(),_("svg",gt,[...mt])}const bt={render:vt},wt={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},_t=i("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),zt=i("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"},null,-1),Mt=[_t,zt];function St(n,a){return w(),_("svg",wt,[...Mt])}const At={render:St};export{Ht as a,bt as b,At as c,Ct as d,Bt as g,it as u};