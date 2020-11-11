(function(t){function e(e){for(var a,i,o=e[0],l=e[1],u=e[2],c=0,d=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);v&&v(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},r={app:0},s=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d2ff955d","chunk-0c4db6c7":"f1daab0c"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-0c4db6c7":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-0c4db6c7":"f4665195"}[t]+".css",r=l.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],c=u.getAttribute("data-href");if(c===a||c===r)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[t],v.parentNode.removeChild(v),n(s)},v.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(t);var d=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(v);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[t]=void 0}};var v=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/supercap/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var v=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0602":function(t,e,n){"use strict";n("573a")},"21bb":function(t,e,n){"use strict";n("2dad")},"2dad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"header"}},[n("div",{staticClass:"name"},[t._v("Supercapacitor Discharge Calculator")]),n("div",{staticClass:"center"}),n("div",{staticClass:"nav"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/formulas"}},[t._v("Formulas")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)]),n("router-view")],1)},r=[],s=n("bfc7");n("be0f");a["a"].use(s["a"],{globalOptions:{}});var o={},l=o,u=(n("5c0b"),n("2877")),c=Object(u["a"])(l,i,r,!1,null,null,null),d=c.exports,v=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},t._l(t.capacitors,(function(e){return n("Capacitor",{key:e.id,attrs:{value:e},on:{close:t.onClose,duplicate:t.onDuplicate}})})),1)},m=[],f=(n("d81d"),n("a434"),n("2909")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"capacitor"},[n("div",{staticClass:"header"},[t._v(" Supercapacitor #"+t._s(t.id)+" "),n("div",{staticClass:"icon duplicate",attrs:{title:"Duplicate"},on:{click:t.onDuplicate}}),n("div",{staticClass:"icon close",attrs:{title:"Delete"},on:{click:t.onClose}})]),n("div",{staticClass:"inputs"},[n("div",{staticClass:"row"},[n("label",{attrs:{for:"vmax"+t.id}},[t._v("Nominal voltage (V"),n("sub",[t._v("max")]),t._v(")")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vMax,expression:"vMax"}],attrs:{type:"text",id:"vmax"+t.id,autocomplete:"off"},domProps:{value:t.vMax},on:{input:function(e){e.target.composing||(t.vMax=e.target.value)}}}),n("span",{staticClass:"suffix"},[t._v("V")])]),n("div",{staticClass:"row"},[n("label",{attrs:{for:"vmin"+t.id}},[t._v("Discharge voltage (V"),n("sub",[t._v("min")]),t._v(")")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vMin,expression:"vMin"}],attrs:{type:"text",id:"vmin"+t.id,autocomplete:"off"},domProps:{value:t.vMin},on:{input:function(e){e.target.composing||(t.vMin=e.target.value)}}}),n("span",{staticClass:"suffix"},[t._v("V")])]),n("div",{staticClass:"row"},[n("label",{attrs:{for:"cap"+t.id}},[t._v("Capacitance (C)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cap,expression:"cap"}],attrs:{type:"text",id:"cap"+t.id,autocomplete:"off"},domProps:{value:t.cap},on:{input:function(e){e.target.composing||(t.cap=e.target.value)}}}),n("span",{staticClass:"suffix"},[t._v("F")])]),n("div",{staticClass:"row"},[n("label",{attrs:{for:"esr"+t.id}},[t._v("Equivalent series resistance (ESR)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.esr,expression:"esr"}],attrs:{type:"text",id:"esr"+t.id,autocomplete:"off"},domProps:{value:t.esr},on:{input:function(e){e.target.composing||(t.esr=e.target.value)}}}),n("span",{staticClass:"suffix"},[t._v("Ω")])]),n("div",{staticClass:"row"},[t._v("Current consumptions in different modes")]),n("TimeCurrentSelector",{staticClass:"row",attrs:{title:"Run"},model:{value:t.run,callback:function(e){t.run=e},expression:"run"}}),n("TimeCurrentSelector",{staticClass:"row",attrs:{title:"Idle"},model:{value:t.idle,callback:function(e){t.idle=e},expression:"idle"}}),n("TimeCurrentSelector",{staticClass:"row",attrs:{title:"Sleep"},model:{value:t.sleep,callback:function(e){t.sleep=e},expression:"sleep"}}),n("div",{staticClass:"row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ldoEnabled,expression:"ldoEnabled"}],attrs:{type:"checkbox",id:"ldo"+t.id},domProps:{checked:Array.isArray(t.ldoEnabled)?t._i(t.ldoEnabled,null)>-1:t.ldoEnabled},on:{change:function(e){var n=t.ldoEnabled,a=e.target,i=!!a.checked;if(Array.isArray(n)){var r=null,s=t._i(n,r);a.checked?s<0&&(t.ldoEnabled=n.concat([r])):s>-1&&(t.ldoEnabled=n.slice(0,s).concat(n.slice(s+1)))}else t.ldoEnabled=i}}}),n("label",{attrs:{for:"ldo"+t.id}},[t._v("LDO enabled")])]),n("div",{staticClass:"ldo",class:{disabled:!t.ldoEnabled}},[n("div",{staticClass:"row"},[n("label",{attrs:{for:"ldoout"+t.id}},[t._v("Output voltage")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ldo.vOut,expression:"ldo.vOut"}],attrs:{type:"text",id:"ldoout"+t.id,disabled:!t.ldoEnabled,autocomplete:"off"},domProps:{value:t.ldo.vOut},on:{input:function(e){e.target.composing||t.$set(t.ldo,"vOut",e.target.value)}}}),n("span",{staticClass:"suffix"},[t._v("V")])]),n("CurrentSelector",{staticClass:"row",attrs:{title:"Quiescent current",disabled:!t.ldoEnabled},model:{value:t.ldo.qCurr,callback:function(e){t.$set(t.ldo,"qCurr",e)},expression:"ldo.qCurr"}})],1)],1),n("div",{staticClass:"results"},[n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v("Effective energy:")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("float")(t.energy))+" J")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v("Avg current consumption:")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("current")(t.avgCurrent)))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v("Max voltage drop:")]),t.maxVoltageDrop>=.001?n("div",{staticClass:"value"},[t._v(t._s(t._f("float")(t.maxVoltageDrop,3))+" V")]):t._e(),t.maxVoltageDrop<.001?n("div",{staticClass:"value"},[t._v("< 0.001 V")]):t._e()]),t.maxVoltageDrop>=.1?n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v("Recommended decoupling capacitor:")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("capacitanse")(t.dCapacitor)))])]):t._e(),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v("Constant current discharge:")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("duration")(t.ccDischarge)))])]),n("div",{staticClass:"row"},[n("div",{staticClass:"label"},[t._v("Constant resistance discharge:")]),n("div",{staticClass:"value"},[t._v(t._s(t._f("duration")(t.crDischarge)))])])])])},g=[],b=(n("99af"),n("b680"),n("5530")),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"selector"},[n("label",[t._v(t._s(t.title))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],attrs:{type:"text",autocomplete:"off"},domProps:{value:t.time},on:{input:[function(e){e.target.composing||(t.time=e.target.value)},t.change]}}),n("Time",{staticClass:"unit",on:{input:t.change},model:{value:t.timeUnit,callback:function(e){t.timeUnit=e},expression:"timeUnit"}}),n("span",{staticClass:"spacer"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],attrs:{type:"text",autocomplete:"off"},domProps:{value:t.current},on:{input:[function(e){e.target.composing||(t.current=e.target.value)},t.change]}}),n("Current",{staticClass:"unit",on:{input:t.change},model:{value:t.currentUnit,callback:function(e){t.currentUnit=e},expression:"currentUnit"}})],1)},_=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"unit",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?n:n[0]}}},t._l(t.options,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.title)+" ")])})),0)},y=[],w={name:"Time",props:{value:String},data:function(){return{selected:this.value,options:[{value:"us",title:"µs"},{value:"ms",title:"ms"},{value:"s",title:"s"}]}},watch:{selected:function(){this.$emit("input",this.selected)}}},M=w,E=Object(u["a"])(M,x,y,!1,null,"5d087b25",null),O=E.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"unit",attrs:{disabled:t.disabled},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?n:n[0]}}},t._l(t.options,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.title)+" ")])})),0)},k=[],j={name:"Current",props:{value:String,disabled:Boolean},data:function(){return{selected:this.value,options:[{value:"na",title:"nA"},{value:"ua",title:"µA"},{value:"ma",title:"mA"},{value:"a",title:"A"}]}},watch:{selected:function(){this.$emit("input",this.selected)}}},A=j,S=Object(u["a"])(A,U,k,!1,null,"3c6d0de7",null),T=S.exports,P={name:"TimeCurrentSelector",components:{Time:O,Current:T},props:{title:String,value:Object},data:function(){return{time:this.value.time,timeUnit:this.value.timeUnit,current:this.value.current,currentUnit:this.value.currentUnit}},methods:{change:function(){this.$emit("input",{time:this.time,timeUnit:this.timeUnit,current:this.current,currentUnit:this.currentUnit})}}},D=P,N=(n("0602"),Object(u["a"])(D,C,_,!1,null,"4cf1a699",null)),$=N.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"selector",class:{disabled:t.disabled}},[n("label",[t._v(t._s(t.title))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],attrs:{type:"text",autocomplete:"off",disabled:t.disabled},domProps:{value:t.val},on:{input:[function(e){e.target.composing||(t.val=e.target.value)},t.change]}}),n("Current",{staticClass:"unit",attrs:{disabled:t.disabled},on:{input:t.change},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}})],1)},V=[],L={name:"CurrentSelector",components:{Current:T},props:{title:String,value:Object,disabled:Boolean},data:function(){return{val:this.value?this.value.value:0,unit:this.value?this.value.unit:"nA"}},methods:{change:function(){this.$emit("input",{value:this.val,unit:this.unit})}}},q=L,B=(n("cfbd"),Object(u["a"])(q,F,V,!1,null,"3935021b",null)),H=B.exports,J={name:"Capacitor",components:{TimeCurrentSelector:$,CurrentSelector:H},props:{value:Object},data:function(){return{id:this.value.id,vMax:this.value.vMax,vMin:this.value.vMin,cap:this.value.cap,esr:this.value.esr,run:Object(b["a"])({},this.value.run),idle:Object(b["a"])({},this.value.idle),sleep:Object(b["a"])({},this.value.sleep),ldoEnabled:this.value.ldoEnabled,ldo:Object(b["a"])({},this.value.ldo)}},computed:{energy:function(){var t=.5*this.cap*(Math.pow(this.vMax,2)-Math.pow(this.vMin,2));return this.ldoEnabled&&(t*=this.getLdoEfficiency(this.vMin,this.vMax,this.ldo.vOut)),t},avgCurrent:function(){return this.getAvgCurrentConsumption(this.run,this.idle,this.sleep,this.ldoEnabled?this.ldo:null)},maxVoltageDrop:function(){var t=this.getCurrent(this.run.current,this.run.currentUnit),e=this.getCurrent(this.idle.current,this.idle.currentUnit),n=this.getCurrent(this.sleep.current,this.sleep.currentUnit),a=Math.max(t,e,n);return this.esr*a},dCapacitor:function(){for(var t=this.getTime(this.run.time,this.run.timeUnit),e=this.getCurrent(this.run.current,this.run.currentUnit),n=this.getTime(this.idle.time,this.idle.timeUnit),a=this.getCurrent(this.idle.current,this.idle.currentUnit),i=this.getTime(this.sleep.time,this.sleep.timeUnit),r=this.getCurrent(this.sleep.current,this.sleep.currentUnit),s=[{t:t,c:e},{t:n,c:a},{t:i,c:r}],o=null,l=0,u=s;l<u.length;l++){var c=u[l];null!=o?c.c>o.c&&(o=c):o=c}return o.c*o.t/.1},ccDischarge:function(){var t=this.cap*(this.vMax-this.vMin)/this.avgCurrent;return this.ldoEnabled&&(t*=this.getLdoEfficiency(this.vMin,this.vMax,this.ldo.vOut)),t},crDischarge:function(){var t=this.vMax/this.avgCurrent,e=-1*this.cap*t*Math.log(this.vMin/this.vMax);return this.ldoEnabled&&(e*=this.getLdoEfficiency(this.vMin,this.vMax,this.ldo.vOut)),e}},methods:{onDuplicate:function(){this.$emit("duplicate",Object(b["a"])({},this._data))},onClose:function(){this.$emit("close",this.id)},getLdoEfficiency:function(t,e,n){return console.log((n/t+n/e)/2),(n/t+n/e)/2},getAvgCurrentConsumption:function(t,e,n,a){var i=this.getTime(t.time,t.timeUnit),r=this.getCurrent(t.current,t.currentUnit),s=this.getTime(e.time,e.timeUnit),o=this.getCurrent(e.current,e.currentUnit),l=this.getTime(n.time,n.timeUnit),u=this.getCurrent(n.current,n.currentUnit),c=(r*i+o*s+u*l)/(i+s+l);if(a){var d=this.getCurrent(a.qCurr.value,a.qCurr.unit);c+=d}return c},getCurrent:function(t,e){var n=parseFloat(t);switch(e){case"na":return n/1e9;case"ua":return n/1e6;case"ma":return n/1e3;case"a":return n;default:throw"Unknown unit ".concat(e)}},getTime:function(t,e){var n=parseFloat(t);switch(e){case"us":return n/1e6;case"ms":return n/1e3;case"s":return n;default:throw"Unknown unit ".concat(e)}}},filters:{float:function(t,e){return void 0===e&&(e=2),t.toFixed(e)},current:function(t,e){var n=function(t,n){return"".concat(t.toFixed(e)," ").concat(n)},a=t;return void 0===e&&(e=3),a>1?n(a,"A"):(a*=1e3,a>1?n(a,"mA"):(a*=1e3,a>1?n(a,"µA"):(a*=1e3,a>1?n(a,"nA"):void 0)))},duration:function(t){var e=Math.floor(t/31536e3),n=Math.floor(t/86400),a=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),r=Math.floor(t%60),s=e>0?e+"y ":"",o=n>0?n+"d ":"",l=a>0?a+"h ":"",u=i>0?i+"m ":"",c=r>0?r+"s":"";return s+o+l+u+c},capacitanse:function(t){var e=function(t,e){return"".concat(t.toFixed(0)," ").concat(e)},n=t;return n>1?e(n,"F"):(n*=1e6,n>1?e(n,"µF"):(n*=1e3,n>1?e(n,"nF"):void 0))}}},R=J,I=(n("6972"),Object(u["a"])(R,h,g,!1,null,"b9a38e0e",null)),K=I.exports,Q={components:{Capacitor:K},data:function(){return{capacitors:[{id:1,vMax:3.6,vMin:1.8,cap:1,esr:10,run:{time:5,timeUnit:"ms",current:45,currentUnit:"ma"},idle:{time:55,timeUnit:"ms",current:3,currentUnit:"ma"},sleep:{time:60,timeUnit:"s",current:5,currentUnit:"ua"},ldoEnabled:!1,ldo:{qCurr:{value:200,unit:"na"},vOut:1.9}}]}},methods:{onClose:function(t){for(var e=0;e<this.capacitors.length;e++)this.capacitors[e].id==t&&this.capacitors.splice(e,1)},onDuplicate:function(t){var e=Math.max.apply(Math,Object(f["a"])(this.capacitors.map((function(t){return t.id}))));t.id=e+1,this.capacitors.push(t)}}},z=Q,G=(n("21bb"),Object(u["a"])(z,p,m,!1,null,null,null)),W=G.exports;a["a"].use(v["a"]);var X=[{path:"/",name:"Home",component:W},{path:"/formulas",name:"Formulas",component:function(){return n.e("chunk-0c4db6c7").then(n.bind(null,"7829"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Y=new v["a"]({routes:X}),Z=Y;a["a"].config.productionTip=!1,new a["a"]({router:Z,render:function(t){return t(d)}}).$mount("#app")},"573a":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},6972:function(t,e,n){"use strict";n("ef84")},"76d9":function(t,e,n){},"9c0c":function(t,e,n){},cfbd:function(t,e,n){"use strict";n("76d9")},ef84:function(t,e,n){}});
//# sourceMappingURL=app.95bffcc8.js.map