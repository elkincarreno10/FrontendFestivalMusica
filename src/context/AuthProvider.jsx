
import { createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const cerrarSesion = () => {
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider
            value={{
                cerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;


