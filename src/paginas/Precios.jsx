import { Link } from 'react-router-dom';

const Precios = () => {
  return (
    <div className="container text-center">
      <h1 className="font-black text-2xl mb-10">Festival de Música Rock - Ocaña, Colombia</h1>
      <div className="md:grid md:grid-cols-2 gap-10 mb-10">

        <div className="bg-blue-100 shadow-lg mb-8 md:mb-0 shadow-blue-300 rounded-lg mx-auto p-5">
          <h2 className="text-2xl font-black text-blue-500 mb-2">Paquete Bronce</h2>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Precio:</span> $150.000</p>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Beneficios:</span> Acceso a zona pública con servicio de bebidas incluido</p>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Obsequio:</span> Con el paquete bronce tienes acceso a un sticker y una gorra de regalo</p>
        </div>

        <div className="bg-blue-100 shadow-lg mb-8 md:mb-0 shadow-blue-300 rounded-lg mx-auto p-5">
          <h2 className="text-2xl font-black text-blue-500 mb-2">Paquete Plata</h2>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Precio:</span> $240.000</p>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Beneficios:</span> Acceso a zona pública con servicio de bebidas gratis las primeras 2 horas del evento</p>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Obsequio:</span> Con el paquete plata tienes acceso a una gorra y una camiseta de regalo</p>
        </div>

        <div className="bg-blue-100 shadow-lg mb-8 md:mb-0 shadow-blue-300 rounded-lg mx-auto p-5">
          <h2 className="text-2xl font-black text-blue-500 mb-2">Paquete Oro</h2>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Precio:</span> $500.000</p>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Beneficios:</span> Acceso a zona privada con servicio de bebidas incluido totalmente gratis</p>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Obsequio:</span> Con el paquete bronce tienes acceso a una gorra de regalo, una camiseta autografiada y puedes tomarte fotos con los artistas</p>
        </div>

        <div className="bg-blue-100 shadow-lg mb-8 md:mb-0 shadow-blue-300 rounded-lg mx-auto p-5">
          <h2 className="text-2xl font-black text-blue-500 mb-2">Paquete Platino</h2>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Precio:</span> $1'000.000</p>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Beneficios:</span> Acceso a zona privada con servicio de bebidas incluido totalmente gratis y posibilidad de estar con los artistas</p>
          <p className="text-left"><span className="text-blue-400 font-bold text-xl">Obsequio:</span> Con el paquete bronce tienes acceso a una gorra de regalo, una camiseta autografiada, puedes tomarte fotos con los artistas y hablar con ellos después del evento</p>
        </div>

      </div>

      <Link
        to="/login"
        className="bg-blue-400 p-3 rounded-lg"
      >Comprar Paquete</Link>
    </div>
  )
}

export default Precios;