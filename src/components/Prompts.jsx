import React from 'react';

export default function Prompts() {
  const registroPrompts = [
    {
      id: 'PRMPT-01',
      objetivo: 'Clasificación Técnica de Vulnerabilidades',
      rol: 'Experto en Pentesting y Auditoría Web',
      prompt: 'Actúa como un auditor de ciberseguridad senior. Analiza los resultados del laboratorio de DVWA para los módulos de Inyección SQL y XSS Reflejado. Calcula la métrica CVSS v3.1 para cada uno detallando el Vector de Ataque (AV), Complejidad (AC), Privilegios Requeridos (PR) e Impacto en Confidencialidad, Integridad y Disponibilidad. Estructura la respuesta para un informe ejecutivo municipal.',
      utilidad: 'Permitió ponderar con precisión matemática el riesgo técnico basándose en estándares internacionales (NIST/FIRST).'
    },
    {
      id: 'PRMPT-02',
      objetivo: 'Modelado de la Matriz de Riesgo Institucional',
      rol: 'Consultor en Gestión de Riesgos e ISO 27001',
      prompt: 'Ayúdame a diseñar una matriz de evaluación de riesgos para la Municipalidad de Cerro Verde basándote en la fórmula Riesgo = Probabilidad x Impacto en escala 1 a 5. Cruza los hallazgos de fallos web crítcos con el impacto reputacional y legal de la filtración de datos sensibles de ciudadanos. Genera una clasificación jerárquica clara.',
      utilidad: 'Facilitó la traducción del impacto puramente técnico a métricas de impacto de negocio y continuidad operacional.'
    }
  ];

  return (
    <div style={{ fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', color: '#1e293b' }}>
      
      {/* Encabezado */}
      <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
          🤖 09. Registro de Prompts de Inteligencia Artificial
        </h2>
        <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>
          Bitácora detallada de la interacción con modelos generativos para la co-creación del informe
        </p>
      </div>

      <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', marginBottom: '24px', textAlign: 'justify' }}>
        En conformidad con los requisitos éticos y metodológicos de la evaluación, se presenta el registro transparente 
        de las instrucciones (prompts) estructuradas empleadas para el análisis, refinamiento de texto y cálculo de 
        vectores de seguridad durante el desarrollo de esta auditoría.
      </p>

      {/* Listado de Prompts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {registroPrompts.map((item) => (
          <div key={item.id} style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
          }}>
            {/* Header de tarjeta */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#0f172a', backgroundColor: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
                  {item.id}
                </span>
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                  {item.objetivo}
                </h3>
              </div>
              <span style={{ fontSize: '12px', color: '#64748b', fontStyle: 'italic' }}>
                Rol asignado: <strong>{item.rol}</strong>
              </span>
            </div>

            {/* Cuadro simulador de Prompt (Terminal) */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ backgroundColor: '#0f172a', color: '#94a3b8', fontSize: '11px', padding: '6px 12px', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', fontFamily: 'monospace', borderBottom: '1px solid #334155' }}>
                💬 PROMPT ENVIADO A LA IA
              </div>
              <div style={{ 
                backgroundColor: '#1e293b', 
                color: '#38bdf8', 
                fontFamily: '"Fira Code", monospace', 
                fontSize: '13px', 
                padding: '14px 16px', 
                borderBottomLeftRadius: '6px', 
                borderBottomRightRadius: '6px', 
                lineHeight: '1.5',
                textAlign: 'justify',
                whiteSpace: 'pre-wrap'
              }}>
                "{item.prompt}"
              </div>
            </div>

            {/* Utilidad/Resultado */}
            <div style={{ 
              backgroundColor: '#f0fdf4', 
              border: '1px solid #bbf7d0', 
              borderRadius: '6px', 
              padding: '12px 14px',
              fontSize: '13px',
              color: '#16a34a'
            }}>
              <strong>💡 Impacto del resultado en el reporte:</strong> {item.utilidad}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}