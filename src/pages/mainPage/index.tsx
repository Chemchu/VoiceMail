import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoginButton from "../../components/loginButton";
import LogoHeader from "../../components/logoHeader";
import LogoutButton from "../../components/logoutButton";
import OptionList from "../../components/optionList";
import SpeakBar from "../../components/speakBar";
import useAuthContext from "../../context/authContext";
import { notifyError, notifySuccess } from "../../utils/toastify";

const MainPage = () => {
    const { Token, Steps, SetSteps } = useAuthContext();
    const [phrases, setPhrase] = useState<string[]>([]);
    const [intent, setIntent] = useState<string | null>(null);
    const [opciones, setOpciones] = useState<string[]>([]);

    useEffect(() => {
        if (!Steps) { return; }
        if (Steps[Steps.length - 1] === "DONE") { setPhrase([]); notifySuccess("Correo enviado correctamente"); return; }

        notifySuccess(Steps[Steps.length - 1])

    }, [Steps])


    useEffect(() => {
        if (!phrases) { return; }

        const QueryAPI = async (query: string[], token: string, steps: string[], intent: string | null) => {
            try {
                if (query.length <= 0) { return; }

                const res = await fetch('http://localhost:5000/query', {
                    mode: 'cors',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify({
                        query: query,
                        token: token,
                        steps: steps,
                        intent: intent
                    }),
                });

                const resJson = await res.json();

                if (intent === null) {
                    setIntent(resJson.intent);
                }
                SetSteps(resJson.steps)
            }
            catch (e) {
                notifyError("Error de conexión. Tal vez el servidor no esté activo");
            }
        }
        // Llamada a API
        QueryAPI(phrases, Token, Steps, intent);

    }, [phrases])

    if (!Token) {
        return (
            <div className="flex flex-col w-full h-full justify-start items-center bg-white-500">
                <div className="flex w-full h-20 justify-start p-4">
                    <LoginButton />
                </div>
                <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
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
            <div className="flex w-full h-20 justify-start p-4">
                <LogoutButton />
            </div>
            <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
                <div className="text-8xl text-gray-600">
                    <LogoHeader />
                </div>
                <SpeakBar phrases={phrases} setPhrase={setPhrase} />
                <button className="text-transparent hover:text-black" onClick={() => { SetSteps([]); setIntent(null); setPhrase([]) }}>
                    Reset
                </button>
                <AnimatePresence>
                    {
                        opciones.length > 0 &&
                        phrases &&
                        <OptionList opciones={opciones} />
                    }
                </AnimatePresence>
            </div>
        </div >
    )
}

export default MainPage;