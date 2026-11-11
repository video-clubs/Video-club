import InfoItem from "./InfoItem";
import {
  IconoTelefono,
  IconoCorreo,
  IconoReloj,
  IconoUbicacion,
} from "./Icons";

function Info() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="mb-2 border-l-[3px] border-[#e50914] pl-2 text-base font-bold uppercase tracking-wide text-white">
        Encuéntranos
      </h2>

      <InfoItem icono={<IconoTelefono />} titulo="Teléfono">
        <a href="tel:+34684584206" className="hover:text-[#e50914]">
          684 58 42 06
        </a>
      </InfoItem>

      <InfoItem icono={<IconoCorreo />} titulo="Correo electrónico">
        <a href="mailto:Midnightservis@gmail.com" className="hover:text-[#e50914]">
          Midnightservis@gmail.com
        </a>
      </InfoItem>

      <InfoItem icono={<IconoReloj />} titulo="Horario">
        Lunes a Viernes: 17:00 - 22:30
      </InfoItem>

      <InfoItem icono={<IconoUbicacion />} titulo="Dirección">
        Calle del Ataúd 13, 28004 Madrid
      </InfoItem>
    </div>
  );
}

export default Info;