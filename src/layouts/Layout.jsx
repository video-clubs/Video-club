import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar className="text-5xl font-bold text-red-600" />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
