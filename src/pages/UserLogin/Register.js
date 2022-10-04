import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="py-16 px-80">
            <div className="text-center p-4 space-x-40 text-3xl font-bold">
                <Link to={"/Login"} className=" text-gray-500">
                    Login
                </Link>
                <Link to={"/Register"} className="text-black">
                    Register
                </Link>
            </div>
            <div className="flex justify-center items-center bg-white">

                <div className="w-full h-full p-4 ">

                    <form className="">

                    </form>

                </div>
            </div>
        </div >

    );
}

export default Register;