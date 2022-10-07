import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import cerrajeria from "../../assets/categories/cerrajeria.jpg";
import Plomeria from "../../assets/categories/plomeria.png";
import Construccion from "../../assets/categories/Construccion.jpg";
import electricidad from "../../assets/categories/electricidad.png";
import herramienta from "../../assets/categories/herramienta.jpg";
import perneria from "../../assets/categories/perneria.jpg";
import pintura from "../../assets/categories/pintura.png";
import acero from "../../assets/categories/acero.jpg";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopCategories from "./TopCategories";

const SliderCategories = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    return (

        <div className="container">
            <div className="bg-white">
                <p className="text-xl font-semibold p-2 lg:ml-4 sm:text-center lg:text-justify">Top categories of the month</p>
            </div>
            <Swiper
                slidesPerView={innerWidth > 768 ? 6 : 1}
                spaceBetween={20}
                navigation={true}
                loop={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 3000 }}
                style={{ padding: innerWidth > 768 ? '0' : 10 }}
                className="mySwiper "
            >

                <SwiperSlide>
                    <TopCategories imgCat={cerrajeria} title={"Cerrajería"} />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCategories imgCat={Plomeria} title={"Plomeria"} />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCategories imgCat={Construccion} title={"Construcción"} />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCategories imgCat={electricidad} title={"Electricidad"} />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCategories imgCat={herramienta} title={"Herramientas"} />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCategories imgCat={perneria} title={"Perneria"} />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCategories imgCat={pintura} title={"Pintura"} />
                </SwiperSlide>
                <SwiperSlide>
                    <TopCategories imgCat={acero} title={"Acero"} />
                </SwiperSlide>
            </Swiper>
            <div className="bg-white lg:p-4 ">
            </div>
        </div>
    );
}
export default SliderCategories; 