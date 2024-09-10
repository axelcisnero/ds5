//PROBLEMA 1 DEL LABORATORIO 3

function esPalindromo(cadena) {
    // Función auxiliar para verificar si una cadena es palíndromo
    return cadena === cadena.split('').reverse().join('');
}

function esPalindromoDobleBase(numero) {
    // Convertir el número a base decimal (como cadena)
    let decimal = numero.toString();

    // Convertir el número a base binaria (como cadena)
    let binario = numero.toString(2);

    // Verificar si ambas representaciones son palíndromos
    return esPalindromo(decimal) && esPalindromo(binario);
}

function validar() {
    // Obtener el valor del campo de entrada
    let numero = parseInt(document.getElementById('numero').value, 10);

    // Validar que el número sea un valor válido
    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado').innerText = 'Por favor, ingrese un número entero positivo.';
        document.getElementById('respuesta').style.display = 'block';
        return;
    }

    // Verificar si el número es un palíndromo de doble base
    if (esPalindromoDobleBase(numero)) {
        document.getElementById('resultado').innerText = 'El número es un palíndromo de doble base.';
    } else {
        document.getElementById('resultado').innerText = 'El número no es un palíndromo de doble base.';
    }

    // Mostrar el div con el resultado
    document.getElementById('respuesta').style.display = 'block';
}

//PROBLEMA 2 DEL LABORATORIO 3

function contarCaracteres(t) {
    // Crear un objeto vacío para almacenar el conteo de caracteres
    const conteo = {};

    // Recorrer cada carácter de la cadena
    for (let i = 0; i < t.length; i++) {
        const caracter = t[i].toUpperCase(); // Convertir a mayúsculas para hacer la comparación uniforme

        // Si el carácter ya está en el objeto, incrementar el conteo
        if (conteo[caracter]) {
            conteo[caracter]++;
        } else {
            // Si el carácter no está en el objeto, agregarlo con conteo 1
            conteo[caracter] = 1;
        }
    }

    return conteo;
}

function validar2() {
    // Obtener el valor del campo de entrada
    let cadena = document.getElementById('cadena').value;

    // Validar que la cadena no esté vacía
    if (!cadena) {
        document.getElementById('resultado2').innerText = 'Por favor, ingrese una cadena de texto.';
        document.getElementById('respuesta2').style.display = 'block';
        return;
    }

    // Contar los caracteres
    const conteo = contarCaracteres(cadena);

    // Convertir el objeto de conteo en una cadena de texto con el formato solicitado
    let resultadoTexto = `Has ingresado la palabra: "${cadena}" `;
    for (const caracter in conteo) {
        resultadoTexto += `${caracter}=${conteo[caracter]}, `;
    }

    // Eliminar la última coma y espacio
    resultadoTexto = resultadoTexto.slice(0, -2);

    // Mostrar el resultado en el div
    document.getElementById('resultado2').innerText = resultadoTexto;
    document.getElementById('respuesta2').style.display = 'block';
}

//PROBLEMA 3 DEL LABORATORIO 3
function esBisiesto(a) {
    // Un año es bisiesto si es divisible por 4 y (no es divisible por 100 o es divisible por 400)
    if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

function validarAnio() {
    // Obtener el valor del input
    let anio = document.getElementById('anio').value;

    // Validar que el año no esté vacío y sea un número
    if (!anio || isNaN(anio)) {
        document.getElementById('resultado3').innerText = 'Por favor, ingrese un año válido.';
        document.getElementById('respuesta3').style.display = 'block';
        return;
    }

    anio = parseInt(anio); // Convertir el año a número entero

    // Verificar si es bisiesto o no
    let resultadoTexto;
    if (esBisiesto(anio)) {
        resultadoTexto = `El año ${anio} es bisiesto.`;
    } else {
        resultadoTexto = `El año ${anio} no es bisiesto.`;
    }

    // Mostrar el resultado en el div correspondiente
    document.getElementById('resultado3').innerText = resultadoTexto;
    document.getElementById('respuesta3').style.display = 'block';
}

//PROBLEMA 4 DEL LABORATORIO 3

// Función para verificar si un número es primo
function esPrimo(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Función que retorna la sumatoria de los números primos debajo de "n"
function sumarPrimos(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (esPrimo(i)) {
            suma += i;
        }
    }
    return suma;
}

function validarPrimos() {
    // Obtener el valor del input
    let n = document.getElementById('numeroPrimo').value;

    // Validar que el número esté en el rango permitido
    if (!n || isNaN(n) || n <= 0 || n >= 1000000) {
        document.getElementById('resultado4').innerText = 'Por favor, ingrese un número válido (0 < n < 1000000).';
        document.getElementById('respuesta4').style.display = 'block';
        return;
    }

    n = parseInt(n); // Convertir el valor a número entero

    // Calcular la sumatoria de números primos
    const sumaPrimos = sumarPrimos(n);

    // Mostrar el resultado en el div correspondiente
    document.getElementById('resultado4').innerText = `La sumatoria de los números primos menores o iguales a ${n} es ${sumaPrimos}.`;
    document.getElementById('respuesta4').style.display = 'block';
}