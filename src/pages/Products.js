import React from "react";
import BannerTop from "../components/Generico/BannerTop";
import MenuLeft from "../components/MenuLeft/MenuLeft";
import CajaProduct from "../components/HomeCategories/CajaProduct";
const Products = () => {
  return (
    <div>
      <BannerTop title="Products" button="Ultimas Entradas" comment="Vista" />
      <div className="container flex bg-white">
        <div>
          <MenuLeft />
        </div>
        <div className="grid grid-cols-4 gap-5">
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
          <CajaProduct />
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
