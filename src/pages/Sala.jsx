import React, { useState, useEffect } from "react";

<<<<<<< HEAD
// Las 3 cabinas oficiales de nuestro videoclub equipadas con PC
const cabinasFijas = [
  {
    id: "cabina-1",
    nombre: "Sala 1: El Sótano VHS",
    descripcion:
      "Equipada con PC retro, sistema de sonido envolvente y proyector de cinta analógica.",
    capacidad: "Hasta 4 personas",
    imagen:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "cabina-2",
    nombre: "Sala 2: La Cripta Slasher",
    descripcion:
      "Cabina oscura con PC de alta potencia para streaming de terror y maratones nocturnas.",
    capacidad: "Hasta 2 personas",
    imagen:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "cabina-3",
    nombre: "Sala 3: El Laboratorio Z",
    descripcion:
      "Espacio amplio con terminales múltiples y ambientación de búnker post-apocalíptico.",
    capacidad: "Hasta 6 personas",
    imagen:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop",
  },
];

=======
>>>>>>> 357c59f (sala y prestamo)
export default function Sala() {
  const [salas, setSalas] = useState([]);
  const [catalog, setCatalog] = useState({});
  const [cargando, setCargando] = useState(true);

  // Estados del formulario de reserva
  const [cabinaSeleccionada, setCabinaSeleccionada] = useState("");
  const [peliculaElegida, setPeliculaElegida] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [fechaReserva, setFechaReserva] = useState("");
  const [horario, setHorario] = useState("18:00 - 21:00");
  const [mensajeExito, setMensajeExito] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
    // Petición al endpoint del catálogo en tu json-server
    fetch("http://localhost:3000/catalogo")
      .then((res) => {
        if (!res.ok)
          throw new Error("Error al cargar el catálogo de películas");
        return res.json();
      })
      .then((data) => {
        setCatalog(data || {});
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al conectar con la API:", err);
=======
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
>>>>>>> 357c59f (sala y prestamo)
        setCatalog({});
        setCargando(false);
      });
  };

  // Función robusta para la ruta de imágenes compatible con subdirectorios y espacios
  const obtenerRutaImagen = (ruta) => {
    if (!ruta) return "";
<<<<<<< HEAD
    return ruta.startsWith("/") ? ruta : `/${ruta}`;
=======
    const cleanPath = ruta.startsWith('/') ? ruta.slice(1) : ruta;
    const base = import.meta.env.BASE_URL || '/';
    const baseNormalized = base.endsWith('/') ? base : `${base}/`;
    return encodeURI(`${baseNormalized}${cleanPath}`);
>>>>>>> 357c59f (sala y prestamo)
  };

  const handleReservar = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (
      !cabinaSeleccionada ||
      !peliculaElegida ||
      !nombreUsuario ||
      !fechaReserva
    ) {
      alert(
        "Por favor, selecciona una cabina, una película de tu listado, tu nombre y la fecha.",
      );
=======
    if (!cabinaSeleccionada || !peliculaElegida || !nombreUsuario || !fechaReserva) {
      alert('Por favor, selecciona una cabina, una película, tu nombre y la fecha de la sesión.');
>>>>>>> 357c59f (sala y prestamo)
      return;
    }

    const nuevaReserva = {
      id: Date.now().toString(),
      usuario: nombreUsuario,
      cabina: cabinaSeleccionada,
      pelicula: peliculaElegida,
      fecha: fechaReserva,
      horario: horario,
      timestamp: new Date().toISOString(),
    };

    fetch("http://localhost:3000/reservas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaReserva),
    })
      .then((res) => {
<<<<<<< HEAD
        if (!res.ok)
          throw new Error("Error al registrar la reserva en la base de datos");
        return res.json();
      })
      .then(() => {
        setMensajeExito(
          `¡Cabina reservada con éxito, ${nombreUsuario}! Tu sesión para ver "${peliculaElegida}" está asegurada.`,
        );
        setNombreUsuario("");
        setFechaReserva("");
        setCabinaSeleccionada("");
        setPeliculaElegida("");
=======
        if (!res.ok) throw new Error('Error al registrar la reserva');
        return res.json();
      })
      .then(() => {
        setMensajeExito(`¡Reserva confirmada, ${nombreUsuario}! Tu sesión para ver "${peliculaElegida}" en "${cabinaSeleccionada}" está lista.`);
        setNombreUsuario('');
        setFechaReserva('');
        setCabinaSeleccionada('');
        setPeliculaElegida('');
>>>>>>> 357c59f (sala y prestamo)
        setTimeout(() => setMensajeExito(null), 6000);
      })
      .catch((err) => console.error("Error en la reserva:", err));
  };

  return (
    <div className="sala-container min-h-screen bg-[#080808] text-white pt-24 px-6 md:px-16 pb-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-[#e50914] mb-3 drop-shadow-[0_0_10px_rgba(229,9,20,0.6)]">
          Sala de Proyección & Terminales PC
        </h2>
        <p className="text-zinc-400 text-sm md:text-base">
<<<<<<< HEAD
          Aparta una de nuestras 3 cabinas privadas equipadas con PC y elige qué
          cinta de tus estantes deseas reproducir.
=======
          Aparta una cabina privada y elige la cinta de terror que deseas reproducir desde nuestros estantes conectados.
>>>>>>> 357c59f (sala y prestamo)
        </p>
      </div>

      {mensajeExito && (
        <div className="max-w-xl mx-auto mb-8 bg-[#e50914]/25 border border-[#e50914] text-red-200 p-4 rounded text-center shadow-[0_0_15px_rgba(229,9,20,0.4)]">
          <p className="font-bold text-sm">{mensajeExito}</p>
        </div>
      )}

      {cargando ? (
<<<<<<< HEAD
        <p className="text-white text-center py-20 animate-pulse">
          Sintonizando cabinas y estantes del videoclub...
        </p>
      ) : (
        <div className="max-w-7xl mx-auto space-y-12">
          {/* 1. Selección de las 3 Cabinas */}
=======
        <p className="text-white text-center py-20 animate-pulse">Sintonizando cabinas y estantes...</p>
      ) : (
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* 1. Selección de Cabinas */}
>>>>>>> 357c59f (sala y prestamo)
          <div>
            <h3 className="text-xl font-bold uppercase text-zinc-200 mb-6 border-l-4 border-[#e50914] pl-3">
              1. Selecciona tu Cabina
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {salas.map((sala) => {
                const seleccionada = cabinaSeleccionada === sala.nombre;
                return (
                  <div
                    key={sala.id}
                    onClick={() => setCabinaSeleccionada(sala.nombre)}
                    className={`bg-zinc-900 border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between ${
<<<<<<< HEAD
                      seleccionada
                        ? "border-[#e50914] ring-2 ring-[#e50914] shadow-[0_0_20px_rgba(229,9,20,0.5)] scale-[1.02]"
                        : "border-zinc-800 hover:border-zinc-600"
=======
                      seleccionada ? 'border-[#e50914] ring-2 ring-[#e50914] shadow-[0_0_20px_rgba(229,9,20,0.5)] scale-[1.02]' : 'border-zinc-800 hover:border-zinc-700'
>>>>>>> 357c59f (sala y prestamo)
                    }`}
                  >
                    <div className="relative h-44 bg-black">
                      <img
                        src={sala.imagen}
                        alt={sala.nombre}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <span className="absolute top-2 left-2 bg-[#e50914] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        {sala.capacidad}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-base mb-1">
                        {sala.nombre}
                      </h4>
                      <p className="text-zinc-400 text-xs">
                        {sala.descripcion}
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <span
                        className={`block text-center text-xs font-bold py-2 rounded transition-colors ${
                          seleccionada
                            ? "bg-[#e50914] text-white"
                            : "bg-zinc-800 text-zinc-300"
                        }`}
                      >
                        {seleccionada
                          ? "✓ Cabina Seleccionada"
                          : "Elegir Cabina"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Selector de Películas por Categorías */}
          <div>
            <h3 className="text-xl font-bold uppercase text-zinc-200 mb-6 border-l-4 border-[#e50914] pl-3">
              2. Selecciona la Cinta a Proyectar
            </h3>

            <div className="space-y-6 bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              {Object.entries(catalog).map(([nombreCategoria, peliculas]) => (
                <div key={nombreCategoria}>
                  <h4 className="text-sm font-bold text-red-500 uppercase mb-3 tracking-wider">
                    {nombreCategoria}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {peliculas.map((movie) => {
                      const esSeleccionada = peliculaElegida === movie.titulo;
<<<<<<< HEAD
                      const rutaFinalImagen = obtenerRutaImagen(movie.imagen);
=======
                      const rutaImagen = obtenerRutaImagen(movie.imagen);
>>>>>>> 357c59f (sala y prestamo)

                      return (
                        <div
                          key={movie.id + movie.titulo}
                          onClick={() => setPeliculaElegida(movie.titulo)}
                          className={`cursor-pointer bg-zinc-900 rounded p-2 border transition-all ${
                            esSeleccionada
                              ? "border-[#e50914] ring-2 ring-[#e50914] shadow-[0_0_15px_rgba(229,9,20,0.5)]"
                              : "border-zinc-800 hover:border-zinc-700"
                          }`}
                        >
<<<<<<< HEAD
                          <img
                            src={rutaFinalImagen}
                            alt={movie.titulo}
                            className="w-full h-36 object-cover rounded mb-2 bg-black shadow"
                            onError={(e) => {
                              console.warn(
                                "No se pudo cargar la imagen:",
                                rutaFinalImagen,
                              );
                              e.target.src =
                                "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop";
                            }}
=======
                          <img 
                            src={rutaImagen} 
                            alt={movie.titulo} 
                            className="w-full h-36 object-cover rounded mb-2 bg-black shadow" 
                            onError={(e) => {
                              console.warn("No se pudo cargar la imagen:", rutaImagen);
                              e.target.src = "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop";
                            }} 
>>>>>>> 357c59f (sala y prestamo)
                          />
                          <p className="text-xs font-bold text-white truncate capitalize">
                            {movie.titulo}
                          </p>
                          <span
                            className={`text-[10px] block mt-1 font-bold ${esSeleccionada ? "text-red-400" : "text-zinc-500"}`}
                          >
                            {esSeleccionada ? "✓ Seleccionada" : "Elegir"}
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
          <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-xl font-bold uppercase text-zinc-200 mb-6 text-center">
              3. Datos de tu Sesión Nocturna
            </h3>

            <form onSubmit={handleReservar} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                  Tu Nombre / Alias
                </label>
                <input
                  type="text"
                  placeholder="Ej. Ash Williams"
                  value={nombreUsuario}
                  onChange={(e) => setNombreUsuario(e.target.value)}
                  className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-700 rounded text-white text-sm focus:border-[#e50914] focus:outline-none"
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
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-700 rounded text-white text-sm focus:border-[#e50914] focus:outline-none"
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
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-700 rounded text-white text-sm focus:border-[#e50914] focus:outline-none"
                  >
                    <option value="15:00 - 18:00">Tarde (15:00 - 18:00)</option>
                    <option value="18:00 - 21:00">
                      Vespertina (18:00 - 21:00)
                    </option>
                    <option value="21:00 - 00:00">
                      Medianoche (21:00 - 00:00)
                    </option>
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
                    value={cabinaSeleccionada || "Ninguna cabina seleccionada"}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded text-red-400 text-xs font-semibold cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                    Película Seleccionada
                  </label>
                  <input
                    type="text"
                    disabled
                    value={peliculaElegida || "Ninguna película elegida"}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded text-red-400 text-xs font-semibold cursor-not-allowed"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#e50914] hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-all duration-300 shadow-[0_0_15px_rgba(229,9,20,0.5)] cursor-pointer tracking-wider text-sm mt-4"
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
