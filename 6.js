/*      Ejercicio 6:
Este loop o bucle está haciendo un bucle al arreglo o array de principio a fin ... aumentando uno
por uno.
var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
for(var i = 0; i<mySampleArray.length; i = i + 1)
{
console.log(mySampleArray[i]);
}
📝 Instrucciones:
1. Intenta hacer un bucle desde el final hasta el principio. */

var mySampleArray = [3423, 5, 4, 47889, 654, 8, 867543, 23, 48, 56432, 55, 23, 25, 12];
for (var i = mySampleArray.length; i >= 0; i--) {
    console.log(mySampleArray[i]);
}
/*  Practico con while  

let i = mySampleArray.length
while (i >= 0) {
    console.log(mySampleArray[i]);
    i--
}

*/