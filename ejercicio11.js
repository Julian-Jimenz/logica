/* crear una funcion que tome un numero positivo y lo imprima desendente de 8 en 8,
incluyendo el numero inicial */

function numeroDesendente(num){
if( num < 0){
    console.log("Ingresa un numero positivo ")
}else{
    for(let i = num ; i >= 0; i -= 8){
    console.log(`- Nº${i} `)
    }
 }
  
}
numeroDesendente(100);