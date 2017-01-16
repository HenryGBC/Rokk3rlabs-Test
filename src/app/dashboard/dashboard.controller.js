(function() {
  'use strict';

  angular
    .module('rokkerlabs')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($timeout, $state) {
    var vm = this;


    activate();

    function activate() {
      vm.hideBar = false;
      console.log('active');
      $state.go('dashboard.analytics');
    }

  }
})();
