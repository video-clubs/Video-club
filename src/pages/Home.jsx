import peliculasTerror from "../data/movies.json";

import  Hero  from "../components/Hero/Hero";
import MovieRow from "../components/MovieRow/MovieRow";

function Home() {
  return (
    <>
      <Hero />

      <MovieRow
        title="Películas de Terror"
        movies={peliculasTerror}
      />
    </>
  );
}

export default Home;