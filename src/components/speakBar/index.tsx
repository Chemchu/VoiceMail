import { motion } from "framer-motion";
import { useEffect } from "react";
import useSpeechToText from "react-hook-speech-to-text";

const SpeakBar = (props: { setPhrase: React.Dispatch<React.SetStateAction<string>> }) => {
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        if (results.length > 0) {
            const latestResult = results[results.length - 1]
            if (typeof latestResult === "string") { return; }

            const { transcript } = latestResult;

            props.setPhrase((userPhrase) => userPhrase + transcript);
            stopSpeechToText();
        }

    }, [results])

    useEffect(() => {
        if (isRecording) {
            setResults([]);
            props.setPhrase("");
        }
    }, [isRecording]);

    if (error) return <p>Este navegador no es compatible con la funcionalidad de Speech-to-Text 🤷‍</p>;

    return (
        <div className='border rounded-lg w-1/3 cursor-default'>
            <div className="flex items-center w-full h-12 rounded-xl focus-within:shadow-lg bg-white overflow-hidden px-2">
                <span className="w-full list-none font-semibold">
                    {
                        results.map((result: any) => {
                            return (
                                <span key={result.timestamp} className="">
                                    {result.transcript}
                                </span>
                            )
                        })
                    }
                    {interimResult && <li>{interimResult}</li>}
                </span>
                <motion.div whileHover={{ scale: 1.1 }}
                    className={`text-gray-400 hover:cursor-pointer ${isRecording ? 'animate-bounce text-red-500' : 'hover:text-blue-500'}`}
                    onClick={isRecording ? stopSpeechToText : startSpeechToText}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                </motion.div>
            </div>
        </div >
    )
}

export default SpeakBar;