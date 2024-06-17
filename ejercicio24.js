/* dado un numero determinar a cuantos años , meses y dias equivale */

function calcularTiempo(num){

    let anios = Math.floor(num/365);
    let dias_restantes = (num % 365);
    let meses = Math.floor(dias_restantes / 31);
    dias_restantes = dias_restantes % 31;

   console.log(`El tiempo equivale a: ${anios} años , ${meses} meces y ${dias_restantes} dias`)
}
calcularTiempo(8799)