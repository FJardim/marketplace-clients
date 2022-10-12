import React from "react";
import { FaStoreAlt } from "react-icons/fa";
const Information = ({ title, phone, whatsapp, instagram, facebook, web }) => {
  return (
    <div className="lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow p-4">
      <div className="flex">
        <FaStoreAlt />
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
      <div>
        <p>{phone}</p>
        <p>{whatsapp}</p>
        <p>{instagram}</p>
        <p>{facebook}</p>
        <p>{web}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Information;
