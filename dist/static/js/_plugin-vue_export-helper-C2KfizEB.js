var _e=Object.defineProperty,Ce=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var re=(e,o,t)=>o in e?_e(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,p=(e,o)=>{for(var t in o||(o={}))Se.call(o,t)&&re(e,t,o[t]);if(ne)for(var t of ne(o))Pe.call(o,t)&&re(e,t,o[t]);return e},$=(e,o)=>Ce(e,Te(o));var G=(e,o,t)=>new Promise((a,n)=>{var s=l=>{try{r(t.next(l))}catch(f){n(f)}},u=l=>{try{r(t.throw(l))}catch(f){n(f)}},r=l=>l.done?a(l.value):Promise.resolve(l.value).then(s,u);r((t=t.apply(e,o)).next())});import{aK as P,a as _,m as q,U as $e,u as c,aL as ke,aM as ue,aN as pe,aO as Oe,aP as Ve,aF as de,aQ as Re,aR as v,d as y,p as T,aS as Ie,aT as De,aU as Ae,aV as fe,aW as je,n as M,z as Ee,aX as be,X as S,aY as j,aZ as H,f as E,k as I,s as U,v as me,a8 as V,a_ as Be,a$ as Le,i as Y,w as k,F as Z,h as Me,t as Ne,j as L,b0 as Fe,b1 as xe,b2 as D,b as O,b3 as He,r as N,b4 as F,T as ze,b5 as Ge,aJ as x,b6 as Ke,b7 as Ue,b8 as We,b9 as qe,ba as Ye,bb as Ze,aH as Je,bc as Xe,bd as Qe,be as et,bf as tt,bg as ot,bh as st,bi as at,bj as nt,bk as rt,bl as lt,bm as ct,bn as it,bo as ut,bp as pt,bq as dt,br as ft,bs as Et,bt,bu as mt,bv as vt,bw as yt,bx as wt,by as gt,bz as ht,bA as _t,bB as Ct,bC as Tt,bD as St,bE as Pt,bF as $t,bG as kt,bH as Ot,bI as Vt,bJ as Rt,bK as It,bL as Dt,bM as At,bN as jt,bO as Bt,bP as Lt,bQ as Mt,bR as Nt,bS as Ft,bT as xt,bU as Ht,bV as zt,bW as Gt,bX as Kt,bY as Ut,bZ as Wt,b_ as qt,b$ as Yt,c0 as Zt,c1 as Jt,c2 as Xt,c3 as Qt,c4 as eo,c5 as to,c6 as oo,c7 as so,c8 as ao,c9 as no,ca as ro,cb as lo,cc as co,cd as io,ce as uo,cf as po,cg as fo,ch as Eo,ci as bo,cj as mo,ck as vo,cl as yo,cm as wo,cn as go,co as ho,cp as _o,cq as Co,cr as To,cs as So,ct as Po,cu as $o,cv as ko,cw as Oo,cx as Vo,cy as Ro,cz as Io,cA as Do,cB as Ao,cC as jo,cD as Bo,cE as Lo,cF as Mo,cG as No,cH as Fo,cI as xo,aa as Ho,cJ as zo,cK as Go,cL as Ko,cM as Uo,cN as Wo}from"./index-OeW7EK_m.js";const le=Symbol("INSTALLED_KEY");P({});const qo=e=>{if(!ue)return;if(!e)return e;const o=pe(e);return o||(de(e)?o:e)},Yo=({middleware:e,placement:o,strategy:t})=>{const a=_(),n=_(),s=_(),u=_(),r=_({}),l={x:s,y:u,placement:o,strategy:t,middlewareData:r},f=()=>G(void 0,null,function*(){if(!ue)return;const w=qo(a),m=pe(n);if(!w||!m)return;const R=yield Oe(w,m,{placement:c(o),strategy:c(t),middleware:c(e)});Ve(l).forEach(C=>{l[C].value=R[C]})});return q(()=>{$e(()=>{f()})}),$(p({},l),{update:f,referenceRef:a,contentRef:n})},Zo=({arrowRef:e,padding:o})=>({name:"arrow",options:{element:e,padding:o},fn(t){const a=c(e);return a?ke({element:a,padding:o}).fn(t):{}}}),Jo="2.6.3",Xo=(e=[])=>({version:Jo,install:(t,a)=>{t[le]||(t[le]=!0,e.forEach(n=>t.use(n)),a&&Re(a,t,!0))}}),ve=P({nowrap:Boolean});var ye=(e=>(e.top="top",e.bottom="bottom",e.left="left",e.right="right",e))(ye||{});const Qo=Object.values(ye),J=P({width:{type:Number,default:10},height:{type:Number,default:10},style:{type:v(Object),default:null}}),es=P({side:{type:v(String),values:Qo,required:!0}}),ts=["absolute","fixed"],os=["top-start","top-end","top","bottom-start","bottom-end","bottom","left-start","left-end","left","right-start","right-end","right"],X=P({ariaLabel:String,arrowPadding:{type:v(Number),default:5},effect:{type:String,default:""},contentClass:String,placement:{type:v(String),values:os,default:"bottom"},reference:{type:v(Object),default:null},offset:{type:Number,default:8},strategy:{type:v(String),values:ts,default:"absolute"},showArrow:{type:Boolean,default:!1}}),Q=P({delayDuration:{type:Number,default:300},defaultOpen:Boolean,open:{type:Boolean,default:void 0},onOpenChange:{type:v(Function)},"onUpdate:open":{type:v(Function)}}),A={type:v(Function)},ee=P({onBlur:A,onClick:A,onFocus:A,onMouseDown:A,onMouseEnter:A,onMouseLeave:A}),ss=P($(p(p(p(p({},Q),J),ee),X),{alwaysOn:Boolean,fullTransition:Boolean,transitionProps:{type:v(Object),default:null},teleported:Boolean,to:{type:v(String),default:"body"}})),z=Symbol("tooltipV2"),we=Symbol("tooltipV2Content"),K="tooltip_v2.open",as=y({name:"ElTooltipV2Root"}),ns=y($(p({},as),{props:Q,setup(e,{expose:o}){const t=e,a=_(t.defaultOpen),n=_(null),s=T({get:()=>Ie(t.open)?a.value:t.open,set:b=>{var h;a.value=b,(h=t["onUpdate:open"])==null||h.call(t,b)}}),u=T(()=>De(t.delayDuration)&&t.delayDuration>0),{start:r,stop:l}=Ae(()=>{s.value=!0},T(()=>t.delayDuration),{immediate:!1}),f=fe("tooltip-v2"),w=je(),m=()=>{l(),s.value=!0},R=()=>{c(u)?r():m()},C=m,g=()=>{l(),s.value=!1};return M(s,b=>{var h;b&&(document.dispatchEvent(new CustomEvent(K)),C()),(h=t.onOpenChange)==null||h.call(t,b)}),q(()=>{document.addEventListener(K,g)}),Ee(()=>{l(),document.removeEventListener(K,g)}),be(z,{contentId:w,triggerRef:n,ns:f,onClose:g,onDelayOpen:R,onOpen:C}),o({onOpen:C,onClose:g}),(b,h)=>S(b.$slots,"default",{open:c(s)})}}));var rs=j(ns,[["__file","root.vue"]]);const ls=y({name:"ElTooltipV2Arrow"}),cs=y($(p({},ls),{props:p(p({},J),es),setup(e){const o=e,{ns:t}=H(z),{arrowRef:a}=H(we),n=T(()=>{const{style:s,width:u,height:r}=o,l=t.namespace.value;return p({[`--${l}-tooltip-v2-arrow-width`]:`${u}px`,[`--${l}-tooltip-v2-arrow-height`]:`${r}px`,[`--${l}-tooltip-v2-arrow-border-width`]:`${u/2}px`,[`--${l}-tooltip-v2-arrow-cover-width`]:u/2-1},s||{})});return(s,u)=>(E(),I("span",{ref_key:"arrowRef",ref:a,style:U(c(n)),class:me(c(t).e("arrow"))},null,6))}}));var ce=j(cs,[["__file","arrow.vue"]]);const is=P({style:{type:v([String,Object,Array]),default:()=>({})}}),us=y({name:"ElVisuallyHidden"}),ps=y($(p({},us),{props:is,setup(e){const o=e,t=T(()=>[o.style,{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}]);return(a,n)=>(E(),I("span",V(a.$attrs,{style:c(t)}),[S(a.$slots,"default")],16))}}));var ds=j(ps,[["__file","visual-hidden.vue"]]);const fs=["data-side"],Es=y({name:"ElTooltipV2Content"}),bs=y($(p({},Es),{props:p(p({},X),ve),setup(e){const o=e,{triggerRef:t,contentId:a}=H(z),n=_(o.placement),s=_(o.strategy),u=_(null),{referenceRef:r,contentRef:l,middlewareData:f,x:w,y:m,update:R}=Yo({placement:n,strategy:s,middleware:T(()=>{const i=[Be(o.offset)];return o.showArrow&&i.push(Zo({arrowRef:u})),i})}),C=Le().nextZIndex(),g=fe("tooltip-v2"),B=T(()=>n.value.split("-")[0]),b=T(()=>({position:c(s),top:`${c(m)||0}px`,left:`${c(w)||0}px`,zIndex:C})),h=T(()=>{if(!o.showArrow)return{};const{arrow:i}=c(f);return{[`--${g.namespace.value}-tooltip-v2-arrow-x`]:`${i==null?void 0:i.x}px`||"",[`--${g.namespace.value}-tooltip-v2-arrow-y`]:`${i==null?void 0:i.y}px`||""}}),d=T(()=>[g.e("content"),g.is("dark",o.effect==="dark"),g.is(c(s)),o.contentClass]);return M(u,()=>R()),M(()=>o.placement,i=>n.value=i),q(()=>{M(()=>o.reference||t.value,i=>{r.value=i||void 0},{immediate:!0})}),be(we,{arrowRef:u}),(i,ae)=>(E(),I("div",{ref_key:"contentRef",ref:l,style:U(c(b)),"data-tooltip-v2-root":""},[i.nowrap?L("v-if",!0):(E(),I("div",{key:0,"data-side":c(B),class:me(c(d))},[S(i.$slots,"default",{contentStyle:c(b),contentClass:c(d)}),Y(c(ds),{id:c(a),role:"tooltip"},{default:k(()=>[i.ariaLabel?(E(),I(Z,{key:0},[Me(Ne(i.ariaLabel),1)],64)):S(i.$slots,"default",{key:1})]),_:3},8,["id"]),S(i.$slots,"arrow",{style:U(c(h)),side:c(B)})],10,fs))],4))}}));var ie=j(bs,[["__file","content.vue"]]);const ms=P({setRef:{type:v(Function),required:!0},onlyChild:Boolean});var vs=y({props:ms,setup(e,{slots:o}){const t=_(),a=xe(t,n=>{n?e.setRef(n.nextElementSibling):e.setRef(null)});return()=>{var n;const[s]=((n=o.default)==null?void 0:n.call(o))||[],u=e.onlyChild?Fe(s.children):s.children;return Y(Z,{ref:a},[u])}}});const ys=y({name:"ElTooltipV2Trigger"}),ws=y($(p({},ys),{props:p(p({},ve),ee),setup(e){const o=e,{onClose:t,onOpen:a,onDelayOpen:n,triggerRef:s,contentId:u}=H(z);let r=!1;const l=d=>{s.value=d},f=()=>{r=!1},w=D(o.onMouseEnter,n),m=D(o.onMouseLeave,t),R=D(o.onMouseDown,()=>{t(),r=!0,document.addEventListener("mouseup",f,{once:!0})}),C=D(o.onFocus,()=>{r||a()}),g=D(o.onBlur,t),B=D(o.onClick,d=>{d.detail===0&&t()}),b={blur:g,click:B,focus:C,mousedown:R,mouseenter:w,mouseleave:m},h=(d,i,ae)=>{d&&Object.entries(i).forEach(([ge,he])=>{d[ae](ge,he)})};return M(s,(d,i)=>{h(d,b,"addEventListener"),h(i,b,"removeEventListener"),d&&d.setAttribute("aria-describedby",u.value)}),Ee(()=>{h(s.value,b,"removeEventListener"),document.removeEventListener("mouseup",f)}),(d,i)=>d.nowrap?(E(),O(c(vs),{key:0,"set-ref":l,"only-child":""},{default:k(()=>[S(d.$slots,"default")]),_:3})):(E(),I("button",V({key:1,ref_key:"triggerRef",ref:s},d.$attrs),[S(d.$slots,"default")],16))}}));var gs=j(ws,[["__file","trigger.vue"]]);const hs=y({name:"ElTooltipV2"}),_s=y($(p({},hs),{props:ss,setup(e){const t=He(e),a=N(F(t,Object.keys(J))),n=N(F(t,Object.keys(X))),s=N(F(t,Object.keys(Q))),u=N(F(t,Object.keys(ee)));return(r,l)=>(E(),O(rs,x(Ke(s)),{default:k(({open:f})=>[Y(gs,V(u,{nowrap:""}),{default:k(()=>[S(r.$slots,"trigger")]),_:3},16),(E(),O(ze,{to:r.to,disabled:!r.teleported},[r.fullTransition?(E(),O(Ge,x(V({key:0},r.transitionProps)),{default:k(()=>[r.alwaysOn||f?(E(),O(ie,x(V({key:0},n)),{arrow:k(({style:w,side:m})=>[r.showArrow?(E(),O(ce,V({key:0},a,{style:w,side:m}),null,16,["style","side"])):L("v-if",!0)]),default:k(()=>[S(r.$slots,"default")]),_:3},16)):L("v-if",!0)]),_:2},1040)):(E(),I(Z,{key:1},[r.alwaysOn||f?(E(),O(ie,x(V({key:0},n)),{arrow:k(({style:w,side:m})=>[r.showArrow?(E(),O(ce,V({key:0},a,{style:w,side:m}),null,16,["style","side"])):L("v-if",!0)]),default:k(()=>[S(r.$slots,"default")]),_:3},16)):L("v-if",!0)],64))],8,["to","disabled"]))]),_:3},16))}}));var Cs=j(_s,[["__file","tooltip.vue"]]);const Ts=Ue(Cs);var Ss=[We,qe,Ye,Ze,Je,Xe,Qe,et,tt,ot,st,at,nt,rt,lt,ct,it,ut,pt,dt,ft,Et,bt,mt,vt,yt,wt,gt,ht,_t,Ct,Tt,St,Pt,$t,kt,Ot,Vt,Rt,It,Dt,At,jt,Bt,Lt,Mt,Nt,Ft,xt,Ht,zt,Gt,Kt,Ut,Wt,qt,Yt,Zt,Jt,Xt,Qt,eo,to,oo,so,ao,no,ro,lo,co,io,uo,po,fo,Eo,bo,mo,vo,yo,wo,go,ho,_o,Co,To,So,Po,$o,ko,Oo,Vo,Ro,Ts,Io,Do,Ao,jo,Bo,Lo,Mo,No,Fo,xo],Ps=[Ho,zo,Go,Ko,Uo,Wo],$s=Xo([...Ss,...Ps]);const ks=$s.version,Os=Object.prototype.toString,te=e=>Os.call(e),Vs=e=>te(e).slice(8,-1),Ms=Array.isArray,Ns=e=>te(e)==="[object Date]",W=e=>typeof e=="function",Rs=e=>typeof e=="string",Is=e=>e!==null&&typeof e=="object",Ds=e=>Is(e)&&W(e.then)&&W(e.catch),oe=e=>te(e)==="[object Object]",Fs=e=>{if(Rs(e))return{content:e};if(oe(e))return e},As=(e,o)=>{if(!oe(e))throw new Error(`${o} expected Object but got ${Vs(e)}`)},xs=(e,o,t,a,n)=>G(void 0,null,function*(){try{let s={};const u={row:t,index:a};return e?de(e)?s=e.value:oe(e)?s=p({},e):W(e)?s=yield e(o,u):Ds(e)?s=yield e:s=e:s={},As(s,n),s}catch(s){return Promise.reject(s)}}),se=(e,o)=>o?`plus-${e}-${o}`:`plus-${e}`,Hs=e=>`${se("field",e)}`,zs=e=>`${se("label",e)}`,Gs=e=>`${se("extra",e)}`,Ks=(e,o)=>{const t={};return Object.keys(e||{}).forEach(a=>{a.startsWith(o)&&(t[a]=e[a])}),t},js=(e,o)=>{const t=e.split(".").map(s=>Number(s)),a=o.split(".").map(s=>Number(s)),n=Math.max(t.length,a.length);for(let s=0;s<n;s++){if((t[s]||0)>(a[s]||0))return 1;if((t[s]||0)<(a[s]||0))return-1}return 0},Us=js(ks,"2.6.0")<0;var Ws=(e,o)=>{const t=e.__vccOpts||e;for(const[a,n]of o)t[a]=n;return t};export{Ws as _,Rs as a,Hs as b,Gs as c,Ms as d,Ds as e,Ks as f,zs as g,xs as h,W as i,Fs as j,Ns as k,Vs as t,Us as v};