const HeroModal = ({ movie, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[500px] rounded-lg border border-[#e50914] bg-[#121212] p-6 shadow-[0_0_25px_rgba(229,9,20,0.3)] sm:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hero-modal-title"
      >
        {/* Cerrar modal */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana"
          className="absolute right-4 top-4 text-xl text-white transition-colors hover:text-[#e50914]"
        >
          ✕
        </button>

        <h2
          id="hero-modal-title"
          className="pr-8 text-xl font-bold text-white"
        >
          {movie.title} ({movie.year})
        </h2>

        <p className="my-4 text-sm text-[#888]">
          Duración: {movie.duration} | Clasificación: {movie.ageRating}
        </p>

        <p className="text-sm leading-relaxed text-[#ccc]">
          {movie.description}
        </p>

        <div className="mt-6">
          <button
            type="button"
            className="w-full rounded bg-[#e50914] px-4 py-3 font-bold text-white transition-colors hover:bg-[#b20710]"
          >
            Alquilar formato VHS / Digital
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroModal;