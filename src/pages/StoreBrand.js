import React from "react";
import BannerTop from "../components/Generico/BannerTop";
import CajaProduct from "../components/HomeCategories/CajaProduct";
import MenuInfo from "../components/MenuInfo/MenuInfo";
import pintura from "../assets/pintura.jpg";
const StoreBrand = () => {
  return (
    <div>
      <BannerTop title="Products" button="Ultimas Entradas" comment="Vista" />
      <div className="md:flex">
        <div>
          <MenuInfo />
        </div>
        <div className="grid md:grid-cols-4 lg: grid-cols-1 gap-5 p-4">
          <CajaProduct
            oferta="24.36"
            title="Pintura"
            imagen={pintura}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Pintura"
            imagen={pintura}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Pintura"
            imagen={pintura}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Pintura"
            imagen={pintura}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Pintura"
            imagen={pintura}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Pintura"
            imagen={pintura}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Pintura"
            imagen={pintura}
            precio="$48.36"
          />
          <CajaProduct
            oferta="24.36"
            title="Pintura"
            imagen={pintura}
            precio="$48.36"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreBrand;
