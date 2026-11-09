
function MovieCard({ movie }) {
  const rutaImagen = movie.imagen
    ? `${import.meta.env.BASE_URL}${movie.imagen.replace(/^\//, "")}`
    : "";

  return (
    <article className="relative w-[220px] shrink-0 cursor-pointer overflow-hidden rounded-md border border-[#222] bg-[#121212] transition-all duration-300 hover:scale-105 hover:border-[#e50914] hover:shadow-[0_0_15px_rgba(229,9,20,0.4)]">

      {movie.etiqueta && (
        <span className="absolute left-[10px] top-[10px] z-[2] rounded-sm bg-[#e50914] px-1.5 py-[3px] text-[0.65rem] font-extrabold tracking-wider text-white">
          {movie.etiqueta}
        </span>
      )}

      <img
        src={rutaImagen}
        alt={`Cartel de ${movie.titulo}`}
        className="h-[280px] w-full object-cover"
      />

      <div className="p-3">
        <h3 className="mb-1 truncate text-[0.95rem] font-medium text-white">
          {movie.titulo}
        </h3>

        <p className="truncate text-xs text-[#888]">
          {movie.anio} • {movie.genero}
        </p>
      </div>

    </article>
  );
}

export default MovieCard;
