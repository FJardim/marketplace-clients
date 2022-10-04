
const InforHome = ({ icono, title, texto }) => {
    return (
        <div className="flex bg-white h-32 w-full shadow-md">
            <div className="w-full">
                {icono}
            </div>
            <div className="justify-around items-center w-full p-2 m-auto">
                <div className="font-bold">
                    {title}
                </div>
                <div className="text-gray-400 text-sm">
                    {texto}
                </div>

            </div>
        </div>
    );
}

export default InforHome;