import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

  test('getUser debe retornar un objeto', () => {

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    // ☢️ IMPORTANTE ☢️
    // Cuando se comparan objetos se debe usar
    // toEqual o toStrictEqual en lugar de toBe
    // toBe compara referencias de memoria
    // toEqual compara los valores de las propiedades
    expect(testUser).toEqual(user);

  });

  test('getUsuarioActivo debe de retornar un objeto', () => {

    const name = 'Juan';

    const user = getUsuarioActivo(name);

    // 🔰toStrictEqual es lo mismo que toEqual
    // pero más estricto en cuanto a tipos de datos
    // es decir, si se espera un string y se recibe un número
    // la prueba fallará con toStrictEqual pero no con toEqual
    expect(user).toStrictEqual({
      uid: 'ABC567',
      username: name
    });

  });

});