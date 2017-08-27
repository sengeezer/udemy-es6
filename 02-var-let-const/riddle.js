'use strict';
var guessMe1 = 1;
let guessMe2 = 2;

{
  let guessMe2 = 3;
  try {
    // let guessMe2 = 3;
    console.log(guessMe1, guessMe2); // (A)
  } catch (e) {
    // console.log('A failed:', e);
  }
  // let guessMe2 = 3;
  console.log(guessMe1, guessMe2); // (B)
}

console.log(guessMe1, guessMe2); // (C)

(() => {
  guessMe1 = 5;
  console.log(guessMe1); // (D)
  let guessMe2 = 6;
  console.log(guessMe1, guessMe2); // (E)
})();

guessMe1 = 1;
console.log(guessMe1, guessMe2); // (F)
