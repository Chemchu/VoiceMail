import { motion } from 'framer-motion';
import MainPage from './pages/mainPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className='flex flex-col justify-between items-center w-full h-screen'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MainPage />
      <footer className='pb-4'>
        Autores: Gustavo & Carlos
      </footer>
    </motion.div>
  )
}

export default App
