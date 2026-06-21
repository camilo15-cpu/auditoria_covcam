import React from 'react';

export default function Resumen() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Resumen Ejecutivo - Auditoría de Seguridad Web</h2>
      <p><strong>Institución Auditada:</strong> Municipalidad de Cerro Verde</p>
      <p><strong>Portal Analizado:</strong> Portal de Trámites y Servicios al Vecino</p>
      <hr />
      <h3>Contexto de Negocio</h3>
      <p>
        La Municipalidad de Cerro Verde custodia activos de información críticos de carácter público, 
        legal y privado, organizados en cuatro grandes pilares: datos personales de vecinos, 
        permisos de edificación, patentes comerciales y registro de multas de tránsito. El portal web 
        permite a los ciudadanos interactuar con la institución, por lo que una brecha de seguridad 
        digital compromete la recaudación municipal y la privacidad de los usuarios.
      </p>
    </div>
  );
}