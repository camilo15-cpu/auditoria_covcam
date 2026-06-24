import React from 'react';

export default function Resumen() {
  return (
    <div style={{ fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', color: '#1e293b' }}>
      
      {/* Título Principal */}
      <h2 style={{ 
        fontSize: '22px', 
        fontWeight: '700', 
        color: '#0f172a', 
        marginBottom: '24px',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '12px'
      }}>
        📊 Resumen Ejecutivo - Auditoría de Seguridad Web
      </h2>

      {/* Grid de Datos Clave (Cards) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '16px', 
        marginBottom: '32px' 
      }}>
        
        {/* Card Institución */}
        <div style={{ 
          backgroundColor: '#f8fafc', 
          padding: '16px 20px', 
          borderRadius: '8px', 
          border: '1px solid #e2e8f0',
          borderLeft: '4px solid #2563eb' // Acento azul
        }}>
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Institución Auditada
          </span>
          <p style={{ fontSize: '16px', fontWeight: '600', color: '#0f172a', margin: '4px 0 0 0' }}>
            Ilustre Municipalidad de Cerro Verde
          </p>
        </div>

        {/* Card Portal */}
        <div style={{ 
          backgroundColor: '#f8fafc', 
          padding: '16px 20px', 
          borderRadius: '8px', 
          border: '1px solid #e2e8f0',
          borderLeft: '4px solid #38bdf8' // Acento celeste
        }}>
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Portal Analizado
          </span>
          <p style={{ fontSize: '16px', fontWeight: '600', color: '#0f172a', margin: '4px 0 0 0' }}>
            Portal de Trámites y Servicios al Vecino
          </p>
        </div>

      </div>

      {/* Sección Contexto de Negocio */}
      <div style={{ 
        backgroundColor: '#ffffff',
        borderLeft: '4px solid #64748b', // Borde gris sobrio institucional
        padding: '8px 0 8px 20px',
        marginTop: '20px'
      }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: '700', 
          color: '#334155', 
          margin: '0 0 12px 0',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          🌐 Contexto de Negocio
        </h3>
        <p style={{ 
          fontSize: '15px', 
          lineHeight: '1.7', 
          color: '#475569', 
          margin: 0,
          textAlign: 'justify'
        }}>
          La Municipalidad de Cerro Verde custodia activos de información críticos de carácter público, legal y privado, 
          organizados en cuatro grandes pilares: datos personales de vecinos, permisos de edificación, patentes 
          comerciales y registro de multas de tránsito. El portal web permite a los ciudadanos interactuar con la 
          institución, por lo que una brecha de seguridad digital compromete directamente la recaudación municipal 
          y la privacidad de los usuarios.
        </p>
      </div>

    </div>
  );
}