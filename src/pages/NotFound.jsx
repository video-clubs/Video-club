import React, { useState, useEffect } from 'react';export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });       

  // Rastrear la posición del ratón para el efecto de linterna
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
    
  return (
    <div 
      className="relative min-h-screen bg-black text-red-700 font-mono overflow-hidden flex flex-col justify-center items-center selection:bg-red-900 selection:text-black cursor-crosshair"
      style={{
        backgroundImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(20, 0, 0, 0.9), rgba(0, 0, 0, 0.99))`
      }}
    >
      {/* Capa de ruido de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] animate-pulse"></div>

      {/* Contenido principal */}
      <div className="z-10 text-center px-4 max-w-2xl">
        
        {/* Título de error con parpadeo */}
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest text-red-600 animate-flicker drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
          404
        </h1>

        <div className="h-0.5 w-full bg-red-900/40 my-6 shadow-[0_0_10px_rgba(153,27,27,0.5)]"></div>

        {/* Mensajes inquietantes */}
        <h2 className="text-xl md:text-2xl text-stone-300 font-serif tracking-widest uppercase mb-4 animate-pulse">
          Te has desviado demasiado...
        </h2>

        <p className="text-sm md:text-base text-stone-500 mb-8 leading-relaxed font-sans">
          La página que buscas no existe en este plano. Algo en las sombras se dio cuenta de tu presencia.
        </p>

        {/* Botón de escape */}
        <a
          href="/"
          className="inline-block px-8 py-3 border border-red-900/60 text-red-500 hover:text-black hover:bg-red-700 hover:border-red-600 transition-all duration-300 tracking-wider text-sm font-bold uppercase shadow-[0_0_10px_rgba(0,0,0,1)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]"
        >
          [ Escapar al inicio ]
        </a>
      </div>

      {/* Detalle ambiental en la esquina */}
      <div className="absolute bottom-4 left-4 text-xs text-stone-700 tracking-widest uppercase opacity-40">
        SYS_LOG: ENTITY_DETECTED // NO_WAY_OUT
      </div>

      {/* Estilos CSS en línea para la animación de parpadeo */}
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          41.99% { opacity: 1; }
          42% { opacity: 0.1; }
          43% { opacity: 0.8; }
          45% { opacity: 0.3; }
          46% { opacity: 1; }
          80% { opacity: 0.9; }
          81% { opacity: 0.2; }
          82% { opacity: 1; }
        }
        .animate-flicker {
          animation: flicker 4s infinite linear;
        }
           const glitchChars = ['404', '4Ø4', '404', '404', 'ERR', '§04', '40∄', '☠04'];
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.35) {
        setGlitchText(glitchChars[Math.floor(Math.random() * glitchChars.length)]);
        setTimeout(() => setGlitchText('404'), 150);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);
      `}</style>
    </div>
  );
}

