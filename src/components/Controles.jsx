import React from 'react';

export default function Controles() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>07. Implementación de Controles de Seguridad (Mitigación)</h2>
      <p>Controles técnicos asignados para reducir el riesgo en la Municipalidad de Cerro Verde:</p>
      <ul>
        <li style={{ margin: '15px 0' }}>
          <strong>Control SQLi (Inyección SQL):</strong> Implementación obligatoria de Consultas Parametrizadas (Prepared Statements) con asignación estricta de tipos de datos en el backend, impidiendo que las entradas alteren las consultas lógicas.
        </li>
        <li style={{ margin: '15px 0' }}>
          <strong>Control XSS (Cross-Site Scripting):</strong> Aplicación de codificación contextual en todas las salidas HTML (Output Encoding) y configuración de cookies de sesión con las directivas <code>HttpOnly</code> y <code>Secure</code>.
        </li>
        <li style={{ margin: '15px 0' }}>
          <strong>Control Command Injection (Inyección de Comandos):</strong> Evitar llamadas directas a funciones del sistema operativo desde la interfaz. Emplear validaciones estrictas mediante listas blancas de caracteres permitidos.
        </li>
      </ul>
    </div>
  );
}