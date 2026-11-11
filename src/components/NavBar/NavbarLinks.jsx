// src/components/Navbar/NavbarLinks.jsx
import { NavLink } from "react-router-dom";

export default function NavbarLinks() {
  const navLinkStyles = ({ isActive }) =>
    `rounded px-3 py-1.5 text-[0.95rem] font-semibold transition-all duration-200 ${
      isActive
        ? "border border-[#e50914] bg-[rgba(229,9,20,0.15)] text-white shadow-[0_0_10px_rgba(229,9,20,0.2)]"
        : "text-[#b3b3b3] hover:text-white"
    }`;

  return (
    <div className="flex items-center gap-6">
      <NavLink to="/" end className={navLinkStyles}>
        Inicio
      </NavLink>
      <NavLink to="/catalogo" className={navLinkStyles}>
        Catálogo VHS
      </NavLink>
      <NavLink to="/sala" className={navLinkStyles}>
        Sala
      </NavLink>
      <NavLink to="/contacto" className={navLinkStyles}>
        Contacto
      </NavLink>
      <NavLink to="/prestamo" className={navLinkStyles}>
        Préstamo
      </NavLink>
    </div>
  );
}