// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import MovieRow from "../components/MovieRow/MovieRow";

function Home() {
  const [peliculasTerror, setPeliculasTerror] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/peliculasTerror")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar catálogo");
        return res.json();
      })
      .then((data) => {
        setPeliculasTerror(data);
      })
      .catch((err) => {
        console.error("Error al cargar el catálogo:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] overflow-x-hidden">
      <Hero />
      <div className="home-content pb-16 px-4 sm:px-6 md:px-16">
        <MovieRow title="Películas de Terror" movies={peliculasTerror} />
      </div>
    </div>
  );
}

export default Home;
