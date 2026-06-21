import React, { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';

export default function App() {
  const [seccion, setSeccion] = useState('resumen');

  const botonStyle = (actual) => ({
    padding: '10px 20px',
    marginRight: '10px',
    cursor: 'pointer',
    backgroundColor: seccion === actual ? '#007bff' : '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold'
  });

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Portal de Auditoría Interna - Municipalidad de Cerro Verde
      </h1>
      <p style={{ textAlign: 'center', color: '#666' }}>
        Desarrollado por Analista Programador INACAP
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button onClick={() => setSeccion('resumen')} style={botonStyle('resumen')}>Resumen</button>
        <button onClick={() => setSeccion('sql')} style={botonStyle('sql')}>Inyección SQL</button>
        <button onClick={() => setSeccion('xss')} style={botonStyle('xss')}>XSS Reflejado</button>
        <button onClick={() => setSeccion('comandos')} style={botonStyle('comandos')}>Inyección Comandos</button>
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        {seccion === 'resumen' && <Resumen />}
        {seccion === 'sql' && <InyeccionSQL />}
        {seccion === 'xss' && <XSS />}
        {seccion === 'comandos' && <Comandos />}
      </div>
    </div>
  );
}