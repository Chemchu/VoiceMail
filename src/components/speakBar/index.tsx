import { motion } from "framer-motion";
import { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeakBar = (props: { setPhrase: React.Dispatch<React.SetStateAction<string>> }) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        if (listening) {
            resetTranscript()
            props.setPhrase("");
            return;
        }

        if (transcript.length > 0) {
            props.setPhrase(transcript);
        }
    }, [listening]);

    if (!browserSupportsSpeechRecognition) return <p>Este navegador no es compatible con la funcionalidad de Speech-to-Text 🤷‍</p>;

    return (
        <div className='border rounded-lg w-1/3 cursor-default shadow-lg'>
            <div className="flex items-center w-full h-12 rounded-xl focus-within:shadow-lg bg-white overflow-hidden px-2">
                <span className="w-full list-none font-semibold">
                    <span>
                        {transcript}
                    </span>
                </span>
                {
                    listening ?
                        <motion.div whileHover={{ scale: 1.1 }}
                            className={`hover:cursor-pointer animate-bounce text-red-500`}
                            onClick={SpeechRecognition.stopListening}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                        </motion.div>
                        :
                        <motion.div whileHover={{ scale: 1.1 }}
                            className={`text-gray-400 hover:cursor-pointer hover:text-blue-500`}
                            onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'es-ES' })}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                        </motion.div>
                }
            </div>
        </div >
    )
}

export default SpeakBar;