//invoco modulo de fs
let fs = require('fs');

function leerArchivo(){
    const archivo = fs.readFileSync('./tareas.json','utf-8');
    return JSON.parse(archivo);
}

function guardarArchivo(tareas){
    let tareasJSON = JSON.stringify(tareas);
    fs.writeFileSync('./tareas.json', tareasJSON);
}


function guardarTarea(tarea){
    let tareasActuales = leerArchivo();
    tareasActuales.push(tarea);
    guardarArchivo(tareasActuales);
}

function filtrarPorEstado(estado){
    let tareasActuales = this.leerArchivo();
    const tareaFiltradas = tareasActuales.filter((unaTarea) => estado == unaTarea.estado);
        return tareaFiltradas;
}

function listarTareas(tareas){
    tareas.forEach(function(unatarea, index){
        console.log(`${index + 1}.- La tarea: ${unatarea.titulo}.  Se encuentra es estado: ${unatarea.estado}`);
    });
}

module.exports = {guardarTarea, leerArchivo, filtrarPorEstado,listarTareas};