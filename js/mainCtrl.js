/**
 * Created by philalboroto on 10/4/14.
 */
var app = angular.module('todoList');

app.controller('mainCtrl', function($scope, todoService){

    $scope.showItems = todoService.showItems;

    $scope.addItem = function() {
        todoService.addItem($scope.itemToAdd);
    };

    $scope.removeItem = function() {
        todoService.removeItem($scope.itemToRemove)
    };

});