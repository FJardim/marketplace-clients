import React from "react";
import Categories from "./Categories";
import Price from "./Price";
import Rating from "./Rating";
const MenuLeft = () => {
  return (
    <div className="w-full h-full rounded-sm p-4">
      <Categories />
      <Rating />
      <Price />
    </div>
  );
};

export default MenuLeft;
