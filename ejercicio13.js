
// crear una funcio que revise una cadena de texto y devuelva el caracter que mas se repite

function repeticiones (texto){

let mapeo_letras= {};
let maximo_repeticiones = 0;
let letra_mas_repetida = "";

for (let letras of texto )
    
    if(!mapeo_letras[letras]){
        mapeo_letras[letras]= 1;
    }
    else {
        mapeo_letras[letras]++;
    }
  for(let letras in mapeo_letras){
    
    if (mapeo_letras[letras] > maximo_repeticiones){

        maximo_repeticiones = mapeo_letras[letras];
        letra_mas_repetida = letras ;

    }

  }


    console.log(`la letra mas repetida es la: (${letra_mas_repetida}) y se repite: (${ maximo_repeticiones}) veces`)
    
}

repeticiones ("julian jimenez toroooooo");