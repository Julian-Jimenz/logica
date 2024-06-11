
// crear una funcion que tome como parametro un string y un numero y que me repita el string
//tantas veces como el numero indique 

function repetirStr(string, numeroArepetir) {
    let resultado = "";
    for(let i = 1; i <= numeroArepetir; i++) {
       resultado += string;
       if (i < numeroArepetir) {
           resultado += "\n";
       }
    }
    console.log(resultado);
}

repetirStr("julian", 5);
