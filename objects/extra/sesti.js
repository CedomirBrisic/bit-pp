function ListItem(name, price) {
    this.name = name;
    this.price = price;
}

var Apples = new ListItem("apples", 100);
var Milk = new ListItem("milk", 80);
var Bananas = new ListItem("bananas", 150);

//var shoppingList = [Apples, Milk, Bananas];

function total(Apples, Milk, Bananas) {
    return Apples.price + Milk.price + Bananas.price

}

function average(Apples, Milk, Bananas) {
    return (Apples.price + Milk.price + Bananas.price) / 3;

}

function mostExpensive(Apples, Milk, Bananas) {
    if (Apples.price > Milk.price && Apples.price > Bananas.price) {
        return Apple.name;
    } else if (Milk.price > Apples.price && Milk.price > Bananas.price) {
        return Milk.name
    } else {
        return Bananas.name;
    }


}

console.log(total(Apples, Milk, Bananas));
console.log(average(Apples, Milk, Bananas));
console.log(mostExpensive(Apples,Milk,Bananas));