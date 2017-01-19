/**
shoppingList

Features:

- add an item to the shopping list (addItem),
- remove an item from the shopping list (removeItem),
- print the shopping list (print)

*/

function ShoppingList() {
  // PRIVATE shopping list is empty by default
  var list = [];


  // PUBLIC addItem
  this.addItem = function(item) {
    list.push(item);
  }

  // PUBLIC removeItem
  this.removeItem = function(item) {
    var newList = [];

    for (var i = 0; i < list.length; i++) {
      var currentItem = list[i];

      if (currentItem.indexOf(item) === -1) {
        newList.push(currentItem);
      }
    }

    list = newList;
  }

  // PUBLIC print
  this.print = function() {
    console.log("Your shopping list:");
    console.log("###################");
    for (var i = 0; i < list.length; i++) {
      console.log(list[i]);

    }
    console.log("###################");
  }
}

/** EXECUTION
*/
var shoppingList = new ShoppingList();
shoppingList.addItem("Milch 500ml");
shoppingList.addItem("Kaffe 10kg");
shoppingList.print();
shoppingList.removeItem("Milch");
console.log("AFTER DELETE:");
shoppingList.print();

console.log(shoppingList);
