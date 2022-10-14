import React from "react";

const QuenstionFrecuent = ({ titulo, texto, parrafo }) => {
  return (
    <div className="m-auto text-center bg-white mb-20">
      <div>
        <p className="text-2xl font-bold">{titulo}</p>
        <p className="text-gray-400">{texto}</p>
        <p className="text-gray-400">{parrafo}</p>
      </div>
    </div>
  );
};

export default QuenstionFrecuent;
