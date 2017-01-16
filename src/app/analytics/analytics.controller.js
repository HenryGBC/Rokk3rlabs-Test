(function() {
  'use strict';

  angular
    .module('rokkerlabs')
    .controller('AnalyticsController', AnalyticsController);

  /** @ngInject */
  function AnalyticsController(AnalyticsData) {
    var vm = this;

    vm.onClick = function (points, evt) {
      console.log(points, evt);
    };
    activate();

    function activate() {
      console.log('active');
      vm.labels = ["12:00 am", "12:05 am", "12:10 am"];
      vm.data =[
        [10, 20, 30],
        [65, 59, 80],
        [35, 29, 30]
      ];

      vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }, { yAxisID: 'y-axis-3' }];
      vm.options = {
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            },
            {
              id: 'y-axis-2',
              type: 'linear',
              display: true,
              position: 'left'
            },
            {
              id: 'y-axis-3',
              type: 'linear',
              display: true,
              position: 'left'
            }
          ]
        }
      };
    }

    console.log(AnalyticsData);


  }
})();
