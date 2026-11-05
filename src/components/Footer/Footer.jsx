
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-[#1a1a1a] bg-[#050505] px-6 py-12 text-[0.9rem] text-[#a0a0a0] md:px-16">

      {/* Contenido principal del footer */}
      <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Columna 1: Información del videoclub */}
        <div>
          <h3 className="mb-4 text-[1.4rem] font-black tracking-[1px] text-white">
            NIGHTMARE <span className="text-[#e50914] [text-shadow:0_0_10px_rgba(229,9,20,0.5)]">CLUB</span>
          </h3>

          <p className="mb-3 text-[0.85rem] leading-relaxed text-[#888]">
            Tu videoclub de confianza especializado en terror, VHS vintage
            y cultos cinematográficos. Abierto las 24 horas... si te atreves
            a entrar.
          </p>


          <p className="mb-3 text-[0.85rem] leading-relaxed text-[#888]">
            🕒 Horario de atención: Lunes a Domingo de 00:00 a 03:00
            (Hora de las Brujas).
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h4 className="mb-5 border-l-[3px] border-[#e50914] pl-2 text-base font-bold uppercase tracking-wide text-white">
            Navegación
          </h4>

          <ul className="flex flex-col gap-2.5">
            <li>
              <Link className="transition-colors duration-200 hover:pl-1 hover:text-[#e50914]" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-200 hover:pl-1 hover:text-[#e50914]" to="/catalogo">
                Catálogo VHS
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-200 hover:pl-1 hover:text-[#e50914]" to="/sala">
                Sala
              </Link>
            </li>
            <li>
              <Link className="transition-colors duration-200 hover:pl-1 hover:text-[#e50914]" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Géneros populares */}
        <div>
          <h4 className="mb-5 border-l-[3px] border-[#e50914] pl-2 text-base font-bold uppercase tracking-wide text-white">
            Géneros Populares
          </h4>

          <ul className="flex flex-col gap-2.5">
            <li>
              <a className="transition-colors duration-200 hover:pl-1 hover:text-[#e50914]" href="#found-footage">
                Found Footage
              </a>
            </li>
            <li>
              <a className="transition-colors duration-200 hover:pl-1 hover:text-[#e50914]" href="#slasher">
                Slasher &amp; Gore
              </a>
            </li>
            <li>
              <a className="transition-colors duration-200 hover:pl-1 hover:text-[#e50914]" href="#sobrenatural">
                Terror Sobrenatural
              </a>
            </li>
            <li>
              <a className="transition-colors duration-200 hover:pl-1 hover:text-[#e50914]" href="#clasicos">
                Clásicos de los 80s
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Suscripción */}
        <div>
          <h4 className="mb-5 border-l-[3px] border-[#e50914] pl-2 text-base font-bold uppercase tracking-wide text-white">
            Suscripción Maldita
          </h4>

          <p className="mb-3 text-[0.85rem] leading-relaxed text-[#888]">
            Recibe avisos directos cuando una nueva maldición llegue
            al catálogo.
          </p>

          <form className="mt-3 flex flex-col gap-2.5">
            <input
              type="email"
              placeholder="Ingresa tu correo..."
              aria-label="Correo electrónico"
              className="rounded border border-[#2a2a2a] bg-[#121212] p-3 text-sm text-white outline-none transition-colors placeholder:text-[#777] focus:border-[#e50914]"
            />

            <button
              type="button"
              className="rounded bg-[#e50914] p-3 font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#b20710]"
            >
              Unirme
            </button>
          </form>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[#141414] pt-8 text-center text-xs text-[#666] md:flex-row md:text-left">

        <p>
          © 2026 Nightmare Club. Todos los derechos reservados.
          Las almas que alquilan películas no tienen devolución.
        </p>

        <div className="flex items-center gap-3">
          <a className="transition-colors hover:text-white" href="#terminos">
            Términos del Pacto
          </a>

          <span>•</span>

          <a className="transition-colors hover:text-white" href="#privacidad">
            Política de Privacidad Espectral
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
