// dado un numero de volver una escalera usando la cantidad del numero 


function escalera (numero ){

let escalera_completa = "";

for( let i = 1 ; i < numero ; i++){
    
    let escalon = "";
    
    for(let j = 1 ; j < i ; j++){
      
        escalon += "[-]"
    }

    escalera_completa += escalon + "\n"
}

    return escalera_completa
    

}

console.log(escalera(10))