/* crar una funcion que tome una cadena de texto y un numero 
y recortar la cadena la cantidad que el numero indique y mostrar los caracteres que quedan */

function recortarCadena(texto, numero) {
    if (texto === "") {
        console.log("No se puede analizar la cadena porque es vacía.");
    } else if (numero > 0) {
        let nuevaCadena = texto.slice(0, numero);
        console.log(nuevaCadena);
    } else {
        console.log("Error: el número debe ser mayor que 0.");
    }
}

recortarCadena("julian jimenez toro", 9);
