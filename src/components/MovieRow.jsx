import React, { useRef } from 'react';
import './MovieRow.css';

export const MovieRow = ({ title, movies = [] }) => {
  const rowRef = useRef(null);

  // Función segura para desplazar el carrusel a la izquierda o derecha
  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.75; // Desplaza el 75% de la anchura visible
      
      rowRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      
      <div className="row-container">
        {/* Flecha Izquierda */}
        <button 
          className="slider-arrow left" 
          onClick={() => handleScroll('left')}
          aria-label="Desplazar a la izquierda"
        >
          &#10094;
        </button>

        {/* Contenedor de tarjetas con scroll horizontal */}
        <div className="row-cards" ref={rowRef}>
          {movies.map((movie, index) => (
            <div key={index} className="movie-card">
              {movie.badge && <span className="card-badge">{movie.badge}</span>}
              <img src={movie.image} alt={movie.title} className="card-img" />
              <div className="card-info">
                <h3>{movie.title}</h3>
                <p>{movie.year} • {movie.genre}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flecha Derecha */}
        <button 
          className="slider-arrow right" 
          onClick={() => handleScroll('right')}
          aria-label="Desplazar a la derecha"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default MovieRow;