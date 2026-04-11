// Escribir un programa que calcule el numero de segundos que existen en un dia

let segundosEnUnMinuto = 60;
let minutosEnUnaHora = 60;
let horasEnUnDia = 24;

let segundosEnUDia = segundosEnUnMinuto * minutosEnUnaHora * horasEnUnDia;

console.log("El numero de segundos que existen en un dia es: " + segundosEnUDia);

// Realiza un programa que a partir de los valores ancho =2 y alto =5 calcule el area de un rectangulo

let ancho = 2;
let alto = 5;
let area;

area = ancho * alto;
console.log("el area del rectangulo es: " + area + "cm al cuadrado");

// Hacer un conversor de grados centigrados a grandos Fahrenheit

let gradosCentigrados = 20;
let gradosFahrenheit;

let conversion = (gradosCentigrados * 1.8) + 32;

console.log(gradosCentigrados + " grados centigrados equivalen a " + conversion + " grados Fahrenheit");