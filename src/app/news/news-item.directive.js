(function() {
  'use strict';

  angular
    .module('rokkerlabs')
    .directive('newsItem', newsItem);

  /** @ngInject */
  function newsItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/news/news-item.html',
      scope: {
          data: '='
      },
      link: function(scope, element, attrs){
      	console.log(scope);
      }
    };

    return directive;

  }

})();
