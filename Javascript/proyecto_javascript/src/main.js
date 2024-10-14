//Introducción

//Ejercicio 2

let a = 5;
let b = 10;
let c = a + b;
console.log(c); 

//Ejercicio 3

let nombre = prompt("Ingrear Nombre");
console.log(`Hola, ${nombre}!`);


//Operadores Lógicos y Condicionales

//Ejercicio 1

let a = 10;
let b = 20;
let mayor = (a > b) ? a : b;
console.log(`El mayor es: ${mayor}`);

console.log("El número mayor es: " + c);

//Ejercicio 2

let numeroIngresado = prompt("Ingrese un número:");
numeroIngresado = parseInt(numeroIngresado);

if (numeroIngresado % 2 === 0) {
    console.log("El número " + numeroIngresado + " es par.");
} else {
    console.log("El número " + numeroIngresado + " es impar.");
}

//Operadores en bucle

//Ejercicio 1

let variable = 10;
while (variable > 0) {
    console.log(variable);
    variable--;
}

//Ejercicio 2

let numero;
do {
    numero = parseInt(prompt("Introduce un número mayor a 100:"));
} while (numero <= 100);
console.log(`El número ingresado es: ${numero}`);

//Funciones

//Ejercicio 1

function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(4)); // true
console.log(esPar(5)); // false

//Ejercicio 2:

function convertirCelsiusAFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
console.log(convertirCelsiusAFahrenheit(25)); // 77

//Objetos

//Ejercicio 1

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires",
    cambiarCiudad(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};
persona.cambiarCiudad("Mendoza");
console.log(persona);

//Ejercicio 2

let libro = {
    titulo: "El Quijote",
    autor: "Cervantes",
    año: 1605,
    esAntiguo() {
        return (new Date().getFullYear() - this.año) > 10;
    }
};
console.log(libro.esAntiguo() ? "El libro es antiguo" : "El libro es reciente");

//Arrays

//Ejercicio 1:

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplicados = numeros.map(num => num * 2);
console.log(numeros);
console.log(multiplicados);

//Ejercicio 2:

let pares = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
    if (pares.length === 10) break;
}
console.log(pares);
