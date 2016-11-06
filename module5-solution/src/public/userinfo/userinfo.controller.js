(function() {
  'use strict';

  angular
    .module('public')
    .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['MenuService', 'userInfo'];
  function UserInfoController(MenuService, userInfo) {
    var ctrl = this;
    ctrl.userInfo = userInfo;

    ctrl.isRegistered = function() {
      return ctrl.userInfo !== null;
    };
  }
})();
