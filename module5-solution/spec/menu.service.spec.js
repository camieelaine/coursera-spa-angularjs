describe('menucategories', function() {

  var menucategories;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiPath');
      menucategories = $injector.get('MenuService');
    });
  });

  it('should return true if menu item exists', function() {
    var itemShortName = "L1";
    $httpBackend.whenGET(ApiBasePath + '/menu_items/' + itemShortName + '.json').respond('Correct');

    menucategories.menuItemExists(itemShortName).then(function(response) {
      expect(response).toEqual(true);
    });
    $httpBackend.flush();
  });

  it('should return false if menu item doesn\'t exist', function() {
    var itemShortName = "L";
    $httpBackend.whenGET(ApiBasePath + '/menu_items/' + itemShortName + '.json').respond(400);
    menucategories.menuItemExists(itemShortName).then(function(response) {
      expect(response).toEqual(false);
    });
    $httpBackend.flush();
  });
});
