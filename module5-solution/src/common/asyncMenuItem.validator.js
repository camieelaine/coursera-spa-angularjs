(function() {
  'use strict';

  angular
    .module('common')
    .directive('menuItemValidator', MenuItemValidator);

  MenuItemValidator.$inject = ['$q', 'MenuService'];
  function MenuItemValidator($q, MenuService) {
    var defObj = {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$asyncValidators.exists = function(modelValue, viewValue) {
          var deferred = $q.defer();

          MenuService.menuItemExists(viewValue).then(
            function(exists) {
              if (exists) {
                deferred.resolve();
              } else {
                deferred.reject();
              }
            }
          );

          return deferred.promise;
        };
      }
    };

    return defObj;
  }
})();
