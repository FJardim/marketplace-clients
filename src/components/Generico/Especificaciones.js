const Especificaciones = ({ color, dimensiones, marcas, status }) => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-[1px] border-gray-300 border-gray-300  border-2">
                <div className="border-r-2 text-xl font-semibold">
                    <p className="bg-gray-100 border-gray-300 border-b-2 p-2">Color</p>
                    <p className="bg-gray-100 border-gray-300 border-b-2 p-2">Dimensiones</p>
                    <p className="bg-gray-100 border-gray-300 border-b-2 p-2">Marcas</p>
                    <p className="bg-gray-100 p-2">Status</p>
                </div>
                <div className="text-xl text-gray-600">
                    <p className="border-gray-300 border-b-2 p-2">{color}</p>
                    <p className="border-gray-300 border-b-2 p-2">{dimensiones}</p>
                    <p className="border-gray-300 border-b-2 p-2">{marcas}</p>
                    <p className="p-2">{status}</p>
                </div>

            </div>
        </div>
    );
}

export default Especificaciones;