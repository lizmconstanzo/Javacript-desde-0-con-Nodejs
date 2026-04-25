// Ejercicios con map

let numeros = [1, 2, 3, 4, 5];

let duplicados = numeros.map((numero, index) => {
    return numero * 2;
});

console.log(duplicados);

let personas = [
    {nombre: "Jose", edad: 19},
    {nombre: "Maria", edad: 50},
    {nombre: "Eva", edad: 18}
];

let nombres = personas.map ((persona, index)=>{
    return persona.nombre
});

console.log(nombres);


// Ejercicios con Filter

let numeros =[1,2,3,4,5,6,7,8,9,10];

let pares = numeros.filter(numero=>{

    return numero % 2 === 0;

})

console.log(pares);


let personas = [
    {nombre: "Ana", edad: 17},
    {nombre: "Luis", edad: 22},
    {nombre: "Carlos", edad: 15}
];


let mayor = personas.filter(persona =>{
    return persona.edad >=18;
})

console.log(mayor);


// Ejercicios con Reduce

let numeros = [10, 20, 30];

let total = numeros.reduce((num, acum)=>{
    return num + acum;
}, 0)

console.log(total);


let carrito = [
    {nombre: "pan", precio: 5},
    {nombre: "leche", precio: 3},
    {nombre: "huevo", precio: 7}
];


let precioTotal = carrito.reduce((total, acum)=>{
    return acum.precio + total;
}, 0)

console.log(precioTotal);