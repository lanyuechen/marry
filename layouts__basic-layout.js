(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0HcC":function(e,t,n){e.exports={layout:"layout___3xOke",navbar:"navbar___3RXZb",title:"title___VkhVK",active:"active___3FUkV"}},"9Tud":function(e,t,n){"use strict";n.r(t);var a=n("tJVT"),r=n("q1tI"),c=n.n(r),o=n("9kvl"),i=n("uYtH"),l=n("AF1r"),s=n("0HcC"),u=n.n(s);t["default"]=function(e){const t=Object(r["useState"])("/"),n=Object(a["a"])(t,2),s=n[0],f=n[1];return Object(r["useEffect"])((()=>o["a"].listen((e=>{f(e.pathname)}))),[]),c.a.createElement("div",{className:u.a.layout},e.children,["/","/template","story"].includes(s)&&c.a.createElement("div",{className:u.a.navbar},c.a.createElement(i["a"],{to:"/",className:"/"===s?u.a.active:""},c.a.createElement(l["a"],{type:"icon-home"}),c.a.createElement("span",{className:u.a.title},"\u9996\u9875")),c.a.createElement(i["a"],{to:"/template",className:"/template"===s?u.a.active:""},c.a.createElement(l["a"],{type:"icon-card-bag"}),c.a.createElement("span",{className:u.a.title},"\u6a21\u677f")),c.a.createElement(i["a"],{to:"/story",className:"/story"===s?u.a.active:""},c.a.createElement(l["a"],{type:"icon-001-man"}),c.a.createElement("span",{className:u.a.title},"\u6211\u7684"))))}},AF1r:function(e,t,n){"use strict";var a=n("R+Pm");const r=Object(a["a"])({scriptUrl:["//at.alicdn.com/t/font_2652076_5epk3ej1ofs.js","//at.alicdn.com/t/font_2724754_rcmb540ie.js"]});t["a"]=r},"R+Pm":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n("VTBJ"),r=n("Ff2n"),c=n("q1tI"),o=n("rePB"),i=n("TSYQ"),l=n.n(i),s=n("Pw59"),u=n("Qi1f"),f=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],m=c["forwardRef"]((function(e,t){var n=e.className,i=e.component,m=e.viewBox,d=e.spin,v=e.rotate,p=e.tabIndex,b=e.onClick,y=e.children,j=Object(r["a"])(e,f);Object(u["g"])(Boolean(i||y),"Should have `component` prop or `children`."),Object(u["f"])();var h=c["useContext"](s["a"]),O=h.prefixCls,E=void 0===O?"anticon":O,w=l()(E,n),C=l()(Object(o["a"])({},"".concat(E,"-spin"),!!d)),g=v?{msTransform:"rotate(".concat(v,"deg)"),transform:"rotate(".concat(v,"deg)")}:void 0,x=Object(a["a"])(Object(a["a"])({},u["e"]),{},{className:C,style:g,viewBox:m});m||delete x.viewBox;var N=function(){return i?c["createElement"](i,Object(a["a"])({},x),y):y?(Object(u["g"])(Boolean(m)||1===c["Children"].count(y)&&c["isValidElement"](y)&&"use"===c["Children"].only(y).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),c["createElement"]("svg",Object(a["a"])(Object(a["a"])({},x),{},{viewBox:m}),y)):null},_=p;return void 0===_&&b&&(_=-1),c["createElement"]("span",Object(a["a"])(Object(a["a"])({role:"img"},j),{},{ref:t,tabIndex:_,onClick:b,className:w}),N())}));m.displayName="AntdIcon";var d=m,v=["type","children"],p=new Set;function b(e){return Boolean("string"===typeof e&&e.length&&!p.has(e))}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e[t];if(b(n)){var a=document.createElement("script");a.setAttribute("src",n),a.setAttribute("data-namespace",n),e.length>t+1&&(a.onload=function(){y(e,t+1)},a.onerror=function(){y(e,t+1)}),p.add(n),document.body.appendChild(a)}}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scriptUrl,n=e.extraCommonProps,o=void 0===n?{}:n;t&&"undefined"!==typeof document&&"undefined"!==typeof window&&"function"===typeof document.createElement&&(Array.isArray(t)?y(t.reverse()):y([t]));var i=c["forwardRef"]((function(e,t){var n=e.type,i=e.children,l=Object(r["a"])(e,v),s=null;return e.type&&(s=c["createElement"]("use",{xlinkHref:"#".concat(n)})),i&&(s=i),c["createElement"](d,Object(a["a"])(Object(a["a"])(Object(a["a"])({},o),l),{},{ref:t}),s)}));return i.displayName="Iconfont",i}},uYtH:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("WHYC"),r=n("dI71"),c=n("q1tI"),o=n.n(c),i=n("YS25"),l=(n("17x9"),n("wx14")),s=n("zLVn"),u=n("9R94");o.a.Component;o.a.Component;var f=function(e,t){return"function"===typeof e?e(t):e},m=function(e,t){return"string"===typeof e?Object(i["c"])(e,null,null,t):e},d=function(e){return e},v=o.a.forwardRef;function p(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}"undefined"===typeof v&&(v=d);var b=v((function(e,t){var n=e.innerRef,a=e.navigate,r=e.onClick,c=Object(s["a"])(e,["innerRef","navigate","onClick"]),i=c.target,u=Object(l["a"])({},c,{onClick:function(e){try{r&&r(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||i&&"_self"!==i||p(e)||(e.preventDefault(),a())}});return u.ref=d!==v&&t||n,o.a.createElement("a",u)}));var y=v((function(e,t){var n=e.component,r=void 0===n?b:n,c=e.replace,i=e.to,p=e.innerRef,y=Object(s["a"])(e,["component","replace","to","innerRef"]);return o.a.createElement(a["e"].Consumer,null,(function(e){e||Object(u["a"])(!1);var n=e.history,a=m(f(i,e.location),e.location),s=a?n.createHref(a):"",b=Object(l["a"])({},y,{href:s,navigate:function(){var t=f(i,e.location),a=c?n.replace:n.push;a(t)}});return d!==v?b.ref=t||p:b.innerRef=p,o.a.createElement(r,b)}))})),j=function(e){return e},h=o.a.forwardRef;function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}"undefined"===typeof h&&(h=j);h((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,c=e.activeClassName,i=void 0===c?"active":c,d=e.activeStyle,v=e.className,p=e.exact,b=e.isActive,E=e.location,w=e.sensitive,C=e.strict,g=e.style,x=e.to,N=e.innerRef,_=Object(s["a"])(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(a["e"].Consumer,null,(function(e){e||Object(u["a"])(!1);var n=E||e.location,c=m(f(x,n),n),s=c.pathname,R=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=R?Object(a["f"])(n.pathname,{path:R,exact:p,sensitive:w,strict:C}):null,B=!!(b?b(k,n):k),A=B?O(v,i):v,I=B?Object(l["a"])({},g,{},d):g,H=Object(l["a"])({"aria-current":B&&r||null,className:A,style:I,to:c},_);return j!==h?H.ref=t||N:H.innerRef=N,o.a.createElement(y,H)}))}))}}]);