/**
 * Created by Mohanachandran on 8/28/2015.
 */


angular.module('emhackApp').service('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http){
  return {
      getProducts : getProducts
  };

  function getProducts(){
    return $http.get('../data/products.json').then(function(response){
      return response.data
    })
  }
}
