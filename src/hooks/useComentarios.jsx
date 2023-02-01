import { useContext } from "react";
import ComentariosContext from '../context/ComentariosProvider';

const useComentarios = () => {
    return useContext(ComentariosContext);
}

export default useComentarios;