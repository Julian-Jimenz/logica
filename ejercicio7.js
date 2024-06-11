// dado un numero entero inviertelo y devuelve un numero entero 

function invertirnumero (numeroInv){

    let invertido=" ";
    let numeroStr = numeroInv.toString();

     for( let numero of numeroStr){
        invertido = parseInt(numero + invertido);

     };
     console.log(`el numero invertido es: ${invertido}`);


}


invertirnumero(56)

function invertir (numeroInver){

    let numeroStr =  numeroInver.toString() 

    let separarnumero = parseInt( numeroStr.split("").reverse().join(""));

    console.log(`el numero invertido es: ${separarnumero}`)
}       
invertir(89) 