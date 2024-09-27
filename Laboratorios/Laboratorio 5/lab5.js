    const Utils = (() => { //Libreria donde se guardan las funciones que hagan cosas
        return {
            invertido(x) {
                return String(x).split('').reverse().join('');
            }
        }
    })();
    
    const App = (() => { //Es lo que tiene la lógica para manipular los elementos de la página web en este caso el HTML
        const htmlElements = {
            input: document.querySelector('#cadena'),
            response: document.querySelector('#cadenaSalida'),
            colorSelect: document.querySelector('#seleccionarColor')
        }
    
        const handlers = { //Tiene la implementación de los eventos.
            onInputChange() {
                const strInput = htmlElements.input.value;
                const strReverse = Utils.invertido(strInput);
                const selectedColor = htmlElements.colorSelect.value;
                
                // Actualizar el texto invertido con el color seleccionado
                htmlElements.response.innerHTML = `<span class="${selectedColor}">${strReverse}</span>`;
            },
            onColorChange() {
                // Vuelve a aplicar el cambio cuando se selecciona un color diferente
                handlers.onInputChange();
            }
        }
    
        const bindEvents = () => { //Es donde se asignan los eventos a los elementos HTML
            htmlElements.input.addEventListener('input', handlers.onInputChange);
            htmlElements.colorSelect.addEventListener('change', handlers.onColorChange);
        }
    
        return { //Siempre tiene que haber un return ya que devuelve un valor
            init() {
                bindEvents();
            },
        };
    })();
    
    App.init();
    