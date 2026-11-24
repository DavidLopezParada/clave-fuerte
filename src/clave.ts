import { ValidacionClave } from "./model";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./clave.helpers";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const mayusculasYMinusculas = tieneMayusculasYMinusculas(clave);
  if (!mayusculasYMinusculas.esValida) {
    return mayusculasYMinusculas;
  }

  const numeros = tieneNumeros(clave);
  if (!numeros.esValida) {
    return numeros;
  }

  const caracteresEspeciales = tieneCaracteresEspeciales(clave);
  if (!caracteresEspeciales.esValida) {
    return caracteresEspeciales;
  }

  const longitudMinima = tieneLongitudMinima(clave);
  if (!longitudMinima.esValida) {
    return longitudMinima;
  }

  const nombreUsuarioEnClave = tieneNombreUsuario(nombreUsuario, clave);
  if (!nombreUsuarioEnClave.esValida) {
    return nombreUsuarioEnClave;
  }

  const palabrasComunes = tienePalabrasComunes(clave, commonPasswords);
  if (!palabrasComunes.esValida) {
    return palabrasComunes;
  }

  return { esValida: true };
};