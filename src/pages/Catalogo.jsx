import React, { useState } from 'react';

// Catálogo ampliado de películas de terror con estética VHS
const peliculasCatalogo = [
  { id: 1, title: "Así en la Tierra como en el Infierno", year: "2014", genre: "Found Footage", badge: "DESTACADO", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop" },
  { id: 2, title: "Psicosis", year: "1960", genre: "Clásico", badge: "VHS VINTAGE", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop" },
  { id: 3, title: "El Legado del Diablo", year: "2018", genre: "Sobrenatural", badge: "NC ORIGINAL", image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop" },
  { id: 4, title: "La Noche de las Bestias", year: "1984", genre: "Slasher", badge: "CULTO", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop" },
  { id: 5, title: "Voces en la Oscuridad", year: "2023", genre: "Psicológico", badge: "ESTRENO", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop" },
  { id: 6, title: "Masacre en el Campamento", year: "1986", genre: "Slasher", badge: "VHS VINTAGE", image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop" },
  { id: 7, title: "Infección Z", year: "2022", genre: "Survival Horror", badge: "POPULAR", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop" },
  { id: 8, title: "El Retorno de las Sombras", year: "2025", genre: "Sobrenatural", badge: "EXCLUSIVO", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop" }
];

export default function Catalogo() {
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const categorias = ["Todos", "Slasher", "Sobrenatural", "Found Footage", "Clásico", "Psicológico"];

  // Filtrar películas por género y barra de búsqueda
  const peliculasFiltradas = peliculasCatalogo.filter(pelicula => {
    const coincideCategoria = filtroCategoria === "Todos" || pelicula.genre.toLowerCase().includes(filtroCategoria.toLowerCase());
    const coincideBusqueda = pelicula.title.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-24 px-4 md:px-12 pb-16">
      {/* Encabezado de la Sección */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider text-red-600 mb-3 drop-shadow-[0_0_10px_rgba(220,38,38,0.7)]">
          CATÁLOGO VHS DE TERROR
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Explora los estantes de nuestro videoclub maldito. Selecciona tu cinta y prepárate para pasar miedo.
        </p>
      </div>

      {/* Barra de Filtros y Buscador interno */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        {/* Botones de Categorías */}
        <div className="flex flex-wrap justify-center gap-2">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setFiltroCategoria(cat)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                filtroCategoria === cat
                  ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                  : "bg-neutral-900 text-gray-400 hover:bg-neutral-800 hover:text-white border border-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Buscador */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Buscar cinta de terror..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-red-600 text-sm"
          />
        </div>
      </div>

      {/* Cuadrícula de Películas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {peliculasFiltradas.length > 0 ? (
          peliculasFiltradas.map((pelicula) => (
            <div 
              key={pelicula.id}
              className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden group hover:border-red-600/65 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Imagen y Badge VHS */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pelicula.image} 
                    alt={pelicula.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow">
                    {pelicula.badge}
                  </span>
                  <span className="absolute bottom-3 left-3 text-xs bg-black/80 px-2 py-1 rounded text-gray-300 border border-neutral-700">
                    {pelicula.year}
                  </span>
                </div>

                {/* Detalles de la tarjeta */}
                <div className="p-4">
                  <span className="text-xs text-red-500 font-semibold uppercase tracking-wider block mb-1">
                    {pelicula.genre}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {pelicula.title}
                  </h3>
                </div>
              </div>

              {/* Botón de acción */}
              <div className="p-4 pt-0">
                <button 
                  onClick={() => alert(`¡Has añadido "${pelicula.title}" a tus alquileres del videoclub!`)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded transition-colors shadow-[0_0_10px_rgba(220,38,38,0.4)] cursor-pointer"
                >
                  Alquilar VHS (48h)
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            <p className="text-xl">No hay cintas disponibles con ese nombre en los estantes.</p>
          </div>
        )}
      </div>
    </div>
  );
}