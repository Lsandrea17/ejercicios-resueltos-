//Verificador de Número Positivo/Negativo/Cero:
//Dado un número, determina e imprime si el número es positivo, negativo o cero.

var num1 = -45
var num2 =  23

console.log(DeterminarNumero(num1))
console.log(DeterminarNumero(num2))

function DeterminarNumero(num) {
    if(num > 0 ) {
        return `${num} el numero es positivo`
    }else if(num < 0){
        return `${num} el numero es negativo`
    }else {
        return "el numero es 0"
    }
}

