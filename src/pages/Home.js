import TopCategories from "../components/Generico/TopCategories";
import cerrajeria from "../assets/categories/cerrajeria.jpg";
import Plomeria from "../assets/categories/plomeria.png";
import Construccion from "../assets/categories/Construccion.jpg";
import electricidad from "../assets/categories/electricidad.png";
import herramienta from "../assets/categories/herramienta.jpg";
import perneria from "../assets/categories/perneria.jpg";
import pintura from "../assets/categories/pintura.png";
import acero from "../assets/categories/acero.jpg";
import CardImage from "../components/BarNavegation/CardImage";
import FondoBlanco from "../assets/FondoBlanco.jpg"
import InforHome from "../components/Generico/InforHome";
import { TbTruckDelivery, TbArrowsJoin2, TbBrowser, TbMessages } from "react-icons/tb";

const Home = () => {
    return (
        <div className="container ">
            {/* //----felicia */}
            <div className="flex space-x-6 p-12 ">
                <InforHome icono={<TbTruckDelivery className="p-6 h-32 w-full text-main" />} title={"Free Delivery"} texto={"For all oders over $99"} />
                <InforHome icono={<TbArrowsJoin2 className="p-6 h-32 w-full text-main" />} title={"90 Days Return"} texto={"If goods have problems"} />
                <InforHome icono={<TbBrowser className="p-6 h-32 w-full text-main" />} title={"Secure Payment"} texto={"100% secure payment"} />
                <InforHome icono={<TbMessages className="p-6 h-32 w-full text-main" />} title={"24/7 Support"} texto={"Dedicated support"} />
            </div>
            {/* < //--------- */}
            <div className="flex p-8 ml-2 ">
                <div className="flex">
                    <CardImage imagen={FondoBlanco} titulo={"Candado Total"} description={"Just $159.59"} text={"Shop Now"} logo={cerrajeria} />
                    <CardImage imagen={FondoBlanco} titulo={"Candado Total"} description={"Just $159.59"} text={"Comprar"} logo={cerrajeria} />
                </div>
            </div>
            <div className="flex space-x-2 p-8 ml-2">
                <TopCategories imgCat={cerrajeria} title={"Cerrajería"} />
                <TopCategories imgCat={Plomeria} title={"Plomeria"} />
                <TopCategories imgCat={Construccion} title={"Construcción"} />
                <TopCategories imgCat={electricidad} title={"Electricidad"} />
                <TopCategories imgCat={herramienta} title={"Herramientas"} />
                <TopCategories imgCat={perneria} title={"Perneria"} />
                <TopCategories imgCat={pintura} title={"Pintura"} />
                <TopCategories imgCat={acero} title={"Acero"} />
            </div>
        </div>
    );
}

export default Home;