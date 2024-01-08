import React from "react";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full py-2 border-b-2">
      <Link to="/" className=" font-bold md:ml-28 ml-4 mt-1 text-2xl">pti.</Link>
      <div className="flex gap-2">
        <div className=" rounded-md flex gap-2  border-2 bg-white w-30 ml-2">
          <div className="mt-2 text-orange-400 bg-white outline-none ">
            <CiSearch className="cursor-pointer" />
          </div>
          <input
            className="  outline-none text-sm"
            type="text"
            placeholder="Seach AudioBook"
          />
        </div>

        <div>
          {/* <h1>Menu</h1> */}

          <select
            id="order"
            className="text-md w-[115px] md:w-32  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight cursor-pointer focus:outline-none focus:shadow-outline"
            style={{ color: "#FF9800" }} 
          >
            <option value="Home" className="text-black">
              Home
            </option>
            <option value="Details" className="text-black">
              Details
            </option>
            <option value="Categories" className="text-black">
              Categories
            </option>
            <option value="My Favorites" className="text-black">
              My Favorites
            </option>
            <option value="Profile" className="text-black">
              Profile
            </option>
            <option value="Login/SignUp" className="text-black">
              LogIn/SignUp
            </option>
          </select>
        </div>
      </div>

      <Link to="/login"  className="hidden md:block mr-56 rounded-full p-3">
        <VscAccount size={25} className=" bg-orange-500 " />
      </Link>
    </div>
  );
};

export default Navbar;
