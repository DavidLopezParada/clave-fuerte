import {tieneMayusculasYMinusculas, tieneNumeros, tieneCaracteresEspeciales, tieneLongitudMinima, tieneNombreUsuario, tienePalabrasComunes} from "./clave.helpers"
import { ValidacionClave } from "./model";

describe("tieneMayusculasYMinusculas", () => {
  it("deberia devolver error si la clave solo tiene minusculas", () => {
    //arrange
    const clave = "password";

    //act
    const result = tieneMayusculasYMinusculas(clave);

    //assert
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener mayusculas y minusculas",
    };
    expect(result).toEqual(expected);
  });

  it("deberia devolver error si la clave solo tiene mayusculas", () => {
    //arrange
    const clave = "PASSSWORD";

    //act
    const result = tieneMayusculasYMinusculas(clave);

    //assert
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener mayusculas y minusculas",
    };
    expect(result).toEqual(expected);
  });

  it("no deberia devolver error si la clave tiene minusculas y mayusculas", () => {
    //arrange
    const clave = "Password";

    //act
    const result = tieneMayusculasYMinusculas(clave);

    //assert
    const expected: ValidacionClave = {
      esValida: true,
    };
    expect(result).toEqual(expected);
  });
});


describe("tieneNumeros", () => {
    it("deberia devolver error si la clave no tiene numeros", () => {
    //arrange
    const clave = "password";

    //act
    const result = tieneNumeros(clave);

    //assert
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener numeros",
    };
    expect(result).toEqual(expected);
  });

    it("no deberia devolver error si la clave tiene numeros", () => {
    //arrange
    const clave = "password123";

    //act
    const result = tieneNumeros(clave);

    //assert
    const expected: ValidacionClave = {
      esValida: true,
    };
    expect(result).toEqual(expected);
  });

});

describe("tieneCaracteresEspeciales", () => {
    it("deberia devolver error si la clave no tiene caracteres espciales", () => {
    //arrange
    const clave = "password123";

    //act
    const result = tieneCaracteresEspeciales(clave);

    //assert
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
    expect(result).toEqual(expected);
    });

    it("no deberia devolver error si la clave tiene caracteres espciales", () => {
    //arrange
    const clave = "password123!";

    //act
    const result = tieneCaracteresEspeciales(clave);

    //assert
    const expected: ValidacionClave = {
      esValida: true,
    };
    expect(result).toEqual(expected);
    })
})


describe("tieneLongitudMinima", () => {
  it("deberia devolver error si la clave tiene menos de 8 caracteres", () => {
    //arrange
    const clave = "Pa1!";

    //act
    const result = tieneLongitudMinima(clave);

    //assert
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave debe de tener una longitud minima de 8 caracteres",
    };
    expect(result).toEqual(expected);
  });

  it("no deberia devolver error si la clave tiene 8 caracteres", () => {
    //arrange
    const clave = "Abcdef1!";

    //act
    const result = tieneLongitudMinima(clave);

    //assert
    const expected: ValidacionClave = { esValida: true };
    expect(result).toEqual(expected);
  });
});

describe("tieneNombreUsuario", () => {
  it("deberia devolver error si la clave contiene el nombre del usuario", () => {
    //arrange
    const nombreUsuario = "david";
    const clave = "MiClaveDavid1!";

    //act
    const result = tieneNombreUsuario(nombreUsuario, clave);

    //assert
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    expect(result).toEqual(expected);
  });

  it("no deberia devolver error si la clave no contiene el nombre del usuario", () => {
    //arrange
    const nombreUsuario = "david";
    const clave = "Galicia2026!";

    //act
    const result = tieneNombreUsuario(nombreUsuario, clave);

    //assert
    const expected: ValidacionClave = { esValida: true };
    expect(result).toEqual(expected);
  });
});

describe("tienePalabrasComunes", () => {
  it("deberia devolver error si la clave contiene una palabra comun", () => {
    //arrange
    const clave = "MiAdmin2026!";
    const commonPasswords = ["password", "admin"];

    //act
    const result = tienePalabrasComunes(clave, commonPasswords);

    //assert
    const expected: ValidacionClave = {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
    expect(result).toEqual(expected);
  });

  it("no deberia devolver error si la clave no contiene palabras comunes", () => {
    //arrange
    const clave = "Galicia2026!";
    const commonPasswords = ["password", "admin"];

    //act
    const result = tienePalabrasComunes(clave, commonPasswords);

    //assert
    const expected: ValidacionClave = { esValida: true };
    expect(result).toEqual(expected);
  });
});