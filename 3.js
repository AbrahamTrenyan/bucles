/* Ejercicio 3:
var arr = [4,5,734,43,45]; Agrega 2 números enteros aleatorios a la lista arr (no necesitas un loop o
    bucle) e imprime el array en la consola. */

var arr = [4,5,734,43,45];

const pushearRandom = (array) =>{
    // Al multiplicar por 100, los dos primeros numeros detras de la coma generados por el Math random pasan a estar delante de la coma, luego el math floor redondea para abajo dejando solo la parte entera, que es extraida de la parte decimal que daba el math random.
    let entero = Math.floor(Math.random()*100)
    array.push(entero)
}

pushearRandom(arr)
pushearRandom(arr)
console.log(arr);