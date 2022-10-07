import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import cerrajeria from "../../assets/categories/cerrajeria.jpg";
import TopSellerProduct from "./TopSellerProduct";

const images = [
    {
        id: 1, path: cerrajeria
    },
    {
        id: 2, path: cerrajeria
    },
    {
        id: 3, path: cerrajeria
    },
    {
        id: 4, path: cerrajeria
    },
    {
        id: 5, path: cerrajeria
    },
    {
        id: 6, path: cerrajeria
    },
    {
        id: 7, path: cerrajeria
    },
    {
        id: 8, path: cerrajeria
    },
    {
        id: 9, path: cerrajeria
    },
]

const SliderTopSellerProduc = ({ className, itemsPerSlide = 4 }) => {

    const numberOfSlides = Math.floor(images.length / itemsPerSlide);

    const slidesIterator = [...Array(numberOfSlides).keys()];

    return (
        <div className={className}>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                className="mySwiper h-full"
            >
                <div className="h-full border-2 border-gray-200">
                    <p className="text-xl font-semibold p-3 border-gray-400">Top 20 Best Seller</p>
                    <div className="border-t-2 border-gray-200 p-2 mx-4"></div>
                    {slidesIterator.map(n => <SwiperSlide key={n}>
                        <div className="grid grid-rows-4">
                            {images.slice(n * itemsPerSlide, n * itemsPerSlide + itemsPerSlide).map(image => <TopSellerProduct
                                key={image.id}
                                imagen={image.path}
                                title="Cerradura Flip plata con llave ajustable"
                                precio="$40"
                            />)}
                        </div>
                    </SwiperSlide>)}
                </div >
            </Swiper>
        </div>
    );
};

export default SliderTopSellerProduc;
