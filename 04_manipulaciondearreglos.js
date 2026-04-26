// 1. Cree una función que reciba un arreglo vacío.
// Agregue tres productos utilizando el método push.
// Recorra el arreglo utilizando forEach e imprima cada producto en consola.

var agregar = [];

function productos(agregar) {
    agregar.push("arroz");
    agregar.push("leche");
    agregar.push("pan")
}

productos(agregar);

agregar.forEach(producto => {
    console.log(producto);
});


// 2. Cree una función que reciba un arreglo de nombres.
// Elimine el primer elemento utilizando shift.
// Elimine el último elemento utilizando pop.
// Muestre el arreglo resultante utilizando forEach.

var nombres = ["angel", "luis","mario","sofia", "ana"];

function eliminarExtremos(lista) {
    lista.shift();
    lista.pop();
    return lista;
}

eliminarExtremos(nombres);



nombres.forEach(nombre => {
    console.log(nombre);
});

// 3. Cree un sistema de carrito de compras utilizando funciones.

// Debe crear las siguientes funciones:
// Cree una función llamada gestionarFila.
// Dentro de la función, cree un arreglo con varias personas.
// Agregue una nueva persona al final utilizando push.
// Elimine la primera persona utilizando shift.
// Imprima en consola la persona atendida y la fila restante.

function gestionarFila(){
    let personas = ["angel", "luis","mario","sofia", "ana"];
    personas.push("miguel");
    let atendido = personas.shift();
    console.log("persona atendida:", atendido);
    console.log("fila restante:");

    personas.forEach(persona => {
        console.log(persona);
    });
}

gestionarFila();


// 4. Cree una función que reciba un arreglo de números.
// Recorra el arreglo utilizando forEach.
// Guarde los números pares en un nuevo arreglo utilizando push.
// Imprima el nuevo arreglo en consola.

function separarNumeros(){
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    let pares = [];
    let impares = [];

    numeros.forEach(numero => {
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    });

    console.log("Pares:", pares);
    console.log("Impares:", impares);
}

separarNumeros();

// 5. MAP
// Cree un arreglo de números.
// Duplique cada número usando map.

let numerosMap = [1, 2, 3, 4, 5];

let duplicados = numerosMap.map(numero => numero * 2);

console.log("Duplicados:", duplicados);



// FILTER
// 6. Obtenga solo los números pares.

let numerosFilter = [1,2,3,4,5,6,7,8,9,10];

let pares = numerosFilter.filter(numero => numero % 2 === 0);

console.log("Pares:", pares);


// 7. Filtre personas mayores de edad

let personasFilter = [
    {nombre: "Ana", edad: 17},
    {nombre: "Luis", edad: 22},
    {nombre: "Carlos", edad: 15}
];

let mayores = personasFilter.filter(persona => persona.edad >= 18);

console.log("Mayores de edad:", mayores);


//  REDUCE
// 8. Sume todos los números.

let numerosReduce = [10, 20, 30];

let totalNumeros = numerosReduce.reduce((acum, num) => acum + num, 0);

console.log("Total números:", totalNumeros);


// 9. Sume precios del carrito

let carritoReduce = [
    {nombre: "pan", precio: 5},
    {nombre: "leche", precio: 3},
    {nombre: "huevo", precio: 7}
];

let totalCarrito = carritoReduce.reduce((total, producto) => {
    return total + producto.precio;
}, 0);

console.log("Total carrito:", totalCarrito);


// 10. Filtre productos de tecnología,
// obtenga sus precios y calcule el total.

let carrito = [
    {nombre: "Laptop", precio: 1000, categoria: "tecnologia"},
    {nombre: "Mouse", precio: 20, categoria: "tecnologia"},
    {nombre: "Camisa", precio: 50, categoria: "ropa"},
    {nombre: "Teclado", precio: 80, categoria: "tecnologia"},
    {nombre: "Pantalon", precio: 60, categoria: "ropa"}
];

let total = carrito
    .filter(producto => producto.categoria === "tecnologia")
    .map(producto => producto.precio)
    .reduce((acum, precio) => acum + precio, 0);

console.log(total);

//  11. Verifique si hay alguna nota reprobada.

let notas = [55, 70, 80, 45];

let reprobado = notas.some(nota => nota < 60);

console.log(reprobado);

// 12. Verifique si todos son mayores de edad.

let edades = [18, 20, 22, 25];

let todosMayores = edades.every(edad => edad >= 18);

console.log(todosMayores);

// 13. Encuentre el primer usuario activo.

let usuarios = [
    {user: "ana", activo: false},
    {user: "luis", activo: true},
    {user: "maria", activo: false}
];

let activo = usuarios.find(usuario => usuario.activo);

console.log(activo);


// 14. Encuentre la posición del primer producto sin stock.

let inventario = [
    {nombre: "Laptop", cantidad: 5},
    {nombre: "Mouse", cantidad: 0},
    {nombre: "Teclado", cantidad: 10}
];

let index = inventario.findIndex(producto => producto.cantidad === 0);

console.log(index);

// 15. Verifique si existe un rol específico.

let roles = ["admin", "user", "editor"];

let existe = roles.includes("guest");

console.log(existe);


// 16. Cree una función que:

// una las palabras en un solo texto
// separadas por espacio " "
// imprima el resultado

let palabras = ["Hola", "como", "estas"];

let texto = palabras.join(" ")
console.log(texto);

// 17. Convierta el arreglo en un string separado por " - "
// Ejemplo esperado: "1 - 2 - 3 - 4 - 5"

let numerosB = [1, 2, 3, 4, 5];

let num = numerosB.join(" - ")
console.log(num);

// 18. Cree un nuevo arreglo que contenga todas las frutas
// NO modifique los originales

let frutas1 = ["manzana", "banana"];
let frutas2 = ["pera", "uva"];
let frutas3 = frutas1.concat(frutas2);
console.log(frutas3);


// 19. Una ambos arreglos
// Luego recorra el nuevo arreglo con forEach e imprima los números

let numeros1 = [1,2,3];
let numeros2 = [4,5,6];
let numeros3 = numeros1.concat(numeros2)

numeros3.forEach(numero=>{
    console.log(numero);
})

//20. Obtenga un nuevo arreglo con:
// desde el índice 1 hasta el 3
// imprímalo

let numerosC = [10, 20, 30, 40, 50];

let indice = numerosC.slice (1, 4);
console.log(indice);

// 21. Cree una copia del arreglo SIN modificar el original

let nombres2 = ["Ana", "Luis", "Carlos", "Maria"];

let copia = nombres2.slice()
console.log(nombres2);
console.log(copia);

// 22. Elimine "verde" usando splice

let colores = ["rojo", "azul", "verde", "amarillo"];

colores.splice(2, 1)
console.log(colores);

// 23. Reemplace el número 3 por 99

let numerosD = [1,2,3,4,5];

numerosD.splice(2, 1, 99);
console.log(numerosD);

// 24. Ordene los números de menor a mayor

let numerosE = [5, 1, 9, 3, 7];

numerosE.sort((a,b)=> a - b);

console.log(numerosE);

// 25. Ordene los productos por precio (de menor a mayor)

let productos2 = [
    {nombre: "Laptop", precio: 1000},
    {nombre: "Mouse", precio: 20},
    {nombre: "Teclado", precio: 80}
];

productos2.sort((menor, mayor)=> menor.precio - mayor.precio )
console.log(productos2);


// 26. Ordene los nombres alfabéticamente
// Luego conviértalos en un string separado por coma

let nombres3 = ["Carlos", "Ana", "Luis", "Maria"];
console.log(nombres3.sort());

let separar = nombres3.join(", ");
console.log(separar);