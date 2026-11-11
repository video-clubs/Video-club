// src/pages/Catalogo.jsx
import React, { useState, useEffect } from 'react';
import MovieRow from '../components/MovieRow/MovieRow';

export default function Catalogo() {
  const [catalog, setCatalog] = useState({});
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Petición al endpoint del catálogo general en JSON Server
    fetch('http://localhost:3000/catalogo')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar catalogo');
        return res.json();
      })
      .then((data) => {
        setCatalog(data || {});
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error al conectar con la API:', err);
        setCatalog({});
        setCargando(false);
      });
  }, []);

  // Función auxiliar para filtrar dinámicamente las listas según el texto introducido
  const filtrar = (lista = []) => 
    lista.filter(m => (m.titulo || "").toLowerCase().includes(busqueda.toLowerCase()));

  const top5Filtrado = filtrar(catalog["TOP 5"]);
  const clasicosFiltrados = filtrar(catalog["Los clasicos"]);
  const masVistosFiltrados = filtrar(catalog["mas vistos"]);

  return (
    <div className="catalogo-container min-h-screen bg-[#080808] text-white pt-24 pb-16 px-4 sm:px-6 md:px-16 overflow-x-hidden">
      
      {/* Cabecera y Buscador */}
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-[#e50914] mb-3 drop-shadow-[0_0_10px_rgba(229,9,20,0.6)]">
          Catálogo de Películas VHS
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-xl">
          Explora los estantes malditos de Midnight Club. Busca por título o desliza las categorías para sintonizar tu próxima sesión de terror.
        </p>
        
        {/* Barra de Búsqueda Adaptada a Móvil */}
        <input 
          type="text" 
          placeholder="Buscar película en los estantes..." 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
          className="w-full md:w-1/2 rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-white text-sm placeholder-zinc-500 focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914] focus:outline-none shadow-inner transition-all"
        />
      </div>

      {cargando ? (
        <div className="text-center py-20">
          <p className="text-[#e50914] text-sm sm:text-base font-bold tracking-widest animate-pulse">
            📼 SINTONIZANDO CINTAS DESDE EL SERVIDOR...
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          {top5Filtrado.length > 0 && (
            <MovieRow title="TOP 5" movies={top5Filtrado} />
          )}
          {clasicosFiltrados.length > 0 && (
            <MovieRow title="Los Clásicos" movies={clasicosFiltrados} />
          )}
          {masVistosFiltrados.length > 0 && (
            <MovieRow title="Más Vistos" movies={masVistosFiltrados} />
          )}

          {top5Filtrado.length === 0 && clasicosFiltrados.length === 0 && masVistosFiltrados.length === 0 && (
            <p className="text-zinc-500 text-center py-16 text-sm italic">
              No se han encontrado cintas VHS que coincidan con tu búsqueda en los estantes.
            </p>
          )}
        </div>
      )}
    </div>
  );
}