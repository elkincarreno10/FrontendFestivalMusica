import { Link, useParams } from 'react-router-dom';
import Alerta from '../Components/Alerta';
import { useState, useEffect } from 'react';
import imagen from '../img/login.jpg';
import axios from 'axios';

const Confirmar = () => {

    const [ alerta, setAlerta ] = useState({});

    const params = useParams();
    const { token } = params;

    useEffect(() => {
        const autenticar = async (token) => {
            try {
                const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/confirmar/${token}`;
                const { data } = await axios(url);
                setAlerta(data);
            } catch (error) {
                console.log(error);
            }
        }
        autenticar(token);
    }, [])

    const { msg } = alerta;
    return (
        <>
        <div className="md:grid md:grid-cols-2 gap-6 items-center">
          <div>
            <img className="w-full max-w-md mx-auto items-center h-96" src={imagen} alt="imagen festival" />
          </div>

          <div className='text-center font-bold text-2xl'>
            {msg && <Alerta 
                alerta={alerta}
            />}
            <Link
                to="/login"
                className="hover:text-blue-400 my-3"
            >Inicia Sesión</Link>
          </div>
        </div>
      </>
    )
}

export default Confirmar