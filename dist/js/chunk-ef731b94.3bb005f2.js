(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef731b94"],{"4bd4":function(t,i,n){"use strict";n("4de4"),n("7db0"),n("4160"),n("caad"),n("07ac"),n("2532"),n("159b");var r=n("5530"),e=n("58df"),a=n("7e2b"),s=n("3206");i["a"]=Object(e["a"])(a["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var i=Object.values(t).includes(!0);this.$emit("input",!i)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var i=this,n=function(t){return t.$watch("hasError",(function(n){i.$set(i.errorBag,t._uid,n)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(e){e&&(i.errorBag.hasOwnProperty(t._uid)||(r.valid=n(t)))})):r.valid=n(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var i=this.inputs.find((function(i){return i._uid===t._uid}));if(i){var n=this.watchers.find((function(t){return t._uid===i._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==i._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==i._uid})),this.$delete(this.errorBag,i._uid)}}},render:function(t){var i=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return i.$emit("submit",t)}}},this.$slots.default)}})},d90f:function(t,i,n){"use strict";n.r(i);var r=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("ResetPassword")},e=[],a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-form",[t._v(" corona vairus ")])},s=[],u={name:"Reset Password"},o=u,c=n("2877"),d=n("6544"),l=n.n(d),h=n("4bd4"),f=Object(c["a"])(o,a,s,!1,null,null,null),p=f.exports;l()(f,{VForm:h["a"]});var v={components:{ResetPassword:p}},m=v,w=Object(c["a"])(m,r,e,!1,null,null,null);i["default"]=w.exports}}]);
//# sourceMappingURL=chunk-ef731b94.3bb005f2.js.map