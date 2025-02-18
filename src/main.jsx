import React from 'react'
import { createRoot } from 'react-dom/client';
// import { FirstApp } from './FirstApp';
// import FirstApp from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css'

// import { HelloWorldApp } from './HelloWorldApp';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title='Hola, soy Juan' /> */}
    <CounterApp value={ 100 } />
  </React.StrictMode>
)