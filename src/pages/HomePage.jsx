import React from 'react';
import MainContent from '../components/MainContent';

const HomePage = ({ jobListings }) => {
  return (
    <div>
      <h1>Welcome to TechJobs For All</h1>
      <MainContent jobListings={jobListings} />
    </div>
  );
};

export default HomePage;
