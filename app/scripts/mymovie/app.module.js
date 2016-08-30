// mymovie app
var angular = require('angular');
require('angular-ui-router');

var config = require('./app.config');
var routes = require('./app.states');
var auth = require('./auth');
var search = require('./search');

var app = angular.module('app', [
    'ui.router',
    search,
    auth
]);

app.config(config);
app.config(routes);

module.exports = app;
