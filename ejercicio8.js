// comparar 2 array y devolver otro array pero solo con los elementos comomunes entre ellos 


function arrayfiltrado ( frutas1,frutas2){

    const frutas3 = frutas1.filter(Elemento =>
        {return frutas2.includes(Elemento)});

    console.log(frutas3)
}

arrayfiltrado(["manzana","pera","banano","aguacate","naranja","fresa"],["manzana","gunabana","banano","mandarina","naranja","fresa"]
)