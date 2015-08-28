'use strict';

/**
 * @ngdoc function
 * @name ngDirDepthNWideApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngDirDepthNWideApp
 */
angular.module('emhackApp').controller('MainController', function ($scope, dataService) {

        $scope.priceSlider = 250;
  var promise = dataService.getProducts();

  console.log('calling the dataService');

  promise.then(function (data) {

    console.log(data);

    $scope.products = data;
  })


});
