/*          Ejercicio 13:
Instrucciones:
1. Imprime cada número de la iteración en la consola del 20 al 0, pero concaténale un
signo de exclamación(!) al elemento si el número es un multiplo de 5.
2. Al final haz un console.log()de LIFTOFF
let i = 20;
do {
// Magic goes here;
i--;
} while (i > 0);
 */
let i = 20;
do {
    if(i%5 === 0){
        console.log(`!${i}`)
    }
    else{
        console.log(`${i}`)
    }
    i--;
} while (i > 0)
console.log('LIFTOFF')