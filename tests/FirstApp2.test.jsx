import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

  const title = 'Hola, soy Goku';
  const subTitle = 'Soy un subtítulo';

  test('debe de hacer match con el snapshot', () => {

    const { container } = render( <FirstApp title={ title } /> );
    expect( container ).toMatchSnapshot();

  });

  test('debe mostrar el mensaje "Hola, soy Goku"', () => {

    render( <FirstApp title={ title } /> );
    expect( screen.getByText(title) ).toBeTruthy();
    // screen.debug();

  });

  test('debe de mostrar el título en un h1', () => {

    /**
     * La función render() recibe el componente <FirstApp title.. y lo renderiza
     * screen.getByRole() busca un elemento por su rol en el documento
     * screen.getByRole('heading') busca un elemento que sea un encabezado
     * { level: 1 } busca un encabezado de nivel 1 (h1)
     * 
     * screen.getByRole('heading', { level: 1 }) busca un elemento h1 en el documento
     * ..y retorna el primer elemento h1 que encuentre
     * 
     * .innerHTML retorna el contenido HTML del elemento
     * screen.getByRole('heading', { level: 1 }).innerHTML retorna el contenido del h1
     * ..en este caso el título que se pasa como argumento al componente <FirstApp />
     * 
     * Si el contenido del h1 es igual al título, la prueba pasa
     */
    render( <FirstApp title={ title } /> );
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );

  });

  test('debe de mostrar el subtítulo enviado por props', () => {

    render(
      <FirstApp 
        title={ title }
        subTitle={ subTitle }
      /> 
    );

    expect( screen.getAllByText(subTitle).length ).toBe(2);

  });
  

});
