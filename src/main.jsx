import React from 'react'
import { createRoot } from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css'

// import { HelloWorldApp } from './HelloWorldApp';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title='Hola, soy Goku' subTitle={ 123 } />
  </React.StrictMode>
)