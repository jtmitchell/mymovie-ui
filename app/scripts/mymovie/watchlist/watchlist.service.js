var angular = require('angular');

var app = angular.module('watchlist');

app.factory('WatchListService', [
  'Restangular',
  function(Restangular){
    // TODO make this a real service for the REST API
    var srv = this;
    Restangular.setBaseUrl('/api/v1');
    return srv;
  }
]);

module.exports = app;
