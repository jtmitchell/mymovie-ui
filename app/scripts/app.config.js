// app configuration
(function() {
    'use strict';

    angular
      .module('app')
      .config(configure);

    /* @ngInject */
    function configure($authProvider, toastr){
      // defaults for the toast popups
      toastr.options.timeOut = 4000;
      toastr.options.positionClass = 'toast-bottom-right';

      // social auth
      $authProvider.google({
        clientId: ''
      });
    };
})();
