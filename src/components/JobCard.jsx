import React from 'react';
import moment from 'moment';
import { GoLocation } from 'react-icons/go';
import { Link } from 'react-router-dom';

const noLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png';

const JobCard = ({ job }) => {
  return (
    <Link
      to={`/job-detail/${job.id}`}
      className="w-full md:w-[30%] 2xl:w-[30%] bg-white flex flex-col justify-between shadow-lg rounded-md px-3 py-5 mb-6"
    >
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex gap-3">
          <img
            src={job?.logo || noLogo}
            alt={job?.name}
            className="w-14 h-14"
          />
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-lg font-semibold overflow-hidden leading-5">
              {job?.jobTitle}
            </h2>
          </div>
        </div>
        <div className="py-3">
          <p className="text-sm">
            {job?.jobDescription}
          </p>
          <p className="text-sm">
            Skills Required: {job?.skillsRequired.join(', ')}
          </p>
          <p className="text-sm">
            Posted: {moment(job?.postedDate).fromNow()}
          </p>
          <p className="text-sm">
            Experience Level: {job?.experienceLevel}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
