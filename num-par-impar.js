//Comparador de Números Par/Impar:
//Dado un número, determina e imprime si el número es par o impar utilizando un condicional.

var num1 = 2256456747
var num2 = 67

console.log(DeterminarNumero(num1))
console.log(DeterminarNumero(num2))

function DeterminarNumero(num) {
    //return //condion//-> num == Math.floor((num / 2)) * 2  ? //true// "el numero es par " :  //false// "el numero es impar"

    if(num == Math.floor((num / 2)) * 2 ){
        return `${num} el numero es par`
    }else {
        return `${num} es numero es impar`
    }
}





