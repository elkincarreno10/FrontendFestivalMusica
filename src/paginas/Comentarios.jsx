import { useState } from "react";
import Comentario from "../Components/Comentario";
import useComentarios from "../hooks/useComentarios";
import Alerta from '../Components/Alerta';

const Comentarios = () => {

  const [ nombre, setNombre ] = useState('');
  const [ ciudad, setCiudad ] = useState('');
  const [ comentario, setComentario ] = useState('');
  const [ alerta, setAlerta ] = useState({});

  const { comentarios, agregarComentario } = useComentarios();

  const handlerSubmit = e => {
    e.preventDefault();

    if([nombre, ciudad, comentario].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }
    agregarComentario({ nombre, ciudad, comentario});
    setAlerta({
      msg: 'Comentario Guardado Correctamente'
    })
    setNombre('');
    setCiudad('');
    setComentario('');
  }

  const { msg } = alerta;

  return (
    <>
      <h2 className="text-center text-2xl mb-5 font-bold">Queremos saber tu opinión</h2>
      <p className='text-xl mt-5 mb-5 text-center'>Déjanos un comentario <span className='text-blue-600 font-bold'>¡Son lo más importante para nosotros!</span></p>

        <>
          { comentarios.length ? (
            <>
              <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:max-w-4xl max-w-2xl text-center mx-auto mb-4">
              {comentarios.map(comentario => (
                <Comentario
                  key={comentario._id}
                  comentarioFinal={comentario}
                />
              ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="font-black text-3xl mb-4 text-center">No hay comentarios aún</h2>
            </>
          )}
        </>

      { msg && <Alerta 
        alerta={alerta}
      />}

      <h2 className="text-center font-bold text-2xl my-3">Agrega tu comentario aquí</h2>
      <form 
        onSubmit={handlerSubmit}
        className="shadow-md rounded-lg mx-auto bg-white max-w-lg py-4"
      >
        <div className="p-2 mx-3">
          <label 
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold"
          >Nombre:</label>
          <input 
            className="bg-gray-100 w-full placeholder-gray-400 border-2 p-1 rounded"
            type="text" 
            id="nombre"
            placeholder="Tu Nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="p-2 mx-3">
          <label 
            htmlFor="ciudad"
            className="text-gray-700 uppercase font-bold"
          >Ciudad:</label>
          <input 
            className="bg-gray-100 w-full placeholder-gray-400 border-2 p-1 rounded"
            type="text" 
            id="ciudad"
            placeholder="Tu Ciudad"
            value={ciudad}
            onChange={e => setCiudad(e.target.value)}
          />
        </div>
        <div className="p-2 mx-3">
          <label 
            htmlFor="comentario"
            className="text-gray-700 uppercase font-bold"
          >Comentario:</label>
          <textarea 
            className="bg-gray-100 w-full placeholder-gray-400 border-2 p-1 rounded"
            type="text" 
            id="comentario"
            placeholder="Tu Comentario"
            rows="4"
            value={comentario}
            onChange={e => setComentario(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          className="bg-blue-300 mt-2 p-2 mx-6 font-bold cursor-pointer rounded"
          value="Agregar Comentario"
        />
      </form>
    </>
  )
}

export default Comentarios;