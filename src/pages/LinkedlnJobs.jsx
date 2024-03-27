import React, { useState, useEffect } from 'react';
import axios from "axios";

const LinkedinJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const linkedinJobs = {
        method: 'GET',
        url: 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '8b0aa17787mshdffc7c486f1fc2cp1d39d4jsn6e5047e57bbd',
          'X-RapidAPI-Host': 'linkedin-jobs-scraper-api.p.rapidapi.com'
        },
        params: { title: 'Software Engineer', location: 'Berlin', rows: 100 }
      };

      try {
        const response = await axios.request(linkedinJobs);
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>LinkedIn Jobs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {jobs.map(job => (
            <li key={job.jobId}>
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LinkedinJobsPage;
