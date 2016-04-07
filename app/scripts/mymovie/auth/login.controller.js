module.exports = /* @ngInject */ function LoginController($auth) {
  var vm = this;
  vm.authenticate = function(provider) {
    $auth.authenticate(provider);
  };
};
