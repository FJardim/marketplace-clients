import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";

const NavegationSecundaria = () => {
    return (
        <div className=" bg-main-dark text-black h-14 px-8">
            <div className="container flex lg:justify-around h-full">
                <div className="flex items-center p-2 space-x-1">
                    <FaFacebook className="hover:text-white cursor-pointer sm:h-8 sm:w-8 lg:h-4 lg:w-4" />
                    <FaInstagram className="hover:text-white cursor-pointer" />
                    <FaLinkedinIn className="hover:text-white cursor-pointer" />
                    <FaTwitter className="hover:text-white cursor-pointer" />
                    <FaYoutube className="hover:text-white cursor-pointer" />
                </div>
                <div className="p-4 px-full items-center hidden md:block">
                    <span className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Ayudas</span>
                    <span className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Sobre Nosotros</span>
                    <span className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Contacto</span>
                    <span className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Vender en Sínoxsa</span>
                    <span className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Tiendas</span>
                    <span className="px-6 border-r-2 border-slate-400 cursor-pointer hover:text-white">Hotline: <b>1-800-234-5678</b></span>
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
        </div>
    );
}

export default NavegationSecundaria;