import { useAuth0 } from "@auth0/auth0-react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoginButton from "../../components/loginButton";
import LogoHeader from "../../components/logoHeader";
import LogoutButton from "../../components/logoutButton";
import OptionList from "../../components/optionList";
import SpeakBar from "../../components/speakBar";

const MainPage = () => {
    const [phrase, setPhrase] = useState<string>("");
    const [apiKey, setApiKey] = useState<string>("");
    const [opciones, setOpciones] = useState<string[]>([]);
    const { user, isAuthenticated, getAccessTokenSilently, buildAuthorizeUrl } = useAuth0();

    //const clientID = "186645883347-gaupgc2vlerfpb8to0150eppihoss2gn.apps.googleusercontent.com";

    useEffect(() => {
        if (isAuthenticated) {
            getAccessTokenSilently()
                .then((t: string) => {
                    setApiKey(t)
                    console.log(t);

                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [isAuthenticated])


    useEffect(() => {
        if (!phrase) { return; }

        const QueryAPI = async (query: string, apiKey: string) => {
            const res = await fetch('http://www.voicemail.com/api/query', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: query,
                    apiKey: apiKey
                })
            });

            const resJson = await res.json();

            setOpciones(resJson.opciones);
        }
        // Llamada a API
        //QueryAPI(phrase, apiKey);

        setOpciones(["Opción 1", "Opción 2", "Opción 3"]);
    }, [phrase])

    if (!isAuthenticated) {
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