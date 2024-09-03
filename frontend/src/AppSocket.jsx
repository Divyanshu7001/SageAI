import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function App() {
  const [msg, setmsg] = useState("");
  const socket = io("http://localhost:3000/", {
    autoConnect: false, // Prevents auto connection
  });

  useEffect(() => {
    socket.connect(); // Manually connect the socket
    socket.on("connect", () => {
      setmsg(`Connected with ${socket.id}`);
    });

    socket.on("welcome", (e) => {
      console.log(e);
    });

    // Cleanup to close the socket when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <div className="">
      <h1>{msg}</h1>
    </div>
  );
}
