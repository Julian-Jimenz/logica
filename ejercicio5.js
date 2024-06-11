function numeroATexto(numero) {
    // Array con los nombres de los números del 0 al 19
    var unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];

    // Array con los nombres de las decenas del 20 al 90
    var decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];

    if (numero < 20) {
        return unidades[numero];
    } else if (numero < 100) {
        if (numero % 10 === 0) {
            return decenas[Math.floor(numero / 10)];
        } else {
            return decenas[Math.floor(numero / 10)] + ' y ' + unidades[numero % 10];
        }
    } else {
        return 'Número no soportado';
    }
}

console.log(numeroATexto()); 
