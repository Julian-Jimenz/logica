// dada una cadena de texto devolver cuantas coucidencias de vocales hay.


function vocales(texto){
    let analizar =""
    if( analizar = texto.match(/[aeiou]/gi)){
        console.log(analizar.length)
    }else{
        console.log("No hay coisidencias")
    }
   
    
}

vocales("julian jimenez toro")