import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../img/logo.png";
import useAuth from '../hooks/useAuth';


const Header = () => {

    const [ button, setButton ] = useState(false);
    const { cerrarSesion } = useAuth();
    const [ token, setToken ] = useState();

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [])


    const sesion = () => {
        if(token) {
            cerrarSesion();
            setToken(null);
        }
    }

    const mostrarNav = () => {
        setButton(!button);
    }
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-200 py-7">
        <div className="px-10 mx-auto flex flex-col md:flex-row justify-around items-center max-w-6xl">
            <Link
                to="/"
            ><img className="w-12 h-12" src={logo} alt="Logo" /></Link>

            <button type="button" className='block sm:hidden mt-3' onClick={() => mostrarNav()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </button>

            <nav className={`${button ? 'flex flex-col' : 'hidden'} sm:flex sm:flex-col md:flex-row text-center justify-between gap-3 mt-3 md:mt-0`}>
                <Link
                    to="/evento"
                    className="font-bold text-2xl hover:text-red-500"
                >Evento</Link>
                <Link
                    to="/precios"
                    className="font-bold text-2xl hover:text-red-500"
                >Precios</Link>
                <Link
                    to="/comentarios"
                    className="font-bold text-2xl hover:text-red-500"
                >Comentarios</Link>
                <Link
                    to="/login"
                    onClick={sesion}
                    className={`${token ? 'hidden' : 'block'} font-bold text-2xl hover:text-red-500`}
                >Iniciar Sesión</Link>
                <Link
                    to="/login"
                    onClick={sesion}
                    className={`${token ? 'block' : 'hidden'} font-bold text-2xl hover:text-red-500`}
                >Cerrar Sesión</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header;