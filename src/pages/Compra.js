import { Link } from "react-router-dom";
import DetalleOrden from "../components/Pedidos/DetalleOrden";
import Direcciond from "../components/Pedidos/Direcciond";
import ModoEntrega from "../components/Pedidos/ModoEntrega";
import Pasos from "../components/Pedidos/Pasos";

const Compra = () => {

    return (
        <div>
            <div className="flex p-6">
                <Link to={"/"} className="text-blue-600 cursor-pointer">Home/</Link>
                <Link> Compras </Link>
            </div>
            <div className="md:grid md:grid-cols-2 bg-white">
                <div className="p-2">
                    <Pasos />
                    <ModoEntrega />
                    <div className="py-6 px-8 ">
                        <p className="flex text-lg font-bold">Por favor seleccione la dirección para la entrega de su pedido</p>
                        <div className="flex">
                            <Direcciond direccion={"Dirección 1"} descDireccion={"Calle 3-1 Plaza-Valencia "} />
                            <Direcciond direccion={"Dirección 2"} descDireccion={"Calle 4 SurESTE-Valencia "} />
                            <Direcciond direccion={"Dirección 3"} descDireccion={"Calle Principal centro-Valencia "} />
                        </div>
                    </div>

                </div>
                <div className="p-4 md:p-16">
                    <DetalleOrden />
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-20 m-10">
                    <button className="border text-lg font-semibold border-main bg-white">
                        <p className="p-2 px-10">
                            volver
                        </p>
                    </button>
                </div>
                <Link to={"/pagos"} className="px-20 m-10">
                    <button className="text-white text-lg font-semibold bg-main">
                        <p className="p-2 px-10">
                            Siguente
                        </p>
                    </button>
                </Link>
            </div>
        </div >
    );
}

export default Compra;