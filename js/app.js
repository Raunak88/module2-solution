(function(){
  'use strict'
  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyController",ToBuyController)
  .controller("AlreadyBoughtController",AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService){
    var buy = this;
    buy.items=ShoppingListCheckOffService.buyItems;
    buy.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}
AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;
  bought.items=ShoppingListCheckOffService.boughtItems;
  


}

function ShoppingListCheckOffService(){
  var service = this;
  service.buyItems = [{name: "cookies", quantity: 10 },{name: "candies", quantity: 5 },{name: "fruits", quantity: 7 },{name: "tea", quantity: 10 },{name: "cakes", quantity: 3 }];
  service.boughtItems=[];

  service.buyItem =function(itemIndex){
    var buffer = [];
    buffer =service.buyItems[itemIndex];
    service.buyItems.splice(itemIndex,1);
    service.boughtItems.push(buffer);
  }


  }

})();
