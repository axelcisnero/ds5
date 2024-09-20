//Se declaran las variables que estan en el html que contienen el tecto y el que imprime el texto.
const cadena = document.getElementById('cadena');
const cadenaSalida = document.getElementById('cadenaSalida');

cadena.addEventListener('input', function() {
    const invertido = cadena.value.split('').reverse().join('');
    
    // Actualiza el contenido del <span> con el texto invertido
    cadenaSalida.innerText = invertido;
});