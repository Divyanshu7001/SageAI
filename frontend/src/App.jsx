import React, { useEffect } from "react";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact"; 
import NavBar from "./component/layout/NavBar";
import Footer from "./component/layout/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./component/Login/Login";
import DashBoard from "./component/dashboard/DashBoard";

function AppWrapper() {
  const location = useLocation();
  const endpoint =['/Login','/Dashboard','/Contact','/Dashboard/Analytics',"/Dashboard/Settings",'/Dashboard/Overview']
  const titles = {
    '/': 'SageAi | Home',
    '/Contact': 'SageAi | Contact Us',
    '/Login': 'SageAi | Login',
    '/Dashboard/Overview': 'SageAi | Dashboard',
    '/Dashboard/Analytics': 'SageAi | Analytics',
    '/Dashboard/Settings': 'SageAi | Settings',
  };

  useEffect(() => {
    document.title = titles[location.pathname] || 'Default Title';
  }, [location.pathname]);

  return (
    <>
      {!["/Dashboard/Overview", "/Dashboard/Analytics","/Dashboard/Settings"].includes(location.pathname) && <NavBar />}
      <Routes>
        <Route exact key={'home'} path="/" element={<Home />} />
        <Route key={'Contact'} path="/Contact" element={<Contact />} />
        <Route key={'login'} path="/Login" element={<Login />} />
        <Route key={'dashboard'} path="/Dashboard/Overview" element={<DashBoard />} />
        <Route key={'dashboard'} path="/Dashboard/Analytics" element={<DashBoard />} />
        <Route key={'dashboard'} path="/Dashboard/Settings" element={<DashBoard />} />
      </Routes>
      {!endpoint.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}