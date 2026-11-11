function Map() {
  return (
    <div className="overflow-hidden rounded-md border border-[#222] hover:border-[#e50914]">
      {/* Mapa de OpenStreetMap con una dirección inventada.
          El filtro de className lo oscurece para que pegue con la web. */}
      <iframe
        title="Mapa de Midnight Club"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7120%2C40.4120%2C-3.6960%2C40.4220&layer=mapnik&marker=40.4168%2C-3.7038"
        loading="lazy"
        className="block h-[300px] w-full border-0 [filter:invert(92%)_hue-rotate(180deg)_grayscale(0.4)]"
      /> 
    </div>
  );
}

export default Map;