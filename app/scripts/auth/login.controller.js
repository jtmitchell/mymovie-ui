// mymovie app
(function() {
    'use strict';

    angular
      .module('app')
      .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($auth){
      var vm = this;
      vm.authenticate = function(provider) {
        $auth.authenticate(provider);
      };
    };
})();
