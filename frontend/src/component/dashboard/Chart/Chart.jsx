import React, { useState } from "react";
import Graph from "./Graph";
import BloodPressureGraph from "./BloodPressureGraph";
import Widget from "../widget/Widget";
import Heading from "../../utility/Heading";

export default function Chart(parmas) {
    const [data,setData ] = useState(parmas.data)
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 ">
        <Widget/>
        <div className="md:col-span-2 lg:col-span-3">
          <Heading
        text="Analytical section :"
        size="text-2xl mb-6 text-start font-semibold md:col-span-2 mt-14 lg:col-span-3"
      />
        </div>
        <Graph labels="" labeltitle="Heart Rate" data="" color="red" title="Heart Rate over time"/>
        <Graph labels="" labeltitle="Pulse" data="" color="blue" title=""/>
        <BloodPressureGraph color1="purple" color2="black"/>
        <Graph labels="" labeltitle="Body Temperature" data="" color="orange" title="Body Temperature over time"/>
        <Graph labels="" labeltitle="Oxygen Saturation" data="" color="maroon" title="Oxygen Saturation over time"/>
        <Graph labels="" labeltitle="Respiratory Rate" data="" color="teal" title="Respiratory Rate Over Time"/>
        <Graph labels="" labeltitle="Ph Rate" data="" color="violet" title="Ph Rate Over Time"/>
        
    </div>
  );
}
