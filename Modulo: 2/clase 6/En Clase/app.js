// entra la modularidad y llamo a mi modulo nuevo
const tareasFunc = require('./funcionesDeTareas');
// encunetro argumento en linea de comando
let accion = process.argv[2];

let tareas = tareasFunc.leerArchivo();

//checo posibles opciones de argumento en linea de comando
switch(accion){
    case undefined:
        console.log("Atencion -Tienes que pasar una accion");
        break;

    case 'listar':
        console.log(`===== Listando todas las tareas =====`);
        tareasFunc.listarTareas(tareas);
        break;

    case 'crear':
        const nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        };
        tareasFunc.guardarTarea(nuevaTarea);
        console.log(`===== Nueva Tarea Creada =====`);
        break;
    
    case 'filtrar':
        let estado = process.argv[3];
        const tareasFiltradas = tareasFunc.filtrarPorEstado(estado);
        console.log(`===== Filtrando tareas con el estado: ${estado} =====`);
        tareasFunc.listarTareas(tareasFiltradas);

        break;

    default:
        console.log("No entiendo que quieres hacer");
        break;
}    
