import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CajaProduct from "../HomeCategories/CajaProduct";
import imagen1 from "../../assets/bomba.jpg";
import imagen2 from "../../assets/candado.png";
import imagen3 from "../../assets/carr.png";

const SliderMarcaSimilar = () => {
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
                <p className="text-xl font-semibold p-2 lg:ml-4 sm:text-center lg:text-justify">Marca Similar</p>
            </div>
            <Swiper
                slidesPerView={innerWidth > 768 ? 5 : 1}
                spaceBetween={6}
                navigation={true}
                loop={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 3000 }}
                style={{ padding: innerWidth > 768 ? '0' : 10 }}
                className="mySwiper "
            >

                <SwiperSlide>
                    <CajaProduct title={"Bomba xxxxxxxxx xxxxxx"} imagen={imagen1} precio={"$12.6"} oferta={"Out Of Stock"} />
                </SwiperSlide>
                <SwiperSlide>
                    <CajaProduct title={"Acero"} imagen={imagen2} precio={"$5"} oferta={"-15$"} />
                </SwiperSlide>
                <SwiperSlide>
                    <CajaProduct title={"Electricidad"} imagen={imagen3} precio={"$20"} oferta={"-10%"} />
                </SwiperSlide>
                <SwiperSlide>
                    <CajaProduct title={"Bomba xxxxxxxxx xxxxxx"} imagen={imagen1} precio={"$12.6"} oferta={"Out Of Stock"} />
                </SwiperSlide>
                <SwiperSlide>
                    <CajaProduct title={"Acero"} imagen={imagen2} precio={"$5"} oferta={"-15$"} />
                </SwiperSlide>
                <SwiperSlide>
                    <CajaProduct title={"Electricidad"} imagen={imagen3} precio={"$20"} oferta={"-10%"} />
                </SwiperSlide>

            </Swiper>
            <div className="bg-white lg:p-6 ">
            </div>
        </div>
    );
}
export default SliderMarcaSimilar; 
