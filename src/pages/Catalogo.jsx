import React, { useState, useEffect } from 'react';
import MovieRow from '../components/MovieRow/MovieRow';

function Catalogo() {
  const [catalogo, setCatalogo] = useState(null);

  useEffect(() => {
    // Trae el objeto catálogo completo desde localhost:5000
    fetch('http://localhost:5000/catalogo')
      .then((res) => {
        if (!res.ok) throw new Error('Error cargando el catálogo');
        return res.json();
      })
      .then((data) => setCatalogo(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="catalogo-page" style={{ padding: '40px 0' }}>
      <h1 style={{ color: 'white', padding: '0 4%', marginBottom: '20px' }}>Catálogo de Películas</h1>
      
      <div className="rows-container">
        {/* Fila 1: TOP 5 */}
        {catalogo && catalogo["TOP 5"] ? (
          <MovieRow title="TOP 5" movies={catalogo["TOP 5"]} />
        ) : (
          <div style={{ color: 'white', padding: '20px 4%' }}>Cargando TOP 5...</div>
        )}

        {/* Fila 2: Los clásicos */}
        {catalogo && catalogo["Los clasicos"] && (
          <MovieRow title=" VHS (Clásicos)" movies={catalogo["Los clasicos"]} />
        )}

        {/* Fila 3: Más vistos */}
        {catalogo && catalogo["mas vistos"] && (
          <MovieRow title="Las Más Vistas" movies={catalogo["mas vistos"]} />
        )}
      </div>
    </section>
  );
}

export default Catalogo;
