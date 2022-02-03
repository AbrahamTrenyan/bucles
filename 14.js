/*      Ejercicio 14: Maximo en un array
1. Escribe un script que encuentre el número entero más grande en myArray.
2. Imprime ese número en la consola con la función console.log().
var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34]; 
*/
var myArray = [43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734, 6, 34];
const maximoDeUnArreglo = (arr) => {
    let maximo = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (maximo < arr[i]) {
            maximo = arr[i]
        }
    }
    console.log(`El maximo es: ${maximo}`);
}
maximoDeUnArreglo(myArray)