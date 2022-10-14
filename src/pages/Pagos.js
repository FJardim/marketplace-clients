import { Link } from "react-router-dom";
import DetalleOrden from "../components/Pedidos/DetalleOrden";
import Pasos from "../components/Pedidos/Pasos";
import tarjetaCredito from "../assets/Pedidos/TarjetaCredito.png";
import paypal from "../assets/Pedidos/PayPal.png";
import efectivo from "../assets/Pedidos/EfectivoDelivery.png";
import transferencia from "../assets/Pedidos/Transferencia.png";
import DisePago from "../components/Pedidos/DisePago";

const Pagos = () => {
    return (
        <div>
            <div className="flex p-6">
                <Link to={"/"} className="text-blue-600 cursor-pointer">Home/</Link>
                <Link> Pagos </Link>
            </div>
            <div className="md:grid md:grid-cols-2 bg-white">
                <div className="p-2">
                    <Pasos />
                    <div className="py-6 px-8 ">
                        <p className="text-lg font-bold">Método de Pago</p>
                        <div className="bg-gray-300 w-58 h-0.5 rounded-full text-center my-auto"></div>
                        <div className="flex flex-col-4 space-x-10 p-6">
                            <DisePago imagen={tarjetaCredito} texto={"Tarjeta de Credito"} />
                            <DisePago imagen={paypal} texto={"paypal"} />
                            <DisePago imagen={efectivo} texto={"Efectivo Delivery"} />
                            <DisePago imagen={transferencia} texto={"Transferencias"} />
                        </div>
                    </div>
                </div>
                <div className="p-4 md:p-16">
                    <DetalleOrden />
                </div>
            </div>
            <div className="grid grid-cols-2">
                <Link to={"/compra"} className="px-20 m-10">
                    <button className="border text-lg font-semibold border-main bg-white">
                        <p className="p-2 px-10">
                            volver
                        </p>
                    </button>
                </Link>

            </div>
        </div >
    );
}

export default Pagos;