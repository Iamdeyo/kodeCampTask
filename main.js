function Product(n, p) {
  // private properties
  const name = n;
  const price = p;

  this.getProduct = function () {
    return { name, price };
  };
}

function ShoppingCart() {
  // private properties
  let items = [];

  this.addItem = function (item) {
    items.push(item);
  };

  this.removeItem = function (item) {
    const newArr = items.filter((x) => x.name !== item.name);
    items = newArr;
  };

  this.getTotal = function () {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total = items[i].price + total;
    }
    return total;
  };

  this.getCartItems = function () {
    return items;
  };
}

const product1 = new Product('benz', 20);
const product2 = new Product('toyota', 40);
const product3 = new Product('lexus', 30);

// console.log(product1.hasOwnProperty('getProduct'));

const cart = new ShoppingCart();

cart.addItem(product1.getProduct());
cart.addItem(product2.getProduct());
cart.addItem(product3.getProduct());

// console.log(cart.hasOwnProperty('name'));
// console.log('items' in cart);

console.log(cart.getCartItems());

console.log(cart.getTotal());

cart.removeItem(product2.getProduct());

console.log(cart.getCartItems());
