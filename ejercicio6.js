 // crear una funcion que me tome 2 numeros como parametro
 // y me devuelva cuantos numeros impares hay entre ellos


    function numerosImpares (numero1 , numero2){

        let contar = 0;

        while(numero1 < numero2){

            if( numero1 %2 !== 0 ){
                contar++
            }
     
            numero1++;
        }
        
        
        return contar
}


console.log("numeros impares:",numerosImpares(1,50));