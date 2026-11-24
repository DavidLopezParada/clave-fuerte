import { ValidacionClave } from "./model";


export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (clave.toUpperCase() === clave || clave.toLowerCase() === clave) {
    return {
      esValida: false,
      error: "La clave debe de tener mayusculas y minusculas",
    };
  }

  return { esValida: true };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  for(let i = clave.length - 1; i >= 0; i--){
    if (!isNaN(parseInt(clave[i])))
      return { esValida: true }

  }return { 
      esValida: false,
      error: "La clave debe de tener numeros",
   }

};

export  const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteresEspeciales = "@#+_!$%&*-.,;:?";

  for(let i = clave.length - 1; i >= 0; i--){
    if (caracteresEspeciales.includes(clave[i]))
      return { esValida: true }
  } return {
    esValida: false, 
    error: "La clave debe de tener caracteres especiales"
  }

};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length < 8) {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud minima de 8 caracteres",
    };
  }

  return { esValida: true };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const claveMinusculas = clave.toLowerCase();
  const usuarioMinusculas = nombreUsuario.toLowerCase();

  if (usuarioMinusculas !== "" && claveMinusculas.includes(usuarioMinusculas)) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  }

  return { esValida: true };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const claveMinusculas = clave.toLowerCase();

  for (let i = 0; i < commonPasswords.length; i++) {
    if (claveMinusculas.includes(commonPasswords[i])) {
      return {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      };
    }
  }

  return { esValida: true };
};