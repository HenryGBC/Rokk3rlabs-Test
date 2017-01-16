(function() {
  'use strict';

  angular
    .module('rokkerlabs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .state('dashboard.analytics', {
        url: 'analytics',
        templateUrl: 'app/analytics/analytics.html',
        controller: 'AnalyticsController',
        controllerAs: 'analytics',
        resolve:{
          AnalyticsData: AnalyticsData
        }
      })
      .state('dashboard.news', {
        url: 'news',
        templateUrl: 'app/news/news.html',
        controller: 'NewsController',
        controllerAs: 'news'
      });

    $urlRouterProvider.otherwise('/analytics');

    /** @ngInject */
    function AnalyticsData(AnalyticsService){
        return AnalyticsService.getData();
    }

  }

})();
