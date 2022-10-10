import React from "react";
import BannerTop from "../components/Generico/BannerTop";
import MenuLeft from "../components/MenuLeft/MenuLeft";
import CajaProduct from "../components/HomeCategories/CajaProduct";
import bomba from "../assets/bomba.jpg";
const Products = () => {
  return (
    <div>
      <BannerTop title="Products" button="Ultimas Entradas" comment="Vista" />
      <div className="flex">
        <div>
          <MenuLeft />
        </div>
        <div className="grid grid-cols-4 gap-5 p-4">
          <CajaProduct
            oferta="24.36"
            title="Candado"
            imagen={bomba}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Candado"
            imagen={bomba}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Candado"
            imagen={bomba}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Candado"
            imagen={bomba}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Candado"
            imagen={bomba}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Candado"
            imagen={bomba}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Candado"
            imagen={bomba}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Candado"
            imagen={bomba}
            precio="$48.36"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
