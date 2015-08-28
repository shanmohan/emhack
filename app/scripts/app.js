'use strict';

angular
  .module('emhackApp', ['rzModule','ui.router']).config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
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
