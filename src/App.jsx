// src/App.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';
import Header from './components/Header';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobPostingsPage from './pages/JobPostingsPage';
import AboutPage from './pages/AboutPage';
import linkedinJobs from './pages/LinkedlnJobs';
import LinkedinJobsPage from './pages/LinkedlnJobs';
<link rel="stylesheet" href="index.css"/>


const App = () => {
  // Function to fetch data from the backend for job postings
  const fetchJobPostings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/JobPostings');
      console.log(response.data); // Log the fetched data from the backend
    } catch (error) {
      console.error('Error fetching job postings data:', error);
    }
  };

  // Function to fetch data from the backend for job types

  // Call fetchData function for job postings when the component mounts
  React.useEffect(() => {
    fetchJobPostings();
  }, []);

  return (
   <>
      <div>
        <Header />
        <Menu />
        <div className="flex">
          <Navbar />
        <Routes>
            <Route path="*"  element={<HomePage/>} />
            <Route path="/HomePage" element={<HomePage/>} />
            <Route path="/JobPostings" element={<JobPostingsPage/>} />
            <Route path="*" element={<JobPostingsPage/>} />
            <Route path="/About" element={<AboutPage/>} />
            <Route path="*" element={<AboutPage/>} />
            <Route path="/LinkedlnJobs" element={<LinkedinJobsPage/>} />
            <Route path="*" element={<LinkedinJobsPage/>} />
            

       </Routes>
       
        </div>
        <Footer />
      </div>


    </>
  );
};

export default App;
