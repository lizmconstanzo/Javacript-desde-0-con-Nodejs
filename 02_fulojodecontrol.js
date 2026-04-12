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