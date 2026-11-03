import { useRef } from "react";
import MovieCard from "./MovieCard";

function MovieRow({ title, movies = [] }) {
  const rowRef = useRef(null);

  // Desplazar el carrusel
  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollAmount = clientWidth * 0.75;

      rowRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-[#080808] px-6 py-8 md:px-16">
      {/* Título */}
      <h2 className="mb-4 border-l-4 border-[#e50914] pl-3 text-2xl font-extrabold uppercase tracking-wider text-white">
        {title}
      </h2>

      {/* Contenedor del carrusel */}
      <div className="relative flex items-center">
        {/* Flecha izquierda */}
        <button
          type="button"
          onClick={() => handleScroll("left")}
          aria-label="Desplazar a la izquierda"
          className="absolute left-[-20px] top-1/2 z-10 flex h-[100px] w-[45px] -translate-y-1/2 items-center justify-center rounded border border-white/20 bg-black/80 text-2xl text-white transition-all duration-200 hover:scale-105 hover:border-[#e50914] hover:bg-[#e50914]/90"
        >
          &#10094;
        </button>

        {/* Tarjetas */}
        <div
          ref={rowRef}
          className="flex w-full gap-[1.2rem] overflow-x-auto px-2 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          type="button"
          onClick={() => handleScroll("right")}
          aria-label="Desplazar a la derecha"
          className="absolute right-[-20px] top-1/2 z-10 flex h-[100px] w-[45px] -translate-y-1/2 items-center justify-center rounded border border-white/20 bg-black/80 text-2xl text-white transition-all duration-200 hover:scale-105 hover:border-[#e50914] hover:bg-[#e50914]/90"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default MovieRow;
