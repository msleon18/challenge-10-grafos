import React, { useState } from 'react';
import { crearGrafoPrueba } from './graph';
import GraphComponent from './components/GraphComponent';
import { Network, Users } from 'lucide-react';

export default function App() {
  const [grafo] = useState(() => crearGrafoPrueba());
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('Cali');

  const personasEnCiudad = grafo.getPeopleByCity(ciudadSeleccionada);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', background: '#f8fafc', margin: 0 }}>
      <aside style={{ width: '320px', background: '#ffffff', borderRight: '1px solid #e2e8f0', padding: '24px', boxSizing: 'border-box' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <Network size={22} color="#3b82f6" /> Challenge 10: Grafos
        </h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>
            Seleccionar Ciudad para Filtrar:
          </label>
          <select 
            value={ciudadSeleccionada} 
            onChange={(e) => setCiudadSeleccionada(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc', fontSize: '0.95rem', cursor: 'pointer' }}
          >
            {grafo.citiesData.map((ciudad, idx) => (
              <option key={idx} value={ciudad}>{ciudad}</option>
            ))}
          </select>
        </div>

        <div style={{ background: '#f1f5f9', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#1e293b', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Users size={16} /> Habitantes en {ciudadSeleccionada}:
          </h4>
          {personasEnCiudad.length > 0 ? (
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#334155' }}>
              {personasEnCiudad.map((p, idx) => (
                <li key={idx} style={{ marginBottom: '6px' }}>
                  <strong>{p.name}</strong> — {p.age} años
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>No hay personas registradas.</p>
          )}
        </div>
      </aside>

      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <header style={{ marginBottom: '25px', borderBottom: '1px solid #e2e8f0', paddingBottom: '15px' }}>
          <h1 style={{ color: '#0f172a', fontSize: '1.8rem', margin: 0 }}>Visualización del Grafo Social y Geográfico</h1>
          <p style={{ color: '#64748b', margin: '6px 0 0 0', fontSize: '1rem' }}>
            Nodos que representan personas (con nombre y edad) y ciudades interconectadas mediante relaciones.
          </p>
        </header>

        <section>
          <GraphComponent graphData={grafo} />
        </section>
      </main>
    </div>
  );
}