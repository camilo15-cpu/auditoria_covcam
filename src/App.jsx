import React, { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Activos from './components/Activos';
import MatrizRiesgo from './components/MatrizRiesgo';
import Controles from './components/Controles';
import Recuperacion from './components/Recuperacion';
import Prompts from './components/Prompts';

export default function App() {
  const [seccion, setSeccion] = useState('resumen');

  const botonStyle = (actual) => ({
    padding: '10px 15px',
    cursor: 'pointer',
    backgroundColor: seccion === actual ? '#007bff' : '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '13px'
  });

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '5px' }}>
        Portal de Auditoría Interna - Municipalidad de Cerro Verde
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginTop: '0', marginBottom: '20px' }}>
        Desarrollado por Analista Programador INACAP
      </p>
      
      {/* Menú de Navegación Completo */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '25px', flexWrap: 'wrap' }}>
        <button onClick={() => setSeccion('resumen')} style={botonStyle('resumen')}>Resumen</button>
        <button onClick={() => setSeccion('sql')} style={botonStyle('sql')}>Inyección SQL</button>
        <button onClick={() => setSeccion('xss')} style={botonStyle('xss')}>XSS Reflejado</button>
        <button onClick={() => setSeccion('comandos')} style={botonStyle('comandos')}>Inyección Comandos</button>
        <button onClick={() => setSeccion('activos')} style={botonStyle('activos')}>05. Activos</button>
        <button onClick={() => setSeccion('matriz')} style={botonStyle('matriz')}>06. Matriz de Riesgo</button>
        <button onClick={() => setSeccion('controles')} style={botonStyle('controles')}>07. Controles</button>
        <button onClick={() => setSeccion('recuperacion')} style={botonStyle('recuperacion')}>08. Recuperación</button>
        <button onClick={() => setSeccion('prompts')} style={botonStyle('prompts')}>09. Prompts</button>
      </div>

      {/* Contenedor del Render Dinámico */}
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', backgroundColor: '#fff', minHeight: '300px' }}>
        {seccion === 'resumen' && <Resumen />}
        {seccion === 'sql' && <InyeccionSQL />}
        {seccion === 'xss' && <XSS />}
        {seccion === 'comandos' && <Comandos />}
        {seccion === 'activos' && <Activos />}
        {seccion === 'matriz' && <MatrizRiesgo />}
        {seccion === 'controles' && <Controles />}
        {seccion === 'recuperacion' && <Recuperacion />}
        {seccion === 'prompts' && <Prompts />}
      </div>
    </div>
  );
}