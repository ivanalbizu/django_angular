'use strict';

describe('Controller: LibroCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var LibroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LibroCtrl = $controller('LibroCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LibroCtrl.awesomeThings.length).toBe(3);
  });
});
