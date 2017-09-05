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
      [fibCurrent, fibLast] = [fibCurrent + fibLast, fibCurrent];
  }

  return fibCurrent;
}

console.log(fib(6));

// 3
let node = {
  left : {
    left: 3,
    right: 4
  },
  right: 5
};

/*
let {
  loft : {},
  right : val
} = node;
*/

// Could do:
let { loft, right: val} = node;

console.log(loft, val);

// 4
let x = { A: [ 't', 'e', 's', 't' ] };

let { A: [,,A2]} = x;

console.log(A2);

// 5
let config = {
    chartType: 0,
    bullColor: 'green',
    bearColor: 'red',
    days: 30
};

function drawChart(data, {
    chartType = 0,
    bullColor = 'green',
    bearColor = 'red',
    days = 30
}) {
    console.log(chartType, bullColor, bearColor, days)
}

drawChart([], {});
drawChart([], { chartType: 1, days: 60 });

function drawsChart(data, {
    chartType = 0,
    bullColor = 'green',
    bearColor = 'red',
    days = 30
} = {}) {
    console.log(chartType, bullColor, bearColor, days)
}

drawsChart([]);
