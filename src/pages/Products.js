import React from "react";
import BannerTop from "../components/Generico/BannerTop";
import MenuLeft from "../components/MenuLeft/MenuLeft";
import CajaProduct from "../components/HomeCategories/CajaProduct";
const Products = () => {
  return (
    <div>
      <BannerTop title="Products" button="Ultimas Entradas" comment="Vista" />
      <div className="flex">
        <div>
          <MenuLeft />
        </div>
        <div className="grid grid-cols-4 gap-5 p-4">
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
        </div>
      </div>
    </div>
  );
};

export default Products;
