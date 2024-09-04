import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const ControlPanelSettings = () => {
  const navigate = useNavigate()
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    username: "",
    email: "",
    password: "",
    darkMode: false,
    autoUpdate: true,
    notifications: true,
    language: "en",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handelPassword=()=>{
    setShowSettings(showSettings?false:true)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings:", settings);
  };
  const handelDel =async (e)=>{
    e.preventDefault()
    confirm('Are you sure for Deleting your account?')

    try {

      const response = await axios.delete(`${import.meta.env.VITE_BACKEND_USER_URI}/deleteUser`, {
         // Replace this with the appropriate user identifier
         "_id": localStorage.getItem('userId')
      });
  
      // Handle the response as needed
      alert('User deleted successfully:', response.data);
      localStorage.removeItem('userId')
      navigate('/Login')
    } catch (error) {
      // Handle the error as needed
      console.error('Error deleting user:', error.response ? error.response.data : error.message);
    }
    
  }
  return (
    <div className=" p-6 w-full">
      <h1 className="text-3xl font-semibold  mb-6">Settings</h1>

      {/* Account Settings */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="text-lg font-medium  mb-2">Account Settings</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium ">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={settings.username}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={settings.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <button onClick={handelPassword} className="border p-4 rounded-lg hover:text-orange-500 hover:border-orange-500">Change Password</button>
          {showSettings && (
            <>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={settings.password}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter a new password"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="block text-sm font-medium "
                >
                  confirm password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  value={settings.password}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Retype password"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Preferences */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="text-lg font-medium  mb-2">Preferences</h3>
        <div className="space-y-4">
        
          <div className="flex items-center">
            <input
              id="notifications"
              name="notifications"
              type="checkbox"
              checked={settings.notifications}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600  rounded"
            />
            <label
              htmlFor="notifications"
              className="ml-2 block text-sm font-medium "
            >
              Enable Notifications
            </label>
          </div>
        </div>
      </div>

      {/* Language Settings */}
      <div className="pb-4 mb-4">
        <h3 className="text-lg font-medium  mb-2">Language Settings</h3>
        <div className="flex items-center justify-between">
          <label htmlFor="language" className="block text-sm font-medium ">
            Language
          </label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="mt-1 block w-1/2 p-2 border border-zinc-400 bg-transparent rounded-md  sm:text-sm"
          >
            <option  className="bg-altcoreBg" value="en">English</option>
            <option  className="bg-altcoreBg" value="es">Spanish</option>
            <option  className="bg-altcoreBg" value="fr">French</option>
            <option  className="bg-altcoreBg" value="de">German</option>
          </select>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-6">
        <button
          type="submit" onSubmit={handleSubmit}
          className="w-fit bg-transparent border py-2 px-4 rounded-md shadow-sm hover:text-zinc-700 hover:bg-green-500 hover:border-green-500  "
        >
          Save Settings
        </button>
        <button
          type="submit"
          className="w-fit bg-transparent self-end border py-2 px-4 rounded-md shadow-sm hover:bg-white hover:text-zinc-700  "
        >
          Logout
        </button>
        <button
          type="submit" onClick={handelDel} className="w-fit bg-transparent border py-2 px-4 rounded-md shadow-sm hover:text-red-500 hover:bg-white "
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default ControlPanelSettings;
