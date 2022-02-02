/* Ejercicio 4: var arr = [4,5,734,43,45]; Agrega 10 enteros aleatorios a la lista arr e imprime el array o arreglo en la consola */
const pushearRandom = (array) =>{
    let entero = Math.floor(Math.random()*100)
    array.push(entero)
}
 var arr = [4,5,734,43,45];

while(arr.length<15){
    pushearRandom(arr)
}
console.log(arr); 

/* 
Practicando con for

for (let i = 0; i < 10; i++) {
    pushearRandom(arr)
}
console.log(arr); \

*/