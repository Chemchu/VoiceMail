import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LogoHeader from "../../components/logoHeader";
import OptionList from "../../components/optionList";
import SpeakBar from "../../components/speakBar";

const MainPage = () => {
    const [phrase, setPhrase] = useState<string>("");
    const [opciones, setOpciones] = useState<string[]>([]);

    useEffect(() => {
        if (!phrase) { return; }

        // Llamada a API
        console.log(phrase);

        setOpciones(["Opción 1", "Opción 2", "Opción 3"]);
    }, [phrase])

    return (
        <div className="flex flex-col gap-10 w-full h-full justify-center items-center bg-white-500">
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
        </div >
    )
}

export default MainPage;