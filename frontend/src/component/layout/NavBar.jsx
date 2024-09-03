import React, { useState, useEffect } from "react";
import Icon from "./Icon.jsx";
import BtnWhite from "../utility/BtnWhite.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleProfileClick = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="w-full fixed z-10 top-0 p-5 bg-coreBg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Icon />
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row w-full lg:w-auto mt-4 lg:mt-0 lg:items-center lg:justify-center lg:gap-14`}
        >
          <li>
            <Link
              className="block py-2 lg:py-3 hover:border-coreOrange lg:border-b-2 border-b-transparent"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              className="block py-2 lg:py-3 hover:border-coreOrange lg:border-b-2 border-b-transparent"
              href="/#Features"
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="block py-2 lg:py-3 hover:border-coreOrange lg:border-b-2 border-b-transparent"
              href="/#FAQ"
            >
              FAQ
            </a>
          </li>
          <li>
            <Link
              className="block py-2 lg:py-3 hover:border-coreOrange lg:border-b-2 border-b-transparent"
              to="/About"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 lg:py-3 hover:border-coreOrange lg:border-b-2 border-b-transparent"
              to="/Contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden lg:block">
          {isLoggedIn ? (
            <>
              <button
                onClick={handleProfileClick}
                className="bg-white text-black px-4 py-2 rounded-md"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
              >
                Logout
              </button>
            </>
          ) : (
            <BtnWhite text="Login" to="/login" />
          )}
        </div>
      </div>
    </nav>
  );
}
