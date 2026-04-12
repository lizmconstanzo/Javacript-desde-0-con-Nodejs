// Escribir un programa que segun el dia de la semana ingresado proporciones el dia en ingles
// El programa debe ser escrito dos veces, uno con la declaracion if else y otra con la declaracion
// switch

let semana ="Lunes";

if (semana === "Lunes"){
    console.log("Monday");
}
else if (semana === "Martes"){
    console.log("Tuesday");
} 
else if (semana === "Miercoles"){
    console.log("Wednesday");
}
else if (semana === "Jueves"){
    console.log("Thursday");
}
else if (semana === "Viernes"){
    console.log("Friday");
}   
else if (semana === "Sabado"){
    console.log("Saturday");
}
else if (semana === "Domingo"){
    console.log("Sunday");
}
else {
    console.log("El dia ingresado no es valido");
}

let DiadeSemana = "Miercoles";

switch (DiadeSemana) {
    case "Lunes":
        console.log("Monday");
        
        break;
    case "Martes":
        console.log("Tuesday");
        break;
    case "Miercoles":
        console.log("Wednesday");
        break;
    case "Jueves":
        console.log("Thursday");
        break;
    case "Viernes":
        console.log("Friday");
        break;
    case "Sabado":
        console.log("Saturday");
        break;
    case "Domingo":
        console.log("Sunday");
        break;
    default:
        console.log("El dia ingresado no es valido");
        break;
}


// Escribir un programa que segun el total de la compra, se agregue un valor de envio.
// Si la compra es menor o igual a los $10 se agregara un gasto de envio de $3
// Si la compra es menor o igual a los $20 y mayor a los $10 se agregara un gasto de envio de $5
// Si la compra es menor o igual a $50 y mayor a los $20 se agregara un gasto de envio de $7
// Si la compra supera los $50 el gasto de envio sera gratuito

// El programa debe ser escrito dos veces, uno con la declaracion if else y otra con la declaracion
// switch


let totaldecompra = 40;
let envio = 0;

if (totaldecompra <= 10){
    envio = 3;
}
else if(totaldecompra <=20) {
    envio = 5;
}
else if(totaldecompra <=50){
    envio = 7;
}
else{
    envio = 0;
}

console.log("El total es: ", totaldecompra + envio);

let totalFinal = 20;

switch (true) {
    case totalFinal <=10:
        envio = 3;
        console.log("el total final es: ", totalFinal + envio);
        break;
    case totalFinal <=20:
        envio = 5;
        console.log("el total final es: ", totalFinal + envio);
        break;
    case totalFinal <=50:
        envio = 7;
        console.log("el total final es: ", totalFinal + envio);
        break;

    default:
        console.log("el envio es gratis");
        break;
}