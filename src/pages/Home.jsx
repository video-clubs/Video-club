
// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero/Hero";
import MovieRow from "../components/MovieRow/MovieRow";
import moviesData from "../data/movies.json";

function Home() {
  const peliculasTerror = moviesData.peliculasTerror;

  return (
    <div className="min-h-screen bg-[#080808] overflow-x-hidden">
      <Hero />

      <div className="home-content pb-16 px-4 sm:px-6 md:px-16">
        <MovieRow
          title="Películas de Terror"
          movies={peliculasTerror}
        />
      </div>
    </div>
  );
}

export default Home;
