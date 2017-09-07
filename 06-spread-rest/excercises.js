// 1
[...firstArr] = [2, 3, 4, 5, 6, 7];

console.log(firstArr);

// 2
let f = () => [...'12345'];
// f() returns ['1', '2', '3', '4', '5']
let A = f().map(f);
// f() five times
console.table(A);

// 3
let g = () => [null, null, null, null, null, null, null, null, null, null];
let B = g().map(g);
console.table(B);

// 4
let sumArgs = (...args) => args.reduce((sum, ar) => sum + ar);

console.log(sumArgs(1, 2, 3, 4, 5));

// 5
let maxCommon = ([head1,...tail1], [head2,...tail2], len = 0) => {
  if (typeof head1 === 'undefined' || typeof head2 === 'undefined' ) {
         return new Error('Please specify valid heads characters');
  }

  if ( head1 === head2 ) {

  }

  let firstBranch = 0;
  let secondBranch = 0;

  return Math.max( ...[len, firstBranch, secondBranch ] );
}

maxCommon( '123', '1' );

maxCommon( '11111', '11f111g');

maxCommon( 'abc', '111cab' );
