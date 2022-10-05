import TopCategories from "../components/Generico/TopCategories";
import cerrajeria from "../assets/categories/cerrajeria.jpg";
import Plomeria from "../assets/categories/plomeria.png";
import Sliderbarproducts from "../components/BarNavegation/Sliderbarproducts";
import Construccion from "../assets/categories/Construccion.jpg";
import electricidad from "../assets/categories/electricidad.png";
import herramienta from "../assets/categories/herramienta.jpg";
import perneria from "../assets/categories/perneria.jpg";
import pintura from "../assets/categories/pintura.png";
import acero from "../assets/categories/acero.jpg";
import InforHome from "../components/Generico/InforHome";
import { TbTruckDelivery, TbArrowsJoin2, TbBrowser, TbMessages } from "react-icons/tb";

const Home = () => {
    return (

        <div className="container ">
            <div className="flex space-x-6 p-12 ">
                <InforHome icono={<TbTruckDelivery className="p-6 h-32 w-full text-main" />} title={"Free Delivery"} texto={"For all oders over $99"} />
                <InforHome icono={<TbArrowsJoin2 className="p-6 h-32 w-full text-main" />} title={"90 Days Return"} texto={"If goods have problems"} />
                <InforHome icono={<TbBrowser className="p-6 h-32 w-full text-main" />} title={"Secure Payment"} texto={"100% secure payment"} />
                <InforHome icono={<TbMessages className="p-6 h-32 w-full text-main" />} title={"24/7 Support"} texto={"Dedicated support"} />
            </div>
            <div>
                <div className="flex mt-4">
                    <Sliderbarproducts />
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