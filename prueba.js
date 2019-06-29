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


var calcetines = [10,10,10,20,20,30,40,40]
var contadorDeCalcetines = 0;
for(var i = 0; i < calcetines.length - 1; i++){
if(calcetines[i] === calcetines[i+1]){
contadorDeCalcetines++;
i = i + 1;
}
}
console.log("Los pares de calcetines que John puede vender son " + contadorDeCalcetines)