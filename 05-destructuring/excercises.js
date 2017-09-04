// 1
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

// 2
function fib(n) {
  let fibCurrent = 1;
  let fibLast = 0;

  if (n < 0) {
    return NaN;
  }
  if (n <= 1) {
    return n;
  }
  for (let fibIndex = 1; fibIndex < n; ++fibIndex) {
      fibCurrent += fibLast;
      fibLast = fibCurrent;

      // fibCurrent += fibLast = fibCurrent;
  }

  return fibCurrent;
}

console.log(fib(3));

// 3
let node = {
  left : {
    left: 3,
    right: 4
  },
  right: 5
};

let {
  loft : {},
  right : val
} = node;

console.log(node);
