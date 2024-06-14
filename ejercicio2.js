/* comprobar si una palabra es polindromo */
function palabraPolidronoma(palabra) {
  let separarCadena = palabra.split("").reverse().join("");
  return palabra === separarCadena;
}
// Llamada a la función
console.log(("Es palindroma la palabre ? "+ palabraPolidronoma("julian")));
