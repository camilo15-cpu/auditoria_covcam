import React, { useState } from 'react';
import { Shield, FileText, Database, Code, Terminal } from 'lucide-react';
import Resumen from './components.jsx/Resumen';
import InyeccionSQL from './components.jsx/InyeccionSQL';
import XSS from './components.jsx/XSS';
import Comandos from './components.jsx/Comandos';

function App() {
  const [tab, setTab] = useState('resumen');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-slate-900 text-white py-8 px-6 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Shield size={36} className="text-red-400 animate-pulse" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Auditoría de Seguridad Web</h1>
              <p className="text-slate-400 text-xs">Municipalidad de Cerro Verde | Caso DVWA Low</p>
            </div>
          </div>
          <div className="text-right text-xs text-slate-300">
            <p><strong>Estudiante:</strong> Camilo Reyes</p>
            <p><strong>Docente:</strong> Rubén Schnettler | Otoño 2026</p>
          </div>
        </div>
      </header>

      {/* Menú de Navegación del Informe */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-1 px-4 py-2">
          <button 
            onClick={() => setTab('resumen')} 
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${tab === 'resumen' ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>
            <FileText size={16} /> Resumen
          </button>
          <button 
            onClick={() => setTab('sqli')} 
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${tab === 'sqli' ? 'bg-red-50 text-red-700 font-semibold' : 'text-slate-600 hover:text-red-600 hover:bg-red-50'}`}>
            <Database size={16} /> Inyección SQL
          </button>
          <button 
            onClick={() => setTab('xss')} 
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${tab === 'xss' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'}`}>
            <Code size={16} /> XSS Reflejado
          </button>
          <button 
            onClick={() => setTab('comandos')} 
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${tab === 'comandos' ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'}`}>
            <Terminal size={16} /> Inyección de Comandos
          </button>
        </div>
      </nav>

      {/* Contenedor Principal Dinámico */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        {tab === 'resumen' && <Resumen />}
        {tab === 'sqli' && <InyeccionSQL />}
        {tab === 'xss' && <XSS />}
        {tab === 'comandos' && <Comandos />}
      </main>

      <footer className="bg-slate-100 border-t border-slate-200 text-slate-500 text-xs py-4 px-6 text-center">
        INACAP Valparaíso • Departamento de Informática • T13034 Fundamentos de Seguridad
      </footer>
    </div>
  );
}

export default App;