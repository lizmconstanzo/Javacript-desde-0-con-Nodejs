// Cree una función que reciba un arreglo vacío.
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


// Cree una función que reciba un arreglo de nombres.
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

// Cree un sistema de carrito de compras utilizando funciones.

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


// Cree una función que reciba un arreglo de números.
// Recorra el arreglo utilizando forEach.
// Guarde los números pares en un nuevo arreglo utilizando push.
// Imprima el nuevo arreglo en consola.

function arreglos(){
    let numeros = [1, 2 , 3, 4 ,5, 6, 7, 8, 9, 10];
    let pares = [];
    let impares =[];

    numeros.forEach(numero => {
        if (numero % 2 === 0) {
            pares.push(numero);
        }else{
            impares.push(numero);
        }
    });
        console.log("los numeros pares son:", pares);
        console.log("los numeros impares son:", impares);

    }


arreglos();

