import React from "react";
import { Link } from "react-router-dom";
import { BiCube, BiStoreAlt, BiShoppingBag, BiMoney } from "react-icons/bi";
import NumbersStore from "../components/Generico/NumbersStore";
import ProfileLider from "../components/Generico/ProfileLider";
import TiendaInfo from "../components/Generico/TiendaInfo";
import lideres from "../assets/lideres.jpg";
import BannerNosotros from "../components/Generico/BannerNosotros";
import nosotros from "../assets/nosotros.jpg";
const Nosotros = () => {
  return (
    <div className="bg-white">
      <div className="flex p-6">
        <Link to={"/"} className="text-blue-600 cursor-pointer">
          Home/
        </Link>
        <p>Nosotros</p>
      </div>
      <BannerNosotros image={nosotros} title=" Sobre Nosotros" />
      <div>
        <TiendaInfo
          titulo="Bienvenidos a Sinoxsa"
          parrafo="Conectamos a millones de compradores y vendedores en todo el mundo, empoderando a las personas y creando oportunidades económicas para todos."
          texto="Dentro de nuestros mercados, millones de personas en todo el mundo se conectan, tanto en línea como fuera de línea, para fabricar, vender y comprar productos únicos. También ofrecemos una amplia gama de Servicios y herramientas para vendedores que ayudan a los emprendedores creativos a iniciar, administrar y escalar sus negocios. Nuestra misión es reinventar el comercio de manera que construya un mundo más satisfactorio y duradero, y estamos comprometidos a utilizar el poder de los negocios para fortalecer las comunidades y empoderar a las personas."
        />
      </div>
      <div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          <NumbersStore
            icono={<BiCube className="p-6 h-32 w-full text-main" />}
            title="45"
            parrafo="Producto en venta"
          />
          <NumbersStore
            icono={<BiStoreAlt className="p-6 h-32 w-full text-main" />}
            title="200"
            parrafo="Vendedores Activos en Sinoxsa"
          />
          <NumbersStore
            icono={<BiShoppingBag className="p-6 h-32 w-full text-main" />}
            title="3000"
            parrafo="Comprador activo en Sinoxsa"
          />
          <NumbersStore
            icono={<BiMoney className="p-6 h-32 w-full text-main" />}
            title="$2.46M"
            parrafo="Ventas brutas anuales de mercancías"
          />
        </div>
        <h4 className=" text-center mt-8 font-bold text-4xl">
          Conozca a nuestros líderes
        </h4>
        <div className="grid grid-cols-4">
          <ProfileLider title="Conozca a nuestros líderes" image={lideres} />
          <ProfileLider title="Conozca a nuestros líderes" image={lideres} />
          <ProfileLider title="Conozca a nuestros líderes" image={lideres} />
          <ProfileLider title="Conozca a nuestros líderes" image={lideres} />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
