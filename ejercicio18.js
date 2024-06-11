/* dada 2 cadena de texto comprobar si son anagramas entre si */

function limpiarTexto(texto){
    return texto.replace(/[^\w]/gi,"").toLowerCase().split("").sort().join("")
}

function anagramas(texto1 , texto2){
    if( limpiarTexto(texto1) === limpiarTexto(texto2)){
    console.log("la palabra es anagrama ")

    }else{
        console.log("la palabra no es anagrama ")

    }
}
anagramas("Amor", "roma")
anagramas("julian", "julia")