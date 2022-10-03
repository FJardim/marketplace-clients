import React from "react";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white text-black md:m-auto list-none">
      <div className="p-6 container flex content-center justify-between">
        <div>
          <p className=" text-l font-sans font-bold text-black mb-4">
            Contact us{" "}
          </p>
          <li className=" text-gray-400">Call us 24-7</li>
          <li className="text-xl text-yellow-200 font-bold">1800 97 97 69</li>
          <li className=" text-gray-400">
            502 New Design Str, Melbourne, Australia
          </li>
          <li className=" text-gray-400">contact@marketplace.co</li>
          <div className="flex space-x-6 mt-10 ">
            <BsFacebook />
            <BsTwitter />
            <BsYoutube />
            <BsInstagram />
          </div>
        </div>
        <div>
          <p className=" text-l font-sans font-bold text-black mb-4">
            Quick Links
          </p>
          <div className="text-gray-400">
            <li>Policy</li>
            <li>Terms y Conditions</li>
            <li>Shipping</li>
            <li>Return</li>
            <li>FaQs</li>
          </div>
        </div>
        <div>
          <p className=" text-l font-sans font-bold text-black mb-4">Company</p>
          <div className="text-gray-400">
            <li>About us</li>
            <li>Afflitate</li>
            <li>Career</li>
            <li>Contact</li>
          </div>
        </div>
        <div>
          <p className=" text-l font-sans font-bold text-black mb-4">
            Bussiness
          </p>
          <div className="text-gray-400">
            <li>Our Press</li>
            <li>Check Out</li>
            <li>My Account</li>
            <li>Shop</li>
          </div>
        </div>
      </div>
      <div className="flex  mt-12 text-center justify-center">
        <p>
          &copy; 2022 <span className="text-xl">MarketPlace</span> FJ & LV
        </p>
      </div>
    </footer>
  );
};

export default Footer;
