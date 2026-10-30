import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Aquí puedes emitir una función hacia el padre o filtrar las películas
  };

  return (
    <nav className="navbar">
      {/* Izquierda: Logo de letras más grande */}
      <div className="navbar-brand">
        <Link to="/">
          <img 
            src="src/assets/letras-logo.png" 
            alt="Nightmare Club" 
            className="navbar-logo-letters"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'inline-block';
            }}
          />
          <span className="brand-fallback-text" style={{ display: 'none' }}>
            NIGHTMARE <span className="brand-accent">CLUB</span>
          </span>
        </Link>
      </div>

      {/* Centro: Enlaces de navegación */}
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Inicio
        </NavLink>
        <NavLink to="/catalogo" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Catálogo VHS
        </NavLink>
        <NavLink to="/novedades" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Estrenos
        </NavLink>
        <NavLink to="/alquileres" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Mis Alquileres
        </NavLink>
      </div>

      {/* Derecha: Barra de búsqueda completa */}
      <div className="navbar-search-box">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          className="search-input"
          placeholder="Buscar películas, directores..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;