let carrito = [];

function agregarProducto(carrito, producto) {
    carrito.push(producto);
}


function mostrarCarrito(carrito){
    carrito.forEach((producto , mostrar) => {
        console.log(`Producto ${mostrar + 1}: ${producto}`);
    });
}


function eliminarUltimoProducto(carrito){
    carrito.pop();
}


function procesarCarrito(carrito){
    if (carrito.length === 0){
        console.log("carrito vacio");
    }else{
        console.log("procesando compra");
    }
}

agregarProducto(carrito, "lechuga");
agregarProducto(carrito, "pan");
agregarProducto(carrito, "huevos");
agregarProducto(carrito, "jugo");

mostrarCarrito(carrito);

eliminarUltimoProducto(carrito);

mostrarCarrito(carrito);



