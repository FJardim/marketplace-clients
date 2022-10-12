import React from "react";
import { BsEye, BsHeart } from "react-icons/bs";

const ProductDescription = ({
  imagen,
  titulo,
  parrafo,
  price,
  Descripcion1,
  Descripcion2,
  Descripcion3,
  Descripcion4,
}) => {
  return (
    <div className="w-full h-full rounded-sm p-4">
      <div className="lg:ml-6 bg-white lg:w-full w-56 m-auto md:w-40 rounded-lg shadow p-4 flex">
        <div className="w-56">
          <img src={imagen} alt="" />
        </div>
        <div className="w-96 m-auto text-center">
          <h4 className="text-lg font-bold">{titulo}</h4>
          <div>
            <p className="text-base font-bold">{parrafo}</p>
            <p>{Descripcion1}</p>
            <p>{Descripcion2}</p>
            <p>{Descripcion3}</p>
            <p>{Descripcion4}</p>
          </div>
        </div>
        <div className="w-56 mt-4">
          <p className="text-lg font-bold  mb-2">{price}</p>
          <div>
            <button className="bg-main hover:bg-main-dark text-black font-bold py-2 md:px-10 px-2 rounded-lg">
              Add to Cart
            </button>
            <div className="md:flex mt-3 space-x-3">
              <BsEye />
              <p>Ver</p>
              <BsHeart />
              <p>WhishList</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
