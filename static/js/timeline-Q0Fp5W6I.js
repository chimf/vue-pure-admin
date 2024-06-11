import{d as k,dc as c,b as w,w as t,e as r,f as p,g as a,i as n,h as v,k as g,l as f,t as _,F as y,dd as j,C as x,D as C,_ as I}from"./index-DUPTv-nx.js";import{u as m}from"./index-BY7SrZJU.js";import{u as B}from"./hooks-BSJc7Crz.js";import{d as q}from"./iphone-CgGaW-_Y.js";var z={pkg:{name:"vue-pure-admin",version:"5.7.0",engines:{node:"^18.18.0 || ^20.9.0 || >=21.1.0",pnpm:">=9"},dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@howdyjs/mouse-menu":"^2.1.3","@infectoone/vue-ganttastic":"^2.3.2","@logicflow/core":"^1.2.27","@logicflow/extension":"^1.2.27","@pureadmin/descriptions":"^1.2.1","@pureadmin/table":"^3.1.2","@pureadmin/utils":"^2.4.7","@vue-flow/background":"^1.3.0","@vue-flow/core":"^1.34.1","@vueuse/core":"^10.10.0","@vueuse/motion":"^2.2.3","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12","@zxcvbn-ts/core":"^3.0.4","animate.css":"^4.1.1",axios:"^1.7.2","china-area-data":"^5.0.1",cropperjs:"^1.6.2",dayjs:"^1.11.11",echarts:"^5.5.0","el-table-infinite-scroll":"^3.0.5","element-plus":"^2.7.4","intro.js":"^7.2.0","js-cookie":"^3.0.5",jsbarcode:"^3.11.6",localforage:"^1.10.0","mint-filter":"^4.0.3",mitt:"^3.0.1",mqtt:"4.3.7",nprogress:"^0.2.0",path:"^0.12.7",pinia:"^2.1.7","pinyin-pro":"^3.21.1","plus-pro-components":"^0.1.8",qrcode:"^1.5.3",qs:"^6.12.1","responsive-storage":"^2.2.0",sortablejs:"^1.15.2",swiper:"^11.1.4",typeit:"^8.8.3","v-contextmenu":"^3.2.0","v3-infinite-loading":"^1.3.1","version-rocket":"^1.7.1",vue:"^3.4.27","vue-i18n":"^9.13.1","vue-json-pretty":"^2.4.0","vue-pdf-embed":"^2.0.4","vue-router":"^4.3.2","vue-tippy":"^6.4.1","vue-types":"^5.1.2","vue-virtual-scroller":"2.0.0-beta.8","vue-waterfall-plugin-next":"^2.4.3","vue3-danmaku":"^1.6.0","vue3-puzzle-vcode":"^1.1.7",vuedraggable:"^4.1.0","vxe-table":"^4.6.17","wavesurfer.js":"^7.7.15",xgplayer:"^3.0.18",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"^19.3.0","@commitlint/config-conventional":"^19.2.2","@commitlint/types":"^19.0.3","@eslint/js":"^9.4.0","@faker-js/faker":"^8.4.1","@iconify-icons/ep":"^1.2.12","@iconify-icons/ri":"^1.2.10","@iconify/vue":"^4.1.2","@intlify/unplugin-vue-i18n":"^4.0.0","@pureadmin/theme":"^3.2.0","@types/dagre":"^0.7.52","@types/gradient-string":"^1.1.6","@types/intro.js":"^5.1.5","@types/js-cookie":"^3.0.6","@types/node":"^20.14.2","@types/nprogress":"^0.2.3","@types/qrcode":"^1.5.5","@types/qs":"^6.9.15","@types/sortablejs":"^1.15.8","@typescript-eslint/eslint-plugin":"^7.12.0","@typescript-eslint/parser":"^7.12.0","@vitejs/plugin-vue":"^5.0.5","@vitejs/plugin-vue-jsx":"^4.0.0",autoprefixer:"^10.4.19",boxen:"^7.1.1",cssnano:"^7.0.2",dagre:"^0.8.5",eslint:"^9.4.0","eslint-config-prettier":"^9.1.0","eslint-define-config":"^2.1.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-vue":"^9.26.0","gradient-string":"^2.0.2",husky:"^9.0.11","lint-staged":"^15.2.5",postcss:"^8.4.38","postcss-html":"^1.7.0","postcss-import":"^16.1.0","postcss-scss":"^4.0.9",prettier:"^3.3.1",rimraf:"^5.0.7","rollup-plugin-visualizer":"^5.12.0",sass:"^1.77.4",stylelint:"^16.6.1","stylelint-config-recess-order":"^5.0.1","stylelint-config-recommended-vue":"^1.5.0","stylelint-config-standard-scss":"^13.1.0","stylelint-prettier":"^5.0.0",svgo:"^3.3.2",tailwindcss:"^3.4.4",typescript:"^5.4.5",vite:"^5.2.12","vite-plugin-cdn-import":"^1.0.1","vite-plugin-compression":"^0.5.1","vite-plugin-fake-server":"^2.1.1","vite-plugin-remove-console":"^2.2.0","vite-plugin-router-warn":"^1.0.0","vite-plugin-vue-inspector":"^5.1.2","vite-svg-loader":"^5.1.0","vue-eslint-parser":"^9.4.3","vue-tsc":"^1.8.27"}},lastBuildTime:"2024-06-11 14:31:31"};const F=i=>(x("data-v-4286dcd7"),i=i(),C(),i),N={class:"card-header"},R=F(()=>a("p",{class:"font-medium"},"时间线",-1)),S={class:"flex"},T={class:"message"},D=k({name:"TimeLine",__name:"timeline",setup(i){const{lastBuildTime:s}=z,l=[{content:"支持圆点发光",timestamp:s,icon:c(m())},{content:"支持方形发光",timestamp:s,icon:c(m({borderRadius:0,background:"#67C23A"}))},{content:"支持渐变发光",timestamp:s,icon:c(m({background:j({randomizeHue:!0})}))},{content:"支持默认颜色",timestamp:s},{content:"支持自定义颜色",timestamp:s,color:"#F56C6C"},{content:"支持自定义图标",timestamp:s,color:"transparent",icon:B(q,{color:"#0bbd87"})}];return(V,A)=>{const b=r("el-link"),u=r("el-timeline-item"),d=r("el-timeline"),h=r("el-card");return p(),w(h,{shadow:"never"},{header:t(()=>[a("div",N,[R,n(b,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/timeline.vue",target:"_blank"},{default:t(()=>[v(" 代码位置 src/views/components/timeline.vue ")]),_:1})])]),default:t(()=>[a("div",S,[n(d,null,{default:t(()=>[(p(),g(y,null,f(l,(e,o)=>n(u,{key:o,icon:e.icon,color:e.color,timestamp:e.timestamp},{default:t(()=>[v(_(e.content),1)]),_:2},1032,["icon","color","timestamp"])),64))]),_:1}),n(d,{class:"pl-40"},{default:t(()=>[(p(),g(y,null,f(l,(e,o)=>n(u,{key:o,icon:e.icon,color:e.color,timestamp:e.timestamp,placement:"bottom"},{default:t(()=>[a("div",T," vue-pure-admin 第"+_(l.length-o)+"个版本发布啦 ",1)]),_:2},1032,["icon","color","timestamp"])),64))]),_:1})])]),_:1})}}}),O=I(D,[["__scopeId","data-v-4286dcd7"]]);export{O as default};
