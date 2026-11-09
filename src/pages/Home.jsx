import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import MovieRow from '../components/MovieRow/MovieRow';

function Home() {
  // 1. Definimos el estado para guardar las películas que vienen del JSON
  const [peliculasTerror, setPeliculasTerror] = useState([]);

  // 2. Usamos useEffect para hacer la petición fetch cuando el componente se monte
  useEffect(() => {
    fetch('http://localhost:3000/peliculasTerror')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar catálogo');
        return res.json();
      })
      .then((data) => {
        // 3. Guardamos los datos obtenidos en el estado
        setPeliculasTerror(data);
      })
      .catch((err) => {
        console.error('Error al cargar el catálogo:', err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#080808]">
      <Hero />
      <div className="home-content pb-12">
        {/* Se renderiza la fila pasando las películas obtenidas del servidor */}
        <MovieRow title="Películas de Terror" movies={peliculasTerror} />
      </div>
    </div>
  );
}

export default Home;