import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import MovieRow from '../components/MovieRow/MovieRow';

function Home() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    // Consume las películas de terror independientes de localhost:5000
    fetch('http://localhost:5000/peliculasTerror')
      .then((res) => {
        if (!res.ok) throw new Error('Error cargando películas de terror');
        return res.json();
      })
      .then((data) => setPeliculas(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Hero />
      <div className="home-content">
        {peliculas && peliculas.length > 0 ? (
          <MovieRow title="Películas de Terror" movies={peliculas} />
        ) : (
          <div style={{ color: 'white', padding: '40px' }}>Cargando películas de terror...</div>
        )}
      </div>
    </div>
  );
}

export default Home;
