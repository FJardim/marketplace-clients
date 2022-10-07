import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import categories1 from "../../assets/BannerCategories/technology-1.jpg";
import categories2 from "../../assets/BannerCategories/technology-2.jpg";
import categories3 from "../../assets/BannerCategories/technology-3.jpg";

const SliderImag = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    return (
        <div className="container h-full">
            <Swiper
                slidesPerView={innerWidth > 768 ? 1 : 1}
                navigation={true}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 6000 }}
                pagination={{
                    clickable: true,
                }}
                style={{ padding: innerWidth > 768 ? '0' : 10 }}
                className="mySwiper h-full"
            >

                <SwiperSlide className="h-full">
                    <img src={categories1} alt="" className="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="h-full">
                    <img src={categories2} alt="" className="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="h-full">
                    <img src={categories3} alt="" className="w-full h-full" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
}
export default SliderImag; 