// src/components/Navbar/NavbarLogo.jsx
import { Link } from "react-router-dom";
import logoLetras from "../../assets/letras-logo.png";

function NavbarLogo({ onClose }) {
  return (
    <Link to="/" onClick={onClose} className="flex shrink-0 items-center">
      <img
        src={logoLetras}
        alt="Nightmare Club"
        className="h-[45px] sm:h-[55px] w-auto object-contain transition-all duration-200 hover:scale-[1.04] hover:drop-shadow-[0_0_10px_rgba(229,9,20,0.7)]"
      />
    </Link>
  );
}

export default NavbarLogo;