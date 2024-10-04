import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

  test('getHeroeByIdAsync debe de retornar un héroe', (done) => {

    const id = 1;

    // ☢️ IMPORTANTE ☢️
    // .then es una función que se encadena a una promesa
    // y recibe un callback que se ejecuta cuando la promesa se resuelve
    getHeroeByIdAsync(id)
      .then(hero => {

        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });

        // ☢️ IMPORTANTE ☢️
        // done es una función que se pasa como argumento a la función que recibe la prueba
        // en este caso, se pasa como argumento a la función que recibe la prueba
        // porque es una función asíncrona y se necesita decirle a jest que la prueba ha terminado
        // para que no se quede esperando indefinidamente
        done();
        // 🚫
        // done() debe estar dentro del .then  para que funcione
        // 🚫
      });

  });

  test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {

    const id = 100;

    getHeroeByIdAsync(id)
      .then(hero => {

        // ⚠️ IMPORTANTE ⚠️
        // En este caso, then estaría por demás
        // ya que realiza la misma función que catch

        // no se espera que el héroe exista
        // por lo que no se espera que la promesa se resuelva
        expect(hero).toBeFalsy();

        done();
      })
      .catch(error => {

        // se espera que la promesa se rechace
        // y que el error sea el esperado en este caso
        // que no se pudo encontrar el héroe con el id 100
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

        done();
      });

  });

});