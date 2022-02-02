/*      Ejercicio 11:
1) [ ] Array Mixto
📝 Instrucciones:
1. Escribe una función que imprima un arreglo en la consola que contenga los tipos de
valores (data-types) que contiene el array mix en cada posición.
var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
 */
var mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];
const sacarTipoDeDato = (arr) => {
    types = []
    for (let i = 0; i < arr.length; i++) {
        types.push(typeof arr[i])
    }
    console.log(types);    // Javascript toma al array como un objeto, por eso imprime object donde hay un arreglo.
}
sacarTipoDeDato(mix)