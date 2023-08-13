import{aO as Ye,aP as Ct,aQ as Jt,aR as Zt,aS as Gt,d as P,o as _t,c as $t,a as ut,aI as Ae,aT as Qt,i as I,X as w,V as v,az as E,Z as Se,aB as er,a7 as u,aU as ie,aV as ne,aW as se,aX as ge,aY as oe,aZ as we,a_ as me,s as R,a$ as ye,b0 as xe,aF as tr,b1 as ct,t as dt,b2 as ze,b3 as Je,b4 as Ze,b5 as Ge,b6 as rr,Y as nr,aA as j,$ as or,b7 as ar,a2 as ce,b8 as lr,aE as Re,a0 as ve,a1 as Me,w as ue,b9 as vt,a4 as Oe,a5 as zt,a6 as Qe,af as ir,a8 as sr,a9 as ur,ab as cr,ac as ht,ad as De,ae as Rt,ag as Z,l as Q,aq as dr,ba as hr,g as Ne,bb as Xe,bc as fr,F as Et,bd as ft,aC as gr,x as Pe,be as mr,bf as vr,bg as pr,bh as br,bi as pt,bj as wr,bk as yr,bl as At,bm as je,bn as xr,bo as Sr,aG as bt,bp as kr,bq as Cr,br as _r,bs as $r,aJ as zr,bt as Rr,ah as Er,_ as Ar,h as d,k as ee,L as Ir,bu as Br,K as It,N as Bt,J as Pr,aw as Ur,bv as Fr,I as Mr,m as wt,ai as Dr,bw as Nr,R as Or}from"./index-ed258134.js";import{m as jr}from"./marked.esm-8714d5d4.js";import{c as Pt,d as Ut,N as Vr}from"./DatePicker-42405e37.js";import{a as Ft,N as G}from"./FormItem-a7c928e6.js";import{N as yt}from"./InputNumber-40ead15f.js";import{N as Hr}from"./ButtonGroup-0c60e169.js";import{u as Tr}from"./use-async-monaco-40d09bb9.js";import{N as qr}from"./Switch-bfa6703a.js";import{N as Lr}from"./DynamicInput-3aaf0a58.js";import{N as xt}from"./Image-0603570d.js";import{N as Wr}from"./Tooltip-792b7857.js";import{N as Yr}from"./Select-b3fce3a9.js";import{H as Mt}from"./rounded-button-f9bd8ca1.js";import{P as Xr}from"./toggle-4b6e3fb3.js";import{r as Kr}from"./vue.runtime.esm-bundler-b9eebf6c.js";import{l as Jr}from"./js-yaml-e14800c0.js";function Zr(){}function Gr(e,t,r,n){for(var o=e.length,a=r+(n?1:-1);n?a--:++a<o;)if(t(e[a],a,e))return a;return-1}function Qr(e){return e!==e}function en(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function tn(e,t,r){return t===t?en(e,t,r):Gr(e,Qr,r)}function rn(e,t){var r=e==null?0:e.length;return!!r&&tn(e,t,0)>-1}function nn(e,t,r){for(var n=-1,o=e==null?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function on(e){return e===void 0}var an=1/0,ln=Ye&&1/Ct(new Ye([,-0]))[1]==an?function(e){return new Ye(e)}:Zr;const sn=ln;var un=200;function cn(e,t,r){var n=-1,o=rn,a=e.length,i=!0,l=[],s=l;if(r)i=!1,o=nn;else if(a>=un){var m=t?null:sn(e);if(m)return Ct(m);i=!1,o=Zt,s=new Jt}else s=t?[]:l;e:for(;++n<a;){var f=e[n],y=t?t(f):f;if(f=r||f!==0?f:0,i&&y===y){for(var U=s.length;U--;)if(s[U]===y)continue e;t&&s.push(y),l.push(f)}else o(s,y,r)||(s!==l&&s.push(y),l.push(f))}return l}function dn(e,t){return e&&e.length?cn(e,Gt(t)):[]}const hn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},fn=ut("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",fill:"currentColor"},null,-1),gn=ut("path",{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7c-21.2 8.1-39.2 22.3-52.1 40.9c-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5c.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0a40 40 0 1 0-80 0z",fill:"currentColor"},null,-1),mn=[fn,gn],vn=P({name:"QuestionCircleOutlined",render:function(t,r){return _t(),$t("svg",hn,mn)}}),pn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},bn=ut("path",{d:"M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z",fill:"currentColor"},null,-1),wn=[bn],ia=P({name:"SlidersH",render:function(t,r){return _t(),$t("svg",pn,wn)}});var Dt={};Object.defineProperty(Dt,"__esModule",{value:!0});const Ue=Kr,yn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},xn=(0,Ue.createElementVNode)("path",{d:"M446.2 270.4c-6.2-19-26.9-29.1-46-22.9l-45.4 15.1l-30.3-90l45.4-15.1c19.1-6.2 29.1-26.8 23-45.9c-6.2-19-26.9-29.1-46-22.9l-45.4 15.1l-15.7-47c-6.2-19-26.9-29.1-46-22.9c-19.1 6.2-29.1 26.8-23 45.9l15.7 47l-93.4 31.2l-15.7-47c-6.2-19-26.9-29.1-46-22.9c-19.1 6.2-29.1 26.8-23 45.9l15.7 47l-45.3 15c-19.1 6.2-29.1 26.8-23 45.9c5 14.5 19.1 24 33.6 24.6c6.8 1 12-1.6 57.7-16.8l30.3 90L78 354.8c-19 6.2-29.1 26.9-23 45.9c5 14.5 19.1 24 33.6 24.6c6.8 1 12-1.6 57.7-16.8l15.7 47c5.9 16.9 24.7 29 46 22.9c19.1-6.2 29.1-26.8 23-45.9l-15.7-47l93.6-31.3l15.7 47c5.9 16.9 24.7 29 46 22.9c19.1-6.2 29.1-26.8 23-45.9l-15.7-47l45.4-15.1c19-6 29.1-26.7 22.9-45.7zm-254.1 47.2l-30.3-90.2l93.5-31.3l30.3 90.2l-93.5 31.3z",fill:"currentColor"},null,-1),Sn=[xn];var kn=Dt.default=(0,Ue.defineComponent)({name:"SlackHash",render:function(t,r){return(0,Ue.openBlock)(),(0,Ue.createElementBlock)("svg",yn,Sn)}});function Nt(e,t,r){t/=100,r/=100;const n=t*Math.min(r,1-r)+r;return[e,n?(2-2*r/n)*100:0,n*100]}function Fe(e,t,r){t/=100,r/=100;const n=r-r*t/2,o=Math.min(n,1-n);return[e,o?(r-n)/o*100:0,n*100]}function le(e,t,r){t/=100,r/=100;let n=(o,a=(o+e/60)%6)=>r-r*t*Math.max(Math.min(a,4-a,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function et(e,t,r){e/=255,t/=255,r/=255;let n=Math.max(e,t,r),o=n-Math.min(e,t,r),a=o&&(n==e?(t-r)/o:n==t?2+(r-e)/o:4+(e-t)/o);return[60*(a<0?a+6:a),n&&o/n*100,n*100]}function tt(e,t,r){e/=255,t/=255,r/=255;let n=Math.max(e,t,r),o=n-Math.min(e,t,r),a=1-Math.abs(n+n-o-1),i=o&&(n==e?(t-r)/o:n==t?2+(r-e)/o:4+(e-t)/o);return[60*(i<0?i+6:i),a?o/a*100:0,(n+n-o)*50]}function rt(e,t,r){t/=100,r/=100;let n=t*Math.min(r,1-r),o=(a,i=(a+e/30)%12)=>r-n*Math.max(Math.min(i-3,9-i,1),-1);return[o(0)*255,o(8)*255,o(4)*255]}function Cn(e,t){const r=Ae(Qt,null);return I(()=>e.hljs||r?.mergedHljsRef.value)}const _n=w("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[v(">",[w("input",[v("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),w("button",[v("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[E("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),v("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[E("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),v("*",[v("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[v(">",[w("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),w("base-selection",[w("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),w("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),E("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),v("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[v(">",[w("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),w("base-selection",[w("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),w("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),E("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),$n={},zn=P({name:"InputGroup",props:$n,setup(e){const{mergedClsPrefixRef:t}=Se(e);return er("-input-group",_n,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:`${e}-input-group`},this.$slots)}});function Rn(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Ee(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function En(e){return e=Math.round(e),e>=360?359:e<0?0:e}function An(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const In={rgb:{hex(e){return ie(ne(e))},hsl(e){const[t,r,n,o]=ne(e);return se([...tt(t,r,n),o])},hsv(e){const[t,r,n,o]=ne(e);return ge([...et(t,r,n),o])}},hex:{rgb(e){return oe(ne(e))},hsl(e){const[t,r,n,o]=ne(e);return se([...tt(t,r,n),o])},hsv(e){const[t,r,n,o]=ne(e);return ge([...et(t,r,n),o])}},hsl:{hex(e){const[t,r,n,o]=we(e);return ie([...rt(t,r,n),o])},rgb(e){const[t,r,n,o]=we(e);return oe([...rt(t,r,n),o])},hsv(e){const[t,r,n,o]=we(e);return ge([...Nt(t,r,n),o])}},hsv:{hex(e){const[t,r,n,o]=me(e);return ie([...le(t,r,n),o])},rgb(e){const[t,r,n,o]=me(e);return oe([...le(t,r,n),o])},hsl(e){const[t,r,n,o]=me(e);return se([...Fe(t,r,n),o])}}};function Ot(e,t,r){return r=r||Ee(e),r?r===t?e:In[r][t](e):null}const be="12px",Bn=12,he="6px",Pn=6,Un="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Fn=P({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=R(null);function r(a){t.value&&(ye("mousemove",document,n),ye("mouseup",document,o),n(a))}function n(a){const{value:i}=t;if(!i)return;const{width:l,left:s}=i.getBoundingClientRect(),m=En((a.clientX-s-Pn)/(l-Bn)*360);e.onUpdateHue(m)}function o(){var a;xe("mousemove",document,n),xe("mouseup",document,o),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,handleMouseDown:r}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-slider`,style:{height:be,borderRadius:he}},u("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Un,height:be,borderRadius:he,position:"relative"},onMousedown:this.handleMouseDown},u("div",{style:{position:"absolute",left:he,right:he,top:0,bottom:0}},u("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${he})`,borderRadius:he,width:be,height:be}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:he,width:be,height:be}})))))}}),$e="12px",Mn=12,fe="6px",Dn=P({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=R(null);function r(a){!t.value||!e.rgba||(ye("mousemove",document,n),ye("mouseup",document,o),n(a))}function n(a){const{value:i}=t;if(!i)return;const{width:l,left:s}=i.getBoundingClientRect(),m=(a.clientX-s)/(l-Mn);e.onUpdateAlpha(An(m))}function o(){var a;xe("mousemove",document,n),xe("mouseup",document,o),(a=e.onComplete)===null||a===void 0||a.call(e)}return{railRef:t,railBackgroundImage:I(()=>{const{rgba:a}=e;return a?`linear-gradient(to right, rgba(${a[0]}, ${a[1]}, ${a[2]}, 0) 0%, rgba(${a[0]}, ${a[1]}, ${a[2]}, 1) 100%)`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:$e,borderRadius:fe},onMousedown:this.handleMouseDown},u("div",{style:{borderRadius:fe,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},u("div",{class:`${e}-color-picker-checkboard`}),u("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&u("div",{style:{position:"absolute",left:fe,right:fe,top:0,bottom:0}},u("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${fe})`,borderRadius:fe,width:$e,height:$e}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:oe(this.rgba),borderRadius:fe,width:$e,height:$e}}))))}}),Ie="12px",Be="6px",Nn=P({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=R(null);function r(a){t.value&&(ye("mousemove",document,n),ye("mouseup",document,o),n(a))}function n(a){const{value:i}=t;if(!i)return;const{width:l,height:s,left:m,bottom:f}=i.getBoundingClientRect(),y=(f-a.clientY)/s,U=(a.clientX-m)/l,_=100*(U>1?1:U<0?0:U),B=100*(y>1?1:y<0?0:y);e.onUpdateSV(_,B)}function o(){var a;xe("mousemove",document,n),xe("mouseup",document,o),(a=e.onComplete)===null||a===void 0||a.call(e)}return{palleteRef:t,handleColor:I(()=>{const{rgba:a}=e;return a?`rgb(${a[0]}, ${a[1]}, ${a[2]})`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},u("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),u("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&u("div",{class:`${e}-color-picker-handle`,style:{width:Ie,height:Ie,borderRadius:Be,left:`calc(${this.displayedSv[0]}% - ${Be})`,bottom:`calc(${this.displayedSv[1]}% - ${Be})`}},u("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Be,width:Ie,height:Ie}})))}}),gt=tr("n-color-picker");function On(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function jn(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Vn(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Hn(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Tn(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const qn={paddingSmall:"0 4px"},St=P({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=R(""),{themeRef:r}=Ae(gt,null);ct(()=>{t.value=n()});function n(){const{value:i}=e;if(i===null)return"";const{label:l}=e;return l==="HEX"?i:l==="A"?`${Math.floor(i*100)}%`:String(Math.floor(i))}function o(i){t.value=i}function a(i){let l,s;switch(e.label){case"HEX":s=Hn(i),s&&e.onUpdateValue(i),t.value=n();break;case"H":l=jn(i),l===!1?t.value=n():e.onUpdateValue(l);break;case"S":case"L":case"V":l=Vn(i),l===!1?t.value=n():e.onUpdateValue(l);break;case"A":l=Tn(i),l===!1?t.value=n():e.onUpdateValue(l);break;case"R":case"G":case"B":l=On(i),l===!1?t.value=n():e.onUpdateValue(l);break}}return{mergedTheme:r,inputValue:t,handleInputChange:a,handleInputUpdateValue:o}},render(){const{mergedTheme:e}=this;return u(dt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:qn,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Ln=P({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,r){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?ie:ze)(r));return}let o;switch(e.valueArr===null?o=[0,0,0,0]:o=Array.from(e.valueArr),e.mode){case"hsv":o[t]=r,e.onUpdateValue((n?ge:Ge)(o));break;case"rgb":o[t]=r,e.onUpdateValue((n?oe:Ze)(o));break;case"hsl":o[t]=r,e.onUpdateValue((n?se:Je)(o));break}}}},render(){const{clsPrefix:e,modes:t}=this;return u("div",{class:`${e}-color-picker-input`},u("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),u(zn,null,{default:()=>{const{mode:r,valueArr:n,showAlpha:o}=this;if(r==="hex"){let a=null;try{a=n===null?null:(o?ie:ze)(n)}catch{}return u(St,{label:"HEX",showAlpha:o,value:a,onUpdateValue:i=>{this.handleUnitUpdateValue(0,i)}})}return(r+(o?"a":"")).split("").map((a,i)=>u(St,{label:a.toUpperCase(),value:n===null?null:n[i],onUpdateValue:l=>{this.handleUnitUpdateValue(i,l)}}))}}))}}),Wn=P({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:r}=Ae(gt,null);return()=>{const{hsla:n,value:o,clsPrefix:a,onClick:i,disabled:l}=e,s=t.label||r.value;return u("div",{class:[`${a}-color-picker-trigger`,l&&`${a}-color-picker-trigger--disabled`],onClick:l?void 0:i},u("div",{class:`${a}-color-picker-trigger__fill`},u("div",{class:`${a}-color-picker-checkboard`}),u("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?se(n):""}}),o&&n?u("div",{class:`${a}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},s?s(o):o):null))}}});function Yn(e,t){if(t==="hsv"){const[r,n,o,a]=me(e);return oe([...le(r,n,o),a])}return e}function Xn(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const Kn=P({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=I(()=>e.swatches.map(a=>{const i=Ee(a);return{value:a,mode:i,legalValue:Yn(a,i)}}));function r(a){const{mode:i}=e;let{value:l,mode:s}=a;return s||(s="hex",/^[a-zA-Z]+$/.test(l)?l=Xn(l):(rr("color-picker",`color ${l} in swatches is invalid.`),l="#000000")),s===i?l:Ot(l,i,s)}function n(a){e.onUpdateColor(r(a))}function o(a,i){a.key==="Enter"&&n(i)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:o}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>u("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:r=>{this.handleSwatchKeyDown(r,t)}},u("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Jn=P({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Ee(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(r){var n;const o=r.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,Ot(o.toUpperCase(),e.mode,"hex")),r.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-color-picker-preview__preview`},u("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),u("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Zn=v([w("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),w("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[nr(),w("input",`
 text-align: center;
 `)]),w("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[v("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),w("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[E("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),v("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),w("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[E("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),w("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[E("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[j("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),w("color-picker-preview",`
 display: flex;
 `,[E("sliders",`
 flex: 1 0 auto;
 `),E("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),E("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),E("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),w("color-picker-input",`
 display: flex;
 align-items: center;
 `,[w("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),E("mode",`
 width: 72px;
 text-align: center;
 `)]),w("color-picker-control",`
 padding: 12px;
 `),w("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[w("button","margin-left: 8px;")]),w("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[E("value",`
 white-space: nowrap;
 position: relative;
 `),E("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),j("disabled","cursor: not-allowed"),w("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[v("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),w("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[w("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[E("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),v("&:focus",`
 outline: none;
 `,[E("fill",[v("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Gn=Object.assign(Object.assign({},ce.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Qe.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Qn=P({name:"ColorPicker",props:Gn,setup(e,{slots:t}){const r=R(null);let n=null;const o=or(e),{mergedSizeRef:a,mergedDisabledRef:i}=o,{localeRef:l}=ar("global"),{mergedClsPrefixRef:s,namespaceRef:m,inlineThemeDisabled:f}=Se(e),y=ce("ColorPicker","-color-picker",Zn,lr,e,s);Re(gt,{themeRef:y,renderLabelRef:ve(e,"renderLabel"),colorPickerSlots:t});const U=R(e.defaultShow),_=Me(ve(e,"show"),U);function B(c){const{onUpdateShow:z,"onUpdate:show":N}=e;z&&Z(z,c),N&&Z(N,c),U.value=c}const{defaultValue:F}=e,V=R(F===void 0?Rn(e.modes,e.showAlpha):F),A=Me(ve(e,"value"),V),h=R([A.value]),g=R(0),k=I(()=>Ee(A.value)),{modes:p}=e,b=R(Ee(A.value)||p[0]||"rgb");function x(){const{modes:c}=e,{value:z}=b,N=c.findIndex(O=>O===z);~N?b.value=c[(N+1)%c.length]:b.value="rgb"}let C,$,S,D,L,Y,K,q;const J=I(()=>{const{value:c}=A;if(!c)return null;switch(k.value){case"hsv":return me(c);case"hsl":return[C,$,S,q]=we(c),[...Nt(C,$,S),q];case"rgb":case"hex":return[L,Y,K,q]=ne(c),[...et(L,Y,K),q]}}),te=I(()=>{const{value:c}=A;if(!c)return null;switch(k.value){case"rgb":case"hex":return ne(c);case"hsv":return[C,$,D,q]=me(c),[...le(C,$,D),q];case"hsl":return[C,$,S,q]=we(c),[...rt(C,$,S),q]}}),ke=I(()=>{const{value:c}=A;if(!c)return null;switch(k.value){case"hsl":return we(c);case"hsv":return[C,$,D,q]=me(c),[...Fe(C,$,D),q];case"rgb":case"hex":return[L,Y,K,q]=ne(c),[...tt(L,Y,K),q]}}),Ve=I(()=>{switch(b.value){case"rgb":case"hex":return te.value;case"hsv":return J.value;case"hsl":return ke.value}}),pe=R(0),Ce=R(1),_e=R([0,0]);function He(c,z){const{value:N}=J,O=pe.value,T=N?N[3]:1;_e.value=[c,z];const{showAlpha:M}=e;switch(b.value){case"hsv":H((M?ge:Ge)([O,c,z,T]),"cursor");break;case"hsl":H((M?se:Je)([...Fe(O,c,z),T]),"cursor");break;case"rgb":H((M?oe:Ze)([...le(O,c,z),T]),"cursor");break;case"hex":H((M?ie:ze)([...le(O,c,z),T]),"cursor");break}}function Te(c){pe.value=c;const{value:z}=J;if(!z)return;const[,N,O,T]=z,{showAlpha:M}=e;switch(b.value){case"hsv":H((M?ge:Ge)([c,N,O,T]),"cursor");break;case"rgb":H((M?oe:Ze)([...le(c,N,O),T]),"cursor");break;case"hex":H((M?ie:ze)([...le(c,N,O),T]),"cursor");break;case"hsl":H((M?se:Je)([...Fe(c,N,O),T]),"cursor");break}}function qe(c){switch(b.value){case"hsv":[C,$,D]=J.value,H(ge([C,$,D,c]),"cursor");break;case"rgb":[L,Y,K]=te.value,H(oe([L,Y,K,c]),"cursor");break;case"hex":[L,Y,K]=te.value,H(ie([L,Y,K,c]),"cursor");break;case"hsl":[C,$,S]=ke.value,H(se([C,$,S,c]),"cursor");break}Ce.value=c}function H(c,z){z==="cursor"?n=c:n=null;const{nTriggerFormChange:N,nTriggerFormInput:O}=o,{onUpdateValue:T,"onUpdate:value":M}=e;T&&Z(T,c),M&&Z(M,c),N(),O(),V.value=c}function Le(c){H(c,"input"),dr(ae)}function ae(c=!0){const{value:z}=A;if(z){const{nTriggerFormChange:N,nTriggerFormInput:O}=o,{onComplete:T}=e;T&&T(z);const{value:M}=h,{value:X}=g;c&&(M.splice(X+1,M.length,z),g.value=X+1),N(),O()}}function Vt(){const{value:c}=g;c-1<0||(H(h.value[c-1],"input"),ae(!1),g.value=c-1)}function Ht(){const{value:c}=g;c<0||c+1>=h.value.length||(H(h.value[c+1],"input"),ae(!1),g.value=c+1)}function Tt(){H(null,"input"),B(!1)}function qt(){const{value:c}=A,{onConfirm:z}=e;z&&z(c),B(!1)}const Lt=I(()=>g.value>=1),Wt=I(()=>{const{value:c}=h;return c.length>1&&g.value<c.length-1});ue(_,c=>{c||(h.value=[A.value],g.value=0)}),ct(()=>{if(!(n&&n===A.value)){const{value:c}=J;c&&(pe.value=c[0],Ce.value=c[3],_e.value=[c[1],c[2]])}n=null});const We=I(()=>{const{value:c}=a,{common:{cubicBezierEaseInOut:z},self:{textColor:N,color:O,panelFontSize:T,boxShadow:M,border:X,borderRadius:W,dividerColor:de,[vt("height",c)]:Xt,[vt("fontSize",c)]:Kt}}=y.value;return{"--n-bezier":z,"--n-text-color":N,"--n-color":O,"--n-panel-font-size":T,"--n-font-size":Kt,"--n-box-shadow":M,"--n-border":X,"--n-border-radius":W,"--n-height":Xt,"--n-divider-color":de}}),re=f?Oe("color-picker",I(()=>a.value[0]),We,e):void 0;function Yt(){var c;const{value:z}=te,{value:N}=pe,{internalActions:O,modes:T,actions:M}=e,{value:X}=y,{value:W}=s;return u("div",{class:[`${W}-color-picker-panel`,re?.themeClass.value],onDragstart:de=>{de.preventDefault()},style:f?void 0:We.value},u("div",{class:`${W}-color-picker-control`},u(Nn,{clsPrefix:W,rgba:z,displayedHue:N,displayedSv:_e.value,onUpdateSV:He,onComplete:ae}),u("div",{class:`${W}-color-picker-preview`},u("div",{class:`${W}-color-picker-preview__sliders`},u(Fn,{clsPrefix:W,hue:N,onUpdateHue:Te,onComplete:ae}),e.showAlpha?u(Dn,{clsPrefix:W,rgba:z,alpha:Ce.value,onUpdateAlpha:qe,onComplete:ae}):null),e.showPreview?u(Jn,{clsPrefix:W,mode:b.value,color:te.value&&ze(te.value),onUpdateColor:de=>{H(de,"input")}}):null),u(Ln,{clsPrefix:W,showAlpha:e.showAlpha,mode:b.value,modes:T,onUpdateMode:x,value:A.value,valueArr:Ve.value,onUpdateValue:Le}),((c=e.swatches)===null||c===void 0?void 0:c.length)&&u(Kn,{clsPrefix:W,mode:b.value,swatches:e.swatches,onUpdateColor:de=>{H(de,"input")}})),M?.length?u("div",{class:`${W}-color-picker-action`},M.includes("confirm")&&u(Q,{size:"small",onClick:qt,theme:X.peers.Button,themeOverrides:X.peerOverrides.Button},{default:()=>l.value.confirm}),M.includes("clear")&&u(Q,{size:"small",onClick:Tt,disabled:!A.value,theme:X.peers.Button,themeOverrides:X.peerOverrides.Button},{default:()=>l.value.clear})):null,t.action?u("div",{class:`${W}-color-picker-action`},{default:t.action}):O?u("div",{class:`${W}-color-picker-action`},O.includes("undo")&&u(Q,{size:"small",onClick:Vt,disabled:!Lt.value,theme:X.peers.Button,themeOverrides:X.peerOverrides.Button},{default:()=>l.value.undo}),O.includes("redo")&&u(Q,{size:"small",onClick:Ht,disabled:!Wt.value,theme:X.peers.Button,themeOverrides:X.peerOverrides.Button},{default:()=>l.value.redo})):null)}return{mergedClsPrefix:s,namespace:m,selfRef:r,hsla:ke,rgba:te,mergedShow:_,mergedDisabled:i,isMounted:zt(),adjustedTo:Qe(e),mergedValue:A,handleTriggerClick(){B(!0)},handleClickOutside(c){var z;!((z=r.value)===null||z===void 0)&&z.contains(ir(c))||B(!1)},renderPanel:Yt,cssVars:f?void 0:We,themeClass:re?.themeClass,onRender:re?.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:r}=this;return r?.(),u("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},u(sr,null,{default:()=>[u(ur,null,{default:()=>u(Wn,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),u(cr,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Qe.tdkey,to:this.adjustedTo},{default:()=>u(ht,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?De(this.renderPanel(),[[Rt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),eo=e=>{const{textColor2:t,fontSize:r,fontWeightStrong:n,textColor3:o}=e;return{textColor:t,fontSize:r,fontWeightStrong:n,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:o}},to={name:"Code",common:hr,self:eo},ro=to,no=v([w("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[j("show-line-numbers",`
 display: flex;
 `),E("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),j("word-wrap",[v("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),v("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),v("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),oo=Object.assign(Object.assign({},ce.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ao=P({name:"Code",props:oo,setup(e,{slots:t}){const{internalNoHighlight:r}=e,{mergedClsPrefixRef:n,inlineThemeDisabled:o}=Se(),a=R(null),i=r?{value:void 0}:Cn(e),l=(_,B,F)=>{const{value:V}=i;return!V||!(_&&V.getLanguage(_))?null:V.highlight(F?B.trim():B,{language:_}).value},s=I(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),m=()=>{if(t.default)return;const{value:_}=a;if(!_)return;const{language:B}=e,F=e.uri?window.decodeURIComponent(e.code):e.code;if(B){const A=l(B,F,e.trim);if(A!==null){if(e.inline)_.innerHTML=A;else{const h=_.querySelector(".__code__");h&&_.removeChild(h);const g=document.createElement("pre");g.className="__code__",g.innerHTML=A,_.appendChild(g)}return}}if(e.inline){_.textContent=F;return}const V=_.querySelector(".__code__");if(V)V.textContent=F;else{const A=document.createElement("pre");A.className="__code__",A.textContent=F,_.innerHTML="",_.appendChild(A)}};Ne(m),ue(ve(e,"language"),m),ue(ve(e,"code"),m),r||ue(i,m);const f=ce("Code","-code",no,ro,e,n),y=I(()=>{const{common:{cubicBezierEaseInOut:_,fontFamilyMono:B},self:{textColor:F,fontSize:V,fontWeightStrong:A,lineNumberTextColor:h,"mono-3":g,"hue-1":k,"hue-2":p,"hue-3":b,"hue-4":x,"hue-5":C,"hue-5-2":$,"hue-6":S,"hue-6-2":D}}=f.value,{internalFontSize:L}=e;return{"--n-font-size":L?`${L}px`:V,"--n-font-family":B,"--n-font-weight-strong":A,"--n-bezier":_,"--n-text-color":F,"--n-mono-3":g,"--n-hue-1":k,"--n-hue-2":p,"--n-hue-3":b,"--n-hue-4":x,"--n-hue-5":C,"--n-hue-5-2":$,"--n-hue-6":S,"--n-hue-6-2":D,"--n-line-number-text-color":h}}),U=o?Oe("code",I(()=>`${e.internalFontSize||"a"}`),y,e):void 0;return{mergedClsPrefix:n,codeRef:a,mergedShowLineNumbers:s,lineNumbers:I(()=>{let _=1;const B=[];let F=!1;for(const V of e.code)V===`
`?(F=!0,B.push(_++)):F=!1;return F||B.push(_++),B.join(`
`)}),cssVars:o?void 0:y,themeClass:U?.themeClass,onRender:U?.onRender}},render(){var e,t;const{mergedClsPrefix:r,wordWrap:n,mergedShowLineNumbers:o,onRender:a}=this;return a?.(),u("code",{class:[`${r}-code`,this.themeClass,n&&`${r}-code--word-wrap`,o&&`${r}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},o?u("pre",{class:`${r}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),lo=w("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[Xe("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[Xe("no-title",`
 display: flex;
 align-items: center;
 `)]),E("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),j("title-position-left",[E("line",[j("left",{width:"28px"})])]),j("title-position-right",[E("line",[j("right",{width:"28px"})])]),j("dashed",[E("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),j("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),E("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),Xe("dashed",[E("line",{backgroundColor:"var(--n-color)"})]),j("dashed",[E("line",{borderColor:"var(--n-color)"})]),j("vertical",{backgroundColor:"var(--n-color)"})]),io=Object.assign(Object.assign({},ce.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),kt=P({name:"Divider",props:io,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=Se(e),n=ce("Divider","-divider",lo,fr,e,t),o=I(()=>{const{common:{cubicBezierEaseInOut:i},self:{color:l,textColor:s,fontWeight:m}}=n.value;return{"--n-bezier":i,"--n-color":l,"--n-text-color":s,"--n-font-weight":m}}),a=r?Oe("divider",void 0,o,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:o,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;const{$slots:t,titlePlacement:r,vertical:n,dashed:o,cssVars:a,mergedClsPrefix:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{role:"separator",class:[`${i}-divider`,this.themeClass,{[`${i}-divider--vertical`]:n,[`${i}-divider--no-title`]:!t.default,[`${i}-divider--dashed`]:o,[`${i}-divider--title-position-${r}`]:t.default&&r}],style:a},n?null:u("div",{class:`${i}-divider__line ${i}-divider__line--left`}),!n&&t.default?u(Et,null,u("div",{class:`${i}-divider__title`},this.$slots),u("div",{class:`${i}-divider__line ${i}-divider__line--right`})):null)}}),so=P({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=R(!!e.show),r=R(null),n=Ae(ft);let o=0,a="",i=null;const l=R(!1),s=R(!1),m=I(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:f,mergedRtlRef:y}=Se(e),U=gr("Drawer",y,f),_=x=>{s.value=!0,o=m.value?x.clientY:x.clientX,a=document.body.style.cursor,document.body.style.cursor=m.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",h),document.body.addEventListener("mouseleave",k),document.body.addEventListener("mouseup",g)},B=()=>{i!==null&&(window.clearTimeout(i),i=null),s.value?l.value=!0:i=window.setTimeout(()=>{l.value=!0},300)},F=()=>{i!==null&&(window.clearTimeout(i),i=null),l.value=!1},{doUpdateHeight:V,doUpdateWidth:A}=n,h=x=>{var C,$;if(s.value)if(m.value){let S=((C=r.value)===null||C===void 0?void 0:C.offsetHeight)||0;const D=o-x.clientY;S+=e.placement==="bottom"?D:-D,V(S),o=x.clientY}else{let S=(($=r.value)===null||$===void 0?void 0:$.offsetWidth)||0;const D=o-x.clientX;S+=e.placement==="right"?D:-D,A(S),o=x.clientX}},g=()=>{s.value&&(o=0,s.value=!1,document.body.style.cursor=a,document.body.removeEventListener("mousemove",h),document.body.removeEventListener("mouseup",g),document.body.removeEventListener("mouseleave",k))},k=g;ct(()=>{e.show&&(t.value=!0)}),ue(()=>e.show,x=>{x||g()}),Pe(()=>{g()});const p=I(()=>{const{show:x}=e,C=[[pt,x]];return e.showMask||C.push([Rt,e.onClickoutside,void 0,{capture:!0}]),C});function b(){var x;t.value=!1,(x=e.onAfterLeave)===null||x===void 0||x.call(e)}return mr(I(()=>e.blockScroll&&t.value)),Re(vr,r),Re(pr,null),Re(br,null),{bodyRef:r,rtlEnabled:U,mergedClsPrefix:n.mergedClsPrefixRef,isMounted:n.isMountedRef,mergedTheme:n.mergedThemeRef,displayed:t,transitionName:I(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:b,bodyDirectives:p,handleMousedownResizeTrigger:_,handleMouseenterResizeTrigger:B,handleMouseleaveResizeTrigger:F,isDragging:s,isHoverOnResizeTrigger:l}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?De(u("div",{role:"none"},u(wr,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>u(ht,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>De(u("div",yr(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?u("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?u("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):u(At,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[pt,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:uo,cubicBezierEaseOut:co}=je;function ho({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[v(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${uo}`}),v(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${co}`}),v(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),v(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),v(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),v(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:fo,cubicBezierEaseOut:go}=je;function mo({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[v(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${fo}`}),v(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${go}`}),v(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),v(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),v(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),v(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:vo,cubicBezierEaseOut:po}=je;function bo({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[v(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${vo}`}),v(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${po}`}),v(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),v(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),v(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),v(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:wo,cubicBezierEaseOut:yo}=je;function xo({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[v(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${wo}`}),v(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${yo}`}),v(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),v(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),v(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),v(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const So=v([w("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[ho(),mo(),bo(),xo(),j("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),j("native-scrollbar",[w("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),E("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[j("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),w("drawer-content-wrapper",`
 box-sizing: border-box;
 `),w("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[j("native-scrollbar",[w("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),w("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),w("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),w("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[E("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),w("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),j("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[E("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),j("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[E("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),j("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[E("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),j("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[E("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),v("body",[v(">",[w("drawer-container",{position:"fixed"})])]),w("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[v("> *",{pointerEvents:"all"})]),w("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[j("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),xr({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),ko=Object.assign(Object.assign({},ce.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Co=P({name:"Drawer",inheritAttrs:!1,props:ko,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:n}=Se(e),o=zt(),a=ce("Drawer","-drawer",So,Sr,e,t),i=R(e.defaultWidth),l=R(e.defaultHeight),s=Me(ve(e,"width"),i),m=Me(ve(e,"height"),l),f=I(()=>{const{placement:p}=e;return p==="top"||p==="bottom"?"":bt(s.value)}),y=I(()=>{const{placement:p}=e;return p==="left"||p==="right"?"":bt(m.value)}),U=p=>{const{onUpdateWidth:b,"onUpdate:width":x}=e;b&&Z(b,p),x&&Z(x,p),i.value=p},_=p=>{const{onUpdateHeight:b,"onUpdate:width":x}=e;b&&Z(b,p),x&&Z(x,p),l.value=p},B=I(()=>[{width:f.value,height:y.value},e.drawerStyle||""]);function F(p){const{onMaskClick:b,maskClosable:x}=e;x&&h(!1),b&&b(p)}const V=kr();function A(p){var b;(b=e.onEsc)===null||b===void 0||b.call(e),e.show&&e.closeOnEsc&&$r(p)&&!V.value&&h(!1)}function h(p){const{onHide:b,onUpdateShow:x,"onUpdate:show":C}=e;x&&Z(x,p),C&&Z(C,p),b&&!p&&Z(b,p)}Re(ft,{isMountedRef:o,mergedThemeRef:a,mergedClsPrefixRef:t,doUpdateShow:h,doUpdateHeight:_,doUpdateWidth:U});const g=I(()=>{const{common:{cubicBezierEaseInOut:p,cubicBezierEaseIn:b,cubicBezierEaseOut:x},self:{color:C,textColor:$,boxShadow:S,lineHeight:D,headerPadding:L,footerPadding:Y,bodyPadding:K,titleFontSize:q,titleTextColor:J,titleFontWeight:te,headerBorderBottom:ke,footerBorderTop:Ve,closeIconColor:pe,closeIconColorHover:Ce,closeIconColorPressed:_e,closeColorHover:He,closeColorPressed:Te,closeIconSize:qe,closeSize:H,closeBorderRadius:Le,resizableTriggerColorHover:ae}}=a.value;return{"--n-line-height":D,"--n-color":C,"--n-text-color":$,"--n-box-shadow":S,"--n-bezier":p,"--n-bezier-out":x,"--n-bezier-in":b,"--n-header-padding":L,"--n-body-padding":K,"--n-footer-padding":Y,"--n-title-text-color":J,"--n-title-font-size":q,"--n-title-font-weight":te,"--n-header-border-bottom":ke,"--n-footer-border-top":Ve,"--n-close-icon-color":pe,"--n-close-icon-color-hover":Ce,"--n-close-icon-color-pressed":_e,"--n-close-size":H,"--n-close-color-hover":He,"--n-close-color-pressed":Te,"--n-close-icon-size":qe,"--n-close-border-radius":Le,"--n-resize-trigger-color-hover":ae}}),k=n?Oe("drawer",void 0,g,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:B,handleMaskClick:F,handleEsc:A,mergedTheme:a,cssVars:n?void 0:g,themeClass:k?.themeClass,onRender:k?.onRender,isMounted:o}},render(){const{mergedClsPrefix:e}=this;return u(_r,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),De(u("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?u(ht,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?u("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,u(so,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Cr,{zIndex:this.zIndex,enabled:this.show}]])}})}}),_o={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},$o=P({name:"DrawerContent",props:_o,setup(){const e=Ae(ft,null);e||zr("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:n,bodyStyle:o,bodyContentStyle:a,headerStyle:i,footerStyle:l,scrollbarProps:s,closable:m,$slots:f}=this;return u("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},f.header||e||m?u("div",{class:`${t}-drawer-header`,style:i,role:"none"},u("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},f.header!==void 0?f.header():e),m&&u(Rr,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?u("div",{class:`${t}-drawer-body`,style:o,role:"none"},u("div",{class:`${t}-drawer-body-content-wrapper`,style:a,role:"none"},f)):u(At,Object.assign({themeOverrides:n.peerOverrides.Scrollbar,theme:n.peers.Scrollbar},s,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:a}),f),f.footer?u("div",{class:`${t}-drawer-footer`,style:l,role:"none"},f.footer()):null)}});var nt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function r(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(i){return typeof i}:r=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},r(o)}function n(o){var a=typeof o=="string"||o instanceof String;if(!a){var i=r(o);throw o===null?i="null":i==="object"&&(i=o.constructor.name),new TypeError("Expected a string but received a ".concat(i))}}e.exports=t.default,e.exports.default=t.default})(nt,nt.exports);var mt=nt.exports,ot={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;for(var a in o)typeof n[a]>"u"&&(n[a]=o[a]);return n}e.exports=t.default,e.exports.default=t.default})(ot,ot.exports);var jt=ot.exports,at={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=o(mt),n=o(jt);function o(l){return l&&l.__esModule?l:{default:l}}var a={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function i(l,s){(0,r.default)(l),s=(0,n.default)(s,a),s.allow_trailing_dot&&l[l.length-1]==="."&&(l=l.substring(0,l.length-1)),s.allow_wildcard===!0&&l.indexOf("*.")===0&&(l=l.substring(2));var m=l.split("."),f=m[m.length-1];return s.require_tld&&(m.length<2||!s.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(f)||/\s/.test(f))||!s.allow_numeric_tld&&/^\d+$/.test(f)?!1:m.every(function(y){return!(y.length>63&&!s.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(y)||/[\uff01-\uff5e]/.test(y)||/^-|-$/.test(y)||!s.allow_underscores&&/_/.test(y))})}e.exports=t.default,e.exports.default=t.default})(at,at.exports);var zo=at.exports,lt={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=m;var r=n(mt);function n(f){return f&&f.__esModule?f:{default:f}}var o="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",a="(".concat(o,"[.]){3}").concat(o),i=new RegExp("^".concat(a,"$")),l="(?:[0-9a-fA-F]{1,4})",s=new RegExp("^("+"(?:".concat(l,":){7}(?:").concat(l,"|:)|")+"(?:".concat(l,":){6}(?:").concat(a,"|:").concat(l,"|:)|")+"(?:".concat(l,":){5}(?::").concat(a,"|(:").concat(l,"){1,2}|:)|")+"(?:".concat(l,":){4}(?:(:").concat(l,"){0,1}:").concat(a,"|(:").concat(l,"){1,3}|:)|")+"(?:".concat(l,":){3}(?:(:").concat(l,"){0,2}:").concat(a,"|(:").concat(l,"){1,4}|:)|")+"(?:".concat(l,":){2}(?:(:").concat(l,"){0,3}:").concat(a,"|(:").concat(l,"){1,5}|:)|")+"(?:".concat(l,":){1}(?:(:").concat(l,"){0,4}:").concat(a,"|(:").concat(l,"){1,6}|:)|")+"(?::((?::".concat(l,"){0,5}:").concat(a,"|(?::").concat(l,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function m(f){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,r.default)(f),y=String(y),y?y==="4"?i.test(f):y==="6"?s.test(f):!1:m(f,4)||m(f,6)}e.exports=t.default,e.exports.default=t.default})(lt,lt.exports);var Ro=lt.exports,it={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=A;var r=i(mt),n=i(zo),o=i(Ro),a=i(jt);function i(h){return h&&h.__esModule?h:{default:h}}function l(h,g){return U(h)||y(h,g)||m(h,g)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(h,g){if(h){if(typeof h=="string")return f(h,g);var k=Object.prototype.toString.call(h).slice(8,-1);if(k==="Object"&&h.constructor&&(k=h.constructor.name),k==="Map"||k==="Set")return Array.from(h);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return f(h,g)}}function f(h,g){(g==null||g>h.length)&&(g=h.length);for(var k=0,p=new Array(g);k<g;k++)p[k]=h[k];return p}function y(h,g){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(h)))){var k=[],p=!0,b=!1,x=void 0;try{for(var C=h[Symbol.iterator](),$;!(p=($=C.next()).done)&&(k.push($.value),!(g&&k.length===g));p=!0);}catch(S){b=!0,x=S}finally{try{!p&&C.return!=null&&C.return()}finally{if(b)throw x}}return k}}function U(h){if(Array.isArray(h))return h}var _={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,allow_fragments:!0,allow_query_components:!0,validate_length:!0},B=/^\[([^\]]+)\](?::([0-9]+))?$/;function F(h){return Object.prototype.toString.call(h)==="[object RegExp]"}function V(h,g){for(var k=0;k<g.length;k++){var p=g[k];if(h===p||F(p)&&p.test(h))return!0}return!1}function A(h,g){if((0,r.default)(h),!h||/[\s<>]/.test(h)||h.indexOf("mailto:")===0||(g=(0,a.default)(g,_),g.validate_length&&h.length>=2083)||!g.allow_fragments&&h.includes("#")||!g.allow_query_components&&(h.includes("?")||h.includes("&")))return!1;var k,p,b,x,C,$,S,D;if(S=h.split("#"),h=S.shift(),S=h.split("?"),h=S.shift(),S=h.split("://"),S.length>1){if(k=S.shift().toLowerCase(),g.require_valid_protocol&&g.protocols.indexOf(k)===-1)return!1}else{if(g.require_protocol)return!1;if(h.slice(0,2)==="//"){if(!g.allow_protocol_relative_urls)return!1;S[0]=h.slice(2)}}if(h=S.join("://"),h==="")return!1;if(S=h.split("/"),h=S.shift(),h===""&&!g.require_host)return!0;if(S=h.split("@"),S.length>1){if(g.disallow_auth||S[0]===""||(p=S.shift(),p.indexOf(":")>=0&&p.split(":").length>2))return!1;var L=p.split(":"),Y=l(L,2),K=Y[0],q=Y[1];if(K===""&&q==="")return!1}x=S.join("@"),$=null,D=null;var J=x.match(B);if(J?(b="",D=J[1],$=J[2]||null):(S=x.split(":"),b=S.shift(),S.length&&($=S.join(":"))),$!==null&&$.length>0){if(C=parseInt($,10),!/^[0-9]+$/.test($)||C<=0||C>65535)return!1}else if(g.require_port)return!1;return g.host_whitelist?V(b,g.host_whitelist):b===""&&!g.require_host?!0:!(!(0,o.default)(b)&&!(0,n.default)(b,g)&&(!D||!(0,o.default)(D,6))||(b=b||D,g.host_blacklist&&V(b,g.host_blacklist)))}e.exports=t.default,e.exports.default=t.default})(it,it.exports);var Eo=it.exports;const Ao=Er(Eo);function Io(e,t){return typeof e=="string"&&Ao(e,t)}const Bo=P({props:{code:{type:String,required:!0}},setup(e){const t=R();return ue(()=>e.code,r=>{Ar(()=>import("./use-async-monaco-40d09bb9.js").then(n=>n.e),["./use-async-monaco-40d09bb9.js","./index-ed258134.js","../assets/index-2e93ab15.css","./index-f716abbf.js","./use-save-confirm-3114e64d.js","../assets/use-async-monaco-51b5a6f4.css"],import.meta.url).then(n=>{n.editor.colorize(r,"json",{tabSize:2}).then(o=>{t.value.innerHTML=o})})},{immediate:!0}),()=>d("pre",{ref:t},null)}}),Po=(...e)=>{try{return JSON.parse(...e)}catch{return e[0]}};function Uo(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=1,t.height=1,r.drawImage(e,0,0,1,1);const n=r.getImageData(0,0,1,1).data;return`#${((1<<24)+(n[0]<<16)+(n[1]<<8)+n[2]).toString(16).slice(1)}`}const Fo=e=>{const t=jr.lexer(e),r=new Set;function n(o){if(o.type==="image"){r.add(o.href);return}if(o.tokens&&Array.isArray(o.tokens))return o.tokens.forEach(n)}return t.forEach(n),[...r.values()]};function Mo(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ir(e)}const Do=P({props:{images:{type:Array,required:!0},onChange:{type:Function,required:!0},text:{type:String,required:!0},extraImages:{type:Array,required:!1}},setup(e){const t=R(!1),r=I(()=>{const a=new Map;return e.images.forEach(i=>{a.set(i.src,i)}),a}),n=I(()=>{const a=e.text?dn(Fo(e.text).map(s=>{const m=r.value.get(s);return{src:s,height:m?.height,width:m?.width,type:m?.type,accent:m?.accent}}).concat(e.images),"src"):e.images,i=new Set;for(const s of a)s.src&&i.add(s.src);const l=a.concat();return e.extraImages&&e.extraImages.forEach(s=>{i.has(s)||l.push({src:s,height:0,width:0,type:"",accent:""})}),l}),o=async()=>{t.value=!0;const a=await Promise.allSettled(n.value.map(l=>new Promise((s,m)=>{const f=new Image;f.src=l.src,f.crossOrigin="Anonymous",f.onload=()=>{s({width:f.naturalWidth,height:f.naturalHeight,src:l.src,type:f.src.split(".").pop()||"",accent:Uo(f)})},f.onerror=y=>{m({err:y,src:l.src})}})));t.value=!1;const i=[];a.map(l=>{l.status==="fulfilled"?i.push(l.value):message.warning(`获取图片信息失败：${l.reason.src}: ${l.reason.err}`)}),e.onChange(i),t.value=!1};return()=>{let a;return d("div",{class:"relative flex w-full flex-grow flex-col"},[d("div",{class:"flex items-center justify-between space-x-2"},[d("div",{class:"inline-block flex-shrink flex-grow"},[ee("调整 Markdown 中包含的图片信息")]),d(Q,{loading:t.value,class:"self-end",round:!0,onClick:o},{default:()=>[ee("自动修正")]})]),d(Pt,{accordion:!0,class:"mt-4"},Mo(a=n.value.map((i,l)=>d(Ut,{key:i.src,title:d("span",{class:"flex w-full flex-shrink break-all"},[i.src])},{default:()=>[d(Ft,{labelPlacement:"left",labelWidth:"100"},{default:()=>[d(G,{label:"高度"},{default:()=>[d(yt,{value:i.height,onUpdateValue:s=>{s&&(e.images[l].height=s)}},null)]}),d(G,{label:"宽度"},{default:()=>[d(yt,{value:i.width,onUpdateValue:s=>{s&&(e.images[l].width=s)}},null)]}),d(G,{label:"类型"},{default:()=>[d(dt,{value:i.type||"",onUpdateValue:s=>{s&&(e.images[l].type=s)}},null)]}),d(G,{label:"主色调"},{default:()=>[d(Qn,{value:i.accent||"",onUpdateValue:s=>{s&&(e.images[l].accent=s)}},null)]}),d(G,{label:"操作"},{default:()=>[d("div",{class:"flex w-full justify-end"},[d(Hr,null,{default:()=>[d(Q,{round:!0,onClick:()=>{window.open(i.src)},secondary:!0},{default:()=>[ee("查看")]}),d(Q,{secondary:!0,round:!0,type:"error",onClick:()=>{e.images.splice(l,1)}},{default:()=>[ee("删除")]})]})])]})]})]})))?a:{default:()=>[a]})])}}}),No={value:{type:String,required:!0},onFinish:{type:Function,required:!0}},Oo=P({props:No,setup(e){const t=R(),r=R(e.value),n=Tr(t,r,a=>{r.value=a},{language:"json"}),o=()=>{e.onFinish(r.value)};return()=>{const{Snip:a}=n;return d("div",{class:"max-w-[80vw] w-[1024px] max-h-[70vh] h-[500px] flex flex-col gap-2"},[d("div",{ref:t,class:"flex-shrink-0 flex-grow"},[d(a,null,null)]),d("div",{class:"text-right flex-shrink-0"},[d(Q,{round:!0,type:"primary",onClick:o},{default:()=>[ee("提交")]})])])}}}),sa=P({props:{show:{type:Boolean,required:!0},onUpdateShow:{type:Function,required:!0},data:{type:Object,required:!0},labelWidth:{type:Number,required:!1},disabledItem:{type:Array,required:!1}},setup(e,{slots:t}){const r=new Set(e.disabledItem||[]),n=R(!1),o=()=>{n.value=!0},a=R([]);let i=!1;return ue(()=>a.value,()=>{i=!0,e.data.meta=a.value.reduce((l,{key:s,value:m})=>on(m)||m===""?l:{...l,[s]:Po(m)},{})}),ue(()=>e.data.meta,()=>{if(i){i=!1;return}e.data.meta&&Br(e.data.meta)&&(a.value=Object.entries(e.data.meta).reduce((l,[s,m])=>[...l,{key:s,value:JSON.stringify(m)}],[]))},{flush:"post",deep:!0}),()=>d(Co,{show:e.show,width:450,class:"max-w-[90vw]",placement:"right",onUpdateShow:e.onUpdateShow},{default:()=>[d($o,{title:"文章设定"},{default:()=>[d(Ft,{labelAlign:"right",labelPlacement:"left",labelWidth:e.labelWidth??120},{default:()=>[t.default?.(),d(G,{label:"允许评论"},{default:()=>[d(qr,{value:e.data.allowComment,onUpdateValue:l=>void(e.data.allowComment=l)},null)]}),!r.has("date-picker")&&d(G,{label:"自定义创建时间"},{default:()=>[d(Vr,{clearable:!0,isDateDisabled:l=>l>Date.now(),type:"datetime",value:e.data.created?new Date(e.data.created).getTime():void 0,onUpdateValue:l=>{const s=l?new Date(l).toISOString():void 0;e.data.created=s}},null)]}),d(kt,null,null),d(jo,{images:e.data.images,onChange:l=>{if(e.data.meta||(e.data.meta={}),l===null){delete e.data.meta.cover;return}e.data.meta.cover=l},value:e.data.meta?.cover},null),d(G,{label:"图片设定",labelAlign:"left"},null),d(G,null,{default:()=>[d(Do,{text:e.data.text,images:e.data.images,extraImages:e.data.meta?.cover?[e.data.meta.cover]:void 0,onChange:l=>{e.data.images=l}},null)]}),d(kt,null,null),d(G,{label:"附加字段",labelAlign:"left"},{default:()=>[d("div",{class:"flex-grow text-right"},[d(Q,{onClick:o,round:!0},{default:()=>[ee("编辑")]})])]}),d(Lr,{preset:"pair",value:a.value,keyPlaceholder:"附加字段名",valuePlaceholder:"附加字段值",onUpdateValue:l=>{a.value=l}},null),e.data.meta&&d(Pt,{accordion:!0,class:"mt-4"},{default:()=>[d(Ut,{title:"预览"},{default:()=>[d(Bo,{class:"max-w-full overflow-auto",code:JSON.stringify(e.data.meta,null,2)},null)]})]})]})]}),d(It,{show:n.value,onUpdateShow:l=>{n.value=l},zIndex:2222,preset:"card",closable:!0,closeOnEsc:!1,title:"编辑附加字段",onClose:()=>{n.value=!1},class:"w-[unset]"},{default:()=>[d(Oo,{value:e.data.meta?JSON.stringify(e.data.meta,null,2):"",onFinish:l=>{try{i=!1;const s=JSON.parse(l);e.data.meta=s,n.value=!1}catch(s){message.error(s.message)}}},null)]})]})}}),jo=P({props:{images:{type:Array,required:!0},onChange:{type:Function,required:!0},value:{type:String,required:!0}},setup(e){const t=R(!0),r=o=>{if(!o){t.value=!0,e.onChange(null);return}Io(o)?t.value=!0:t.value=!1,e.onChange(o)},n=R(!1);return()=>d(G,{label:"文章缩略图",labelAlign:"left"},{default:()=>[d(Bt,{placement:"left",show:n.value,onUpdateShow:o=>{o&&!e.value||(n.value=o)}},{trigger(){return e.images.length>0?d(Yr,{status:t.value?void 0:"error",value:e.value,onUpdateValue:r,options:e.images.map(o=>({label:o.src,value:o.src})),filterable:!0,tag:!0,clearable:!0,maxTagCount:1,renderOption:({node:o,option:a})=>u(Wr,{placement:"left"},{trigger:()=>o,default:()=>d(xt,{src:a.value,alt:"popover",width:400},null)})},null):d(dt,{value:e.value,status:t.value?void 0:"error",onUpdateValue:r,placeholder:"https?://..."},null)},default(){return e.value?d(xt,{src:e.value,alt:"cover",width:400},null):null}})]})}}),Vo={type:{type:String},value:{type:String,required:!0},placeholder:{type:String},onChange:{type:Function,required:!0}},Ho="_root_1e9b2_1",To="_group_1e9b2_5",qo="_bar_1e9b2_47",Ke={root:Ho,group:To,bar:qo},ua=P({props:{...Vo,label:{type:String,required:!0}},emits:["compositionend","compositionstart"],setup(e,{emit:t}){const r=R();return Ne(()=>{r.value&&(r.value.addEventListener("compositionstart",()=>{t("compositionstart")}),r.value.addEventListener("compositionend",()=>{t("compositionend")}))}),()=>d("div",{class:[Ke.root,Ke.group]},[d("input",{required:!0,ref:r,type:e.type??"text",value:e.value,onInput:n=>e.onChange(n.target.value)},null),d("span",{class:Ke.bar},null),d("label",null,[e.label])])}}),ca=P({props:{data:{type:Object,required:!0},onHandleYamlParsedMeta:{type:Function,required:!1}},setup(e){const t=R(!1),r=R(""),n=o=>{o=o.trim();const a=/^---\n((.|\n)*?)\n---/.exec(o);if(a?.length){const m=a[1],f=Jr(m);e.onHandleYamlParsedMeta&&e.onHandleYamlParsedMeta(f),o=o.replace(a[0],"")}const l=o.trim().split(`
`),s=l[0].startsWith("#")?l[0].replace(/^#/,"").trim():"";s&&(e.data.title=s,l.shift()),e.data.text=l.join(`
`).trim(),t.value=!1};return()=>d(Et,null,[d(Mt,{icon:d(kn,null,null),variant:"info",onClick:()=>t.value=!0},null),d(It,{transformOrigin:"center",show:t.value,onUpdateShow:o=>t.value=o},{default:()=>[d(Pr,{class:"modal-card",closable:!0,onClose:()=>t.value=!1},{header(){return d("div",{class:"space-x-4 relative flex items-center"},[d(Ur,null,{default:()=>[ee("解析 Markdown")]}),d(Bt,{trigger:"hover",placement:"right"},{default(){return d("div",{class:"max-w-[80ch] overflow-auto"},[d(Fr,null,{default:()=>[ee("可以解析 Markdown with YAML 格式的文本，例如：")]}),d(ao,{code:`---
date: 2021-04-18T09:33:33.271Z
updated: 2021-04-18T09:33:33.267Z
title: 虚拟列表与 Scroll Restoration
slug: visualize-list-scroll-restoration
categories: 编程
type: post
permalink: posts/visualize-list-scroll-restoration
---


虚拟列表是为了提高页面性能而出现的。`},null)])},trigger(){return d(Mr,null,{default:()=>[d(vn,null,null)]})}})])},default(){return d(wt,{vertical:!0,size:"large"},{default:()=>[d(Xr,{class:"h-[70vh]",onChange:o=>void(r.value=o),text:r.value,unSaveConfirm:!1},null),d(wt,{justify:"end"},{default:()=>[d(Q,{round:!0,type:"primary",onClick:()=>n(r.value)},{default:()=>[ee("确定")]}),d(Q,{onClick:o=>{r.value=""},round:!0},{default:()=>[ee("重置")]})]})]})}})]})])}});var st=(e=>(e.EditDataUpdate="editDataUpdate",e))(st||{});const da=P({props:{getData:{type:Function,required:!0}},setup(e){let t="";Pe(()=>{t&&localStorage.removeItem(t)});let r="",n=!1,o="",a=null;const i=async()=>{const{getData:l}=e,s=l(),{id:m}=s;r||(r=(await Or.api.options.url.get().then(F=>F.data)).webUrl);let f;f=new URL("/preview",r);const y=`mx-preview-${m??"new"}`;localStorage.setItem(y,JSON.stringify({...s,id:`preview-${m??"new"}`})),f.searchParams.set("storageKey",y),f.searchParams.set("origin",location.origin);const U=f.toString(),_=window.open(U);if(!_){message.error("打开预览失败");return}t=y,n=!0,o=f.origin,a=_};return Ne(()=>{const l=s=>{if(!n||s.origin!==o||!a)return;const m=e.getData();a.postMessage(JSON.stringify({type:"preview",data:{...m,id:`preview-${m.id??"new"}`}}),o)};window.addEventListener("message",l),Pe(()=>{window.removeEventListener("message",l)})}),Ne(()=>{const l=Dr(()=>{if(!n||!o||!a)return;const s=e.getData();a.postMessage(JSON.stringify({type:"preview",data:{...s,id:`preview-${s.id??"new"}`}}),o)},100);window.addEventListener(st.EditDataUpdate,l),Pe(()=>{window.removeEventListener(st.EditDataUpdate,l)})}),()=>d(Mt,{icon:d(Nr,null,null),onClick:i},null)}});export{st as E,da as H,ua as M,ca as P,ia as S,sa as T,mt as a,cn as b,Vo as i};
