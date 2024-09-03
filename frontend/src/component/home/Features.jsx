import React from "react";
import Heading from "../utility/Heading.jsx";
import BtnWhite from "../utility/BtnWhite.jsx";

export default function Features() {
  return (
    <section id="Features" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20">
      <Heading text="Features" />
      <div className="features grid gap-8 w-full max-w-6xl mt-10">
        <div className="border-2 rounded-md p-5 flex flex-col items-center sm:flex-row sm:items-start gap-5">
          <img className="w-1/2 sm:w-1/4 mb-4 sm:mb-0" src="https://framerusercontent.com/images/JKkpnXDn7obomyyE95VNZpgE6x4.png" alt="" />
          <div>
            <Heading text="24/7 Connection" size="text-xl text-center sm:text-left mb-4" />
            <p className="mb-4 text-center sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolor,
              beatae rem laborum reiciendis, labore esse, dolore eum corrupti
              dignissimos omnis. Ullam, error aliquid. Nihil fugit delectus labore
              excepturi cupiditate!
            </p>
            <BtnWhite text="Get Started"/>
          </div>
        </div>
        <div className="border-2 rounded-md p-5 flex flex-col items-center sm:flex-row-reverse sm:items-start gap-5">
          <img className="w-3/4 sm:w-1/3 mb-4 sm:mb-0" src="https://framerusercontent.com/images/jOuCdBAt4HHGItKioroe0EE.png" alt="" />
          <div>
            <Heading text="Personalization" size="text-xl text-center sm:text-left mb-4" />
            <p className="mb-4 text-center sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolor,
              beatae rem laborum reiciendis, labore esse, dolore eum corrupti
              dignissimos omnis. Ullam, error aliquid. Nihil fugit delectus labore
              excepturi cupiditate!
            </p>
            <BtnWhite text="Get Started"/>
          </div>
        </div>
        <div className="border-2 rounded-md p-5 flex flex-col items-center">
          <Heading text="More Accurate Response" size="text-xl text-center mb-4" />
          <p className="w-full sm:w-2/3 text-center mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolor,
            beatae rem laborum reiciendis, labore esse, dolore eum corrupti
            dignissimos omnis. Ullam, error aliquid. Nihil fugit delectus labore
            excepturi cupiditate!
          </p>
          <BtnWhite text="Get Started"/>
        </div>
      </div>
    </section>
  );
}