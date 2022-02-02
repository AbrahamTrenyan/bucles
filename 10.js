/*      Ejercicio 10:
Usando un bucle for, invierte el arreglo o array arr e imprime el nuevo arreglo o array en la
consola.
var arr = [45,67,87,23,5,32,60];
 */
var arr = [45,67,87,23,5,32,60];
inverso=[]
/// generando un array nuevo ///
for(let i =arr.length-1; i>0; i--){
    inverso.push(arr[i])
}
console.log(inverso);
//con el mismo array y metodo reverse///
arr.reverse()
console.log(arr);