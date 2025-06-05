function validarContraseña(password) {
  // Validación del tipo de dato
  if (typeof password !== 'string') return false;

  // Verificar longitud mínima (8 caracteres)
  if (password.length < 8) return false;

  // No debe contener espacios
  if (password.includes(' ')) return false;

  // Debe tener al menos:
  // - Una letra mayúscula
  const hasUpper = /[A-Z]/.test(password);
  
  // - Una letra minúscula
  const hasLower = /[a-z]/.test(password);

  // - Un número
  const hasDigit = /[0-9]/.test(password);

  // - Un carácter especial
  const hasSpecial = /[!@#$%^&*()]/.test(password);

  // Palabras significativas
  const meaningfulWords = ['Playa', 'Bogota', 'Juan', 'Perro', 'Gato', '2025'];

  // Verifica si alguna palabra significativa está dentro de la contraseña
  const includesMeaningful = meaningfulWords.some(word => password.includes(word));

  //Todas las condiciones deben cumplirse para considerar la contraseña válida
  return hasUpper && hasLower && hasDigit && hasSpecial && includesMeaningful;
}

module.exports = validarContraseña;