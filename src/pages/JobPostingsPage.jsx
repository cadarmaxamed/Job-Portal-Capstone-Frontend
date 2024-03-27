import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import axios from 'axios';


const JobPostingsPage = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    fetchJobPostings();
  }, []);

  const fetchJobPostings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/JobPostings');
      setJobPostings(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching job postings:', error);
    }
  };

  return (
    <div>
      <h1>Job Postings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render JobCard component for each job posting */}
        {jobPostings.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobPostingsPage;

