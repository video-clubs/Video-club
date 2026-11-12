// src/components/Navbar/Navbar.jsx
import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-[1000] flex flex-col w-full border-b border-[#1a1a1a] bg-[#080808]">
      <div className="flex w-full items-center justify-between px-6 py-3.5 md:px-14">
        <NavbarLogo onClose={closeMenu} />
        <NavbarLinks />

        {/* Botón Hamburguesa Estándar para Móvil */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú de navegación"
            className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex flex-col justify-center items-center space-y-1.5 focus:outline-none focus:border-[#e50914] transition-colors"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-200 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Desplegable para Móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-zinc-950 border-t border-zinc-900 ${
          isOpen
            ? "max-h-[400px] py-4 px-6 opacity-100 shadow-xl"
            : "max-h-0 py-0 px-6 opacity-0"
        }`}
      >
        <NavbarLinks isMobile={true} onClose={closeMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
