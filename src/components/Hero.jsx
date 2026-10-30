import React, { useState } from 'react';
import './Hero.css';

export const Hero = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const movie = {
    title: "ASÍ EN LA TIERRA COMO EN EL INFIERNO",
    year: 2014,
    duration: "1h 33m",
    ageRating: "16+",
    genres: ["Terror", "Found Footage", "Suspenso"],
    description: "A lo largo de los kilómetros de catacumbas que se retuercen debajo de las calles de París, un equipo de exploradores se adentra en las profundidades del laberinto para descubrir el secreto que se esconde tras las almas perdidas.",
    // Puedes usar un enlace MP4 directo de prueba o colocar tu archivo local en la carpeta public (ej: "/trailer.mp4")
    videoSrc: "src\\assets\\trailer-asienlatierra.mp4"
  };

  return (
    <section className="hero-banner">
      {/* FONDO NATIVO MP4 EN SEGUNDO PLANO */}
      <div className="hero-backdrop">
        <video
          className="hero-video-native"
          src={movie.videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* BOTÓN DE SILENCIO (Estilo Netflix) */}
      <button 
        className="mute-btn-streaming" 
        onClick={() => setIsMuted(!isMuted)}
        title={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>

      {/* CONTENIDO FLOTANTE PRINCIPAL */}
      <div className="hero-content">
        <span className="hero-brand-tag">NIGHTMARE EXCLUSIVE • {movie.year}</span>

        <h1 className="hero-logo-title">
          ASÍ EN LA TIERRA <br />
          <span className="highlight-red">COMO EN EL INFIERNO</span>
        </h1>

        <p className="hero-short-desc">
          {movie.description}
        </p>

        {/* BOTONES DE ACCIÓN */}
        <div className="hero-actions">
          <button className="btn-play-trailer" onClick={() => setShowModal(true)}>
            <span className="play-icon">►</span>
            <span className="btn-text">Ver Detalles</span>
          </button>
          
          <button 
            className={`btn-icon-circle ${isAdded ? 'added' : ''}`} 
            onClick={() => setIsAdded(!isAdded)}
            title={isAdded ? "Quitar de mi lista" : "Añadir a mi lista"}
          >
            {isAdded ? '✓' : '+'}
          </button>
          
          <button className="btn-icon-circle" onClick={() => setShowModal(true)} title="Más información">
            &#9432;
          </button>
        </div>
      </div>

      {/* PIE DEL HERO */}
      <div className="hero-footer-bar">
        <div className="hero-genres-badges">
          {movie.genres.map((g, idx) => (
            <span key={idx} className="genre-tag">{g}</span>
          ))}
        </div>
        <div className="hero-age-rating">
          <span className="age-badge">{movie.ageRating}</span>
        </div>
      </div>

      {/* MODAL DE INFORMACIÓN DETALLADA */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h2>{movie.title} ({movie.year})</h2>
            <p className="modal-meta">Duración: {movie.duration} | Clasificación: {movie.ageRating}</p>
            <p className="modal-desc">{movie.description}</p>
            <div className="modal-actions">
              <button className="btn-modal-rent">Alquilar formato VHS / Digital</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;