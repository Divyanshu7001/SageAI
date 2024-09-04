import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Context } from "../../main.jsx";
export default function Dashboard() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const location = useLocation();
  const { userData } = location.state || {};
  //console.log(userData);
  console.log(isAuthenticated);
  
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get the email from sessionStorage
    const email = sessionStorage.getItem("userEmail");
    // Set the email in profileData if it exists
    if (email) {
      setProfileData((prevState) => ({
        ...prevState,
        email: email,
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data logic here
    console.log("Profile data saved:", profileData);

    // Set profile data and image in sessionStorage for this session
    sessionStorage.setItem("profileData", JSON.stringify(profileData));
    if (image) {
      sessionStorage.setItem("profileImage", image);
    }

    // Redirect to the home page
    navigate("/", { replace: true });
  };

  return (
    <div className="container mx-auto p-6 bg-black text-white">
      <div className="flex flex-col items-center mb-12 mt-24">
        <label htmlFor="profile-pic">
          <div className="w-32 h-32 bg-gray-700 rounded-full overflow-hidden cursor-pointer border border-gray-600">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Upload
              </div>
            )}
          </div>
        </label>
        <input
          id="profile-pic"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">
            First Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.firstName}
            onChange={handleInputChange}
            className="w-full border border-gray-600 px-3 py-2 rounded text-white bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.lastName}
            onChange={handleInputChange}
            className="w-full border border-gray-600 px-3 py-2 rounded text-white bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-600 px-3 py-2 rounded text-white bg-gray-800"
            readOnly
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2">
            Password
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.password}
            onChange={handleInputChange}
            className="w-full border border-gray-600 px-3 py-2 rounded text-white bg-gray-800"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
