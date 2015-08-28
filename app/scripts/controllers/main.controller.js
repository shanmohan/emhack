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
  $scope.timeSlider = 1;

  var promise = dataService.getProducts();

  promise.then(function (data) {
    console.log(data);
    $scope.products = data.products;

  });

  $scope.filterProducts = function (cost, time) {
    console.log(parseInt(cost, 10));
    return $scope.products.filter(function (product) {
      return (parseInt(product.price, 10) <= parseInt(cost, 10) && (parseInt(product.duration, 10) <= parseInt(time, 10)))
    })
  }

});
