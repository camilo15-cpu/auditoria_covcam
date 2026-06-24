import React from 'react';

export default function MatrizRiesgo() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>06. Matriz de Riesgo - Evaluación de Amenazas</h2>
      <p>Análisis de riesgos basado en las vulnerabilidades explotadas mediante las técnicas del laboratorio:</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2', borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '10px' }}>Activo Afectado</th>
            <th style={{ padding: '10px' }}>Amenaza Identificada</th>
            <th style={{ padding: '10px' }}>Probabilidad</th>
            <th style={{ padding: '10px' }}>Impacto</th>
            <th style={{ padding: '10px' }}>Riesgo Inicial</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px', fontWeight: 'bold' }}>BD-VECINOS</td>
            <td style={{ padding: '10px' }}>Extracción masiva de datos mediante Inyección SQL</td>
            <td style={{ padding: '10px' }}>Alta</td>
            <td style={{ padding: '10px' }}>Alto</td>
            <td style={{ padding: '10px', color: '#cc0000', fontWeight: 'bold' }}>Crítico</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px', fontWeight: 'bold' }}>SYS-RECAUDA</td>
            <td style={{ padding: '10px' }}>Suplantación de identidad funcionaria mediante XSS Reflejado</td>
            <td style={{ padding: '10px' }}>Media</td>
            <td style={{ padding: '10px' }}>Alto</td>
            <td style={{ padding: '10px', color: '#ff9900', fontWeight: 'bold' }}>Alto</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px', fontWeight: 'bold' }}>SERV-WEB</td>
            <td style={{ padding: '10px' }}>Secuestro de servidor o Ransomware vía Inyección de Comandos</td>
            <td style={{ padding: '10px' }}>Alta</td>
            <td style={{ padding: '10px' }}>Crítico</td>
            <td style={{ padding: '10px', color: '#990000', fontWeight: 'bold' }}>Crítico</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}