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
                <div className="w-full h-full p-8">
                    <span className="text-gray-500 font-medium p-2">Log in your Account </span>
                    <form className="py-6">
                        <input
                            type="username"
                            name="username"
                            id="username"
                            className="grow border-2 mt-0 w-full border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
                            placeholder="Username or email address"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="grow border-2 mt-6 w-full border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
                            placeholder="Password"
                        />
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Login;