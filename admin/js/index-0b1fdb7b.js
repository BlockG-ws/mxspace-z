import{s as ne}from"./confetti-fa4954ff.js";import{X as u,aA as B,V as b,az as y,dI as F,bb as re,d as x,Z as P,aC as ie,a2 as _,et as se,aE as j,a7 as o,d_ as ae,d$ as oe,aF as le,aI as q,aJ as ue,i as C,b9 as h,a4 as ce,ag as R,bF as V,bG as I,dH as de,cy as D,eu as pe,al as fe,aN as ve,c8 as he,r as U,g as me,R as E,s as z,h as n,J as ge,bK as be,t as p,m as $,l as k,k as w,u as xe}from"./index-ed258134.js";import{F as Ce}from"./Tag-ace36130.js";import{N as c,a as M}from"./FormItem-a7c928e6.js";import{N as ze}from"./DynamicTags-fedf0c29.js";import"./prop-8b8caa29.js";import"./Add-30df601e.js";const ye=u("steps",`
 width: 100%;
 display: flex;
`,[u("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[B("disabled","cursor: not-allowed"),B("clickable",`
 cursor: pointer;
 `),b("&:last-child",[u("step-splitor","display: none;")])]),u("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),u("step-content","flex: 1;",[u("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[y("title",`
 white-space: nowrap;
 flex: 0;
 `)]),y("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),u("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[u("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[y("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[F()]),u("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[F()]),u("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[F()])])]),B("vertical","flex-direction: column;",[re("show-description",[b(">",[u("step","padding-bottom: 8px;")])]),b(">",[u("step","margin-bottom: 16px;",[b("&:last-child","margin-bottom: 0;"),b(">",[u("step-indicator",[b(">",[u("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),u("step-content",[y("description","margin-top: 8px;")])])])])])]);function Ee(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function we(e){return e.map((t,i)=>Ee(t,i))}const Se=Object.assign(Object.assign({},_.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),H=le("n-steps"),Be=x({name:"Steps",props:Se,setup(e,{slots:t}){const{mergedClsPrefixRef:i,mergedRtlRef:s}=P(e),f=ie("Steps",s,i),r=_("Steps","-steps",ye,se,e,i);return j(H,{props:e,mergedThemeRef:r,mergedClsPrefixRef:i,stepsSlots:t}),{mergedClsPrefix:i,rtlEnabled:f}},render(){const{mergedClsPrefix:e}=this;return o("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},we(ae(oe(this))))}}),Fe={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},N=x({name:"Step",props:Fe,setup(e){const t=q(H,null);t||ue("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:i}=P(),{props:s,mergedThemeRef:f,mergedClsPrefixRef:r,stepsSlots:v}=t,a=C(()=>s.vertical),S=C(()=>{const{status:l}=e;if(l)return l;{const{internalIndex:d}=e,{current:g}=s;if(g===void 0)return"process";if(d<g)return"finish";if(d===g)return s.status||"process";if(d>g)return"wait"}return"process"}),T=C(()=>{const{value:l}=S,{size:d}=s,{common:{cubicBezierEaseInOut:g},self:{stepHeaderFontWeight:O,[h("stepHeaderFontSize",d)]:W,[h("indicatorIndexFontSize",d)]:J,[h("indicatorSize",d)]:G,[h("indicatorIconSize",d)]:L,[h("indicatorTextColor",l)]:X,[h("indicatorBorderColor",l)]:Z,[h("headerTextColor",l)]:Q,[h("splitorColor",l)]:Y,[h("indicatorColor",l)]:ee,[h("descriptionTextColor",l)]:te}}=f.value;return{"--n-bezier":g,"--n-description-text-color":te,"--n-header-text-color":Q,"--n-indicator-border-color":Z,"--n-indicator-color":ee,"--n-indicator-icon-size":L,"--n-indicator-index-font-size":J,"--n-indicator-size":G,"--n-indicator-text-color":X,"--n-splitor-color":Y,"--n-step-header-font-size":W,"--n-step-header-font-weight":O}}),m=i?ce("step",C(()=>{const{value:l}=S,{size:d}=s;return`${l[0]}${d[0]}`}),T,s):void 0,K=C(()=>{if(e.disabled)return;const{onUpdateCurrent:l,"onUpdate:current":d}=s;return l||d?()=>{l&&R(l,e.internalIndex),d&&R(d,e.internalIndex)}:void 0});return{stepsSlots:v,mergedClsPrefix:r,vertical:a,mergedStatus:S,handleStepClick:K,cssVars:i?void 0:T,themeClass:m?.themeClass,onRender:m?.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:i,disabled:s}=this,f=V(this.$slots.default,r=>{const v=r||this.description;return v?o("div",{class:`${e}-step-content__description`},v):null});return t?.(),o("div",{class:[`${e}-step`,s&&`${e}-step--disabled`,!s&&i&&`${e}-step--clickable`,this.themeClass,f&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:i},o("div",{class:`${e}-step-indicator`},o("div",{class:`${e}-step-indicator-slot`},o(de,null,{default:()=>V(this.$slots.icon,r=>{const{mergedStatus:v,stepsSlots:a}=this;return v==="finish"||v==="error"?v==="finish"?o(D,{clsPrefix:e,key:"finish"},{default:()=>I(a["finish-icon"],()=>[o(Ce,null)])}):v==="error"?o(D,{clsPrefix:e,key:"error"},{default:()=>I(a["error-icon"],()=>[o(pe,null)])}):null:r||o("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?o("div",{class:`${e}-step-splitor`}):null),o("div",{class:`${e}-step-content`},o("div",{class:`${e}-step-content-header`},o("div",{class:`${e}-step-content-header__title`},I(this.$slots.title,()=>[this.title])),this.vertical?null:o("div",{class:`${e}-step-splitor`})),f))}}),Ie="_full_1tlcw_1",Ne={full:Ie},Ue=()=>q("configs"),qe=x({setup(){fe(()=>{ve()&&he()});const e=U({});me(async()=>{const i=await E.api.init.configs.default.get();Object.assign(e,i)}),j("configs",e);const t=z(0);return()=>n("div",{class:Ne.full},[n(ge,{title:"初始化",class:"modal-card sm m-auto form-card"},{default:()=>[n(Be,{size:"small",current:t.value},{default:()=>[n(N,{status:t.value>0?"finish":"process",title:"站点设置",description:"先设置一下站点相关配置吧"},null),n(N,{status:t.value>1?"finish":t.value<1?"wait":"process",title:"主人信息",description:"请告诉你的名字"},null),n(N,{status:t.value>2?"finish":t.value<2?"wait":"process",title:"(๑•̀ㅂ•́)و✧",description:"一切就绪了"},null)]}),n("div",{class:"mt-[3.5rem]"},[JSON.stringify(e)==="{}"?n("div",{class:"text-center py-4"},[n(be,null,null)]):o([$e,ke,Ae][t.value],{onNext(){t.value++}})])]})])}}),A={onNext:{type:Function,required:!0}},$e=x({props:A,setup(e){const t=Ue(),i=z(t?.seo?.title||""),s=z(t?.seo?.keywords),f=z(t?.seo?.description||""),r=U({adminUrl:`${location.origin}/qaqdmin`,serverUrl:`${location.origin}/api/v2`,webUrl:location.origin,wsUrl:location.origin}),v=async()=>{await Promise.all([E.api.init.configs("seo").patch({data:{title:i.value,keywords:s.value,description:f.value}}),E.api.init.configs("url").patch({data:{...r}})]),e.onNext()};return()=>n(M,null,{default:()=>[n(c,{label:"站点标题",required:!0},{default:()=>[n(p,{value:i.value,onUpdateValue:a=>void(i.value=a)},null)]}),n(c,{label:"站点描述",required:!0},{default:()=>[n(p,{value:f.value,onUpdateValue:a=>void(f.value=a)},null)]}),n(c,{label:"关键字"},{default:()=>[n(ze,{value:s.value,onUpdateValue:a=>void(s.value=a)},null)]}),n(c,{label:"前端地址"},{default:()=>[n(p,{value:r.webUrl,onInput:a=>void(r.webUrl=a)},null)]}),n(c,{label:"API 地址"},{default:()=>[n(p,{value:r.serverUrl,onInput:a=>void(r.serverUrl=a)},null)]}),n(c,{label:"后台地址"},{default:()=>[n(p,{value:r.adminUrl,onInput:a=>void(r.adminUrl=a)},null)]}),n(c,{label:"Gateway 地址"},{default:()=>[n(p,{value:r.wsUrl,onInput:a=>void(r.wsUrl=a)},null)]}),n($,{justify:"end"},{default:()=>[n(k,{onClick:v,round:!0,type:"primary",disabled:!i.value||!f.value},{default:()=>[w("下一步")]})]})]})}}),ke=x({props:A,setup(e){const t=U({}),i=z(""),s=xe(),f=async()=>{if(i.value!==t.password){s.error("两次密码不一致");return}for(const r in t)t[r]===""&&(t[r]=void 0);await E.api.user.register.post({data:{...t}}),e.onNext()};return()=>n(M,null,{default:()=>[n(c,{label:"你的名字 (登录凭证)",required:!0},{default:()=>[n(p,{value:t.username,onUpdateValue:r=>{t.username=r}},null)]}),n(c,{label:"昵称"},{default:()=>[n(p,{value:t.name,onUpdateValue:r=>{t.name=r}},null)]}),n(c,{label:"邮箱",required:!0},{default:()=>[n(p,{value:t.mail,onUpdateValue:r=>{t.mail=r}},null)]}),n(c,{label:"密码",required:!0},{default:()=>[n(p,{value:t.password,type:"password",onUpdateValue:r=>{t.password=r}},null)]}),n(c,{label:"确认密码",required:!0},{default:()=>[n(p,{value:i.value,type:"password",onUpdateValue:r=>{i.value=r}},null)]}),n(c,{label:"个人首页"},{default:()=>[n(p,{value:t.url,onUpdateValue:r=>{t.url=r}},null)]}),n(c,{label:"头像"},{default:()=>[n(p,{value:t.avatar,onUpdateValue:r=>{t.avatar=r}},null)]}),n(c,{label:"个人介绍"},{default:()=>[n(p,{value:t.introduce,onUpdateValue:r=>{t.introduce=r}},null)]}),n($,{justify:"end"},{default:()=>[n(k,{disabled:!t.username||!t.mail||!t.password||!i.value,onClick:f,round:!0,type:"primary"},{default:()=>[w("下一步")]})]})]})}}),Ae=x({props:A,setup(){return()=>n($,{class:"text-center",vertical:!0},{default:()=>[n("span",{class:"text-base"},[w("你已经完成了所有的步骤，干得漂亮。")]),n(k,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),ne(),setTimeout(()=>{location.reload()},200)}},{default:()=>[w("LINK START")]})]})}});export{qe as default};
