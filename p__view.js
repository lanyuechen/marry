(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"+n12":function(t,e,n){"use strict";function a(){let t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return t=t.replace(/x/g,(function(){const t=16*Math.random()|0;return t.toString(16)})),t=t.replace("y",(16*Math.random()&3|8).toString(16)),t.replace(/-/g,"").substr(0,24)}function r(t,e){let n;return function(){n&&clearTimeout(n),n=setTimeout((()=>{t(...arguments)}),e)}}async function i(t){const e=await fetch(`./templates/${t}.json`);return e.json()}n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))},4469:function(t,e,n){"use strict";n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return b})),n.d(e,"d",(function(){return g}));var a=n("XS3J"),r=n.n(a),i=n("+n12");const c="marry.db",s=Symbol.for("db-instance-key");class o{loadDatabase(t,e){try{const n=localStorage.getItem(t);e(n)}catch(n){e(n)}}saveDatabase(t,e,n){try{localStorage.setItem(t,e),n(null)}catch(a){n(a)}}}const l=new o;class u{static getInstance(){return window[s]||(window[s]=new u),window[s]}constructor(){this.db=new r.a(c,{env:"BROWSER",autosave:!0,adapter:l}),this.db.loadDatabase()}table(t){return this.collection=this.db.getCollection(t)||this.db.addCollection(t),this}find(t={}){return this.collection.find(t)}findOne(t={}){return this.collection.findOne(t)}insert(t){const e=Object(i["c"])();return this.collection.insert({...t,_id:e}),e}update(t={},e){this.collection.findAndUpdate(t,(t=>{e="function"===typeof e?e(t):e,Object.assign(t,e)}))}delete(t={}){this.collection.findAndRemove(t)}}var d=u.getInstance();const m="story";async function h(t){const e=d.table(m).find(t);return{success:!0,data:e}}async function p(t){const e=d.table(m).findOne({_id:t});return{success:!0,data:e}}async function f(t){const e=d.table(m).insert(t);return{success:!0,data:{_id:e}}}async function b(t,e){return d.table(m).update({_id:t},e),{success:!0}}async function g(t){return d.table(m).delete({_id:t}),{success:!0}}},AF1r:function(t,e,n){"use strict";var a=n("R+Pm");const r=Object(a["a"])({scriptUrl:["//at.alicdn.com/t/font_2652076_5epk3ej1ofs.js","//at.alicdn.com/t/font_2724754_rcmb540ie.js"]});e["a"]=r},AKB2:function(t,e,n){"use strict";var a=n("0Owb"),r=n("tJVT"),i=n("q1tI"),c=n.n(i),s=n("xqva"),o=n("Ndxo"),l=n("zBe7"),u=n("AOPw"),d=n("EgnG"),m=n("AF1r"),h=n("zPdC"),p=n.n(h),f=t=>{const e=t.src,n=(t.autoPlay,Object(i["useRef"])()),a=Object(i["useState"])(!0),s=Object(r["a"])(a,2),o=s[0],l=s[1],u=()=>{n.current.paused?h():f()},h=()=>{l(!1),n.current.volume=0,n.current.play(),Object(d["a"])({targets:n.current,easing:"linear",duration:2e3,volume:1})},f=()=>{l(!0),n.current.volume=1,Object(d["a"])({targets:n.current,easing:"linear",duration:2e3,volume:0,complete:()=>{n.current.pause()}})};return c.a.createElement("div",{className:p.a.container,onClick:u},c.a.createElement(m["a"],{type:"icon-music",className:""+(o?"":"spin")}),c.a.createElement("audio",{ref:n,src:e,loop:!0}))},b=n("SG4H"),g=n("B2N0"),x=n("OI9A"),w=n.n(x);e["a"]=t=>{const e=t.data,n=t.editable,d=t.onEdit,h=Object(i["useState"])(0),p=Object(r["a"])(h,2),x=p[0],y=p[1],O=Object(i["useMemo"])((()=>Object(g["a"])(e)),[e]);return c.a.createElement(c.a.Fragment,null,O.audio&&c.a.createElement(f,O.audio),c.a.createElement(s["a"],{style:{height:"100%"},autoplay:O.transition.autoPlay&&{delay:O.transition.duration||3e3},direction:O.transition.direction,effect:O.transition.effect,onSlideChangeTransitionEnd:t=>y(t.activeIndex)},O.pages.map(((t,e)=>c.a.createElement(o["a"],{key:t.id},c.a.createElement(l["a"],{background:t.background},t.elements&&t.elements.map(((t,r)=>{const i=b["a"][t.type];return c.a.createElement(u["a"],{key:r,entrance:x===e,position:t.position,pageSize:{width:window.innerWidth,height:window.innerHeight},size:t.size,rotation:t.rotation,clip:t.clip,animation:!n&&t.animation},c.a.createElement(i,Object(a["a"])({},t.props,{size:t.size})),n&&d&&c.a.createElement("button",{className:w.a.btn,onClick:()=>d(e,r)},c.a.createElement(m["a"],{type:"icon-edit"})))}))))))))}},AOPw:function(t,e,n){"use strict";var a=n("0Owb"),r=n("Pv/L"),i=n("q1tI"),c=n.n(i),s=n("EgnG"),o=n("B2N0"),l=t=>{const e=t.id,n=t.path,a=t.scale,r=t.size,s=t.viewBox,o=void 0===s?"0 0 1024 1024":s,l=Object(i["useMemo"])((()=>{const t=r[0],e=r[1],n=o.split(" "),i=n[2]/n[3];let c,s;i>t/e?(c=t*a,s=c/i):(s=e*a,c=s*i);const l=(t-c)/2,u=(e-s)/2,d=c/n[2];return`translate(${l}, ${u}) scale(${d})`}),[]);return c.a.createElement("svg",{width:"0",height:"0",viewBox:o,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},c.a.createElement("defs",null,c.a.createElement("clipPath",{id:e,transform:l},c.a.createElement("path",{d:n,"p-id":"2011"}))))},u=n("xDV/"),d=n.n(u);e["a"]=t=>{const e=t.position,n=t.pageSize,u=t.size,m=t.rotation,h=t.clip,p=t.entrance,f=t.animation,b=void 0===f?{}:f,g=t.children,x=Object(i["useRef"])(),w=Object(i["useRef"])(),y=Object(o["d"])(b,{position:e,size:u,rotation:m},n),O=Object(r["a"])(y),v=O[0],j=O.slice(1),_=Object(o["c"])(v);return Object(i["useEffect"])((()=>{j.length&&(p?w.current?(w.current.reverse(),w.current.play()):w.current=Object(s["a"])({targets:x.current,duration:b.duration||1e3,delay:b.delay||0,easing:"easeInOutSine",keyframes:j}):w.current&&(w.current.reverse(),w.current.play()))}),[p]),c.a.createElement("div",{ref:x,className:d.a.container,style:{..._,clipPath:h&&`url(#${h.id})`}},g,h&&c.a.createElement(l,Object(a["a"])({},h,{size:u})))}},B2N0:function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return m}));var a=n("PpiC"),r=n("+n12"),i={cat:"M518.25664 993.28h-0.4096c-49.03936 0-99.67616-6.47168-150.528-19.22048-52.61312-13.19936-92.57984-29.9008-116.84864-41.60512-58.7776-28.2112-111.47264-67.82976-152.35072-114.55488-41.41056-47.31904-71.24992-102.56384-86.30272-159.744a353.46432 353.46432 0 0 1-5.9904-154.5216c9.6256-52.8384 31.1296-104.20224 63.88736-152.73984l1.3312-5.07904c39.3216-150.08768 79.98464-305.27488 182.67136-324.1472l1.20832-0.21504 1.2288-0.12288A182.55872 182.55872 0 0 1 273.69472 20.48c99.7376 0 169.97376 81.6128 194.48832 114.93376h81.408l2.048-2.4576c27.66848-33.44384 92.4672-111.75936 183.296-111.75936h1.47456c107.37664 0 171.61216 185.3952 210.5856 324.84352 1.3312 4.78208 2.70336 9.6768 3.62496 12.82048 64.12288 94.60736 86.3744 189.41952 66.12992 281.87648-35.1232 160.44032-185.92768 255.08864-200.83712 264.09984C803.4304 913.37728 689.152 988.3136 518.67648 993.28l-0.41984 0.01024z",star:"M437.086316 85.423158L321.589895 287.744l-224.471579 49.690947c-16.384 3.610947-31.528421 11.317895-44.193684 22.312421l-6.413474 6.25179-5.928421 7.006316a99.920842 99.920842 0 0 0 2.96421 127.622737l154.138948 176.128-23.228632 234.873263c-1.724632 17.354105 1.131789 34.923789 8.29979 50.822737l3.772631 7.491368 4.688842 7.383579a99.920842 99.920842 0 0 0 123.526737 35.193263l209.057684-94.208 209.111579 94.154105c15.898947 7.168 33.414737 10.078316 50.768842 8.353685l8.29979-1.239579 8.461474-2.048a99.920842 99.920842 0 0 0 72.757894-105.903158l-23.390315-234.873263 154.246736-176.128c11.048421-12.611368 18.701474-27.809684 22.312421-44.193685l1.455158-8.245894 0.646737-8.677053c1.778526-48.882526-30.666105-91.621053-77.985684-102.076632L725.962105 287.797895l-115.388631-202.320842a99.813053 99.813053 0 0 0-173.433263 0z",leaf:"M946.618 826.575c60.125-157.837 21.743-390.212-60.125-488.534-285.605-315.665-533.628-52.612-533.628-52.612-180.381-120.255-269.178-77.878-312.514-30.062-26.723 37.581 11.876 90.19 11.876 90.19 48.849 54.492 99.584-31.943 255.538 37.581-75.161 511.082 638.852 443.431 638.852 443.431z"};e["a"]=(t,e={width:window.innerWidth,height:window.innerHeight})=>({...t,transition:t.transition||{direction:"vertical",effect:"slide"},pages:c(t.pages,e)});const c=(t,e)=>t?t.map((t=>s(t,e))):[],s=(t,e)=>({...t,id:Object(r["c"])(),elements:t.elements.map((t=>o(t,e)))}),o=(t,e)=>({...t,position:[u(t.position[0],e.width),u(t.position[1],e.height)],size:[u(t.size[0],e.width),u(t.size[1],e.height)],clip:l(t.clip)}),l=t=>{if(t)return"string"===typeof t?i[t]&&{id:Object(r["c"])(),path:i[t]}:{...t,id:Object(r["c"])(),path:i[t.path]||t.path}},u=(t,e)=>t&&"number"!==typeof t?/px$/.test(t)?parseFloat(t):(/%$/.test(t),e*parseFloat(t)/100):t,d=(t,e,n)=>{t=t||{};const a=e.position,r=e.size,i=e.rotation,c=u(r[0],n.width),s=u(r[1],n.height),o={slideInLeft:{translateX:-c,translateY:a[1]},slideInTop:{translateX:a[0],translateY:-s},slideInRight:{translateX:n.width+c,translateY:a[1]},slideInBottom:{translateX:a[0],translateY:n.height+s},slideInLeftTop:{translateX:-c,translateY:-s},slideInRightTop:{translateX:n.width+c,translateY:-s},slideInLeftBottom:{translateX:-c,translateY:n.height+s},slideInRightBottom:{translateX:n.width+c,translateY:n.height+s}};let l=[];return o[t.type]?l.push({...o[t.type],width:r[0],height:r[1]}):t.keyframes&&l.push(...t.keyframes),l.push({translateX:a[0],translateY:a[1],rotate:i,width:r[0],height:r[1]}),l},m=t=>{if(!t)return;const e=t.translateX,n=void 0===e?0:e,r=t.translateY,i=void 0===r?0:r,c=t.rotate,s=void 0===c?0:c,o=Object(a["a"])(t,["translateX","translateY","rotate"]);return{...o,transform:`translateX(${n}px) translateY(${i}px) rotate(${s}deg)`}}},E6o7:function(t,e,n){t.exports={container:"container___39CpX"}},OI9A:function(t,e,n){t.exports={btn:"btn___17Bbr"}},SG4H:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("o3J1"),c=n.n(i),s=t=>{const e=t.src,n=t.size,i=t.crop,s=Object(a["useMemo"])((()=>{if(i){const t=i.areaPixel.width/i.area.width*100,e=i.areaPixel.height/i.area.height*100,a=Math.max(n[0]/i.areaPixel.width,n[1]/i.areaPixel.height);return{width:t*a/i.zoom,height:e*a/i.zoom,transform:`\n          translate(-50%, -50%)\n          scale(${i.zoom})\n          translate(${50-i.area.x}%, ${50-i.area.y}%)\n          rotate(${i.rotation}deg)\n        `}}}),[i]);return r.a.createElement("img",{className:c.a.image,style:s,src:e,alt:"img"})},o=n("Y7CS"),l=n.n(o),u=t=>{const e=t.value;return r.a.createElement("div",{className:l.a.container},e)},d=n("uQII");e["a"]={image:s,text:u,icon:d["b"]}},TmYG:function(t,e,n){"use strict";n.r(e);var a=n("tJVT"),r=n("q1tI"),i=n.n(r),c=n("AKB2"),s=n("4469");e["default"]=t=>{const e=t.match.params.id,n=Object(r["useState"])(),o=Object(a["a"])(n,2),l=o[0],u=o[1];return Object(r["useEffect"])((()=>{s["a"](e).then((t=>{t.success&&u(t.data)}))}),[e]),l?i.a.createElement(c["a"],{data:l}):null}},Y7CS:function(t,e,n){t.exports={container:"container___36LYG"}},o3J1:function(t,e,n){t.exports={image:"image___dicno"}},uQII:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a),i=n("R+Pm"),c=n("E6o7"),s=n.n(c);const o=Object(i["a"])({scriptUrl:["//at.alicdn.com/t/font_2724754_rcmb540ie.js"]});e["b"]=t=>{const e=t.type,n=t.size;return r.a.createElement("div",{className:s.a.container},r.a.createElement(o,{type:`icon-${e}`,style:{fontSize:Math.min(n[0],n[1])}}))}},"xDV/":function(t,e,n){t.exports={container:"container___2Wfau"}},yerw:function(t,e,n){t.exports={container:"container___2CKxV"}},zBe7:function(t,e,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("yerw"),c=n.n(i);e["a"]=t=>{const e=t.background,n=t.children;return r.a.createElement("div",{className:c.a.container,style:{background:e}},n)}},zPdC:function(t,e,n){t.exports={container:"container___3l3x7",spin:"spin___3DLuw"}}}]);