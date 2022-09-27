import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
// import English from "../../assets/img-idioma/English.png";
const NavegationSecundaria = () => {
    return (
        <div className=" bg-yellow-500 text-black h-8 px-8">
            <div className="container h-full">
                <div className="flex justify-end items-center p-2 space-x-1">
                    <FaFacebook className="hover:text-white" />
                    <FaInstagram className="hover:text-white" />
                    <FaLinkedinIn className="hover:text-white" />
                    <FaTwitter className="hover:text-white" />
                    <FaYoutube className="hover:text-white" />
                    {/* <div className="border-r-4 border-current "></div> */}
                    <select className=" bg-yellow-500 text-slate-600 outline-0 " id="">
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