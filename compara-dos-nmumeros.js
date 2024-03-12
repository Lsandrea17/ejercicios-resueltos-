//Comparador de Números:
//Dados dos números. Luego, determina e imprime si el primer número es mayor, menor o igual que el segundo.

let num1 = 45
let num2 = 45

compararNumero(num1,num2) 

function compararNumero(num1 , num2) {
    if(num1 < num2) {
        console.log("numero 1 es menor que numero 2")
    }else if(num1 > num2 ) {
        console.log("numero 1 es mayor que numero 2")
    }else {
        console.log("numero 1 es igual numero 2")
    }
}
