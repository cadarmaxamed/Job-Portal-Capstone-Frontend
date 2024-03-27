import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="flex bg-blue-500">
      <Link to="/" className="flex-grow py-2 px-4 text-white font-semibold rounded-md mb-2">Home</Link>
      <Link to="/JobPostings" className="flex-grow py-2 px-4 text-white font-semibold rounded-md mb-2">Job Postings</Link>
      <Link to="/LinkedlnJobs" className="flex-grow py-2 px-4 text-white font-semibold rounded-md mb-2">Linkedln Jobs</Link>
      <Link to="/about" className="flex-grow py-2 px-4 text-white font-semibold rounded-md mb-2">About Us</Link>
    </div>
  );
};

export default Menu;


