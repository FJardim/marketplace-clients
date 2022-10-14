import RetiroSucursal from "../../assets/Pedidos/RetiroSucursal.png";
import Delivery from "../../assets/Pedidos/Delivery.png";

const ModoEntrega = () => {
    return (

        <div className="py-10 px-8">
            <p className="text-lg font-bold">Modo de entrega</p>
            <div className="bg-gray-300 w-58 h-0.5 rounded-full text-center my-auto"></div>
            <div className="flex flex-col-2 items-center space-x-36 p-6">
                <div className="flex border border-gray-300 w-32 h-26 cursor-pointer">
                    <img src={RetiroSucursal} className="flex " alt="RetiroSucursal" />
                </div>
                <div className="border border-gray-300 w-32 h-26 cursor-pointer">
                    <img src={Delivery} className="flex " alt="Delivery" />
                </div>
            </div>
        </div>

    );
}

export default ModoEntrega;