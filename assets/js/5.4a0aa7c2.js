(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{290:function(t,n,e){},689:function(t,n,e){"use strict";var i=e(5),o=e(690),a=e(53);e(54)("search",1,function(t,n,e,r){return[function(e){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i):new RegExp(e)[n](String(i))},function(t){var n=r(e,t,this);if(n.done)return n.value;var s=i(t),l=String(this),c=s.lastIndex;o(c,0)||(s.lastIndex=0);var u=a(s,l);return o(s.lastIndex,c)||(s.lastIndex=c),null===u?-1:u.index}]})},690:function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},691:function(t,n,e){"use strict";var i=e(290);e.n(i).a},704:function(t,n,e){"use strict";e.r(n);e(72),e(97),e(689);var i={name:"LockPage",props:{token:String,articleText:String,articleUrl:String},data:function(){return{tokenVal:null,tokenIpt:null,invalid:!1}},computed:{canAccess:function(){return this.tokenVal===this.token}},methods:{getTokenFromUrl:function(t){var n=window.location.search,e=new RegExp("".concat(t,"=([^&]*)(&|$)"),"i"),i=n.match(e);return i?decodeURI(i[1]):null},submit:function(){this.verifyToken()&&(window.location.href="".concat(window.location.href,"?t=").concat(this.tokenIpt))},verifyToken:function(){return this.tokenIpt===this.token||(this.invalid=!0,!1)}},created:function(){this.tokenVal=this.getTokenFromUrl("t")}},o=(e(691),e(0)),a=Object(o.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.canAccess?e("div",[t._t("default")],2):e("div",{staticClass:"login"},[e("div",{staticClass:"login-box"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.tokenIpt,expression:"tokenIpt",modifiers:{trim:!0}}],staticClass:"login-ctrl",class:t.invalid?"invalid":"",attrs:{type:"text",placeholder:"输入token"},domProps:{value:t.tokenIpt},on:{input:function(n){n.target.composing||(t.tokenIpt=n.target.value.trim())},blur:function(n){return t.$forceUpdate()}}}),e("button",{staticClass:"login-submit",on:{click:t.submit}},[t._v("访问")])]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:this.invalid,expression:"this.invalid"}],staticClass:"invalid-tip"},[t._v("Token Error")]),t._v(" "),e("p",{staticClass:"login-tips"},[t._v("访问"),e("a",{staticClass:"login-link",attrs:{href:t.articleUrl,target:t.articleUrl?"_blank":""}},[t._v(t._s(t.articleText||"这里"))]),t._v("获取token。")])])},[],!1,null,"6ce9e2f7",null);n.default=a.exports}}]);