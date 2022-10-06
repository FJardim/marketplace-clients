import ProductHomeInfo from "./ProductHomeInfo";
import SliderCajaProduct from "./SliderCajaProduct";

const ContenidoProduct = () => {
    return (
        <div className="flex p-4 ">
            <div className=" w-6/12">
                <SliderCajaProduct />
            </div>
            <ProductHomeInfo />
        </div>
    );
}

export default ContenidoProduct;