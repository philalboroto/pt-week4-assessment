/**
 * Created by philalboroto on 10/4/14.
 */
var app = angular.module('todoList');

app.controller('mainCtrl', function($scope, todoService){

    $scope.showItems = todoService.showData();

    $scope.addItem = function() {
        todoService.addData($scope.itemToAdd);
    };

    $scope.removeItem = function(items) {
        todoService.removeData(items);
    };

});