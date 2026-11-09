import { useState } from "react";
import movie from "../../data/movieData";

// 1. Restauramos todas las importaciones de los subcomponentes del Hero
import HeroVideo from "./HeroVideo";
import HeroContent from "./HeroContent";
import HeroFooter from "./HeroFooter";
import HeroModal from "./HeroModal";

// 2. Constante local con datos de respaldo seguros basados en tu JSON real
const MOVIE_DEFAULT = {
  titulo: "Así en la Tierra como en el Infierno",
  videoSrc: "",
  genres: ["Found Footage", "Misterio"],
  ageRating: "+16",
  sinopsis: "Un equipo de arqueólogos busca la piedra filosofal en las catacumbas de París."
};

export const Hero = () => {
  // Estados del componente
  const [isAdded, setIsAdded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const movie = MOVIE_DEFAULT;

  return (
    <section className="relative h-[85vh] min-h-[550px] w-full overflow-hidden bg-black text-white">

      {/* Vídeo y sonido */}
      <HeroVideo
        videoSrc={movie.videoSrc}
        isMuted={isMuted}
        onToggleSound={() => setIsMuted(!isMuted)}
      />

      {/* Información y botones */}
      <HeroContent
        movie={{
          title: movie.titulo,
          synopsis: movie.sinopsis || "",
          ...movie
        }}
        isAdded={isAdded}
        onToggleList={() => setIsAdded(!isAdded)}
        onShowDetails={() => setShowModal(true)}
      />

      {/* Géneros y clasificación */}
      <HeroFooter
        genres={movie.genres}
        ageRating={movie.ageRating}
      />

      {/* Modal */}
      {showModal && (
        <HeroModal
          movie={{
            title: movie.titulo,
            synopsis: movie.sinopsis || "",
            ...movie
          }}
          onClose={() => setShowModal(false)}
        />
      )}

    </section>
  );
};

export default Hero;
