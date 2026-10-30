import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';
import './App.css';

function App() {
  const peliculasTerror = [
  { 
    title: "Así en la Tierra como en el Infierno", 
    year: "2014", 
    genre: "Found Footage / Misterio", 
    badge: "DESTACADO", 
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    title: "Psicosis", 
    year: "1960", 
    genre: "Terror Clásico / Suspenso", 
    badge: "VHS VINTAGE", 
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    title: "El Legado del Diablo", 
    year: "2018", 
    genre: "Terror Sobrenatural", 
    badge: "NC ORIGINAL", 
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    title: "La Noche de las Bestias", 
    year: "1984", 
    genre: "Slasher / Retro 80s", 
    badge: "CULTO", 
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    title: "Voces en la Oscuridad", 
    year: "2023", 
    genre: "Terror Psicológico", 
    badge: "ESTRENO", 
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    title: "Masacre en el Campamento", 
    year: "1986", 
    genre: "Slasher Clásico", 
    badge: "VHS VINTAGE", 
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    title: "Infección Z", 
    year: "2022", 
    genre: "Survival Horror", 
    badge: "POPULAR", 
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop" 
  },
  { 
    title: "El Retorno de las Sombras", 
    year: "2025", 
    genre: "Sobrenatural / Misterio", 
    badge: "EXCLUSIVO", 
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop" 
  }
];

  return (
    <div className="app-layout">
      <Navbar />
      <Hero />
      <MovieRow title="Películas de Terror" movies={peliculasTerror} />
      <Footer />
    </div>
  );
}

export default App;