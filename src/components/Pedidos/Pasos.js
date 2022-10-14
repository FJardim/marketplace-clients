const Pasos = () => {
    return (

        <div className="flex justify-center py-10">
            <div className="flex flex-col items-center">
                <div className="bg-main w-12 h-12 mb-4 rounded-full text-center p-2 text-white text-xl"><p>1</p></div>
                <div className="text-black text-xs w-24 block">Modo de Entrega</div>
            </div>
            <div className="relative w-56 text-center">
                <div className="absolute bg-gray-300 md:w-[272px] w-[236px] h-1 left-[-24px] top-[21px]"></div>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-main w-12 h-12 mb-4 rounded-full text-center p-2 text-white text-xl"><p>2</p></div>
                <div className="text-black text-xs w-24 block">Método de Pago</div>
            </div>
        </div>

    );
}

export default Pasos;