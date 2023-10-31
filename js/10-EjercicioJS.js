let numero = parseInt(prompt("Introduce un número:"));


if (numero % 2 == 0) {
    document.write("El número " + numero + " es divisible por 2");
} else if (numero % 3 == 0){
    document.write("El número " + numero + " es divisible por 3");
} else if (numero % 5 == 0){
    document.write("El número " + numero + " es divisible por 5");
} else if (numero % 7 == 0){
    document.write("El número " + numero + " es divisible por 7");
}
