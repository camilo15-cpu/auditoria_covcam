import React from 'react';

export default function Recuperacion() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>08. Plan de Continuidad y Recuperación ante Incidentes</h2>
      <p>Estrategias operativas para garantizar la resiliencia institucional en la comuna:</p>
      <ul>
        <li style={{ margin: '10px 0' }}>
          <strong>Respaldos (Backups):</strong> Configuración de snapshots automáticos e incrementales de la base de datos <code>BD-VECINOS</code> cada 24 horas, almacenados en repositorios aislados de la red.
        </li>
        <li style={{ margin: '10px 0' }}>
          <strong>Aislamiento de Red:</strong> Protocolos automáticos de aislamiento del servidor comprometido para detener movimientos laterales maliciosos hacia la intranet municipal.
        </li>
        <li style={{ margin: '10px 0' }}>
          <strong>Tiempos de Respuesta:</strong> RTO (Objetivo de Tiempo de Recuperación) proyectado en menos de 4 horas mediante el despliegue automatizado de infraestructura de contingencia.
        </li>
      </ul>
    </div>
  );
}