import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobTypesPage = () => {
  const [jobTypes, setJobTypes] = useState([]);

  useEffect(() => {
    fetchJobTypes();
  }, []);

  const fetchJobTypes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/job-types');
      setJobTypes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching job types:', error);
    }
  };

  return (
    <div>
      <h1>Job Types</h1>
      <div>
        {jobTypes.map((jobType) => (
          <div key={jobType._id}>
            <h2>{jobType.position}</h2>
            <p>{jobType.description}</p>
            <p>Skills Required: {jobType.skills_required.join(', ')}</p>
            <p>Education Level: {jobType.education_level}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobTypesPage;
