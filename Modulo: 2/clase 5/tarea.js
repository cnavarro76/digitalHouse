function noParesDeContarImparesHasta(numero){ let resultado = 0; for ( i = 0; i <= numero ; i++ ) if (i % 2 != 0){ resultado = resultado + 1; } return resultado } 


function tengoClases(dia) {
switch (dia) {
case 'lunes':
case 'miércoles':
case 'viernes':
console.log('tenés clases');
break;
default:
console.log('no tenés clases');
}
} 