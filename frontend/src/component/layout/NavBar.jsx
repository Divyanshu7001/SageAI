import React from "react";
import Icon from "./Icon";
import BtnWhite from "../utility/BtnWhite";
import { Link, NavLink } from "react-router-dom";
import SmallNav from "./SmallNav";

export default function NavBar() {
  return (
    <>
      <nav className="w-screen fixed z-10 top-0 grid grid-cols-3 items-center justify-center p-5 px-10 bg-blend-luminosity ">
        <div className="items-center justify-self-start ">
          <Icon />
        </div>
        <ul className="hidden md:flex items-center justify-center gap-14  ">
          <li>
            <NavLink
              className=" py-3  hover:border-coreOrange border-b-2 border-b-transparent "
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <a
              className=" py-3  hover:border-coreOrange border-b-2 border-b-transparent"
              href="/#Features"
            >
              Features
            </a>
          </li>
          <li>
            <a
              className=" py-3  hover:border-coreOrange border-b-2 border-b-transparent"
              href="/#FAQ"
            >
              FAQ
            </a>
          </li>

          <li>
            <NavLink
              className=" py-3  hover:border-coreOrange border-b-2 border-b-transparent"
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="justify-self-end">
          <BtnWhite endpoint="/Login" text="Login" />
        </div>
      </nav>
      {/* <SmallNav/> */}
    </>
  );
}
