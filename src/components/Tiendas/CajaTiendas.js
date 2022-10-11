import Star from "../Generico/Star";
import { AiOutlinePhone, AiTwotoneMail } from "react-icons/ai";
const CajaTiendas = ({ portada, imagen, nombre, direccion, telefono, email }) => {
    return (
        <div className="relative max-w-[300px] w-full shadow">
            <img className="absolute h-[100px] w-full border-b border-green-500" src={portada} alt="" />
            <div className="relative flex items-center justify-between pt-[60px] px-4">
                <img className="w-20 h-20 rounded-full shadow" src={imagen} alt="" />
                <button className="px-3 py-1 border border-green-500 text-green-500 bg-white rounded-full text-xs">Visitar tienda</button>
            </div>
            <div className="px-6 mt-4">
                <div className="flex  space-x-3">
                    <Star />
                </div>

                <h4 className="mt-2 text-lg font-bold">{nombre}</h4>

                <p className="text-gray-400 py-2 mt-10">{direccion}</p>
                <div className="flex text-gray-400">
                    <AiOutlinePhone />
                    <p className="ml-4">{telefono}</p>
                </div>
                <div className="flex text-gray-400 mb-6">
                    <AiTwotoneMail />
                    <p className="ml-4">{email}</p>
                </div>
            </div>

        </div >
    );
}

export default CajaTiendas;