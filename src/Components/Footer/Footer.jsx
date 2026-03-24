import React from "react";
import logo from "../../assets/logo.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div>
        {/* Footer start */}
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
          <nav>
            <div className="footer-title cursor-pointer text-purple-600 flex items-center gap-2">
               <img className="w-4" src={logo} alt="logo" />
               <span>AppStoreBD</span>
            </div>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">terms & conditions</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Apps</a>
            <a className="link link-hover">Installation</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <a className="link link-hover flex justify-between gap-2 items-center">
              <FaFacebookSquare />
              Facebook
            </a>
            <a className="link link-hover flex justify-between gap-2 items-center">
              <FaLinkedin />
              Linkedin
            </a>
            <a className="link link-hover flex justify-between gap-2 items-center">
              <FaSquareXTwitter /> Twitter
            </a>
            <a className="link link-hover flex justify-between gap-2 items-center">
              <FaInstagramSquare />
              Instagram
            </a>
          </nav>
        </footer>

        {/* Footer end */}
        <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-6 border-t border-gray-800">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              App Store BD
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
