/* dado un array de objetos de peliculas devolver si ya las has visto 
o te falta por ver */

function mis_peluculas (peliculas){

for(pelicula of peliculas){
    
   
    let resultado = `" ${pelicula.titulo} de ${pelicula.director}"`;

    if(pelicula.vista === true){
    
        console.log( `ya has visto ${resultado}`);
    }else{
        console.log( `no has visto ${resultado}`);

        }
    }
}
let coleccion_peliculas = [

    {
    titulo: "Interestelar",
    director: "Christopher Nolan",
    vista : true
    },

    {
    titulo: "Origenr",
    director: "Christopher Nolan",
    vista : true
    },
    {
    titulo: "la monja",
    director: "Corin Hardy",
    vista : false
    },

]

 
mis_peluculas(coleccion_peliculas);

