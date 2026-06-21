import React from 'react';

export default function XSS() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Hallazgo 02: Cross-Site Scripting Reflejado (XSS)</h2>
      <div style={{ margin: '20px 0' }}>
        <h3>Evidencia del Ataque</h3>
        <img 
          src="/img/xss_covcam.png" 
          alt="XSS Reflejado" 
          style={{ maxWidth: '100%', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
      </div>
      <h3>Análisis Técnico</h3>
      <p>
        La aplicación web refleja de manera directa los parámetros suministrados por el usuario en las respuestas HTML 
        sin realizar codificación de salida, forzando la ejecución de scripts maliciosos en el navegador.
      </p>
      <h3>Impacto en la Municipalidad de Cerro Verde</h3>
      <p>
        Un atacante podría robar tokens o cookies de sesión activos de los funcionarios municipales encargados de la 
        aprobación de permisos, permitiendo suplantar su identidad para aprobar patentes falsas o alterar multas.
      </p>
      <blockquote style={{ background: '#f9f9f9', padding: '10px', borderLeft: '5px solid #ff9900' }}>
        <strong>Gravedad CVSS 3.1:</strong> 6.1 (Medium) <br />
        <strong>Vector:</strong> CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N
      </blockquote>
    </div>
  );
}