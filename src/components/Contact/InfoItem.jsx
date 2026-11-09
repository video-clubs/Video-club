// Una fila de información: icono + título + contenido
function InfoItem({ icono, titulo, children }) {
  return (
    <div className="flex items-center gap-4 rounded-md border border-[#222] bg-[#121212] p-4 transition-all duration-300 hover:border-[#e50914] hover:shadow-[0_0_15px_rgba(229,9,20,0.3)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e50914] bg-[rgba(229,9,20,0.15)] text-xl">
        {icono}
      </span>

      <div>
        <p className="text-sm text-[#888]">{titulo}</p>
        <div className="break-words text-lg text-white">{children}</div>
      </div>
    </div>
  );
}

export default InfoItem;