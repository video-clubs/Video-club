import Title from "../components/Contact/Title";
import InfoItem from "../components/Contact/InfoItem";
import Map from "../components/Contact/Map";
import Form from "../components/Contact/Form";

function Contacto() {
  return (
    <div className="min-h-screen bg-[#080808] px-6 pb-16 pt-12 md:px-16">
      <Title />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Columna izquierda: datos y mapa */}
        <div className="flex flex-col gap-4">
          <InfoItem />
          <Map />
        </div>

        {/* Columna derecha: formulario */}
        <Form />
      </div>
    </div>
  );
}

export default Contacto; 