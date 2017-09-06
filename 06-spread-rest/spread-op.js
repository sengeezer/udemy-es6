// old way: number of args known
function sumArgs() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log('1 to 5', sumArgs(1, 2, 3, 4, 5));

// old way: number of args unknown
var arr = [];
for (var i = 0; i < 100; i++) {
  arr[i] = Math.random();
}
console.log('100 random numbers:', sumArgs.apply(null, arr));

// new way
console.log('100 random numbers:', sumArgs(...arr));

// can use multiple in the same parameter list
console.log('100 random numbers, twice+:', sumArgs(...arr, ...arr, 100));

let spreadingStrings = 'Spreading strings';

console.log([...spreadingStrings]);

// Destructuring with spread op
let itsgood = 'it\'s good'.split('');
let [,,,,,...good] = itsgood;

console.log(good);

// remaining elements of an array
[,...A] = [1, 2, 3, 4];

console.log(A);
