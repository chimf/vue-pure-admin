import{aI as s,M as i}from"./index-7f2011bd.js";const C=(e,o)=>{if(o){const{icon:l,type:n="info",dangerouslyUseHTMLString:t=!1,customClass:r="antd",duration:u=2e3,showClose:c=!1,center:g=!1,offset:m=20,appendTo:f=document.body,grouping:d=!1,onClose:a}=o;return s({message:e,type:n,icon:l,dangerouslyUseHTMLString:t,duration:u,showClose:c,center:g,offset:m,appendTo:f,grouping:d,customClass:r==="antd"?"pure-message":"",onClose:()=>i(a)?a():null})}else return s({message:e,customClass:"pure-message"})},M=()=>s.closeAll();export{M as c,C as m};