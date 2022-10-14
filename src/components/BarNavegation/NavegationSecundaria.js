import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
// import PedidosRealizados from "../Pedidos/PedidosRealizados";

const NavegationSecundaria = () => {
    return (
        <div className=" bg-main-dark text-black h-14 px-8">
            <div className="container flex justify-around ">
                <div className="flex items-center space-x-1">
                    <FaFacebook className="hover:text-white cursor-pointer" />
                    <FaInstagram className="hover:text-white cursor-pointer" />
                    <FaLinkedinIn className="hover:text-white cursor-pointer" />
                    <FaTwitter className="hover:text-white cursor-pointer" />
                    <FaYoutube className="hover:text-white cursor-pointer" />
                </div>
                <div className="p-4 px-full items-center hidden lg:block">
                    <Link to={"/ayudas"} className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Ayudas</Link>
                    <Link to={"/nosotros"} className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Sobre Nosotros</Link>
                    <Link className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Contacto</Link>
                    <Link to={"/listadetiendas"} className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Tiendas</Link>
                    <Link className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Hotline: <b>1-800-234-5678</b></Link>
                </div>
                <div className="lg:hidden block ml-auto justify-end items-center">
                    <AiOutlineBars className="h-8 w-8 m-2.5" />
                </div>
                <div className="flex items-center ">
                    <select className=" bg-main-dark border-main-dark text-slate-600 outline-0" id="">
                        <option>English</option>
                        <option>Spanish</option>
                    </select>
                </div>

            </div>

            {/* <PedidosRealizados show={false} /> */}
        </div>
    );
}

export default NavegationSecundaria;