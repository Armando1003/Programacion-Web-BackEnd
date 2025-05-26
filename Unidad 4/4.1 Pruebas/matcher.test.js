const {
  suma,
  sumaExacta,
  obtenerUsuario,
  obtenerValor,
  obtenerFrase,
  obtenerFrutas,
  obtenerColor,
  promesaExitosa,
  promesaFallida
} = require('./funciones.js');

//Test
test('suma 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

// a. toBe
test('10 + 10 debe ser igual a 20', () => {
  expect(sumaExacta()).toBe(20);
});

// b. toEqual
test('Objetos deben ser iguales', () => {
  expect(obtenerUsuario()).toEqual({ nombre: 'Ana', edad: 25 });
});

// c. null, undefined, defined
test('Debe ser null', () => {
  expect(obtenerValor('nulo')).toBeNull();
});
test('Debe ser undefined', () => {
  expect(obtenerValor('indefinido')).toBeUndefined();
});
test('Debe estar definido', () => {
  expect(obtenerValor('otro')).toBeDefined();
});

// d. comparaciones numéricas
test('25 es mayor que 10', () => {
  expect(25).toBeGreaterThan(10);
});
test('5 es menor que 10', () => {
  expect(5).toBeLessThan(10);
});
test('10 es mayor o igual a 10', () => {
  expect(10).toBeGreaterThanOrEqual(10);
});

// e. coincidencia de cadenas
test('Contiene "Jest"', () => {
  expect(obtenerFrase()).toMatch(/Jest/);
});

// f. Arrays
test('Contiene "pera"', () => {
  expect(obtenerFrutas()).toContain('pera');
});

// g. Negación
test('Color no es azul', () => {
  expect(obtenerColor()).not.toBe('azul');
});

// h. Promesas
test('Promesa se resuelve', async () => {
  await expect(promesaExitosa()).resolves.toBe('éxito');
});
test('Promesa se rechaza', async () => {
  await expect(promesaFallida()).rejects.toBe('error');
});
