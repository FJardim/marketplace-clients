import React from "react";
import Categories from "./Categories";
import Marcas from "./Marcas";
import Price from "./Price";
import Rating from "./Rating";
const MenuLeft = () => {
  return (
    <div className="bg-white container w-full h-full rounded-sm p-4">
      <div className="grid grid-rows-4"></div>
      <Categories />
      <Marcas />
      <Rating />
      <Price />
    </div>
  );
};

export default MenuLeft;
