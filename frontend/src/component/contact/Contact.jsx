import React, { useState } from "react";
import BtnWhite from "../utility/BtnWhite";
import Heading from "../utility/Heading";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <main className="p-24 content-center">
      <Heading text="Contact Us" />
      <div className="grid grid-cols-2 items-center mt-10 gap-10">
        <div className="bg-[url('https://u7.uidownload.com/vector/523/828/vector-contact-me-illustration-svg-eps.jpg')] bg-center bg-cover min-h-96"></div>
        {submitted ? (
          <p className="text-green-600">
            Thank you for your message! We will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address..."
                value={formData.email}
                onChange={handleChange}
                className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Content"
                onChange={handleChange}
                className="block  bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full "
                rows="5"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <BtnWhite type="submit" text="Send" />
            </div>
          </form>
        )}
      </div>
    </main>
  );
};

export default Contact;
