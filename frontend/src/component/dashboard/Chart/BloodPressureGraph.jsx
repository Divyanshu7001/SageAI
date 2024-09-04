// src/components/widgets/BloodPressureGraph.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureGraph = (params) => {
  
  const data = {
    labels: ["10:00", "10:30", "11:00", "11:30", "12:00"],
    datasets: [
      {
        label: "Systolic",
        data:params.data1|| [120, 122, 118, 121, 119],
        borderColor: params.color1||"#0000ff",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Diastolic",
        data: params.data2||[80, 82, 79, 81, 80],
        borderColor: params.color2||"#00ff00",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Blood Pressure Over Time",
      },
    },
  };
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default BloodPressureGraph;
