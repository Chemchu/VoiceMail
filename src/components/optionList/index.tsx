import { motion } from "framer-motion";

const OptionList = (props: { opciones: string[] }) => {
    return (
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="border rounded-lg w-1/3">
            {
                props.opciones.map((opcion: string) => (
                    <li key={"id_" + opcion} className="p-2 hover:bg-gray-200 cursor-pointer hover:text-blue-600 hover:font-semibold">
                        {opcion}
                    </li>
                ))
            }
        </motion.ul>
    )
}

export default OptionList;