import{i as P,o as M}from"./utils-216cf06a.js";import{t as N}from"./Tag-ace36130.js";import{aF as V,X as w,bW as A,V as C,bX as G,az as H,d as K,Z as X,s as p,aI as B,i as y,a2 as I,bY as Y,w as Z,b9 as D,a4 as U,bZ as q,g as J,b1 as Q,x as ee,bG as oe,bF as re,a7 as x,b_ as te}from"./index-ed258134.js";const ne=V("n-avatar-group"),ae=w("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[A(C("&","--n-merged-color: var(--n-color-modal);")),G(C("&","--n-merged-color: var(--n-color-popover);")),C("img",`
 width: 100%;
 height: 100%;
 `),H("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),w("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),H("text","line-height: 1.25")]),se=Object.assign(Object.assign({},I.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ce=K({name:"Avatar",props:se,setup(r){const{mergedClsPrefixRef:l,inlineThemeDisabled:h}=X(r),s=p(!1);let d=null;const b=p(null),i=p(null),L=()=>{const{value:e}=b;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:o}=i;if(o){const{offsetWidth:n,offsetHeight:t}=o,{offsetWidth:a,offsetHeight:O}=e,F=.9,S=Math.min(n/a*F,t/O*F,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${S})`}}},m=B(ne,null),g=y(()=>{const{size:e}=r;if(e)return e;const{size:o}=m||{};return o||"medium"}),R=I("Avatar","-avatar",ae,Y,r,l),c=B(N,null),u=y(()=>{if(m)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:c?c.roundRef.value:!1}),z=y(()=>m?!0:r.bordered||!1),f=e=>{var o;if(!j.value)return;s.value=!0;const{onError:n,imgProps:t}=r;(o=t?.onError)===null||o===void 0||o.call(t,e),n&&n(e)};Z(()=>r.src,()=>s.value=!1);const T=y(()=>{const e=g.value,o=u.value,n=z.value,{color:t}=r,{self:{borderRadius:a,fontSize:O,color:F,border:S,colorModal:$,colorPopover:W},common:{cubicBezierEaseInOut:_}}=R.value;let E;return typeof e=="number"?E=`${e}px`:E=R.value.self[D("height",e)],{"--n-font-size":O,"--n-border":n?S:"none","--n-border-radius":o?"50%":a,"--n-color":t||F,"--n-color-modal":t||$,"--n-color-popover":t||W,"--n-bezier":_,"--n-merged-size":`var(--n-avatar-size-override, ${E})`}}),v=h?U("avatar",y(()=>{const e=g.value,o=u.value,n=z.value,{color:t}=r;let a="";return e&&(typeof e=="number"?a+=`a${e}`:a+=e[0]),o&&(a+="b"),n&&(a+="c"),t&&(a+=q(t)),a}),T,r):void 0,j=p(!r.lazy);J(()=>{if(P)return;let e;const o=Q(()=>{e?.(),e=void 0,r.lazy&&(e=M(i.value,r.intersectionObserverOptions,j))});ee(()=>{o(),e?.()})});const k=p(!r.lazy);return{textRef:b,selfRef:i,mergedRoundRef:u,mergedClsPrefix:l,fitTextTransform:L,cssVars:h?void 0:T,themeClass:v?.themeClass,onRender:v?.onRender,hasLoadError:s,handleError:f,shouldStartLoading:j,loaded:k,mergedOnLoad:e=>{var o;const{onLoad:n,imgProps:t}=r;n?.(e),(o=t?.onLoad)===null||o===void 0||o.call(t,e),k.value=!0}}},render(){var r,l;const{$slots:h,src:s,mergedClsPrefix:d,lazy:b,onRender:i,mergedOnLoad:L,shouldStartLoading:m,loaded:g,hasLoadError:R}=this;i?.();let c;const u=!g&&!R&&(this.renderPlaceholder?this.renderPlaceholder():(l=(r=this.$slots).placeholder)===null||l===void 0?void 0:l.call(r));return this.hasLoadError?c=this.renderFallback?this.renderFallback():oe(h.fallback,()=>[x("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=re(h.default,z=>{if(z)return x(te,{onResize:this.fitTextTransform},{default:()=>x("span",{ref:"textRef",class:`${d}-avatar__text`},z)});if(s){const{imgProps:f}=this;return x("img",Object.assign(Object.assign({},f),{loading:P&&!this.intersectionObserverOptions&&b?"lazy":"eager",src:P||m||g?s:void 0,onLoad:L,"data-image-src":s,onError:this.handleError,style:[f?.style,{objectFit:this.objectFit},u?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),x("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},c,b&&u)}});export{ce as N};
