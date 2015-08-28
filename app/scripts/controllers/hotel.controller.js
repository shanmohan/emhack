/**
 * Created by Mohanachandran on 8/28/2015.
 */

angular.module('emhackApp').controller('HotelController', function ($scope,skyscannerService) {
	
	$scope.getCarOptions = function getCarOptions(){
	var carOption = 	skyscannerService.getCarOptions() ;
	}

	

})
