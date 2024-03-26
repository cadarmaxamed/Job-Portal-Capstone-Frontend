// src/components/Navbar.js

import React, { useState } from 'react';

const Navbar = ({ onSort, onFilter }) => {
  const [sortBy, setSortBy] = useState('postedDate');
  const [filterOptions, setFilterOptions] = useState({
    postedDate: [],
    experienceLevel: []
  });

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    onSort(value);
  };

  const handleFilterChange = (e) => {
    const { name, checked, value } = e.target;
    const updatedOptions = { ...filterOptions };
    if (checked) {
      updatedOptions[name].push(value);
    } else {
      updatedOptions[name] = updatedOptions[name].filter(option => option !== value);
    }
    setFilterOptions(updatedOptions);
    onFilter(updatedOptions);
  };

  return (
    <div className="bg-gray-200 p-4">
      <form>
        <div className="flex items-center mb-4">
          <label htmlFor="sortBy" className="mr-2">Sort By:</label>
          <select id="sortBy" name="sortBy" value={sortBy} onChange={handleSortChange} className="p-2 border border-gray-300 rounded">
            <option value="postedDate">Posted Date</option>
            <option value="title">Title</option>
            <option value="skillsRequired">Skills Required</option>
          </select>
        </div>
        <div className="mb-4">
          <p>Filter By:</p>
          <label className="block">
            <input type="checkbox" name="postedDate" value="24 hours" onChange={handleFilterChange} />
            24 hours
          </label>
          <label className="block">
            <input type="checkbox" name="postedDate" value="7 days" onChange={handleFilterChange} />
            7 days
          </label>
          <label className="block">
            <input type="checkbox" name="postedDate" value="1 month" onChange={handleFilterChange} />
            1 month
          </label>
        </div>
        <div className="mb-4">
          <p>Experience Level:</p>
          <label className="block">
            <input type="checkbox" name="experienceLevel" value="entry" onChange={handleFilterChange} />
            Entry
          </label>
          <label className="block">
            <input type="checkbox" name="experienceLevel" value="senior" onChange={handleFilterChange} />
            Senior
          </label>
          <label className="block">
            <input type="checkbox" name="experienceLevel" value="mid" onChange={handleFilterChange} />
            Mid
          </label>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
