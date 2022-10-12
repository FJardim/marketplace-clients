import React from "react";
import Description from "./Description";
import Horario from "./Horario";
import Information from "./Information";
import Categories from "../MenuLeft/Categories";
const MenuInfo = () => {
  return (
    <div className="container w-full h-full rounded-sm p-4">
      <Information
        title="Information"
        phone="Telefono:+34-2588-84"
        whatsapp="Whatsapp:+58-658-5955"
        instagram="Instagram: @InyeccionF"
        facebook="Faceboook: InyeccionF"
        web="Sitio Web: www.inyeccionF.com"
      />
      <Horario
        title="Horario"
        dia="De Lunes a Viernes"
        hora="8:00 Hrs a 17:00 Hrs"
      />
      <Description
        title="Descripcion"
        parrafo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <Categories />
    </div>
  );
};

export default MenuInfo;
