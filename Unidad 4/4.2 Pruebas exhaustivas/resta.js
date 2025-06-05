const resta = (a, b) => {
    return a - b;
}

console.group('PRUEBAS EXHAUSTIVAS DE RESTA');
console.log ("La resta de 2 menos 5 debe ser -3: ", resta(2,5)); //prueba normal

//decimal
console.log("La resta de 1.1 menos 5.5 debe ser igual a -4.4: ", resta(1.1,5.5));

//frontera
console.log("La resta de 0 menos 5 debe ser 0: ", resta(0,5));

//frontera(numeros mayores)
console.log("Numero maximo menos numero maximo:", resta(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));

//fuera de frontera
console.log("Numero maximo menos el numero más pequeño:", resta(Number.MAX_VALUE, 0.0001));

//invalido no definido
console.log("undefined menos 5: ", resta(undefined, 5));

//invalido sin argumentos
console.log("La resta de 20 menos 10 debe ser igual a 10: ", resta());

//por tipo nulo
console.log("La resta con null menos 2 debe devolver NaN: ", resta(null, 2));

//por tipo cadena
console.log("La resta con '10' menos '2' debe devolver 8:", resta('10', '2'));

//por negativo(0)
console.log("La resta de 0 menos 5 debe ser -5: ", resta(0, 5));

//por negativos, ambos
console.log("La resta de -8 menos -2 debe ser -6: ", resta(-8, -2));
console.groupEnd();

//console.assert(resta (2,5) === -3,'La resta de 2 menos 5 debe ser -3');

module.exports = {resta};
