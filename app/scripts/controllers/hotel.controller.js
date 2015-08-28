/**
 * Created by Mohanachandran on 8/28/2015.
 */

angular.module('emhackApp').controller('HotelController', function ($scope,skyscannerService) {

  $scope.cars = [];
  $scope.carImages = ["http://logos.skyscnr.com/images/carhire/sippmaps/volkswagen_beetle.jpg",
    "http://logos.skyscnr.com/images/carhire/sippmaps/toyota_auris_hybrid.jpg",
    "http://logos.skyscnr.com/images/carhire/sippmaps/peugeot_308.jpg",
    "http://logos.skyscnr.com/images/carhire/sippmaps/mazda_cx-5.jpg",
    "http://logos.skyscnr.com/images/carhire/sippmaps/citroen_berlingo.jpg"];
	$scope.getCarOptions = function getCarOptions(){
	skyscannerService.getCarOptions().then(function(response){
    $scope.cars = []
    for(var i=0;i<response.data.cars.length;i++){
      if(i===5)break;
      var elt =response.data.cars[i];
      elt.url = $scope.carImages[i];
      $scope.cars.push(elt);


    }
    console.log($scope.cars);
  }) ;

	}
  $scope.getCarOptions();

})
