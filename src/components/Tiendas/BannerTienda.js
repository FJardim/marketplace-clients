import React from "react";

const BannerTienda = ({ portada, imagen }) => {
  return (
    <div className="relative w-full shadow">
      <img
        className="absolute h-full w-full border-b border-green-500"
        src={portada}
        alt=""
      />
      <div className="relative flex items-center justify-between pt-[120px] px-4">
        <img className="w-40 h-40 rounded-full shadow" src={imagen} alt="" />
      </div>
    </div>
  );
};

export default BannerTienda;
