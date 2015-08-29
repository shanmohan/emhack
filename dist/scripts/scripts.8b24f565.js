"use strict";function dataService(a){function b(){return a.get("../data/products.json").then(function(a){return a.data})}return{getProducts:b}}function skyscannerService(a,b){function c(){return a.get("../data/carOptions.json")}return{getCarOptions:c}}angular.module("emhackApp",["rzModule","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$httpProvider",function(a,b,c){c.defaults.headers.common["Content-Type"]="application/json",c.defaults.headers.common.Accept="application/json",b.otherwise("/"),a.state("main",{url:"/",templateUrl:"/views/main.html",controller:"MainController"}).state("streetview",{url:"/streetview",templateUrl:"/views/street-view.html",controller:"StreetController"}).state("cars",{url:"/cars",templateUrl:"/views/hotels.html",controller:"HotelController"})}]),angular.module("emhackApp").controller("MainController",["$scope","dataService","$state",function(a,b,c){function d(b){var c=[];return a.sports||c.push("sports"),a.leisure||c.push("leisure"),a.shopping||c.push("shopping"),a.eating||c.push("eating"),a.adventure||c.push("adventure"),a.medical||c.push("medical"),a.events||c.push("events"),a.health||c.push("health"),c.indexOf(b)>-1}a.priceSlider=500,a.timeSlider=6;var e=b.getProducts();e.then(function(b){a.products=b}),a.OnbuyBtnClicked=function(){},a.checkChanged=function(){var b=a.priceSlider,c=a.timeSlider;return angular.isUndefined(a.products)?void 0:a.products.filter(function(a){return parseInt(a.price,10)<=parseInt(b,10)&&parseInt(a.duration,10)<=parseInt(c,10)&&d(a.tags)})},a.filterProducts=function(b,c){return angular.isUndefined(a.products)?void 0:a.products.filter(function(a){return parseInt(a.price,10)<=parseInt(b,10)&&parseInt(a.duration,10)<=parseInt(c,10)&&d(a.tags)})}}]),angular.module("emhackApp").service("dataService",dataService),dataService.$inject=["$http"],angular.module("emhackApp").service("skyscannerService",skyscannerService),skyscannerService.$inject=["$http","$log"],angular.module("emhackApp").controller("HotelController",["$scope","skyscannerService",function(a,b){a.bookCar=function(){a.bookedcar=!0},a.cars=[],a.carImages=["http://logos.skyscnr.com/images/carhire/sippmaps/volkswagen_beetle.jpg","http://logos.skyscnr.com/images/carhire/sippmaps/toyota_auris_hybrid.jpg","http://logos.skyscnr.com/images/carhire/sippmaps/peugeot_308.jpg","http://logos.skyscnr.com/images/carhire/sippmaps/mazda_cx-5.jpg","http://logos.skyscnr.com/images/carhire/sippmaps/citroen_berlingo.jpg"],a.getCarOptions=function(){b.getCarOptions().then(function(b){a.cars=[];for(var c=0;c<b.data.cars.length&&5!==c;c++){var d=b.data.cars[c];d.url=a.carImages[c],a.cars.push(d)}console.log(a.cars)})},a.getCarOptions()}]),angular.module("emhackApp").controller("StreetController",["$scope","dataService",function(a,b){}]),angular.module("rzModule",[]).run(["$templateCache",function(a){var b='<span class="rz-bar-wrapper"><span class="rz-bar"></span></span><span class="rz-bar-wrapper"><span class="rz-bar rz-selection"></span></span><span class="rz-pointer"></span><span class="rz-pointer"></span><span class="rz-bubble rz-limit"></span><span class="rz-bubble rz-limit"></span><span class="rz-bubble"></span><span class="rz-bubble"></span><span class="rz-bubble"></span>';a.put("rzSliderTpl.html",b)}]).value("throttle",function(a,b,c){var d,e,f,g=Date.now||function(){return(new Date).getTime()},h=null,i=0;c=c||{};var j=function(){i=c.leading===!1?0:g(),h=null,f=a.apply(d,e),d=e=null};return function(){var k=g();i||c.leading!==!1||(i=k);var l=b-(k-i);return d=this,e=arguments,0>=l?(clearTimeout(h),h=null,i=k,f=a.apply(d,e),d=e=null):h||c.trailing===!1||(h=setTimeout(j,l)),f}}).factory("RzSlider",["$timeout","$document","$window","throttle",function(a,b,c,d){var e=function(a,b,c){this.scope=a,this.attributes=c,this.sliderElem=b,this.range=void 0!==c.rzSliderHigh&&void 0!==c.rzSliderModel,this.dragRange=this.range&&"true"===c.rzSliderDraggableRange,this.dragging={active:!1,value:0,difference:0,offset:0,lowDist:0,highDist:0},this.handleHalfWidth=0,this.alwaysShowBar=!!c.rzSliderAlwaysShowBar,this.maxLeft=0,this.precision=0,this.step=0,this.tracking="",this.minValue=0,this.maxValue=0,this.hideLimitLabels=!!c.rzSliderHideLimitLabels,this.presentOnly="true"===c.rzSliderPresentOnly,this.valueRange=0,this.initHasRun=!1,this.customTrFn=this.scope.rzSliderTranslate()||function(a){return String(a)},this.deRegFuncs=[],this.fullBar=null,this.selBar=null,this.minH=null,this.maxH=null,this.flrLab=null,this.ceilLab=null,this.minLab=null,this.maxLab=null,this.cmbLab=null,this.init()};return e.prototype={init:function(){var b,e,f,g=angular.bind(this,this.calcViewDimensions),h=this;this.initElemHandles(),this.calcViewDimensions(),this.setMinAndMax(),this.precision=void 0===this.scope.rzSliderPrecision?0:+this.scope.rzSliderPrecision,this.step=void 0===this.scope.rzSliderStep?1:+this.scope.rzSliderStep,a(function(){h.updateCeilLab(),h.updateFloorLab(),h.initHandles(),h.presentOnly||h.bindEvents()}),f=this.scope.$on("reCalcViewDimensions",g),this.deRegFuncs.push(f),angular.element(c).on("resize",g),this.initHasRun=!0,b=d(function(){h.setMinAndMax(),h.updateLowHandle(h.valueToOffset(h.scope.rzSliderModel)),h.updateSelectionBar(),h.range&&h.updateCmbLabel()},350,{leading:!1}),e=d(function(){h.setMinAndMax(),h.updateHighHandle(h.valueToOffset(h.scope.rzSliderHigh)),h.updateSelectionBar(),h.updateCmbLabel()},350,{leading:!1}),this.scope.$on("rzSliderForceRender",function(){h.resetLabelsValue(),b(),h.range&&e(),h.resetSlider()}),f=this.scope.$watch("rzSliderModel",function(a,c){a!==c&&b()}),this.deRegFuncs.push(f),f=this.scope.$watch("rzSliderHigh",function(a,b){a!==b&&e()}),this.deRegFuncs.push(f),this.scope.$watch("rzSliderFloor",function(a,b){a!==b&&h.resetSlider()}),this.deRegFuncs.push(f),f=this.scope.$watch("rzSliderCeil",function(a,b){a!==b&&h.resetSlider()}),this.deRegFuncs.push(f),this.scope.$on("$destroy",function(){h.minH.off(),h.maxH.off(),h.fullBar.off(),h.selBar.off(),angular.element(c).off("resize",g),h.deRegFuncs.map(function(a){a()})})},resetSlider:function(){this.setMinAndMax(),this.calcViewDimensions(),this.updateCeilLab(),this.updateFloorLab()},resetLabelsValue:function(){this.minLab.rzsv=void 0,this.maxLab.rzsv=void 0},initHandles:function(){this.updateLowHandle(this.valueToOffset(this.scope.rzSliderModel)),this.range&&(this.updateHighHandle(this.valueToOffset(this.scope.rzSliderHigh)),this.updateCmbLabel()),this.updateSelectionBar()},translateFn:function(a,b,c){c=void 0===c?!0:c;var d=String(c?this.customTrFn(a):a),e=!1;(void 0===b.rzsv||b.rzsv.length!==d.length||b.rzsv.length>0&&0===b.rzsw)&&(e=!0,b.rzsv=d),b.text(d),e&&this.getWidth(b)},setMinAndMax:function(){this.scope.rzSliderFloor?this.minValue=+this.scope.rzSliderFloor:this.minValue=this.scope.rzSliderFloor=0,this.scope.rzSliderCeil?this.maxValue=+this.scope.rzSliderCeil:this.scope.rzSliderCeil=this.maxValue=this.range?this.scope.rzSliderHigh:this.scope.rzSliderModel,this.scope.rzSliderStep&&(this.step=+this.scope.rzSliderStep),this.valueRange=this.maxValue-this.minValue},initElemHandles:function(){angular.forEach(this.sliderElem.children(),function(a,b){var c=angular.element(a);switch(b){case 0:this.fullBar=c;break;case 1:this.selBar=c;break;case 2:this.minH=c;break;case 3:this.maxH=c;break;case 4:this.flrLab=c;break;case 5:this.ceilLab=c;break;case 6:this.minLab=c;break;case 7:this.maxLab=c;break;case 8:this.cmbLab=c}},this),this.selBar.rzsl=0,this.minH.rzsl=0,this.maxH.rzsl=0,this.flrLab.rzsl=0,this.ceilLab.rzsl=0,this.minLab.rzsl=0,this.maxLab.rzsl=0,this.cmbLab.rzsl=0,this.hideLimitLabels&&(this.flrLab.rzAlwaysHide=!0,this.ceilLab.rzAlwaysHide=!0,this.hideEl(this.flrLab),this.hideEl(this.ceilLab)),this.range===!1&&(this.cmbLab.remove(),this.maxLab.remove(),this.maxH.rzAlwaysHide=!0,this.maxH[0].style.zIndex="-1000",this.hideEl(this.maxH)),this.range===!1&&this.alwaysShowBar===!1&&(this.maxH.remove(),this.selBar.remove()),this.dragRange&&(this.selBar.css("cursor","move"),this.selBar.addClass("rz-draggable"))},calcViewDimensions:function(){var a=this.getWidth(this.minH);this.handleHalfWidth=a/2,this.barWidth=this.getWidth(this.fullBar),this.maxLeft=this.barWidth-a,this.getWidth(this.sliderElem),this.sliderElem.rzsl=this.sliderElem[0].getBoundingClientRect().left,this.initHasRun&&(this.updateCeilLab(),this.initHandles())},updateCeilLab:function(){this.translateFn(this.scope.rzSliderCeil,this.ceilLab),this.setLeft(this.ceilLab,this.barWidth-this.ceilLab.rzsw),this.getWidth(this.ceilLab)},updateFloorLab:function(){this.translateFn(this.scope.rzSliderFloor,this.flrLab),this.getWidth(this.flrLab)},callOnChange:function(){if(this.scope.rzSliderOnChange){var b=this;a(function(){b.scope.rzSliderOnChange()})}},updateHandles:function(a,b){return"rzSliderModel"===a?(this.updateLowHandle(b),this.updateSelectionBar(),void(this.range&&this.updateCmbLabel())):"rzSliderHigh"===a?(this.updateHighHandle(b),this.updateSelectionBar(),void(this.range&&this.updateCmbLabel())):(this.updateLowHandle(b),this.updateHighHandle(b),this.updateSelectionBar(),void this.updateCmbLabel())},updateLowHandle:function(a){var b=Math.abs(this.minH.rzsl-a);this.minLab.rzsv&&1>b||(this.setLeft(this.minH,a),this.translateFn(this.scope.rzSliderModel,this.minLab),this.setLeft(this.minLab,a-this.minLab.rzsw/2+this.handleHalfWidth),this.shFloorCeil())},updateHighHandle:function(a){this.setLeft(this.maxH,a),this.translateFn(this.scope.rzSliderHigh,this.maxLab),this.setLeft(this.maxLab,a-this.maxLab.rzsw/2+this.handleHalfWidth),this.shFloorCeil()},shFloorCeil:function(){var a=!1,b=!1;this.minLab.rzsl<=this.flrLab.rzsl+this.flrLab.rzsw+5?(a=!0,this.hideEl(this.flrLab)):(a=!1,this.showEl(this.flrLab)),this.minLab.rzsl+this.minLab.rzsw>=this.ceilLab.rzsl-this.handleHalfWidth-10?(b=!0,this.hideEl(this.ceilLab)):(b=!1,this.showEl(this.ceilLab)),this.range&&(this.maxLab.rzsl+this.maxLab.rzsw>=this.ceilLab.rzsl-10?this.hideEl(this.ceilLab):b||this.showEl(this.ceilLab),this.maxLab.rzsl<=this.flrLab.rzsl+this.flrLab.rzsw+this.handleHalfWidth?this.hideEl(this.flrLab):a||this.showEl(this.flrLab))},updateSelectionBar:function(){this.setWidth(this.selBar,Math.abs(this.maxH.rzsl-this.minH.rzsl)),this.setLeft(this.selBar,this.range?this.minH.rzsl+this.handleHalfWidth:0)},updateCmbLabel:function(){var a,b;this.minLab.rzsl+this.minLab.rzsw+10>=this.maxLab.rzsl?(this.customTrFn?(a=this.customTrFn(this.scope.rzSliderModel),b=this.customTrFn(this.scope.rzSliderHigh)):(a=this.scope.rzSliderModel,b=this.scope.rzSliderHigh),this.translateFn(a+" - "+b,this.cmbLab,!1),this.setLeft(this.cmbLab,this.selBar.rzsl+this.selBar.rzsw/2-this.cmbLab.rzsw/2),this.hideEl(this.minLab),this.hideEl(this.maxLab),this.showEl(this.cmbLab)):(this.showEl(this.maxLab),this.showEl(this.minLab),this.hideEl(this.cmbLab))},roundStep:function(a){var b=this.step,c=+((a-this.minValue)%b).toFixed(3),d=c>b/2?a+b-c:a-c;return d=d.toFixed(this.precision),+d},hideEl:function(a){return a.css({opacity:0})},showEl:function(a){return a.rzAlwaysHide?a:a.css({opacity:1})},setLeft:function(a,b){return a.rzsl=b,a.css({left:b+"px"}),b},getWidth:function(a){var b=a[0].getBoundingClientRect();return a.rzsw=b.right-b.left,a.rzsw},setWidth:function(a,b){return a.rzsw=b,a.css({width:b+"px"}),b},valueToOffset:function(a){return(a-this.minValue)*this.maxLeft/this.valueRange},offsetToValue:function(a){return a/this.maxLeft*this.valueRange+this.minValue},getEventX:function(a){return"clientX"in a?a.clientX:void 0===a.originalEvent?a.touches[0].clientX:a.originalEvent.touches[0].clientX},getNearestHandle:function(a){if(!this.range)return this.minH;var b=this.getEventX(a)-this.sliderElem.rzsl-this.handleHalfWidth;return Math.abs(b-this.minH.rzsl)<Math.abs(b-this.maxH.rzsl)?this.minH:this.maxH},bindEvents:function(){var a,b,c;this.dragRange?(a="rzSliderDrag",b=this.onDragStart,c=this.onDragMove):(a="rzSliderModel",b=this.onStart,c=this.onMove),this.minH.on("mousedown",angular.bind(this,this.onStart,this.minH,"rzSliderModel")),this.range&&this.maxH.on("mousedown",angular.bind(this,this.onStart,this.maxH,"rzSliderHigh")),this.fullBar.on("mousedown",angular.bind(this,this.onStart,null,null)),this.fullBar.on("mousedown",angular.bind(this,this.onMove,this.fullBar)),this.selBar.on("mousedown",angular.bind(this,b,null,a)),this.selBar.on("mousedown",angular.bind(this,c,this.selBar)),this.minH.on("touchstart",angular.bind(this,this.onStart,this.minH,"rzSliderModel")),this.range&&this.maxH.on("touchstart",angular.bind(this,this.onStart,this.maxH,"rzSliderHigh")),this.fullBar.on("touchstart",angular.bind(this,this.onStart,null,null)),this.fullBar.on("touchstart",angular.bind(this,this.onMove,this.fullBar)),this.selBar.on("touchstart",angular.bind(this,b,null,a)),this.selBar.on("touchstart",angular.bind(this,c,this.selBar))},onStart:function(a,c,d){var e,f,g=this.getEventNames(d);d.stopPropagation(),d.preventDefault(),""===this.tracking&&(this.calcViewDimensions(),a?this.tracking=c:(a=this.getNearestHandle(d),this.tracking=a===this.minH?"rzSliderModel":"rzSliderHigh"),a.addClass("rz-active"),e=angular.bind(this,this.dragging.active?this.onDragMove:this.onMove,a),f=angular.bind(this,this.onEnd,e),b.on(g.moveEvent,e),b.one(g.endEvent,f))},onMove:function(a,b){var c,d,e,f=this.getEventX(b);if(c=this.sliderElem.rzsl,d=f-c-this.handleHalfWidth,0>=d){if(0===a.rzsl)return;e=this.minValue,d=0}else if(d>=this.maxLeft){if(a.rzsl===this.maxLeft)return;e=this.maxValue,d=this.maxLeft}else e=this.offsetToValue(d),e=this.roundStep(e),d=this.valueToOffset(e);this.positionTrackingHandle(e,d)},onDragStart:function(a,b,c){var d=this.getEventX(c)-this.sliderElem.rzsl-this.handleHalfWidth;this.dragging={active:!0,value:this.offsetToValue(d),difference:this.scope.rzSliderHigh-this.scope.rzSliderModel,offset:d,lowDist:d-this.minH.rzsl,highDist:this.maxH.rzsl-d},this.minH.addClass("rz-active"),this.maxH.addClass("rz-active"),this.onStart(a,b,c)},onDragMove:function(a,b){var c,d,e,f,g=this.getEventX(b)-this.sliderElem.rzsl-this.handleHalfWidth;if(g<=this.dragging.lowDist){if(a.rzsl===this.dragging.lowDist)return;e=this.minValue,c=0,f=this.dragging.difference,d=this.valueToOffset(f)}else if(g>=this.maxLeft-this.dragging.highDist){if(a.rzsl===this.dragging.highDist)return;f=this.maxValue,d=this.maxLeft,e=this.maxValue-this.dragging.difference,c=this.valueToOffset(e)}else e=this.offsetToValue(g-this.dragging.lowDist),e=this.roundStep(e),c=this.valueToOffset(e),f=e+this.dragging.difference,d=this.valueToOffset(f);this.positionTrackingBar(e,f,c,d)},positionTrackingBar:function(a,b,c,d){this.scope.rzSliderModel=a,this.scope.rzSliderHigh=b,this.updateHandles("rzSliderModel",c),this.updateHandles("rzSliderHigh",d),this.scope.$apply()},positionTrackingHandle:function(a,b){this.range&&("rzSliderModel"===this.tracking&&a>=this.scope.rzSliderHigh?(this.scope[this.tracking]=this.scope.rzSliderHigh,this.updateHandles(this.tracking,this.maxH.rzsl),this.tracking="rzSliderHigh",this.minH.removeClass("rz-active"),this.maxH.addClass("rz-active"),this.scope.$apply(),this.callOnChange()):"rzSliderHigh"===this.tracking&&a<=this.scope.rzSliderModel&&(this.scope[this.tracking]=this.scope.rzSliderModel,this.updateHandles(this.tracking,this.minH.rzsl),this.tracking="rzSliderModel",this.maxH.removeClass("rz-active"),this.minH.addClass("rz-active"),this.scope.$apply(),this.callOnChange())),this.scope[this.tracking]!==a&&(this.scope[this.tracking]=a,this.updateHandles(this.tracking,b),this.scope.$apply(),this.callOnChange())},onEnd:function(a,c){var d=this.getEventNames(c).moveEvent;this.minH.removeClass("rz-active"),this.maxH.removeClass("rz-active"),b.off(d,a),this.scope.$emit("slideEnded"),this.tracking="",this.dragging.active=!1},getEventNames:function(a){var b={moveEvent:"",endEvent:""};return a.touches||void 0!==a.originalEvent&&a.originalEvent.touches?(b.moveEvent="touchmove",b.endEvent="touchend"):(b.moveEvent="mousemove",b.endEvent="mouseup"),b}},e}]).directive("rzslider",["RzSlider",function(a){return{restrict:"E",scope:{rzSliderFloor:"=?",rzSliderCeil:"=?",rzSliderStep:"@",rzSliderPrecision:"@",rzSliderModel:"=?",rzSliderHigh:"=?",rzSliderDraggable:"@",rzSliderTranslate:"&",rzSliderHideLimitLabels:"=?",rzSliderAlwaysShowBar:"=?",rzSliderPresentOnly:"@",rzSliderOnChange:"&"},templateUrl:function(a,b){return b.rzSliderTplUrl||"rzSliderTpl.html"},link:function(b,c,d){return new a(b,c,d)}}}]);