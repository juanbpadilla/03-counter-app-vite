import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {


  /**
   * ⚠️
   * Por ahora no necesitamos hacer match con el snapshot
   * ..ya nuestro componente no tiene contenido estático
   * ⚠️
   */
  // test('debe de hacer match con el snapshot', () => {

  //   const title = 'Hola, soy Goku';

  //   /**
  //    * La función render() recibe un componente de React como argumento y lo renderiza
  //    * La función render() retorna un objeto con propiedades que permiten interactuar
  //    * ..con el componente renderizado y sus elementos hijos (si los tiene)
  //    * 
  //    * En container se almacena el nodo raíz del componente renderizado
  //    */
  //   const { container } = render( <FirstApp title={ title } /> );

  //   /**
  //    * ⚠️ IMPORTANTE ⚠️
  //    * La función toMatchSnapshot() evalua si el valor pasado como argumento
  //    * ..coincide con el snapshot previamente guardado 
  //    * Si no existe un snapshot previo, la función crea uno nuevo
  //    * ..se crea una carpeta __snapshots__ en la carpeta de las pruebas
  //    * ..con un archivo que contiene el snapshot del componente renderizado
  //    * ..y el test falla
  //    */
  //   expect( container ).toMatchSnapshot();

  // });
  /**
   * ⚠️ IMPORTANTE ⚠️
   * Cuando el snapshot no coincide con el componente renderizado
   * ..se muestra un mensaje en la terminal con la diferencia
   * ..entre el snapshot y el componente renderizado
   * ..y se muestra un mensaje con la opción de actualizar el snapshot
   * ..con el comando u en la terminal se actualiza el snapshot
   * ..y se ejecutan las pruebas nuevamente
   * ..y se crea un nuevo snapshot con el componente renderizado actual
  */ 

  /**
   * Prueba para evaluar si el componente renderizado
   * ..contiene un título en un h1
   * La prueba evalua si el título se muestra en un h1
   * La prueba es menos estricta, ya que evalua si el título
   * ..se encuentra contenido en el h1, sin importar si hay espacios
   * ..en blanco u otros caracteres alrededor del título
   */
  test('debe de mostrar el título en un h1', () => {

    const title = 'Hola soy Goku';
    // eslint-disable-next-line no-unused-vars
    const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );

    /**
     * La función getByText() busca un elemento por su contenido de texto
     * Si el elemento no existe, la función getByText() arroja un error
     * 
     expect( getByText(title) )
     *
     *
     * toBeTruthy() evalua si el valor pasado como argumento es verdadero
     * Si el valor es verdadero, la prueba pasa
     * toBeTruthy() complementa a getByText(), si getByText() arroja un error
     * ..toBeTruthy() no se ejecuta, si getByText() no arroja un error
     * ..toBeTruthy() evalua si el valor es verdadero y la prueba pasa
     */
    expect( getByText(title) ).toBeTruthy();
    // 🚫 Hasta aquí todavía no estamos haciendo lo q pide el test

    /**
     * Con querySelector() se busca un elemento por su selector
     * ..en este caso se busca un elemento h1 en el contenedor
     * Si el elemento no existe, querySelector() retorna null
     * const h1 = container.querySelector('h1');
     * 
     * aquí con innerHTML estamos obteniendo el contenido del h1
     expect( h1.innerHTML )
     * 
     * Si el contenido del h1 es igual al título, la prueba pasa
     expect( h1.innerHTML ).toBe( title );
     * ⚠️ esta prueba es muy estricta, si el h1 tiene un espacios en blanco
     * ..u otros caracteres alrededor del título, la prueba falla
     *
     expect( h1.innerHTML ).toContain( title );
     * ✅ esta prueba es menos estricta, ya que evalua si el título
     * ..se encuentra contenido en el h1, sin importar si hay espacios
     * ..en blanco u otros caracteres alrededor del título
    */
   
    /**
     * Esta prueba solo evalua si el elemento con el atributo data-testid='test-title'
     * ..existe en el contenedor
     expect( getByTestId('test-title') ).toBeTruthy()

     * 
     * En cambio, esta prueba evalua si el contenido del elemento con el atributo
     * ..data-testid='test-title' es igual al título pasado como argumento
     * ..al componente <FirstApp />, lo que es más específico
     * usamos toContain() en lugar de toBe() para que la prueba sea menos estricta
     * ..y no falle si hay espacios en blanco u otros caracteres alrededor del título
     */
     expect( getByTestId('test-title').innerHTML ).toContain( title );

  });

  test('debe de mostrar el subtítulo enviado por props', () => {

    const title = 'Hola soy Goku';
    const subTitle = 'Soy un subtítulo';
    const { getAllByText } = render(
      <FirstApp 
        title={ title }
        subTitle={ subTitle }
      /> 
    );

    /**
     * La función getAllByText() busca todos los elementos que contienen
     * ..el subtítulo en el contenedor renderizado
     * Y los almacena en un array que se puede evaluar con expect()
     * con el .length se evalua la cantidad de elementos encontrados
     * Si el subtítulo se muestra dos veces, el array tendrá dos elementos
     * ..y la prueba pasará
     */
    expect( getAllByText(subTitle).length ).toBe(2);

  });

});
