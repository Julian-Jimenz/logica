// invertir una palabra sin usuar palabras reservadas 
function texto (palabra){

    let invertido = " ";
for (let letra of palabra){
    invertido = letra + invertido
}
   console.log(`el texto invertido es ${invertido} `)
}

texto("julian")