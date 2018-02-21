// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]
// Write a function that calculates the total price of your shopping list. 
// Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

function ListItem(name, price) {

    this.name = name;
    this.price = price;
}

var Apples = new ListItem("apples", 100);
var Milk = new ListItem("milk", 80);
var Bananas = new ListItem("bananas", 150);

var shoppingList = [Apples,Milk,Bananas];

console.log(shoppingList);
