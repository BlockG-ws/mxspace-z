import{H as i}from"./rounded-button-f9bd8ca1.js";import{d as R,b as I,v as P,s as D,al as E,by as F,bz as u,y as k,r as B,i as N,g as T,R as r,h as t,t as c,F as f,bA as y,bB as A,C as H,D as h,bC as z,z as L}from"./index-ed258134.js";import{u as M}from"./use-parse-payload-5b1fb0bd.js";import{i as v}from"./isString-c8803dd4.js";import{a as q,N as m}from"./FormItem-a7c928e6.js";const J=R({setup(){const g=I(),d=P(),b=()=>({text:"",author:"",source:""}),n=D({});E(()=>{F([u.原创,u.哲学,u.文学,u.诗词]).then(e=>{n.value={source:e.from,text:e.hitokoto,author:e.from_who||e.creator}})});const x=k(),w=async()=>{const e=async()=>{await r.api.says.post({data:n.value}),message.success("发布成功"),d.push({name:h.ListSay})};a.text||a.author||a.source?x.create({title:"警告",content:"发布一言会覆盖现有的内容，要继续吗",type:"warning",negativeText:"取消",positiveText:"确定",onPositiveClick(){e()}}):e()},S=e=>M(a)(e),a=B(b()),l=N(()=>g.query.id);T(async()=>{const e=l.value;if(e&&typeof e=="string"){const s=(await r.api.says(e).get({})).data;S(s)}});const p=async()=>{const e=()=>{try{if(!a.text||a.text.trim().length==0)throw"内容为空";return{...z(L(a),(o,s,C)=>(o[C]=typeof s>"u"?null:typeof s=="string"&&s.length==0?"":s,o)),text:a.text.trim()}}catch(o){throw message.error(o),o}};if(l.value){if(!v(l.value))return;const o=l.value;await r.api.says(o).put({data:e()}),message.success("修改成功")}else await r.api.says.post({data:e()}),message.success("发布成功");d.push({name:h.ListSay})};return()=>t(H,{actionsElement:t(f,null,[v(l)?t(i,{name:"更新",variant:"info",onClick:p,icon:t(y,null,null)},null):t(f,null,[t(i,{name:"发布一言",variant:"info",onClick:w,icon:t(A,null,null)},null),t(i,{name:"发布自己说的",variant:"primary",onClick:p,icon:t(y,null,null)},null)])])},{default:()=>[t(q,null,{default:()=>[t(m,{label:"内容",required:!0,labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[t(c,{type:"textarea",autofocus:!0,autosize:{minRows:6,maxRows:8},placeholder:n.value.text,value:a.text,onInput:e=>void(a.text=e)},null)]}),t(m,{label:"作者",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[t(c,{placeholder:n.value.author,value:a.author,onInput:e=>void(a.author=e)},null)]}),t(m,{label:"来源",labelPlacement:"left",labelStyle:{width:"4rem"}},{default:()=>[t(c,{placeholder:n.value.source,value:a.source,onInput:e=>void(a.source=e)},null)]})]})]})}});export{J as default};
