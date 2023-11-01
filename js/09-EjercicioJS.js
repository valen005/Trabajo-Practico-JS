// Pedir al usuario que ingrese una frase
let frase = prompt("Introduce una frase:");

// Inicializar una variable para almacenar las vocales
let vocales = "";

// Recorrer la frase y buscar vocales
for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i);
    if ("aeiou".indexOf(caracter) !== -1) {
        vocales += caracter + " ";
    }
}

if (vocales.length > 0) {
    document.write("Las vocales en la frase son: " + vocales);
} else {
    document.write("No se encontraron vocales en la frase.");
}
