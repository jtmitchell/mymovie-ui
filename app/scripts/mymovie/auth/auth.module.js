var angular = require('angular');
require('satellizer');

var app = angular.module('auth', ['satellizer']);

app.component('loginGoogle', {
  templateUrl: 'views/partial/loginController.html',
  controller: 'LoginGoogleController'
});

app.controller('LoginGoogleController', [
  '$auth',
  function($auth) {
    var ctrl = this;
    ctrl.authenticate = function (provider) {
      $auth.authenticate(provider);
    };
    return ctrl;
  }
]);

module.exports = app;
