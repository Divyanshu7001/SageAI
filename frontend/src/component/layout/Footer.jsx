import React from "react";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 w-full items-center content-center px-10 pt-10 gap-y-7 border-t border-zinc-500">
      <div className="">
        <Icon />
      </div>
      <div className="grid grid-cols-3 items-center justify-center text-center border-l-coreOrange border-l">
        <div>
          <h1 className=" p-5">Heading</h1>
          <ul className="space-y-3 text-zinc-400 ">
            <li>
              <a className="hover:text-coreOrange" href="/">
                link
              </a>
            </li>
            <li>
              <a className="hover:text-coreOrange" href="/">
                link
              </a>
            </li>
            <li>
              <a className="hover:text-coreOrange" href="/">
                link
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className=" p-5">Heading</h1>
          <ul className="space-y-3 text-zinc-400 ">
            <li>
              <a className="hover:text-coreOrange" href="/">
                link
              </a>
            </li>
            <li>
              <a className="hover:text-coreOrange" href="/">
                link
              </a>
            </li>
            <li>
              <a className="hover:text-coreOrange" href="/">
                link
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className=" p-5">Heading</h1>
          <ul className="space-y-3 text-zinc-400 ">
            <li>
              <a className="hover:text-coreOrange" href="/">
                link
              </a>
            </li>
            <li>
              <a className="hover:text-coreOrange" href="/">
                link
              </a>
            </li>
            <li>
              <a className="hover:text-coreOrange" href="/">
                link
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-5 col-span-2 grid grid-cols-3  border-orange-500">
        <div className="text-sm ">
          <a className="mr-4 hover:text-coreOrange" href="/">
            LinkedIn
          </a>
          <a className="mr-4 hover:text-coreOrange" href="/">
            Facebook
          </a>
          <a className="mr-4 hover:text-coreOrange" href="/">
            Instagram
          </a>
          <h1>
            2024 - &copy; TDK.{" "}
            <a href="t&C" className="underline">
              Terms of use
            </a>
          </h1>
        </div>
        <div className="text-sm ">
          <h1 className="text-coreOrange normal-case ">
            tuhinkairii@gmail.com
          </h1>
          <address className="not-italic text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            velit.
          </address>
        </div>
        <div>
          <h1 className="text-center">Develop for Hackathon</h1>
        </div>
      </div>
    </footer>
  );
}
