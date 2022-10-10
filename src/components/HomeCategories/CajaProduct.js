// import producto from "../../assets/bomba.jpg";
import Star from "../Generico/Star";

const CajaProduct = ({ title, imagen, precio, valor, oferta }) => {
    return (
        <div className="w-full h-full bg-white p-2">
            <div className="text-center ">
                <div className="flex justify-end ">
                    <span className="bg-black p-1 text-white text-sm rounded-md font-medium" >{oferta}</span>
                </div>
                <img src={imagen} alt="productos" />
            </div>
            <div className="p-2">
                <p className="p-1 text-blue-500 font-normal cursor-pointer underline hover:text-main">{title}</p>
                <Star />
                <p className="p-1 mt-2">{precio}</p>
            </div>
        </div>
    );
}

export default CajaProduct;