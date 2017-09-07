// 1 (my answer was correct!)
let firstArr = [2, 3, 4, 5, 6, 7];

let shallowCp = arr => arr.slice(0);
console.log(shallowCp(firstArr));

// deep copy
let deepCp = arr => JSON.parse(JSON.stringify(arr));
console.log(deepCp(firstArr));

// 2
let f = () => [...'12345'];
// f() returns ['1', '2', '3', '4', '5']
let A = f().map(f);
// f() five times
console.table(A);

// 3
let g = () => new Array(10).fill(null);
let B = g().map(g);
console.table(B);

// 4
let sumArgs = (...args) => args.reduce((sum, ar) => sum + ar, 0);

console.log(sumArgs(1, 2, 3, 4, 5));

// 5
/*
* maxCommon
*
* @param {string} s1 - first string
* @param {string} s2 - second string
* @return {number} - the length of the longest common substring in s1 and s2
*/
let maxCommon = ([head1,...tail1], [head2,...tail2], len = 0) => {
  if (typeof head1 === 'undefined' || typeof head2 === 'undefined' ) {
    // len == number of chars elapsed before either sting became empty
    return len;
  }

  if ( head1 === head2 ) {
    return maxCommon(tail1, tail2, len+1);
  }

  let firstBranch = maxCommon(tail1, [head2, ...tail2], 0);
  let secondBranch = maxCommon([head1, ...tail1], tail2, 0);

  return Math.max( ...[len, firstBranch, secondBranch ] );
}

console.log(maxCommon('123', '1'));

console.log(maxCommon('11111', '11f111g'));

console.log(maxCommon('abc', '111cab'));
