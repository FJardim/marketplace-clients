import Direccion from "../../assets/Pedidos/Direccion.png";

const Direcciond = ({ direccion, descDireccion }) => {

    return (
        <div className="flex items-center space-x-6 p-6">
            <div>
                <div className="flex border border-gray-300 p-2 cursor-pointer items-center justify-center">
                    <img src={Direccion} className="flex h-26 w-26 " alt="RetiroSucursal" />
                </div>
                <div className="text-center font-semibold">
                    <p className="font-semibold">{direccion}</p>
                    <p className="text-gray-400 font-medium">{descDireccion}</p>
                </div>
            </div>
        </div>
    );
}

export default Direcciond;