import React from "react";
import { FiBook } from "react-icons/fi";
const Description = ({ title, parrafo }) => {
  return (
    <div className="lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow p-4 mt-4 mb-4">
      <div className="flex">
        <FiBook />
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
      <div>
        <p>{parrafo}</p>
      </div>
    </div>
  );
};

export default Description;
