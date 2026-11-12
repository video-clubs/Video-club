import { useState } from "react";
import movie from "../../data/movieData";

import HeroVideo from "./HeroVideo";
import HeroContent from "./HeroContent";
import HeroFooter from "./HeroFooter";
import HeroModal from "./HeroModal";

export const Hero = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative h-[85vh] min-h-[550px] w-full overflow-hidden bg-black text-white">
      <HeroVideo
        videoSrc={movie.videoSrc}
        isMuted={isMuted}
        onToggleSound={() => setIsMuted(!isMuted)}
      />

      <HeroContent
        movie={{
          title: movie.titulo,
          synopsis: movie.sinopsis || "",
          ...movie,
        }}
        isAdded={isAdded}
        onToggleList={() => setIsAdded(!isAdded)}
        onShowDetails={() => setShowModal(true)}
      />

      <HeroFooter genres={movie.genres} ageRating={movie.ageRating} />

      {showModal && (
        <HeroModal
          movie={{
            title: movie.titulo,
            synopsis: movie.sinopsis || "",
            ...movie,
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default Hero;
