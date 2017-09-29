let guessMyName = function fname() {

};

let fname2 = function () {

};

let guessMyProperty = {
  prop: 1,
  methodName() {

  },
  get myProperty() {
    return this.prop;
  },
  set myProperty(prop) {
    this.prop = prop;
  }
};

console.log(guessMyName.name);
// 'fName'

console.log(fname2.name);
// 'fname2'

// context binding changes a method's name
guessMyProperty.methodName.bind(this).name;

let propertyDescriptor = Object.getOwnPropertyDescriptor(guessMyProperty, 'myProperty');

console.log(propertyDescriptor.get.name);
// get myProperty

console.log(propertyDescriptor.set.name);
// set myProperty
