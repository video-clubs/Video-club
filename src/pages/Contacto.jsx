
import Title from "../components/Contact/Title";
import Info from "../components/Contact/Info";
import Map from "../components/Contact/Map";
import Form from "../components/Contact/Form";

function Contacto() {
  return (
    <div className="min-h-screen bg-[#080808] text-white px-4 sm:px-6 md:px-16 pt-24 pb-16 overflow-x-hidden">

      <div className="max-w-7xl mx-auto">

        <Title />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-8">

          <div className="flex flex-col gap-6">
            <Info />
            <Map />
          </div>

          <div>
            <Form />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contacto;
