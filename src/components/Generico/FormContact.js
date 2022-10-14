import React from "react";

const FormContact = ({ titulo, parrafo }) => {
  return (
    <div className="bg-gray-100 w-full h-full p-20">
      <div className=" text-center text-4xl font-bold">
        <h4>{titulo}</h4>
      </div>
      <form>
        <div className=" flex justify-between m-4">
          <input
            type="Last name"
            name="Last name"
            id="Last name"
            className="grow border-2 mt-6 w-96 border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
            placeholder="Name"
          />
          <input
            type="Last name"
            name="Last name"
            id="Last name"
            className="grow border-2 mt-6 w-96 border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
            placeholder="Email"
          />
        </div>
        <div className="flex justify-between m-4">
          <input
            type="Last name"
            name="Last name"
            id="Last name"
            className="grow border-2 mt-6 w-96 border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
            placeholder="Asunto"
          />
        </div>
        <div className="flex justify-between m-4">
          <input
            type="Last name"
            name="Last name"
            id="Last name"
            className="grow border-2 mt-6 w-96 h-48 border-gray-300 py-3 px-3 focus:border-yellow-500 focus:outline-none"
            placeholder="Last name"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="rounded bg-main-light px-10 py-4 font-bold text-black sm:rounded-l-none sm:rounded-r-md"
          >
            {parrafo}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
