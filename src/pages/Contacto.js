import React from "react";
import { Link } from "react-router-dom";
import FormContact from "../components/Generico/FormContact";
import QuenstionFrecuent from "../components/Generico/QuenstionFrecuent";
import MapContainer from "../components/Generico/MapContainer";

const Contacto = () => {
  return (
    <div className="bg-white">
      <div className="flex p-6">
        <Link to={"/"} className="text-blue-600 cursor-pointer">
          Home/
        </Link>
        <p>Contacto</p>
      </div>
      <MapContainer
        stores={[]}
        onMarkerClicked={(store) => console.log(store)}
      />
      <p className=" text-4xl font-bold text-center mt-10 mb-20">
        Contacto y Preguntas Frecuentes
      </p>
      <div className="grid grid-cols-3 gap-10">
        <QuenstionFrecuent
          titulo="Contacto Directo"
          texto="Sinoxsa@gmail.com"
          parrafo="(+004) 912-3548-07"
        />
        <QuenstionFrecuent
          titulo="Dirección"
          texto="Primera entrada de Paraparal"
          parrafo="(+004) 912-3548-07"
        />
        <QuenstionFrecuent
          titulo="Trabaja con Nosotros"
          texto="Envia tu Curriculum al siguiente mail:"
          parrafo="Sinoxsa@gmail.com"
        />
        <QuenstionFrecuent
          titulo="Servicio Personalizado"
          texto="Sinoxsa@gmail.com"
          parrafo="(+004) 912-3548-07"
        />
        <QuenstionFrecuent
          titulo="Social Media"
          texto="Instagram: @Sinoxsa "
          parrafo="Twitter: @Sinoxsave"
        />
        <QuenstionFrecuent
          titulo="Soporte al Cliente"
          texto="Atencion@sinoxsa.com"
          parrafo="(+004) 912-3548-07"
        />
      </div>
      <FormContact titulo="Contactanos" parrafo="Enviar Mensaje" />
    </div>
  );
};

export default Contacto;
