import React, { useState } from "react";
import VitalsWidget from "./VitalsWidget";
import Conditions from "./Conditions";
import Heading from "../../utility/Heading";

export default function Widget() {
return(<>
      <Heading
        text="Vitals Status:"
        size="text-2xl font-semibold text-start md:col-span-2 mb-6  lg:col-span-3"
      />
      <VitalsWidget
        title="Blood Pressure"
        current_value="120/80 mmHg"
        status="Normal"
        className="text-red-500"
        />
      <VitalsWidget
        title="Heart Rate"
        current_value="72 bpm"
        status="Normal"
        className="text-yellow-500"
        />
      <VitalsWidget
        title="pulse"
        current_value="69"
        status="Normal"
        className="text-rose-500"
      />
      <VitalsWidget
        title="Body Temperature"
        current_value="98.6°F"
        status="Normal"
        className="text-green-500"
        />
      <VitalsWidget
        title="Oxygen Saturation"
        current_value="98%"
        status="Normal"
        className="text-orange-500"
        />
      <VitalsWidget
        title="Respiratory Rate"
        current_value="16"
        status="Normal"
        className="text-purple-500"
        />
      <VitalsWidget
        title="Ph"
        current_value="8"
        status="Normal"
        className="text-pink-500"
        />
  </>
  );
}
