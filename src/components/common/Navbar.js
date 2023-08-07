import React from "react";
import Sidebar from "../../assets/Sidebar.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropDown from "../Auth/ProfileDropDown.js";



const Navbar = ({ theme }) => {
  const { token } = useSelector((state) => state.auth);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black  border-b-white" : "bg-white border-b-black"
      }   flex flex-row  border-b-[1px] border-opacity-50  items-center justify-between px-[15px] py-[15px]`}
    >
      {/* left side */}
      <div className=" flex flex-row lg:px-[25px] items-center gap-2 ">
        <Link to="/">
          <h2
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } font-[700] text-[10px] lg:text-[18px] text-center font-walsheimCon leading-normal`}
          >
            Learn To Code Dashboard 
          </h2>
        </Link>

      </div>



      {/* right side */}
      <div className="flex flex-row gap-4 items-center">

        <Sidebar
          className="lg:hidden"
          alt="Logo not able to show"
          color={`${theme === "dark" ? "white" : "black"}`}
        />
        {token === null && (
          <Link to="/login" className="lg:block hidden">
            <button
              className={`text-[15px] hidden lg:block font-walsheimCon leading-[26px] ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Log In
            </button>
          </Link>
        )}
        {token === null && (
          <Link to="/signup" className="lg:block hidden">
            <div
              className={` w-[120px] hidden lg:flex h-[40px]  flex-row items-center justify-center rounded-[8px]
            ${
              theme === "dark" ? "text-black bg-white " : "text-white bg-black"
            }`}
            >
              <button className="text-[15px] font-walsheimCon leading-[26px] ">
                Sign Up
              </button>
            </div>
          </Link>
        )}
        {token !== null && <ProfileDropDown />}
      </div>
    </div>
  );
};

export default Navbar;
