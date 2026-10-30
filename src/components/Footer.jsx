import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="nightmare-footer">
      <div className="footer-content">
        {/* Columna 1: Información del Videoclub */}
        <div className="footer-col">
          <h3 className="footer-brand">NIGHTMARE <span className="accent-red">CLUB</span></h3>
          <p className="footer-desc">
            Tu videoclub de confianza especializado en terror, VHS vintage y cultos cinematográficos. Abierto las 24 horas... si te atreves a entrar.
          </p>
          <p className="footer-schedule">🕒 Horario de atención: Lunes a Domingo de la 00:00 a las 03:00 (Hora de las Brujas).</p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="footer-col">
          <h4>Navegación</h4>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo VHS</Link></li>
            <li><Link to="/novedades">Últimos Estrenos</Link></li>
            <li><Link to="/alquileres">Mis Alquileres</Link></li>
          </ul>
        </div>

        {/* Columna 3: Categorías de Terror */}
        <div className="footer-col">
          <h4>Géneros Populares</h4>
          <ul className="footer-links">
            <li><a href="#found-footage">Found Footage</a></li>
            <li><a href="#slasher">Slasher & Gore</a></li>
            <li><a href="#sobrenatural">Terror Sobrenatural</a></li>
            <li><a href="#clasicos">Clásicos de los 80s</a></li>
          </ul>
        </div>

        {/* Columna 4: Boletín / Advertencia */}
        <div className="footer-col">
          <h4>Suscripción Maldita</h4>
          <p className="footer-subtext">Recibe avisos directos cuando una nueva maldición llegue al catálogo.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Ingresa tu correo..." />
            <button type="button">Unirme</button>
          </div>
        </div>
      </div>

      {/* Barra Inferior de Derechos */}
      <div className="footer-bottom">
        <p>&copy; 2026 Nightmare Club. Todos los derechos reservados. Las almas que alquilan películas no tienen devolución.</p>
        <div className="footer-legal-links">
          <a href="#terminos">Términos del Pacto</a>
          <span>•</span>
          <a href="#privacidad">Política de Privacidad Espectral</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;