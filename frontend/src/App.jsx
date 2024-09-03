import React from "react";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import NavBar from "./component/layout/NavBar";
import Footer from "./component/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import { ToastContainer } from "react-toastify";
import Dashboard from "./component/dashboard/Dashboard"; // Import the Dashboard component

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          {/* Dashboard Route */}
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
}
