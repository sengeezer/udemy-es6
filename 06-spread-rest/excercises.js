// 1
[...firstArr] = [2, 3, 4, 5, 6, 7];

console.log(firstArr);

// 2
let f = () => [...'12345'];
// f() returns ['1', '2', '3', '4', '5']
let A = f().map(f);
// f() five times
console.table(A);
