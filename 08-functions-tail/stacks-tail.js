// will encounter (browser) stack limitatons (ES5)
function sumToN(n) {
  if (n <=1) {
    return n;
  }

  return n + sumToN(n - 1);
}

// will be able to handle larger numbers (ES6, tail call optimised)
function bettersumToN(n, sum = 0) {
  if (n <= 1) {
    return sum;
  }

  let result = sum + n;
  return bettersumToN(n - 1, result);
}
