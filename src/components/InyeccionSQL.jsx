import React from 'react';

export default function InyeccionSQL() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Hallazgo 01: Inyección SQL (SQL Injection)</h2>
      <div style={{ margin: '20px 0' }}>
        <h3>Evidencia del Ataque</h3>
        <img 
          src="/img/sqli_covcam.png" 
          alt="Inyección SQL" 
          style={{ maxWidth: '100%', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
      </div>
      <h3>Análisis Técnico</h3>
      <p>
        La vulnerabilidad se presenta en el formulario de consulta de datos del portal web. 
        El sistema toma la entrada del usuario directamente y la concatena en la consulta SQL sin sanitizar, 
        permitiendo alterar la estructura lógica y retornar la totalidad de los registros.
      </p>
      <h3>Impacto en la Municipalidad de Cerro Verde</h3>
      <p>
        Al explotar este fallo, un atacante externo puede extraer la base de datos completa de los vecinos. 
        Esto expone RUTs, direcciones particulares, deudas financieras y correos electrónicos.
      </p>
      <blockquote style={{ background: '#f9f9f9', padding: '10px', borderLeft: '5px solid #cc0000' }}>
        <strong>Gravedad CVSS 3.1:</strong> 8.8 (High) <br />
        <strong>Vector:</strong> CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
      </blockquote>
    </div>
  );
}