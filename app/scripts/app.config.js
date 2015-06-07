// app configuration
(function() {
    'use strict';

    angular
      .module('app')
      .config(configure);

    /* @ngInject */
    function configure($authProvider){
      // social auth
      $authProvider.google({
        clientId: '',
        redirectUri: ''
      });
    }
})();
