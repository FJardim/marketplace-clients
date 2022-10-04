import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="lg:py-16 lg:px-96 sm:py-4 sm:px-6">
            <div className="text-center p-4 lg:space-x-40 sm:space-x-10 lg:text-3xl sm:text-lg font-bold text-gray-500">
                <Link to={"/Login"} className="text-black">
                    Login
                </Link>
                <Link to={"/Register"} className=" text-gray-500">
                    Register
                </Link>
            </div>
            <div className="flex justify-center items-center bg-white">
                <div className="w-full h-full p-4 ">
                    <form className="">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            // className="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
                            placeholder="Email Address"
                        />
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Login;