import { BsHeart } from "react-icons/bs";
import { useState } from "react";

const ButtonCountCompra = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="justify-center flex p-2 text-base font-medium space-x-2" >
            <p className="text-center py-4">Cantidad</p>
            <div className="bg-white rounded-md">
                <button onClick={() => {
                    if (count === 0) return;
                    setCount(count - 1)
                }} className="text-2xl text-gray-400 h-full p-2 rounded-l-md"> - </button>
                <span className="px-6"> {count} </span>
                <button onClick={() => setCount(count + 1)} className="text-2xl text-gray-400 rounded-r-md h-full p-2"> + </button>
            </div>
            <button className="bg-black text-white rounded-md p-2">Agregar en el carrito</button>
            <button className="bg-main text-black rounded-md p-2">Comprar</button>
            <button className="text-center hover:text-main-dark"><BsHeart className="h-8 w-8" /></button>
        </div>
    );
}

export default ButtonCountCompra;