// src/pages/Prestamo.jsx
import React, { useState, useEffect } from 'react';

export default function Prestamo() {
  const [prestamos, setPrestamos] = useState([]);
  const [catalogo, setCatalogo] = useState({});
  const [cargando, setCargando] = useState(true);

  // Estados del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [documento, setDocumento] = useState('');
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = () => {
    setCargando(true);
    Promise.all([
      fetch('http://localhost:3000/prestamos').then(res => res.ok ? res.json() : []),
      fetch('http://localhost:3000/catalogo').then(res => res.ok ? res.json() : {})
    ])
      .then(([prestamosRes, catalogoRes]) => {
        // Aseguramos que prestamos sea siempre un array
        setPrestamos(Array.isArray(prestamosRes) ? prestamosRes : []);
        setCatalogo(catalogoRes || {});
        setCargando(false);
      })
      .catch(err => {
        console.error("Error al conectar con JSON Server:", err);
        setPrestamos([]);
        setCargando(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !documento || !peliculaSeleccionada) {
      alert('Por favor, completa todos los campos del préstamo.');
      return;
    }

    const prestamoData = {
      nombre,
      apellido,
      documento,
      pelicula: peliculaSeleccionada,
      fecha: new Date().toLocaleDateString()
    };

    const url = editandoId 
      ? `http://localhost:3000/prestamos/${editandoId}` 
      : 'http://localhost:3000/prestamos';
    
    const method = editandoId ? 'PUT' : 'POST';
    const payload = editandoId ? prestamoData : { ...prestamoData, id: Date.now().toString() };

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al guardar en el servidor');
        return res.json();
      })
      .then(() => {
        limpiarForm();
        cargarDatos();
      })
      .catch(err => console.error("Error en la operación:", err));
  };

  const handleEditar = (prestamo) => {
    setNombre(prestamo.nombre);
    setApellido(prestamo.apellido);
    setDocumento(prestamo.documento);
    setPeliculaSeleccionada(prestamo.pelicula);
    setEditandoId(prestamo.id);
  };

  const handleEliminar = (id) => {
    if (window.confirm("¿Estás seguro de liberar esta cinta y eliminar el registro?")) {
      fetch(`http://localhost:3000/prestamos/${id}`, {
        method: 'DELETE'
      })
        .then(() => cargarDatos())
        .catch(err => console.error("Error al eliminar:", err));
    }
  };

  const limpiarForm = () => {
    setNombre('');
    setApellido('');
    setDocumento('');
    setPeliculaSeleccionada('');
    setEditandoId(null);
  };

  // Extraer películas de forma segura
  const todasLasPeliculas = [];
  if (catalogo && typeof catalogo === 'object') {
    Object.values(catalogo).forEach(categoriaArray => {
      if (Array.isArray(categoriaArray)) {
        categoriaArray.forEach(m => {
          if (m && m.titulo) todasLasPeliculas.push(m.titulo);
        });
      }
    });
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-24 px-6 md:px-16 pb-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-[#e50914] mb-3 drop-shadow-[0_0_10px_rgba(229,9,20,0.6)]">
          Control de Préstamos VHS & Admin
        </h2>
        <p className="text-zinc-400 text-sm md:text-base">
          Registra el alquiler físico de cintas, consulta qué películas están ocupadas en tiempo real y administra los registros.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Formulario */}
        <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-xl h-fit">
          <h3 className="text-lg font-bold uppercase text-zinc-200 mb-4 border-b border-zinc-800 pb-2 flex items-center justify-between">
            <span>{editandoId ? "Editar Préstamo" : "Nuevo Préstamo"}</span>
            {editandoId && <span className="text-[10px] bg-amber-600 px-2 py-0.5 rounded text-white">Modo Edición</span>}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase text-zinc-400 mb-1 font-semibold">Nombre</label>
              <input 
                type="text" 
                placeholder="Ej. Laurie"
                value={nombre} 
                onChange={e => setNombre(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded text-sm text-white focus:border-[#e50914] focus:outline-none"
                required 
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-zinc-400 mb-1 font-semibold">Apellido</label>
              <input 
                type="text" 
                placeholder="Ej. Strode"
                value={apellido} 
                onChange={e => setApellido(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded text-sm text-white focus:border-[#e50914] focus:outline-none"
                required 
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-zinc-400 mb-1 font-semibold">Documento de Identidad</label>
              <input 
                type="text" 
                placeholder="Ej. 12345678X"
                value={documento} 
                onChange={e => setDocumento(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded text-sm text-white focus:border-[#e50914] focus:outline-none"
                required 
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-zinc-400 mb-1 font-semibold">Seleccionar Película VHS</label>
              <select 
                value={peliculaSeleccionada} 
                onChange={e => setPeliculaSeleccionada(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded text-sm text-white focus:border-[#e50914] focus:outline-none capitalize"
                required
              >
                <option value="">Selecciona una cinta...</option>
                {todasLasPeliculas.map((titulo, idx) => (
                  <option key={idx} value={titulo}>{titulo}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-2 pt-2">
              <button 
                type="submit"
                className="w-full bg-[#e50914] hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded text-xs transition cursor-pointer tracking-wider shadow-[0_0_10px_rgba(229,9,20,0.4)]"
              >
                {editandoId ? "Actualizar Registro" : "Registrar Préstamo"}
              </button>
              {editandoId && (
                <button 
                  type="button"
                  onClick={limpiarForm}
                  className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold py-2.5 px-3 rounded text-xs transition cursor-pointer"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Listado de Préstamos Activos */}
        <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-xl">
          <h3 className="text-lg font-bold uppercase text-zinc-200 mb-4 border-b border-zinc-800 pb-2 flex justify-between items-center">
            <span>Cintas Ocupadas & Préstamos Activos</span>
            <span className="text-xs bg-red-600/20 text-red-400 border border-red-600/50 px-2.5 py-0.5 rounded-full">
              {prestamos.length} en alquiler
            </span>
          </h3>

          {cargando ? (
            <p className="text-zinc-400 text-center py-12 text-sm animate-pulse">Sintonizando registros de préstamos...</p>
          ) : prestamos.length === 0 ? (
            <div className="text-center py-16 text-zinc-500">
              <p className="text-base font-semibold mb-1">No hay cintas alquiladas actualmente.</p>
              <p className="text-xs">Todas las películas de los estantes están disponibles para el público.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-300">
                <thead className="bg-zinc-950 text-[11px] uppercase text-zinc-400 border-b border-zinc-800">
                  <tr>
                    <th className="py-3 px-3">Cliente</th>
                    <th className="py-3 px-3">Documento</th>
                    <th className="py-3 px-3">Película Alquilada</th>
                    <th className="py-3 px-3">Fecha</th>
                    <th className="py-3 px-3 text-center">Acciones Admin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {prestamos.map((item) => (
                    <tr key={item.id} className="hover:bg-zinc-800/40 transition">
                      <td className="py-3 px-3 font-medium text-white">{item.nombre} {item.apellido}</td>
                      <td className="py-3 px-3 text-zinc-400 text-xs">{item.documento}</td>
                      <td className="py-3 px-3 text-red-400 font-semibold capitalize">{item.pelicula}</td>
                      <td className="py-3 px-3 text-zinc-500 text-xs">{item.fecha}</td>
                      <td className="py-3 px-3 text-center flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handleEditar(item)}
                          className="bg-amber-600/80 hover:bg-amber-600 text-white px-2.5 py-1 rounded text-xs transition cursor-pointer font-medium shadow"
                        >
                          Editar
                        </button>
                        <button 
                          onClick={() => handleEliminar(item.id)}
                          className="bg-red-600/80 hover:bg-red-600 text-white px-2.5 py-1 rounded text-xs transition cursor-pointer font-medium shadow"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}