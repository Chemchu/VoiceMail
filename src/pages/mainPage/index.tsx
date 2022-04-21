import SpeakBar from "../../components/speakBar";

const MainPage = () => {
    return (
        <div className="flex flex-col gap-10 w-full h-full justify-center items-center bg-white-500">
            <span className="text-8xl">
                VoiceMail
            </span>
            <SpeakBar />
            <footer>
                Authors: Gustavo Lee & Carlos
            </footer>
        </div>
    )
}

export default MainPage;