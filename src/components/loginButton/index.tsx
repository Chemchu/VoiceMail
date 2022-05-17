import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button className="border bg-blue-500 hover:bg-blue-600 font-semibold text-lg text-white p-2 rounded-lg"
            onClick={() => loginWithRedirect()}>Iniciar sesión
        </button>
    );
};

export default LoginButton;