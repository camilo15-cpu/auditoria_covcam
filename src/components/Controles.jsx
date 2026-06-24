import React from 'react';

export default function Controles() {
  const listaControles = [
    {
      id: 'CTRL-01',
      vulnerabilidad: 'Inyección SQL',
      control: 'Uso de Consultas Preparadas (Parameterized Queries)',
      descripcion: 'Implementar PDO o sentencias preparadas en el backend para asegurar que las entradas del usuario nunca alteren la estructura lógica de la base de datos.',
      tipo: 'Preventivo',
      prioridad: 'INMEDIATA'
    },
    {
      id: 'CTRL-02',
      vulnerabilidad: 'XSS Reflejado',
      control: 'Sanitización de Entradas y Escape de Salidas (Context-Aware Output Encoding)',
      descripcion: 'Aplicar funciones de escape HTTP a todos los datos reflejados en el navegador e implementar cabeceras Content-Security-Policy (CSP) robustas.',
      tipo: 'Preventivo / Mitigante',
      prioridad: 'ALTA'
    },
    {
      id: 'CTRL-03',
      vulnerabilidad: 'Inyección de Comandos',
      control: 'Validación Estricta de Caracteres y Whitelisting',
      descripcion: 'Sustituir el uso de funciones de sistema operativo por librerías nativas del lenguaje de programación. Validar entradas usando expresiones regulares estrictas.',
      tipo: 'Preventivo',
      prioridad: 'INMEDIATA'
    }
  ];

  const getPrioridadStyle = (prioridad) => {
    if (prioridad === 'INMEDIATA') {
      return { backgroundColor: '#fee2e2', color: '#dc2626', fontWeight: 'bold', border: '1px solid #fca5a5' };
    }
    return { backgroundColor: '#fff7ed', color: '#ea580c', fontWeight: 'bold', border: '1px solid #fed7aa' };
  };

  return (
    <div style={{ fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', color: '#1e293b' }}>
      
      {/* Encabezado */}
      <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
          🛡️ 07. Implementación de Controles Técnicos
        </h2>
        <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>
          Medidas de seguridad y contramedidas recomendadas para la mitigación de los riesgos críticos
        </p>
      </div>

      <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', marginBottom: '24px', textAlign: 'justify' }}>
        A continuación se definen los controles de ciberseguridad que la Ilustre Municipalidad de Cerro Verde 
        debe aplicar de manera mandatoria en el código fuente y arquitectura de red del portal web para neutralizar 
        los vectores de ataque explotados en el análisis técnico.
      </p>

      {/* Grid de Tarjetas de Control */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {listaControles.map((item) => (
          <div key={item.id} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            transition: 'all 0.2s ease'
          }}>
            {/* Header de la tarjeta */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#2563eb', backgroundColor: '#eff6ff', padding: '3px 8px', borderRadius: '4px', marginRight: '8px' }}>
                  {item.id}
                </span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>
                  Asociado a: {item.vulnerabilidad}
                </span>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '6px 0 0 0' }}>
                  {item.control}
                </h3>
              </div>
              
              {/* Badges de Prioridad */}
              <span style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '6px',
                ...getPrioridadStyle(item.prioridad)
              }}>
                PRIORIDAD: {item.prioridad}
              </span>
            </div>

            {/* Descripción */}
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', margin: '0 0 12px 0', textAlign: 'justify' }}>
              {item.descripcion}
            </p>

            {/* Meta-info */}
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', fontSize: '12px', color: '#64748b' }}>
              <strong>Tipo de Control:</strong> <span style={{ color: '#334155', fontWeight: '500' }}>{item.tipo}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}