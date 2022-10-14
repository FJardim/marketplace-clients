import Modal from "../Modal/Modal";
import PediosRealizado from "../../assets/Pedidos/PedidosRealizado.png";
const PedidosRealizados = ({ tiempoEstimado, nombreProducto, cantidad, precio, direccion, estadoPedido }) => {
    return (
        <Modal show>
            <div className="flex flex-col bg-white h-full w-full p-4 items-center">
                <p className="text-lx font-bold text-center">Pedido Realizado</p>
                <img className="block p-6 h-48 w-80" src={PediosRealizado} alt="" />
            </div>
            <div className="text-justify px-10 text-base font-normal">
                <p className="py-1"><b>Realizaste un pedido de un producto de: </b></p>
                <p className="py-1">Producto: {nombreProducto}, Cantidad: {cantidad}, Precio: {precio}</p>
                <p className="py-1">Tiempo estimado: {tiempoEstimado}</p>
                <p className="py-1"><b>La dirección de envío es:</b> {direccion}</p>
                <p className="py-1">Estado: {estadoPedido}</p>
            </div>
        </Modal>
    );
}

export default PedidosRealizados;