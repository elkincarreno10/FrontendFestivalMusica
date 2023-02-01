import { Link, useNavigate } from "react-router-dom";
import imagen from '../img/login.jpg';
import Alerta from '../Components/Alerta';
import { useState } from "react";
import axios from "axios";

const Login = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ alerta, setAlerta ] = useState({});

  const navigate = useNavigate();

  const handlerSubmit = async e => {
    e.preventDefault();

    if([email, password].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });
      return;
    }

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/`, {email, password});
      localStorage.setItem('token', data.token);    

      setAlerta({
        msg: 'Ingreso Exitoso'
      })

      window.location = '/';

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
          onSubmit={handlerSubmit}
          className="shadow-md mt-4 md:mt-0 rounded-lg md:ml-4 lg:mr-14 bg-white p-10"
        >
          {msg && (
            <Alerta 
              alerta={alerta}
            />
          )}
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

          <input 
            type="submit" 
            className="bg-blue-300 mt-2 p-2 mx-6 font-bold cursor-pointer rounded"
            value="Iniciar Sesión"
          />

          <div className="m-3 flex flex-col text-center">
            <Link
              to="/registrar"
              className="hover:text-blue-400  my-3"
            >¿No tienes una cuenta? Regístrate Aquí</Link>
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

export default Login