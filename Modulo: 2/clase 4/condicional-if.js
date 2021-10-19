let clima = 'Soleado';
let dia = 'Lunes';

if(clima == 'Soleado' && dia == 'Domingo'){
    console.log('Lindo día para pasear');
} else if(clima == 'Soleado' && dia == 'Lunes'){
    console.log('Podría salir igual');
} else{
    console.log('Mejor me quedo en casa practicando JS');
}

let edad = 15;
let acceso = "";

if(edad < 16){
    console.log(acceso = 'prohibido');
} else if(edad >= 16 && edad <= 18){
    console.log(acceso = 'permitido sólo acompañado de un mayor');
} else{
    console.log(acceso = 'permitido');
}

// Declaremos una variable con el nombre dato y asignémosle un valor booleano. Luego, deberemos hacer un if que evalúe esa variable y, si el valor es igual a  true, que imprima por consola "es true". Caso contrario, que imprima por consola "es false".

let dato = true;
if(dato == true){
    console.log('es true');
} else {
    console.log('es false');
}


//    En este ejercicio nos viene dada una variable llamada lenguaje, que tiene asignado un string. Nuestro trabajo es construir un condicional if/else para que, si la variable contiene "javascript", imprima por consola el texto "Estoy aprendiendo". De lo contrario, que imprima"Lo aprenderé más adelante".

let lenguaje = "javascript";
if (lenguaje = "javascript"){
    console.log("Estoy aprendiendo");
} else {
    console.log("Lo aprenderé más adelante");
}


// Debemos completar la función puedePasar para que, analizando el nombre que recibe por parámetro, determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito"", no lo dejará pasar y lo indicará retornando false; si la persona se llama de otra forma, lo dejará pasar y lo indicará retornando true.

function puedePasar(nombre) {
    if(nombre == "Cosme Fulanito"){
        return  false;
    } else{
        return  true;
    }
}