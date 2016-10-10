(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set ui UI states
    $stateProvider
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      })

       // Categories list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/main-categories.template.html',
        controller: 'CategoriesCtrl as catCtrl',
        resolve: {
            categories: ['MenuDataService', function(MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
      })
       // Items list page
      .state('items', {
        url: '/categories/items/{shortName}',
        template: '<items category="$resolve.shortname"></items>',
        resolve: {
            shortname: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.shortName).then(function(response) {
                    return response.data.menu_items;
                });
            }]
        }
      })

  }
})();
