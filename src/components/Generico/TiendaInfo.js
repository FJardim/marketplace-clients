import React from "react";

const TiendaInfo = ({ titulo, parrafo, texto }) => {
  return (
    <div className="container w-full">
      <div className="grid grid-rows-3 grid-flow-col mx-36 mt-10 mb">
        <h4 className="text-lg font-bold">{titulo}</h4>
        <p className=" text-4xl">{parrafo}</p>
        <p className="text-base text-gray-400">{texto}</p>
      </div>
    </div>
  );
};

export default TiendaInfo;
