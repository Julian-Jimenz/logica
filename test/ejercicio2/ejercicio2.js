
function palabraPolidronoma(palabra) {
    let separarCadena = palabra.split("").reverse().join("");
    return palabra === separarCadena;
}

module.exports = palabraPolidronoma;