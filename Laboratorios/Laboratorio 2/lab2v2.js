//Punto 2 del laboratorio 2
var num1 = 50;
var num2 = 30;

console.log("Suma: " +(num1 + num2));           //Resultado de Suma
console.log("Resta: " +(num1 - num2));          //Resultado de Resta
console.log("División: " +(num1 / num2));       //Resultado de División
console.log("Multiplicación: " +(num1 * num2)); //Resultado de Multiplicación

//Punto 3 del laboratorio 2
let palabra1 = "Que"
let palabra2 = "xopa"

console.log (palabra1 +' '+ palabra2);

//Punto 4 del laboratorio 2
const valor1 = 1;
const valor2 = "Marca";

console.log("Tipo de dato valor1: "+ typeof valor1);
console.log("Tipo de dato valor2: "+ typeof valor2);

//Punto 5 del laboratorio 2
const objeto = {
    numero: 1000,
    texto: "Demencia y crimen",
    boolean: true,
    objetoVacio: {}
};

console.log ("Objeto: ", objeto);

//Punto 6 del laboratorio 2
let multiplo = parseInt(prompt("Escribe un número entero positivo mayor a 10: "), 10);

function sumaMultiplo(multiplo) {
    let suma = 0;
    for (let i = 1; i < multiplo; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            suma += i;
        }
    }
    return suma;
}

console.log("Suma de múltiplos de 3 o 5 menores que " + multiplo + ": " + sumaMultiplo(multiplo));