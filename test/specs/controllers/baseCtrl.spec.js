describe('Unit: BaseController', function() {

    var ctrl, scope;
    beforeEach(module('app'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();

        ctrl = $controller('BaseController', {
           $scope: scope
        });
    }));

    it('The controller should be defined', function() {
       expect(ctrl).toBeDefined();
    });

});