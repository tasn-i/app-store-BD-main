import React from "react";
import hero from "../../assets/hero.png";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div>
        <div className=" pt-8  text-center">
          <h1 className="font-semibold md:font-bold lg:font-extrabold text-xl md:text-4xl lg:text-7xl w-full md:3/4 lg:w-2/4 mx-auto p-4">
            We Build <span className="text-purple-600"> Productive </span>Apps
          </h1>
          <p className="w-full md:10/12 lg:w-8/12 mx-auto p-4">
            App Store BD we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact
          </p>
          <div className="mt-8">
            <a href="https://play.google.com/store/games">
              <button className="btn btn-outline mr-2">
                <FaGooglePlay size={18} className="text-cyan-500" />
                Google Play
              </button>
            </a>
            <a href="https://www.apple.com/app-store/">
              <button className="btn btn-outline ml-2">
                <FaAppStoreIos size={20} className="text-blue-400" />
                App Store
              </button>
            </a>
          </div>
          <div className="w-96 mx-auto pt-16">
            <img src={hero} alt="hero" />
          </div>
        </div>

        <div className="p-24 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-center items-center">
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl text-white">Trusted by Millions, Built for You</h1>
            <div className="md:flex justify-center items-center gap:6 md:10 my-6">
                <div className="card shadow-sm p-8 m-4">
                    <h5 className="text-sm text-gray-300">Total Downloads</h5>
                    <h1 className="text-white font-extrabold text-4xl py-3">29.6M</h1>
                    <p className="text-sm text-gray-300">21% more than last month</p>
                </div>
                <div className="card shadow-sm p-8 m-4">
                    <h5 className="text-sm text-gray-300">Total Reviews</h5>
                    <h1 className="text-white font-extrabold text-4xl py-3">906K</h1>
                    <p className="text-sm text-gray-300">46% more than last month</p>
                </div>
                <div className="card shadow-sm p-8 m-4">
                    <h5 className="text-sm text-gray-300">Active Apps</h5>
                    <h1 className="text-white font-extrabold text-4xl py-3">132+</h1>
                    <p className="text-sm text-gray-300">31 more will Launch</p>
                </div>
                
            </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
