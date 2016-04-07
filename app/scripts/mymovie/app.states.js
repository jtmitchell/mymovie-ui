module.exports = /* @ngInject */ function routes($stateProvider, $urlRouterProvider) {
  // default for a unmatched route
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html"
    })
    .state('search', {
      url: "/search",
      templateUrl: 'views/search.html'
    });
};
