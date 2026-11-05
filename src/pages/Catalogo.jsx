import React, { useState, useEffect } from 'react';
import MovieRow from '../components/MovieRow/MovieRow';

// Catálogo ampliado de películas de terror con el código de Fabián
const peliculasCatalogo = [
  { id: 1, title: "Así en la Tierra como en el Infierno", year: "2014", genre: "Slasher", badge: "VHS VINTAGE", image: "https://..." },
  { id: 2, title: "Psicosis", year: "1960", genre: "Clásico", badge: "VHS VINTAGE", image: "https://..." },
  { id: 3, title: "El Legado del Diablo", year: "2018", genre: "Sobrenatural", badge: "NC ORIGINAL", image: "https://..." },
  { id: 4, title: "La Noche de las Bestias", year: "1984", genre: "Slasher", badge: "CULTO", image: "https://..." },
  { id: 5, title: "Voces en la Oscuridad", year: "2023", genre: "Psicológico", badge: "ESTRENO", image: "https://..." },
  { id: 6, title: "Masacre en el Campamento", year: "1986", genre: "Slasher", badge: "VHS VINTAGE", image: "https://..." },
  { id: 7, title: "Infección Z", year: "2022", genre: "Survival Horror", badge: "POPULAR", image: "https://..." },
  { id: 8, title: "El Retorno de las Sombras", year: "2025", genre: "Sobrenatural", badge: "EXCLUSIVO", image: "https://..." }
];

export default function Catalogo() {
  const [Catalogo, setCatalogo] = useState(null);
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const categorias = ["Todos", "Slasher", "Sobrenatural", "Found Footage", "Clásico", "Psicológico"];

  useEffect(() => {
    // Tu lógica de fetch local
    fetch('http://localhost:5000/catalogo')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar');
        return res.json();
      })
      .then((data) => setCatalogo(data))
      .catch((err) => console.error(err));
  }, []);

  // Tu lógica de filtrado continúa abajo...
