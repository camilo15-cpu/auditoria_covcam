import React from 'react';

export default function Comandos() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Hallazgo 03: Inyección de Comandos (Command Injection)</h2>
      <div style={{ margin: '20px 0' }}>
        <h3>Evidencia del Ataque</h3>
        <img 
          src="/img/comandos_covcam.png" 
          alt="Inyección de Comandos" 
          style={{ maxWidth: '100%', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
      </div>
      <h3>Análisis Técnico</h3>
      <p>
        Este fallo ocurre cuando la plataforma ejecuta funciones del sistema operativo subyacente interactuando con 
        parámetros provistos por el usuario sin validación. El uso de caracteres de concatenación (como <code>;</code>) 
        permite ejecutar comandos arbitrarios.
      </p>
      <h3>Impacto en la Municipalidad de Cerro Verde</h3>
      <p>
        Un atacante puede comprometer el servidor web por completo, lo que permitiría implantar Ransomware para encriptar 
        los sistemas de pago de multas y patentes, deteniendo la operación pública.
      </p>
      <blockquote style={{ background: '#f9f9f9', padding: '10px', borderLeft: '5px solid #990000' }}>
        <strong>Gravedad CVSS 3.1:</strong> 9.8 (Critical) <br />
        <strong>Vector:</strong> CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
      </blockquote>
    </div>
  );
}