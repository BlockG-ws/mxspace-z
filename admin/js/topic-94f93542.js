import{H}from"./rounded-button-f9bd8ca1.js";import{R as g,d as T,s as m,h as e,l as v,I as C,k as x,K as E,J as w,ao as I,ap as F,aq as B,F as N,g as D,A as k,L as q,ar as J,r as _,w as A,t as y,j as $,as as W,v as G,b as K,C as Q}from"./index-ed258134.js";import{u as X}from"./use-table-e73dfe72.js";import{I as Y,b as Z}from"./endpoint-59018504.js";import{U as O}from"./index-12ddd62f.js";import{c as ee}from"./use-memo-fetch-data-list-405f9066.js";import{S as te}from"./Search24Regular-d65665e3.js";import{N as ae}from"./Upload-6ae19d88.js";import{N as P}from"./Avatar-039543d0.js";import{d as le,N as ue}from"./Select-b3fce3a9.js";import{N as U,a as j}from"./ListItem-0ee73bf0.js";import{T as M}from"./Trash-7b014e12.js";import{N as R}from"./Pagination-80744f1c.js";import{N as V}from"./Popconfirm-cdb2b546.js";import{a as re,N as b}from"./FormItem-a7c928e6.js";import{N as ne}from"./ButtonGroup-0c60e169.js";import"./Add-30df601e.js";import"./Image-0603570d.js";import"./utils-216cf06a.js";import"./Tooltip-792b7857.js";import"./Tag-ace36130.js";import"./prop-8b8caa29.js";import"./Forward-caa5af88.js";const z=a=>{if(!a)return"";const t=a.split(" ")[0];return t.length>4?a[0]:t},se=ee(a=>g.api.notes.get({params:{page:a,size:50,select:"nid title _id id"}}));function oe(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!q(a)}const ie=T({props:{id:{type:String,required:!0}},setup(a){const t=m(!1),u=m(null),i=m([]),d=m(),p=m(!0),f=async()=>{t.value=!0;const n=await g.api.topics(a.id).get();u.value=n,await l(n.id)},l=async(n,r=1,s=5)=>{p.value=!0;const{data:o,pagination:h}=await g.api.notes.topics(n).get({params:{page:r,size:s}});return p.value=!1,i.value=o,d.value=h,{data:o,pagination:h}},c=async n=>{await g.api.notes(n).patch({data:{topicId:null}}),message.success("已移除文章的专栏引用");const r=i.value.findIndex(s=>s.id===n);-~r&&i.value.splice(r,1)};return()=>{let n;return e(N,null,[e(v,{size:"small",secondary:!0,onClick:f},{default:()=>[e(C,{class:"mr-1"},{default:()=>[e(te,null,null)]}),x("详情")]}),e(E,{show:t.value,closable:!0,onClose:()=>{t.value=!1},closeOnEsc:!0,onUpdateShow:r=>{t.value=r}},{default:()=>[u.value?e(w,{closable:!0,role:"dialog",class:"modal-card md",title:`专栏 - ${u.value.name}`,onClose:()=>{t.value=!1}},{default:()=>[e(I,null,{avatar(){return e(O,{class:"p0",type:"icon",onFinish:r=>{const s=JSON.parse((r.event?.target).responseText);return r.file.url=s.url,u.value&&g.api.topics(u.value.id).patch({data:{icon:s.url}}).then(()=>{u.value&&(u.value.icon=s.url)}),r.file},onError:r=>{try{const s=JSON.parse((r.event?.target).responseText);message.warning(s.message)}catch{}return r.file}},{default:()=>[e(ae,null,{default:()=>[e(P,{size:60,class:"rounded-xl bg-transparent",src:u.value?.icon||void 0},{default:()=>[u.value?.icon?void 0:z(u.value?.name)]})]})]})},header(){return e("b",null,[u.value?.name])},"header-extra":function(){return e("span",{class:"opacity-80"},[u.value?.slug])},description(){return e("p",{class:"opacity-90 clamp-2 break-all"},[u.value?.introduce])},default(){return e("p",null,[u.value?.description])}}),p.value&&i.value.length==0?e(F,{animated:!0,class:"mt-2 h-[350px]"},null):e("div",{class:"mt-4"},[e("p",{class:"flex justify-between items-center"},[e("strong",null,[x("包含的文章：")]),e(ce,{topicId:u.value.id,onSuccess:()=>{B(()=>f())}},null)]),i.value.length===0&&e("div",{class:"h-[300px] flex items-center justify-center"},[e(le,{description:"这里还没有任何内容"},null)]),e(U,{bordered:!0,class:"mt-2"},oe(n=i.value.map(r=>e(j,{key:r.id},{default(){return e("p",{class:"space-x-2 flex items-center"},[e("span",null,[r.title]),e(Y,{path:Z(r.id)},null)])},suffix(){return e(V,{onPositiveClick:()=>c(r.id)},{trigger(){return e(v,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(C,null,{default:()=>[e(M,null,null)]})]})},default(){return`是否移除此话题「${u.value?.name}」？`}})}})))?n:{default:()=>[n]}),e("div",{class:"flex justify-end"},[d.value&&e(R,{class:"mt-4",onUpdatePage:r=>{l(a.id,r)},page:d.value.currentPage,pageCount:d.value.totalPage},null)])])]}):e(w,{class:"modal-card md",role:"dialog",title:"专栏信息获取中"},{default:()=>[e("div",{class:"flex relative gap-2 "},[e(F,{animated:!0,circle:!0,width:60},null),e("div",{class:"flex-grow"},[e(F,{animated:!0,text:!0,repeat:3,class:"flex-grow"},null)])]),e(F,{animated:!0,repeat:2,class:"mt-2",text:!0},null)]})]})])}}}),ce=T({props:{topicId:{type:String,required:!0},onSuccess:{type:Function,required:!1}},setup(a){const t=m(!1),u=async()=>{const n=J(l);await Promise.all(n.map(r=>g.api.notes(r).patch({data:{topicId:a.topicId}}))),message.success("添加成功"),t.value=!1,a.onSuccess?.(n)},{refresh:i,fetchNext:d,datalist:p,loading:f}=se(),l=m([]),c=n=>{const r=n.currentTarget;r.scrollTop+r.offsetHeight+10>=r.scrollHeight&&d()};return D(()=>{p.value.length===0&&d()}),()=>e(N,null,[e(v,{secondary:!0,type:"success",circle:!0,onClick:()=>{t.value=!0}},{default:()=>[e(C,null,{default:()=>[e(k,null,null)]})]}),e(E,{closable:!0,closeOnEsc:!0,show:t.value,onUpdateShow:n=>{t.value=n}},{default:()=>[e(w,{title:"哪些文章需要添加到专栏？",class:"modal-card sm"},{footer(){return e("div",{class:"text-right"},[e(v,{round:!0,type:"success",onClick:()=>u()},{default:()=>[x("添加！")]})])},default(){return e(ue,{maxTagCount:3,filterable:!0,clearable:!0,loading:f.value,multiple:!0,onClear:()=>{i()},value:l.value,onUpdateValue:n=>{l.value=n},resetMenuOnOptionsChange:!1,options:p.value.map(n=>({label:n.title,value:n.id,key:n.id})),onScroll:c},null)}})]})])}}),de=T({props:{show:{type:Boolean,required:!0},onClose:{type:Function,required:!0},id:{type:String,required:!1},onSubmit:{type:Function,required:!1}},setup(a){const t=_({}),u=m(!1),i=()=>{Object.keys(t).forEach(l=>{delete t[l]})};A(()=>a.id,l=>{l?(u.value=!0,g.api.topics(l).get().then(c=>{Object.assign(t,c),u.value=!1})):i()});const d=()=>{a.onClose()},p=()=>{f?.value?.validate(async c=>{c?.length||await l()});async function l(){let c;a.id?(c=await g.api.topics(a.id).put({data:t}),message.success("修改成功")):(c=await g.api.topics.post({data:t}),message.success("添加成功")),a.onSubmit?.(c),B(()=>{i()})}},f=m();return()=>e(N,null,[e(E,{show:a.show,onUpdateShow:d,closable:!0,onClose:d,transformOrigin:"center"},{default:()=>[e(w,{role:"dialog",title:"新建话题",closable:!0,onClose:d,class:"modal-card sm"},{default:()=>[e(re,{labelPlacement:"top",ref:f,model:t,disabled:u.value},{default:()=>[e(b,{label:"名字",required:!0,rule:{max:50,required:!0,trigger:["blur","input"]},path:"name"},{default:()=>[e(y,{value:t.name,onUpdateValue:l=>{t.name=l}},null)]}),e(b,{label:"id",required:!0,rule:{required:!0,trigger:["blur","input"]},path:"slug"},{default:()=>[e(y,{value:t.slug,onUpdateValue:l=>{t.slug=l}},null)]}),e(b,{label:"简介",required:!0,rule:{max:100,required:!0,trigger:["blur","input"]},path:"introduce"},{default:()=>[e(y,{value:t.introduce,onUpdateValue:l=>{t.introduce=l}},null)]}),e(b,{label:"图标"},{default:()=>[e(y,{value:t.icon,onUpdateValue:l=>{t.icon=l}},{suffix(){return e(O,{class:"flex items-center",type:"icon",onFinish:l=>{const c=JSON.parse((l.event?.target).responseText);return l.file.url=c.url,t.icon=l.file.url,l.file}},{default:()=>[e(v,{text:!0},{default:()=>[e($,null,{default:()=>[e(W,null,null)]})]})]})}})]}),e(b,{label:"长描述",rule:{max:500,trigger:["blur","input"]},path:"description"},{default:()=>[e(y,{type:"textarea",autosize:{maxRows:5,minRows:2},value:t.description,onUpdateValue:l=>{t.description=l}},null)]}),e("div",{class:"flex justify-end gap-2"},[e(v,{round:!0,type:"primary",onClick:p},{default:()=>[x("提交")]})])]})]})]})])}});function pe(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!q(a)}const Ue=T({setup(){const a=G(),t=K();A(()=>t.query.page,s=>{u(s?+s:0)});const{fetchDataFn:u,data:i,pager:d}=X((s,o)=>async(h=parseInt(t.query.page)||1,L=20)=>{const S=await g.api.topics.get({page:h,size:L});return o.value=S.pagination,s.value=S.data,S});D(()=>u());const p=m(""),f=m(!1),l=()=>{f.value=!0,p.value=""},c=()=>{f.value=!1,p.value=""};return{pagination:d,topics:i,fetchTopic:u,handleAddTopic:l,editTopicId:p,showTopicModal:f,handleCloseModal:c,handleSubmit(s){c();const o=i.value.findIndex(h=>h.id===s.id);-~o?i.value[o]=s:i.value.push(s)},handleDelete:async s=>{await g.api.topics(s).delete(),u()},handleEdit:s=>{p.value=s,f.value=!0},route:t,router:a}},render(){const{pagination:a,topics:t,router:u,route:i,editTopicId:d,showTopicModal:p,handleAddTopic:f,handleCloseModal:l,handleSubmit:c,handleEdit:n,handleDelete:r}=this;return e(Q,null,{actions(){return e(N,null,[e(H,{icon:e(k,null,null),onClick:f,variant:"success"},null)])},default(){let s;return e(N,null,[e(U,{bordered:!0,class:"mb-4"},pe(s=t.map(o=>e(j,{key:o.id},{prefix(){return e(P,{"data-src":o.icon,class:`mt-2 ${o.icon&&"!bg-transparent"}`,circle:!0,size:50,src:o.icon||void 0},{default:()=>[o.icon?void 0:z(o.name)]})},suffix(){return e(ne,null,{default:()=>[e(v,{round:!0,onClick:()=>n(o.id)},{default:()=>[x("编辑")]}),e(V,{onPositiveClick:()=>r(o.id)},{default(){return`确定删除「${o.name}」？`},trigger(){return e(v,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(C,null,{default:()=>[e(M,null,null)]})]})}})]})},default(){return e(I,{title:o.name,description:o.introduce,titleExtra:o.slug},{default(){return o.description},footer(){return e(ie,{id:o.id},null)}})}})))?s:{default:()=>[s]}),a&&e("div",{class:"flex justify-end"},[e(R,{page:a.currentPage,onUpdatePage:o=>{u.replace({query:{...i.query,page:o},params:{...i.params}})},pageCount:a.totalPage,pageSize:a.size,showQuickJumper:!0},null)]),e(de,{onClose:l,show:!!(p||d),id:d,onSubmit:c},null)])}})}});export{Ue as default};
