import CajaProduct from "./CajaProduct";
import Menucategories from "./MenuCategories";
import SliderImag from "./SliderImag";
import imagen1 from "../../assets/bomba.jpg";
import imagen2 from "../../assets/candado.png";
import imagen3 from "../../assets/carr.png";

const PubliCategories = () => {
    return (
        <div className="flex bg-white">
            <Menucategories nombCategories={"Computer & Techologies"} />
            <div className="bg-red-400 lg:w-3/12 sm:hidder">
                <SliderImag />
            </div>
            <div className="grid grid-cols-3 gap-[1px] bg-gray-200 p-[1px] lg:w-8/12 ">
                <CajaProduct title={"Bomba xxxxxxxxx xxxxxx"} imagen={imagen1} precio={"$12.6"} oferta={"Out Of Stock"} />
                <CajaProduct title={"Acero"} imagen={imagen2} precio={"$5"} oferta={"-15$"} />
                <CajaProduct title={"Electricidad"} imagen={imagen3} precio={"$20"} oferta={"-10%"} />

                <CajaProduct title={"Bomba xxxxxxxxx xxxxxx"} imagen={imagen2} precio={"$12.6"} oferta={"-25%"} />
                <CajaProduct title={"Pintura"} imagen={imagen1} precio={"$25"} oferta={"-12%"} />
                <CajaProduct title={"Bomba xxxxxxxxx xxxxxx"} imagen={imagen3} precio={"$12.6"} oferta={"Out Of Stock"} />


            </div>
        </div>
    );
}

export default PubliCategories;