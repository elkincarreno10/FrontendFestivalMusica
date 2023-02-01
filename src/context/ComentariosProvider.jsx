import { createContext, useState } from 'react';
import axios from 'axios';

const ComentariosContext = createContext();

export const ComentariosProvider = ({children}) => {

    const [ comentarios, setComentarios ] = useState([]);

    const obtenerComentarios = async () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/comentarios`;
            const { data } = await axios(url);
            setComentarios(data);
        } catch (error) {
            console.log(error);
        }
    }
    obtenerComentarios();

    const agregarComentario = async comentario => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/comentarios/agregar-comentario`;
            const { data } = await axios.post(url, comentario);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ComentariosContext.Provider
            value={{
                comentarios,
                agregarComentario
            }}
        >
            {children}
        </ComentariosContext.Provider>
    )
}

export default ComentariosContext;