import React, { useState } from 'react';
import BtnWhite from '../utility/BtnWhite.jsx';
import Heading from '../utility/Heading.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <Heading text="Contact Us"/>
      {submitted ? (
        <p className="text-green-600 mt-4">Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full mt-6">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name'
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
              placeholder='Email Address...'
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
              placeholder='Content'
              onChange={handleChange}
              className="block bg-transparent border border-zinc-500 px-4 py-2 rounded-md w-full"
              rows="5"
              required
            ></textarea>
          </div>
          <div className='flex items-center justify-center mt-6'>
            <BtnWhite type="submit" text="Send"/>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;