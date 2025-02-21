console.log("Ejercicio 11: Manejo de errores");

try {
    let numero = Number("abc"); // Convertir un string inválido a número
    if (isNaN(numero)) {
        throw new Error("No se pudo convertir la cadena a número");
    }
    console.log("Número convertido:", numero);
} catch (error) {
    console.log("Error:", error.message);
}
