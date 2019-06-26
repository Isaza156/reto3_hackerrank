'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    var sorted = ar.sort((a, b) => a - b);
    var pairs = 0;
    for (var i = 0; i < n - 1; i++){

        if (sorted[i] === sorted[i + 1]) {

            pairs++;
            i += 1;
}

    }
return pairs
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}


function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // ¡misma variable!
      console.log(x);  // 71
    }
    console.log(x);  // 71
  }
  
  function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // variable diferente
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }
  // llamamos a las funciones
  varTest();
  letTest();