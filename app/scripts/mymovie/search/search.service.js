var angular = require('angular');

var app = angular.module('search');

app.factory('MovieSearchService', [
  'Restangular', '$log',
  function(Restangular, $log){
    var srv = this;
    Restangular.setBaseUrl('https://www.omdbapi.com');
    srv.search = function(searchTerm){
      $log.log('Search term', searchTerm);
      var params = {
        t: 'movie',
        s: searchTerm
      };
      return Restangular.all('').customGET('',params).then(function(result){
        $log.log('Results', result);
        return {
          totalResults: result.totalResults,
          response: result.Response,
          data: result.Search
        };
      });
    };
    return srv;
  }
]);

module.exports = app;
