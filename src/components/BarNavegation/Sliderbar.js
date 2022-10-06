import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Imagen0 from "../../assets/Imagen0.png";
import Imagen1 from "../../assets/Imagen1.jpg";
import Imagen3 from "../../assets/Imagen3.jpg";
import Imagen4 from "../../assets/Imagen4.png";
import { EffectFade, Navigation, Pagination } from "swiper";

const Sliderbar = () => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full h-72" src={Imagen0} alt="Imagen0" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-72" src={Imagen1} alt="Imagen1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-72" src={Imagen3} alt="Imagen3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-72" src={Imagen4} alt="Imagen4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliderbar;
