// Pedir al usuario que ingrese tres números
let numero1 = parseFloat(prompt("Introduce el primer número: "));
let numero2 = parseFloat(prompt("Introduce el segundo número: "));
let numero3 = parseFloat(prompt("Introduce el tercer número: "));

let mayor;


if (numero1 > numero2 && numero1 > numero3) {
    mayor = numero1;
} else if (numero2 > numero1 && numero2 > numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}

document.write("El número mayor es: " + mayor);
