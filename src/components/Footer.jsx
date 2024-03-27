import React, { useState } from 'react';

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or display confirmation message
    console.log(formData);
    // Reset form fields
    setFormData({ name: '', email: '', question: '' });
    // Close the contact form popup
    setShowContactForm(false);
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Social media links */}
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        {/* Contact us button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setShowContactForm(true)}
        >
          Contact Us
        </button>
        {/* Copyright and logo */}
        <div className="flex items-center space-x-2">
          <span>&copy; 2024 TechJobs</span>
        </div>
      </div>
      {/* Contact form popup */}
      {showContactForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md max-w-md">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">Please Fill out one form per question or concern</p>
            <p className="mb-4">I appreciate your feedback!</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="question" className="block font-medium mb-1">Question/Message</label>
                <textarea id="question" name="question" value={formData.question} onChange={handleChange} rows="4" className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                <button type="button" onClick={() => setShowContactForm(false)} className="ml-2 text-gray-600">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

