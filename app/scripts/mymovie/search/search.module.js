var angular = require('angular');
require('restangular');

var app = angular.module('search',['restangular']);

require('./search.component');
require('./search.service');

module.exports = app;
