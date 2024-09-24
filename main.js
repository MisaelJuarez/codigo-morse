const codigoMorse = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
    'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
    'Z': '--..' 
};

const $texto = document.getElementById('texto');
const $resultado = document.getElementById('resultado');
const $palabra = document.getElementById('palabra');

let textoInput = [];
let resultado = [];

const validaciones = (texto) => {
    if (texto.length == '') {
        return [false,'No puedes dejar el input vacio'];
    } else if (!isNaN(texto)) {
        return [false,'No puedes ingresar numeros'];
    } else {
        return [true];
    }
}

const palabraAmorse = (texto,res) => {
    texto.map((letra) => {
        for (const clave in codigoMorse) {
            if (letra.toLowerCase() == clave.toLowerCase()) {
                res.push(codigoMorse[clave]);
            }
        }
    });
    $resultado.value = res.join().replaceAll(',',' ');
    $palabra.textContent = texto.join('').toUpperCase();
    $texto.value = '';
}

const moserApalabra = (texto,res) => {
    texto.map((letra) => {
        for (const clave in codigoMorse) {
            if (letra == codigoMorse[clave]) {
                res.push(clave);
            }
        }
    });
    $resultado.value = res.join().replaceAll(',',' ');
    $palabra.textContent = texto.join('');
    $texto.value = '';
}

document.getElementById('morse').addEventListener('click',() => {
    textoInput = [];
    resultado = [];

    textoInput = $texto.value.split('');
    
    (validaciones(textoInput.join(''))[0]) ? palabraAmorse(textoInput,resultado) : Swal.fire({icon: "error", text: `${validaciones(textoInput.join(''))[1]}`});    
});

document.getElementById('letra').addEventListener('click',() => {
    textoInput = [];
    resultado = [];

    textoInput = $texto.value.split(' ');
    
    (validaciones(textoInput.join(''))[0]) ? moserApalabra(textoInput,resultado) : Swal.fire({icon: "error", text: `${validaciones(textoInput.join(''))[1]}`});
});