const { truncate } = require("fs/promises");

// Función expresada
let sumar = function(numeroA, numeroB){
    return numeroA + numeroB;
}
console.log(sumar(7,9));

// Función declarada
function restar(numeroC, numeroD){
    return numeroC - numeroD;
}
console.log(restar (10,3));

// Scope Local
let mensaje = 'Hola';
function saludar(){
    let mensaje = 'Chau';
    return mensaje;
}
console.log(mensaje);
console.log(saludar());

function saludar(nombre = 'Carlos', apellido = 'Navarro') {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

function esPar(n){
    if (n%2==0) {
        return true;
    } else {
        return false;
    }
}
console.log (esPar(12));

