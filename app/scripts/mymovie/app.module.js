// mymovie app
var angular = require('angular');
require('angular-ui-router');

// TODO need to add a JWT http interceptor thing

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
