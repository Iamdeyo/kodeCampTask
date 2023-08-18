function Product(name, price) {
  this.name = name;
  this.price = price;
}

function ShoppingCart() {
  this.items = [];

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    const newArr = this.items.filter((x) => x.name !== item.name);
    this.items = newArr;
  };

  this.getTotal = function () {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = this.items[i].price + total;
    }
    return total;
  };

  this.getCartItems = function () {
    return this.items.map((item) => ({
      name: item.name,
      price: item.price,
    }));
  };
}

const product1 = new Product('benz', 20);
const product2 = new Product('toyota', 40);
const product3 = new Product('lexus', 30);

const shoppingCart = new ShoppingCart();

shoppingCart.addItem(product1);
shoppingCart.addItem(product2);
shoppingCart.addItem(product3);

console.log(shoppingCart.getCartItems());

console.log(shoppingCart.getTotal());

shoppingCart.removeItem(product2);

console.log(shoppingCart.getCartItems());
