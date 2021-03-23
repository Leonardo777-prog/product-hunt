export default function validarCrearCuenta(valores) {
  let errores = {};
  // validar nombre
  if (!valores.nombre) {
    errores.nombre = "Nombre es Obligatorio";
  }

  // validar email
  if (!valores.nombre) {
    errores.email = "El Email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Email no No valido";
  }

  // validar password
  if (!valores.password) {
    errores.password = "La contraseña es Obligatoria";
  } else if (valores.password.length < 6) {
    errores.password = "La contraseña debe ser de al menos 6 caracteres";
  }

  return errores;
}
