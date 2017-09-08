let arr = [1, 2, 3, 4, 5];

let expObj = {
  arr,
  [arr]: 1,
  [arr.length]: 2,
  [{}]: 3
};

console.log(expObj);

let shapeName = 'rectangle';
let a = 5;
let b = 3;

// concise method syntax

let shape = {
  shapeName,
  a,
  b,
  logArea() {
    console.log(`Area: ${a * b}`);
  },
  id: 0
};

console.log(shape);
