(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);v&&v(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},r={app:0},s=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5fc1a15e","chunk-0c4db6c7":"ccc1899e"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-0c4db6c7":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-0c4db6c7":"c8913f22"}[t]+".css",r=l.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[t],v.parentNode.removeChild(v),a(s)},v.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/supercap/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var v=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},5369:function(t,e,a){"use strict";a("a5ce")},5464:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"header"}},[a("div",{staticClass:"name"},[t._v("Supercapacitor Discharge Calculator")]),a("div",{staticClass:"name name-short"},[t._v("Calculator")]),a("div",{staticClass:"center"}),a("div",{staticClass:"nav"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/formulas"}},[t._v("Formulas")]),t._v(" | "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)]),a("div",{staticClass:"page-container"},[a("router-view")],1)])},r=[],s=a("a584"),o=a("bfc7");a("be0f");n["a"].use(o["a"],{globalOptions:{}}),n["a"].use(s["a"],{config:{id:"G-7NHY04F1FE"}});var l={},c=l,u=(a("5c0b"),a("2877")),d=Object(u["a"])(c,i,r,!1,null,null,null),v=d.exports,p=(a("d3b7"),a("8c4f")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},t._l(t.capacitors,(function(e){return a("Capacitor",{key:e.key,attrs:{value:e},on:{delete:t.onDelete,duplicate:t.onDuplicate,update:t.onUpdate}})})),1)},f=[],h=(a("d81d"),a("a434"),a("2909")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"capacitor"},[a("div",{staticClass:"header"},[t._v(" Supercapacitor #"+t._s(t.id)+" "),a("div",{staticClass:"icon duplicate",attrs:{title:"Duplicate"},on:{click:t.onDuplicate}}),a("div",{staticClass:"icon close",attrs:{title:"Delete"},on:{click:t.onClose}})]),a("div",{staticClass:"inputs"},[a("div",{staticClass:"row"},[a("label",{attrs:{for:"vmax"+t.id}},[t._v("Nominal voltage (V"),a("sub",[t._v("max")]),t._v(")")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.vMax,expression:"vMax",modifiers:{number:!0}}],attrs:{type:"text",id:"vmax"+t.id,autocomplete:"off"},domProps:{value:t.vMax},on:{input:function(e){e.target.composing||(t.vMax=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("span",{staticClass:"suffix"},[t._v("V")])]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"vmin"+t.id}},[t._v("Discharge voltage (V"),a("sub",[t._v("min")]),t._v(")")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.vMin,expression:"vMin",modifiers:{number:!0}}],attrs:{type:"text",id:"vmin"+t.id,autocomplete:"off"},domProps:{value:t.vMin},on:{input:function(e){e.target.composing||(t.vMin=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("span",{staticClass:"suffix"},[t._v("V")])]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"cap"+t.id}},[t._v("Capacitance (C)")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cap,expression:"cap",modifiers:{number:!0}}],attrs:{type:"text",id:"cap"+t.id,autocomplete:"off"},domProps:{value:t.cap},on:{input:function(e){e.target.composing||(t.cap=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("span",{staticClass:"suffix"},[t._v("F")])]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"esr"+t.id}},[t._v("Equivalent series resistance (ESR)")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.esr,expression:"esr",modifiers:{number:!0}}],attrs:{type:"text",id:"esr"+t.id,autocomplete:"off"},domProps:{value:t.esr},on:{input:function(e){e.target.composing||(t.esr=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("span",{staticClass:"suffix"},[t._v("Ω")])]),a("div",{staticClass:"row"},[t._v("Current consumptions in different modes")]),a("TimeCurrentSelector",{staticClass:"row",attrs:{title:"Run"},model:{value:t.run,callback:function(e){t.run=e},expression:"run"}}),a("TimeCurrentSelector",{staticClass:"row",attrs:{title:"Idle"},model:{value:t.idle,callback:function(e){t.idle=e},expression:"idle"}}),a("TimeCurrentSelector",{staticClass:"row",attrs:{title:"Sleep"},model:{value:t.sleep,callback:function(e){t.sleep=e},expression:"sleep"}}),a("div",{staticClass:"row"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.ldoEnabled,expression:"ldoEnabled"}],attrs:{type:"checkbox",id:"ldo"+t.id},domProps:{checked:Array.isArray(t.ldoEnabled)?t._i(t.ldoEnabled,null)>-1:t.ldoEnabled},on:{change:function(e){var a=t.ldoEnabled,n=e.target,i=!!n.checked;if(Array.isArray(a)){var r=null,s=t._i(a,r);n.checked?s<0&&(t.ldoEnabled=a.concat([r])):s>-1&&(t.ldoEnabled=a.slice(0,s).concat(a.slice(s+1)))}else t.ldoEnabled=i}}}),a("label",{attrs:{for:"ldo"+t.id}},[t._v("Use LDO")])]),t.ldoEnabled?a("div",{staticClass:"ldo"},[a("div",{staticClass:"row"},[a("label",{attrs:{for:"ldoout"+t.id}},[t._v("Output voltage")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.ldo.vOut,expression:"ldo.vOut",modifiers:{number:!0}}],attrs:{type:"text",id:"ldoout"+t.id,disabled:!t.ldoEnabled,autocomplete:"off"},domProps:{value:t.ldo.vOut},on:{input:function(e){e.target.composing||t.$set(t.ldo,"vOut",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("span",{staticClass:"suffix"},[t._v("V")])]),a("CurrentSelector",{staticClass:"row",attrs:{title:"Quiescent current",disabled:!t.ldoEnabled},model:{value:t.ldo.qCurr,callback:function(e){t.$set(t.ldo,"qCurr",e)},expression:"ldo.qCurr"}})],1):t._e()],1),a("div",{staticClass:"results"},[a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Effective energy:")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("float")(t.energy))+" J")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Avg current consumption:")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("current")(t.avgCurrent)))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Max voltage drop:")]),t.maxVoltageDrop>=.001?a("div",{staticClass:"value"},[t._v(t._s(t._f("float")(t.maxVoltageDrop,3))+" V")]):t._e(),t.maxVoltageDrop<.001?a("div",{staticClass:"value"},[t._v("< 0.001 V")]):t._e()]),t.maxVoltageDrop>=.1?a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Recommended decoupling capacitor:")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("capacitanse")(t.dCapacitor)))])]):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Constant current discharge:")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("duration")(t.ccDischarge)))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"label"},[t._v("Constant resistance discharge:")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("duration")(t.crDischarge)))])])])])},g=[],C=(a("99af"),a("b680"),a("5530")),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"selector"},[a("label",[t._v(t._s(t.title))]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.time,expression:"time",modifiers:{number:!0}}],attrs:{type:"text",autocomplete:"off"},domProps:{value:t.time},on:{input:[function(e){e.target.composing||(t.time=t._n(e.target.value))},t.change],blur:function(e){return t.$forceUpdate()}}}),a("Time",{staticClass:"unit",on:{input:t.change},model:{value:t.timeUnit,callback:function(e){t.timeUnit=e},expression:"timeUnit"}}),a("span",{staticClass:"spacer"}),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.current,expression:"current",modifiers:{number:!0}}],attrs:{type:"text",autocomplete:"off"},domProps:{value:t.current},on:{input:[function(e){e.target.composing||(t.current=t._n(e.target.value))},t.change],blur:function(e){return t.$forceUpdate()}}}),a("Current",{staticClass:"unit",on:{input:t.change},model:{value:t.currentUnit,callback:function(e){t.currentUnit=e},expression:"currentUnit"}})],1)},x=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"unit",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]}}},t._l(t.options,(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.title)+" ")])})),0)},w=[],M={name:"Time",props:{value:String},data:function(){return{selected:this.value,options:[{value:"us",title:"µs"},{value:"ms",title:"ms"},{value:"s",title:"sec"},{value:"m",title:"min"}]}},watch:{selected:function(){this.$emit("input",this.selected)}}},E=M,U=Object(u["a"])(E,y,w,!1,null,"06246307",null),O=U.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"unit",attrs:{disabled:t.disabled},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]}}},t._l(t.options,(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.title)+" ")])})),0)},j=[],S={name:"Current",props:{value:String,disabled:Boolean},data:function(){return{selected:this.value,options:[{value:"na",title:"nA"},{value:"ua",title:"µA"},{value:"ma",title:"mA"},{value:"a",title:"A"}]}},watch:{selected:function(){this.$emit("input",this.selected)}}},D=S,A=Object(u["a"])(D,k,j,!1,null,"3c6d0de7",null),$=A.exports,T={name:"TimeCurrentSelector",components:{Time:O,Current:$},props:{title:String,value:Object},data:function(){return{time:this.value.time,timeUnit:this.value.timeUnit,current:this.value.current,currentUnit:this.value.currentUnit}},methods:{change:function(){this.$emit("input",{time:this.time,timeUnit:this.timeUnit,current:this.current,currentUnit:this.currentUnit})}}},P=T,N=(a("7309"),Object(u["a"])(P,_,x,!1,null,"1b48dec9",null)),F=N.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"selector",class:{disabled:t.disabled}},[a("label",[t._v(t._s(t.title))]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.val,expression:"val",modifiers:{number:!0}}],attrs:{type:"text",autocomplete:"off",disabled:t.disabled},domProps:{value:t.val},on:{input:[function(e){e.target.composing||(t.val=t._n(e.target.value))},t.change],blur:function(e){return t.$forceUpdate()}}}),a("Current",{staticClass:"unit",attrs:{disabled:t.disabled},on:{input:t.change},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}})],1)},V=[],q={name:"CurrentSelector",components:{Current:$},props:{title:String,value:Object,disabled:Boolean},data:function(){return{val:this.value?this.value.value:0,unit:this.value?this.value.unit:"nA"}},methods:{change:function(){this.$emit("input",{value:this.val,unit:this.unit})}}},I=q,B=(a("5369"),Object(u["a"])(I,L,V,!1,null,"6a275b10",null)),H=B.exports,J={name:"Capacitor",components:{TimeCurrentSelector:F,CurrentSelector:H},props:{value:Object},data:function(){return{id:this.value.id,vMax:this.value.vMax,vMin:this.value.vMin,cap:this.value.cap,esr:this.value.esr,run:Object(C["a"])({},this.value.run),idle:Object(C["a"])({},this.value.idle),sleep:Object(C["a"])({},this.value.sleep),ldoEnabled:this.value.ldoEnabled,ldo:Object(C["a"])({},this.value.ldo)}},computed:{energy:function(){var t=.5*this.cap*(Math.pow(this.vMax,2)-Math.pow(this.vMin,2));return this.ldoEnabled&&(t*=this.getLdoEfficiency(this.vMin,this.vMax,this.ldo.vOut)),t},avgCurrent:function(){return this.getAvgCurrentConsumption(this.run,this.idle,this.sleep,this.ldoEnabled?this.ldo:null)},maxVoltageDrop:function(){var t=this.getMaxCurrentMode(this.run,this.idle,this.sleep);return t.c*(this.esr+t.t/this.cap)},dCapacitor:function(){var t=this.getMaxCurrentMode(this.run,this.idle,this.sleep);return t.c*t.t/.1},ccDischarge:function(){var t=this.cap*(this.vMax-this.vMin)/this.avgCurrent;return this.ldoEnabled&&(t*=this.getLdoEfficiency(this.vMin,this.vMax,this.ldo.vOut)),t},crDischarge:function(){if(0==this.vMin)return"infinity";var t=this.vMax/this.avgCurrent,e=-1*this.cap*t*Math.log(this.vMin/this.vMax);return this.ldoEnabled&&(e*=this.getLdoEfficiency(this.vMin,this.vMax,this.ldo.vOut)),e},fieldChange:function(){var t={id:this.id,vMax:this.vMax,vMin:this.vMin,cap:this.cap,esr:this.esr,run:Object(C["a"])({},this.run),idle:Object(C["a"])({},this.idle),sleep:Object(C["a"])({},this.sleep),ldoEnabled:this.ldoEnabled,ldo:Object(C["a"])({},this.ldo)};return t}},methods:{onDuplicate:function(){this.$emit("duplicate",Object(C["a"])({},this._data))},onClose:function(){this.$emit("delete",this.id)},getLdoEfficiency:function(t,e,a){return(a/t+a/e)/2},getAvgCurrentConsumption:function(t,e,a,n){var i=this.getTime(t.time,t.timeUnit),r=this.getCurrent(t.current,t.currentUnit),s=this.getTime(e.time,e.timeUnit),o=this.getCurrent(e.current,e.currentUnit),l=this.getTime(a.time,a.timeUnit),c=this.getCurrent(a.current,a.currentUnit),u=(r*i+o*s+c*l)/(i+s+l);if(n){var d=this.getCurrent(n.qCurr.value,n.qCurr.unit);u+=d}return u},getMaxCurrentMode:function(t,e,a){for(var n=this.getTime(t.time,t.timeUnit),i=this.getCurrent(t.current,t.currentUnit),r=this.getTime(e.time,e.timeUnit),s=this.getCurrent(e.current,e.currentUnit),o=this.getTime(a.time,a.timeUnit),l=this.getCurrent(a.current,a.currentUnit),c=[{t:n,c:i},{t:r,c:s},{t:o,c:l}],u=null,d=0,v=c;d<v.length;d++){var p=v[d];null!=u?p.c>u.c&&(u=p):u=p}return u},getCurrent:function(t,e){var a=parseFloat(t);switch(e){case"na":return a/1e9;case"ua":return a/1e6;case"ma":return a/1e3;case"a":return a;default:throw"Unknown unit ".concat(e)}},getTime:function(t,e){var a=parseFloat(t);switch(e){case"us":return a/1e6;case"ms":return a/1e3;case"s":return a;case"m":return 60*a;default:throw"Unknown unit ".concat(e)}}},watch:{fieldChange:function(t){this.$emit("update",t)}},filters:{float:function(t,e){return void 0===e&&(e=2),t.toFixed(e)},current:function(t,e){var a=function(t,a){return"".concat(t.toFixed(e)," ").concat(a)},n=t;return void 0===e&&(e=3),n>1?a(n,"A"):(n*=1e3,n>1?a(n,"mA"):(n*=1e3,n>1?a(n,"µA"):(n*=1e3,n>1?a(n,"nA"):void 0)))},duration:function(t){if("string"===typeof t)return t;var e=Math.floor(t/31536e3),a=Math.floor(t/86400),n=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),r=Math.floor(t%60),s=e>0?e+"y ":"",o=a>0?a+"d ":"",l=n>0?n+"h ":"",c=i>0?i+"m ":"",u=r>0?r+"s":"";return s+o+l+c+u},capacitanse:function(t){var e=function(t,e){return"".concat(t.toFixed(0)," ").concat(e)},a=t;return a>1?e(a,"F"):(a*=1e6,a>1?e(a,"µF"):(a*=1e3,a>1?e(a,"nF"):void 0))}}},R=J,G=(a("8eab"),Object(u["a"])(R,b,g,!1,null,"22f38577",null)),K=G.exports,Q=0,Y={components:{Capacitor:K},data:function(){return{capacitors:[]}},created:function(){window.addEventListener("beforeunload",this.saveData),this.$gtag.event("Home")},mounted:function(){if(localStorage.getItem("capacitors"))try{this.capacitors=JSON.parse(localStorage.getItem("capacitors"))}catch(t){localStorage.removeItem("capacitors")}else this.capacitors=[this.getDefaultCapacitor()]},methods:{onDelete:function(t){if(1==this.capacitors.length)return this.capacitors.shift(),void this.capacitors.push(this.getDefaultCapacitor());for(var e=0;e<this.capacitors.length;e++)this.capacitors[e].id==t&&this.capacitors.splice(e,1)},onDuplicate:function(t){var e=Math.max.apply(Math,Object(h["a"])(this.capacitors.map((function(t){return t.id}))));t.id=e+1,t.key=++Q,this.capacitors.push(t)},onUpdate:function(t){for(var e=0;e<this.capacitors.length;e++)this.capacitors[e].id==t.id&&(this.capacitors[e]=t)},saveData:function(){var t=JSON.stringify(this.capacitors);localStorage.setItem("capacitors",t)},getDefaultCapacitor:function(){return{id:1,key:++Q,vMax:3.6,vMin:1.8,cap:1,esr:10,run:{time:5,timeUnit:"ms",current:45,currentUnit:"ma"},idle:{time:55,timeUnit:"ms",current:3,currentUnit:"ma"},sleep:{time:60,timeUnit:"s",current:5,currentUnit:"ua"},ldoEnabled:!1,ldo:{qCurr:{value:200,unit:"na"},vOut:1.9}}}},beforeRouteLeave:function(t,e,a){this.saveData(),a()}},z=Y,W=(a("21bb"),Object(u["a"])(z,m,f,!1,null,null,null)),X=W.exports;n["a"].use(p["a"]);var Z=[{path:"/",name:"Home",component:X},{path:"/formulas",name:"Formulas",component:function(){return a.e("chunk-0c4db6c7").then(a.bind(null,"7829"))}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],tt=new p["a"]({routes:Z}),et=tt;n["a"].config.productionTip=!1,new n["a"]({router:et,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6d52":function(t,e,a){},7309:function(t,e,a){"use strict";a("6d52")},"8eab":function(t,e,a){"use strict";a("5464")},"9c0c":function(t,e,a){},a5ce:function(t,e,a){}});
//# sourceMappingURL=app.884a7b05.js.map