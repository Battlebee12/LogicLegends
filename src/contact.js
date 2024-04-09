import React, { useState } from 'react';
import Navbar from './Navbar';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e.target); // Pass the form element to sendEmail function
    setSubmitted(true);
  };
  
  function sendEmail(form) {
    emailjs
      .sendForm('service_zsc0csh', 'template_pcmhr3g', form, 'WHlogMiA7euWcnLjq')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <div className="bg-white rounded-lg shadow-md p-10 mx-auto max-w-xl mt-10">
        <h2 className="mb-5 text-3xl font-bold text-blue-800">Contact Us</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
          </form>
        ) : (
          <p className="text-lg text-gray-700 mb-8">
            Thank you for your message! We will get back to you as soon as possible.
          </p>
        )}

        <div className="mt-10">
          <h3 className="mb-2 text-2xl font-semibold text-blue-800">Working Hours</h3>
          <p className="text-lg text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p className="text-lg text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
          <p className="text-lg text-gray-700">Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;


