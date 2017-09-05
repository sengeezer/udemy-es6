// old way
(function () {
  console.log(arguments);
})(1, 'second', 3)

// new way (run in browser console)
/*
((...args) => {
  console.log(args);
})(1, 'second', 3)
*/
