/**
 * Created by clovis.gakam on 28/08/2015.
 */

'use strict'

angular.module('emhackApp').service('skyscannerService', skyscannerService);

skyscannerService.$inject = ['$http','$log'];

function skyscannerService($http,$log) {
  return {
    getCarOptions: getCarOptions
  };

  function getCarOptions() {
    var carOptionQuery = "http://business.skyscanner.net/apiservices/carhire/liveprices/v2/UK/GBP/en-GB/27544008/27544008/2015-09-04T10%3A00/2015-09-11T10%3A00/21?userip=127.0.0.1&apikey=prtl6749387986743898559646983194";
    var hotelQuery = "http://business.skyscanner.net/apiservices/hotels/liveprices/v2/H4sIAAAAAAAEAE2IMQqAMBAE_7L1Be4uCcZ0EYMfsBNLuxArK_HvRqvAMjvMjRNxQ8ogHNUsU_uU50YdvHPM4VMWb3g07Fbm-K-rIl1VEoJY0iZeQPUqZSdURCNqJTwvSLzd7HEAAAA1?apikey=_Tx5reSAm4wQDLdI0YUpeUQx-fWPoDeJo1sH-kkKMdlbRRkJGQkD4278LRSz2wfh-pXySNIFyGfBP8C1zaoSMSg%3D%3D"
    return  $http.get('../data/carOptions.json');
  }
}
