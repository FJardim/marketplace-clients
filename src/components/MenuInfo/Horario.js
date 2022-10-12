import React from "react";
import { BsClock } from "react-icons/bs";
const Horario = ({ title, dia, hora }) => {
  return (
    <div className="lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow p-4 mt-4">
      <div className="flex">
        <BsClock />
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
      <div>
        <div>
          <p>{dia}</p>
          <p>{hora}</p>
        </div>
      </div>
    </div>
  );
};

export default Horario;
