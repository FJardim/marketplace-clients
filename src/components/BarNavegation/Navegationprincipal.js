import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import Search from "./Search.js";
import { FaRegUser } from "react-icons/fa";

const NavegationPrincipal = () => {
  return (
    <div className=" bg-main text-black h-14 px-8">
      <div className="container m-auto h-full">
        <div className="flex justify-content items-center">
          <div className="flex p-2 ">
            <h1 className="text-3xl font-bold">Market</h1>
            <h1 className="text-3xl font-bold text-white">Place</h1>
          </div>
          <button className="flex-wrap px-10">
            <AiOutlineMenu className="h-8 w-8" />
          </button>
          <Search />
          <div className="flex items-center px-14">
            <BsHeart className="h-8 w-8  hover:text-white" />
            <AiOutlineShoppingCart className="mx-10 h-8 w-8 hover:text-white" />
            <FaRegUser className="h-8 w-8 hover:text-white" />
            <div>
              <p className="text-ls font-medium  hover:text-white"> Login </p>
              <p className="text-ls font-medium  hover:text-white"> Registre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavegationPrincipal;
