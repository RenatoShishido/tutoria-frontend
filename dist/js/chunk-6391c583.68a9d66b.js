(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6391c583"],{"13b3":function(t,e,i){},"63b7":function(t,e,i){},"68d8":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("Login")],1)},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"my-12",attrs:{"fill-height":""}},[i("v-layout",{staticClass:"d-flex flex-wrap justify-space-around align-center"},[i("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[i("carrossel")],1),i("v-spacer"),i("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[i("v-card",{staticClass:"px-12 py-12",attrs:{outlined:"",elevation:10}},[i("h2",{staticClass:"d-flex justify-center blue--text"},[t._v("TUTORIA EM PARES")]),i("h3",{staticClass:"d-flex justify-center mb-5"},[t._v("Fazer login")]),i("v-text-field",{attrs:{id:"email",label:"Email",name:"email",type:"email",outlined:"",loading:t.loading},model:{value:t.fields.email,callback:function(e){t.$set(t.fields,"email",e)},expression:"fields.email"}}),i("v-text-field",{attrs:{id:"password",label:"Password",name:"password",type:"password",outlined:"",loading:t.loading},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enviar()}},model:{value:t.fields.password,callback:function(e){t.$set(t.fields,"password",e)},expression:"fields.password"}}),i("a",{staticClass:"body-1 blue--text",attrs:{href:"/forgot_password"}},[t._v("Esqueci minha senha?")]),i("v-card-actions",{staticClass:"d-flex justify-space-around mt-5"},[i("v-btn",{staticClass:"white--text",attrs:{color:"blue",loading:t.loading,outlined:"",href:"/register"}},[t._v("Criar conta")]),i("v-btn",{staticClass:"white--text",attrs:{color:"blue",loading:t.loading},on:{click:function(e){return t.enviar()}}},[t._v("Acessar")])],1)],1)],1)],1)],1)},o=[],a=(i("96cf"),i("1da1")),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-carousel",t._l(t.items,(function(t,e){return i("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)},l=[],u={name:"carrosel",data:function(){return{items:[{src:"https://uploaddeimagens.com.br/images/002/847/994/original/20191031_093751.jpg?1598380919"},{src:"https://uploaddeimagens.com.br/images/002/847/997/original/20191031_095752.jpg?1598380983"},{src:"https://uploaddeimagens.com.br/images/002/848/009/original/logoctei-1024x700.jpg?1598381318"},{src:"https://uploaddeimagens.com.br/images/002/848/011/original/IMG_20191101_082857.jpg?1598381340"},{src:"https://uploaddeimagens.com.br/images/002/848/012/original/IMG_20191101_082859.jpg?1598381360"}]}}},h=u,d=i("2877"),f=i("6544"),v=i.n(f),p=(i("a9e3"),i("5530")),m=(i("63b7"),i("99af"),i("7db0"),i("c740"),i("13b3"),i("c3f0")),g=i("afdd"),w=i("9d26"),b=i("604c"),x=b["a"].extend({name:"v-window",directives:{Touch:m["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(p["a"])(Object(p["a"])({},b["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(g["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){n.changedByDelimiters=!0,i()}}},[this.$createElement(w["a"],{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),y=i("37c6"),T=b["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return b["a"].options.computed.classes.call(this)}},methods:{genData:b["a"].options.methods.genData}}),C=i("80d2"),_=i("d9bd"),$=x.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(p["a"])(Object(p["a"])({},x.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(_["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:x.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(g["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(w["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(T,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(y["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=x.options.render.call(this,t);return e.data.style="height: ".concat(Object(C["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),I=i("9d65"),j=i("4e82"),B=i("58df"),O=Object(B["a"])(I["a"],Object(j["a"])("windowGroup","v-window-item","v-window")),E=O.extend().extend().extend({name:"v-window-item",directives:{Touch:m["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(C["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(C["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),A=i("adda"),V=i("1c87"),k=Object(B["a"])(E,V["a"]),D=k.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(A["a"],{staticClass:"v-carousel__item",props:Object(p["a"])(Object(p["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(C["o"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),H=Object(d["a"])(h,c,l,!1,null,null,null),S=H.exports;v()(H,{VCarousel:$,VCarouselItem:D});var G={name:"login",components:{Carrossel:S},data:function(){return{fields:{},drawer:null,loading:!1}},methods:{enviar:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$store.dispatch("user/chargeLoginUser",t.fields);case 4:t.$store.dispatch("snackbar/show",{content:"Usuario logado com sucesso!",color:"green"}),t.$router.push("/dashboard/pagina/1"),t.fields={},e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.$store.dispatch("snackbar/show",{content:e.t0,color:"error"});case 12:t.loading=!1;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}},R=G,P=i("8336"),X=i("b0af"),Y=i("99d9"),L=i("a523"),N=i("0e8f"),M=i("a722"),q=i("2fa4"),F=i("8654"),W=Object(d["a"])(R,r,o,!1,null,null,null),z=W.exports;v()(W,{VBtn:P["a"],VCard:X["a"],VCardActions:Y["a"],VContainer:L["a"],VFlex:N["a"],VLayout:M["a"],VSpacer:q["a"],VTextField:F["a"]});var U={name:"View-Login",components:{Login:z}},J=U,K=i("7496"),Q=Object(d["a"])(J,n,s,!1,null,null,null);e["default"]=Q.exports;v()(Q,{VApp:K["a"]})},a523:function(t,e,i){"use strict";i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("20f6"),i("4b85");var n=i("e8f2"),s=i("d9f7");e["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,r=e.data,o=e.children,a=r.attrs;return a&&(r.attrs={},i=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(s["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),o)}})},a722:function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("layout")},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},c3f0:function(t,e,i){"use strict";i("4160"),i("159b");var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,r=.5,o=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<n-o&&t.up(t),t.down&&s>n+o&&t.down(t))};function r(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function a(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return r(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return a(t,e)}}}function l(t,e,i){var s=e.value,r=s.parent?t.parentElement:t,o=s.options||{passive:!0};if(r){var a=c(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=a,Object(n["t"])(a).forEach((function(t){r.addEventListener(t,a[t],o)}))}}function u(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var r=s._touchHandlers[i.context._uid];Object(n["t"])(r).forEach((function(t){s.removeEventListener(t,r[t])})),delete s._touchHandlers[i.context._uid]}}var h={inserted:l,unbind:u};e["a"]=h}}]);
//# sourceMappingURL=chunk-6391c583.68a9d66b.js.map