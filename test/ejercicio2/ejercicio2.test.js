const palabraPolidronoma = require("./ejercicio2");

test("comprobar si la funcion palabraPolidronoma esta definida",()=> {

    expect(palabraPolidronoma).toBeDefined();

});

test("es un palindromo",()=>{

    expect(palabraPolidronoma("otto")).toEqual(true);
})

test("no es un palindromo",()=>{ 
    expect(palabraPolidronoma("julian")).toEqual(false);
})