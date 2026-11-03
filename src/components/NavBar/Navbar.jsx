import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  return (
    <nav className="sticky top-0 z-[1000] flex w-full items-center justify-between border-b border-[#1a1a1a] bg-[#080808] px-6 py-3.5 md:px-14">

      <NavbarLogo />

      <NavbarLinks />
    
    </nav>
  );
}

export default Navbar;