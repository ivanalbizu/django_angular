'use strict';

describe('Controller: AutoresCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var AutoresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutoresCtrl = $controller('AutoresCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AutoresCtrl.awesomeThings.length).toBe(3);
  });
});
