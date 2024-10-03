
// describe() es una función que recibe dos argumentos: una cadena y una función
// La cadena es el nombre de la suite de pruebas y la función es el bloque de pruebas
// describe() es una función que agrupa pruebas relacionadas
// describe() puede contener otras funciones describe() y funciones test()
describe('Pruebas en <DemoComponent />', () => {

  // test() es una función que recibe dos argumentos: una cadena y una función
  // La cadena es el nombre de la prueba y la función es el bloque de código de la prueba
  // test() es una función que realiza una prueba
  test('Esta prueba no debe de fallar', () => {


    // 1. inicialiación (preparación)
    const message1 = 'Hola Mundo'

    // 2. estímulo (acción)
    // trim() elimina los espacios en blanco al inicio y al final de un string
    const message2 = message1.trim()

    // 3. Observar el comportamiento... esperado (verificación)
    // expect() es una función que recibe un valor y se le puede aplicar un matcher
    // toBe() es un matcher que compara si el valor recibido es igual al valor esperado
    // Si el valor recibido es igual al valor esperado, la prueba pasa
    expect(message1).toBe(message2)

  })

})
