import React {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import candado from "../../assets/candado.png"
import cerradura from "../../assets/cerradura.png"
import {Navigation} from "swiper";
import CardImage from "./CardImage";
import { useEffect, useState } from "react";

const Sliderbarproducts = () => {
    const [innerWidth, setinnerWidth] = useState(window.innerWidth)
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
        <CardImage img={candado} title={"Candado Viro"} price={"Just $159.59"} categories={"Tools"} />
        </SwiperSlide>
        <SwiperSlide>
        <CardImage img={cerradura} title={"Cerradura"} price={"Just $200.59"} categories={"Tools"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliderbarproducts;
