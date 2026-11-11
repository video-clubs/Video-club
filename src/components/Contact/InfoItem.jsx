// Una fila de información: icono + título + contenido
function InfoItem({ icono, titulo, children }) {
  return (
    <div className="flex items-center gap-4 rounded-md border border-[#2a2a2a] bg-[#121212] p-4 transition-all duration-300 hover:border-[#e50914] hover:shadow-[0_0_15px_rgba(229,9,20,0.3)]">
      {/* Círculo rojo con el icono dentro */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e50914] bg-[rgba(229,9,20,0.15)] text-[#e50914]">
        {icono}
      </div>

      <div>
        <p className="text-base text-[#999]">{titulo}</p>
        <div className="break-words text-xl text-white">{children}</div>
      </div>
    </div>
  );
}

export default InfoItem;