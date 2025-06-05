const {resta} = require('./resta');


describe('PRUEBAS EXHAUSTIVAS DE RESTA', () => {
  // Prueba normal
  test('Resta de 2 menos 5 debe ser -3', () => {
    expect(resta(2, 5)).toBe(-3);
  });

  // Prueba con decimales
  test('Resta de 1.1 menos 5.5 debe ser -4.4', () => {
    expect(resta(1.1, 5.5)).toBeCloseTo(-4.4);
  });

  // Prueba de frontera (0)
  test('Resta de 0 menos 5 debe ser -5', () => {
    expect(resta(0, 5)).toBe(-5);
  });

  // Prueba de frontera (números mayores)
  test('Número máximo menos número máximo debe ser 0', () => {
    expect(resta(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(0);
  });

  // Prueba fuera de frontera
  test('Número máximo menos número pequeño debe ser un valor muy grande', () => {
    const result = resta(Number.MAX_VALUE, 0.0001);
    expect(result).toBe(Number.MAX_VALUE);
  });

  // Prueba con undefined
  test('undefined menos 5 debe devolver NaN', () => {
    expect(resta(undefined, 5)).toBeNaN();
  });

  // Prueba sin argumentos
  test('Llamada sin argumentos debe devolver NaN', () => {
    expect(resta()).toBeNaN();
  });

  // Prueba con null
  test('null menos 2 debe devolver -2 (null se convierte a 0)', () => {
    expect(resta(null, 2)).toBe(-2);
  });

  // Prueba con cadenas (coerción de tipos)
  test('"10" menos "2" debe devolver 8 (coerción a número)', () => {
    expect(resta('10', '2')).toBe(8);
  });

  // Prueba con 0 negativo
  test('0 menos 5 debe ser -5', () => {
    expect(resta(0, 5)).toBe(-5);
  });

  // Prueba con negativos
  test('-8 menos -2 debe ser -6', () => {
    expect(resta(-8, -2)).toBe(-6);
  });
});