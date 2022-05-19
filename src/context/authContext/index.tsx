import React, { useContext, createContext, useState } from 'react';

interface GoogleAuth {
    Token: string,
    SetToken: React.Dispatch<React.SetStateAction<string>>,
    Steps: string[],
    SetSteps: React.Dispatch<React.SetStateAction<string[]>>,
}

//Context
const AppContext = createContext<GoogleAuth>({} as GoogleAuth);

//Provider
export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string>("")
    const [steps, setSteps] = useState<string[]>([])

    const values: GoogleAuth = {
        Token: token,
        SetToken: setToken,
        Steps: steps,
        SetSteps: setSteps
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