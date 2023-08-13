import{d as ae,el as Ot,em as Ft,g as Me,eA as rn,ea as an,i as A,s as M,aD as $e,e0 as rt,e5 as Ee,a7 as f,bk as sn,b_ as vt,en as De,dO as dn,aq as ut,cD as un,eB as gt,x as kt,X as L,az as j,V as le,Z as Pt,a2 as he,eC as cn,b7 as Mt,aI as ct,aT as fn,b9 as ue,a4 as He,cy as zt,eD as ft,cN as Ce,ac as It,aA as oe,bb as at,Y as _t,a0 as te,eE as hn,w as Se,eq as Je,aE as bt,eF as vn,bF as gn,e6 as bn,bl as pn,bG as mn,eG as yn,b1 as wn,eH as xn,eI as Cn,N as Sn,F as Rn,eJ as Tn,eK as On,a1 as pt,cP as Fn,$ as kn,a5 as Pn,a6 as st,a8 as Mn,a9 as zn,ab as In,ad as _n,bi as An,ae as mt,af as Bn,cB as Nn,ag as re}from"./index-ed258134.js";import{F as En,N as Qe}from"./Tag-ace36130.js";function Ke(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function et(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}function yt(e){return e&-e}class Ln{constructor(t,n){this.l=t,this.min=n;const o=new Array(t+1);for(let i=0;i<t+1;++i)o[i]=0;this.ft=o}add(t,n){if(n===0)return;const{l:o,ft:i}=this;for(t+=1;t<=o;)i[t]+=n,t+=yt(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:o,l:i}=this;if(t>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=t*o;for(;t>0;)s+=n[t],t-=yt(t);return s}getBound(t){let n=0,o=this.l;for(;o>n;){const i=Math.floor((n+o)/2),s=this.sum(i);if(s>t){o=i;continue}else if(s<t){if(n===i)return this.sum(n+1)<=t?n+1:i;n=i}else return i}return n}}let Le;function $n(){return Le===void 0&&("matchMedia"in window?Le=window.matchMedia("(pointer:coarse)").matches:Le=!1),Le}let tt;function wt(){return tt===void 0&&(tt="chrome"in window?window.devicePixelRatio:1),tt}const Dn=De(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[De("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[De("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Kn=ae({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=Ot();Dn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Ft,ssr:t}),Me(()=>{const{defaultScrollIndex:p,defaultScrollKey:x}=e;p!=null?b({index:p}):x!=null&&b({key:x})});let n=!1,o=!1;rn(()=>{if(n=!1,!o){o=!0;return}b({top:v.value,left:h})}),an(()=>{n=!0,o||(o=!0)});const i=A(()=>{const p=new Map,{keyField:x}=e;return e.items.forEach((N,q)=>{p.set(N[x],q)}),p}),s=M(null),a=M(void 0),r=new Map,m=A(()=>{const{items:p,itemSize:x,keyField:N}=e,q=new Ln(p.length,x);return p.forEach((Y,U)=>{const V=Y[N],Z=r.get(V);Z!==void 0&&q.add(U,Z)}),q}),u=M(0);let h=0;const v=M(0),O=$e(()=>Math.max(m.value.getBound(v.value-rt(e.paddingTop))-1,0)),z=A(()=>{const{value:p}=a;if(p===void 0)return[];const{items:x,itemSize:N}=e,q=O.value,Y=Math.min(q+Math.ceil(p/N+1),x.length-1),U=[];for(let V=q;V<=Y;++V)U.push(x[V]);return U}),b=(p,x)=>{if(typeof p=="number"){T(p,x,"auto");return}const{left:N,top:q,index:Y,key:U,position:V,behavior:Z,debounce:d=!0}=p;if(N!==void 0||q!==void 0)T(N,q,Z);else if(Y!==void 0)R(Y,Z,d);else if(U!==void 0){const y=i.value.get(U);y!==void 0&&R(y,Z,d)}else V==="bottom"?T(0,Number.MAX_SAFE_INTEGER,Z):V==="top"&&T(0,0,Z)};let F,$=null;function R(p,x,N){const{value:q}=m,Y=q.sum(p)+rt(e.paddingTop);if(!N)s.value.scrollTo({left:0,top:Y,behavior:x});else{F=p,$!==null&&window.clearTimeout($),$=window.setTimeout(()=>{F=void 0,$=null},16);const{scrollTop:U,offsetHeight:V}=s.value;if(Y>U){const Z=q.get(p);Y+Z<=U+V||s.value.scrollTo({left:0,top:Y+Z-V,behavior:x})}else s.value.scrollTo({left:0,top:Y,behavior:x})}}function T(p,x,N){s.value.scrollTo({left:p,top:x,behavior:N})}function D(p,x){var N,q,Y;if(n||e.ignoreItemResize||K(x.target))return;const{value:U}=m,V=i.value.get(p),Z=U.get(V),d=(Y=(q=(N=x.borderBoxSize)===null||N===void 0?void 0:N[0])===null||q===void 0?void 0:q.blockSize)!==null&&Y!==void 0?Y:x.contentRect.height;if(d===Z)return;d-e.itemSize===0?r.delete(p):r.set(p,d-e.itemSize);const H=d-Z;if(H===0)return;U.add(V,H);const ee=s.value;if(ee!=null){if(F===void 0){const se=U.sum(V);ee.scrollTop>se&&ee.scrollBy(0,H)}else if(V<F)ee.scrollBy(0,H);else if(V===F){const se=U.sum(V);d+se>ee.scrollTop+ee.offsetHeight&&ee.scrollBy(0,H)}J()}u.value++}const w=!$n();let C=!1;function P(p){var x;(x=e.onScroll)===null||x===void 0||x.call(e,p),(!w||!C)&&J()}function W(p){var x;if((x=e.onWheel)===null||x===void 0||x.call(e,p),w){const N=s.value;if(N!=null){if(p.deltaX===0&&(N.scrollTop===0&&p.deltaY<=0||N.scrollTop+N.offsetHeight>=N.scrollHeight&&p.deltaY>=0))return;p.preventDefault(),N.scrollTop+=p.deltaY/wt(),N.scrollLeft+=p.deltaX/wt(),J(),C=!0,dn(()=>{C=!1})}}}function G(p){if(n||K(p.target)||p.contentRect.height===a.value)return;a.value=p.contentRect.height;const{onResize:x}=e;x!==void 0&&x(p)}function J(){const{value:p}=s;p!=null&&(v.value=p.scrollTop,h=p.scrollLeft)}function K(p){let x=p;for(;x!==null;){if(x.style.display==="none")return!0;x=x.parentElement}return!1}return{listHeight:a,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:A(()=>{const{itemResizable:p}=e,x=Ee(m.value.sum());return u.value,[e.itemsStyle,{boxSizing:"content-box",height:p?"":x,minHeight:p?x:"",paddingTop:Ee(e.paddingTop),paddingBottom:Ee(e.paddingBottom)}]}),visibleItemsStyle:A(()=>(u.value,{transform:`translateY(${Ee(m.value.sum(O.value))})`})),viewportItems:z,listElRef:s,itemsElRef:M(null),scrollTo:b,handleListResize:G,handleListScroll:P,handleListWheel:W,handleItemResize:D}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:o}=this;return f(vt,{onResize:this.handleListResize},{default:()=>{var i,s;return f("div",sn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?f("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[f(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(a=>{const r=a[t],m=n.get(r),u=this.$slots.default({item:a,index:m})[0];return e?f(vt,{key:r,onResize:h=>this.handleItemResize(r,h)},{default:()=>u}):(u.key=r,u)})})]):(s=(i=this.$slots).empty)===null||s===void 0?void 0:s.call(i)])}})}}),be="v-hidden",Vn=De("[v-hidden]",{display:"none!important"}),xt=ae({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=M(null),o=M(null);function i(){const{value:a}=n,{getCounter:r,getTail:m}=e;let u;if(r!==void 0?u=r():u=o.value,!a||!u)return;u.hasAttribute(be)&&u.removeAttribute(be);const{children:h}=a,v=a.offsetWidth,O=[],z=t.tail?m?.():null;let b=z?z.offsetWidth:0,F=!1;const $=a.children.length-(t.tail?1:0);for(let T=0;T<$-1;++T){if(T<0)continue;const D=h[T];if(F){D.hasAttribute(be)||D.setAttribute(be,"");continue}else D.hasAttribute(be)&&D.removeAttribute(be);const w=D.offsetWidth;if(b+=w,O[T]=w,b>v){const{updateCounter:C}=e;for(let P=T;P>=0;--P){const W=$-1-P;C!==void 0?C(W):u.textContent=`${W}`;const G=u.offsetWidth;if(b-=O[P],b+G<=v||P===0){F=!0,T=P-1,z&&(T===-1?(z.style.maxWidth=`${v-G}px`,z.style.boxSizing="border-box"):z.style.maxWidth="");break}}}}const{onUpdateOverflow:R}=e;F?R!==void 0&&R(!0):(R!==void 0&&R(!1),u.setAttribute(be,""))}const s=Ot();return Vn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ft,ssr:s}),Me(i),{selfRef:n,counterRef:o,sync:i}},render(){const{$slots:e}=this;return ut(this.sync),f("div",{class:"v-overflow",ref:"selfRef"},[un(e,"default"),e.counter?e.counter():f("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function At(e,t){t&&(Me(()=>{const{value:n}=e;n&&gt.registerHandler(n,t)}),kt(()=>{const{value:n}=e;n&&gt.unregisterHandler(n)}))}const Wn=ae({name:"Empty",render(){return f("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),f("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Hn=ae({props:{onFocus:Function,onBlur:Function},setup(e){return()=>f("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Ct(e){return Array.isArray(e)?e:[e]}const dt={STOP:"STOP"};function Bt(e,t){const n=t(e);e.children!==void 0&&n!==dt.STOP&&e.children.forEach(o=>Bt(o,t))}function jn(e,t={}){const{preserveGroup:n=!1}=t,o=[],i=n?a=>{a.isLeaf||(o.push(a.key),s(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),s(a.children))};function s(a){a.forEach(i)}return s(e),o}function Gn(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function Un(e){return e.children}function qn(e){return e.key}function Yn(){return!1}function Zn(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function Xn(e){return e.disabled===!0}function Jn(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function nt(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function ot(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function Qn(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function eo(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function to(e){return e?.type==="group"}function no(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class oo extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function io(e,t,n,o){return Ve(t.concat(e),n,o,!1)}function lo(e,t){const n=new Set;return e.forEach(o=>{const i=t.treeNodeMap.get(o);if(i!==void 0){let s=i.parent;for(;s!==null&&!(s.disabled||n.has(s.key));)n.add(s.key),s=s.parent}}),n}function ro(e,t,n,o){const i=Ve(t,n,o,!1),s=Ve(e,n,o,!0),a=lo(e,n),r=[];return i.forEach(m=>{(s.has(m)||a.has(m))&&r.push(m)}),r.forEach(m=>i.delete(m)),i}function it(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:i,indeterminateKeys:s,cascade:a,leafOnly:r,checkStrategy:m,allowNotLoaded:u}=e;if(!a)return o!==void 0?{checkedKeys:Qn(n,o),indeterminateKeys:Array.from(s)}:i!==void 0?{checkedKeys:eo(n,i),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:h}=t;let v;i!==void 0?v=ro(i,n,t,u):o!==void 0?v=io(o,n,t,u):v=Ve(n,t,u,!1);const O=m==="parent",z=m==="child"||r,b=v,F=new Set,$=Math.max.apply(null,Array.from(h.keys()));for(let R=$;R>=0;R-=1){const T=R===0,D=h.get(R);for(const w of D){if(w.isLeaf)continue;const{key:C,shallowLoaded:P}=w;if(z&&P&&w.children.forEach(K=>{!K.disabled&&!K.isLeaf&&K.shallowLoaded&&b.has(K.key)&&b.delete(K.key)}),w.disabled||!P)continue;let W=!0,G=!1,J=!0;for(const K of w.children){const p=K.key;if(!K.disabled){if(J&&(J=!1),b.has(p))G=!0;else if(F.has(p)){G=!0,W=!1;break}else if(W=!1,G)break}}W&&!J?(O&&w.children.forEach(K=>{!K.disabled&&b.has(K.key)&&b.delete(K.key)}),b.add(C)):G&&F.add(C),T&&z&&b.has(C)&&b.delete(C)}}return{checkedKeys:Array.from(b),indeterminateKeys:Array.from(F)}}function Ve(e,t,n,o){const{treeNodeMap:i,getChildren:s}=t,a=new Set,r=new Set(e);return e.forEach(m=>{const u=i.get(m);u!==void 0&&Bt(u,h=>{if(h.disabled)return dt.STOP;const{key:v}=h;if(!a.has(v)&&(a.add(v),r.add(v),Jn(h.rawNode,s))){if(o)return dt.STOP;if(!n)throw new oo}})}),r}function ao(e,{includeGroup:t=!1,includeSelf:n=!0},o){var i;const s=o.treeNodeMap;let a=e==null?null:(i=s.get(e))!==null&&i!==void 0?i:null;const r={keyPath:[],treeNodePath:[],treeNode:a};if(a?.ignored)return r.treeNode=null,r;for(;a;)!a.ignored&&(t||!a.isGroup)&&r.treeNodePath.push(a),a=a.parent;return r.treeNodePath.reverse(),n||r.treeNodePath.pop(),r.keyPath=r.treeNodePath.map(m=>m.key),r}function so(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function uo(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i+1)%o]:i===n.length-1?null:n[i+1]}function St(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const i=t==="prev"?co:uo,s={reverse:t==="prev"};let a=!1,r=null;function m(u){if(u!==null){if(u===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){r=e;return}}else if((!u.disabled||o)&&!u.ignored&&!u.isGroup){r=u;return}if(u.isGroup){const h=ht(u,s);h!==null?r=h:m(i(u,n))}else{const h=i(u,!1);if(h!==null)m(h);else{const v=fo(u);v?.isGroup?m(i(v,n)):n&&m(i(u,!0))}}}}return m(e),r}function co(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i-1+o)%o]:i===0?null:n[i-1]}function fo(e){return e.parent}function ht(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:i}=o,s=n?i-1:0,a=n?-1:i,r=n?-1:1;for(let m=s;m!==a;m+=r){const u=o[m];if(!u.disabled&&!u.ignored)if(u.isGroup){const h=ht(u,t);if(h!==null)return h}else return u}}return null}const ho={getChild(){return this.ignored?null:ht(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return St(this,"next",e)},getPrev(e={}){return St(this,"prev",e)}};function vo(e,t){const n=t?new Set(t):void 0,o=[];function i(s){s.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&i(a.children)})}return i(e),o}function go(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Nt(e,t,n,o,i,s=null,a=0){const r=[];return e.forEach((m,u)=>{var h;const v=Object.create(o);if(v.rawNode=m,v.siblings=r,v.level=a,v.index=u,v.isFirstChild=u===0,v.isLastChild=u+1===e.length,v.parent=s,!v.ignored){const O=i(m);Array.isArray(O)&&(v.children=Nt(O,t,n,o,i,v,a+1))}r.push(v),t.set(v.key,v),n.has(a)||n.set(a,[]),(h=n.get(a))===null||h===void 0||h.push(v)}),r}function bo(e,t={}){var n;const o=new Map,i=new Map,{getDisabled:s=Xn,getIgnored:a=Yn,getIsGroup:r=to,getKey:m=qn}=t,u=(n=t.getChildren)!==null&&n!==void 0?n:Un,h=t.ignoreEmptyChildren?w=>{const C=u(w);return Array.isArray(C)?C.length?C:null:C}:u,v=Object.assign({get key(){return m(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return r(this.rawNode)},get isLeaf(){return Gn(this.rawNode,h)},get shallowLoaded(){return Zn(this.rawNode,h)},get ignored(){return a(this.rawNode)},contains(w){return go(this,w)}},ho),O=Nt(e,o,i,v,h);function z(w){if(w==null)return null;const C=o.get(w);return C&&!C.isGroup&&!C.ignored?C:null}function b(w){if(w==null)return null;const C=o.get(w);return C&&!C.ignored?C:null}function F(w,C){const P=b(w);return P?P.getPrev(C):null}function $(w,C){const P=b(w);return P?P.getNext(C):null}function R(w){const C=b(w);return C?C.getParent():null}function T(w){const C=b(w);return C?C.getChild():null}const D={treeNodes:O,treeNodeMap:o,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:h,getFlattenedNodes(w){return vo(O,w)},getNode:z,getPrev:F,getNext:$,getParent:R,getChild:T,getFirstAvailableNode(){return so(O)},getPath(w,C={}){return ao(w,C,D)},getCheckedKeys(w,C={}){const{cascade:P=!0,leafOnly:W=!1,checkStrategy:G="all",allowNotLoaded:J=!1}=C;return it({checkedKeys:nt(w),indeterminateKeys:ot(w),cascade:P,leafOnly:W,checkStrategy:G,allowNotLoaded:J},D)},check(w,C,P={}){const{cascade:W=!0,leafOnly:G=!1,checkStrategy:J="all",allowNotLoaded:K=!1}=P;return it({checkedKeys:nt(C),indeterminateKeys:ot(C),keysToCheck:w==null?[]:Ct(w),cascade:W,leafOnly:G,checkStrategy:J,allowNotLoaded:K},D)},uncheck(w,C,P={}){const{cascade:W=!0,leafOnly:G=!1,checkStrategy:J="all",allowNotLoaded:K=!1}=P;return it({checkedKeys:nt(C),indeterminateKeys:ot(C),keysToUncheck:w==null?[]:Ct(w),cascade:W,leafOnly:G,checkStrategy:J,allowNotLoaded:K},D)},getNonLeafKeys(w={}){return jn(O,w)}};return D}const po=L("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[j("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[le("+",[j("description",`
 margin-top: 8px;
 `)])]),j("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),j("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),mo=Object.assign(Object.assign({},he.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),yo=ae({name:"Empty",props:mo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Pt(e),o=he("Empty","-empty",po,cn,e,t),{localeRef:i}=Mt("Empty"),s=ct(fn,null),a=A(()=>{var h,v,O;return(h=e.description)!==null&&h!==void 0?h:(O=(v=s?.mergedComponentPropsRef.value)===null||v===void 0?void 0:v.Empty)===null||O===void 0?void 0:O.description}),r=A(()=>{var h,v;return((v=(h=s?.mergedComponentPropsRef.value)===null||h===void 0?void 0:h.Empty)===null||v===void 0?void 0:v.renderIcon)||(()=>f(Wn,null))}),m=A(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:v},self:{[ue("iconSize",h)]:O,[ue("fontSize",h)]:z,textColor:b,iconColor:F,extraTextColor:$}}=o.value;return{"--n-icon-size":O,"--n-font-size":z,"--n-bezier":v,"--n-text-color":b,"--n-icon-color":F,"--n-extra-text-color":$}}),u=n?He("empty",A(()=>{let h="";const{size:v}=e;return h+=v[0],h}),m,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:r,localizedDescription:A(()=>a.value||i.value.description),cssVars:n?void 0:m,themeClass:u?.themeClass,onRender:u?.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),f("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?f("div",{class:`${t}-empty__icon`},e.icon?e.icon():f(zt,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?f("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?f("div",{class:`${t}-empty__extra`},e.extra()):null)}});function wo(e,t){return f(It,{name:"fade-in-scale-up-transition"},{default:()=>e?f(zt,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>f(En)}):null})}const Rt=ae({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:i,renderLabelRef:s,renderOptionRef:a,labelFieldRef:r,valueFieldRef:m,showCheckmarkRef:u,nodePropsRef:h,handleOptionClick:v,handleOptionMouseEnter:O}=ct(ft),z=$e(()=>{const{value:R}=n;return R?e.tmNode.key===R.key:!1});function b(R){const{tmNode:T}=e;T.disabled||v(R,T)}function F(R){const{tmNode:T}=e;T.disabled||O(R,T)}function $(R){const{tmNode:T}=e,{value:D}=z;T.disabled||D||O(R,T)}return{multiple:o,isGrouped:$e(()=>{const{tmNode:R}=e,{parent:T}=R;return T&&T.rawNode.type==="group"}),showCheckmark:u,nodeProps:h,isPending:z,isSelected:$e(()=>{const{value:R}=t,{value:T}=o;if(R===null)return!1;const D=e.tmNode.rawNode[m.value];if(T){const{value:w}=i;return w.has(D)}else return R===D}),labelField:r,renderLabel:s,renderOption:a,handleMouseMove:$,handleMouseEnter:F,handleClick:b}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:i,showCheckmark:s,nodeProps:a,renderOption:r,renderLabel:m,handleClick:u,handleMouseEnter:h,handleMouseMove:v}=this,O=wo(n,e),z=m?[m(t,n),s&&O]:[Ce(t[this.labelField],t,n),s&&O],b=a?.(t),F=f("div",Object.assign({},b,{class:[`${e}-base-select-option`,t.class,b?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:s}],style:[b?.style||"",t.style||""],onClick:et([u,b?.onClick]),onMouseenter:et([h,b?.onMouseenter]),onMousemove:et([v,b?.onMousemove])}),f("div",{class:`${e}-base-select-option__content`},z));return t.render?t.render({node:F,option:t,selected:n}):r?r({node:F,option:t,selected:n}):F}}),Tt=ae({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=ct(ft);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:i}}=this,s=o?.(i),a=t?t(i,!1):Ce(i[this.labelField],i,!1),r=f("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s?.class]}),a);return i.render?i.render({node:r,option:i}):n?n({node:r,option:i,selected:!1}):r}}),xo=L("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[L("scrollbar",`
 max-height: var(--n-height);
 `),L("virtual-list",`
 max-height: var(--n-height);
 `),L("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[j("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),L("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),L("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),j("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),j("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),j("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),L("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),L("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[oe("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),le("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),le("&:active",`
 color: var(--n-option-text-color-pressed);
 `),oe("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),oe("pending",[le("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),oe("selected",`
 color: var(--n-option-text-color-active);
 `,[le("&::before",`
 background-color: var(--n-option-color-active);
 `),oe("pending",[le("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),oe("disabled",`
 cursor: not-allowed;
 `,[at("selected",`
 color: var(--n-option-text-color-disabled);
 `),oe("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),j("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[_t({enterScale:"0.5"})])])]),Co=ae({name:"InternalSelectMenu",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=he("InternalSelectMenu","-internal-select-menu",xo,hn,e,te(e,"clsPrefix")),n=M(null),o=M(null),i=M(null),s=A(()=>e.treeMate.getFlattenedNodes()),a=A(()=>no(s.value)),r=M(null);function m(){const{treeMate:d}=e;let y=null;const{value:H}=e;H===null?y=d.getFirstAvailableNode():(e.multiple?y=d.getNode((H||[])[(H||[]).length-1]):y=d.getNode(H),(!y||y.disabled)&&(y=d.getFirstAvailableNode())),p(y||null)}function u(){const{value:d}=r;d&&!e.treeMate.getNode(d.key)&&(r.value=null)}let h;Se(()=>e.show,d=>{d?h=Se(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?m():u(),ut(x)):u()},{immediate:!0}):h?.()},{immediate:!0}),kt(()=>{h?.()});const v=A(()=>rt(t.value.self[ue("optionHeight",e.size)])),O=A(()=>Je(t.value.self[ue("padding",e.size)])),z=A(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),b=A(()=>{const d=s.value;return d&&d.length===0});function F(d){const{onToggle:y}=e;y&&y(d)}function $(d){const{onScroll:y}=e;y&&y(d)}function R(d){var y;(y=i.value)===null||y===void 0||y.sync(),$(d)}function T(){var d;(d=i.value)===null||d===void 0||d.sync()}function D(){const{value:d}=r;return d||null}function w(d,y){y.disabled||p(y,!1)}function C(d,y){y.disabled||F(y)}function P(d){var y;Ke(d,"action")||(y=e.onKeyup)===null||y===void 0||y.call(e,d)}function W(d){var y;Ke(d,"action")||(y=e.onKeydown)===null||y===void 0||y.call(e,d)}function G(d){var y;(y=e.onMousedown)===null||y===void 0||y.call(e,d),!e.focusable&&d.preventDefault()}function J(){const{value:d}=r;d&&p(d.getNext({loop:!0}),!0)}function K(){const{value:d}=r;d&&p(d.getPrev({loop:!0}),!0)}function p(d,y=!1){r.value=d,y&&x()}function x(){var d,y;const H=r.value;if(!H)return;const ee=a.value(H.key);ee!==null&&(e.virtualScroll?(d=o.value)===null||d===void 0||d.scrollTo({index:ee}):(y=i.value)===null||y===void 0||y.scrollTo({index:ee,elSize:v.value}))}function N(d){var y,H;!((y=n.value)===null||y===void 0)&&y.contains(d.target)&&((H=e.onFocus)===null||H===void 0||H.call(e,d))}function q(d){var y,H;!((y=n.value)===null||y===void 0)&&y.contains(d.relatedTarget)||(H=e.onBlur)===null||H===void 0||H.call(e,d)}bt(ft,{handleOptionMouseEnter:w,handleOptionClick:C,valueSetRef:z,pendingTmNodeRef:r,nodePropsRef:te(e,"nodeProps"),showCheckmarkRef:te(e,"showCheckmark"),multipleRef:te(e,"multiple"),valueRef:te(e,"value"),renderLabelRef:te(e,"renderLabel"),renderOptionRef:te(e,"renderOption"),labelFieldRef:te(e,"labelField"),valueFieldRef:te(e,"valueField")}),bt(vn,n),Me(()=>{const{value:d}=i;d&&d.sync()});const Y=A(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:y},self:{height:H,borderRadius:ee,color:se,groupHeaderTextColor:Re,actionDividerColor:Te,optionTextColorPressed:pe,optionTextColor:me,optionTextColorDisabled:de,optionTextColorActive:ne,optionOpacityDisabled:ye,optionCheckColor:ce,actionTextColor:Oe,optionColorPending:ve,optionColorActive:ge,loadingColor:Fe,loadingSize:ke,optionColorActivePending:Pe,[ue("optionFontSize",d)]:we,[ue("optionHeight",d)]:xe,[ue("optionPadding",d)]:ie}}=t.value;return{"--n-height":H,"--n-action-divider-color":Te,"--n-action-text-color":Oe,"--n-bezier":y,"--n-border-radius":ee,"--n-color":se,"--n-option-font-size":we,"--n-group-header-text-color":Re,"--n-option-check-color":ce,"--n-option-color-pending":ve,"--n-option-color-active":ge,"--n-option-color-active-pending":Pe,"--n-option-height":xe,"--n-option-opacity-disabled":ye,"--n-option-text-color":me,"--n-option-text-color-active":ne,"--n-option-text-color-disabled":de,"--n-option-text-color-pressed":pe,"--n-option-padding":ie,"--n-option-padding-left":Je(ie,"left"),"--n-option-padding-right":Je(ie,"right"),"--n-loading-color":Fe,"--n-loading-size":ke}}),{inlineThemeDisabled:U}=e,V=U?He("internal-select-menu",A(()=>e.size[0]),Y,e):void 0,Z={selfRef:n,next:J,prev:K,getPendingTmNode:D};return At(n,e.onResize),Object.assign({mergedTheme:t,virtualListRef:o,scrollbarRef:i,itemSize:v,padding:O,flattenedNodes:s,empty:b,virtualListContainer(){const{value:d}=o;return d?.listElRef},virtualListContent(){const{value:d}=o;return d?.itemsElRef},doScroll:$,handleFocusin:N,handleFocusout:q,handleKeyUp:P,handleKeyDown:W,handleMouseDown:G,handleVirtualListResize:T,handleVirtualListScroll:R,cssVars:U?void 0:Y,themeClass:V?.themeClass,onRender:V?.onRender},Z)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:i,onRender:s}=this;return s?.(),f("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?f("div",{class:`${n}-base-select-menu__loading`},f(bn,{clsPrefix:n,strokeWidth:20})):this.empty?f("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},mn(e.empty,()=>[f(yo,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):f(pn,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?f(Kn,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?f(Tt,{key:a.key,clsPrefix:n,tmNode:a}):a.ignored?null:f(Rt,{clsPrefix:n,key:a.key,tmNode:a})}):f("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?f(Tt,{key:a.key,clsPrefix:n,tmNode:a}):f(Rt,{clsPrefix:n,key:a.key,tmNode:a})))}),gn(e.action,a=>a&&[f("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},a),f(Hn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),So=le([L("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[L("base-loading",`
 color: var(--n-loading-color);
 `),L("base-selection-tags","min-height: var(--n-height);"),j("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),j("state-border",`
 z-index: 1;
 border-color: #0000;
 `),L("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[j("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),L("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[j("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),L("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[j("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),L("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),L("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[L("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[j("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),j("render-label",`
 color: var(--n-text-color);
 `)]),at("disabled",[le("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),oe("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),oe("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),L("base-selection-label","background-color: var(--n-color-active);"),L("base-selection-tags","background-color: var(--n-color-active);")])]),oe("disabled","cursor: not-allowed;",[j("arrow",`
 color: var(--n-arrow-color-disabled);
 `),L("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[L("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),j("render-label",`
 color: var(--n-text-color-disabled);
 `)]),L("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),L("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),L("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[j("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),j("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>oe(`${e}-status`,[j("state-border",`border: var(--n-border-${e});`),at("disabled",[le("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),oe("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),L("base-selection-label",`background-color: var(--n-color-active-${e});`),L("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),oe("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),L("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),L("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[le("&:last-child","padding-right: 0;"),L("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[j("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ro=ae({name:"InternalSelection",props:Object.assign(Object.assign({},he.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const t=M(null),n=M(null),o=M(null),i=M(null),s=M(null),a=M(null),r=M(null),m=M(null),u=M(null),h=M(null),v=M(!1),O=M(!1),z=M(!1),b=he("InternalSelection","-internal-selection",So,yn,e,te(e,"clsPrefix")),F=A(()=>e.clearable&&!e.disabled&&(z.value||e.active)),$=A(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ce(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),R=A(()=>{const c=e.selectedOption;if(c)return c[e.labelField]}),T=A(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function D(){var c;const{value:S}=t;if(S){const{value:X}=n;X&&(X.style.width=`${S.offsetWidth}px`,e.maxTagCount!=="responsive"&&((c=u.value)===null||c===void 0||c.sync()))}}function w(){const{value:c}=h;c&&(c.style.display="none")}function C(){const{value:c}=h;c&&(c.style.display="inline-block")}Se(te(e,"active"),c=>{c||w()}),Se(te(e,"pattern"),()=>{e.multiple&&ut(D)});function P(c){const{onFocus:S}=e;S&&S(c)}function W(c){const{onBlur:S}=e;S&&S(c)}function G(c){const{onDeleteOption:S}=e;S&&S(c)}function J(c){const{onClear:S}=e;S&&S(c)}function K(c){const{onPatternInput:S}=e;S&&S(c)}function p(c){var S;(!c.relatedTarget||!(!((S=o.value)===null||S===void 0)&&S.contains(c.relatedTarget)))&&P(c)}function x(c){var S;!((S=o.value)===null||S===void 0)&&S.contains(c.relatedTarget)||W(c)}function N(c){J(c)}function q(){z.value=!0}function Y(){z.value=!1}function U(c){!e.active||!e.filterable||c.target!==n.value&&c.preventDefault()}function V(c){G(c)}function Z(c){if(c.key==="Backspace"&&!d.value&&!e.pattern.length){const{selectedOptions:S}=e;S?.length&&V(S[S.length-1])}}const d=M(!1);let y=null;function H(c){const{value:S}=t;if(S){const X=c.target.value;S.textContent=X,D()}e.ignoreComposition&&d.value?y=c:K(c)}function ee(){d.value=!0}function se(){d.value=!1,e.ignoreComposition&&K(y),y=null}function Re(c){var S;O.value=!0,(S=e.onPatternFocus)===null||S===void 0||S.call(e,c)}function Te(c){var S;O.value=!1,(S=e.onPatternBlur)===null||S===void 0||S.call(e,c)}function pe(){var c,S;if(e.filterable)O.value=!1,(c=a.value)===null||c===void 0||c.blur(),(S=n.value)===null||S===void 0||S.blur();else if(e.multiple){const{value:X}=i;X?.blur()}else{const{value:X}=s;X?.blur()}}function me(){var c,S,X;e.filterable?(O.value=!1,(c=a.value)===null||c===void 0||c.focus()):e.multiple?(S=i.value)===null||S===void 0||S.focus():(X=s.value)===null||X===void 0||X.focus()}function de(){const{value:c}=n;c&&(C(),c.focus())}function ne(){const{value:c}=n;c&&c.blur()}function ye(c){const{value:S}=r;S&&S.setTextContent(`+${c}`)}function ce(){const{value:c}=m;return c}function Oe(){return n.value}let ve=null;function ge(){ve!==null&&window.clearTimeout(ve)}function Fe(){e.disabled||e.active||(ge(),ve=window.setTimeout(()=>{T.value&&(v.value=!0)},100))}function ke(){ge()}function Pe(c){c||(ge(),v.value=!1)}Se(T,c=>{c||(v.value=!1)}),Me(()=>{wn(()=>{const c=a.value;c&&(c.tabIndex=e.disabled||O.value?-1:0)})}),At(o,e.onResize);const{inlineThemeDisabled:we}=e,xe=A(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:S},self:{borderRadius:X,color:ze,placeholderColor:je,textColor:Ge,paddingSingle:Ue,paddingMultiple:qe,caretColor:Ie,colorDisabled:_e,textColorDisabled:Ae,placeholderColorDisabled:Ye,colorActive:Ze,boxShadowFocus:Be,boxShadowActive:fe,boxShadowHover:l,border:g,borderFocus:k,borderHover:E,borderActive:I,arrowColor:B,arrowColorDisabled:_,loadingColor:Q,colorActiveWarning:Ne,boxShadowFocusWarning:Xe,boxShadowActiveWarning:Lt,boxShadowHoverWarning:$t,borderWarning:Dt,borderFocusWarning:Kt,borderHoverWarning:Vt,borderActiveWarning:Wt,colorActiveError:Ht,boxShadowFocusError:jt,boxShadowActiveError:Gt,boxShadowHoverError:Ut,borderError:qt,borderFocusError:Yt,borderHoverError:Zt,borderActiveError:Xt,clearColor:Jt,clearColorHover:Qt,clearColorPressed:en,clearSize:tn,arrowSize:nn,[ue("height",c)]:on,[ue("fontSize",c)]:ln}}=b.value;return{"--n-bezier":S,"--n-border":g,"--n-border-active":I,"--n-border-focus":k,"--n-border-hover":E,"--n-border-radius":X,"--n-box-shadow-active":fe,"--n-box-shadow-focus":Be,"--n-box-shadow-hover":l,"--n-caret-color":Ie,"--n-color":ze,"--n-color-active":Ze,"--n-color-disabled":_e,"--n-font-size":ln,"--n-height":on,"--n-padding-single":Ue,"--n-padding-multiple":qe,"--n-placeholder-color":je,"--n-placeholder-color-disabled":Ye,"--n-text-color":Ge,"--n-text-color-disabled":Ae,"--n-arrow-color":B,"--n-arrow-color-disabled":_,"--n-loading-color":Q,"--n-color-active-warning":Ne,"--n-box-shadow-focus-warning":Xe,"--n-box-shadow-active-warning":Lt,"--n-box-shadow-hover-warning":$t,"--n-border-warning":Dt,"--n-border-focus-warning":Kt,"--n-border-hover-warning":Vt,"--n-border-active-warning":Wt,"--n-color-active-error":Ht,"--n-box-shadow-focus-error":jt,"--n-box-shadow-active-error":Gt,"--n-box-shadow-hover-error":Ut,"--n-border-error":qt,"--n-border-focus-error":Yt,"--n-border-hover-error":Zt,"--n-border-active-error":Xt,"--n-clear-size":tn,"--n-clear-color":Jt,"--n-clear-color-hover":Qt,"--n-clear-color-pressed":en,"--n-arrow-size":nn}}),ie=we?He("internal-selection",A(()=>e.size[0]),xe,e):void 0;return{mergedTheme:b,mergedClearable:F,patternInputFocused:O,filterablePlaceholder:$,label:R,selected:T,showTagsPanel:v,isComposing:d,counterRef:r,counterWrapperRef:m,patternInputMirrorRef:t,patternInputRef:n,selfRef:o,multipleElRef:i,singleElRef:s,patternInputWrapperRef:a,overflowRef:u,inputTagElRef:h,handleMouseDown:U,handleFocusin:p,handleClear:N,handleMouseEnter:q,handleMouseLeave:Y,handleDeleteOption:V,handlePatternKeyDown:Z,handlePatternInputInput:H,handlePatternInputBlur:Te,handlePatternInputFocus:Re,handleMouseEnterCounter:Fe,handleMouseLeaveCounter:ke,handleFocusout:x,handleCompositionEnd:se,handleCompositionStart:ee,onPopoverUpdateShow:Pe,focus:me,focusInput:de,blur:pe,blurInput:ne,updateCounter:ye,getCounter:ce,getTail:Oe,renderLabel:e.renderLabel,cssVars:we?void 0:xe,themeClass:ie?.themeClass,onRender:ie?.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:i,maxTagCount:s,bordered:a,clsPrefix:r,onRender:m,renderTag:u,renderLabel:h}=this;m?.();const v=s==="responsive",O=typeof s=="number",z=v||O,b=f(Cn,null,{default:()=>f(xn,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var $,R;return(R=($=this.$slots).arrow)===null||R===void 0?void 0:R.call($)}})});let F;if(t){const{labelField:$}=this,R=x=>f("div",{class:`${r}-base-selection-tag-wrapper`,key:x.value},u?u({option:x,handleClose:()=>{this.handleDeleteOption(x)}}):f(Qe,{size:n,closable:!x.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(x)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>h?h(x,!0):Ce(x[$],x,!0)})),T=()=>(O?this.selectedOptions.slice(0,s):this.selectedOptions).map(R),D=i?f("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),f("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,w=v?()=>f("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},f(Qe,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let C;if(O){const x=this.selectedOptions.length-s;x>0&&(C=f("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},f(Qe,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${x}`})))}const P=v?i?f(xt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:T,counter:w,tail:()=>D}):f(xt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:T,counter:w}):O?T().concat(C):T(),W=z?()=>f("div",{class:`${r}-base-selection-popover`},v?T():this.selectedOptions.map(R)):void 0,G=z?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,K=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?f("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},f("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,p=i?f("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},P,v?null:D,b):f("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:o?void 0:0},P,b);F=f(Rn,null,z?f(Sn,Object.assign({},G,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>p,default:W}):p,K)}else if(i){const $=this.pattern||this.isComposing,R=this.active?!$:!this.selected,T=this.active?!1:this.selected;F=f("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),T?f("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},f("div",{class:`${r}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):null,R?f("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,b)}else F=f("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?f("div",{class:`${r}-base-selection-input`,title:Tn(this.label),key:"input"},f("div",{class:`${r}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):f("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),b);return f("div",{ref:"selfRef",class:[`${r}-base-selection`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},F,a?f("div",{class:`${r}-base-selection__border`}):null,a?f("div",{class:`${r}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function Et(e){return e.type==="ignored"}function lt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function To(e,t){return{getIsGroup:We,getIgnored:Et,getKey(o){return We(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function Oo(e,t,n,o){if(!t)return e;function i(s){if(!Array.isArray(s))return[];const a=[];for(const r of s)if(We(r)){const m=i(r[o]);m.length&&a.push(Object.assign({},r,{[o]:m}))}else{if(Et(r))continue;t(n,r)&&a.push(r)}return a}return i(e)}function Fo(e,t,n){const o=new Map;return e.forEach(i=>{We(i)?i[n].forEach(s=>{o.set(s[t],s)}):o.set(i[t],i)}),o}const ko=le([L("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),L("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[_t({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Po=Object.assign(Object.assign({},he.props),{to:st.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Io=ae({name:"Select",props:Po,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:i}=Pt(e),s=he("Select","-select",ko,On,e,t),a=M(e.defaultValue),r=te(e,"value"),m=pt(r,a),u=M(!1),h=M(""),v=A(()=>{const{valueField:l,childrenField:g}=e,k=To(l,g);return bo(x.value,k)}),O=A(()=>Fo(K.value,e.valueField,e.childrenField)),z=M(!1),b=pt(te(e,"show"),z),F=M(null),$=M(null),R=M(null),{localeRef:T}=Mt("Select"),D=A(()=>{var l;return(l=e.placeholder)!==null&&l!==void 0?l:T.value.placeholder}),w=Fn(e,["items","options"]),C=[],P=M([]),W=M([]),G=M(new Map),J=A(()=>{const{fallbackOption:l}=e;if(l===void 0){const{labelField:g,valueField:k}=e;return E=>({[g]:String(E),[k]:E})}return l===!1?!1:g=>Object.assign(l(g),{value:g})}),K=A(()=>W.value.concat(P.value).concat(w.value)),p=A(()=>{const{filter:l}=e;if(l)return l;const{labelField:g,valueField:k}=e;return(E,I)=>{if(!I)return!1;const B=I[g];if(typeof B=="string")return lt(E,B);const _=I[k];return typeof _=="string"?lt(E,_):typeof _=="number"?lt(E,String(_)):!1}}),x=A(()=>{if(e.remote)return w.value;{const{value:l}=K,{value:g}=h;return!g.length||!e.filterable?l:Oo(l,p.value,g,e.childrenField)}});function N(l){const g=e.remote,{value:k}=G,{value:E}=O,{value:I}=J,B=[];return l.forEach(_=>{if(E.has(_))B.push(E.get(_));else if(g&&k.has(_))B.push(k.get(_));else if(I){const Q=I(_);Q&&B.push(Q)}}),B}const q=A(()=>{if(e.multiple){const{value:l}=m;return Array.isArray(l)?N(l):[]}return null}),Y=A(()=>{const{value:l}=m;return!e.multiple&&!Array.isArray(l)?l===null?null:N([l])[0]||null:null}),U=kn(e),{mergedSizeRef:V,mergedDisabledRef:Z,mergedStatusRef:d}=U;function y(l,g){const{onChange:k,"onUpdate:value":E,onUpdateValue:I}=e,{nTriggerFormChange:B,nTriggerFormInput:_}=U;k&&re(k,l,g),I&&re(I,l,g),E&&re(E,l,g),a.value=l,B(),_()}function H(l){const{onBlur:g}=e,{nTriggerFormBlur:k}=U;g&&re(g,l),k()}function ee(){const{onClear:l}=e;l&&re(l)}function se(l){const{onFocus:g,showOnFocus:k}=e,{nTriggerFormFocus:E}=U;g&&re(g,l),E(),k&&de()}function Re(l){const{onSearch:g}=e;g&&re(g,l)}function Te(l){const{onScroll:g}=e;g&&re(g,l)}function pe(){var l;const{remote:g,multiple:k}=e;if(g){const{value:E}=G;if(k){const{valueField:I}=e;(l=q.value)===null||l===void 0||l.forEach(B=>{E.set(B[I],B)})}else{const I=Y.value;I&&E.set(I[e.valueField],I)}}}function me(l){const{onUpdateShow:g,"onUpdate:show":k}=e;g&&re(g,l),k&&re(k,l),z.value=l}function de(){Z.value||(me(!0),z.value=!0,e.filterable&&Ae())}function ne(){me(!1)}function ye(){h.value="",W.value=C}const ce=M(!1);function Oe(){e.filterable&&(ce.value=!0)}function ve(){e.filterable&&(ce.value=!1,b.value||ye())}function ge(){Z.value||(b.value?e.filterable?Ae():ne():de())}function Fe(l){var g,k;!((k=(g=R.value)===null||g===void 0?void 0:g.selfRef)===null||k===void 0)&&k.contains(l.relatedTarget)||(u.value=!1,H(l),ne())}function ke(l){se(l),u.value=!0}function Pe(l){u.value=!0}function we(l){var g;!((g=F.value)===null||g===void 0)&&g.$el.contains(l.relatedTarget)||(u.value=!1,H(l),ne())}function xe(){var l;(l=F.value)===null||l===void 0||l.focus(),ne()}function ie(l){var g;b.value&&(!((g=F.value)===null||g===void 0)&&g.$el.contains(Bn(l))||ne())}function c(l){if(!Array.isArray(l))return[];if(J.value)return Array.from(l);{const{remote:g}=e,{value:k}=O;if(g){const{value:E}=G;return l.filter(I=>k.has(I)||E.has(I))}else return l.filter(E=>k.has(E))}}function S(l){X(l.rawNode)}function X(l){if(Z.value)return;const{tag:g,remote:k,clearFilterAfterSelect:E,valueField:I}=e;if(g&&!k){const{value:B}=W,_=B[0]||null;if(_){const Q=P.value;Q.length?Q.push(_):P.value=[_],W.value=C}}if(k&&G.value.set(l[I],l),e.multiple){const B=c(m.value),_=B.findIndex(Q=>Q===l[I]);if(~_){if(B.splice(_,1),g&&!k){const Q=ze(l[I]);~Q&&(P.value.splice(Q,1),E&&(h.value=""))}}else B.push(l[I]),E&&(h.value="");y(B,N(B))}else{if(g&&!k){const B=ze(l[I]);~B?P.value=[P.value[B]]:P.value=C}_e(),ne(),y(l[I],l)}}function ze(l){return P.value.findIndex(k=>k[e.valueField]===l)}function je(l){b.value||de();const{value:g}=l.target;h.value=g;const{tag:k,remote:E}=e;if(Re(g),k&&!E){if(!g){W.value=C;return}const{onCreate:I}=e,B=I?I(g):{[e.labelField]:g,[e.valueField]:g},{valueField:_}=e;w.value.some(Q=>Q[_]===B[_])||P.value.some(Q=>Q[_]===B[_])?W.value=C:W.value=[B]}}function Ge(l){l.stopPropagation();const{multiple:g}=e;!g&&e.filterable&&ne(),ee(),g?y([],[]):y(null,null)}function Ue(l){!Ke(l,"action")&&!Ke(l,"empty")&&l.preventDefault()}function qe(l){Te(l)}function Ie(l){var g,k,E,I,B;if(!e.keyboard){l.preventDefault();return}switch(l.key){case" ":if(e.filterable)break;l.preventDefault();case"Enter":if(!(!((g=F.value)===null||g===void 0)&&g.isComposing)){if(b.value){const _=(k=R.value)===null||k===void 0?void 0:k.getPendingTmNode();_?S(_):e.filterable||(ne(),_e())}else if(de(),e.tag&&ce.value){const _=W.value[0];if(_){const Q=_[e.valueField],{value:Ne}=m;e.multiple&&Array.isArray(Ne)&&Ne.some(Xe=>Xe===Q)||X(_)}}}l.preventDefault();break;case"ArrowUp":if(l.preventDefault(),e.loading)return;b.value&&((E=R.value)===null||E===void 0||E.prev());break;case"ArrowDown":if(l.preventDefault(),e.loading)return;b.value?(I=R.value)===null||I===void 0||I.next():de();break;case"Escape":b.value&&(Nn(l),ne()),(B=F.value)===null||B===void 0||B.focus();break}}function _e(){var l;(l=F.value)===null||l===void 0||l.focus()}function Ae(){var l;(l=F.value)===null||l===void 0||l.focusInput()}function Ye(){var l;b.value&&((l=$.value)===null||l===void 0||l.syncPosition())}pe(),Se(te(e,"options"),pe);const Ze={focus:()=>{var l;(l=F.value)===null||l===void 0||l.focus()},blur:()=>{var l;(l=F.value)===null||l===void 0||l.blur()}},Be=A(()=>{const{self:{menuBoxShadow:l}}=s.value;return{"--n-menu-box-shadow":l}}),fe=i?He("select",void 0,Be,e):void 0;return Object.assign(Object.assign({},Ze),{mergedStatus:d,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:v,isMounted:Pn(),triggerRef:F,menuRef:R,pattern:h,uncontrolledShow:z,mergedShow:b,adjustedTo:st(e),uncontrolledValue:a,mergedValue:m,followerRef:$,localizedPlaceholder:D,selectedOption:Y,selectedOptions:q,mergedSize:V,mergedDisabled:Z,focused:u,activeWithoutMenuOpen:ce,inlineThemeDisabled:i,onTriggerInputFocus:Oe,onTriggerInputBlur:ve,handleTriggerOrMenuResize:Ye,handleMenuFocus:Pe,handleMenuBlur:we,handleMenuTabOut:xe,handleTriggerClick:ge,handleToggle:S,handleDeleteOption:X,handlePatternInput:je,handleClear:Ge,handleTriggerBlur:Fe,handleTriggerFocus:ke,handleKeydown:Ie,handleMenuAfterLeave:ye,handleMenuClickOutside:ie,handleMenuScroll:qe,handleMenuKeydown:Ie,handleMenuMousedown:Ue,mergedTheme:s,cssVars:i?void 0:Be,themeClass:fe?.themeClass,onRender:fe?.onRender})},render(){return f("div",{class:`${this.mergedClsPrefix}-select`},f(Mn,null,{default:()=>[f(zn,null,{default:()=>f(Ro,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),f(In,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===st.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>f(It,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),_n(f(Co,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,i;return[(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)]},action:()=>{var o,i;return[(i=(o=this.$slots).action)===null||i===void 0?void 0:i.call(o)]}}),this.displayDirective==="show"?[[An,this.mergedShow],[mt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[mt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Hn as F,Io as N,Kn as V,To as a,Co as b,bo as c,yo as d,Ke as h,et as m};
