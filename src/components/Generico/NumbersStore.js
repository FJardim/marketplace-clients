import React from "react";

const NumbersStore = ({ icono, title, parrafo }) => {
  return (
    <div className="m-auto">
      <div className="w-full">{icono}</div>
      <p className=" text-4xl font-bold text-center">{title}</p>
      <p className="text-gray-400">{parrafo}</p>
    </div>
  );
};

export default NumbersStore;
