function operacionAsincrona(callback) {
    setTimeout(() => {
        callback("Operación completada");
    }, 2000);
}

console.log("Ejercicio 10: Operación asíncrona iniciada...");

operacionAsincrona((mensaje) => {
    console.log(mensaje);
});
