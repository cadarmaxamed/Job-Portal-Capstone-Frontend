
import React from 'react';

const MainContent = ({ jobListings }) => {
  return (
    <main className="py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Featured Job Listings</h1>
        <div className="grid grid-cols-3 gap-4">
          {/* Map over job listings and render each as a card */}
          {jobListings.map(job => (
            <div key={job.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">{job.jobTitle}</h2>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <p className="text-gray-600 mb-2">{job.jobDescription}</p>
              <p className="text-gray-600 mb-2">{job.skillsRequired}</p>
              <p className="text-gray-600 mb-2">{job.postedDate}</p>
              <p className="text-gray-600 mb-2">{job.experienceLevel}</p>

             
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
