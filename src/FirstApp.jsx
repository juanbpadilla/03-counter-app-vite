
const getMessage = (message) => `Hola, ${message}`

export const FirstApp = () => {

  return (
    <>
      <h1>{ getMessage('Juan') }</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */ }
      <p>Soy un parrafo</p>
    </>
  )
}
