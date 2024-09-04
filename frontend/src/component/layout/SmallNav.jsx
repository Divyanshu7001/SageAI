import React, { useState } from "react";
import Icon from "./Icon";
import BtnWhite from "../utility/BtnWhite";

export default function SmallNav() {
  const [state, setState] = useState(false);
  const handelMenu = () => {
    setState(true);
  };
  return (
    <>
      <nav className="w-full h-screen fixed z-10 top-0 grid md:hidden items-center justify-center p-5 px-10 bg-blend-luminosity">
        <ul className="h-full w-full">
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </nav>
      <nav className="w-screen fixed z-10 top-0 grid md:hidden grid-cols-3 items-center justify-center p-5 px-10 bg-blend-luminosity ">
        <div className="items-center justify-self-start ">
          <Icon />
        </div>
        <div className="grid  items-center justify-center">
          {!state && (
            <button onClick={handelMenu} className=" p-2 space-y-1 w-fit">
              <div className="py-0.5 bg-white px-5 "></div>
              <div className="py-0.5 bg-white px-5 "></div>
              <div className="py-0.5 bg-white px-5 "></div>
            </button>
          )}
        </div>

        <div className="justify-self-end">
          <BtnWhite endpoint="/Login" text="Login" />
        </div>
      </nav>
    </>
  );
}
