import ProductHomeInfo from "../components/Product/ProductHomeInfo";
import SliderCajaProduct from "../components/Product/SliderCajaProduct";
import CuadroPago from "../components/Generico/CuadroPago";

const ProductDescrip = () => {
    return (
        <div>
            <div className="md:flex w-full h-full sm:p-11 p-4 bg-white">
                <div className="lg:w-4/12">
                    <SliderCajaProduct />
                </div>
                <div className="lg:w-5/12 bg-white">
                    <ProductHomeInfo />
                </div>
                <div className="lg:w-3/12 p-4">
                    <CuadroPago />
                </div>
            </div>
            <div className="p-2">
                <p>joas</p>
            </div>
        </div>

    );
}

export default ProductDescrip;