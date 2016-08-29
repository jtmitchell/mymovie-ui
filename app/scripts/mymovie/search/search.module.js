var angular = require('angular');
require('restangular');

var app = angular.module('search',['restangular']);

app.component('movieSearch', {
  templateUrl: 'views/partial/movieSearch.html',
  controller: 'MovieSearchController'
});

app.controller('MovieSearchController', [
  'MovieSearchService', '$log',
  function(MovieSearchService, $log){
    var ctrl = this;
    ctrl.searchTerm = '';
    ctrl.results = {
      data: []
    };
    ctrl.search = function(){
      if(ctrl.searchTerm){
        MovieSearchService.search(ctrl.searchTerm).then(function(results){
          ctrl.results = results;
          $log.log('got movies', ctrl.results);
        }, function(error){
          $log.log(error);
          ctrl.results = {};
        });
      }
    };
    return ctrl;
  }
]);

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
