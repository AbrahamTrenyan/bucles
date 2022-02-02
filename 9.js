/*      Ejercicio 9:
Nuestro cliente necesita un programa que cuente las repeticiones de las letras en un string
dado. Sé que es extraño, pero es muy testarudo ¡ Lo necesitamos lo antes posible!
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis
Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan
cursus"
let counts = {};
// your code here
console.log(counts);
📝 Instrucciones:
1. Crea un objeto donde las letras son las propiedades y los valores son el número de
veces que esa letra se repite en toda la cadena.
 */
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";
let counts = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    ñ: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
};
const contar = () => {
    for (let i = 0; i < par.length; i++) {
        for (letra in counts) {
                counts.letra+=1
        }
    }
} 
const mostrar = () => {
    for (letra in counts) {
        console.log(`${letra}: ${counts[letra]}`)
    }
}

contar()
mostrar()