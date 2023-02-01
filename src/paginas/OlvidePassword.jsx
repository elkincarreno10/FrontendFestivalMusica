import { Link, useParams } from 'react-router-dom';
import Alerta from '../Components/Alerta';
import { useState, useEffect } from 'react';
import imagen from '../img/login.jpg';
import axios from 'axios';

const OlvidePassword = () => {

    const [ alerta, setAlerta ] = useState({});
    const [ password, setPassword ] = useState('');
    const [ passwordRepetido, setPasswordRepetido ] = useState('');
    const [ passwordModificado, setPasswordModificado ] = useState(false);
    const [ tokenValido, setTokenValido ] = useState(false);

    const params = useParams();
    const { token } = params;

    useEffect(() => {
        const comprobarToken = async () => {
            try {
                const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password/${token}`;
                const { data } = await axios(url);
                setAlerta({
                    msg: 'Coloca tu nuevo Password'
                })
                setTokenValido(true);
            } catch (error) {
                setAlerta({
                    msg: 'Hubo un error con el enlace',
                    error: true
                })
            }
        }
        comprobarToken();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();

        if([ password, passwordRepetido ].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }
        if( password.length < 6 || (password !== passwordRepetido)) {
            setAlerta({
                msg: 'El password debe ser mayor a 6 caracteres y deben ser iguales',
                error: true
            })
            return;
        }

        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password/${token}`;
            const { data } = await axios.post(url, { password });
      
            setAlerta({
              msg: data.msg
            })
            setPasswordModificado(true);
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
        <div className="md:grid md:grid-cols-2 gap-6 items-center">
          <div>
            <img className="w-full max-w-md mx-auto items-center h-96" src={imagen} alt="imagen festival" />
          </div>
          <div>
            {msg && <Alerta 
                alerta={alerta}
            />}

            {tokenValido && (
                <>
                    <form 
                        onSubmit={handleSubmit}
                        className="shadow-md mt-4 md:mt-0 rounded-lg md:ml-4 lg:mr-14 bg-white p-10"
                    >

                        {!passwordModificado && (
                            <>
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
                                    value={passwordRepetido}
                                    onChange={e => setPasswordRepetido(e.target.value)}
                                    />
                                </div>
                                <input 
                                    type="submit" 
                                    className="bg-blue-300 mt-2 p-2 mx-6 font-bold cursor-pointer rounded"
                                    value="Guardar Password"
                                />
                            </>
                        )}

            
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
                </>
            )}

          </div>
        </div>
      </>
    )
}

export default OlvidePassword;