import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import candado from "../../assets/candado.png"
import cerradura from "../../assets/cerradura.png"
import bomba from "../../assets/bomba.jpg"
import tomacorriente from "../../assets/tomacorriente.png"
import { Navigation } from "swiper";
import CardImage from "./CardImage";
import { useState, useEffect } from "react";

const Sliderbarproducts = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resizeHandler = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []); return (

    <div className="container px-14">
      <Swiper
        slidesPerView={innerWidth > 768 ? 2 : 1}
        spaceBetween={20}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        style={{ padding: innerWidth > 768 ? '0' : 10 }}
        className="mySwiper "
      >
        <SwiperSlide>
          <CardImage img={candado} title={"Candado Viro"} price={"Just $159.59"} categories={"Cerrajeria"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardImage img={cerradura} title={"Cerradura"} price={"Just $200.59"} categories={"Cerrajeria"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardImage img={tomacorriente} title={"Tomacorriente"} price={"Just $15.59"} categories={"Electricidad"} />
        </SwiperSlide>
        <SwiperSlide>
          <CardImage img={bomba} title={"Boma de Agua"} price={"Just $450.59"} categories={"Plomeria"} />
        </SwiperSlide>
      </Swiper>
    </div>

  );
};

export default Sliderbarproducts;
