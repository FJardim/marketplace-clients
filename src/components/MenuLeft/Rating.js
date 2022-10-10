import React from "react";
import Star from "../Generico/Star";
const Rating = () => {
  return (
    <div className="lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow mt-4 p-4 ">
      <div>
        <h4 className="text-lg font-bold">Rating</h4>
      </div>
      <div>
        <Star />
      </div>
    </div>
  );
};

export default Rating;
