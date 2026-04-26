// Muestre todos los productos en consola.
// Agregue un nuevo producto al inventario.
// Elimine el último producto.
// Elimine el primer producto.
// Obtenga solo los productos con stock.
// Obtenga solo los nombres de los productos.
// Obtenga solo los precios.
// Calcule el valor total del inventario (precio * stock).
// Verifique si hay productos sin stock.
// Verifique si todos los productos tienen stock.
// Encuentre el primer producto con precio mayor a 100.
// Encuentre el índice de un producto sin stock.
// Elimine un producto usando su índice.
// Reemplace un producto por otro usando splice.
// Ordene los productos por precio.
// Cree un string con todos los nombres separados por coma.
// Cree una copia del inventario.
// Cree otro inventario y únalo con el original.
// Obtenga productos con stock.
// Ordénelos por precio.
// Obtenga solo los nombres.
// Conviértalos en un string separado por " - "

let inventario = [
  { nombre: "Laptop", precio: 1000, stock: 5 },
  { nombre: "Mouse", precio: 20, stock: 0 },
  { nombre: "Teclado", precio: 80, stock: 3 },
  { nombre: "Monitor", precio: 300, stock: 2 },
];

console.log(inventario);
inventario.push({ nombre: "Pantalla", precio: 500, stock: 7 });
console.log(inventario);

inventario.pop();
console.log(inventario);

inventario.shift();
console.log(inventario);

let disponible = inventario
  .filter((dispo) => dispo.stock > 0)
  .map((productos) => productos.nombre);
console.log(disponible);

let costo = inventario.map((producto) => producto.precio);
console.log(costo);

let totalInventario = inventario.reduce((total, producto2) => {
  return total + producto2.precio * producto2.stock;
}, 0);
console.log(totalInventario);

let sinStock = inventario.some((producto3) => producto3.stock === 0);
console.log(sinStock);

let stockDeTodos = inventario.every((producto4) => producto4.stock > 0);
console.log(stockDeTodos);

let productoMayor = inventario.find((producto5) => producto5.precio > 100);
console.log(productoMayor);

let indice = inventario.findIndex((producto6) => producto6.stock === 0);
console.log(indice);
console.log(inventario);

inventario.splice(2, 1);
console.log(inventario);

inventario.splice(1, 1, { nombre: "Cargadores", precio: 50, stock: 27 });
console.log(inventario);

inventario.sort((menor, mayor) => menor.precio - mayor.precio);
console.log(inventario);

let separar = inventario.map((producto7) => producto7.nombre).join(" ,");
console.log(separar);

let copia = inventario.slice();
console.log(copia);

let inventario2 = [
  { nombre: "Audifonos", precio: 1500, stock: 5 },
  { nombre: "Forros", precio: 200, stock: 0 },
  { nombre: "Camaras", precio: 80000, stock: 10 },
  { nombre: "Bocinas", precio: 3000, stock: 2 },
];

let inventario3 = inventario.concat(inventario2);
console.log(inventario3);

let soloStock = inventario3.filter((disponible2) => disponible2.stock > 0);
console.log(soloStock);

let ordenado = soloStock.sort(
  (precioMayor, precioMenor) => precioMayor.precio - precioMenor.precio,
);
console.log(ordenado);

let soloNombres = soloStock.map(producto8 => producto8.nombre).join(" - ");
console.log(soloNombres);

