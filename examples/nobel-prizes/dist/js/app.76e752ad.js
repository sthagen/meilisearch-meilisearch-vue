(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],f=0,h=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var i={},a={app:0},n=[];function s(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=i,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},1:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);var i=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("p",{staticClass:"disclaimer"},[t._v(" This is a modified Nobel prizes dataset only for demo purposes. Enjoy searching with MeiliSearch! ")]),r("div",{staticClass:"container"},[r("ais-instant-search",{attrs:{"search-client":t.searchClient,"index-name":"prizes"}},[r("div",{staticClass:"search-panel__filters"},[r("ais-clear-refinements",[r("span",{attrs:{slot:"resetLabel"},slot:"resetLabel"},[t._v("Clear all filters")])]),r("h2",[t._v("Categories")]),r("ais-refinement-list",{attrs:{attribute:"category"}}),r("h2",[t._v("Year")]),r("ais-refinement-list",{attrs:{attribute:"year"}})],1),r("div",{staticClass:"search-panel__results"},[r("ais-search-box",{attrs:{placeholder:"Search here…",autofocus:""}}),r("ais-hits",{attrs:{"transform-items":t.transformItems},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[r("div",[r("div",{staticClass:"hit-info"},[t._v("🏅 "+t._s(i.year))]),r("div",{staticClass:"hit-info"},[r("ais-highlight",{attrs:{hit:i,attribute:"firstname"}}),t._v(" "),r("ais-highlight",{attrs:{hit:i,attribute:"surname"}})],1),r("div",{staticClass:"hit-info motivation"},[r("ais-highlight",{attrs:{hit:i,attribute:"motivation"}})],1)])]}}])}),r("ais-pagination")],1)])],1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("h1",{staticClass:"header-title"},[t._v("Search in Nobel Prizes with MeiliSearch")])])}],s=(r("c2ca"),r("6c68"));const o="https://demos.meilisearch.com",l="dc3fedaf922de8937fdea01f0a7d59557f1fd31832cb8440ce94231cfdde7f25";var c={data(){return{searchClient:Object(s["instantMeiliSearch"])(o,l)}},methods:{transformItems(t){return t.map(t=>({...t,_highlightResult:{...t._highlightResult,motivation:{value:t._highlightResult.motivation.value.replace(/(^"|"$|^&quot;|&quot;$)/g,"")}}}))}}},u=c,f=(r("034f"),r("2877")),h=Object(f["a"])(u,a,n,!1,null,null,null),p=h.exports,d=r("8ab1");i["a"].use(d["a"]),i["a"].config.productionTip=!1,new i["a"]({render:t=>t(p)}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.76e752ad.js.map