import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

  test('debe de retornar un string y un número', () => {

    const [letters, numbers] = retornaArreglo();

    // expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    // ☢️ IMPORTANTE ☢️
    // typeof es un operador de JS que devuelve
    // el tipo de dato de una variable en forma de string
    // en este caso, letters devuelve 'string' y numbers devuelve 'number'
    // por lo tanto, se espera que letters sea un string y numbers sea un número
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    // ☢️ IMPORTANTE ☢️
    // expect.any(String) es una función de jest
    // que permite validar que un valor sea de cierto tipo
    // en este caso, sin importar el valor que tenga,
    // letters pasa la validación porque es un string
    expect(letters).toEqual(expect.any(String));

  });

});