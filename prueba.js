let tareas = [];

function agregarTareas(tareas, nombre){
    tareas.push({nombre, completada:false})
}

function mostrarTareas(tareas){
    tareas.forEach((tarea, index) => {
        let estado = tarea.completada ? "completada" : "pendiente"
            console.log(`${index + 1}. ${tarea.nombre }- ${estado}`);
    });
}

function completarTarea(tareas, index){
    tareas[index].completada = true;
}

function eliminarTarea(tareas, index){
    tareas.splice(index, 1);
}