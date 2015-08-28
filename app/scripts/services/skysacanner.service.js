/**
 * Created by clovis.gakam on 28/08/2015.
 */

'use strict'

angular.module('emhackApp').service('skyscannerService', skyscannerService);

skyscannerService.$inject = ['$http','$log'];

function skyscannerService($http,$log){
  return {
    getCarOptions : getCarOptions
  };

  function getCarOptions(){
    var carOptionQuery = "http://business.skyscanner.net/apiservices/carhire/liveprices/v2/UK/GBP/en-GB/27544008/27544008/2015-09-04T10%3A00/2015-09-11T10%3A00/21";
    return $http.get(carOptionQuery,{userip:'127.0.0.1',apikey:'prtl6749387986743898559646983194'}).then(function(response){
      $log.info(response.data);
      return response.data
    },function(error){
    	$log.info(error);
    })
  }
}
