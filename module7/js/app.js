(function () {

'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService); 

// To Buy List Controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  // Use factory to create new shopping list service
  // var shoppingList = ShoppingListCheckOffService();

  toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  // list1.itemName = "";
  // list1.itemQuantity = "";

  // list1.addItem = function () {
  //   shoppingList.addItem(list1.itemName, list1.itemQuantity);
  // }

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

// Already Bought List Controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  // // Use factory to create new shopping list service
  // var shoppingList = ShoppingListFactory();

  // list2.items = shoppingList.getItems();

  // list2.itemName = "";
  // list2.itemQuantity = "";

  // list2.addItem = function () {
  //   try {
  //     shoppingList.addItem(list2.itemName, list2.itemQuantity);
  //   } catch (error) {
  //     list2.errorMessage = error.message;
  //   }

  // }

  // list2.removeItem = function (itemIndex) {
  //   shoppingList.removeItem(itemIndex);
  // };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items

  var toBuyItems = [{name: "eggs", quantity: 12}, {name: "milks", quantity: 2}, 
    {name: "tomatoes", quantity: 4}, {name: "onions", quantity: 2}, 
    {name: "strawberries", quantity: 22}];

  // service.addItem = function (itemName, quantity) {
  //   if ((maxItems === undefined) ||
  //       (maxItems !== undefined) && (items.length < maxItems)) {
  //     var item = {
  //       name: itemName,
  //       quantity: quantity
  //     };
  //     items.push(item);
  //   }
  //   else {
  //     throw new Error("Max items (" + maxItems + ") reached.");
  //   }
  // };

  service.buyItem = function (itemIndex) {
    service.addItem(toBuyItems[itemIndex].name, toBuyItems[itemIndex].quantity);
    toBuyItems.splice(itemIndex, 1);
    
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var boughtItem = {
      name: itemName,
      quantity: quantity
    };
      
    boughtItems.push(boughtItem);

  };  

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();