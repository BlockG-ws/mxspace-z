function j(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let v=j();function X(a){v=a}const W=/[&<>"']/,J=new RegExp(W.source,"g"),G=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Y=new RegExp(G.source,"g"),ee={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Q=a=>ee[a];function _(a,t){if(t){if(W.test(a))return a.replace(J,Q)}else if(G.test(a))return a.replace(Y,Q);return a}const te=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function V(a){return a.replace(te,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const ne=/(^|[^\[])\^/g;function k(a,t){a=typeof a=="string"?a:a.source,t=t||"";const n={replace:(e,i)=>(i=typeof i=="object"&&"source"in i?i.source:i,i=i.replace(ne,"$1"),a=a.replace(e,i),n),getRegex:()=>new RegExp(a,t)};return n}const ie=/[^\w:]/g,se=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function N(a,t,n){if(a){let e;try{e=decodeURIComponent(V(n)).replace(ie,"").toLowerCase()}catch{return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}t&&!se.test(n)&&(n=oe(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const L={},re=/^[^:]+:\/*[^/]*$/,le=/^([^:]+:)[\s\S]*$/,ae=/^([^:]+:\/*[^/]*)[\s\S]*$/;function oe(a,t){L[" "+a]||(re.test(a)?L[" "+a]=a+"/":L[" "+a]=P(a,"/",!0)),a=L[" "+a];const n=a.indexOf(":")===-1;return t.substring(0,2)==="//"?n?t:a.replace(le,"$1")+t:t.charAt(0)==="/"?n?t:a.replace(ae,"$1")+t:a+t}const q={exec:()=>null};function F(a,t){const n=a.replace(/\|/g,(s,l,r)=>{let c=!1,u=l;for(;--u>=0&&r[u]==="\\";)c=!c;return c?"|":" |"}),e=n.split(/ \|/);let i=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),t)if(e.length>t)e.splice(t);else for(;e.length<t;)e.push("");for(;i<e.length;i++)e[i]=e[i].trim().replace(/\\\|/g,"|");return e}function P(a,t,n){const e=a.length;if(e===0)return"";let i=0;for(;i<e;){const s=a.charAt(e-i-1);if(s===t&&!n)i++;else if(s!==t&&n)i++;else break}return a.slice(0,e-i)}function he(a,t){if(a.indexOf(t[1])===-1)return-1;const n=a.length;let e=0,i=0;for(;i<n;i++)if(a[i]==="\\")i++;else if(a[i]===t[0])e++;else if(a[i]===t[1]&&(e--,e<0))return i;return-1}function ce(a,t){!a||a.silent||(t&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(a.sanitize||a.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(a.highlight||a.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),a.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),a.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),a.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),a.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(a.headerIds||a.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function H(a,t,n,e){const i=t.href,s=t.title?_(t.title):null,l=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){e.state.inLink=!0;const r={type:"link",raw:n,href:i,title:s,text:l,tokens:e.inlineTokens(l)};return e.state.inLink=!1,r}return{type:"image",raw:n,href:i,title:s,text:_(l)}}function pe(a,t){const n=a.match(/^(\s+)(?:```)/);if(n===null)return t;const e=n[1];return t.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[l]=s;return l.length>=e.length?i.slice(e.length):i}).join(`
`)}class B{options;rules;lexer;constructor(t){this.options=t||v}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const e=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?e:P(e,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const e=n[0],i=pe(e,n[3]||"");return{type:"code",raw:e,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:i}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let e=n[2].trim();if(/#$/.test(e)){const i=P(e,"#");(this.options.pedantic||!i||/ $/.test(i))&&(e=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){const e=n[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(e);return this.lexer.state.top=i,{type:"blockquote",raw:n[0],tokens:s,text:e}}}list(t){let n=this.rules.block.list.exec(t);if(n){let e,i,s,l,r,c,u,p,f,d,h,w,b=n[1].trim();const I=b.length>1,x={type:"list",raw:"",ordered:I,start:I?+b.slice(0,-1):"",loose:!1,items:[]};b=I?`\\d{1,9}\\${b.slice(-1)}`:`\\${b}`,this.options.pedantic&&(b=I?b:"[*+-]");const y=new RegExp(`^( {0,3}${b})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(w=!1,!(!(n=y.exec(t))||this.rules.block.hr.test(t)));){if(e=n[0],t=t.substring(e.length),p=n[2].split(`
`,1)[0].replace(/^\t+/,S=>" ".repeat(3*S.length)),f=t.split(`
`,1)[0],this.options.pedantic?(l=2,h=p.trimLeft()):(l=n[2].search(/[^ ]/),l=l>4?1:l,h=p.slice(l),l+=n[1].length),c=!1,!p&&/^ *$/.test(f)&&(e+=f+`
`,t=t.substring(f.length+1),w=!0),!w){const S=new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),$=new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),z=new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),C=new RegExp(`^ {0,${Math.min(3,l-1)}}#`);for(;t&&(d=t.split(`
`,1)[0],f=d,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(z.test(f)||C.test(f)||S.test(f)||$.test(t)));){if(f.search(/[^ ]/)>=l||!f.trim())h+=`
`+f.slice(l);else{if(c||p.search(/[^ ]/)>=4||z.test(p)||C.test(p)||$.test(p))break;h+=`
`+f}!c&&!f.trim()&&(c=!0),e+=d+`
`,t=t.substring(d.length+1),p=f.slice(l)}}x.loose||(u?x.loose=!0:/\n *\n *$/.test(e)&&(u=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(h),i&&(s=i[0]!=="[ ] ",h=h.replace(/^\[[ xX]\] +/,""))),x.items.push({type:"list_item",raw:e,task:!!i,checked:s,loose:!1,text:h}),x.raw+=e}x.items[x.items.length-1].raw=e.trimRight(),x.items[x.items.length-1].text=h.trimRight(),x.raw=x.raw.trimRight();const E=x.items.length;for(r=0;r<E;r++)if(this.lexer.state.top=!1,x.items[r].tokens=this.lexer.blockTokens(x.items[r].text,[]),!x.loose){const S=x.items[r].tokens.filter(z=>z.type==="space"),$=S.length>0&&S.some(z=>/\n.*\n/.test(z.raw));x.loose=$}if(x.loose)for(r=0;r<E;r++)x.items[r].loose=!0;return x}}html(t){const n=this.rules.block.html.exec(t);if(n){const e={type:"html",block:!0,raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(n[0]):_(n[0]),s=e;s.type="paragraph",s.text=i,s.tokens=this.lexer.inline(i)}return e}}def(t){const n=this.rules.block.def.exec(t);if(n){const e=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:e,raw:n[0],href:i,title:s}}}table(t){const n=this.rules.block.table.exec(t);if(n){const e={type:"table",raw:n[0],header:F(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){let i=e.align.length,s,l,r,c;for(s=0;s<i;s++)/^ *-+: *$/.test(e.align[s])?e.align[s]="right":/^ *:-+: *$/.test(e.align[s])?e.align[s]="center":/^ *:-+ *$/.test(e.align[s])?e.align[s]="left":e.align[s]=null;for(i=e.rows.length,s=0;s<i;s++)e.rows[s]=F(e.rows[s],e.header.length).map(u=>({text:u}));for(i=e.header.length,l=0;l<i;l++)e.header[l].tokens=this.lexer.inline(e.header[l].text);for(i=e.rows.length,l=0;l<i;l++)for(c=e.rows[l],r=0;r<c.length;r++)c[r].tokens=this.lexer.inline(c[r].text);return e}}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const e=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:e,tokens:this.lexer.inline(e)}}}text(t){const n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:_(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):_(n[0]):n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const e=n[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const l=P(e.slice(0,-1),"\\");if((e.length-l.length)%2===0)return}else{const l=he(n[2],"()");if(l>-1){const c=(n[0].indexOf("!")===0?5:4)+n[1].length+l;n[2]=n[2].substring(0,l),n[0]=n[0].substring(0,c).trim(),n[3]=""}}let i=n[2],s="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);l&&(i=l[1],s=l[3])}else s=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(e)?i=i.slice(1):i=i.slice(1,-1)),H(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(t,n){let e;if((e=this.rules.inline.reflink.exec(t))||(e=this.rules.inline.nolink.exec(t))){let i=(e[2]||e[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i){const s=e[0].charAt(0);return{type:"text",raw:s,text:s}}return H(e,i,e[0],this.lexer)}}emStrong(t,n,e=""){let i=this.rules.inline.emStrong.lDelim.exec(t);if(!i||i[3]&&e.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!e||this.rules.inline.punctuation.exec(e)){const l=i[0].length-1;let r,c,u=l,p=0;const f=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,n=n.slice(-1*t.length+l);(i=f.exec(n))!=null;){if(r=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!r)continue;if(c=r.length,i[3]||i[4]){u+=c;continue}else if((i[5]||i[6])&&l%3&&!((l+c)%3)){p+=c;continue}if(u-=c,u>0)continue;c=Math.min(c,c+u+p);const d=t.slice(0,l+i.index+c+1);if(Math.min(l,c)%2){const w=d.slice(1,-1);return{type:"em",raw:d,text:w,tokens:this.lexer.inlineTokens(w)}}const h=d.slice(2,-2);return{type:"strong",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let e=n[2].replace(/\n/g," ");const i=/[^ ]/.test(e),s=/^ /.test(e)&&/ $/.test(e);return i&&s&&(e=e.substring(1,e.length-1)),e=_(e,!0),{type:"codespan",raw:n[0],text:e}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t,n){const e=this.rules.inline.autolink.exec(t);if(e){let i,s;return e[2]==="@"?(i=_(this.options.mangle?n(e[1]):e[1]),s="mailto:"+i):(i=_(e[1]),s=i),{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(t,n){let e;if(e=this.rules.inline.url.exec(t)){let i,s;if(e[2]==="@")i=_(this.options.mangle?n(e[0]):e[0]),s="mailto:"+i;else{let l;do l=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(l!==e[0]);i=_(e[0]),e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t,n){const e=this.rules.inline.text.exec(t);if(e){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):_(e[0]):e[0]:i=_(this.options.smartypants?n(e[0]):e[0]),{type:"text",raw:e[0],text:i}}}}const g={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:q,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};g._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;g._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;g.def=k(g.def).replace("label",g._label).replace("title",g._title).getRegex();g.bullet=/(?:[*+-]|\d{1,9}[.)])/;g.listItemStart=k(/^( *)(bull) */).replace("bull",g.bullet).getRegex();g.list=k(g.list).replace(/bull/g,g.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+g.def.source+")").getRegex();g._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";g._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;g.html=k(g.html,"i").replace("comment",g._comment).replace("tag",g._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();g.lheading=k(g.lheading).replace(/bull/g,g.bullet).getRegex();g.paragraph=k(g._paragraph).replace("hr",g.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",g._tag).getRegex();g.blockquote=k(g.blockquote).replace("paragraph",g.paragraph).getRegex();g.normal={...g};g.gfm={...g.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};g.gfm.table=k(g.gfm.table).replace("hr",g.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",g._tag).getRegex();g.gfm.paragraph=k(g._paragraph).replace("hr",g.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",g.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",g._tag).getRegex();g.pedantic={...g.normal,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",g._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:q,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(g.normal._paragraph).replace("hr",g.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",g.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const o={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:q,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:q,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};o._punctuation="\\p{P}$+<=>`^|~";o.punctuation=k(o.punctuation,"u").replace(/punctuation/g,o._punctuation).getRegex();o.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;o.anyPunctuation=/\\[punct]/g;o._escapes=/\\([punct])/g;o._comment=k(g._comment).replace("(?:-->|$)","-->").getRegex();o.emStrong.lDelim=k(o.emStrong.lDelim,"u").replace(/punct/g,o._punctuation).getRegex();o.emStrong.rDelimAst=k(o.emStrong.rDelimAst,"gu").replace(/punct/g,o._punctuation).getRegex();o.emStrong.rDelimUnd=k(o.emStrong.rDelimUnd,"gu").replace(/punct/g,o._punctuation).getRegex();o.anyPunctuation=k(o.anyPunctuation,"gu").replace(/punct/g,o._punctuation).getRegex();o._escapes=k(o._escapes,"gu").replace(/punct/g,o._punctuation).getRegex();o._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;o._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;o.autolink=k(o.autolink).replace("scheme",o._scheme).replace("email",o._email).getRegex();o._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;o.tag=k(o.tag).replace("comment",o._comment).replace("attribute",o._attribute).getRegex();o._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;o._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;o._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;o.link=k(o.link).replace("label",o._label).replace("href",o._href).replace("title",o._title).getRegex();o.reflink=k(o.reflink).replace("label",o._label).replace("ref",g._label).getRegex();o.nolink=k(o.nolink).replace("ref",g._label).getRegex();o.reflinkSearch=k(o.reflinkSearch,"g").replace("reflink",o.reflink).replace("nolink",o.nolink).getRegex();o.normal={...o};o.pedantic={...o.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",o._label).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",o._label).getRegex()};o.gfm={...o.normal,escape:k(o.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};o.gfm.url=k(o.gfm.url,"i").replace("email",o.gfm._extended_email).getRegex();o.breaks={...o.gfm,br:k(o.br).replace("{2,}","*").getRegex(),text:k(o.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function ue(a){return a.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function K(a){let t="",n,e;const i=a.length;for(n=0;n<i;n++)e=a.charCodeAt(n),Math.random()>.5&&(e="x"+e.toString(16)),t+="&#"+e+";";return t}class R{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||v,this.options.tokenizer=this.options.tokenizer||new B,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:g.normal,inline:o.normal};this.options.pedantic?(n.block=g.pedantic,n.inline=o.pedantic):this.options.gfm&&(n.block=g.gfm,this.options.breaks?n.inline=o.breaks:n.inline=o.gfm),this.tokenizer.rules=n}static get rules(){return{block:g,inline:o}}static lex(t,n){return new R(n).lex(t)}static lexInline(t,n){return new R(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(t,n=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(r,c,u)=>c+"    ".repeat(u.length));let e,i,s,l;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(r=>(e=r.call({lexer:this},t,n))?(t=t.substring(e.raw.length),n.push(e),!0):!1))){if(e=this.tokenizer.space(t)){t=t.substring(e.raw.length),e.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(e);continue}if(e=this.tokenizer.code(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e);continue}if(e=this.tokenizer.fences(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.heading(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.hr(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.blockquote(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.list(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.html(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.def(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+e.raw,i.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title});continue}if(e=this.tokenizer.table(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.lheading(t)){t=t.substring(e.raw.length),n.push(e);continue}if(s=t,this.options.extensions&&this.options.extensions.startBlock){let r=1/0;const c=t.slice(1);let u;this.options.extensions.startBlock.forEach(p=>{u=p.call({lexer:this},c),typeof u=="number"&&u>=0&&(r=Math.min(r,u))}),r<1/0&&r>=0&&(s=t.substring(0,r+1))}if(this.state.top&&(e=this.tokenizer.paragraph(s))){i=n[n.length-1],l&&i.type==="paragraph"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e),l=s.length!==t.length,t=t.substring(e.raw.length);continue}if(e=this.tokenizer.text(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+e.raw,i.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(e);continue}if(t){const r="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(r);break}else throw new Error(r)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let e,i,s,l=t,r,c,u;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)p.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,r.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(c||(u=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(e=p.call({lexer:this},t,n))?(t=t.substring(e.raw.length),n.push(e),!0):!1))){if(e=this.tokenizer.escape(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.tag(t)){t=t.substring(e.raw.length),i=n[n.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(e=this.tokenizer.link(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(e.raw.length),i=n[n.length-1],i&&e.type==="text"&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(e=this.tokenizer.emStrong(t,l,u)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.codespan(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.br(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.del(t)){t=t.substring(e.raw.length),n.push(e);continue}if(e=this.tokenizer.autolink(t,K)){t=t.substring(e.raw.length),n.push(e);continue}if(!this.state.inLink&&(e=this.tokenizer.url(t,K))){t=t.substring(e.raw.length),n.push(e);continue}if(s=t,this.options.extensions&&this.options.extensions.startInline){let p=1/0;const f=t.slice(1);let d;this.options.extensions.startInline.forEach(h=>{d=h.call({lexer:this},f),typeof d=="number"&&d>=0&&(p=Math.min(p,d))}),p<1/0&&p>=0&&(s=t.substring(0,p+1))}if(e=this.tokenizer.inlineText(s,ue)){t=t.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(u=e.raw.slice(-1)),c=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=e.raw,i.text+=e.text):n.push(e);continue}if(t){const p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}}class D{options;constructor(t){this.options=t||v}code(t,n,e){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(t,i);s!=null&&s!==t&&(e=!0,t=s)}return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+_(i)+'">'+(e?t:_(t,!0))+`</code></pre>
`:"<pre><code>"+(e?t:_(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,n){return t}heading(t,n,e,i){if(this.options.headerIds){const s=this.options.headerPrefix+i.slug(e);return`<h${n} id="${s}">${t}</h${n}>
`}return`<h${n}>${t}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,n,e){const i=n?"ol":"ul",s=n&&e!==1?' start="'+e+'"':"";return"<"+i+s+`>
`+t+"</"+i+`>
`}listitem(t,n,e){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,n){const e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+t+`</${e}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,n,e){if(t=N(this.options.sanitize,this.options.baseUrl,t),t===null)return e;let i='<a href="'+t+'"';return n&&(i+=' title="'+n+'"'),i+=">"+e+"</a>",i}image(t,n,e){if(t=N(this.options.sanitize,this.options.baseUrl,t),t===null)return e;let i=`<img src="${t}" alt="${e}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(t){return t}}class U{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,e){return""+e}image(t,n,e){return""+e}br(){return""}}class M{seen;constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,n){let e=t,i=0;if(this.seen.hasOwnProperty(e)){i=this.seen[t];do i++,e=t+"-"+i;while(this.seen.hasOwnProperty(e))}return n||(this.seen[t]=i,this.seen[e]=0),e}slug(t,n={}){const e=this.serialize(t);return this.getNextSafeSlug(e,n.dryrun)}}class T{options;renderer;textRenderer;slugger;constructor(t){this.options=t||v,this.options.renderer=this.options.renderer||new D,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new U,this.slugger=new M}static parse(t,n){return new T(n).parse(t)}static parseInline(t,n){return new T(n).parseInline(t)}parse(t,n=!0){let e="",i,s,l,r,c,u,p,f,d,h,w,b,I,x,y,E,S,$,z;const C=t.length;for(i=0;i<C;i++){if(h=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(z=this.options.extensions.renderers[h.type].call({parser:this},h),z!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type))){e+=z||"";continue}switch(h.type){case"space":continue;case"hr":{e+=this.renderer.hr();continue}case"heading":{e+=this.renderer.heading(this.parseInline(h.tokens),h.depth,V(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue}case"code":{e+=this.renderer.code(h.text,h.lang,!!h.escaped);continue}case"table":{for(f="",p="",r=h.header.length,s=0;s<r;s++)p+=this.renderer.tablecell(this.parseInline(h.header[s].tokens),{header:!0,align:h.align[s]});for(f+=this.renderer.tablerow(p),d="",r=h.rows.length,s=0;s<r;s++){for(u=h.rows[s],p="",c=u.length,l=0;l<c;l++)p+=this.renderer.tablecell(this.parseInline(u[l].tokens),{header:!1,align:h.align[l]});d+=this.renderer.tablerow(p)}e+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(h.tokens),e+=this.renderer.blockquote(d);continue}case"list":{for(w=h.ordered,b=h.start,I=h.loose,r=h.items.length,d="",s=0;s<r;s++)y=h.items[s],E=y.checked,S=y.task,x="",y.task&&($=this.renderer.checkbox(!!E),I?y.tokens.length>0&&y.tokens[0].type==="paragraph"?(y.tokens[0].text=$+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=$+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:$}):x+=$),x+=this.parse(y.tokens,I),d+=this.renderer.listitem(x,S,!!E);e+=this.renderer.list(d,w,b);continue}case"html":{e+=this.renderer.html(h.text,h.block);continue}case"paragraph":{e+=this.renderer.paragraph(this.parseInline(h.tokens));continue}case"text":{for(d=h.tokens?this.parseInline(h.tokens):h.text;i+1<C&&t[i+1].type==="text";)h=t[++i],d+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);e+=n?this.renderer.paragraph(d):d;continue}default:{const O='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(O),"";throw new Error(O)}}}return e}parseInline(t,n){n=n||this.renderer;let e="",i,s,l;const r=t.length;for(i=0;i<r;i++){if(s=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(l=this.options.extensions.renderers[s.type].call({parser:this},s),l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){e+=l||"";continue}switch(s.type){case"escape":{e+=n.text(s.text);break}case"html":{e+=n.html(s.text);break}case"link":{e+=n.link(s.href,s.title,this.parseInline(s.tokens,n));break}case"image":{e+=n.image(s.href,s.title,s.text);break}case"strong":{e+=n.strong(this.parseInline(s.tokens,n));break}case"em":{e+=n.em(this.parseInline(s.tokens,n));break}case"codespan":{e+=n.codespan(s.text);break}case"br":{e+=n.br();break}case"del":{e+=n.del(this.parseInline(s.tokens,n));break}case"text":{e+=n.text(s.text);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return e}}class Z{options;constructor(t){this.options=t||v}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(t){return t}postprocess(t){return t}}class ge{defaults=j();options=this.setOptions;parse=this.#e(R.lex,T.parse);parseInline=this.#e(R.lexInline,T.parseInline);Parser=T;parser=T.parse;Renderer=D;TextRenderer=U;Lexer=R;lexer=R.lex;Tokenizer=B;Slugger=M;Hooks=Z;constructor(...t){this.use(...t)}walkTokens(t,n){let e=[];for(const i of t)switch(e=e.concat(n.call(this,i)),i.type){case"table":{for(const s of i.header)e=e.concat(this.walkTokens(s.tokens,n));for(const s of i.rows)for(const l of s)e=e.concat(this.walkTokens(l.tokens,n));break}case"list":{e=e.concat(this.walkTokens(i.items,n));break}default:this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[i.type]?this.defaults.extensions.childTokens[i.type].forEach(s=>{e=e.concat(this.walkTokens(i[s],n))}):i.tokens&&(e=e.concat(this.walkTokens(i.tokens,n)))}return e}use(...t){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(e=>{const i={...e};if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const l=n.renderers[s.name];l?n.renderers[s.name]=function(...r){let c=s.renderer.apply(this,r);return c===!1&&(c=l.apply(this,r)),c}:n.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[s.level]?n[s.level].unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(n.childTokens[s.name]=s.childTokens)}),i.extensions=n),e.renderer){const s=this.defaults.renderer||new D(this.defaults);for(const l in e.renderer){const r=e.renderer[l],c=l,u=s[c];s[c]=(...p)=>{let f=r.apply(s,p);return f===!1&&(f=u.apply(s,p)),f||""}}i.renderer=s}if(e.tokenizer){const s=this.defaults.tokenizer||new B(this.defaults);for(const l in e.tokenizer){const r=e.tokenizer[l],c=l,u=s[c];s[c]=(...p)=>{let f=r.apply(s,p);return f===!1&&(f=u.apply(s,p)),f}}i.tokenizer=s}if(e.hooks){const s=this.defaults.hooks||new Z;for(const l in e.hooks){const r=e.hooks[l],c=l,u=s[c];Z.passThroughHooks.has(l)?s[c]=p=>{if(this.defaults.async)return Promise.resolve(r.call(s,p)).then(d=>u.call(s,d));const f=r.call(s,p);return u.call(s,f)}:s[c]=(...p)=>{let f=r.apply(s,p);return f===!1&&(f=u.apply(s,p)),f}}i.hooks=s}if(e.walkTokens){const s=this.defaults.walkTokens;i.walkTokens=function(l){let r=[];return r.push(e.walkTokens.call(this,l)),s&&(r=r.concat(s.call(this,l))),r}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}#e(t,n){return(e,i,s)=>{typeof i=="function"&&(s=i,i=null);const l={...i},r={...this.defaults,...l},c=this.#t(!!r.silent,!!r.async,s);if(typeof e>"u"||e===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(ce(r,s),r.hooks&&(r.hooks.options=r),s){const u=r.highlight;let p;try{r.hooks&&(e=r.hooks.preprocess(e)),p=t(e,r)}catch(h){return c(h)}const f=h=>{let w;if(!h)try{r.walkTokens&&this.walkTokens(p,r.walkTokens),w=n(p,r),r.hooks&&(w=r.hooks.postprocess(w))}catch(b){h=b}return r.highlight=u,h?c(h):s(null,w)};if(!u||u.length<3||(delete r.highlight,!p.length))return f();let d=0;this.walkTokens(p,h=>{h.type==="code"&&(d++,setTimeout(()=>{u(h.text,h.lang,(w,b)=>{if(w)return f(w);b!=null&&b!==h.text&&(h.text=b,h.escaped=!0),d--,d===0&&f()})},0))}),d===0&&f();return}if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(e):e).then(u=>t(u,r)).then(u=>r.walkTokens?Promise.all(this.walkTokens(u,r.walkTokens)).then(()=>u):u).then(u=>n(u,r)).then(u=>r.hooks?r.hooks.postprocess(u):u).catch(c);try{r.hooks&&(e=r.hooks.preprocess(e));const u=t(e,r);r.walkTokens&&this.walkTokens(u,r.walkTokens);let p=n(u,r);return r.hooks&&(p=r.hooks.postprocess(p)),p}catch(u){return c(u)}}}#t(t,n,e){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const s="<p>An error occurred:</p><pre>"+_(i.message+"",!0)+"</pre>";if(n)return Promise.resolve(s);if(e){e(null,s);return}return s}if(n)return Promise.reject(i);if(e){e(i);return}throw i}}}const A=new ge;function m(a,t,n){return A.parse(a,t,n)}m.options=m.setOptions=function(a){return A.setOptions(a),m.defaults=A.defaults,X(m.defaults),m};m.getDefaults=j;m.defaults=v;m.use=function(...a){return A.use(...a),m.defaults=A.defaults,X(m.defaults),m};m.walkTokens=function(a,t){return A.walkTokens(a,t)};m.parseInline=A.parseInline;m.Parser=T;m.parser=T.parse;m.Renderer=D;m.TextRenderer=U;m.Lexer=R;m.lexer=R.lex;m.Tokenizer=B;m.Slugger=M;m.Hooks=Z;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;T.parse;R.lex;export{m};
