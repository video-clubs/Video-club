<div align="center">

# 📼 NIGHTMARE CLUB — VIDEOCLUB RETRO 80s 🎃
### *Plataforma Web Inmersiva de Cine de Terror & Gestión de Alquileres VHS*

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-GreenSock-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![JSON Server](https://img.shields.io/badge/JSON_Server-REST_API-000000?style=for-the-badge&logo=json&logoColor=white)](https://github.com/typicode/json-server)

---

</div>

## 📌 Descripción del Proyecto

**Nightmare Club** es una aplicación web SPA (*Single Page Application*) que traslada a los usuarios a la época dorada de los videoclubs analógicos de los años 80 y 90, combinando una estética espeluznante de Halloween con el rendimiento del desarrollo web moderno.

La plataforma permite explorar un catálogo clasificado de películas de terror en formato VHS, consultar detalles, reservar cabinas privadas de proyección equipadas con PC retro y gestionar préstamos físicos de cintas mediante un sistema **CRUD completo** sincronizado con un backend ficticio (`json-server`).

---

## 🚀 Tecnologías & Librerías Utilizadas

El proyecto utiliza las mejores herramientas del ecosistema frontend moderno:

* **[React 18](https://react.dev/):** Biblioteca principal para el desarrollo de la interfaz orientada a componentes reutilizables y modulares.
* **[Vite](https://vitejs.dev/):** Empaquetador y entorno de desarrollo ultra rápido.
* **[React Router DOM v6](https://reactrouter.com/):** Enrutamiento declarativo para una navegación fluida sin recargar la página.
* **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilidad CSS para el diseño *responsive*, efectos de neón, gradientes y tematización en modo oscuro (*Dark Mode*).
* **[GSAP (GreenSock Animation Platform)](https://greensock.com/):** Motor de animaciones de alto rendimiento para efectos de parpadeo de neón (*flicker*), apariciones en cascada (*stagger*) y microinteracciones.
* **[JSON Server](https://github.com/typicode/json-server):** REST API falsa que actúa como backend para almacenar cintas, salas, préstamos activos y reservas.

---

## 🎨 Estética & Tipografías

La atmósfera visual fusiona luces de neón ochenteras, tonos oscuros y sombras ensangrentadas.

### 🔴 Paleta de Colores
* **Rojo Neón / Sangre:** `#E50914` (Acentos principales, botones y brillos)
* **Negro Fondo:** `#080808` / `#000000` (Fondo inmersivo nocturno)
* **Gris Carbón / VHS:** `#18181B` / `#27272A` (Tarjetas, módulos e insumos)
* **Texto Neutro:** `#F4F4F5` / `#A1A1AA` (Lectura limpia)

### 🔤 Tipografías Recomendas
* **Títulos & Encabezados:** Estilo terror / gótico / neón (ej. *Creepster*, *Nosifer* o *Impact*).
* **Cuerpo de Texto:** `Sans-serif` moderna (*Inter*, *Roboto* o sistema por defecto).

---

## 🎬 Catálogo de Películas Incluidas

El archivo `movies.json` incluye un catálogo categorizado con pósters en formatos `.jpg` y `.webp`:

### 🏆 TOP 5 (Estrenos y Destacados)
1. **Sleepwalker** (2026) — *Terror / Suspenso*
2. **The Ritual** (2026) — *Terror / Sobrenatural*
3. **La Posesión de Verónica** (2026) — *Terror / Suspenso*
4. **Bird Box** (2026) — *Terror / Sobrenatural*
5. **Annabelle 3** (2026) — *Terror / Sobrenatural*

### 🕯️ Los Clásicos
1. **El Exorcista** (1973) — *Terror / Sobrenatural*
2. **Halloween** (1978) — *Slasher / Suspenso*
3. **Pesadilla en Elm Street** (1984) — *Slasher / Sobrenatural*
4. **El Resplandor** (1980) — *Terror Psicológico*
5. **Frankenstein** (1931) — *Terror Clásico*

### 🔥 Más Vistos
1. **El Conjuro (The Conjuring)** — *Sobrenatural*
2. **La Maldición (The Grudge)** — *J-Horror / Sobrenatural*
3. **La Noche de los Muertos Vivientes** — *Zombies / Culto*
4. **El Proyecto de la Bruja de Blair** — *Found Footage*
5. **IT (Eso)** — *Terror / Sobrenatural*

---

## ⚡ Funcionalidades Clave

* **🍿 Catálogo Dinámico (`Catalogo.jsx`):** Filtrado en tiempo real con barra de búsqueda por título y animación de aparición en cascada con GSAP.
* **🕹️ Reservas de Salas de Proyección (`Sala.jsx`):** Formulario interactivo para apartar cabinas privadas de visionado (El Sótano VHS, La Cripta Slasher, El Laboratorio Z) y seleccionar la película a proyectar.
* **📋 Control de Préstamos VHS (CRUD en `Prestamo.jsx`):**
  * **Create:** Registrar préstamos de cintas con datos del cliente.
  * **Read:** Visualizar en tiempo real las películas alquiladas en una tabla interactiva.
  * **Update:** Editar registros existentes mediante un modo de edición integrado.
  * **Delete:** Liberar cintas y eliminar alquileres devueltos.
* **🛡️ Normalizador de Rutas:** Codificación de URLs mediante `encodeURI()` e integración de `import.meta.env.BASE_URL` para compatibilidad completa con subdirectorios y nombres de archivo con espacios.

---

## 🛠️ Instalación y Configuración Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el Repositorio
```bash
git clone https://github.com/video-clubs/Video-club.git
cd Video-club
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Iniciar el Backend (JSON Server)
Abre una terminal y arranca el servidor REST en el puerto `3000`:
```bash
npx json-server --watch src/data/movies.json --port 3000
```

### 4. Iniciar el Servidor de Desarrollo (Vite)
En una segunda terminal, arranca la aplicación React:
```bash
npm run dev
```

Navega a `http://localhost:5173/Video-club/` en tu navegador.

---

## 🚀 Despliegue en Vercel

1. Importa el repositorio `video-clubs/Video-club` desde el panel de Vercel.
2. Usa estos ajustes de build:
   * **Framework Preset:** Vite
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
3. Pulsa **Deploy**. En Vercel, Vite genera rutas de assets desde `/`; en GitHub Pages conserva el prefijo `/video-club/`.

La app actualmente consulta `http://localhost:3000` para los datos de películas, préstamos y reservas. Eso solo funciona en tu máquina local: para que esas funciones trabajen en producción, configura un backend accesible públicamente y reemplaza esas URLs antes del despliegue. Los archivos del frontend y sus imágenes sí se sirven desde Vercel.

---

## 📁 Estructura del Proyecto

```text
Video-club/
├── public/
│   └── peliculas/          # Archivos multimedia (pósters jpg/webp)
│       ├── top-5/
│       ├── clasicos/
│       └── los-mas-vistos/
├── src/
│   ├── components/         # Componentes de interfaz (Navbar, MovieRow, etc.)
│   ├── data/
│   │   └── movies.json     # Base de datos local para JSON Server
│   ├── pages/              # Vistas principales (Catalogo, Sala, Prestamo)
│   ├── routes/             # Configuración de React Router
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

<div align="center">

Desarrollado con 💀 y 🎃 por el equipo de **Nightmare Club** en **Factoría F5**.

</div>