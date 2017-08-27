let value = 2;
console.log('a:', value);

(function () {
  try {
    console.log('b:', value);
  } catch(e) {
    console.log(e);
  }

  let value = 5;
  console.log('c:', value);
})();

console.log('d:', value);
