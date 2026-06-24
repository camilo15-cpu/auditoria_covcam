import React from 'react';

export default function Activos() {
  // Datos del inventario de activos para Cerro Verde
  const listaActivos = [
    { id: 'ACT-01', nombre: 'Base de Datos de Vecinos (RUT, Correos, Direcciones)', tipo: 'Información / Datos', propietario: 'DIDECO', criticidad: 'CRÍTICA' },
    { id: 'ACT-02', nombre: 'Servidor Web del Portal de Trámites', tipo: 'Hardware / Infraestructura', propietario: 'Depto. Informática', criticidad: 'ALTA' },
    { id: 'ACT-03', nombre: 'Registro de Permisos de Edificación', tipo: 'Información / Datos', propietario: 'Dirección de Obras (DOM)', criticidad: 'ALTA' },
    { id: 'ACT-04', nombre: 'Sistema de Patentes Comerciales', tipo: 'Software / Aplicación', propietario: 'Rentas y Patentes', criticidad: 'ALTA' },
    { id: 'ACT-05', nombre: 'Base de Datos de Multas de Tránsito', tipo: 'Información / Datos', propietario: 'Juzgado de Policía Local', criticidad: 'MEDIA' },
  ];

  // Estilos para las celdas de criticidad
  const getBadgeCriticidad = (nivel) => {
    let styles = {
      fontSize: '11px',
      fontWeight: 'bold',
      padding: '4px 8px',
      borderRadius: '4px',
      display: 'inline-block'
    };
    if (nivel === 'CRÍTICA') {
      return { ...styles, backgroundColor: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5' };
    } else if (nivel === 'ALTA') {
      return { ...styles, backgroundColor: '#fff7ed', color: '#ea580c', border: '1px solid #fed7aa' };
    }
    return { ...styles, backgroundColor: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' };
  };

  return (
    <div style={{ fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', color: '#1e293b' }}>
      
      {/* Encabezado */}
      <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '16px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
          📦 05. Identificación y Clasificación de Activos
        </h2>
        <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>
          Inventario de activos de información críticos vinculados al Portal de Trámites de la Municipalidad
        </p>
      </div>

      {/* Explicación Metodológica */}
      <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', marginBottom: '24px', textAlign: 'justify' }}>
        Para garantizar una gobernanza eficiente de ciberseguridad, se han relevado e identificado los principales 
        activos que interactúan directa o indirectamente con el portal web afectado. La clasificación se basa en la 
        criticidad del activo según el impacto en la continuidad operacional y la privacidad de la comunidad de Cerro Verde.
      </p>

      {/* Tabla de Activos Estilizada */}
      <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569', width: '90px' }}>ID</th>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569' }}>Nombre del Activo</th>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569', width: '160px' }}>Tipo de Activo</th>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569', width: '200px' }}>Dirección / Propietario</th>
              <th style={{ padding: '12px 16px', fontWeight: '600', color: '#475569', width: '110px' }}>Criticidad</th>
            </tr>
          </thead>
          <tbody>
            {listaActivos.map((activo, index) => (
              <tr key={activo.id} style={{ 
                borderBottom: index === listaActivos.length - 1 ? 'none' : '1px solid #e2e8f0',
                backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc',
                transition: 'background-color 0.2s'
              }}>
                <td style={{ padding: '14px 16px', fontWeight: 'bold', color: '#64748b' }}>{activo.id}</td>
                <td style={{ padding: '14px 16px', fontWeight: '500', color: '#0f172a' }}>{activo.nombre}</td>
                <td style={{ padding: '14px 16px', color: '#475569' }}>{activo.tipo}</td>
                <td style={{ padding: '14px 16px', color: '#475569' }}>{activo.propietario}</td>
                <td style={{ padding: '14px 16px' }}>
                  <span style={getBadgeCriticidad(activo.criticidad)}>{activo.criticidad}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Nota de Resguardo */}
      <div style={{ 
        marginTop: '24px', 
        backgroundColor: '#f1f5f9', 
        borderRadius: '6px', 
        padding: '12px 16px', 
        border: '1px solid #cbd5e1',
        fontSize: '13px',
        color: '#475569'
      }}>
        <strong>📌 Criterio de Control:</strong> Este inventario se actualiza semestralmente bajo los estándares del marco de seguridad institucional, alineado con la asignación de responsabilidades por cada jefatura de departamento.
      </div>

    </div>
  );
}