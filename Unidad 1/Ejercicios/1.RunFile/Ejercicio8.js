console.log("Ejercicio 8: Agregar un método al objeto y mostrar descripción\n");

const coche = require("./Ejercicio7.js"); // Importar objeto

// Metodo
coche.obtenerDescripcion = function() {
    return `Este coche es un ${this.marca} ${this.modelo} del año ${this.año} y es de color ${this.color}.`;
};

// Llamar al método e imprimir la descripción

console.log(coche.obtenerDescripcion(), "\n");
