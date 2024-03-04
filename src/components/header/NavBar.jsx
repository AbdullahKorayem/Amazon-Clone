import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <nav className="bg-[#131921] h-auto justify-evenly flex items-center text-white">
        {/* Logo */}
        <div className="border border-transparent hover:border-white">
          <img
            src="./src/assets/images/AmzonLogo.png"
            className="h-12"
            alt="Amazon Logo"
          />
        </div>

        {/* Deliver To */}
        <div className="border border-transparent px-4 hover:border-white hidden md:block">
          <p className="text-sm">Deliver To</p>
          <div className="flex items-center gap-1">
            <FaLocationDot />
            <p>Egypt</p>
          </div>
        </div>

        {/* Search */}
        <div className="text-black px-4 flex h-12 flex-grow">
          <select className="bg-[#E6E6E6] px-2 rounded-lg rounded-r-none ">
            <option>All</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full pl-2 text-base"
          />
          <div className="bg-orange-300 flex rounded-lg rounded-l-none items-center p-2">
            <FaSearch />
          </div>
        </div>

        {/* Language */}
        <div className="flex items-center border border-transparent p-1 hover:border-white">
          <img
            src="./src/assets/images/us_flag.png"
            className="w-5 h-5"
            alt="US Flag"
          />
          <select className="bg-transparent font-bold">
            <option>EN</option>
          </select>
        </div>

        {/* Sign In */}
        <div className="border border-transparent p-1 hover:border-white">
          <p>Hello, sign in</p>
          <select className="bg-transparent font-bold font-xl">
            <option>Accounts & Lists</option>
          </select>
        </div>

        {/* Returns & Order */}
        <div className="border border-transparent p-1 hover:border-white hidden lg:block">
          <p className="text-xs">Returns</p>
          <p className="font-bold">& Order</p>
        </div>

        {/* Cart */}
        <div className="border border-transparent p-1 hover:border-white flex items-center">
          <FaShoppingCart className="w-6" />
          <p className="font-bold">Cart</p>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-[#222F3D] flex items-center text-white text-sm pl-4">
        <div className="flex items-center gap-1 border border-transparent p-2 hover:border-white">
          <FaBars className="font-bold" />
          <p>All</p>
        </div>

        <ul className="flex items-center">
          <li className="gap-1 border border-transparent p-1 hover:border-white">
            Today's Deals
          </li>
          <li className="gap-1 border border-transparent p-1 hover:border-white">
            Customer Services
          </li>
          <li className="gap-1 border border-transparent p-1 hover:border-white">
            Registry
          </li>
          <li className="gap-1 border border-transparent p-1 hover:border-white">
            Gift Cards
          </li>
          <li className="gap-1 border border-transparent p-1 hover:border-white hidden lg:block">
            Sell
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;