import { useState } from 'react'
import PropTypes from 'prop-types'


// Si la función no necesita acceder a las props, 
// se puede hacer fuera del componente:
//    const handleAdd = (event) => {
//      console.log(event)
//    }

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value)

  const handleAdd = () => {
    setCounter(counter + 1)
    // ↕️ tambien es válido ↕️ (c toma el valor anterior del counter)
    // setCounter((c) => c + 1)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      {/* <button onClick={ function (event) { console.log(event) } }> */ }
      {/* <button onClick={ (event) => handleAdd(event) }> */ }
      {/* Si (event) y handle(event) son iguales entonces podemos poner directamente: */ }
      <button onClick={ handleAdd }>
        {/* <button onClick={ (event) => handleAdd(event, 'hola') }> */ }
        +1
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}