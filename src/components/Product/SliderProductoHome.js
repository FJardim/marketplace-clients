import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import ContenidoProduct from "../Product/ContenidoProduct";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import clsx from "clsx";
import { Autoplay } from "swiper";

const SliderProductHome = ({ className }) => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [swiper, setSwiper] = useState(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <div className={clsx("bg-white border-2 border-main-dark", className)}>
            <div className="flex p-2 border-b-2 border-gray-200 lg:mx-4">
                <p className="text-xl font-semibold p-2 sm:text-center lg:text-justify">Deal hot today</p>
                <div className="ml-auto p-2">
                    <button id="mas" className="rounded-full p-1 border-2 text-gray-400" onClick={() => swiper.slideTo(activeSlideIndex + 1)}><BiChevronLeft /></button>
                    <button id="menos" className="ml-3 p-1 rounded-full border-2 text-gray-400" onClick={() => swiper.slideTo(activeSlideIndex - 1)}><BiChevronRight /></button>
                </div>
            </div>
            <Swiper
                onSwiper={setSwiper}
                onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
                slidesPerView={innerWidth > 768 ? 1 : 1}
                spaceBetween={40}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                style={{ padding: innerWidth > 768 ? '0' : 10 }}
                className="mySwiper "
            >
                <SwiperSlide>
                    <ContenidoProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <ContenidoProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <ContenidoProduct />
                </SwiperSlide>

            </Swiper>

        </div>
    );
}

export default SliderProductHome;