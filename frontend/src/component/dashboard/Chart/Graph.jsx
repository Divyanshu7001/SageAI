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


const Graph = (params) => {
  const data = {
    labels: params.labels || ["10:00", "10:30", "11:00", "11:30", "12:00"],
    datasets: [
      {
        label:params.labeltitle || "Heart Rate",
        data: params.data || [72, 75, 70, 74, 73],
        borderColor:  params.color || "#ff0000",
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
        text: params.title || "Heart Rate Over Time",
      },
    },
  };
  return (
    <div className="bg-white shadow rounded-lg p-4 h-fit">
      <Line data={data}  options={options} />
    </div>
  );
};

export default Graph;
