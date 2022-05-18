import React, { useContext, createContext, useState } from 'react';

interface GoogleAuth {
    Token: string,
    SetToken: Function,
}

//Context
const AppContext = createContext<GoogleAuth>({} as GoogleAuth);

//Provider
export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string>("")

    const values: GoogleAuth = {
        Token: token,
        SetToken: setToken,
    }

    // Interface donde será expuesto como proveedor y envolverá la App.
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
}

function useAuthContext(): GoogleAuth {
    const context = useContext(AppContext);

    if (!context) {
        console.error('Error arrancando el Producto Context!!!');
    }

    return context;
}

export default useAuthContext;