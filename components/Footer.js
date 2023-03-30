import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className="md:flex md:justify-around md:items-center sm:px-12 px-4 bg-gray-100 py-5">
        <h1 className="text-center text-2xl py-4">
          <span className="text-amber-700">Sign up </span>for news and updates
        </h1>
        <div className="text-center align-middle justify-center">
          <input
            type="text"
            placeholder="Enter your email"
            className="text-gray-800 w-60 mr-2
             rounded px-2 focus:outline-none"
          />
          <button className="rounded bg-amber-400 py-2 px-4 shadow outline-none hover:bg-amber-500 active:bg-amber-500">
            Submit
          </button>
        </div>
      </div>
      <div className="bg-gray-50 text-left grid grid-cols-1 sm:grid-cols-3 gap-6 sm:px-8 p-5">
        <div className="p-5 flex justify-center">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Services</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Shipping & Delivery
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Orders
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Returns
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Payments Options
            </li>
          </ul>
        </div>
        <div className="p-5 flex justify-center">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Products
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Terms of Use
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Cookie Settings
            </li>
          </ul>
        </div>
        <div className="p-5 flex justify-center">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Our Story
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Account
            </li>
            <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-gray-700 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center px-5 bg-gray-50">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-600 font-bold text-2xl pb-4 text-center">
              Follow <span className="text-gray-500">Us</span>
            </p>
            <div className="flex gap-6">
              <FaInstagram className="text-3xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-3xl cursor-pointer hover:text-blue-500" />
              <FaFacebook className="text-3xl cursor-pointer hover:text-blue-700" />
              <FaYoutube className="text-3xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <h1
          className=" text-gray-800 font-semibold pb-4 text-sm
				"
        >
          &copy; 2023 <em>Demo-Shop.</em> All rights reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
