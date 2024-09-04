import React from "react";
// import Wave from "react-wavify";
import WavingBackground from "../utility/WavingBackground";
import BtnWhite from "../utility/BtnWhite";

export default function Banner() {
  return (
    <section className="h-screen grid items-center place-items-center text-center relative w-screen">
      <div className="gap-5 grid items-center justify-center">
        <h1 className="text-5xl">Powered BY AI</h1>
        <p className=" font-sans w-1/2 place-self-center text-zinc-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          molestiae assumenda, dolores dolor labore tenetur, ipsum velit sit
          consequuntur ipsa cum ad exercitationem excepturi? Repellat doloribus
          eos animi consectetur voluptates?
        </p>
        <form className="space-x-5 flex  items-center justify-center w-fit justify-self-center">
          <input
            type="email"
            name="email"
            id="emailBanner"
            required
            className="inline-block w-72 m-auto bg-inherit border rounded-md border-zinc-500 px-4 py-2  focus:outline-none placeholder:text-zinc-700"
            placeholder="E-mail Address..."
          />
          <BtnWhite type="submit" text="Get Notify" />
        </form>
      </div>
      <div className="absolute w-full bottom-0">
        <WavingBackground />
      </div>
    </section>
  );
}
