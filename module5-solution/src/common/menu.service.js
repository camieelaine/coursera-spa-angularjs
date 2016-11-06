(function() {
  "use strict";

  angular.module('common')
  .service('MenuService', MenuService);


  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http, ApiPath) {
    var service = this;

    function unwrap(response) {
      return response.data;
    }

    service.getCategories = function() {
      return $http.get(ApiPath + '/categories.json').then(unwrap);
    };


    service.getMenuItems = function(category) {
      var config = {};
      if (category) {
        config.params = {'category': category};
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(unwrap);
    };

    service.getMenuItem = function(menuItem) {
      return $http.get(ApiPath + '/menu_items/' + menuItem + '.json').then(unwrap);
    };

    service.menuItemExists = function(menuItem) {
      return service.getMenuItem(menuItem)
                    .then(function(response) {
                      return true;
                    }, function(error) {
                      return false;
                    });
    };
  }
})();
