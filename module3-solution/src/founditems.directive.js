(function() {
'use strict';

angular.module('NarrowItDownApp')
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'src/founditems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
    ,
    controller: FoundItemsDirectiveController,
    controllerAs: 'found',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var found = this;
  console.log("found.items: ", found.items);
}

})();
