import React from "react";
import useAuthContext from "../../context/authContext";

const LoginButton = () => {
    const { Token, SetToken } = useAuthContext();

    const loginWithRedirect = async () => {
        const res = await fetch('http://localhost:5000/authenticate', {
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: Token }),
            redirect: "follow"
        })

        const jsonRes = await res.text();
        const response = JSON.parse(jsonRes);

        SetToken(response.token);
    }

    return (
        <button className="border bg-blue-500 hover:bg-blue-600 font-semibold text-lg text-white p-2 rounded-lg"
            onClick={async () => { await loginWithRedirect() }}>Iniciar sesión
        </button>
    );
};

export default LoginButton;