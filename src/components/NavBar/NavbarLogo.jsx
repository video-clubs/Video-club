import { Link } from "react-router-dom";
import logoLetras from "../../assets/letras-logo.png";

function NavbarLogo() {
  return (
    <Link to="/" className="flex shrink-0 items-center">

      <img
        src={logoLetras}
        alt="Nightmare Club"
        className="h-[55px] w-auto object-contain transition-all duration-200 hover:scale-[1.04] hover:drop-shadow-[0_0_10px_rgba(229,9,20,0.7)]"
      />

    </Link>
  );
}

export default NavbarLogo;