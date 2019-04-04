(function () {

'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService); 

ToBuyController.$inject = ['$scope'];
AlreadyBoughtController.$inject = ['$scope'];

// To Buy List Controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex, itemQuantity) {
  ShoppingListCheckOffService.buyItem(itemIndex, itemQuantity);
  };
}

// Already Bought List Controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [{name: "egg(s)", quantity: 12, pricePerItem: .20}, {name: "apple(s)", quantity: 6, pricePerItem: .55}, 
    {name: "juice(s)", quantity: 3, pricePerItem: .79}, {name: "onion(s)", quantity: 5, pricePerItem: .70}, 
    {name: "steaks(s)", quantity: 2, pricePerItem: 7.11}];

  service.itemQuantity = "";

  service.buyItem = function (itemIndex, quantity) {

    service.addItem(toBuyItems[itemIndex].name, quantity, toBuyItems[itemIndex].pricePerItem);
    toBuyItems.splice(itemIndex, 1);
    
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  var boughtItems = [];

  service.addItem = function (itemName, itemQuantity, pricePerItem) {

    var totalPrice = itemQuantity * pricePerItem;

    var boughtItem = {
      name: itemName,
      quantity: itemQuantity,
      totalPrice:  totalPrice
    };

    boughtItems.push(boughtItem);

  };  

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
