import React, { useRef, useState } from "react";
import axios from "axios";
import BtnWhite from "../utility/BtnWhite.jsx";
import { useNavigate } from "react-router-dom";
// import Register from "./Register";

export default function Login() {
  const navigate = useNavigate();
  const LoginForm = useRef();
  const RegForm = useRef();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    gender: "",
  });

  const ChangeToRegister = () => {
    LoginForm.current.classList.toggle("hidden");
    RegForm.current.classList.toggle("hidden");
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/v1/api/user/loginUser",
        loginData
      );
      console.log("Login successful:", response.data);
      // Handle successful login (e.g., redirect, display message)

      localStorage.setItem("userId", response.data.user._id);
      navigate("/Dashboard/Overview");
    } catch (error) {
      console.error("Login error:", error.response.data);
      // Handle login error (e.g., display error message)
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/v1/api/user/createUser",
        registerData
      );
      alert("Registration successful:", response);
      // Handle successful registration (e.g., redirect, display message)
      navigate("/Dashboard/Overview");
    } catch (error) {
      console.error("Registration error:", error.response.data);
      // Handle registration error (e.g., display error message)
    }
  };

  return (
    <main className="h-screen container m-auto p-10 my-10 grid grid-cols-2 gap-5 relative">
      {/* Banner */}
      <div className="h-full content-center bg-[url(https://th.bing.com/th/id/R.a1b845ebd592d015e011382624077e2e?rik=ymu5O%2ftMQJctww&riu=http%3a%2f%2fshopsmarts.ai%2fwp-content%2fuploads%2f2021%2f09%2fshopsmarts-ai-important-characteristics-support-chatbot-1000.jpg&ehk=M8SwSI0orvwX5nU3dc%2fLJcc6JQedTlD1UV4HTl793P0%3d&risl=&pid=ImgRaw&r=0)] bg-center bg-cover bg-no-repeat"></div>

      {/* Forms */}
      <div>
        <form
          ref={LoginForm}
          onSubmit={handleLoginSubmit}
          className="px-2 p-10 text-base content-center h-full"
        >
          <div>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              placeholder="Email Address"
              className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              placeholder="Password"
              className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-5">
            <BtnWhite type="submit" text="Login" />
          </div>
          <button
            type="button"
            onClick={ChangeToRegister}
            className="text-xs block underline w-fit ml-auto mt-10"
          >
            Don't have an Account? Register
          </button>
        </form>

        <form
          ref={RegForm}
          onSubmit={handleRegisterSubmit}
          className="px-2 p-10 text-base hidden"
        >
          <div className="">
            <label htmlFor="firstName" className="">
              First Name
            </label>
            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              value={registerData.firstName}
              onChange={handleRegisterChange}
              placeholder="First Name"
              className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="">
            <label htmlFor="lastName" className="">
              Last Name
            </label>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              value={registerData.lastName}
              onChange={handleRegisterChange}
              placeholder="Last Name"
              className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="">
            <label htmlFor="username" className="">
              Your Username
            </label>
            <input
              required
              type="text"
              id="username"
              name="username"
              value={registerData.username}
              onChange={handleRegisterChange}
              placeholder="Name"
              className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
            />
          </div>

          <label htmlFor="gender" className="">
            Gender
          </label>
          <input
            required
            type="text"
            id="gender"
            name="gender"
            value={registerData.gender}
            onChange={handleRegisterChange}
            placeholder="Enter Gender"
            className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
          />

          <label htmlFor="email" className="">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={registerData.email}
            onChange={handleRegisterChange}
            placeholder="Email Address"
            className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
          />

          <label htmlFor="password" className="">
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            value={registerData.password}
            onChange={handleRegisterChange}
            placeholder="Password"
            className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
          />

          <div className="flex flex-col items-center justify-center mt-5">
            <BtnWhite type="submit" text="Register" />
          </div>
          <button
            type="button"
            onClick={ChangeToRegister}
            className="text-xs block underline w-fit ml-auto mt-10"
          >
            Already have an Account?
          </button>
        </form>
      </div>
    </main>
  );
}
