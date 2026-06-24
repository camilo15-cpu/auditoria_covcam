import React from 'react';

export default function InyeccionSQL() {
  return (
    <div style={{ fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', color: '#1e293b' }}>
      
      {/* Encabezado del Hallazgo */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '16px',
        marginBottom: '24px'
      }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
            💉 Hallazgo 01: Inyección SQL (SQL Injection)
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>
            Vulnerabilidad crítica en la validación y escape de parámetros de entrada
          </p>
        </div>
        
        {/* Badges de Estado */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ backgroundColor: '#fee2e2', color: '#dc2626', fontSize: '11px', fontWeight: 'bold', padding: '6px 12px', borderRadius: '6px', border: '1px solid #fca5a5' }}>
            CRÍTICO (CVSS 8.8)
          </span>
          <span style={{ backgroundColor: '#f1f5f9', color: '#475569', fontSize: '11px', fontWeight: 'bold', padding: '6px 12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
            CWE-89
          </span>
        </div>
      </div>

      {/* Sección: Evidencia del Ataque */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#334155', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          📸 Evidencia del Ataque
        </h3>
        
        {/* Contenedor estético para la imagen */}
        <div style={{ 
          backgroundColor: '#f8fafc', 
          border: '1px solid #e2e8f0', 
          borderRadius: '10px', 
          padding: '16px',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img 
            src="/images/sql_injection.png" // Asegúrate de que apunte a tu ruta de imagen o déjala como la tenías levantada
            alt="Evidencia SQL Injection en DVWA" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }} 
          />
        </div>
      </div>

      {/* Grid de Análisis e Impacto */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
        
        {/* Bloque Análisis Técnico */}
        <div style={{ borderLeft: '4px solid #2563eb', paddingLeft: '16px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e3a8a', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🔬 Análisis Técnico
          </h4>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#334155', margin: 0, textAlign: 'justify' }}>
            La vulnerabilidad se presenta en el formulario de consulta de datos del portal web. El sistema toma la 
            entrada del usuario directamente y la concatena en la consulta SQL sin sanitizar, permitiendo alterar 
            la estructura lógica y retornar la totalidad de los registros.
          </p>
        </div>

        {/* Bloque Impacto */}
        <div style={{ borderLeft: '4px solid #b91c1c', paddingLeft: '16px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#7f1d1d', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            ⚠️ Impacto en la Municipalidad de Cerro Verde
          </h4>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#334155', margin: 0, textAlign: 'justify' }}>
            Al explotar este fallo, un atacante externo puede extraer la base de datos completa de los vecinos. 
            Esto expone de forma directa RUTs, direcciones particulares, deudas financieras y correos electrónicos.
          </p>
        </div>

      </div>

      {/* Bloque Profesional de Métrica CVSS 3.1 */}
      <div style={{ 
        backgroundColor: '#fef2f2', 
        border: '1px solid #fee2e2', 
        borderLeft: '4px solid #ef4444', 
        borderRadius: '8px', 
        padding: '16px 20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <span style={{ fontSize: '14px', fontWeight: '700', color: '#991b1b' }}>
            Métrica del Vector Base (CVSS v3.1)
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '14px', color: '#7f1d1d' }}>
            <strong>Gravedad:</strong> <span style={{ fontWeight: '700' }}>8.8 (High)</span>
          </div>
          <div style={{ 
            fontFamily: 'monospace', 
            fontSize: '12px', 
            backgroundColor: '#ffffff', 
            padding: '6px 10px', 
            borderRadius: '4px', 
            border: '1px solid #fca5a5',
            color: '#b91c1c',
            marginTop: '4px',
            overflowX: 'auto'
          }}>
            CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
          </div>
        </div>
      </div>

    </div>
  );
}