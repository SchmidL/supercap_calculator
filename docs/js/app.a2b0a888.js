(function(t){function e(e){for(var i,n,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);v&&v(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},n={app:0},r={app:0},s=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3dff1972","chunk-0c4db6c7":"bc16f7a8"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-0c4db6c7":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-0c4db6c7":"f4665195"}[t]+".css",r=l.p+i,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===i||u===r)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var i=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete n[t],v.parentNode.removeChild(v),a(s)},v.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){n[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise((function(e,a){i=r[t]=[e,a]}));e.push(i[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=r[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",d.name="ChunkLoadError",d.type=i,d.request=n,a[1](d)}r[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/supercap/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var v=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0602":function(t,e,a){"use strict";a("573a")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"header"}},[a("div",{staticClass:"name"},[t._v("Supercapacitor Discharge Calculator")]),a("div",{staticClass:"center"}),a("div",{staticClass:"nav"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/formulas"}},[t._v("Formulas")])],1)]),a("router-view")],1)},r=[],s=a("bfc7");a("be0f");i["a"].use(s["a"],{globalOptions:{}});var o={},l=o,c=(a("5c0b"),a("2877")),u=Object(c["a"])(l,n,r,!1,null,null,null),d=u.exports,v=(a("d3b7"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},t._l(t.capacitors,(function(e){return a("Capacitor",{key:e.id,attrs:{value:e},on:{delete:t.onDelete,duplicate:t.onDuplicate,update:t.onUpdate}})})),1)},f=[],h=(a("d81d"),a("a434"),a("2909")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"capacitor"},[a("div",{staticClass:"header"},[t._v(" Supercapacitor #"+t._s(t.id)+" "),a("div",{staticClass:"icon duplicate",attrs:{title:"Duplicate"},on:{click:t.onDuplicate}}),a("div",{staticClass:"icon close",attrs:{title:"Delete"},on:{click:t.onClose}})]),a("div",{staticClass:"inputs"},[a("div",{staticClass:"row"},[a("label",{attrs:{for:"vmax"+t.id}},[t._v("Nominal voltage (V"),a("sub",[t._v("max")]),t._v(")")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vMax,expression:"vMax"}],attrs:{type:"text",id:"vmax"+t.id,autocomplete:"off"},domProps:{value:t.vMax},on:{input:function(e){e.target.composing||(t.vMax=e.target.value)}}}),a("span",{staticClass:"suffix"},[t._v("V")])]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"vmin"+t.id}},[t._v("Discharge voltage (V"),a("sub",[t._v("min")]),t._v(")")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vMin,expression:"vMin"}],attrs:{type:"text",id:"vmin"+t.id,autocomplete:"off"},domProps:{value:t.vMin},on:{input:function(e){e.target.composing||(t.vMin=e.target.value)}}}),a("span",{staticClass:"suffix"},[t._v("V")])]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"cap"+t.id}},[t._v("Capacitance (C)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cap,expression:"cap"}],attrs:{type:"text",id:"cap"+t.id,autocomplete:"off"},domProps:{value:t.cap},on:{input:function(e){e.target.composing||(t.cap=e.target.value)}}}),a("span",{staticClass:"suffix"},[t._v("F")])]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"esr"+t.id}},[t._v("Equivalent series resistance (ESR)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.esr,expression:"esr"}],attrs:{type:"text",id:"esr"+t.id,autocomplete:"off"},domProps:{value:t.esr},on:{input:function(e){e.target.composing||(t.esr=e.target.value)}}}),a("span",{staticClass:"suffix"},[t._v("Ω")])]),a("div",{staticClass:"row"},[t._v("Current consumptions in different modes")]),a("TimeCurrentSelector",{staticClass:"row",attrs:{title:"Run"},model:{value:t.run,callback:function(e){t.run=e},expression:"run"}}),a("TimeCurrentSelector",{staticClass:"row",attrs:{title:"Idle"},model:{value:t.idle,callback:function(e){t.idle=e},expression:"idle"}}),a("TimeCurrentSelector",{staticClass:"row",attrs:{title:"Sleep"},model:{value:t.sleep,callback:function(e){t.sleep=e},expression:"sleep"}}),a("div",{staticClass:"row"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.ldoEnabled,expression:"ldoEnabled"}],attrs:{type:"checkbox",id:"ldo"+t.id},domProps:{checked:Array.isArray(t.ldoEnabled)?t._i(t.ldoEnabled,null)>-1:t.ldoEnabled},on:{change:function(e){var a=t.ldoEnabled,i=e.target,n=!!i.checked;if(Array.isArray(a)){var r=null,s=t._i(a,r);i.checked?s<0&&(t.ldoEnabled=a.concat([r])):s>-1&&(t.ldoEnabled=a.slice(0,s).concat(a.slice(s+1)))}else t.ldoEnabled=n}}}),a("label",{attrs:{for:"ldo"+t.id}},[t._v("Use LDO")])]),t.ldoEnabled?a("div",{staticClass:"ldo"},[a("div",{staticClass:"row"},[a("label",{attrs:{for:"ldoout"+t.id}},[t._v("Output voltage")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ldo.vOut,expression:"ldo.vOut"}],attrs:{type:"text",id:"ldoout"+t.id,disabled:!t.ldoEnabled,autocomplete:"off"},domProps:{value:t.ldo.vOut},on:{input:function(e){e.target.composing||t.$set(t.ldo,"vOut",e.target.value)}}}),a("span",{staticClass:"suffix"},[t._v("V")])]),a("CurrentSelector",{staticClass:"row",attrs:{title:"Quiescent current",disabled:!t.ldoEnabled},model:{value:t.ldo.qCurr,callback:function(e){t.$set(t.ldo,"qCurr",e)},expression:"ldo.qCurr"}})],1):t._e()],1),a("div",{staticClass:"results"},[a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Effective energy:")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("float")(t.energy))+" J")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Avg current consumption:")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("current")(t.avgCurrent)))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Max voltage drop:")]),t.maxVoltageDrop>=.001?a("div",{staticClass:"value"},[t._v(t._s(t._f("float")(t.maxVoltageDrop,3))+" V")]):t._e(),t.maxVoltageDrop<.001?a("div",{staticClass:"value"},[t._v("< 0.001 V")]):t._e()]),t.maxVoltageDrop>=.1?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Recommended decoupling capacitor:")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("capacitanse")(t.dCapacitor)))])]):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Constant current discharge:")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("duration")(t.ccDischarge)))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Constant resistance discharge:")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("duration")(t.crDischarge)))])])])])},g=[],b=(a("99af"),a("b680"),a("5530")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"selector"},[a("label",[t._v(t._s(t.title))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],attrs:{type:"text",autocomplete:"off"},domProps:{value:t.time},on:{input:[function(e){e.target.composing||(t.time=e.target.value)},t.change]}}),a("Time",{staticClass:"unit",on:{input:t.change},model:{value:t.timeUnit,callback:function(e){t.timeUnit=e},expression:"timeUnit"}}),a("span",{staticClass:"spacer"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],attrs:{type:"text",autocomplete:"off"},domProps:{value:t.current},on:{input:[function(e){e.target.composing||(t.current=e.target.value)},t.change]}}),a("Current",{staticClass:"unit",on:{input:t.change},model:{value:t.currentUnit,callback:function(e){t.currentUnit=e},expression:"currentUnit"}})],1)},_=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"unit",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]}}},t._l(t.options,(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.title)+" ")])})),0)},w=[],y={name:"Time",props:{value:String},data:function(){return{selected:this.value,options:[{value:"us",title:"µs"},{value:"ms",title:"ms"},{value:"s",title:"s"}]}},watch:{selected:function(){this.$emit("input",this.selected)}}},M=y,E=Object(c["a"])(M,x,w,!1,null,"5d087b25",null),O=E.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"unit",attrs:{disabled:t.disabled},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]}}},t._l(t.options,(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.title)+" ")])})),0)},k=[],j={name:"Current",props:{value:String,disabled:Boolean},data:function(){return{selected:this.value,options:[{value:"na",title:"nA"},{value:"ua",title:"µA"},{value:"ma",title:"mA"},{value:"a",title:"A"}]}},watch:{selected:function(){this.$emit("input",this.selected)}}},S=j,D=Object(c["a"])(S,U,k,!1,null,"3c6d0de7",null),A=D.exports,T={name:"TimeCurrentSelector",components:{Time:O,Current:A},props:{title:String,value:Object},data:function(){return{time:this.value.time,timeUnit:this.value.timeUnit,current:this.value.current,currentUnit:this.value.currentUnit}},methods:{change:function(){this.$emit("input",{time:this.time,timeUnit:this.timeUnit,current:this.current,currentUnit:this.currentUnit})}}},P=T,N=(a("0602"),Object(c["a"])(P,C,_,!1,null,"4cf1a699",null)),$=N.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"selector",class:{disabled:t.disabled}},[a("label",[t._v(t._s(t.title))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],attrs:{type:"text",autocomplete:"off",disabled:t.disabled},domProps:{value:t.val},on:{input:[function(e){e.target.composing||(t.val=e.target.value)},t.change]}}),a("Current",{staticClass:"unit",attrs:{disabled:t.disabled},on:{input:t.change},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}})],1)},L=[],V={name:"CurrentSelector",components:{Current:A},props:{title:String,value:Object,disabled:Boolean},data:function(){return{val:this.value?this.value.value:0,unit:this.value?this.value.unit:"nA"}},methods:{change:function(){this.$emit("input",{value:this.val,unit:this.unit})}}},q=V,I=(a("cfbd"),Object(c["a"])(q,F,L,!1,null,"3935021b",null)),B=I.exports,J={name:"Capacitor",components:{TimeCurrentSelector:$,CurrentSelector:B},props:{value:Object},data:function(){return{id:this.value.id,vMax:this.value.vMax,vMin:this.value.vMin,cap:this.value.cap,esr:this.value.esr,run:Object(b["a"])({},this.value.run),idle:Object(b["a"])({},this.value.idle),sleep:Object(b["a"])({},this.value.sleep),ldoEnabled:this.value.ldoEnabled,ldo:Object(b["a"])({},this.value.ldo)}},computed:{energy:function(){var t=.5*this.cap*(Math.pow(this.vMax,2)-Math.pow(this.vMin,2));return this.ldoEnabled&&(t*=this.getLdoEfficiency(this.vMin,this.vMax,this.ldo.vOut)),t},avgCurrent:function(){return this.getAvgCurrentConsumption(this.run,this.idle,this.sleep,this.ldoEnabled?this.ldo:null)},maxVoltageDrop:function(){var t=this.getCurrent(this.run.current,this.run.currentUnit),e=this.getCurrent(this.idle.current,this.idle.currentUnit),a=this.getCurrent(this.sleep.current,this.sleep.currentUnit),i=Math.max(t,e,a);return this.esr*i},dCapacitor:function(){for(var t=this.getTime(this.run.time,this.run.timeUnit),e=this.getCurrent(this.run.current,this.run.currentUnit),a=this.getTime(this.idle.time,this.idle.timeUnit),i=this.getCurrent(this.idle.current,this.idle.currentUnit),n=this.getTime(this.sleep.time,this.sleep.timeUnit),r=this.getCurrent(this.sleep.current,this.sleep.currentUnit),s=[{t:t,c:e},{t:a,c:i},{t:n,c:r}],o=null,l=0,c=s;l<c.length;l++){var u=c[l];null!=o?u.c>o.c&&(o=u):o=u}return o.c*o.t/.1},ccDischarge:function(){var t=this.cap*(this.vMax-this.vMin)/this.avgCurrent;return this.ldoEnabled&&(t*=this.getLdoEfficiency(this.vMin,this.vMax,this.ldo.vOut)),t},crDischarge:function(){var t=this.vMax/this.avgCurrent,e=-1*this.cap*t*Math.log(this.vMin/this.vMax);return this.ldoEnabled&&(e*=this.getLdoEfficiency(this.vMin,this.vMax,this.ldo.vOut)),e},fieldChange:function(){var t={id:this.id,vMax:this.vMax,vMin:this.vMin,cap:this.cap,esr:this.esr,run:Object(b["a"])({},this.run),idle:Object(b["a"])({},this.idle),sleep:Object(b["a"])({},this.sleep),ldoEnabled:this.ldoEnabled,ldo:Object(b["a"])({},this.ldo)};return t}},methods:{onDuplicate:function(){this.$emit("duplicate",Object(b["a"])({},this._data))},onClose:function(){this.$emit("delete",this.id)},getLdoEfficiency:function(t,e,a){return(a/t+a/e)/2},getAvgCurrentConsumption:function(t,e,a,i){var n=this.getTime(t.time,t.timeUnit),r=this.getCurrent(t.current,t.currentUnit),s=this.getTime(e.time,e.timeUnit),o=this.getCurrent(e.current,e.currentUnit),l=this.getTime(a.time,a.timeUnit),c=this.getCurrent(a.current,a.currentUnit),u=(r*n+o*s+c*l)/(n+s+l);if(i){var d=this.getCurrent(i.qCurr.value,i.qCurr.unit);u+=d}return u},getCurrent:function(t,e){var a=parseFloat(t);switch(e){case"na":return a/1e9;case"ua":return a/1e6;case"ma":return a/1e3;case"a":return a;default:throw"Unknown unit ".concat(e)}},getTime:function(t,e){var a=parseFloat(t);switch(e){case"us":return a/1e6;case"ms":return a/1e3;case"s":return a;default:throw"Unknown unit ".concat(e)}}},watch:{fieldChange:function(t){this.$emit("update",t)}},filters:{float:function(t,e){return void 0===e&&(e=2),t.toFixed(e)},current:function(t,e){var a=function(t,a){return"".concat(t.toFixed(e)," ").concat(a)},i=t;return void 0===e&&(e=3),i>1?a(i,"A"):(i*=1e3,i>1?a(i,"mA"):(i*=1e3,i>1?a(i,"µA"):(i*=1e3,i>1?a(i,"nA"):void 0)))},duration:function(t){var e=Math.floor(t/31536e3),a=Math.floor(t/86400),i=Math.floor(t%86400/3600),n=Math.floor(t%3600/60),r=Math.floor(t%60),s=e>0?e+"y ":"",o=a>0?a+"d ":"",l=i>0?i+"h ":"",c=n>0?n+"m ":"",u=r>0?r+"s":"";return s+o+l+c+u},capacitanse:function(t){var e=function(t,e){return"".concat(t.toFixed(0)," ").concat(e)},a=t;return a>1?e(a,"F"):(a*=1e6,a>1?e(a,"µF"):(a*=1e3,a>1?e(a,"nF"):void 0))}}},R=J,H=(a("b881"),Object(c["a"])(R,m,g,!1,null,"bc3fb17e",null)),K=H.exports,Q={components:{Capacitor:K},data:function(){return{capacitors:[]}},created:function(){window.addEventListener("beforeunload",this.saveData)},mounted:function(){if(localStorage.getItem("capacitors"))try{this.capacitors=JSON.parse(localStorage.getItem("capacitors"))}catch(t){localStorage.removeItem("capacitors")}else this.capacitors=[this.getDefaultCapacitor()]},methods:{onDelete:function(t){if(1==this.capacitors.length)return this.capacitors.shift(),void this.capacitors.push(this.getDefaultCapacitor());for(var e=0;e<this.capacitors.length;e++)this.capacitors[e].id==t&&this.capacitors.splice(e,1)},onDuplicate:function(t){var e=Math.max.apply(Math,Object(h["a"])(this.capacitors.map((function(t){return t.id}))));t.id=e+1,this.capacitors.push(t)},onUpdate:function(t){for(var e=0;e<this.capacitors.length;e++)this.capacitors[e].id==t.id&&(this.capacitors[e]=t)},saveData:function(){var t=JSON.stringify(this.capacitors);localStorage.setItem("capacitors",t)},getDefaultCapacitor:function(){return{id:1,vMax:3.6,vMin:1.8,cap:1,esr:10,run:{time:5,timeUnit:"ms",current:45,currentUnit:"ma"},idle:{time:55,timeUnit:"ms",current:3,currentUnit:"ma"},sleep:{time:60,timeUnit:"s",current:5,currentUnit:"ua"},ldoEnabled:!1,ldo:{qCurr:{value:200,unit:"na"},vOut:1.9}}}},beforeRouteLeave:function(t,e,a){this.saveData(),a()}},z=Q,G=(a("21bb"),Object(c["a"])(z,p,f,!1,null,null,null)),W=G.exports;i["a"].use(v["a"]);var X=[{path:"/",name:"Home",component:W},{path:"/formulas",name:"Formulas",component:function(){return a.e("chunk-0c4db6c7").then(a.bind(null,"7829"))}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Y=new v["a"]({routes:X}),Z=Y;i["a"].config.productionTip=!1,new i["a"]({router:Z,render:function(t){return t(d)}}).$mount("#app")},"573a":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"76d9":function(t,e,a){},"9c0c":function(t,e,a){},b703:function(t,e,a){},b881:function(t,e,a){"use strict";a("b703")},cfbd:function(t,e,a){"use strict";a("76d9")}});
//# sourceMappingURL=app.a2b0a888.js.map