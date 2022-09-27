import React from "react";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="p-6 container bg-white flex content-center justify-between">
        <div>
          <p className=" text-l font-sans font-bold text-black mb-4">
            Contact us{" "}
          </p>
          <li>Call us 24-7</li>
          <li className="text-xl text-yellow-200 font-bold">1800 97 97 69</li>
          <li>502 New Design Str, Melbourne, Australia</li>
          <li>contact@marketplace.co</li>
          <div className="flex space-x-10 mt-10 ">
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
          <li>Policy</li>
          <li>Terms y Conditions</li>
          <li>Shipping</li>
          <li>Return</li>
          <li>FaQs</li>
        </div>
        <div>
          <p className=" text-l font-sans font-bold text-black mb-4">Company</p>
          <li>About us</li>
          <li>Afflitate</li>
          <li>Career</li>
          <li>Contact</li>
        </div>
        <div>
          <p className=" text-l font-sans font-bold text-black mb-4">
            Bussiness
          </p>
          <li>Our Press</li>
          <li>Check Out</li>
          <li>My Account</li>
          <li>Shop</li>
        </div>
      </div>
      <div className="flex  mt-12 text-center justify-center">
        <span>© 2020 MarketPlace. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
