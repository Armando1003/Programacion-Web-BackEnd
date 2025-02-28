// Funciones matemáticas básicas
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por 0.";
    }
    return a / b;
}

// Exportar
module.exports = {
    suma,
    resta,
    multiplicacion,
    division
};
