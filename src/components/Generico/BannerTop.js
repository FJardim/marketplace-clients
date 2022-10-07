import React from "react";
import { BsGrid1X2, BsList } from "react-icons/bs";
const BannerTop = ({ title, button, comment }) => {
  return (
    <div className="container p-4 bg-gray-200 w-full flex justify-between">
      <div>
        <p className="text-lg font-bold">{title}</p>
      </div>
      <div className="flex justify-between space-x-8">
        <p>{button}</p>
        <p>{comment}</p>
        <BsGrid1X2 />
        <BsList />
      </div>
    </div>
  );
};

export default BannerTop;
