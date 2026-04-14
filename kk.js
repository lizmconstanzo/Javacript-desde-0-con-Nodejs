let carrito = [];

function agregarProducto(carrito, nombre, precio) {
    carrito.push({nombre, precio})
}




function mostrarCarrito(carrito){
    carrito.forEach((producto, index) => {
        console.log(`Producto ${index + 1}: ${producto.nombre}-${producto.precio}`);
    });
}


agregarProducto(carrito, "pan", 5);
agregarProducto(carrito, "leche", 3);

mostrarCarrito(carrito);

function calcularTotal(carrito) {
    let total = 0;
    carrito.forEach((producto) => {
            total += producto.precio
    });
    return total;
}

let total = calcularTotal(carrito);

function aplicarEnvio(total) {
        
            if (total <= 10){
                console.log(`el total es ${total + 3}`);
            }else if(total <= 20){
                console.log(`el total es ${total + 5}`);
            }else if (total <= 50){
                console.log(`el total es ${total + 7}`);
            }else{
                return total;
            }

    };
   

    function procesarCompra(carrito){
        if (carrito.length === 0){
        console.log("carrito vacio");
    }else{
       calcularTotal(total);
       aplicarEnvio(carrito);
       console.log(`el precio final con todo y envio es ${calcularTotal()} + ${aplicarEnvio()}`);
        
    }
    }


// { nombre: "pan", precio: 5 };
//   { nombre: "leche", precio: 45 };
//   { nombre: "arroz", precio: 100 };
//   { nombre: "jugo", precio: 70 };

// function mostrarNumero(){
//         console.log(5);
// }

// mostrarNumero()

// function obtenerNumero(){
//     return 5
// }

// let resultado = obtenerNumero();
// console.log(resultado);



let arreglo = [1, 2, 3, 4, 5];

function duplicarNumeros(arreglo){
    let arr = [];
    arreglo.forEach( (numero) =>{
        arr.push(numero * 2)
    })
        return arr;

}

let resultado = duplicarNumeros(arreglo);
console.log(resultado);