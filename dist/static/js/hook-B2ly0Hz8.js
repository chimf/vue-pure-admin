var h=(l,f,s)=>new Promise((g,c)=>{var i=n=>{try{o(s.next(n))}catch(r){c(r)}},v=n=>{try{o(s.throw(n))}catch(r){c(r)}},o=n=>n.done?g(n.value):Promise.resolve(n.value).then(i,v);o((s=s.apply(l,f)).next())});import{b as D,r as t,o as Q,an as q,gc as G,w as $,ad as x,m as X,k as Z,d6 as w,cS as ee,J as y,du as ae,ai as te,a0 as ne,M as se}from"./index-DeS8Almj.js";import{_ as le}from"./form.vue_vue_type_script_setup_true_lang-Cw7aHO6m.js";import{u as oe}from"./hooks-DOq0qty1.js";import{h as ue,i as ce,j as ie}from"./system-Cw4r70nW.js";function ve(l){const f=D({name:"",code:"",status:""}),s=t(),g=t(),c=t([]),i=t([]),v=t([]),o=t(!1),n=t(!0),r=t(!1),T=t(),d=t({}),b=t(!1),S=t(!1),{switchStyle:z}=oe(),F={value:"id",label:"title",children:"children"},p=D({total:0,pageSize:10,currentPage:1,background:!0}),I=[{label:"角色编号",prop:"id"},{label:"角色名称",prop:"name"},{label:"角色标识",prop:"code"},{label:"状态",cellRenderer:e=>{var a;return X(Z("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(a=d.value[e.index])==null?void 0:a.loading,modelValue:e.row.status,"onUpdate:modelValue":u=>e.row.status=u,"active-value":1,"inactive-value":0,"active-text":"已启用","inactive-text":"已停用","inline-prompt":!0,style:z.value,onChange:()=>R(e)},null)},minWidth:90},{label:"备注",prop:"remark",minWidth:160},{label:"创建时间",prop:"createTime",minWidth:160,formatter:({createTime:e})=>w(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:210,slot:"operation"}];function R({row:e,index:a}){ee.confirm(`确认要<strong>${e.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.name}</strong>吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{d.value[a]=Object.assign({},d.value[a],{loading:!0}),setTimeout(()=>{d.value[a]=Object.assign({},d.value[a],{loading:!1}),y(`已${e.status===0?"停用":"启用"}${e.name}`,{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function K(e){y(`您删除了角色名称为${e.name}的这条数据`,{type:"success"}),m()}function L(e){}function P(e){}function j(e){}function m(){return h(this,null,function*(){n.value=!0;const{data:e}=yield ce(ae(f));c.value=e.list,p.total=e.total,p.pageSize=e.pageSize,p.currentPage=e.currentPage,setTimeout(()=>{n.value=!1},500)})}const H=e=>{e&&(e.resetFields(),m())};function V(e="新增",a){var u,C,k;te({title:`${e}角色`,props:{formInline:{name:(u=a==null?void 0:a.name)!=null?u:"",code:(C=a==null?void 0:a.code)!=null?C:"",remark:(k=a==null?void 0:a.remark)!=null?k:""}},width:"40%",draggable:!0,fullscreen:ne(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>se(le,{ref:g}),beforeSure:(_,{options:A})=>{const U=g.value.getRef(),J=A.props.formInline;function M(){y(`您${e}了角色名称为${J.name}的这条数据`,{type:"success"}),_(),m()}U.validate(N=>{N&&M()})}})}function Y(e){return h(this,null,function*(){const{id:a}=e;if(a){s.value=e,o.value=!0;const{data:u}=yield ie({id:a});l.value.setCheckedKeys(u)}else s.value=null,o.value=!1})}function B({row:{id:e}}){var a;return{cursor:"pointer",background:e===((a=s.value)==null?void 0:a.id)?"var(--el-fill-color-light)":""}}function E(){const{id:e,name:a}=s.value;y(`角色名称为${a}的菜单权限修改成功`,{type:"success"})}const O=e=>{l.value.filter(e)},W=(e,a)=>x(a.title).includes(e);return Q(()=>h(this,null,function*(){m();const{data:e}=yield ue();i.value=q(e,"id"),v.value=G(e)})),$(b,e=>{e?l.value.setExpandedKeys(i.value):l.value.setExpandedKeys([])}),$(S,e=>{e?l.value.setCheckedKeys(i.value):l.value.setCheckedKeys([])}),{form:f,isShow:o,curRow:s,loading:n,columns:I,rowStyle:B,dataList:c,treeData:v,treeProps:F,isLinkage:r,pagination:p,isExpandAll:b,isSelectAll:S,treeSearchValue:T,onSearch:m,resetForm:H,openDialog:V,handleMenu:Y,handleSave:E,handleDelete:K,filterMethod:W,transformI18n:x,onQueryChanged:O,handleSizeChange:L,handleCurrentChange:P,handleSelectionChange:j}}export{ve as useRole};