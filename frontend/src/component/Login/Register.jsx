import React, { useContext, useState } from "react";
import BtnWhite from "../utility/BtnWhite.jsx";
import { Context } from "../../main.jsx";

export default function Register() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  console.log(isAuthenticated);

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle the form between login and register
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URI}/v1/api/user/createUser`,
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

  return (
    <>
      <form className="w-full max-w-sm bg-black text-white p-6 rounded-lg">
        <label htmlFor="firstName" className="">
          First Name
        </label>
        <input
          required
          type="text"
          id="Regemail"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter First Name"
          className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
        />
        <label htmlFor="lastName" className="">
          Last Name
        </label>
        <input
          required
          type="text"
          id="Regpassword"
          name="lastName"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
        />
        <label htmlFor="username" className="">
          Username
        </label>
        <input
          required
          type="text"
          id="Regpassword"
          name="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
        />
        <label htmlFor="email" className="">
          Email
        </label>
        <input
          required
          type="email"
          id="Regpassword"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
        />
        <label htmlFor="password" className="">
          Password
        </label>
        <input
          required
          type="password"
          id="Regpassword"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
        />
        <label htmlFor="avatar" className="">
          Avatar
        </label>
        <input
          required
          type="file"
          id="Regpassword"
          name="avatar"
          placeholder="Upload Avatar Image"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
        />

        <div className="flex flex-col items-center  justify-center mt-5">
          <BtnWhite type="submit" text="Register" />
        </div>
        <button
          onClick={toggleForm}
          className="text-xs block underline w-fit ml-auto mt-10 text-white"
        >
          Already have an Account?
        </button>
      </form>
    </>
  );
}
