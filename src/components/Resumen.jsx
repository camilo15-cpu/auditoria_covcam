import React from 'react';
import { Building2, ShieldCheck, Users } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Building2 className="text-blue-600" /> Identificación de la Organización Auditada
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          La <strong>Municipalidad de Cerro Verde</strong> es un organismo público local encargado de la administración y progreso de la comuna. Su ecosistema digital centraliza servicios transaccionales esenciales para la ciudadanía, actuando como un puente crítico entre los datos sensibles de los vecinos y la gestión tributaria y legal local.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h3 className="font-semibold text-slate-700 text-sm mb-2 flex items-center gap-1"><Users size={16}/> Activos Custodiados</h3>
            <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
              <li>Registros e información confidencial de Vecinos.</li>
              <li>Aprobaciones y trámites de Permisos de Edificación.</li>
              <li>Bases de datos de Patentes Comerciales activas.</li>
              <li>Sistemas de control y recaudación de Multas.</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h3 className="font-semibold text-slate-700 text-sm mb-2 flex items-center gap-1"><ShieldCheck size={16}/> Objetivo de la Auditoría</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Evaluar las debilidades del portal empleando metodologías de intrusión controlada en entornos simulados para mitigar fugas de datos masivas o interrupciones operacionales críticas en el servicio comunal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}