import { useState } from 'react';
import { Link } from 'react-router-dom';
import imagen from '../img/login.jpg';
import Alerta from '../Components/Alerta';
import axios from 'axios';

const Recuperar = () => {
    const [ alerta, setAlerta ] = useState({});
    const [ email, setEmail ] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        if(email === '' || email.length < 6) {
          setAlerta({
            msg: 'El email es obligatorio',
            error: true
          })
          return;
        }
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password`;
            const { data } = await axios.post(url, {email});
            setAlerta({msg: data.msg});
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })
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
            onSubmit={handleSubmit}
            className="shadow-md mt-4 md:mt-0 rounded-lg md:ml-4 lg:mr-14 bg-white p-10"
          >
          {msg && <Alerta 
                alerta={alerta}
            />}
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
  
            <input 
              type="submit" 
              className="bg-blue-300 mt-2 p-2 mx-6 font-bold cursor-pointer rounded"
              value="Enviar Instrucciones"
            />
  
            <div className="m-3 flex flex-col text-center">
              <Link
                to="/login"
                className="hover:text-blue-400 my-3"
              >¿Ya tines una cuenta? Inicia Sesión</Link>
              <Link
                to="/registrar"
                className="hover:text-blue-400 mb-1"
              >¿No tienes una cuenta? Regístrate Aquí</Link>
            </div>
          </form>
        </div>
      </>
    )
  }
  
  export default Recuperar;