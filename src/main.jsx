// Importa React y ReactDOM para renderizar la aplicación
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importa el componente principal de tu aplicación
import App from './App.jsx';
// Importa los estilos CSS globales, si tienes alguno (en este caso, App.css)
import './App.css';

// Crea un cliente de raíz de React y renderiza el componente App dentro del elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
