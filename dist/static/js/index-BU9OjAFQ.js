import{d as V,a7 as A,a8 as F,K as h,e1 as I,ab as M,r as N,dp as C,b as m,e as _,c as S,w as a,f as d,k as g,F as b,l as y,i as n,u as s,h as o,B as v,aa as B,e2 as E}from"./index-O62TfnLP.js";import{u as U}from"./hooks-BuivqYd_.js";const j=d("div",{class:"font-medium"},"标签页复用，超出限制自动关闭",-1),H={class:"flex flex-wrap items-center"},L=d("p",null,"query传参模式：",-1),P={class:"flex flex-wrap items-center"},z=d("p",null,"params传参模式：",-1),O=V({name:"Tabs",__name:"index",setup(K){const{toDetail:c,router:u}=U(),x=A(F().wholeMenus,!0),f=h(()=>I(M(x),0,{disabled:!0})),p=N([]),k=h(()=>{var r;return(r=C())==null?void 0:r.multiTags});function $(){p.value.length!==0&&p.value.forEach(r=>{var l;const t=(l=E(f.value,r).redirect)!=null?l:E(f.value,r).path;C().handleTags("splice",t),t==="/tabs/index"&&u.push({path:k.value[k.value.length-1].path})})}return(r,t)=>{const l=m("el-button"),i=m("el-divider"),q=m("el-tree-select"),D=m("el-link"),T=m("el-card");return _(),S(T,{shadow:"never"},{header:a(()=>[j]),default:a(()=>[d("div",H,[L,(_(),g(b,null,y(6,e=>n(l,{key:e,class:"m-2",onClick:w=>s(c)({id:e},"query")},{default:a(()=>[o(" 打开"+v(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64)),n(l,{onClick:t[0]||(t[0]=e=>s(c)({id:666,name:"小明",age:18,job:"工程师"},"query"))},{default:a(()=>[o(" 多个参数 ")]),_:1})]),n(i),d("div",P,[z,(_(),g(b,null,y(6,e=>n(l,{key:e,class:"m-2",onClick:w=>s(c)({id:e},"params")},{default:a(()=>[o(" 打开"+v(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),n(i),n(q,{modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=e=>p.value=e),class:"!w-[300px]","node-key":"uniqueId",placeholder:"请选择要关闭的标签",clearable:"",multiple:"",filterable:"","default-expand-all":"",props:{label:e=>s(B)(e.meta.title),value:"uniqueId",children:"children",disabled:"disabled"},data:f.value},{default:a(({data:e})=>[d("span",null,v(s(B)(e.meta.title)),1)]),_:1},8,["modelValue","props","data"]),n(l,{class:"m-2",onClick:$},{default:a(()=>[o("关闭标签")]),_:1}),n(i),n(l,{onClick:t[2]||(t[2]=e=>s(u).push({name:"Menu1-2-2"}))},{default:a(()=>[o(" 跳转页内菜单（传name对象，优先推荐） ")]),_:1}),n(l,{onClick:t[3]||(t[3]=e=>s(u).push("/nested/menu1/menu1-2/menu1-2-2"))},{default:a(()=>[o(" 跳转页内菜单（直接传要跳转的路径） ")]),_:1}),n(l,{onClick:t[4]||(t[4]=e=>s(u).push({path:"/nested/menu1/menu1-2/menu1-2-2"}))},{default:a(()=>[o(" 跳转页内菜单（传path对象） ")]),_:1}),n(i),n(l,{onClick:t[5]||(t[5]=e=>s(u).push({name:"Menu1-2-2",query:{text:"传name对象，优先推荐"}}))},{default:a(()=>[o(" 携参跳转页内菜单（传name对象，优先推荐） ")]),_:1}),n(l,{onClick:t[6]||(t[6]=e=>s(u).push({path:"/nested/menu1/menu1-2/menu1-2-2",query:{text:"传path对象"}}))},{default:a(()=>[o(" 携参跳转页内菜单（传path对象） ")]),_:1}),n(D,{class:"ml-4",href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank"},{default:a(()=>[o(" 点击查看更多跳转方式 ")]),_:1}),n(i),n(l,{onClick:t[7]||(t[7]=e=>s(u).push({name:"Empty"}))},{default:a(()=>[o(" 跳转无Layout的空白页面 ")]),_:1})]),_:1})}}});export{O as default};