import React from "react";
import WavingBackground from "../utility/WavingBackground.jsx";
import BtnWhite from "../utility/BtnWhite.jsx";

export default function Banner() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Powered BY AI</h1>
        <p className="font-sans w-full sm:w-3/4 lg:w-2/3 mx-auto text-zinc-500 mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          molestiae assumenda, dolores dolor labore tenetur, ipsum velit sit
          consequuntur ipsa cum ad exercitationem excepturi? Repellat doloribus
          eos animi consectetur voluptates?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            name="email"
            id="emailBanner"
            className="w-full sm:w-72 bg-inherit border rounded-md border-zinc-500 px-4 py-2 text-zinc-500 focus:outline-none placeholder:text-zinc-700"
            placeholder="E-mail Address..."
          />
          <BtnWhite text="Get Notify" />
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <WavingBackground />
      </div>
    </section>
  );
}