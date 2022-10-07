import React from "react";
import { BsFillStarFill } from "react-icons/bs";
const MenuLeft = () => {
  return (
    <div className="bg-white w-full h-full rounded-sm">
      <div className="container ml-9">
        <p className="text-lg font-bold mb-2">Categories</p>
        <p>Cerrajeria</p>
        <p>Plomeria</p>
        <p>Construccion</p>
        <p>Electricidad</p>
        <p>Herramientas</p>
        <p>Perneria</p>
      </div>
      <div className="container ml-9">
        <p className="text-lg font-bold mt-4 mb-2">Rating</p>
        <div className="flex space-x-2 text-main">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
      </div>
      <div className="container ml-9">
        <p className="text-lg font-bold mt-4 mb-2">Price</p>
        <div className="flex space-x-4">
          <input
            type="price"
            placeholder=""
            className="border justify-center rounded-lg w-20"
          />
          <input
            type="price"
            placeholder=""
            className="border justify-center rounded-lg w-20"
          />
        </div>
        <div className="flex space-x-5 mt-3">
          <button class="bg-main hover:bg-main-dark text-white font-bold py-1 px-1 rounded">
            Comprar
          </button>
          <button class="bg-main hover:bg-main-dark text-white font-bold py-1 px-1 rounded">
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
