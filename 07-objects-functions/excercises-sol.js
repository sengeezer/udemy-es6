// 1
let baskets = [
  {
    firstName: 'Andrew',
    email: 'andrew@aol.com'
    // missing: basketValue, should be set to 0
  },
  {
    email: 'question@mark.com'
    // missing: firstName and basketValue
  },
  {
    firstName: 'David',
    email: 'david@spammail.com',
    basketValue: 55
  }
];

baskets = baskets.map(el => Object.assign({
    firstName: '-',
    basketValue: 0
}, el));

console.log(baskets);

// 2
let protObj = {
  value: 0,
  addToBasket(value) {
    this.value += value;
  },
  clearBasket() {
    this.value = 0;
  },
  getBasketValue() {
    return this.value;
  },
  pay() {
    console.log(`${this.getBasketValue()} has been paid`);
  }
};

// 3
let myBasket = {
  items: [
    { itemName: 'Blackberry', itemPrice: 119.99 },
    { itemName: 'Eggs Box', itemPrice: 5.99 },
    { itemName: 'Gooseberry', itemPrice: 1.99 }
  ],
  addToBasket(itemName, itemPrice) {
    this.items.push({ itemName, itemPrice });
    super.addToBasket(itemPrice);
  },
  clearBasket() {
    this.items = [];
    super.clearBasket();
  },
  removeFromBasket(idx) {
    if (typeof idx !== 'number' || idx < 0 || idx >= this.items.length) {
      return false;
    }

    let removedElement = this.items.splice(idx, 1)[0];
    super.addToBasket(removedElement.itemPrice);
  }
};

Object.setPrototypeOf(myBasket, protObj);

// 4
// see above
