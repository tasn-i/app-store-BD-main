import React from "react";
import logo from "../../assets/logo.png"
import { VscGithub } from "react-icons/vsc";
import { Link, NavLink } from "react-router";


const Navbar = () => {
  const links = <>
      <div className="lg:flex lg:items-center lg:gap-4">
        <NavLink to="/" className={({isActive}) => isActive ? "text-purple-600 font-bold underline underline-offset-8" : ""}><li>Home</li></NavLink>
        <NavLink to="/apps" className={({isActive}) => isActive ? "text-purple-600 font-bold underline underline-offset-8" : ""}><li>Apps</li></NavLink>
        <NavLink to="/installation" className={({isActive}) => isActive ? "text-purple-600 font-bold underline underline-offset-8" : ""}><li>Installation</li></NavLink>
      </div>
  </>
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-full">
        <div className="navbar bg-white shadow-sm text-black md:px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
              >
                {links}
              </ul>
            </div>
            {/* <a className="btn btn-ghost cursor-pointer" href="/">
                  <img className="w-8" src={logo} alt="logo" />
                  <span className="text-purple-600 text-xl">AppStoreBD</span>   
            </a> */}
            <Link to="/">
                 <div className="flex flex-col-2 ">
                    <img className="w-4 md:w-8" src={logo} alt="logo" />
                    <span className="text-purple-600 text-sm md:text-xl hidden sm:block "> AppStoreBD</span> 
                 </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end ">
            <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] transition-all duration-300 cursor-pointer text-white text-xs md:text-sm" href="https://github.com/tasn-i"><VscGithub size={20} />Contribute</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;