!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-pawel-ui",[],e):"object"==typeof exports?exports["vue-pawel-ui"]=e():t["vue-pawel-ui"]=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=77)}([function(t,e,n){var i=n(3);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(12))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(0),r=n(9),o=n(5),s=n(8),a=Object.defineProperty;e.f=i?a:function(t,e,n){if(o(t),e=s(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(2);t.exports=function(t){if(!i(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){"use strict";function i(t,e,n,i,r,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var h=u.render;u.render=function(t,e){return c.call(e),h(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return i}))},function(t,e,n){var i=n(2);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var i=n(0),r=n(3),o=n(10);t.exports=!i&&!r((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var i=n(1),r=n(2),o=i.document,s=r(o)&&r(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,e,n){var i=n(0),r=n(4).f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/;i&&!("name"in o)&&r(o,"name",{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var i=n(0),r=n(4),o=n(23);t.exports=i?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},,function(t,e,n){var i=n(0),r=n(43),o=n(23),s=n(16),a=n(8),c=n(6),u=n(9),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=s(t),e=a(e,!0),u)try{return h(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var i=n(24),r=n(18);t.exports=function(t){return i(r(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var i=n(1),r=n(13);t.exports=function(t,e){try{r(i,t,e)}catch(n){i[t]=e}return e}},function(t,e){t.exports={}},function(t,e,n){var i=n(49),r=n(1),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(i[t])||o(r[t]):i[t]&&i[t][e]||r[t]&&r[t][e]}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(3),r=n(17),o="".split;t.exports=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?o.call(t,""):Object(t)}:Object},function(t,e,n){var i=n(1),r=n(13),o=n(6),s=n(19),a=n(26),c=n(44),u=c.get,h=c.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var c=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||r(n,"name",e),h(n).source=l.join("string"==typeof e?e:"")),t!==i?(c?!f&&t[e]&&(u=!0):delete t[e],u?t[e]=n:r(t,e,n)):u?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},function(t,e,n){var i=n(27),r=Function.toString;"function"!=typeof i.inspectSource&&(i.inspectSource=function(t){return r.call(t)}),t.exports=i.inspectSource},function(t,e,n){var i=n(1),r=n(19),o=i["__core-js_shared__"]||r("__core-js_shared__",{});t.exports=o},function(t,e,n){var i=n(29),r=n(30),o=i("keys");t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){var i=n(46),r=n(27);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:i?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+i).toString(36)}},function(t,e,n){var i=n(32),r=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},function(t,e,n){var i=n(6),r=n(16),o=n(50).indexOf,s=n(20);t.exports=function(t,e){var n,a=r(t),c=0,u=[];for(n in a)!i(s,n)&&i(a,n)&&u.push(n);for(;e.length>c;)i(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){var i=n(34),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(3),r=/#|\.prototype\./,o=function(t,e){var n=a[s(t)];return n==u||n!=c&&("function"==typeof e?i(e):!!e)},s=o.normalize=function(t){return String(t).replace(r,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},function(t,e,n){var i=n(1),r=n(29),o=n(6),s=n(30),a=n(37),c=n(59),u=r("wks"),h=i.Symbol,l=c?h:h&&h.withoutSetter||s;t.exports=function(t){return o(u,t)||(a&&o(h,t)?u[t]=h[t]:u[t]=l("Symbol."+t)),u[t]}},function(t,e,n){var i=n(3);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())}))},,,,function(t,e,n){"use strict";var i=n(42),r=n(53).map,o=n(60),s=n(63),a=o("map"),c=s("map");i({target:"Array",proto:!0,forced:!a||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var i=n(1),r=n(15).f,o=n(13),s=n(25),a=n(19),c=n(47),u=n(35);t.exports=function(t,e){var n,h,l,f,p,v=t.target,d=t.global,y=t.stat;if(n=d?i:y?i[v]||a(v,{}):(i[v]||{}).prototype)for(h in e){if(f=e[h],l=t.noTargetGet?(p=r(n,h))&&p.value:n[h],!u(d?h:v+(y?".":"#")+h,t.forced)&&void 0!==l){if(typeof f==typeof l)continue;c(f,l)}(t.sham||l&&l.sham)&&o(f,"sham",!0),s(n,h,f,t)}}},function(t,e,n){"use strict";var i={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!i.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:i},function(t,e,n){var i,r,o,s=n(45),a=n(1),c=n(2),u=n(13),h=n(6),l=n(28),f=n(20),p=a.WeakMap;if(s){var v=new p,d=v.get,y=v.has,m=v.set;i=function(t,e){return m.call(v,t,e),e},r=function(t){return d.call(v,t)||{}},o=function(t){return y.call(v,t)}}else{var g=l("state");f[g]=!0,i=function(t,e){return u(t,g,e),e},r=function(t){return h(t,g)?t[g]:{}},o=function(t){return h(t,g)}}t.exports={set:i,get:r,has:o,enforce:function(t){return o(t)?r(t):i(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var i=n(1),r=n(26),o=i.WeakMap;t.exports="function"==typeof o&&/native code/.test(r(o))},function(t,e){t.exports=!1},function(t,e,n){var i=n(6),r=n(48),o=n(15),s=n(4);t.exports=function(t,e){for(var n=r(e),a=s.f,c=o.f,u=0;u<n.length;u++){var h=n[u];i(t,h)||a(t,h,c(e,h))}}},function(t,e,n){var i=n(21),r=n(31),o=n(52),s=n(5);t.exports=i("Reflect","ownKeys")||function(t){var e=r.f(s(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){var i=n(1);t.exports=i},function(t,e,n){var i=n(16),r=n(33),o=n(51),s=function(t){return function(e,n,s){var a,c=i(e),u=r(c.length),h=o(s,u);if(t&&n!=n){for(;u>h;)if((a=c[h++])!=a)return!0}else for(;u>h;h++)if((t||h in c)&&c[h]===n)return t||h||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,n){var i=n(34),r=Math.max,o=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):o(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var i=n(54),r=n(24),o=n(56),s=n(33),a=n(57),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,h=4==t,l=6==t,f=5==t||l;return function(p,v,d,y){for(var m,g,x=o(p),w=r(x),b=i(v,d,3),_=s(w.length),S=0,M=y||a,O=e?M(p,_):n?M(p,0):void 0;_>S;S++)if((f||S in w)&&(g=b(m=w[S],S,x),t))if(e)O[S]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return S;case 2:c.call(O,m)}else if(h)return!1;return l?-1:u||h?h:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},function(t,e,n){var i=n(55);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var i=n(18);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(2),r=n(58),o=n(36)("species");t.exports=function(t,e){var n;return r(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!r(n.prototype)?i(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var i=n(17);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){var i=n(37);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var i=n(3),r=n(36),o=n(61),s=r("species");t.exports=function(t){return o>=51||!i((function(){var e=[];return(e.constructor={})[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var i,r,o=n(1),s=n(62),a=o.process,c=a&&a.versions,u=c&&c.v8;u?r=(i=u.split("."))[0]+i[1]:s&&(!(i=s.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=s.match(/Chrome\/(\d+)/))&&(r=i[1]),t.exports=r&&+r},function(t,e,n){var i=n(21);t.exports=i("navigator","userAgent")||""},function(t,e,n){var i=n(0),r=n(3),o=n(6),s=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,e){if(o(a,t))return a[t];e||(e={});var n=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,h=o(e,0)?e[0]:c,l=o(e,1)?e[1]:void 0;return a[t]=!!n&&!r((function(){if(u&&!i)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,h,l)}))}},function(t,e,n){"use strict";var i=n(0),r=n(1),o=n(35),s=n(25),a=n(6),c=n(17),u=n(65),h=n(8),l=n(3),f=n(68),p=n(31).f,v=n(15).f,d=n(4).f,y=n(72).trim,m=r.Number,g=m.prototype,x="Number"==c(f(g)),w=function(t){var e,n,i,r,o,s,a,c,u=h(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=y(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(s=(o=u.slice(2)).length,a=0;a<s;a++)if((c=o.charCodeAt(a))<48||c>r)return NaN;return parseInt(o,i)}return+u};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var b,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(x?l((function(){g.valueOf.call(n)})):"Number"!=c(n))?u(new m(w(e)),n,_):w(e)},S=i?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;S.length>M;M++)a(m,b=S[M])&&!a(_,b)&&d(_,b,v(m,b));_.prototype=g,g.constructor=_,s(r,"Number",_)}},function(t,e,n){var i=n(2),r=n(66);t.exports=function(t,e,n){var o,s;return r&&"function"==typeof(o=e.constructor)&&o!==n&&i(s=o.prototype)&&s!==n.prototype&&r(t,s),t}},function(t,e,n){var i=n(5),r=n(67);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,o){return i(n),r(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},function(t,e,n){var i=n(2);t.exports=function(t){if(!i(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){var i,r=n(5),o=n(69),s=n(22),a=n(20),c=n(71),u=n(10),h=n(28),l=h("IE_PROTO"),f=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=i?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(i):((e=u("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var n=s.length;n--;)delete v.prototype[s[n]];return v()};a[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[l]=t):n=v(),void 0===e?n:o(n,e)}},function(t,e,n){var i=n(0),r=n(4),o=n(5),s=n(70);t.exports=i?Object.defineProperties:function(t,e){o(t);for(var n,i=s(e),a=i.length,c=0;a>c;)r.f(t,n=i[c++],e[n]);return t}},function(t,e,n){var i=n(32),r=n(22);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(21);t.exports=i("document","documentElement")},function(t,e,n){var i=n(18),r="["+n(73)+"]",o=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),a=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);n(11);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"pw-image-preview",staticStyle:{display:"none"},on:{click:t.handlePreviewHide}},[n("span",[t._v(t._s(t.active+1)+" / "+t._s(t.imagesLength))]),n("div",{style:{transform:"translateX("+t.translateX+"px)",transition:t.transition?"transform 300ms":""}},t._l(t.list,(function(e,i){return n("div",{key:e+i,style:{transform:"translateX("+(e.style.translateX||0)+"px) translateY("+(e.style.translateY||0)+"px) scale("+(e.style.scale||1)+") translateZ(0)",transition:e.style.transition?"transform 300ms":""}},[n("img",{attrs:{src:e.src,alt:""},on:{touchstart:t.handleMousedown,touchmove:t.handleMousemove,touchend:t.handleMouseup}})])})),0)])};i._withStripped=!0;n(41),n(64),n(74);function r(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var o={name:"PwImagePreview",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},startPosition:{type:Number,default:0},images:{type:Array,default:function(){return[]}}},data:function(){return{list:[],translateX:0,transition:!1,active:0,scale:1}},computed:{imagesLength:function(){return this.images.length},imagesIndexLength:function(){return this.images.length-1}},watch:{show:function(t){t&&this.handlePreview(this.startPosition)},images:{handler:function(t){this.list=t.map((function(t){return{src:t,style:{scale:1,translateX:0,translateY:0}}}))},immediate:!0,deep:!0}},beforeCreate:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.whRatio=this.width/this.height},methods:{handlePreview:function(t){this.active=t,this.translateX=this.active*-this.width},handlePreviewHide:function(t){this.$emit("change",!1),this.handleMouseup(t)},handleMousedown:function(t){var e=this;1===t.touches.length?setTimeout((function(){e.canZoom||(1===e.list[e.active].style.scale?e.startMove(t):e.startMoveZoom(t))}),0):2===t.touches.length&&this.startZoom(t)},handleMousemove:function(t){var e=this;t.preventDefault(),1===t.touches.length?setTimeout((function(){e.canZoom||(1===e.list[e.active].style.scale?e.touchMove(t):e.touchMoveZoom(t))}),0):2===t.touches.length&&this.touchZoom(t)},handleMouseup:function(t){this.canZoom?this.endZoom(t):(this.canMove&&this.endMove(t),this.canMoveZoom&&(this.canMoveZoom=!1))},startMove:function(t){this.startTime=(new Date).getTime(),t.clientX=t.touches[0].clientX,this.x=t.clientX,this.l=this.translateX,this.transition=!1,this.list[0].style.translateX&&0===this.active&&(this.l=this.translateX=0,this.list[0].style.translateX=0),this.list[this.imagesIndexLength].style.translateX&&this.active===this.imagesIndexLength&&(this.l=this.translateX=-this.width*this.imagesIndexLength,this.list[this.imagesIndexLength].style.translateX=0),this.canMove=!0},touchMove:function(t){this.canMove&&(t.clientX=t.touches[0].clientX,this.toRight=t.clientX-this.x>0,this.translateX=t.clientX-this.x+this.l,this.imagesLength>1&&(0===this.active&&this.toRight?this.list[this.imagesIndexLength].style.translateX=-this.width*this.imagesLength:this.active!==this.imagesIndexLength||this.toRight?(this.list[0].style.translateX=0,this.list[this.imagesIndexLength].style.translateX=0):this.list[0].style.translateX=this.width*this.imagesLength))},endMove:function(t){var e=((new Date).getTime()-this.startTime)/1e3<.3,n=Math.abs(this.l-this.translateX)>this.width/2||e;this.imagesLength>1?0===this.active&&this.toRight?(this.active=n?this.imagesIndexLength:0,this.translateX=n?this.width:0):this.active!==this.imagesIndexLength||this.toRight?(this.active=n?this.toRight?this.active-1:this.active+1:this.active,this.translateX=this.active*-this.width):(this.active=n?0:this.imagesIndexLength,this.translateX=n?-this.width*this.imagesLength:-this.width*this.imagesIndexLength):this.translateX=0,this.transition=!0,this.canMove=!1},startZoom:function(t){var e=this.list[this.active].style.scale;this.list[this.active].style.transition=!1,this.startDistance=r(t.touches),this.startScale=e,1===this.list[this.active].style.scale&&(this.list[this.active].style.startTranslateX=this.list[this.active].style.translateX),this.list[this.active].style.translateX=this.list[this.active].style.startTranslateX,this.list[this.active].style.translateY=0,this.canZoom=!0},touchZoom:function(t){if(this.canZoom){var e=r(t.touches),n=this.startScale*e/this.startDistance;this.list[this.active].style.scale=Math.min(Math.max(n,1/3),3)}},endZoom:function(t){var e=this;this.list[this.active].style.scale<1&&(this.list[this.active].style.transition=!0,this.list[this.active].style.translateX=this.list[this.active].style.startTranslateX,this.list[this.active].style.scale=1),setTimeout((function(){e.list[e.active].style.transition=!1}),300),this.canZoom=!1},startMoveZoom:function(t){t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY,this.x=t.clientX,this.y=t.clientY,this.l=this.list[this.active].style.translateX,this.t=this.list[this.active].style.translateY,this.list[this.active].style.width||this.getImgWH(this.list[this.active].src),this.canMoveZoom=!0},touchMoveZoom:function(t){if(this.canMoveZoom){t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY;var e=this.list[this.active].style,n=e.width*e.scale,i=e.height*e.scale,r=0,o=0,s=0;n>this.width&&(r=Math.abs(this.list[this.active].style.startTranslateX||0),o=Math.abs(n-this.width)/2,s=Math.min(Math.max(t.clientX-this.x+this.l,-o+r),o+r),this.list[this.active].style.translateX=s),i>this.height&&(o=Math.abs(i-this.height)/2,s=Math.min(Math.max(t.clientY-this.y+this.t,-o),o),this.list[this.active].style.translateY=s)}},getImgWH:function(t){var e=new Image;e.src=t;var n=e.width/e.height;n<this.whRatio?(this.list[this.active].style.height=this.height,this.list[this.active].style.width=this.height*n):(this.list[this.active].style.width=this.width,this.list[this.active].style.height=this.width/n)}}},s=n(7),a=Object(s.a)(o,i,[],!1,null,null,null);a.options.__file="packages/image-preview/src/main.vue";var c=a.exports;c.install=function(t){t.component(c.name,c)};e.default=c}]).default}));
//# sourceMappingURL=image-preview.js.map