import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="lg:py-16 lg:px-96 sm:py-4 sm:px-6">
            <div className="text-center p-4 space-x-40 text-3xl font-bold">
                <Link to={"/Login"} className=" text-gray-500">
                    Login
                </Link>
                <Link to={"/Register"} className="text-black">
                    Register
                </Link>
            </div>
            <div className="flex justify-center items-center bg-white">

                <div className="flex justify-center items-center bg-white">
                    <div className="w-full h-full p-8">
                        <span className="text-gray-500 font-medium p-2">Register An Account </span>
                        <form className="py-6">
                            <input
                                type="FirstName"
                                name="FirstName"
                                id="FirstName"
                                className="grow border-2 mt-4 w-full border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
                                placeholder="First name"
                            />
                            <input
                                type="Last name"
                                name="Last name"
                                id="Last name"
                                className="grow border-2 mt-6 w-full border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
                                placeholder="Last name"
                            />
                            <input
                                type="username"
                                name="username"
                                id="username"
                                className="grow border-2 mt-6 w-full border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
                                placeholder="Username"
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="grow border-2 mt-6 w-full border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
                                placeholder="Email address"
                            />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="grow border-2 mt-6 w-full border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
                                placeholder="Password"
                            />

                            <button className="flex justify-center items-center text-xl font-medium rounded mt-6 h-14 w-full bg-main text-black mr-auto ml-auto"> Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Register;