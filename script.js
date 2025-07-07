function cifradoCesar(texto, shift) {
    return texto.split('').map(char => {
        let code = char.charCodeAt(0);
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else {
            return char;
        }
    }).join('');
}

function mostrarCartel() {
    const mensajeOriginal = "Felicidades has pasado la parte 2. Has ganado el juego";
    const shift = 3;
    const mensajeCifrado = cifradoCesar(mensajeOriginal, shift);

    const cartel = document.getElementById('cartel');
    cartel.textContent = mensajeCifrado;
    cartel.style.display = 'block';

    document.body.onclick = null;
}

