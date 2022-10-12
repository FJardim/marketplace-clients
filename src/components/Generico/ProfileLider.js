import React from "react";

const ProfileLider = ({ title, image }) => {
  return (
    <div className="container w-full mt-20 mb-20">
      <div className="w-56 m-auto">
        <img src={image} alt="" className=" rounded-lg" />
      </div>
    </div>
  );
};

export default ProfileLider;
