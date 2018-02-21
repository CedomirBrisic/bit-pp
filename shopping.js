"use strict mode";

(function hi() {
    console.log("Hi")
})();

function Product(name, price, expirationDate) {
    this.productId = Math.round(100000 * Math.random());
    this.name = name;
    this.price = price.toFixed(2);
    this.expirationDate = expirationDate;
    this.getInfo = function () {

        return (name.charAt(0) + name.charAt(name.length - 1)).toUpperCase() + this.productId + ", " + this.name + ", " + this.price;

    }
}
function ShoppingBag() {
        this.productList = [];
        this.addProduct = function (product) {
            this.productList.push(product);
        }



        this.getAverage = function () {
            var sum = 0;
            var c = 0;
            var average = 0;
            this.productList.forEach(function (element) {
                sum += element.price;
                c++;
            })
            return average = (sum / c).toFixed(3);
        }

        this.mostExpensive = function () {
           
         
            //var maxPrice = this.productList[0].price;
            var maxIndex = 0;

            for (var i = 1; i < this.productList.length; i++) {
                
                if (this.productList[maxIndex].price < this.productList[i].price) {
                    maxIndex = i;
                } 
                
            }

            return this.productList[maxIndex].getInfo();

        }


    }


var Banana = new Product("banana", 150, "11.05.2018");
var Apples = new Product("apples", 200, "31.12.2018");
var DryPlums = new Product("dry plums", 300, "31.12.2019");

//console.log(Math.round(100000*Math.random()));

var ShoppingLista = new ShoppingBag();
ShoppingLista.addProduct(Banana);
ShoppingLista.addProduct(Apples);
ShoppingLista.addProduct(DryPlums);


console.log(ShoppingLista.mostExpensive());


