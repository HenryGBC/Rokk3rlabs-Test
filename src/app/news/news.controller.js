(function() {
  'use strict';

  angular
    .module('rokkerlabs')
    .controller('NewsController', NewsController);

  /** @ngInject */
  function NewsController($timeout) {
    var vm = this;


    activate();

    function activate() {
      console.log('active');
      vm.data =[
        {category: 'Chaing story', date: 'Feb 22, 2016', title: 'Billabong taps NetSuite to power omnichannel strategy', description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'},
        {category: 'Chaing story', date: 'Feb 22, 2016', title: 'Billabong taps NetSuite to power omnichannel strategy', description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'},
        {category: 'Chaing story', date: 'Feb 22, 2016', title: 'Billabong taps NetSuite to power omnichannel strategy', description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'},
        {category: 'Chaing story', date: 'Feb 22, 2016', title: 'Billabong taps NetSuite to power omnichannel strategy', description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'},
        {category: 'Chaing story', date: 'Feb 22, 2016', title: 'Billabong taps NetSuite to power omnichannel strategy', description: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...'},
      ]

      console.log(vm.data);
    }

  }
})();
