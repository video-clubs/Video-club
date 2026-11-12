import { useState } from "react";


const estiloCampo =
  "w-full rounded-md border-2 border-[#444] bg-[#1e1e1e] px-4 py-3 text-xl tracking-wide text-white outline-none placeholder:text-[#9a9a9a] focus:border-[#e50914] focus:bg-[#242424] focus:shadow-[0_0_10px_rgba(229,9,20,0.4)]";


const estiloEtiqueta = "text-xl tracking-wide text-white";

function Form() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

 
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); 
    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
      setError("Rellena tu nombre, tu correo y el mensaje.");
      return;
    }

    if (!email.includes("@")) {
      setError("El correo electrónico no es válido.");
      return;
    }

  
    console.log({ nombre, email, telefono, mensaje });

    setError("");
    setEnviado(true);
    setNombre("");
    setEmail("");
    setTelefono("");
    setMensaje("");
  }

  return (
    <div>
      <h2 className="mb-6 border-l-[3px] border-[#e50914] pl-2 text-2xl font-bold uppercase tracking-wide text-white">
        Escríbenos
      </h2>

      <div className="rounded-md border border-[#8b0000] bg-[#101010] p-6 shadow-[0_0_25px_rgba(229,9,20,0.15)] md:p-8">
        {enviado ? (
          <div className="flex flex-col items-start gap-4">
            <p className="text-2xl text-[#25d366]">✓ Mensaje enviado</p>
            <p className="text-lg text-[#c0c0c0]">
              Gracias por escribirnos. Te responderemos pronto.
            </p>
            <button
              type="button"
              onClick={() => setEnviado(false)}
              className="rounded-md border border-white/30 px-5 py-3 text-lg font-bold text-white hover:border-[#e50914] hover:bg-[#e50914]/20"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nombre" className={estiloEtiqueta}>
                Tu nombre
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre y apellidos"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className={estiloCampo}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className={estiloEtiqueta}>
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="nombre@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={estiloCampo}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="telefono" className={estiloEtiqueta}>
                Teléfono (opcional)
              </label>
              <input
                id="telefono"
                type="tel"
                placeholder="600 00 00 00"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className={estiloCampo}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="mensaje" className={estiloEtiqueta}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={6}
                placeholder="Cuéntanos qué necesitas..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className={estiloCampo}
              />
            </div>


            {error && <p className="text-lg text-[#ff4d55]">{error}</p>}

            <button
              type="submit"
              className="rounded-md bg-[#e50914] px-5 py-4 text-xl font-bold tracking-wide text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#b20710] hover:shadow-[0_0_15px_rgba(229,9,20,0.5)]"
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;