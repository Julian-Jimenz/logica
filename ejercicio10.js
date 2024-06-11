 
// crear una funcion que se encarge de cambiar una palabra por [censurado] en caso de que se encuentre 


function Censurado(texto , palabra){

  let textoArray = texto.split(" ")

  let arreglo = textoArray.map(elemento => {
    return elemento === palabra  ? "Censurado" : elemento;
   
})
 let arreglofinal = arreglo.join(" ")
 console.log(arreglofinal);
} 

Censurado("julian jimenez julian toro", "julian");


