let tareas = [];

function agregarTarea(tareas, nombre){
    let repetida = false
    if(nombre === ""){
        console.log("Por favor agregar una tarea");
        return;

    } tareas.forEach(tarea => {
        if(tarea.nombre === nombre){
            console.log(tarea);
            repetida = true;
        }
    });
        if(repetida){
            console.log("Esta tarea ya existe");
        }else{
            tareas.push({nombre, completada: false})
        }
}

function mostrarTareas(tareas){
    tareas.forEach((tarea, index) => {
        let estado = tarea.completada ? "Completada": "Pendiente"
        console.log(` Tarea # ${index + 1} - ${tarea.nombre}: ${estado}`);
    });

}

// agregarTarea(tareas, "Terminar el codigo");
// mostrarTareas(tareas)

function completarTarea(tareas, nombre){
    let completada = false;
        tareas.forEach(completar => {
            if(completar.nombre === nombre ){
                completar.completada = true;
                console.log("La tarea esta completa");
                completada = true
            }
        });
        if(!completada){
            console.log("La tarea esta incompleta");
        }
}

function eliminarTarea(tareas, nombre){
    let eliminado = false;

    tareas.forEach((eliminar, index) => {

        if(eliminar.nombre === nombre){

            tareas.splice(index, 1);

            eliminado = true;
        }
        
    });


}

agregarTarea(tareas, "Terminar el codigo");
agregarTarea(tareas, "Dormir");
agregarTarea(tareas, "Completar algoritmos");
agregarTarea(tareas, "Estudiar");
mostrarTareas(tareas);
completarTarea(tareas, "Terminar el codigo");
mostrarTareas(tareas);
eliminarTarea(tareas, "Dormir");
mostrarTareas(tareas);
