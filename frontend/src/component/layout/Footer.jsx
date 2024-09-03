import React from "react";
import Icon from "./Icon.jsx";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-10 pt-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8">
        <div className="mb-6 lg:mb-0 lg:mr-10">
          <Icon />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:border-l lg:border-l-coreOrange lg:pl-10">
          {[1, 2, 3].map((index) => (
            <div key={index}>
              <h1 className="font-bold mb-3">Heading</h1>
              <ul className="space-y-2 text-zinc-400">
                {[1, 2, 3].map((linkIndex) => (
                  <li key={linkIndex}>
                    <a className="hover:text-coreOrange" href="/">
                      link
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="py-5 border-t border-orange-500 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="text-sm space-y-2">
          <div className="space-x-4">
            <a className="hover:text-coreOrange" href="/">
              LinkedIn
            </a>
            <a className="hover:text-coreOrange" href="/">
              Facebook
            </a>
            <a className="hover:text-coreOrange" href="/">
              Instagram
            </a>
          </div>
          <h1>
            2024 - &copy; TDK.{" "}
            <a href="t&C" className="underline">
              Terms of use
            </a>
          </h1>
        </div>
        <div className="text-sm">
          <h1 className="text-coreOrange normal-case mb-2">
            tuhinkairii@gmail.com
          </h1>
          <address className="not-italic text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            velit.
          </address>
        </div>
        <div className="text-center sm:text-right">
          <h1>Develop for Hackathon</h1>
        </div>
      </div>
    </footer>
  );
}
