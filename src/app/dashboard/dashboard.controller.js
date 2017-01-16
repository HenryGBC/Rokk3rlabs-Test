(function() {
  'use strict';

  angular
    .module('rokkerlabs')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($timeout) {
    var vm = this;


    activate();
    
    function activate() {
      vm.hideBar = false;
      console.log('active');
    }

  }
})();
