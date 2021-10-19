// Metodos de arrays .push() agrega elementos al final del array
let colores1 = ["Azul", "Blanco", "Rojo", "Verde"];
colores1.push("Violeta", "Amarillo");

// Metodos de arrays .pop()  saca elementos del final del array
let nombres1 = ["Juana", "Mariana", "Pablo"];
nombres1.pop();

// Metodos de arrays .shift() saca elementos del inicio del array
let nombres2 = ["Juana", "Mariana", "Pablo"];
let elPrimero = nombres2.shift();
console.log(nombres2);
console.log(elPrimero);


// Metodos de arrays .unshift() inserta elementos del inicio del array
let colores2 = ["Azul", "Blanco", "Rojo", "Verde"];
colores2.unshift("Amarillo", "Violeta")

let notas1 = [3,5,10,9,7,8,8,8];
notas1.push(1);
notas1.push(4);
console.log(notas1)

// .indexOf()
let notas2 = [3,5,10,9,7,8,8,8];
let posicionDelOcho = notas2.indexOf(8);
if (posicionDelOcho != -1){
    console.log('Lo encontré');
}

console.log(posicionDelOcho);

// .lastIndexOf()


// .join()
let resultadoJuntado = notas2.join('**');
console.log(resultadoJuntado);

let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"];
let indiceJuan = alumnos.indexOf("Juan");
console.log(indiceJuan);
let indiceFrancisco = alumnos.indexOf("Francisco");
console.log(indiceFrancisco);

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  let fraseNueva = arrayFrase.join(" ");
  console.log(fraseNueva);

  //¡Sí! ¡Alexis se egresó del terciario!

  let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  
  let alumnoEgresado = estudiantes.pop();
  console.log(estudiantes);

  //Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.

  estudiantes.push({nombre: 'Juan',

promedio : 5,

curso : 'iOS'
});
estudiantes.push({
  nombre: 'Miguel',

promedio: 2,

curso: 'Android'
});
console.log(estudiantes);

//Se dio de baja un alumno.
let alumnoDeBaja = estudiantes.shift();
console.log(estudiantes);
console.log(alumnoDeBaja);


//Se reintegraron alumnos.
estudiantes.unshift({
    nombre: "Mariana",
  
  promedio: 9,
  
  curso: "Full Stack"
  });
  estudiantes.unshift({
  nombre: "Francisco",
  
  promedio: 2,
  
  curso: "Android"
  });
  console.log(estudiantes);