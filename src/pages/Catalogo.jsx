import React, { useState, useEffect } from 'react';
import MovieRow from '../components/MovieRow/MovieRow';

export default function Catalogo() {
  const [catalog, setCatalog] = useState({});
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Petición únicamente al endpoint del catálogo general
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

  // Función auxiliar para filtrar las listas según la barra de búsqueda
  const filtrar = (lista = []) => 
    lista.filter(m => (m.titulo || "").toLowerCase().includes(busqueda.toLowerCase()));

  const top5Filtrado = filtrar(catalog["TOP 5"]);
  const clasicosFiltrados = filtrar(catalog["Los clasicos"]);
  const masVistosFiltrados = filtrar(catalog["mas vistos"]);

  return (
    <div className="catalogo-container min-h-screen bg-[#080808] pb-12">
      <div className="px-6 pt-8 md:px-16">
        <h2 className="text-3xl font-extrabold uppercase text-white tracking-wide mb-6">
          Catálogo de Películas
        </h2>
        
        {/* Barra de búsqueda */}
        <input 
          type="text" 
          placeholder="Buscar película..." 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
          className="w-full md:w-1/3 rounded bg-zinc-900 border border-zinc-700 px-4 py-2 text-white placeholder-zinc-500 focus:border-[#e50914] focus:outline-none mb-8"
        />
      </div>

      {cargando ? (
        <p className="text-white text-center py-10">Cargando catálogo...</p>
      ) : (
        <div className="flex flex-col gap-4">
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
            <p className="text-zinc-400 text-center py-10">No se encontraron películas con ese nombre.</p>
          )}
        </div>
      )}
    </div>
  );
}