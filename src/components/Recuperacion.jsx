import React from 'react';

export default function Recuperacion() {
  const fasesPlan = [
    {
      fase: '1. Plan de Respaldo (Proactivo)',
      acciones: 'Generación automatizada de respaldos (Backups) diarios de la base de datos de vecinos y el sistema de patentes de Cerro Verde. Almacenamiento cifrado y aislado en la nube bajo políticas de retención estricta.',
      colorAcento: '#2563eb'
    },
    {
      fase: '2. Plan de Emergencia (Reactivo)',
      acciones: 'Aislamiento inmediato del servidor afectado ante alertas de intrusión o inyecciones maliciosas recurrentes. Despliegue de una página estática de mantenimiento para el portal y aviso inmediato al comité de crisis de la municipalidad.',
      colorAcento: '#dc2626'
    },
    {
      fase: '3. Plan de Recuperación (Post-incidente)',
      acciones: 'Restauración completa del portal web utilizando las imágenes de respaldo verificadas y limpias. Aplicación mandatoria de parches de seguridad antes de levantar nuevamente los servicios al público.',
      colorAcento: '#16a34a'
    }
  ];

  return (
    <div style={{ fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', color: '#1e293b' }}>
      
      {/* Encabezado */}
      <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
          🔄 08. Plan de Continuidad del Negocio y Recuperación
        </h2>
        <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>
          Estrategias operacionales para la resiliencia tecnológica de la Ilustre Municipalidad de Cerro Verde
        </p>
      </div>

      <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', marginBottom: '24px', textAlign: 'justify' }}>
        El plan de continuidad establece las pautas de acción necesarias para mitigar el impacto de un ataque 
        informático exitoso, asegurando que los servicios comunitarios críticos del portal web puedan restaurarse en el 
        menor tiempo posible.
      </p>

      {/* Tarjetas de Objetivos de Recuperación (RTO / RPO) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '16px', 
        marginBottom: '32px' 
      }}>
        <div style={{ backgroundColor: '#f8fafc', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', borderTop: '4px solid #0f172a' }}>
          <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>RTO (Recovery Time Objective)</span>
          <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '4px 0' }}>4 Horas Máximo</h4>
          <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>Tiempo límite tolerado para levantar el portal de trámites tras una caída crítica.</p>
        </div>

        <div style={{ backgroundColor: '#f8fafc', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', borderTop: '4px solid #0f172a' }}>
          <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>RPO (Recovery Point Objective)</span>
          <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '4px 0' }}>24 Horas Máximo</h4>
          <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>Pérdida máxima tolerable de datos de transacciones o registros de los vecinos.</p>
        </div>
      </div>

      {/* Flujo de Fases de Resiliencia */}
      <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#334155', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        📋 Fases Estratégicas del Plan
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {fasesPlan.map((faseItem, idx) => (
          <div key={idx} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderLeft: `4px solid ${faseItem.colorAcento}`,
            borderRadius: '6px',
            padding: '16px 20px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.01)'
          }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' }}>
              {faseItem.fase}
            </h4>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', margin: 0, textAlign: 'justify' }}>
              {faseItem.acciones}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}