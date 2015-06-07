// app url routes
(function() {
    'use strict';

    angular
      .module('app')
      .config(routes);

    /* @ngInject */
    function routes($stateProvider, $urlRouterProvider){
      // default for a unmatched route
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "scripts/home.html"
        })
        .state('login', {
          url: "/login",
          templateUrl: "scripts/auth/login.html"
        })
        .state('search', {
          url: "/search",
          templateUrl: 'scripts/search/search.html'
        });

    }
})();
