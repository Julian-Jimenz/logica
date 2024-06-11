
/* hacer un atabla de multiplicar */
function tablaDeMultiplicar(numero){
  console.log(`tabla de multiplicar del numero ${numero}`)
  for (let i = 0 ; i <= 10 ; i++){
    let resultado = (numero * i) ;
    console.log(`${i} X ${numero} = ${resultado}`)

  }
}
tablaDeMultiplicar(8);