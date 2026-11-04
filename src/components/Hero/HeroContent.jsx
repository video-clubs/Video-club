import HeroActions from "./HeroActions";

const HeroContent = ({
  movie,
  isAdded,
  onToggleList,
  onShowDetails,
}) => {
  return (
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
          onClick={onShowDetails}
          className="flex items-center gap-2 rounded-md bg-[#e50914] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[#b20710] hover:shadow-[0_0_15px_rgba(229,9,20,0.5)]"
        >
          <span>►</span>
          <span>Ver Detalles</span>
        </button>

        <HeroActions
          isAdded={isAdded}
          onToggleList={onToggleList}
          onShowDetails={onShowDetails}
        />

      </div>
    </div>
  );
};

export default HeroContent;