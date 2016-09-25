(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
      var itemsToBuy = this;
      itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();
      itemsToBuy.emptyList = false;

      itemsToBuy.buyItem = function(id) {
          ShoppingListCheckOffService.buyItem(id);
          itemsToBuy.emptyList = (itemsToBuy.items.length === 0);
      };
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var itemsBought = this;
      itemsBought.items = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuy = [
        {
            name : "carrots",
            quantity : 12
        },
        {
            name : "spinach lettuce",
            quantity : 1
        },
        {
            name : "tomatoes",
            quantity : 3
        },
        {
            name : "cucumbers",
            quantity : 2
        },
        {
            name : "cauliflower",
            quantity : 1
        }
    ];

    var bought = [
        {
            message : "Nothing bought yet"
        }
    ];

    service.buyItem = function (index) {
        bought.push(toBuy[index]);
        toBuy.splice(index, 1);
    };

    service.getItemsToBuy = function () {
        return toBuy;
    };
    service.getItemsBought = function () {
        return bought;
    };
}

})();
