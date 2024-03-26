// src/components/MainContent.js

import React from 'react';

const MainContent = () => {
  // Dummy data for job listings
  const jobListings = [
        {
          "jobTitle": "Senior Software Engineer",
          "jobDescription": "Leading the design and development of complex software systems. Mentoring junior team members and driving technical excellence.",
          "company": "Microsoft",
          "postedDate": "2024-03-14",
          "skillsRequired": [
            "Java",
            "Python",
            "C++",
            "JavaScript",
            "Distributed Systems"
          ],
          "experienceLevel": "Senior Level"
        },
        {
          "jobTitle": "Senior Software Engineer",
          "jobDescription": "Leading the design and development of complex software systems. Mentoring junior team members and driving technical excellence.",
          "company": "Microsoft",
          "postedDate": "2024-03-14",
          "skillsRequired": [
            "Java",
            "Python",
            "C++",
            "JavaScript",
            "Distributed Systems"
          ],
          "experienceLevel": "Senior Level"
        },
        {
          "jobTitle": "Senior Software Engineer",
          "jobDescription": "Leading the design and development of complex software systems. Mentoring junior team members and driving technical excellence.",
          "company": "Microsoft",
          "postedDate": "2024-03-14",
          "skillsRequired": [
            "Java",
            "Python",
            "C++",
            "JavaScript",
            "Distributed Systems"
          ],
          "experienceLevel": "Senior Level"
        },
        {
          "jobTitle": "Senior Software Engineer",
          "jobDescription": "Leading the design and development of complex software systems. Mentoring junior team members and driving technical excellence.",
          "company": "Microsoft",
          "postedDate": "2024-03-14",
          "skillsRequired": [
            "Java",
            "Python",
            "C++",
            "JavaScript",
            "Distributed Systems"
          ],
          "experienceLevel": "Senior Level"
        },
        {
          "jobTitle": "Senior Software Engineer",
          "jobDescription": "Leading the design and development of complex software systems. Mentoring junior team members and driving technical excellence.",
          "company": "Microsoft",
          "postedDate": "2024-03-14",
          "skillsRequired": [
            "Java",
            "Python",
            "C++",
            "JavaScript",
            "Distributed Systems"
          ],
          "experienceLevel": "Senior Level"
        },
        {
          "jobTitle": "Senior Software Engineer",
          "jobDescription": "Leading the design and development of complex software systems. Mentoring junior team members and driving technical excellence.",
          "company": "Microsoft",
          "postedDate": "2024-03-14",
          "skillsRequired": [
            "Java",
            "Python",
            "C++",
            "JavaScript",
            "Distributed Systems"
          ],
          "experienceLevel": "Senior Level"
        },
        {
          "jobTitle": "Senior Software Engineer",
          "jobDescription": "Leading the design and development of complex software systems. Mentoring junior team members and driving technical excellence.",
          "company": "Microsoft",
          "postedDate": "2024-03-14",
          "skillsRequired": [
            "Java",
            "Python",
            "C++",
            "JavaScript",
            "Distributed Systems"
          ],
          "experienceLevel": "Senior Level"
        },
        {
          "jobTitle": "Senior Software Engineer",
          "jobDescription": "Leading the design and development of complex software systems. Mentoring junior team members and driving technical excellence.",
          "company": "Microsoft",
          "postedDate": "2024-03-14",
          "skillsRequired": [
            "Java",
            "Python",
            "C++",
            "JavaScript",
            "Distributed Systems"
          ],
          "experienceLevel": "Senior Level"
        },
        {
          "jobTitle": "Senior Software Engineer",
          "jobDescription": "Leading the design and development of complex software systems. Mentoring junior team members and driving technical excellence.",
          "company": "Microsoft",
          "postedDate": "2024-03-14",
          "skillsRequired": [
            "Java",
            "Python",
            "C++",
            "JavaScript",
            "Distributed Systems"
          ],
          "experienceLevel": "Senior Level"
        }
  ];

  return (
    <main className="py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Featured Job Listings</h1>
        <div className="grid grid-cols-3 gap-4">
          {/* Map over job listings and render each as a card */}
          {jobListings.map(job => (
            <div key={job.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <p className="text-gray-600">{job.location}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
