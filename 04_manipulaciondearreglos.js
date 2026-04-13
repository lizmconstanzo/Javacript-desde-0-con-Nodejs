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