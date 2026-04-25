// Cree un sistema para manejar productos en inventario.

// let inventario = [];

// function agregarProducto (inventario, nombre, cantidad){
//     if (nombre === "" || cantidad<= 0){
//         console.log("nombre o cantidad invalida");
//     }else{
//          inventario.push({nombre, cantidad});
//     }
// }


// function mostrarInventario(inventario){
//     if(inventario.length === 0){
//         console.log("Esta vacio");
//     }else{
//         inventario.forEach(producto => {
//         let almacen = `${producto.nombre} - ${producto.cantidad}`;
//         console.log(almacen);
    
//     });
//     }
// }



// function actualizarCantidad(inventario, index, nuevaCantidad){
//     if(!inventario[index]){
//         console.log("Indice invalido");
//     }else if(nuevaCantidad <= 0){
//         console.log("Cantidad invalida");
//     }
//     else{
//         inventario[index].cantidad = nuevaCantidad;
//     }
            
// }

// function eliminarProducto(inventario, index){
//     inventario.splice(index, 1)
// }



// function buscarProducto(inventario, nombre){
//      let encontrado = false;
//     inventario.forEach(producto => {
//         if (producto.nombre === nombre){
//             console.log(producto);
//             encontrado = true;
//         }
//     });
//     if(!encontrado){
//         console.log("El producto no fue encontrado");
//     }
// }

// agregarProducto(inventario, "Laptop", 10);
// agregarProducto(inventario, "Cargadores", 15);
// agregarProducto(inventario, "Iphone", 25);

// mostrarInventario(inventario);

// actualizarCantidad(inventario, 0, 30);
// mostrarInventario(inventario);

// eliminarProducto(inventario, 2);
// mostrarInventario(inventario);



// let inventario = [];

// function agregarProducto(nombre, cantidad){
//     inventario.push({nombre, cantidad});
// }

// function mostrarInventario(){
//     inventario.forEach(producto => {
//         console.log(producto);
//     });
// }


// agregarProducto("Laptop", 10);
// agregarProducto("Mouse", 5);

// mostrarInventario();

// function buscarProducto(nombre){
//     let encontrado = false;

//     inventario.forEach(producto => {
//         if(producto.nombre === nombre){
//             console.log(producto);
//             encontrado = true;
//         }
//     });

//     if(!encontrado){
//         console.log("No existe");
//     }
// }

// buscarProducto("Laptop");
// buscarProducto("Teclado");

// function actualizarCantidad(nombre, nuevaCantidad){
//     let encontrado = false;

//     inventario.forEach(producto => {
//         if(producto.nombre === nombre){
//             producto.cantidad = nuevaCantidad;
//             encontrado = true;
//         }
//     });

//     if(!encontrado){
//         console.log("No existe");
//     }
// }

// actualizarCantidad("Laptop", 50);
// mostrarInventario();

// function eliminarProducto(nombre){
//     let eliminado = false;

//     inventario.forEach((producto, index) => {
//         if(producto.nombre === nombre){
//             inventario.splice(index, 1);
//             eliminado = true;
//         }
//     });

//     if(!eliminado){
//         console.log("No existe");
//     }
// }


// eliminarProducto("Mouse");
// mostrarInventario();