function MovieCard({ movie }) {
  // Aseguramos que la ruta comience con '/' antes de pegarla al localhost:3000
  const rutaImagen = movie.imagen && movie.imagen.startsWith('/') 
    ? movie.imagen 
    : `/${movie.imagen}`;

  return (
    <article className="relative w-[220px] shrink-0 cursor-pointer overflow-hidden rounded-md border border-[#222] bg-[#121212] transition-all duration-300 hover:scale-105 hover:border-[#e50914] hover:shadow-[0_0_15px_rgba(229,9,20,0.4)]">

      {/* Etiqueta de la película (Cambiado de movie.badge a movie.etiqueta) */}
      {movie.etiqueta && (
        <span className="absolute left-[10px] top-[10px] z-[2] rounded-sm bg-[#e50914] px-1.5 py-[3px] text-[0.65rem] font-extrabold tracking-wider text-white">
          {movie.etiqueta}
        </span>
      )}

      {/* Imagen apuntando al servidor del puerto 3000 */}
      <img
        src={`http://localhost:3000${rutaImagen}`}
        alt={`Cartel de ${movie.titulo}`}
        className="h-[280px] w-full object-cover"
      />

      {/* Información */}
      <div className="p-3">
        {/* Título (Cambiado de movie.title a movie.titulo) */}
        <h3 className="mb-1 truncate text-[0.95rem] font-medium text-white">
          {movie.titulo}
        </h3>

        {/* Año y Género (Cambiado a movie.anio y movie.genero) */}
        <p className="text-xs text-[#888] truncate">
          {movie.anio} • {movie.genero}
        </p>
      </div>

    </article>
  );
}

export default MovieCard;
