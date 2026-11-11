// src/pages/Contacto.jsx
import Title from "../components/Contact/Title";
import Info from "../components/Contact/Info";
import Map from "../components/Contact/Map";
import Form from "../components/Contact/Form";

function Contacto() {
  return (
    <div className="min-h-screen bg-[#080808] text-white px-4 sm:px-6 md:px-16 pt-24 pb-16 overflow-x-hidden">
      
      {/* Título de la Sección */}
      <Title />

      {/* Cuadrícula adaptable: 1 columna en móvil, 2 en pantallas grandes */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto mt-8">
        
        {/* Columna Izquierda: Información de contacto y Mapa */}
        <div className="flex flex-col gap-6">
          <Info />
        </div>

        {/* Columna Derecha: Formulario de Mensajes al Proyeccionista */}
        <div>
          <Form />
        </div>

      </div>
    </div>
  );
}

export default Contacto;