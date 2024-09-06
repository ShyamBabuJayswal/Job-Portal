import React from 'react';
import LatestJobCart from './LatestJobCart';
import { useSelector } from 'react-redux';

function LatestJob() {
  // Change `store.jobs` to `store.job` to match the reducer name
  const { allJobs } = useSelector((state) => state.job);
  
  

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <= 0 ? (
          <span>Jobs not found</span>
        ) : (
          allJobs?.slice(0, 6).map((job) => (
            <LatestJobCart key={job._id} job={job} />
          ))
        )}
      </div>
    </div>
  );
}

export default LatestJob;
