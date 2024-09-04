import React, { useState } from "react";
import Conditions from "./Conditions";
import Heading from "../../utility/Heading";

export default function Overview() {
  const now = Date.now();
  const date = new Date(now);
  const [Time, setTime] = useState(date.toLocaleString());
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
      <div className="md:col-span-2 lg:col-span-3">
        <div className="flex justify-between items-start mb-10 flex-wrap">
          <h1 className="text-3xl font-semibold mb-7  ">Overview </h1>
          <div>
            <h2 className="text-lg   mb-2 mr-5 ">
              Status :<span className="text-green-500"> Normal </span>{" "}
            </h2>
            <h2 className="text-lg inline-block">
              Last Update :{" "}
              <span className="text-orange-500"> {Time.toLocaleString()} </span>{" "}
            </h2>
          </div>
        </div>

          <Heading
            text="Physical Condition :"
            size="text-2xl text-start md:col-span-2 lg:col-span-3 pb-3 lg:col-span-3"
          />

        <div className="restdata md:col-span-2 lg:col-span-3 grid grid-cols-3 gap-1  ">
          <Conditions condition="Cold" state="" />
          <Conditions condition="Cough" state="" />
          <Conditions condition="Dehydration" state="" />
          <Conditions condition="Medicine Overdose" state="" />
          <Conditions condition="Acidious" state="" />
        </div>
      </div>

     
    </div>
  );
}
