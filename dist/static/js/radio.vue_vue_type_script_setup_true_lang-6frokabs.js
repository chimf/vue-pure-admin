import{t as s}from"./data-c0n4clgQ.js";import{d as C,r as l,b as c,g,n as v,j as n,u,h,w as p,i as d}from"./index-OPODCVBK.js";const w={style:{"margin-top":"20px"}},B=C({__name:"radio",setup(k){const o=l(),i=l(),a=t=>{const{setCurrentRow:e}=o.value.getTableRef();e(t)},_=t=>{i.value=t},m=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(t,e)=>{const f=c("pure-table"),r=c("el-button");return g(),v("div",null,[n(f,{ref_key:"tableRef",ref:o,data:u(s),columns:m,"highlight-current-row":"",onPageCurrentChange:_},null,8,["data"]),h("div",w,[n(r,{onClick:e[0]||(e[0]=b=>a(u(s)[1]))},{default:p(()=>[d("Select second row")]),_:1}),n(r,{onClick:e[1]||(e[1]=b=>a())},{default:p(()=>[d("Clear selection")]),_:1})])])}}});export{B as _};