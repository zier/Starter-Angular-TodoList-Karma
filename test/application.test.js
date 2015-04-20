'use strict';
 
describe('TodoList', function(){
    var scope;

    beforeEach(angular.mock.module('todoApp'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('TodoList', {$scope: scope});
    }));

    it('Test : addTodo', function() {
        scope.inputText = "Test Todo";
        scope.addTodo();
        expect(scope.lists[0].name).toBe("Test Todo");
    });

    it('Test : clearTodo', function() {
        scope.inputText = "Test Todo";
        scope.addTodo();
        scope.inputText = "Test Todo2";
        scope.addTodo();
        expect(scope.lists.length).toBe(2);

        scope.lists[0].check = true;
        scope.lists[1].check = true;
        scope.clearTodo();
        expect(scope.lists.length).toBe(0);
    })
});