import{d as U,a7 as u,ba as no,eM as so,ex as o,X as to,aA as f,az as y,bb as I,V as P,s as io,Z as ho,a2 as V,aE as go,a0 as bo,aC as Co,i as j,b9 as d,a4 as uo,bZ as N,bF as L,bt as vo,aF as po,ag as fo}from"./index-ed258134.js";const Bo=U({name:"Checkmark",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},u("g",{fill:"none"},u("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),ko=a=>{const{textColor2:h,primaryColorHover:r,primaryColorPressed:k,primaryColor:c,infoColor:i,successColor:s,warningColor:n,errorColor:t,baseColor:m,borderColor:x,opacityDisabled:g,tagColor:v,closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:p,borderRadiusSmall:b,fontSizeMini:C,fontSizeTiny:z,fontSizeSmall:S,fontSizeMedium:B,heightMini:$,heightTiny:H,heightSmall:R,heightMedium:M,closeColorHover:T,closeColorPressed:w,buttonColor2Hover:E,buttonColor2Pressed:_,fontWeightStrong:F}=a;return Object.assign(Object.assign({},so),{closeBorderRadius:b,heightTiny:$,heightSmall:H,heightMedium:R,heightLarge:M,borderRadius:b,opacityDisabled:g,fontSizeTiny:C,fontSizeSmall:z,fontSizeMedium:S,fontSizeLarge:B,fontWeightStrong:F,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:m,colorCheckable:"#0000",colorHoverCheckable:E,colorPressedCheckable:_,colorChecked:c,colorCheckedHover:r,colorCheckedPressed:k,border:`1px solid ${x}`,textColor:h,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:p,closeColorHover:T,closeColorPressed:w,borderPrimary:`1px solid ${o(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:o(c,{alpha:.12}),colorBorderedPrimary:o(c,{alpha:.1}),closeIconColorPrimary:c,closeIconColorHoverPrimary:c,closeIconColorPressedPrimary:c,closeColorHoverPrimary:o(c,{alpha:.12}),closeColorPressedPrimary:o(c,{alpha:.18}),borderInfo:`1px solid ${o(i,{alpha:.3})}`,textColorInfo:i,colorInfo:o(i,{alpha:.12}),colorBorderedInfo:o(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:o(i,{alpha:.12}),closeColorPressedInfo:o(i,{alpha:.18}),borderSuccess:`1px solid ${o(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:o(s,{alpha:.12}),colorBorderedSuccess:o(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:o(s,{alpha:.12}),closeColorPressedSuccess:o(s,{alpha:.18}),borderWarning:`1px solid ${o(n,{alpha:.35})}`,textColorWarning:n,colorWarning:o(n,{alpha:.15}),colorBorderedWarning:o(n,{alpha:.12}),closeIconColorWarning:n,closeIconColorHoverWarning:n,closeIconColorPressedWarning:n,closeColorHoverWarning:o(n,{alpha:.12}),closeColorPressedWarning:o(n,{alpha:.18}),borderError:`1px solid ${o(t,{alpha:.23})}`,textColorError:t,colorError:o(t,{alpha:.1}),colorBorderedError:o(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:o(t,{alpha:.12}),closeColorPressedError:o(t,{alpha:.18})})},mo={name:"Tag",common:no,self:ko},xo=mo,yo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Io=to("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[f("strong",`
 font-weight: var(--n-font-weight-strong);
 `),y("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),y("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),y("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),y("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),f("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[y("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),y("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),f("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),f("icon, avatar",[f("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),f("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),f("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[I("disabled",[P("&:hover","background-color: var(--n-color-hover-checkable);",[I("checked","color: var(--n-text-color-hover-checkable);")]),P("&:active","background-color: var(--n-color-pressed-checkable);",[I("checked","color: var(--n-text-color-pressed-checkable);")])]),f("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[I("disabled",[P("&:hover","background-color: var(--n-color-checked-hover);"),P("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Po=Object.assign(Object.assign(Object.assign({},V.props),yo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),zo=po("n-tag"),$o=U({name:"Tag",props:Po,setup(a){const h=io(null),{mergedBorderedRef:r,mergedClsPrefixRef:k,inlineThemeDisabled:c,mergedRtlRef:i}=ho(a),s=V("Tag","-tag",Io,xo,a,k);go(zo,{roundRef:bo(a,"round")});function n(e){if(!a.disabled&&a.checkable){const{checked:l,onCheckedChange:p,onUpdateChecked:b,"onUpdate:checked":C}=a;b&&b(!l),C&&C(!l),p&&p(!l)}}function t(e){if(a.triggerClickOnClose||e.stopPropagation(),!a.disabled){const{onClose:l}=a;l&&fo(l,e)}}const m={setTextContent(e){const{value:l}=h;l&&(l.textContent=e)}},x=Co("Tag",i,k),g=j(()=>{const{type:e,size:l,color:{color:p,textColor:b}={}}=a,{common:{cubicBezierEaseInOut:C},self:{padding:z,closeMargin:S,closeMarginRtl:B,borderRadius:$,opacityDisabled:H,textColorCheckable:R,textColorHoverCheckable:M,textColorPressedCheckable:T,textColorChecked:w,colorCheckable:E,colorHoverCheckable:_,colorPressedCheckable:F,colorChecked:D,colorCheckedHover:K,colorCheckedPressed:A,closeBorderRadius:Z,fontWeightStrong:X,[d("colorBordered",e)]:q,[d("closeSize",l)]:G,[d("closeIconSize",l)]:J,[d("fontSize",l)]:Q,[d("height",l)]:W,[d("color",e)]:Y,[d("textColor",e)]:oo,[d("border",e)]:eo,[d("closeIconColor",e)]:O,[d("closeIconColorHover",e)]:ro,[d("closeIconColorPressed",e)]:lo,[d("closeColorHover",e)]:ao,[d("closeColorPressed",e)]:co}}=s.value;return{"--n-font-weight-strong":X,"--n-avatar-size-override":`calc(${W} - 8px)`,"--n-bezier":C,"--n-border-radius":$,"--n-border":eo,"--n-close-icon-size":J,"--n-close-color-pressed":co,"--n-close-color-hover":ao,"--n-close-border-radius":Z,"--n-close-icon-color":O,"--n-close-icon-color-hover":ro,"--n-close-icon-color-pressed":lo,"--n-close-icon-color-disabled":O,"--n-close-margin":S,"--n-close-margin-rtl":B,"--n-close-size":G,"--n-color":p||(r.value?q:Y),"--n-color-checkable":E,"--n-color-checked":D,"--n-color-checked-hover":K,"--n-color-checked-pressed":A,"--n-color-hover-checkable":_,"--n-color-pressed-checkable":F,"--n-font-size":Q,"--n-height":W,"--n-opacity-disabled":H,"--n-padding":z,"--n-text-color":b||oo,"--n-text-color-checkable":R,"--n-text-color-checked":w,"--n-text-color-hover-checkable":M,"--n-text-color-pressed-checkable":T}}),v=c?uo("tag",j(()=>{let e="";const{type:l,size:p,color:{color:b,textColor:C}={}}=a;return e+=l[0],e+=p[0],b&&(e+=`a${N(b)}`),C&&(e+=`b${N(C)}`),r.value&&(e+="c"),e}),g,a):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:x,mergedClsPrefix:k,contentRef:h,mergedBordered:r,handleClick:n,handleCloseClick:t,cssVars:c?void 0:g,themeClass:v?.themeClass,onRender:v?.onRender})},render(){var a,h;const{mergedClsPrefix:r,rtlEnabled:k,closable:c,color:{borderColor:i}={},round:s,onRender:n,$slots:t}=this;n?.();const m=L(t.avatar,g=>g&&u("div",{class:`${r}-tag__avatar`},g)),x=L(t.icon,g=>g&&u("div",{class:`${r}-tag__icon`},g));return u("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:k,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:m,[`${r}-tag--icon`]:x,[`${r}-tag--closable`]:c}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||m,u("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(a=this.$slots).default)===null||h===void 0?void 0:h.call(a)),!this.checkable&&c?u(vo,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?u("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{Bo as F,$o as N,xo as a,yo as c,zo as t};
