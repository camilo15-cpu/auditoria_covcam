import React from 'react';

export default function MatrizRiesgo() {
  // Datos simulados de la evaluación de riesgos
  const matrizDatos = [
    { id: 'RSG-01', riesgo: 'Extracción masiva de datos personales de vecinos (SQLi)', probabilidad: 4, impacto: 5, nivel: 20, clasificacion: 'CRÍTICO' },
    { id: 'RSG-02', riesgo: 'Secuestro de sesiones de funcionarios/vecinos mediante phishing (XSS)', probabilidad: 3, impacto: 4, nivel: 12, clasificacion: 'ALTO' },
    { id: 'RSG-03', riesgo: 'Toma de control total del servidor web mediante comandos remotos', probabilidad: 2, impacto: 5, nivel: 10, clasificacion: 'ALTO' },
    { id: 'RSG-04', riesgo: 'Interrupción del portal por denegación de servicio en parches no aplicados', probabilidad: 3, impacto: 3, nivel: 9, clasificacion: 'MEDIO' },
  ];

  // Función para determinar el color del badge según la clasificación
  const getBadgeRiesgo = (clasificacion) => {
    let styles = {
      fontSize: '11px',
      fontWeight: 'bold',
      padding: '4px 8px',
      borderRadius: '4px',
      display: 'inline-block',
      textAlign: 'center'
    };

    if (clasificacion === 'CRÍTICO') {
      return { ...styles, backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5' };
    } else if (clasificacion === 'ALTA' || clasificacion === 'ALTO') {
      return { ...styles, backgroundColor: '#fff7ed', color: '#ea580c', border: '1px solid #fed7aa' };
    }
    return { ...styles, backgroundColor: '#fef9c3', color: '#ca8a04', border: '1px solid #fef08a' };
  };

  return (
    <div style={{ fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', color: '#1e293b' }}>
      
      {/* Encabezado */}
      <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
          🧮 06. Matriz de Evaluación de Riesgos
        </h2>
        <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>
          Análisis cualitativo y cuantitativo del impacto y probabilidad de las amenazas detectadas
        </p>
      </div>

      {/* Explicación Teórica / Metodológica */}
      <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', marginBottom: '24px', textAlign: 'justify' }}>
        Se ha implementado una metodología clásica de gestión de riesgos basada en la fórmula 
        <code> Riesgo = Probabilidad × Impacto</code> (en una escala de 1 a 5). Esto permite priorizar las 
        acciones de mitigación inmediatas sobre la infraestructura web de la Ilustre Municipalidad de Cerro Verde.
      </p>

      {/* Tabla Estilizada de Matriz */}
      <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569', width: '80px' }}>ID</th>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569' }}>Riesgo / Amenaza Identificada</th>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569', width: '110px', textAlign: 'center' }}>Probabilidad</th>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569', width: '100px', textAlign: 'center' }}>Impacto</th>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569', width: '110px', textAlign: 'center' }}>Puntaje Total</th>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569', width: '120px', textAlign: 'center' }}>Clasificación</th>
            </tr>
          </thead>
          <tbody>
            {matrizDatos.map((item, index) => (
              <tr key={item.id} style={{ 
                borderBottom: index === matrizDatos.length - 1 ? 'none' : '1px solid #e2e8f0',
                backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc'
              }}>
                <td style={{ padding: '14px 16px', fontWeight: 'bold', color: '#64748b' }}>{item.id}</td>
                <td style={{ padding: '14px 16px', fontWeight: '500', color: '#0f172a' }}>{item.riesgo}</td>
                <td style={{ padding: '14px 16px', textAlign: 'center', color: '#475569' }}>{item.probabilidad} / 5</td>
                <td style={{ padding: '14px 16px', textAlign: 'center', color: '#475569' }}>{item.impacto} / 5</td>
                <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: '700', color: '#0f172a' }}>{item.nivel}</td>
                <td style={{ padding: '14px 16px', textAlign: 'center' }}>
                  <span style={getBadgeRiesgo(item.clasificacion)}>{item.clasificacion}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Leyenda de la Matriz */}
      <div style={{ 
        marginTop: '24px', 
        display: 'flex', 
        gap: '12px', 
        flexWrap: 'wrap', 
        fontSize: '12px',
        backgroundColor: '#f1f5f9',
        padding: '12px 16px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1'
      }}>
        <div style={{ color: '#475569' }}><strong>🔍 Escala de Criticidad:</strong></div>
        <div><span style={{ color: '#dc2626', fontWeight: 'bold' }}>• Crítico</span> (15 - 25)</div>
        <div><span style={{ color: '#ea580c', fontWeight: 'bold' }}>• Alto</span> (10 - 14)</div>
        <div><span style={{ color: '#ca8a04', fontWeight: 'bold' }}>• Medio</span> (5 - 9)</div>
      </div>

    </div>
  );
}