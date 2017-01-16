(function() {
  'use strict';

  angular
    .module('rokkerlabs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
