'use strict';

/**
 * @ngdoc overview
 * @name ngDirDepthNWideApp
 * @description
 * # ngDirDepthNWideApp
 *
 * Main module of the application.
 */
angular.module('emhackApp', ['rzModule','ui.router', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
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
    }).state('cars', {
      url: '/cars',
      templateUrl : '/views/hotels.html',
      controller: 'HotelController'
    });

  })
