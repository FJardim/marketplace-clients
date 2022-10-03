import React from "react";

const Newletter = () => {
  return (
    <div className="bg-white p-5 flex">
      <div className="ml-2">
        <p className=" text-2xl  font-bold">Newsletter</p>
        <span className="text-gray-400">
          Subcribe to get information about products and coupons
        </span>
      </div>
      <form className="mx-auto flex w-full max-w-lg flex-col mr-10 sm:flex-row sm:gap-0">
        <input
          type="email"
          name="email"
          id="email"
          className="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
          placeholder="Email Address"
        />
        <button
          type="submit"
          className="rounded bg-yellow-500 px-10 py-4 font-bold text-black sm:rounded-l-none sm:rounded-r-md"
        >
          Suscribete
        </button>
      </form>
    </div>
  );
};

export default Newletter;
