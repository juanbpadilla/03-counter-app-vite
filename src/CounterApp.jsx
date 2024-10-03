import PropTypes from 'prop-types'


// Si la función no necesita acceder a las props, 
// se puede hacer fuera del componente:
//    const handleAdd = (event) => {
//      console.log(event)
//    }

export const CounterApp = ({ value }) => {

  // function handleAdd(event) { console.log(event) }
  // function handleAdd(event, newValue) {
  //   console.log(newValue)
  // }

  // Como función de flecha
  // const handleAdd = (event, newValue) => {
  //   console.log(newValue)
  // }
  const handleAdd = (event) => {
    console.log(event)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { value } </h2>

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