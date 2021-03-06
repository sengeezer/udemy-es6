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

let objTempl = {
    basketValue: 0,
    firstName: '-'
};

let newBaskets = [];

baskets.forEach(el => {
  // console.log(el);
  newBaskets.push(Object.assign({}, el, objTempl));
  // console.log(baskets);
});

console.log(newBaskets);

// 2
let protObj = {
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
    super.addToBasket();
    this.items.push({ itemName, itemPrice });
  },
  clearBasket() {
    super.clearBasket();
    this.items = [];
  }
};

Object.setPrototypeOf(myBasket, protObj);

// 4
let myNewBasket = {
  removeFromBasket(idx) {
    this.items.splice(idx, 1);
  }
};

Object.setPrototypeOf(myNewBasket, myBasket);
