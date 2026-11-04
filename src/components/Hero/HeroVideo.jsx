const HeroVideo = ({ videoSrc, isMuted, onToggleSound }) => {
  return (
    <>
      {/* Vídeo de fondo */}
      <div className="absolute inset-0 z-[1]">
        <video
          className="pointer-events-none h-full w-full object-cover"
          src={videoSrc}
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
        onClick={onToggleSound}
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
    </>
  );
};

export default HeroVideo;