(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1097:function(t,e,r){var content=r(1116);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(2).default)("0228dd9c",content,!0,{sourceMap:!1})},1115:function(t,e,r){"use strict";r(1097)},1116:function(t,e,r){var n=r(1)(!1);n.push([t.i,".section-hero[data-v-c164350a]{text-align:center}.section-hero .text[data-v-c164350a]{grid-column:1/-1}.title[data-v-c164350a]{max-width:7em}@media screen and (min-width:1200px){.section-hero .text[data-v-c164350a]{grid-column:2/span 10}}",""]),t.exports=n},1147:function(t,e,r){"use strict";r.r(e);r(17);var n=r(246),o=r(245),c={components:{SectionItems:n.default,SecondaryNavbar:o.default},data:function(){return{ctas:[{href:"/learn/get-atom",graphics:"graphics-cta-token-holders",overline:"Token Holders",title:"Start staking"},{href:"https://starport.com/",graphics:"graphics-cta-developers",graphicsNew:!0,overline:"Developers",title:"Start building"}]}},computed:{apps:function(){return this.$store.state.apps},activeApps:function(){return this.apps&&this.apps.records&&this.apps.records.length>0?this.apps.records.filter((function(t){return t.fields.active})):[]}},mounted:function(){this.$store.commit("initApps")},head:function(){return{title:"Apps & Services - Ecosystem"}}},l=(r(1115),r(0)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("secondary-navbar"),t._v(" "),r("div",{staticClass:"tm-wrapper tm-section tm-container"},[r("div",{staticClass:"text"},[r("h1",{staticClass:"title tm-rf6 tm-bold tm-lh-title tm-title mt-5"},[t._v("\n        "+t._s(t.activeApps.length)+" apps and services\n      ")]),t._v(" "),r("p",{staticClass:"subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure mt-7"},[t._v("\n        Discover a wide variety of apps, blockchains, wallets and explorers,\n        built in the Cosmos ecosystem by developers and contributors from\n        across the globe.\n      ")]),t._v(" "),r("p",{staticClass:"tm-rf-1 tm-lh-copy tm-measure mt-7 tm-muted"},[t._v("\n        We have not officially vetted or contacted these projects for proof.\n        Do your own research before using any service in this open network.\n      ")])])]),t._v(" "),r("SectionItems",{attrs:{items:t.activeApps}}),t._v(" "),r("div",{staticClass:"tm-wrapper tm-container tm-section"},[r("tm-crosshair",{staticClass:"center mb-10"}),t._v(" "),r("tm-cta-cards",{attrs:{data:t.ctas}})],1)],1)}),[],!1,null,"c164350a",null);e.default=component.exports;installComponents(component,{TmCrosshair:r(65).default,TmCtaCards:r(148).default})}}]);