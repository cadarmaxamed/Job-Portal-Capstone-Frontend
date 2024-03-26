import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobPostingsPage = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    fetchJobPostings();
  }, []);

  const fetchJobPostings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/job-postings');
      setJobPostings(response.data);
    } catch (error) {
      console.error('Error fetching job postings:', error);
    }
  };

  return (
    <div>
      <h1>Job Postings</h1>
      {jobPostings.map((job) => (
          <div key={job._id}>
            <h2>{job.jobTitle}</h2>
            <p>{job.jobDescription}</p>
            <p>Company: {job.company}</p>
            <p>Posted Date: {job.postedDate}</p>
            {/* Add more details as needed */}
          </div>
      ))}
    </div>
  );
};

export default JobPostingsPage;
