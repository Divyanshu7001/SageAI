import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Chart from "./Chart/Chart";
import Overview from "./widget/Overview";
import Settings from "./settings/Settings";

const Dashboard = () => {
  const localtion = useLocation();

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <div className="w-64 text-white p-4">
        <div className="fixed">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <ul>
            <li className="mb-2">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-orange-500 p-2 block rounded" : "text-white hover:text-orange-500 p-2 block rounded")}>
                Home
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/Dashboard/Overview"

                className={({ isActive }) => (isActive ? "text-orange-500 p-2 block rounded" : "text-white hover:text-orange-500 p-2 block rounded")}
              >
                Overview
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/Dashboard/Analytics"
                className={({ isActive }) => (isActive ? "text-orange-500 p-2 block rounded" : "text-white hover:text-orange-500 p-2 block rounded")}
              >
                Analytics
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/Dashboard/Settings"
                className={({ isActive }) => (isActive ? "text-orange-500 p-2 block rounded" : "text-white hover:text-orange-500 p-2 block rounded")}
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-coreBg">
        {localtion.pathname === "/Dashboard/Overview" && <Overview />}
        {localtion.pathname === "/Dashboard/Analytics" && <Chart />}
        {localtion.pathname === "/Dashboard/Settings" && <Settings />}
      </div>
    </div>
  );
};

export default Dashboard;
