import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavegationPrincipal from "../BarNavegation/Navegationprincipal";
import NavegationSecundaria from "../BarNavegation/NavegationSecundaria";
import Sliderbar from "../BarNavegation/Sliderbar";
import Footer from "../Footer/footer";
import Newletter from "../Footer/Newletter";

const AppLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <div className="bg-gray-100">
      <NavegationSecundaria />
      <NavegationPrincipal />
      <Sliderbar />
      {children}
      <Newletter />
      <div className="p-0.5 "></div>
      <Footer />
    </div>
  );
};

export default AppLayout;
