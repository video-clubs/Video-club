import React, { useState, useEffect } from 'react';
import MovieRow from '../components/MovieRow/MovieRow';

// Catálogo estático por defecto de respaldo por si falla la API
const peliculasCatalogoBackup = [
  { id: 1, titulo: "Así en la Tierra como en el Infierno", anio: "2014", genero: "Slasher", etiqueta: "VHS VINTAGE", imagen: "Catalogo/los-masvistos/peliculasdeterror/asienlatierra-comoenel-infierno.jpg" },
  { id: 2, titulo: "Psicosis", anio: "1960", genero: "Clásico", etiqueta: "VHS VINTAGE", imagen: "Catalogo/los-masvistos/peliculasdeterror/psicosis.jpg" },
  { id: 3, titulo: "El Legado del Diablo", anio: "2018", genero: "Sobrenatural", etiqueta: "NC ORIGINAL", imagen: "Catalogo/los-masvistos/peliculasdeterror/el-legado-deldiablojpg.jpg" }
];

export default function Catalogo() {
  const [datosApi, setDatosApi] = useState({ peliculasTerror: [], catalog: {} });
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Petición paralela a ambos endpoints de json-server
    Promise.all([
      fetch('http://localhost:3000/')
        .then((res) => {
          if (!res.ok) throw new Error('Error al cargar peliculasTerror');
          return res.json();
        })
        .catch(() => []),
      fetch('http://localhost:3000/catalogo')
        .then((res) => {
          if (!res.ok) throw new Error('Error al cargar catalogo');
          return res.json();
        })
        .catch(() => ({}))
    ])
      .then(([peliculasTerror, catalog]) => {
        setDatosApi({
          peliculasTerror: Array.isArray(peliculasTerror) ? peliculasTerror : peliculasCatalogoBackup,
          catalog: catalog || {}
        });
        setCargando(false);
      })
      .catch((err) => {
        console.warn('Usando catálogo local por fallo en la API:', err);
        setDatosApi({
          peliculasTerror: peliculasCatalogoBackup,
          catalog: {}
        });
        setCargando(false);
      });
  }, []);

  // Función auxiliar para filtrar las listas según la barra de búsqueda
  const filtrar = (lista = []) => 
    lista.filter(m => (m.titulo || "").toLowerCase().includes(busqueda.toLowerCase()));

  const terrorFiltrado = filtrar(datosApi.peliculasTerror);
  const top5Filtrado = filtrar(datosApi.catalog["TOP 5"]);
  const clasicosFiltrados = filtrar(datosApi.catalog["Los clasicos"]);
  const masVistosFiltrados = filtrar(datosApi.catalog["mas vistos"]);

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
          {terrorFiltrado.length > 0 && (
            <MovieRow title="Películas de Terror" movies={terrorFiltrado} />
          )}
          {top5Filtrado.length > 0 && (
            <MovieRow title="TOP 5" movies={top5Filtrado} />
          )}
          {clasicosFiltrados.length > 0 && (
            <MovieRow title="Los Clásicos" movies={clasicosFiltrados} />
          )}
          {masVistosFiltrados.length > 0 && (
            <MovieRow title="Más Vistos" movies={masVistosFiltrados} />
          )}

          {terrorFiltrado.length === 0 && top5Filtrado.length === 0 && clasicosFiltrados.length === 0 && masVistosFiltrados.length === 0 && (
            <p className="text-zinc-400 text-center py-10">No se encontraron películas con ese nombre.</p>
          )}
        </div>
      )}
    </div>
  );
}