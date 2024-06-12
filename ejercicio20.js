// dado 2 numeros determinar cual es mayor y cual es menor 

function numeros(num1, num2) {

    if (typeof num1 === 'number' && typeof num2 === 'number') {
       
        if (num1 > num2) {
            console.log(`El número ${num1} es mayor que el número ${num2}`);
        } else if (num1 < num2) {
            console.log(`El número ${num2} es mayor que el número ${num1}`);
        } else {
            console.log(`Los números ${num1} y ${num2} son iguales`);
        }
    } else {
   
        console.log("ERROR!!, Debe escribir un valor numérico");
    }
}

numeros(5, 10); 
numeros(20, 10); 
numeros("julian", "toro"); 