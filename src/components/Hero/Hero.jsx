  import { useState } from "react";

  export const Hero = () => {
    const [isAdded, setIsAdded] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const movie = {
      title: "ASÍ EN LA TIERRA COMO EN EL INFIERNO",
      year: 2014,
      duration: "1h 33m",
      ageRating: "16+",
      genres: ["Terror", "Found Footage", "Suspenso"],
      description:
        "A lo largo de los kilómetros de catacumbas que se retuercen debajo de las calles de París, un equipo de exploradores se adentra en las profundidades del laberinto para descubrir el secreto que se esconde tras las almas perdidas.",
      videoSrc: `${import.meta.env.BASE_URL}trailer-asienlatierra.mp4`,
    };

    return (
      <section className="relative h-[85vh] min-h-[550px] w-full overflow-hidden bg-black text-white">

        {/* Vídeo de fondo */}
        <div className="absolute inset-0 z-[1]">
          <video
            className="pointer-events-none h-full w-full object-cover"
            src={movie.videoSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />

          {/* Degradado sobre el vídeo */}
          <div
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  rgba(8,8,8,0.98) 0%,
                  rgba(8,8,8,0.85) 35%,
                  rgba(8,8,8,0.3) 65%,
                  transparent 100%
                ),
                linear-gradient(
                  0deg,
                  rgba(8,8,8,1) 0%,
                  transparent 30%
                )
              `,
            }}
          />
        </div>

        {/* Botón de sonido */}
        <button
          type="button"
          onClick={() => setIsMuted(!isMuted)}
          title={isMuted ? "Activar sonido" : "Silenciar"}
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          className="absolute bottom-24 right-6 z-[15] flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#121212]/60 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-[#e50914] hover:bg-[#e50914]/30 md:right-16"
        >
          {isMuted ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>

        {/* Contenido principal */}
        <div className="relative z-10 flex max-w-[600px] flex-col gap-5 px-6 pt-24 md:pl-16 md:pt-24">

          <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#e50914]">
            NIGHTMARE EXCLUSIVE • {movie.year}
          </span>

          <h1 className="text-3xl font-black uppercase leading-tight tracking-wide sm:text-4xl md:text-[2.8rem]">
            ASÍ EN LA TIERRA
            <br />
            <span className="[text-shadow:0_0_15px_rgba(229,9,20,0.4)] text-[#e50914]">
              COMO EN EL INFIERNO
            </span>
          </h1>

          <p className="line-clamp-3 text-sm leading-relaxed text-[#c0c0c0] sm:text-base">
            {movie.description}
          </p>

          {/* Botones de acción */}
          <div className="mt-2 flex items-center gap-4">

            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 rounded-md bg-[#e50914] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[#b20710] hover:shadow-[0_0_15px_rgba(229,9,20,0.5)]"
            >
              <span>►</span>
              <span>Ver Detalles</span>
            </button>

            <button
              type="button"
              onClick={() => setIsAdded(!isAdded)}
              title={isAdded ? "Quitar de mi lista" : "Añadir a mi lista"}
              aria-label={isAdded ? "Quitar de mi lista" : "Añadir a mi lista"}
              className={`flex h-11 w-11 items-center justify-center rounded-full border bg-[#121212]/60 text-xl text-white transition-all duration-200 hover:border-[#e50914] hover:bg-[#e50914]/20 ${
                isAdded
                  ? "border-[#25d366] text-[#25d366]"
                  : "border-white/30"
              }`}
            >
              {isAdded ? "✓" : "+"}
            </button>

            <button
              type="button"
              onClick={() => setShowModal(true)}
              title="Más información"
              aria-label="Más información"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#121212]/60 text-xl text-white transition-all duration-200 hover:border-[#e50914] hover:bg-[#e50914]/20"
            >
              &#9432;
            </button>
          </div>
        </div>

        {/* Pie del Hero */}
        <div className="absolute bottom-6 z-10 flex w-full flex-wrap items-center justify-between gap-4 px-6 md:px-16">

          <div className="flex flex-wrap gap-2.5">
            {movie.genres.map((genre) => (
              <span
                key={genre}
                className="rounded border border-white/10 bg-white/[0.08] px-3 py-1 text-xs text-[#d1d1d1]"
              >
                {genre}
              </span>
            ))}
          </div>

          <span className="rounded border border-[#e50914] bg-[#121212] px-2 py-1 text-sm font-extrabold text-[#e50914]">
            {movie.ageRating}
          </span>
        </div>

        {/* Modal de información */}
        {showModal && (
          <div
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative w-full max-w-[500px] rounded-lg border border-[#e50914] bg-[#121212] p-6 shadow-[0_0_25px_rgba(229,9,20,0.3)] sm:p-8"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="hero-modal-title"
            >
              <button
                type="button"
                onClick={() => setShowModal(false)}
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
        )}

      </section>
    );
  };

  export default Hero;
