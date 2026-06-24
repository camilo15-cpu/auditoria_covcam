import React from 'react';

export default function XSS() {
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
            💉 Hallazgo 02: Scripting en Sitios Cruzados Reflejado (Reflected XSS)
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>
            Vulnerabilidad de inyección de scripts maliciosos en las solicitudes del lado del cliente
          </p>
        </div>
        
        {/* Badges de Estado */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ backgroundColor: '#ffedd5', color: '#ea580c', fontSize: '11px', fontWeight: 'bold', padding: '6px 12px', borderRadius: '6px', border: '1px solid #fed7aa' }}>
            ALTO (CVSS 6.1)
          </span>
          <span style={{ backgroundColor: '#f1f5f9', color: '#475569', fontSize: '11px', fontWeight: 'bold', padding: '6px 12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
            CWE-79
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
            src="/img/xss_covcam.png" 
            alt="Evidencia XSS Reflejado en DVWA" 
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
            La aplicación web no valida ni sanitiza el parámetro de entrada del usuario antes de reflejarlo en la respuesta HTTP devuelta. Esto permite a un atacante inyectar código JavaScript malicioso en la URL, ejecutándose directamente en el contexto del navegador de la víctima.
          </p>
        </div>

        {/* Bloque Impacto */}
        <div style={{ borderLeft: '4px solid #ea580c', paddingLeft: '16px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#7c2d12', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            ⚠️ Impacto en la Municipalidad de Cerro Verde
          </h4>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#334155', margin: 0, textAlign: 'justify' }}>
            A través del envío de enlaces manipulados a los funcionarios o vecinos de la comuna, un atacante externo podría secuestrar sesiones de usuario activas (cookies de sesión), redirigir de forma ilegítima a portales bancarios falsos o capturar credenciales mediante phishing interactivo dentro del sitio oficial.
          </p>
        </div>

      </div>

      {/* Bloque Profesional de Métrica CVSS 3.1 */}
      <div style={{ 
        backgroundColor: '#fff7ed', 
        border: '1px solid #ffedd5', 
        borderLeft: '4px solid #f97316', 
        borderRadius: '8px', 
        padding: '16px 20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <span style={{ fontSize: '14px', fontWeight: '700', color: '#c2410c' }}>
            Métrica del Vector Base (CVSS v3.1)
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '14px', color: '#7c2d12' }}>
            <strong>Gravedad:</strong> <span style={{ fontWeight: '700' }}>6.1 (Medium)</span>
          </div>
          <div style={{ 
            fontFamily: 'monospace', 
            fontSize: '12px', 
            backgroundColor: '#ffffff', 
            padding: '6px 10px', 
            borderRadius: '4px', 
            border: '1px solid #fed7aa',
            color: '#c2410c',
            marginTop: '4px',
            overflowX: 'auto'
          }}>
            CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N
          </div>
        </div>
      </div>

    </div>
  );
}