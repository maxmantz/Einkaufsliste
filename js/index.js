var shoppingList = new ShoppingList();
var item = new ListItem(1, "Milch", 20);
shoppingList.addItem(item);

var cachier = new Cachier();
cachier.addCash(200);

var listPrinter = new ConsolePrinter(shoppingList);
var cachierPrinter = new ConsolePrinter(cachier);
listPrinter.printShoppingList();
cachierPrinter.printCachier();
cachierPrinter.printInventory();
