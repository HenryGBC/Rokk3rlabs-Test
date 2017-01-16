(function() {
  'use strict';

  angular
      .module('rokkerlabs')
      .service('AnalyticsService', AnalyticsService);

  /** @ngInject */
  function AnalyticsService($http) {
    var data = [];

    var dataManager = {
    	getData: getData
    }
    return dataManager;
    function getData() {
      return $http.get('data/data.json').then(success, error);
      
      function success(data){
      	return data;
      }
      function error(err){
      	return err;
      }
    }
  }

})();
