// dado un numero mostrar su divisores 

function divisores(numero){
    if(numero === 0 ){
        console.log(`el numero ${numero} no tiene divisor`)
    }else{
        console.log("Los numeros divisores de ",numero ,"son:")
    }
    for(let i = 1 ; i <= numero; i++){
        if( numero % i === 0 ){
            console.log(i)
     }
    }
}
divisores(1)