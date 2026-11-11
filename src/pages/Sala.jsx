// src/pages/Sala.jsx
import React, { useState, useEffect } from 'react';

export default function Sala() {
  const [salas, setSalas] = useState([]);
  const [catalog, setCatalog] = useState({});
  const [cargando, setCargando] = useState(true);

  // Estados del formulario de reserva
  const [cabinaSeleccionada, setCabinaSeleccionada] = useState('');
  const [peliculaElegida, setPeliculaElegida] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [fechaReserva, setFechaReserva] = useState('');
  const [horario, setHorario] = useState('18:00 - 21:00');
  const [mensajeExito, setMensajeExito] = useState(null);

  useEffect(() => {
    cargarDatosSala();
  }, []);

  const cargarDatosSala = () => {
    setCargando(true);
    Promise.all([
      fetch('http://localhost:3000/salas').then((res) => (res.ok ? res.json() : [])),
      fetch('http://localhost:3000/catalogo').then((res) => (res.ok ? res.json() : {}))
    ])
      .then(([salasData, catalogData]) => {
        setSalas(Array.isArray(salasData) ? salasData : []);
        setCatalog(catalogData || {});
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error al conectar con la API:', err);
        setSalas([]);
        setCatalog({});
        setCargando(false);
      });
  };

  const obtenerRutaImagen = (ruta) => {
    if (!ruta) return "";
    const cleanPath = ruta.startsWith('/') ? ruta.slice(1) : ruta;
    const base = import.meta.env.BASE_URL || '/';
    const baseNormalized = base.endsWith('/') ? base : `${base}/`;
    return encodeURI(`${baseNormalized}${cleanPath}`);
  };

  const handleReservar = (e) => {
    e.preventDefault();
    if (!cabinaSeleccionada || !peliculaElegida || !nombreUsuario || !fechaReserva) {
      alert('Por favor, selecciona una cabina, una película, tu nombre y la fecha de la sesión.');
      return;
    }

    const nuevaReserva = {
      id: Date.now().toString(),
      usuario: nombreUsuario,
      cabina: cabinaSeleccionada,
      pelicula: peliculaElegida,
      fecha: fechaReserva,
      horario: horario,
      timestamp: new Date().toISOString()
    };

    fetch('http://localhost:3000/reservas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevaReserva),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al registrar la reserva');
        return res.json();
      })
      .then(() => {
        setMensajeExito(`¡Reserva confirmada, ${nombreUsuario}! Tu sesión para ver "${peliculaElegida}" en "${cabinaSeleccionada}" está lista.`);
        setNombreUsuario('');
        setFechaReserva('');
        setCabinaSeleccionada('');
        setPeliculaElegida('');
        setTimeout(() => setMensajeExito(null), 6000);
      })
      .catch((err) => console.error('Error en la reserva:', err));
  };

  return (
    <div className="sala-container min-h-screen bg-[#080808] text-white pt-24 px-4 sm:px-6 md:px-16 pb-16 overflow-x-hidden">
      
      {/* Cabecera Adaptada */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-[#e50914] mb-3 drop-shadow-[0_0_10px_rgba(229,9,20,0.6)]">
          Sala de Proyección & Terminales PC
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
          Aparta una cabina privada y elige la cinta de terror que deseas reproducir desde nuestros estantes conectados.
        </p>
      </div>

      {mensajeExito && (
        <div className="max-w-xl mx-auto mb-8 bg-[#e50914]/25 border border-[#e50914] text-red-200 p-4 rounded text-center shadow-[0_0_15px_rgba(229,9,20,0.4)]">
          <p className="font-bold text-xs sm:text-sm">{mensajeExito}</p>
        </div>
      )}

      {cargando ? (
        <div className="text-center py-20">
          <p className="text-[#e50914] text-sm sm:text-base font-bold tracking-widest animate-pulse">
            📼 SINTONIZANDO CABINAS Y ESTANTES...
          </p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* 1. Selección de Cabinas */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold uppercase text-zinc-200 mb-6 border-l-4 border-[#e50914] pl-3">
              1. Selecciona tu Cabina
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {salas.map((sala) => {
                const seleccionada = cabinaSeleccionada === sala.nombre;
                return (
                  <div 
                    key={sala.id}
                    onClick={() => setCabinaSeleccionada(sala.nombre)}
                    className={`bg-zinc-950 border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                      seleccionada ? 'border-[#e50914] ring-2 ring-[#e50914] shadow-[0_0_20px_rgba(229,9,20,0.5)] scale-[1.02]' : 'border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className="relative h-40 sm:h-44 bg-black">
                      <img src={sala.imagen} alt={sala.nombre} className="w-full h-full object-cover opacity-80" />
                      <span className="absolute top-2 left-2 bg-[#e50914] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                        {sala.capacidad}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-base mb-1 text-white">{sala.nombre}</h4>
                      <p className="text-zinc-400 text-xs">{sala.descripcion}</p>
                    </div>
                    <div className="p-4 pt-0">
                      <span className={`block text-center text-xs font-bold py-2.5 rounded transition-colors ${
                        seleccionada ? 'bg-[#e50914] text-white shadow' : 'bg-zinc-900 text-zinc-300'
                      }`}>
                        {seleccionada ? '✓ Cabina Seleccionada' : 'Elegir Cabina'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Selector de Películas por Categorías (Optimizado con Scroll Táctil) */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold uppercase text-zinc-200 mb-6 border-l-4 border-[#e50914] pl-3">
              2. Selecciona la Cinta a Proyectar
            </h3>
            
            <div className="space-y-6 bg-zinc-950 p-4 sm:p-6 rounded-xl border border-zinc-800">
              {Object.entries(catalog).map(([nombreCategoria, peliculas]) => (
                <div key={nombreCategoria}>
                  <h4 className="text-xs sm:text-sm font-bold text-red-500 uppercase mb-3 tracking-wider">{nombreCategoria}</h4>
                  
                  {/* Cuadrícula adaptable y fluida para móviles */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                    {peliculas.map((movie) => {
                      const esSeleccionada = peliculaElegida === movie.titulo;
                      const rutaImagen = obtenerRutaImagen(movie.imagen);

                      return (
                        <div 
                          key={movie.id + movie.titulo}
                          onClick={() => setPeliculaElegida(movie.titulo)}
                          className={`cursor-pointer bg-zinc-900 rounded-lg p-2 border transition-all flex flex-col justify-between ${
                            esSeleccionada ? 'border-[#e50914] ring-2 ring-[#e50914] shadow-[0_0_15px_rgba(229,9,20,0.5)]' : 'border-zinc-800 hover:border-zinc-700'
                          }`}
                        >
                          <div>
                            <img 
                              src={rutaImagen} 
                              alt={movie.titulo} 
                              className="w-full h-32 sm:h-36 object-cover rounded mb-2 bg-black shadow" 
                              onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop";
                              }} 
                            />
                            <p className="text-xs font-bold text-white truncate capitalize">{movie.titulo}</p>
                          </div>
                          <span className={`text-[10px] block mt-2 font-bold text-center py-1 rounded ${
                            esSeleccionada ? 'bg-[#e50914] text-white' : 'bg-zinc-950 text-zinc-400'
                          }`}>
                            {esSeleccionada ? 'Seleccionada' : 'Elegir'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Formulario de Datos y Confirmación de Reserva */}
          <div className="max-w-2xl mx-auto bg-zinc-950 border border-zinc-800 p-6 sm:p-8 rounded-xl shadow-2xl">
            <h3 className="text-lg sm:text-xl font-bold uppercase text-zinc-200 mb-6 text-center">
              3. Datos de tu Sesión Nocturna
            </h3>

            <form onSubmit={handleReservar} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                  Tu Nombre / Alias
                </label>
                <input 
                  type="text"
                  placeholder="Ej. Ash Williams"
                  value={nombreUsuario}
                  onChange={(e) => setNombreUsuario(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white text-sm focus:border-[#e50914] focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                    Fecha
                  </label>
                  <input 
                    type="date"
                    value={fechaReserva}
                    onChange={(e) => setFechaReserva(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white text-sm focus:border-[#e50914] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                    Horario
                  </label>
                  <select
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white text-sm focus:border-[#e50914] focus:outline-none"
                  >
                    <option value="15:00 - 18:00">Tarde (15:00 - 18:00)</option>
                    <option value="18:00 - 21:00">Vespertina (18:00 - 21:00)</option>
                    <option value="21:00 - 00:00">Medianoche (21:00 - 00:00)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                    Cabina Elegida
                  </label>
                  <input 
                    type="text"
                    disabled
                    value={cabinaSeleccionada || 'Ninguna cabina seleccionada'}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-red-400 text-xs font-semibold cursor-not-allowed truncate"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                    Película Seleccionada
                  </label>
                  <input 
                    type="text"
                    disabled
                    value={peliculaElegida || 'Ninguna película elegida'}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-red-400 text-xs font-semibold cursor-not-allowed truncate"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#e50914] hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(229,9,20,0.5)] cursor-pointer tracking-wider text-xs sm:text-sm mt-4"
              >
                CONFIRMAR RESERVA EN JSON SERVER
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}