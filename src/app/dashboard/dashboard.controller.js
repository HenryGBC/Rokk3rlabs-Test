(function() {
  'use strict';

  angular
    .module('rokkerlabs')
    .controller('MainController', MainController);

  /** @ngInject */
  function DashboardController($timeout, webDevTec, toastr) {
    var vm = this;


    activate();

    function activate() {
      console.log('active');
    }

  }
})();
