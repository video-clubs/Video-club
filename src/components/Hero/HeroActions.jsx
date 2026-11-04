const HeroActions = ({ isAdded, onToggleList, onShowDetails }) => {
  return (
    <div className="flex items-center gap-4">

      {/* Añadir a mi lista */}
      <button
        type="button"
        onClick={onToggleList}
        title={isAdded ? "Quitar de mi lista" : "Añadir a mi lista"}
        aria-label={isAdded ? "Quitar de mi lista" : "Añadir a mi lista"}
        aria-pressed={isAdded}
        className={`flex h-11 w-11 items-center justify-center rounded-full border bg-[#121212]/60 text-xl text-white transition-all duration-200 hover:border-[#e50914] hover:bg-[#e50914]/20 ${
          isAdded
            ? "border-[#25d366] text-[#25d366]"
            : "border-white/30"
        }`}
      >
        {isAdded ? "✓" : "+"}
      </button>

      {/* Más información */}
      <button
        type="button"
        onClick={onShowDetails}
        title="Más información"
        aria-label="Más información"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#121212]/60 text-xl text-white transition-all duration-200 hover:border-[#e50914] hover:bg-[#e50914]/20"
      >
        &#9432;
      </button>

    </div>
  );
};

export default HeroActions;