/* Dada una cadena de texto, conviértela a mayúsculas si la cantidad de letras mayúsculas en el texto
 es mayor que la cantidad de letras minúsculas.En caso contrario, conviértela a minúsculas 
 si la cantidad de letras minúsculas es mayor que la cantidad de letras mayúsculas.
*/

function minMayus(texto){

let mayusculas = 0;
let minusculas = 0 ;
let resultado = "" ;

for(let i of texto){
    if(/[A-Z]/.test(i)){
        mayusculas++;
    }else{
        minusculas++
    }
}
if( mayusculas > minusculas){
    resultado = texto.toUpperCase();
}else{
    resultado = texto.toLowerCase();

}
   console.log(resultado)
}

minMayus("JULIAN JIMENEZ toro")
minMayus("natalia JIMENEZ toro")