import { ValidacionClave } from "./model";
import { validarClave } from "./clave";

describe("validarClave", () => {
  const passwordsComunes = ["password", "admin", "1234"];

  it("deberia devolver que es valida si cumple todas las condiciones", () => {
    //arrange
    const nombreUsuario = "david";
    const clave = "Galicia2026!";

    //act
    const result = validarClave(nombreUsuario, clave, passwordsComunes);

    //assert
    const expected: ValidacionClave = { esValida: true };
    expect(result).toEqual(expected);
  });

  it("deberia devolver el primer error que encuentre", () => {
    //arrange
    const nombreUsuario = "david";
    const clave = "galicia";

    //act
    const result = validarClave(nombreUsuario, clave, passwordsComunes);

    //assert
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener mayusculas y minusculas",
    };
    expect(result).toEqual(expected);
  });

  it("deberia devolver error si la clave contiene el nombre del usuario", () => {
    //arrange
    const nombreUsuario = "david";
    const clave = "David2026!";

    //act
    const result = validarClave(nombreUsuario, clave, passwordsComunes);

    //assert
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    expect(result).toEqual(expected);
  });

  it("deberia devolver error si la clave contiene una palabra comun", () => {
    //arrange
    const nombreUsuario = "david";
    const clave = "Admin2026!";

    //act
    const result = validarClave(nombreUsuario, clave, passwordsComunes);

    //assert
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
    expect(result).toEqual(expected);
  });
});