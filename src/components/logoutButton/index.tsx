import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button className="border bg-red-500 hover:bg-red-600 font-semibold text-lg text-white p-2 rounded-lg"
            onClick={() => logout({ returnTo: window.location.origin })}>Cerrar sesión
        </button>
    );
};

export default LogoutButton;