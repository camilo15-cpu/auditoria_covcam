import React from 'react';

export default function Comandos() {
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
            💉 Hallazgo 03: Inyección de Comandos (Command Injection)
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>
            Vulnerabilidad crítica por ejecución arbitraria de comandos en el sistema operativo remoto
          </p>
        </div>
        
        {/* Badges de Estado */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ backgroundColor: '#fee2e2', color: '#dc2626', fontSize: '11px', fontWeight: 'bold', padding: '6px 12px', borderRadius: '6px', border: '1px solid #fca5a5' }}>
            CRÍTICO (CVSS 9.8)
          </span>
          <span style={{ backgroundColor: '#f1f5f9', color: '#475569', fontSize: '11px', fontWeight: 'bold', padding: '6px 12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
            CWE-78
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
          {/* Ruta mapeada directamente a la carpeta publica */}
          <img 
            src="/img/comandos_covcam.png" 
            alt="Evidencia Inyección de Comandos en DVWA" 
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
            La aplicación web permite ingresar una dirección IP para ejecutar una función de diagnóstico de red (Ping). 
            Sin embargo, debido a la falta de validación de caracteres especiales y operadores de concatenación 
            (como <code>;</code> o <code>&&</code>), un atacante puede adjuntar comandos adicionales que el servidor 
            ejecuta con los privilegios del servicio web, logrando visualizar el archivo confidencial <code>/etc/passwd</code>.
          </p>
        </div>

        {/* Bloque Impacto */}
        <div style={{ borderLeft: '4px solid #b91c1c', paddingLeft: '16px' }}>
          <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#7f1d1d', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            ⚠️ Impacto en la Municipalidad de Cerro Verde
          </h4>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#334155', margin: 0, textAlign: 'justify' }}>
            Este fallo otorga control total inmediato sobre la infraestructura tecnológica del municipio. Un atacante 
            externo podría listar directorios del sistema, alterar configuraciones del backend, descargar herramientas 
            maliciosas e instalar puertas traseras (Backdoors) o shells interactivas para comprometer de forma permanente 
            e irreversible la red interna corporativa.
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
            <strong>Gravedad:</strong> <span style={{ fontWeight: '700' }}>9.8 (Critical)</span>
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