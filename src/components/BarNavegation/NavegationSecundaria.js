import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
// import English from "../../assets/img-idioma/English.png";
const NavegationSecundaria = () => {
    return (
        <div className=" bg-main-dark text-black h-14 px-8">
            <div className="container flex justify-around h-full">
                <div className="flex items-center p-2 space-x-1">
                    <FaFacebook className="hover:text-white" />
                    <FaInstagram className="hover:text-white" />
                    <FaLinkedinIn className="hover:text-white" />
                    <FaTwitter className="hover:text-white" />
                    <FaYoutube className="hover:text-white" />
                </div>
                <div className="flex py-2 px-full items-center ">
                    <span className="pr-8">Ayudas</span>
                    <span className="pr-8">Sobre Nosotros</span>
                    <span className="pr-8">Contacto</span>
                    <span className="pr-8">Vender en Sínoxsa</span>
                    <span className="pr-8">Tiendas</span>
                </div>
                <div className="flex items-center">
                    <select className=" bg-main-dark border-main-dark text-slate-600 outline-0" id="">
                        <option>English</option>
                        <option>Spanish</option>
                    </select>
                </div>
                <div className="flex">

                </div>
            </div>
        </div>
    );
}

export default NavegationSecundaria;