import React from "react";
import BannerTop from "../components/Generico/BannerTop";
import ProductDescription from "../components/Generico/ProductDescription";
import MenuLeft from "../components/MenuLeft/MenuLeft";
import candado from "../assets/candado.png";
import cerradura from "../assets/cerradura.png";

const CartDetallesProducts = () => {
  return (
    <div>
      <BannerTop title="Products" button="Ultimas Entradas" comment="Vista" />
      <div className="flex">
        <div>
          <MenuLeft />
        </div>
        <div className="grid grid-rows-4">
          <ProductDescription
            imagen={candado}
            parrafo="Vendido por Cinoferca"
            titulo="Candado Cisa"
            price="$48.88"
          />
          <ProductDescription
            imagen={cerradura}
            parrafo="Vendido por Cinoferca"
            titulo="Cerradura"
            price="$56.88"
          />
          <ProductDescription
            imagen={candado}
            parrafo="Vendido por Cinoferca"
            titulo="Candado Cisa"
            price="$48.88"
          />
          <ProductDescription
            imagen={cerradura}
            parrafo="Vendido por Cinoferca"
            titulo="Candado Cisa"
            price="$56.88"
          />
        </div>
      </div>
    </div>
  );
};

export default CartDetallesProducts;
