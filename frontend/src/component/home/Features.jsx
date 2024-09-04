import React from "react";
import Heading from "../utility/Heading";
import BtnWhite from "../utility/BtnWhite";

export default function Features() {
  return (
    <section
      id="Features"
      className="min-h-screen relative content-center grid gap-10 py-40"
    >
      <Heading text="Features" />
      <div className="features grid gap-10 grid-cols-2 px-28">
        <div className="border-2 rounded-md grid p-5 gap-5">
          <img
            className="w-2/4 m-auto"
            src="https://framerusercontent.com/images/JKkpnXDn7obomyyE95VNZpgE6x4.png"
            alt=""
          />
          <Heading text="24/7 Connection" size="text-xl text-start" />
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolor,
            beatae rem laborum reiciendis, labore esse, dolore eum corrupti
            dignissimos omnis. Ullam, error aliquid. Nihil fugit delectus labore
            excepturi cupiditate!
          </p>
          <BtnWhite text="Get Started" />
        </div>
        <div className="border-2 rounded-md grid p-5 gap-5">
          <Heading text="Personalization" size="text-xl text-start" />
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolor,
            beatae rem laborum reiciendis, labore esse, dolore eum corrupti
            dignissimos omnis. Ullam, error aliquid. Nihil fugit delectus labore
            excepturi cupiditate!
          </p>
          <BtnWhite text="Get Started" />
          <img
            className="w-3/4 justify-self-end"
            src="https://framerusercontent.com/images/jOuCdBAt4HHGItKioroe0EE.png"
            alt=""
          />
        </div>
        <div className="col-span-2 border-2 rounded-md grid gap-5 p-5 justify-items-center">
          <Heading text="More Accurate Response" size="text-xl text-center" />
          <p className=" w-1/2 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolor,
            beatae rem laborum reiciendis, labore esse, dolore eum corrupti
            dignissimos omnis. Ullam, error aliquid. Nihil fugit delectus labore
            excepturi cupiditate!
          </p>
          <BtnWhite text="Get Started" />
        </div>
      </div>
    </section>
  );
}
