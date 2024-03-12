//Calculadora de Calificaciones:
//Teniendo una calificación final. 
//imprime un mensaje indicando si la calificación es A (17 o más), B (13-16), C (10-12), D (7-9) o F (menos de 6).
var calificaciónfinal = 9
     var resultado = CalcurarCalificacion(calificaciónfinal)
     console.log('la calificacion es: ' + resultado ) 

function CalcurarCalificacion(calificaciónfinal) {
     if(calificaciónfinal >=17){
        return 'A';    
     }else if (calificaciónfinal >= 13 && calificaciónfinal <= 16){
        return 'B';
     }else if (calificaciónfinal >= 10 && calificaciónfinal <= 12){
        return 'C';
     }else if (calificaciónfinal >= 7 && calificaciónfinal <= 9){
        return 'D';
     }else {
        return 'F'
     }
        
     
}