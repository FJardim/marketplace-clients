import React from "react";

const Price = () => {
  return (
    <div className="Container mt-6">
      <p className="text-lg font-bold">Precio</p>
      <div className="flex">
        <p>Min</p>
        <input
          type="price"
          placeholder=""
          className="border justify-center rounded-lg w-20"
        />
        <p>Max</p>
        <input
          type="price"
          placeholder=""
          className="border justify-center rounded-lg w-20"
        />
      </div>
      <div className="flex justify-between">
        <button class="bg-main hover:bg-main-dark text-white font-bold py-2 px-2 rounded">
          Button
        </button>
        <button class="bg-main hover:bg-main-dark text-white font-bold py-2 px-2 rounded">
          Button
        </button>
      </div>
    </div>
  );
};

export default Price;
