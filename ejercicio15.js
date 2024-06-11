/* mostrar los numeros del 1 al 100 y para los multiplos de 3 escribir (multiplo de 3 )
para los multiplos del 5 escribir (multiplos del 5) y si el numero es multiplo del 3 y el 5 
escribir (multiplo comun); */

function multiplos (numero){

    for (let i = 1 ; i < numero ; i++  ){
      
        if(i % 3 === 0 && i % 5 === 0 ){
            console.log(i,"multiplo comun")
        } else if(i % 5 === 0){

            console.log(i,"multiplo de 5")
        } else if(i % 3 === 0){

            console.log(i,"multiplo de 3")

        } else{
            console.log(i,"no es multiplo de 3 y 5")

        }
    }
 }

multiplos (100)