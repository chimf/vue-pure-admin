var S=Object.defineProperty;var i=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var h=(t,l,s)=>l in t?S(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s,y=(t,l)=>{for(var s in l||(l={}))w.call(l,s)&&h(t,s,l[s]);if(i)for(var s of i(l))C.call(l,s)&&h(t,s,l[s]);return t};import{u as L}from"./hooks-Bl0TpMRS.js";import{d as A,r as n,as as N,aV as R,J as X,L as j,i as r,m as q,j as z,ac as V,D,n as I,$ as J,S as K}from"./index-O62TfnLP.js";const T={options:{type:Array,default:()=>[]},modelValue:{type:void 0,require:!1,default:"0"}},W=A({name:"ReSegmented",props:T,emits:["change","update:modelValue"],setup(t,{emit:l}){const s=n(0),f=n(0),{isDark:g}=N(),b=n(!1),c=n(-1),m=n(""),v=J(),d=R(t.modelValue)?X(t,"modelValue"):n(0);function o({option:e,index:a},u){e.disabled||(u.preventDefault(),R(t.modelValue)?l("update:modelValue",a):d.value=a,m.value="",l("change",{index:a,option:e}))}function M({option:e,index:a},u){u.preventDefault(),c.value=a,e.disabled||d.value===a?m.value="":m.value=g.value?"#1f1f1f":"rgba(0, 0, 0, 0.06)"}function $(e,a){a.preventDefault(),c.value=-1}function k(e=d.value){I(()=>{var u;const a=(u=v==null?void 0:v.proxy)==null?void 0:u.$refs[`labelRef${e}`];s.value=a.clientWidth,f.value=a.offsetLeft,b.value=!0})}j(()=>d.value,e=>{I(()=>{k(e)})},{deep:!0,immediate:!0});const p=()=>t.options.map((e,a)=>r("label",{ref:`labelRef${a}`,class:["pure-segmented-item",(e==null?void 0:e.disabled)&&"pure-segmented-item-disabled"],style:{background:c.value===a?m.value:"",color:!e.disabled&&(d.value===a||c.value===a)?g.value?"rgba(255, 255, 255, 0.85)":"rgba(0,0,0,.88)":""},onMouseenter:u=>M({option:e,index:a},u),onMouseleave:u=>$({option:e,index:a},u),onClick:u=>o({option:e,index:a},u)},[r("input",{type:"radio",name:"segmented"},null),q(r("div",{class:"pure-segmented-item-label"},[e.icon&&!V(e.label)?r("span",{class:"pure-segmented-item-icon",style:{marginRight:e.label?"6px":0}},[D(L(e.icon,y({},e==null?void 0:e.iconAttrs)))]):null,e.label?V(e.label)?D(e.label):r("span",null,[e.label]):null]),[[z("tippy"),{content:e==null?void 0:e.tip,zIndex:41e3}]])]));return()=>r("div",{class:"pure-segmented"},[r("div",{class:"pure-segmented-group"},[r("div",{class:"pure-segmented-item-selected",style:{width:`${s.value}px`,transform:`translateX(${f.value}px)`,display:b.value?"block":"none"}},null),p()])])}}),F=K(W);export{F as R};