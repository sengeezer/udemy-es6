var value = 2;
console.log('a:', value);

(function () {
  console.log('b:', value);
  var value = 5;
  console.log('c:', value);
})();

console.log('d:', value);
