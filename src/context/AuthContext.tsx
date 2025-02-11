import {createContext, useState} from "react";

export const AuthContext = createContext({
    isLogged: false,
    setIsLogged: (value: boolean) => {
    }
});

export const AuthProvider = ({children}: any) => {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <AuthContext.Provider value={{isLogged, setIsLogged}}>
            {children}
        </AuthContext.Provider>
    );
};