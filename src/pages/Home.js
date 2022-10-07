
import Sliderbarproducts from "../components/BarNavegation/Sliderbarproducts";
import InforHome from "../components/Generico/InforHome";
import { TbTruckDelivery, TbArrowsJoin2, TbBrowser, TbMessages } from "react-icons/tb";
import SliderCategories from "../components/Generico/SliderCategories";
import PubliCategories from "../components/HomeCategories/PubliCategories";
import SliderProductHome from "../components/Product/SliderProductoHome";
import TopSeller from "../components/Generico/TopSeller";

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
                <SliderCategories />
            </div>
            <div className="flex container px-8 py-8 bg-white">
                <SliderProductHome className="w-8/12" />
                <TopSeller className="ml-4 min-w-0" />
            </div>

            <div className="py-12 px-4">
                <PubliCategories />
            </div>

        </div>
    );
}

export default Home;