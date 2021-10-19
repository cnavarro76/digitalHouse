// Retoma de conceptos

//condicionales (If ternario, Switch)
let edad = 20;

let mensaje1;
if (edad >18){
    mensaje1 = ('Eres mayor de edad');
} else {
    mensaje1 =('Eres menor de edad');
}
console.log(mensaje);

// condicion ? verdadero : falso
let mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensaje);

// Switch 
let dia = 'lunes';
switch (dia){
    case 'lunes':
        console.log('Hoy es lunes');
        break;
    case 'martes':
        console.log('Hoy es martes');
        break;
    case 'miercoles':
        console.log('Hoy es miercoles');
        break;
    case 'jueves':
        console.log('Hoy es jueves');
        break;
    case 'viernes':
        console.log('Hoy es viernes');
        break;
    case 'sabado':
        console.log('Hoy es sabado');
        break;
    case 'domingo':
        console.log('Hoy es domingo');
        break;
    default:
        console.log('No es un dia de la semana');
        break;
}

let (dia){

switch (dia){
    case '1':
        console.log('Hoy es lunes');
        break;
    case '2':
        console.log('Hoy es martes');
        break;
    case '3':
        console.log('Hoy es miercoles');
        break;
    case '4':
        console.log('Hoy es jueves');
        break;
    case '5':
        console.log('Hoy es viernes');
        break;
    case '6':
        console.log('Hoy es sabado');
        break;
    case '7':
        console.log('Hoy es domingo');
        break;
    default:
        console.log('No es un dia de la semana');
        break;
    }
}
// Objetos Literales
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    direccion:{
        calle: 'Calle falsa 123',
        ciudad: 'Madrid',
        pais: 'España',
        direccionCompleta: function({
            return `${this.calle} - ${this.ciudad} - ${this.pais}`;
        })
    },
};

let nombre = persona.nombre;
let apellido = persona.apellido;

let arreglo =[1,2,3,4,5];

arreglo.length; // 5

arreglo.push(6);

arreglo.length; // 6

let calle = persona.direccion.calle;


// JSON





// Arrow Function

funtion saludar(){
    return 'Hola';
}

const saludar = () => 'Hola';

const saludar2 = () =>{
    return'Hola';
}

const sumar(a,b) => {
    let resultado = a + b;
    return resultado;
}

const imprimir = (mensaje) => console.log(mensaje);
const sumar2 = (a,b) => {
    imprimir(a+b);
}


// Ciclos I

for(let i = 0; i < 10; i++){
    console.log(i);
}

while(i < 10){
    console.log(1);
    i++;
}

let ganaLaLoteria = '';
while (ganaLaLoteria === 'Francisco'){
    ganaLaLoteria = calculaGanador(); //Regresa un string que es el nombre de un ganador
}

