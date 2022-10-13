import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import sampeImage from "../../assets/bomba.jpg";

const images = [
    {
        id: 1, path: sampeImage
    },
    {
        id: 2, path: sampeImage
    },
    {
        id: 3, path: sampeImage
    },
]

const SliderCajaProduct = () => {
    const [swiper, setSwiper] = useState(null);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return <div className="hidden lg:flex">
        <div className="px-2 shrink-0 space-y-4">
            {images?.length > 0 &&
                images?.map((image, i) => <img
                    key={image.id}
                    src={image.path}
                    alt=""
                    className={`h-20 w-20 border border-gray-100 rounded shadow hover:shadow-md cursor-pointer ${activeSlideIndex === i && 'ring-2 ring-red-300 ring-opacity-75'}`}
                    onClick={() => swiper.slideTo(i)}
                />)}
        </div>
        <div className="relative w-full min-w-0">
            <Swiper
                onSwiper={setSwiper}
                onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
                autoHeight={true}
            >
                {
                    images?.length > 0 && images?.map(image => <SwiperSlide key={image.id} zoom={{ maxRatio: 2 }}>
                        <div className="swiper-zoom-container">
                            <img
                                src={image.path}
                                alt="NombreProducto"
                                className="rounded-xl w-full h-96"
                            />
                        </div>
                    </SwiperSlide>)}
            </Swiper>
        </div>
    </div>;
}

export default SliderCajaProduct;