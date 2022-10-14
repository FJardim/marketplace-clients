const DisePago = ({ imagen, texto }) => {
    return (
        <div className="">
            <div className="flex border-gray-300 border cursor-pointer w-28 h-24">
                <img src={imagen} className="flex p-2 w-28 h-24" alt="RetiroSucursal" />
            </div>
            <div className="text-center font-semibold">
                <p className="font-semibold">{texto}</p>
            </div>
        </div>
    );
}

export default DisePago;