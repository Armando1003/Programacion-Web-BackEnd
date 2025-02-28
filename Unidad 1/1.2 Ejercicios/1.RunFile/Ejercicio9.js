// Importar
const matematicas = require("./modulomatematicas.js");

console.log("Ejercicio 9: Usando el módulo matemático\n");

console.log("Suma (5 + 3):", matematicas.suma(5, 3));
console.log("Resta (10 - 7):", matematicas.resta(10, 7));
console.log("Multiplicación (4 * 6):", matematicas.multiplicacion(4, 6));
console.log("División (20 / 4):", matematicas.division(20, 4));
console.log("División por 0 (10 / 0):", matematicas.division(10, 0), "\n");
