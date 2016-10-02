(function () {
'use strict';

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController);

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.searchItem = "";

  narrow.narrowItDown = function() {
    console.log("narrow.searchItem: ", narrow.searchItem);
    var promise = MenuSearchService.getMatchedMenuItems(narrow.searchItem);
    promise.then(function (response) {
      console.log(response.data);
      var list = response.data.menu_items;
      narrow.found = [];
      if (narrow.searchItem !== '') {
        for(var i = 0; i < list.length; i++) {
          if (list[i].description.toLowerCase().indexOf(narrow.searchItem.toLowerCase()) !== -1) {
            console.log("adding count # ", i);
            narrow.found.push(list[i]);
          }
        }
      }
      else {
        narrow.found = [];
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  narrow.removeItem = function(itemIndex) {
    console.log("itemIndex is: ", itemIndex);
    narrow.found.splice(itemIndex, 1);
  };
}
})();
