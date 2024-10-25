import { Badge } from '../components/ui/badge';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from '@/utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from '@/redux/jobSlice';
import { toast } from 'sonner';

function JobDescription() {
  const { singleJob } = useSelector(store => store.job);
  const { user } = useSelector(store => store.auth);
  const userId = user ? user._id : null;

  const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === userId) || false;
  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    console.log("Job ID:", jobId);
    try {
      const res = await axios.post(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {}, { withCredentials: true });
      
      console.log(res.data);  // Check the response
      if (res.data.success) {
        setIsApplied(true);
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: userId }],
        };
        dispatch(setSingleJob(updatedSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };
  
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
        console.log("Job data:", res.data); // Log the response to verify the data structure
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(res.data.job.applications?.some(application => application.applicant === userId));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, userId]);

  return (
    <div className='max-w-7xl mx-8 my-10'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-xl'>{singleJob?.title || 'Loading...'}</h1>
          <div className='flex items-center gap-2 mt-4'>
            <Badge className='text-blue-700 font-bold' variant='ghost'>
              {singleJob?.position || 'N/A'} Positions
            </Badge>
            <Badge className='text-[#7209b7] font-bold' variant='ghost'>
              {singleJob?.jobType || 'N/A'} LPA
            </Badge>
            <Badge className='text-[#F83002] font-bold' variant='ghost'>
              {singleJob?.salary || 'N/A'}
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}
        >
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
      <div className='my-4'>
        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title || 'N/A'}</span></h1>
        <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location || 'N/A'}</span></h1>
        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description || 'N/A'}</span></h1>
        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience || 'N/A'}</span></h1>
        <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary || 'N/A'} LPA</span></h1>
        <h1 className='font-bold my-1'>Total Applications: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length || 0}</span></h1>
        <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt ? singleJob.createdAt.split('T')[0] : 'N/A'}</span></h1>
      </div>
    </div>
  );
}

export default JobDescription;
