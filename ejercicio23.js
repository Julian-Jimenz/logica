// dado un numero mostrar su serie de fibonacci

function fibonacci(num){
let numeros = [0,1]

for(let i = 2 ; i <= num ; i++){
    numeros.push(numeros[i-1]+numeros[i-2] )
}
console.log(`La serie de fibonacci del numero (${num}) es: ${numeros} y el ultimo dato de la serie es el: ${numeros[num]}`)

}

fibonacci(15)