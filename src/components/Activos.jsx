import React from 'react';

export default function Activos() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>05. Identificación de Activos de Información</h2>
      <p><strong>Institución:</strong> Municipalidad de Cerro Verde</p>
      <hr />
      <p>Se han definido los siguientes activos de información críticos asociados al Portal de Trámites:</p>
      <ul>
        <li style={{ margin: '10px 0' }}>
          <strong>BD-VECINOS (Base de Datos de Usuarios):</strong> Contiene RUTs, nombres, direcciones y correos de los contribuyentes. <span style={{ color: '#cc0000', fontWeight: 'bold' }}>(Criticidad: Alta)</span>
        </li>
        <li style={{ margin: '10px 0' }}>
          <strong>SYS-RECAUDA (Sistema de Pagos y Patentes):</strong> Motor de software que procesa las transacciones financieras y comerciales. <span style={{ color: '#990000', fontWeight: 'bold' }}>(Criticidad: Crítica)</span>
        </li>
        <li style={{ margin: '10px 0' }}>
          <strong>SERV-WEB (Servidor de Aplicación Linux):</strong> Infraestructura subyacente montada sobre el sistema operativo que aloja la web institucional. <span style={{ color: '#990000', fontWeight: 'bold' }}>(Criticidad: Crítica)</span>
        </li>
      </ul>
    </div>
  );
}