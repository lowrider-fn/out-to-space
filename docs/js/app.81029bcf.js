(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)r=o[u],a[r]&&h.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/out-to-space/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0190":function(t,e,n){t.exports=n.p+"img/moon.48f7edb2.svg"},"03de":function(t,e,n){t.exports=n.p+"img/ship.11dd9fb3.svg"},"3dd3":function(t,e,n){t.exports=n.p+"img/btn-minus.0ea7b961.svg"},"4a67":function(t,e,n){t.exports=n.p+"media/OxwaveCosmicAppeasement.1e15caf3.mp3"},5677:function(t,e,n){t.exports=n.p+"img/sputnik.4560072f.svg"},"569e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("569e");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"space",attrs:{id:"space"}},[n("canvas",{ref:"canvas"}),n("sidebar",{attrs:{setSpeed:t.setSpeed,satellites:t.satellites,isStart:t.isStart},on:{add:function(e){return t.addSatellite()},remove:function(e){return t.removeSatellite()},setNewSpeed:function(e){return t.setNewSpeed(e)}}}),t._l(t.satellites,function(t,e){return n("div",{key:e,ref:"satellite"+t,refInFor:!0,staticClass:"space__satellite"})}),n("div",{ref:"moon",staticClass:"space__moon"}),t.isStart?t._e():n("div",{staticClass:"space__control"},[n("button",{staticClass:"space__control-btn",on:{click:function(e){return t.start()}}},[t._v("\n                Вперед!\n            ")])]),!t.isInit||t.isShow?n("modal",{attrs:{title:t.isInit?"Игровое сообщение":"3 2 1 ...",text:t.isInit&&t.gameMsg||"",btnText:t.isInit?"":"Поехали!"},on:{close:function(e){t.isInit&&t.modalsControls()}}}):t._e(),n("a",{staticClass:"link",attrs:{target:"_blank",href:"https://vk.com/oxwavemusic"}},[t._v("Sound: Oxwave - Cosmic Appeasement")])],2)])},s=[],r=(n("8449"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("div",{staticClass:"sidebar__count-control"},[n("p",{staticClass:"sidebar__count-label"},[t._v("\n            Спутники\n        ")]),n("button",{staticClass:"sidebar__count-btn",attrs:{disabled:t.satellites.length<3||t.isStart,v:""},on:{click:function(e){return t.$emit("remove")}}},[n("img",{attrs:{src:t.btnMinus}})]),n("button",{staticClass:"sidebar__count-btn",attrs:{disabled:t.satellites.length>=4||t.isStart},on:{click:function(e){return t.$emit("add")}}},[n("img",{attrs:{src:t.btnPlus}})])]),t._l(t.satellites,function(e,i){return n("div",{key:i,staticClass:"slider"},[n("range",{attrs:{value:t.randomInteger(1,25),data:t.setSpeed(26),index:e,label:"Спутник"},on:{change:function(n){return t.$emit("setNewSpeed",{val:n,index:e})}}})],1)}),n("range",{staticClass:"sidebar__bottom-range",attrs:{value:t.randomInteger(1,20),data:t.setSpeed(21),label:"Луна"},on:{change:function(e){return t.$emit("setNewSpeed",{val:e})}}})],2)}),o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[n("div",{staticClass:"slider__text-box"},[n("p",{staticClass:"slider__name"},[t._v("\n            "+t._s(t.label+" "+(t.index?t.index:""))+"\n        ")]),n("p",{staticClass:"slider__label"},[t._v("\n            "+t._s("v: "+t.range)+"\n        ")])]),n("vue-slider",{attrs:{tooltip:"none",dotSize:[10,20],data:t.data},on:{change:function(e){return t.$emit("change",e)}},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1)},c=[],d=(n("c5f6"),n("4971")),u=n.n(d),h=(n("24df"),{components:{"vue-slider":u.a},props:{data:Array,index:Number,label:String,value:[String,Number]},data:function(){return{range:10}},created:function(){this.range=this.value,this.$emit("change",this.range)}}),p=h,f=n("2877"),v=Object(f["a"])(p,l,c,!1,null,null,null),g=v.exports,m=n("3dd3"),b=n.n(m),S=n("91ef"),_=n.n(S),x=function(t,e){return Math.floor(t+Math.random()*(e+1-t))},w={components:{range:g},props:{satellites:Array,setSpeed:Function,isStart:Boolean},data:function(){return{randomInteger:x,btnMinus:b.a,btnPlus:_.a}}},y=w,C=Object(f["a"])(y,r,o,!1,null,null,null),k=C.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header",[n("h3",[t._v(t._s(t.title))])])],2),n("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n                        "+t._s(t.text)+"\n                    ")])],2),n("div",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v("\n                            "+t._s(t.btnText||"Продолжить")+"\n                        ")])])],2)])])])])},M=[],I={props:{text:String,title:String,btnText:String}},O=I,E=Object(f["a"])(O,$,M,!1,null,null,null),H=E.exports,j=n("6615"),P=n.n(j),W=n("03de"),T=n.n(W),A=n("5677"),N=n.n(A),Y=n("0190"),B=n.n(Y),X=n("4a67"),G=n.n(X),L=n("22a2"),F={components:{sidebar:k,modal:H},data:function(){return{app:null,satellites:[1,2,3,4],shipSpeed:0,moonSpeed:0,wWidth:window.innerWidth,wHeight:window.innerHeight,isStart:!1,isShow:!1,gameMsg:"",isInit:!1}},mounted:function(){this.initPixi(),this.initSprites(),this.initAudio()},methods:{initPixi:function(){var t=this.$refs.canvas;this.app=new L["a"]({view:t,transparent:!0,antialias:!0,forceCanvas:!0,width:this.wWidth,height:this.wHeight})},initSprites:function(){var t=this;this.app.loader.add("earth",P.a).add("ship",T.a).add("moon",B.a),this.satellites.forEach(function(e){t.app.loader.add("satellite".concat(e),N.a)}),this.app.loader.load(function(e,n){t.tuneEarth(n),t.tuneShip(n),t.tuneMoon(n),t.satellites.forEach(function(e){t.tuneSatellite(n,e)})})},tuneEarth:function(t){var e=new L["b"](t.earth.texture);e.width=210,e.height=210,e.x=(this.wWidth-e.width)/2,e.y=(this.wHeight-e.height)/2,e.anchor.set(0),this.app.stage.addChild(e)},initAudio:function(){var t=this;document.getElementById("app").addEventListener("click",function(){var e=new Audio(G.a);e.setAttribute("loop",!0),e.play(),t.isInit=!0},{once:!0})},tuneShip:function(t){var e=this,n=new L["b"](t.ship.texture);n.width=20,n.height=30,n.x=(this.wWidth-n.width)/2,n.y=this.wHeight/2-this.app.stage.children[0].height/2.26,n.anchor.set(0),this.app.stage.addChild(n),this.app.ticker.add(function(){n.vy=e.shipSpeed,n.y-=n.vy,e.gameControl(n)})},tuneMoon:function(t){var e=this,n=this.$refs.moon,i=new L["b"](t.moon.texture);i.id="moon",i.width=40,i.height=40,i.x=n.offsetLeft,i.y=n.offsetTop,i.anchor.set(5.5),this.app.stage.addChild(i),this.app.ticker.add(function(){return i.rotation+=e.moonSpeed/1800})},tuneSatellite:function(t,e){var n=this,i=this.$refs["satellite".concat(e)][0];i.style.top="".concat(x(40,55),"%"),i.style.left="".concat(x(48,55),"%");var a=new L["b"](t["satellite".concat(e)].texture);a.id="satellite".concat(e),a.height=30,a.width=21,a.anchor.set(5.15),a.x=i.offsetLeft,a.y=i.offsetTop,this.app.stage.addChild(a),this.app.ticker.add(function(){return a.rotation+=n["satellite".concat(e,"Speed")]/800})},chekHit:function(t,e){t.halfWidth=t.width/2,t.halfHeight=t.height/2,e.halfWidth=e.width/2,e.halfHeight=e.height/2,t.centerX=t.x+t.halfWidth,t.centerY=t.y+t.halfHeight,e.centerX=e.getBounds().x+e.halfWidth,e.centerY=e.getBounds().y+e.halfHeight;var n=t.centerX-e.centerX,i=t.centerY-e.centerY,a=t.halfWidth+e.halfWidth,s=t.halfHeight+e.halfHeight;return Math.abs(n)<a&&Math.abs(i)<s},gameControl:function(t){var e=this;t.centerY<-30&&(this.gameMsg="Ракета вышла в космос",this.endGame()),this.app.stage.children.forEach(function(n){void 0!==n.id&&e.chekHit(t,n)&&(e.gameMsg="Вы потерпели неудачу, попробуйте снова",e.endGame())})},start:function(){this.setIsStart(),this.shipSpeed=1},endGame:function(){this.app.ticker.stop(),this.modalsControls(),this.setIsStart(),this.shipSpeed=0,this.app.destroy(),this.initPixi(),this.initSprites()},addSatellite:function(){var t=this,e=this.satellites.length+1,n="satellite".concat(e);this.satellites.push(e),this.app.stage.children.forEach(function(e){e.id===n&&(e.visible=!0,setTimeout(function(){t.$refs[n][0].style.left="".concat(e.x,"px"),t.$refs[n][0].style.top="".concat(e.y,"px")}))})},removeSatellite:function(){var t="satellite".concat(this.satellites.length);this.app.stage.children.forEach(function(e){e.id===t&&(e.visible=!1)}),this.satellites.pop()},setSpeed:function(t){for(var e=[],n=0;n<t;n++)e.push(n);return e},setNewSpeed:function(t){t.index?this["satellite".concat(t.index,"Speed")]=t.val:this.moonSpeed=t.val},setIsStart:function(){this.isStart=!this.isStart},modalsControls:function(){this.isShow=!this.isShow}}},J=F,z=Object(f["a"])(J,a,s,!1,null,null,null),q=z.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(q)}}).$mount("#app")},6615:function(t,e,n){t.exports=n.p+"img/earth.ac0bd5a5.svg"},"91ef":function(t,e,n){t.exports=n.p+"img/btn-plus.5bb1d620.svg"}});
//# sourceMappingURL=app.81029bcf.js.map