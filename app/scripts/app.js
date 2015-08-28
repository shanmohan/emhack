'use strict';

angular
  .module('emhackApp', ['rzModule','ui.router']).config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Method'] = 'GET, POST, PUT, DELETE';
     $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
      url: '/',
      templateUrl: '/views/main.html',
      controller: 'MainController'
    }).state('streetview', {
      url: '/streetview',
      templateUrl : '/views/street-view.html',
      controller: 'StreetController'
    }).state('hotels', {
      url: '/hotels',
      templateUrl : '/views/hotels.html',
      controller: 'HotelController'
    });

  })
