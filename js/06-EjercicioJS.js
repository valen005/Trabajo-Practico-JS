let numero1 = parseFloat(prompt("Introduce el primer número: "));
let numero2 = parseFloat(prompt("Introduce el segundo número: "));


if (numero1 > numero2) {
  document.write("El primer número, " + numero1 + ", es el mayor.");
} else if (numero2 > numero1) {
  document.write("El segundo número, " + numero2 + ", es el mayor.");
}
