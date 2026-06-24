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

  // Estilos de los botones del menú lateral
  const botonStyle = (actual) => ({
    width: '100%',
    padding: '12px 16px',
    margin: '4px 0',
    cursor: 'pointer',
    backgroundColor: seccion === actual ? '#2563eb' : 'transparent',
    color: seccion === actual ? '#ffffff' : '#94a3b8',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '14px',
    textAlign: 'left',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center'
  });

  const etiquetaGrupo = {
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '15px 0 5px 8px'
  };

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', 
      backgroundColor: '#f8fafc',
      color: '#1e293b'
    }}>
      
      
      <div style={{ 
        width: '280px', 
        backgroundColor: '#0f172a', // Fondo oscuro pro
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #1e293b',
        boxShadow: '4px 0 10px rgba(0,0,0,0.05)'
      }}>
        {/* Encabezado del Sistema */}
        <div style={{ marginBottom: '30px', paddingLeft: '8px' }}>
          <h2 style={{ color: '#ffffff', fontSize: '18px', margin: '0 0 4px 0', fontWeight: '700' }}>
            SecurIT - Portal
          </h2>
          <div style={{ display: 'inline-block', backgroundColor: '#1e293b', padding: '4px 8px', borderRadius: '4px' }}>
            <span style={{ color: '#38bdf8', fontSize: '11px', fontWeight: 'bold' }}>
              MUNI CERRO VERDE
            </span>
          </div>
        </div>

        
        <div style={etiquetaGrupo}>Inicio</div>
        <button onClick={() => setSeccion('resumen')} style={botonStyle('resumen')}>
          📊 Resumen Ejecutivo
        </button>

        
        <div style={etiquetaGrupo}>Informe A: Hallazgos</div>
        <button onClick={() => setSeccion('sql')} style={botonStyle('sql')}>
          💉 Inyección SQL
        </button>
        <button onClick={() => setSeccion('xss')} style={botonStyle('xss')}>
          🎭 XSS Reflejado
        </button>
        <button onClick={() => setSeccion('comandos')} style={botonStyle('comandos')}>
          🐚 Inyección Comandos
        </button>

        
        <div style={etiquetaGrupo}>Informe B: Matriz Riesgo</div>
        <button onClick={() => setSeccion('activos')} style={botonStyle('activos')}>
          📦 05. Gestión Activos
        </button>
        <button onClick={() => setSeccion('matriz')} style={botonStyle('matriz')}>
          🧮 06. Matriz de Riesgo
        </button>
        <button onClick={() => setSeccion('controles')} style={botonStyle('controles')}>
          🛡️ 07. Controles Técnicos
        </button>
        <button onClick={() => setSeccion('recuperacion')} style={botonStyle('recuperacion')}>
          🔄 08. Plan Continuidad
        </button>
        <button onClick={() => setSeccion('prompts')} style={botonStyle('prompts')}>
          🤖 09. Prompts de IA
        </button>

        
        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #1e293b', paddingLeft: '8px' }}>
          <p style={{ color: '#64748b', fontSize: '11px', margin: 0 }}>Auditor Consultor:</p>
          <p style={{ color: '#cbd5e1', fontSize: '13px', margin: '2px 0 0 0', fontWeight: '600' }}>Camilo Covarrubias</p>
          <p style={{ color: '#475569', fontSize: '11px', margin: 0 }}>Analista Programador INACAP</p>
        </div>
      </div>

      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: '16px 40px', 
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '500', color: '#64748b' }}>
            Plataforma de Auditoría Interna de Seguridad Web
          </span>
          <span style={{ fontSize: '12px', padding: '4px 10px', backgroundColor: '#f1f5f9', borderRadius: '20px', color: '#475569', fontWeight: '500' }}>
            Estado: Clasificado / Confidencial
          </span>
        </div>

        
        <div style={{ padding: '40px', overflowY: 'auto', flex: 1 }}>
          <div style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '12px', 
            padding: '32px', 
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
            border: '1px solid #e2e8f0'
          }}>
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

      </div>

    </div>
  )
}