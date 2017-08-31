function delayed(delay, funcToExec) {
  setTimeout(funcToExec, delay );
}

function plainLog() {
  console.log('That\'s all she wrote');
}

delayed(150, plainLog);

let lines = 1;

function printComment(comment, line = lines++) {
    console.log(line, comment);
    line++;
}

printComment('Oh yes');

function argList(productName, price = 100) {
    console.log( arguments.length );
    console.log( productName === arguments[0] );
    console.log( price === arguments[1] );
}

argList('Krill Oil Capsules');
