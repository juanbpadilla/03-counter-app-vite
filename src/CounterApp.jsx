import { useState } from 'react'
import PropTypes from 'prop-types'


// Si la función no necesita acceder a las props, 
// se puede hacer fuera del componente:
//    const handleAdd = (event) => {
//      console.log(event)
//    }

export const CounterApp = ({ value }) => {

  /**
   * useState es un hook que permite añadir estado a un componente funcional
   * setCounter es una función que permite modificar el estado
   * Cuando cambia el estado, se vuelve a renderizar el componente completo(CounterApp)
   * console.log('render')
   */

  const [counter, setCounter] = useState(value)

  const handleAdd = () => {
    setCounter(counter + 1)
    // ↕️ tambien es válido ↕️ (c toma el valor anterior del counter)
    // setCounter((c) => c + 1)
  }

  const handleSubtract = () => setCounter(counter - 1)

  const handleReset = () => setCounter(value)

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSubtract }>-1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}