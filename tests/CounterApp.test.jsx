import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {

  const initialValue = 10;

  test('debe de hacer match con el snapshot', () => {

    const { container } = render( <CounterApp value={initialValue} /> );
    expect( container ).toMatchSnapshot();

  });

  test('debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {

    render( <CounterApp value={ 100 } /> );
    expect( screen.getByText(100) ).toBeTruthy();

  });

  test('debe de incrementar con el botón +1', () => {

    /**
     * 1. Renderizar el componente
     * 
     * 2. Simular el click del botón +1
     *   fireEvent.click( button ) es una función que simula un click en un elemento
     *   screen.getByText('+1') retorna el elemento que tiene el texto '+1' (en este caso el botón)
     *   entonces fireEvent.click( screen.getByText('+1') ) simula un click en el botón +1
     * 
     * 3. Evaluar que el valor sea 11
     * el valor inicial es 10, se incrementa en 1, entonces el valor final es 11
     * para evaluar que el valor sea 11, se puede usar screen.getByText('11')
     * ..que retorna el elemento si existe
     */
    render( <CounterApp value={ initialValue } /> );
    fireEvent.click( screen.getByText('+1') );
    expect( screen.getByText('11') ).toBeTruthy();
    
  });

  test('debe de decrementar con el botón -1', () => {
    
    render( <CounterApp value={ initialValue } /> );
    fireEvent.click( screen.getByText('-1') );
    expect( screen.getByText('9') ).toBeTruthy();

  });

  test('debe de funcionar el botón de reset', () => {

    render( <CounterApp value={ 355 } /> );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );

    /**
     * screen.debug() muestra el contenido del documento en la consola 
     * ..en el momento de la llamada, es útil para depurar las pruebas
     * 
     * fireEvent.click( screen.getByText('Reset') );
     * screen.getByRole('button', { name: 'btn-reset' });
     * 
     * podemos buscar el botón por su rol y nombre con 
     * ..screen.getByRole('button', { name: 'btn-reset' })
     * ..esto busca un elemento button con el atributo name igual a 'btn-reset'
     * ..q es el valor del atributo aria-label del botón Reset
     * esto es útil cuando el texto del botón no es accesible o no queremos depender de él
     */
    fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );

    expect( screen.getByText( 355 ) ).toBeTruthy();
    
  });

});