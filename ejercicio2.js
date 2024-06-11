/* comprobar si una palabra es polindromo */

function palabraPolidronoma(palabra) {
    let separarCadena = palabra.split("").reverse().join("");
      console.log(palabra);
      console.log(separarCadena);

// condicion

    if(palabra ===  separarCadena){
        console.log("la palabra es polidronoma");
    }
    else{
      console.log("la palabra no es polidronoma");

    }

}
// Llamada a la función
palabraPolidronoma("julian");
