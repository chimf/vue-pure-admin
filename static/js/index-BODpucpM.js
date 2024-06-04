import{f as S,k as L,g as b,d as Q,a as R,m as Z,z as tt,b as V,w as O,a1 as F,e as U,A as N,h as z,i as A,B as M,t as q,a2 as G,u as B}from"./index-DDFqk3Tf.js";function f(p,t,e,i){return new(e||(e=Promise))(function(s,n){function r(a){try{h(i.next(a))}catch(l){n(l)}}function o(a){try{h(i.throw(a))}catch(l){n(l)}}function h(a){var l;a.done?s(a.value):(l=a.value,l instanceof e?l:new e(function(c){c(l)})).then(r,o)}h((i=i.apply(p,t||[])).next())})}class ${constructor(){this.listeners={}}on(t,e,i){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),i==null?void 0:i.once){const s=()=>{this.un(t,s),this.un(t,e)};return this.on(t,s),s}return()=>this.un(t,e)}un(t,e){var i;(i=this.listeners[t])===null||i===void 0||i.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach(i=>i(...e))}}const X={decode:function(p,t){return f(this,void 0,void 0,function*(){const e=new AudioContext({sampleRate:t});return e.decodeAudioData(p).finally(()=>e.close())})},createBuffer:function(p,t){return typeof p[0]=="number"&&(p=[p]),function(e){const i=e[0];if(i.some(s=>s>1||s<-1)){const s=i.length;let n=0;for(let r=0;r<s;r++){const o=Math.abs(i[r]);o>n&&(n=o)}for(const r of e)for(let o=0;o<s;o++)r[o]/=n}}(p),{duration:t,length:p[0].length,sampleRate:p[0].length/t,numberOfChannels:p.length,getChannelData:e=>p==null?void 0:p[e],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function K(p,t){const e=t.xmlns?document.createElementNS(t.xmlns,p):document.createElement(p);for(const[i,s]of Object.entries(t))if(i==="children")for(const[n,r]of Object.entries(t))typeof r=="string"?e.appendChild(document.createTextNode(r)):e.appendChild(K(n,r));else i==="style"?Object.assign(e.style,s):i==="textContent"?e.textContent=s:e.setAttribute(i,s.toString());return e}function Y(p,t,e){const i=K(p,t||{});return e==null||e.appendChild(i),i}var et=Object.freeze({__proto__:null,createElement:Y,default:Y});const it={fetchBlob:function(p,t,e){return f(this,void 0,void 0,function*(){const i=yield fetch(p,e);if(i.status>=400)throw new Error(`Failed to fetch ${p}: ${i.status} (${i.statusText})`);return function(s,n){f(this,void 0,void 0,function*(){if(!s.body||!s.headers)return;const r=s.body.getReader(),o=Number(s.headers.get("Content-Length"))||0;let h=0;const a=c=>f(this,void 0,void 0,function*(){h+=(c==null?void 0:c.length)||0;const d=Math.round(h/o*100);n(d)}),l=()=>f(this,void 0,void 0,function*(){let c;try{c=yield r.read()}catch(d){return}c.done||(a(c.value),yield l())});l()})}(i.clone(),t),i.blob()})}};class st extends ${constructor(t){super(),this.isExternalMedia=!1,t.media?(this.media=t.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),t.mediaControls&&(this.media.controls=!0),t.autoplay&&(this.media.autoplay=!0),t.playbackRate!=null&&this.onMediaEvent("canplay",()=>{t.playbackRate!=null&&(this.media.playbackRate=t.playbackRate)},{once:!0})}onMediaEvent(t,e,i){return this.media.addEventListener(t,e,i),()=>this.media.removeEventListener(t,e,i)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const t=this.getSrc();t.startsWith("blob:")&&URL.revokeObjectURL(t)}canPlayType(t){return this.media.canPlayType(t)!==""}setSrc(t,e){if(this.getSrc()===t)return;this.revokeSrc();const i=e instanceof Blob&&this.canPlayType(e.type)?URL.createObjectURL(e):t;this.media.src=i}destroy(){this.media.pause(),this.isExternalMedia||(this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(t){this.media=t}play(){return f(this,void 0,void 0,function*(){return this.media.play()})}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(t){this.media.currentTime=t}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(t){this.media.volume=t}getMuted(){return this.media.muted}setMuted(t){this.media.muted=t}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(t,e){e!=null&&(this.media.preservesPitch=e),this.media.playbackRate=t}getMediaElement(){return this.media}setSinkId(t){return this.media.setSinkId(t)}}class I extends ${constructor(t,e){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.subscriptions=[],this.options=t;const i=this.parentFromOptionsContainer(t.container);this.parent=i;const[s,n]=this.initHtml();i.appendChild(s),this.container=s,this.scrollContainer=n.querySelector(".scroll"),this.wrapper=n.querySelector(".wrapper"),this.canvasWrapper=n.querySelector(".canvases"),this.progressWrapper=n.querySelector(".progress"),this.cursor=n.querySelector(".cursor"),e&&n.appendChild(e),this.initEvents()}parentFromOptionsContainer(t){let e;if(typeof t=="string"?e=document.querySelector(t):t instanceof HTMLElement&&(e=t),!e)throw new Error("Container not found");return e}initEvents(){const t=i=>{const s=this.wrapper.getBoundingClientRect(),n=i.clientX-s.left,r=i.clientY-s.top;return[n/s.width,r/s.height]};this.wrapper.addEventListener("click",i=>{const[s,n]=t(i);this.emit("click",s,n)}),this.wrapper.addEventListener("dblclick",i=>{const[s,n]=t(i);this.emit("dblclick",s,n)}),this.options.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:i,scrollWidth:s,clientWidth:n}=this.scrollContainer,r=i/s,o=(i+n)/s;this.emit("scroll",r,o)});const e=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{e().then(()=>this.onContainerResize()).catch(()=>{})}),this.resizeObserver.observe(this.scrollContainer)}onContainerResize(){const t=this.parent.clientWidth;t===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=t,this.reRender())}initDrag(){this.subscriptions.push(function(t,e,i,s,n=3,r=0,o=100){if(!t)return()=>{};const h=matchMedia("(pointer: coarse)").matches;let a=()=>{};const l=c=>{if(c.button!==r)return;c.preventDefault(),c.stopPropagation();let d=c.clientX,u=c.clientY,m=!1;const v=Date.now(),_=g=>{if(g.preventDefault(),g.stopPropagation(),h&&Date.now()-v<o)return;const E=g.clientX,k=g.clientY,T=E-d,P=k-u;if(m||Math.abs(T)>n||Math.abs(P)>n){const D=t.getBoundingClientRect(),{left:j,top:H}=D;m||(i==null||i(d-j,u-H),m=!0),e(T,P,E-j,k-H),d=E,u=k}},C=g=>{if(m){const E=g.clientX,k=g.clientY,T=t.getBoundingClientRect(),{left:P,top:D}=T;s==null||s(E-P,k-D)}a()},w=g=>{g.relatedTarget&&g.relatedTarget!==document.documentElement||C(g)},y=g=>{m&&(g.stopPropagation(),g.preventDefault())},x=g=>{m&&g.preventDefault()};document.addEventListener("pointermove",_),document.addEventListener("pointerup",C),document.addEventListener("pointerout",w),document.addEventListener("pointercancel",w),document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("click",y,{capture:!0}),a=()=>{document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",C),document.removeEventListener("pointerout",w),document.removeEventListener("pointercancel",w),document.removeEventListener("touchmove",x),setTimeout(()=>{document.removeEventListener("click",y,{capture:!0})},10)}};return t.addEventListener("pointerdown",l),()=>{a(),t.removeEventListener("pointerdown",l)}}(this.wrapper,(t,e,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},t=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,t/this.wrapper.getBoundingClientRect().width)))},t=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,t/this.wrapper.getBoundingClientRect().width)))}))}getHeight(t,e){var i;const s=((i=this.audioData)===null||i===void 0?void 0:i.numberOfChannels)||1;if(t==null)return 128;if(!isNaN(Number(t)))return Number(t);if(t==="auto"){const n=this.parent.clientHeight||128;return e!=null&&e.every(r=>!r.overlay)?n/s:n}return 128}initHtml(){const t=document.createElement("div"),e=t.attachShadow({mode:"open"});return e.innerHTML=`
      <style>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height,this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `,[t,e]}setOptions(t){if(this.options.container!==t.container){const e=this.parentFromOptionsContainer(t.container);e.appendChild(this.container),this.parent=e}t.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.options=t,this.reRender()}getWrapper(){return this.wrapper}getScroll(){return this.scrollContainer.scrollLeft}setScroll(t){this.scrollContainer.scrollLeft=t}setScrollPercentage(t){const{scrollWidth:e}=this.scrollContainer,i=e*t;this.setScroll(i)}destroy(){var t;this.subscriptions.forEach(e=>e()),this.container.remove(),(t=this.resizeObserver)===null||t===void 0||t.disconnect()}createDelay(t=10){let e,i;const s=()=>{e&&clearTimeout(e),i&&i()};return this.timeouts.push(s),()=>new Promise((n,r)=>{s(),i=r,e=setTimeout(()=>{e=void 0,i=void 0,n()},t)})}convertColorValues(t){if(!Array.isArray(t))return t||"";if(t.length<2)return t[0]||"";const e=document.createElement("canvas"),i=e.getContext("2d"),s=e.height*(window.devicePixelRatio||1),n=i.createLinearGradient(0,0,0,s),r=1/(t.length-1);return t.forEach((o,h)=>{const a=h*r;n.addColorStop(a,o)}),n}renderBarWaveform(t,e,i,s){const n=t[0],r=t[1]||t[0],o=n.length,{width:h,height:a}=i.canvas,l=a/2,c=window.devicePixelRatio||1,d=e.barWidth?e.barWidth*c:1,u=e.barGap?e.barGap*c:e.barWidth?d/2:0,m=e.barRadius||0,v=h/(d+u)/o,_=m&&"roundRect"in i?"roundRect":"rect";i.beginPath();let C=0,w=0,y=0;for(let x=0;x<=o;x++){const g=Math.round(x*v);if(g>C){const T=Math.round(w*l*s),P=T+Math.round(y*l*s)||1;let D=l-T;e.barAlign==="top"?D=0:e.barAlign==="bottom"&&(D=a-P),i[_](C*(d+u),D,d,P,m),C=g,w=0,y=0}const E=Math.abs(n[x]||0),k=Math.abs(r[x]||0);E>w&&(w=E),k>y&&(y=k)}i.fill(),i.closePath()}renderLineWaveform(t,e,i,s){const n=r=>{const o=t[r]||t[0],h=o.length,{height:a}=i.canvas,l=a/2,c=i.canvas.width/h;i.moveTo(0,l);let d=0,u=0;for(let m=0;m<=h;m++){const v=Math.round(m*c);if(v>d){const C=l+(Math.round(u*l*s)||1)*(r===0?-1:1);i.lineTo(d,C),d=v,u=0}const _=Math.abs(o[m]||0);_>u&&(u=_)}i.lineTo(d,l)};i.beginPath(),n(0),n(1),i.fill(),i.closePath()}renderWaveform(t,e,i){if(i.fillStyle=this.convertColorValues(e.waveColor),e.renderFunction)return void e.renderFunction(t,i);let s=e.barHeight||1;if(e.normalize){const n=Array.from(t[0]).reduce((r,o)=>Math.max(r,Math.abs(o)),0);s=n?1/n:1}e.barWidth||e.barGap||e.barAlign?this.renderBarWaveform(t,e,i,s):this.renderLineWaveform(t,e,i,s)}renderSingleCanvas(t,e,i,s,n,r,o){const h=window.devicePixelRatio||1,a=document.createElement("canvas");a.width=Math.round(i*h),a.height=Math.round(s*h),a.style.width=`${i}px`,a.style.height=`${s}px`,a.style.left=`${Math.round(n)}px`,r.appendChild(a);const l=a.getContext("2d");if(this.renderWaveform(t,e,l),a.width>0&&a.height>0){const c=a.cloneNode(),d=c.getContext("2d");d.drawImage(a,0,0),d.globalCompositeOperation="source-in",d.fillStyle=this.convertColorValues(e.progressColor),d.fillRect(0,0,a.width,a.height),o.appendChild(c)}}renderMultiCanvas(t,e,i,s,n,r){return f(this,void 0,void 0,function*(){const o=window.devicePixelRatio||1,h=i/o;let a=Math.min(I.MAX_CANVAS_WIDTH,this.scrollContainer.clientWidth);if(e.barWidth||e.barGap){const m=e.barWidth||.5,v=m+(e.barGap||m/2);a%v!=0&&(a=Math.floor(a/v)*v)}const l=m=>{const v=m*a,_=Math.min(h-v,a),C=t.map(w=>{const y=Math.floor(v/h*w.length),x=Math.floor((v+_)/h*w.length);return w.slice(y,x)});this.renderSingleCanvas(C,e,_,s,v,n,r)},c=Math.ceil(h/a);if(c===1)return void l(0);const d=this.scrollContainer.scrollLeft/h,u=Math.floor(d*c);l(u),l(u+1),yield Promise.all([f(this,void 0,void 0,function*(){const m=this.createDelay();for(let v=u-1;v>=0;v--)yield m(),l(v)}),f(this,void 0,void 0,function*(){const m=this.createDelay();for(let v=u+2;v<c;v++)yield m(),l(v)})])})}renderChannel(t,e,i,s){return f(this,void 0,void 0,function*(){var{overlay:n}=e,r=function(l,c){var d={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&c.indexOf(u)<0&&(d[u]=l[u]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function"){var m=0;for(u=Object.getOwnPropertySymbols(l);m<u.length;m++)c.indexOf(u[m])<0&&Object.prototype.propertyIsEnumerable.call(l,u[m])&&(d[u[m]]=l[u[m]])}return d}(e,["overlay"]);const o=document.createElement("div"),h=this.getHeight(r.height,r.splitChannels);o.style.height=`${h}px`,n&&s>0&&(o.style.marginTop=`-${h}px`),this.canvasWrapper.style.minHeight=`${h}px`,this.canvasWrapper.appendChild(o);const a=o.cloneNode();this.progressWrapper.appendChild(a),yield this.renderMultiCanvas(t,r,i,h,o,a)})}render(t){return f(this,void 0,void 0,function*(){this.timeouts.forEach(o=>o()),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const e=window.devicePixelRatio||1,i=this.scrollContainer.clientWidth,s=Math.ceil(t.duration*(this.options.minPxPerSec||0));this.isScrollable=s>i;const n=this.options.fillParent&&!this.isScrollable,r=(n?i:s)*e;this.wrapper.style.width=n?"100%":`${s}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=t,this.emit("render");try{if(this.options.splitChannels)yield Promise.all(Array.from({length:t.numberOfChannels}).map((o,h)=>{var a;const l=Object.assign(Object.assign({},this.options),(a=this.options.splitChannels)===null||a===void 0?void 0:a[h]);return this.renderChannel([t.getChannelData(h)],l,r,h)}));else{const o=[t.getChannelData(0)];t.numberOfChannels>1&&o.push(t.getChannelData(1)),yield this.renderChannel(o,this.options,r,0)}}catch(o){return}this.emit("rendered")})}reRender(){if(!this.audioData)return;const{scrollWidth:t}=this.scrollContainer,{right:e}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&t!==this.scrollContainer.scrollWidth){const{right:i}=this.progressWrapper.getBoundingClientRect();let s=i-e;s*=2,s=s<0?Math.floor(s):Math.ceil(s),s/=2,this.scrollContainer.scrollLeft+=s}}zoom(t){this.options.minPxPerSec=t,this.reRender()}scrollIntoView(t,e=!1){const{scrollLeft:i,scrollWidth:s,clientWidth:n}=this.scrollContainer,r=t*s,o=i,h=i+n,a=n/2;if(this.isDragging)r+30>h?this.scrollContainer.scrollLeft+=30:r-30<o&&(this.scrollContainer.scrollLeft-=30);else{(r<o||r>h)&&(this.scrollContainer.scrollLeft=r-(this.options.autoCenter?a:0));const l=r-i-a;e&&this.options.autoCenter&&l>0&&(this.scrollContainer.scrollLeft+=Math.min(l,10))}{const l=this.scrollContainer.scrollLeft,c=l/s,d=(l+n)/s;this.emit("scroll",c,d)}}renderProgress(t,e){if(isNaN(t))return;const i=100*t;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${Math.round(i)===100?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(t,e)}exportImage(t,e,i){return f(this,void 0,void 0,function*(){const s=this.canvasWrapper.querySelectorAll("canvas");if(!s.length)throw new Error("No waveform data");if(i==="dataURL"){const n=Array.from(s).map(r=>r.toDataURL(t,e));return Promise.resolve(n)}return Promise.all(Array.from(s).map(n=>new Promise((r,o)=>{n.toBlob(h=>{h?r(h):o(new Error("Could not export image"))},t,e)})))})}}I.MAX_CANVAS_WIDTH=4e3;class nt extends ${constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class J extends ${constructor(t=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=t,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return f(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(t){if(this.currentSrc=t,this._duration=void 0,!t)return this.buffer=null,void this.emit("emptied");fetch(t).then(e=>{if(e.status>=400)throw new Error(`Failed to fetch ${t}: ${e.status} (${e.statusText})`);return e.arrayBuffer()}).then(e=>this.currentSrc!==t?null:this.audioContext.decodeAudioData(e)).then(e=>{this.currentSrc===t&&(this.buffer=e,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var t;if(!this.paused)return;this.paused=!1,(t=this.bufferNode)===null||t===void 0||t.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let e=this.playedDuration*this._playbackRate;e>=this.duration&&(e=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,e),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var t;this.paused=!0,(t=this.bufferNode)===null||t===void 0||t.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return f(this,void 0,void 0,function*(){this.paused&&(this._play(),this.emit("play"))})}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(t){var e,i;const s=t-this.currentTime;(e=this.bufferNode)===null||e===void 0||e.stop(this.audioContext.currentTime+s),(i=this.bufferNode)===null||i===void 0||i.addEventListener("ended",()=>{this.bufferNode=null,this.pause()},{once:!0})}setSinkId(t){return f(this,void 0,void 0,function*(){return this.audioContext.setSinkId(t)})}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this.bufferNode&&(this.bufferNode.playbackRate.value=t)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(t){const e=!this.paused;e&&this._pause(),this.playedDuration=t/this._playbackRate,e&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var t,e;return(t=this._duration)!==null&&t!==void 0?t:((e=this.buffer)===null||e===void 0?void 0:e.duration)||0}set duration(t){this._duration=t}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.value=t,this.emit("volumechange")}get muted(){return this._muted}set muted(t){this._muted!==t&&(this._muted=t,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(t){return/^(audio|video)\//.test(t)}getGainNode(){return this.gainNode}getChannelData(){const t=[];if(!this.buffer)return t;const e=this.buffer.numberOfChannels;for(let i=0;i<e;i++)t.push(this.buffer.getChannelData(i));return t}}const rt={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class W extends st{static create(t){return new W(t)}constructor(t){const e=t.media||(t.backend==="WebAudio"?new J:void 0);super({media:e,mediaControls:t.mediaControls,autoplay:t.autoplay,playbackRate:t.audioRate}),this.plugins=[],this.decodedData=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},rt,t),this.timer=new nt;const i=e?void 0:this.getMediaElement();this.renderer=new I(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const s=this.options.url||this.getSrc()||"";Promise.resolve().then(()=>{this.emit("init");const{peaks:n,duration:r}=this.options;(s||n&&r)&&this.load(s,n,r).catch(()=>null)})}updateProgress(t=this.getCurrentTime()){return this.renderer.renderProgress(t/this.getDuration(),this.isPlaying()),t}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{if(!this.isSeeking()){const t=this.updateProgress();this.emit("timeupdate",t),this.emit("audioprocess",t)}}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{const t=this.updateProgress();this.emit("timeupdate",t)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop()}),this.onMediaEvent("emptied",()=>{this.timer.stop()}),this.onMediaEvent("ended",()=>{this.emit("finish")}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}),this.onMediaEvent("error",t=>{this.emit("error",t.error)}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(t,e)=>{this.options.interact&&(this.seekTo(t),this.emit("interaction",t*this.getDuration()),this.emit("click",t,e))}),this.renderer.on("dblclick",(t,e)=>{this.emit("dblclick",t,e)}),this.renderer.on("scroll",(t,e)=>{const i=this.getDuration();this.emit("scroll",t*i,e*i)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}),this.renderer.on("dragstart",t=>{this.emit("dragstart",t)}),this.renderer.on("dragend",t=>{this.emit("dragend",t)}));{let t;this.subscriptions.push(this.renderer.on("drag",e=>{if(!this.options.interact)return;let i;this.renderer.renderProgress(e),clearTimeout(t),this.isPlaying()?i=0:this.options.dragToSeek===!0?i=200:typeof this.options.dragToSeek=="object"&&this.options.dragToSeek!==void 0&&(i=this.options.dragToSeek.debounceTime),t=setTimeout(()=>{this.seekTo(e)},i),this.emit("interaction",e*this.getDuration()),this.emit("drag",e)}))}}initPlugins(){var t;!((t=this.options.plugins)===null||t===void 0)&&t.length&&this.options.plugins.forEach(e=>{this.registerPlugin(e)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(t=>t()),this.mediaSubscriptions=[]}setOptions(t){this.options=Object.assign({},this.options,t),this.renderer.setOptions(this.options),t.audioRate&&this.setPlaybackRate(t.audioRate),t.mediaControls!=null&&(this.getMediaElement().controls=t.mediaControls)}registerPlugin(t){return t._init(this),this.plugins.push(t),this.subscriptions.push(t.once("destroy",()=>{this.plugins=this.plugins.filter(e=>e!==t)})),t}getWrapper(){return this.renderer.getWrapper()}getScroll(){return this.renderer.getScroll()}setScroll(t){return this.renderer.setScroll(t)}setScrollTime(t){const e=t/this.getDuration();this.renderer.setScrollPercentage(e)}getActivePlugins(){return this.plugins}loadAudio(t,e,i,s){return f(this,void 0,void 0,function*(){var n;if(this.emit("load",t),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,!e&&!i){const o=this.options.fetchParams||{};window.AbortController&&!o.signal&&(this.abortController=new AbortController,o.signal=(n=this.abortController)===null||n===void 0?void 0:n.signal);const h=a=>this.emit("loading",a);e=yield it.fetchBlob(t,h,o)}this.setSrc(t,e);const r=s||this.getDuration()||(yield new Promise(o=>{this.onMediaEvent("loadedmetadata",()=>o(this.getDuration()),{once:!0})}));if(!t&&!e){const o=this.getMediaElement();o instanceof J&&(o.duration=r)}if(i)this.decodedData=X.createBuffer(i,r||0);else if(e){const o=yield e.arrayBuffer();this.decodedData=yield X.decode(o,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(t,e,i){return f(this,void 0,void 0,function*(){try{return yield this.loadAudio(t,void 0,e,i)}catch(s){throw this.emit("error",s),s}})}loadBlob(t,e,i){return f(this,void 0,void 0,function*(){try{return yield this.loadAudio("blob",t,e,i)}catch(s){throw this.emit("error",s),s}})}zoom(t){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(t),this.emit("zoom",t)}getDecodedData(){return this.decodedData}exportPeaks({channels:t=2,maxLength:e=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const s=Math.min(t,this.decodedData.numberOfChannels),n=[];for(let r=0;r<s;r++){const o=this.decodedData.getChannelData(r),h=[],a=o.length/e;for(let l=0;l<e;l++){const c=o.slice(Math.floor(l*a),Math.ceil((l+1)*a));let d=0;for(let u=0;u<c.length;u++){const m=c[u];Math.abs(m)>Math.abs(d)&&(d=m)}h.push(Math.round(d*i)/i)}n.push(h)}return n}getDuration(){let t=super.getDuration()||0;return t!==0&&t!==1/0||!this.decodedData||(t=this.decodedData.duration),t}toggleInteraction(t){this.options.interact=t}setTime(t){super.setTime(t),this.updateProgress(t),this.emit("timeupdate",t)}seekTo(t){const e=this.getDuration()*t;this.setTime(e)}playPause(){return f(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(t){this.setTime(this.getCurrentTime()+t)}empty(){this.load("",[[0]],.001)}setMediaElement(t){this.unsubscribePlayerEvents(),super.setMediaElement(t),this.initPlayerEvents()}exportImage(){return f(this,arguments,void 0,function*(t="image/png",e=1,i="dataURL"){return this.renderer.exportImage(t,e,i)})}destroy(){var t;this.emit("destroy"),(t=this.abortController)===null||t===void 0||t.abort(),this.plugins.forEach(e=>e.destroy()),this.subscriptions.forEach(e=>e()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}W.BasePlugin=class extends ${constructor(p){super(),this.subscriptions=[],this.options=p}onInit(){}_init(p){this.wavesurfer=p,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(p=>p())}},W.dom=et;const ot={xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",class:"icon",viewBox:"0 0 1024 1024"},at=b("path",{fill:"#409eff",d:"M512 0C229.227 0 0 229.227 0 512s229.227 512 512 512 512-229.227 512-512S794.773 0 512 0m-33.023 704.742c0 34.191-25.028 62.18-55.617 62.18s-55.618-27.975-55.618-62.18V319.258c0-34.19 25.028-62.18 55.618-62.18s55.617 27.975 55.617 62.18zm170.328 0c0 34.191-25.027 62.18-55.617 62.18s-55.617-27.975-55.617-62.18V319.258c0-34.19 25.027-62.18 55.617-62.18s55.617 27.975 55.617 62.18z"},null,-1),lt=[at];function ht(p,t){return S(),L("svg",ot,[...lt])}const ct={render:ht},dt={xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",class:"icon",viewBox:"0 0 1024 1024"},ut=b("path",{fill:"#f56c6c",d:"M512 42.667C252.793 42.667 42.667 252.793 42.667 512S252.793 981.333 512 981.333 981.333 771.207 981.333 512 771.207 42.667 512 42.667M708.547 543.16l-266.667 176A37.333 37.333 0 0 1 384 688V336.033a37.333 37.333 0 0 1 57.893-31.16l266.667 176a37.333 37.333 0 0 1 0 62.32z"},null,-1),pt=[ut];function mt(p,t){return S(),L("svg",dt,[...pt])}const vt={render:mt},ft={xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:"icon",viewBox:"0 0 1024 1024"},gt=b("path",{fill:"#409EFF",d:"M515.5 91.5C747.4 91.5 936 280.1 936 512S747.4 932.5 515.5 932.5 95 743.9 95 512 283.6 91.5 515.5 91.5m0-87C235.2 4.5 8 231.7 8 512s227.2 507.5 507.5 507.5S1023 792.3 1023 512 795.8 4.5 515.5 4.5"},null,-1),bt=b("path",{fill:"#81888f",d:"m337.7 450.8 84.1 61.2-84.1 61.2zm-28.8-115c-30.1 0-58.2 23.8-58.2 58.1v236.2c0 34.3 28.1 58.1 58.2 58.1 11.5 0 23.3-3.5 33.9-11.2l162.4-118.1c31.9-23.2 31.9-70.7 0-93.8L342.8 347c-10.6-7.7-22.4-11.2-33.9-11.2"},null,-1),yt=b("path",{fill:"#81888f",d:"m529.1 450.8 84.1 61.2-84.1 61.2zm-28.8-115c-30.1 0-58.2 23.8-58.2 58.1v236.2c0 34.3 28.1 58.1 58.2 58.1 11.5 0 23.3-3.5 33.9-11.2l162.4-118.1c31.9-23.2 31.9-70.7 0-93.8L534.2 347c-10.6-7.7-22.4-11.2-33.9-11.2"},null,-1),wt=b("path",{fill:"#81888f",d:"M736.8 367c-24 0-43.5 19.5-43.5 43.5v203c0 24 19.5 43.5 43.5 43.5s43.5-19.5 43.5-43.5v-203c0-24-19.5-43.5-43.5-43.5"},null,-1),Ct=[gt,bt,yt,wt];function _t(p,t){return S(),L("svg",ft,[...Ct])}const xt={render:_t},St={xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",class:"icon",viewBox:"0 0 1024 1024"},Et=b("path",{fill:"#409EFF",d:"M512 90.3c231.9 0 420.5 188.6 420.5 420.5S743.9 931.3 512 931.3 91.5 742.7 91.5 510.8 280.1 90.3 512 90.3m0-87C231.7 3.3 4.5 230.5 4.5 510.8s227.2 507.5 507.5 507.5 507.5-227.2 507.5-507.5S792.3 3.3 512 3.3"},null,-1),kt=b("path",{fill:"#81888f",d:"M689.8 449.7V572l-84.1-61.2zm28.8-115.1c-11.5 0-23.3 3.5-33.9 11.2L522.3 463.9c-31.9 23.2-31.9 70.6 0 93.8l162.4 118.1c10.6 7.7 22.4 11.2 33.9 11.2 30.1 0 58.2-23.8 58.2-58.1V392.7c0-34.3-28.1-58.1-58.2-58.1"},null,-1),Mt=b("path",{fill:"#81888f",d:"M498.4 449.7V572l-84.1-61.2zm28.8-115.1c-11.5 0-23.3 3.5-33.9 11.2L330.9 463.9c-31.9 23.2-31.9 70.6 0 93.8l162.4 118.1c10.6 7.7 22.4 11.2 33.9 11.2 30.1 0 58.2-23.8 58.2-58.1V392.7c0-34.3-28.1-58.1-58.2-58.1"},null,-1),Tt=b("path",{fill:"#81888f",d:"M290.7 365.8c-24 0-43.5 19.5-43.5 43.5v203c0 24 19.5 43.5 43.5 43.5s43.5-19.5 43.5-43.5v-203c0-24-19.5-43.5-43.5-43.5"},null,-1),Pt=[Et,kt,Mt,Tt];function Dt(p,t){return S(),L("svg",St,[...Pt])}const Rt={render:Dt};var Lt={VITE_PORT:"8848",VITE_HIDE_HOME:"false",VITE_PUBLIC_PATH:"/vue-pure-admin/",VITE_ROUTER_HISTORY:"hash",VITE_CDN:"false",VITE_COMPRESSION:"none",BASE_URL:"/vue-pure-admin/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Wt={class:"card-header"},$t={class:"font-medium"},Ot=b("span",{class:"text-[red]"}," （温馨提示：音频默认最大声音，播放时请调低电脑声音，以免影响到您） ",-1),Nt={class:"w-8/12 !m-auto !mt-[20px]","element-loading-background":"transparent"},At={class:"flex justify-between"},Bt=b("span",{class:"text-[#81888f]"},"00:00",-1),It={class:"text-4xl mt-2"},Vt={class:"text-[#81888f]"},zt={class:"flex mt-2 w-[180px] justify-around m-auto"},Ht=Q({name:"Wavesurfer",__name:"index",setup(p){const t=R(!0),e=R(null),i=R(),s=R(),n=R(),r=R(),o=R(!1),{VITE_PUBLIC_PATH:h}=Lt,a=`${h}audio/海阔天空.mp3`;function l(){e.value=W.create({container:i.value,height:"auto",waveColor:"rgb(200, 0, 200)",progressColor:"rgb(100, 0, 100)",cursorColor:"rgb(64, 158, 255)",cursorWidth:4,url:a}),e.value.on("decode",()=>t.value=!1),e.value.on("ready",()=>{if(!e.value)return;const{decodedData:c}=e.value;n.value=c.duration;const{m:d,s:u}=F(c.duration);s.value=`${d}:${u}`,e.value.setTime(c.duration/2)}),e.value.on("timeupdate",c=>{if(c>n.value)return;const{m:d,s:u}=F(c);r.value=`${d}:${u}`}),e.value.on("play",()=>o.value=!0),e.value.on("pause",()=>o.value=!1)}return Z(l),tt(()=>{e.value&&(e.value.destroy(),e.value=null)}),(c,d)=>{const u=U("el-link"),m=U("el-card"),v=N("tippy"),_=N("longpress"),C=N("motion-pop"),w=N("loading");return S(),V(m,{shadow:"never"},{header:O(()=>[b("div",Wt,[b("span",$t,[z(" 音频可视化，采用开源的 "),A(u,{href:"https://wavesurfer-js.org/",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:O(()=>[z(" wavesurfer.js ")]),_:1}),Ot])]),A(u,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/able/wavesurfer",target:"_blank"},{default:O(()=>[z(" 代码位置 src/views/able/wavesurfer ")]),_:1})]),default:O(()=>[M((S(),L("div",Nt,[b("div",{ref_key:"wavesurferRef",ref:i},null,512),M(b("div",At,[Bt,b("h1",It,q(r.value),1),b("span",Vt,q(s.value),1)],512),[[G,s.value]]),M(b("div",zt,[M(A(B(Rt),{class:"cursor-pointer"},null,512),[[v,{content:"快退（可长按）",placement:"bottom"}],[_,()=>{var y;return(y=e.value)==null?void 0:y.skip(-1)},"0:100"]]),M((S(),L("div",{class:"cursor-pointer",onClick:d[0]||(d[0]=y=>{var x;return(x=e.value)==null?void 0:x.playPause()})},[o.value?M((S(),V(B(ct),{key:0},null,512)),[[C]]):M((S(),V(B(vt),{key:1},null,512)),[[C]])])),[[v,{content:o.value?"暂停":"播放",placement:"bottom"}]]),M(A(B(xt),{class:"cursor-pointer"},null,512),[[v,{content:"快进（可长按）",placement:"bottom"}],[_,()=>{var y;return(y=e.value)==null?void 0:y.skip(1)},"0:100"]])],512),[[G,s.value]])])),[[w,t.value]])]),_:1})}}});export{Ht as default};