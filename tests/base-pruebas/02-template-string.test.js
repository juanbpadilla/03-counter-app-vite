import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => {

  test('getSaludo debe de retornar "Hola Juan"', () => {

    const name = 'Juan';
    const message = getSaludo(name);

    // El ; es importante para que no falle la prueba
    expect(message).toBe(`Hola ${name}`);

  });

});