import candado from "../../assets/candado.png";

const productosarrays = [
    {
        id: 1, nombre: "Candado marca Casi", precio: "20.60"
    },
    {
        id: 2, nombre: "Llave marca Casi", precio: "2.00"
    },
]
const DetalleOrden = () => {
    const sumaPrecio = productosarrays.reduce((total, producto) => total + Number(producto.precio), 0);

    const productos = productosarrays.map((producto) => <div key={producto.id} className="grid grid-cols-2 p-4">
        <div className="flex ml-4 text-sm">
            <img className="w-8 h-8  rounded-full" src={candado} alt={""}></img>
            <p className="ml-2 mt-1">{producto.nombre}</p>
        </div>
        <div className="ml-4 text-sm text-end">
            <p>${producto.precio}</p>
        </div>
    </div>)
    return (
        <div className="bg-gray-200 p-2 rounded-md">
            <p className="text-xl font-semibold text-center">Detalle de la Orden</p>
            {productos}
            <p className="mt-4 ml-4 px-4 text-sm font-semibold">Extras</p>
            <div className="grid grid-cols-2 p-4 ">
                <div className="ml-4 text-sm">
                    <p>Delivery</p>
                    <p className="">TOTAL:</p>

                </div>
                <div className="ml-4 text-sm text-end">
                    <p>$Precio del delivery</p>
                    <p>{sumaPrecio.toFixed(2)}</p>
                </div>
            </div>
            <div>
                <p className="py-2 text-center text-xl font-semibold text-black">Mensaje o Solicitud especial</p>
                <textarea className="h-full w-full">Agregar un comentario para tu compra</textarea>
            </div>
        </div>
    );
}

export default DetalleOrden;