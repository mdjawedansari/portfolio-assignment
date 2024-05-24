"use client"
import { useState } from 'react';
// components/Contact.js
const Contact = () => {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (res.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    };

    return (
      <section id="contact" className="py-16 ">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 font-bold"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 font-bold"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 font-bold"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  