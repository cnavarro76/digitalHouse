// Callbacks es una funcion que se pasa como paramétro de otra funcion.
function Padre(function () {
//Sentencias de código
return a;
});
    

//Definicíon
function vaComoParametro () {
    return "Soy un callback";
}

//Ejecucíon
funcionPadre (vaComoParametro);
//Soy un callback


let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);
console.log(calculadora(18, 3, dividir));
