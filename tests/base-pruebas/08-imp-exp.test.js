import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {

  test('getHeroeById debe retornar un héroe por ID', () => {

    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

  });

  test('getHeroeById debe retornar undefined si no existe', () => {

    const id = 100;
    const hero = getHeroeById(id);

    // ☢️ IMPORTANTE ☢️
    // toBeUndefined es una función de jest
    // que permite validar si un valor es undefined
    // es decir, si no tiene valor asignado
    //  pero no es lo mismo que toBeFalsy
    // expect(hero).toBe(undefined);

    // toBeFalsy es una función de jest
    // que permite validar si un valor es falsy
    // es decir, si no tiene valor asignado
    // la diferencia con toBeUndefined es que
    // toBeFalsy también valida si el valor es null, 0, NaN, ''
    expect(hero).toBeFalsy();

  });

  // Tarea
  // Debe de retornar un arreglo con los héroes de DC
  // length === 3
  // toEqual al arreglo filtrado
  test('getHeroesByOwner debe retornar los héroes de DC', () => {

    const owner = 'DC';

    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(3);

    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);
    // Otra forma de hacerlo es pasandole la funcion 
    // en la que se filtra el arreglo de heroes
    // en lugar de pasar el arreglo ya filtrado
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));

  });

  // debe retornar un arreglo con los héroes de Marvel
  // length === 2
  test('getHeroesByOwner debe retornar los héroes de Marvel', () => {

    const owner = 'Marvel';

    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(2);
  });


});