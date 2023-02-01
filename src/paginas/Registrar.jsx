import { useState } from 'react';
import { Link } from 'react-router-dom';
import imagen from '../img/login.jpg';
import Alerta from '../Components/Alerta';
import axios from 'axios';

const Registrar = () => {

  const [ nombre, setNombre ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ repetirPassword, setRepetirPassword ] = useState('');

  const [ alerta, setAlerta ] = useState({});
    
  const handlerSubmit = async e => {
    e.preventDefault();

    if([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }

    if(password !== repetirPassword) {
      setAlerta({
        msg: 'Los password no son iguales',
        error: true
      })
      return;
    }
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/registrar`, {nombre, email, password});  

      setAlerta({
        msg: 'Cuenta creada con éxito, ve a tu correo y confirma la cuenta'
      })
      
    } catch (error) {
      console.log(error);
    }

  }

  const { msg } = alerta;

  return (
    <>
      <div className="md:grid md:grid-cols-2">
        <div>
          <img className="w-full max-w-md mx-auto items-center h-96" src={imagen} alt="imagen festival" />
        </div>

        <form 
          onSubmit={handlerSubmit}
          className="shadow-md mt-4 md:mt-0 rounded-lg md:ml-4 lg:mr-14 bg-white p-10"
        >
          {msg && <Alerta 
            alerta={alerta}
          />}
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
              htmlFor="email"
              className="text-gray-700 uppercase font-bold"
            >Email:</label>
            <input 
              className="bg-gray-100 w-full placeholder-gray-400 border-2 p-1 rounded"
              type="email" 
              id="email"
              placeholder="Tu Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="p-2 mx-3">
            <label 
              htmlFor="password"
              className="text-gray-700 uppercase font-bold"
            >Password:</label>
            <input 
              className="bg-gray-100 w-full placeholder-gray-400 border-2 p-1 rounded"
              type="password" 
              id="password"
              placeholder="Tu Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="p-2 mx-3">
            <label 
              htmlFor="repetir-password"
              className="text-gray-700 uppercase font-bold"
            >Repite Password:</label>
            <input 
              className="bg-gray-100 w-full placeholder-gray-400 border-2 p-1 rounded"
              type="password" 
              id="repetir-password"
              placeholder="Repite Tu Password"
              value={repetirPassword}
              onChange={e => setRepetirPassword(e.target.value)}
            />
          </div>

          <input 
            type="submit" 
            className="bg-blue-300 mt-2 p-2 mx-6 font-bold cursor-pointer rounded"
            value="Crear Cuenta"
          />

          <div className="m-3 flex flex-col text-center">
            <Link
              to="/login"
              className="hover:text-blue-400 my-3"
            >¿Ya tienes una cuenta? Inicia Sesión</Link>
            <Link
              to="/recuperar"
              className="hover:text-blue-400"
            >¿Olvidaste tu Password? Recuperala Aquí</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Registrar;