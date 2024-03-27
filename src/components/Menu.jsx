// src/components/Menu.js

import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="bg-gray-200 text-gray-800 flex flex-col justify-center items-center p-4">
      <Link to="/" className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md mb-2">Home</Link>
      <Link to="/JobPostings" className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md mb-2">Job Postings</Link>
      <Link to="/about" className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md mb-2">About US</Link>
    </div>
  );
};

export default Menu;

