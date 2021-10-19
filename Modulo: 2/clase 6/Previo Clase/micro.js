console.log('Aplicación tareas');
console.log('------------------');
console.log('');

//-->Se muestra una tarea

let tarea = {
  titulo: 'Practicar el switch',
  descripcion: 'Entender para qué puedo usarlo',
  estado: 'pendiente',
};

//-->Micro desafío varias tareas terminado

let tareas = [
  {
    titulo: 'Practicar el switch',
    descripcion: 'Entender para qué puedo usarlo',
    estado: 'pendiente',
  },
  {
    titulo: 'Practicar for',
    descripcion: 'Entender para qué puedo usarlo',
    estado: 'en progreso',
  },
  {
    titulo: 'Objeto Literal vs JSON',
    descripcion: '¿Qué tienen de diferente?',
    estado: 'terminada',
  },
];

//-->Micro desafío acceder a un atributo de una tarea
//1) Recorrer el array
//2) De cada tarea mostrar el titulo
console.log(tarea);
console.log(tarea.titulo);

for (let i = 0; i < tareas.length; i = i + 1) {
  console.log(i);
  console.log(tarea[i]);
  console.log(tarea.titulo);
  console.log('- ', tareas[i].titulo + ' - ' + tareas[i].estado);
}

//-->Como pasar una tarea de JS a JSON

let otraTarea = {
  titulo: 'Refactorear con un foreach()',
  descripcion: '¿Qué tienen de diferente?',
  estado: 'terminada',
};

let otraTarea = {
  titulo: 'Refactorear con un foreach()',
  descripcion: '¿Qué tienen de diferente?',
  estado: 'terminada',
};
//solo los numeros no van en string

console.log(JSON.stringify(otraTarea));
let stringTarea = JSON.stringify(otraTarea);
console.log(typeof stringTarea);

//Microdesafío: Lectura de tareas
const fs = require('fs');
let tareas = fs.readFileSync('./tareas.json', 'utf-8');
tareas = JSON.parse(tareas);

//Microdesafío: Mostrar solo las pendientes o en progreso
console.log();
for (let i = 0; i < tareas.length; i = i + 1) {
  if (tareas[i].estado == 'pendiente' || tareas[i].estado == 'en progreso') {
    console.log('- ', tareas[i].titulo + ' - ' + tareas[i].estado);
  }
}

//Microdesafío: Mostrar todas y no terminadas
console.log();
function listarTodas() {
  console.log('Todas las tareas');
  for (let i = 0; i < tareas.length; i = i + 1) {
    console.log('- ', tareas[i].titulo + ' - ' + tareas[i].estado);
  }
}
console.log();

function listarNoTerminadas() {
  console.log('Tareas sin terminar');
  for (let i = 0; i < tareas.length; i = i + 1) {
    if (tareas[i].estado == 'pendiente' || tareas[i].estado == 'en progreso') {
      console.log('- ', tareas[i].titulo + ' - ' + tareas[i].estado);
    }
  }
}

listarTodas();
listarNoTerminadas();
listarTodas();
listarNoTerminadas();
listarTodas();