import{d,a as c,e as o,f,b as i,w as a,i as e}from"./index-B0Z6rV6K.js";const w=d({__name:"form",props:{formInline:{default:()=>({user:"",region:""})}},setup(m){const l=c(m.formInline);return(V,n)=>{const u=o("el-input"),r=o("el-form-item"),t=o("el-option"),p=o("el-select"),_=o("el-form");return f(),i(_,{model:l.value},{default:a(()=>[e(r,{label:"姓名"},{default:a(()=>[e(u,{modelValue:l.value.user,"onUpdate:modelValue":n[0]||(n[0]=s=>l.value.user=s),class:"!w-[220px]",placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),e(r,{label:"城市"},{default:a(()=>[e(p,{modelValue:l.value.region,"onUpdate:modelValue":n[1]||(n[1]=s=>l.value.region=s),class:"!w-[220px]",placeholder:"请选择城市"},{default:a(()=>[e(t,{label:"上海",value:"上海"}),e(t,{label:"浙江",value:"浙江"}),e(t,{label:"深圳",value:"深圳"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])}}});export{w as _};
