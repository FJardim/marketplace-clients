import cerrajeria from "../../assets/categories/cerrajeria.jpg";
import Construccion from "../../assets/categories/Construccion.jpg";
import electricidad from "../../assets/categories/electricidad.png";
import pintura from "../../assets/categories/pintura.png";
import TopSellerProduct from "./TopSellerProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import clsx from "clsx";

const images = [
    {
        id: 1, path: cerrajeria, title: "Cerradura Flip plata con llave ajustable", precio: "$40"
    },
    {
        id: 2, path: Construccion, title: "Bloques de cosntrucción", precio: "$2"
    },
    {
        id: 3, path: electricidad, title: "Combos de Materiales electricos", precio: "$50"
    },
    {
        id: 4, path: pintura, title: "Pintura clases A", precio: "$25"
    },
    {
        id: 5, path: Construccion, title: "Bloques de cosntrucción", precio: "$2"
    },
    {
        id: 6, path: cerrajeria, title: "Cerradura Flip plata con llave ajustable", precio: "$40"
    },
    {
        id: 7, path: electricidad, title: "Combos de Materiales electricos", precio: "$50"
    },
    {
        id: 8, path: pintura, title: "Pintura clases A", precio: "$25"
    },
    {
        id: 9, path: Construccion, title: "Bloques de cosntrucción", precio: "$2"
    },
]

const TopSeller = ({ className, itemsPerSlide = 4 }) => {

    const numberOfSlides = Math.floor(images.length / itemsPerSlide);

    const slidesIterator = [...Array(numberOfSlides).keys()];

    return (
        <div className={clsx("flex flex-col w-full border-2 border-gray-200", className)}>
            <p className="text-xl font-semibold p-3 border-gray-400">Top 20 Best Seller</p>
            <div className="h-full border-t-2 border-gray-200 p-2 mx-4">
                <Swiper
                    spaceBetween={30}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    className="mySwiper h-full"
                >
                    {slidesIterator.map(n => <SwiperSlide key={n}>
                        <div className="grid grid-rows-4">
                            {images.slice(n * itemsPerSlide, n * itemsPerSlide + itemsPerSlide).map(image => <TopSellerProduct
                                key={image.id}
                                imagen={image.path}
                                title={image.title}
                                precio={image.precio}
                            />)}
                        </div>
                    </SwiperSlide>)}

                </Swiper>
            </div>

        </div>

    );
}

export default TopSeller;