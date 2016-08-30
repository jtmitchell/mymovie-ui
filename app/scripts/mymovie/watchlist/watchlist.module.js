var angular = require('angular');
require('restangular');

var app = angular.module('watchlist',['restangular']);

require('./watchlist.service');

module.exports = app;
