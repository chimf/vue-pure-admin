var z=(i,d,l)=>new Promise((c,u)=>{var h=a=>{try{p(l.next(a))}catch(s){u(s)}},g=a=>{try{p(l.throw(a))}catch(s){u(s)}},p=a=>a.done?c(a.value):Promise.resolve(a.value).then(h,g);p((l=l.apply(i,d)).next())});import{_ as Q}from"./form.vue_vue_type_script_setup_true_lang-DsPQl4OX.js";import{K as U,r,o as W,i as m,D as L,a3 as f,F as Y,b as Z,aX as N,dS as E,aa as w,a8 as ee,A as V,aC as ne}from"./index-wKRNaHxZ.js";import{a as te}from"./system-D31VtP7T.js";import{u as ae}from"./hooks-DNu5cX-S.js";import"./index-Bc72bQyU.js";import"./index-CmpAlYuM.js";import"./index-mNhqgy0d.js";function ie(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!ne(i)}function he(){const i=U({title:""}),d=r(),l=r([]),c=r(!0),u=(n,e=!1)=>{switch(n){case 0:return e?"菜单":"primary";case 1:return e?"iframe":"warning";case 2:return e?"外链":"danger";case 3:return e?"按钮":"info"}},h=[{label:"菜单名称",prop:"title",align:"left",cellRenderer:({row:n})=>m(Y,null,[m("span",{class:"inline-block mr-1"},[L(ae(n.icon),{style:{paddingTop:"1px"}})]),m("span",null,[f(n.title)])])},{label:"菜单类型",prop:"menuType",width:100,cellRenderer:({row:n,props:e})=>{let t;return m(Z("el-tag"),{size:e.size,type:u(n.menuType),effect:"plain"},ie(t=u(n.menuType,!0))?t:{default:()=>[t]})}},{label:"路由路径",prop:"path"},{label:"组件路径",prop:"component",formatter:({path:n,component:e})=>N(e)?n:e},{label:"权限标识",prop:"auths"},{label:"排序",prop:"rank",width:100},{label:"隐藏",prop:"showLink",formatter:({showLink:n})=>n?"否":"是",width:100},{label:"操作",fixed:"right",width:210,slot:"operation"}];function g(n){}function p(n){n&&(n.resetFields(),a())}function a(){return z(this,null,function*(){c.value=!0;const{data:n}=yield te();let e=n;N(i.title)||(e=e.filter(t=>f(t.title).includes(i.title))),l.value=E(e),setTimeout(()=>{c.value=!1},500)})}function s(n){if(!n||!n.length)return;const e=[];for(let t=0;t<n.length;t++)n[t].title=f(n[t].title),s(n[t].children),e.push(n[t]);return e}function H(n="新增",e){var t,T,b,v,y,k,I,o,S,M,R,D,F,O,_,j,C,P,$,A;w({title:`${n}菜单`,props:{formInline:{menuType:(t=e==null?void 0:e.menuType)!=null?t:0,higherMenuOptions:s(ee(l.value)),parentId:(T=e==null?void 0:e.parentId)!=null?T:0,title:(b=e==null?void 0:e.title)!=null?b:"",name:(v=e==null?void 0:e.name)!=null?v:"",path:(y=e==null?void 0:e.path)!=null?y:"",component:(k=e==null?void 0:e.component)!=null?k:"",rank:(I=e==null?void 0:e.rank)!=null?I:99,redirect:(o=e==null?void 0:e.redirect)!=null?o:"",icon:(S=e==null?void 0:e.icon)!=null?S:"",extraIcon:(M=e==null?void 0:e.extraIcon)!=null?M:"",enterTransition:(R=e==null?void 0:e.enterTransition)!=null?R:"",leaveTransition:(D=e==null?void 0:e.leaveTransition)!=null?D:"",activePath:(F=e==null?void 0:e.activePath)!=null?F:"",auths:(O=e==null?void 0:e.auths)!=null?O:"",frameSrc:(_=e==null?void 0:e.frameSrc)!=null?_:"",frameLoading:(j=e==null?void 0:e.frameLoading)!=null?j:!0,keepAlive:(C=e==null?void 0:e.keepAlive)!=null?C:!1,hiddenTag:(P=e==null?void 0:e.hiddenTag)!=null?P:!1,showLink:($=e==null?void 0:e.showLink)!=null?$:!0,showParent:(A=e==null?void 0:e.showParent)!=null?A:!1}},width:"45%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>L(Q,{ref:d}),beforeSure:(X,{options:q})=>{const B=d.value.getRef(),G=q.props.formInline;function x(){V(`您${n}了菜单名称为${f(G.title)}的这条数据`,{type:"success"}),X(),a()}B.validate(J=>{J&&x()})}})}function K(n){V(`您删除了菜单名称为${f(n.title)}的这条数据`,{type:"success"}),a()}return W(()=>{a()}),{form:i,loading:c,columns:h,dataList:l,onSearch:a,resetForm:p,openDialog:H,handleDelete:K,handleSelectionChange:g}}export{he as useMenu};