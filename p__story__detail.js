(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"+n12":function(e,t,a){"use strict";function n(){let e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return e=e.replace(/x/g,(function(){const e=16*Math.random()|0;return e.toString(16)})),e=e.replace("y",(16*Math.random()&3|8).toString(16)),e.replace(/-/g,"").substr(0,24)}function r(e,t){let a;return function(){a&&clearTimeout(a),a=setTimeout((()=>{e(...arguments)}),t)}}async function c(e){const t=await fetch(`./templates/${e}.json`);return t.json()}a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}))},"2pc0":function(e,t,a){e.exports={header:"header___1gv_6"}},"42hf":function(e,t,a){e.exports={fill:"fill___3WFpF",bookCover:"bookCover___2DsAc",paper:"paper___2EG8l",book:"book___rQ9Ix",cover:"cover___1ECPG"}},4469:function(e,t,a){"use strict";a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return f})),a.d(t,"e",(function(){return g})),a.d(t,"d",(function(){return b}));var n=a("XS3J"),r=a.n(n),c=a("+n12");const i="marry.db",s=Symbol.for("db-instance-key");class o{loadDatabase(e,t){try{const a=localStorage.getItem(e);t(a)}catch(a){t(a)}}saveDatabase(e,t,a){try{localStorage.setItem(e,t),a(null)}catch(n){a(n)}}}const l=new o;class u{static getInstance(){return window[s]||(window[s]=new u),window[s]}constructor(){this.db=new r.a(i,{env:"BROWSER",autosave:!0,adapter:l}),this.db.loadDatabase()}table(e){return this.collection=this.db.getCollection(e)||this.db.addCollection(e),this}find(e={}){return this.collection.find(e)}findOne(e={}){return this.collection.findOne(e)}insert(e){const t=Object(c["c"])();return this.collection.insert({...e,_id:t}),t}update(e={},t){this.collection.findAndUpdate(e,(e=>{t="function"===typeof t?t(e):t,Object.assign(e,t)}))}delete(e={}){this.collection.findAndRemove(e)}}var d=u.getInstance();const m="story";async function p(e){const t=d.table(m).find(e);return{success:!0,data:t}}async function h(e){const t=d.table(m).findOne({_id:e});return{success:!0,data:t}}async function f(e){const t=d.table(m).insert(e);return{success:!0,data:{_id:t}}}async function g(e,t){return d.table(m).update({_id:e},t),{success:!0}}async function b(e){return d.table(m).delete({_id:e}),{success:!0}}},AOPw:function(e,t,a){"use strict";var n=a("0Owb"),r=a("Pv/L"),c=a("q1tI"),i=a.n(c),s=a("EgnG"),o=a("B2N0"),l=e=>{const t=e.id,a=e.path,n=e.scale,r=e.size,s=e.viewBox,o=void 0===s?"0 0 1024 1024":s,l=Object(c["useMemo"])((()=>{const e=r[0],t=r[1],a=o.split(" "),c=a[2]/a[3];let i,s;c>e/t?(i=e*n,s=i/c):(s=t*n,i=s*c);const l=(e-i)/2,u=(t-s)/2,d=i/a[2];return`translate(${l}, ${u}) scale(${d})`}),[]);return i.a.createElement("svg",{width:"0",height:"0",viewBox:o,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},i.a.createElement("defs",null,i.a.createElement("clipPath",{id:t,transform:l},i.a.createElement("path",{d:a,"p-id":"2011"}))))},u=a("xDV/"),d=a.n(u);t["a"]=e=>{const t=e.position,a=e.pageSize,u=e.size,m=e.rotation,p=e.clip,h=e.entrance,f=e.animation,g=void 0===f?{}:f,b=e.children,_=Object(c["useRef"])(),v=Object(c["useRef"])(),w=Object(o["d"])(g,{position:t,size:u,rotation:m},a),x=Object(r["a"])(w),y=x[0],E=x.slice(1),O=Object(o["c"])(y);return Object(c["useEffect"])((()=>{E.length&&(h?v.current?(v.current.reverse(),v.current.play()):v.current=Object(s["a"])({targets:_.current,duration:g.duration||1e3,delay:g.delay||0,easing:"easeInOutSine",keyframes:E}):v.current&&(v.current.reverse(),v.current.play()))}),[h]),i.a.createElement("div",{ref:_,className:d.a.container,style:{...O,clipPath:p&&`url(#${p.id})`}},b,p&&i.a.createElement(l,Object(n["a"])({},p,{size:u})))}},B2N0:function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return m}));var n=a("PpiC"),r=a("+n12"),c={cat:"M518.25664 993.28h-0.4096c-49.03936 0-99.67616-6.47168-150.528-19.22048-52.61312-13.19936-92.57984-29.9008-116.84864-41.60512-58.7776-28.2112-111.47264-67.82976-152.35072-114.55488-41.41056-47.31904-71.24992-102.56384-86.30272-159.744a353.46432 353.46432 0 0 1-5.9904-154.5216c9.6256-52.8384 31.1296-104.20224 63.88736-152.73984l1.3312-5.07904c39.3216-150.08768 79.98464-305.27488 182.67136-324.1472l1.20832-0.21504 1.2288-0.12288A182.55872 182.55872 0 0 1 273.69472 20.48c99.7376 0 169.97376 81.6128 194.48832 114.93376h81.408l2.048-2.4576c27.66848-33.44384 92.4672-111.75936 183.296-111.75936h1.47456c107.37664 0 171.61216 185.3952 210.5856 324.84352 1.3312 4.78208 2.70336 9.6768 3.62496 12.82048 64.12288 94.60736 86.3744 189.41952 66.12992 281.87648-35.1232 160.44032-185.92768 255.08864-200.83712 264.09984C803.4304 913.37728 689.152 988.3136 518.67648 993.28l-0.41984 0.01024z",star:"M437.086316 85.423158L321.589895 287.744l-224.471579 49.690947c-16.384 3.610947-31.528421 11.317895-44.193684 22.312421l-6.413474 6.25179-5.928421 7.006316a99.920842 99.920842 0 0 0 2.96421 127.622737l154.138948 176.128-23.228632 234.873263c-1.724632 17.354105 1.131789 34.923789 8.29979 50.822737l3.772631 7.491368 4.688842 7.383579a99.920842 99.920842 0 0 0 123.526737 35.193263l209.057684-94.208 209.111579 94.154105c15.898947 7.168 33.414737 10.078316 50.768842 8.353685l8.29979-1.239579 8.461474-2.048a99.920842 99.920842 0 0 0 72.757894-105.903158l-23.390315-234.873263 154.246736-176.128c11.048421-12.611368 18.701474-27.809684 22.312421-44.193685l1.455158-8.245894 0.646737-8.677053c1.778526-48.882526-30.666105-91.621053-77.985684-102.076632L725.962105 287.797895l-115.388631-202.320842a99.813053 99.813053 0 0 0-173.433263 0z",leaf:"M946.618 826.575c60.125-157.837 21.743-390.212-60.125-488.534-285.605-315.665-533.628-52.612-533.628-52.612-180.381-120.255-269.178-77.878-312.514-30.062-26.723 37.581 11.876 90.19 11.876 90.19 48.849 54.492 99.584-31.943 255.538 37.581-75.161 511.082 638.852 443.431 638.852 443.431z"};t["a"]=(e,t={width:window.innerWidth,height:window.innerHeight})=>({...e,transition:e.transition||{direction:"vertical",effect:"slide"},pages:i(e.pages,t)});const i=(e,t)=>e?e.map((e=>s(e,t))):[],s=(e,t)=>({...e,id:Object(r["c"])(),elements:e.elements.map((e=>o(e,t)))}),o=(e,t)=>({...e,position:[u(e.position[0],t.width),u(e.position[1],t.height)],size:[u(e.size[0],t.width),u(e.size[1],t.height)],clip:l(e.clip)}),l=e=>{if(e)return"string"===typeof e?c[e]&&{id:Object(r["c"])(),path:c[e]}:{...e,id:Object(r["c"])(),path:c[e.path]||e.path}},u=(e,t)=>e&&"number"!==typeof e?/px$/.test(e)?parseFloat(e):(/%$/.test(e),t*parseFloat(e)/100):e,d=(e,t,a)=>{e=e||{};const n=t.position,r=t.size,c=t.rotation,i=u(r[0],a.width),s=u(r[1],a.height),o={slideInLeft:{translateX:-i,translateY:n[1]},slideInTop:{translateX:n[0],translateY:-s},slideInRight:{translateX:a.width+i,translateY:n[1]},slideInBottom:{translateX:n[0],translateY:a.height+s},slideInLeftTop:{translateX:-i,translateY:-s},slideInRightTop:{translateX:a.width+i,translateY:-s},slideInLeftBottom:{translateX:-i,translateY:a.height+s},slideInRightBottom:{translateX:a.width+i,translateY:a.height+s}};let l=[];return o[e.type]?l.push({...o[e.type],width:r[0],height:r[1]}):e.keyframes&&l.push(...e.keyframes),l.push({translateX:n[0],translateY:n[1],rotate:c,width:r[0],height:r[1]}),l},m=e=>{if(!e)return;const t=e.translateX,a=void 0===t?0:t,r=e.translateY,c=void 0===r?0:r,i=e.rotate,s=void 0===i?0:i,o=Object(n["a"])(e,["translateX","translateY","rotate"]);return{...o,transform:`translateX(${a}px) translateY(${c}px) rotate(${s}deg)`}}},C3jO:function(e,t,a){e.exports={container:"container___VZCKj",back:"back___2TiKn",content:"content___D08Zk"}},E6o7:function(e,t,a){e.exports={container:"container___39CpX"}},HLoj:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("C3jO"),i=a.n(c),s=e=>{const t=e.aspect,a=void 0===t?.618:t,n=e.width,c=e.children;return r.a.createElement("div",{className:i.a.container,style:{width:n}},r.a.createElement("div",{className:i.a.back,style:{paddingBottom:100*a+"%"}}),r.a.createElement("div",{className:i.a.content},c))},o=a("42hf"),l=a.n(o);const u='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1490"><rect fill-opacity="0"/></svg>';t["a"]=e=>{const t=e.cover,a=e.width,n=e.onClick;return r.a.createElement(s,{aspect:1.414,width:a},r.a.createElement("div",{className:l.a.bookCover,onClick:n},r.a.createElement("div",{className:l.a.paper}),r.a.createElement("div",{className:l.a.book},r.a.createElement("div",{className:l.a.cover},r.a.createElement("img",{src:u,style:{backgroundImage:`url(${t})`}}),r.a.createElement("div",{className:l.a.paper})),r.a.createElement("img",{src:u,className:l.a.corner,style:{backgroundImage:`url(${t})`}}))))}},O6IJ:function(e,t,a){"use strict";var n=a("0Owb"),r=a("tJVT"),c=a("q1tI"),i=a.n(c),s=a("xqva"),o=a("Ndxo"),l=a("zBe7"),u=a("AOPw"),d=a("SG4H"),m=a("B2N0");t["a"]=e=>{const t=0,a=Object(c["useMemo"])((()=>{const a={width:(window.innerWidth-t)/3,height:200};return[Object(m["e"])(e.pages,a),a]}),[e.pages]),p=Object(r["a"])(a,2),h=p[0],f=p[1];return i.a.createElement(s["a"],{style:{height:200},slidesPerView:3,spaceBetween:t,effect:"coverflow",centeredSlides:!0,pagination:{clickable:!0}},h.map((e=>i.a.createElement(o["a"],{key:e.id},i.a.createElement(l["a"],{background:e.background},e.elements&&e.elements.map(((e,t)=>{const a=d["a"][e.type];return i.a.createElement(u["a"],{key:t,position:e.position,pageSize:f,size:e.size,rotation:e.rotation,clip:e.clip,animation:!1},i.a.createElement(a,Object(n["a"])({},e.props,{size:e.size})))})))))))}},SG4H:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("o3J1"),i=a.n(c),s=e=>{const t=e.src,a=e.size,c=e.crop,s=Object(n["useMemo"])((()=>{if(c){const e=c.areaPixel.width/c.area.width*100,t=c.areaPixel.height/c.area.height*100,n=Math.max(a[0]/c.areaPixel.width,a[1]/c.areaPixel.height);return{width:e*n/c.zoom,height:t*n/c.zoom,transform:`\n          translate(-50%, -50%)\n          scale(${c.zoom})\n          translate(${50-c.area.x}%, ${50-c.area.y}%)\n          rotate(${c.rotation}deg)\n        `}}}),[c]);return r.a.createElement("img",{className:i.a.image,style:s,src:t,alt:"img"})},o=a("Y7CS"),l=a.n(o),u=e=>{const t=e.value;return r.a.createElement("div",{className:l.a.container},t)},d=a("uQII");t["a"]={image:s,text:u,icon:d["b"]}},Y7CS:function(e,t,a){e.exports={container:"container___36LYG"}},o3J1:function(e,t,a){e.exports={image:"image___dicno"}},"tao+":function(e,t,a){"use strict";a("h7lp");var n=a("bf48"),r=a("0Owb"),c=a("q1tI"),i=a.n(c),s=a("9kvl"),o=a("2pc0"),l=a.n(o);t["a"]=e=>{const t=()=>{s["a"].goBack()};return i.a.createElement(n["a"],Object(r["a"])({className:l.a.header,onBack:t},e))}},uQII:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n),c=a("R+Pm"),i=a("E6o7"),s=a.n(i);const o=Object(c["a"])({scriptUrl:["//at.alicdn.com/t/font_2724754_rcmb540ie.js"]});t["b"]=e=>{const t=e.type,a=e.size;return r.a.createElement("div",{className:s.a.container},r.a.createElement(o,{type:`icon-${t}`,style:{fontSize:Math.min(a[0],a[1])}}))}},wFWp:function(e,t,a){e.exports={banner:"banner___NiTkL",bg:"bg___cxFpF",content:"content___1iUl2",pic:"pic___a0JfP",info:"info___2_ANS",tool:"tool___2A4eH",gallery:"gallery___mSlxH"}},"xDV/":function(e,t,a){e.exports={container:"container___2Wfau"}},yerw:function(e,t,a){e.exports={container:"container___2CKxV"}},zBe7:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("yerw"),i=a.n(c);t["a"]=e=>{const t=e.background,a=e.children;return r.a.createElement("div",{className:i.a.container,style:{background:t}},a)}},zn33:function(e,t,a){"use strict";a.r(t);a("DYRE");var n=a("zeV3"),r=(a("+L6B"),a("2/Rp")),c=(a("tU7J"),a("wFql")),i=a("tJVT"),s=a("q1tI"),o=a.n(s),l=a("9kvl"),u=a("HLoj"),d=a("tao+"),m=a("O6IJ"),p=(a("+n12"),a("4469")),h=a("wFWp"),f=a.n(h);t["default"]=e=>{const t=e.match.params.id,a=Object(s["useState"])(l["a"].location.state),h=Object(i["a"])(a,2),g=h[0],b=h[1];if(Object(s["useEffect"])((()=>{p["a"](t).then((e=>{e.success&&b(e.data)}))}),[t]),!g)return null;const _=()=>{l["a"].push(`/story/${t}/view`)},v=async()=>{l["a"].push(`/story/${t}/editor`)};return o.a.createElement("div",null,o.a.createElement(d["a"],{title:g.name}),o.a.createElement("div",{className:f.a.banner},o.a.createElement("img",{className:f.a.bg,src:g.cover}),o.a.createElement("div",{className:f.a.content},o.a.createElement("div",{className:f.a.pic},o.a.createElement(u["a"],{cover:g.cover})),o.a.createElement("div",{className:f.a.info},o.a.createElement(c["a"].Title,{level:5},g.name),o.a.createElement(c["a"].Paragraph,{ellipsis:{rows:4}},g.description),o.a.createElement(n["b"],{className:f.a.tool},o.a.createElement(r["a"],{type:"primary",size:"small",ghost:!0,onClick:_},"\u9884\u89c8"),o.a.createElement(r["a"],{type:"primary",size:"small",ghost:!0,onClick:v},"\u7f16\u8f91"))))),o.a.createElement("div",{className:f.a.gallery},o.a.createElement(m["a"],{pages:g.pages})))}}}]);