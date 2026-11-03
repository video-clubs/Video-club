import { Routes, Route } from "react-router-dom";

import Layout from "../layouts/Layout";

import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import Sala from "../pages/Sala";
import Contacto from "../pages/Contacto";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        <Route path="/catalogo" element={<Catalogo />} />

        <Route path="/sala" element={<Sala />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="*" element={<NotFound />} />

      </Route>

    </Routes>
  );
}

export default AppRouter;