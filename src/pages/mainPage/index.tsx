import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoginButton from "../../components/loginButton";
import LogoHeader from "../../components/logoHeader";
import LogoutButton from "../../components/logoutButton";
import OptionList from "../../components/optionList";
import SpeakBar from "../../components/speakBar";
import useAuthContext from "../../context/authContext";

const MainPage = () => {
    const { Token, SetToken } = useAuthContext();
    const [phrase, setPhrase] = useState<string>("");
    const [opciones, setOpciones] = useState<string[]>([]);

    useEffect(() => {
        if (!phrase) { return; }

        const QueryAPI = async (query: string, token: string) => {
            const res = await fetch('http://localhost:5000/query', {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({
                    query: query,
                    token: token
                }),
                redirect: "follow"
            });

            const resJson = await res.json();

            console.log(resJson);

            //setOpciones(resJson.opciones);
            //setOpciones(["Opción 1", "Opción 2", "Opción 3"]);
        }
        // Llamada a API
        QueryAPI(phrase, Token);

    }, [phrase])

    if (!Token) {
        return (
            <div className="flex flex-col w-full h-full justify-start items-center bg-white-500">
                <div className="flex w-full h-20 justify-end p-4">
                    <LoginButton />
                </div>
                <div className="flex flex-col w-full h-full justify-center items-center">
                    <div className="text-8xl text-gray-600">
                        <LogoHeader />
                    </div>
                    <span className="text-xl">Inicie sesión para usar VoiceMail</span>
                </div>
            </div >
        )
    }

    return (
        <div className="flex flex-col w-full h-full justify-start items-center bg-white-500">
            <div className="flex w-full h-20 justify-end p-4">
                <LogoutButton />
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center">
                <div className="text-8xl text-gray-600">
                    <LogoHeader />
                </div>
                <SpeakBar setPhrase={setPhrase} />
                <AnimatePresence>
                    {
                        opciones.length > 0 &&
                        phrase &&
                        <OptionList opciones={opciones} />
                    }
                </AnimatePresence>
            </div>
        </div >
    )
}

export default MainPage;