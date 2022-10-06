import { FaStar } from "react-icons/fa";

const Star = () => {
    return (
        <div className="flex space-x-1 mt-1 items-center ">
            <FaStar className="text-gray-400 hover:text-main-light cursor-pointer" />
            <FaStar className="text-gray-400 hover:text-main-light cursor-pointer" />
            <FaStar className="text-gray-400 hover:text-main-light cursor-pointer" />
            <FaStar className="text-gray-400 hover:text-main-light cursor-pointer" />
            <FaStar className="text-gray-400 hover:text-main-light cursor-pointer" />
            <span className="space-x-4">01</span>
        </div>
    );
}

export default Star;