import React from "react";

export default function Conditions(params) {
  return (
    <h1 className="text-lg  font-bold mb-6 mr-5 inline-block text-zinc-800 p-2 px-2 bg-white">
      {params.condition} :
      <span className="text-orange-500"> {params.state===1?'Positive':'Negetive'} </span>
    </h1>
  );
}
