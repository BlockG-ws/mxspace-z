import{s,r as l,dU as d}from"./index-ed258134.js";const p=r=>{const t=s([]),e=s({}),c=l({sortBy:"",sortOrder:0}),n=s([]),a=s(!1);return{data:t,pager:e,sortProps:c,checkedRowKeys:n,loading:a,fetchDataFn:async(i,f,o)=>{a.value=!0,await r(t,e)(i,f,o?d.stringify(o):void 0),a.value=!1}}};export{p as u};
