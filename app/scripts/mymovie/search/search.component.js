var angular = require('angular');

var app = angular.module('search');

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

module.exports = app;
