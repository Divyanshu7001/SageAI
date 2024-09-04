import React from "react";
import "../../assets/css/support.css"

export default function Circle(props) {

  return (
    <div className={`p-36 absolute w-fit rounded-full shadow-white shadow-2xl ${props.className} `} ></div>
  );
}
