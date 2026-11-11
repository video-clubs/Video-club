// src/components/Navbar/NavbarLinks.jsx
import { NavLink } from "react-router-dom";

export default function NavbarLinks({ isMobile = false, onClose }) {
  const navLinkStyles = ({ isActive }) =>
    `rounded px-3 py-2 text-[0.95rem] font-semibold transition-all duration-200 ${
      isMobile ? "block text-center w-full my-1 bg-zinc-900/80" : ""
    } ${
      isActive
        ? "border border-[#e50914] bg-[rgba(229,9,20,0.15)] text-white shadow-[0_0_10px_rgba(229,9,20,0.2)]"
        : "text-[#b3b3b3] hover:text-white hover:bg-zinc-900"
    }`;

  return (
    <div className={isMobile ? "flex flex-col gap-2 w-full" : "hidden md:flex items-center gap-6"}>
      <NavLink to="/" end onClick={onClose} className={navLinkStyles}>
        Inicio
      </NavLink>
      <NavLink to="/catalogo" onClick={onClose} className={navLinkStyles}>
        Catálogo VHS
      </NavLink>
      <NavLink to="/sala" onClick={onClose} className={navLinkStyles}>
        Sala
      </NavLink>
      <NavLink to="/contacto" onClick={onClose} className={navLinkStyles}>
        Contacto
      </NavLink>
      <NavLink to="/prestamo" onClick={onClose} className={navLinkStyles}>
        Préstamo
      </NavLink>
    </div>
  );
}