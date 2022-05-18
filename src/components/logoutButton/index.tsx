import React, { useEffect } from "react";
import useAuthContext from "../../context/authContext";

const LogoutButton = () => {
    const { Token, SetToken } = useAuthContext();

    useEffect(() => {
        if (!Token) {
            window.location.replace(window.location.origin);
        }
    }, [Token])


    const logout = async () => {
        // const res = await fetch('http://localhost:5000/', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json', },
        //     body: Token
        // })

        // const jsonRes = await res.json();
        SetToken("");
    }

    return (
        <button className="border bg-red-500 hover:bg-red-600 font-semibold text-lg text-white p-2 rounded-lg"
            onClick={() => logout()}>Cerrar sesión
        </button>
    );
};

export default LogoutButton;