(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"+n12":function(e,t,n){"use strict";function a(){let e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return e=e.replace(/x/g,(function(){const e=16*Math.random()|0;return e.toString(16)})),e=e.replace("y",(16*Math.random()&3|8).toString(16)),e.replace(/-/g,"").substr(0,24)}function c(e,t){let n;return function(){n&&clearTimeout(n),n=setTimeout((()=>{e(...arguments)}),t)}}async function r(e){const t=await fetch(`./templates/${e}.json`);return t.json()}n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}))},"2pc0":function(e,t,n){e.exports={header:"header___1gv_6"}},"42hf":function(e,t,n){e.exports={fill:"fill___3WFpF",bookCover:"bookCover___2DsAc",paper:"paper___2EG8l",book:"book___rQ9Ix",cover:"cover___1ECPG"}},4469:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return b})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return v}));var a=n("XS3J"),c=n.n(a),r=n("+n12");const s="marry.db",o=Symbol.for("db-instance-key");class i{loadDatabase(e,t){try{const n=localStorage.getItem(e);t(n)}catch(n){t(n)}}saveDatabase(e,t,n){try{localStorage.setItem(e,t),n(null)}catch(a){n(a)}}}const l=new i;class d{static getInstance(){return window[o]||(window[o]=new d),window[o]}constructor(){this.db=new c.a(s,{env:"BROWSER",autosave:!0,adapter:l}),this.db.loadDatabase()}table(e){return this.collection=this.db.getCollection(e)||this.db.addCollection(e),this}find(e={}){return this.collection.find(e)}findOne(e={}){return this.collection.findOne(e)}insert(e){const t=Object(r["c"])();return this.collection.insert({...e,_id:t}),t}update(e={},t){this.collection.findAndUpdate(e,(e=>{t="function"===typeof t?t(e):t,Object.assign(e,t)}))}delete(e={}){this.collection.findAndRemove(e)}}var u=d.getInstance();const m="story";async function f(e){const t=u.table(m).find(e);return{success:!0,data:t}}async function _(e){const t=u.table(m).findOne({_id:e});return{success:!0,data:t}}async function b(e){const t=u.table(m).insert(e);return{success:!0,data:{_id:t}}}async function p(e,t){return u.table(m).update({_id:e},t),{success:!0}}async function v(e){return u.table(m).delete({_id:e}),{success:!0}}},AF1r:function(e,t,n){"use strict";var a=n("R+Pm");const c=Object(a["a"])({scriptUrl:["//at.alicdn.com/t/font_2652076_5epk3ej1ofs.js","//at.alicdn.com/t/font_2724754_rcmb540ie.js"]});t["a"]=c},C3jO:function(e,t,n){e.exports={container:"container___VZCKj",back:"back___2TiKn",content:"content___D08Zk"}},HLoj:function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),r=n("C3jO"),s=n.n(r),o=e=>{const t=e.aspect,n=void 0===t?.618:t,a=e.width,r=e.children;return c.a.createElement("div",{className:s.a.container,style:{width:a}},c.a.createElement("div",{className:s.a.back,style:{paddingBottom:100*n+"%"}}),c.a.createElement("div",{className:s.a.content},r))},i=n("42hf"),l=n.n(i);const d='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1490"><rect fill-opacity="0"/></svg>';t["a"]=e=>{const t=e.cover,n=e.width,a=e.onClick;return c.a.createElement(o,{aspect:1.414,width:n},c.a.createElement("div",{className:l.a.bookCover,onClick:a},c.a.createElement("div",{className:l.a.paper}),c.a.createElement("div",{className:l.a.book},c.a.createElement("div",{className:l.a.cover},c.a.createElement("img",{src:d,style:{backgroundImage:`url(${t})`}}),c.a.createElement("div",{className:l.a.paper})),c.a.createElement("img",{src:d,className:l.a.corner,style:{backgroundImage:`url(${t})`}}))))}},SZAn:function(e,t,n){"use strict";n.r(t);n("DYRE");var a=n("zeV3"),c=(n("+L6B"),n("2/Rp")),r=(n("tU7J"),n("wFql")),s=n("tJVT"),o=n("q1tI"),i=n.n(o),l=n("9kvl"),d=n("AF1r"),u=n("HLoj"),m=(n("h7lp"),n("bf48")),f=n("0Owb"),_=n("2pc0"),b=n.n(_),p=e=>{const t=()=>{l["a"].goBack()};return i.a.createElement(m["a"],Object(f["a"])({className:b.a.header,onBack:t},e))},v=n("+n12"),x=n("4469"),h=n("URR8"),g=n.n(h);t["default"]=e=>{const t=e.match.params.id,n=Object(o["useState"])(l["a"].location.state),m=Object(s["a"])(n,2),f=m[0],_=m[1];if(Object(o["useEffect"])((()=>{Object(v["b"])(t).then((e=>{_(e)}))}),[t]),!f)return null;const b=()=>{l["a"].push(`/templates/${t}/view`)},h=async()=>{const e=await x["b"](f);e.success&&l["a"].push(`/editor/${e.data._id}`)};return i.a.createElement("div",null,i.a.createElement(p,{title:f.name}),i.a.createElement("div",{className:g.a.banner},i.a.createElement("img",{className:g.a.bg,src:f.cover}),i.a.createElement("div",{className:g.a.content},i.a.createElement("div",{className:g.a.pic},i.a.createElement(u["a"],{cover:f.cover})),i.a.createElement("div",{className:g.a.info},i.a.createElement(r["a"].Title,{level:5},f.name),i.a.createElement(r["a"].Paragraph,{ellipsis:{rows:4}},f.description),i.a.createElement(a["b"],{style:{float:"right"}},i.a.createElement(c["a"],{shape:"circle",onClick:b},i.a.createElement(d["a"],{type:"icon-view"})),i.a.createElement(c["a"],{shape:"circle",onClick:h},i.a.createElement(d["a"],{type:"icon-edit"})))))),f&&i.a.createElement("div",null,"xxx"))}},URR8:function(e,t,n){e.exports={banner:"banner___OFjvZ",bg:"bg___20c85",content:"content___2rJiA",pic:"pic___KedZ3",info:"info___VOHyK"}}}]);