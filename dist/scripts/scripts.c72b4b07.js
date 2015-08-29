"use strict";function dataService(a){function b(){return a.get("../data/products.json").then(function(a){return a.data})}return{getProducts:b}}angular.module("emhackApp",["rzModule","ui.router"]).config(["$stateProvider","$urlRouterProvider","$httpProvider",function(a,b,c){b.otherwise("/"),a.state("main",{url:"/",templateUrl:"/views/main.html",controller:"MainController"}).state("streetview",{url:"/streetview",templateUrl:"/views/street-view.html",controller:"StreetController"}).state("hotels",{url:"/hotels",templateUrl:"/views/hotels.html",controller:"HotelController"})}]),angular.module("emhackApp").controller("MainController",["$scope","dataService",function(a,b){function c(b){var c=[],d=!1;return a.sports&&c.push("sports"),a.leisure&&c.push("leisure"),a.shopping&&c.push("shopping"),a.eating&&c.push("eating"),a.adventure&&c.push("adventure"),a.medical&&c.push("medical"),a.events&&c.push("events"),a.health&&c.push("health"),angular.forEach(b,function(a){return c.indexOf(a)>-1?void(d=!0):void 0}),d}a.priceSlider=250,a.timeSlider=1;var d=b.getProducts();d.then(function(b){a.products=b.products}),a.checkChanged=function(){var b=a.priceSlider,d=a.timeSlider;return angular.isUndefined(a.products)?void 0:a.products.filter(function(a){return parseInt(a.price,10)<=parseInt(b,10)&&parseInt(a.duration,10)<=parseInt(d,10)&&c(a.tags)})},a.filterProducts=function(b,d){return angular.isUndefined(a.products)?void 0:a.products.filter(function(a){return parseInt(a.price,10)<=parseInt(b,10)&&parseInt(a.duration,10)<=parseInt(d,10)&&c(a.tags)})}}]),angular.module("emhackApp").service("dataService",dataService),dataService.$inject=["$http"],angular.module("emhackApp").controller("HotelController",["$scope","dataService",function(a,b){}]),angular.module("emhackApp").controller("StreetController",["$scope","dataService",function(a,b){}]);