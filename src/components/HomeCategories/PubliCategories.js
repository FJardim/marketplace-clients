import CajaProduct from "./CajaProduct";
import Menucategories from "./MenuCategories";
import SliderImag from "./SliderImag";

const PubliCategories = ({ imgCat }) => {
    return (
        <div className="flex bg-white">
            <Menucategories nombCategories={"Computer & Techologies"} />
            <div className="bg-red-400 lg:w-3/12 sm:hidder">
                <SliderImag />
            </div>
            <div className="grid grid-cols-3 gap-[1px] bg-gray-200 p-[1px] lg:w-8/12 ">
                <CajaProduct />
                <CajaProduct />
                <CajaProduct />

                <CajaProduct />
                <CajaProduct />
                <CajaProduct />


            </div>
        </div>
    );
}

export default PubliCategories;