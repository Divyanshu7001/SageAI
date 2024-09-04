import React from "react";
import BtnWhite from "../utility/BtnWhite.jsx";

export default function Register({
  registerData,
  handleRegisterChange,
  handleRegisterSubmit,
}) {
  return (
    <form
      onSubmit={handleRegisterSubmit}
      className="px-2 p-10 text-base content-center h-full"
    >
      <label htmlFor="email" className="">
        Email
      </label>
      <input
        required
        type="email"
        id="Regemail"
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
        id="Regpassword"
        name="password"
        value={registerData.password}
        onChange={handleRegisterChange}
        placeholder="Password"
        className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
      />

      <div className="flex flex-col items-center justify-center mt-5">
        <BtnWhite type="submit" text="Register" />
      </div>
    </form>
  );
}
