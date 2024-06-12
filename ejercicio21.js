// dada una cadena de texto poner la primera letra en mayuscula y devolver la cadena con el cambio

function enMayuscula (texto){
let palabras = [];
if(texto.length === 0){
    console.log("ERROR!! Lacadena no puede estar vacia")
}else{
for(let palabra of texto.split(" ")){  
palabras.push(palabra[0].toUpperCase() + palabra.slice(1));
}
let cadenaFinal = palabras.join(" ")
console.log(cadenaFinal)
}
}

enMayuscula ("hola gladys toro noreña")