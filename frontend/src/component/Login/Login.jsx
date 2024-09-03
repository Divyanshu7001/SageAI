import React, { useState, useContext } from "react";
import BtnWhite from "../utility/BtnWhite.jsx";
import Register from "./Register.jsx";
import { Context } from "../../main.jsx";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  console.log(isAuthenticated);

  const navigateTo = useNavigate();
  console.log(import.meta.env.VITE_BACKEND_URI);

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URI}/v1/api/user/loginUser`,
        {
          email,
          password,
          confirmPassword,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("isAuthenticated", true);
        setIsAuthenticated(true);
        console.log(res.data.user);

        navigateTo("/dashboard", { state: { userData: res.data.user } });
        setEmail("");
        setPassword("");
        setconfirmPassword("");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle the form between login and register
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      {/* Image banner */}
      <div className="lg:w-1/2 bg-[url('/sample-image.jpg')] bg-center bg-cover bg-no-repeat lg:block hidden"></div>

      {/* Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6">
        {isLogin ? (
          <form
            className="w-full max-w-sm bg-black text-white p-6 rounded-lg"
            onSubmit={handleLogin}
          >
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block bg-transparent border border-gray-600 px-4 py-2 rounded-md w-full text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block bg-transparent border border-gray-600 px-4 py-2 rounded-md w-full text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block mb-2">
                Confirm Password
              </label>
              <input
                required
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                className="block bg-transparent border border-gray-600 px-4 py-2 rounded-md w-full text-white"
              />
            </div>
            <div className="flex flex-col items-center mt-5">
              <BtnWhite type="submit" text="Login" />
            </div>
            <button
              onClick={toggleForm}
              className="text-xs block underline w-fit ml-auto mt-10 text-white"
            >
              Don't have an account? Register
            </button>
          </form>
        ) : (
          <Register />
        )}
      </div>
    </main>
  );
}
