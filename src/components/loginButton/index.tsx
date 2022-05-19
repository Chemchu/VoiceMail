import React from "react";
import useAuthContext from "../../context/authContext";
import { notifyError, notifyPromise } from "../../utils/toastify";

const LoginButton = () => {
    const { Token, SetToken } = useAuthContext();

    const loginWithRedirect = async () => {
        try {
            const reqPromise = fetch('http://localhost:5000/authenticate', {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: Token }),
                redirect: "follow"
            })
            const res = await notifyPromise(reqPromise, undefined, "Error, el servidor puede estar apagado", "Sesión iniciada");
            const jsonRes = await res.text();
            const response = JSON.parse(jsonRes);

            SetToken(response.token);
        }
        catch (e) {
            //notifyError("Error de conexión. Tal vez el servidor no esté activo");
            console.log(e);
        }

    }

    return (
        <button className="border bg-blue-500 hover:bg-blue-600 font-semibold text-lg text-white p-2 rounded-lg"
            onClick={async () => { await loginWithRedirect() }}>Iniciar sesión
        </button>
    );
};

export default LoginButton;