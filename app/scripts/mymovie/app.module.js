// mymovie app
var angular = require('angular');
require('angular-ui-router');
require('restangular');
require('satellizer');

var config = require('./app.config');
var routes = require('./app.states');
var appController = require('./app.controller');
var loginController = require('./auth/login.controller');

var app = angular.module('app', [
    'ui.router',
    'restangular',
    'satellizer'
]);

app.config(config);
app.config(routes);
app.controller('AppController', appController);
app.controller('LoginController', loginController);

module.exports = app;
