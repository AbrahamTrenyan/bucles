/* Ejercicio 5
var myArray = [232,32,1,4,55,4,3,32,3,24,5,5,5,34,2,3,5,5365743,52,34,3,55,33,435,4,6,54,63,45,4,67,56,47,1,
34,54,32,54,1,78,98,0,9,8,98,76,7,54,2,3,42,456,4,3321,5];
// wrap this console.log withing a loop and replace 0 with i
console.log(myArray[0]);
El código ahora imprime el primer elemento en la consola.
1. En vez de ello, imprime todos los elementos en el arreglo o array. Tendrás que recorrer
todo el arreglo utilizando un loop. */
var myArray = [232,32,1,4,55,4,3,32,3,24,5,5,5,34,2,3,5,5365743,52,34,3,55,33,435,4,6,54,63,45,4,67,56,47,1,
    34,54,32,54,1,78,98,0,9,8,98,76,7,54,2,3,42,456,4,3321,5];

let i = 0
while(i < myArray.length){
    console.log(myArray[i]);
    i++;
}

/*  Usando For

 for(i=0; i < myArray.length; i++){
    console.log(myArray[i]);
} 

*/