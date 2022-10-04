import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart, BsSearch } from "react-icons/bs";
import Search from "./Search.js";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavegationPrincipal = () => {
  return (
    <div className=" bg-main text-black h-14 px-8">
      <div className="container m-auto h-full">
        <div className="flex justify-content items-center">
          <div className="flex lg:p-2 ">
            <h1 className="lg:text-3xl font-bold sm:text-xl">Market</h1>
            <h1 className="lg:text-3xl font-bold text-white sm:text-xl">Place</h1>
          </div>
          <button className="flex-wrap lg:px-10 sm:px-6">
            <AiOutlineMenu className="h-8 w-8" />
          </button>

          <div className="hidden lg:block">
            <Search />
          </div>
          <div className="ml-4 block lg:hidden">
            <BsSearch className=" hover:text-white h-8 w-8 p-1" />
          </div>
          <div className="flex items-center sm:ml-4 lg:ml-0">
            <BsHeart className="h-8 w-8 sm:l-4 hover:text-white" />
            <AiOutlineShoppingCart className="lg:mx-6 sm:ml-4 h-8 w-8 hover:text-white " />
            <FaRegUser className="h-8 w-8 hover:text-white" />
            <div className="sm:hidden lg:block">
              <Link to={"/Login"} className="text-ls font-medium block hover:text-white">
                Login
              </Link>
              <Link to={"/Register"} className="text-ls font-medium  hover:text-white">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavegationPrincipal;
