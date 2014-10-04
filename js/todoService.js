/**
 * Created by philalboroto on 10/4/14.
 */
var app = angular.module('todoList');

app.service("dataService", function(){

    var listOfItems = [laundry, grocery];

    this.showItems = function(){
      return listOfItems;
    };

    this.addItem = function(var1) {
        listOfItems.push(var1)
    };

    this.removeItem = function(var1) {
        for (var i = 0; i < listOfItems.length; i++) {
            if (listOfItems[i] === var1) {
                listOfItems.splice(i,1);
            }
        }
    };
});