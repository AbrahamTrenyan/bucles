/*      Ejercicio 7:
7.Loop de dos en dos
Este código está reproduciendo todo el conjunto, uno por uno, e imprime los elementos en la
consola.
var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
for(var i = 0; i<mySampleArray.length; i = i + 1)
{
console.log(mySampleArray[i]);
}
📝 Instrucciones:
1. Cambia el bucle para que se repita de dos en dos en lugar de uno por uno. 
*/
var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
for(var i = 0; i<mySampleArray.length; i = i + 2)
{
console.log(mySampleArray[i]);
}
