import{S as c}from"./sortable.esm-e674cde8.js";import{r as p,K as i,f as a,b as u,n as d}from"./index-a0fff168.js";import{a as m}from"./data-2fa14dce.js";function D(){const e=p(i(m,!0)),n=o=>{o.preventDefault(),d(()=>{const r=document.querySelector(".el-table__body-wrapper tbody");c.create(r,{animation:300,handle:".drag-btn",onEnd:({newIndex:t,oldIndex:l})=>{const s=e.value.splice(l,1)[0];e.value.splice(t,0,s)}})})};return{columns:[{label:"ID",prop:"id",cellRenderer:({row:o})=>a("div",{class:"flex items-center"},[a(u("iconify-icon-online"),{icon:"icon-park-outline:drag",class:"drag-btn cursor-grab",onMouseenter:r=>n(r)},null),a("p",{class:"ml-[16px]"},[o.id])])},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}],dataList:e}}export{D as useColumns};