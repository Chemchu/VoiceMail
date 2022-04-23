import { motion } from 'framer-motion';
import MainPage from './pages/mainPage';

function App() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className='flex flex-col justify-between items-center w-full h-screen'>
      <MainPage />

      <footer className='pb-4'>
        Autores: Gustavo & Carlos
      </footer>
    </motion.div>
  )
}

export default App
