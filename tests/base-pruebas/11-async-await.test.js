import { getImagen } from "../../src/base-pruebas/11-async-await";


describe('Pruebas en 11-async-await.js', () => {

  test('getImagen debe de retornar un URL de la imagen', async () => {

    // const url = await getImagen();
    const resp = await getImagen();

    // 🚫 este test evaluara que el tipo de dato de url sea un string
    // ...pero como la respuesta siempre sera un string, no tiene sentido
    // expect( typeof url ).toBe( 'string' );

    // ✅ este test evaluara que la respuesta no sea igual a 'No se encontró la imagen'
    // ...que es lo que retorna la funcion getImagen en caso de error
    // ...asi que si la respuesta es diferente a 'No se encontró la imagen'
    // ...significa que la respuesta es un URL de una imagen
    expect( resp ).not.toBe('No se encontró la imagen');

  });

});