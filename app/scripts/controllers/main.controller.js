'use strict';

/**
 * @ngdoc function
 * @name ngDirDepthNWideApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngDirDepthNWideApp
 */
angular.module('emhackApp').controller('MainController', function ($scope, dataService) {
  $scope.priceSlider = 500;
  $scope.timeSlider = 5;
  var promise = dataService.getProducts();

  promise.then(function (data) {
    $scope.products = data;

  });

  $scope.checkChanged = function(){
     var cost = $scope.priceSlider;
     var time = $scope.timeSlider;

    if (angular.isUndefined($scope.products)) return;

    return $scope.products.filter(function (product) {

      return (
        parseInt(product.price, 10) <= parseInt(cost, 10) &&
        parseInt(product.duration, 10) <= parseInt(time, 10)&&
        (isProductTagSelected(product.tags))
      )
    })

  };

  function isProductTagSelected(productTags){
    var selectedTags = [];
    var isSelected = false;
    if (!$scope.sports) selectedTags.push('sports');
    if (!$scope.leisure) selectedTags.push('leisure');
    if (!$scope.shopping) selectedTags.push('shopping');
    if (!$scope.eating) selectedTags.push('eating');
    if (!$scope.adventure) selectedTags.push('adventure');
    if (!$scope.medical) selectedTags.push('medical');
    if (!$scope.events) selectedTags.push('events');
    if (!$scope.health) selectedTags.push('health');

    return (selectedTags.indexOf(productTags)>-1);

    //angular.forEach(productTags,function(tag){
    //  if (selectedTags.indexOf(tag)>-1){
    //    isSelected = true;
    //    return;
    //  }
    //});
    //
    //return isSelected;
  }

  $scope.filterProducts = function (cost, time) {
    if (angular.isUndefined($scope.products)) return;
    return $scope.products.filter(function (product) {

      return (parseInt(product.price, 10) <= parseInt(cost, 10) &&
      parseInt(product.duration, 10) <= parseInt(time, 10) &&
      (isProductTagSelected(product.tags)))
    })
  }

});
