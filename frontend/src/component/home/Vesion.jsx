import React from "react";
import Heading from "../utility/Heading";

export default function Vesion() {
  return (
    <section className="h-screen content-center">
      <div className="grid justify-center gap-10 ">
      <Heading text="Our Vesion" size="text-center text-5xl" />
        <ul className="list-disc grid gap-5 list-inside">
          <li className=""><Heading text="Developing a enviroment For all type of users." size=" text-2xl inline-block"/></li>
          <li className=""><Heading text="Quick Health monitoring using graphs. " size=" text-2xl inline-block"/></li>
          <li className=""><Heading text="get notify for avoiding risks." size=" text-2xl inline-block"/></li>
          <li className=""><Heading text="easy, Fast & reliable." size=" text-2xl inline-block"/></li>
        </ul>
      </div>
    </section>
  );
}
