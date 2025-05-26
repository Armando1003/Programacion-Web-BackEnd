//Función suma
function suma(a, b) {
    return a + b;
}

//Suma exacta de 10 + 10
function sumaExacta() {
  return 10 + 10;
}

//Función que retorna un objeto 
function obtenerUsuario() {
  return { nombre: 'Ana', edad: 25 };
}

//Función que retorna distintos valores 
function obtenerValor(tipo) {
  if (tipo === 'nulo') return null;
  if (tipo === 'indefinido') return undefined;
  return 'valor definido';
}

//Retornar una frase de ejemplo que contiene la palabra "Jest"
function obtenerFrase() {
  return 'Aprender testing con Jest es útil';
}

//Array con frutas
function obtenerFrutas() {
  return ['manzana', 'pera', 'naranja'];
}

//Retornar el nombre de un color
function obtenerColor() {
  return 'rojo';
}

//Promesa resuelta exitosamente
function promesaExitosa() {
  return Promise.resolve('éxito');
}

//Promesa rechazada con un error
function promesaFallida() {
  return Promise.reject('error');
}

// Exportar todas las funciones 
module.exports = {
  suma,
  sumaExacta,
  obtenerUsuario,
  obtenerValor,
  obtenerFrase,
  obtenerFrutas,
  obtenerColor,
  promesaExitosa,
  promesaFallida
};
