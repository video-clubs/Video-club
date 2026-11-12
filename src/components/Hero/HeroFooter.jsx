const HeroFooter = ({ genres, ageRating }) => {
  return (
    <div className="absolute bottom-4 md:bottom-6 z-10 flex w-full flex-wrap items-center justify-between gap-3 px-4 md:px-16">
      <div className="flex flex-wrap gap-3 md:gap-5 mt-3 md:mt-5">
        {genres.map((genre) => (
          <span
            key={genre}
            className="rounded border border-white/10 bg-white/[0.08] px-3 py-1 text-base text-[#d1d1d1]"
          >
            {genre}
          </span>
        ))}
      </div>

      <span className="rounded border border-[#e50914] bg-[#121212] px-2 py-1 text-sm font-extrabold text-[#e50914]">
        {ageRating}
      </span>
    </div>
  );
};

export default HeroFooter;
