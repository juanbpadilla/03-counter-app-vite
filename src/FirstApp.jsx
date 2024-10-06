
import PropTypes from 'prop-types';

// export const FirstApp = ({ title, subTitle, name }) => {
export const FirstApp = ({ title= 'Default title', subTitle = 'Default Subtitle', name = 'Default Name' }) => {

  // console.log(props)

  return (
    <>
      {/* Se puede utilizar la propiedad data-testid para establecer un id
          ..a un elemento, esto es útil para realizar pruebas con Jest y Testing Library */}
      <h1 data-testid='test-title'> { title } </h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */ }
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

{/**
 * Los PropTypes son una forma de documentar los componentes, no son obligatorios
 * .. pero son una buena práctica para saber qué tipo de datos se esperan
 * .. y qué valores se deben pasar a un componente
 * Se pueden establecer los tipos de datos que se esperan en las props
 * .. de un componente, para ello se utiliza la propiedad propTypes
 * .. de la función del componente
 * .. Se importa PropTypes de 'prop-types'
 * .. Se establece el tipo de dato que se espera en cada propiedad
 * 
 * ⚠️ Se recomienda poner los PropTypes al final del archivo
 */}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string
}

// .defaultProps Actualmente deprecated, se recomienda establecer 
// ..los valores por defecto en la función
// ..FirstApp = ({ title = 'No hay t..', subTitle = 'No hay subt..', name = 'Juan Pe..' }) => {
// FirstApp.defaultProps = {
//   title: 'No hay título',
//   subTitle: 'No hay subtítulo',
//   name: 'Juan Perez'
// }