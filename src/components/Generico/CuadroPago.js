import { BiCreditCard, BiPackage } from "react-icons/bi";
import { SiGoogleearth } from "react-icons/si";
const CuadroPago = () => {
    return (
        <div className="bg-gray-200 rounded-md h-60 p-4 grid grid-rows-4">
            <div className="flex items-center">
                <span><SiGoogleearth className="text-lg" /></span>
                <p className="lg:text-sm font-normal ml-2 sm:text-xs">Envío a Consultar</p>
            </div>
            <div className="flex items-center">
                <span><BiPackage className="text-lg" /></span>
                <p className="lg:text-sm font-normal ml-2 sm:text-xs">Devolución de 7 días si es elegible, tan fácil</p>
            </div>
            <div className="flex items-center">
                <span><BiCreditCard className="text-lg" /></span>
                <p className="lg:text-sm text font-normal ml-2 sm:text-xs">El proveedor da facturas por esto producto.</p>
            </div>
            <div className="flex items-center">
                <span><BiCreditCard className="text-lg" /></span>
                <p className="lg:text-sm font-normal ml-2 sm:text-xs">Paga en Linea o al recibir bienes</p>
            </div>
        </div>
    );
}

export default CuadroPago;