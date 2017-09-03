let user = {
  name: 'Bob',
  lastname: 'Whittaker',
  addr: 'The Belmont',
  lessons: [2, 5, 6, 9],
  next: 10
};

// create top level vars
let {name, lastname} = user;

console.log(`Mr. ${name} ${lastname}`);

let a = 1;
let b = 2;

[a, b] = [a + 1, a + 1];

console.log([a, b]);

// return value
let { next } = { lastname, addr } = user;

// works because right-most, i.e. user is returned:
console.log(next);

// deeper
let { lessons: [
  first, second, third, fourth, fifth, sixth = null, seventh
], next: eighth } = user;

console.log(first, second, third, fourth, fifth, sixth, seventh, eighth);

// function args
function f(l1, l2) {

}

f(r1, r2);

[l1, l2] = [r1, r2];
