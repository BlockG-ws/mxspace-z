import{bu as n,ai as l}from"./index-ed258134.js";var g="Expected a function";function d(a,t,i){var r=!0,e=!0;if(typeof a!="function")throw new TypeError(g);return n(i)&&(r="leading"in i?!!i.leading:r,e="trailing"in i?!!i.trailing:e),l(a,t,{leading:r,maxWait:t,trailing:e})}export{d as t};
