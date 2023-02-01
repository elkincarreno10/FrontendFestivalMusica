
const Comentario = ({comentarioFinal}) => {

    const { nombre, ciudad, comentario }  = comentarioFinal;

  return (
    <div className="bg-gradient-to-tr from-blue-500 to-blue-200 shadow shadow-red-400 mb-4 text-center p-1 rounded-lg">
        <>
            <p className="text-red-600 font-black text-lg">Nombre: <span className="text-black font-bold">{nombre}</span></p>
            <p className="text-red-600 font-black text-lg">Ciudad: <span className="text-black text-md font-normal">{ciudad}</span></p>
            <p className="text-red-600 font-black text-lg">Mensaje: <span className="text-black text-md font-normal">{comentario}</span></p>
        </>
    </div>
  )
}

export default Comentario;