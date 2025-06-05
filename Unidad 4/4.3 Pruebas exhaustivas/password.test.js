const validarContraseña = require('./password');

// Caso normal: cumple con todos los requisitos.
test('Caso normal', () => {
  expect(validarContraseña('Playa2010@')).toBe(true);
});

// Menos de 8 caracteres: longitud insuficiente.
test('Menos de 8 caracteres', () => {
  expect(validarContraseña('A1b@')).toBe(false);
});

// Falta letra mayúscula.
test('Sin letra mayúscula', () => {
  expect(validarContraseña('playa2010@')).toBe(false);
});

// Falta letra minúscula.
test('Sin letra minúscula', () => {
  expect(validarContraseña('PLAYA2010@')).toBe(false);
});

// Falta número.
test('Sin número', () => {
  expect(validarContraseña('Playa@@@@')).toBe(false);
});

// Falta carácter especial.
test('Sin carácter especial', () => {
  expect(validarContraseña('Playa2010')).toBe(false);
});

// Contiene espacio (no permitido).
test('Contiene espacio', () => {
  expect(validarContraseña('Playa 2010@')).toBe(false);
});

// Contraseña vacía.
test('Contraseña vacía', () => {
  expect(validarContraseña('')).toBe(false);
});

// Coerción de tipo: número en vez de string.
test('Coerción de tipo: número en vez de string', () => {
  expect(validarContraseña(12345678)).toBe(false);
});

// Incluye palabra significativa definida por el usuario.
test('Palabra significativa incluida (ej. ciudad natal)', () => {
  expect(validarContraseña('Mexico2025@')).toBe(true);
});
