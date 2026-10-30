import { useState } from "react";
import "./App.css";

const movies = [
  {
    id: 1,
    title: "Psicosis",
    year: 1960,
    category: "Terror",
    genre: "Suspenso",
    rating: "8.5",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85",
    description:
      "Una historia inquietante donde nada es lo que parece.",
    featured: true,
  },
  {
    id: 2,
    title: "Hereditary",
    year: 2018,
    category: "Terror",
    genre: "Sobrenatural",
    rating: "7.3",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85",
    description:
      "Un oscuro secreto familiar comienza a salir a la luz.",
    featured: true,
  },
  {
    id: 3,
    title: "Obsession",
    year: 2025,
    category: "Terror",
    genre: "Psicológico",
    rating: "7.8",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=700&q=85",
    description:
      "Una obsesión que convierte los sueños en pesadillas.",
    featured: true,
  },
  {
    id: 4,
    title: "La noche eterna",
    year: 2026,
    category: "Terror",
    genre: "Misterio",
    rating: "8.1",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=700&q=85",
    description:
      "En el bosque, la oscuridad esconde algo que observa.",
    featured: true,
  },
  {
    id: 5,
    title: "El bosque maldito",
    year: 2024,
    category: "Terror",
    genre: "Sobrenatural",
    rating: "7.6",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=85",
    description:
      "Nadie que entra en el bosque vuelve siendo el mismo.",
    featured: false,
  },
  {
    id: 6,
    title: "Sombras",
    year: 2023,
    category: "Suspenso",
    genre: "Psicológico",
    rating: "7.9",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=85",
    description:
      "Una presencia inexplicable aparece cada noche.",
    featured: false,
  },
  {
    id: 7,
    title: "La última puerta",
    year: 2022,
    category: "Terror",
    genre: "Misterio",
    rating: "7.4",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=700&q=85",
    description:
      "Hay puertas que nunca deberían abrirse.",
    featured: false,
  },
  {
    id: 8,
    title: "Medianoche",
    year: 2025,
    category: "Suspenso",
    genre: "Misterio",
    rating: "8.0",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",
    description:
      "A medianoche comienza una historia sin explicación.",
    featured: false,
  },
];

const categories = [
  "Todos",
  "Terror",
  "Suspenso",
  "Sobrenatural",
  "Psicológico",
  "Misterio",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter((movie) => {
    const matchesCategory =
      activeCategory === "Todos" ||
      movie.category === activeCategory ||
      movie.genre === activeCategory;

    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* BARRA DE NAVEGACIÓN */}
      <header className="navbar">
        <button
          className="brand"
          onClick={() => scrollTo("inicio")}
          aria-label="Volver al inicio"
        >
          <span className="brand-icon">
            ☠
          </span>

          <span className="brand-name">
            NIGHTMARE
            <strong>CLUB</strong>
            <small>HORROR EXPERIENCE</small>
          </span>
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <button
            className="nav-link active"
            onClick={() => scrollTo("inicio")}
          >
            Inicio
          </button>

          <button
            className="nav-link"
            onClick={() => scrollTo("catalogo")}
          >
            Catálogo
          </button>

          <button
            className="nav-link"
            onClick={() => scrollTo("estrenos")}
          >
            Estrenos
          </button>

          <button
            className="nav-link"
            onClick={() => scrollTo("nosotros")}
          >
            Nosotros
          </button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        {/* PORTADA PRINCIPAL */}
        <section className="hero" id="inicio">
          <div className="hero-background" />

          <div className="hero-content">
            <span className="eyebrow">
              <span className="live-dot" />
              BIENVENIDO A TU PEOR PESADILLA
            </span>

            <h1>
              EL TERROR
              <span>COMIENZA AQUÍ</span>
            </h1>

            <p className="hero-description">
              Tus pesadillas favoritas, historias que te
              perseguirán y emociones que no olvidarás.
              Todo en un solo lugar.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => scrollTo("catalogo")}
              >
                EXPLORAR CATÁLOGO
                <span aria-hidden="true"> →</span>
              </button>

              <button
                className="button button-secondary"
                onClick={() => scrollTo("estrenos")}
              >
                VER ESTRENOS
              </button>
            </div>

            <div className="hero-meta">
              <span>✦ TERROR</span>
              <span>✦ SUSPENSO</span>
              <span>✦ SOBRENATURAL</span>
            </div>
          </div>

          <div className="hero-stamp" aria-hidden="true">
            <span>ENTER AT YOUR OWN RISK</span>
            <strong>NC</strong>
            <span>NO ESCAPE FROM FEAR</span>
          </div>

          <div className="hero-bottom">
            <span>EL MIEDO NUNCA FUE TAN REAL</span>
            <span className="scroll-indicator">
              DESLIZA PARA DESCUBRIR ↓
            </span>
          </div>
        </section>

        {/* FRANJA INFORMATIVA */}
        <div className="marquee" aria-label="Especialistas en terror">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, index) => (
              <span key={index}>
                NIGHTMARE CLUB <b>✦</b> EL LADO OSCURO DEL CINE
                <b>✦</b> ATRÉVETE A MIRAR <b>✦</b> NIGHTMARE CLUB
                <b>✦</b> EL LADO OSCURO DEL CINE <b>✦</b>
              </span>
            ))}
          </div>
        </div>

        {/* ESTRENOS */}
        <section className="section premieres" id="estrenos">
          <div className="section-heading">
            <div>
              <span className="section-kicker">RECIÉN SALIDOS DE LA OSCURIDAD</span>
              <h2>
                ÚLTIMOS <span>ESTRENOS</span>
              </h2>
              <p>Las historias que están despertando tus peores miedos.</p>
            </div>

            <button
              className="text-button"
              onClick={() => scrollTo("catalogo")}
            >
              VER CATÁLOGO COMPLETO ↗
            </button>
          </div>

          <div className="movie-grid premiere-grid">
            {movies
              .filter((movie) => movie.featured)
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onSelect={setSelectedMovie}
                />
              ))}
          </div>
        </section>

        {/* CATÁLOGO */}
        <section className="section catalog" id="catalogo">
          <div className="section-heading catalog-heading">
            <div>
              <span className="section-kicker">ENCUENTRA TU PRÓXIMA PESADILLA</span>
              <h2>
                EXPLORA EL <span>CATÁLOGO</span>
              </h2>
              <p>Elige tu género. Si te atreves.</p>
            </div>
          </div>

          <div className="catalog-controls">
            <div className="category-list">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-chip ${
                    activeCategory === category ? "selected" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Buscar película..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Buscar película"
              />
            </label>
          </div>

          {filteredMovies.length > 0 ? (
            <div className="movie-grid catalog-grid">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onSelect={setSelectedMovie}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>☠</span>
              <h3>NO HAY RASTRO DE ESA PELÍCULA</h3>
              <p>Prueba con otro título o selecciona otra categoría.</p>

              <button
                className="button button-primary"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Todos");
                }}
              >
                MOSTRAR TODAS
              </button>
            </div>
          )}
        </section>

        {/* BANNER FINAL */}
        <section className="fear-banner">
          <div className="fear-banner-content">
            <span className="section-kicker">UNA ÚLTIMA ADVERTENCIA</span>
            <h2>
              ¿ESTÁS LISTO PARA
              <span> TENER MIEDO?</span>
            </h2>
            <p>
              La oscuridad te espera. Elige tu próxima historia.
            </p>

            <button
              className="button button-primary"
              onClick={() => scrollTo("catalogo")}
            >
              ENTRAR EN LA OSCURIDAD →
            </button>
          </div>
        </section>

        {/* NOSOTROS */}
        <section className="about-section" id="nosotros">
          <div className="about-symbol">☠</div>

          <div>
            <span className="section-kicker">BIENVENIDO A LA OSCURIDAD</span>
            <h2>ESTO ES NIGHTMARE CLUB</h2>
            <p>
              Un rincón para los amantes del terror, el suspenso
              y las historias que dejan huella. Descubre nuevas
              pesadillas y encuentra tu próxima película favorita.
            </p>
          </div>
        </section>
      </main>

      {/* PIE DE PÁGINA */}
      <footer className="footer">
        <button className="footer-brand" onClick={() => scrollTo("inicio")}>
          ☠ NIGHTMARE CLUB
        </button>

        <p>EL MIEDO NOS UNE. LA OSCURIDAD NOS DEFINE.</p>

        <span className="copyright">
          © {new Date().getFullYear()} NIGHTMARE CLUB. TODOS LOS DERECHOS
          RESERVADOS.
        </span>
      </footer>

      {/* VENTANA DE INFORMACIÓN DE PELÍCULA */}
      {selectedMovie && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="movie-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedMovie(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <img
              className="modal-image"
              src={selectedMovie.image}
              alt=""
            />

            <div className="modal-content">
              <span className="section-kicker">
                NIGHTMARE CLUB PRESENTA
              </span>

              <h2 id="modal-title">{selectedMovie.title}</h2>

              <div className="modal-meta">
                <span>{selectedMovie.year}</span>
                <span>{selectedMovie.category}</span>
                <span>{selectedMovie.genre}</span>
                <span>★ {selectedMovie.rating}</span>
              </div>

              <p>{selectedMovie.description}</p>

              <button
                className="button button-primary"
                onClick={() => setSelectedMovie(null)}
              >
                VOLVER AL CATÁLOGO
              </button>

              <p className="modal-note">
                Esta ficha es una demostración visual. La reproducción
                de películas requiere integrar una fuente de contenido
                autorizada.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MovieCard({ movie, onSelect }) {
  return (
    <article className="movie-card">
      <button
        className="movie-card-button"
        onClick={() => onSelect(movie)}
        aria-label={`Ver información de ${movie.title}`}
      >
        <div className="movie-poster">
          <img
            src={movie.image}
            alt={`Imagen promocional de ${movie.title}`}
            loading="lazy"
          />

          <div className="poster-overlay" />

          <span className="poster-label">NC ORIGINAL</span>

          <span className="poster-rating">
            ★ {movie.rating}
          </span>

          <span className="poster-view">VER DETALLES ↗</span>
        </div>

        <div className="movie-info">
          <h3>{movie.title}</h3>

          <span className="movie-year">{movie.year}</span>

          <div className="movie-tags">
            <span>{movie.category}</span>
            <span>{movie.genre}</span>
          </div>
        </div>
      </button>
    </article>
  );
}

export default App;