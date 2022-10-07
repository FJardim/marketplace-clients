// import Star from "../Generico/Star";
import Star from "../Generico/Star";

const ProductHomeInfo = () => {
    return (
        <div className="p-2">
            <p className="text-sm py-2 ml-6">CONSUMER ELECTRICS</p>
            <div className="p-6">
                <span className="py-8 font-semibold text-xl">Bomba Electrica xxxxxxxxxx xxxxxxxxxx</span>
                <div className="flex items-center">
                    <p className="text-red-500 py-1 font-bold text-xl">$36.12</p>
                    <p className="px-4 text-base line-through text-gray-600">$56.99</p>
                </div>
                <Star />
                <div className="text-justify font-normal text-sm py-6">
                    <p className="border-t-2 border-gray-400 font-normal text-sm pt-2">Status:</p>
                    <p className="font-normal text-sm ">Sold By:</p>
                    <p className="pt-4 font-semibold">Descripción del Producto:</p>
                    <p className="flex">on máquinas en las cuales se produce una transformación de la energía mecánica en energía hidráulica (velocidad y presión) comunicada al fluido que circula por ellas.</p>
                </div>
            </div>
        </div>
    );
}

export default ProductHomeInfo;