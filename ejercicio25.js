/* calcular los dias vividos con respecto a tu fecha de nacimiento hasta la fecha actual */

function calcularDiasVividos(fechaNacimiento) {
    var fechaNac = new Date(fechaNacimiento);
    var fechaActual = new Date();
   
    var diferencia = fechaActual.getTime() - fechaNac.getTime();
    

    var diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    
    return diasVividos;
}


var fechaNacimiento = '2000-05-12'; 
var diasVividos = calcularDiasVividos(fechaNacimiento);
console.log(`Has vivido aproximadamente ${diasVividos} días.`);
