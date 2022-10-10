import React from "react";

const Price = () => {
  return (
    <div className="lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow mt-4 p-4 ">
      <div>
        <h4 className="text-lg font-bold">Precio</h4>
        <div className="container flex justify-around">
          <div>
            <input
              type="number"
              id="Precio"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-24 p-2"
              placeholder="Precio"
            />
          </div>
          <div>
            <input
              type="number"
              id="Precio"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-24 p-2"
              placeholder="Precio"
            />
          </div>
        </div>
        <div className="container flex justify-around mt-2">
          <div>
            <button className="bg-main hover:bg-main-dark text-white font-bold py-2 px-4 rounded-lg">
              Comprar
            </button>
          </div>
          <div>
            <button className="bg-main hover:bg-main-dark text-white font-bold py-2 px-4 rounded-lg">
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
