(function() {
  'use strict';

  angular
    .module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserService'];
  function SignUpController(MenuService, UserService) {
    var ctrl = this;
    ctrl.completed = false;
    ctrl.menuItemExists = true;

    ctrl.onSignUp = function() {
      var user = ctrl.user;

      MenuService.getMenuItem(user.favMenuItem).then(function(response) {
        ctrl.completed = true;
        user.favMenuItemValue = response;
        UserService.register(user);
      });
    };
  }
})();
