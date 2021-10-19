let doble = (numero) => numero * 2;
let triple = (numero) => numero * 3;
let aplicarCallback = (numero, operacion) => operacion (numero);
console.log(aplicarCallback(3, doble));