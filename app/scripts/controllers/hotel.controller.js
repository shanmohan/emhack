/**
 * Created by Mohanachandran on 8/28/2015.
 */

angular.module('emhackApp').controller('HotelController', function ($scope,skyscannerService) {

  $scope.cars = [];
	$scope.getCarOptions = function getCarOptions(){
	skyscannerService.getCarOptions().then(function(response){
    $scope.cars = [];
    for(var i=0;i<response.data.cars.length;i++){
      var elt =response.data.cars[i];
      elt.url = response.data.images[i+10].url;
      if(i===5)break;
      $scope.cars.push(elt);
    }
    console.log($scope.cars);
  }) ;

	}
  $scope.getCarOptions();

})
